---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.326Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync Cloud Source Repositories access with Workload Identity"
feature_slug: "config-sync-cloud-source-repositories-access-with-workload-identity"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci"
keywords:
  - "config"
  - "sync"
  - "source"
  - "repositories"
  - "access"
  - "workload"
  - "identity"
  - "can"
---

# Config Sync Cloud Source Repositories access with Workload Identity

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync can access Cloud Source Repositories through a Google service account when Workload Identity is enabled.

## Extended Definition

Config Sync can access Cloud Source Repositories through a Google service account when Workload Identity is enabled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)

## Supporting Pages

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Create, or make sure you have access to, an unstructured source of truth that can contain the configs that Config Sync syncs to.
- Config Sync supports Git repositories, Helm charts, and OCI images as the source of truth.
- For example, the following ClusterRole or Role grants permissions to manage Deployment and ServiceAccount objects: ROOT REPO/namespaces/ NAMESPACE /sync-role.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ROLE KIND metadata : namespace : NAMESPACE # only set this field for a 'Role' name : RECONCILER ROLE rules : Update 'apiGroups' and 'resources' to reference actual resources managed by 'RepoSync'. - apiGroups : [ "apps" ] resources : [ "deployments" ] verbs : [ " " ] - apiGroups : [ "" ] resources : [ "serviceaccounts" ] verbs : [ " " ] Save the RoleBinding manifest that references the ClusterRole or Role as FILENAME : ROOT REPO/namespaces/ NAMESPACE / FILENAME .yaml kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : name : syncs-repo namespace : NAMESPACE subjects : - kind : ServiceAccount name : SERVICE ACCOUNT NAME namespace : config-management-system roleRef : kind : ROLE KIND name : RECONCILER ROLE apiGroup : rbac.authorization.k8s.io Replace the following: FILENAME : the name for the RoleBinding manifest.
- Helm ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : helm sourceFormat : unstructured helm : repo : NAMESPACE REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.

### "Grant Config Sync access to your OCI image or Helm repository \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use a Kubernetes service account to grant Config Sync read-only access to your Helm repository, grant the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role to the Kubernetes service account that includes the Workload Identity Federation for GKE pool: Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : your project ID.
- Grant the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role to the Kubernetes service account that includes the Workload Identity Federation for GKE pool: Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : your project ID.
- Before you begin Before you grant Config Sync read-only access to your source of truth, complete the following tasks: Prepare, or have access to, an OCI image or Helm repository where you store your configuration files that you want Config Sync to sync.
- Config Sync requires read-only access to your source of truth so it can read your configurations, apply them to your clusters, and keep them in sync.

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To grant Config Sync read-only access to your repository by using a Compute Engine default service account, grant the default service account the roles/source.reader role: gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/source.reader \ --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" Replace the following: PROJECT ID : your project ID PROJECT NUMBER : with your project number.
- Config Sync requires read-only access to your source of truth so it can read your configurations, apply them to your clusters, and keep them in sync.
- When you install Config Sync, use Workload Identity ( gcpserviceaccount ) as the authentication type.
- When you install Config Sync, use Workload Identity ( gcpserviceaccount ) as the authentication type.

