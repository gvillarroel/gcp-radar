---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.326Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync cluster selectors for CustomResourceDefinitions"
feature_slug: "config-sync-cluster-selectors-for-customresourcedefinitions"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects"
keywords:
  - "config"
  - "sync"
  - "cluster"
  - "selectors"
  - "customresourcedefinitions"
  - "matching"
---

# Config Sync cluster selectors for CustomResourceDefinitions

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync cluster selectors support matching CustomResourceDefinitions.

## Extended Definition

Config Sync cluster selectors support matching CustomResourceDefinitions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)

## Supporting Pages

### "Configure clusters and cluster-scoped objects \_|\_ Config Sync \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This Role is only applied on the cluster that has the name cluster-1 . kind : Role apiVersion : rbac.authorization.k8s.io/v1 metadata : namespace : my-namespace name : namespace-reader annotations : configsync.gke.io/cluster-name-selector : cluster-1 rules : - apiGroups : [ "" ] resources : [ "namespaces" ] verbs : [ "get" , "watch" , "list" ] Select a list of clusters The following config creates the same Role as the previous example, but this Role is only applied on the clusters that have the name cluster-1 , cluster-2 , or cluster-3 . kind : Role apiVersion : rbac.authorization.k8s.io/v1 metadata : namespace : my-namespace name : namespace-reader annotations : configsync.gke.io/cluster-name-selector : cluster-1,cluster-2,cluster-3 rules : - apiGroups : [ "" ] resources : [ "namespaces" ] verbs : [ "get" , "watch" , "list" ] Configure using the ClusterSelector object A ClusterSelector is a special type of config that uses Kubernetes labelSelectors .
- This ClusterRole is only instantiated on clusters that match the selector-env-prod ClusterSelector. kind : ClusterRole apiVersion : rbac.authorization.k8s.io/v1 metadata : name : namespace-reader annotations : configmanagement.gke.io/cluster-selector : selector-env-prod rules : - apiGroups : [ "" ] resources : [ "namespaces" ] verbs : [ "get" , "watch" , "list" ] Limit the clusters a namespace-scoped config affects By default, Config Sync applies configs inherited by a namespace to that namespace in each cluster where it exists.
- Depending on how you installed Config Sync, you can provide the cluster name in the following ways: If you installed Config Sync by using Google Cloud CLI or Google Cloud console : clusterName is automatically set to the fleet membership name.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Configure clusters and cluster-scoped objects Stay organized with collections Save and categorize content based on your preferences.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- View errors RootSync and RepoSync objects use the status field to track errors encountered when syncing the configs from the source of truth to a cluster.
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.

### "Sync objects to multiple namespaces \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before reading this page, you should already be familiar with the following Kubernetes concepts: Namespaces Labels and selectors About scoping objects with Config Sync By default, when you install Config Sync on a cluster or as a fleet default, Config Sync syncs all of the Kubernetes objects in your source of truth to clusters with Config Sync installed or all clusters in a fleet.
- Config Sync adds additional capabilities: cluster selectors and namespace selectors, which let you further refine which objects are synced.
- Config Sync offers the following methods to scope your objects: Configure cluster-scoped objects with a cluster selector Configure cluster-scoped objects with fleet package labels ( Preview ) Configure namespace-scoped objects with a namespace selector (this page) Use explicit namespaces We recommend that you use explicit namespace declaration when configuring Config Sync because it lets you manage namespace metadata and delete namespaces later, if needed.
- About namespace selectors Namespace selectors are a feature of Config Sync that let you deploy otherwise identical resource objects into multiple namespaces.

