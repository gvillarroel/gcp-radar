---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.656Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle forwarder minimum batch size"
feature_slug: "chronicle-forwarder-minimum-batch-size"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
keywords:
  - "chronicle"
  - "forwarder"
  - "minimum"
  - "batch"
  - "size"
  - "increased"
  - "200"
  - "kb"
---

# Chronicle forwarder minimum batch size

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Chronicle forwarder minimum batch size is increased to 200 KB.

## Extended Definition

The Chronicle forwarder minimum batch size is increased to 200 KB.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)

## Supporting Pages

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- For pagination, use the legacy query parameters pageStartTime and detectionBatchSize in the Backstory API (v2).
- Note: The StreamDetectionAlerts method doesn't support pagination to fetch detections in custom batch sizes.
- Sample Response { "curatedRuleDetections": [ { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de 227a290c-17e9-6314-7f16-35f7923b554f&selectedTimestamp=2022-12-05T11:07:12.585Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T12:13:23.154544Z", "lastUpdatedTime": "2022-12-05T12:13:23.154544Z", "id": "de 227a290c-17e9-6314-7f16-35f7923b554f", "timeWindow": { "startTime": "2022-12-05T11:07:12.585Z", "endTime": "2022-12-05T11:07:12.585Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T11:07:12.585Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T11:06:27.737408Z", "id": "AAAAA" }, "principal": { "hostname": "admin-1", "process": { "pid": "12345", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "12345", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-1\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T11:07:12.585Z", "tags": [ "TA0004", "T1548" ] }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de c34ee707-ad5e-4e5e-4955-a3a8e13053ae&selectedTimestamp=2022-12-05T10:04:28.097Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T11:12:24.406199Z", "lastUpdatedTime": "2022-12-05T11:12:24.406199Z", "id": "de c34ee707-ad5e-4e5e-4955-a3a8e13053ae", "timeWindow": { "startTime": "2022-12-05T10:04:28.097Z", "endTime": "2022-12-05T10:04:28.097Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T10:04:28.097Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T10:04:01Z", "id": "BBBBB" }, "principal": { "hostname": "admin-2", "process": { "pid": "67890", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "67890", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-2\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T10:04:28.097Z", "tags": [ "TA0004", "T1548" ] } ], "nextPageToken": "CgwIrdncnQYQ6OqRkwISCwiosvKXBhDQ-74JGidkZV8wNDZjZmY0YS1jM2ZkLTM5YWEtYmUyYS0wZTU2Zjk4OWE1YTE=" } ListDetections Return the detections for the specified version of a rule, the latest version of a rule, all versions of a rule, or all versions of all rules.
- Response Sample Heartbeat Response (can be ignored by clients) { "heartbeat": true } Sample Response (without detections list) { "continuationTime": "2019-04-15T21:59:17.081331Z" } Sample Response (with detections list including detections from both user-created rules and Google SecOps Rules) { "continuationTime": "2019-05-29T05:00:04.123073Z", "detections": [ { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de ce594791-09ed-9681-27fa-3b7c8fa6054c& selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "ALERTING", "ruleType": "SINGLE EVENT" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z" }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Google Cloud Global SSH Keys", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections ?ruleId=ur ttp GCP GlobalSSHKeys Added&selectedList=RuleDetectionsViewTimeline &ruleSource=ruleSet&selectedParentDetectionId=de 8e47ff9c-9bc4-df7c-1782-53ddf14c9b6c &selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ur ttp GCP GlobalSSHKeys Added", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "summary": "Rule Detection", "ruleSet": "11c505d4-b424-65e3-d918-1a81232cc76b", "ruleSetDisplayName": "Admin Action", "description": "Identifies instances of project-wide SSH keys being added where there were previously none.", "severity": "LOW" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z", "lastUpdatedTime": "2020-12-03T19:19:21.325134Z", "tags": ["TA0003", "TA0004"] }, ... ] } Detections are returned in the same format defined for GetDetection .

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Note: Batches of data sent through Webhook feeds may experience ingestion delays if the request size or QPS limits are set too low.
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Set up an HTTPS webhook feed Before you begin: Ensure that a Google Cloud project for Google SecOps is configured and the Chronicle API is enabled for the project.
- The HTTPS push endpoint supports a maximum request size of 4 MB per request and a maximum throughput of 15 K QPS per Google SecOps instance.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .
- Google Security Operations forwarder executable for Windows April 04, 2023 March 31, 2024 On or after March 31, 2024, existing Google Security Operations forwarder executable for Windows will be removed.
- BigQuery data lake December 31, 2024 April 30, 2025 The shutdown of managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project has been extended to April 30, 2025.
- SOAR IAM Roles February 23, 2026 August 23, 2026 The chronicle.soarAnalyst , chronicle.soarViewer , and chronicle.soarEngineer roles in Cloud IAM are deprecated and will be removed.

