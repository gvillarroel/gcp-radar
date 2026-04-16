---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.575Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Cloud Functions Enumeration"
feature_slug: "cloud-functions-enumeration"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category"
keywords:
  - "functions"
  - "enumeration"
  - "hacktool"
  - "rule"
  - "detects"
---

# Cloud Functions Enumeration

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

This Cloud Hacktool rule detects enumeration of Google Cloud Functions.

## Extended Definition

This Cloud Hacktool rule detects enumeration of Google Cloud Functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Serverless Threats : Detects activity associated with potential compromise or abuse of Serverless resources in Google Cloud, including Cloud Run and Cloud Run functions.
- Azure - Hacktools : Detects the use of hacking tools in an Azure environment, , including Tor and VPN anonymizers, scanners, and red teaming toolkits.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to GMT . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts) = "2024-02-22 10:43:51" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%F %T", "America/Los Angeles") = "2024-02-22 10:43:51" Example 3 This example uses a string literal to define the timestamp format . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%Y-%m", "GMT") = "2024-02" Example 4 This example formats a unix timestamp as a string at second granularity. timestamp.get timestamp(1708598631, "SECOND", "GMT") = "2024-02-22 10:43:51" Example 5 This example formats a unix timestamp as a string at minute granularity. timestamp.get timestamp(1708598631, "MINUTE", "GMT") = "2024-02-22 10:43" Example 6 This example formats a unix timestamp as a string at hour granularity. timestamp.get timestamp(1708598631, "HOUR", "GMT") = "2024-02-22 10" Example 7 This example formats a unix timestamp as a string at day granularity. timestamp.get timestamp(1708598631, "DATE", "GMT") = "2024-02-22" Example 8 This example formats a unix timestamp as a string at week granularity. timestamp.get timestamp(1708598631, "WEEK", "GMT") = "2024-02-18" Example 9 This example formats a unix timestamp as a string at month granularity. timestamp.get timestamp(1708598631, "MONTH", "GMT") = "2024-02" Example 10 This example formats a unix timestamp as a string at year granularity. timestamp.get timestamp(1708598631, "YEAR", "GMT") = "2024" timestamp.get week Supported in: Rules Search timestamp.get week(unix seconds [, time zone]) Description This function returns an integer in the range [0, 53] representing the week of the year.
- Notice the use of nested functions. "email@google.org" = re.replace($e.network.email.from, "com", "org") Example 2 This example uses backslash-escaped digits in the replacementText argument to reference matches to the replaceRegex pattern. "test1.com.google" = re.replace( $e.principal.hostname, // holds "test1.test2.google.com" "test2\.([a-z] )\.([a-z] )", "\\2.\\1" // \\1 holds "google", \\2 holds "com" ) Example 3 Note the following cases when dealing with empty strings and re.replace() : Using empty string as replaceRegex : // In the function call below, if $e.principal.hostname contains "name", // the result is: 1n1a1m1e1, because an empty string is found next to // every character in stringText. re.replace($e.principal.hostname, "", "1") To replace an empty string, you can use "^$" as replaceRegex : // In the function call below, if $e.principal.hostname contains the empty // string, "", the result is: "none". re.replace($e.principal.hostname, "^$", "none") sample rate Supported in: Rules optimization.sample rate(byteOrString, rateNumerator, rateDenominator) Description This function determines whether to include an event based on a deterministic sampling strategy.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type INT Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts) = 6 Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts, "America/Los Angeles") = 6 timestamp.get timestamp Supported in: Rules Search timestamp.get timestamp(unix seconds, optional timestamp format/time granularity, optional timezone) Description This function returns a string in the format YYYY-MM-DD , representing the day a timestamp is in. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. timestamp format is optional and is a string representing the format for the timestamp.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts) = "2024-02-19" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts, "America/Los Angeles") = "2024-02-20" timestamp.get minute Supported in: Rules Search timestamp.get minute(unix seconds [, time zone]) Description This function returns an integer in the range [0, 59] representing the minute. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. time zone is optional and is a string representing a time zone.

### "Overview of composite rules category \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Broad: detects potentially malicious or anomalous behavior, but may produce more false positives due to the general nature of the rule.
- The following categories outline the most important log sources required for the curated composite content to function effectively: Endpoint composite rule log sources Linux threats MacOS threats Windows threats Google Cloud composite rule log sources Google Cloud AWS Azure Office365 Okta Google Cloud and endpoint rule log sources Applied Threat Intelligence (ATI) Chrome Enterprise Threats Risk Analytics for UEBA For a complete list of the available curated detections, see Use curated detections .
- Describe rule sets The Composite Rules category includes the following rule sets: Endpoint composite rules Cloud composite rules ATI composite rules Understand endpoint composite rules These rules correlate findings from multiple detection rules that relate to the same endpoint over a defined time period.
- Understand ATI composite rules ATI composite rules detect multiple unique Applied Threat Intelligence detections from the same campaign, malware variant, or threat actor to provide additional environmental context of any potential threat.

