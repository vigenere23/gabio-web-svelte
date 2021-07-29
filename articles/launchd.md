# What `launchd` doesn't tell you

###### Creating scheduled tasks on Linux is quite simple. If you want to launch a program on user login, for example, you'll simply need to create a `.desktop` file and put it inside the `~/.config/autostart` folder. On MacOS, that's an entirely other story... The all mighty `launchd` tool is poorly documented and unintuitive to use... so here are a few tips to help you get started!

## What is `launchd` anyway?

## Launch `agent` vs. `daemon`

## Step 1 : Creating the launch agent `.plist` file

A `.plist` file is a type of key/value paired configuration file, just like `JSON`, `YAML` or `XML`. It supports strings, booleans, arrays and even dictionnaries. 

The launch agent configuration file, however, has some specific keys that needs to be defined along with some important optional ones. Here is a standard, very minimal `launchd` file: 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>ca.demo.hello-world</string>

    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>echo</string>
        <string>hello, world!</string>
    </array>
</dict>
</plist>
```

Here is an explanation of each part of the file:

- The first 2 lines are mendatory and defines the schema and version of the file.
- The `plist` tag wraps the content of the configuration, just like an `html` tag.
- The `dict` tag is what allows the declaration of key/value pairs. They can be nested too.
- `<key>Label</key>` : This is a mendatory key/value. It defines the `id` of your task (agent or daemon). It should be unique amongst all of the other existing tasks, inclusing those from the system. For that reason, it is highly recommended to name them like `<org/user>.<project>.<task>`.
- `<key>ProgrammingArguments</key>` : This array is also mendatory and defines the arguments to use for calling the underlying program. If no `<key>Program</key>` key/value is present, the first element of the programming arguments will be used as the program to run. Thus, in the example above, `/bin/bash` is the program, `echo` is the first argument and `hello, world!` the second.

### Optional (but important) fields

The file above will not do much. In fact, it's safe to say that really nothing will happen, since the task will run in the background and print in the void. Two very important keys to use for debugging are `StandardOutPath` and `StandardErrorPath`. Their values are strings and should point on a file inside which the outputs from your program will be printed. Thus, if any error might occur, or if anything is printed to the console, it will also be written to that file. 

## Step 2 : Loading the agent with `launchctl`

## Step 3 : Additional tips for more advanced tasks

### Using predefined environment variables

As you'll most probably notice, when a script or command is executed from a launch agent, none of the standard environment variables (like `$HOME`, `$USER`, etc.) will be available. This is because those are normally created from the `.*rc` file when creating a terminal session. Otherwise, they do not exist. Therefore, if used inside the called script or the `.plist` file, they will render as empty strings, thus most probably craching your program.

To overcome this behaviour, the best thing to do is to create a `.plist` *template* file and generate the real one dynamically by populating the missing and much needed environment variables. Here are the steps to achieve such a task :

1. Create a `<something>.plist.template` file with the content of your original `.plist` file
2. Add the key `EnvironmentVariables` with a `dict` value that will contain the key/value pairs of the environment variables *that needs to be accessed by the underlying program*. Add each one that's needed like this: `<key>ENV_VAR</key><string>$ENV_VAR</string>`. For example, for accessing the `$HOME` variable, write the pair `<key>HOME</key><string>$HOME</string>`. If you only use those variables for the `.plist` file directly, simply use them as is (like for the path `$HOME/Pictures`).
3. To generate the `.plist` file with the rendered env variables, run the command `cat <something>.plist.template | envsubst > <something>.plist`. The command `envstub` will replace every occurances of env variables (starting with `$`) by their corresponding values (like `/Users/bob`).

### Running the task as the current user (and not `root`)

Since `launchctl` often must be run as root, that means your underlying script will also run as root. Therefore, every file created by your program will have `root` ownership with restricted write (and maybe read) permissions. That means those files will need admin access at least for deletion, modification and moving, which will be quite annoying for the user.

To overcome this. there's a special key, `UserName`, that you can add to the `.plist` file, and you may want to set its value to the current user (P.S.: you can use the `$USER` variable to render the current user with the template technique mentioned before).

> **WARNING** : If running as the current user, make sure that the log files (if present) are **not** located inside a root-owned directory (like `/var/log`) or the task might fail without any explanation.

### Changing a wallpaper programatically

## Conclusion

For a `.plist` file example (template version), there's one well defined [here](https://github.com/vigenere23/unsplash/blob/main/resources/ca.vigenere23.unsplash.plist.template) that covers everything this article mentions.

### References

For complementary and more detailed informations, here are some neat places to look at:

- *Too simple tutorial* : [A launchd Tutorial](https://www.launchd.info/)
- *Description of each `launchd` `.plist` fields* : [launchd man page](https://www.manpagez.com/man/5/launchd.plist/)
