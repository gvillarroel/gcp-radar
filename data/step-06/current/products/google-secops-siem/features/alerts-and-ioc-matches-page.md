---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.677Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Alerts and IOC Matches page"
feature_slug: "alerts-and-ioc-matches-page"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "alerts"
  - "ioc"
  - "matches"
  - "page"
  - "shows"
  - "current"
  - "indicators"
  - "compromise"
---

# Alerts and IOC Matches page

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Alerts and IOC Matches page shows current alerts and indicators of compromise and provides tools to filter and inspect them.

## Extended Definition

The Alerts and IOC Matches page shows current alerts and indicators of compromise and provides tools to filter and inspect them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)

## Supporting Pages

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View alerts and IOC matches Supported in: Google secops SIEM The Alerts & IOCs page displays all the alerts and Indicators of Compromise (IOCs) that are impacting your enterprise.
- The page contains the Alerts tab and the IOC Matches tab: Use the Alerts tab to view the current alerts in your enterprise.
- Configure common view options on the Alerts & IOCs page This section describes the common view options that you can configure on the Alerts and IOC Matches tabs of the Alerts & IOCs page.
- Example SQL to query for specific IP-address IOC matches: -- Add your IP IOC Matches here DECLARE IP IOCS ARRAY < STRING > ; SET IP IOCS = [ '40.79.150.120' ]; ------ SELECT MIN ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS first observed , MAX ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS last observed , COUNT ( 4 ) AS hits , ioc value , feed log type , is global , CONCAT ( COALESCE ( asset . namespace , "untagged" ), ":" , COALESCE ( asset . hostname , asset . asset ip address , asset . mac , "-" )) AS asset FROM datalake . ioc matches WHERE ioc value IN UNNEST ( IP IOCS ) AND ioc type = "IOC TYPE IP" GROUP BY 4 , 5 , 6 , 7 Here are the truncated results: Row first observed last observed hits ioc value feed log type is global asset 1 2025-02-23 2025-03-05 64 40.79.150.120 CATCH ALL false untagged:192.168.12.16 2 2025-02-27 2025-03-05 29 40.79.150.120 CATCH ALL false untagged:192.168.12.129 You can also query the datalake.events table for multi-dimensional IOC matching by constructing a concatenated string, for example: DECLARE IOC MULTIPLE ATTRIBUTES ARRAY < STRING > ; SET IOC MULTIPLE ATTRIBUTES = [ '1.2.3.4,80' , '1.2.3.4,443' ]; SELECT MIN ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS first seen , MAX ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS last seen , target ip , target . port FROM datalake . events , UNNEST ( target . ip ) target ip WHERE DATE ( hour time bucket ) BETWEEN DATE SUB ( CURRENT DATE , INTERVAL 60 DAY ) AND DATE SUB ( CURRENT DATE , INTERVAL 1 DAY ) AND target ip != "" AND target . port > 0 AND CONCAT ( target ip , "," , CAST ( target . port AS STRING )) IN UNNEST ( IOC MULTIPLE ATTRIBUTES ) GROUP BY 3 , 4 Note: The Google SecOps Data Lake typically retains data for six months.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Timelines chart The Timelines chart provides a graphical representation of the number of events and alerts occurring each day that are being surfaced by the current search.
- View alerts in search To view alerts, click the Alerts tab, located next to the Events tab, at the top right of the Search page.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Param data types INT FLOAT , BOOL Return type FLOAT Code samples Example 1 This example returns the median when the input values aren't zero. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 2 if the file sizes in the match window are [1, 2, 3] condition: $e } Example 2 This example returns the median when the input includes some zero values that shouldn't be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 3 This example returns the median when the input includes some zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size, true) // returns 2 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 4 This example returns the median when the input includes all zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 0 if the file sizes in the match window are [0,0] condition: $e } Example 5 This example shows that, when there are multiple medians, only one median is returned. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [1, 2, 3, 4] condition: $e } window.mode Supported in: Rules window.mode(values) Description Return the mode of the input values.
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example shows the integer average. // This rule sets the outcome $size mode to the average // file size in the 5 minute match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 2.5 if the event file size values in the match window are 1, 2, 3 and 4 Example 2 This example shows the float average. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 1.75 if the event file size values in the match window are 1.1 and 2.4 Example 3 Negative input average events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0.6 if the event file size values in the match window are -1.1, 1.1, 0.0 and 2.4 Example 4 0 returns 0 events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0 if the event file size values in the match window is 0 Example 5 Ignoring 0 values events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size, true) // yields 394 if the event file size values in the match window are 0, 0, 0 and 394 window.first Supported in: Rules window.first(values to sort by, values to return) Description This aggregation function returns a string value derived from an event with the lowest correlated int value in the match window.
- Notice the use of nested functions. "email@google.org" = re.replace($e.network.email.from, "com", "org") Example 2 This example uses backslash-escaped digits in the replacementText argument to reference matches to the replaceRegex pattern. "test1.com.google" = re.replace( $e.principal.hostname, // holds "test1.test2.google.com" "test2\.([a-z] )\.([a-z] )", "\\2.\\1" // \\1 holds "google", \\2 holds "com" ) Example 3 Note the following cases when dealing with empty strings and re.replace() : Using empty string as replaceRegex : // In the function call below, if $e.principal.hostname contains "name", // the result is: 1n1a1m1e1, because an empty string is found next to // every character in stringText. re.replace($e.principal.hostname, "", "1") To replace an empty string, you can use "^$" as replaceRegex : // In the function call below, if $e.principal.hostname contains the empty // string, "", the result is: "none". re.replace($e.principal.hostname, "^$", "none") sample rate Supported in: Rules optimization.sample rate(byteOrString, rateNumerator, rateDenominator) Description This function determines whether to include an event based on a deterministic sampling strategy.
- Param data types base: INT FLOAT exponent: INT FLOAT Return type FLOAT Code samples Example 1 This example shows an integer case. math.pow(2, 2) // 4.00 Example 2 This example shows a fraction base case. math.pow(2.200000, 3) // 10.648 Example 3 This example shows a fraction base and power case. math.pow(2.200000, 1.200000) // 2.575771 Example 4 This example shows a negative power case. math.pow(3, 0-3) // 0.037037 Example 5 This example shows a fraction power case. math.pow(3, 0-1.200000) // 0.267581 Example 6 This example shows a negative base case. math.pow(0-3, 0-3) // -0.037037 Example 7 This example shows a zero base case. math.pow(0, 3) // 0 Example 8 This example shows a zero power case. math.pow(9223372036854775807, 0) // 1 Example 9 This example shows a large base case. math.pow(9223372036854775807, 1.200000) // 57262152889751593549824 math.random Supported in: Rules Search math.random() Description Generates a pseudo-random value of type DOUBLE in the range of [0, 1) , inclusive of 0 and exclusive of 1.

