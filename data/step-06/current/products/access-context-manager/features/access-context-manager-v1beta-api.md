---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.655Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager v1beta API"
feature_slug: "access-context-manager-v1beta-api"
latest_feature_date: "2020-01-06"
deprecation_date: "July 2020"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage"
  - "https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/Policy"
  - "https://docs.cloud.google.com/access-context-manager/docs/apis"
keywords:
  - "v1beta"
  - "july"
  - "2020"
  - "deprecated"
---

# Access Context Manager v1beta API

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

The Access Context Manager v1beta API was deprecated; deprecated on July 2020.

## Extended Definition

The Access Context Manager v1beta API was deprecated; deprecated on July 2020.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/Policy)
- [https://docs.cloud.google.com/access-context-manager/docs/apis](https://docs.cloud.google.com/access-context-manager/docs/apis)

## Supporting Pages

### LaunchStage | Access Context Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- Source ID: `feature-recovery-direct-http`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- LaunchStage | Access Context Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Access Context Manager Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Access Context Manager All APIs & references Context-Aware Access audit logging gcloud reference REST reference Overview v1 Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview cancel delete get list organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector v1alpha Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview get organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector Shared types Overview Types AuditConfig Binding DeviceEncryptionStatus DeviceManagementLevel GetIamPolicyRequest GetOperationRequest LaunchStage LogType Operation OsType Policy SetIamPolicyRequest TestIamPermissionsRequest TestIamPermissionsResponse RPC reference Overview google.api google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.identity.accesscontextmanager.v1alpha google.longrunning google.rpc google.type Access level attributes Example access level YAML Custom access level specification AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Access Context Manager Reference Send feedback LaunchStage Stay organized with collections Save and categorize content based on your preferences.
- DEPRECATED Deprecated features are scheduled to be shut down and removed.

### APIs & reference \_|\_ Access Context Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/apis](https://docs.cloud.google.com/access-context-manager/docs/apis)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Policy \_|\_ Access Context Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/Policy)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation .

