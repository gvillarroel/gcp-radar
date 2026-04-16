---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.948Z"
product_name: "Unified Maintenance"
product_slug: "unified-maintenance"
feature_name: "Unified Maintenance support for Cloud Composer"
feature_slug: "unified-maintenance-support-for-cloud-composer"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance"
  - "https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api"
  - "https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance"
  - "https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1"
keywords:
  - "unified"
  - "maintenance"
  - "for"
  - "composer"
  - "now"
  - "displays"
  - "activities"
---

# Unified Maintenance support for Cloud Composer

Product: Unified Maintenance
Coverage: MEDIUM

## Step 02 Summary

Unified Maintenance now displays maintenance activities for Cloud Composer.

## Extended Definition

Unified Maintenance now displays maintenance activities for Cloud Composer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api)
- [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance)
- [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1)

## Supporting Pages

### "View maintenance activity logs \_|\_ Unified Maintenance \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you view maintenance activity logs using Unified Maintenance: Verify that Unified Maintenance supports your resource types .
- To view maintenance activities using the Unified Maintenance API, see View resource maintenances by using the API .
- A list of existing logs for maintenance activities within your selected timeframe will appear.
- See the Unified Maintenance log schema for more information about reading logs.

### "View resource maintenances by using the API \_|\_ Unified Maintenance \_\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filters You can filter which maintenance activities are returned by several parameters: State ( SUCCEEDED , or STARTED , for example) Resource name Resource location Resource type Maintenance name Maintenance start time Maintenance end time For more information, see Unified Maintenance API documentation.
- Before you begin Before you view maintenance on your resources using Unified Maintenance, verify that Unified Maintenance supports your resource types .
- View resource maintenances You can use the Unified Maintenance API to return maintenance activity information for a Google Cloud project.
- View maintenances for a resource You can use the Unified Maintenance API to return maintenances for a specified resource.

### Set up Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have been granted one of the basic roles (Viewer, Editor, or Owner) in Cloud Logging for your project, you have the necessary permissions to access Unified Maintenance logs.
- What's next View maintenance activities Log schema overview Configure alerts and notifications Implement common alert policies Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Receive maintenance activity logs in Cloud Logging The Unified Maintenance service sends maintenance logs automatically (independent of whether the Unified Maintenance API is enabled or not).
- Home Documentation Security Unified Maintenance Guides Send feedback Set up Unified Maintenance Stay organized with collections Save and categorize content based on your preferences.

### "Package google.cloud.maintenance.api.v1 \_|\_ Unified Maintenance \_|\_\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1)
- Source ID: `site-api-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Index Maintenance (interface) GetResourceMaintenanceRequest (message) ListResourceMaintenancesRequest (message) ListResourceMaintenancesResponse (message) MaintenanceCategory (enum) MaintenanceControl (message) MaintenanceControl.Control (enum) MaintenanceSummary (message) MaintenanceSummary.Aggregate (message) MaintenanceSummary.Stats (message) ResourceMaintenance (message) ResourceMaintenance.Maintenance (message) ResourceMaintenance.Resource (message) ResourceMaintenance.State (enum) SummarizeMaintenancesRequest (message) SummarizeMaintenancesResponse (message) Maintenance Unified Maintenance service GetResourceMaintenance rpc GetResourceMaintenance( GetResourceMaintenanceRequest ) returns ( ResourceMaintenance ) Retrieve a single resource maintenance.
- Fields control Control The control of the resource maintenance. is custom bool Indicates whether the control is available only in Service Producer API (not through Unified Maintenance). documentation string Link to Service Producer documentation about maintenance control.
- Indicates whether the user has some control over that maintenance, either proactively before maintenance was scheduled with maintenance policy or with reactive controls after it was scheduled (see controls field). controls[] MaintenanceControl Output only.
- Indicates whether the user has some control over that maintenance, either proactively before maintenance was scheduled with maintenance policy or with reactive controls after it was scheduled (see controls field) controls[] MaintenanceControl Output only.

