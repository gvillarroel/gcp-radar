---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.420Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Generate Signed URL for Modifying Cloud Function Code"
feature_slug: "generate-signed-url-for-modifying-cloud-function-code"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "generate"
  - "signed"
  - "url"
  - "for"
  - "modifying"
  - "function"
  - "code"
  - "this"
---

# Generate Signed URL for Modifying Cloud Function Code

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

This Cloud Hacktool rule detects persistence via generation of a signed URL to modify Cloud Function code.

## Extended Definition

This Cloud Hacktool rule detects persistence via generation of a signed URL to modify Cloud Function code.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Collection: Set GCP Cloud Storage Bucket to Public Discovery: Cloud Run Enumeration Discovery: CloudFunctions Enumeration of GCP Cloud Functions Discovery: CloudKMS Enumeration of GCP Cloud KMS Discovery: CloudResourceManager Resource Manager Enumeration Discovery: Compute Enumeration Discovery: GCP Cloud IAM Enumeration Discovery: Secret Manager Cloud Secrets Enumeration Discovery: Storage Cloud Storage Enumeration Exfiltration: Download Cloud Function Code Exfiltration: Export a Compute Image Instance Persistence: Generate Signed URL for Modifying Cloud Function Code Privilege Escalation: Compute Set Instance or Project Metadata to Enable OS Login Feature URL indicators are now available for matching as part of Applied Threat Intelligence.
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- This change should not remove any prior detections for customers who have enabled this rule pack and do not meet the licensing requirements but the rules themselves will now be unavailable and no new detections will generate.
- You can periodically check this page for announcements about new or updated features, bug fixes, known issues, and deprecated functionality.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Collection: Set GCP Cloud Storage Bucket to Public Discovery: Cloud Run Enumeration Discovery: CloudFunctions Enumeration of GCP Cloud Functions Discovery: CloudKMS Enumeration of GCP Cloud KMS Discovery: CloudResourceManager Resource Manager Enumeration Discovery: Compute Enumeration Discovery: GCP Cloud IAM Enumeration Discovery: Secret Manager Cloud Secrets Enumeration Discovery: Storage Cloud Storage Enumeration Exfiltration: Download Cloud Function Code Exfiltration: Export a Compute Image Instance Persistence: Generate Signed URL for Modifying Cloud Function Code Privilege Escalation: Compute Set Instance or Project Metadata to Enable OS Login Feature URL indicators are now available for matching as part of Applied Threat Intelligence.
- September 09, 2024 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation September 06, 2024 Change Burst limits will be rolling out over the next 90 days.
- April 27, 2022 Change Chronicle now supports the following functions in Detection Engine rules: strings.concat(a, b) strings.to lower(stringText) strings.to upper(stringText) strings.base64 decode(encodedString) re.capture(stringText, regex) re.replace(stringText, replaceRegex, replacementText) timestamp.get minute(unix seconds [, time zone]) timestamp.get hour(unix seconds [, time zone]) timestamp.get day of week(unix seconds [, time zone]) timestamp.get week(unix seconds [, time zone]) timestamp.current seconds() math.abs(intExpression) For more information about these functions, see YARA-L 2.0 language syntax.
- This change should not remove any prior detections for customers who have enabled this rule pack and do not meet the licensing requirements but the rules themselves will now be unavailable and no new detections will generate.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- It is now possible to configure alerts to be dropped if the source environment doesn't exist. (ID #00180834) July 12, 2023 Fixed Release Notes 6.2.30: Playbooks not always saved correctly within Platform (ID #00243484) amic include /release-notes/ chronicle-soar %} Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can periodically check this page for announcements about new or updated features, bug fixes, known issues, and deprecated functionality.
- You can take advantage of this feature by setting a filter for cases and putting the newly created URL in an external dashboard.
- This functionality provides more precise control and flexible, calendar-like scheduling for your scripts.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- This feature is designed for teams that require external analysis processing or audit trails where you must preserve the relationship between normalized data and original ingestion.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .

