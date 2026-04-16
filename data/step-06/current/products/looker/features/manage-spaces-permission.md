---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.500Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "manage_spaces permission"
feature_slug: "manage-spaces-permission"
latest_feature_date: "2025-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
keywords:
  - "manage"
  - "spaces"
  - "permission"
  - "can"
  - "now"
  - "granted"
  - "embed"
  - "users"
---

# manage_spaces permission

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The manage_spaces permission can now be granted to embed users.

## Extended Definition

The manage_spaces permission can now be granted to embed users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)

## Supporting Pages

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Users must also have the manage spaces permission to create, edit, move, and delete folders.
- How content access and permissions interact Content access is managed by users when they are viewing a folder, or managed by a Looker admin on the Content Access page in the Admin panel.
- A user who can manage a folder can manipulate the contents of a folder (copying, moving, deleting, and renaming dashboards and Looks), organize the folder itself (renaming, moving, or deleting the folder), and give other users and groups access to the folder.
- Looker admins can manage what a user or group of users can see and do in Looker by specifying the following access: Content Access , which controls whether a user or group of users can view a folder or manage the folder .

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- In addition to any restrictions from their regular permissions, signed embed users are restricted by the embedded iframe.
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
- Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage schedules , manage themes , or see admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
- To enable a user to manage their API keys, in the API Keys section of the Admin > Users > Edit User page, use the API Keys field to enable or disable the ability for the user to create, view, and delete API keys for their user account.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Permissions and Looker licenses Looker licenses classify users into three types: Developer (Admin) Standard (Creator) Viewer The permissions granted to a user determine how that user is classified under the Looker license: A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions: develop manage models see datagroups see logs see pdts sudo A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions: create prefetches explore manage homepage manage spaces save content see queries see schedules see system activity see users use sql runner save agents admin agents A user is classified as a Viewer if they have the access data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Users who have the save content permission but not the embed save shared space permission will only have the option to save content to their personal embed folder . manage embed settings None Instance Wide CM Users can edit embed settings on the Embed page in the Platform section of the Admin menu. manage themes None Instance Wide CM Users can configure theme settings for embedded dashboards, Looks, and Explores on the Themes page in the Platform section of the Admin menu.

