---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.504Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Shared custom column sets"
feature_slug: "shared-custom-column-sets"
latest_feature_date: "2026-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "shared"
  - "custom"
  - "column"
  - "sets"
  - "users"
  - "can"
  - "share"
  - "events"
---

# Shared custom column sets

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Users can share custom column sets in the Events table for consistent analysis across teams; Users can create, save, and share custom column sets in the Events table.

## Extended Definition

Users can share custom column sets in the Events table for consistent analysis across teams; Users can create, save, and share custom column sets in the Events table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Create and share custom column sets To use a consistent view when analyzing event data, you can create, save, and share custom column sets.
- The shared column sets are identified by a Shared tag in the column set list.
- In the Share Column Set dialog, select one of these options: Share New : Enter a new name for the column set to be shared.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- To filter and identify these specific events, you can create a custom label with the name Suspicious DHCP Activity with the following query: metadata.event type = "NETWORK DHCP" AND principal.ip = "10.0.0.1" The custom label works in the following manner: Google SecOps continuously ingests network logs and events into its UDM.
- The scope assignment lets you restrict access to these events to specific users or roles within your organization.
- Delete custom label Deleting a label prevents new data from being associated with it.
- Custom Label requirements and limitations We recommend that you review the following limits and requirements when you define and use custom labels: Naming and syntax requirements Custom Label names must be unique and can have a maximum length of 63 characters.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- The following example uses a data table called connections watchlist with columns ip and port : rule ioc ip4 and port matches { meta : description = "Matches on IP address and port using a data table" events : $ioc . metadata . event type = "NETWORK CONNECTION" $ioc . target . ip = $dip $ioc . target . port = $dport // row-based join: both ip and port must match same row in data table "connections watchlist" %connections watchlist . ip = $dip %connections watchlist . port = $dport match : $dip , $dport over 5 m condition : $ioc } BigQuery for historical IOC analysis The datalake.ioc matches table in Google SecOps's data lake (BigQuery) provides a powerful way to query historical IOC match data.
- Example: YARA-L rule matching IPs from a data table column rule ioc ip4 matches { meta : description = "IOC IPv4 matching using data tables" events : $ ioc . metadata . event type = "NETWORK CONNECTION" $ ioc . target . ip = $ dip // checks if the IP address is in the ip address column of data table "string demo list" $ dip in % string demo list . ip address condition : $ ioc } For multi-dimensional matching (for example, IP address + port), you can use row-based comparison against a data table with multiple columns.
- Example SQL to query for specific IP-address IOC matches: -- Add your IP IOC Matches here DECLARE IP IOCS ARRAY < STRING > ; SET IP IOCS = [ '40.79.150.120' ]; ------ SELECT MIN ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS first observed , MAX ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS last observed , COUNT ( 4 ) AS hits , ioc value , feed log type , is global , CONCAT ( COALESCE ( asset . namespace , "untagged" ), ":" , COALESCE ( asset . hostname , asset . asset ip address , asset . mac , "-" )) AS asset FROM datalake . ioc matches WHERE ioc value IN UNNEST ( IP IOCS ) AND ioc type = "IOC TYPE IP" GROUP BY 4 , 5 , 6 , 7 Here are the truncated results: Row first observed last observed hits ioc value feed log type is global asset 1 2025-02-23 2025-03-05 64 40.79.150.120 CATCH ALL false untagged:192.168.12.16 2 2025-02-27 2025-03-05 29 40.79.150.120 CATCH ALL false untagged:192.168.12.129 You can also query the datalake.events table for multi-dimensional IOC matching by constructing a concatenated string, for example: DECLARE IOC MULTIPLE ATTRIBUTES ARRAY < STRING > ; SET IOC MULTIPLE ATTRIBUTES = [ '1.2.3.4,80' , '1.2.3.4,443' ]; SELECT MIN ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS first seen , MAX ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS last seen , target ip , target . port FROM datalake . events , UNNEST ( target . ip ) target ip WHERE DATE ( hour time bucket ) BETWEEN DATE SUB ( CURRENT DATE , INTERVAL 60 DAY ) AND DATE SUB ( CURRENT DATE , INTERVAL 1 DAY ) AND target ip != "" AND target . port > 0 AND CONCAT ( target ip , "," , CAST ( target . port AS STRING )) IN UNNEST ( IOC MULTIPLE ATTRIBUTES ) GROUP BY 3 , 4 Note: The Google SecOps Data Lake typically retains data for six months.
- Example YARA-L rule using GLOBAL CONTEXT : rule google safebrowsing process launch { meta : author = "noam@" description = "Detects Process Launch events against Critical or High severity Google's SafeBrowsing database." events : $e . metadata . event type = "PROCESS LAUNCH" $e . target . process . file . sha256 = $hash $g . graph . metadata . entity type = "FILE" $g . graph . entity . file . sha256 = $hash $g . graph . metadata . source type = "GLOBAL CONTEXT" $g . graph . metadata . threat . severity = "CRITICAL" or $g . graph . metadata . threat . severity = "HIGH" match : $hash over 10 m condition : $e and $g } IOC matching with data tables and YARA-L rules You can use data tables within YARA-L rules to match against lists of IOCs.

