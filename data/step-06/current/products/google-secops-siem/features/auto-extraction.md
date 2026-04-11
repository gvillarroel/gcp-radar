---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.373Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Auto Extraction"
feature_slug: "auto-extraction"
latest_feature_date: "2025-08-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "auto"
  - "extraction"
  - "lets"
  - "raw"
  - "log"
  - "fields"
  - "be"
  - "used"
---

# Auto Extraction

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs; Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs.

## Extended Definition

Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs; Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- The auto extraction feature lets you use raw log fields directly in search, detection rules, and Native Dashboards , with or without a parser.
- January 13, 2026 Announcement Auto extraction general availability As part of the GA release for the auto extraction feature, customers now need to opt-in and choose which fields to extract. (Full auto extraction is no longer supported.) The opt-in functionality does not impact the extracted fields that are already in use (in saved searches and rules), because those fields have been automatically opted-in as part of the GA migration.
- The following rules have been added to the rule pack: Malware Transfer Event in Chrome Management Password Breach Event By Admin User Phishing Navigation Event Containing Suspicious Parameters In Chrome Management Chrome Password Event on Newly Observed Domain in Environment Feature Auto Extraction supports XML formatted logs in addition to JSON formatted logs.
- The total entry number and total size bytes fields are defined in the new explore and used to query the log count and log volume for the Google SecOps Ingestion API.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- The auto extraction feature lets you use raw log fields directly in search, detection rules, and Native Dashboards , with or without a parser.
- January 13, 2026 Announcement Auto extraction general availability As part of the GA release for the auto extraction feature, customers now need to opt-in and choose which fields to extract. (Full auto extraction is no longer supported.) The opt-in functionality does not impact the extracted fields that are already in use (in saved searches and rules), because those fields have been automatically opted-in as part of the GA migration.
- The following rules have been added to the rule pack: Malware Transfer Event in Chrome Management Password Breach Event By Admin User Phishing Navigation Event Containing Suspicious Parameters In Chrome Management Chrome Password Event on Newly Observed Domain in Environment Feature Auto Extraction supports XML formatted logs in addition to JSON formatted logs.
- The total entry number and total size bytes fields are defined in the new explore and used to query the log count and log volume for the Google SecOps Ingestion API.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- The icon labels are the following: U : Unenriched fields contain values populated during the normalization process using data from the original raw log.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Error when trying to log in again to Chronicle SOAR (ID #46831483) Email HTML template shows blank page in Settings (ID #46912863) Users filter in the Search page not displaying all the users (ID #00249930) Active Directory Groups field removed from Settings Permission groups as it is not supported October 24, 2023 Feature Remote Agents 1.4.4 Added support for all SDK calls over remote agents Improved managing integrations over the remote agent leading to a more overall stable product experience Publisher Python version upgraded to Python 3.11 Fixed Remote Agents 1.4.4 Remote agent actions do not return script results in the same way local actions return them (ID #45682680) Users unable to change the remote agent environment via agent CLI October 03, 2023 Fixed Release 6.2.36 GA - 14th October, 2023 Internal security fixes September 27, 2023 Feature Release Notes 6.2.35 GA - 8th October Risk Score and Severity added Two new information fields have been added to the Alert Details widget which appears in the Alert overview tab.
- New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python Fixed Release Notes 6.2.31 Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798) Specific Integration showing incorrect update available (ID #00181718) SDK call siemplify.current alert.creation time returns 0 (ID #00226591) In rare situations, unable to access several cases via the Platform or via API (ID #00243878) When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181) Entities that should be internal are created as external if ingested using the environment alias (ID #00225318) In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run.
- Fixed Inline CSS removed in Insights (ID #00273271) Fixed SAML login page showing blank (ID #00279230) Fixed Alert Type is empty when trying to add alert grouping rules (ID # 00275434) Fixed Search results distorting the screen (ID #00273643) Fixed Job page loading slowly and needs to be refreshed many times (ID #50253417) Fixed Gitsync power up push content not triggering automatically (ID #00283331) May 09, 2024 Announcement Release 6.3.1 is now in General Availability.
- Fixed Playbooks and their folders within a specific environment are deleted without a corresponding entry in the audit logs. (ID #48557086) Announcement The following API endpoints will be deprecated in July 2024. api/external/v1/settings/AddOrUpdateSamlSettings api/external/v1/accounts/DisableJitAndAutoRedirect api/external/v1/settings/GetSamlSettingsTemplate December 08, 2023 Announcement Release 6.2.42 is now in General Availability.

