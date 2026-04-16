---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.165Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cloud regions in events timeline"
feature_slug: "cloud-regions-in-events-timeline"
latest_feature_date: "2024-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/alloydb/docs/maintenance"
keywords:
  - "timeline"
  - "information"
  - "events"
  - "regions"
  - "region"
  - "supports"
---

# Cloud regions in events timeline

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB events timeline supports Cloud region information.

## Extended Definition

AlloyDB events timeline supports Cloud region information.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)

## Supporting Pages

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). gceZone string The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances.
- The name of the resource will be in the format of projects/<alloydb-tenant-project-number>/regions/<region-name>/serviceAttachments/<service-attachment-name> allowedConsumerProjects[] string Optional.
- This is of the format: "projects/${CONSUMER PROJECT}/regions/${REGION}/networkAttachments/${NETWORK ATTACHMENT NAME}".
- ObservabilityInstanceConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field preserve comments can be only one of the following: "preserveComments" : boolean // End of list of possible types for union field preserve comments . // Union field track wait events can be only one of the following: "trackWaitEvents" : boolean // End of list of possible types for union field track wait events . // Union field track wait event types can be only one of the following: "trackWaitEventTypes" : boolean // End of list of possible types for union field track wait event types . // Union field max query string length can be only one of the following: "maxQueryStringLength" : integer // End of list of possible types for union field max query string length . // Union field record application tags can be only one of the following: "recordApplicationTags" : boolean // End of list of possible types for union field record application tags . // Union field query plans per minute can be only one of the following: "queryPlansPerMinute" : integer // End of list of possible types for union field query plans per minute . // Union field track active queries can be only one of the following: "trackActiveQueries" : boolean // End of list of possible types for union field track active queries . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Observability feature status for an instance.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). gceZone string The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances.
- The name of the resource will be in the format of projects/<alloydb-tenant-project-number>/regions/<region-name>/serviceAttachments/<service-attachment-name> allowedConsumerProjects[] string Optional.
- This is of the format: "projects/${CONSUMER PROJECT}/regions/${REGION}/networkAttachments/${NETWORK ATTACHMENT NAME}".
- ObservabilityInstanceConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field preserve comments can be only one of the following: "preserveComments" : boolean // End of list of possible types for union field preserve comments . // Union field track wait events can be only one of the following: "trackWaitEvents" : boolean // End of list of possible types for union field track wait events . // Union field track wait event types can be only one of the following: "trackWaitEventTypes" : boolean // End of list of possible types for union field track wait event types . // Union field max query string length can be only one of the following: "maxQueryStringLength" : integer // End of list of possible types for union field max query string length . // Union field record application tags can be only one of the following: "recordApplicationTags" : boolean // End of list of possible types for union field record application tags . // Union field query plans per minute can be only one of the following: "queryPlansPerMinute" : integer // End of list of possible types for union field query plans per minute . // Union field track active queries can be only one of the following: "trackActiveQueries" : boolean // End of list of possible types for union field track active queries . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Observability feature status for an instance.

### Maintenance overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This means that clusters in some regions receive and can access the latest version sooner than clusters in other regions.
- AlloyDB release notes and maintenance changelogs are published soon after maintenance is complete for all regions.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Non-emergency maintenance for an AlloyDB cluster with no configured maintenance windows can occur any time except for the hours between 6 AM and 10 PM on weekdays, in the local time of the region where the cluster is located.

