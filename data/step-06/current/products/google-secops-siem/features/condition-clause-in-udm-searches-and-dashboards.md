---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.539Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Condition clause in UDM searches and dashboards"
feature_slug: "condition-clause-in-udm-searches-and-dashboards"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics"
keywords:
  - "condition"
  - "clause"
  - "udm"
  - "searches"
  - "dashboards"
  - "adds"
  - "filtering"
  - "outcome"
---

# Condition clause in UDM searches and dashboards

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Adds a condition clause for filtering outcome aggregates in UDM searches and dashboards.

## Extended Definition

Adds a condition clause for filtering outcome aggregates in UDM searches and dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).
- Tip: Because the number of outcome variables is limited to 20, we recommend establishing a common taxonomy of outcome variables (such as hostname , ip address , user , and file bytes ) to reuse consistently across a wide range of rules.
- The rule then searches raw Endpoint Detection and Response (EDR) logs (the events ) from the same workload within a one-minute window, looking for command-line operations that contained the same malicious domain.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- You can use these functions in the following parts of a YARA-L query: events section BOOL CLAUSE of a conditional in the outcome section arrays.concat Supported in: Rules Search arrays.concat(string array, string array) Description Returns a new string array by copying elements from original string arrays.
- Param data types INT FLOAT , BOOL Return type FLOAT Code samples Example 1 This example returns the median when the input values aren't zero. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 2 if the file sizes in the match window are [1, 2, 3] condition: $e } Example 2 This example returns the median when the input includes some zero values that shouldn't be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 3 This example returns the median when the input includes some zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size, true) // returns 2 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 4 This example returns the median when the input includes all zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 0 if the file sizes in the match window are [0,0] condition: $e } Example 5 This example shows that, when there are multiple medians, only one median is returned. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [1, 2, 3, 4] condition: $e } window.mode Supported in: Rules window.mode(values) Description Return the mode of the input values.
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example returns the standard deviation of integers in a match window. // This rule creates a detection when the file size stddev in 5 minutes for a user is over a threshold. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 4.0 if the event file size values in the match window are [10, 14, 18]. condition: $e and #p1 > 2 Example 2 This example returns the standard deviation of floats in a match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 4.488686 if the event file size values in the match window are [10.00, 14.80, 18.97]. condition: $e and #p1 > 2 Example 3 This example returns the standard deviation in a match window that contains negative numbers. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 48.644972 if the event file size values in the match window are [-1, -56, -98]. condition: $e and #p1 > 2 Example 4 This example returns with zero standard deviation when all values in the match window are the same. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 0.000000 if the event file size values in the match window are [1, 1, 1]. condition: $e and #p1 > 2 Example 5 This example returns the standard deviation of a match window containing positive and negative numbers. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.stddev($e.file.size) // yields 1.000000 if the event file size values in the match window are [1, 0, -1]. condition: $e and #p1 > 10 window.variance Supported in: Rules window.variance(values) Description This function returns the specified variance of the input values.
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example returns the variance of all integers. // This rule creates a detection when the file size variance in 5 minutes for a user is over a threshold. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 16 if the event file size values in the match window are [10, 14, 18]. condition: $e and #p1 > 10 Example 2 This example returns the variance of all floats. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 20.148300 if the event file size values in the match window are [10.00, 14.80, 18.97]. condition: $e and #p1 > 10 Example 3 This example returns the variance of negative numbers. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 2366.333333 if the event file size values in the match window are [-1, -56, -98]. condition: $e and #p1 > 10 Example 4 This example returns a small variance value. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 0.000000 if the event file size values in the match window are [0.000000, 0.000000, 0.000100]. condition: $e and #p1 > 10 Example 5 This example returns a zero variance. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 0.000000 if the event file size values in the match window are [1, 1, 1]. condition: $e and #p1 > 10 Example 6 This example returns the variance of positive and negative numbers. events: $e.user.userid = $userid match: $userid over 5m outcome: $p1 = window.variance($e.file.size) // yields 1.000000 if the event file size values in the match window are [1, 0, -1]. condition: $e and #p1 > 10 Need more help?

### "Overview of context-aware analytics \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Invalid. $host over 3h after $e1 condition: $e1 and $e2 } Login example using outcome section The following example uses the outcome section to calculate a risk score for the detection. rule Detection { meta: events: $auth.metadata.event type = "USER LOGIN" $auth.metadata.vendor name = "Acme" $auth.metadata.product name = "Acme SSO" $auth.target.user.userid = $user $auth.metadata.event timestamp.seconds > $context.graph.entity.user.termination date.seconds $context.graph.metadata.vendor name = "Microsoft" $context.graph.metadata.product name = "Azure Active Directory" $context.graph.metadata.entity type = "USER" $context.graph.entity.user.userid = $user $context.graph.entity.user.termination date.seconds > 0 match: $user over 15m outcome: $risk score = max( if ( $auth.metadata.event type = "USER LOGIN", 50) + if ( $context.graph.entity.user.title = "Remote" nocase or $context.graph.entity.user.title = "Temp" nocase or $context.graph.entity.user.title = "Vendor" nocase, 40) + if ( $context.graph.entity.user.title = "Legal" nocase, 10) ) condition: $auth and $context } Suspicious process launch example The following example evaluates UDM event process data against IOC context data stored as an entity context. rule ProcessLaunch { meta: events: $ioc.graph.metadata.vendor name = "ACME" $ioc.graph.metadata.product name = "IOCs" $ioc.graph.metadata.entity type = "FILE" $ioc.graph.entity.file.sha256 = $hash $process.metadata.event type = "PROCESS LAUNCH" $process.principal.hostname = $hostname ( not $process.target.process.file.sha256 = "" and $process.target.process.file.sha256 = $hash ) match: $hash over 15m condition: $ioc and $process } Additional qualifiers for entity context To create an event variable that uses an entity context, you must provide a <source> after the event name.
- It is looking for times when someone with administrator privilege attempted to sign in to or log out of the system. rule LoginLogout { meta: events: ($log inout.metadata.event type = "USER LOGIN" or $log inout.metadata.event type = "USER LOGOUT") $log inout.principal.user.user display name = $user $context.graph.entity.user.user display name = $user $context.graph.entity.resource.attribute.roles.type = "ADMINISTRATOR" match: $user over 2m condition: $log inout and $context } Sliding window example The following sliding window example is valid. rule Detection { meta: events: $e1.graph.entity.hostname = $host $e2.udm.principal.hostname = $host match: // Using e2 (a UDM event) as a pivot. $host over 3h after $e2 condition: $e1 and $e2 } Invalid sliding window example The following sliding window example is invalid.
- Here's an example that illustrates this case. rule ExampleOutcomeRule { ... match: $hostname over <some window> outcome: $risk score = <some logic here> ... } This rule results in the following matches: Detection 1: hostname: test-hostname time window: [t1, t2] risk score: 10 Detection 2: hostname: test-hostname time window: [t1, t2] risk score: 73 Because the match variables and the time window are the same for Detection 1 and Detection 2, these are deduplicated and you will see only one detection, even though the outcome variable, risk score, is different.
- Thus, if there are two different detections with the same values for the match variables and time window, but with different values for outcome variables, these will be deduplicated and you will see only one detection.

