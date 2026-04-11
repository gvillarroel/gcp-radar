---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.515Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log views advanced filters"
feature_slug: "log-views-advanced-filters"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "log"
  - "views"
  - "advanced"
  - "filters"
  - "disjunctive"
  - "clauses"
  - "negation"
  - "statements"
---

# Log views advanced filters

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Log views support disjunctive clauses, negation statements, and labels in filters.

## Extended Definition

Log views support disjunctive clauses, negation statements, and labels in filters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- These filters use an extended set of Logging query language such as disjunctive clauses.
- For example, if the toolbar displays N log view , then the manage search Analyze results button is shown when the log bucket for at least one of the selected log views is upgraded to use Observability Analytics.
- You can expand the menu to list the log views. my-custom-scope , where "my-custom-scope" is the name of a custom log scope: If a log scope lists log views, then the log entries in those log views are returned.
- Note: When a query contains multiple statements, you can either specify how those statements are joined or rely on Cloud Logging implicitly adding the conjunctive restriction, AND , between the statements.

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- For all filters except filters used by log views , you can use AND , OR , and NOT operators.
- You might use comments for the following cases: To annotate your complex filters with information about what a clause does: -- All of our target users are emitted by Compute Engine instances. resource.type = "gce instance" -- Looking for logs from "alex". jsonPayload.targetUser = "alex" To quickly enable or disable a clause by adding or removing the comment prefix: resource.type = "gce instance" -- jsonPayload.targetUser = "alex" jsonPayload.targetUser = "kiran" -- jsonPayload.targetUser = "sasha" Note: Comments count towards the maximum filter character limit of 20,000 characters.
- Disjunctive restriction: resource.type = "k8s cluster" OR resource.type = "gce instance" Alternatively: resource.type = ("k8s cluster" OR "gce instance") Complex conjunctive/disjunctive expression: resource.type = "k8s cluster" AND (severity = "ERROR" OR "error") The following is an example of a query: resource.type = "gce instance" AND severity >= "ERROR" AND NOT textPayload:robot This query matches log entries from Compute Engine that have severity values of at least ERROR and whose textPayload field doesn't contain the string robot anywhere inside it.
- Using the resource.type field in the following examples, the Logging query language grammar looks like this: Simple restriction: resource.type = "k8s cluster" Conjunctive restriction: resource.type = "k8s cluster" AND severity = "ERROR" Note: When a query contains multiple statements, you can either specify how those statements are joined or rely on Cloud Logging implicitly adding the conjunctive restriction, AND , between the statements.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- April 02, 2026 Feature The filter capabilities for log views have been extended to include support for disjunctive clauses, negation statements, and labels.
- August 03, 2015 Feature Cloud Logging now has advanced logs filters that let you specify arbitrary Boolean expressions that match on log entries.
- A project sink can export log entries from any combination of logs, based on advanced logs filters .
- See Using advanced logs filters in the Logs Viewer, and the Advanced Logs Filters guide .

