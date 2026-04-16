---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.504Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Cloud Audit Logs for Looker (Google Cloud Core)"
feature_slug: "cloud-audit-logs-for-looker-google-cloud-core"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
  - "https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details"
keywords:
  - "audit"
  - "logs"
  - "looker"
  - "core"
  - "generally"
  - "available"
  - "instances"
  - "now"
---

# Cloud Audit Logs for Looker (Google Cloud Core)

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Cloud Audit Logs are generally available for Looker (Google Cloud Core) instances; Cloud Audit Logs now provide comprehensive audit logging for Looker (Google Cloud Core), including full Data Access and System Event coverage.

## Extended Definition

Cloud Audit Logs are generally available for Looker (Google Cloud Core) instances; Cloud Audit Logs now provide comprehensive audit logging for Looker (Google Cloud Core), including full Data Access and System Event coverage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Note: Looker (Google Cloud core) instances don't contain the sudo permission. manage groups see users Instance Wide CM Users can create, edit, and delete groups on the Groups page in the Users section of the Admin menu, with the exception of any groups that are associated with the Admin role. manage roles manage groups Instance Wide CM Users can create, edit, and delete roles, except for the Admin role, on the Roles page in the Users section of the Admin menu.
- Admin via IAM The Admin via IAM role is available only in Looker (Google Cloud core) , and it can be managed only through the Google Cloud console.
- Permissions and Looker licenses Looker licenses classify users into three types: Developer (Admin) Standard (Creator) Viewer The permissions granted to a user determine how that user is classified under the Looker license: A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions: develop manage models see datagroups see logs see pdts sudo A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions: create prefetches explore manage homepage manage spaces save content see queries see schedules see system activity see users use sql runner save agents admin agents A user is classified as a Viewer if they have the access data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.

### Looker Support details \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details](https://docs.cloud.google.com/looker/docs/best-practices/looker-support-details)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To access Looker support, the following requirements must be met: Looker support is available only on Looker instances that are running an officially supported Looker version .
- Finding logs For customer-hosted instances, you can find the Looker logs in the log subdirectory under the Looker user's home directory (usually /home/looker ).
- For Looker (original) instances, Looker support is available only if the Google Cloud Project number is filled in on the Admin General Settings page.
- See the Finding logs section for more information on retrieving logs from customer-hosted Looker instances.

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Role Name Permissions Looker Viewer (roles/looker.viewer) Read-only access to all Looker (Google Cloud core) resources in the Google Cloud console. looker.backups.get looker.backups.list looker.instances.get looker.instances.list looker.instances.login looker.locations.get looker.locations.list looker.operations.get looker.operations.list resourcemanager.projects.get resourcemanager.projects.list Looker Instance User roles/looker.instanceUser Access to sign in to a Looker (Google Cloud core) instance. looker.instances.get looker.instances.login resourcemanager.projects.get resourcemanager.projects.list Looker Schema Viewer roles/looker.schemaViewer Access to Looker (Google Cloud core) schema data in Knowledge Catalog. looker.schemas.view Looker Admin roles/looker.admin Full access to all Looker (Google Cloud core) resources. looker.backups.create looker.backups.delete looker.backups.get looker.backups.list looker.instances.create looker.instances.delete looker.instances.export looker.instances.get looker.instances.import looker.instances.list looker.instances.login looker.instances.update looker.locations.get looker.locations.list looker.operations.cancel looker.operations.delete looker.operations.get looker.operations.list looker.schemas.view resourcemanager.projects.get resourcemanager.projects.list At least one principal must have the Looker Admin ( roles/looker.admin ) IAM role.
- These roles are granted at the Google Cloud project level and will control access uniformly for all Looker (Google Cloud core) instances within a Google Cloud project.
- Principals are granted roles, which give them the ability to perform actions with Looker (Google Cloud core) as well as Google Cloud more generally.
- For example, the looker.instances.login permission lets a principal log in to Looker (Google Cloud core) instances.

