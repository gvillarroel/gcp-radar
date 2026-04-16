---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.540Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "earliest and latest timestamps"
feature_slug: "earliest-and-latest-timestamps"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "earliest"
  - "timestamps"
  - "adds"
  - "extracting"
  - "time"
  - "range"
  - "aggregated"
---

# earliest and latest timestamps

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Adds earliest and latest timestamps for extracting the time range of aggregated data.

## Extended Definition

Adds earliest and latest timestamps for extracting the time range of aggregated data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- After you adjust the time range, the Filtered events and Query events checkboxes appear, which lets you further limit the types of events displayed.
- You can also click any bar in the histogram to apply its time range as a snapshot filter and view events from that period.
- When you adjust the time range, the UDM fields and values and Events tables update to reflect your selection.
- Time range adjustment Move the slider controls to adjust the chart's time range.

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- When reviewing a detection, carefully check the UDM event and ingestion timestamps.
- For details, see Modifying log body timestamps using BindPlane .
- Use the following techniques to reduce delays where possible: For latency-sensitive rules, use the most frequent run options: Increase the rule frequency : To reduce delays, configure the highest possible frequency based on the rule type and match window: For single-event rules: Use Near-real time .
- Entity context graph processing The system generates and adds entity context graph (ECG) information to log data to provide context, for example, indicators of compromise (IOCs) or asset context data.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to GMT . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts) = "2024-02-22 10:43:51" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%F %T", "America/Los Angeles") = "2024-02-22 10:43:51" Example 3 This example uses a string literal to define the timestamp format . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%Y-%m", "GMT") = "2024-02" Example 4 This example formats a unix timestamp as a string at second granularity. timestamp.get timestamp(1708598631, "SECOND", "GMT") = "2024-02-22 10:43:51" Example 5 This example formats a unix timestamp as a string at minute granularity. timestamp.get timestamp(1708598631, "MINUTE", "GMT") = "2024-02-22 10:43" Example 6 This example formats a unix timestamp as a string at hour granularity. timestamp.get timestamp(1708598631, "HOUR", "GMT") = "2024-02-22 10" Example 7 This example formats a unix timestamp as a string at day granularity. timestamp.get timestamp(1708598631, "DATE", "GMT") = "2024-02-22" Example 8 This example formats a unix timestamp as a string at week granularity. timestamp.get timestamp(1708598631, "WEEK", "GMT") = "2024-02-18" Example 9 This example formats a unix timestamp as a string at month granularity. timestamp.get timestamp(1708598631, "MONTH", "GMT") = "2024-02" Example 10 This example formats a unix timestamp as a string at year granularity. timestamp.get timestamp(1708598631, "YEAR", "GMT") = "2024" timestamp.get week Supported in: Rules Search timestamp.get week(unix seconds [, time zone]) Description This function returns an integer in the range [0, 53] representing the week of the year.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts) = "2024-02-19" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts, "America/Los Angeles") = "2024-02-20" timestamp.get minute Supported in: Rules Search timestamp.get minute(unix seconds [, time zone]) Description This function returns an integer in the range [0, 59] representing the minute. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. time zone is optional and is a string representing a time zone.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type INT Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get hour($ts) = 15 Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get hour($ts, "America/Los Angeles") = 15 timestamp.get hour Supported in: Rules Search timestamp.get hour(unix seconds [, time zone]) Description This function returns an integer in the range [0, 23] representing the hour. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. time zone is optional and is a string representing a time zone.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type INT Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get hour($ts) = 15 Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get hour($ts, "America/Los Angeles") = 15 timestamp.get day of week Supported in: Rules Search timestamp.get day of week(unix seconds [, time zone]) Description This function returns an integer in the range [1, 7] representing the day of week starting with Sunday.

