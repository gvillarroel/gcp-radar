---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.949Z"
product_name: "Unified Maintenance"
product_slug: "unified-maintenance"
feature_name: "Unified Maintenance support for Cloud SQL for PostgreSQL"
feature_slug: "unified-maintenance-support-for-cloud-sql-for-postgresql"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api"
  - "https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance"
  - "https://docs.cloud.google.com/unified-maintenance/docs/supported-services"
  - "https://docs.cloud.google.com/unified-maintenance/docs/log-schema"
keywords:
  - "unified"
  - "maintenance"
  - "for"
  - "sql"
  - "postgresql"
  - "now"
  - "displays"
  - "activities"
---

# Unified Maintenance support for Cloud SQL for PostgreSQL

Product: Unified Maintenance
Coverage: MEDIUM

## Step 02 Summary

Unified Maintenance now displays maintenance activities for Cloud SQL for PostgreSQL.

## Extended Definition

Unified Maintenance now displays maintenance activities for Cloud SQL for PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api)
- [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services)
- [https://docs.cloud.google.com/unified-maintenance/docs/log-schema](https://docs.cloud.google.com/unified-maintenance/docs/log-schema)

## Supporting Pages

### "View resource maintenances by using the API \_|\_ Unified Maintenance \_\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filters You can filter which maintenance activities are returned by several parameters: State ( SUCCEEDED , or STARTED , for example) Resource name Resource location Resource type Maintenance name Maintenance start time Maintenance end time For more information, see Unified Maintenance API documentation.
- Before you begin Before you view maintenance on your resources using Unified Maintenance, verify that Unified Maintenance supports your resource types .
- View resource maintenances You can use the Unified Maintenance API to return maintenance activity information for a Google Cloud project.
- View maintenances for a resource You can use the Unified Maintenance API to return maintenances for a specified resource.

### "View maintenance activity logs \_|\_ Unified Maintenance \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you view maintenance activity logs using Unified Maintenance: Verify that Unified Maintenance supports your resource types .
- To view maintenance activities using the Unified Maintenance API, see View resource maintenances by using the API .
- A list of existing logs for maintenance activities within your selected timeframe will appear.
- See the Unified Maintenance log schema for more information about reading logs.

### Supported services \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitored Resource Type Description Cloud SQL - MySQL sqladmin.googleapis.com/Instance Yes Yes cloudsql database Cloud SQL - Postgres sqladmin.googleapis.com/Instance Yes Yes cloudsql database Cloud SQL - SQL Server sqladmin.googleapis.com/Instance Yes Yes cloudsql database AlloyDB for PostgreSQL alloydb.googleapis.com/Cluster No No alloydb.googleapis.com/Cluster Looker looker.googleapis.com/Instance No No looker.googleapis.com/Instance Compute Engine compute.googleapis.com/Instance No Yes gce instance Unified Maintenance supports these Compute Engine virtual machine instances or bare metal instances types.
- Home Documentation Security Unified Maintenance Resources Send feedback Supported services Stay organized with collections Save and categorize content based on your preferences.
- The following table is a listing of services that are supported by Unified Maintenance.
- For more information, see Monitor and plan for a host maintenance event.

### Unified Maintenance log schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/log-schema](https://docs.cloud.google.com/unified-maintenance/docs/log-schema)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use these fields to write query operations for Unified Maintenance resources.
- Example log fields The following example shows a ResourceMaintenance resource. "insertId" : "proj-1-us-west1-db-1-830d851d-2adf-4fb0-8f5b-1e18e16530d9" , "timestamp" : "2023-09-14T16:00:00Z" , "receiveTimestamp" : "2023-09-14T16:00:01Z" , "logName" : "projects/proj-1/logs/maintenance.googleapis.com%2Fmaintenance events" , "resource" : { "type" : "cloudsql database" , "labels" : { "project id" : "proj-1" , "database id" : "db-1" , "region" : "us-west1" , }, }, "labels" : { "maintenance.googleapis.com/new resource maintenance" : "False" , "maintenance.googleapis.com/updated fields" : "['state','maintenanceScheduledStartTime','maintenanceScheduledEndTime']" }, "jsonPayload" : { "@type" : "type.googleapis.com/google.cloud.maintenance.logging.v1beta.ResourceMaintenanceLog" , "name" : "projects/proj-1/locations/us-west1/resourceMaintenances/db-1-a8307daa-5e1f-4974-b6a5-61fceb8331c0" , "resource" : { "resourceName" : "//sqladmin.googleapis.com/projects/proj-1/instances/db-1" , "location" : "us-west1" , "type" : "sqladmin.googleapis.com/Instance" }, "maintenance" : { "maintenanceName" : "830d851d-2adf-4fb0-8f5b-1e18e16530d9" , "title" : "Cloud SQL upgrade to v2" , "description" : "An upgrade to v2 release.
- Release notes: https://..." }, "state" : "SCHEDULED" , "maintenanceScheduledStartTime" : "2023-09-21T16:00:00Z" , "maintenanceScheduledEndTime" : "2023-09-21T20:00:00Z" } What's next Unified Maintenance overview Set up Unified Maintenance Configure alerts and notifications Implement common alert policies Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Possible keys: maintenance.googleapis.com/new resource maintenance - set to True for the first log entry for a ResourceMaintenance maintenance.googleapis.com/updated fields - a list of updated ResourceMaintenance fields, for example: "['state','maintenanceScheduledStartTime','maintenanceScheduledEndTime']" insertId string A unique identifier for the log entry. timestamp string (Timestamp format) The time the event described by the log entry occurred.

