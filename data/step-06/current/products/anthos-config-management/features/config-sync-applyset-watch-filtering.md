---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.275Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync ApplySet watch filtering"
feature_slug: "config-sync-applyset-watch-filtering"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
keywords:
  - "config"
  - "sync"
  - "applyset"
  - "watch"
  - "filtering"
  - "uses"
  - "based"
  - "reduce"
---

# Config Sync ApplySet watch filtering

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync uses ApplySet-based watch filtering to reduce reconciler memory usage by watching only relevant managed objects.

## Extended Definition

Config Sync uses ApplySet-based watch filtering to reduce reconciler memory usage by watching only relevant managed objects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)

## Supporting Pages

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Monitor RootSync and RepoSync objects Stay organized with collections Save and categorize content based on your preferences.
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.

### Config Sync architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- How the Fleet service manages RootSync objects When you install Config Sync with the Google Cloud console, Google Cloud CLI, Config Connector, or Terraform, Config Sync is managed by the Fleet service, based on your inputs to the Google Cloud API.
- The following table explains more about what each of these reconciler containers do and the condition that causes Config Sync to create them: Container name Description Condition reconciler Handles syncing and drift remediation.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Config Sync architecture Stay organized with collections Save and categorize content based on your preferences.
- Config Sync uses this design instead of sharing a single monolithic reconciler because it improves reliability by reducing single points of failure and allows for individual reconcilers to be scaled independently.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Configure syncing from more than one source of truth Stay organized with collections Save and categorize content based on your preferences.
- Apply the RoleBinding configuration: kubectl apply -f sync-rolebinding.yaml If required, create a Secret based on your preferred authentication method.
- For example, the following ClusterRole or Role grants permissions to manage Deployment and ServiceAccount objects: ROOT REPO/namespaces/ NAMESPACE /sync-role.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ROLE KIND metadata : namespace : NAMESPACE # only set this field for a 'Role' name : RECONCILER ROLE rules : Update 'apiGroups' and 'resources' to reference actual resources managed by 'RepoSync'. - apiGroups : [ "apps" ] resources : [ "deployments" ] verbs : [ " " ] - apiGroups : [ "" ] resources : [ "serviceaccounts" ] verbs : [ " " ] Save the RoleBinding manifest that references the ClusterRole or Role as FILENAME : ROOT REPO/namespaces/ NAMESPACE / FILENAME .yaml kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : name : syncs-repo namespace : NAMESPACE subjects : - kind : ServiceAccount name : SERVICE ACCOUNT NAME namespace : config-management-system roleRef : kind : ROLE KIND name : RECONCILER ROLE apiGroup : rbac.authorization.k8s.io Replace the following: FILENAME : the name for the RoleBinding manifest.
- Helm ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : helm sourceFormat : unstructured helm : repo : NAMESPACE REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.

