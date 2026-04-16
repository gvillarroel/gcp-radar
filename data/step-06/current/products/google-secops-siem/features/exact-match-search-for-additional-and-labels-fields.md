---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.673Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Exact-match search for additional and labels fields"
feature_slug: "exact-match-search-for-additional-and-labels-fields"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "exact"
  - "match"
  - "search"
  - "additional"
  - "labels"
  - "fields"
  - "udm"
  - "supports"
---

# Exact-match search for additional and labels fields

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

UDM Search supports exact-match queries on the additional and labels fields using field[key] syntax.

## Extended Definition

UDM Search supports exact-match queries on the additional and labels fields using field[key] syntax.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- For example: A text value, all caps enclosed in double quotes: metadata.event type = "NETWORK CONNECTION" Additional values: Use the field[key\] = value format to search within additional and labels fields.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table details which specific UDM fields are used for automatic IOC matching based on your package: Enterprise package Enterprise Plus package about.file network.dns.answers network.dns.questions network.dns.questions principal.administrative domain principal.asset principal.ip principal.process.file principal.process.file principal.process.parent process.file principal.process.parent process.file security result.about.file security result.about.file src.file src.file src.ip target.asset.ip target.domain.name target.file target.file target.hostname target.hostname target.ip target.ip target.process.file target.process.file target.process.parent process.file Understanding which UDM fields are used helps ensure your data parsers correctly map raw log fields to the appropriate UDM fields for effective IOC matching.
- To specify the date and time range based on events, click the Event Time tab, select the date on the calendar, and then select one of the following options: Exact Time : click the Event Time field and select the specific time the events occurred. +/- 1 Minute +/- 3 Minutes +/- 5 Minutes +/- 10 Minutes +/- 15 Minutes +/- 1 Hour +/- 2 Hours +/- 6 Hours +/- 12 Hours +/- 1 Day +/- 3 Days +/- 1 Week Sort alerts and IOC matches You can sort the alerts and IOC matches that are displayed in ascending or descending order.
- UDM Search and Search API UDM Search : Supports using data tables (previously called reference lists ) for single-dimension searches (for example, a list of hashes).
- If a match is found (for example, a suspicious domain is seen in your enterprise), Google SecOps labels the event as an IOC and displays it on the IOC Matches tab.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- CuratedRuleDetection fields type string Type of detection (type is always "GCTI FINDING"). detection.ruleName string Name of the Google SecOps rule generating the detection. detection.ruleId string Identifier for the Google SecOps rule generating the detection. detection.alertState string Indicates whether the Google SecOps rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the Google SecOps rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.detectionFields list List of fields matching the Google SecOps rule's requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in Google SecOps rule metadata. detection.ruleLabels.key string Key for a field specified in the Google SecOps rule metadata. detection.ruleLabels.value string Value for a field specified in the Google SecOps rule metadata. detection.summary string Summary for the generated detection. detection.ruleSet string Identifier of the Google SecOps rule set that generated this detection. detection.ruleSetDisplayName string Display name of the Google SecOps rule set that generated this detection. detection.description string Description of the Google SecOps rule that generated the detection. detection.severity string Severity of the detection ("INFORMATIONAL" or "LOW" or "HIGH"). createdTime string Time the detection was created. detectionTime string String representing the time period the detection was found in. id string Identifier for the detection. timeWindow.startTime string String representing the start of the time window in which the detection was found, in RFC 3339 format. timeWindow.endTime string String representing the end of the time window in which the detection was found, in RFC 3339 format. collectionElements list A list of references to sample UDM events causing this detection, grouped by variable. collectionElements.label string The variable a given set of UDM events belongs to. collectionElements.references list A list of references to sample UDM events, grouped by the given label. collectionElements.references.event UDM A UDM event. lastUpdatedTime string Time the detection was last updated. tags list A list of MITRE tactic and technique IDs covered by the Google SecOps rule.
- Only populated for RULE DETECTION type detections. detection.alertState string Indicates whether the rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.detectionFields list List of fields matching the rules requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in rule metadata. detection.ruleLabels.key string Key for a field specified in the rule metadata. detection.ruleLabels.value string Value for a field specified in the rule metadata. detection.summary string Summary for the generated detection.
- This description is copied from the rule metadata's description key, if it is set. detection.detectionFields list List of fields matching the rules requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in rule metadata. detection.ruleLabels.key string Key for a field specified in the rule metadata. detection.ruleLabels.value string Value for a field specified in the rule metadata. createdTime string Time the detection was created. detectionTime string String representing the time period the detection was found in. id string Identifier for the detection.
- Sample Response { "curatedRuleDetections": [ { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de 227a290c-17e9-6314-7f16-35f7923b554f&selectedTimestamp=2022-12-05T11:07:12.585Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T12:13:23.154544Z", "lastUpdatedTime": "2022-12-05T12:13:23.154544Z", "id": "de 227a290c-17e9-6314-7f16-35f7923b554f", "timeWindow": { "startTime": "2022-12-05T11:07:12.585Z", "endTime": "2022-12-05T11:07:12.585Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T11:07:12.585Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T11:06:27.737408Z", "id": "AAAAA" }, "principal": { "hostname": "admin-1", "process": { "pid": "12345", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "12345", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-1\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T11:07:12.585Z", "tags": [ "TA0004", "T1548" ] }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de c34ee707-ad5e-4e5e-4955-a3a8e13053ae&selectedTimestamp=2022-12-05T10:04:28.097Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T11:12:24.406199Z", "lastUpdatedTime": "2022-12-05T11:12:24.406199Z", "id": "de c34ee707-ad5e-4e5e-4955-a3a8e13053ae", "timeWindow": { "startTime": "2022-12-05T10:04:28.097Z", "endTime": "2022-12-05T10:04:28.097Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T10:04:28.097Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T10:04:01Z", "id": "BBBBB" }, "principal": { "hostname": "admin-2", "process": { "pid": "67890", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "67890", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-2\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T10:04:28.097Z", "tags": [ "TA0004", "T1548" ] } ], "nextPageToken": "CgwIrdncnQYQ6OqRkwISCwiosvKXBhDQ-74JGidkZV8wNDZjZmY0YS1jM2ZkLTM5YWEtYmUyYS0wZTU2Zjk4OWE1YTE=" } ListDetections Return the detections for the specified version of a rule, the latest version of a rule, all versions of a rule, or all versions of all rules.

