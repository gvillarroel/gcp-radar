---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.544Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "limit keyword for search results"
feature_slug: "limit-keyword-for-search-results"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "limit"
  - "keyword"
  - "search"
  - "results"
  - "adds"
  - "restrict"
  - "number"
  - "returned"
---

# limit keyword for search results

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Adds the limit keyword to restrict the number of search results returned.

## Extended Definition

Adds the limit keyword to restrict the number of search results returned.

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
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Factors that limit search results When conducting searches, the following factors can limit the number of results returned: Maximum search results : 1M events.
- Limit results You can limit search results by adding the limit keyword with the maximum number of search results you want to display.
- For example, if you add the following to your search, it limits the results to a maximum of 25: limit: 25 Note: You can also add the limit keyword to custom dashboards.
- Select how the results should be returned If a search exceeds the configured limit: Sampled events (default): Shows a subset of the complete results.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The max results parameter only limits the number of detections returned, not the number of errors.
- Request POST https://backstory.googleapis.com/v2/detect/rules:streamTestRule Request body { "rule": { "ruleText": "<ruleText here>" }, "startTime": "<startTime here>", "endTime": "<endTime here>", "maxResults": "<maxResults here>", } Body parameters Parameter Name Value Required Description rule.ruleText string Required Text of the new rule in YARA-L 2.0 format. startTime string Required Start time for the time range of logs being processed, in RFC 3339 format. endTime string Required End time for the time range of logs being processed, in RFC 3339 format. maxResults integer Optional Maximum number of results to return.
- Sample request https://backstory.googleapis.com/v2/detect/rules:streamTestRule { "rule": { "ruleText": "<ruleText here>" }, "startTime": "2021-01-01T00:00:00Z", "endTime": "2021-01-14T00:00:00Z", "maxResults": 2 } Response When using the StreamTestRule method, be aware of the following limitations: Results either contain a detection { "detection": <detection> } or an error { "error": <error> } .
- Interpreting results Use the following as guidelines when interpreting the results returned by StreamDetectionAlerts: If the client receives a 503 error (perhaps due to server maintenance), it should simply reconnect with exponential backoff.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Param data types ARRAY STRINGS , STRING Return type STRING Code samples Here are some examples of how to use the function: Example 1 This example joins an array with non-null elements and a delimiter. arrays.join string(["foo", "bar"], ",") = "foo,bar" Example 2 This example joins an array with a null element and a delimiter. arrays.join string(["foo", NULL, "bar"], ",") = "foo,bar" Example 3 This example joins an array with non-null elements and no delimiter. arrays.join string(["foo", "bar"]) = "foobar" arrays.length Supported in: Rules Search arrays.length(repeatedField) Description Returns the number of repeated field elements.
- Param data types STRING Return type STRING Code samples Example 1 "test" = strings.base64 decode($e.principal.domain.name) strings.coalesce Supported in: Rules Search strings.coalesce(a, b, c, ...) Description This function takes an unlimited number of arguments and returns the value of the first expression that does not evaluate to an empty string (for example, "non-zero value").
- It will return a compiler error because the arguments are different event variables. // returns a compiler error "test" = strings.coalesce($e1.principal.hostname, $e2.principal.hostname) strings.concat Supported in: Rules Search strings.concat(a, b, c, ...) Description Returns the concatenation of an unlimited number of items, each of which can be a string, integer, or float.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type INT Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts) = 6 Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts, "America/Los Angeles") = 6 timestamp.get timestamp Supported in: Rules Search timestamp.get timestamp(unix seconds, optional timestamp format/time granularity, optional timezone) Description This function returns a string in the format YYYY-MM-DD , representing the day a timestamp is in. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. timestamp format is optional and is a string representing the format for the timestamp.

