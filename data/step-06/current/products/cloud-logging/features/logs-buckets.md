---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.565Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Buckets"
feature_slug: "logs-buckets"
latest_feature_date: "2020-08-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
keywords:
  - "logs"
  - "buckets"
  - "let"
  - "users"
  - "centralize"
  - "or"
  - "separate"
  - "according"
---

# Logs Buckets

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Buckets let users centralize or separate logs according to their storage and management needs; Logs Buckets let users centralize or separate logs according to their storage and management needs.

## Extended Definition

Logs Buckets let users centralize or separate logs according to their storage and management needs; Logs Buckets let users centralize or separate logs according to their storage and management needs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.
- Adjust time controls The timeline provides time controls that let you adjust the data that you see in the Logs Explorer: Time handles: Drag the timeline's handles inward to narrow the data or outward to widen the data in the timeline.
- When you select the Zoom to time feature, the following happens: The logs data that you see in the Query results pane reloads and narrows according to the time-range restriction of the selected timeline bar.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- August 03, 2020 Feature Alpha release: You can now use Logs Buckets to centralize or divide your logs based on your needs.
- August 11, 2020 Feature Beta release: You can now use Logs Buckets to centralize or divide your logs based on your needs.
- Announcement To help you understand your logs volume and usage within the context of your Logs Buckets, the Resource Usage page has been moved to the Logs Storage page, which now contains your resource usage information.
- Change Deleting logs-based metrics in alerting policies : Attempting to delete a logs-based metric that is used in one or more Stackdriver Monitoring alerting policies now fails with the status FAILED PRECONDITION .

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Ensure the following: To get the permissions that you need to configure an aggregated sink, ask your administrator to grant you the following IAM roles on your organization: To create log buckets and sinks in a project: Logs Configuration Writer ( roles/logging.configWriter ) - your project To create an aggregated sink: Logs Configuration Writer ( roles/logging.configWriter ) - your organization To grant roles to principals: Owner ( roles/owner ) - your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Execute the gcloud logging sinks create command: gcloud logging sinks create PROJECT LEVEL SINK NAME SINK DESTINATION --project= PROJECT ID --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ Create the aggregated sink Aggregated sinks combine and route log entries from the resources contained by an organization or folder to a destination.
- Execute the gcloud logging sinks create command: gcloud logging sinks create SINK NAME \ logging.googleapis.com/projects/ PROJECT ID \ --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ --organization= ORGANIZATION ID \ --include-children The --include-children option is important.
- In the following steps, you grant a principal the role of roles/logging.viewAccessor along with an IAM condition that restricts the grant to the view named AllLogs : In the Google Cloud console, go to the IAM page: Go to IAM If you use the search bar to find this page, then select the result whose subheading is IAM & Admin .

