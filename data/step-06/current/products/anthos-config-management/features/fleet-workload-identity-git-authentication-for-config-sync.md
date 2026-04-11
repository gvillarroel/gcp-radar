---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.240Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Fleet Workload Identity Git authentication for Config Sync"
feature_slug: "fleet-workload-identity-git-authentication-for-config-sync"
latest_feature_date: "2022-04-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci"
keywords:
  - "fleet WI auth"
  - "Git repo credentials"
  - "Fleet Workload Identity"
  - "repository credentials"
  - "sync with Cloud Source Repositories"
  - "workload identity to Git"
  - "Config Sync Git authentication"
  - "Cloud Source Repositories"
---

# Fleet Workload Identity Git authentication for Config Sync

Product: Anthos Config Management
Coverage: HIGH

## Step 02 Summary

Config Sync now supports using Fleet Workload Identity to authenticate to Git repositories in Cloud Source Repositories.

## Extended Definition

Fleet Workload Identity for Config Sync is a Git authentication path where a Config Sync cluster using Fleet Workload Identity Federation for GKE can access Google-hosted repositories (Cloud Source Repositories or Secure Source Manager) using a Google service account. Repository access is granted through IAM (for example, the Cloud Source Repositories Reader role), and in fleet mode the IAM binding uses the project ID of the fleet where the cluster is registered.

## Evidence Summary

The cited Config Sync docs directly state support for Fleet Workload Identity Federation for GKE with Google-hosted Git repositories and specify IAM role/binding requirements and fleet-project context for access.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)

## Supporting Pages

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google service account If your repository is in Cloud Source Repositories or in Secure Source Manager , and your cluster uses GKE Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE , you can give Config Sync access to a repository in the same project as your managed cluster by using a Google service account.
- Lower values are not recommended: ssh-keygen -t rsa -b 4096 \ -C " GIT REPOSITORY USERNAME " \ -N '' \ -f /path/to/KEYPAIR FILENAME Replace the following: GIT REPOSITORY USERNAME : the username that you want Config Sync to use to authenticate to the repository /path/to/KEYPAIR FILENAME : a path to the key pair If you are using a third-party Git repository host such as GitHub, or you want to use a service account with Cloud Source Repositories, we recommend that you use a separate account.
- If you are using a repository in Cloud Source Repositories, you must use the following format when you enter your URL: ssh:// EMAIL @source.developers.google.com:2022/p/ PROJECT ID /r/ REPO NAME Replace the following: EMAIL : your Google Cloud username PROJECT ID : the ID of the Google Cloud project where the repository is located REPO NAME : the name of the repository Cookiefile Note: Using cookiefile credentials is only supported with Cloud Source Repositories .
- Config Sync supports the following mechanisms for authentication: Kubernetes service account ( k8sserviceaccount ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) Kubernetes service account You can use a Kubernetes service account as your authentication type if you store your OCI image in Artifact Registry and your cluster uses GKE Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE .

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Source Repositories Grant the Cloud Source Repositories Reader ( roles/source.reader ) IAM role to the Google service account: Grant project-wide permission if the same permissions apply to all repositories in the project: gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/source.reader \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" Replace the following: PROJECT ID : your project ID.
- If you use fleet Workload Identity Federation for GKE, use the project ID of the fleet that your cluster is registered to as the value.
- GSA NAME : the custom Google service account that you want to use to connect to Secure Source Manager or Cloud Source Repositories.
- You must meet the following requirements: Your repository is in Secure Source Manager or Cloud Source Repositories .

### "Grant Config Sync access to your OCI image or Helm repository \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions Workload Identity Federation in the context of Git auth, but does not describe Fleet Workload Identity specifically.

Evidence snippets:
- Use a Kubernetes service account To authenticate with a Kubernetes service account, your cluster must have Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE enabled.
- If you use fleet Workload Identity Federation for GKE, this value is the project ID of the fleet that your cluster is registered to.
- If you use fleet Workload Identity Federation for GKE, this value is the project ID of the fleet that your cluster is registered to.
- Your cluster has Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE enabled.

