---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.086Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Text widget dashboard section links"
feature_slug: "text-widget-dashboard-section-links"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "text"
  - "widget"
  - "dashboard"
  - "section"
  - "links"
  - "widgets"
  - "can"
  - "link"
---

# Text widget dashboard section links

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Text widgets can link to sections of a dashboard.

## Extended Definition

Text widgets can link to sections of a dashboard.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Feature Text widgets can now link to sections of a dashboard and they can render variables.
- December 19, 2023 Feature On your custom dashboards, you can add section widgets that create a table of contents for your dashboard.
- May 28, 2024 Feature Announcing new Open Telemetry samples that show how to instrument your Python and Node.js applications to collect metrics, logs, and traces: Python example Node.js example For general instrumentation information and recommendations, and for links to other samples, see: Instrumentation and observability overview Choose an instrumentation approach May 13, 2024 Feature You can now configure dashboards to display events by using the Monitoring API.
- November 03, 2022 Feature You can now add table widgets to custom dashboards that let you limit the number of table rows, persiste specific columns, display only those rows with the highest, or lowest values, and that display a visual indicator of the value as compared to the range of possible values.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Logging configurations The logging configuration uses the configuration model described previously: receivers : This element describes the data to collect from log files; this data is mapped into a <timestamp, record> model. processors : This optional element describes how the agent can modify the collected information. service : This element links receivers and processors together to create data flows, called pipelines .
- The building blocks of the configuration are as follows: receivers : This element describes what is collected by the agent. processors : This element describes how the agent can modify the collected information. service : This element links receivers and processors together to create data flows, called pipelines .
- To disable self-log collection, add a global section to your user-specified configuration file and set the default self log file collection option to the value false : logging: ... metrics: ... global: default self log file collection: false Log-rotation configuration Starting with Ops Agent version 2.31.0, you can also set up the agent's log-rotation feature by using the configuration files.
- Metrics service The metrics service customizes verbosity for the Ops Agent metrics module's own logs and links metrics receivers and processors together into pipelines.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- This section describes how you can use options on a dashboard or on a widget, like a chart, to get more information about the data that is shown.
- Filter a dashboard You can add filters to a dashboard that apply to all widgets on the dashboard.
- The following sections describes the information that you can find on the Overview , Dashboard , and Topology tabs.
- You can select an existing custom dashboard or you can create a dashboard and then save the widget.

