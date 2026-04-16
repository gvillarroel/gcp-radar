---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.732Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Search result pagination"
feature_slug: "search-result-pagination"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/search-api"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "search"
  - "result"
  - "pagination"
  - "broad"
  - "searches"
  - "now"
  - "return"
  - "paginated"
---

# Search result pagination

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Broad searches now return paginated results, with control over the number of rows per page.

## Extended Definition

Broad searches now return paginated results, with control over the number of rows per page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Navigate search results using pagination To improve browser stability and performance when loading a large number of results, Google SecOps provides paginated search results.
- Factors that limit search results When conducting searches, the following factors can limit the number of results returned: Maximum search results : 1M events.
- Search returns too many results If your search is too broad, Google SecOps displays a warning message indicating that not all search results can be shown.
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .

### Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request GET https://backstory.googleapis.com/v1/events:udmSearch?query=<query>&time range.start time=<start time>&time range.end time=<end time>&limit=<limit> Parameters Parameter Name Type Description query string UDM search query. time range.start time ISO 8601 format Inclusive start time. time range.end time ISO 8601 format Exclusive end time. limit integer (Optional) The maximum number of matched events to return.
- Note: There are two differences between data in the Google SecOps UI and data returned by the Search API: The Alerts page in the Google SecOps UI doesn't show alerts produced by configuration-based normalizer (CBN) parsers.
- For each API call, you can specify the page size property to limit the maximum number of returned results.
- Search API reference GetLog Returns a single raw log given the UID for the event.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Response Sample Heartbeat Response (can be ignored by clients) { "heartbeat": true } Sample Response (without detections list) { "continuationTime": "2019-04-15T21:59:17.081331Z" } Sample Response (with detections list including detections from both user-created rules and Google SecOps Rules) { "continuationTime": "2019-05-29T05:00:04.123073Z", "detections": [ { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de ce594791-09ed-9681-27fa-3b7c8fa6054c& selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "ALERTING", "ruleType": "SINGLE EVENT" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z" }, { "type": "GCTI FINDING", "detection": [ { "ruleName": "Google Cloud Global SSH Keys", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections ?ruleId=ur ttp GCP GlobalSSHKeys Added&selectedList=RuleDetectionsViewTimeline &ruleSource=ruleSet&selectedParentDetectionId=de 8e47ff9c-9bc4-df7c-1782-53ddf14c9b6c &selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ur ttp GCP GlobalSSHKeys Added", "alertState": "ALERTING", "ruleType": "SINGLE EVENT", "summary": "Rule Detection", "ruleSet": "11c505d4-b424-65e3-d918-1a81232cc76b", "ruleSetDisplayName": "Admin Action", "description": "Identifies instances of project-wide SSH keys being added where there were previously none.", "severity": "LOW" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z", "lastUpdatedTime": "2020-12-03T19:19:21.325134Z", "tags": ["TA0003", "TA0004"] }, ... ] } Detections are returned in the same format defined for GetDetection .
- Detections have the same format as those returned by the ListDetections and GetDetection methods, except that the following fields are not returned since the rule is not persisted by the test: detection.ruleId detection.ruleVersion detection.alertState detection.urlBackToProduct createdTime Errors have the same format as those returned by the ListErrors and GetError methods, except that the following fields are not returned since the rule is not persisted by the test: errorId errorTime ruleExecution.ruleId ruleExecution.ruleVersion Sample response [{ "error": { "category": "RULES EXECUTION ERROR", "ruleExecution": { "windowStartTime": "2021-01-01T18:00:00Z", "windowEndTime": "2021-01-01T20:00:00Z" } } } , { "detection": { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "ruleType": "SINGLE EVENT" } ], "id": "de 13503ebe-b96b-7b63-bb89-0e6d218628c9", "timeWindow": { "startTime": "2021-01-03T03:17:49.781746Z", "endTime": "2021-01-03T03:17:49.781746Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2021-01-03T03:17:49.781746Z", "collectedTimestamp": "2021-01-03T03:17:49.791689822Z", "eventType": "NETWORK DNS", "productName": "DNS pcap", "ingestedTimestamp": "2021-01-03T03:17:52.016198Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true, } } } } ], "label": "e" } ], "detectionTime": "2021-01-01T03:17:49.781746Z" } } ] UnarchiveRule Unarchive the specified rule.
- Sample response { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections? ruleId=ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline& selectedParentDetectionId=de ce594791-09ed-9681-27fa-3b7c8fa6054c& selectedTimestamp=2020-12-03T16:50:47.647245Z", "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "ruleVersion": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892822 687503000", "alertState": "NOT ALERTING", "ruleType": "SINGLE EVENT" } ], "createdTime": "2020-12-03T19:19:21.325134Z", "id": "de ce594791-09ed-9681-27fa-3b7c8fa6054c", "timeWindow": { "startTime": "2020-12-03T16:50:47.647245Z", "endTime": "2020-12-03T16:50:47.647245Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2020-12-03T16:50:47.647245Z", "collectedTimestamp": "2020-12-03T16:50:47.666064010Z", "eventType": "NETWORK DNS", "productName": "ProductName", "ingestedTimestamp": "2020-12-03T16:50:49.494542Z" }, "principal": { "ip": [ "10.0.1.2" ] }, "target": { "ip": [ "10.0.5.5" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true } } } } ], "label": "e" } ], "detectionTime": "2020-12-03T16:50:47.647245Z" } GetError Return the specified error.
- CuratedRule fields Field Name Type ruleId string Unique identifier for a rule, defined and returned by the server. ruleName string Name of the rule. metadata map< string , string > Metadata for the rule. severity string Severity of the rule ("Info", "Low", or "High"). ruleType string Type of the rule ("SINGLE EVENT" or "MULTI EVENT"). precision string Precision of the rule ("BROAD" or "PRECISE"). tactics []string List of MITRE tactic IDs covered by the rule. techniques []string List of MITRE technique IDs covered by the rule. updateTime string String representing the time the rule was last updated, in RFC 3339 format. ruleSet string Unique identifier of the Google SecOps rule set containing the rule. description string Description of the rule.

