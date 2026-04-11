---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.536Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Folder-level default settings for CMEK and storage location"
feature_slug: "folder-level-default-settings-for-cmek-and-storage-location"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "folder"
  - "level"
  - "default"
  - "settings"
  - "for"
  - "cmek"
  - "and"
  - "storage"
---

# Folder-level default settings for CMEK and storage location

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports configuring CMEK and a default storage location for individual folders.

## Extended Definition

Cloud Logging supports configuring CMEK and a default storage location for individual folders.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### Settings \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The storage location for the Default and Required log buckets of newly created projects and folders, unless the storage location is explicitly provided.
- JSON representation DefaultSinkConfig JSON representation FilterWriteMode Describes the settings associated with a project, folder, organization, or billing account.
- If set to true, the Default sink in newly created projects and folders will created in a disabled state.
- See Configure CMEK for Cloud Logging for more information. storageLocation string Optional.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- The toolbar in the Query pane displays the resources searched for log entries: Project logs and Default : Log entries that originate in the selected project, folder, or organization are returned.
- Set preferences for viewing log data To customize how your logs data is presented in the query results, click the settings Preferences button, and select View , Format , or Manage summary fields : To show or hide the Timeline and Fields panes, to hide summary chips in your query results, or to change the sorting order of your logs, select View .

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- June 05, 2023 Feature You can now configure CMEK and a default storage location for individual folders, in addition to organizations.
- For more information, see Configure default settings for organizations and folders and Configure CMEK for Cloud Logging .
- February 14, 2022 Feature You can now configure default storage regions and disabled Default sinks for your Google Cloud organizations and all of their new projects and folders.
- In the coming weeks, this naming format will be applied to organization-level sinks and folder-level sinks, and to sinks listed on the Logs Exports page in the Logs Viewer.

