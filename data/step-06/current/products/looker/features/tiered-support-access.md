---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.503Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Tiered Support Access"
feature_slug: "tiered-support-access"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-labs"
keywords:
  - "tiered"
  - "access"
  - "lets"
  - "looker"
  - "use"
  - "legacy"
  - "updated"
  - "model"
---

# Tiered Support Access

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Tiered Support Access lets Looker use a legacy or updated support access model.

## Extended Definition

Tiered Support Access lets Looker use a legacy or updated support access model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access](https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)

## Supporting Pages

### Admin settings - Support Access \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access](https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Changes to Support Access Settings tile lists the most recent events when your support access settings were changed, and includes: Whether support access to your Looker instance was enabled, disabled, or extended The name of the user who changed the support access setting, or an explanation for automatic changes (such as expiration of the access timer) The time and date the setting change occurred The Recent Access tile shows information about which Google employees have recently accessed your Looker instance, including: The name of the Google employee who accessed your Looker instance The date that the analyst accessed your instance The purpose for which the analyst accessed your instance (this will be one of the following values): Professional Services support Technical Support Trial Development Support Legacy support access If you are using a Looker (original) instance and the Tiered Support Access Labs feature has been disabled, the Support Access page in the Admin section of Looker behaves differently in the following ways: The maximum duration for support access is 90 days.
- Enabling support access Note: If you are using a Looker (original) instance and the Tiered Support Access Labs feature has been disabled, see the Legacy support access section for steps to enable support access.
- The Support Access page in the General section of Looker's Admin section lets you enable or disable support access, set the duration for how long Google personnel will have access to your instance, and create an allowlist to specify which individuals will have access to your instance.
- One week later, you grant access to Analyst B from Looker's Professional Services department to assist with configuring a model.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- Permissions and Looker licenses Looker licenses classify users into three types: Developer (Admin) Standard (Creator) Viewer The permissions granted to a user determine how that user is classified under the Looker license: A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions: develop manage models see datagroups see logs see pdts sudo A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions: create prefetches explore manage homepage manage spaces save content see queries see schedules see system activity see users use sql runner save agents admin agents A user is classified as a Viewer if they have the access data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The Enhanced Content Cleanup preview feature provides the following capabilities: Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
- When enabled, the Enhanced Content Cleanup preview feature lets admins and content owners access an enhanced content management experience in Looker.
- Enabling the Tiered Support Access feature enables enhanced support access, including updated access duration times and access levels.
- When this preview feature is enabled, the new Enhanced search experience lets you search for Looker content using filters for specific content types, special characters, and more metadata options.

