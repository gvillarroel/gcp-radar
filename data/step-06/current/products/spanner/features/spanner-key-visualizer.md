---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.320Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Key Visualizer"
feature_slug: "spanner-key-visualizer"
latest_feature_date: "2021-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
keywords:
  - "helps"
  - "visualizer"
  - "interactive"
  - "introduces"
  - "monitoring"
  - "tool"
---

# Spanner Key Visualizer

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Introduces Key Visualizer, an interactive monitoring tool for Spanner that helps analyze usage patterns and identify trends and outliers in performance and resource metrics.

## Extended Definition

Introduces Key Visualizer, an interactive monitoring tool for Spanner that helps analyze usage patterns and identify trends and outliers in performance and resource metrics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)

## Supporting Pages

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- This page introduces the Autoscaler tool for Spanner (Autoscaler), an open source tool that you can use as a companion tool to Spanner.
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .
- Custom metrics While the default metrics in the Autoscaler tool address most performance and scaling scenarios, there are some instances when you might need to specify your own metrics used for determining when to scale in and out.

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

