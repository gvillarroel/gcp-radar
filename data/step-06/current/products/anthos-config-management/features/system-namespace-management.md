---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.360Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "System namespace management"
feature_slug: "system-namespace-management"
latest_feature_date: "2019-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects"
keywords:
  - "system"
  - "namespace"
  - "management"
  - "allows"
  - "anthos"
  - "config"
  - "manage"
  - "default"
---

# System namespace management

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

System namespace management allows Anthos Config Management to manage the default namespace and namespaces whose names begin with kube-.

## Extended Definition

System namespace management allows Anthos Config Management to manage the default namespace and namespaces whose names begin with kube-.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)

## Supporting Pages

### Manage existing cluster objects \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable deletion propagation, you add the configsync.gke.io/deletion-propagation-policy: Foreground annotation to your RootSync or RepoSync object, such as in the following example: example-rootsync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : example-rootsync namespace : config-management-system annotations : configsync.gke.io/deletion-propagation-policy : Foreground spec : sourceType : git sourceFormat : unstructured git : repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples branch : main dir : config-sync-quickstart/multirepo/root auth : none period : 30s Alternatively, you can update an existing RootSync or RepoSync to use deletion propagation by running the following command: RootSync kubectl patch RootSync ROOTSYNC NAME \ --namespace config-management-system \ --type merge \ --patch '{"metadata":{"annotations":{"configsync.gke.io/deletion-propagation-policy":"Foreground"}}}' Replace ROOTSYNC NAME with the name of the RootSync that you want to update.
- List all managed objects To list all objects managed by Config Sync on a given cluster or namespace, use a label selector like the following: kubectl get object-type -n namespace -l "app.kubernetes.io/managed-by=configmanagement.gke.io" To list all objects not managed by Config Sync, use a label selector like this: kubectl get object-type -n namespace -l "app.kubernetes.io/managed-by!=configmanagement.gke.io" For example, this command lists RoleBindings in the gamestore namespace that are managed by Config Sync: kubectl get rolebindings -n gamestore \ -l "app.kubernetes.io/managed-by=configmanagement.gke.io" The output is similar to the following: NAME ROLE AGE configsync.gke.io:ns-reconciler ClusterRole/configsync.gke.io:ns-reconciler 34h gamestore-admin ClusterRole/admin 34h gamestore-webstore-admin ClusterRole/webstore-admin 34h This command lists RoleBindings in the kube-system namespace that are not managed by Config Sync: kubectl get rolebindings -n kube-system \ -l "app.kubernetes.io/managed-by!=configmanagement.gke.io" The output is similar to the following: NAME AGE fluentd-gcp-scaler-binding 2d21h gce:cloud-provider 2d21h heapster-binding 2d21h metrics-server-auth-reader 2d21h system::leader-locking-kube-controller-manager 2d21h system::leader-locking-kube-scheduler 2d21h system:controller:bootstrap-signer 2d21h system:controller:cloud-provider 2d21h system:controller:token-cleaner 2d21h Start managing an existing object You can create a config for an existing Kubernetes object, such as a namespace that already exists in your cluster before you install Config Sync.
- Name: myrole Labels: app.kubernetes.io/managed-by=configmanagement.gke.io configsync.gke.io/declared-version=v1 Annotations: config.k8s.io/owning-inventory: config-management-system root-sync configmanagement.gke.io/cluster-name: my-cluster configmanagement.gke.io/managed: enabled configmanagement.gke.io/source-path: config-sync-quickstart/multirepo/root/gamestore-myrole.yaml configmanagement.gke.io/token: 747b843a7ddbd945c0616034a935cf648b58e7b5 configsync.gke.io/declared-fields: {"f:rules":{}} configsync.gke.io/git-context: {"repo":"https://github.com/GoogleCloudPlatform/anthos-config-management-samples","branch":"main","rev":"HEAD"} configsync.gke.io/manager: :root configsync.gke.io/resource-id: rbac.authorization.k8s.io role gamestore myrole PolicyRule: Resources Non-Resource URLs Resource Names Verbs --------- ----------------- -------------- ----- pods [] [] [get list ] Stop managing a managed object This example shows how to stop managing an object that Config Sync is currently managing, such as the myrole Role in Start managing an existing object .
- Config Sync does not set the configmanagement.gke.io/managed annotation to disabled on the object. kubectl get rolebinding gamestore-webstore-admin -n gamestore -o yaml apiVersion: rbac.authorization.k8s.io/v1 metadata: annotations: name: gamestore-webstore-admin namespace: gamestore subjects: - kind: ServiceAccount name: ns-reconciler-gamestore namespace: config-management-system roleRef: kind: ClusterRole name: webstore-admin apiGroup: rbac.authorization.k8s.io After verifying that the object is now disabled, you could remove the config from your repository and verify that the now-unmanaged object is not deleted from the namespace.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Default ClusterRoles Save the RoleBinding manifest that references a default ClusterRole , for example admin or edit , as FILENAME : kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : name : syncs-repo namespace : NAMESPACE subjects : - kind : ServiceAccount name : SERVICE ACCOUNT NAME namespace : config-management-system roleRef : kind : ClusterRole name : CLUSTERROLE NAME apiGroup : rbac.authorization.k8s.io Replace the following: FILENAME : the name for the RoleBinding manifest.
- If no value is specified, the default namespace config-management-system is used.
- If no value is specified, the default namespace config-management-system is used.
- If no value is specified, the default namespace config-management-system is used.

### "Sync objects to multiple namespaces \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This example disables inheritance for role bindings: system/hierarchy-config.yaml kind : HierarchyConfig apiVersion : configmanagement.gke.io/v1 metadata : name : rbac spec : resources : Configure role to only be allowed in leaf namespaces. - group : rbac.authorization.k8s.io kinds : [ "RoleBinding" ] hierarchyMode : none Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create a namespace selector called exclude-exempt-namespaces : kind : NamespaceSelector apiVersion : configmanagement.gke.io/v1 metadata : name : excludes-exempt-namespaces spec : selector : matchExpressions : - key : quota-exempt operator : NotIn values : - exempt If another object's configuration references this namespace selector, that configuration is applied to all namespaces except those with the quota-exempt: exempt key-value pair.
- Create an example object quota that references the namespace selector: kind : ResourceQuota apiVersion : v1 metadata : name : quota annotations : configmanagement.gke.io/namespace-selector : exclude-exempt-namespaces spec : hard : pods : "1" cpu : "200m" memory : "200Mi" The resource quota is created in all namespaces except those that have the quota-exempt: exempt key-value pair.
- Create a namespace selector called gamestore-selector . kind : NamespaceSelector apiVersion : configmanagement.gke.io/v1 metadata : name : gamestore-selector spec : selector : matchLabels : app : gamestore If another object's configuration references this namespace selector, that configuration can only be applied to objects in namespaces that have the app: gamestore label.

