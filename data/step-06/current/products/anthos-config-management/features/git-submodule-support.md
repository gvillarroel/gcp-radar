---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.349Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Git submodule support"
feature_slug: "git-submodule-support"
latest_feature_date: "2020-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo"
keywords:
  - "git"
  - "submodule"
  - "lets"
  - "anthos"
  - "config"
  - "management"
  - "sync"
  - "repositories"
---

# Git submodule support

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Git submodule support lets Anthos Config Management sync repositories that use Git submodules without extra configuration.

## Extended Definition

Git submodule support lets Anthos Config Management sync repositories that use Git submodules without extra configuration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo)

## Supporting Pages

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following ClusterRole or Role grants permissions to manage Deployment and ServiceAccount objects: ROOT REPO/namespaces/ NAMESPACE /sync-role.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ROLE KIND metadata : namespace : NAMESPACE # only set this field for a 'Role' name : RECONCILER ROLE rules : Update 'apiGroups' and 'resources' to reference actual resources managed by 'RepoSync'. - apiGroups : [ "apps" ] resources : [ "deployments" ] verbs : [ " " ] - apiGroups : [ "" ] resources : [ "serviceaccounts" ] verbs : [ " " ] Save the RoleBinding manifest that references the ClusterRole or Role as FILENAME : ROOT REPO/namespaces/ NAMESPACE / FILENAME .yaml kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : name : syncs-repo namespace : NAMESPACE subjects : - kind : ServiceAccount name : SERVICE ACCOUNT NAME namespace : config-management-system roleRef : kind : ROLE KIND name : RECONCILER ROLE apiGroup : rbac.authorization.k8s.io Replace the following: FILENAME : the name for the RoleBinding manifest.
- Helm root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : helm sourceFormat : unstructured helm : repo : ROOT HELM REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.
- Helm root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : helm sourceFormat : unstructured helm : repo : ROOT HELM REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.
- Git root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : git sourceFormat : unstructured git : repo : ROOT REPOSITORY revision : ROOT REVISION branch : ROOT BRANCH dir : ROOT DIRECTORY auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME noSSLVerify : ROOT NO SSL VERIFY caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.

### "Quickstart: Sync configs from a Git repository \_|\_ Config Sync \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Repository URL field, enter https://github.com/GoogleCloudPlatform/anthos-config-management-samples .
- The package details page provides an overview of all synced resources, including the resource type and which namespace the resource is synced to. (Optional) Explore the sample repository The configurations applied to your cluster are defined in the /config-sync-quickstart/multirepo/ repository.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Quickstart: Sync configs from a Git repository Stay organized with collections Save and categorize content based on your preferences.
- In this example, the RepoSync object points to the config-sync-quickstart/multirepo/ namespaces/gamestore directory within the same repository, but in a real-world scenario, you could point to a different Git repository.

### Safe rollouts with Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Note: Config Sync lets you synchronize configs from multiple repositories : one repository for the cluster-scoped configs, and one optional repository per namespace.
- While the usage of namespace selectors is different when using multiple repositories, you can still apply all the other methods described in this section to the repositories that you synchronize configs from.
- Config Sync lets you manage single clusters, multi-tenant clusters, and multi-cluster Kubernetes configurations by using files stored in a Git repository.
- This means that files in a source control management system represent the resources (Git files, in the case of Config Sync).

