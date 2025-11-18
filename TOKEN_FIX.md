# Fix: Token Missing Repo Scope

## The Problem
Your Personal Access Token doesn't have the `repo` scope, which is required to push to repositories.

## Solution: Regenerate Token with Correct Scopes

### Step 1: Delete Old Token
1. Go to https://github.com/settings/tokens (logged in as **mohammedshafinc**)
2. Find your token (or any old tokens)
3. Click "Delete" to remove them

### Step 2: Create New Token with Repo Scope
1. Click "Generate new token" → "Generate new token (classic)"
2. Give it a name: "Portfolio Website - Repo Access"
3. **IMPORTANT**: Select the scope: **`repo`** (this gives full control of private repositories)
   - Check the box next to "repo" - this will select all repo permissions
4. Click "Generate token"
5. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

### Step 3: Update Git Configuration
After you have the new token, run these commands:

```bash
cd "/Users/wydex/Desktop/hba portfolio/portfolio-website"

# Update remote URL with new token
git remote set-url origin https://YOUR_NEW_TOKEN@github.com/mohammedshafinc/hiba-portfolio.git

# Or use credential helper (more secure)
git remote set-url origin https://github.com/mohammedshafinc/hiba-portfolio.git
printf "protocol=https\nhost=github.com\nusername=mohammedshafinc\npassword=YOUR_NEW_TOKEN\n" | git credential approve

# Test push
git push -u origin main
```

Replace `YOUR_NEW_TOKEN` with the token you just created.

---

## Alternative: Use SSH (Better for Multiple Accounts)

If you want a more permanent solution for managing multiple GitHub accounts, I can help you set up SSH keys. This is more secure and doesn't require tokens.



