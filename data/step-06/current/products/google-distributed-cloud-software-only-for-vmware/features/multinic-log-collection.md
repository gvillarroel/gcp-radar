---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.164Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Multinic log collection"
feature_slug: "multinic-log-collection"
latest_feature_date: "2022-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "multinic"
  - "log"
  - "collection"
  - "fluent"
  - "bit"
  - "logging"
  - "agent"
  - "can"
---

# Multinic log collection

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The Fluent Bit logging agent can collect logs for pods with multiple network interfaces and send them to Cloud Logging.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, logging and monitoring agents (including Fluent Bit) are installed and activated in clusters to collect logs from system and application workloads. The documentation shows Fluent Bit as a deployed logging component that collects pod/container logs (including Windows container workloads) and is associated with the stackdriver-log-forwarder path for forwarding logs. The provided excerpts do not explicitly confirm or describe multinic-specific log collection behavior.

## Evidence Summary

The cited pages confirm that GDC for VMware deploys logging agents (including Fluent Bit) by default with logging and monitoring enabled and that Fluent Bit collects pod/application logs, but they provide no direct statement about multi-NIC log collection.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The output of this command is similar to the following: gke-metrics-agent-global 1/1 Running 0 4h31m stackdriver-metadata-agent-cluster-level 1/1 Running 0 4h31m You can see all the DaemonSet agents by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get daemonsets -l "managed-by=stackdriver" --all-namespaces The output of this command is similar to the following: gke-metrics-agent 1/1 Running 0 4h31m stackdriver-log-forwarder 1/1 Running 0 4h31m Configuring logging and monitoring agents for Google Distributed Cloud The agents installed with Google Distributed Cloud collect data about system components, subject to your settings and configuration, for the purposes of maintaining and troubleshooting issues with your clusters.
- For more information about using third-party solutions with Google Distributed Cloud, see the following: Collect logs on Google Distributed Cloud with Splunk Connect Stretching Elastic's capabilities with historical analysis, backups, and cross-cloud monitoring on Google Cloud Platform How logging and monitoring for Google Distributed Cloud works Logging and monitoring agents are installed and activated in each cluster when you create a new admin or user cluster.
- You can configure the in-cluster agents for the scope of monitoring and logging, as well as the level of metrics collected: Scope of logging and monitoring can be set to system components only (the default) or for system components and applications Level of metrics collected can be configured for an optimized set of metrics or for full metrics See Configuring logging and monitoring agents for Google Distributed Cloud on this document for more information.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Logging and monitoring Stay organized with collections Save and categorize content based on your preferences.

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The output of this command is similar to the following: gke-metrics-agent-global 1/1 Running 0 4h31m stackdriver-metadata-agent-cluster-level 1/1 Running 0 4h31m You can see all the DaemonSet agents by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get daemonsets -l "managed-by=stackdriver" --all-namespaces The output of this command is similar to the following: gke-metrics-agent 1/1 Running 0 4h31m stackdriver-log-forwarder 1/1 Running 0 4h31m Configuring logging and monitoring agents for Google Distributed Cloud The agents installed with Google Distributed Cloud collect data about system components, subject to your settings and configuration, for the purposes of maintaining and troubleshooting issues with your clusters.
- For more information about using third-party solutions with Google Distributed Cloud, see the following: Collect logs on Google Distributed Cloud with Splunk Connect Stretching Elastic's capabilities with historical analysis, backups, and cross-cloud monitoring on Google Cloud Platform How logging and monitoring for Google Distributed Cloud works Logging and monitoring agents are installed and activated in each cluster when you create a new admin or user cluster.
- You can configure the in-cluster agents for the scope of monitoring and logging, as well as the level of metrics collected: Scope of logging and monitoring can be set to system components only (the default) or for system components and applications Level of metrics collected can be configured for an optimized set of metrics or for full metrics See Configuring logging and monitoring agents for Google Distributed Cloud on this document for more information.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Logging and monitoring Stay organized with collections Save and categorize content based on your preferences.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Windows logging Agent The Windows logging agent collects the following logs: Pod resource type: system and user application workloads.
- When logging and monitoring are configured, agents are deployed on Windows nodes.
- For example: [INPUT] # https://docs.fluentbit.io/manual/input/tail Name tail Tag Regex var.log.containers.(?<pod name>a-z0-9?(?:.a-z0-9?) ) (?<namespace name>[^ ]+) (?<container name>.+)-(?<docker id>[a-z0-9]{64}).log$ Tag k8s container.<namespace name>.<pod name>.<container name> Path C:\var\log\containers\ .log Exclude Path kube-system .log, gke-connect .log, knative-serving .log, gke-system .log, istio-system .log, monitoring-system .log, config-management-system .log, gatekeeper-system .log, cnrm-system .log DB C:\var\log\fluent-bit-k8s-container-application.db Mem Buf Limit 30MB Skip Long Lines On Refresh Interval 10 # storage.type filesystem Buffer Chunk Size 512KB Buffer Max Size 5M Rotate Wait 30 Ignore Older 4h Run the rollout restart command to restart the fluent-bit-windows daemonset: kubectl --kubeconfig KUBECONFIG rollout restart daemonset fluent-bit-windows -n kube-system Node resource type: kubelet, kube-proxy and Windows event-logs You can access logs using the Logs Explorer in the console.

