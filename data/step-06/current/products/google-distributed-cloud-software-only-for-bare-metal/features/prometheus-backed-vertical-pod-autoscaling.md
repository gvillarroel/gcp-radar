---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.324Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Prometheus-backed vertical Pod autoscaling"
feature_slug: "prometheus-backed-vertical-pod-autoscaling"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack"
keywords:
  - "prometheus"
  - "backed"
  - "vertical"
  - "pod"
  - "autoscaling"
  - "can"
  - "use"
  - "instance"
---

# Prometheus-backed vertical Pod autoscaling

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Vertical Pod autoscaling can use a Prometheus instance as a persistent history provider for long-term CPU and memory usage data.

## Extended Definition

Vertical Pod autoscaling can use a Prometheus instance as a persistent history provider for long-term CPU and memory usage data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack)

## Supporting Pages

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- If your Prometheus instance uses a different authentication method, such as Transport Layer Security (TLS), it isn't supported for use with the vertical Pod autoscaling feature.
- This cluster configuration field enables the use of your own Prometheus instance as a persistent history provider for vertical Pod autoscaling.
- The following example shows a Prometheus configuration that uses basic authentication: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/vertical-pod-autoscaler : enable spec : ... other cluster spec fields verticalPodAutoscaling : ... # other vertical Pod autoscaling fields prometheus : url : "http://prometheus.prometheus.svc.cluster.local:9090" auth : basicAuth : usernameRef : name : prom-basic-creds key : username passwordRef : name : prom-basic-creds key : password For more information, see Use Prometheus as a persistent history provider .
- When using Prometheus as a persistent history provider for vertical Pod autoscaling, use the following fully qualified domain name (FQDN): http://prometheus.prometheus.svc.cluster.local:9090 The FQDN follows standard Kubernetes naming conventions for internal DNS names : prometheus : the name of the Kubernetes Service (the Prometheus application service itself). prometheus : the name of the Kubernetes Namespace where the service is running. svc : Indicates that this is a Service resource type within the cluster. cluster.local : the default domain suffix for the Kubernetes cluster internal network.

### "Configure logging and monitoring \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you installed Prometheus locally and want to collect metrics from system components, you need to give permission to your local Prometheus instance to access the metrics endpoints of system components: Bind the service account for your Prometheus instance to the predefined gke-metrics-agent ClusterRole, and use service account token as credential to scrape metrics from the following system components: kube-apiserver kube-scheduler kube-controller-manager kubelet node-exporter Use the client key and cert stored in the kube-system/stackdriver-prometheus-etcd-scrape secret to authenticate the metric scrape from etcd.
- To install the sample dashboards, do the following: Download the sample JSON files: git clone https://github.com/GoogleCloudPlatform/anthos-samples.git cd anthos-samples/gmp-grafana-dashboards If your Grafana data source was created with a name different with Managed Service for Prometheus , change the datasource field in all the JSON files: sed -i "s/Managed Service for Prometheus/ [DATASOURCE NAME] /g" ./ .json Replace [DATASOURCE NAME] with the name of the data source in your Grafana that was pointed to the Prometheus frontend service.
- Additional resources For more information about Google Cloud Managed Service for Prometheus, see the following: Google Cloud Managed Service for Prometheus GKE control plane metrics are PromQL compatible Using Google Cloud Managed Service for Prometheus for user applications on Google Distributed Cloud Log tags Many Google Distributed Cloud logs have an F tag: logtag: "F" This tag means that the log entry is complete or full .
- 95 , sum ( rate ( apiserver request duration seconds bucket [ 5 m ])) by ( le )) Configure Grafana dashboards with Google Cloud Managed Service for Prometheus To use Grafana with metrics data from Google Cloud Managed Service for Prometheus, follow the steps in Query using Grafana to authenticate and configure a Grafana data source to query data from Google Cloud Managed Service for Prometheus.

### "Configure your clusters to use OpenStack \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack)
- Source ID: `site-iam-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

