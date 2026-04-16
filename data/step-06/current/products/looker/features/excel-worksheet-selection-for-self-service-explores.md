---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.428Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Excel worksheet selection for self-service Explores"
feature_slug: "excel-worksheet-selection-for-self-service-explores"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "excel"
  - "worksheet"
  - "selection"
  - "self"
  - "explores"
  - "lets"
  - "users"
  - "choose"
---

# Excel worksheet selection for self-service Explores

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets users choose which worksheet to upload when creating a self-service Explore from a multi-worksheet Excel file.

## Extended Definition

Lets users choose which worksheet to upload when creating a self-service Explore from a multi-worksheet Excel file.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - Self-service Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Be mindful of changing the settings on the Self-service Explores admin page if your instance has existing self-service Explores: If you disable data uploads, your users will no longer be able to access existing self-service Explores from the Explore menu, and any Looks or dashboards that rely on the data may be affected.
- Enabling OAuth for Google Sheets uploads After you have enabled self-service Explores and enabled the APIs to support Google Sheets uploads , you can also enable your users to use Google Drive navigation to select Google Sheets documents for data uploads .
- Viewing the data uploads on your Looker instance If self-service Explores are enabled on your instance, a Looker admin can use the Data uploads table on the Self-service Explores admin page to view the data that your users have uploaded on the instance.
- With the Self-service Explores feature, your Looker users can upload CSV, XLS, and XLSX files to Looker and then query and visualize the data in a Looker Explore without needing to configure a LookML model or set up Git version control.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Default Export Format The Default Export Format setting lets you choose the default file format that is used when users choose to download data .
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- URL Allowlist for Data Actions This setting lets you define URLs (such as https://looker.com ) where your users can process data actions .
- Administrators can choose to disable guides for their instance, which will disable the guides for all users on that instance.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- If you assign the manage modelsets restricted permission to a user, and you've allowed that user to access any model that is a part of a project, they will be able to assign all models in that project to model sets that they have access to. upload data None Instance Wide NN Added 25.20 Users can upload files to your instance to create self-service Explores . gemini in looker None Model Specific This permission is the only permission that is included in the Gemini default role .
- Users will also be able to download results using the Download option in the SQL Runner gear menu, regardless of whether the user has the download with limit or download without limit permissions. certify content access data Model Specific Added 25.20 Users can certify dashboards, Looks, and self-service Explores.
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .

