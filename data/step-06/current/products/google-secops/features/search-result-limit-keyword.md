---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.770Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Search result limit keyword"
feature_slug: "search-result-limit-keyword"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/search-api"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "search"
  - "result"
  - "limit"
  - "keyword"
  - "restricts"
  - "number"
  - "results"
  - "returned"
---

# Search result limit keyword

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The limit keyword restricts the number of results returned by a search.

## Extended Definition

The limit keyword restricts the number of results returned by a search.

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
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Factors that limit search results When conducting searches, the following factors can limit the number of results returned: Maximum search results : 1M events.
- Limit results You can limit search results by adding the limit keyword with the maximum number of search results you want to display.
- For example, if you add the following to your search, it limits the results to a maximum of 25: limit: 25 Note: You can also add the limit keyword to custom dashboards.
- Select how the results should be returned If a search exceeds the configured limit: Sampled events (default): Shows a subset of the complete results.

### Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each API call, you can specify the page size property to limit the maximum number of returned results.
- Request GET https://backstory.googleapis.com/v1/events:udmSearch?query=<query>&time range.start time=<start time>&time range.end time=<end time>&limit=<limit> Parameters Parameter Name Type Description query string UDM search query. time range.start time ISO 8601 format Inclusive start time. time range.end time ISO 8601 format Exclusive end time. limit integer (Optional) The maximum number of matched events to return.
- Search API query submission rate limits The Search API enforces limits on the number of requests that you can send to the Google SecOps platform.
- Response { "events": [ { "metadata": { "eventTimestamp": "2019-11-18T20:36:58.069290Z", "collectedTimestamp": "2019-11-18T20:36:58.069290Z", "eventType": "NETWORK DNS" }, "principal": { "hostname": "enterprise.service.example.com", "ip": ["203.0.113.100"] }, "target": { "ip": ["10.0.2.8"] }, "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "www.altostrat.com", "type": 1 } ], "answers": [ { "name": "www.altostrat.com", "type": 1, "class": 1, "data": "203.0.113.100" } ] } } }, { "metadata": { "eventTimestamp": "2019-11-18T20:36:58.069290Z", "collectedTimestamp": "2019-11-18T20:36:58.069290Z", "eventType": "NETWORK DHCP" }, "principal": { "ip": ["10.0.2.8"] }, "target": { "ip": ["198.51.152"] }, "network": { "applicationProtocol": "DHCP" } }, { "metadata": { "eventTimestamp": "2019-11-18T20:36:58.069290Z", "collectedTimestamp": "2019-11-18T20:36:58.069290Z", "eventType": "NETWORK HTTP" }, "principal": { "ip": ["10.0.2.18"] }, "target": { "hostname": "www.altostrat.com", "url": "http://www.altostrat.com/robots.txt" }, "network": { "ipProtocol": "HTTP", "http": { "method": "METHOD GET", "responseCode": 200 } } } ] uri: ["https://sample.backstory.chronicle.security/assetResults?assetIdentifier= sample asset&referenceTime=2019-12-18T18%3A40%3A34.965Z&selectedList=AssetViewTimeline& startTime=2019-12-18T17%3A20%3A35.445Z&endTime=2019-12-18T19%3A20%3A35.445Z"] } Python sample code def call list events(): Imports required for the sample - Google Auth and API Client Library Imports.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-docs-reference-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The max results parameter only limits the number of detections returned, not the number of errors.
- Request POST https://backstory.googleapis.com/v2/detect/rules:streamTestRule Request body { "rule": { "ruleText": "<ruleText here>" }, "startTime": "<startTime here>", "endTime": "<endTime here>", "maxResults": "<maxResults here>", } Body parameters Parameter Name Value Required Description rule.ruleText string Required Text of the new rule in YARA-L 2.0 format. startTime string Required Start time for the time range of logs being processed, in RFC 3339 format. endTime string Required End time for the time range of logs being processed, in RFC 3339 format. maxResults integer Optional Maximum number of results to return.
- Sample request https://backstory.googleapis.com/v2/detect/rules:streamTestRule { "rule": { "ruleText": "<ruleText here>" }, "startTime": "2021-01-01T00:00:00Z", "endTime": "2021-01-14T00:00:00Z", "maxResults": 2 } Response When using the StreamTestRule method, be aware of the following limitations: Results either contain a detection { "detection": <detection> } or an error { "error": <error> } .
- Interpreting results Use the following as guidelines when interpreting the results returned by StreamDetectionAlerts: If the client receives a 503 error (perhaps due to server maintenance), it should simply reconnect with exponential backoff.

