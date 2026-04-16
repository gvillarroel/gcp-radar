---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.312Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Fleet Workload Identity for Cloud Source Repositories authentication"
feature_slug: "fleet-workload-identity-for-cloud-source-repositories-authentication"
latest_feature_date: "2022-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
keywords:
  - "fleet"
  - "workload"
  - "identity"
  - "source"
  - "repositories"
  - "authentication"
  - "config"
  - "sync"
---

# Fleet Workload Identity for Cloud Source Repositories authentication

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync can use Fleet Workload Identity to authenticate to Git repositories hosted in Cloud Source Repositories.

## Extended Definition

Config Sync can use Fleet Workload Identity to authenticate to Git repositories hosted in Cloud Source Repositories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)

## Supporting Pages

### "Quickstart: Deploy Kubernetes resources across a fleet \_|\_ Config Sync\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In this tutorial, you complete the following tasks: Connect a Git repository to Cloud Build Create and register clusters to a fleet Install Config Sync as a fleet default Deploy resources from your repository to your fleet of clusters Before you begin Sign in to your Google Cloud account.
- Connect the repository to Cloud Build Config Sync's fleet package service uses Cloud Build to sync and fetch the Kubernetes resources from your Git repository.
- In your Cloud Shell, create a file named fleet-package.yaml with the following content: resourceBundleSelector : cloudBuildRepository : name : projects/ PROJECT ID /locations/us-central1/connections/fleet-package-quickstart-connection/repositories/ REPOSITORY NAME tag : v1.0.0 serviceAccount : projects/ PROJECT ID /serviceAccounts/quickstart-service-account@ PROJECT ID . iam.gserviceaccount.com path : Match all files (including deployment.yaml) to generate variants variantsPattern : " .yaml" target : fleet : project : projects/ PROJECT ID rolloutStrategy : rolling : maxConcurrent : 1 variantSelector : Explicitly match the variant generated from "deployment.yaml" variantNameTemplate : "deployment" Replace REPOSITORY NAME with the repository name from Cloud Build.
- Create a second GKE cluster: gcloud container clusters create-auto cluster2 \ --project = PROJECT ID \ --region = REGION \ --fleet-project = PROJECT ID \ --release-channel = rapid Install Config Sync as a fleet default To use the fleet package service, Config Sync must be installed on both clusters.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Config Sync supports Git repositories, Helm charts, and OCI images as the source of truth.
- For example, the following ClusterRole or Role grants permissions to manage Deployment and ServiceAccount objects: ROOT REPO/namespaces/ NAMESPACE /sync-role.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ROLE KIND metadata : namespace : NAMESPACE # only set this field for a 'Role' name : RECONCILER ROLE rules : Update 'apiGroups' and 'resources' to reference actual resources managed by 'RepoSync'. - apiGroups : [ "apps" ] resources : [ "deployments" ] verbs : [ " " ] - apiGroups : [ "" ] resources : [ "serviceaccounts" ] verbs : [ " " ] Save the RoleBinding manifest that references the ClusterRole or Role as FILENAME : ROOT REPO/namespaces/ NAMESPACE / FILENAME .yaml kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : name : syncs-repo namespace : NAMESPACE subjects : - kind : ServiceAccount name : SERVICE ACCOUNT NAME namespace : config-management-system roleRef : kind : ROLE KIND name : RECONCILER ROLE apiGroup : rbac.authorization.k8s.io Replace the following: FILENAME : the name for the RoleBinding manifest.
- Helm ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : helm sourceFormat : unstructured helm : repo : NAMESPACE REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.
- Helm ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : helm sourceFormat : unstructured helm : repo : NAMESPACE REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Choose the same authentication type that you configured when you installed Config Sync: Note: for OCI, you can only select Workload Identity for authentication.
- Terraform For each cluster that you want to configure Config Sync, apply a google gkehub feature membership resource block that contains a configmanagement and config sync block, such as in the following example: git data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true git { sync repo = " REPO " sync branch = " BRANCH " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the Git repository that contains your configuration files.
- SECRET : the secret auth type. oci data "google project" "default" {} resource "google container cluster" "default" { name = "gke-autopilot-basic" location = "us-central1" fleet { project = data.google project.default.project id } enable autopilot = true } resource "google gke hub feature" "configmanagement feature" { name = "configmanagement" location = "global" } resource "google gke hub feature membership" "configmanagement feature member" { location = "global" feature = google gke hub feature.configmanagement feature.name membership = google container cluster.default.fleet[0].membership id membership location = google container cluster.default.fleet[0].membership location configmanagement { config sync { The field enabled was introduced in Terraform version 5.41.0, and needs to be set to true explicitly to install Config Sync. enabled = true oci { sync repo = " REPO " policy dir = " DIRECTORY " secret type = " SECRET " } } } } Replace the following: REPO : the URL to the OCI image repository that contains your configuration files.
- For details, see the Google service account tab of the Grant Config Sync access to Git with a Google service account section. gcenode : Use a Google service account to access a Cloud Source Repositories.

