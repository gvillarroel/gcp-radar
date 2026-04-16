---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.493Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Admin via IAM Looker role"
feature_slug: "admin-via-iam-looker-role"
latest_feature_date: "2025-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp"
keywords:
  - "admin"
  - "via"
  - "iam"
  - "looker"
  - "role"
  - "core"
  - "instances"
  - "managed"
---

# Admin via IAM Looker role

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) instances support an admin role that is managed exclusively through IAM and grants full administrative privileges.

## Extended Definition

Looker (Google Cloud core) instances support an admin role that is managed exclusively through IAM and grants full administrative privileges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Looker (Google Cloud core) instances don't contain the sudo permission. manage groups see users Instance Wide CM Users can create, edit, and delete groups on the Groups page in the Users section of the Admin menu, with the exception of any groups that are associated with the Admin role. manage roles manage groups Instance Wide CM Users can create, edit, and delete roles, except for the Admin role, on the Roles page in the Users section of the Admin menu.
- Admin via IAM The Admin via IAM role is available only in Looker (Google Cloud core) , and it can be managed only through the Google Cloud console.
- Default roles For new instances, Looker creates the following default roles, each of which includes a default permission set of the same name: Admin Admin via IAM Developer Gemini Looker CI Users Conversational Analytics Agent Manager Conversational Analytics User Support Advanced Editor Support Basic Editor Customer Engineer Advanced Editor User Viewer The default roles in the following sections have conditions for use.
- Tip: If a user's OAuth refresh token is expired, that user will no longer have the Admin via IAM role within the Looker (Google Cloud core) instance.

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role Name Permissions Looker Viewer (roles/looker.viewer) Read-only access to all Looker (Google Cloud core) resources in the Google Cloud console. looker.backups.get looker.backups.list looker.instances.get looker.instances.list looker.instances.login looker.locations.get looker.locations.list looker.operations.get looker.operations.list resourcemanager.projects.get resourcemanager.projects.list Looker Instance User roles/looker.instanceUser Access to sign in to a Looker (Google Cloud core) instance. looker.instances.get looker.instances.login resourcemanager.projects.get resourcemanager.projects.list Looker Schema Viewer roles/looker.schemaViewer Access to Looker (Google Cloud core) schema data in Knowledge Catalog. looker.schemas.view Looker Admin roles/looker.admin Full access to all Looker (Google Cloud core) resources. looker.backups.create looker.backups.delete looker.backups.get looker.backups.list looker.instances.create looker.instances.delete looker.instances.export looker.instances.get looker.instances.import looker.instances.list looker.instances.login looker.instances.update looker.locations.get looker.locations.list looker.operations.cancel looker.operations.delete looker.operations.get looker.operations.list looker.schemas.view resourcemanager.projects.get resourcemanager.projects.list At least one principal must have the Looker Admin ( roles/looker.admin ) IAM role.
- Looker IAM roles: These kinds of roles govern the following abilities: Users' capabilities within the Google Cloud console with regard to Looker (Google Cloud core) When used together with OAuth , they also govern the following abilities: Users' abilities to sign in to a Looker (Google Cloud core) instance Whether or not users are automatically assigned the Admin via IAM Looker role once they sign in to a Looker (Google Cloud core) instance.
- Required role To get the permissions that you need to assign Looker (Google Cloud core) IAM roles, ask your administrator to grant you the Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) IAM role on the project in which the instance was created.
- Looker roles are assigned or revoked within a Looker (Google Cloud core) instance, with the exception of the Admin via IAM Looker role, which can be assigned or revoked only through IAM.

### Admin settings - Looker Studio Pro \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permission that you need to set up a self-service subscription to Looker Studio Pro , ask your IAM administrator to grant you a role containing the lookerstudio.pro.manage permission for the Google Cloud project that hosts your Looker Studio Pro content.
- Required roles To get the permission that you need to accept complimentary Looker Studio Pro licenses , ask your Looker admin to grant you the Admin Looker role.
- Note: Complimentary Looker Studio Pro licenses are also available for Looker (Google Cloud core) instances.
- The Owner ( roles/owner ) Identity and Access Management role and the Looker Studio Pro Manager ( roles/lookerstudio.proManager ) contain this permission by default, but you may be able to get this permission with custom roles or other predefined roles .

