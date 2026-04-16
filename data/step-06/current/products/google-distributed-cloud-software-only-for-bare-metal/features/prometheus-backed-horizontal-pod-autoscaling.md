---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.323Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Prometheus-backed horizontal Pod autoscaling"
feature_slug: "prometheus-backed-horizontal-pod-autoscaling"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring"
keywords:
  - "prometheus"
  - "backed"
  - "horizontal"
  - "pod"
  - "autoscaling"
  - "can"
  - "use"
  - "custom"
---

# Prometheus-backed horizontal Pod autoscaling

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Horizontal Pod autoscaling can use custom metrics from a Prometheus server to scale applications without manually deploying and managing the adapter.

## Extended Definition

Horizontal Pod autoscaling can use custom metrics from a Prometheus server to scale applications without manually deploying and managing the adapter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring)

## Supporting Pages

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- In this case, when using Prometheus as a custom metrics provider for horizontal Pod autoscaling, use the following fully qualified domain name (FQDN): http://prometheus.k8s.svc.cluster.local:9090 The FQDN follows standard Kubernetes naming conventions for internal DNS names : prometheus : The name of the Kubernetes Service (the Prometheus application service itself). k8s : The name of the Kubernetes Namespace where the service is running. svc : Indicates that this is a Service resource type within the cluster. cluster.local : The default domain suffix for the Kubernetes cluster internal network.
- This enables the use of your own Prometheus instance as a custom metrics provider for horizontal Pod autoscaling.
- Specifies the adapter configuration for horizontal Pod autoscaling based on custom metrics.
- The following example shows a Prometheus configuration that uses basic authentication: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/vertical-pod-autoscaler : enable spec : ... other cluster spec fields verticalPodAutoscaling : ... # other vertical Pod autoscaling fields prometheus : url : "http://prometheus.prometheus.svc.cluster.local:9090" auth : basicAuth : usernameRef : name : prom-basic-creds key : username passwordRef : name : prom-basic-creds key : password For more information, see Use Prometheus as a persistent history provider .

### "Configure logging and monitoring \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Excluded kube metrics The following kube metrics are excluded from the optimized metrics: kube certificatesigningrequest cert length kube certificatesigningrequest condition kube certificatesigningrequest created kube certificatesigningrequest labels kube configmap annotations kube configmap info kube configmap labels kube configmap metadata resource version kube daemonset annotations kube daemonset created kube daemonset labels kube daemonset metadata generation kube daemonset status observed generation kube deployment annotations kube deployment created kube deployment labels kube deployment spec paused kube deployment spec strategy rollingupdate max surge kube deployment spec strategy rollingupdate max unavailable kube deployment status condition kube deployment status replicas ready kube endpoint annotations kube endpoint created kube endpoint info kube endpoint labels kube endpoint ports kube horizontalpodautoscaler annotations kube horizontalpodautoscaler info kube horizontalpodautoscaler labels kube horizontalpodautoscaler metadata generation kube horizontalpodautoscaler status condition kube job annotations kube job complete kube job created kube job info kube job labels kube job owner kube job spec completions kube job spec parallelism kube job status completion time kube job status start time kube job status succeeded kube lease owner kube lease renew time kube limitrange kube limitrange created kube mutatingwebhookconfiguration info kube namespace labels kube networkpolicy annotations kube networkpolicy labels kube networkpolicy spec egress rules kube networkpolicy spec ingress rules kube node annotations kube node role kube persistentvolume annotations kube persistentvolume labels kube persistentvolumeclaim access mode kube persistentvolumeclaim annotations kube persistentvolumeclaim labels kube pod annotations kube pod completion time kube pod container resource limits kube pod container resource requests kube pod container state started kube pod created kube pod init container info kube pod init container resource limits kube pod init container resource requests kube pod init container status last terminated reason kube pod init container status ready kube pod init container status restarts total kube pod init container status running kube pod init container status terminated kube pod init container status terminated reason kube pod init container status waiting kube pod init container status waiting reason kube pod labels kube pod owner kube pod restart policy kube pod spec volumes persistentvolumeclaims readonly kube pod start time kube poddisruptionbudget annotations kube poddisruptionbudget created kube poddisruptionbudget labels kube poddisruptionbudget status expected pods kube poddisruptionbudget status observed generation kube poddisruptionbudget status pod disruptions allowed kube replicaset annotations kube replicaset created kube replicaset labels kube replicaset metadata generation kube replicaset owner kube replicaset status observed generation kube resourcequota created kube secret annotations kube secret info kube secret labels kube secret metadata resource version kube secret type kube service annotations kube service created kube service info kube service labels kube service spec type kube statefulset annotations kube statefulset created kube statefulset labels kube statefulset status current revision kube statefulset status update revision kube storageclass annotations kube storageclass created kube storageclass info kube storageclass labels kube validatingwebhookconfiguration info kube validatingwebhookconfiguration metadata resource version kube volumeattachment created kube volumeattachment info kube volumeattachment labels kube volumeattachment spec source persistentvolume kube volumeattachment status attached kube volumeattachment status attachment metadata The complete set of Google Distributed Cloud metrics is documented in View Anthos metrics .
- Here are some examples of replacements you might use: Disabled metric Replacements kube pod start time container/uptime kube pod container resource requests container/cpu/request cores container/memory/request bytes kube pod container resource limits container/cpu/limit cores container/memory/limit bytes To disable the optimized metrics default setting (not recommended), do the following: Open your Stackdriver custom resource in a command-line editor: kubectl -n kube-system edit stackdriver stackdriver Set the optimizedMetrics field to false : apiVersion: addons.gke.io/v1alpha1 kind: Stackdriver metadata: name: stackdriver namespace: kube-system spec: projectID: my-project clusterName: my-cluster clusterLocation: us-west-1a optimizedMetrics: false Save changes, and quit your command-line editor.
- The following components are supported by resourceAttrOverride : gke-metrics-agent/gke-metrics-agent stackdriver-log-forwarder/stackdriver-log-forwarder stackdriver-metadata-agent-cluster-level/metadata-agent node-exporter/node-exporter kube-state-metrics/kube-state-metrics An example file looks like the following: apiVersion: addons.gke.io/v1alpha1 kind: Stackdriver metadata: name: stackdriver namespace: kube-system spec: projectID: my-project clusterName: my-cluster clusterLocation: us-west-1a resourceAttrOverride: gke-metrics-agent/gke-metrics-agent: requests: cpu: 110m memory: 240Mi limits: cpu: 200m memory: 4.5Gi To save changes to the Stackdriver custom resource, save and quit your command-line editor.
- If you installed Prometheus locally and want to collect metrics from system components, you need to give permission to your local Prometheus instance to access the metrics endpoints of system components: Bind the service account for your Prometheus instance to the predefined gke-metrics-agent ClusterRole, and use service account token as credential to scrape metrics from the following system components: kube-apiserver kube-scheduler kube-controller-manager kubelet node-exporter Use the client key and cert stored in the kube-system/stackdriver-prometheus-etcd-scrape secret to authenticate the metric scrape from etcd.

### "Enable application logging and monitoring \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To deploy the example application, run the following command: kubectl -n gmp-test apply \ -f https://raw.githubusercontent.com/GoogleCloudPlatform/prometheus-engine/v0.4.1/examples/example-app.yaml Configure a PodMonitoring resource Configure a PodMonitoring custom resource to capture metrics data emitted by the example application and send it to Google Cloud Managed Service for Prometheus.
- You can verify the PodMonitoring resource is installed in the intended namespace by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get podmonitoring -A For reference documentation about all the Google Cloud Managed Service for Prometheus custom resources, see the prometheus-engine/doc/api reference .
- This page shows how to configure a cluster for Google Distributed Cloud so that custom logs and metrics from user applications are sent to Cloud Logging, Cloud Monitoring, and Google Cloud Managed Service for Prometheus .
- For example: { "textPayload" : "2020/11/14 01:24:24 Starting to listen on :9090\n" , "insertId" : "1oa4vhg3qfxidt" , "resource" : { "type" : "k8s container" , "labels" : { "pod name" : "monitoring-example-7685d96496-xqfsf" , "cluster name" : ... , "namespace name" : "default" , "project id" : ... , "location" : "us-west1" , "container name" : "prometheus-example-exporter" } }, "timestamp" : "2020-11-14T01:24:24.358600252Z" , "labels" : { "k8s-pod/pod-template-hash" : "7685d96496" , "k8s-pod/app" : "monitoring-example" }, "logName" : "projects/.../logs/stdout" , "receiveTimestamp" : "2020-11-14T01:24:39.562864735Z" } gcloud Run this command: gcloud logging read 'resource.labels.project id=" PROJECT ID " AND \ resource.type="k8s container" AND resource.labels.namespace name="default"' Replace PROJECT ID with the ID of your logging-monitoring project. .

