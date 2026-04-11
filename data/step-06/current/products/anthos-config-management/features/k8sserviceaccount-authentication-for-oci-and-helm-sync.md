---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.211Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "k8sserviceaccount authentication for OCI and Helm sync"
feature_slug: "k8sserviceaccount-authentication-for-oci-and-helm-sync"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth"
keywords:
  - "k8s service account auth"
  - "k8sserviceaccount authentication"
  - "RepoSync authentication type"
  - "k8sserviceaccount"
  - "k8sServiceAccount"
  - "RootSync authentication type"
  - "Artifact Registry"
  - "OCI image sync"
---

# k8sserviceaccount authentication for OCI and Helm sync

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Added support for the k8sserviceaccount authentication type when syncing OCI images and Helm charts hosted in Artifact Registry.

## Extended Definition

In Config Sync, `k8sserviceaccount` is a supported authentication type for syncing from Artifact Registry-hosted content. For OCI image sync, the RootSync example shows `auth: k8sserviceaccount`, and the Helm-related guidance for Artifact Registry states to use a Kubernetes service account and grant it `roles/artifactregistry.reader` (via project-level or repository-level IAM bindings) so Config Sync can read the repository. This approach is intended for clusters using GKE Workload Identity Federation for GKE/fleet, and is documented as the simplified authentication option for Artifact Registry access.

## Evidence Summary

The pages document Config Sync’s supported auth mechanisms, include OCI sync examples using `k8sserviceaccount`, and specify the required Artifact Registry IAM role binding for Kubernetes service account access to private OCI/Helm repositories.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth)

## Supporting Pages

### "Grant Config Sync access to your OCI image or Helm repository \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly documents Kubernetes service account as a supported Config Sync authentication method for OCI and Helm sources and explains its IAM and Workload Identity Federation requirements.

Evidence snippets:
- When you install Config Sync, use Kubernetes service account ( k8sserviceaccount ) as the authentication type.
- When you install Config Sync, use Kubernetes service account ( k8sserviceaccount ) as the authentication type.
- To use a Kubernetes service account to grant Config Sync read-only access to your Helm repository, grant the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role to the Kubernetes service account that includes the Workload Identity Federation for GKE pool: Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : your project ID.
- Grant the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role to the Kubernetes service account that includes the Workload Identity Federation for GKE pool: Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : your project ID.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Config Sync supports the following mechanisms for authentication: Kubernetes service account ( k8sserviceaccount ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) Kubernetes service account You can use a Kubernetes service account as your authentication type if you store your OCI image in Artifact Registry and your cluster uses GKE Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE .
- Config Sync supports the following mechanisms for authentication: Token ( token ) Kubernetes service account ( k8sserviceaccount ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) Note: Config Sync doesn't support configuring helm as the source type using the Google Cloud console or the Google Cloud CLI.
- Grant the Compute Engine service account read permission to Artifact Registry by running the following command: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/artifactregistry.reader Replace PROJECT ID with your organization's project ID, and replace PROJECT NUMBER with your organization's project number.
- Grant the Compute Engine service account read permission to Artifact Registry: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/artifactregistry.reader Replace PROJECT ID with your organization's project ID, and replace PROJECT NUMBER with your organization's project number.

### About sources of truth \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Example RootSync configuration The following example shows a RootSync manifest that syncs from an OCI image stored in Artifact Registry: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : sourceType : oci sourceFormat : unstructured oci : image : us-central1-docker.pkg.dev/my-project/my-repo/my-config-image:v1.0.0 dir : . auth : k8sserviceaccount This configuration sets up Config Sync to sync from an OCI image.
- You can use this table to understand the key characteristics of each source type to help you make an informed decision: Feature Git repository OCI image Helm chart Best for General purpose configuration management; flexibility; human-readability Immutable, versioned configurations; leveraging container infrastructure Packaging and distributing complex applications Mutability Mutable Immutable Mutable (chart versions are immutable, but values can change) Rollbacks Revert commits or change branches Deploy previous image tag Rollback to a previous chart version Tooling Standard Git clients, CI/CD pipelines Docker or Podman, container registries Helm CLI, Helm repositories Performance Can be slower for large repositories Faster, especially at scale Fast when fetching from a chart repository Authentication Flexible (SSH, token), can be more complex to set up Simplified with Workload Identity Federation for GKE (for example, with Artifact Registry) Simplified with Workload Identity Federation for GKE (for example, with Artifact Registry) It's also possible to use different source types for different purposes on the same cluster.
- Example RootSync configuration The following example shows a RootSync manifest that syncs from a Helm chart stored in Artifact Registry: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : sourceType : helm helm : repo : oci://us-central1-docker.pkg.dev/my-project/my-helm-repo chart : my-chart version : 1.2.0 auth : gcpserviceaccount gcpServiceAccountEmail : my-service-account@my-project. iam.gserviceaccount.com releaseName : my-chart-release namespace : my-app-namespace # Namespace where the chart resources will be deployed This configuration sets up Config Sync to sync a Helm chart from an OCI repository.
- When you configure Config Sync with a Helm chart as the source of truth, Config Sync uses a helm-sync container within the reconciler Pod to pull charts from a Helm repository (like Artifact Registry) or a Git repository, and then renders the chart to produce Kubernetes manifests.

