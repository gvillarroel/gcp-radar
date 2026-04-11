---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.418Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Download Cloud Function Code"
feature_slug: "download-cloud-function-code"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "download"
  - "function"
  - "code"
  - "this"
  - "hacktool"
  - "rule"
  - "detects"
  - "exfiltration"
---

# Download Cloud Function Code

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

This Cloud Hacktool rule detects exfiltration by downloading Cloud Function code.

## Extended Definition

This Cloud Hacktool rule detects exfiltration by downloading Cloud Function code.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Collection: Set GCP Cloud Storage Bucket to Public Discovery: Cloud Run Enumeration Discovery: CloudFunctions Enumeration of GCP Cloud Functions Discovery: CloudKMS Enumeration of GCP Cloud KMS Discovery: CloudResourceManager Resource Manager Enumeration Discovery: Compute Enumeration Discovery: GCP Cloud IAM Enumeration Discovery: Secret Manager Cloud Secrets Enumeration Discovery: Storage Cloud Storage Enumeration Exfiltration: Download Cloud Function Code Exfiltration: Export a Compute Image Instance Persistence: Generate Signed URL for Modifying Cloud Function Code Privilege Escalation: Compute Set Instance or Project Metadata to Enable OS Login Feature URL indicators are now available for matching as part of Applied Threat Intelligence.
- September 09, 2024 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation September 06, 2024 Change Burst limits will be rolling out over the next 90 days.
- April 27, 2022 Change Chronicle now supports the following functions in Detection Engine rules: strings.concat(a, b) strings.to lower(stringText) strings.to upper(stringText) strings.base64 decode(encodedString) re.capture(stringText, regex) re.replace(stringText, replaceRegex, replacementText) timestamp.get minute(unix seconds [, time zone]) timestamp.get hour(unix seconds [, time zone]) timestamp.get day of week(unix seconds [, time zone]) timestamp.get week(unix seconds [, time zone]) timestamp.current seconds() math.abs(intExpression) For more information about these functions, see YARA-L 2.0 language syntax.
- The following rules have been added to the rulepack: Archive Exfiltration Event to Non-Google Websites Google Chrome Navigation Event to Shortened URLs Suspicious Download from Filehosting or Chat Platform in Chrome Management Chrome Suspicious Download Event from Newly Observed Domain in Environment October 22, 2025 Change Integration of GTI score in Applied Threat Intelligence (ATI) Google SecOps now uses Google Threat Intelligence (GTI) score for prioritization in Applied Threat Intelligence (ATI) instead of the IC-score.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Collection: Set GCP Cloud Storage Bucket to Public Discovery: Cloud Run Enumeration Discovery: CloudFunctions Enumeration of GCP Cloud Functions Discovery: CloudKMS Enumeration of GCP Cloud KMS Discovery: CloudResourceManager Resource Manager Enumeration Discovery: Compute Enumeration Discovery: GCP Cloud IAM Enumeration Discovery: Secret Manager Cloud Secrets Enumeration Discovery: Storage Cloud Storage Enumeration Exfiltration: Download Cloud Function Code Exfiltration: Export a Compute Image Instance Persistence: Generate Signed URL for Modifying Cloud Function Code Privilege Escalation: Compute Set Instance or Project Metadata to Enable OS Login Feature URL indicators are now available for matching as part of Applied Threat Intelligence.
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- The following rules have been added to the rulepack: Archive Exfiltration Event to Non-Google Websites Google Chrome Navigation Event to Shortened URLs Suspicious Download from Filehosting or Chat Platform in Chrome Management Chrome Suspicious Download Event from Newly Observed Domain in Environment October 26, 2025 Feature Delete high-load SOAR environments You can now easily delete environments with heavy loads directly from the platform.
- Feature Chronicle has added a new rule set to Cloud Threat Detections , called Serverless Threats , that detects activity associated with potential compromise or abuse of server-less resources in Google Cloud, such as Cloud Run and Cloud Functions.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).
- Add a second condition to provide additional qualification, such as "alert only if this detection happens 5 times for the same user in one hour" or if it's combined with a detection from a different rule.
- Composite detections Supported in: Google secops SIEM This document introduces composite detections and how they can enhance threat detection workflows by correlating outputs from multiple rules.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

