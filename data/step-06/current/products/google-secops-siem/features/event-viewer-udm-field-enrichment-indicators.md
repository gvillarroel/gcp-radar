---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.635Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Event Viewer UDM field enrichment indicators"
feature_slug: "event-viewer-udm-field-enrichment-indicators"
latest_feature_date: "2023-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "event"
  - "viewer"
  - "udm"
  - "field"
  - "enrichment"
  - "indicators"
  - "now"
  - "labels"
---

# Event Viewer UDM field enrichment indicators

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Event Viewer now labels each UDM field with an icon that shows whether the field stores enriched or unenriched data.

## Extended Definition

Event Viewer now labels each UDM field with an icon that shows whether the field stores enriched or unenriched data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- For example: A text value, all caps enclosed in double quotes: metadata.event type = "NETWORK CONNECTION" Additional values: Use the field[key\] = value format to search within additional and labels fields.
- The Event Viewer includes these tabs: Event Fields Raw Log Alerts Entities Event Fields tab Note: This feature is covered by Pre-GA Offerings Terms of the Google Security Operations Service Specific Terms.

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- For example, when a new event arrives with only an IP address , the enrichment process uses the aliased data to find the associated hostname (for example, alex-macbook ) and populates the $udm.event.principal.hostname field.
- To check if a rule is evaluating an enriched field, review the Event Viewer .
- Unpredicted delays : These are rule-specific or event-specific delays caused by many factors, including delays in event data arriving at Google SecOps, transient slowness in processing pipelines within Google SecOps services, re-enrichment , and other data processing delays .
- Enrichment system updates: If the enrichment system updates entity or process metadata, IP geolocation, or VirusTotal indicators, the rules engine re-evaluates these blocks 24 to 48 hours later to capture those updates.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- To specify the date and time range based on events, click the Event Time tab, select the date on the calendar, and then select one of the following options: Exact Time : click the Event Time field and select the specific time the events occurred. +/- 1 Minute +/- 3 Minutes +/- 5 Minutes +/- 10 Minutes +/- 15 Minutes +/- 1 Hour +/- 2 Hours +/- 6 Hours +/- 12 Hours +/- 1 Day +/- 3 Days +/- 1 Week Sort alerts and IOC matches You can sort the alerts and IOC matches that are displayed in ascending or descending order.
- If a match is found (for example, a suspicious domain is seen in your enterprise), Google SecOps labels the event as an IOC and displays it on the IOC Matches tab.
- UDM fields used for matching The automated IOC matching engine primarily focuses on matching against domain names and IP addresses found in UDM events.
- The IOC matching engine continuously compares these normalized UDM events against threat indicators from all configured feeds.

