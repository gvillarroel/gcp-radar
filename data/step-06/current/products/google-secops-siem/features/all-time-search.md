---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.506Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "All-time search"
feature_slug: "all-time-search"
latest_feature_date: "2026-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "all"
  - "time"
  - "search"
  - "users"
  - "can"
  - "across"
  - "full"
  - "retention"
---

# All-time search

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Users can search across the full retention period by selecting All Time in the Search editor time picker; Users can run searches over the full retention period by selecting All Time.

## Extended Definition

Users can search across the full retention period by selecting All Time in the Search editor time picker; Users can run searches over the full retention period by selecting All Time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- Perform all-time searches You can run searches over your entire retention period.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Real-time insights from Gemini AI enhances threat detection and streamlines security operations, empowering organizations to shift from reactive to preemptive security and stay two steps ahead of increasingly sophisticated attackers The key components of Google Unified Security are: Modern Security Operations : Detect, investigate, and respond to threats at Google speed and scale Threat intelligence and exposure management : Know who is targeting you and where you are exposed.
- SIEM Log Searching and Investigation : During a CDIR investigation, or on an ad-hoc basis, analysts can use either natural language syntax, Yara-L syntax, or raw log searching to surface information in various logs ingested into Google SecOps related to cloud infrastructure and services.
- Enable Secure AI Adoption from Creation to Consumption Google Cloud's AI Protection is a comprehensive set of capabilities integrated directly into Security Command Center Enterprise (SCC-E), designed to help you proactively manage the unique risks associated across the AI lifecycle.
- Google SecOps provides Cloud Detection Investigation and Response (CDIR), Case Management, SIEM log searching and investigation, Cloud Asset Inventory collection for Entity Graph Enrichment, and the ability to automate common SOC workflows using the SOAR component of Google SecOps.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to GMT . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts) = "2024-02-22 10:43:51" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%F %T", "America/Los Angeles") = "2024-02-22 10:43:51" Example 3 This example uses a string literal to define the timestamp format . $ts = $e.metadata.collected timestamp.seconds timestamp.get timestamp($ts, "%Y-%m", "GMT") = "2024-02" Example 4 This example formats a unix timestamp as a string at second granularity. timestamp.get timestamp(1708598631, "SECOND", "GMT") = "2024-02-22 10:43:51" Example 5 This example formats a unix timestamp as a string at minute granularity. timestamp.get timestamp(1708598631, "MINUTE", "GMT") = "2024-02-22 10:43" Example 6 This example formats a unix timestamp as a string at hour granularity. timestamp.get timestamp(1708598631, "HOUR", "GMT") = "2024-02-22 10" Example 7 This example formats a unix timestamp as a string at day granularity. timestamp.get timestamp(1708598631, "DATE", "GMT") = "2024-02-22" Example 8 This example formats a unix timestamp as a string at week granularity. timestamp.get timestamp(1708598631, "WEEK", "GMT") = "2024-02-18" Example 9 This example formats a unix timestamp as a string at month granularity. timestamp.get timestamp(1708598631, "MONTH", "GMT") = "2024-02" Example 10 This example formats a unix timestamp as a string at year granularity. timestamp.get timestamp(1708598631, "YEAR", "GMT") = "2024" timestamp.get week Supported in: Rules Search timestamp.get week(unix seconds [, time zone]) Description This function returns an integer in the range [0, 53] representing the week of the year.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type INT Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts) = 6 Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get day of week($ts, "America/Los Angeles") = 6 timestamp.get timestamp Supported in: Rules Search timestamp.get timestamp(unix seconds, optional timestamp format/time granularity, optional timezone) Description This function returns a string in the format YYYY-MM-DD , representing the day a timestamp is in. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. timestamp format is optional and is a string representing the format for the timestamp.
- Here are examples of valid time zone specifiers, which you can pass as the second argument to time extraction functions: "America/Los Angeles", or "-08:00". ("PST" is not supported) "America/New York", or "-05:00". ("EST" is not supported) "Europe/London" "UTC" "GMT" Param data types INT , STRING Return type STRING Code samples Example 1 In this example, the time zone argument is omitted, so it defaults to "GMT". $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts) = "2024-02-19" Example 2 This example uses a string literal to define the time zone . $ts = $e.metadata.collected timestamp.seconds timestamp.get date($ts, "America/Los Angeles") = "2024-02-20" timestamp.get minute Supported in: Rules Search timestamp.get minute(unix seconds [, time zone]) Description This function returns an integer in the range [0, 59] representing the minute. unix seconds is an integer representing the number of seconds past Unix epoch, such as $e.metadata.event timestamp.seconds , or a placeholder containing that value. time zone is optional and is a string representing a time zone.
- Equivalent to: hash.fingerprint2011(byteOrString) % rateDenominator < rateNumerator Param data types byteOrString: Expression that evaluates to either a BYTE or STRING . rateNumerator: 'INT' rateDenominator: 'INT' Return type BOOL Code sample events: $e.metadata.event type = "NETWORK CONNECTION" $asset id = $e.principal.asset.asset id optimization.sample rate($e.metadata.id, 1, 5) // Only 1 out of every 5 events match: $asset id over 1h outcome: $event count = count distinct($e.metadata.id) // estimate the usage by multiplying by the inverse of the sample rate $usage past hour = sum(5.0 $e.network.sent bytes) condition: // Requiring a certain number of events after sampling avoids bias (e.g. a // device with just 1 connection will still show up 20% of the time and // if we multiply that traffic by 5, we'll get an incorrect estimate) $e and ($usage past hour > 1000000000) and $event count >= 100 strings.base64 decode Supported in: Rules Search strings.base64 decode(encodedString) Description Returns a string containing the base64 decoded version of the encoded string.

