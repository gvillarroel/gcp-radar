---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.693Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Rule archiving"
feature_slug: "rule-archiving"
latest_feature_date: "2021-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
  - "https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "rule"
  - "archiving"
  - "lets"
  - "you"
  - "hide"
  - "security"
  - "detection"
  - "engine"
---

# Rule archiving

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Rule archiving lets you hide security data for a Detection Engine rule and its versions without deleting the rule.

## Extended Definition

Rule archiving lets you hide security data for a Detection Engine rule and its versions without deleting the rule.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule](https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)

## Supporting Pages

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Understand rule detection delays Supported in: Google secops SIEM This document explains rule detection delays in Google Security Operations, identifies contributing factors, outlines troubleshooting approaches, and suggests techniques to reduce delays where possible.
- The system generates rule detections in the following ways: Streaming engine The Streaming engine is a fast pipeline that typically operates with less than a five-minute delay.
- Familiarize yourself with the following topics to understand how these factors influence rule detection delays: Detection generation methods Known limitations Factors contributing to rule detection delays Detection generation methods Learn how the system creates rule detections to understand how the detection generation method affects detection delays.
- Complex single-event rules These rules are more susceptible to detection delays because they include match windows or reference lists: Windowed single-event rules These are single-event rules that include a match window and typically have a slightly longer delay than other single-event rules.

### Archive rules \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule](https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule)
- Source ID: `site-docs-reference-required-1`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Archive rules Supported in: Google secops SIEM Archiving a rule enables you to hide the security data related to that rule (and all of its versions) without actually deleting the rule.
- Archiving a rule To archive a rule, complete the following steps: Select a rule in the left navigation and click the option icon in the top- right corner of the Google Security Operations user interface.
- Confirm Archive message Confirm Archive message continued Unarchiving a rule To unarchive a rule, complete the following steps: Click the option icon for a specific rule in the left navigation pane.
- Viewing rules Complete the following steps to navigate to the View Rules page: In the navigation bar, click Detection > Rules & Detections .

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Detection Engine This document explains how to use the Detection Engine API Methods to create, run, and manage security rules that search data stored in your Google Security Operations account.
- Sample Response { "curatedRuleDetections": [ { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de 227a290c-17e9-6314-7f16-35f7923b554f&selectedTimestamp=2022-12-05T11:07:12.585Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T12:13:23.154544Z", "lastUpdatedTime": "2022-12-05T12:13:23.154544Z", "id": "de 227a290c-17e9-6314-7f16-35f7923b554f", "timeWindow": { "startTime": "2022-12-05T11:07:12.585Z", "endTime": "2022-12-05T11:07:12.585Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T11:07:12.585Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T11:06:27.737408Z", "id": "AAAAA" }, "principal": { "hostname": "admin-1", "process": { "pid": "12345", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "12345", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-1\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T11:07:12.585Z", "tags": [ "TA0004", "T1548" ] }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de c34ee707-ad5e-4e5e-4955-a3a8e13053ae&selectedTimestamp=2022-12-05T10:04:28.097Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T11:12:24.406199Z", "lastUpdatedTime": "2022-12-05T11:12:24.406199Z", "id": "de c34ee707-ad5e-4e5e-4955-a3a8e13053ae", "timeWindow": { "startTime": "2022-12-05T10:04:28.097Z", "endTime": "2022-12-05T10:04:28.097Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T10:04:28.097Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T10:04:01Z", "id": "BBBBB" }, "principal": { "hostname": "admin-2", "process": { "pid": "67890", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "67890", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-2\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T10:04:28.097Z", "tags": [ "TA0004", "T1548" ] } ], "nextPageToken": "CgwIrdncnQYQ6OqRkwISCwiosvKXBhDQ-74JGidkZV8wNDZjZmY0YS1jM2ZkLTM5YWEtYmUyYS0wZTU2Zjk4OWE1YTE=" } ListDetections Return the detections for the specified version of a rule, the latest version of a rule, all versions of a rule, or all versions of all rules.
- Response Sample Heartbeat Response (can be ignored by clients) { "heartbeat": true } Sample Response (without detections list) { "continuationTime": "2019-04-15T21:59:17.081331Z" } Sample Response (with detections list including detections from both user-created rules and Google SecOps Rules) { "continuationTime": "2019-05-29T05:00:04.123073Z", "detections": [ { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de ce594791-09ed-9681-27fa-3b7c8fa6054c& selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "ALERTING", "ruleType": "SINGLE EVENT" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z" }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Google Cloud Global SSH Keys", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections ?ruleId=ur ttp GCP GlobalSSHKeys Added&selectedList=RuleDetectionsViewTimeline &ruleSource=ruleSet&selectedParentDetectionId=de 8e47ff9c-9bc4-df7c-1782-53ddf14c9b6c &selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ur ttp GCP GlobalSSHKeys Added", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "summary": "Rule Detection", "ruleSet": "11c505d4-b424-65e3-d918-1a81232cc76b", "ruleSetDisplayName": "Admin Action", "description": "Identifies instances of project-wide SSH keys being added where there were previously none.", "severity": "LOW" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z", "lastUpdatedTime": "2020-12-03T19:19:21.325134Z", "tags": ["TA0003", "TA0004"] }, ... ] } Detections are returned in the same format defined for GetDetection .
- Sample Response { "detections": [ { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "description": "description of this rule", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de 69d1ff3c-3528-6171-fb48-28ee813ec3ec& selectedTimestamp=2020-12-03T16:59:55.124243Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "NOT ALERTING", "ruleType": "SINGLE EVENT" "ruleLabels": [ { "key": "description", "value": "description of this rule" } ], } ], "createdTime": "2020-12-03T19:19:19.720174Z", "id": "de 69d1ff3c-3528-6171-fb48-28ee813ec3ec", "timeWindow": { "startTime": "2020-12-03T16:59:55.124243Z", "endTime": "2020-12-03T16:59:55.124243Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:59:55.124243Z", "collectedTimestamp": "2020-12-03T16:59:55.126201345Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:59:59.011915Z" }, "principal": { "ip": [ "10.0.123.15" ] }, "target": { "ip": [ "10.0.10.10" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:59:55.124243Z" }, { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "description": "description of this rule", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de ec2bc52b-a522-aeaf-6a94-f7c7ce0eff15& selectedTimestamp=2020-12-03T16:59:48.916995Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "NOT ALERTING", "ruleType": "SINGLE EVENT" "ruleLabels": [ { "key": "description", "value": "description of this rule" } ], } ], "createdTime": "2020-12-03T19:19:19.720174Z", "id": "de ec2bc52b-a522-aeaf-6a94-f7c7ce0eff15", "timeWindow": { "startTime": "2020-12-03T16:59:48.916995Z", "endTime": "2020-12-03T16:59:48.916995Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:59:48.916995Z", "collectedTimestamp": "2020-12-03T16:59:48.918238257Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:59:59.011915Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12346, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:59:48.916995Z" } ], "nextPageToken": "CgsIkdvj gUQ2M2IXBIMCISzpP4FELj3oLUDGidkZV9lYzJiYzUyYi1hNTIyLWFlYWYtNmE5NC1mN2M3Y2UwZWZmMTU=" } ListErrors List the latest rule errors.

