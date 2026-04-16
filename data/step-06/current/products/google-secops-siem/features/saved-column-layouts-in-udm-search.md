---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.675Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Saved column layouts in UDM Search"
feature_slug: "saved-column-layouts-in-udm-search"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/downloading-events"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "saved"
  - "column"
  - "layouts"
  - "udm"
  - "search"
  - "can"
  - "save"
  - "load"
---

# Saved column layouts in UDM Search

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

UDM Search can save column layouts and load them later.

## Extended Definition

UDM Search can save column layouts and load them later.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/downloading-events](https://docs.cloud.google.com/chronicle/docs/detection/downloading-events)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Load a saved column set To load a saved set of columns, do the following: At the top of the Events table, click Columns to open the Column Manager .
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Retrieve a saved search To retrieve and run a saved search, do the following: In the Search manager dialog, select a saved search from the list to the left.
- Delete a saved column set To delete a saved set of columns, do the following: At the top of the Events table, click Columns to open the Column Manager .

### Download events \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/downloading-events](https://docs.cloud.google.com/chronicle/docs/detection/downloading-events)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Any samples beyond this limit are hidden on the Detections page., but they're included if you click Download All to view Unified Data Model (UDM) events associated with your detection.
- Display and download events Complete the following steps to display and download the events associated with a detection: In the navigation bar, click Detection > Rules & Detections .
- Home Documentation Security Google Security Operations Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Download events Supported in: Google secops SIEM You can display and download large numbers of the events associated with each threat detection.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to GMT . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts) = "2024-02-22 10:43:51" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%F %T", "America/Los Angeles") = "2024-02-22 10:43:51" Example 3 This example uses a string literal to define the timestamp format . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%Y-%m", "GMT") = "2024-02" Example 4 This example formats a unix timestamp as a string at second granularity. timestamp.get timestamp(1708598631, "SECOND", "GMT") = "2024-02-22 10:43:51" Example 5 This example formats a unix timestamp as a string at minute granularity. timestamp.get timestamp(1708598631, "MINUTE", "GMT") = "2024-02-22 10:43" Example 6 This example formats a unix timestamp as a string at hour granularity. timestamp.get timestamp(1708598631, "HOUR", "GMT") = "2024-02-22 10" Example 7 This example formats a unix timestamp as a string at day granularity. timestamp.get timestamp(1708598631, "DATE", "GMT") = "2024-02-22" Example 8 This example formats a unix timestamp as a string at week granularity. timestamp.get timestamp(1708598631, "WEEK", "GMT") = "2024-02-18" Example 9 This example formats a unix timestamp as a string at month granularity. timestamp.get timestamp(1708598631, "MONTH", "GMT") = "2024-02" Example 10 This example formats a unix timestamp as a string at year granularity. timestamp.get timestamp(1708598631, "YEAR", "GMT") = "2024" timestamp.get week Supported in: Rules Search timestamp.get week(unix seconds [, time zone]) Description This function returns an integer in the range [0, 53] representing the week of the year.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type INT Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts) = 6 Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts, "America/Los Angeles") = 6 timestamp.get timestamp Supported in: Rules Search timestamp.get timestamp(unix seconds, optional timestamp format/time granularity, optional timezone) Description This function returns a string in the format YYYY-MM-DD , representing the day a timestamp is in. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. timestamp format is optional and is a string representing the format for the timestamp.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts) = "2024-02-19" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts, "America/Los Angeles") = "2024-02-20" timestamp.get minute Supported in: Rules Search timestamp.get minute(unix seconds [, time zone]) Description This function returns an integer in the range [0, 59] representing the minute. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. time zone is optional and is a string representing a time zone.
- Equivalent to: hash.fingerprint2011(byteOrString) % rateDenominator < rateNumerator Param data types byteOrString: Expression that evaluates to either a BYTE or STRING . rateNumerator: 'INT' rateDenominator: 'INT' Return type BOOL Code sample events: $e.metadata.event type = "NETWORK CONNECTION" $asset id = $e.principal.asset.asset id optimization.sample rate($e.metadata.id, 1, 5) // Only 1 out of every 5 events match: $asset id over 1h outcome: $event count = count distinct($e.metadata.id) // estimate the usage by multiplying by the inverse of the sample rate $usage past hour = sum(5.0 $e.network.sent bytes) condition: // Requiring a certain number of events after sampling avoids bias (e.g. a // device with just 1 connection will still show up 20% of the time and // if we multiply that traffic by 5, we'll get an incorrect estimate) $e and ($usage past hour > 1000000000) and $event count >= 100 strings.base64 decode Supported in: Rules Search strings.base64 decode(encodedString) Description Returns a string containing the base64 decoded version of the encoded string.

