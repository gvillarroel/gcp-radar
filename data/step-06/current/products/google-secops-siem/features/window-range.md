---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.525Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "window.range"
feature_slug: "window-range"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "window"
  - "range"
  - "returns"
  - "input"
  - "values"
  - "finds"
---

# window.range

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The window.range function returns the range of the input values it finds.

## Extended Definition

The window.range function returns the range of the input values it finds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 350
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: minimum and maximum integer This example shows the minimum and maximum integer value. window.range([1, 2, 3, 4], false) = [1.000000, 4.000000] Example: minimum and maximum floating point This example shows the minimum and maximum floating point value. window.range([1.100000, 39.400000, 2.400000], false) = [1.100000, 39.400000] Example: minimum and maximum negative integer This example shows the minimum and maximum negative integer value. window.range([-1.100000, 1.100000, 0.000000, 2.400000], false) = [-1.100000, 2.400000] Example: ignored 0 value This example shows how 0 values are ignored when you set the second parameter. window.range([0, 0, 0, 394, 1], true) = [1.000000, 394.000000] window.stddev Supported in: Rules window.stddev(numeric values) Description Returns the standard deviation of input values in a match window.
- Param data types INT FLOAT STRING Return type STRING Code samples Example 1 Get mode of the values in the match window. // This rule sets the outcome $size mode to the most frequently occurring // file size in the 5 minute match window. events: $e.user.userid = $userid match: $userid over 5m outcome: $size mode = window.mode($e.file.size) // yields 1.6 if the event file size values in the match window are 1.6, 2, and 1.6 window.range Supported in: Rules Search window.range(numeric values, optional should ignore zero values) Description Returns the range of the values input values found (min, max inclusive).
- Param data types INT FLOAT , BOOL Return type ARRAY FLOATS Code samples The following code samples illustrate some of the ways you might use the window.range function.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to GMT . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts) = "2024-02-22 10:43:51" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%F %T", "America/Los Angeles") = "2024-02-22 10:43:51" Example 3 This example uses a string literal to define the timestamp format . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%Y-%m", "GMT") = "2024-02" Example 4 This example formats a unix timestamp as a string at second granularity. timestamp.get timestamp(1708598631, "SECOND", "GMT") = "2024-02-22 10:43:51" Example 5 This example formats a unix timestamp as a string at minute granularity. timestamp.get timestamp(1708598631, "MINUTE", "GMT") = "2024-02-22 10:43" Example 6 This example formats a unix timestamp as a string at hour granularity. timestamp.get timestamp(1708598631, "HOUR", "GMT") = "2024-02-22 10" Example 7 This example formats a unix timestamp as a string at day granularity. timestamp.get timestamp(1708598631, "DATE", "GMT") = "2024-02-22" Example 8 This example formats a unix timestamp as a string at week granularity. timestamp.get timestamp(1708598631, "WEEK", "GMT") = "2024-02-18" Example 9 This example formats a unix timestamp as a string at month granularity. timestamp.get timestamp(1708598631, "MONTH", "GMT") = "2024-02" Example 10 This example formats a unix timestamp as a string at year granularity. timestamp.get timestamp(1708598631, "YEAR", "GMT") = "2024" timestamp.get week Supported in: Rules Search timestamp.get week(unix seconds [, time zone]) Description This function returns an integer in the range [0, 53] representing the week of the year.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- When you adjust the time range, the UDM fields and values and Events tables update to reflect your selection.
- To change the data range, open the Date range window.
- After you adjust the time range, the Filtered events and Query events checkboxes appear, which lets you further limit the types of events displayed.
- You can also click any bar in the histogram to apply its time range as a snapshot filter and view events from that period.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- These STS IP address ranges are published in the following JSON file: IP ranges To use these STS feed source types, you may need to adjust IP access restrictions to enable STS to access your Amazon S3 and Azure storage services: Pull the latest IP ranges from the JSON file.
- For Azure Storage To update the IP access restrictions in your Azure Storage blobstore: If you restrict access to your Azure resources using an Azure Storage firewall, you must add the IP ranges used by STS workers to your list of allowed IPs.
- For Amazon S3 To update the IP access restrictions in your Amazon S3 blobstore: If your AWS project uses IP restrictions for access to storage, you must add the IP ranges used by STS workers to your list of allowed IPs.

