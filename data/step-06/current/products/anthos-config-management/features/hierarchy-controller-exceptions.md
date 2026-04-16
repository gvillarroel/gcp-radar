---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.335Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Hierarchy Controller Exceptions"
feature_slug: "hierarchy-controller-exceptions"
latest_feature_date: "2021-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
keywords:
  - "hierarchy"
  - "controller"
  - "exceptions"
  - "let"
  - "users"
  - "use"
  - "kubernetes"
  - "label"
---

# Hierarchy Controller Exceptions

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Hierarchy Controller Exceptions let users use Kubernetes label selectors to control where objects are propagated.

## Extended Definition

Hierarchy Controller Exceptions let users use Kubernetes label selectors to control where objects are propagated.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)

## Supporting Pages

### Disable Hierarchy Controller | Config Sync | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller)
- Source ID: `feature-recovery-direct-http`
- Final score: 312
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Disable Hierarchy Controller | Config Sync | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Google Kubernetes Engine (GKE) Config Sync Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Config Sync overview GKE documentation Get started Quickstart: Sync configs from Git Prepare your cluster Authenticate Grant access to Git Grant access to OCI and Helm Install Config Sync Install Config Sync with default settings Customize your Config Sync installation Install Config Sync as a fleet default Install Config Sync manually Create a source of truth About sources of truth GitOps best practices Organize configuration files Use a hierarchical repo Safely roll out changes across multiple environments Connect Configure syncing from more than one source of truth Sync OCI artifacts from Artifact Registry Sync Helm charts from Artifact Registry Deploy across a fleet About fleet packages Quickstart: Deploy resources across a fleet Deploy fleet packages Monitor fleet packages with audit logs Use Config Sync with Kustomize About Kustomize Use Config Sync with Kustomize and Helm Use Config Sync in multiple environments with automated rendering Use Config Sync with Terraform Provision Config Sync resources with Terraform Manage team resources with Terraform Configure Configure clusters and cluster-scoped objects Configure namespace-scoped objects Manage packages Declare dependency between objects Maintain Upgrade Config Sync Prevent config drift Custom node placement Use the nomos command-line tool Validate configs with Cloud Build Configure Config Sync with kubectl commands Update Config Sync using a private registry Stop and resume syncing Uninstall Config Sync Migrate Manage existing cluster objects Breaking up a repository Migrate your ConfigManagement object Disable Hierarchy Controller Monitor Use the Config Sync dashboard Config Sync metrics Monitor Config Sync with Prometheus Monitor Config Sync with Cloud Monitoring Monitor RootSync and RepoSync objects Use Config Sync SLIs Query logs Troubleshoot Introduction to troubleshooting Config Sync architecture Error messages Known issues Troubleshoot by issue type Connecting to the source of truth Syncing configs Controller fights Permission issues with a Google service account Admission webhook AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Disable Hierarchy Controller Stay organized with collections Save and categorize content based on your preferences.
- To determine how to disable Hierarchy Controller, inspect the kubectl ConfigManagement object or gcloud apply spec file and take an action that corresponds to the value in the following fields: hierarchyController.enablePodTreeLabels : if true , and you previously enabled hierarchical observability, don't proceed with the steps on this page.
- Removing the fields doesn't disable Hierarchy Controller and causes the fields to become externally-managed instead of managed by Config Connector. kubectl Remove the hierarchyController block from the ConfigManagement object .
- Instead, reach out to Cloud Customer Care for help removing Hierarchy Controller. hierarchyController.enabled: if true , follow the instructions on this page to disable Hierarchy Controller.

### Install Config Sync manually using kubectl | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `feature-recovery-direct-http`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install Config Sync manually using kubectl | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Google Kubernetes Engine (GKE) Config Sync Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Config Sync overview GKE documentation Get started Quickstart: Sync configs from Git Prepare your cluster Authenticate Grant access to Git Grant access to OCI and Helm Install Config Sync Install Config Sync with default settings Customize your Config Sync installation Install Config Sync as a fleet default Install Config Sync manually Create a source of truth About sources of truth GitOps best practices Organize configuration files Use a hierarchical repo Safely roll out changes across multiple environments Connect Configure syncing from more than one source of truth Sync OCI artifacts from Artifact Registry Sync Helm charts from Artifact Registry Deploy across a fleet About fleet packages Quickstart: Deploy resources across a fleet Deploy fleet packages Monitor fleet packages with audit logs Use Config Sync with Kustomize About Kustomize Use Config Sync with Kustomize and Helm Use Config Sync in multiple environments with automated rendering Use Config Sync with Terraform Provision Config Sync resources with Terraform Manage team resources with Terraform Configure Configure clusters and cluster-scoped objects Configure namespace-scoped objects Manage packages Declare dependency between objects Maintain Upgrade Config Sync Prevent config drift Custom node placement Use the nomos command-line tool Validate configs with Cloud Build Configure Config Sync with kubectl commands Update Config Sync using a private registry Stop and resume syncing Uninstall Config Sync Migrate Manage existing cluster objects Breaking up a repository Migrate your ConfigManagement object Disable Hierarchy Controller Monitor Use the Config Sync dashboard Config Sync metrics Monitor Config Sync with Prometheus Monitor Config Sync with Cloud Monitoring Monitor RootSync and RepoSync objects Use Config Sync SLIs Query logs Troubleshoot Introduction to troubleshooting Config Sync architecture Error messages Known issues Troubleshoot by issue type Connecting to the source of truth Syncing configs Controller fights Permission issues with a Google service account Admission webhook AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Install Config Sync manually using kubectl Stay organized with collections Save and categorize content based on your preferences.
- Run the following command to update the cluster in your current kubectl context: nomos migrate --remove-configmanagement shell script Copy the following shell script to a file and then run it to update the cluster in your current kubectl context. #!/bin/bash set -euox pipefail hnc_enabled = " $( kubectl get configmanagements.configmanagement.gke.io config-management -o = jsonpath = "{.spec.hierarchyController.enabled}" --ignore-not-found ) " if [[ " ${ hnc_enabled } " == "true" ]] ; then echo "Hierarchy Controller is enabled on the ConfigManagement object.
- Caution: Ensure Hierarchy Controller is disabled before proceeding. nomos (recommended) Make sure the nomos CLI is on the latest version.
- It must be disabled before migrating." echo "This can be done by unsetting the spec.hierarchyController field on ConfigManagement." exit 1 fi kubectl delete deployment -n config-management-system config-management-operator --ignore-not-found --cascade = foreground if kubectl get configmanagement config-management &> /dev/null ; then kubectl patch configmanagement config-management --type = "merge" -p '{"metadata":{"finalizers":[]}}' kubectl delete configmanagement config-management --cascade = orphan --ignore-not-found fi kubectl delete clusterrolebinding config-management-operator --ignore-not-found kubectl delete clusterrole config-management-operator --ignore-not-found kubectl delete serviceaccount -n config-management-system config-management-operator --ignore-not-found kubectl delete customresourcedefinition configmanagements.configmanagement.gke.io --ignore-not-found Install the new Config Sync version To upgrade Config Sync, complete the following steps for each enrolled cluster: Download the Config Sync manifest and nomos commands for the new version.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- If you were previously syncing to a hierarchical repository and had to declare the controller namespace alongside any resources, consider switching to an unstructured repository for more flexibility in your source structure.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Reference Send feedback Error reference Stay organized with collections Save and categorize content based on your preferences.
- If you declared the resource-group-system or config-management-monitoring namespaces, unmanage the controller namespace: Update Config Sync to stop managing the namespace and any resource declared underneath.
- K is inherited from Kubernetes conventions, rules with prefix N are specific to nomos , V is specific to errors detectable in the initial state of the repository and the cluster.

