---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.797Z"
product_name: "Policy Intelligence"
product_slug: "policy-intelligence"
feature_name: "IAM Recommender for Workload Identity Federation pools"
feature_slug: "iam-recommender-for-workload-identity-federation-pools"
latest_feature_date: "2024-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest/Shared.Types/Binding"
  - "https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview"
  - "https://docs.cloud.google.com/policy-intelligence/docs/manage-identity-risks"
  - "https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-recommendations-overview"
keywords:
  - "iam"
  - "recommender"
  - "for"
  - "workload"
  - "identity"
  - "federation"
  - "pools"
  - "generates"
---

# IAM Recommender for Workload Identity Federation pools

Product: Policy Intelligence
Coverage: MEDIUM

## Step 02 Summary

IAM Recommender generates policy insights and role recommendations for identities in Workload Identity Federation pools.

## Extended Definition

IAM Recommender generates policy insights and role recommendations for identities in Workload Identity Federation pools.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest/Shared.Types/Binding](https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest/Shared.Types/Binding)
- [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/manage-identity-risks](https://docs.cloud.google.com/policy-intelligence/docs/manage-identity-risks)
- [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-recommendations-overview)

## Supporting Pages

### Binding \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest/Shared.Types/Binding](https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest/Shared.Types/Binding)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, google.com or example.com . principal://iam.googleapis.com/locations/global/workforcePools/{pool id}/subject/{subject attribute value} : A single identity in a workforce identity pool. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool id}/group/{groupId} : All workforce identities in a group. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool id}/attribute.{attribute name}/{attribute value} : All workforce identities with a specific attribute value. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool id}/ : All identities in a workforce identity pool. principal://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/subject/{subject attribute value} : A single identity in a workload identity pool. principalSet://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/group/{groupId} : A workload identity pool group. principalSet://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/attribute.{attribute name}/{attribute value} : All identities in a workload identity pool with a certain attribute. principalSet://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/ : All identities in a workload identity pool. deleted:user:{emailid}?uid={uniqueid} : An email address (plus unique identifier) representing a user that has been recently deleted.
- If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding. deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool id}/subject/{subject attribute value} : Deleted single identity in a workforce identity pool.
- For example, deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value . condition object ( Expr ) The condition that is associated with this binding.
- Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid} : An email address that represents a specific Google account.

### "Overview of role recommendations \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- The principal that's granted the role needs to be one of the following principal types: User Service account Group allUsers allAuthenticatedUsers Cloud Storage convenience values BigQuery special group membership One of the following types of federated identities: All identities in a workload identity pool Single identity in a workload identity pool All identities in a workforce identity pool Single identity in a workforce identity pool All Google Kubernetes Engine Pods that use a specific Kubernetes service account Note: For the IAM recommender to generate policy insights for this principal type, the principal identifier must use the Kubernetes service account's name, not its UID.
- Therefore, the IAM recommender generates a role recommendation suggesting that you revoke the Editor role and replace it with a combination of two other roles, which removes thousands of excess permissions: Console gcloud { "associatedInsights" : [ { "insight" : "projects/123456789012/locations/global/insightTypes/google.iam.policy.Insight/insights/3d4ef3d6-bdf0-4330-975d-c65cb929c44d" } ], "content" : { "operationGroups" : [ { "operations" : [ { "action" : "add" , "path" : "/iamPolicy/bindings/ /members/-" , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /role" : "roles/iam.serviceAccountUser" }, "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "value" : "user:my-user@example.com" }, { "action" : "add" , "path" : "/iamPolicy/bindings/ /members/-" , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /role" : "roles/storage.objectAdmin" }, "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "value" : "user:my-user@example.com" }, { "action" : "remove" , "path" : "/iamPolicy/bindings/ /members/ " , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /members/ " : "user:my-user@example.com" , "/iamPolicy/bindings/ /role" : "roles/editor" }, "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" } ] } ], "overview" : { "addedRoles" : [ "roles/iam.serviceAccountUser" , "roles/storage.objectAdmin" ], "member" : "user:my-user@example.com" , "minimumObservationPeriodInDays" : "0" , "removedRole" : "roles/editor" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" } }, "description" : "Replace the current role with smaller predefined roles to cover the permissions needed." , "etag" : "\"0da9a354c2a83d96\"" , "lastRefreshTime" : "2022-06-22T07:00:00Z" , "name" : "projects/123456789012/locations/global/recommenders/google.iam.policy.Recommender/recommendations/4637db3d-dba5-45eb-95ac-b4ee4b4cd14e" , "primaryImpact" : { "category" : "SECURITY" , "securityProjection" : { "details" : { "revokedIamPermissionsCount" : 2998 } } }, "priority" : "P2" , "recommenderSubtype" : "REPLACE ROLE" , "stateInfo" : { "state" : "ACTIVE" } } REST { "name" : "projects/123456789012/locations/global/recommenders/google.iam.policy.Recommender/recommendations/4637db3d-dba5-45eb-95ac-b4ee4b4cd14e" , "description" : "Replace the current role with smaller predefined roles to cover the permissions needed." , "lastRefreshTime" : "2022-06-22T07:00:00Z" , "primaryImpact" : { "category" : "SECURITY" , "securityProjection" : { "details" : { "revokedIamPermissionsCount" : 2998 } } }, "content" : { "operationGroups" : [ { "operations" : [ { "action" : "add" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "path" : "/iamPolicy/bindings/ /members/-" , "value" : "user:my-user@example.com" , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /role" : "roles/iam.serviceAccountOwner" } }, { "action" : "add" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "path" : "/iamPolicy/bindings/ /members/-" , "value" : "user:my-user@example.com" , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /role" : "roles/storage.objectAdmin" } }, { "action" : "remove" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "path" : "/iamPolicy/bindings/ /members/ " , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /members/ " : "user:my-user@example.com" , "/iamPolicy/bindings/ /role" : "roles/editor" } } ] } ], "overview" : { "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "member" : "user:my-user@example.com" , "removedRole" : "roles/editor" , "addedRoles" : [ "roles/iam.serviceAccountUser" , "roles/storage.objectAdmin" ], "minimumObservationPeriodInDays" : "0" } }, "stateInfo" : { "state" : "ACTIVE" }, "etag" : "\"0da9a354c2a83d96\"" , "recommenderSubtype" : "REPLACE ROLE" , "associatedInsights" : [ { "insight" : "projects/123456789012/locations/global/insightTypes/google.iam.policy.Insight/insights/3d4ef3d6-bdf0-4330-975d-c65cb929c44d" } ], "priority" : "P2" } Create a custom role The user my-user@example.com was granted the Cloud Trace Admin role ( roles/cloudtrace.admin ) on a project.
- Therefore, the IAM recommender generates a role recommendation suggesting that you revoke the Browser role from my-user@example.com : Console gcloud { "associatedInsights" : [ { "insight" : "projects/123456789012/locations/global/insightTypes/google.iam.policy.Insight/insights/86c14538-dcfd-4326-afe5-ee8ac921e06a" } ], "content" : { "operationGroups" : [ { "operations" : [ { "action" : "remove" , "path" : "/iamPolicy/bindings/ /members/ " , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /members/ " : "user:my-user@example.com" , "/iamPolicy/bindings/ /role" : "roles/browser" }, "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" } ] } ], "overview" : { "member" : "user:my-user@example.com" , "removedRole" : "roles/browser" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" } }, "description" : "This role has not been used during the observation window." , "etag" : "\"9fc3241da8bfab51\"" , "lastRefreshTime" : "2022-05-20T07:00:00Z" , "name" : "projects/123456789012/locations/global/recommenders/google.iam.policy.Recommender/recommendations/fe512038-5455-49g1-8f9c-752e31c8c154" , "primaryImpact" : { "category" : "SECURITY" , "securityProjection" : { "details" : { "revokedIamPermissionsCount" : 6 } } }, "priority" : "P4" , "recommenderSubtype" : "REMOVE ROLE" , "stateInfo" : { "state" : "ACTIVE" } } REST { "name" : "projects/123456789012/locations/global/recommenders/google.iam.policy.Recommender/recommendations/fe512038-5455-49g1-8f9c-752e31c8c154" , "description" : "This role has not been used during the observation window." , "lastRefreshTime" : "2022-05-20T07:00:00Z" , "primaryImpact" : { "category" : "SECURITY" , "securityProjection" : { "details" : { "revokedIamPermissionsCount" : 6 } } }, "content" : { "operationGroups" : [ { "operations" : [ { "action" : "remove" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "path" : "/iamPolicy/bindings/ /members/ " , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /members/ " : "user:my-user@example.com" , "/iamPolicy/bindings/ /role" : "roles/browser" } } ] } ], "overview" : { "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "member" : "user:my-user@example.com" , "removedRole" : "roles/browser" } }, "stateInfo" : { "state" : "ACTIVE" }, "etag" : "\"9fc3241da8bfab51\"" , "recommenderSubtype" : "REMOVE ROLE" , "associatedInsights" : [ { "insight" : "projects/123456789012/locations/global/insightTypes/google.iam.policy.Insight/insights/86c14538-dcfd-4326-afe5-ee8ac921e06a" } ], "priority" : "P4" } Replace an existing role A service account was granted the Editor role ( roles/editor ) on a project.
- The role includes one of the following permissions, which allow a principal to impersonate a service account: iam.serviceAccounts.actAs iam.serviceAccounts.getAccessToken iam.serviceAccounts.getOpenIdToken iam.serviceAccounts.implicitDelegation iam.serviceAccounts.signBlob iam.serviceAccounts.signJwt If a role fits these criteria, the IAM recommender generates a lateral movement insight for the role.

### "Review and manage identity risks \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/manage-identity-risks](https://docs.cloud.google.com/policy-intelligence/docs/manage-identity-risks)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin To get the permissions that you need to review and manage identity risks, ask your administrator to grant you the following IAM roles on the organization, folder, or project that you want to review and manage identity risks for: Review identity risks: IAM Recommender Viewer ( roles/recommender.iamViewer ) Apply or dismiss recommendations: IAM Recommender Admin ( roles/recommender.iamAdmin ) Note: IAM basic roles might also contain permissions to review and manage identity risks.
- The Security Insights dashboard displays the following widgets for the selected resource: Identity risk overview : Shows the total number of identities with one or more role bindings; the total number of risky identities across human, non-human, and group identities; and their respective severity levels.
- As an IAM administrator, you can review and manage identity risks across your organization, folder, or project from the Google Cloud console by using the Security Insights dashboard.
- To manage identity risks, do the following from any widget on the dashboard: For a risky identity, click the number of insights in the Insights column.

### "Overview of organization policy recommendations \_|\_ Policy Intelligence\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-recommendations-overview)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- If there are no created service account keys, Organization Policy recommender generates a recommendation to enforce the iam.managed.disableServiceAccountKeyCreation constraint and supporting details of the recommendation in the corresponding insights.
- If there are no uploaded service account keys, Organization Policy recommender generates a recommendation to enforce the iam.managed.disableServiceAccountKeyUpload constraint and supporting details of the recommendation in the corresponding insights.
- If there are no external protocol forwarding rules defined, Organization Policy recommender generates a recommendation to enforce the compute.managed.restrictProtocolForwardingCreationForTypes constraint and supporting details of the recommendation in the corresponding insights.
- Organization Policy recommender checks the existence of Identity and Access Management (IAM) user-managed service accounts and external keys of these service accounts to evaluate whether they violate the restrictions on service account key creation.

