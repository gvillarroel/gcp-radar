---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.650Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "UDM Search Pivot Table"
feature_slug: "udm-search-pivot-table"
latest_feature_date: "2023-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "udm"
  - "search"
  - "pivot"
  - "table"
  - "lets"
  - "users"
  - "group"
  - "results"
---

# UDM Search Pivot Table

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The UDM Search Pivot Table lets users group search results and run aggregations across UDM fields.

## Extended Definition

The UDM Search Pivot Table lets users group search results and run aggregations across UDM fields.

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
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- If your Group by value includes a timestamp, you have the following additional Transform options: (Time) Resolution in milliseconds (Time) Resolution in seconds (Time) Resolution in minutes (Time) Resolution in hours (Time) Resolution in days Specify a Value for your Pivot from the list of Fields in your results.
- You can summarize by the following options: sum count count distinct average stddev min max Specify a value of Event count to return the number of events identified for this particular search and Pivot Table.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Create and manage scopes You can create and manage data scopes within the Google SecOps user interface, and then assign those scopes to users or groups through IAM.
- The scope assignment lets you restrict access to these events to specific users or roles within your organization.
- You can refine the query and click Run Search until the results display the data that you want to label.
- You can refine the query and click Run Search until the results display the data that you want to label.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Example SQL to query for specific IP-address IOC matches: -- Add your IP IOC Matches here DECLARE IP IOCS ARRAY < STRING > ; SET IP IOCS = [ '40.79.150.120' ]; ------ SELECT MIN ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS first observed , MAX ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS last observed , COUNT ( 4 ) AS hits , ioc value , feed log type , is global , CONCAT ( COALESCE ( asset . namespace , "untagged" ), ":" , COALESCE ( asset . hostname , asset . asset ip address , asset . mac , "-" )) AS asset FROM datalake . ioc matches WHERE ioc value IN UNNEST ( IP IOCS ) AND ioc type = "IOC TYPE IP" GROUP BY 4 , 5 , 6 , 7 Here are the truncated results: Row first observed last observed hits ioc value feed log type is global asset 1 2025-02-23 2025-03-05 64 40.79.150.120 CATCH ALL false untagged:192.168.12.16 2 2025-02-27 2025-03-05 29 40.79.150.120 CATCH ALL false untagged:192.168.12.129 You can also query the datalake.events table for multi-dimensional IOC matching by constructing a concatenated string, for example: DECLARE IOC MULTIPLE ATTRIBUTES ARRAY < STRING > ; SET IOC MULTIPLE ATTRIBUTES = [ '1.2.3.4,80' , '1.2.3.4,443' ]; SELECT MIN ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS first seen , MAX ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS last seen , target ip , target . port FROM datalake . events , UNNEST ( target . ip ) target ip WHERE DATE ( hour time bucket ) BETWEEN DATE SUB ( CURRENT DATE , INTERVAL 60 DAY ) AND DATE SUB ( CURRENT DATE , INTERVAL 1 DAY ) AND target ip != "" AND target . port > 0 AND CONCAT ( target ip , "," , CAST ( target . port AS STRING )) IN UNNEST ( IOC MULTIPLE ATTRIBUTES ) GROUP BY 3 , 4 Note: The Google SecOps Data Lake typically retains data for six months.
- UDM Search and Search API UDM Search : Supports using data tables (previously called reference lists ) for single-dimension searches (for example, a list of hashes).
- The following table details which specific UDM fields are used for automatic IOC matching based on your package: Enterprise package Enterprise Plus package about.file network.dns.answers network.dns.questions network.dns.questions principal.administrative domain principal.asset principal.ip principal.process.file principal.process.file principal.process.parent process.file principal.process.parent process.file security result.about.file security result.about.file src.file src.file src.ip target.asset.ip target.domain.name target.file target.file target.hostname target.hostname target.ip target.ip target.process.file target.process.file target.process.parent process.file Understanding which UDM fields are used helps ensure your data parsers correctly map raw log fields to the appropriate UDM fields for effective IOC matching.
- Example YARA-L rule using GLOBAL CONTEXT : rule google safebrowsing process launch { meta : author = "noam@" description = "Detects Process Launch events against Critical or High severity Google's SafeBrowsing database." events : $e . metadata . event type = "PROCESS LAUNCH" $e . target . process . file . sha256 = $hash $g . graph . metadata . entity type = "FILE" $g . graph . entity . file . sha256 = $hash $g . graph . metadata . source type = "GLOBAL CONTEXT" $g . graph . metadata . threat . severity = "CRITICAL" or $g . graph . metadata . threat . severity = "HIGH" match : $hash over 10 m condition : $e and $g } IOC matching with data tables and YARA-L rules You can use data tables within YARA-L rules to match against lists of IOCs.

