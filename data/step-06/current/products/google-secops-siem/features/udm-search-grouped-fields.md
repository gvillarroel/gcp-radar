---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.663Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "UDM Search grouped fields"
feature_slug: "udm-search-grouped-fields"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "udm"
  - "search"
  - "grouped"
  - "fields"
  - "let"
  - "users"
  - "query"
  - "related"
---

# UDM Search grouped fields

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Grouped fields let users query related UDM fields together without typing each field individually.

## Extended Definition

Grouped fields let users query related UDM fields together without typing each field individually.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- Search grouped fields Grouped fields are aliases for groups of related UDM fields.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- The following example shows how to enter a query to match the common UDM fields that might contain the specified IP address: ip = "1.2.3.4" You can match a grouped field using a regular expression and using the nocase operator.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Note: For search, you can use grouped fields in the events section, but not in the match and outcome sections.
- In UDM search, grouped fields are used to search across multiple fields of a similar type.
- Parameter type: Event type Return type: Grouped event fields Code samples Example: Aggregate and count IP addresses Group all IP addresses together and provide a descending count of the most prevalent IP addresses in the time range scanned. $ip = group(principal.ip, about.ip, target.ip) $ip != "" match: $ip outcome: $count = count distinct(metadata.id) order: $count desc Example: Count distinct events for each IP address In the following example, the group() function gathers all the IP addresses found in the principal.ip , target.ip , and src.ip fields across all events that triggered the detection.
- Param data types STRING , STRING Return type BOOL Code samples Example 1 IPv4 example: net.ip in range cidr($e.principal.ip, "192.0.2.0/24") Example 2 IPv6 example: net.ip in range cidr($e.network.dhcp.yiaddr, "2001:db8::/32") For an example rule using the net.ip in range cidr() statement, see the example rule in Single Event within Range of IP Addresses .) re.regex Supported in: Rules Search You can define regular expression matching in YARA-L 2.0 using either of the following syntax: Using YARA-L syntax — Related to events.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Functional limitations Custom Label query don't support the following advanced features: Reference lists Enrichment fields Data tables Query execution time : Custom label query is subject to a maximum execution time limit of 5 seconds.
- You can refine the query and click Run Search until the results display the data that you want to label.
- You can refine the query and click Run Search until the results display the data that you want to label.
- You can refine the query and click Run Search until the results display the data that you want to label.

