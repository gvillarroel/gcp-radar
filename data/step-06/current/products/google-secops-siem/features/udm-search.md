---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.676Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "UDM Search"
feature_slug: "udm-search"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "udm"
  - "search"
  - "enables"
  - "users"
  - "events"
  - "event"
  - "groups"
  - "quick"
---

# UDM Search

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

UDM Search enables users to search UDM events and event groups with Quick Filters, Event Viewer, Search Manager, and a search API method.

## Extended Definition

UDM Search enables users to search UDM events and event groups with Quick Filters, Event Viewer, Search Manager, and a search API method.

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
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can search for individual UDM events and groups of UDM events that match the same query.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The scope assignment lets you restrict access to these events to specific users or roles within your organization.
- To filter and identify these specific events, you can create a custom label with the name Suspicious DHCP Activity with the following query: metadata.event type = "NETWORK DHCP" AND principal.ip = "10.0.0.1" The custom label works in the following manner: Google SecOps continuously ingests network logs and events into its UDM.
- Create and manage scopes You can create and manage data scopes within the Google SecOps user interface, and then assign those scopes to users or groups through IAM.
- You want to track Dynamic Host Configuration Protocol (DHCP) events from a specific IP address (10.0.0.1) that you suspect might be compromised.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Example SQL to query for specific IP-address IOC matches: -- Add your IP IOC Matches here DECLARE IP IOCS ARRAY < STRING > ; SET IP IOCS = [ '40.79.150.120' ]; ------ SELECT MIN ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS first observed , MAX ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS last observed , COUNT ( 4 ) AS hits , ioc value , feed log type , is global , CONCAT ( COALESCE ( asset . namespace , "untagged" ), ":" , COALESCE ( asset . hostname , asset . asset ip address , asset . mac , "-" )) AS asset FROM datalake . ioc matches WHERE ioc value IN UNNEST ( IP IOCS ) AND ioc type = "IOC TYPE IP" GROUP BY 4 , 5 , 6 , 7 Here are the truncated results: Row first observed last observed hits ioc value feed log type is global asset 1 2025-02-23 2025-03-05 64 40.79.150.120 CATCH ALL false untagged:192.168.12.16 2 2025-02-27 2025-03-05 29 40.79.150.120 CATCH ALL false untagged:192.168.12.129 You can also query the datalake.events table for multi-dimensional IOC matching by constructing a concatenated string, for example: DECLARE IOC MULTIPLE ATTRIBUTES ARRAY < STRING > ; SET IOC MULTIPLE ATTRIBUTES = [ '1.2.3.4,80' , '1.2.3.4,443' ]; SELECT MIN ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS first seen , MAX ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS last seen , target ip , target . port FROM datalake . events , UNNEST ( target . ip ) target ip WHERE DATE ( hour time bucket ) BETWEEN DATE SUB ( CURRENT DATE , INTERVAL 60 DAY ) AND DATE SUB ( CURRENT DATE , INTERVAL 1 DAY ) AND target ip != "" AND target . port > 0 AND CONCAT ( target ip , "," , CAST ( target . port AS STRING )) IN UNNEST ( IOC MULTIPLE ATTRIBUTES ) GROUP BY 3 , 4 Note: The Google SecOps Data Lake typically retains data for six months.
- Example YARA-L rule using GLOBAL CONTEXT : rule google safebrowsing process launch { meta : author = "noam@" description = "Detects Process Launch events against Critical or High severity Google's SafeBrowsing database." events : $e . metadata . event type = "PROCESS LAUNCH" $e . target . process . file . sha256 = $hash $g . graph . metadata . entity type = "FILE" $g . graph . entity . file . sha256 = $hash $g . graph . metadata . source type = "GLOBAL CONTEXT" $g . graph . metadata . threat . severity = "CRITICAL" or $g . graph . metadata . threat . severity = "HIGH" match : $hash over 10 m condition : $e and $g } IOC matching with data tables and YARA-L rules You can use data tables within YARA-L rules to match against lists of IOCs.
- The following example uses a data table called connections watchlist with columns ip and port : rule ioc ip4 and port matches { meta : description = "Matches on IP address and port using a data table" events : $ioc . metadata . event type = "NETWORK CONNECTION" $ioc . target . ip = $dip $ioc . target . port = $dport // row-based join: both ip and port must match same row in data table "connections watchlist" %connections watchlist . ip = $dip %connections watchlist . port = $dport match : $dip , $dport over 5 m condition : $ioc } BigQuery for historical IOC analysis The datalake.ioc matches table in Google SecOps's data lake (BigQuery) provides a powerful way to query historical IOC match data.
- Example: YARA-L rule matching IPs from a data table column rule ioc ip4 matches { meta : description = "IOC IPv4 matching using data tables" events : $ ioc . metadata . event type = "NETWORK CONNECTION" $ ioc . target . ip = $ dip // checks if the IP address is in the ip address column of data table "string demo list" $ dip in % string demo list . ip address condition : $ ioc } For multi-dimensional matching (for example, IP address + port), you can use row-based comparison against a data table with multiple columns.

