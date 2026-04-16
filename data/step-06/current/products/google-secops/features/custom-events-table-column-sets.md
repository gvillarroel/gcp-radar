---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.728Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Custom Events table column sets"
feature_slug: "custom-events-table-column-sets"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "custom"
  - "events"
  - "table"
  - "column"
  - "sets"
  - "users"
  - "can"
  - "create"
---

# Custom Events table column sets

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Users can create, save, and share custom column sets for the Events table.

## Extended Definition

Users can create, save, and share custom column sets for the Events table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Create and share custom column sets To use a consistent view when analyzing event data, you can create, save, and share custom column sets.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- It then matches those events against the hostnames column and the ip column in the badApps data table. events: $e.metadata.event type = "NETWORK CONNECTION" $e.security result.action = "ALLOW" $e.target.asset.asset id = $assetid // Event hostname matches at least one value in table column hostname. $e.target.hostname in %badApps.hostname // Event IP matches at least one value in table column ip. $e.target.ip in %badApps.ip For more information, see Use data tables .

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The table is followed by graphs of all Google Cloud services with their associated data that show their ingestion trend over the following time intervals: Last 24 hours Last 30 days Last six months Context Aware Detections - Risk dashboard The Context Aware Detections - Risk dashboard provides insight into the current threat status of assets and users in your enterprise.
- Ingestion - Events by Log Type : displays events based on log type—sortable by column: Log Type , Ingested Throughput , Ingested Logs , Normalized Events , Parsing Errors , Validation Errors , Indexing Errors .
- Ingestion - Events by Status : displays a table with events based on their status—sortable by column: Date , Ingested Logs , Normalized Events , Parsing Errors , Validation Errors , Indexing Errors .
- You can view the following visualizations in the Cloud Detection and Response Overview dashboard: CDIR Rulesets Enabled : displays the percentage of Google Security Operations SIEM rule sets enabled for your cloud environment from the total rule sets provided by GCTI for Google Security Operations SIEM users.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To filter and identify these specific events, you can create a custom label with the name Suspicious DHCP Activity with the following query: metadata.event type = "NETWORK DHCP" AND principal.ip = "10.0.0.1" The custom label works in the following manner: Google SecOps continuously ingests network logs and events into its UDM.
- Functional limitations Custom Label query don't support the following advanced features: Reference lists Enrichment fields Data tables Query execution time : Custom label query is subject to a maximum execution time limit of 5 seconds.
- Create and manage custom labels Custom labels are metadata that you can add to the SIEM ingested Google SecOps data to categorize and organize it based on UDM-normalized values.
- Create and manage scopes You can create and manage data scopes within the Google SecOps user interface, and then assign those scopes to users or groups through IAM.

