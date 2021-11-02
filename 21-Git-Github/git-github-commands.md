![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)

To Clone a repository (omit angle brackets):
- `git clone <github-repository-url.git>`

To create a new branch (from within your local repository) (omit angle brackets):
- `git checkout -b <name of branch>`

Check which branch you're on locally:
- `git branch`

Pull updates from branch:
- `git pull`

To switch branches (omit angle brackets):
- `git checkout <branch name>`

HOW TO ADD UPDATES TO YOUR REPO:
- `git add .`
- `git commit -m "my message"`
- `git push`

How to pull changes and update your branch:
1. Make sure you're on the main branch - `git checkout main`
2. Pull changes - `git pull`
2. Switch back to your branch - `git checkout <your-branch-name>`
3. Merge changes locally - `git merge main`