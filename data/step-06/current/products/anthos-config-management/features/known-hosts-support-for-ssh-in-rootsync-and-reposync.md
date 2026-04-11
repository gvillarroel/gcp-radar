---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.213Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "known_hosts support for SSH in RootSync and RepoSync"
feature_slug: "known-hosts-support-for-ssh-in-rootsync-and-reposync"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "known_hosts entry"
  - "SSH known_hosts"
  - "known hosts for repository sync"
  - "known_hosts"
  - "known hosts"
  - "Git connection settings"
  - "Git SSH sync"
  - "RepoSync API"
---

# known_hosts support for SSH in RootSync and RepoSync

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Added known_hosts support for Git connections over SSH in the RootSync and RepoSync APIs.

## Extended Definition

Added known_hosts support for Git connections over SSH in the RootSync and RepoSync APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- 1.17.0 Feature Added known hosts support for Git connection over SSH in RootSync and RepoSync APIs.
- 1.10.1 Fixed Fixed the issue in legacy mode (not using RootSync and RepoSync APIs ) where unmanaged namespaces (with the configmanagement.gke.io/managed:disabled annotation) were deleted in the cluster when they were deleted from the repository.
- 1.10.0 Fixed This note was updated on December 14, 2021: Reduced the latency to sync a root repository in RootSync and RepoSync APIs by reducing GET calls to the API server.
- 1.10.0 Fixed Fixed the issue in RootSync and RepoSync APIs causing proxy to incorrectly fail validation when auth is set to cookiefile or none .

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To add the known hosts key, run the following command: kubectl edit secret git-creds --namespace = config-management-system To add the known hosts entry under data , run the following command: known hosts: KNOWN HOSTS KEY Replace KNOWN HOSTS KEY with the known hosts key.
- Optional, but recommended: To configure known hosts checking when using SSH authentication, add the known hosts key to the data.known hosts field in the git creds Secret.
- To disable known hosts checking, remove the known hosts field from the Secret.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To add the known hosts key, run: kubectl edit secret git-creds \ --namespace=config-management-system Then, under data , add the known hosts entry: known hosts: KNOWN HOSTS KEY Delete the private key from the local disk or otherwise protect it.
- GitLab Add the private key to a new Secret in the cluster: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=ssh= /path/to/KEYPAIR PRIVATE KEY FILENAME Replace /path/to/KEYPAIR PRIVATE KEY FILENAME with the name of the private key (the one without the .pub suffix). (Recommended) To configure known hosts checking using SSH authentication, you can add the known hosts key to the data.known hosts field in the git creds secret.
- To disable known hosts checking, you can remove the known hosts field from the secret.

