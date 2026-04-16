---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.483Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Deny maintenance period"
feature_slug: "deny-maintenance-period"
latest_feature_date: "2025-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/maintenance"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "deny"
  - "maintenance"
  - "period"
  - "alloydb"
  - "lets"
  - "you"
  - "configure"
  - "clusters"
---

# Deny maintenance period

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB lets you configure a deny maintenance period on clusters running the latest version.

## Extended Definition

AlloyDB lets you configure a deny maintenance period on clusters running the latest version.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### Maintenance overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Reasons for maintenance Periodic maintenance updates can happen for the following reasons: New AlloyDB features and bug fixes: to launch new features, Google must update the AlloyDB software that runs on the nodes within your cluster.
- Non-emergency maintenance for an AlloyDB cluster with no configured maintenance windows can occur any time except for the hours between 6 AM and 10 PM on weekdays, in the local time of the region where the cluster is located.
- You can set maintenance windows for both primary and secondary AlloyDB clusters.
- This includes deny maintenance periods.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- This can be: Full time OR All zeros for 00:00:00 UTC MaintenanceSchedule MaintenanceSchedule stores the maintenance schedule generated from the MaintenanceUpdatePolicy, once a maintenance rollout is triggered, if MaintenanceWindow is set, and if there is no conflicting DenyPeriod.
- JSON representation { "maintenanceWindows" : [ { object ( MaintenanceWindow ) } ] , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] } Fields maintenanceWindows[] object ( MaintenanceWindow ) Preferred windows to perform maintenance.
- Currently limited to 1. denyMaintenancePeriods[] object ( DenyMaintenancePeriod ) Periods to deny maintenance.
- Excepting emergencies, maintenance will not be scheduled to start within this deny period.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- MaintenanceUpdatePolicy JSON representation { "maintenanceWindows" : [ { object ( MaintenanceWindow ) } ] , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] } Fields maintenanceWindows[] object ( MaintenanceWindow ) Preferred windows to perform maintenance.
- DenyMaintenancePeriod JSON representation { "startDate" : { object ( Date ) } , "endDate" : { object ( Date ) } , "time" : { object ( TimeOfDay ) } } Fields startDate object ( Date ) Deny period start date.
- Currently limited to 1. denyMaintenancePeriods[] object ( DenyMaintenancePeriod ) Periods to deny maintenance.
- Curl Request curl --location 'https://alloydb.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list clusters", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Message for requesting list of Clusters ListClustersRequest JSON representation { "parent" : string , "pageSize" : integer , "pageToken" : string , "filter" : string , "orderBy" : string } Fields parent string Required.

