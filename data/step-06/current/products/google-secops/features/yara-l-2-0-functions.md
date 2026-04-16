---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.830Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "YARA-L 2.0 functions"
feature_slug: "yara-l-2-0-functions"
latest_feature_date: "2025-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/yaral-functions-native-dashboards"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "yara"
  - "functions"
  - "secops"
  - "added"
  - "use"
  - "rules"
  - "search"
---

# YARA-L 2.0 functions

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Google SecOps added new YARA-L 2.0 functions for use in Rules and Search.

## Extended Definition

Google SecOps added new YARA-L 2.0 functions for use in Rules and Search.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/yaral-functions-native-dashboards](https://docs.cloud.google.com/chronicle/docs/reference/yaral-functions-native-dashboards)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### YARA-L 2.0 functions for dashboards | Google Security Operations | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/yaral-functions-native-dashboards](https://docs.cloud.google.com/chronicle/docs/reference/yaral-functions-native-dashboards)
- Source ID: `feature-recovery-http`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- YARA-L 2.0 functions for dashboards Supported in: Google secops SIEM This document explains how to use the following functions in queries to create charts, alongside the YARA-L 2.0 functions supported by Google Security Operations in the Detection Engine.
- In addition to the YARA-L 2.0 functions that Google SecOps supports in the Detection Engine, you can use the following functions in queries to build charts.
- YARA-L 2.0 functions for dashboards | Google Security Operations | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Google Security Operations Start free Technology areas More Cross-product tools More Console AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Google Security Operations Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Note: You can use these functions in search queries to build dashboards, but may not be supported in detections.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-3`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Functions Supported in: Google secops SIEM This section describes the YARA-L 2.0 functions that you can use in Rules, Search, and Dashboard queries.
- You can use these functions in the following parts of a YARA-L query: events section BOOL CLAUSE of a conditional in the outcome section arrays.concat Supported in: Rules Search arrays.concat(string array, string array) Description Returns a new string array by copying elements from original string arrays.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to GMT . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts) = "2024-02-22 10:43:51" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%F %T", "America/Los Angeles") = "2024-02-22 10:43:51" Example 3 This example uses a string literal to define the timestamp format . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%Y-%m", "GMT") = "2024-02" Example 4 This example formats a unix timestamp as a string at second granularity. timestamp.get timestamp(1708598631, "SECOND", "GMT") = "2024-02-22 10:43:51" Example 5 This example formats a unix timestamp as a string at minute granularity. timestamp.get timestamp(1708598631, "MINUTE", "GMT") = "2024-02-22 10:43" Example 6 This example formats a unix timestamp as a string at hour granularity. timestamp.get timestamp(1708598631, "HOUR", "GMT") = "2024-02-22 10" Example 7 This example formats a unix timestamp as a string at day granularity. timestamp.get timestamp(1708598631, "DATE", "GMT") = "2024-02-22" Example 8 This example formats a unix timestamp as a string at week granularity. timestamp.get timestamp(1708598631, "WEEK", "GMT") = "2024-02-18" Example 9 This example formats a unix timestamp as a string at month granularity. timestamp.get timestamp(1708598631, "MONTH", "GMT") = "2024-02" Example 10 This example formats a unix timestamp as a string at year granularity. timestamp.get timestamp(1708598631, "YEAR", "GMT") = "2024" timestamp.get week Supported in: Rules Search timestamp.get week(unix seconds [, time zone]) Description This function returns an integer in the range [0, 53] representing the week of the year.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type INT Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts) = 6 Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts, "America/Los Angeles") = 6 timestamp.get timestamp Supported in: Rules Search timestamp.get timestamp(unix seconds, optional timestamp format/time granularity, optional timezone) Description This function returns a string in the format YYYY-MM-DD , representing the day a timestamp is in. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. timestamp format is optional and is a string representing the format for the timestamp.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- These alerts don't surface within search unless they are processed by the Google SecOps Detection Engine as a YARA-L rule.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- For example: Optimized results view Timelines chart Aggregations window Optimized results view To maximize the space available for viewing search results, Google SecOps provides an event-focused view.

