# finance-tracking
## GitHub Actions – AI Test Loop

This repo uses an AI-powered test-fix loop that runs automatically on every push and pull request (except `main`).

### Required: Add Repository Secrets

Before pushing, you must add the following secrets to your GitHub repository, or the workflow will fail:

| Secret Name | Description |
|---|---|
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare Account ID |
| `CLOUDFLARE_API_KEY` | Your Cloudflare API Key |

**How to add secrets:**
1. Go to your repository on GitHub
2. Navigate to **Settings -> Secrets and variables -> Actions**
3. Click **"New repository secret"**
4. Add each secret listed above

### What it does

On every push/PR to a non-`main` branch, the workflow:
1. Checks out your repository
2. Verifies Docker and Docker Compose are available
3. Runs the AI test-fix loop via `docker compose up`
4. Cleans up containers and volumes after completion

The workflow file lives at `.github/workflows/ai-test-loop.yml`.
