---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.341Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Search editor auto-collapse"
feature_slug: "search-editor-auto-collapse"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "search"
  - "editor"
  - "auto"
  - "collapse"
  - "the"
  - "automatically"
  - "collapses"
  - "after"
---

# Search editor auto-collapse

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

The search editor automatically collapses after a query runs to provide more space for results.

## Extended Definition

The search editor automatically collapses after a query runs to provide more space for results.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- When you run a query, the search editor panel automatically collapses to provide more space for the results.
- The search is automatically run again using the same date and time parameters.
- The following operators are supported: <, > <=, >= =, != nocase -- supported for strings After you enter a valid UDM field and operator, add the log data value you want to search for.
- For enumerated fields, the editor displays suggestions for all valid values (for example, NETWORK EVENT ) after you type an operator and a double quote ( " ).

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Optimized results view : The search editor now automatically collapses after a query runs, providing more space for results.
- January 13, 2026 Announcement Auto extraction general availability As part of the GA release for the auto extraction feature, customers now need to opt-in and choose which fields to extract. (Full auto extraction is no longer supported.) The opt-in functionality does not impact the extracted fields that are already in use (in saved searches and rules), because those fields have been automatically opted-in as part of the GA migration.
- April 07, 2026 Change Search query editor enhancements Google SecOps has enhanced the search query editor to provide intelligent auto-suggestions and improved error handling.
- Search summaries : Gemini can automatically summarize search results after every search and subsequent filter action.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Optimized results view : The search editor now automatically collapses after a query runs, providing more space for results.
- January 13, 2026 Announcement Auto extraction general availability As part of the GA release for the auto extraction feature, customers now need to opt-in and choose which fields to extract. (Full auto extraction is no longer supported.) The opt-in functionality does not impact the extracted fields that are already in use (in saved searches and rules), because those fields have been automatically opted-in as part of the GA migration.
- April 21, 2023 Change The Chronicle forwarder for Linux has been enhanced with the following changes: After you make a change to a configuration file, either <FORWARDER NAME>.conf or <FORWARDER NAME> auth.conf , the change is automatically applied within 5 minutes.
- April 07, 2026 Change Search query editor enhancements Google SecOps has enhanced the search query editor to provide intelligent auto-suggestions and improved error handling.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Inline CSS removed in Insights (ID #00273271) Fixed SAML login page showing blank (ID #00279230) Fixed Alert Type is empty when trying to add alert grouping rules (ID # 00275434) Fixed Search results distorting the screen (ID #00273643) Fixed Job page loading slowly and needs to be refreshed many times (ID #50253417) Fixed Gitsync power up push content not triggering automatically (ID #00283331) May 09, 2024 Announcement Release 6.3.1 is now in General Availability.
- Fixed Searching by entities does not return the full results (ID #47644037) Fixed Cases are loading too slowly (ID #00246621) Fixed API endpoint /api/external/v1/logging/python not returning logs (ID #00258483) Fixed Predefined widgets not available after updating playbook block (ID #47667046) November 30, 2023 Announcement Release 6.2.41 is now in General Availability.
- Fixed Timeout for automatic and manual python-run operations failing after 5 minutes even though it's defined for a longer time in the platform (ID #00243596, #00213817, #45379045, #48348087, #00245583. #00227758, #00250153) Automatic actions/operations now run for up to the time defined in the platform (maximum of 20 minutes).
- Announcement Email settings: customer configuration change In order to help with safe and secure communication, the Trust Certificate checkbox is scheduled to be deleted in April 2024 as it will be enabled automatically by default.

