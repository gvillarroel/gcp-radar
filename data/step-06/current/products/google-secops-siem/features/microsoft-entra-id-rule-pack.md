---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.598Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Microsoft Entra ID rule pack"
feature_slug: "microsoft-entra-id-rule-pack"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "microsoft"
  - "entra"
  - "id"
  - "rule"
  - "pack"
  - "curated"
  - "detections"
  - "added"
---

# Microsoft Entra ID rule pack

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Curated Detections added a Cloud Threats rule pack for Microsoft Entra ID.

## Extended Definition

Curated Detections added a Cloud Threats rule pack for Microsoft Entra ID.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Azure Cloud Services ( AZURE ACTIVITY ) Microsoft Entra ID , previously Azure Active Directory ( AZURE AD ) Microsoft Entra ID audit logs , previously Azure AD audit logs ( AZURE AD AUDIT ) Microsoft Defender for Cloud ( MICROSOFT GRAPH ALERT ) Microsoft Graph API Activity ( MICROSOFT GRAPH ACTIVITY LOGS ) Ingest Azure and Microsoft Entra ID data You must ingest data from every data source to have maximum rule coverage.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.

### "Use the curated detections page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Open the curated detections page and rule sets To open the curated detections page, complete the following steps: Select Rules from the main menu.
- Figure 2: Curated Detections dashboard The Curated Detections dashboard displays each of the rule sets available to your Google SecOps account.
- As part of these curated detections, GCTI provides and manages a set of YARA-L rules to help customers identify threats to their enterprise.
- Configure rule exclusions To manage the volume of alerts from GCTI curated detections, you can configure rule exclusions.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Sample Response { "curatedRuleDetections": [ { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de 227a290c-17e9-6314-7f16-35f7923b554f&selectedTimestamp=2022-12-05T11:07:12.585Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T12:13:23.154544Z", "lastUpdatedTime": "2022-12-05T12:13:23.154544Z", "id": "de 227a290c-17e9-6314-7f16-35f7923b554f", "timeWindow": { "startTime": "2022-12-05T11:07:12.585Z", "endTime": "2022-12-05T11:07:12.585Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T11:07:12.585Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T11:06:27.737408Z", "id": "AAAAA" }, "principal": { "hostname": "admin-1", "process": { "pid": "12345", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "12345", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-1\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T11:07:12.585Z", "tags": [ "TA0004", "T1548" ] }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Cobalt Strike Default Entrypoint", "summary": "Rule Detection", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.", "severity": "LOW", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur mal CobaltStrike StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de c34ee707-ad5e-4e5e-4955-a3a8e13053ae&selectedTimestamp=2022-12-05T10:04:28.097Z", "ruleId": "ur mal CobaltStrike StartW", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "ruleLabels": [ { "key": "rule name", "value": "Cobalt Strike Default Entrypoint" } ], "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "ruleSetDisplayName": "RAT" } ], "createdTime": "2022-12-05T11:12:24.406199Z", "lastUpdatedTime": "2022-12-05T11:12:24.406199Z", "id": "de c34ee707-ad5e-4e5e-4955-a3a8e13053ae", "timeWindow": { "startTime": "2022-12-05T10:04:28.097Z", "endTime": "2022-12-05T10:04:28.097Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2022-12-05T10:04:28.097Z", "eventType": "PROCESS LAUNCH", "ingestedTimestamp": "2022-12-05T10:04:01Z", "id": "BBBBB" }, "principal": { "hostname": "admin-2", "process": { "pid": "67890", "command line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}" } } "src": { "file": { full path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\" } } "target": { "process": { "pid": "67890", "file": { "sha256": "abcde", "full path": "C:\\Windows\\System32\\wbem\\WMIC.exe" } command line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-2\\AppData\\Local\\Temp\\calc.dll StartW\"" } } } } ], "label": "e" } ], "detectionTime": "2022-12-05T10:04:28.097Z", "tags": [ "TA0004", "T1548" ] } ], "nextPageToken": "CgwIrdncnQYQ6OqRkwISCwiosvKXBhDQ-74JGidkZV8wNDZjZmY0YS1jM2ZkLTM5YWEtYmUyYS0wZTU2Zjk4OWE1YTE=" } ListDetections Return the detections for the specified version of a rule, the latest version of a rule, all versions of a rule, or all versions of all rules.
- Response Sample Heartbeat Response (can be ignored by clients) { "heartbeat": true } Sample Response (without detections list) { "continuationTime": "2019-04-15T21:59:17.081331Z" } Sample Response (with detections list including detections from both user-created rules and Google SecOps Rules) { "continuationTime": "2019-05-29T05:00:04.123073Z", "detections": [ { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de ce594791-09ed-9681-27fa-3b7c8fa6054c& selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "ALERTING", "ruleType": "SINGLE EVENT" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z" }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Google Cloud Global SSH Keys", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections ?ruleId=ur ttp GCP GlobalSSHKeys Added&selectedList=RuleDetectionsViewTimeline &ruleSource=ruleSet&selectedParentDetectionId=de 8e47ff9c-9bc4-df7c-1782-53ddf14c9b6c &selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ur ttp GCP GlobalSSHKeys Added", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "summary": "Rule Detection", "ruleSet": "11c505d4-b424-65e3-d918-1a81232cc76b", "ruleSetDisplayName": "Admin Action", "description": "Identifies instances of project-wide SSH keys being added where there were previously none.", "severity": "LOW" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z", "lastUpdatedTime": "2020-12-03T19:19:21.325134Z", "tags": ["TA0003", "TA0004"] }, ... ] } Detections are returned in the same format defined for GetDetection .
- Sample response { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602631093 146879000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { meta: description = \"Sample Description of the Rule\" author = \"author@example.com\" events: // This will just generate lots of detections $event.metadata.event type = \"NETWORK HTTP\" condition: $event } ", "liveRuleEnabled": true, "versionCreateTime": "2020-10-13T23:18:13.146879Z", "compilationState": "SUCCEEDED" "alertingEnabled": true, "lastAlertStatsuChangeTime": "2020-10-14T12:16:45:413463Z" } ListCuratedRules List Google SecOps rules with detections.
- This is used by malware to execute core functionality and evade detection." }, { "ruleId": "ur mal CobaltStrike StartW", "ruleName": "Cobalt Strike Default Entrypoint", "severity": "Low", "ruleType": "SINGLE EVENT", "precision": "PRECISE", "tactics": [ "TA0004" ], "techniques": [ "T1548" ], "updateTime": "2022-11-16T18:28:45.062531Z", "ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9", "description": "Identifies CobaltStrike rundll32 execution using the default entrypoint." }, ], "nextPageToken": "CiQ0ODU4NWNjZS04MDZlLTExMjktNzY0MC0wMGViZDI4N2U1OTESGHVyX21hbF9MZW9WQlNfRG93bmxvYWRlcg==" } ListCuratedRuleDetections Return the detections for the specified Google SecOps rule.

