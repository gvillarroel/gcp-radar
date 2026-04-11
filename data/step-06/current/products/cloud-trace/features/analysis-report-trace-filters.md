---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.837Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Analysis report trace filters"
feature_slug: "analysis-report-trace-filters"
latest_feature_date: "2018-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/trace-filters"
  - "https://docs.cloud.google.com/trace/docs/release-notes"
keywords:
  - "analysis"
  - "report"
  - "trace"
  - "filters"
  - "reports"
  - "can"
  - "filter"
  - "traces"
---

# Analysis report trace filters

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Analysis reports can filter traces by full URI, URI prefix, or trace filter.

## Extended Definition

Analysis reports can filter traces by full URI, URI prefix, or trace filter.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/trace-filters](https://docs.cloud.google.com/trace/docs/trace-filters)
- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- When you are investigating an issue, you might want to view a specific trace or only spans with certain properties: To restrict which spans are shown, apply filters .
- When you add or remove a filter, the data displayed by the Trace Explorer page is refreshed and only shows those spans that match all applied filters.
- Filter your trace data To display only information that is of interest to you, apply filters.
- You can apply filters to restrict which spans the tables show.

### Cloud Trace filters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/trace-filters](https://docs.cloud.google.com/trace/docs/trace-filters)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document describes how you can configure filters when you use the Cloud Trace API list method.
- For example, the following filter matches traces that have a latency of one second or more, and that contain a span named /modules.GetNumInstances : +span:/modules.GetNumInstances latency:1s All string comparisons are case-sensitive.
- Home Documentation Observability Cloud Trace Reference Send feedback Cloud Trace filters Stay organized with collections Save and categorize content based on your preferences.
- No results If your filter does not return any traces, check the following: Be sure there are no spaces in the filter except the ones that separate the comparisons.

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature You can now filter traces for analysis reports by the full URI, by the URI prefix, or by using trace filter.
- To learn more, see the following: Find and explore traces Application Monitoring overview View application telemetry Telemetry (OTLP) API overview June 13, 2025 Change The Analysis reports page has been removed.
- You can use menus to apply filters and to group traces by span and service name.
- June 05, 2017 Feature Advanced trace filters : The Trace List page and Trace API now allow filtering traces by custom labels, latencies, child spans, and methods in addition to URIs.

