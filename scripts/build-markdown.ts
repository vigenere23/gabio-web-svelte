import path from 'path'
import {
  MarkdownTranspiler,
  SvelteFileCreator
} from '@gabio/markdown-transpiler'
import { GioSvelteMarkdownParser } from '@gabio/design-svelte/lib/markdown'

const inputPattern = path.resolve(__dirname, '../articles') + '/**/*.md'
const outputDir = path.resolve(__dirname, '../src/data/articles')

const markdownCompiler = new MarkdownTranspiler({
  inputPattern,
  outputDir,
  parser: new GioSvelteMarkdownParser(),
  fileCreator: new SvelteFileCreator()
})

markdownCompiler.startCompilation()
