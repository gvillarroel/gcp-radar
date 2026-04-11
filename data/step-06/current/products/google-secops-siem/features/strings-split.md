---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.344Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "strings.split"
feature_slug: "strings-split"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "strings"
  - "split"
  - "the"
  - "function"
  - "splits"
  - "string"
  - "using"
  - "delimiter"
---

# strings.split

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

The strings.split function splits a string using a delimiter, with a comma as the default.

## Extended Definition

The strings.split function splits a string using a delimiter, with a comma as the default.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The following custom log types already reflect the new naming convention: HUAWEI SECMASTER CUSTOM GTI THREAT FEED CUSTOM GTI IOC STREAM CUSTOM ABSOLUTE SECURE ENDPOINT CUSTOM GTI IOC CUSTOM IBM ILO CUSTOM GCP THREATINTEL CUSTOM SAP ETD CUSTOM October 30, 2025 Feature YARA-L functions The following new YARA-L functions are now generally available: strings.ends with : Takes two strings (value, suffix) and returns true if the suffix is non-empty and at end-of-value. strings.split : Splits string value using a delimiter argument (by default, a comma). window.range : Returns the range of the values input values found.
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- While the standard re.capture function stops after the first match it finds, the re.capture all() function continues through the entire string to identify every instance that matches your pattern.
- Use the re.capture all() function to extract every non-overlapping match of a regular expression from a string.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The following custom log types already reflect the new naming convention: HUAWEI SECMASTER CUSTOM GTI THREAT FEED CUSTOM GTI IOC STREAM CUSTOM ABSOLUTE SECURE ENDPOINT CUSTOM GTI IOC CUSTOM IBM ILO CUSTOM GCP THREATINTEL CUSTOM SAP ETD CUSTOM October 30, 2025 Feature YARA-L functions The following new YARA-L functions are now generally available: strings.ends with : Takes two strings (value, suffix) and returns true if the suffix is non-empty and at end-of-value. strings.split : Splits string value using a delimiter argument (by default, a comma). window.range : Returns the range of the values input values found.
- September 09, 2024 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation September 06, 2024 Change Burst limits will be rolling out over the next 90 days.
- April 27, 2022 Change Chronicle now supports the following functions in Detection Engine rules: strings.concat(a, b) strings.to lower(stringText) strings.to upper(stringText) strings.base64 decode(encodedString) re.capture(stringText, regex) re.replace(stringText, replaceRegex, replacementText) timestamp.get minute(unix seconds [, time zone]) timestamp.get hour(unix seconds [, time zone]) timestamp.get day of week(unix seconds [, time zone]) timestamp.get week(unix seconds [, time zone]) timestamp.current seconds() math.abs(intExpression) For more information about these functions, see YARA-L 2.0 language syntax.
- While the standard re.capture function stops after the first match it finds, the re.capture all() function continues through the entire string to identify every instance that matches your pattern.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Optional: Specify values for the following input parameters: Split delimiter : the delimiter that is used to separate log lines.
- Optional: Specify values for the following input parameters: Split delimiter : the delimiter that is used to separate log lines.
- Optional: Specify values for the following input parameters: Split delimiter : the delimiter that is used to separate log lines.
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- For example: metadata.product name = "Google Cloud VPC Flow Logs" Case-insensitive strings : Use the nocase operator to match any combination of uppercase and lowercase characters in a string.

