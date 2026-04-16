---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.517Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Search query and filter visibility"
feature_slug: "search-query-and-filter-visibility"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
keywords:
  - "search"
  - "query"
  - "filter"
  - "visibility"
  - "page"
  - "now"
  - "displays"
  - "current"
---

# Search query and filter visibility

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Search page now displays the current query and applied filters.

## Extended Definition

The Search page now displays the current query and applied filters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Filter events field The Filter events field displays the filters you've created, and lets you apply them to the Search field, or remove them as needed.
- Refine the search results Use the Search page features to filter and refine results, as an alternative to modifying and rerunning the search.
- Then, close the UDM lookup dialog, and paste the search query string into the Search field on the Search page.
- Search displays the current state of the data table and its rows when you view the results.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example SQL to query for specific IP-address IOC matches: -- Add your IP IOC Matches here DECLARE IP IOCS ARRAY < STRING > ; SET IP IOCS = [ '40.79.150.120' ]; ------ SELECT MIN ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS first observed , MAX ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS last observed , COUNT ( 4 ) AS hits , ioc value , feed log type , is global , CONCAT ( COALESCE ( asset . namespace , "untagged" ), ":" , COALESCE ( asset . hostname , asset . asset ip address , asset . mac , "-" )) AS asset FROM datalake . ioc matches WHERE ioc value IN UNNEST ( IP IOCS ) AND ioc type = "IOC TYPE IP" GROUP BY 4 , 5 , 6 , 7 Here are the truncated results: Row first observed last observed hits ioc value feed log type is global asset 1 2025-02-23 2025-03-05 64 40.79.150.120 CATCH ALL false untagged:192.168.12.16 2 2025-02-27 2025-03-05 29 40.79.150.120 CATCH ALL false untagged:192.168.12.129 You can also query the datalake.events table for multi-dimensional IOC matching by constructing a concatenated string, for example: DECLARE IOC MULTIPLE ATTRIBUTES ARRAY < STRING > ; SET IOC MULTIPLE ATTRIBUTES = [ '1.2.3.4,80' , '1.2.3.4,443' ]; SELECT MIN ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS first seen , MAX ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS last seen , target ip , target . port FROM datalake . events , UNNEST ( target . ip ) target ip WHERE DATE ( hour time bucket ) BETWEEN DATE SUB ( CURRENT DATE , INTERVAL 60 DAY ) AND DATE SUB ( CURRENT DATE , INTERVAL 1 DAY ) AND target ip != "" AND target . port > 0 AND CONCAT ( target ip , "," , CAST ( target . port AS STRING )) IN UNNEST ( IOC MULTIPLE ATTRIBUTES ) GROUP BY 3 , 4 Note: The Google SecOps Data Lake typically retains data for six months.
- View alerts and IOC matches Supported in: Google secops SIEM The Alerts & IOCs page displays all the alerts and Indicators of Compromise (IOCs) that are impacting your enterprise.
- The page contains the Alerts tab and the IOC Matches tab: Use the Alerts tab to view the current alerts in your enterprise.
- The following example uses a data table called connections watchlist with columns ip and port : rule ioc ip4 and port matches { meta : description = "Matches on IP address and port using a data table" events : $ioc . metadata . event type = "NETWORK CONNECTION" $ioc . target . ip = $dip $ioc . target . port = $dport // row-based join: both ip and port must match same row in data table "connections watchlist" %connections watchlist . ip = $dip %connections watchlist . port = $dport match : $dip , $dport over 5 m condition : $ioc } BigQuery for historical IOC analysis The datalake.ioc matches table in Google SecOps's data lake (BigQuery) provides a powerful way to query historical IOC match data.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Entity details across Google SecOps The following fields, which describe an asset or a user, appear on multiple pages in Google SecOps, such as the Entity Context panel in UDM Search.
- Reference lists Reference lists are collections of values that are used for matching and filtering data in UDM Search and detection rules.
- Can view and use unscoped list Yes Yes Can run UDM search and dashboard queries with unscoped reference lists Yes Yes Can run UDM search and dashboard queries with scoped reference lists Yes Yes (if there is at least one matching scope between the user and the reference list) For example, a user with scope A can run UDM search queries with reference lists with scopes A, B, and C, but not with reference lists with scopes B and C.
- Can view and use unscoped data table Yes Yes Can run search queries with unscoped data tables Yes Yes Can run search queries with scoped data tables Yes Yes (if there's at least one matching scope between the user and the data table) For example, a user with scope A can run search queries with data tables with scopes A, B, and C, but not with data tables with scopes B and C.

