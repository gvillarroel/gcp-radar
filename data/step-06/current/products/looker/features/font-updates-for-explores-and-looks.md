---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.555Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Font updates for Explores and Looks"
feature_slug: "font-updates-for-explores-and-looks"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
keywords:
  - "font"
  - "updates"
  - "explores"
  - "looks"
  - "now"
  - "use"
  - "correct"
  - "fonts"
---

# Font updates for Explores and Looks

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Explores and Looks now use the correct fonts.

## Extended Definition

Explores and Looks now use the correct fonts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- When Visual Drilling is enabled, the drill overlays for Looks and Explores consider the underlying data to select the best visualization type, which can be a table visualization or some other visualization type.
- Fonts are resized to display at least 8-10 value characters within a tile; if the characters in the visualization overflow horizontally or vertically at a given size, the font size will step down.
- Smart Single Value Text Size Enabling the Smart Single Value Text Size feature automatically resizes the fonts on single value visualizations displayed within dashboard tiles.
- Persist Assets in Browser cache When this setting is enabled, static assets such as JavaScript files and fonts are cached in each user's browser storage.

### Admin settings - Self-service Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Be mindful of changing the settings on the Self-service Explores admin page if your instance has existing self-service Explores: If you disable data uploads, your users will no longer be able to access existing self-service Explores from the Explore menu, and any Looks or dashboards that rely on the data may be affected.
- If you change the BigQuery connection, any existing self-service Explores on your instance can be affected, along with any Looks or dashboards that rely on their data.
- Enabling the APIs to support Google Sheets uploads To support uploading data from Google Sheets, the following APIs must be enabled in the Google Cloud console by an IAM user with the IAM roles/serviceusage.serviceUsageAdmin permission: This API must be enabled in the Google Cloud project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page: BigQuery API: Required for all BigQuery operations These APIs must be enabled in the Google Cloud project that is associated with the service account used to upload data (the service account that is used for PDT processes on your BigQuery connection , which may or may not be the same as the Google Cloud project that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page): BigQuery API: Required for all BigQuery operations Google Sheets API: Required for retrieving the names of each sheet in a Google Sheets document Google Drive API: Required for BigQuery to read files from Drive Perform the following steps to enable the APIs: From the Google Cloud console Open project picker , select the project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Folders let you set access levels that determine which users may edit folder contents (such as Looks and dashboards), view the contents in a folder, and change settings: A user needs to have at least the View access level to a folder to see that the folder exists, to view the Looks and dashboards inside it, and to copy the Looks and dashboards in the folder.
- A user who can manage a folder can manipulate the contents of a folder (copying, moving, deleting, and renaming dashboards and Looks), organize the folder itself (renaming, moving, or deleting the folder), and give other users and groups access to the folder.

