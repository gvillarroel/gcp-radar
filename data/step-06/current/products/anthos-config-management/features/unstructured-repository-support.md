---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.350Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Unstructured repository support"
feature_slug: "unstructured-repository-support"
latest_feature_date: "2020-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/gitops-best-practices"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
keywords:
  - "unstructured"
  - "repository"
  - "allows"
  - "anthos"
  - "config"
  - "management"
  - "operate"
  - "without"
---

# Unstructured repository support

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Unstructured repository support allows Anthos Config Management to operate without hierarchical repository structure, with some hierarchy-dependent features disabled.

## Extended Definition

Unstructured repository support allows Anthos Config Management to operate without hierarchical repository structure, with some hierarchy-dependent features disabled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/gitops-best-practices](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/gitops-best-practices)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)

## Supporting Pages

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Helm root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : helm sourceFormat : unstructured helm : repo : ROOT HELM REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.
- Helm root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : helm sourceFormat : unstructured helm : repo : ROOT HELM REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.
- Git root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : git sourceFormat : unstructured git : repo : ROOT REPOSITORY revision : ROOT REVISION branch : ROOT BRANCH dir : ROOT DIRECTORY auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME noSSLVerify : ROOT NO SSL VERIFY caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.
- Git root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : git sourceFormat : unstructured git : repo : ROOT REPOSITORY revision : ROOT REVISION branch : ROOT BRANCH dir : ROOT DIRECTORY auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME noSSLVerify : ROOT NO SSL VERIFY caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Terraform For each cluster that you want to configure Config Sync, apply a google gkehub feature membership resource block that contains a configmanagement and config sync block, such as in the following example: git data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true git { sync repo = " REPO " sync branch = " BRANCH " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the Git repository that contains your configuration files.
- SECRET : the secret auth type. oci data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true oci { sync repo = " REPO " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the OCI image repository that contains your configuration files.
- For example, https://github.com/GoogleCloudPlatform/anthos-config-management-samples .
- The following example shows how to use the deploymentOverrides field to set a new CPU request and limit and a new memory request and limit for the reconciler-manager container: applySpecVersion : 1 spec : configSync : enabled : true ... other fields... deploymentOverrides : - name : reconciler-manager namespace : config-management-system containers : - name : reconciler-manager cpuRequest : 50m cpuLimit : 100m memoryRequest : 256Mi memoryLimit : 512Mi After you have create your apply-spec.yaml file, apply it by running the following command: gcloud beta container fleet config-management apply \ --membership = MEMBERSHIP NAME \ --config = apply-spec.yaml \ --project = PROJECT ID For a complete list of the fields that you can override, see the gcloud apply spec fields reference documentation .

### GitOps best practices \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/gitops-best-practices](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/gitops-best-practices)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use unstructured repositories Config Sync supports two structures for organizing a repository: unstructured and hierarchical.
- By using an unstructured repository, it becomes much easier to share and reuse configuration packages.
- Although you must add additional tools and logic to your commit process, testing before applying configs has the following benefits: Surfacing config changes in a change request can help prevent errors from making it into a repository.
- The following diagram shows the layout of these repositories: Figure 1: Suggested architecture for a package and platform repository that flows into the application configuration and application code repositories.

