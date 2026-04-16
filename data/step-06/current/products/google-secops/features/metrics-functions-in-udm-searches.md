---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.767Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Metrics functions in UDM searches"
feature_slug: "metrics-functions-in-udm-searches"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "metrics"
  - "functions"
  - "udm"
  - "searches"
  - "can"
  - "now"
  - "used"
  - "outcome"
---

# Metrics functions in UDM searches

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Metrics functions can now be used in the outcome section of UDM searches to access aggregated historical data.

## Extended Definition

Metrics functions can now be used in the outcome section of UDM searches to access aggregated historical data.

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
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Param data types INT FLOAT Return type FLOAT Code samples Example 1 This example returns the square root of an int argument. math.sqrt(3) = 1.732051 Example 2 This example returns the square root of a negative int argument. math.sqrt(-3) = 0.000000 Example 3 This example returns the square root of zero argument. math.sqrt(0) = 0.000000 Example 4 This example returns the square root of a float argument. math.sqrt(9.223372) = 3.037000 Example 5 This example returns the square root of a negative float argument. math.sqrt(0-1.200000) = 0.000000 metrics Supported in: Rules Metrics functions can aggregate large amounts of historical data.
- You can use these functions in the following parts of a YARA-L query: events section BOOL CLAUSE of a conditional in the outcome section arrays.concat Supported in: Rules Search arrays.concat(string array, string array) Description Returns a new string array by copying elements from original string arrays.
- You can use this in your rule using metrics.functionName() in the outcome section.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to GMT . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts) = "2024-02-22 10:43:51" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%F %T", "America/Los Angeles") = "2024-02-22 10:43:51" Example 3 This example uses a string literal to define the timestamp format . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%Y-%m", "GMT") = "2024-02" Example 4 This example formats a unix timestamp as a string at second granularity. timestamp.get timestamp(1708598631, "SECOND", "GMT") = "2024-02-22 10:43:51" Example 5 This example formats a unix timestamp as a string at minute granularity. timestamp.get timestamp(1708598631, "MINUTE", "GMT") = "2024-02-22 10:43" Example 6 This example formats a unix timestamp as a string at hour granularity. timestamp.get timestamp(1708598631, "HOUR", "GMT") = "2024-02-22 10" Example 7 This example formats a unix timestamp as a string at day granularity. timestamp.get timestamp(1708598631, "DATE", "GMT") = "2024-02-22" Example 8 This example formats a unix timestamp as a string at week granularity. timestamp.get timestamp(1708598631, "WEEK", "GMT") = "2024-02-18" Example 9 This example formats a unix timestamp as a string at month granularity. timestamp.get timestamp(1708598631, "MONTH", "GMT") = "2024-02" Example 10 This example formats a unix timestamp as a string at year granularity. timestamp.get timestamp(1708598631, "YEAR", "GMT") = "2024" timestamp.get week Supported in: Rules Search timestamp.get week(unix seconds [, time zone]) Description This function returns an integer in the range [0, 53] representing the week of the year.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-3`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).
- Tip: Because the number of outcome variables is limited to 20, we recommend establishing a common taxonomy of outcome variables (such as hostname , ip address , user , and file bytes ) to reuse consistently across a wide range of rules.
- The rule then searches raw Endpoint Detection and Response (EDR) logs (the events ) from the same workload within a one-minute window, looking for command-line operations that contained the same malicious domain.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Understand suggestion ranking The editor organizes suggestions into three distinct categories to help you find fields quickly: Recently used fields : The top seven suggestions are based on fields you have used recently that match your typed field.
- Grouped fields can also be used in combination with regular UDM fields as shown in the following example: ip = "5.6.7.8" AND metadata.event type = "NETWORK CONNECTION" Grouped fields have a separate section in Aggregations .

