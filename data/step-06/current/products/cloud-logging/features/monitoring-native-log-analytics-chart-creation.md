---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.326Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Monitoring-native Log Analytics chart creation"
feature_slug: "monitoring-native-log-analytics-chart-creation"
latest_feature_date: "2024-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation"
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
keywords:
  - "monitoring"
  - "native"
  - "log"
  - "analytics"
  - "chart"
  - "creation"
  - "charts"
  - "can"
---

# Monitoring-native Log Analytics chart creation

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics charts can be configured and saved directly in Monitoring.

## Extended Definition

Log Analytics charts can be configured and saved directly in Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating charts from your query results and saving charts to a custom dashboard, see Chart query results with Observability Analytics .
- Analyze results by using Observability Analytics You can aggregate, analyze, and chart your log data by using SQL queries in the Observability Analytics page when your project contains log buckets that are upgraded to use Observability Analytics.
- In the Observability Analytics page, you can view your results in tabular form, or as a chart.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.

### "Install the Ops Agent during VM creation \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you click Create , select the Install Ops Agent for Monitoring and Logging checkbox: Note: When you select the Install Ops Agent for Monitoring and Logging checkbox during VM creation, the examples on the tabs in the Equivalent code flyout are updated to include the steps for creating the Ops Agent OS policy.
- You then create instance-3 and instance-4 in the us-east1-b zone. instance-1 , instance-2 , and instance-3 had the Install Ops Agent for Monitoring and Logging checkbox selected during creation.
- The Ops Agent OS policies then cover the following VMs based on the Ops Agent OS policy assignment IDs: OS Policy Assignment ID Covers VMs In: Covered VMs goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a us-central1-a instance-1 , instance-2 goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b us-east1-b instance-3 By default, instance-4 isn't covered because you didn't select Install Ops Agent for Monitoring and Logging , so it doesn't have the goog-ops-agent-policy:v2-x86-template- 1-0-0 label.
- This label identifies the policy, template, and version: Label key, the identifier for the policy: goog-ops-agent-policy Label value, the policy template and version: v2-x86-template- 1-0-0 When you create a VM in the Google Cloud console, you can select the Install Ops Agent for Monitoring and Logging checkbox.

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Charts and alerting policies in Cloud Monitoring You can use both system and user-defined log-based metrics in Cloud Monitoring to create charts and alerting policies.
- You can display log-based metrics in Cloud Monitoring charts, and alerting policies can monitor these metrics.
- It also simplifies the process of creating charts and alerting policies, as there is no ambiguity as to which time-series data is charted or monitored.
- For these charts and alerting policies, you can use labels to filter or combine time series.

