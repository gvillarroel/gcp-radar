---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.692Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Compressed Fluent Bit log ingestion"
feature_slug: "compressed-fluent-bit-log-ingestion"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/install-cloud-logging"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging"
keywords:
  - "Fluent Bit compression"
  - "compressed log ingestion"
  - "gzip compression"
  - "workload logs"
  - "control plane logs"
  - "Fluent Bit"
  - "gzip logs"
  - "Cloud Logging"
---

# Compressed Fluent Bit log ingestion

Product: Anthos Attached Clusters
Coverage: LOW

## Step 02 Summary

Enabled gzip compression for Fluent Bit log ingestion into Cloud Logging for both control plane and workload logs.

## Extended Definition

The cited Google Cloud documentation pages describe configuring Cloud Logging for GKE attached clusters (CNCF conformant, AKS, and EKS) so that Kubernetes container logs are collected and viewable in Cloud Logging. They list included namespaces and show how to access/query logs via Logs Explorer, but they do not provide evidence that these logs are ingested with Fluent Bit gzip compression specifically.

## Evidence Summary

The pages support only general attached-cluster Cloud Logging setup and log access, and do not corroborate the specific "Compressed Fluent Bit log ingestion" claim.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/install-cloud-logging)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging)

## Supporting Pages

### "Install Cloud Logging on CNCF conformant attached clusters \_|\_ GKE attached\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/install-cloud-logging)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: The page notes that attached clusters use a Fluent Bit DaemonSet for logging, but it does not discuss compressed (e.g., gzip) ingestion for control plane or workload logs.

Evidence snippets:
- Example 1: Get the logs of the gke-connect-agent container for an Google Cloud cluster CLUSTER NAME : resource.type = "k8s container" resource.labels.cluster name = "attachedClusters/ CLUSTER NAME " resource.labels.container name = "gke-connect-agent" What's next Cloud Logging overview Using the Logs Explorer Building queries for Cloud Logging Create logs-based metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Specifically, containers running in the following namespaces are included: gke-connect gke-system gmp-system asm-user-auth cnrm-system config-management-system gatekeeper-system gmp-public istio-system knative-serving Find your logs in the Cloud Logging user interface You can view your logs using the Logs Explorer in the Cloud Logging user interface.
- Access your logs There are several ways to access your GKE attached clusters logs in Cloud Logging: Logs Explorer – You can see your logs directly from the Logs Explorer by using the logging filters to select the Kubernetes resources, such as cluster, node, namespace, pod, or container logs.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Install Cloud Logging on CNCF conformant attached clusters Stay organized with collections Save and categorize content based on your preferences.

### "Install Cloud Logging on AKS attached clusters \_|\_ GKE attached clusters\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: The page states that GKE attached clusters uses a Fluent Bit logging agent and describes log capture modes, but it does not mention any gzip/compression or other Fluent Bit ingestion optimization.

Evidence snippets:
- Example 1: Get the logs of the gke-connect-agent container for an Google Cloud cluster CLUSTER NAME : resource.type = "k8s container" resource.labels.cluster name = "attachedClusters/ CLUSTER NAME " resource.labels.container name = "gke-connect-agent" What's next Cloud Logging overview Using the Logs Explorer Building queries for Cloud Logging Create logs-based metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Specifically, containers running in the following namespaces are included: gke-connect gke-system gmp-system asm-user-auth cnrm-system config-management-system gatekeeper-system gmp-public istio-system knative-serving Find your logs in the Cloud Logging user interface You can view your logs using the Logs Explorer in the Cloud Logging user interface.
- Access your logs There are several ways to access your GKE attached clusters logs in Cloud Logging: Logs Explorer – You can see your logs directly from the Logs Explorer by using the logging filters to select the Kubernetes resources, such as cluster, node, namespace, pod, or container logs.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Install Cloud Logging on AKS attached clusters Stay organized with collections Save and categorize content based on your preferences.

### "Install Cloud Logging on EKS attached clusters \_|\_ GKE attached clusters\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: The page confirms attached clusters use a Fluent Bit Daemonset for log collection, but it does not mention gzip/compressed ingestion or control-plane/workload compression behavior.

Evidence snippets:
- Example 1: Get the logs of the gke-connect-agent container for an Google Cloud cluster CLUSTER NAME : resource.type = "k8s container" resource.labels.cluster name = "attachedClusters/ CLUSTER NAME " resource.labels.container name = "gke-connect-agent" What's next Cloud Logging overview Using the Logs Explorer Building queries for Cloud Logging Create logs-based metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Specifically, containers running in the following namespaces are included: gke-connect gke-system gmp-system asm-user-auth cnrm-system config-management-system gatekeeper-system gmp-public istio-system knative-serving Find your logs in the Cloud Logging user interface You can view your logs using the Logs Explorer in the Cloud Logging user interface.
- Access your logs There are several ways to access your GKE attached clusters logs in Cloud Logging: Logs Explorer – You can see your logs directly from the Logs Explorer by using the logging filters to select the Kubernetes resources, such as cluster, node, namespace, pod, or container logs.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE attached clusters Guides Send feedback Install Cloud Logging on EKS attached clusters Stay organized with collections Save and categorize content based on your preferences.

