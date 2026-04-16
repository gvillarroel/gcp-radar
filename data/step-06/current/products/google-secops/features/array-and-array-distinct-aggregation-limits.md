---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.761Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Array and array_distinct aggregation limits"
feature_slug: "array-and-array-distinct-aggregation-limits"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "array"
  - "distinct"
  - "aggregation"
  - "limits"
  - "element"
  - "limit"
  - "functions"
  - "yara"
---

# Array and array_distinct aggregation limits

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The element limit for array and array_distinct aggregation functions in YARA-L has increased to 1,000.

## Extended Definition

The element limit for array and array_distinct aggregation functions in YARA-L has increased to 1,000.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)

## Supporting Pages

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-3`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use these functions in the following parts of a YARA-L query: events section BOOL CLAUSE of a conditional in the outcome section arrays.concat Supported in: Rules Search arrays.concat(string array, string array) Description Returns a new string array by copying elements from original string arrays.
- Param data types ARRAY STRINGS , STRING Return type STRING Code samples Here are some examples of how to use the function: Example 1 This example joins an array with non-null elements and a delimiter. arrays.join string(["foo", "bar"], ",") = "foo,bar" Example 2 This example joins an array with a null element and a delimiter. arrays.join string(["foo", NULL, "bar"], ",") = "foo,bar" Example 3 This example joins an array with non-null elements and no delimiter. arrays.join string(["foo", "bar"]) = "foobar" arrays.length Supported in: Rules Search arrays.length(repeatedField) Description Returns the number of repeated field elements.
- Param data types ARRAY STRINGS ARRAY INTS ARRAY FLOATS , INT Return type FLOAT Code samples Example 1 The following example fetches an element at index 1 from an array of floats. arrays.index to float([1.2, 2.1, 3.5, 4.6], 1) // 2.1 Example 2 The following example fetches an element at index -1 from an array of floats. arrays.index to float([1.2, 2.1, 3.5, 4.6], 0-1) // 4.6 Example 3 The following example fetches an element for an index greater than the size of the array. arrays.index to float([1.2, 2.1, 3.5, 4.6], 6) // 0.0 Example 4 The following example fetches an element from an empty array. arrays.index to float([], 0) // 0.0 Example 5 The following example fetches an element at index 1 from a string array. arrays.index to float(["1.2", "3.3", "2.4"], 1) // 3.3 Example 6 The following example fetches an element at index 2 from an array of integers. arrays.index to float([1, 3, 2], 2) // 2.0 arrays.index to int Supported in: Rules Search arrays.index to int(array of inputs, index) Description Returns the value at a given index in an array as an integer.
- Param data types ARRAY STRINGS ARRAY INTS ARRAY FLOATS , INT Return type INT Code samples Example 1 This function call returns 0 when the value at the index is a non-numeric string. arrays.index to int(["str0", "str1", "str2"], 1) = 0 Example 2 This function returns the element at index -1. arrays.index to int(["44", "11", "22", "33"], 0-1) = 33 Example 3 Returns 0 for the out-of-bounds element. arrays.index to int(["44", "11", "22", "33"], 5) = 0 Example 4 This function fetches the element from the float array at index 1. arrays.index to int([1.100000, 1.200000, 1.300000], 1) = 1 Example 5 This function fetches the element from the int array at index 0. arrays.index to int([1, 2, 3], 0) = 1 arrays.index to str Supported in: Rules Search arrays.index to str(array, index) Description Returns the element at the given index from the array as a string.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Feature Programmatic access limit Web interface limit QPH limit 2,000 1,000 Simple query concurrency 40 40 Complex query concurrency 10 10 Concurrency limits Concurrency limits define the number of simultaneous search operations allowed per tenant: Simple queries: Queries that span less than one day, use a single data source, and don't include stats.
- For example, if you add the following to your search, it limits the results to a maximum of 25: limit: 25 Note: You can also add the limit keyword to custom dashboards.
- Search limits and quotas Google SecOps enforces limits on search queries to ensure platform stability and consistent performance across programmatic and web interface.
- Use search settings to specify a lower limit : By default, Google SecOps limits the number of events displayed to 30K.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample response (specific version of rule - retrohunt done) { "retrohuntId": "oh 95805380-2d44-4aab-9306-929789eba814", "ruleId": "ru 30979d84-aa89-47d6-bf4d-b4bb0eacb497", "versionId": "ru 30979d84-aa89-47d6-bf4d-b4bb0eacb497@v 1612472807 179679000", "eventStartTime": "2021-01-01T23:00:00Z", "eventEndTime": "2021-01-30T23:00:00Z", "retrohuntStartTime": "2021-02-08T03:22:57.910122Z", "retrohuntEndTime": "2021-02-08T03:23:44.510819Z", "state": "DONE", "progressPercentage": 100 } Limitations See the detailed list of the Backstory API query limits .
- If you use a library which supports streaming, you can view the stream response from Google SecOps as a stream of bytes that represent a continuous JSON array (for example, [{"key1": "value1"},{"key2": "value2"}, {"key3": "value3"}, ...] For this code sample, one element of the JSON array is referred to as a "detection batch".
- The max results parameter only limits the number of detections returned, not the number of errors.
- For example, {"key1": "value1"} is one element of the JSON array shown above.

