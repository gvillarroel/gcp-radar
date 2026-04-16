---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:05.597Z"
product_name: "Cloud Source Repositories"
product_slug: "cloud-source-repositories"
feature_name: "SSH authentication"
feature_slug: "ssh-authentication"
latest_feature_date: "2018-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/source-repositories/docs/authentication"
  - "https://docs.cloud.google.com/source-repositories/docs/cloning-repositories"
  - "https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository"
  - "https://docs.cloud.google.com/source-repositories/docs/adding-repositories-as-remotes"
keywords:
  - "ssh"
  - "authentication"
  - "source"
  - "repositories"
  - "supports"
  - "authenticating"
  - "to"
  - "via"
---

# SSH authentication

Product: Cloud Source Repositories
Coverage: MEDIUM

## Step 02 Summary

Cloud Source Repositories supports authenticating to repositories via SSH.

## Extended Definition

Cloud Source Repositories supports authenticating to repositories via SSH.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication)
- [https://docs.cloud.google.com/source-repositories/docs/cloning-repositories](https://docs.cloud.google.com/source-repositories/docs/cloning-repositories)
- [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository)
- [https://docs.cloud.google.com/source-repositories/docs/adding-repositories-as-remotes](https://docs.cloud.google.com/source-repositories/docs/adding-repositories-as-remotes)

## Supporting Pages

### "Setting up local authentication \_|\_ Cloud Source Repositories \_|\_ Google\

- URL: [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Source Repositories supports the following types of authentication: SSH Google Cloud CLI Manually generated credentials Authenticate by using SSH Cloud Source Repositories lets you use SSH public key authentication to access hosted repositories.
- Cloud Source Repositories supports three SSH key types: RSA (only for keys with more than 2048 bits) ECDSA ED25519 Generate a key pair The SSH key pair consists of a private key that resides on your local system and a public key that you register with Google Cloud.
- Type the following command: git clone https://source.developers.google.com/p/ PROJECT ID /r/ REPOSITORY NAME Where: PROJECT ID is the name of your project REPOSITORY NAME is the name of your repository After you set up authentication with manually generated credentials, you can interact with the hosted repository on Cloud Source Repositories by using the standard Git commands.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Setting up local authentication Stay organized with collections Save and categorize content based on your preferences.

### "Cloning a repository \_|\_ Cloud Source Repositories \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/source-repositories/docs/cloning-repositories](https://docs.cloud.google.com/source-repositories/docs/cloning-repositories)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: git clone ssh : // user @gmail . com @source . developers . google . com : 2022 / p / example - project / r / test - repo The first time you connect to Cloud Source Repositories by using SSH, you're asked to confirm the SSH key fingerprints for the remote host.
- On your local system, use your Google Cloud username and the fully qualified SSH path to your repository to clone your repository: git clone ssh : //[ EMAIL ] @source . developers . google . com : 2022 / p /[ PROJECT ID ]/ r /[ REPO NAME ] Where: [EMAIL] is your Google Cloud username. [PROJECT ID] is the ID of the Google Cloud project where the repository is located. [REPO NAME] is the name of the repository.
- In a terminal window, provide your authentication credentials: gcloud init Clone your repository: gcloud source repos clone [ REPO NAME ] --project=[PROJECT NAME] Where: [REPO NAME] is the name of your repository. [PROJECT NAME] is the name of your Google Cloud project.
- For example: gcloud source repos clone test-repo --project=example-project Clone using manually generated credentials If you're not using SSH or the gcloud CLI, you can clone a repository by using manually generated credentials.

### "Pushing code from an existing repository \_|\_ Cloud Source Repositories\

- URL: [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: git remote add google ssh : // user @gmail . com @source . developers . google . com : 2022 / p / example - project / r / test - repo Push your code to Cloud Source Repositories: git push --all google gcloud CLI Ensure that the gcloud CLI is installed on your machine.
- Push a local repository into Cloud Source Repositories You can push a local repository to Cloud Source Repositories by using either SSH, the Google Cloud CLI, or manually generated credentials.
- Add your local repository as a remote: git remote add google ssh : //[ EMAIL ] @source . developers . google . com : 2022 / p /[ PROJECT ID ]/ r /[ REPO NAME ] Where: [EMAIL] is your Google Cloud username. [PROJECT ID] is the ID of the Google Cloud project where the repository is located. [REPO NAME] is the name of the repository.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Pushing code from an existing repository Stay organized with collections Save and categorize content based on your preferences.

### "Adding a repository as a remote \_|\_ Cloud Source Repositories \_|\_ Google\

- URL: [https://docs.cloud.google.com/source-repositories/docs/adding-repositories-as-remotes](https://docs.cloud.google.com/source-repositories/docs/adding-repositories-as-remotes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Linux or macOS, run the credential helper script: Linux or macOS git config --global credential.'https://source.developers.google.com'.helper gcloud.sh Windows git config --global credential.https://source.developers.google.com.helper gcloud.cmd Credential helper scripts provide the information that Git needs to connect securely to Cloud Source Repositories using your Google Account credentials.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Adding a repository as a remote Stay organized with collections Save and categorize content based on your preferences.
- Create the repository in Cloud Source Repositories: gcloud source repos create [ REPO NAME ] Where [REPO NAME] is the name for your Google Cloud repository.
- What's next After you have pushed source files to Cloud Source Repositories, you can view repository files from within the Google Cloud console.

