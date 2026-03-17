# Manual Push Instructions for anothony

To manually push your project from a terminal (like Git Bash), follow these steps:

### 1. Open Git Bash in your project folder
Right-click your `anothony` folder and select **"Git Bash Here"**.

### 2. The Standard Workflow (The "Big Three")
Whenever you make changes, run these three commands in order:

```bash
# 1. Stage your changes (the dot means "everything")
git add .

# 2. Commit your changes with a descriptive message
git commit -m "Describe what you changed here"

# 3. Push to GitHub
git push origin master
```

---

### Pro Tips for Manual Usage:

**To see what has changed before you commit:**
```bash
git status
```

**If you want to add specific files instead of everything:**
```bash
git add filename.html
```

**If you need to push files that are ignored by `.gitignore` (like your skills):**
```bash
git add -f yourfile.skill
```

**To check where your code is going:**
```bash
git remote -v
```
