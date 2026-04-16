---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.286Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log views advanced filters"
feature_slug: "log-views-advanced-filters"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/buckets"
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
Coverage: MEDIUM

## Step 02 Summary

Log views support disjunctive clauses, negation statements, and labels in filters.

## Extended Definition

Log views support disjunctive clauses, negation statements, and labels in filters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- These filters use an extended set of Logging query language such as disjunctive clauses.
- When you use OR statements, we recommend that you group the clauses with parentheses.
- For example, if the toolbar displays N log view , then the manage search Analyze results button is shown when the log bucket for at least one of the selected log views is upgraded to use Observability Analytics.
- You can expand the menu to list the log views. my-custom-scope , where "my-custom-scope" is the name of a custom log scope: If a log scope lists log views, then the log entries in those log views are returned.

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- For all filters except filters used by log views , you can use AND , OR , and NOT operators.
- When you use OR statements, we recommend that you group the clauses with parentheses.
- You might use comments for the following cases: To annotate your complex filters with information about what a clause does: -- All of our target users are emitted by Compute Engine instances. resource.type = "gce instance" -- Looking for logs from "alex". jsonPayload.targetUser = "alex" To quickly enable or disable a clause by adding or removing the comment prefix: resource.type = "gce instance" -- jsonPayload.targetUser = "alex" jsonPayload.targetUser = "kiran" -- jsonPayload.targetUser = "sasha" Note: Comments count towards the maximum filter character limit of 20,000 characters.
- Disjunctive restriction: resource.type = "k8s cluster" OR resource.type = "gce instance" Alternatively: resource.type = ("k8s cluster" OR "gce instance") Complex conjunctive/disjunctive expression: resource.type = "k8s cluster" AND (severity = "ERROR" OR "error") The following is an example of a query: resource.type = "gce instance" AND severity >= "ERROR" AND NOT textPayload:robot This query matches log entries from Compute Engine that have severity values of at least ERROR and whose textPayload field doesn't contain the string robot anywhere inside it.

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- To select the resource, metric, and filters, expand the Select a metric menu and then use the values in the New condition table: Optional: To limit the menu to relevant entries, enter the resource or metric name in the filter bar.
- After creating a bucket, create a sink to route log entries to your bucket and configure log views to control who can access the logs in your new bucket and which logs are accessible to them.
- The following error is shown in response to a delete command on a log bucket that has a linked dataset: FAILED PRECONDITION: This bucket is used for advanced analytics and has an active link.
- For information about how to configure log views, and how to grant access to specific log views, see Configure log views on a log bucket .

