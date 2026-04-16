---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.277Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync k8sserviceaccount authentication for Artifact Registry OCI and Helm"
feature_slug: "config-sync-k8sserviceaccount-authentication-for-artifact-registry-oci-and-helm"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "config"
  - "sync"
  - "k8sserviceaccount"
  - "authentication"
  - "artifact"
  - "registry"
  - "oci"
  - "helm"
---

# Config Sync k8sserviceaccount authentication for Artifact Registry OCI and Helm

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync supports the k8sserviceaccount authentication type for syncing OCI images and Helm charts from Artifact Registry.

## Extended Definition

Config Sync supports the k8sserviceaccount authentication type for syncing OCI images and Helm charts from Artifact Registry.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### "Grant Config Sync access to your OCI image or Helm repository \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use a Kubernetes service account to grant Config Sync read-only access to your Helm repository, grant the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role to the Kubernetes service account that includes the Workload Identity Federation for GKE pool: Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : your project ID.
- To use a Compute Engine default service account to grant Config Sync read-only access to your repository, grant the Compute Engine service account read permission to Artifact Registry: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/artifactregistry.reader Replace the following: PROJECT ID : your project ID PROJECT NUMBER : your project number.
- To use a Compute Engine default service account to grant Config Sync read-only access to your repository, grant the Compute Engine service account read permission to Artifact Registry: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/artifactregistry.reader Replace the following: PROJECT ID : your project ID PROJECT NUMBER : your project number.
- The following table summarizes the authentication methods you can use with Config Sync: Method Supported sources Description Limitations No authentication Git, OCI, Helm No additional setup required.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- ROOT AUTH TYPE : add one of the following authentication types: none : Use no authentication token : Use a username and password to access a private Helm repository. gcenode : Use the Compute Engine default service account to access an image in Artifact Registry.
- ROOT AUTH TYPE : add one of the following authentication types: none : Use no authentication token : Use a username and password to access a private Helm repository. gcenode : Use the Compute Engine default service account to access an image in Artifact Registry.
- ROOT AUTH TYPE : add one of the following authentication types: none : Use no authentication token : Use a username and password to access a private Helm repository. gcenode : Use the Compute Engine default service account to access an image in Artifact Registry.
- ROOT AUTH TYPE : add one of the following authentication types: none : Use no authentication token : Use a username and password to access a private Helm repository. gcenode : Use the Compute Engine default service account to access an image in Artifact Registry.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Config Sync supports the following mechanisms for authentication: Kubernetes service account ( k8sserviceaccount ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) Kubernetes service account You can use a Kubernetes service account as your authentication type if you store your OCI image in Artifact Registry and your cluster uses GKE Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE .
- Config Sync supports the following mechanisms for authentication: Token ( token ) Kubernetes service account ( k8sserviceaccount ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) Note: Config Sync doesn't support configuring helm as the source type using the Google Cloud console or the Google Cloud CLI.
- ROOT AUTH TYPE : add one of the following authentication types: none : Use no authentication token : Use a username and password to access a private Helm repository. gcenode : Use the Compute Engine default service account to access an image in Artifact Registry.
- Kubernetes service account You can use a Kubernetes service account as your authentication type if you store your Helm chart in Artifact Registry and your cluster uses GKE Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE .

