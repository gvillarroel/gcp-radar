---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.365Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Condition clause in UDM searches and dashboards"
feature_slug: "condition-clause-in-udm-searches-and-dashboards"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "condition"
  - "clause"
  - "in"
  - "udm"
  - "searches"
  - "and"
  - "dashboards"
  - "adds"
---

# Condition clause in UDM searches and dashboards

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Adds a condition clause for filtering outcome aggregates in UDM searches and dashboards.

## Extended Definition

Adds a condition clause for filtering outcome aggregates in UDM searches and dashboards.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- August 05, 2025 Feature New YARA-L features The following capabilities have been added to YARA-L 2.0 to enhance search precision, data analysis, and investigative workflows: Conditions in UDM search and dashboards You can now filter aggregates defined in the outcome section using the new condition clause.
- Deduplicate events in searches and dashboards The new dedup section lets you remove duplicate events after the match clause in both standard UDM searches and YARA-L 2.0 queries.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- You can now do the following in UDM Search: Use Chronicle-provided pre-made search templates in Quick Searches and Search Manager Create, edit, and share searches in Search Manager (an enhancement to Saved Searches) Use reference lists in UDM searches January 06, 2023 Change Chronicle Curated Detections has been enhanced with the following additional detection content for Windows-based threats .

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- August 05, 2025 Feature New YARA-L features The following capabilities have been added to YARA-L 2.0 to enhance search precision, data analysis, and investigative workflows: Conditions in UDM search and dashboards You can now filter aggregates defined in the outcome section using the new condition clause.
- Deduplicate events in searches and dashboards The new dedup section lets you remove duplicate events after the match clause in both standard UDM searches and YARA-L 2.0 queries.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- UDM Search query conditions can include both UDM fields (for example, principal.hostname="alice" ) and grouped fields (for example, hostname="alice" ).

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- UDM Search and Search API UDM Search : Supports using data tables (previously called reference lists ) for single-dimension searches (for example, a list of hashes).
- The following table details which specific UDM fields are used for automatic IOC matching based on your package: Enterprise package Enterprise Plus package about.file network.dns.answers network.dns.questions network.dns.questions principal.administrative domain principal.asset principal.ip principal.process.file principal.process.file principal.process.parent process.file principal.process.parent process.file security result.about.file security result.about.file src.file src.file src.ip target.asset.ip target.domain.name target.file target.file target.hostname target.hostname target.ip target.ip target.process.file target.process.file target.process.parent process.file Understanding which UDM fields are used helps ensure your data parsers correctly map raw log fields to the appropriate UDM fields for effective IOC matching.
- Example YARA-L rule using GLOBAL CONTEXT : rule google safebrowsing process launch { meta : author = "noam@" description = "Detects Process Launch events against Critical or High severity Google's SafeBrowsing database." events : $e . metadata . event type = "PROCESS LAUNCH" $e . target . process . file . sha256 = $hash $g . graph . metadata . entity type = "FILE" $g . graph . entity . file . sha256 = $hash $g . graph . metadata . source type = "GLOBAL CONTEXT" $g . graph . metadata . threat . severity = "CRITICAL" or $g . graph . metadata . threat . severity = "HIGH" match : $hash over 10 m condition : $e and $g } IOC matching with data tables and YARA-L rules You can use data tables within YARA-L rules to match against lists of IOCs.
- The following example uses a data table called connections watchlist with columns ip and port : rule ioc ip4 and port matches { meta : description = "Matches on IP address and port using a data table" events : $ioc . metadata . event type = "NETWORK CONNECTION" $ioc . target . ip = $dip $ioc . target . port = $dport // row-based join: both ip and port must match same row in data table "connections watchlist" %connections watchlist . ip = $dip %connections watchlist . port = $dport match : $dip , $dport over 5 m condition : $ioc } BigQuery for historical IOC analysis The datalake.ioc matches table in Google SecOps's data lake (BigQuery) provides a powerful way to query historical IOC match data.

