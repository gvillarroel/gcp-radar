---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.084Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "kube-state-metrics and node-exporter in logging and monitoring agents"
feature_slug: "kube-state-metrics-and-node-exporter-in-logging-and-monitoring-agents"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "kube"
  - "state"
  - "metrics"
  - "node"
  - "exporter"
  - "logging"
  - "monitoring"
  - "agents"
---

# kube-state-metrics and node-exporter in logging and monitoring agents

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Logging and monitoring agents now include kube-state-metrics and node-exporter.

## Extended Definition

Google Distributed Cloud (software only) for VMware’s logging and monitoring agents include kube-state-metrics and node-exporter as in-cluster components: kube-state-metrics is a Deployment that watches the Kubernetes API and generates metrics on Kubernetes object states, while node-exporter is a DaemonSet that generates hardware and OS metrics. The agents collect this metric data in addition to logs, and monitoring behavior can be configured by scope (system components only, or system components plus applications) and by metrics level (optimized or full).

## Evidence Summary

The cited Google documentation pages define the logging and monitoring agent components, specify kube-state-metrics and node-exporter roles, and describe configurable monitoring scope and metric granularity.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions configuring in-cluster logging and monitoring agents, but it does not describe kube-state-metrics or node-exporter specifically.

Evidence snippets:
- The output of this command is similar to the following: gke-metrics-agent-global 1/1 Running 0 4h31m stackdriver-metadata-agent-cluster-level 1/1 Running 0 4h31m You can see all the DaemonSet agents by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get daemonsets -l "managed-by=stackdriver" --all-namespaces The output of this command is similar to the following: gke-metrics-agent 1/1 Running 0 4h31m stackdriver-log-forwarder 1/1 Running 0 4h31m Configuring logging and monitoring agents for Google Distributed Cloud The agents installed with Google Distributed Cloud collect data about system components, subject to your settings and configuration, for the purposes of maintaining and troubleshooting issues with your clusters.
- A Deployment that sends metadata for Kubernetes resources such as pods, deployments, or nodes to the Stackdriver Resource Metadata API; this data is used to enrich metric queries by enabling you to query by deployment name, node name, or even Kubernetes service name. kube-state-metrics A Deployment that listens to API server and generate metrics about the states of objects. node-exporter A DaemonSet that generates hardware and OS metrics.
- Excluded kube-state-metrics metrics The following kube-state-metrics metrics are excluded from the optimized metrics: kube certificatesigningrequest cert length kube certificatesigningrequest condition kube certificatesigningrequest created kube certificatesigningrequest labels kube configmap annotations kube configmap info kube configmap labels kube configmap metadata resource version kube daemonset annotations kube daemonset created kube daemonset labels kube daemonset metadata generation kube daemonset status observed generation kube deployment annotations kube deployment created kube deployment labels kube deployment spec paused kube deployment spec strategy rollingupdate max surge kube deployment spec strategy rollingupdate max unavailable kube deployment status condition kube deployment status replicas ready kube endpoint annotations kube endpoint created kube endpoint info kube endpoint labels kube endpoint ports kube horizontalpodautoscaler annotations kube horizontalpodautoscaler info kube horizontalpodautoscaler labels kube horizontalpodautoscaler metadata generation kube horizontalpodautoscaler status condition kube job annotations kube job complete kube job created kube job info kube job labels kube job owner kube job spec completions kube job spec parallelism kube job status completion time kube job status start time kube job status succeeded kube lease owner kube lease renew time kube limitrange kube limitrange created kube mutatingwebhookconfiguration info kube namespace labels kube networkpolicy annotations kube networkpolicy labels kube networkpolicy spec egress rules kube networkpolicy spec ingress rules kube node annotations kube node role kube persistentvolume annotations kube persistentvolume labels kube persistentvolumeclaim access mode kube persistentvolumeclaim annotations kube persistentvolumeclaim labels kube pod annotations kube pod completion time kube pod container resource limits kube pod container resource requests kube pod container state started kube pod created kube pod init container info kube pod init container resource limits kube pod init container resource requests kube pod init container status last terminated reason kube pod init container status ready kube pod init container status restarts total kube pod init container status running kube pod init container status terminated kube pod init container status terminated reason kube pod init container status waiting kube pod init container status waiting reason kube pod labels kube pod owner kube pod restart policy kube pod spec volumes persistentvolumeclaims readonly kube pod start time kube poddisruptionbudget annotations kube poddisruptionbudget created kube poddisruptionbudget labels kube poddisruptionbudget status expected pods kube poddisruptionbudget status observed generation kube poddisruptionbudget status pod disruptions allowed kube replicaset annotations kube replicaset created kube replicaset labels kube replicaset metadata generation kube replicaset owner kube replicaset status observed generation kube resourcequota created kube secret annotations kube secret info kube secret labels kube secret metadata resource version kube secret type kube service annotations kube service created kube service info kube service labels kube service spec type kube statefulset annotations kube statefulset created kube statefulset labels kube statefulset status current revision kube statefulset status update revision kube storageclass annotations kube storageclass created kube storageclass info kube storageclass labels kube validatingwebhookconfiguration info kube validatingwebhookconfiguration metadata resource version kube volumeattachment created kube volumeattachment info kube volumeattachment labels kube volumeattachment spec source persistentvolume kube volumeattachment status attached kube volumeattachment status attachment metadata The complete set of Google Distributed Cloud metrics is documented in Google Distributed Cloud metrics .
- You can configure the in-cluster agents for the scope of monitoring and logging, as well as the level of metrics collected: Scope of logging and monitoring can be set to system components only (the default) or for system components and applications Level of metrics collected can be configured for an optimized set of metrics or for full metrics See Configuring logging and monitoring agents for Google Distributed Cloud on this document for more information.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- When logging and monitoring are configured, agents are deployed on Windows nodes.
- For example: [INPUT] # https://docs.fluentbit.io/manual/input/tail Name tail Tag Regex var.log.containers.(?<pod name>a-z0-9?(?:.a-z0-9?) ) (?<namespace name>[^ ]+) (?<container name>.+)-(?<docker id>[a-z0-9]{64}).log$ Tag k8s container.<namespace name>.<pod name>.<container name> Path C:\var\log\containers\ .log Exclude Path kube-system .log, gke-connect .log, knative-serving .log, gke-system .log, istio-system .log, monitoring-system .log, config-management-system .log, gatekeeper-system .log, cnrm-system .log DB C:\var\log\fluent-bit-k8s-container-application.db Mem Buf Limit 30MB Skip Long Lines On Refresh Interval 10 # storage.type filesystem Buffer Chunk Size 512KB Buffer Max Size 5M Rotate Wait 30 Ignore Older 4h Run the rollout restart command to restart the fluent-bit-windows daemonset: kubectl --kubeconfig KUBECONFIG rollout restart daemonset fluent-bit-windows -n kube-system Node resource type: kubelet, kube-proxy and Windows event-logs You can access logs using the Logs Explorer in the console.
- If you already have an admin cluster running, follow these instructions to create these dashboards, using the following json files: windows pod status.json windows node status.json See the full list of metrics collected by the Windows agents.
- Logging and Monitoring Google Distributed Cloud supports logging and monitoring for Windows nodes and Pods, as it does for Linux nodes and Pods.

