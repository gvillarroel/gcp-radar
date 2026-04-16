---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.355Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Cloud Logging issue severity levels"
feature_slug: "cloud-logging-issue-severity-levels"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
keywords:
  - "logging"
  - "issue"
  - "severity"
  - "levels"
  - "can"
  - "now"
  - "show"
  - "level"
---

# Cloud Logging issue severity levels

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging can now show the severity level of an issue extracted from containerd and kubelet node logs.

## Extended Definition

Cloud Logging can now show the severity level of an issue extracted from containerd and kubelet node logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)

## Supporting Pages

### "Configure logging and monitoring \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/log-monitoring)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can see the agents installed by Stackdriver by running the following command: kubectl -n kube-system get pods -l "managed-by=stackdriver" The output of this command is similar to the following: kube-system gke-metrics-agent-4th8r 1/1 Running 1 (40h ago) 40h kube-system gke-metrics-agent-8lt4s 1/1 Running 1 (40h ago) 40h kube-system gke-metrics-agent-dhxld 1/1 Running 1 (40h ago) 40h kube-system gke-metrics-agent-lbkl2 1/1 Running 1 (40h ago) 40h kube-system gke-metrics-agent-pblfk 1/1 Running 1 (40h ago) 40h kube-system gke-metrics-agent-qfwft 1/1 Running 1 (40h ago) 40h kube-system kube-state-metrics-9948b86dd-6chhh 1/1 Running 1 (40h ago) 40h kube-system node-exporter-5s4pg 1/1 Running 1 (40h ago) 40h kube-system node-exporter-d9gwv 1/1 Running 2 (40h ago) 40h kube-system node-exporter-fhbql 1/1 Running 1 (40h ago) 40h kube-system node-exporter-gzf8t 1/1 Running 1 (40h ago) 40h kube-system node-exporter-tsrpp 1/1 Running 1 (40h ago) 40h kube-system node-exporter-xzww7 1/1 Running 1 (40h ago) 40h kube-system stackdriver-log-forwarder-8lwxh 1/1 Running 1 (40h ago) 40h kube-system stackdriver-log-forwarder-f7cgf 1/1 Running 2 (40h ago) 40h kube-system stackdriver-log-forwarder-fl5gf 1/1 Running 1 (40h ago) 40h kube-system stackdriver-log-forwarder-q5lq8 1/1 Running 2 (40h ago) 40h kube-system stackdriver-log-forwarder-www4b 1/1 Running 1 (40h ago) 40h kube-system stackdriver-log-forwarder-xqgjc 1/1 Running 1 (40h ago) 40h kube-system stackdriver-metadata-agent-cluster-level-5bb5b6d6bc-z9rx7 1/1 Running 1 (40h ago) 40h Configuration requirements for Logging and Monitoring There are several configuration requirements to enable Cloud Logging and Cloud Monitoring with Google Distributed Cloud.
- The following components are supported by resourceAttrOverride : gke-metrics-agent/gke-metrics-agent stackdriver-log-forwarder/stackdriver-log-forwarder stackdriver-metadata-agent-cluster-level/metadata-agent node-exporter/node-exporter kube-state-metrics/kube-state-metrics An example file looks like the following: apiVersion: addons.gke.io/v1alpha1 kind: Stackdriver metadata: name: stackdriver namespace: kube-system spec: projectID: my-project clusterName: my-cluster clusterLocation: us-west-1a resourceAttrOverride: gke-metrics-agent/gke-metrics-agent: requests: cpu: 110m memory: 240Mi limits: cpu: 200m memory: 4.5Gi To save changes to the Stackdriver custom resource, save and quit your command-line editor.
- You need to enable the following Stackdriver APIs: Stackdriver API Cloud Monitoring API Cloud Logging API Config Monitoring for Ops API You need to assign the following IAM roles to the service account used by the Stackdriver agents: logging.logWriter monitoring.metricWriter stackdriver.resourceMetadata.writer monitoring.dashboardEditor opsconfigmonitoring.resourceMetadata.writer Logs and metrics routing Stackdriver log forwarder ( stackdriver-log-forwarder ) sends logs from each node machine to Cloud Logging.
- The following solution guides are available for using third-party solutions with Google Distributed Cloud: Monitoring Google Distributed Cloud with the Elastic Stack Collect logs on Google Distributed Cloud with Splunk Connect How Logging and Monitoring for Google Distributed Cloud works Cloud Logging and Cloud Monitoring are installed and activated in each cluster when you create a new admin or user cluster.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- The following list shows the launch stage per version for configuring a node-level private registry: 1.30 and later: GA 1.29: Preview Cluster resource Optional Mutable nodeConfig.privateRegistries.caCertSecretRef When applicable, use this section to specify the name and namespace of the Secret that was created to store the CA certificate (server root CA) for the private registry.
- The following list shows the launch stage per version for configuring a node-level private registry: 1.30 and later: GA 1.29: Preview Cluster resource Optional Mutable nodeConfig.privateRegistries.pullCredentialSecretRef When applicable, use this section to specify the name and namespace of the Secret that was created to store the private registry credentials.
- The following list shows the launch stage per version for configuring a node-level private registry: 1.30 and later: GA 1.29: Preview Cluster resource Optional Mutable nodeConfig.privateRegistries.pullCredentialSecretRef.namespace Optional.
- The following list shows the launch stage per version for configuring a node-level private registry: 1.30 and later: GA 1.29: Preview Cluster resource Optional Mutable nodeConfig.privateRegistries.pullCredentialSecretRef.name Optional.

### "Get support \_|\_ Google Distributed Cloud (software only) for bare metal\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example that uses the previous sample health check job: kubectl --kubeconfig ADMIN KUBECONFIG logs -n cluster-user1 \ -l baremetal.cluster.gke.io/check-name = healthcheck-7c4qf --tail = -1 > \ healthcheck-7c4qf.log Cluster logs When you create a new Google Distributed Cloud cluster, Cloud Logging agents are enabled by default and scoped only to system-level components.
- The following table provides a more complete list of what is and isn't supported: Google Cloud supported Not supported Kubernetes and the container runtime Customer choice of load balancer (manual load balancing) Connect and the Connect Agent Customer code (see Developer Support ) Google Cloud operations, Monitoring, Logging, and agents Customer choice of operating system Bundled load balancer Physical or virtual server, storage, and network Ingress controller External DNS, DHCP, and identity systems GKE Identity Service Cloud Service Mesh Policy Controller Config Sync Config Controller Version Support Policy The objective of this Version Support Policy is to give you the flexibility to schedule upgrades when it meets your business needs, while balancing the rapid evolution of both Kubernetes and Google Distributed Cloud.
- Support period The following table shows the supported minor releases for Google Distributed Cloud and the earliest end-of-life (EOL) dates: Google Distributed Cloud version Release date End-of-life date 1.33 2025-09-02 2026-09-02 or 1.36 release date 1.32 2025-05-06 2026-05-06 or 1.35 release date 1.31 2024-12-18 2025-12-18 or 1.34 release date The EOL will be the later of these two dates.
- System-level logs are from Kubernetes Pods in the following namespaces: kube-system gke-system gke-connect istio-system config-management-system gatekeeper-system cnrm-system knative-serving You can query logs from the Logs Explorer .

