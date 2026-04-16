---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.325Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync proxy credentials in git-creds Secret"
feature_slug: "config-sync-proxy-credentials-in-git-creds-secret"
latest_feature_date: "2021-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo"
keywords:
  - "config"
  - "sync"
  - "proxy"
  - "credentials"
  - "git"
  - "creds"
  - "secret"
  - "can"
---

# Config Sync proxy credentials in git-creds Secret

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync can store HTTPS or HTTP proxy credentials in the git-creds Secret using dedicated keys.

## Extended Definition

Config Sync can store HTTPS or HTTP proxy credentials in the git-creds Secret using dedicated keys.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)

## Supporting Pages

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't use an HTTPS proxy, create the Secret with the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=cookie file= /path/to/COOKIEFILE If you need to use an HTTPS proxy, add it to the Secret together with cookiefile by running the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=cookie file= /path/to/COOKIEFILE \ --from-literal=https proxy= HTTPS PROXY URL Replace the following: /path/to/COOKIEFILE : the appropriate path and filename HTTPS PROXY URL : the URL for the HTTPS proxy that you use when communicating with the Git repository Note: We don't recommend using an HTTP proxy for security reasons.
- If you need to use an HTTPS proxy, add it to the Secret together with username and token by running the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-literal=username= USERNAME \ --from-literal=token= TOKEN \ --from-literal=https proxy= HTTPS PROXY URL Replace the following: USERNAME : the username that you want to use.
- If you don't use an HTTPS proxy, create the Secret with the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace="config-management-system" \ --from-literal=username= USERNAME \ --from-literal=token= TOKEN Replace the following: USERNAME : the username that you want to use.
- If the problem is that you forgot to create the git-creds Secret, Config Sync detects the Secret as soon as you create it, and you don't need to re-apply the configuration.

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can find instructions for some common Git hosting providers in the following list: Secure Source Manager Bitbucket GitHub GitLab Create the git-creds Secret with the private key: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-file = ssh = /path/to/KEYPAIR PRIVATE KEY FILENAME Note: If you need to use a proxy, pass the --from-literal=https proxy= HTTPS PROXY URL flag.
- We recommend that you use HTTPS for security reasons: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-literal = username = USERNAME \ --from-literal = token = TOKEN Note: If you need to use a proxy, pass the --from-literal=https proxy= HTTPS PROXY URL flag.
- Add the GitHub App configuration to a new Secret in the cluster by using either the client or application ID: client ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-literal = github-app-client-id = CLIENT ID \ --from-literal = github-app-installation-id = INSTALLATION ID \ --from-file = github-app-private-key = /path/to/GITHUB PRIVATE KEY \ --from-literal = github-app-base-url = BASE URL Replace CLIENT ID with the client ID for the GitHub App.
- The argument can otherwise be omitted and defaults to https://api.github.com/ . application ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-literal = github-app-application-id = APPLICATION ID \ --from-literal = github-app-installation-id = INSTALLATION ID \ --from-file = github-app-private-key = /path/to/GITHUB PRIVATE KEY \ --from-literal = github-app-base-url = BASE URL Replace APPLICATION ID with the application ID for the GitHub App.

### "Migrate your ConfigManagement object \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ConfigManagement field RootSync field spec.git.gcpServiceAccountEmail spec.git.gcpServiceAccountEmail spec.git.syncRepo spec.git.repo spec.git.syncBranch spec.git.branch spec.git.policyDir spec.git.dir spec.git.syncWait spec.git.period spec.git.syncRev spec.git.revision spec.git.secretType spec.git.auth git-creds (this is a fixed value in ConfigManagement objects) spec.git.secretRef.name spec.sourceFormat spec.sourceFormat spec.git.proxy.httpProxy or spec.git.proxy.httpsProxy spec.git.proxy What's next Configure syncing from multiple repositories Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example: root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : sourceFormat : unstructured git : repo : ROOT REPOSITORY revision : ROOT REVISION branch : ROOT BRANCH dir : " ROOT DIRECTORY " auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef should be omitted if the auth type is none, gcenode, or gcpserviceaccount. secretRef : name : git-creds Replace the following: ROOT REPOSITORY : add the URL of the Git repository to use as the root repository.
- The migration enables the RootSync and RepoSync APIs, which lets you use additional features: Sync from more than one source of truth Use the Config Sync dashboard Monitor Config Sync using Cloud Monitoring, Prometheus, or custom monitoring system Render Kustomize configurations and Helm charts Sync OCI artifacts from Artifact Registry Sync Helm charts from Artifact Registry Override system values such as changing resource limits and updating the number of Git commits to fetch You can enable these APIs even if you only want to use a root repository and don't want to use any namespace repositories.
- In the ConfigManagement object, set the spec.enableMultiRepo field to true : config-management.yaml apiVersion : configmanagement.gke.io/v1 kind : ConfigManagement metadata : name : config-management spec : enableMultiRepo : true Apply the changes: kubectl apply -f config-management.yaml Wait for the RootSync CRD to be created. kubectl wait --for = condition = established crd rootsyncs.configsync.gke.io Using the values you copied from the ConfigManagement object, create the RootSync object.

