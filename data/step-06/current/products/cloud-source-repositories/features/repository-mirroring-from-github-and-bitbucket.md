---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:05.595Z"
product_name: "Cloud Source Repositories"
product_slug: "cloud-source-repositories"
feature_name: "Repository mirroring from GitHub and Bitbucket"
feature_slug: "repository-mirroring-from-github-and-bitbucket"
latest_feature_date: "2018-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/source-repositories/docs/mirroring-a-bitbucket-repository"
  - "https://docs.cloud.google.com/source-repositories/docs/mirroring-a-github-repository"
  - "https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos"
  - "https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository"
keywords:
  - "repository"
  - "mirroring"
  - "from"
  - "github"
  - "and"
  - "bitbucket"
  - "source"
  - "repositories"
---

# Repository mirroring from GitHub and Bitbucket

Product: Cloud Source Repositories
Coverage: MEDIUM

## Step 02 Summary

Cloud Source Repositories can mirror repositories from GitHub and Bitbucket through the beta user interface.

## Extended Definition

Cloud Source Repositories can mirror repositories from GitHub and Bitbucket through the beta user interface.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/source-repositories/docs/mirroring-a-bitbucket-repository](https://docs.cloud.google.com/source-repositories/docs/mirroring-a-bitbucket-repository)
- [https://docs.cloud.google.com/source-repositories/docs/mirroring-a-github-repository](https://docs.cloud.google.com/source-repositories/docs/mirroring-a-github-repository)
- [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos)
- [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository)

## Supporting Pages

### "Mirroring a Bitbucket repository \_|\_ Cloud Source Repositories \_|\_ Google\

- URL: [https://docs.cloud.google.com/source-repositories/docs/mirroring-a-bitbucket-repository](https://docs.cloud.google.com/source-repositories/docs/mirroring-a-bitbucket-repository)
- Source ID: `site-docs-root`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are mirroring your Bitbucket repository to Cloud Source Repositories to integrate with Cloud Build and do not need any other Cloud Source Repositories features, follow the Cloud Build instructions on building repositories from Bitbucket Cloud instead.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Mirroring a Bitbucket repository Stay organized with collections Save and categorize content based on your preferences.
- Only Bitbucket Cloud and GitHub Cloud repositories can be mirrorred to Cloud Source Repositories; self-hosted Bitbucket and GitHub mirroring are not supported.
- Upgrade a Bitbucket connection If you mirrored a Bitbucket repository by using an earlier Google Cloud console interface, Cloud Source Repositories prompts you to upgrade when you access your mirrored repository in the current Google Cloud console.

### "Mirroring a GitHub repository \_|\_ Cloud Source Repositories \_|\_ Google\

- URL: [https://docs.cloud.google.com/source-repositories/docs/mirroring-a-github-repository](https://docs.cloud.google.com/source-repositories/docs/mirroring-a-github-repository)
- Source ID: `site-docs-root`
- Final score: 324
- Re-rank relevance: N/A

Evidence snippets:
- If you are mirroring your GitHub repository to Cloud Source Repositories to integrate with Cloud Build and do not need any other Cloud Source Repositories features, follow the Cloud Build instructions on building repositories from GitHub instead.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Mirroring a GitHub repository Stay organized with collections Save and categorize content based on your preferences.
- Only Bitbucket Cloud and GitHub Cloud repositories can be mirrored to Cloud Source Repositories; self-hosted Bitbucket and GitHub mirroring are not supported.
- Identify GitHub repositories Cloud Source Repositories makes it clear which of your repositories are mirrors of GitHub repositories: Each GitHub repository is represented with the GitHub logo.

### "REST Resource: projects.repos \_|\_ Cloud Source Repositories \_|\_ Google\

- URL: [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos)
- Source ID: `site-api-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Removing this webhook from the other hosting service will stop Google Cloud Source Repositories from receiving notifications, and thereby disabling mirroring. deployKeyId string ID of the SSH deploy key at the other hosting service.
- MirrorConfig Configuration to automatically mirror a repository from another hosting service, for example GitHub or Bitbucket.
- Size is only returned by repos.get. url string URL to clone the repository from Google Cloud Source Repositories.
- Removing this key from the other service would deauthorize Google Cloud Source Repositories from mirroring.

### "Pushing code from an existing repository \_|\_ Cloud Source Repositories\

- URL: [https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository](https://docs.cloud.google.com/source-repositories/docs/pushing-code-from-a-repository)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Pushing code from an existing repository Stay organized with collections Save and categorize content based on your preferences.
- This topic describes how to push code from an existing repository on your local machine to Cloud Source Repositories.
- Push to a Google Cloud repository To push from your local Git repository to a Google Cloud repository, enter the following command: git push google master Pull from a Google Cloud repository To pull from a Google Cloud repository to your local Git repository, enter the following command: git pull google master View the commit history of a Google Cloud repository To view the commit history, enter the following command: git log google/master What's next After you push your local repository to your local machine, you can: Learn from your code's history .
- If you're using Windows, enter the following command: gcloud init && git config credential.helper gcloud.cmd If you're using Linux or macOS, enter the following command: gcloud init && git config credential.helper gcloud.sh Add your local repository as a remote: git remote add google \ https : // source . developers . google . com / p /[ PROJECT NAME ]/ r /[ REPO NAME ] Where: [PROJECT NAME] is the name of your Google Cloud project. [REPO NAME] is the name of your repository.

