---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.909Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "re.capture_all function"
feature_slug: "re-capture-all-function"
latest_feature_date: "2026-02-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
keywords:
  - "re"
  - "capture"
  - "all"
  - "function"
  - "the"
  - "yara"
  - "extracts"
  - "every"
---

# re.capture_all function

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

The YARA-L 2.0 re.capture_all function extracts every non-overlapping regular expression match from a string.

## Extended Definition

The YARA-L 2.0 re.capture_all function extracts every non-overlapping regular expression match from a string.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- While the standard re.capture function stops after the first match it finds, the re.capture all() function continues through the entire string to identify every instance that matches your pattern.
- February 04, 2026 Feature The re.capture all function is now available The new re.capture all YARA-L 2.0 function is available in Rules, Search, and Dashboards.
- Use the re.capture all() function to extract every non-overlapping match of a regular expression from a string.
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- While the standard re.capture function stops after the first match it finds, the re.capture all() function continues through the entire string to identify every instance that matches your pattern.
- February 04, 2026 Feature The re.capture all function is now available The new re.capture all YARA-L 2.0 function is available in Rules, Search, and Dashboards.
- Use the re.capture all() function to extract every non-overlapping match of a regular expression from a string.
- The following custom log types already reflect the new naming convention: HUAWEI SECMASTER CUSTOM GTI THREAT FEED CUSTOM GTI IOC STREAM CUSTOM ABSOLUTE SECURE ENDPOINT CUSTOM GTI IOC CUSTOM IBM ILO CUSTOM GCP THREATINTEL CUSTOM SAP ETD CUSTOM October 30, 2025 Feature YARA-L functions The following new YARA-L functions are now generally available: strings.ends with : Takes two strings (value, suffix) and returns true if the suffix is non-empty and at end-of-value. strings.split : Splits string value using a delimiter argument (by default, a comma). window.range : Returns the range of the values input values found.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- For more information see Overview of the YARA-L 2.0 language . labels fields for UDM nouns November 29, 2023 November 29, 2024 On or after November 29, 2023, the following Google Security Operations labels fields for UDM nouns are deprecated: about.labels , intermediary.labels , observer.labels , principal.labels , src.labels , security result.about.labels , and target.labels .
- Google Security Operations's YARA-L detection engine is the preferred option for detection alerts because it offers enhanced transparency in detection logic and robust tuning capabilities.
- After a service, feature, or product is officially deprecated, it continues to be available for at least the period of time defined in the Terms of Service.
- Reference lists June 2026 September 2026 The reference list functionality is being retired from the Google SecOps platform.

