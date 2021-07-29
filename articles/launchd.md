# A (real) simple `launchd` tutorial

###### Creating scheduled tasks on Linux is quite simple. If you want to launch a program on user login, for example, you'll simply need to create a `.desktop` file and put it inside the `~/.config/autostart` folder. On MacOS, that's an entirely other story... The all mighty `launchd` tool is poorly documented and unintuitive to use... so here are a few tips to help you get started!

## What is `launchd` anyway?

## Launch `agent` vs. `daemon`

## Step 1 : Creating the `.plist` file

## Step 2 : Loading the agent with `launchctl`

## Step 3 : Additional tips for more advanced tasks

### Using predefined environment variables

### Running the task as the current user (and not `root`)

> **WARNING** : If running as the current user, make sure that the log files (if present) are **not** located inside a root-owned directory (like `/var/log`) or the task might fail without any explanation.

### Changing a wallpaper programatically
