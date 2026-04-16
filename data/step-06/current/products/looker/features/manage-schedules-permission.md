---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.498Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "manage_schedules permission"
feature_slug: "manage-schedules-permission"
latest_feature_date: "2025-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "manage"
  - "schedules"
  - "permission"
  - "lets"
  - "users"
  - "reassign"
  - "delete"
  - "page"
---

# manage_schedules permission

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets users reassign and delete schedules on the Schedules page for models they can access.

## Extended Definition

Lets users reassign and delete schedules on the Schedules page for models they can access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage schedules , manage themes , or see admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
- To enable a user to manage their API keys, in the API Keys section of the Admin > Users > Edit User page, use the API Keys field to enable or disable the ability for the user to create, view, and delete API keys for their user account.
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How content access and permissions interact Content access is managed by users when they are viewing a folder, or managed by a Looker admin on the Content Access page in the Admin panel.
- Users must also have the manage spaces permission to create, edit, move, and delete folders.
- Users are managed on the Users page of Looker's Admin panel, while groups are managed on the Groups page of Looker's Admin panel.
- A user who can manage a folder can manipulate the contents of a folder (copying, moving, deleting, and renaming dashboards and Looks), organize the folder itself (renaming, moving, or deleting the folder), and give other users and groups access to the folder.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Users must also have explore permissions to download drill results in PNG format. manage schedules None Model Specific CM Added 25.2 Users can reassign and delete schedules on the Schedules page for the specified models.
- Users still cannot create, edit, or delete permission sets or model sets. manage user attributes see users Instance Wide CM Users can create, edit, and delete user attributes on the User Attributes page in the Users section of the Admin menu. see schedules None Instance Wide CM Users can see the Schedules and Schedule History pages from the Admin panel in Looker.
- Permissions and Looker licenses Looker licenses classify users into three types: Developer (Admin) Standard (Creator) Viewer The permissions granted to a user determine how that user is classified under the Looker license: A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions: develop manage models see datagroups see logs see pdts sudo A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions: create prefetches explore manage homepage manage spaces save content see queries see schedules see system activity see users use sql runner save agents admin agents A user is classified as a Viewer if they have the access data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.
- The Looker CI Users role has the following permissions that are required to perform CI runs: deploy : required for setting up the GitHub webhooks that are required for CI runs see ci : required to view the results of CI runs, view the CI Suites page, and run CI suites manage ci : required to create CI suites, manage CI users, and configure the Git connection with Continuous Integration Gemini The Gemini role cannot be renamed or deleted and contains only the gemini in looker permission in its permission set.

