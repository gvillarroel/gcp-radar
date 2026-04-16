---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.945Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM Instances Processes tab"
feature_slug: "vm-instances-processes-tab"
latest_feature_date: "2021-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "vm"
  - "instances"
  - "processes"
  - "tab"
  - "page"
  - "includes"
  - "charts"
  - "process"
---

# VM Instances Processes tab

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The VM Instances page includes a Processes tab with charts for process metrics.

## Extended Definition

The VM Instances page includes a Processes tab with charts for process metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- It is possible have charts and alerting policies that refer to metrics with no data (inactive metrics) and to query such metrics; on the Metrics Management page, these metrics are considered used metrics, even though any read operations return no data.
- Before you begin To view the charts and logs included on the Metrics Management page, to create alerting policies, and to create metric-exclusion rules, you must have the correct authorization .
- Investigate your billable metrics The Metrics Management page provides a table that includes each billable metric in your metrics scope.
- The agent.googleapis.com/processes/ metrics are charged at 5% of the volume rate of other chargeable metrics.

### Troubleshoot the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To perform these steps, do one of the following: Go to the IAM Service Accounts page, select your Google Cloud project, and then follow the steps in Create a service account : Go to IAM Service Accounts Click the following button and then select your Google Cloud project: Create service account and download key The previous button automates the process of creating and downloading a key to your local system for the agent-specific service account.
- Process data access issue (Windows) You might see an agent error message in the Windows Event Log similar to the following: Read access denied for processes: Registry (84), smss.exe (264), csrss.exe (376), wininit.exe (448), csrss.exe (456), services.exe (580), NisSrv.exe (3008), MsMpEng.exe (3624), csrss.exe (7044) This message indicates that the agent doesn't have access to this data on your system.
- Metadata cache issues (Linux) You might see an error message in the Linux system log file ( /var/log/syslog on Debian / Ubuntu or /var/log/messages on Red Hat / CentOS / SLES) similar to the following: collectd [ 25571 ] : uc update : Value too old : name = myhost / processes-all / ps vm ; value time = 1511345468 .
- Here are detailed instructions for using the timeSeries.list method: Determine the instance ID of the VM instance where you installed the agent: Compute Engine instances: Go to the Compute Engine detail page for your instance.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Proactive monitoring and validation To test the availability, consistency, and performance of your services, applications, web pages, and APIs, create synthetic monitors .
- The following screenshot illustrates a chart with this configuration: Pricing To learn about pricing for Cloud Monitoring, see the Google Cloud Observability pricing page.

