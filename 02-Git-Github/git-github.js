// 1. Make sure you have Google Chrome installed!
    // https://www.google.com/chrome/

// 2. Install Visual Studio Code
    // https://code.visualstudio.com/

// 3. (For Mac users) Install HomeBrew
    /* 
        What is HomeBrew? 
            - https://brew.sh/ <--- the command to install is here as well as below
            - A popular and easy to use package manager for macOS - it installs the stuff you need that Apple didn't.
        
        How to install?
            - Run the command below in your terminal (anywhere in your terminal).

         /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

        Note: It will probably ask for your password. You won't see it, though, while you type. That's how it goes,
        just hit return after typing.
    */ 

// 4. Install Git
    /* 
        What is Git?
            - https://git-scm.com/
            - It's a free open source version control software for your coding projects.
            - It's as a SCM system (Source Code Management).

        How to install?
            - In your terminal (anywhere), (after you've installed HomeBrew, for mac users) type:
                brew install git.
            - If you're on windows, all you need to do is download the Windows version of git from the above
                website. As you go through the download, you'll also be downloading bash.
        
        Configure Git!
            - But why? 
                -> We want Git to know our email address in order for it to identify your commits. The email
                    NEEDS to match your GitHub account email.
            - How to configure:
                -> Use the commands that follow in your terminal, replace with your information - note, we are
                    using the --global (-g for short) option to make the config apply to all repositories:
                        git config --global user.name "Tefe"
                        git config --global user.email tefebell@gmail.com
    */

// 5. Install Node
    /*
        What is node? 
            - A JavaScript runtime environment (allows you to run JavaScript in the terminal)

        How to install?
            - On a mac, in the terminal, run: brew install node
    */