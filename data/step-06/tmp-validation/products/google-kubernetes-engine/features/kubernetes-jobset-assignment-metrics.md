---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.141Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Kubernetes JobSet assignment metrics"
feature_slug: "kubernetes-jobset-assignment-metrics"
latest_feature_date: "2026-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
keywords:
  - "assignment"
  - "jobset"
  - "show"
  - "provides"
  - "system"
  - "metrics"
---

# Kubernetes JobSet assignment metrics

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE provides system metrics that show which node pools and nodes are running Pods for a Kubernetes JobSet.

## Extended Definition

GKE provides system metrics that show which node pools and nodes are running Pods for a Kubernetes JobSet.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)

## Supporting Pages

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- PromQL metric name Launch stage Cloud Monitoring metric name Kind, Type, Unit Monitored resources Required GKE version Description Labels apiserver current inflight requests GA apiserver current inflight requests/gauge Gauge , Double , 1 prometheus target 1.22.13+ Maximal number of currently used inflight request limit of this apiserver per request kind in last second. request kind apiserver flowcontrol current executing seats BETA apiserver flowcontrol current executing seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ Concurrency (number of seats) occupied by the currently executing (initial stage for a WATCH, any stage otherwise) requests in the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol current inqueue requests BETA apiserver flowcontrol current inqueue requests/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests currently pending in queues of the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol nominal limit seats BETA apiserver flowcontrol nominal limit seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.26.11+, 1.27.8+ for prior minor versions) Nominal number of execution seats configured for each priority level. priority level apiserver flowcontrol rejected requests total BETA apiserver flowcontrol rejected requests total/counter Cumulative , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests rejected by the API Priority and Fairness subsystem. flow schema priority level reason apiserver flowcontrol request wait duration seconds BETA apiserver flowcontrol request wait duration seconds/histogram Cumulative , Distribution , s prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Length of time a request spent waiting in its queue. execute flow schema priority level apiserver request duration seconds GA apiserver request duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Response latency distribution in seconds for each verb, dry run value, group, version, resource, subresource, scope and component. component dry run group resource scope subresource verb version apiserver request total GA apiserver request total/counter Cumulative , Double , 1 prometheus target 1.22.13+ Counter of apiserver requests broken out for each verb, dry run value, group, version, resource, scope, component, and HTTP response code. code component dry run group resource scope subresource verb version apiserver response sizes GA apiserver response sizes/histogram Cumulative , Distribution , 1 prometheus target 1.22.13+ Response size distribution in bytes for each group, version, verb, resource, subresource, scope and component. component group resource scope subresource verb version apiserver storage objects GA apiserver storage objects/gauge Gauge , Double , 1 prometheus target 1.22.13+ Number of stored objects at the time of last check split by kind. resource apiserver admission controller admission duration seconds GA apiserver admission controller admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Admission controller latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type apiserver admission step admission duration seconds GA apiserver admission step admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission sub-step latency histogram in seconds, broken out for each operation and API resource and step type (validate or admit). operation rejected type apiserver admission webhook admission duration seconds GA apiserver admission webhook admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission webhook latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type This following sections provide additional information about the API server metrics. apiserver request duration seconds Use this metric to monitor latency in the API server.
- For example, to measure the API server traffic per instance of the Kubernetes control plane, use the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME "}[1m])) To query the unsuccessful requests, filter the code label for 4xx and 5xx values by using the following PromQL query: sum(rate(apiserver request total{code= "[45].."}[5m])) To query the successful requests, filter the code label for 2xx values by using the following PromQL query: sum(rate(apiserver request total{code= "2.."}[5m])) To query the rejected requests by the API server per instance of the Kubernetes control plane, filter the code label for the value 429 ( http.StatusTooManyRequests ) by using the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME ", code="429"}[1m])) Saturation You can measure the saturation in your system by using the apiserver current inflight requests and apiserver storage objects metrics.
- Click Save Changes . gcloud Update your cluster to collect metrics emitted by the Kubernetes API server, Scheduler, and Controller Manager: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --monitoring = SYSTEM,API SERVER,SCHEDULER,CONTROLLER MANAGER Replace the following: CLUSTER NAME : the name of the cluster.
- The following tables of Kubernetes control plane metrics show two versions of each metric name: PromQL metric name : When using PromQL in Cloud Monitoring pages of the Google Cloud console or in PromQL fields of the Cloud Monitoring API , use the PromQL metric name.

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- For example, to compare the number of replicas in a READY state to the expected number of replicas in a single JobSet, plot both metrics on a single chart by using the following PromQL queries: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} and kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} To alert on a failed or unavailable JobSet rollout, you can use the following PromQL expression: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} The condition label on the kube jobset status condition metric can also help you detect when JobSets run into various failure modes, for example: The Failed condition indicates that the JobSet failed its execution: kube jobset status condition{jobset name=" JOBSET NAME , condition="Failed"} == 1 The Suspended condition indicates that the JobSet is suspended: kube jobset status condition{jobset name=" JOBSET NAME , condition="Suspended"} == 1 Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
- Click Save Changes . gcloud Update your cluster to collect metrics: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --enable-managed-prometheus \ --monitoring = SYSTEM,DAEMONSET,DEPLOYMENT,HPA,POD,STATEFULSET,STORAGE Replace the following: CLUSTER NAME : the name of the existing cluster.
- Starting with version 1.32.1-gke.1357001, the JobSet metrics package is enabled by default on newly created GKE Standard and Autopilot clusters. kube jobset restarts metric is available in 1.32 clusters starting from 1.32.4-gke.1767000 and in 1.33 clusters starting from 1.33.0-gke.1868000.
- Requirements To collect kube state metrics, your GKE cluster must meet the following requirements: The cluster must be running the following versions based on the metric that you want to enable: To enable JobSet metrics package, your cluster must run 1.32.1-gke.1357001 or later.

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To view the node pools where each JobSet in a specific cluster has scheduled Pods, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To identify the node pools where a specific Jobset has been scheduled, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster ", entity name = " multislice-. "}[ ${ interval} ] ) To identify the Jobsets that have been scheduled on a specific node pool, run the following PromQL query: avg over time ( kubernetes io : node pool assigned jobsets { monitored resource = " k8s node pool ", cluster name = " multislice-cluster ", node pool name = " multislice-np "}[ ${ interval} ] ) Monitor JobSet uptime, times to recover (TTR), and times between interruptions (TBI) The following metrics are useful for monitoring the availability of a JobSet: kubernetes.io/jobset/uptime : total time the JobSet has been available. kubernetes.io/jobset/times to recover : distribution of recovery period for a JobSet.
- For this tutorial, check the JobSet completion with this PromQL query: kube jobset succeeded replicas { cluster = " multislice-cluster ", jobset name = " mulitslice-. "} Monitor JobSet scheduling To monitor the scheduling of a JobSet, use the following metrics: kubernetes.io/jobset/assigned node pools : GKE node pools where a Kubernetes JobSet has scheduled Pods. kubernetes.io/node pool/assigned jobsets : Kubernetes JobSets that have scheduled Pods on a GKE node pool. kubernetes.io/jobset/assigned nodes : GKE nodes where a Kubernetes JobSet has scheduled Pods. kubernetes.io/node/assigned jobsets : Kubernetes JobSets that have scheduled Pods on a GKE node.
- To view comprehensive information about the health and performance of JobSets, go to the JobSet monitoring dashboard in the Google Cloud console: Go to JobSet monitoring dashboard The JobSet monitoring dashboard includes three tabs: Overview : this tab shows the underlying JobSet infrastructure, such as JobSet status, replica readiness, and replica state.
- The following metrics are useful for monitoring the performance of a JobSet: kubernetes.io/jobset/scheduling goodput : the fraction of time that all the resources required to run the training JobSet are available. kubernetes.io/jobset/proxy runtime goodput : the fraction of time that all required accelerators are productive.

