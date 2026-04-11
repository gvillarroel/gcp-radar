---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.206Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync GitHub App authentication"
feature_slug: "config-sync-github-app-authentication"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
keywords:
  - "GH App auth"
  - "GitHub App credentials"
  - "GitHub App token"
  - "GitHub App login"
  - "GitHub App integration"
  - "GitHub App authentication"
  - "RepoSync GitHub App"
  - "GitHub App"
---

# Config Sync GitHub App authentication

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync now supports GitHub App authentication for connecting to GitHub repositories.

## Extended Definition

Config Sync now supports GitHub App authentication for connecting to GitHub repositories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)

## Supporting Pages

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Add the GitHub App configuration to a new Secret in the cluster: Using Client ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-literal=github-app-client-id= CLIENT ID \ --from-literal=github-app-installation-id= INSTALLATION ID \ --from-file=github-app-private-key= /path/to/GITHUB PRIVATE KEY \ --from-literal=github-app-base-url= BASE URL Replace CLIENT ID with the client ID for the GitHub App.
- Using Application ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-literal=github-app-application-id= APPLICATION ID \ --from-literal=github-app-installation-id= INSTALLATION ID \ --from-file=github-app-private-key= /path/to/GITHUB PRIVATE KEY \ --from-literal=github-app-base-url= BASE URL Replace APPLICATION ID with the application ID for the GitHub App.
- Config Sync supports the following mechanisms for authentication: SSH key pair ( ssh ) Cookiefile ( cookiefile ) Token ( token ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) GitHub App ( githubapp ) The mechanism that you choose depends on what your repository supports.
- To use a GitHub App, complete the following steps: Follow the instructions on GitHub to provision a GitHub App and give it permission to read from your repository.

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the GitHub App configuration to a new Secret in the cluster by using either the client or application ID: client ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-literal = github-app-client-id = CLIENT ID \ --from-literal = github-app-installation-id = INSTALLATION ID \ --from-file = github-app-private-key = /path/to/GITHUB PRIVATE KEY \ --from-literal = github-app-base-url = BASE URL Replace CLIENT ID with the client ID for the GitHub App.
- The argument can otherwise be omitted and defaults to https://api.github.com/ . application ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-literal = github-app-application-id = APPLICATION ID \ --from-literal = github-app-installation-id = INSTALLATION ID \ --from-file = github-app-private-key = /path/to/GITHUB PRIVATE KEY \ --from-literal = github-app-base-url = BASE URL Replace APPLICATION ID with the application ID for the GitHub App.
- Use a GitHub App If your repository is in GitHub, you can use the GitHub App to connect your repository to Config Sync: Follow the instructions on GitHub to provision a GitHub App and give it permission to read from your repository.
- When you install Config Sync, use GitHub app ( githubapp ) as the authentication type.

