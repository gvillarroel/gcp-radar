---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.534Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker Admin Role in Looker (Google Cloud core)"
feature_slug: "looker-admin-role-in-looker-google-cloud-core"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
keywords:
  - "looker"
  - "admin"
  - "role"
  - "core"
  - "can"
  - "granted"
  - "within"
  - "instance"
---

# Looker Admin Role in Looker (Google Cloud core)

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker Admin role can be granted within a Looker (Google Cloud core) instance without requiring a Looker Admin IAM role.

## Extended Definition

The Looker Admin role can be granted within a Looker (Google Cloud core) instance without requiring a Looker Admin IAM role.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Tip: If a user's OAuth refresh token is expired, that user will no longer have the Admin via IAM role within the Looker (Google Cloud core) instance.
- Note: Looker (Google Cloud core) instances don't contain the sudo permission. manage groups see users Instance Wide CM Users can create, edit, and delete groups on the Groups page in the Users section of the Admin menu, with the exception of any groups that are associated with the Admin role. manage roles manage groups Instance Wide CM Users can create, edit, and delete roles, except for the Admin role, on the Roles page in the Users section of the Admin menu.
- Permissions and Looker licenses Looker licenses classify users into three types: Developer (Admin) Standard (Creator) Viewer The permissions granted to a user determine how that user is classified under the Looker license: A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions: develop manage models see datagroups see logs see pdts sudo A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions: create prefetches explore manage homepage manage spaces save content see queries see schedules see system activity see users use sql runner save agents admin agents A user is classified as a Viewer if they have the access data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.
- Default roles For new instances, Looker creates the following default roles, each of which includes a default permission set of the same name: Admin Admin via IAM Developer Gemini Looker CI Users Conversational Analytics Agent Manager Conversational Analytics User Support Advanced Editor Support Basic Editor Customer Engineer Advanced Editor User Viewer The default roles in the following sections have conditions for use.

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker IAM roles: These kinds of roles govern the following abilities: Users' capabilities within the Google Cloud console with regard to Looker (Google Cloud core) When used together with OAuth , they also govern the following abilities: Users' abilities to sign in to a Looker (Google Cloud core) instance Whether or not users are automatically assigned the Admin via IAM Looker role once they sign in to a Looker (Google Cloud core) instance.
- Looker roles are assigned or revoked within a Looker (Google Cloud core) instance, with the exception of the Admin via IAM Looker role, which can be assigned or revoked only through IAM.
- These roles are granted at the Google Cloud project level and will control access uniformly for all Looker (Google Cloud core) instances within a Google Cloud project.
- Role Name Permissions Looker Viewer (roles/looker.viewer) Read-only access to all Looker (Google Cloud core) resources in the Google Cloud console. looker.backups.get looker.backups.list looker.instances.get looker.instances.list looker.instances.login looker.locations.get looker.locations.list looker.operations.get looker.operations.list resourcemanager.projects.get resourcemanager.projects.list Looker Instance User roles/looker.instanceUser Access to sign in to a Looker (Google Cloud core) instance. looker.instances.get looker.instances.login resourcemanager.projects.get resourcemanager.projects.list Looker Schema Viewer roles/looker.schemaViewer Access to Looker (Google Cloud core) schema data in Knowledge Catalog. looker.schemas.view Looker Admin roles/looker.admin Full access to all Looker (Google Cloud core) resources. looker.backups.create looker.backups.delete looker.backups.get looker.backups.list looker.instances.create looker.instances.delete looker.instances.export looker.instances.get looker.instances.import looker.instances.list looker.instances.login looker.instances.update looker.locations.get looker.locations.list looker.operations.cancel looker.operations.delete looker.operations.get looker.operations.list looker.schemas.view resourcemanager.projects.get resourcemanager.projects.list At least one principal must have the Looker Admin ( roles/looker.admin ) IAM role.

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Note: Starting in Looker 25.18, Looker admins can no longer manage users' API keys on a Looker (Google Cloud core) instance.
- On a Looker (Google Cloud core) instance, Looker admins enable individual users to manage their own API keys.
- These accounts can be granted the Admin Looker role and Looker API credentials.
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.

