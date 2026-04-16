---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.750Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Advanced job scheduling"
feature_slug: "advanced-job-scheduling"
latest_feature_date: "2025-09-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "advanced"
  - "job"
  - "scheduling"
  - "provides"
  - "more"
  - "precise"
  - "calendar"
  - "like"
---

# Advanced job scheduling

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Advanced job scheduling provides more precise, calendar-like control for scheduling scripts.

## Extended Definition

Advanced job scheduling provides more precise, calendar-like control for scheduling scripts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- Onboarding and Activating Google Unified Security This portfolio brings together the following Google's leading security solutions: Security Command Center (SCCE) Google SecOps (SecOps Enterprise Plus) Google Threat Intelligence (Enterprise) Chrome Enterprise Browser (Premium) Mandiant Threat Defense Getting Started Embark on your journey to a more secure future with Google Unified Security.
- Curated Detections & Prioritization : Pre-built detection rules (available in rule packs like "Applied Threat Intelligence - Curated Prioritization") contextualize IOC matches using event data and Mandiant intelligence features to generate prioritized alerts (Active Breach, High, Medium, Inbound IP Auth).
- Strengthening Endpoint Security: Integrated protection with Google Chrome Enterprise Premium & Google SecOps Chrome Enterprise Premium (CEP) integration with Google SecOps provides critical visibility into threats originating from browser activity to strengthen your endpoint security posture.

### "Use the curated detections page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Precise rules : Find malicious behavior with a higher degree of confidence with fewer false positives due to the more specific nature of the rule.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- Mitre ATT&CK® techniques represent specific actions of malicious behavior Note: For more information about Mitre Tactics and Techniques, see the official MITRE ATT&CK page at https://attack.mitre.org/ .
- The Curated Detection page provides information about each of the rule sets active for your Google SecOps account including the following: Last updated: Time GCTI last updated the rule set.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- UDM Lookup behavior summary This section provides more details about UDM Lookup capabilities.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

