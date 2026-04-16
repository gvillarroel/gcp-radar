---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.537Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "manage_project_connections_restricted permission"
feature_slug: "manage-project-connections-restricted-permission"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
keywords:
  - "manage"
  - "project"
  - "connections"
  - "restricted"
  - "permission"
  - "lets"
  - "users"
  - "edit"
---

# manage_project_connections_restricted permission

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The manage_project_connections_restricted permission lets users edit a subset of settings for new and existing connections.

## Extended Definition

The manage_project_connections_restricted permission lets users edit a subset of settings for new and existing connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- If you assign the manage project connections restricted permission to a user, the user will be able to see, edit, and create project-scoped connections for any projects included in the model set. see ci develop Instance Wide NN Added 25.6 Users can view the results of Continuous Integration runs, view the Continuous Integration Suites page, and run test suites. manage ci see ci Instance Wide NN Added 25.6 Users can create Continuous Integration suites, manage Continuous Integration users, and configure the git connection with Continuous Integration.
- If you assign the manage project connections restricted permission to a user, the user will be able to see, edit, and create project-scoped connections for any projects included in the model set. manage project connections manage project connections restricted Model Specific CM Users can see the Connections page in the Admin menu.

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Users must also have the manage spaces permission to create, edit, move, and delete folders.
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- How content access and permissions interact Content access is managed by users when they are viewing a folder, or managed by a Looker admin on the Content Access page in the Admin panel.
- Folders let you set access levels that determine which users may edit folder contents (such as Looks and dashboards), view the contents in a folder, and change settings: A user needs to have at least the View access level to a folder to see that the folder exists, to view the Looks and dashboards inside it, and to copy the Looks and dashboards in the folder.

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
- To enable a user to manage their API keys, in the API Keys section of the Admin > Users > Edit User page, use the API Keys field to enable or disable the ability for the user to create, view, and delete API keys for their user account.
- To generate API keys for an API-only service account, in the API Keys section of the Admin > Users > Edit User page, click the Manage button.
- In addition to any restrictions from their regular permissions, signed embed users are restricted by the embedded iframe.

