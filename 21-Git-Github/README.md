![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)



## Setting Up Git & GitHub

### Objectives
- Configure Git locally.
- Understand local versus remote repositories.
- Clone the cohort repository.
- Understand basic Git commands: `init`, `add`, `commit`, `push`, `pull`...

## Git / GitHub - What Are They? What Is The Difference?
  - Git is version control software for our software projects, which means we can manage and keep track of the history of our project while we code (your source code history). If you make a mistake like accidentally deleting code and want to go back in time to an earlier version of your project, you can can do that and things of this nature when you incorporate Git into your projects.
  - Developers typically use Git using a Bash CLI
  - GitHub is a cloud-based hosting service that lets you manage projects that are being tracked with Git - AKA Git repositories. This is an industry standard when it comes to working with other developers on a project. Everyone can see the changes being made and make sure everyones project is synced up with the latest changes.
  - So, Git is something you use locally (on your own computer) and GitHub can be linked up with your local Git repository (a repository is just your root project directory/folder) and allow for a hosted Git experience. Keep in mind that what you do locally needs to be frequently synced up with your GitHub - before we get into how to do that, lets first configure our Git software for GitHub.
  - We'll be using Git & GitHub throughout this program. Take around 10 minutes and watch these two videos to get a better understanding of what GitHub is and why it's important.
    - [What is GitHub?](https://www.youtube.com/watch?v=w3jLJU7DT5E&ab_channel=GitHub)
    - [Why GitHub matters as a developer](https://www.youtube.com/watch?v=yaRwYYdiHxo&ab_channel=SimpleProgrammer)

## Configuring Git Locally
You'll want to [configure Git](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration) with your email address in order for it to identify your commits. The email NEEDS to match your [GitHub account](https://github.com/) email - so if you haven't created an account, do so now before continuing.


Use the commands that follow in your CLI (Terminal / Git Bash), replace with your information - note, we are using the --global (-g for short) [flag](https://blog.heroku.com/cli-flags-get-started-with-oclif) to make the configuration apply to all repositories.
  - Open up your CLI (Terminal / Git Bash) - it doesn't matter what folder you are in for this - the commands you'll want to use are the following(remember, at the end of each command swap the value with your own information - also, hit return after each command):
    - git config --global user.name "John Doe"
    - git config --global user.email johndoe@gmail.com

### Git / Github Workflow 

The image below gives us a visual of what a rudimentary workflow in Git / GitHub looks like. The Central Repository in this example is the a remote GitHub repository. In this example each developer has been added as a contributor to that specific GitHub repository and so has the ability to `push` to it and make changes. When we get into group projects your workflow will look closer to this (you'll be updating your local repository with your changes and then pushing to the remote GitHub repository), but again, for our cohort repository we'll just making those `pull` requests.

![rudimentary workflow](https://www.codeproject.com/KB/applications/1165512/image1.png)



## Cohort Repository

We will start out with what I'll refer to as our "cohort repository". As a class, we are going to initially `clone` this repository from GitHub, then we'll continually update our local versions with `pull` requests throughout the program. This repository will act as a reference only - we don't want to make changes to it, only `pull` from it.

Lets clone our first repository:
  - Typically, when you visit a GitHub repository you'll see a green clone button that contains the URL needed to download (clone) that repository to your computer. Use the instructor provided link.
  - Open up your CLI (Terminal / Git Bash) and navigate to your cohort directory.
  - Once there, enter in the command (swap the URL with the one provided by the instructor):
    - git clone https://github.com/Nebula-Academy/SEV4-Curriculum.git
  - And just like that, you've cloned your first repository. Take a moment and explore what was downloaded.
  - Note: this clone of the repository is linked with the one in GitHub. So you can effectively update your clone with any updates made to the original GitHub one with the `git pull` command.

## Common Git Commands To Know
There are many [Git commands](https://git-scm.com/docs). Here are more of the common ones we'll be using and what they are for.

Note: you can actually see whether or not a folder (directory) is a Git repository by navigating to it in your CLI and running the command:
  - `ls -a`
  - This command lists all files / folders including hidden ones. You'll notice a .git folder if you are in the root of a Git repository.

Note: you want to use all of the follow commands within one of your GitHub repositories.

  - `git init`
    - When you want to make a local Git repository (place a directory under Git version control), you would use this command within a specified directory.
  - `git status`
    - This will show you the [state of your working directory and staging area.](https://www.atlassian.com/git/tutorials/inspecting-a-repository#:~:text=The%20git%20status%20command%20displays,regarding%20the%20committed%20project%20history.)
  - `git pull`
    - This command contacts the GitHub repository connected to your local copy and tries to update that copy with any changes.
  - `git add .`
    - This commands adds all the current changes made to your local repository into what's called a "staging area" in the repository. You can think of this as you're adding things to a box that you are prepping for shipment (you haven't shipped it yet).
  - `git commit -m 'my first commit'`
    - Here you are taping closed that box and adding a shipping address and note, one step closer to shipping.
  - `git push`
    - Here you are actually shipping that package. The destination: the GitHub repository associated with your local repository.

`git add .`, `git commit -m 'some message'`, `git push` are the three commands you need to know in order to update a working directory. Throughout the program you should be using these commands after making changes to a project.

More Resources: 
  - [Saving changes to a GitHub repository](https://www.atlassian.com/git/tutorials/saving-changes#:~:text=The%20git%20add%20command%20adds,until%20you%20run%20git%20commit%20)

Example coding:
  - [nano content goes here](https://nebulaacademy.sharepoint.com/sites/V6SoftwareEngineeringBootcamp/_layouts/OneNote.aspx?id=%2Fsites%2FV6SoftwareEngineeringBootcamp%2FSiteAssets%2FV6%20Software%20Engineering%20Bootcamp%20Notebook&wd=target%28_Content%20Library%2FSoftware%20Engineering%20Content%2FModule%200%20-%20Setting%20Up%20Dev%20Environment.one%7CD3616688-2CD8-4946-9010-28D6284E13FA%2F08%3A%20my_first_website%7C5F74C233-5E47-414B-B57D-8D8E8C6E90DC%2F%29onenote:https://nebulaacademy.sharepoint.com/sites/V6SoftwareEngineeringBootcamp/SiteAssets/V6%20Software%20Engineering%20Bootcamp%20Notebook/_Content%20Library/Software%20Engineering%20Content/Module%200%20-%20Setting%20Up%20Dev%20Environment.one#08%20my_first_website&section-id={D3616688-2CD8-4946-9010-28D6284E13FA}&page-id={5F74C233-5E47-414B-B57D-8D8E8C6E90DC}&end)