---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.950Z"
product_name: "Unified Maintenance"
product_slug: "unified-maintenance"
feature_name: "Unified Maintenance support for Google Kubernetes Engine"
feature_slug: "unified-maintenance-support-for-google-kubernetes-engine"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance"
  - "https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api"
  - "https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1"
  - "https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/Shared.Types/ResourceMaintenance"
keywords:
  - "unified"
  - "maintenance"
  - "for"
  - "kubernetes"
  - "engine"
  - "now"
  - "displays"
  - "activities"
---

# Unified Maintenance support for Google Kubernetes Engine

Product: Unified Maintenance
Coverage: MEDIUM

## Step 02 Summary

Unified Maintenance now displays maintenance activities for Google Kubernetes Engine.

## Extended Definition

Unified Maintenance now displays maintenance activities for Google Kubernetes Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api)
- [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1)
- [https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/Shared.Types/ResourceMaintenance](https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/Shared.Types/ResourceMaintenance)

## Supporting Pages

### "View maintenance activity logs \_|\_ Unified Maintenance \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- Source ID: `site-docs-reference`
- Final score: 203
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
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filters You can filter which maintenance activities are returned by several parameters: State ( SUCCEEDED , or STARTED , for example) Resource name Resource location Resource type Maintenance name Maintenance start time Maintenance end time For more information, see Unified Maintenance API documentation.
- Before you begin Before you view maintenance on your resources using Unified Maintenance, verify that Unified Maintenance supports your resource types .
- View resource maintenances You can use the Unified Maintenance API to return maintenance activity information for a Google Cloud project.
- View maintenances for a resource You can use the Unified Maintenance API to return maintenances for a specified resource.

### "Package google.cloud.maintenance.api.v1 \_|\_ Unified Maintenance \_|\_\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1](https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Index Maintenance (interface) GetResourceMaintenanceRequest (message) ListResourceMaintenancesRequest (message) ListResourceMaintenancesResponse (message) MaintenanceCategory (enum) MaintenanceControl (message) MaintenanceControl.Control (enum) MaintenanceSummary (message) MaintenanceSummary.Aggregate (message) MaintenanceSummary.Stats (message) ResourceMaintenance (message) ResourceMaintenance.Maintenance (message) ResourceMaintenance.Resource (message) ResourceMaintenance.State (enum) SummarizeMaintenancesRequest (message) SummarizeMaintenancesResponse (message) Maintenance Unified Maintenance service GetResourceMaintenance rpc GetResourceMaintenance( GetResourceMaintenanceRequest ) returns ( ResourceMaintenance ) Retrieve a single resource maintenance.
- Fields control Control The control of the resource maintenance. is custom bool Indicates whether the control is available only in Service Producer API (not through Unified Maintenance). documentation string Link to Service Producer documentation about maintenance control.
- Indicates whether the user has some control over that maintenance, either proactively before maintenance was scheduled with maintenance policy or with reactive controls after it was scheduled (see controls field). controls[] MaintenanceControl Output only.
- Indicates whether the user has some control over that maintenance, either proactively before maintenance was scheduled with maintenance policy or with reactive controls after it was scheduled (see controls field) controls[] MaintenanceControl Output only.

### ResourceMaintenance \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/Shared.Types/ResourceMaintenance](https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/Shared.Types/ResourceMaintenance)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Indicates whether the user has some control over that maintenance, either proactively before maintenance was scheduled with maintenance policy or with reactive controls after it was scheduled (see controls field) controls[] object ( MaintenanceControl ) Output only.
- Home Documentation Security Unified Maintenance Reference Send feedback ResourceMaintenance Stay organized with collections Save and categorize content based on your preferences.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . maintenanceScheduledStartTime string ( Timestamp format) Output only.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . maintenanceScheduledEndTime string ( Timestamp format) Output only.

