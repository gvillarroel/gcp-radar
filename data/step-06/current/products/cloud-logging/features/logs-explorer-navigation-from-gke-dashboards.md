---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.434Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer Navigation from GKE Dashboards"
feature_slug: "logs-explorer-navigation-from-gke-dashboards"
latest_feature_date: "2021-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/aerospike"
keywords:
  - "logs"
  - "explorer"
  - "navigation"
  - "gke"
  - "dashboards"
  - "clusters"
  - "workloads"
  - "provide"
---

# Logs Explorer Navigation from GKE Dashboards

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

GKE Clusters and Workloads dashboards provide an Operations menu option that opens Logs Explorer.

## Extended Definition

GKE Clusters and Workloads dashboards provide an Operations menu option that opens Logs Explorer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/aerospike](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/aerospike)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Scroll or zoom to time In addition to the time controls previously listed, the timeline provides the Scroll to time and Zoom to time features to give you more in-depth control of the timeline and the data that you see in other panes in the Logs Explorer.
- Adjust time controls The timeline provides time controls that let you adjust the data that you see in the Logs Explorer: Time handles: Drag the timeline's handles inward to narrow the data or outward to widen the data in the timeline.
- This document provides you with an overview of the Logs Explorer in the Google Cloud console, which you can use to retrieve, view, and analyze log entries that are stored in log buckets .
- Troubleshoot logging issues This section provides instructions for troubleshooting common issues when using the Logs Explorer.

### Internet Information Services \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To verify that IIS logs are being sent to Cloud Logging, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Detailed fields inside the LogEntry are as follows. iis access logs contain the following fields in the LogEntry : Field Type Description httpRequest.referer string Contents of the Referer header httpRequest.remoteIp string IP of the client that made the request httpRequest.requestMethod string HTTP method httpRequest.requestUrl string Request URL (typically just the path part of the URL) httpRequest.serverIp string The server's IP and port that was requested httpRequest.status number HTTP status code httpRequest.userAgent string Contents of the User-Agent header jsonPayload.sc substatus number The substatus error code jsonPayload.sc win32 status number The Windows status code jsonPayload.time taken number The length of time that the action took, in milliseconds jsonPayload.user string Authenticated username for the request timestamp string ( Timestamp ) Time the request was received Configure v1 metrics collection The Ops Agent on a Microsoft Windows VM automatically collects IIS v1 metrics.
- Enter the following query in the editor, and then click Run query : resource.type="gce instance" log id("iis access") To verify that IIS metrics are being sent to Cloud Monitoring, do the following: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- A wild card ( ) can be used in the paths; for example, C:\inetpub\logs\LogFiles\W3SVC1\u ex . type The value must be iis access . record log file path false If set to true , then the path to the specific file from which the log record was obtained appears in the output log entry as the value of the agent.googleapis.com/log file path label.

### Aerospike \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/aerospike](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/aerospike)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To verify that Aerospike logs are being sent to Cloud Logging, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Collect logs Aerospike writes logs to syslog , which is captured by the Ops Agent by default.
- Enter the following query in the editor, and then click Run query : resource.type="gce instance" log id("syslog") jsonPayload.message =' asd([[0-9]+]) :' To verify that Aerospike metrics are being sent to Cloud Monitoring, do the following: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To view an installed dashboard, do the following: In the Google Cloud console, go to the dashboard Dashboards page: Go to Dashboards If you use the search bar to find this page, then select the result whose subheading is Monitoring .

