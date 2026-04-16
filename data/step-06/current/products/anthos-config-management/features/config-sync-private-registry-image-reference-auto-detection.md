---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.276Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync private registry image reference auto-detection"
feature_slug: "config-sync-private-registry-image-reference-auto-detection"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
keywords:
  - "config"
  - "sync"
  - "private"
  - "registry"
  - "image"
  - "reference"
  - "auto"
  - "detection"
---

# Config Sync private registry image reference auto-detection

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync automatically detects and updates reconciler image references to use a configured private registry.

## Extended Definition

Config Sync automatically detects and updates reconciler image references to use a configured private registry.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)

## Supporting Pages

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Although Config Sync automatically detects changes from the source of truth, you can add an extra layer of drift detection by adding an admission webhook to a namespace-scoped source of truth.
- For example, the following ClusterRole or Role grants permissions to manage Deployment and ServiceAccount objects: ROOT REPO/namespaces/ NAMESPACE /sync-role.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ROLE KIND metadata : namespace : NAMESPACE # only set this field for a 'Role' name : RECONCILER ROLE rules : Update 'apiGroups' and 'resources' to reference actual resources managed by 'RepoSync'. - apiGroups : [ "apps" ] resources : [ "deployments" ] verbs : [ " " ] - apiGroups : [ "" ] resources : [ "serviceaccounts" ] verbs : [ " " ] Save the RoleBinding manifest that references the ClusterRole or Role as FILENAME : ROOT REPO/namespaces/ NAMESPACE / FILENAME .yaml kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : name : syncs-repo namespace : NAMESPACE subjects : - kind : ServiceAccount name : SERVICE ACCOUNT NAME namespace : config-management-system roleRef : kind : ROLE KIND name : RECONCILER ROLE apiGroup : rbac.authorization.k8s.io Replace the following: FILENAME : the name for the RoleBinding manifest.
- Default ClusterRoles Save the RoleBinding manifest that references a default ClusterRole , for example admin or edit , as FILENAME : kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : name : syncs-repo namespace : NAMESPACE subjects : - kind : ServiceAccount name : SERVICE ACCOUNT NAME namespace : config-management-system roleRef : kind : ClusterRole name : CLUSTERROLE NAME apiGroup : rbac.authorization.k8s.io Replace the following: FILENAME : the name for the RoleBinding manifest.
- OCI ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : oci sourceFormat : unstructured oci : image : NAMESPACE IMAGE dir : NAMESPACE DIRECTORY auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Error message: "MESSAGE": "Unable to retrieve pull secret, the image pull may not succeed." Unable to retrieve pull secret, the image pull may not succeed If you're using a private registry with Google Distributed Cloud, the Config Sync installation or upgrade can get stuck.
- To resolve this issue, follow the steps in Update Config Sync using a private registry before installing or upgrading Config Sync.
- You can restart the reconciler Pods by running the following commands: restart a root reconciler kubectl delete pod -n config-management-system -l configsync.gke.io/reconciler = root-reconciler restart a namespace reconciler kubectl delete pod -n config-management-system -l configsync.gke.io/reconciler = ns-reconciler-NAMESPACE KNV2016: Transient Error This error represents a transient issue that should automatically resolve at a later time.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Reference Send feedback Error reference Stay organized with collections Save and categorize content based on your preferences.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- SECRET : the secret auth type. oci data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true oci { sync repo = " REPO " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the OCI image repository that contains your configuration files.
- For more information on these authentication types, see Grant Config Sync access to Git . oci none : Use no authentication gcenode : Use the Compute Engine default service account to access an image in Artifact Registry.
- Terraform For each cluster that you want to configure Config Sync, apply a google gkehub feature membership resource block that contains a configmanagement and config sync block, such as in the following example: git data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true git { sync repo = " REPO " sync branch = " BRANCH " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the Git repository that contains your configuration files.
- The following example shows how to use the deploymentOverrides field to set a new CPU request and limit and a new memory request and limit for the reconciler-manager container: applySpecVersion : 1 spec : configSync : enabled : true ... other fields... deploymentOverrides : - name : reconciler-manager namespace : config-management-system containers : - name : reconciler-manager cpuRequest : 50m cpuLimit : 100m memoryRequest : 256Mi memoryLimit : 512Mi After you have create your apply-spec.yaml file, apply it by running the following command: gcloud beta container fleet config-management apply \ --membership = MEMBERSHIP NAME \ --config = apply-spec.yaml \ --project = PROJECT ID For a complete list of the fields that you can override, see the gcloud apply spec fields reference documentation .

