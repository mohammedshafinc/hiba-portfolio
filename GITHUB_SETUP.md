# GitHub Multiple Account Setup Guide

## Current Issue
You have two GitHub accounts:
- **Personal**: mohammedshafinc
- **Organization**: WydexMedia

Git is trying to use WydexMedia credentials for your personal account repository.

## Solution 1: Use Personal Access Token (Quick Fix)

### Step 1: Create a Personal Access Token
1. Go to https://github.com/settings/tokens (while logged in as **mohammedshafinc**)
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name like "Portfolio Website"
4. Select scopes: **repo** (full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Use Token When Pushing
When you run `git push`, it will ask for credentials:
- **Username**: `mohammedshafinc`
- **Password**: Paste your Personal Access Token (not your GitHub password)

The credentials will be saved in your keychain for future use.

---

## Solution 2: Use SSH with Multiple Keys (Recommended for Long-term)

### Step 1: Generate SSH Key for Personal Account
```bash
ssh-keygen -t ed25519 -C "shafinms21@gmail.com" -f ~/.ssh/id_ed25519_personal
```

### Step 2: Add SSH Key to GitHub
1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519_personal.pub
   ```
2. Go to https://github.com/settings/keys (as **mohammedshafinc**)
3. Click "New SSH key"
4. Paste the key and save

### Step 3: Configure SSH for Multiple Accounts
Create/edit `~/.ssh/config`:
```bash
# Personal Account (mohammedshafinc)
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal

# Organization Account (WydexMedia) - default
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
```

### Step 4: Update Remote URL
```bash
git remote set-url origin git@github.com-personal:mohammedshafinc/hiba-portfolio.git
```

---

## Solution 3: Use Git Credential Helper with Multiple Accounts

You can configure Git to use different credentials per repository by using a credential helper that supports multiple accounts.

### For This Repository Only
```bash
# Set local credential helper
git config --local credential.helper ""
git config --local credential.https://github.com/mohammedshafinc/hiba-portfolio.git.helper osxkeychain
```

---

## Quick Test
After setting up, test with:
```bash
git push -u origin main
```

If using Personal Access Token, enter:
- Username: `mohammedshafinc`
- Password: [Your Personal Access Token]

---

## Recommended Approach
For your setup, I recommend **Solution 1 (Personal Access Token)** for immediate use, then **Solution 2 (SSH with Multiple Keys)** for long-term management of multiple accounts.

