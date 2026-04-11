---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.240Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync hidden Git metadata directory ignore list"
feature_slug: "config-sync-hidden-git-metadata-directory-ignore-list"
latest_feature_date: "2022-04-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
keywords:
  - "hidden directory ignore list"
  - ".gitlab-ci.yml"
  - "ignore hidden directories"
  - "Config Sync ignore list"
  - "Git metadata exclusion"
  - "hidden Git metadata"
  - ".gitlab"
  - ".github"
---

# Config Sync hidden Git metadata directory ignore list

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync now ignores the .github and .gitlab hidden directories and the .gitlab-ci.yml hidden file.

## Extended Definition

Config Sync now ignores the .github and .gitlab hidden directories and the .gitlab-ci.yml hidden file.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The metrics are documented at Config Sync metrics April 21, 2022 1.11.1 Feature ConfigSync ignores the hidden directories .github , .gitlab , and the hidden file .gitlab-ci.yml .

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The argument can otherwise be omitted and will default to https://api.github.com/ .
- The argument can otherwise be omitted and will default to https://api.github.com/ .
- This is only needed when the repository is not hosted at www.github.com.
- This is only needed when the repository is not hosted at www.github.com.

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The argument can otherwise be omitted and defaults to https://api.github.com/ . application ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-literal = github-app-application-id = APPLICATION ID \ --from-literal = github-app-installation-id = INSTALLATION ID \ --from-file = github-app-private-key = /path/to/GITHUB PRIVATE KEY \ --from-literal = github-app-base-url = BASE URL Replace APPLICATION ID with the application ID for the GitHub App.
- The argument can otherwise be omitted and defaults to https://api.github.com/ .
- This value is only needed when the repository is not hosted at www.github.com.
- This value is only required if the repository is not hosted at www.github.com.

