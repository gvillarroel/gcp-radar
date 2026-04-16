---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.765Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Earliest and latest timestamps"
feature_slug: "earliest-and-latest-timestamps"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "earliest"
  - "timestamps"
  - "let"
  - "users"
  - "extract"
  - "time"
  - "range"
  - "aggregated"
---

# Earliest and latest timestamps

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The earliest and latest timestamps let users extract the time range of aggregated data with microsecond precision.

## Extended Definition

The earliest and latest timestamps let users extract the time range of aggregated data with microsecond precision.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- After you adjust the time range, the Filtered events and Query events checkboxes appear, which lets you further limit the types of events displayed.
- You can also click any bar in the histogram to apply its time range as a snapshot filter and view events from that period.
- When you adjust the time range, the UDM fields and values and Events tables update to reflect your selection.
- Time range adjustment Move the slider controls to adjust the chart's time range.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-3`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to GMT . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts) = "2024-02-22 10:43:51" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%F %T", "America/Los Angeles") = "2024-02-22 10:43:51" Example 3 This example uses a string literal to define the timestamp format . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%Y-%m", "GMT") = "2024-02" Example 4 This example formats a unix timestamp as a string at second granularity. timestamp.get timestamp(1708598631, "SECOND", "GMT") = "2024-02-22 10:43:51" Example 5 This example formats a unix timestamp as a string at minute granularity. timestamp.get timestamp(1708598631, "MINUTE", "GMT") = "2024-02-22 10:43" Example 6 This example formats a unix timestamp as a string at hour granularity. timestamp.get timestamp(1708598631, "HOUR", "GMT") = "2024-02-22 10" Example 7 This example formats a unix timestamp as a string at day granularity. timestamp.get timestamp(1708598631, "DATE", "GMT") = "2024-02-22" Example 8 This example formats a unix timestamp as a string at week granularity. timestamp.get timestamp(1708598631, "WEEK", "GMT") = "2024-02-18" Example 9 This example formats a unix timestamp as a string at month granularity. timestamp.get timestamp(1708598631, "MONTH", "GMT") = "2024-02" Example 10 This example formats a unix timestamp as a string at year granularity. timestamp.get timestamp(1708598631, "YEAR", "GMT") = "2024" timestamp.get week Supported in: Rules Search timestamp.get week(unix seconds [, time zone]) Description This function returns an integer in the range [0, 53] representing the week of the year.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts) = "2024-02-19" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts, "America/Los Angeles") = "2024-02-20" timestamp.get minute Supported in: Rules Search timestamp.get minute(unix seconds [, time zone]) Description This function returns an integer in the range [0, 59] representing the minute. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. time zone is optional and is a string representing a time zone.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type INT Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get hour($ts) = 15 Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get hour($ts, "America/Los Angeles") = 15 timestamp.get hour Supported in: Rules Search timestamp.get hour(unix seconds [, time zone]) Description This function returns an integer in the range [0, 23] representing the hour. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. time zone is optional and is a string representing a time zone.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type INT Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get hour($ts) = 15 Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get hour($ts, "America/Los Angeles") = 15 timestamp.get day of week Supported in: Rules Search timestamp.get day of week(unix seconds [, time zone]) Description This function returns an integer in the range [1, 7] representing the day of week starting with Sunday.

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- The table is followed by graphs of all Google Cloud services with their associated data that show their ingestion trend over the following time intervals: Last 24 hours Last 30 days Last six months Context Aware Detections - Risk dashboard The Context Aware Detections - Risk dashboard provides insight into the current threat status of assets and users in your enterprise.
- Sign Ins by Status Over Time : displays the split of successful and failed sign-ins over the time range.
- Each default dashboard includes a time range filter that lets you view data for a specific time period.
- For example, you can use the filter to view data for the past week or over a specific time range.

