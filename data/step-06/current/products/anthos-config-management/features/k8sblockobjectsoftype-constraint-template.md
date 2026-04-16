---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.302Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sBlockObjectsOfType constraint template"
feature_slug: "k8sblockobjectsoftype-constraint-template"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "k8sblockobjectsoftype"
  - "constraint"
  - "template"
  - "blocks"
  - "creation"
  - "specified"
  - "kubernetes"
  - "object"
---

# K8sBlockObjectsOfType constraint template

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

This constraint template blocks creation of specified Kubernetes object types.

## Extended Definition

This constraint template blocks creation of specified Kubernetes object types.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### "REST Resource: projects.locations.fleetPackages \_|\_ Config Sync \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Source can be a directly pushed ResourceBundle or CloudBuildRepository containing the Kubernetes configuration. source can be only one of the following: resourceBundle object ( ResourceBundleTag ) Information specifying ResourceBundle . cloudBuildRepository object ( CloudBuildRepository ) Information specifying CloudBuildRepository .
- Configuration to select target clusters to deploy Kubernetes configuration to. rolloutStrategy object ( RolloutStrategy ) Optional.
- The strategy to use to deploy Kubernetes configuration to clusters. variantSelector object ( VariantSelector ) Required.
- Information specifying the source of Kubernetes configuration to deploy. target object ( Target ) Optional.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Kubernetes API method If you used the Control namespace-scoped sources of truth with the Kubernetes API method, application operators can use the following steps to remove a namespace-scoped source of truth: Decide if you'd like to delete or keep the resources that are managed through your RootSync and RepoSync objects.
- Control a source of truth with the Kubernetes API In this method, the central administrator delegates declaration of other RootSync objects to other administrators.
- For example, the following ClusterRole or Role grants permissions to manage Deployment and ServiceAccount objects: ROOT REPO/namespaces/ NAMESPACE /sync-role.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ROLE KIND metadata : namespace : NAMESPACE # only set this field for a 'Role' name : RECONCILER ROLE rules : Update 'apiGroups' and 'resources' to reference actual resources managed by 'RepoSync'. - apiGroups : [ "apps" ] resources : [ "deployments" ] verbs : [ " " ] - apiGroups : [ "" ] resources : [ "serviceaccounts" ] verbs : [ " " ] Save the RoleBinding manifest that references the ClusterRole or Role as FILENAME : ROOT REPO/namespaces/ NAMESPACE / FILENAME .yaml kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : name : syncs-repo namespace : NAMESPACE subjects : - kind : ServiceAccount name : SERVICE ACCOUNT NAME namespace : config-management-system roleRef : kind : ROLE KIND name : RECONCILER ROLE apiGroup : rbac.authorization.k8s.io Replace the following: FILENAME : the name for the RoleBinding manifest.
- Helm ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : helm sourceFormat : unstructured helm : repo : NAMESPACE REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- You can configure your RootSync or RepoSync object to sync from a Helm repository using the Kubernetes API , or declare it in another source of truth .
- Helm root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : helm sourceFormat : unstructured helm : repo : ROOT HELM REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.
- To propagate the cluster name to both RootSync and RepoSync reconcilers, restart the reconciler-manager deployment: kubectl rollout restart deployment/reconciler-manager -n config-management-system Verify the sync status of the root repository You can use the nomos status command to inspect the sync status of the root repository: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Verify the RootSync installation When you create a RootSync object, Config Sync creates a reconciler with the root-reconciler prefix.
- Run the following command to update the cluster in your current kubectl context: nomos migrate --remove-configmanagement shell script Copy the following shell script to a file and then run it to update the cluster in your current kubectl context. #!/bin/bash set -euox pipefail hnc enabled = " $( kubectl get configmanagements.configmanagement.gke.io config-management -o = jsonpath = "{.spec.hierarchyController.enabled}" --ignore-not-found ) " if [[ " ${ hnc enabled } " == "true" ]] ; then echo "Hierarchy Controller is enabled on the ConfigManagement object.

