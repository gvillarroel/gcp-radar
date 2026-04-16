---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:05.561Z"
product_name: "Developer Connect"
product_slug: "developer-connect"
feature_name: "Gemini Code Assist integration"
feature_slug: "gemini-code-assist-integration"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "integration"
  - "developer"
  - "connect"
  - "integrates"
  - "with"
---

# Gemini Code Assist integration

Product: Developer Connect
Coverage: MEDIUM

## Step 02 Summary

Developer Connect integrates with Gemini Code Assist to provide coding assistance tailored to private repositories.

## Extended Definition

Developer Connect integrates with Gemini Code Assist to provide coding assistance tailored to private repositories.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient)
- [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc)
- [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise)

## Supporting Pages

### "Class DeveloperConnectAsyncClient (0.5.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)
- Source ID: `site-python-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connection () connection.github config.github app = "GEMINI CODE ASSIST" request = developerconnect v1 .
- Connection () connection.github config.github app = "GEMINI CODE ASSIST" request = developerconnect v1 .
- Connections that use Gemini Code Assist will have events forwarded to Gemini Code Assist service.
- Home Documentation Developer tools Python Client libraries Send feedback Class DeveloperConnectAsyncClient (0.5.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class DeveloperConnectClient (0.5.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient)
- Source ID: `site-python-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connection () connection.github config.github app = "GEMINI CODE ASSIST" request = developerconnect v1 .
- Connection () connection.github config.github app = "GEMINI CODE ASSIST" request = developerconnect v1 .
- Connections that use Gemini Code Assist will have events forwarded to Gemini Code Assist service.
- Home Documentation Developer tools Python Client libraries Send feedback Class DeveloperConnectClient (0.5.0) Stay organized with collections Save and categorize content based on your preferences.

### "Connect to Bitbucket Data Center \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifically, you can use Bitbucket Data Center repositories with Gemini Code Assist .
- If you're setting up Gemini Code Assist, continue the process by following the steps in Configure and use Gemini Code Assist code customization . gcloud Create a webhook secret in Secret Manager by running the following command, where WEBHOOK SECRET NAME is a name for your webhook secret: cat /proc/sys/kernel/random/uuid tr -d '\n' gcloud secrets create WEBHOOK SECRET NAME Store your access tokens in Secret Manager by running the following commands: gcloud secrets create ADMIN SECRET NAME echo -n ADMIN SECRET DATA gcloud secrets versions add ADMIN SECRET NAME --data-file = - gcloud secrets create READ SECRET NAME echo -n READ SECRET DATA gcloud secrets versions add READ SECRET NAME --data-file = - Replace the following: ADMIN SECRET NAME : a name for the secret that stores your admin access token.
- Home Documentation Application development Developer Connect Guides Send feedback Connect to Bitbucket Data Center Stay organized with collections Save and categorize content based on your preferences.
- These instructions are for application developers, platform administrators, and security managers who want to use Bitbucket Data Center source code repositories with Google.

### "Connect to GitHub Enterprise \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifically, you can use GitHub Enterprise repositories with Gemini Code Assist .
- If you're setting up Gemini Code Assist, continue the process by following the steps in Configure and use Gemini Code Assist code customization . gcloud The following tasks require some actions in your web browser.
- Home Documentation Application development Developer Connect Guides Send feedback Connect to GitHub Enterprise Stay organized with collections Save and categorize content based on your preferences.
- These instructions are for application developers, platform administrators, and security managers who want to use GitHub Enterprise source code repositories with Google.

