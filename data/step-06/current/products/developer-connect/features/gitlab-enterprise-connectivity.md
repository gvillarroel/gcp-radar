---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:05.563Z"
product_name: "Developer Connect"
product_slug: "developer-connect"
feature_name: "GitLab Enterprise connectivity"
feature_slug: "gitlab-enterprise-connectivity"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise"
keywords:
  - "gitlab"
  - "enterprise"
  - "connectivity"
  - "developer"
  - "connect"
  - "supports"
  - "with"
  - "repositories"
---

# GitLab Enterprise connectivity

Product: Developer Connect
Coverage: MEDIUM

## Step 02 Summary

Developer Connect supports connectivity with GitLab Enterprise repositories.

## Extended Definition

Developer Connect supports connectivity with GitLab Enterprise repositories.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)
- [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise)
- [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private)
- [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise)

## Supporting Pages

### "Connect to GitLab Enterprise repositories in a private network \_|\_ Developer\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)
- Source ID: `site-iam-reference`
- Final score: 323
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Developer Connect Guides Send feedback Connect to GitLab Enterprise repositories in a private network Stay organized with collections Save and categorize content based on your preferences.
- These instructions are for application developers, platform administrators, and security managers who want to use GitLab Enterprise source code repositories with Google.
- This page describes how to connect to GitLab Enterprise repositories hosted in a private network by using Developer Connect and Service Directory.
- Run the gcloud developer-connect connections create command to create a connection to GitLab Enterprise: gcloud beta developer-connect connections create CONNECTION NAME \ --location = REGION \ --gitlab-config-read-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ READ SECRET NAME /versions/ VERSION \ --gitlab-config-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ API SECRET NAME /versions/ VERSION \ --gitlab-enterprise-config-host-uri = HOST URI --gitlab-enterprise-config-webhook-secret-version = projects/ PROJECT ID /secrets/ WEBHOOK SECRET NAME /versions/ VERSION --git-proxy-config-enabled Replace the following: CONNECTION NAME : the name of your connection.

### "Connect to GitLab Enterprise \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise)
- Source ID: `site-iam-reference`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Developer Connect Guides Send feedback Connect to GitLab Enterprise Stay organized with collections Save and categorize content based on your preferences.
- These instructions are for application developers, platform administrators, and security managers who want to use GitLab Enterprise source code repositories with Google.
- Initiate a connection to your GitLab Enterprise account by running the developer-connect connections create command: gcloud developer-connect connections create CONNECTION NAME \ --location = REGION \ --gitlab-config-read-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ READ SECRET NAME /versions/ VERSION \ --gitlab-config-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ API SECRET NAME /versions/ VERSION \ --gitlab-enterprise-config-host-uri = HOST URI --gitlab-enterprise-config-webhook-secret-version = projects/ PROJECT ID /secrets/ WEBHOOK SECRET NAME /versions/ VERSION --git-proxy-config-enabled Replace the following: CONNECTION NAME : the name of your connection.
- Create a Developer Connect service account by running the following command, where PROJECT ID is your Google Cloud project ID : gcloud beta services identity create \ --service = developerconnect.googleapis.com \ --project = PROJECT ID Host requirements If you haven't installed a GitLab Enterprise Edition Server instance, see the installation guide from GitLab Enterprise Edition for instructions.

### "Connect to GitHub Enterprise repositories hosted in a private network \_\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Developer Connect Guides Send feedback Connect to GitHub Enterprise repositories hosted in a private network Stay organized with collections Save and categorize content based on your preferences.
- These instructions are for application developers, platform administrators, and security managers who want to use GitHub Enterprise source code repositories with Google.
- This page describes how to connect to GitHub Enterprise repositories hosted in a private network by using Developer Connect and Service Directory.
- Run the gcloud developer-connect connections create command to create a connection to GitHub Enterprise: gcloud developer-connect connections create CONNECTION NAME \ --location = REGION \ --project = PROJECT ID \ --github-enterprise-config-host-uri = HOST URI --github-enterprise-config-service-directory = SERVICE DIRECTORY RESOURCE --git-proxy-config-enabled Replace the following: CONNECTION NAME : the name for your connection.

### "Connect to GitHub Enterprise \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Developer Connect Guides Send feedback Connect to GitHub Enterprise Stay organized with collections Save and categorize content based on your preferences.
- These instructions are for application developers, platform administrators, and security managers who want to use GitHub Enterprise source code repositories with Google.
- Initiate a connection by completing the following steps: Run the gcloud developer-connect connections create command to create a connection to GitHub Enterprise: gcloud developer-connect connections create CONNECTION NAME \ --location = REGION \ --github-enterprise-config-host-uri = HOST URI --git-proxy-config-enabled Replace the following: CONNECTION NAME : the name for your connection.
- To create a new GitHub Enterprise connection, select one of the following options: Console Initiate a connection by completing the following steps: In the Google Cloud console, open Developer Connect .

