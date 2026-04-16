---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.277Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync Cloud Monitoring metrics export simplification"
feature_slug: "config-sync-cloud-monitoring-metrics-export-simplification"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring"
keywords:
  - "config"
  - "sync"
  - "monitoring"
  - "metrics"
  - "export"
  - "simplification"
  - "simplifies"
  - "steps"
---

# Config Sync Cloud Monitoring metrics export simplification

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync simplifies the steps required to export metrics to Cloud Monitoring.

## Extended Definition

Config Sync simplifies the steps required to export metrics to Cloud Monitoring.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring)

## Supporting Pages

### Config Sync metrics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The k8s container resource type sets the following resource labels to identify the source Container: Name Description container name The name of the Container pod name The name of the Pod namespace name The namespace of the Pod location The region or zone of the cluster hosting the node cluster name The name of the cluster hosting the node project The ID of the project hosting the cluster Configure custom metric filtering You can adjust the custom metrics that Config Sync exports to Prometheus, Cloud Monitoring, and Google's internal monitoring service.
- The following guides explain how to export metrics: Cloud Monitoring Prometheus Custom monitoring system (not recommended) To configure the OpenTelemetry Collector, by default, Config Sync creates a ConfigMap named otel-collector .
- How Config Sync collects metrics Config Sync uses OpenCensus to create and record metrics and OpenTelemetry to export its metrics to Prometheus and Cloud Monitoring .
- Resource labels Config Sync metrics sent to Prometheus and Cloud Monitoring have the following metric labels set to identify the source Pod: Name Description k8s.node.name The name of the Node hosting a Kubernetes Pod k8s.pod.namespace The namespace of the Pod k8s.pod.uid The UID of the Pod k8s.pod.ip The IP of the Pod k8s.deployment.name The name of the Deployment that owns the Pod Config Sync metrics sent to Prometheus and Cloud Monitoring from reconciler Pods also have the following metric labels set to identify the RootSync or RepoSync used to configure the reconciler: Name Description configsync.sync.kind The kind of resource that configures this reconciler: RootSync or RepoSync configsync.sync.name The name of the RootSync or RepoSync that configures this reconciler configsync.sync.namespace The namespace of the RootSync or RepoSync that configures this reconciler Cloud Monitoring resource labels Cloud Monitoring Resource labels are used for indexing metrics in storage, which means they have negligible effect on cardinality, unlike metric labels, where cardinality is a significant performance concern.

### Monitor Config Sync with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The PodMonitoring resource uses a Kubernetes label selector to find the otel-collector- Pod. apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : config-sync-monitoring namespace : config-management-monitoring spec : selector : matchLabels : app : opentelemetry component : otel-collector endpoints : - port : 8675 interval : 10s Apply the manifest to the cluster: kubectl apply -f pod-monitoring-config-sync-monitoring.yaml Verify that your Prometheus data is being exported using the Cloud Monitoring Metrics Explorer page in the Google Cloud console following the instructions on Managed Service for Prometheus data in Cloud Monitoring .
- Histogram stallreason Time distribution of reconciling a ResourceGroup CR (distributed into buckets by duration) config sync rg reconcile duration seconds count Histogram stallreason Time distribution of reconciling a ResourceGroup CR (ignoring duration) config sync rg reconcile duration seconds sum Histogram stallreason Sum of the all time reconciling a ResourceGroup CR config sync kustomize build latency bucket Histogram Latency distribution of kustomize build execution time (distributed into buckets by duration of each operation) config sync kustomize build latency count Histogram Latency distribution of kustomize build execution time (ignoring duration) config sync kustomize build latency sum Histogram Sum of all kustomize build execution time config sync kustomize ordered top tier metrics Gauge top tier field Usage of Resources, Generators, SecretGenerator, ConfigMapGenerator, Transformers, and Validators config sync kustomize builtin transformers Gauge k8s builtin transformer Usage of built-in transformers related to kubernetes object metadata config sync kustomize resource count Gauge Number of resources outputted by kustomize build config sync kustomize field count Gauge field name Number of times a particular field is used in the kustomization files config sync kustomize patch count Gauge patch field Number of patches in the fields patches , patchesStrategicMerge , and patchesJson6902 config sync kustomize base count Gauge base source Number of remote and local bases kustomize deprecating field count Gauge deprecating field Usage of fields that may become deprecated kustomize simplification adoption count Gauge simplification field Usage of simplification transformers images, replicas, and replacements kustomize helm inflator count Gauge helm inflator Usage of helm in kustomize, whether by the built-in fields or the custom function Example debugging procedures for Prometheus The following examples illustrate some patterns for using Prometheus metrics, object status fields, and object annotations to detect and diagnose problems related to Config Sync.
- Create the manifest for the resources necessary to configure a Prometheus server which scrapes metrics from Config Sync. config-sync-monitoring.yaml apiVersion : v1 kind : ServiceAccount metadata : name : prometheus-config-sync namespace : monitoring --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : prometheus-config-sync rules : - apiGroups : [ "" ] resources : - nodes - services - endpoints - pods verbs : [ "get" , "list" , "watch" ] - apiGroups : [ "" ] resources : - configmaps verbs : [ "get" ] - nonResourceURLs : [ "/metrics" ] verbs : [ "get" ] --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : prometheus-config-sync roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : prometheus-config-sync subjects : - kind : ServiceAccount name : prometheus-config-sync namespace : monitoring --- apiVersion : monitoring.coreos.com/v1 kind : Prometheus metadata : name : config-sync namespace : monitoring labels : prometheus : config-sync spec : replicas : 2 serviceAccountName : prometheus-config-sync serviceMonitorSelector : matchLabels : prometheus : config-management alerting : alertmanagers : - namespace : default name : alertmanager port : web resources : requests : memory : 400Mi --- apiVersion : v1 kind : Service metadata : name : prometheus-config-sync namespace : monitoring labels : prometheus : config-sync spec : type : NodePort ports : - name : web nodePort : 31900 port : 9190 protocol : TCP targetPort : web selector : prometheus : config-sync --- --- Apply the manifest using the following commands: kubectl apply -f config-sync.yaml until kubectl rollout status statefulset/prometheus-config-sync -n monitoring; \ do sleep 1; done The second command blocks until the Pods are running.
- This manifest configures a PodMonitoring resource to scrape the Config Sync metrics on port 8675 of the otel-collector- Pod under the config-management-monitoring namespace.

### Monitor Config Sync with Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This metric name is composed of the following components: custom.googleapis.com : all custom metrics have this prefix opencensus : this prefix is added because Config Sync uses the OpenCensus library config sync/ : metrics that Config Sync exports to Cloud Monitoring have this prefix METRIC : the name of the metric that you want to query Query metrics by reconciler RootSync and RepoSync objects are instrumented with high-level metrics that give you useful insight into how Config Sync is operating on the cluster.
- Note: Config Sync supports exporting metrics to Cloud Monitoring only from GKE clusters.
- Configure Cloud Monitoring with Workload Identity Federation for GKE If Workload Identity Federation for GKE is enabled, allow Config Sync to send metrics by running this command: gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/monitoring.metricWriter \ --member = "serviceAccount: PROJECT ID .svc.id.goog[config-management-monitoring/default]" Replace PROJECT ID with the cluster's project ID.
- Example debugging procedures for Cloud Monitoring The following Cloud Monitoring examples illustrate some patterns for using OpenCensus metrics to detect and diagnose problems related to Config Sync when you are using the RootSync and RepoSync APIs.

