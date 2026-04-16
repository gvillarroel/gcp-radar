---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.322Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync local-config annotation ignore behavior"
feature_slug: "config-sync-local-config-annotation-ignore-behavior"
latest_feature_date: "2021-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency"
keywords:
  - "config"
  - "sync"
  - "local"
  - "annotation"
  - "ignore"
  - "behavior"
  - "ignores"
  - "validation"
---

# Config Sync local-config annotation ignore behavior

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync ignores validation and application of resources annotated with config.kubernetes.io/local-config: "true".

## Extended Definition

Config Sync ignores validation and application of resources annotated with config.kubernetes.io/local-config: "true".

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)

## Supporting Pages

### Manage existing cluster objects \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- Source ID: `site-docs-root`
- Final score: 305
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For objects you want Config Sync to ignore, add the config.kubernetes.io/local-config: "true" annotation to the object.
- Resources with the local-config annotation set to any value other than "false" are treated as if it's set to "true" and are ignored.
- After you add this annotation, Config Sync ignores this object as if it is removed from the source of truth.
- Edit the config-sync-quickstart/multirepo/root/rolebinding-gamestore-webstore-admin.yaml file in the local clone of your repo, and add an annotations: section that matches the bold text below: kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : annotations : configmanagement.gke.io/managed : disabled name : gamestore-webstore-admin namespace : gamestore subjects : - kind : ServiceAccount name : ns-reconciler-gamestore namespace : config-management-system roleRef : kind : ClusterRole name : webstore-admin apiGroup : rbac.authorization.k8s.io Save the file.

### "Declare dependencies between resource objects \_|\_ Config Sync \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For the Wordpress example, the annotation in Wordpress Deployment resembles the following: deployment.yaml apiVersion : apps/v1 kind : Deployment metadata : name : wordpress namespace : default labels : app : wordpress annotations : config.kubernetes.io/depends-on : apps/namespaces/default/StatefulSet/wordpress-mysql When Config Sync applies the objects, it first applies the dependency, the object wordpress-mysql StatefulSet.
- Add the depends-on annotation to an object To specify a dependency, add the config.kubernetes.io/depends-on annotation on the dependent object with a value that references the dependency objects.
- More details can be found in sigs.k8s.io/cli-utils With the depends-on annotation, Config Sync not only applies objects in the order that you want, it also verifies that the dependency object is reconciled before applying the dependent object.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Declare dependencies between resource objects Stay organized with collections Save and categorize content based on your preferences.

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- It does not modify the behavior of Config Sync in any way.
- If the migration process is terminated, it can be recovered manually by running the following commands: kubectl apply -f /tmp/nomos-migrate/my managed cluster-1/cm-multi.yaml && \ kubectl wait --for condition=established crd rootsyncs.configsync.gke.io && \ kubectl apply -f /tmp/nomos-migrate/my managed cluster-1/root-sync.yaml. - Updating the ConfigManagement object .... - Waiting for the RootSync CRD to be established .... - The RootSync CRD has been established. - Creating the RootSync object .... - Waiting for the reconciler-manager Pod to be ready .... - Haven't detected running Pods with the label selector "app=reconciler-manager". - Haven't detected running Pods with the label selector "app=reconciler-manager". - Haven't detected running Pods with the label selector "app=reconciler-manager". - The reconciler-manager Pod is running. - Waiting for the root-reconciler Pod to be ready .... - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - The root-reconciler Pod is running. - The migration process is done.
- MANGED CLUSTER 4 -------------------- NOT INSTALLED MANAGED CLUSTER 5 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Managed resources: NAMESPACE NAME STATUS namespace/gamestore Current namespace/monitoring Current gamestore reposync.configsync.gke.io/repo-sync Current gamestore rolebinding.rbac.authorization.k8s.io/gamestore-admin Current gamestore rolebinding.rbac.authorization.k8s.io/gamestore-webstore-admin Current monitoring deployment.apps/prometheus-operator Current monitoring prometheus.monitoring.coreos.com/acm Current monitoring service/prometheus-acm Current monitoring service/prometheus-operator Current monitoring serviceaccount/prometheus-acm Current monitoring serviceaccount/prometheus-operator Current monitoring servicemonitor.monitoring.coreos.com/acm-service Current -------------------- bookstore git@github.com:foo-corp/acme/bookstore@v1 SYNCED 34d1a8c8 Managed resources: NAMESPACE NAME STATUS gamestore configmap/store-inventory Current gamestore webstore.marketplace.com/gameplace Current In this output: MANAGED CLUSTER 1 has synced the most recent change to the source of truth and all managed resources have a status of Current .
- Using RootSync and RepoSync objects nomos-status-reader.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configsync.gke.io" ] resources : [ "reposyncs" , "rootsyncs" ] verbs : [ "get" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Not using RootSync and RepoSync objects apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configmanagement.gke.io" ] resources : [ "configmanagements" , "repos" ] verbs : [ "get" , "list" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Apply the nomos-status-reader.yaml file: kubectl apply -f nomos-status-reader.yaml Check for errors in the source of truth Before you commit a config to the source of truth, use the nomos vet command to check the syntax and validity of the configs in your source of truth: nomos vet --source-format unstructured If syntax errors are found, the nomos vet command exits with a non-zero status and logs error messages to STDERR . nomos vet flags To customize the nomos vet command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.

