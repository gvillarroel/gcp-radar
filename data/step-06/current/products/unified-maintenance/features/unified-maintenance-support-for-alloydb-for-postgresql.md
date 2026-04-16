---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.947Z"
product_name: "Unified Maintenance"
product_slug: "unified-maintenance"
feature_name: "Unified Maintenance support for AlloyDB for PostgreSQL"
feature_slug: "unified-maintenance-support-for-alloydb-for-postgresql"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api"
  - "https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance"
  - "https://docs.cloud.google.com/unified-maintenance/docs/supported-services"
  - "https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance"
keywords:
  - "unified"
  - "maintenance"
  - "for"
  - "alloydb"
  - "postgresql"
  - "now"
  - "displays"
  - "activities"
---

# Unified Maintenance support for AlloyDB for PostgreSQL

Product: Unified Maintenance
Coverage: MEDIUM

## Step 02 Summary

Unified Maintenance now displays maintenance activities for AlloyDB for PostgreSQL.

## Extended Definition

Unified Maintenance now displays maintenance activities for AlloyDB for PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api)
- [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services)
- [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance)

## Supporting Pages

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

### "View maintenance activity logs \_|\_ Unified Maintenance \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you view maintenance activity logs using Unified Maintenance: Verify that Unified Maintenance supports your resource types .
- To view maintenance activities using the Unified Maintenance API, see View resource maintenances by using the API .
- A list of existing logs for maintenance activities within your selected timeframe will appear.
- See the Unified Maintenance log schema for more information about reading logs.

### Supported services \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/supported-services](https://docs.cloud.google.com/unified-maintenance/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitored Resource Type Description Cloud SQL - MySQL sqladmin.googleapis.com/Instance Yes Yes cloudsql database Cloud SQL - Postgres sqladmin.googleapis.com/Instance Yes Yes cloudsql database Cloud SQL - SQL Server sqladmin.googleapis.com/Instance Yes Yes cloudsql database AlloyDB for PostgreSQL alloydb.googleapis.com/Cluster No No alloydb.googleapis.com/Cluster Looker looker.googleapis.com/Instance No No looker.googleapis.com/Instance Compute Engine compute.googleapis.com/Instance No Yes gce instance Unified Maintenance supports these Compute Engine virtual machine instances or bare metal instances types.
- Home Documentation Security Unified Maintenance Resources Send feedback Supported services Stay organized with collections Save and categorize content based on your preferences.
- The following table is a listing of services that are supported by Unified Maintenance.
- For more information, see Monitor and plan for a host maintenance event.

### Set up Unified Maintenance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance](https://docs.cloud.google.com/unified-maintenance/docs/set-up-unified-maintenance)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- If you have been granted one of the basic roles (Viewer, Editor, or Owner) in Cloud Logging for your project, you have the necessary permissions to access Unified Maintenance logs.
- What's next View maintenance activities Log schema overview Configure alerts and notifications Implement common alert policies Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Receive maintenance activity logs in Cloud Logging The Unified Maintenance service sends maintenance logs automatically (independent of whether the Unified Maintenance API is enabled or not).
- Home Documentation Security Unified Maintenance Guides Send feedback Set up Unified Maintenance Stay organized with collections Save and categorize content based on your preferences.

