---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.538Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "array and array_distinct limit increase"
feature_slug: "array-and-array-distinct-limit-increase"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "array"
  - "distinct"
  - "limit"
  - "increase"
  - "raises"
  - "aggregation"
  - "25"
  - "000"
---

# array and array_distinct limit increase

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Raises the array and array_distinct aggregation limit from 25 to 1,000 elements.

## Extended Definition

Raises the array and array_distinct aggregation limit from 25 to 1,000 elements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Param data types ARRAY STRINGS , STRING Return type STRING Code samples Here are some examples of how to use the function: Example 1 This example joins an array with non-null elements and a delimiter. arrays.join string(["foo", "bar"], ",") = "foo,bar" Example 2 This example joins an array with a null element and a delimiter. arrays.join string(["foo", NULL, "bar"], ",") = "foo,bar" Example 3 This example joins an array with non-null elements and no delimiter. arrays.join string(["foo", "bar"]) = "foobar" arrays.length Supported in: Rules Search arrays.length(repeatedField) Description Returns the number of repeated field elements.
- Since re.capture all() returns an array, you can use arrays.join string() to merge these matches into a single, readable list. rule CaptureAllIPs { meta: author = "user@example.com" events: $e.network.http.user agent != "" $captured ips = arrays.join string(re.capture all($e.network.http.user agent, \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}), ", ") condition: $e } Known limitations Single capturing group: The regular expression used with re.capture all() must not contain more than one capturing group.
- The output is in the form of a string. arrays.index to str([1, 3, 2], 2) // "2" arrays.join string Supported in: Rules Search arrays.join string(array of strings, optional delimiter) Description Converts an array of strings into a single string separated by the optional parameter.
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example shows the integer average. // This rule sets the outcome $size mode to the average // file size in the 5 minute match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 2.5 if the event file size values in the match window are 1, 2, 3 and 4 Example 2 This example shows the float average. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 1.75 if the event file size values in the match window are 1.1 and 2.4 Example 3 Negative input average events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0.6 if the event file size values in the match window are -1.1, 1.1, 0.0 and 2.4 Example 4 0 returns 0 events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0 if the event file size values in the match window is 0 Example 5 Ignoring 0 values events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size, true) // yields 394 if the event file size values in the match window are 0, 0, 0 and 394 window.first Supported in: Rules window.first(values to sort by, values to return) Description This aggregation function returns a string value derived from an event with the lowest correlated int value in the match window.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Feature Programmatic access limit Web interface limit QPH limit 2,000 1,000 Simple query concurrency 40 40 Complex query concurrency 10 10 Concurrency limits Concurrency limits define the number of simultaneous search operations allowed per tenant: Simple queries: Queries that span less than one day, use a single data source, and don't include stats.
- Understand suggestion ranking The editor organizes suggestions into three distinct categories to help you find fields quickly: Recently used fields : The top seven suggestions are based on fields you have used recently that match your typed field.
- Grouped fields can also be used in combination with regular UDM fields as shown in the following example: ip = "5.6.7.8" AND metadata.event type = "NETWORK CONNECTION" Grouped fields have a separate section in Aggregations .
- You can summarize by the following options: sum count count distinct average stddev min max Specify a value of Event count to return the number of events identified for this particular search and Pivot Table.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- Tip: Because the number of outcome variables is limited to 20, we recommend establishing a common taxonomy of outcome variables (such as hostname , ip address , user , and file bytes ) to reuse consistently across a wide range of rules.
- When designing and implementing composite detections, consider the following limitations: SOAR case data availability : Composite detections don't have access to all SOAR case data.
- Enhance detections with the function library You can use the YARA-L function library at strategic points within a composite rule to increase signal and add more complex logic.

