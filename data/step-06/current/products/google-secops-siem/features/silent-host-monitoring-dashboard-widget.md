---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.555Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Silent Host Monitoring dashboard widget"
feature_slug: "silent-host-monitoring-dashboard-widget"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "silent"
  - "host"
  - "monitoring"
  - "dashboard"
  - "widget"
  - "shows"
  - "hosts"
  - "were"
---

# Silent Host Monitoring dashboard widget

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

A dashboard widget shows hosts that were active in the last seven days but have not reported recently.

## Extended Definition

A dashboard widget shows hosts that were active in the last seven days but have not reported recently.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- A dashboard widget then shows which users are approaching a daily egress limit (for example, 10,000 bytes).
- By setting a rule to detect only and then plotting its detections in a dashboard widget, you can track trends, identify outliers, and gain a high-level audit view of the activity without being overwhelmed by individual alerts.
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- AWS CloudTrail ( AWS CLOUDTRAIL ) AWS GuardDuty ( GUARDDUTY ) AWS EC2 HOSTS ( AWS EC2 HOSTS ) AWS EC2 INSTANCES ( AWS EC2 INSTANCES ) AWS EC2 VPCS ( AWS EC2 VPCS ) AWS IAM (IAM) ( AWS IAM ) See Configure the ingestion of AWS data for information about setting up ingestion of AWS data.
- In the list of detections, check that the following rules were triggered: tst azure activity tst azure defender for cloud alerts Execute a GET API request in Microsoft Graph Explorer to trigger the test rules Perform the following steps to verify that generating sample security alerts in Azure triggers the test rules.
- In the list of detections, check that the following rules were triggered: tst azure ad user creation tst azure ad user login After you confirm that data is sent and that these rules are triggered, deactivate or deprovision the user account.
- Verify the ingestion of Azure data The Google SecOps Data Ingestion and Health dashboard lets you see information about the type, volume, and health of all data being ingested into Google SecOps using SIEM ingestion features.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Param data types STRING Return type STRING Code samples Example 1 This example shows an empty string strings.extract domain("") = "" Example 2 random string, not a URL strings.extract domain("1234") = "" Example 3 multiple backslaches strings.extract domain("\\\\") = "" Example 4 non-alphabet characters handled gracefully strings.extract domain("http://例子.卷筒纸.中国") = "卷筒纸.中国" Example 5 handling URIs strings.extract domain("mailto:?to=&subject=&body=") = "" Example 6 multiple characters before actual URL strings.extract domain(" \t !$5 ^)&dahgsdfs;http://www.google.com") = "google.com" Example 7 special characters in URI # strings.extract domain("test#@google.com") = "" Example 8 special characters in URL # strings.extract domain("https://test#@google.com") = "" Example 9 positive test case strings.extract domain("https://google.co.in") = "google.co.in" strings.extract hostname Supported in: Rules Search strings.extract hostname(string) Description Extracts the hostname from a string.
- Both principal.hostname and $e.principal.hostname are supported in Search and Dashboards.
- Param data types INT FLOAT , BOOL Return type FLOAT Code samples Example 1 This example returns the median when the input values aren't zero. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 2 if the file sizes in the match window are [1, 2, 3] condition: $e } Example 2 This example returns the median when the input includes some zero values that shouldn't be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 3 This example returns the median when the input includes some zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size, true) // returns 2 if the file sizes in the match window are [0,0, 1, 2, 3] condition: $e } Example 4 This example returns the median when the input includes all zero values which should be ignored. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 0 if the file sizes in the match window are [0,0] condition: $e } Example 5 This example shows that, when there are multiple medians, only one median is returned. rule median file size { meta: events: $e.metadata.event type = "FILE COPY" $userid = $e.principal.user.userid match: $userid over 1h outcome: $median file size = window.median($e.principal.file.size) // returns 1 if the file sizes in the match window are [1, 2, 3, 4] condition: $e } window.mode Supported in: Rules window.mode(values) Description Return the mode of the input values.
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example shows the integer average. // This rule sets the outcome $size mode to the average // file size in the 5 minute match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 2.5 if the event file size values in the match window are 1, 2, 3 and 4 Example 2 This example shows the float average. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 1.75 if the event file size values in the match window are 1.1 and 2.4 Example 3 Negative input average events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0.6 if the event file size values in the match window are -1.1, 1.1, 0.0 and 2.4 Example 4 0 returns 0 events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size) // yields 0 if the event file size values in the match window is 0 Example 5 Ignoring 0 values events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.avg($e.file.size, true) // yields 394 if the event file size values in the match window are 0, 0, 0 and 394 window.first Supported in: Rules window.first(values to sort by, values to return) Description This aggregation function returns a string value derived from an event with the lowest correlated int value in the match window.

