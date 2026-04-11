---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.203Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync support for Secure Source Manager Git repositories"
feature_slug: "config-sync-support-for-secure-source-manager-git-repositories"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "Secure Source Manager authentication"
  - "Secure Source Manager source"
  - "Secure Source Manager"
  - "SSM Git repos"
  - "SSM Git repository"
  - "RepoSync source settings"
  - "RootSync source settings"
  - "Anthos Config Management source Git"
---

# Config Sync support for Secure Source Manager Git repositories

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync now supports syncing configuration from Secure Source Manager Git repositories.

## Extended Definition

Config Sync now supports syncing configuration from Secure Source Manager Git repositories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/source.reader \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud source repos set-iam-policy REPOSITORY POLICY FILE --project = PROJECT ID Secure Source Manager Grant the Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) and Secure Source Manager Repo Reader ( roles/securesourcemanager.repoReader ) IAM roles to the Google service account.
- Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/securesourcemanager.instanceAccessor \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/securesourcemanager.repoReader \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" To grant repository-specific permissions, you can use the Secure Source Manager web interface for the repository.
- Google service account If your repository is in Cloud Source Repositories or in Secure Source Manager , and your cluster uses GKE Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE , you can give Config Sync access to a repository in the same project as your managed cluster by using a Google service account.
- If you are using a repository in Secure Source Manager, you must use the following format when you configure Config Sync and add the URL for your Git repository: https:// INSTANCE ID - PROJECT NUMBER -git.

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant the IAM role to the Google service account, depending on the repository type that you're using: Secure Source Manager Grant the Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) and Secure Source Manager Repo Reader ( roles/securesourcemanager.repoReader ) IAM roles to the Google service account: Grant project-wide permission if the same permissions apply to all repositories in the project: gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/securesourcemanager.instanceAccessor \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/securesourcemanager.repoReader \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" Replace the following: PROJECT ID : your project ID.
- You can find instructions for some common Git hosting providers in the following list: Secure Source Manager Bitbucket GitHub GitLab Create the git-creds Secret with the private key: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-file = ssh = /path/to/KEYPAIR PRIVATE KEY FILENAME Note: If you need to use a proxy, pass the --from-literal=https proxy= HTTPS PROXY URL flag.
- If you use a third-party Git repository host like GitHub, or you want to use a service account with Secure Source Manager, we recommend that you use a separate account for authentication. /path/to/KEYPAIR FILENAME : the path to the key pair file.
- GSA NAME : the custom Google service account that you want to use to connect to Secure Source Manager or Cloud Source Repositories.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud API: The following methods don't support identity federtation: UpdateCatalog ImportCompletionData TuneModel ImportProducts PurgeProducts ImportUserEvents ImportUserEvents PurgeUserEvents RejoinUserEvents Other: No known limitations Secret Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Secure Source Manager GA Console (federated): No known limitations Google Cloud API: Identity federation users must sign in through the Secure Source Manager instance web interface before running any of the following commands: Git CLI commands API calls to data plane endpoints Identity federation users must sign in through the Secure Source Manager instance web interface after every session expiry to continue using Git SSH CLI commands with user SSH keys.
- You can only use your federated identity to log in to a Secure Source Manager instance that is configured to use Workforce Identity Federation.
- Workforce identity pool providers used for Secure Source Manager must provide google.subject and google.email attribute mappings.
- Email notifications from Secure Source Manager are not supported for Workforce Identity Federation configured instances.

