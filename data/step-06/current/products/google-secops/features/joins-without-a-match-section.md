---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.694Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Joins without a match section"
feature_slug: "joins-without-a-match-section"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "joins"
  - "without"
  - "match"
  - "section"
  - "search"
  - "can"
  - "correlate"
  - "combine"
---

# Joins without a match section

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Search can correlate and combine data from multiple sources without requiring a match section.

## Extended Definition

Search can correlate and combine data from multiple sources without requiring a match section.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-3`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: For search, you can use grouped fields in the events section, but not in the match and outcome sections.
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example shows the integer average. // This rule sets the outcome $size mode to the average // file size in the 5 minute match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 2.5 if the event file size values in the match window are 1, 2, 3 and 4 Example 2 This example shows the float average. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 1.75 if the event file size values in the match window are 1.1 and 2.4 Example 3 Negative input average events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0.6 if the event file size values in the match window are -1.1, 1.1, 0.0 and 2.4 Example 4 0 returns 0 events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0 if the event file size values in the match window is 0 Example 5 Ignoring 0 values events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size, true) // yields 394 if the event file size values in the match window are 0, 0, 0 and 394 window.first Supported in: Rules window.first(values to sort by, values to return) Description This aggregation function returns a string value derived from an event with the lowest correlated int value in the match window.
- Equivalent to: hash.fingerprint2011(byteOrString) % rateDenominator < rateNumerator Param data types byteOrString: Expression that evaluates to either a BYTE or STRING . rateNumerator: 'INT' rateDenominator: 'INT' Return type BOOL Code sample events: $e.metadata.event type = "NETWORK CONNECTION" $asset id = $e.principal.asset.asset id optimization.sample rate($e.metadata.id, 1, 5) // Only 1 out of every 5 events match: $asset id over 1h outcome: $event count = count distinct($e.metadata.id) // estimate the usage by multiplying by the inverse of the sample rate $usage past hour = sum(5.0 $e.network.sent bytes) condition: // Requiring a certain number of events after sampling avoids bias (e.g. a // device with just 1 connection will still show up 20% of the time and // if we multiply that traffic by 5, we'll get an incorrect estimate) $e and ($usage past hour > 1000000000) and $event count >= 100 strings.base64 decode Supported in: Rules Search strings.base64 decode(encodedString) Description Returns a string containing the base64 decoded version of the encoded string.
- Param data types INT , STRING Return type STRING Code samples Get a string value derived from an event with the lowest correlated int value in the match window. // This rule sets the outcome $first event to the lowest correlated int value // in the 5 minute match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $first event = window.first($e.metadata.timestamp.seconds, $e.metadata.event type) // yields v1 if the events in the match window are 1, 2 and 3 and corresponding values v1, v2, and v3. window.last Supported in: Rules window.last(values to sort by, values to return) Description This aggregation function returns a string value derived from an event with the highest correlated int value in the match window.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-3`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then, use a composite rule with a long match window (for example, 24 hours) to trigger on an initial suspicious login and correlate it with any of the following detections from the same user: A user clearing their command-line history.
- These rules must always have a match section and can reference meta fields, match variables, and outcome variables from input rules.
- The evaluation can be based on the information from the original rule's meta section, outcome variables, and match variables.
- Define the match section to specify the join key and the time window for the match.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .

