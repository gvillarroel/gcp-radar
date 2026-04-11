---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.938Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Multi-stage query aggregations and joins"
feature_slug: "multi-stage-query-aggregations-and-joins"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "multi"
  - "stage"
  - "query"
  - "aggregations"
  - "and"
  - "joins"
  - "queries"
  - "can"
---

# Multi-stage query aggregations and joins

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Multi-stage queries can layer aggregations, calculate baselines and trends, and join data across stages.

## Extended Definition

Multi-stage queries can layer aggregations, calculate baselines and trends, and join data across stages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- Layer aggregations and analytics across multi-stage queries Recent updates to multi-stage queries let you: Layer aggregations and data statistical functions.
- You can use multi-stage queries in both Dashboards and Search to build sophisticated detection and visualization logic.
- Multi-stage queries can contain between 1 and 4 named stages, in addition to a root stage.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- Layer aggregations and analytics across multi-stage queries Recent updates to multi-stage queries let you: Layer aggregations and data statistical functions.
- You can use multi-stage queries in both Dashboards and Search to build sophisticated detection and visualization logic.
- Multi-stage queries can contain between 1 and 4 named stages, in addition to a root stage.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Feature Programmatic access limit Web interface limit QPH limit 2,000 1,000 Simple query concurrency 40 40 Complex query concurrency 10 10 Concurrency limits Concurrency limits define the number of simultaneous search operations allowed per tenant: Simple queries: Queries that span less than one day, use a single data source, and don't include stats.
- Use a block comment: additional.fields["pod name"] = "kube-scheduler" / Block comments can span multiple lines. / AND additional.fields["pod name1"] = "kube-scheduler1" Use a single-line comment: additional.fields["pod name"] != "" // my single-line comment Search settings You can set the maximum number of search results in UDM search settings .
- The following example shows how to enter a query to match the common UDM fields that might contain the specified IP address: ip = "1.2.3.4" You can match a grouped field using a regular expression and using the nocase operator.

