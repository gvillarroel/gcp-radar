---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.105Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Cloud Monitoring integration dashboards"
feature_slug: "cloud-monitoring-integration-dashboards"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
keywords:
  - "monitoring"
  - "integration"
  - "dashboards"
  - "dashboard"
  - "automatically"
  - "installed"
  - "fully"
  - "managed"
---

# Cloud Monitoring integration dashboards

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

The Integration Dashboard is automatically installed and fully managed by Google.

## Extended Definition

Cloud Monitoring integration dashboards in Google Distributed Cloud (software only) for VMware are preconfigured Monitoring dashboards (including Windows node status and Windows pod status views) that are automatically created during admin cluster installation when Cloud Monitoring is enabled. If an admin cluster already exists, the same dashboards can be created from provided JSON files and then viewed in Google Cloud Console under Monitoring > Dashboards. Google describes this monitoring capability as fully managed with dashboarding (and alerting), with logging/monitoring agents installed and activated in each cluster.

## Evidence Summary

The pages confirm that Google Distributed Cloud for VMware ships a managed logging/monitoring service with dashboarding and provides automatically created (and redeployable via JSON) Windows monitoring dashboards in Cloud Monitoring.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- These dashboards are automatically created during admin cluster installation if Cloud Monitoring is enabled.
- From the console, select Monitoring > Dashboards, and then select "GKE on-prem Windows node status" and "GKE on-prem Windows pod status" from the All Dashboards list.
- If you already have an admin cluster running, follow these instructions to create these dashboards, using the following json files: windows pod status.json windows node status.json See the full list of metrics collected by the Windows agents.
- To monitor the Windows nodes and Pods status, use the prepared dashboards.

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- It offers a fully managed logging solution, metrics collection, monitoring, dashboarding, and alerting.
- The output of this command is similar to the following: gke-metrics-agent-global 1/1 Running 0 4h31m stackdriver-metadata-agent-cluster-level 1/1 Running 0 4h31m You can see all the DaemonSet agents by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get daemonsets -l "managed-by=stackdriver" --all-namespaces The output of this command is similar to the following: gke-metrics-agent 1/1 Running 0 4h31m stackdriver-log-forwarder 1/1 Running 0 4h31m Configuring logging and monitoring agents for Google Distributed Cloud The agents installed with Google Distributed Cloud collect data about system components, subject to your settings and configuration, for the purposes of maintaining and troubleshooting issues with your clusters.
- Enable the following APIs in your logging-monitoring project: Stackdriver API Cloud Monitoring API Cloud Logging API Config Monitoring for Ops API Grant the following IAM roles to your logging-monitoring service account on your logging-monitoring project. logging.logWriter monitoring.metricWriter stackdriver.resourceMetadata.writer monitoring.dashboardEditor opsconfigmonitoring.resourceMetadata.writer Log tags Many Google Distributed Cloud logs have a tag of F : logtag: "F" This tag means that the log entry is complete or full .
- For more information about using third-party solutions with Google Distributed Cloud, see the following: Collect logs on Google Distributed Cloud with Splunk Connect Stretching Elastic's capabilities with historical analysis, backups, and cross-cloud monitoring on Google Cloud Platform How logging and monitoring for Google Distributed Cloud works Logging and monitoring agents are installed and activated in each cluster when you create a new admin or user cluster.

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- It offers a fully managed logging solution, metrics collection, monitoring, dashboarding, and alerting.
- The output of this command is similar to the following: gke-metrics-agent-global 1/1 Running 0 4h31m stackdriver-metadata-agent-cluster-level 1/1 Running 0 4h31m You can see all the DaemonSet agents by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get daemonsets -l "managed-by=stackdriver" --all-namespaces The output of this command is similar to the following: gke-metrics-agent 1/1 Running 0 4h31m stackdriver-log-forwarder 1/1 Running 0 4h31m Configuring logging and monitoring agents for Google Distributed Cloud The agents installed with Google Distributed Cloud collect data about system components, subject to your settings and configuration, for the purposes of maintaining and troubleshooting issues with your clusters.
- Enable the following APIs in your logging-monitoring project: Stackdriver API Cloud Monitoring API Cloud Logging API Config Monitoring for Ops API Grant the following IAM roles to your logging-monitoring service account on your logging-monitoring project. logging.logWriter monitoring.metricWriter stackdriver.resourceMetadata.writer monitoring.dashboardEditor opsconfigmonitoring.resourceMetadata.writer Log tags Many Google Distributed Cloud logs have a tag of F : logtag: "F" This tag means that the log entry is complete or full .
- For more information about using third-party solutions with Google Distributed Cloud, see the following: Collect logs on Google Distributed Cloud with Splunk Connect Stretching Elastic's capabilities with historical analysis, backups, and cross-cloud monitoring on Google Cloud Platform How logging and monitoring for Google Distributed Cloud works Logging and monitoring agents are installed and activated in each cluster when you create a new admin or user cluster.

