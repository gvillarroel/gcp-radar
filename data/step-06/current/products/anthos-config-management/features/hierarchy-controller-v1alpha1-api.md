---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.336Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Hierarchy Controller v1alpha1 API"
feature_slug: "hierarchy-controller-v1alpha1-api"
latest_feature_date: "2021-01-28"
deprecation_date: "2021-01-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
keywords:
  - "hierarchy"
  - "controller"
  - "v1alpha1"
  - "was"
  - "removed"
  - "release"
  - "deprecated"
  - "2021"
---

# Hierarchy Controller v1alpha1 API

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Hierarchy Controller v1alpha1 API support was removed in this release; deprecated on 2021-01-28.

## Extended Definition

Hierarchy Controller v1alpha1 API support was removed in this release; deprecated on 2021-01-28.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)

## Supporting Pages

### Disable Hierarchy Controller \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To determine how to disable Hierarchy Controller, inspect the kubectl ConfigManagement object or gcloud apply spec file and take an action that corresponds to the value in the following fields: hierarchyController.enablePodTreeLabels : if true , and you previously enabled hierarchical observability, don't proceed with the steps on this page.
- Removing the fields doesn't disable Hierarchy Controller and causes the fields to become externally-managed instead of managed by Config Connector. kubectl Remove the hierarchyController block from the ConfigManagement object .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Disable Hierarchy Controller Stay organized with collections Save and categorize content based on your preferences.
- Instead, reach out to Cloud Customer Care for help removing Hierarchy Controller. hierarchyController.enabled: if true , follow the instructions on this page to disable Hierarchy Controller.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- KNV1040: Unknown Resource In Hierarchy Config Error Deprecated in Config Sync 1.3.
- If you were previously syncing to a hierarchical repository and had to declare the controller namespace alongside any resources, consider switching to an unstructured repository for more flexibility in your source structure.
- If you declared the resource-group-system or config-management-monitoring namespaces, unmanage the controller namespace: Update Config Sync to stop managing the namespace and any resource declared underneath.
- Ensure that you specify the config using the appropriate data schema: ClusterSelector NamespaceSelector KNV1016: Policy Management Not Installed Error Deprecated in Config Sync 1.3.2.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command to update the cluster in your current kubectl context: nomos migrate --remove-configmanagement shell script Copy the following shell script to a file and then run it to update the cluster in your current kubectl context. #!/bin/bash set -euox pipefail hnc enabled = " $( kubectl get configmanagements.configmanagement.gke.io config-management -o = jsonpath = "{.spec.hierarchyController.enabled}" --ignore-not-found ) " if [[ " ${ hnc enabled } " == "true" ]] ; then echo "Hierarchy Controller is enabled on the ConfigManagement object.
- Caution: Ensure Hierarchy Controller is disabled before proceeding. nomos (recommended) Make sure the nomos CLI is on the latest version.
- It must be disabled before migrating." echo "This can be done by unsetting the spec.hierarchyController field on ConfigManagement." exit 1 fi kubectl delete deployment -n config-management-system config-management-operator --ignore-not-found --cascade = foreground if kubectl get configmanagement config-management &> /dev/null ; then kubectl patch configmanagement config-management --type = "merge" -p '{"metadata":{"finalizers":[]}}' kubectl delete configmanagement config-management --cascade = orphan --ignore-not-found fi kubectl delete clusterrolebinding config-management-operator --ignore-not-found kubectl delete clusterrole config-management-operator --ignore-not-found kubectl delete serviceaccount -n config-management-system config-management-operator --ignore-not-found kubectl delete customresourcedefinition configmanagements.configmanagement.gke.io --ignore-not-found Install the new Config Sync version To upgrade Config Sync, complete the following steps for each enrolled cluster: Download the Config Sync manifest and nomos commands for the new version.
- Helm root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : helm sourceFormat : unstructured helm : repo : ROOT HELM REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.

