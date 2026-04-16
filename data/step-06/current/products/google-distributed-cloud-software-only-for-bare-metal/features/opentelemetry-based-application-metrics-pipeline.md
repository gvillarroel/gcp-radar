---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.358Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "OpenTelemetry-based application metrics pipeline"
feature_slug: "opentelemetry-based-application-metrics-pipeline"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
keywords:
  - "opentelemetry"
  - "based"
  - "application"
  - "metrics"
  - "pipeline"
  - "collection"
  - "now"
  - "uses"
---

# OpenTelemetry-based application metrics pipeline

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Application metrics collection now uses a more scalable monitoring pipeline based on OpenTelemetry.

## Extended Definition

Application metrics collection now uses a more scalable monitoring pipeline based on OpenTelemetry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)

## Supporting Pages

### "Enable application logging and monitoring \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/application-logging-monitoring)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Enable application logging and monitoring Stay organized with collections Save and categorize content based on your preferences.
- To deploy the example application, run the following command: kubectl -n gmp-test apply \ -f https://raw.githubusercontent.com/GoogleCloudPlatform/prometheus-engine/v0.4.1/examples/example-app.yaml Configure a PodMonitoring resource Configure a PodMonitoring custom resource to capture metrics data emitted by the example application and send it to Google Cloud Managed Service for Prometheus.
- Under spec , set enableCloudLoggingForApplications to true : apiVersion : addons.gke.io/v1alpha1 kind : Stackdriver metadata : name : stackdriver namespace : kube-system spec : projectID : ... clusterName : ... clusterLocation : ... proxyConfigSecretName : ... enableCloudLoggingForApplications : true enableVPC : ... optimizedMetrics : true Save and close the edited file.
- Under spec , set enableGMPForApplications to true : apiVersion : addons.gke.io/v1alpha1 kind : Stackdriver metadata : name : stackdriver namespace : kube-system spec : projectID : ... clusterName : ... clusterLocation : ... proxyConfigSecretName : ... enableGMPForApplications : true enableVPC : ... optimizedMetrics : true Save and close the edited file.

### "Configure logging and monitoring \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An OpenTelemetry Collector based DaemonSet that scrapes metrics from each node to Cloud Monitoring.
- Additional resources For more information about Google Cloud Managed Service for Prometheus, see the following: Google Cloud Managed Service for Prometheus GKE control plane metrics are PromQL compatible Using Google Cloud Managed Service for Prometheus for user applications on Google Distributed Cloud Log tags Many Google Distributed Cloud logs have an F tag: logtag: "F" This tag means that the log entry is complete or full .
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Configure logging and monitoring Stay organized with collections Save and categorize content based on your preferences.
- Prometheus and Grafana Prometheus and Grafana are two popular open source monitoring products available in the Cloud Marketplace : Prometheus collects application and system metrics.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- In this case, when using Prometheus as a custom metrics provider for horizontal Pod autoscaling, use the following fully qualified domain name (FQDN): http://prometheus.k8s.svc.cluster.local:9090 The FQDN follows standard Kubernetes naming conventions for internal DNS names : prometheus : The name of the Kubernetes Service (the Prometheus application service itself). k8s : The name of the Kubernetes Namespace where the service is running. svc : Indicates that this is a Service resource type within the cluster. cluster.local : The default domain suffix for the Kubernetes cluster internal network.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Cluster configuration field reference Stay organized with collections Save and categorize content based on your preferences.
- Specifies the adapter configuration for horizontal Pod autoscaling based on custom metrics.
- The following example shows a Prometheus configuration that uses basic authentication: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/vertical-pod-autoscaler : enable spec : ... other cluster spec fields verticalPodAutoscaling : ... # other vertical Pod autoscaling fields prometheus : url : "http://prometheus.prometheus.svc.cluster.local:9090" auth : basicAuth : usernameRef : name : prom-basic-creds key : username passwordRef : name : prom-basic-creds key : password For more information, see Use Prometheus as a persistent history provider .

