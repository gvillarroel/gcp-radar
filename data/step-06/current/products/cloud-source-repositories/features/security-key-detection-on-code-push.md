---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:05.597Z"
product_name: "Cloud Source Repositories"
product_slug: "cloud-source-repositories"
feature_name: "Security key detection on code push"
feature_slug: "security-key-detection-on-code-push"
latest_feature_date: "2018-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/source-repositories/docs/features"
  - "https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository"
  - "https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig"
  - "https://docs.cloud.google.com/source-repositories/docs/authentication"
keywords:
  - "security"
  - "key"
  - "detection"
  - "on"
  - "code"
  - "push"
  - "source"
  - "repositories"
---

# Security key detection on code push

Product: Cloud Source Repositories
Coverage: MEDIUM

## Step 02 Summary

Cloud Source Repositories can detect security keys when code changes are pushed.

## Extended Definition

Cloud Source Repositories can detect security keys when code changes are pushed.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features)
- [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository)
- [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig)
- [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication)

## Supporting Pages

### Features \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/source-repositories/docs/features](https://docs.cloud.google.com/source-repositories/docs/features)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security key detection Cloud Source Repositories offer security key detection to block git push transactions that contain sensitive information.
- For a more integrated experience, see Cloud Code for IntelliJ Source browser Cloud Source Repositories also provide a source browser that you can use to view repository files from within the Google Cloud console.
- Editor support Because repositories in Cloud Source Repositories are Git repositories, you can continue to use the editor of your choice to work on your code.
- User data Caution Cloud Source Repositories are intended to store only the source code for your app and not user or personal data.

### "Pushing code from an existing repository \_|\_ Cloud Source Repositories\

- URL: [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: git remote add google ssh : // user @gmail . com @source . developers . google . com : 2022 / p / example - project / r / test - repo Push your code to Cloud Source Repositories: git push --all google gcloud CLI Ensure that the gcloud CLI is installed on your machine.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Pushing code from an existing repository Stay organized with collections Save and categorize content based on your preferences.
- This topic describes how to push code from an existing repository on your local machine to Cloud Source Repositories.
- Push your code to Cloud Source Repositories: git push --all google Use the repository as a remote Google Cloud repositories are fully featured Git repositories.

### ProjectConfig \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/ProjectConfig)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Cloud Source Repositories Reference Send feedback ProjectConfig Stay organized with collections Save and categorize content based on your preferences.
- Values are of the form projects/<project> . pubsubConfigs map (key: string, value: object ( PubsubConfig )) How this project publishes a change in the repositories through Cloud Pub/Sub.
- For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . enablePrivateKeyCheck boolean Reject a Git push that contains a private key.

### "Setting up local authentication \_|\_ Cloud Source Repositories \_|\_ Google\

- URL: [https://docs.cloud.google.com/source-repositories/docs/authentication](https://docs.cloud.google.com/source-repositories/docs/authentication)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Source Repositories supports three SSH key types: RSA (only for keys with more than 2048 bits) ECDSA ED25519 Generate a key pair The SSH key pair consists of a private key that resides on your local system and a public key that you register with Google Cloud.
- Cloud Source Repositories supports the following types of authentication: SSH Google Cloud CLI Manually generated credentials Authenticate by using SSH Cloud Source Repositories lets you use SSH public key authentication to access hosted repositories.
- Type the following command: git clone https://source.developers.google.com/p/ PROJECT ID /r/ REPOSITORY NAME Where: PROJECT ID is the name of your project REPOSITORY NAME is the name of your repository After you set up authentication with manually generated credentials, you can interact with the hosted repository on Cloud Source Repositories by using the standard Git commands.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Setting up local authentication Stay organized with collections Save and categorize content based on your preferences.

