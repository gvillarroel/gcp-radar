---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.542Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Exact-match search for additional and labels fields"
feature_slug: "exact-match-search-for-additional-and-labels-fields"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "exact"
  - "match"
  - "search"
  - "for"
  - "additional"
  - "and"
  - "labels"
  - "fields"
---

# Exact-match search for additional and labels fields

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

UDM Search supports exact-match queries on the additional and labels fields using field[key] syntax.

## Extended Definition

UDM Search supports exact-match queries on the additional and labels fields using field[key] syntax.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- For example: A text value, all caps enclosed in double quotes: metadata.event type = "NETWORK CONNECTION" Additional values: Use the field[key\] = value format to search within additional and labels fields.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- You can now do the following: Use enhanced filtering to include Bottom 30 values in addition to Top 30 values for each UDM Field in search results Use 'field[key] = value' exact match to search the 'additional' and 'labels' fields Pin fields (using the push pin icon) in Quick Filter to save them as a favorite.
- April 15, 2024 Deprecated The following labels fields for UDM nouns are deprecated and these fields will not appear in the search results after November 29, 2024: about.labels , intermediary.labels , observer.labels , principal.labels , src.labels , security result.about.labels , and target.labels .
- For new parsers, the key and value settings in additional.fields UDM fields are used instead of the deprecated labels UDM fields.
- April 23, 2021 Change Supported Data Sets Chronicle can now ingest and parse data from the following additional systems and services: Aruba Airwave Blue Coat Proxy Brocade ServerIron ADX CIS Albert Alerts Cisco Application Control Engine Cisco Email Security Cisco NX-OS Citrix StoreFront Cofense Triage Comodo Fidelis Network FireEye NX Honeyd Kemp Load Balancer Kyriba Treasury Management Microsoft Intune MySQL Palo Alto Networks Cortex XDR Red Canary EDR ServiceNow CMDB Symantec VIP Enterprise Gateway Tanium Discover Tripwire File Integrity Monitoring January 25, 2021 Feature Chronicle Detection Engine Enables customers to automate the process of searching across their data for security issues.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table details which specific UDM fields are used for automatic IOC matching based on your package: Enterprise package Enterprise Plus package about.file network.dns.answers network.dns.questions network.dns.questions principal.administrative domain principal.asset principal.ip principal.process.file principal.process.file principal.process.parent process.file principal.process.parent process.file security result.about.file security result.about.file src.file src.file src.ip target.asset.ip target.domain.name target.file target.file target.hostname target.hostname target.ip target.ip target.process.file target.process.file target.process.parent process.file Understanding which UDM fields are used helps ensure your data parsers correctly map raw log fields to the appropriate UDM fields for effective IOC matching.
- If a match is found (for example, a suspicious domain is seen in your enterprise), Google SecOps labels the event as an IOC and displays it on the IOC Matches tab.
- UDM fields used for matching The automated IOC matching engine primarily focuses on matching against domain names and IP addresses found in UDM events.
- Search API : The older Search API can be effective for IOC matching on hashes, IP addresses, and domain names, returning matching assets.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- April 15, 2024 Deprecated The following labels fields for UDM nouns are deprecated and these fields will not appear in the search results after November 29, 2024: about.labels , intermediary.labels , observer.labels , principal.labels , src.labels , security result.about.labels , and target.labels .
- For new parsers, the key and value settings in additional.fields UDM fields are used instead of the deprecated labels UDM fields.
- January 13, 2026 Announcement Auto extraction general availability As part of the GA release for the auto extraction feature, customers now need to opt-in and choose which fields to extract. (Full auto extraction is no longer supported.) The opt-in functionality does not impact the extracted fields that are already in use (in saved searches and rules), because those fields have been automatically opted-in as part of the GA migration.
- January 16, 2024 Feature UDM Search for entity investigation UDM Search now includes a feature that lets you investigate entities (for example, an IP address, user, or asset) in addition to the events and alerts that match the search query terms.

