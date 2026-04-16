---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.543Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Layered aggregations in multi-stage queries"
feature_slug: "layered-aggregations-in-multi-stage-queries"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "layered"
  - "aggregations"
  - "multi"
  - "stage"
  - "queries"
  - "expands"
  - "baselines"
  - "deviations"
---

# Layered aggregations in multi-stage queries

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Expands multi-stage queries with layered aggregations, baselines, deviations, trends, and joins across stages.

## Extended Definition

Expands multi-stage queries with layered aggregations, baselines, deviations, trends, and joins across stages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Complex queries: Queries that span more than 1 day, use multiple sources, or include stats.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Feature Programmatic access limit Web interface limit QPH limit 2,000 1,000 Simple query concurrency 40 40 Complex query concurrency 10 10 Concurrency limits Concurrency limits define the number of simultaneous search operations allowed per tenant: Simple queries: Queries that span less than one day, use a single data source, and don't include stats.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- This includes detecting multi-stage attacks, correlating multiple low-confidence alerts into a single high-confidence alert, or enriching detections with additional context from other data sources.
- Detect multi-stage malware This use case involves identifying malware that operates slowly over a long period, which is difficult to catch with single rules that have short match windows.
- Benefits of composite detections Composite detections have the following benefits: Unmask multi-stage attacks : Cyberattacks are often multifaceted and interconnected.
- Decide which noisy rules you need to refine, which complex rules you need to simplify, and which new multi-stage detections you need to prioritize.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Param data types INT FLOAT , BOOL Return type FLOAT Code samples Example 1 This example returns the median when the input values aren't zero. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 2 if the file sizes in the match window are [1, 2, 3] condition: $e } Example 2 This example returns the median when the input includes some zero values that shouldn't be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 3 This example returns the median when the input includes some zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size, true) // returns 2 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 4 This example returns the median when the input includes all zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 0 if the file sizes in the match window are [0,0] condition: $e } Example 5 This example shows that, when there are multiple medians, only one median is returned. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [1, 2, 3, 4] condition: $e } window.mode Supported in: Rules window.mode(values) Description Return the mode of the input values.
- Equivalent to: hash.fingerprint2011(byteOrString) % rateDenominator < rateNumerator Param data types byteOrString: Expression that evaluates to either a BYTE or STRING . rateNumerator: 'INT' rateDenominator: 'INT' Return type BOOL Code sample events: $e.metadata.event type = "NETWORK CONNECTION" $asset id = $e.principal.asset.asset id optimization.sample rate($e.metadata.id, 1, 5) // Only 1 out of every 5 events match: $asset id over 1h outcome: $event count = count distinct($e.metadata.id) // estimate the usage by multiplying by the inverse of the sample rate $usage past hour = sum(5.0 $e.network.sent bytes) condition: // Requiring a certain number of events after sampling avoids bias (e.g. a // device with just 1 connection will still show up 20% of the time and // if we multiply that traffic by 5, we'll get an incorrect estimate) $e and ($usage past hour > 1000000000) and $event count >= 100 strings.base64 decode Supported in: Rules Search strings.base64 decode(encodedString) Description Returns a string containing the base64 decoded version of the encoded string.
- Param data types STRING Return type STRING Code samples Example 1 This example shows an empty string strings.extract domain("") = "" Example 2 random string, not a URL strings.extract domain("1234") = "" Example 3 multiple backslaches strings.extract domain("\\\\") = "" Example 4 non-alphabet characters handled gracefully strings.extract domain("http://例子.卷筒纸.中国") = "卷筒纸.中国" Example 5 handling URIs strings.extract domain("mailto:?to=&subject=&body=") = "" Example 6 multiple characters before actual URL strings.extract domain(" \t !$5 ^)&dahgsdfs;http://www.google.com") = "google.com" Example 7 special characters in URI # strings.extract domain("test#@google.com") = "" Example 8 special characters in URL # strings.extract domain("https://test#@google.com") = "" Example 9 positive test case strings.extract domain("https://google.co.in") = "google.co.in" strings.extract hostname Supported in: Rules Search strings.extract hostname(string) Description Extracts the hostname from a string.
- Param data types STRING Return type STRING Code samples Example 1 This example returns an empty string. strings.extract hostname("") = "" Example 2 random string, not a URL strings.extract hostname("1234") = "1234" Example 3 multiple backslashes strings.extract hostname("\\\\") = "" Example 4 non-English characters handled gracefully strings.extract hostname("http://例子.卷筒纸.中国") = "例子.卷筒纸.中国" Example 5 handling URIs strings.extract hostname("mailto:?to=&subject=&body=") = "mailto" Example 6 multiple characters before actual URL strings.extract hostname(" \t !$5 ^)&dahgsdfs;http://www.google.com") = "www.google.com" Example 7 special characters in URI # strings.extract hostname("test#@google.com") = "test" Example 8 special characters in URL # strings.extract hostname("https://test#@google.com") = "test" strings.from base64 Supported in: Rules Search strings.from base64(base64 encoded string) Description Function converts a base64 encoded STRING value to a raw binary BYTES value.

