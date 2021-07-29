import fs from 'fs'
import path from 'path'
import {
  MarkdownTranspiler,
  FileCreatorSvelte3
} from '@gabio/markdown-transpiler'
import { GioSvelteMarkdownParser } from '@gabio/design-svelte/lib/markdown'
import { fromKebabCasetoPascalCase } from '@gabio/design-svelte/lib/strings'

const inputPattern = path.resolve(__dirname, '../articles') + '/**/*.md'
const outputDir = path.resolve(__dirname, '../src/data/articles')

const markdownCompiler = new MarkdownTranspiler({
  parser: new GioSvelteMarkdownParser(),
  fileCreator: new FileCreatorSvelte3()
})

markdownCompiler.transpileFiles(inputPattern, outputDir).then(() => {
  let articleIndexContent = ''
  const articlesIndexPath = path.join(outputDir, 'index.ts')
  const transpiledFiles = fs.readdirSync(outputDir)

  transpiledFiles
    .filter((fileName) => fileName.endsWith('.svelte'))
    .forEach((fileName) => {
      const articleName = fileName.split('.').slice(0, -1).join('.')
      const exportName = fromKebabCasetoPascalCase(articleName)
      articleIndexContent += `export { default as ${exportName} } from './${fileName}'\n`
    })

  fs.writeFileSync(articlesIndexPath, articleIndexContent)
})
