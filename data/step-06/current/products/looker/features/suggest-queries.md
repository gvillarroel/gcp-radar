---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.449Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Suggest Queries"
feature_slug: "suggest-queries"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-queries"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
keywords:
  - "suggest"
  - "queries"
  - "now"
  - "respects"
  - "concurrency"
  - "limit"
  - "configured"
  - "connection"
---

# Suggest Queries

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Suggest Queries now respects the concurrency limit configured for the connection.

## Extended Definition

Suggest Queries now respects the concurrency limit configured for the connection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)

## Supporting Pages

### Admin settings - Queries \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker admins can stop a running query from the Queries admin page by clicking the Stop button for the query. (Users with the see queries permission can view the Queries page, but only Looker admins can stop a running query.) Note: Google BigQuery connections that are configured for OAuth authentication don't support query killing.
- For a connection, if a value is provided for the Max concurrent queries per user for this connection setting, the Max concurrent queries per user for this connection value will override the per-user-query-limit startup option for the connection.
- For example, if you have a 5-node cluster with a per-user-query-limit of 15, each node will allow 15 concurrent queries per user for this connection, for a total of 75 queries across all nodes (15 5 = 75).
- You can change the per-user query limit for a connection by using the Max concurrent queries per user for this connection setting on the connection's Connection Settings page.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- When Reduce Filter Queries is enabled, Looker moves any filter that requests suggestions into a dialog where the filter won't fetch suggestions until a user clicks on it in the dialog.
- Onboarding When enabled, Looker admins and developers who log in to a new Looker instance will see the Looker onboarding walkthrough, which guides users through the four major steps to make use of a Looker instance: Adding a connection Creating a project Editing project files as needed Exploring data Once any combination of admins or developers completes the full guide, it stops being displayed.
- For example, to limit email deliveries to just emails with gmail.com and friendly domain.org domains, you can specify these domains in the Email Domain Allowlist for Scheduled Content field and then grant users the schedule look emails permission.
- Block Formulas and Macros in CSV and Excel Files When this setting is enabled, Looker prepends a ' character to all values that could be interpreted as formulas or macros in queries that are downloaded in CSV or Excel spreadsheet formats.

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- To limit Looker users to running queries on a specific database user, which your database team has configured to limit data access, use user attributes .
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- Data access can be further restricted within a model using access filters to limit which rows of data they can see, as though there was an automatic filter on their queries.
- They allow you to parameterize your database connection so that a group of users or individual users run their queries with specific database credentials.

