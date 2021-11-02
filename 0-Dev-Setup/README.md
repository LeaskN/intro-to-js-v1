![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)



## Setting Up Your Development Environment

### Objectives
* Gaining access to GitHub & the class notes
* Installing the software needed for class & development
* Learn a little bit about our new software
* Create a file structure for class using a CLI

## Accessing class notes:
* The class notes are in [a private repository](https://github.com/Nebula-Academy/SEV5-Curriculum/). 
* You'll need to create a GitHub Account & be [added to the team](https://github.com/orgs/Nebula-Academy/teams/sev5/members?add=true) to view the notes
* Ultimately GitHub will be used for MUCH more than this

## Software To Install
* For the remainder of the day we're going to view a students screen who has never coded before
* [Google Chrome](https://www.google.com/chrome/) - a popular Web Browser used by developers - make this your default web browser
* [Homebrew](https://brew.sh/) (for Mac only)
	- Copy this entire terminal command (its also on the website): 
    -  `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
  - Open your Terminal application (comes with all Macs) go to the root of the user - type in the following command `cd ~` and then press enter
    - paste in `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"` and press enter  
* [Visual Studio Code](https://code.visualstudio.com/) (referred to as VS code)
  - When installing:
    - Accept the agreement > click next
    - Accept default file path > click next
    - Accept Start menu option > click next
    - Check all boxes > click next
    - Install
  - Setup:
    - We reccomend dark or high contrast > next section > next section > mark done
* [Git](https://git-scm.com/downloads) (This will install Git Bash for Windows users - This will add access to git from the terminal for Mac users).
  - Select appropriate device > Should automatically start downloading (if not click 64 bit)
  - Click the download
  - Yes, allow changes
  - Installing:
    - Next
    - Accept default path > Next
    - Check all but bottom 2 > Next
    - Accept Git > Next
    - Default editor: Dropdown > Use Visual Studio Code as Git's default editor > Next
    - Adjusting Name: Override with main > next
    - Adjusting PATH: Reccomended > next
    - SSH: Use bundled > next
    - HTTPS: OpenSSL library > next
    - Configuring the line: > Checkout as-is, commit Unix-style line endings > next
    - Confugre terminal emulator: Use MinTTY > next
    - Default behaviour of pull: Default > next
    - Credential helper: Git Credential Manager Core > next
    - Extra options: Enable file system caching > next
    - Experimental: none > Install
  - Check git version: `git --version`
* [Node.js](https://nodejs.org/en/)
  - Choose LTS
  - Installing:
    - Next
    - Accept > next
    - Accept desitnation path > next
    - Custom setup: next
    - Tools for Native Modules: Uncheck the box for Chocolatey Package manager > next
    - Click Install > Yes, allow changes

* Note: After you've installed everything (or after each installation) you'll want to test those installations.
  - Open the Terminal / Git Bash and type the following commands and hit enter after each one (we should see a version number displayed back to us):
    - node --version
    - git --version
    - npm --version

## What Is The Terminal / Git Bash / CLI?
  - Both the Terminal (mac) and Git Bash are Command Line Interfaces (CLI).
  - Both the Terminal & Git Bash give us access to our file / folders and the innerworkings of our operating system.
  - It's one of the most powerful pieces of software on your computer - allowing you to give your computer direct instructions with text.
  - You want to get use to using a CLI right away - so even when we create files & folders we should stick to our CLI's in order get that practice (developers use CLI's!).

## Bash
  - [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) is a type of shell for Unix-like operating systems (there is a version available for Windows), but also a command language. The commands are mostly abbreviations of words and acronyms.

## What is a GUI
  - GUI stands for Graphical User Interface.
  - This is usually considered the opposite of a CLI and makes up what you are typically use to using on a computer - an environment that typically allows you to click, drag & drop, see icons, graphics, windows etc.

## What is a Shell?
  - A shell is pretty much synonymous with a CLI - more specifically it's a computer program that "exposes" an operating system's services and typically uses a command-line interface (CLI) for human use.

## What is Visual Studio Code?
  - VS Code is known as an IDE (Integrated Development Environment). 
  - From [Wikipedia](https://en.wikipedia.org/wiki/Integrated_development_environment):

  > An integrated development environment (IDE) is a software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of at least a source code editor, build automation tools and a debugger.

  - IDE's are used by software developers to develop software!
  - This is where we'll writing and running our code for the majority of the program.
  - Packages to install:
    * Bracket Pair Colorizer 2
    * 


## What is Git?
  - [Git](https://git-scm.com/) is version control software for our coding projects!
  - This allows us to track and save our progress while we are coding, allowing us to do things like go back to an earlier version of a software project.

## What is Node.js?
  - Node is a runtime environment for JavaScript. What this basically means is that we can use it to run JavaScript code outside of a Web Browser (which is where JavaScript was originally intended to be run).
  - It comes with [`npm`](https://www.npmjs.com/) which is a package manager for JavaScript. We'll talk more about it later.
  
## File Structure, Naming Conventions & Making Our Cohort Directory
There are whole methodologies around creating the right file structure for a given project, and even naming conventions for your folders and files, but essentially file structure matters because organization matters. I would encourage to read [this](https://mitcommlab.mit.edu/broad/commkit/file-structure/) regarding file structure.

  - First thing you want to do is open up your Terminal (Mac) or Git Bash.
  - We want to navigate to a directory (we'll be using the folder & directory interchangeably throughout the program) where we want to create our program folder - this is where we'll store everything that we'll be doing in this program.
  - You'll want to think of navigating directories like going through a hallway with doors that lead to rooms with files and other doors. Each door represents a folder.
  - The commands you'll want to use to navigate are the following:
    1. `cd` stands for "change directory". You use this to navigate to different folders - going up or down a file structure.
    2. `ls` stands for "list" and will show the current directory listing of files and folders.
    3. `pwd` stands for "print working directory", which just allows you to view your current file path (where you are in your file system).
    4. Note: you typically use the `cd` command with an argument in front of it (ie. `cd Documents`) - indicating what folder you want to navigate into. You'll want to be in the same folder as the folder you are trying to move into. If we use the command `cd ~`, we'll be taken all the way to the root user's directory.

  - Once we are in our preferred directory (mine was my Documents folder) we want to make a new folder (directory).
  - We want to use the `mkdir` command, which stands for "make directory".
  - Type in `mkdir Nebula-Academy-V5`
  