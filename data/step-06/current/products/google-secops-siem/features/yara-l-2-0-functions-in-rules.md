---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.594Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "YARA-L 2.0 functions in Rules"
feature_slug: "yara-l-2-0-functions-in-rules"
latest_feature_date: "2024-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/detection/default-rules"
  - "https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini"
keywords:
  - "yara"
  - "functions"
  - "rules"
  - "secops"
  - "added"
  - "use"
---

# YARA-L 2.0 functions in Rules

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Google SecOps added new YARA-L 2.0 functions for use in Rules.

## Extended Definition

Google SecOps added new YARA-L 2.0 functions for use in Rules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)
- [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini)

## Supporting Pages

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Functions Supported in: Google secops SIEM This section describes the YARA-L 2.0 functions that you can use in Rules, Search, and Dashboard queries.
- You can use these functions in the following parts of a YARA-L query: events section BOOL CLAUSE of a conditional in the outcome section arrays.concat Supported in: Rules Search arrays.concat(string array, string array) Description Returns a new string array by copying elements from original string arrays.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to GMT . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts) = "2024-02-22 10:43:51" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%F %T", "America/Los Angeles") = "2024-02-22 10:43:51" Example 3 This example uses a string literal to define the timestamp format . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%Y-%m", "GMT") = "2024-02" Example 4 This example formats a unix timestamp as a string at second granularity. timestamp.get timestamp(1708598631, "SECOND", "GMT") = "2024-02-22 10:43:51" Example 5 This example formats a unix timestamp as a string at minute granularity. timestamp.get timestamp(1708598631, "MINUTE", "GMT") = "2024-02-22 10:43" Example 6 This example formats a unix timestamp as a string at hour granularity. timestamp.get timestamp(1708598631, "HOUR", "GMT") = "2024-02-22 10" Example 7 This example formats a unix timestamp as a string at day granularity. timestamp.get timestamp(1708598631, "DATE", "GMT") = "2024-02-22" Example 8 This example formats a unix timestamp as a string at week granularity. timestamp.get timestamp(1708598631, "WEEK", "GMT") = "2024-02-18" Example 9 This example formats a unix timestamp as a string at month granularity. timestamp.get timestamp(1708598631, "MONTH", "GMT") = "2024-02" Example 10 This example formats a unix timestamp as a string at year granularity. timestamp.get timestamp(1708598631, "YEAR", "GMT") = "2024" timestamp.get week Supported in: Rules Search timestamp.get week(unix seconds [, time zone]) Description This function returns an integer in the range [0, 53] representing the week of the year.
- Notice the use of nested functions. "email@google.org" = re.replace($e.network.email.from, "com", "org") Example 2 This example uses backslash-escaped digits in the replacementText argument to reference matches to the replaceRegex pattern. "test1.com.google" = re.replace( $e.principal.hostname, // holds "test1.test2.google.com" "test2\.([a-z] )\.([a-z] )", "\\2.\\1" // \\1 holds "google", \\2 holds "com" ) Example 3 Note the following cases when dealing with empty strings and re.replace() : Using empty string as replaceRegex : // In the function call below, if $e.principal.hostname contains "name", // the result is: 1n1a1m1e1, because an empty string is found next to // every character in stringText. re.replace($e.principal.hostname, "", "1") To replace an empty string, you can use "^$" as replaceRegex : // In the function call below, if $e.principal.hostname contains the empty // string, "", the result is: "none". re.replace($e.principal.hostname, "^$", "none") sample rate Supported in: Rules optimization.sample rate(byteOrString, rateNumerator, rateDenominator) Description This function determines whether to include an event based on a deterministic sampling strategy.

### "Default detection rules \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Default detection rules Supported in: Google secops SIEM YARA-L rules language YARA-L is a detection rules language developed by Google.
- When using time periods, the Google SecOps Detection Engine only examines the discrete blocks of time you specify. rule OutcomeRuleMultiEvent { meta: author = "noone@google.com" events: $u.udm.principal.hostname = $hostname $asset context.graph.entity.hostname = $hostname $severity = $asset context.graph.entity.asset.vulnerabilities.severity match: $hostname over 5m outcome: $risk score = max( 100 + if($hostname = "my-hostname", 100, 50) + if($severity = "HIGH", 10) + if($severity = "MEDIUM", 5) + if($severity = "LOW", 1) ) $asset id list = array( if($u.principal.asset id = "", "Empty asset id", $u.principal.asset id ) ) $asset id distinct list = array distinct($u.principal.asset id) $asset id count = count($u.principal.asset id) $asset id distinct count = count distinct($u.principal.asset id) condition: $u and $asset context and $risk score > 50 and not arrays.contains($asset id list, "id 1234") } Conclusion YARA-L is a flexible detection language which enables you to examine security events and not simply just return a data query.
- Further not conditions could be added to this rule if you identify frequent false positives coming from other known file paths. rule suspicious unusual location svchost execution { meta: author = "Google Cloud Security" description = "Windows 'svchost' executed from an unusual location" yara version = "YL2.0" rule version = "1.0" events: $e1.metadata.event type = "PROCESS LAUNCH" re.regex($e1.principal.process.command line, \bsvchost(\.exe)?\b) nocase not re.regex($e1.principal.process.command line, \\Windows\\System32\\) nocase condition: $e1 } Specify more than one event variable YARA-L enables you to have more than one event variable in a rule.
- Google Security Operations sample detection rules To help accelerate your adoption of the Google SecOps Detection Engine, there is a GitHub repository with sample rules .

### "Generate a YARA-L 2.0 rule using Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate a YARA-L 2.0 rule using Gemini Supported in: Google secops SIEM On the Gemini pane, use a natural language prompt to generate a rule (for example, Create a rule to count how many DNS responses were truncated per principal asset host. ), and then click Enter .
- For example, using the previous rule prompt, Gemini could generate the following rule: rule gemini rule { meta: author = "Gemini in Google SecOps" description = "Prompt: Create a rule to count how many DNS responses were truncated per principal asset host." events: $e.metadata.event type = "NETWORK DNS" $e.network.dns.response = true $e.network.dns.truncated = true $ph principal asset hostname = $e.principal.asset.hostname match: $ph principal asset hostname over 1h outcome: $event count = count($e.metadata.id) condition: $e } To activate the rule, click Save New Rule .
- Click Open in rule editor to view and modify the new rule in the Rules Editor.
- Get answers from Community members and Google SecOps professionals.

