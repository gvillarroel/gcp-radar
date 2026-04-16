---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.501Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Joins without a match section"
feature_slug: "joins-without-a-match-section"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed"
keywords:
  - "joins"
  - "without"
  - "match"
  - "section"
  - "join"
  - "operations"
  - "can"
  - "correlate"
---

# Joins without a match section

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Join operations can correlate data from multiple sources without requiring a match section.

## Extended Definition

Join operations can correlate data from multiple sources without requiring a match section.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)

## Supporting Pages

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example shows the integer average. // This rule sets the outcome $size mode to the average // file size in the 5 minute match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 2.5 if the event file size values in the match window are 1, 2, 3 and 4 Example 2 This example shows the float average. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 1.75 if the event file size values in the match window are 1.1 and 2.4 Example 3 Negative input average events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0.6 if the event file size values in the match window are -1.1, 1.1, 0.0 and 2.4 Example 4 0 returns 0 events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0 if the event file size values in the match window is 0 Example 5 Ignoring 0 values events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size, true) // yields 394 if the event file size values in the match window are 0, 0, 0 and 394 window.first Supported in: Rules window.first(values to sort by, values to return) Description This aggregation function returns a string value derived from an event with the lowest correlated int value in the match window.
- Param data types INT , STRING Return type STRING Code samples Get a string value derived from an event with the lowest correlated int value in the match window. // This rule sets the outcome $first event to the lowest correlated int value // in the 5 minute match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $first event = window.first($e.metadata.timestamp.seconds, $e.metadata.event type) // yields v1 if the events in the match window are 1, 2 and 3 and corresponding values v1, v2, and v3. window.last Supported in: Rules window.last(values to sort by, values to return) Description This aggregation function returns a string value derived from an event with the highest correlated int value in the match window.
- Param data types INT , STRING Return type STRING Code samples Get a string value derived from an event with the highest correlated int value in the match window. rule test windows last { // This rule sets the outcome $last event to the highest correlated int value // in the 5 minute match window. meta: events: $e.principal.user.userid = $userid match: $userid over 5m outcome: $last event = window.last($e.metadata.event timestamp.seconds, $e.metadata.vendor name) // yields v3 if the events in the match window are 1, 2 and 3 and // corresponding values v1, v2, and v3. condition: $e } window.median Supported in: Rules window.median(numeric values, should ignore zero values) Description Return the median of the input values.
- Param data types ARRAY STRINGS , STRING Return type STRING Code samples Here are some examples of how to use the function: Example 1 This example joins an array with non-null elements and a delimiter. arrays.join string(["foo", "bar"], ",") = "foo,bar" Example 2 This example joins an array with a null element and a delimiter. arrays.join string(["foo", NULL, "bar"], ",") = "foo,bar" Example 3 This example joins an array with non-null elements and no delimiter. arrays.join string(["foo", "bar"]) = "foobar" arrays.length Supported in: Rules Search arrays.length(repeatedField) Description Returns the number of repeated field elements.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Define the match section to specify the join key and the time window for the match.
- Then, use a composite rule with a long match window (for example, 24 hours) to trigger on an initial suspicious login and correlate it with any of the following detections from the same user: A user clearing their command-line history.
- These rules must always have a match section and can reference meta fields, match variables, and outcome variables from input rules.
- Use efficient methods to join detections We recommend using outcome variables, meta labels, and match variables to join detections.

### "Applied Threat Intelligence Fusion Feed overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Condition section The condition section ensures that e1 , context graph , and matched conditions exist and or match the specified condition. condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 Complete YARA-L rule At this point the rule is ready for use and should look like the following: rule fusion feed example principal process file md5 { meta: rule name = "File Hash - Applied Threat Intelligence" description = "Matches file hashes against the Applied Threat Intelligence Fusion Feed." events: // Filter graph $context graph.graph.metadata.product name = "MANDIANT FUSION IOC" $context graph.graph.metadata.vendor name = "MANDIANT FUSION IOC" $context graph.graph.metadata.entity type = "FILE" $context graph.graph.metadata.source type = "GLOBAL CONTEXT" // Do join $ioc = $context graph.graph.entity.file.md5 $ioc = $e1.principal.process.file.md5 match: $ioc over 1h outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 } ATI Fusion Feed context entity fields You can use many fields from the ATI Fusion Feed in rules.
- For example: Entity field 1 Values Entity field 2 Values metadata.threat.verdict info.source provider Mandiant Global Intel metadata.threat.verdict info.global hits count Integer metadata.threat.verdict info.source provider Mandiant Global Intel metadata.threat.verdict info.global customer count Integer metadata.threat.verdict info.source provider Mandiant Analyst Intel metadata.threat.verdict info.confidence score Integer metadata.threat.verdict info.source provider Mandiant Automated Intel metadata.threat.verdict info.confidence score Integer In the outcome section of a YARA-L rule, you can access a value designated by a specific key using the following command: $hit count = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Global Intel", $context graph.graph.metadata.threat.verdict info.global hits count, 0)) Examining entity matches in Google Security Operations helps you gain a comprehensive view of the data, revealing additional fields that can be valuable in assessing the priority and context of an indicator alert.
- The following example shows the use of flexible joins for multiple UDM fields in the event section: events: // Filter graph $mandiant.graph.metadata.product name = "MANDIANT FUSION IOC" $mandiant.graph.metadata.vendor name = "MANDIANT FUSION IOC" $mandiant.graph.metadata.entity type = "FILE" $mandiant.graph.metadata.source type = "GLOBAL CONTEXT" $mandiant.graph.entity.file.md5 = strings.coalesce($e.target.process.file.md5, $e.target.process.file.md5) OR $mandiant.graph.entity.file.md5 = strings.coalesce($e.principal.process.file.md5, $e.principal.process.file.md5) Need more help?
- This can all be done in the outcome section of the rule. outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) In the outcome section of the YARA-L rule, the confidence score is extracted using an if statement wrapped in a max function.

