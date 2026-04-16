---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.273Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync Secure Source Manager Git repository support"
feature_slug: "config-sync-secure-source-manager-git-repository-support"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "config"
  - "sync"
  - "secure"
  - "source"
  - "manager"
  - "git"
  - "repository"
  - "can"
---

# Config Sync Secure Source Manager Git repository support

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync can sync configuration from Secure Source Manager Git repositories.

## Extended Definition

Config Sync can sync configuration from Secure Source Manager Git repositories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant the IAM role to the Google service account, depending on the repository type that you're using: Secure Source Manager Grant the Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) and Secure Source Manager Repo Reader ( roles/securesourcemanager.repoReader ) IAM roles to the Google service account: Grant project-wide permission if the same permissions apply to all repositories in the project: gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/securesourcemanager.instanceAccessor \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/securesourcemanager.repoReader \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" Replace the following: PROJECT ID : your project ID.
- You can find instructions for some common Git hosting providers in the following list: Secure Source Manager Bitbucket GitHub GitLab Create the git-creds Secret with the private key: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-file = ssh = /path/to/KEYPAIR PRIVATE KEY FILENAME Note: If you need to use a proxy, pass the --from-literal=https proxy= HTTPS PROXY URL flag.
- To grant Config Sync read-only access to your repository by using a Compute Engine default service account, grant the default service account the roles/source.reader role: gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/source.reader \ --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" Replace the following: PROJECT ID : your project ID PROJECT NUMBER : with your project number.
- If you use a third-party Git repository host like GitHub, or you want to use a service account with Secure Source Manager, we recommend that you use a separate account for authentication. /path/to/KEYPAIR FILENAME : the path to the key pair file.

### "Quickstart: Sync configs from a Git repository \_|\_ Config Sync \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The package details page provides an overview of all synced resources, including the resource type and which namespace the resource is synced to. (Optional) Explore the sample repository The configurations applied to your cluster are defined in the /config-sync-quickstart/multirepo/ repository.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Quickstart: Sync configs from a Git repository Stay organized with collections Save and categorize content based on your preferences.
- In this example, the RepoSync object points to the config-sync-quickstart/multirepo/ namespaces/gamestore directory within the same repository, but in a real-world scenario, you could point to a different Git repository.
- Now that Config Sync is synced to a repository, it continuously reconciles the state of your clusters with the configs in the repository.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google service account If your repository is in Cloud Source Repositories or in Secure Source Manager , and your cluster uses GKE Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE , you can give Config Sync access to a repository in the same project as your managed cluster by using a Google service account.
- If you are using a repository in Secure Source Manager, you must use the following format when you configure Config Sync and add the URL for your Git repository: https:// INSTANCE ID - PROJECT NUMBER -git.
- Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/source.reader \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud source repos set-iam-policy REPOSITORY POLICY FILE --project = PROJECT ID Secure Source Manager Grant the Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) and Secure Source Manager Repo Reader ( roles/securesourcemanager.repoReader ) IAM roles to the Google service account.
- Helm root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : helm sourceFormat : unstructured helm : repo : ROOT HELM REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.

