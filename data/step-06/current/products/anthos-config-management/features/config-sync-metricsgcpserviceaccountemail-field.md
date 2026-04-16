---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.284Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync metricsGcpServiceAccountEmail field"
feature_slug: "config-sync-metricsgcpserviceaccountemail-field"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
keywords:
  - "config"
  - "sync"
  - "metricsgcpserviceaccountemail"
  - "field"
  - "gcloud"
  - "apply"
  - "spec"
  - "adds"
---

# Config Sync metricsGcpServiceAccountEmail field

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The gcloud apply spec adds the spec.configSync.metricsGcpServiceAccountEmail field to simplify exporting Config Sync metrics to Cloud Monitoring with Workload Identity.

## Extended Definition

The gcloud apply spec adds the spec.configSync.metricsGcpServiceAccountEmail field to simplify exporting Config Sync metrics to Cloud Monitoring with Workload Identity.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)

## Supporting Pages

### gcloud apply spec fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields)
- Source ID: `site-docs-reference`
- Final score: 261
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example gcloud apply spec applySpecVersion : 1 spec : configSync : enabled : true sourceFormat : unstructured syncRepo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples syncBranch : main secretType : none policyDir : config-sync-quickstart/multirepo/root Example gcloud apply spec with deployment resource overrides If you want to customize Config Sync resource requests and limits, add the deploymentOverrides field in your apply spec.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Reference Send feedback gcloud apply spec fields Stay organized with collections Save and categorize content based on your preferences.
- You can't use this field to override other fields in a Deployment, such as the number of replicas. applySpecVersion : 1 spec : configSync : enabled : true deploymentOverrides : - name : reconciler-manager namespace : config-management-system containers : - name : reconciler-manager cpuRequest : 50m cpuLimit : 100m memoryRequest : 256Mi memoryLimit : 512Mi Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This field is only used when spec.configSync.secretType is gcpserviceaccount . spec.configSync.metricsGcpServiceAccountEmail Deprecated : If Workload Identity Federation for GKE is enabled, Google Cloud Service Account is not required for exporting Config Sync metrics.

### "gcloud configuration field behavior \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The configSync.deploymentOverrides[].deploymentName field is spec.configSync.deploymentOverrides[].name for the apply command.
- Unsupported fields The --config and --fleet-default-member-config flags on the update and enable commands error if any of the following legacy fields are set: configSync.metricsGcpServiceAccountEmail policyController hierarchyController binauthz management Example configuration files This section provides examples of configurations which can be passed to the --config and --fleet-default-member-config flags on the update and enable commands.
- Default field values Field Description configSync.enabled If the user specifies the configSync field, configSync.enabled defaults to true . version For the --config flag, the Config Sync version defaults to its existing value in the membership configuration, or if it's not configured, the version of Config Sync installed on the membership cluster.
- Unlike the --config flag on the apply command, which defines a Google Cloud CLI representation of the underlying configuration API fields, the --config and --fleet-default-member-config flags on the update command directly adopt the schema of the Spec API field and MembershipSpec API field , respectively.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows how to use the deploymentOverrides field to set a new CPU request and limit and a new memory request and limit for the reconciler-manager container: applySpecVersion : 1 spec : configSync : enabled : true ... other fields... deploymentOverrides : - name : reconciler-manager namespace : config-management-system containers : - name : reconciler-manager cpuRequest : 50m cpuLimit : 100m memoryRequest : 256Mi memoryLimit : 512Mi After you have create your apply-spec.yaml file, apply it by running the following command: gcloud beta container fleet config-management apply \ --membership = MEMBERSHIP NAME \ --config = apply-spec.yaml \ --project = PROJECT ID For a complete list of the fields that you can override, see the gcloud apply spec fields reference documentation .
- You can override the resource requests and limits for some Config Sync components by using the deploymentOverrides field in your apply-spec.yaml file when you install Config Sync with the gcloud CLI.
- You can then later use kubectl commands to create additional RootSync objects or RepoSyncs that you can fully manage using kubectl commands later. apply-spec.yaml applySpecVersion : 1 spec : configSync : enabled : true If you don't have a source of truth yet, omit the following fields.
- Terraform For each cluster that you want to configure Config Sync, apply a google gkehub feature membership resource block that contains a configmanagement and config sync block, such as in the following example: git data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true git { sync repo = " REPO " sync branch = " BRANCH " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the Git repository that contains your configuration files.

