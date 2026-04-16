---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.573Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "YARA-L 2.0 statistical queries"
feature_slug: "yara-l-2-0-statistical-queries"
latest_feature_date: "2025-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "yara"
  - "statistical"
  - "queries"
  - "now"
  - "supports"
  - "result"
  - "grouping"
  - "over"
---

# YARA-L 2.0 statistical queries

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

YARA-L 2.0 now supports statistical queries and result grouping over UDM events for analysis.

## Extended Definition

YARA-L 2.0 now supports statistical queries and result grouping over UDM events for analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- When you use a data table in your YARA-L search, the results reference the data table rows linked to the matching events.
- View aggregated results For statistics-based searches, Google SecOps supports large aggregated result sets.
- Search large result sets Google SecOps supports returning and navigating up to 1 million results.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Functions Supported in: Google secops SIEM This section describes the YARA-L 2.0 functions that you can use in Rules, Search, and Dashboard queries.
- Param data types INT FLOAT , BOOL Return type FLOAT Code samples Example 1 This example returns the median when the input values aren't zero. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 2 if the file sizes in the match window are [1, 2, 3] condition: $e } Example 2 This example returns the median when the input includes some zero values that shouldn't be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 3 This example returns the median when the input includes some zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size, true) // returns 2 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 4 This example returns the median when the input includes all zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 0 if the file sizes in the match window are [0,0] condition: $e } Example 5 This example shows that, when there are multiple medians, only one median is returned. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [1, 2, 3, 4] condition: $e } window.mode Supported in: Rules window.mode(values) Description Return the mode of the input values.
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example returns the standard deviation of integers in a match window. // This rule creates a detection when the file size stddev in 5 minutes for a user is over a threshold. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 4.0 if the event file size values in the match window are [10, 14, 18]. condition: $e and #p1 > 2 Example 2 This example returns the standard deviation of floats in a match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 4.488686 if the event file size values in the match window are [10.00, 14.80, 18.97]. condition: $e and #p1 > 2 Example 3 This example returns the standard deviation in a match window that contains negative numbers. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 48.644972 if the event file size values in the match window are [-1, -56, -98]. condition: $e and #p1 > 2 Example 4 This example returns with zero standard deviation when all values in the match window are the same. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 0.000000 if the event file size values in the match window are [1, 1, 1]. condition: $e and #p1 > 2 Example 5 This example returns the standard deviation of a match window containing positive and negative numbers. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 1.000000 if the event file size values in the match window are [1, 0, -1]. condition: $e and #p1 > 10 window.variance Supported in: Rules window.variance(values) Description This function returns the specified variance of the input values.
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example returns the variance of all integers. // This rule creates a detection when the file size variance in 5 minutes for a user is over a threshold. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 16 if the event file size values in the match window are [10, 14, 18]. condition: $e and #p1 > 10 Example 2 This example returns the variance of all floats. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 20.148300 if the event file size values in the match window are [10.00, 14.80, 18.97]. condition: $e and #p1 > 10 Example 3 This example returns the variance of negative numbers. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 2366.333333 if the event file size values in the match window are [-1, -56, -98]. condition: $e and #p1 > 10 Example 4 This example returns a small variance value. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 0.000000 if the event file size values in the match window are [0.000000, 0.000000, 0.000100]. condition: $e and #p1 > 10 Example 5 This example returns a zero variance. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 0.000000 if the event file size values in the match window are [1, 1, 1]. condition: $e and #p1 > 10 Example 6 This example returns the variance of positive and negative numbers. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 1.000000 if the event file size values in the match window are [1, 0, -1]. condition: $e and #p1 > 10 Need more help?

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Request POST https://backstory.googleapis.com/v2/detect/rules:streamTestRule Request body { "rule": { "ruleText": "<ruleText here>" }, "startTime": "<startTime here>", "endTime": "<endTime here>", "maxResults": "<maxResults here>", } Body parameters Parameter Name Value Required Description rule.ruleText string Required Text of the new rule in YARA-L 2.0 format. startTime string Required Start time for the time range of logs being processed, in RFC 3339 format. endTime string Required End time for the time range of logs being processed, in RFC 3339 format. maxResults integer Optional Maximum number of results to return.
- Sample response { "retrohuntId": "oh d738c8ea-8fd7-4cc1-b43d-25835b8e1785", "ruleId": "ru 30979d84-aa89-47d6-bf4d-b4bb0eacb497", "versionId": "ru 30979d84-aa89-47d6-bf4d-b4bb0eacb497@v 1612472807 179679000", "eventStartTime": "2021-01-14T23:00:00Z", "eventEndTime": "2021-01-30T23:00:00Z", "retrohuntStartTime": "2021-02-08T02:40:59.192113Z", "state": "RUNNING" } StreamDetectionAlerts Continuously receive Detection Engine results over an HTTP stream as the detections are discovered.
- VerifyRule Verifies that a rule is a valid YARA-L 2.0 rule without creating a new rule or evaluating it over data.
- Response Sample Heartbeat Response (can be ignored by clients) { "heartbeat": true } Sample Response (without detections list) { "continuationTime": "2019-04-15T21:59:17.081331Z" } Sample Response (with detections list including detections from both user-created rules and Google SecOps Rules) { "continuationTime": "2019-05-29T05:00:04.123073Z", "detections": [ { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de ce594791-09ed-9681-27fa-3b7c8fa6054c& selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "ALERTING", "ruleType": "SINGLE EVENT" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z" }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Google Cloud Global SSH Keys", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections ?ruleId=ur ttp GCP GlobalSSHKeys Added&selectedList=RuleDetectionsViewTimeline &ruleSource=ruleSet&selectedParentDetectionId=de 8e47ff9c-9bc4-df7c-1782-53ddf14c9b6c &selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ur ttp GCP GlobalSSHKeys Added", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "summary": "Rule Detection", "ruleSet": "11c505d4-b424-65e3-d918-1a81232cc76b", "ruleSetDisplayName": "Admin Action", "description": "Identifies instances of project-wide SSH keys being added where there were previously none.", "severity": "LOW" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z", "lastUpdatedTime": "2020-12-03T19:19:21.325134Z", "tags": ["TA0003", "TA0004"] }, ... ] } Detections are returned in the same format defined for GetDetection .

