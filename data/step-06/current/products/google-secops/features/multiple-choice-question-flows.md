---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.658Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Multiple-choice question flows"
feature_slug: "multiple-choice-question-flows"
latest_feature_date: "2026-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "multiple"
  - "choice"
  - "question"
  - "flows"
  - "up"
  - "20"
  - "branches"
  - "single"
---

# Multiple-choice question flows

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Multiple-choice question flows support up to 20 branches in a single step.

## Extended Definition

Multiple-choice question flows support up to 20 branches in a single step.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-3`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- This includes detecting multi-stage attacks, correlating multiple low-confidence alerts into a single high-confidence alert, or enriching detections with additional context from other data sources.
- Composite detections Supported in: Google secops SIEM This document introduces composite detections and how they can enhance threat detection workflows by correlating outputs from multiple rules.
- Goal : Build a profile of risky data handling by a single user across multiple devices and actions.
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Note: For log types with high data density, verify that your log source is not grouping multiple events into a single line that exceeds the 4 MB limit.
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Ingress rules The following Cloud Storage methods must be allowed in the ingress rule: google.storage.objects.list : Required for a single file feed. google.storage.objects.get : Required for feeds that require directory or subdirectory access. google.storage.objects.delete : Required for feeds that require deletion of the source file.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Sample response { "rules": [ { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602631093 146879000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of the latest version of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { // Multi event rule to detect logins from a single user for // multiple cities within a 5 minute window. meta: description = \"Sample Description of the latest version of the Rule\" author = \"author@example.com\" events: $e.metadata.event type = \"USER LOGIN\" $e.principal.user.userid = $user $e.principal.location.city = $city match: $user over 5m condition: #city > 1 } ", "liveRuleEnabled": true, "versionCreateTime": "2020-10-13T23:18:13.146879Z", "compilationState": "SUCCEEDED", "ruleType": "MULTI EVENT", "lastAlertStatusChangeTime": "2020-10-13T23:18:13.146879Z" "inputsUsed": { "usesUdm": "true", }, }, { "ruleId": "ru 1971c2ac-8d5b-41aa-bb30-f95d220e9439", "versionId": "ru 1971c2ac-8d5b-41aa-bb30-f95d220e9439@v 1598398482 260223000", "ruleName": "SampleRule2", "metadata": { "description": "Sample Description of the latest version of the Rule", "author": "author2@example.com" }, "ruleText": "rule SampleRule2 { meta: description = \"Sample Description of the latest version of the Rule\" author = \"author2@example.com\" events: // Single event rule to generate detections for network events involving example.com $event.network.dns.questions.name = \"example.com\" condition: $event } ", "versionCreateTime": "2020-08-25T23:34:42.260223Z", "compilationState": "SUCCEEDED", "ruleType": "SINGLE EVENT", "lastAlertStatusChangeTime": "2020-08-25T23:34:42.260223Z" "inputsUsed": { "usesUdm": "true", }, } ] } ListRuleVersions List all versions of a specific rule.
- Response Sample Heartbeat Response (can be ignored by clients) { "heartbeat": true } Sample Response (without detections list) { "continuationTime": "2019-04-15T21:59:17.081331Z" } Sample Response (with detections list including detections from both user-created rules and Google SecOps Rules) { "continuationTime": "2019-05-29T05:00:04.123073Z", "detections": [ { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de ce594791-09ed-9681-27fa-3b7c8fa6054c& selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "ALERTING", "ruleType": "SINGLE EVENT" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z" }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Google Cloud Global SSH Keys", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections ?ruleId=ur ttp GCP GlobalSSHKeys Added&selectedList=RuleDetectionsViewTimeline &ruleSource=ruleSet&selectedParentDetectionId=de 8e47ff9c-9bc4-df7c-1782-53ddf14c9b6c &selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ur ttp GCP GlobalSSHKeys Added", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "summary": "Rule Detection", "ruleSet": "11c505d4-b424-65e3-d918-1a81232cc76b", "ruleSetDisplayName": "Admin Action", "description": "Identifies instances of project-wide SSH keys being added where there were previously none.", "severity": "LOW" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z", "lastUpdatedTime": "2020-12-03T19:19:21.325134Z", "tags": ["TA0003", "TA0004"] }, ... ] } Detections are returned in the same format defined for GetDetection .
- Sample Response { "detections": [ { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "description": "description of this rule", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de 69d1ff3c-3528-6171-fb48-28ee813ec3ec& selectedTimestamp=2020-12-03T16:59:55.124243Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "NOT ALERTING", "ruleType": "SINGLE EVENT" "ruleLabels": [ { "key": "description", "value": "description of this rule" } ], } ], "createdTime": "2020-12-03T19:19:19.720174Z", "id": "de 69d1ff3c-3528-6171-fb48-28ee813ec3ec", "timeWindow": { "startTime": "2020-12-03T16:59:55.124243Z", "endTime": "2020-12-03T16:59:55.124243Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:59:55.124243Z", "collectedTimestamp": "2020-12-03T16:59:55.126201345Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:59:59.011915Z" }, "principal": { "ip": [ "10.0.123.15" ] }, "target": { "ip": [ "10.0.10.10" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:59:55.124243Z" }, { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "description": "description of this rule", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de ec2bc52b-a522-aeaf-6a94-f7c7ce0eff15& selectedTimestamp=2020-12-03T16:59:48.916995Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "NOT ALERTING", "ruleType": "SINGLE EVENT" "ruleLabels": [ { "key": "description", "value": "description of this rule" } ], } ], "createdTime": "2020-12-03T19:19:19.720174Z", "id": "de ec2bc52b-a522-aeaf-6a94-f7c7ce0eff15", "timeWindow": { "startTime": "2020-12-03T16:59:48.916995Z", "endTime": "2020-12-03T16:59:48.916995Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:59:48.916995Z", "collectedTimestamp": "2020-12-03T16:59:48.918238257Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:59:59.011915Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12346, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:59:48.916995Z" } ], "nextPageToken": "CgsIkdvj gUQ2M2IXBIMCISzpP4FELj3oLUDGidkZV9lYzJiYzUyYi1hNTIyLWFlYWYtNmE5NC1mN2M3Y2UwZWZmMTU=" } ListErrors List the latest rule errors.
- Sample response { "rules": [ { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602631093 146879000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of the latest version of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { // Multi event rule to detect logins from a single user for // multiple cities within a 5 minute window. meta: description = \"Sample Description of the latest version of the Rule\" author = \"author@example.com\" events: $e.metadata.event type = \"USER LOGIN\" $e.principal.user.userid = $user $e.principal.location.city = $city match: $user over 5m condition: #city > 1 } ", "liveRuleEnabled": true, "versionCreateTime": "2020-10-13T23:18:13.146879Z", "compilationState": "SUCCEEDED", "ruleType": "MULTI EVENT", "lastAlertStatusChangeTime": "2020-10-13T23:18:13.146879Z", "inputsUsed": { "usesUdm": "true", }, }, { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602519130 121984000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of an older version of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { meta: description = \"Sample Description of an older version of the Rule\" author = \"author@example.com\" events: // Single event rule that will generate lots of detections related to DNS events $event.metadata.event type = \"NETWORK DNS\" condition: $event } ", "versionCreateTime": "2020-10-12T16:12:10.121984Z", "compilationState": "SUCCEEDED", "ruleType": "SINGLE EVENT", "lastAlertStatusChangeTime": "2020-10-12T16:12:10.121984Z", "inputsUsed": { "usesUdm": "true", }, } ] } RunRetrohunt Initiate a retrohunt for the specified rule.

