---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.531Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Joins in YARA-L Search queries"
feature_slug: "joins-in-yara-l-search-queries"
latest_feature_date: "2025-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "joins"
  - "yara"
  - "search"
  - "queries"
  - "adds"
  - "join"
  - "statistical"
  - "include"
---

# Joins in YARA-L Search queries

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Adds join support to statistical YARA-L Search queries that include a match section.

## Extended Definition

Adds join support to statistical YARA-L Search queries that include a match section.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)

## Supporting Pages

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Param data types ARRAY STRINGS , STRING Return type STRING Code samples Here are some examples of how to use the function: Example 1 This example joins an array with non-null elements and a delimiter. arrays.join string(["foo", "bar"], ",") = "foo,bar" Example 2 This example joins an array with a null element and a delimiter. arrays.join string(["foo", NULL, "bar"], ",") = "foo,bar" Example 3 This example joins an array with non-null elements and no delimiter. arrays.join string(["foo", "bar"]) = "foobar" arrays.length Supported in: Rules Search arrays.length(repeatedField) Description Returns the number of repeated field elements.
- Functions Supported in: Google secops SIEM This section describes the YARA-L 2.0 functions that you can use in Rules, Search, and Dashboard queries.
- Param data types INT FLOAT , INT FLOAT , INT FLOAT Return type BOOL Code samples Example 1 This example includes timestamp-like values in seconds. math.is increasing(1716769112, 1716769113, 1716769114) = true Example 2 This example includes one negative double, one zero INT64, and one positive INT64 values. math.is increasing(-1.200000, 0, 3) = true Example 3 This example includes one negative double, one zero INT64, and one negative INT64 values. math.is increasing(0-1.200000, 0, 0-3) = false Example 4 This example includes two negative doubles and one zero INT64 value. math.is increasing(0-1.200000, 0-1.50000, 0) = false Example 5 This example includes one negative double and two values that are the same. math.is increasing(0-1.200000, 0, 0) = false math.log Supported in: Rules Search math.log(numericExpression) Description Returns the natural log value of an integer or float expression.
- Param data types STRING , STRING Return type BOOL Code samples Example 1 IPv4 example: net.ip in range cidr($e.principal.ip, "192.0.2.0/24") Example 2 IPv6 example: net.ip in range cidr($e.network.dhcp.yiaddr, "2001:db8::/32") For an example rule using the net.ip in range cidr() statement, see the example rule in Single Event within Range of IP Addresses .) re.regex Supported in: Rules Search You can define regular expression matching in YARA-L 2.0 using either of the following syntax: Using YARA-L syntax — Related to events.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Feature Programmatic access limit Web interface limit QPH limit 2,000 1,000 Simple query concurrency 40 40 Complex query concurrency 10 10 Concurrency limits Concurrency limits define the number of simultaneous search operations allowed per tenant: Simple queries: Queries that span less than one day, use a single data source, and don't include stats.
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- The following are examples: metadata.log type = "PCAP DNS" network.dns.answers.name = "dns-A901F3j.hat.example.com" If the result includes the text Possible value match , the name-value pair contains the UDM field name and a regular expression containing the search term.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Using entity graphs and YARA-L rules An entity graph lets you ingest various types of contextual entities—including those representing IOCs—and join them with event data using YARA-L detection rules.
- Row-based comparison joins UDM event fields to data table columns using equality or comparison operators .
- Example YARA-L rule using GLOBAL CONTEXT : rule google safebrowsing process launch { meta : author = "noam@" description = "Detects Process Launch events against Critical or High severity Google's SafeBrowsing database." events : $e . metadata . event type = "PROCESS LAUNCH" $e . target . process . file . sha256 = $hash $g . graph . metadata . entity type = "FILE" $g . graph . entity . file . sha256 = $hash $g . graph . metadata . source type = "GLOBAL CONTEXT" $g . graph . metadata . threat . severity = "CRITICAL" or $g . graph . metadata . threat . severity = "HIGH" match : $hash over 10 m condition : $e and $g } IOC matching with data tables and YARA-L rules You can use data tables within YARA-L rules to match against lists of IOCs.
- The following example uses a data table called connections watchlist with columns ip and port : rule ioc ip4 and port matches { meta : description = "Matches on IP address and port using a data table" events : $ioc . metadata . event type = "NETWORK CONNECTION" $ioc . target . ip = $dip $ioc . target . port = $dport // row-based join: both ip and port must match same row in data table "connections watchlist" %connections watchlist . ip = $dip %connections watchlist . port = $dport match : $dip , $dport over 5 m condition : $ioc } BigQuery for historical IOC analysis The datalake.ioc matches table in Google SecOps's data lake (BigQuery) provides a powerful way to query historical IOC match data.

