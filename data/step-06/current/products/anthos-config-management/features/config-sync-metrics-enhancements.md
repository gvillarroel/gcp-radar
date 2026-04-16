---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.298Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync metrics enhancements"
feature_slug: "config-sync-metrics-enhancements"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
keywords:
  - "config"
  - "sync"
  - "metrics"
  - "enhancements"
  - "were"
  - "enhanced"
  - "improved"
  - "histogram"
---

# Config Sync metrics enhancements

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync metrics were enhanced with improved histogram bounds, corrected labels, cleaner timestamps, and better operation attribution.

## Extended Definition

Config Sync metrics were enhanced with improved histogram bounds, corrected labels, cleaner timestamps, and better operation attribution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)

## Supporting Pages

### Monitor Config Sync with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Histogram stallreason Time distribution of reconciling a ResourceGroup CR (distributed into buckets by duration) config sync rg reconcile duration seconds count Histogram stallreason Time distribution of reconciling a ResourceGroup CR (ignoring duration) config sync rg reconcile duration seconds sum Histogram stallreason Sum of the all time reconciling a ResourceGroup CR config sync kustomize build latency bucket Histogram Latency distribution of kustomize build execution time (distributed into buckets by duration of each operation) config sync kustomize build latency count Histogram Latency distribution of kustomize build execution time (ignoring duration) config sync kustomize build latency sum Histogram Sum of all kustomize build execution time config sync kustomize ordered top tier metrics Gauge top tier field Usage of Resources, Generators, SecretGenerator, ConfigMapGenerator, Transformers, and Validators config sync kustomize builtin transformers Gauge k8s builtin transformer Usage of built-in transformers related to kubernetes object metadata config sync kustomize resource count Gauge Number of resources outputted by kustomize build config sync kustomize field count Gauge field name Number of times a particular field is used in the kustomization files config sync kustomize patch count Gauge patch field Number of patches in the fields patches , patchesStrategicMerge , and patchesJson6902 config sync kustomize base count Gauge base source Number of remote and local bases kustomize deprecating field count Gauge deprecating field Usage of fields that may become deprecated kustomize simplification adoption count Gauge simplification field Usage of simplification transformers images, replicas, and replacements kustomize helm inflator count Gauge helm inflator Usage of helm in kustomize, whether by the built-in fields or the custom function Example debugging procedures for Prometheus The following examples illustrate some patterns for using Prometheus metrics, object status fields, and object annotations to detect and diagnose problems related to Config Sync.
- Create the manifest for the resources necessary to configure a Prometheus server which scrapes metrics from Config Sync. config-sync-monitoring.yaml apiVersion : v1 kind : ServiceAccount metadata : name : prometheus-config-sync namespace : monitoring --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : prometheus-config-sync rules : - apiGroups : [ "" ] resources : - nodes - services - endpoints - pods verbs : [ "get" , "list" , "watch" ] - apiGroups : [ "" ] resources : - configmaps verbs : [ "get" ] - nonResourceURLs : [ "/metrics" ] verbs : [ "get" ] --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : prometheus-config-sync roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : prometheus-config-sync subjects : - kind : ServiceAccount name : prometheus-config-sync namespace : monitoring --- apiVersion : monitoring.coreos.com/v1 kind : Prometheus metadata : name : config-sync namespace : monitoring labels : prometheus : config-sync spec : replicas : 2 serviceAccountName : prometheus-config-sync serviceMonitorSelector : matchLabels : prometheus : config-management alerting : alertmanagers : - namespace : default name : alertmanager port : web resources : requests : memory : 400Mi --- apiVersion : v1 kind : Service metadata : name : prometheus-config-sync namespace : monitoring labels : prometheus : config-sync spec : type : NodePort ports : - name : web nodePort : 31900 port : 9190 protocol : TCP targetPort : web selector : prometheus : config-sync --- --- Apply the manifest using the following commands: kubectl apply -f config-sync.yaml until kubectl rollout status statefulset/prometheus-config-sync -n monitoring; \ do sleep 1; done The second command blocks until the Pods are running.
- Name Type Labels Description config sync api duration seconds bucket Histogram status, operation Latency distribution of API server calls (distributed into buckets by duration of each cycle) config sync api duration seconds count Histogram status, operation Latency distribution of API server calls (ignoring duration) config sync api duration seconds sum Histogram status, operation Sum of the durations of all API server calls config sync apply duration seconds bucket Histogram commit, status Latency distribution of applying resources declared from source of truth to a cluster (distributed into buckets by duration of each cycle) config sync apply duration seconds count Histogram commit, status Latency distribution of applying resources declared from source of truth to a cluster (ignoring duration) config sync apply duration seconds sum Histogram commit, status Sum of the durations of all the latency of applying resources declared from source of truth to a cluster config sync apply operations total Counter operation, status, controller Number of operations that have been performed to sync resources from source of truth to a cluster config sync cluster scoped resource count Gauge resourcegroup Number of cluster scoped resources in a ResourceGroup config sync crd count Gauge resourcegroup Number of CRDs in a ResourceGroup config sync declared resources Gauge commit Number of declared resources parsed from Git config sync internal errors total Counter source Number of internal errors triggered by Config Sync.
- A value of 1 indicates a failure config sync ready resource count Gauge resourcegroup Total number of ready resources in a ResourceGroup config sync reconcile duration seconds bucket Histogram status Latency distribution of reconcile events handled by the reconciler manager (distributed into buckets by duration of each call) config sync reconcile duration seconds count Histogram status Latency distribution of reconcile events handled by the reconciler manager (ignoring duration) config sync reconcile duration seconds sum Histogram status Sum of the durations of all latency of reconcile events handled by the reconciler manager config sync reconciler errors Gauge component, errorclass Number of errors encountered while syncing resources from the source of the truth to a cluster config sync remediate duration seconds bucket Histogram status Latency distribution of remediator reconciliation events (distributed into buckets by duration) config sync remediate duration seconds count Histogram status Latency distribution of remediator reconciliation events (ignoring duration) config sync remediate duration seconds sum Histogram status Sum of the durations of all latency of remediator reconciliation events config sync resource count Gauge resourcegroup Number of resources tracked by a ResourceGroup config sync resource conflicts total Counter commit Number of resource conflicts resulting from a mismatch between the cached resources and cluster resources.

### Config Sync metrics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource labels Config Sync metrics sent to Prometheus and Cloud Monitoring have the following metric labels set to identify the source Pod: Name Description k8s.node.name The name of the Node hosting a Kubernetes Pod k8s.pod.namespace The namespace of the Pod k8s.pod.uid The UID of the Pod k8s.pod.ip The IP of the Pod k8s.deployment.name The name of the Deployment that owns the Pod Config Sync metrics sent to Prometheus and Cloud Monitoring from reconciler Pods also have the following metric labels set to identify the RootSync or RepoSync used to configure the reconciler: Name Description configsync.sync.kind The kind of resource that configures this reconciler: RootSync or RepoSync configsync.sync.name The name of the RootSync or RepoSync that configures this reconciler configsync.sync.namespace The namespace of the RootSync or RepoSync that configures this reconciler Cloud Monitoring resource labels Cloud Monitoring Resource labels are used for indexing metrics in storage, which means they have negligible effect on cardinality, unlike metric labels, where cardinality is a significant performance concern.
- Config Sync metrics Name Type Tags Description api duration seconds Distribution operation, status The latency distribution of API server calls. apply duration seconds Distribution status The latency distribution of applying resources declared from source of truth to a cluster. apply operations total Count operation, status, controller The total number of operations that have been performed to sync resources from source of truth to a cluster. declared resources Last Value The number of declared resources parsed from Git. internal errors total Count source The total number of internal errors encountered by Config Sync.
- The k8s container resource type sets the following resource labels to identify the source Container: Name Description container name The name of the Container pod name The name of the Pod namespace name The namespace of the Pod location The region or zone of the cluster hosting the node cluster name The name of the cluster hosting the node project The ID of the project hosting the cluster Configure custom metric filtering You can adjust the custom metrics that Config Sync exports to Prometheus, Cloud Monitoring, and Google's internal monitoring service.
- The following guides explain how to export metrics: Cloud Monitoring Prometheus Custom monitoring system (not recommended) To configure the OpenTelemetry Collector, by default, Config Sync creates a ConfigMap named otel-collector .

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- To view the logs for the RootSync or RepoSync reconciler, run the following command: kubectl logs -n config-management-system deployment/ RECONCILER NAME CONTAINER NAME Replace the following: RECONCILER NAME : the reconciler name of the RootSync or RepoSync object.

