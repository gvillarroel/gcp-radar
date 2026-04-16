---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:05.562Z"
product_name: "Developer Connect"
product_slug: "developer-connect"
feature_name: "GitLab connectivity"
feature_slug: "gitlab-connectivity"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-gitlab"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient"
keywords:
  - "gitlab"
  - "connectivity"
  - "developer"
  - "connect"
  - "supports"
  - "with"
  - "repositories"
---

# GitLab connectivity

Product: Developer Connect
Coverage: MEDIUM

## Step 02 Summary

Developer Connect supports connectivity with GitLab repositories.

## Extended Definition

Developer Connect supports connectivity with GitLab repositories.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)
- [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise)
- [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)

## Supporting Pages

### "Connect to GitLab Enterprise repositories in a private network \_|\_ Developer\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Developer Connect Guides Send feedback Connect to GitLab Enterprise repositories in a private network Stay organized with collections Save and categorize content based on your preferences.
- Follow the instructions in the GitLab documentation to create personal access tokens , group access tokens , or project access tokens with the following permissions: One token with api scope for connecting and disconnecting repositories.
- These instructions are for application developers, platform administrators, and security managers who want to use GitLab Enterprise source code repositories with Google.
- This page describes how to connect to GitLab Enterprise repositories hosted in a private network by using Developer Connect and Service Directory.

### "Connect to GitLab Enterprise \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise)
- Source ID: `site-iam-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Follow the instructions in the GitLab documentation to create personal access tokens , group access tokens , or project access tokens with the following permissions: One token with api scope for connecting and disconnecting repositories.
- Home Documentation Application development Developer Connect Guides Send feedback Connect to GitLab Enterprise Stay organized with collections Save and categorize content based on your preferences.
- These instructions are for application developers, platform administrators, and security managers who want to use GitLab Enterprise source code repositories with Google.
- One token with read api scope to allow Developer Connect to read source code in your repositories.

### Connect to GitLab \_|\_ Developer Connect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab)
- Source ID: `site-iam-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Follow the instructions in the GitLab documentation to create personal access tokens , group access tokens , or project access tokens with the following permissions: One token with api scope for connecting and disconnecting repositories.
- Home Documentation Application development Developer Connect Guides Send feedback Connect to GitLab Stay organized with collections Save and categorize content based on your preferences.
- These instructions are for application developers, platform administrators, and security managers who want to use GitLab source code repositories with Google.
- One token with read api scope to allow Developer Connect to read source code in your repositories.

### "Class DeveloperConnectAsyncClient (0.5.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)
- Source ID: `site-python-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 async def sample fetch linkable git repositories(): Create a client client = developerconnect v1 .
- FetchLinkableGitRepositoriesRequest ( connection="connection value", ) Make the request page result = client. fetch linkable git repositories (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.developerconnect v1.types.FetchLinkableGitRepositoriesRequest , dict]] The request object.
- Home Documentation Developer tools Python Client libraries Send feedback Class DeveloperConnectAsyncClient (0.5.0) Stay organized with collections Save and categorize content based on your preferences.
- Returns Type Description google.cloud.developerconnect v1.services.developer connect.pagers.FetchLinkableGitRepositoriesAsyncPager Response message for FetchLinkableGitRepositories.

