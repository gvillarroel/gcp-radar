---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.924Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "strings.split"
feature_slug: "strings-split"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "strings"
  - "split"
  - "yara"
  - "function"
  - "that"
  - "splits"
  - "string"
  - "value"
---

# strings.split

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

A YARA-L function that splits a string value using a delimiter, defaulting to a comma.

## Extended Definition

A YARA-L function that splits a string value using a delimiter, defaulting to a comma.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The following custom log types already reflect the new naming convention: HUAWEI SECMASTER CUSTOM GTI THREAT FEED CUSTOM GTI IOC STREAM CUSTOM ABSOLUTE SECURE ENDPOINT CUSTOM GTI IOC CUSTOM IBM ILO CUSTOM GCP THREATINTEL CUSTOM SAP ETD CUSTOM October 30, 2025 Feature YARA-L functions The following new YARA-L functions are now generally available: strings.ends with : Takes two strings (value, suffix) and returns true if the suffix is non-empty and at end-of-value. strings.split : Splits string value using a delimiter argument (by default, a comma). window.range : Returns the range of the values input values found.
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- While the standard re.capture function stops after the first match it finds, the re.capture all() function continues through the entire string to identify every instance that matches your pattern.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The following custom log types already reflect the new naming convention: HUAWEI SECMASTER CUSTOM GTI THREAT FEED CUSTOM GTI IOC STREAM CUSTOM ABSOLUTE SECURE ENDPOINT CUSTOM GTI IOC CUSTOM IBM ILO CUSTOM GCP THREATINTEL CUSTOM SAP ETD CUSTOM October 30, 2025 Feature YARA-L functions The following new YARA-L functions are now generally available: strings.ends with : Takes two strings (value, suffix) and returns true if the suffix is non-empty and at end-of-value. strings.split : Splits string value using a delimiter argument (by default, a comma). window.range : Returns the range of the values input values found.
- September 09, 2024 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation September 06, 2024 Change Burst limits will be rolling out over the next 90 days.
- April 27, 2022 Change Chronicle now supports the following functions in Detection Engine rules: strings.concat(a, b) strings.to lower(stringText) strings.to upper(stringText) strings.base64 decode(encodedString) re.capture(stringText, regex) re.replace(stringText, replaceRegex, replacementText) timestamp.get minute(unix seconds [, time zone]) timestamp.get hour(unix seconds [, time zone]) timestamp.get day of week(unix seconds [, time zone]) timestamp.get week(unix seconds [, time zone]) timestamp.current seconds() math.abs(intExpression) For more information about these functions, see YARA-L 2.0 language syntax.
- While the standard re.capture function stops after the first match it finds, the re.capture all() function continues through the entire string to identify every instance that matches your pattern.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- The following operators are supported: <, > <=, >= =, != nocase -- supported for strings After you enter a valid UDM field and operator, add the log data value you want to search for.
- The UDM Lookup lets you quickly find a UDM field name that contains a text string in the name or that stores a specific string value.
- Note: Text value matching is used to search UDM field name strings and string field values.

