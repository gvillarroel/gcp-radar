---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.303Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sRequireDaemonsets constraint template"
feature_slug: "k8srequiredaemonsets-constraint-template"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
keywords:
  - "k8srequiredaemonsets"
  - "constraint"
  - "template"
  - "enforces"
  - "requirements"
  - "related"
  - "daemonsets"
  - "kubernetes"
---

# K8sRequireDaemonsets constraint template

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

This constraint template enforces requirements related to DaemonSets in Kubernetes clusters.

## Extended Definition

This constraint template enforces requirements related to DaemonSets in Kubernetes clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)

## Supporting Pages

### Deploy fleet packages \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Create or update the fleet package: Create a fleet package gcloud container fleet packages create FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Update a fleet package gcloud container fleet packages update FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Delete a fleet package Deleting a fleet package also deletes the following resources: The Kubernetes resources deployed on your clusters The fleet package rollout history To delete a fleet package, run the following command: gcloud container fleet packages delete FLEET PACKAGE NAME --force Troubleshoot To find methods for diagnosing and resolving errors related to Cloud Build, see Troubleshooting build errors .
- To deploy a fleet package with variants, complete the following steps: Create or update your FleetPackage spec to include the variantsPattern and variantNameTemplate fields: resourceBundleSelector : cloudBuildRepository : name : projects/ PROJECT ID /locations/us-central1/connections/ CONNECTION NAME /repositories/ REPOSITORY NAME tag : TAG serviceAccount : projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com path : CONFIG FILE PATH variantsPattern : VARIANT PATTERN target : fleet : project : projects/ PROJECT ID rolloutStrategy : rolling : maxConcurrent : MAX CLUSTERS target : fleet : project : projects/ PROJECT ID variantSelector : variantNameTemplate : VARIANT NAME TEMPLATE Replace the following: VARIANT PATTERN : a glob pattern to generate variants from your repository, such as (matches all files and directories) or .yaml (matches only files).
- Create a file named fleetpackage-spec.yaml with the following content: resourceBundleSelector : cloudBuildRepository : name : projects/ PROJECT ID /locations/us-central1/connections/ CONNECTION NAME /repositories/ REPOSITORY NAME tag : TAG serviceAccount : projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com path : CONFIG FILE PATH Match all files and directories to generate variants variantsPattern : " " target : fleet : project : projects/ PROJECT ID rolloutStrategy : rolling : maxConcurrent : MAX CLUSTERS variantSelector : variantNameTemplate : " VARIANT NAME " set the state to SUSPENDED to pause new rollouts set the state back to ACTIVE to resume rollouts state: SUSPENDED Replace the following: CONNECTION NAME : the name that you chose when you connected your Git host to Cloud Build.
- This command is particularly useful for debugging issues related to variants because it lets you inspect exactly which variants were included in a specific release: gcloud container fleet packages resource-bundles releases describe RELEASE NAME \ --resource-bundle flpkg-rb- FLEET PACKAGE NAME Replace the following: FLEET PACKAGE NAME : the name of your fleet package.

### "Configure Kubernetes with Kustomize \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Kustomize is a Kubernetes configuration transformation tool that lets you customize untemplated YAML files, leaving the original files untouched.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Configure Kubernetes with Kustomize Stay organized with collections Save and categorize content based on your preferences.
- Sets the target namespace for a release (.Release.Namespace in the template) helmCharts.valuesInline Values to use instead of default values that accompany the chart helmCharts.valuesFile Accepts a string.
- Requirements and limitations Before setting up automatic rendering with Kustomize, review the following requirements and limitations: Hierarchical sources are not supported.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Create, or make sure you have access to, a cluster that is on a Google Kubernetes Engine supported platform and version and meets the requirements for Config Sync .
- Kubernetes API method If you used the Control namespace-scoped sources of truth with the Kubernetes API method, application operators can use the following steps to remove a namespace-scoped source of truth: Decide if you'd like to delete or keep the resources that are managed through your RootSync and RepoSync objects.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Configure syncing from more than one source of truth Stay organized with collections Save and categorize content based on your preferences.
- If you are using gcpserviceaccount as the auth type and don't have Workload Identity Federation for GKE enabled, you must create an IAM policy binding between the Kubernetes service account for each namespace and the Google service account.

