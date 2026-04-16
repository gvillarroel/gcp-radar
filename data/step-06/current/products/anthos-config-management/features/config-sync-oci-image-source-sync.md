---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.311Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync OCI image source sync"
feature_slug: "config-sync-oci-image-source-sync"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
keywords:
  - "config"
  - "sync"
  - "oci"
  - "image"
  - "source"
  - "supports"
  - "syncing"
  - "configurations"
---

# Config Sync OCI image source sync

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync supports syncing configurations packaged as OCI images from Artifact Registry or Container Registry as a preview capability.

## Extended Definition

Config Sync supports syncing configurations packaged as OCI images from Artifact Registry or Container Registry as a preview capability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)

## Supporting Pages

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Control namespace-scoped sources in a namespace-scoped source Config Sync supports syncing from more than one namespace-scoped source of truth per namespace.
- Control root sources in a root source of truth Config Sync supports syncing from more than one source of truth.
- Config Sync supports Git repositories, Helm charts, and OCI images as the source of truth.
- OCI ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : oci sourceFormat : unstructured oci : image : NAMESPACE IMAGE dir : NAMESPACE DIRECTORY auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.

### About sources of truth \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/sources-of-truth)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Another RepoSync in a different namespace syncing from an OCI image containing a set of application-specific configurations built by a separate CI/CD process.
- You can use this table to understand the key characteristics of each source type to help you make an informed decision: Feature Git repository OCI image Helm chart Best for General purpose configuration management; flexibility; human-readability Immutable, versioned configurations; leveraging container infrastructure Packaging and distributing complex applications Mutability Mutable Immutable Mutable (chart versions are immutable, but values can change) Rollbacks Revert commits or change branches Deploy previous image tag Rollback to a previous chart version Tooling Standard Git clients, CI/CD pipelines Docker or Podman, container registries Helm CLI, Helm repositories Performance Can be slower for large repositories Faster, especially at scale Fast when fetching from a chart repository Authentication Flexible (SSH, token), can be more complex to set up Simplified with Workload Identity Federation for GKE (for example, with Artifact Registry) Simplified with Workload Identity Federation for GKE (for example, with Artifact Registry) It's also possible to use different source types for different purposes on the same cluster.
- Example RootSync configuration The following example shows a RootSync manifest that syncs from an OCI image stored in Artifact Registry: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : sourceType : oci sourceFormat : unstructured oci : image : us-central1-docker.pkg.dev/my-project/my-repo/my-config-image:v1.0.0 dir : . auth : k8sserviceaccount This configuration sets up Config Sync to sync from an OCI image.
- When you configure Config Sync with an OCI image as the source of truth, Config Sync uses an oci-sync container within the reconciler Pod to pull the OCI image containing the configs from the registry.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- With Config Sync, you can manage your Kubernetes resources by syncing configurations from a central source of truth, such as a Git repository, an OCI image, or a Helm chart.
- SECRET : the secret auth type. oci data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true oci { sync repo = " REPO " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the OCI image repository that contains your configuration files.
- You can configure them later. sourceType : SOURCE TYPE sourceFormat : FORMAT syncRepo : REPO syncRev : REVISION secretType : SECRET TYPE gcpServiceAccountEmail : EMAIL metricsGcpServiceAccountEmail : METRICS EMAIL policyDir : DIRECTORY preventDrift : false Replace the following: SOURCE TYPE : add git to sync from a Git repository, oci to sync from an OCI image, or helm to sync from a Helm chart.
- To authorize Config Sync to read your configurations, complete the following steps: Create, or have access to, a source of truth that contains the configuration files that you want Config Sync to sync to your clusters.

