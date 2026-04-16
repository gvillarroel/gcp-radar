---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.705Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "JobSet recovery time metric"
feature_slug: "jobset-recovery-time-metric"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
keywords:
  - "jobset"
  - "recovery"
  - "time"
  - "metric"
  - "measures"
  - "distribution"
  - "times"
  - "jobsets"
---

# JobSet recovery time metric

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This metric measures the distribution of recovery times for supported JobSets after downtime.

## Extended Definition

This metric measures the distribution of recovery times for supported JobSets after downtime.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)

## Supporting Pages

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To view the node pools where each JobSet in a specific cluster has scheduled Pods, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To identify the node pools where a specific Jobset has been scheduled, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster ", entity name = " multislice-. "}[ ${ interval} ] ) To identify the Jobsets that have been scheduled on a specific node pool, run the following PromQL query: avg over time ( kubernetes io : node pool assigned jobsets { monitored resource = " k8s node pool ", cluster name = " multislice-cluster ", node pool name = " multislice-np "}[ ${ interval} ] ) Monitor JobSet uptime, times to recover (TTR), and times between interruptions (TBI) The following metrics are useful for monitoring the availability of a JobSet: kubernetes.io/jobset/uptime : total time the JobSet has been available. kubernetes.io/jobset/times to recover : distribution of recovery period for a JobSet.
- To view uptime for the JobSets that you used in this tutorial, run the following PromQL query: avg over time ( kubernetes io : jobset uptime { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To view the TBI distributions for the JobSets from this tutorial, run the following PromQL query: histogram quantile ( 0.50 , sum over time ( kubernetes io : jobset times between interruptions bucket { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) You can extend the interval of the query to a longer time horizon, such as 7 days, and compute the mean time between interruptions (MTBI) over this period: sum ( sum over time ( kubernetes io : jobset times between interruptions sum { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) / sum ( sum over time ( kubernetes io : jobset times between interruptions count { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) To view the TTR distributions, you can run the following PromQL queries: histogram quantile ( 0.50 , sum over time ( kubernetes io : jobset times to recover bucket { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) After you increase the query interval to a longer time horizon, such as 7 days, you can compute the mean time to recover (MTTR) over this period: sum ( sum over time ( kubernetes io : jobset times to recover sum { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) / sum ( sum over time ( kubernetes io : jobset times to recover count { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] )) Success: You've successfully run a three Multislice Jax workloads.
- Each sample indicates a single recovery event from a downtime period for the JobSet. kubernetes.io/jobset/times between interruptions : distribution of the interval between the end of the previous interruption and the beginning of the current interruption for a JobSet.
- To view the scheduling goodput for the JobSet that you used in this tutorial, run the following PromQL query: avg over time ( kubernetes io : jobset scheduling goodput { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To view the proxy runtime goodput for the JobSets from this tutorial, run the following PromQL query: avg over time ( kubernetes io : jobset proxy runtime goodput { monitored resource = " k8s entity ", entity type = " jobset ", entity name = " multislice-. ", cluster name = " multislice-cluster "}[ ${ interval} ] ) Enable Kueue workload priorities and preemption Optionally, you can assign Kueue workloads priorities which determine the order in which enqueued workloads are admitted by Kueue.

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- PromQL metric name Launch stage Cloud Monitoring metric name Kind, Type, Unit Monitored resources Required GKE version Description Labels apiserver current inflight requests GA apiserver current inflight requests/gauge Gauge , Double , 1 prometheus target 1.22.13+ Maximal number of currently used inflight request limit of this apiserver per request kind in last second. request kind apiserver flowcontrol current executing seats BETA apiserver flowcontrol current executing seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ Concurrency (number of seats) occupied by the currently executing (initial stage for a WATCH, any stage otherwise) requests in the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol current inqueue requests BETA apiserver flowcontrol current inqueue requests/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests currently pending in queues of the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol nominal limit seats BETA apiserver flowcontrol nominal limit seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.26.11+, 1.27.8+ for prior minor versions) Nominal number of execution seats configured for each priority level. priority level apiserver flowcontrol rejected requests total BETA apiserver flowcontrol rejected requests total/counter Cumulative , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests rejected by the API Priority and Fairness subsystem. flow schema priority level reason apiserver flowcontrol request wait duration seconds BETA apiserver flowcontrol request wait duration seconds/histogram Cumulative , Distribution , s prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Length of time a request spent waiting in its queue. execute flow schema priority level apiserver request duration seconds GA apiserver request duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Response latency distribution in seconds for each verb, dry run value, group, version, resource, subresource, scope and component. component dry run group resource scope subresource verb version apiserver request total GA apiserver request total/counter Cumulative , Double , 1 prometheus target 1.22.13+ Counter of apiserver requests broken out for each verb, dry run value, group, version, resource, scope, component, and HTTP response code. code component dry run group resource scope subresource verb version apiserver response sizes GA apiserver response sizes/histogram Cumulative , Distribution , 1 prometheus target 1.22.13+ Response size distribution in bytes for each group, version, verb, resource, subresource, scope and component. component group resource scope subresource verb version apiserver storage objects GA apiserver storage objects/gauge Gauge , Double , 1 prometheus target 1.22.13+ Number of stored objects at the time of last check split by kind. resource apiserver admission controller admission duration seconds GA apiserver admission controller admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Admission controller latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type apiserver admission step admission duration seconds GA apiserver admission step admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission sub-step latency histogram in seconds, broken out for each operation and API resource and step type (validate or admit). operation rejected type apiserver admission webhook admission duration seconds GA apiserver admission webhook admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission webhook latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type This following sections provide additional information about the API server metrics. apiserver request duration seconds Use this metric to monitor latency in the API server.
- 1.30 and replaced by scheduler pod scheduling sli duration seconds .] E2e latency for a pod being scheduled which may include multiple scheduling attempts. attempts scheduler pod scheduling sli duration seconds BETA scheduler pod scheduling sli duration seconds/histogram Cumulative , Distribution , 1 prometheus target 1.30+ E2e latency for a pod being scheduled, from the time the pod enters the scheduling queue, and might involve multiple scheduling attempts. attempts scheduler preemption attempts total GA scheduler preemption attempts total/counter Cumulative , Double , 1 prometheus target 1.22.13+ Total preemption attempts in the cluster till now scheduler preemption victims GA scheduler preemption victims/histogram Cumulative , Distribution , 1 prometheus target 1.22.13+ Number of selected preemption victims scheduler scheduling attempt duration seconds GA scheduler scheduling attempt duration seconds/histogram Cumulative , Distribution , 1 prometheus target 1.23.6+ Scheduling attempt latency in seconds (scheduling algorithm + binding). profile result scheduler schedule attempts total GA scheduler schedule attempts total/counter Cumulative , Double , 1 prometheus target 1.22.13+ Number of attempts to schedule pods, by the result. 'unschedulable' means a pod could not be scheduled, while 'error' means an internal scheduler problem. profile result This following sections provide additional information about the API server metrics. scheduler pending pods You can use the scheduler pending pods metric to monitor the load on your scheduler.
- The scheduler preemption attempts total metric tracks the number of times the scheduler has tried to preempt pods.
- For more information, see Scheduler latency and Resource issues . scheduler scheduling attempt duration seconds This metric measures the duration of a single scheduling attempt within the scheduler itself and is broken down by the result: scheduled, unschedulable, or error.

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- For example, to compare the number of replicas in a READY state to the expected number of replicas in a single JobSet, plot both metrics on a single chart by using the following PromQL queries: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} and kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} To alert on a failed or unavailable JobSet rollout, you can use the following PromQL expression: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} The condition label on the kube jobset status condition metric can also help you detect when JobSets run into various failure modes, for example: The Failed condition indicates that the JobSet failed its execution: kube jobset status condition{jobset name=" JOBSET NAME , condition="Failed"} == 1 The Suspended condition indicates that the JobSet is suspended: kube jobset status condition{jobset name=" JOBSET NAME , condition="Suspended"} == 1 Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
- Sample queries for JobSet metrics You can create charts and alerting policies for individual JobSets by filtering JobSet metrics by cluster, namespace, and the name of the JobSet.
- Table of JobSet metrics The JobSet metrics let you monitor and alert on the behavior of your JobSets.
- Sample queries for Pod metrics To determine if you have unschedulable Pods, use the following PromQL expression: sum(kube pod status unschedulable{cluster=" CLUSTER ", namespace=" NAMESPACE "}) To alert on a number of unschedulable pods in a namespace, you can use the following PromQL expression: sum(kube pod status unschedulable{cluster=" CLUSTER ", namespace=" NAMESPACE "}) > LIMIT You can use the kube pod container status waiting reason metric to create an alert for a container stuck in a specific waiting state by using a PromQL expression like the following: max over time(kube pod container status waiting reason{reason=" REASON ", cluster=" CLUSTER ", namespace=" NAMESPACE "}[5m]) >= 1 The value of REASON specifies the container's waiting state, for example: CrashLoopBackOff ImagePullBackOff ContainerCreating To create an alert for a container stuck in any of the waiting states, use the following PromQL expression: max over time(kube pod container status waiting reason{cluster=" CLUSTER ", namespace=" NAMESPACE "}[5m]) >= 1 To determine how many containers are failing readiness checks, use the following PromQL expression sum(kube pod container status ready) by (pod, container) == 0 Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.

