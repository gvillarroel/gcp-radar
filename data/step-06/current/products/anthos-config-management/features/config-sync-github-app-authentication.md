---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.275Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync GitHub App authentication"
feature_slug: "config-sync-github-app-authentication"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
keywords:
  - "config"
  - "sync"
  - "github"
  - "app"
  - "authentication"
  - "supports"
  - "repositories"
---

# Config Sync GitHub App authentication

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync supports GitHub App authentication for GitHub repositories.

## Extended Definition

Config Sync supports GitHub App authentication for GitHub repositories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)

## Supporting Pages

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Config Sync supports Git repositories, Helm charts, and OCI images as the source of truth.
- Verify the sync status of the source of truth You can use the nomos status command to inspect the sync status of the source of truth: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 -------------------- bookstore git@github.com:foo-corp/acme/bookstore@v1 SYNCED 34d1a8c8 In this example output, the namespace-scoped source, in this case a Git repository, is configured for a namespace named bookstore .
- Control namespace-scoped sources in a namespace-scoped source Config Sync supports syncing from more than one namespace-scoped source of truth per namespace.
- Apply the RoleBinding configuration: kubectl apply -f sync-rolebinding.yaml If required, create a Secret based on your preferred authentication method.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Config Sync supports the following mechanisms for authentication: SSH key pair ( ssh ) Cookiefile ( cookiefile ) Token ( token ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) GitHub App ( githubapp ) The mechanism that you choose depends on what your repository supports.
- Lower values are not recommended: ssh-keygen -t rsa -b 4096 \ -C " GIT REPOSITORY USERNAME " \ -N '' \ -f /path/to/KEYPAIR FILENAME Replace the following: GIT REPOSITORY USERNAME : the username that you want Config Sync to use to authenticate to the repository /path/to/KEYPAIR FILENAME : a path to the key pair If you are using a third-party Git repository host such as GitHub, or you want to use a service account with Cloud Source Repositories, we recommend that you use a separate account.
- Config Sync supports the following mechanisms for authentication: Kubernetes service account ( k8sserviceaccount ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) Kubernetes service account You can use a Kubernetes service account as your authentication type if you store your OCI image in Artifact Registry and your cluster uses GKE Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE .
- Config Sync supports the following mechanisms for authentication: Token ( token ) Kubernetes service account ( k8sserviceaccount ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) Note: Config Sync doesn't support configuring helm as the source type using the Google Cloud console or the Google Cloud CLI.

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Config Sync also supports the following authentication methods; however, these methods are only recommended if you can't use one of the options listed in the preceding table: cookiefile: might not be supported for all Git providers.
- When you install Config Sync, use GitHub app ( githubapp ) as the authentication type.
- Use a GitHub App If your repository is in GitHub, you can use the GitHub App to connect your repository to Config Sync: Follow the instructions on GitHub to provision a GitHub App and give it permission to read from your repository.
- The following table summarizes the authentication methods you can use with Config Sync: Method Supported sources Description Limitations No authentication Git, OCI, Helm No additional setup required.

