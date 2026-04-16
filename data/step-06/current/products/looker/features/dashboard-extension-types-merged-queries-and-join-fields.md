---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.552Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Dashboard extension types merged_queries and join_fields"
feature_slug: "dashboard-extension-types-merged-queries-and-join-fields"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-labs"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features"
keywords:
  - "dashboard"
  - "extension"
  - "types"
  - "merged"
  - "queries"
  - "join"
  - "fields"
  - "looker"
---

# Dashboard extension types merged_queries and join_fields

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker now treats merged_queries and join_fields as legal types for extending dashboards.

## Extended Definition

Looker now treats merged_queries and join_fields as legal types for extending dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)

## Supporting Pages

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- Control user access to data There are several ways to control a user's access to data, depending on the use case: To prohibit users from seeing certain columns of data, control the fields that they can access, as described in the Control user access to Looker fields section .
- To limit access to specific Explores, joins, views, or fields, create access grants that limit access to only those users who are assigned the allowed user attribute values, as described on the access grant parameter documentation page.
- Feature Access , which controls the types of actions a user is allowed to do in Looker, including viewing data and saved content, changing the LookML models, administrating Looker and so forth.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- By default, merged queries are processed in Looker memory, and therefore each query is limited to 5,000 rows that can be joined.
- This feature improves performance and allows for unlimited rows of data being joined for merged queries when both queries being merged use the same BigQuery connection.
- When this preview feature is enabled, the new Enhanced search experience lets you search for Looker content using filters for specific content types, special characters, and more metadata options.
- When the BI Engine Symmetric Aggregates feature is enabled, for queries that use symmetric aggregates , Looker generates experimental SQL patterns that execute faster on the BigQuery BI Engine.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- By default, merged queries are processed in Looker memory, and therefore each query is limited to 5,000 rows that can be joined.
- This feature improves performance and allows for unlimited rows of data being joined for merged queries when both queries being merged use the same BigQuery connection.
- When this preview feature is enabled, the new Enhanced search experience lets you search for Looker content using filters for specific content types, special characters, and more metadata options.
- When the BI Engine Symmetric Aggregates feature is enabled, for queries that use symmetric aggregates , Looker generates experimental SQL patterns that execute faster on the BigQuery BI Engine.

