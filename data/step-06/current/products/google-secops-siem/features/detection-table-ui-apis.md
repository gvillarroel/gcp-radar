---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.559Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Detection table UI APIs"
feature_slug: "detection-table-ui-apis"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "detection"
  - "table"
  - "ui"
  - "apis"
  - "page"
  - "may"
  - "require"
  - "updated"
---

# Detection table UI APIs

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

New APIs for the detection UI page may require updated permissions for custom roles.

## Extended Definition

New APIs for the detection UI page may require updated permissions for custom roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Sample Response { "curatedRuleDetections": [ { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de 227a290c-17e9-6314-7f16-35f7923b554f&selectedTimestamp=2022-12-05T11:07:12.585Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T12:13:23.154544Z", "lastUpdatedTime": "2022-12-05T12:13:23.154544Z", "id": "de 227a290c-17e9-6314-7f16-35f7923b554f", "timeWindow": { "startTime": "2022-12-05T11:07:12.585Z", "endTime": "2022-12-05T11:07:12.585Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T11:07:12.585Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T11:06:27.737408Z", "id": "AAAAA" }, "principal": { "hostname": "admin-1", "process": { "pid": "12345", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "12345", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-1\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T11:07:12.585Z", "tags": [ "TA0004", "T1548" ] }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de c34ee707-ad5e-4e5e-4955-a3a8e13053ae&selectedTimestamp=2022-12-05T10:04:28.097Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T11:12:24.406199Z", "lastUpdatedTime": "2022-12-05T11:12:24.406199Z", "id": "de c34ee707-ad5e-4e5e-4955-a3a8e13053ae", "timeWindow": { "startTime": "2022-12-05T10:04:28.097Z", "endTime": "2022-12-05T10:04:28.097Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T10:04:28.097Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T10:04:01Z", "id": "BBBBB" }, "principal": { "hostname": "admin-2", "process": { "pid": "67890", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "67890", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-2\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T10:04:28.097Z", "tags": [ "TA0004", "T1548" ] } ], "nextPageToken": "CgwIrdncnQYQ6OqRkwISCwiosvKXBhDQ-74JGidkZV8wNDZjZmY0YS1jM2ZkLTM5YWEtYmUyYS0wZTU2Zjk4OWE1YTE=" } ListDetections Return the detections for the specified version of a rule, the latest version of a rule, all versions of a rule, or all versions of all rules.
- CuratedRuleDetection fields type string Type of detection (type is always "GCTI FINDING"). detection.ruleName string Name of the Google SecOps rule generating the detection. detection.ruleId string Identifier for the Google SecOps rule generating the detection. detection.alertState string Indicates whether the Google SecOps rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the Google SecOps rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.detectionFields list List of fields matching the Google SecOps rule's requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in Google SecOps rule metadata. detection.ruleLabels.key string Key for a field specified in the Google SecOps rule metadata. detection.ruleLabels.value string Value for a field specified in the Google SecOps rule metadata. detection.summary string Summary for the generated detection. detection.ruleSet string Identifier of the Google SecOps rule set that generated this detection. detection.ruleSetDisplayName string Display name of the Google SecOps rule set that generated this detection. detection.description string Description of the Google SecOps rule that generated the detection. detection.severity string Severity of the detection ("INFORMATIONAL" or "LOW" or "HIGH"). createdTime string Time the detection was created. detectionTime string String representing the time period the detection was found in. id string Identifier for the detection. timeWindow.startTime string String representing the start of the time window in which the detection was found, in RFC 3339 format. timeWindow.endTime string String representing the end of the time window in which the detection was found, in RFC 3339 format. collectionElements list A list of references to sample UDM events causing this detection, grouped by variable. collectionElements.label string The variable a given set of UDM events belongs to. collectionElements.references list A list of references to sample UDM events, grouped by the given label. collectionElements.references.event UDM A UDM event. lastUpdatedTime string Time the detection was last updated. tags list A list of MITRE tactic and technique IDs covered by the Google SecOps rule.
- Use the following format to specify the rule: {ruleId}@v {int64} {int64} Sample request https://backstory.googleapis.com/v2/detect/rules/ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d/detections/de eaccfe15-5fe6-0cf3-b54c-2d6435f53ee4 Response Response fields Field Name Type type string Type of detection (type is always RULE DETECTION). detection.ruleName string Name of the rule generating the detection, as parsed from ruleText. detection.ruleId string Identifier for the rule generating the detection. detection.ruleVersion string Identifier for the rule version generating the detection. detection.alertState string Indicates whether the rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.description string Description of the rule that generated the detection.
- Request Detections for the latest version of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/detections Detections for a specific version of a rule with a given version identifier: GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/detections Detections for the all versions of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}@-/detections Detections for all versions of all rules: GET https://backstory.googleapis.com/v2/detect/rules/-/detections URL parameters Parameter Name Type Required Description alert state enum Optional Filter detections on if they are "ALERTING" or "NOT ALERTING" detection start time (deprecated) string Optional Time to begin returning detections, filtering on a detection's "detectionTime".

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Use the Rows per page list, on the Events table, to select the number of rows to display per page (25 to 1,000 events).
- Use the Rows per page list in the Events table to select the number of rows to display per page.
- The event results are displayed in the Events timeline table on the Search page.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.
- Supported devices and required log types for Okta These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Tune alerts returned by rule sets You can reduce the number of detections a rule or rule set generates using rule exclusions .
- Do the following to verify that alerts are created in Google Security Operations: In Google Security Operations, click Detections > Rules & Detections to open the Curated Detections page .

