---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.248Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync git-creds proxy credential storage"
feature_slug: "config-sync-git-creds-proxy-credential-storage"
latest_feature_date: "2021-08-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
keywords:
  - "store proxy in git-creds"
  - "git-creds secret keys"
  - "git-creds Secret"
  - "proxy credentials"
  - "http_proxy"
  - "proxy keys"
  - "https_proxy"
  - "Config Sync git creds"
---

# Config Sync git-creds proxy credential storage

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync added support for storing HTTPS/HTTP proxy credentials in the git-creds Secret using https_proxy or http_proxy keys.

## Extended Definition

Config Sync added support for storing HTTPS/HTTP proxy credentials in the git-creds Secret using https_proxy or http_proxy keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)

## Supporting Pages

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't use an HTTPS proxy, create the Secret with the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=cookie file= /path/to/COOKIEFILE If you need to use an HTTPS proxy, add it to the Secret together with cookiefile by running the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=cookie file= /path/to/COOKIEFILE \ --from-literal=https proxy= HTTPS PROXY URL Replace the following: /path/to/COOKIEFILE : the appropriate path and filename HTTPS PROXY URL : the URL for the HTTPS proxy that you use when communicating with the Git repository Note: We don't recommend using an HTTP proxy for security reasons.
- If you need to use an HTTPS proxy, add it to the Secret together with username and token by running the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-literal=username= USERNAME \ --from-literal=token= TOKEN \ --from-literal=https proxy= HTTPS PROXY URL Replace the following: USERNAME : the username that you want to use.
- If you don't use an HTTPS proxy, create the Secret with the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace="config-management-system" \ --from-literal=username= USERNAME \ --from-literal=token= TOKEN Replace the following: USERNAME : the username that you want to use.
- An invalid installation has a status of NOT CONFIGURED and lists one of the following errors: missing git-creds Secret git-creds Secret is missing the key specified by secretType To fix the problem, correct the configuration error.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- August 26, 2021 1.8.2 Feature Config Sync supports storing HTTPS/HTTP proxy credentials inside the git-creds Secret, using https proxy or http proxy as a key, to avoid exposing these credentials as plaintext.
- 1.4.1 Change The use of unsecured HTTP for GitHub repo connections or in an http proxy is now discouraged, and support for unsecured HTTP will be removed in a future release.
- 1.10.1 Fixed Fixed the issue where nomos bugreport could leak Git proxy credentials if present in the git-sync ConfigMap.
- 1.3.0 Change Anthos Config Management now supports the use of an HTTP or HTTPS proxy to connect with your Git host.

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can find instructions for some common Git hosting providers in the following list: Secure Source Manager Bitbucket GitHub GitLab Create the git-creds Secret with the private key: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-file = ssh = /path/to/KEYPAIR PRIVATE KEY FILENAME Note: If you need to use a proxy, pass the --from-literal=https proxy= HTTPS PROXY URL flag.
- We recommend that you use HTTPS for security reasons: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-literal = username = USERNAME \ --from-literal = token = TOKEN Note: If you need to use a proxy, pass the --from-literal=https proxy= HTTPS PROXY URL flag.
- Note: If you need to use a proxy, pass the --from-literal=https proxy= HTTPS PROXY URL flag.

