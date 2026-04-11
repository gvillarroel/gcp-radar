---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.832Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Ops Agent OTLP receiver"
feature_slug: "ops-agent-otlp-receiver"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/otlp"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
keywords:
  - "ops"
  - "agent"
  - "otlp"
  - "receiver"
  - "the"
  - "includes"
  - "an"
  - "for"
---

# Ops Agent OTLP receiver

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

The Ops Agent includes an OTLP receiver for collecting custom traces and metrics from applications instrumented with OpenTelemetry SDKs.

## Extended Definition

The Ops Agent includes an OTLP receiver for collecting custom traces and metrics from applications instrumented with OpenTelemetry SDKs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)

## Supporting Pages

### "Use the Ops Agent and OpenTelemetry Protocol (OTLP) \_|\_ Cloud Trace \_\

- URL: [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Collect OTLP metrics When you use the OTLP receiver to collect metrics from your OpenTelemetry applications, the primary configuration choice for the receiver is the API that you want to use to ingest the metrics.
- To disable the collection of OTLP metrics and traces by the Ops Agent, do the following: Remove the OTLP configuration from the user configuration file: Delete the entire combined section, which includes the otlp receiver.
- Overview of using the OTLP receiver With the Ops Agent OTLP receiver, you can do the following: Instrument your application by using one of the language-specific SDKs for OpenTelemetry.
- You can collect logs by using the Ops Agent and other receivers and you can include log information in OTLP spans, but the OTLP receiver doesn't support the direct collection of logs.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Prometheus prometheus.googleapis.com Samples Metrics collected by using Google Cloud Managed Service for Prometheus , or by using the Ops Agent and the Prometheus receiver or the OTLP receiver .
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For lists of these metrics, see Ops Agent metrics and Legacy Monitoring and Logging metrics .
- The following table includes regular expressions that might be useful for excluding metrics from statsd or similar dynamically named metrics: Block metrics with names containing Regex more than one underscore in a row . {2,}. more than 7 digits in a row (likely timestamp) . \d{7,}. really long segments (likely label-parsing errors) . [a-zA-Z0-9]{20,}. hexadecimal substrings, including GUIDs . [A-F0-9]{10,}.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent, as shown in the following screenshot: The Agent column reports the following values: Not detected : Either you don't have an agent installed or it is not running.
- Instead, we recommend that you use the Ops Agent for new Google Cloud workloads and eventually transition your existing Compute Engine VMs to use the Ops Agent.
- The Ops Agent, which combines the collection of metrics and logging into a single agent, is the eventual replacement for the legacy agents.
- See Migrating from the legacy agents to the Ops Agent for information on transitioning to the Ops Agent.

