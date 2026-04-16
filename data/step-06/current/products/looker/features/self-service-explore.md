---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.436Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Self-service Explore"
feature_slug: "self-service-explore"
latest_feature_date: "2025-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "self"
  - "explore"
  - "lets"
  - "users"
  - "upload"
  - "csv"
  - "xls"
  - "xlsx"
---

# Self-service Explore

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets users upload CSV, XLS, and XLSX files to Looker and query and visualize them without LookML or Git.

## Extended Definition

Lets users upload CSV, XLS, and XLSX files to Looker and query and visualize them without LookML or Git.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Admin settings - Self-service Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- Source ID: `site-docs-reference`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With the Self-service Explores feature, your Looker users can upload CSV, XLS, and XLSX files to Looker and then query and visualize the data in a Looker Explore without needing to configure a LookML model or set up Git version control.
- Be mindful of changing the settings on the Self-service Explores admin page if your instance has existing self-service Explores: If you disable data uploads, your users will no longer be able to access existing self-service Explores from the Explore menu, and any Looks or dashboards that rely on the data may be affected.
- Enabling OAuth for Google Sheets uploads After you have enabled self-service Explores and enabled the APIs to support Google Sheets uploads , you can also enable your users to use Google Drive navigation to select Google Sheets documents for data uploads .
- Viewing the data uploads on your Looker instance If self-service Explores are enabled on your instance, a Looker admin can use the Data uploads table on the Self-service Explores admin page to view the data that your users have uploaded on the instance.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- If you assign the manage modelsets restricted permission to a user, and you've allowed that user to access any model that is a part of a project, they will be able to assign all models in that project to model sets that they have access to. upload data None Instance Wide NN Added 25.20 Users can upload files to your instance to create self-service Explores . gemini in looker None Model Specific This permission is the only permission that is included in the Gemini default role .
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- Users will also be able to download results using the Download option in the SQL Runner gear menu, regardless of whether the user has the download with limit or download without limit permissions. certify content access data Model Specific Added 25.20 Users can certify dashboards, Looks, and self-service Explores.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Certification Process URL When a user who does not have the certify content permission wants to request certification of their content, and they select a dashboard's or LookML dashboard's three-dot dashboard menu , a Look's Explore actions gear menu , or an Explore or self-service Explore's Explore actions gear menu , they will see an option that says Want to get this dashboard/look/Explore certified? that includes a Learn how link.
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- Default Export Format The Default Export Format setting lets you choose the default file format that is used when users choose to download data .
- URL Allowlist for Data Actions This setting lets you define URLs (such as https://looker.com ) where your users can process data actions .

