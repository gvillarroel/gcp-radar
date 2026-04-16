---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.476Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "INTERNET network type in Network Management API"
feature_slug: "internet-network-type-in-network-management-api"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview"
keywords:
  - "internet"
  - "network"
  - "type"
  - "in"
  - "management"
  - "api"
  - "the"
  - "adds"
---

# INTERNET network type in Network Management API

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

The Network Management API adds the INTERNET network type, which maps to the external IP address source option in the Google Cloud console.

## Extended Definition

The Network Management API adds the INTERNET network type, which maps to the external IP address source option in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)

## Supporting Pages

### "Set up logging \_|\_ Network Intelligence Center - Cloud Network Insights\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging)
- Source ID: `site-iam-reference`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This includes the following: type - The type of resource, can be one of the following: networkmanagement.googleapis.com/NetworkMonitoringProvider networkmanagement.googleapis.com/MonitoringPoint networkmanagement.googleapis.com/NetworkPath labels - Key-value pairs identifying the specific resource instance, such as resource container (project ID), location , network monitoring provider id , and path id or monitoring point id .
- Cloud Network Insights logs use one of the following for logName : Alarm logs - networkmanagement.googleapis.com/insights alarm Event logs - networkmanagement.googleapis.com/insights event For more information, see Build and save queries by using the Logging query language .
- Alarm Logs Log Name : networkmanagement.googleapis.com/insights alarm Triggered : Generated when the conditions of an alarm rule are met.
- NetworkPathItem Field Type Description display name string The user-defined display name of the Network Path. destination string The destination IP address or hostname. network protocol string The network protocol used, such as TCP , UDP , or ICMP . monitoring policy id string The ID of the monitoring policy. monitoring policy display name string The display name of the monitoring policy. provider tags array of objects Tags defined in AppNeta for the path. source monitoring point MonitoringPointItem Details of the source MonitoringPointItem. destination monitoring point MonitoringPointItem Details of the destination MonitoringPointItem (for MonitoringPoint-to-MonitoringPoint paths only).

### "Add Monitoring Points \_|\_ Network Intelligence Center - Cloud Network\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- Source ID: `site-iam-reference`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Move the installation bundle to the target host. gcloud Use this method if your target host has Google Cloud CLI installed. gcloud alpha network-management network-monitoring-providers \ monitoring-points download-install-script \ --network-monitoring-provider= PROVIDER NAME --location=global \ --monitoring-point-type= MP TYPE \ --hostname= HOST NAME \ --output-file=compose.
- Linux-based virtualized environments such as OpenStack, custom Linux hypervisors. v35-KVM Before you begin In addition to the Cloud Network Editor ( roles/networkmanagement.CloudNetworkInsightsEditor ) role, the deployment environment and Monitoring Points have specific networking requirements to ensure that the Monitoring Point can be installed successfully and communicate back to Cloud Network Insights control plane.
- Monitoring Points require outbound internet access to communicate back to the Cloud Network Insights control plane.
- Supported Monitoring Point types Cloud Network Insights supports the following Monitoring Point types.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights)
- Source ID: `site-iam-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can query these logs in the Logs Explorer to perform root-cause analysis or create log-based alerts for immediate notification. networkmanagement.googleapis.com/insights alarm : Triggered when performance deviates from your defined baselines. networkmanagement.googleapis.com/insights event : Triggered by structural changes, such as when a Monitoring Point goes offline and online again, or a network route change (path change).
- Monitoring Points —lightweight monitoring agent software—send their collected data and receive configuration updates by communicating securely over the internet with the central Cloud Network Insights control plane, hosted on Google Cloud and managed by AppNeta.
- When an alarm triggers, it writes a structured log entry ( networkmanagement.googleapis.com/insights alarm ) to Cloud Logging.
- Cloud Network Insights is an out-of-the-box solution offered in partnership with AppNeta by Broadcom that provides visibility into network health and application performance across complex, multicloud, and hybrid environments.

### "Cloud Network Insights overview \_|\_ Network Intelligence Center - Cloud\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/overview)
- Source ID: `site-iam-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can query these logs in the Logs Explorer to perform root-cause analysis or create log-based alerts for immediate notification. networkmanagement.googleapis.com/insights alarm : Triggered when performance deviates from your defined baselines. networkmanagement.googleapis.com/insights event : Triggered by structural changes, such as when a Monitoring Point goes offline and online again, or a network route change (path change).
- Monitoring Points —lightweight monitoring agent software—send their collected data and receive configuration updates by communicating securely over the internet with the central Cloud Network Insights control plane, hosted on Google Cloud and managed by AppNeta.
- When an alarm triggers, it writes a structured log entry ( networkmanagement.googleapis.com/insights alarm ) to Cloud Logging.
- Cloud Network Insights is an out-of-the-box solution offered in partnership with AppNeta by Broadcom that provides visibility into network health and application performance across complex, multicloud, and hybrid environments.

