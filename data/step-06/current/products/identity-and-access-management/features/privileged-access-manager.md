---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.393Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Privileged Access Manager"
feature_slug: "privileged-access-manager"
latest_feature_date: "2024-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam"
  - "https://docs.cloud.google.com/iam/docs/configuring-temporary-access"
  - "https://docs.cloud.google.com/iam/docs/overview"
  - "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts"
keywords:
  - "privileged"
  - "access"
  - "manager"
  - "provides"
  - "just"
  - "in"
  - "time"
  - "temporary"
---

# Privileged Access Manager

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Privileged Access Manager provides just-in-time temporary privilege elevation and audit visibility for access grants; Privileged Access Manager provides just-in-time temporary privilege elevation and audit visibility for access grants.

## Extended Definition

Privileged Access Manager provides just-in-time temporary privilege elevation and audit visibility for access grants; Privileged Access Manager provides just-in-time temporary privilege elevation and audit visibility for access grants.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam)
- [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)

## Supporting Pages

### "Privileged Access Manager audit logging \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam)
- Source ID: `site-docs-root-2`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.CheckOnboardingStatus google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.GetEntitlement google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.GetGrant google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.ListEntitlements google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.ListGrants google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.CheckOnboardingStatus google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.GetEntitlement google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.GetGrant google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.ListEntitlements google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.ListGrants google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.CheckOnboardingStatus google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.GetEntitlement google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.GetGrant google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.ListEntitlements google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.ListGrants ADMIN WRITE google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.ApproveGrant google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.CreateEntitlement (LRO) google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.CreateGrant google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.DeleteEntitlement (LRO) google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.DenyGrant google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.RevokeGrant (LRO) google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.UpdateEntitlement (LRO) google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.ApproveGrant google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.CreateEntitlement (LRO) google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.CreateGrant google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.DeleteEntitlement (LRO) google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.DenyGrant google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.RevokeGrant (LRO) google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.UpdateEntitlement (LRO) google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.ApproveGrant google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.CreateEntitlement (LRO) google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.CreateGrant google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.DeleteEntitlement (LRO) google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.DenyGrant google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.RevokeGrant (LRO) google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.UpdateEntitlement (LRO) API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Privileged Access Manager. google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager The following audit logs are associated with methods belonging to google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager .
- Filter for this method : protoPayload.methodName="google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.ListGrants" RevokeGrant Method : google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.RevokeGrant Audit log type : Admin activity Permissions : privilegedaccessmanager.grants.revoke - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.RevokeGrant" UpdateEntitlement Method : google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.UpdateEntitlement Audit log type : Admin activity Permissions : privilegedaccessmanager.entitlements.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager.UpdateEntitlement" google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager The following audit logs are associated with methods belonging to google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager .
- Filter for this method : protoPayload.methodName="google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.ListGrants" RevokeGrant Method : google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.RevokeGrant Audit log type : Admin activity Permissions : privilegedaccessmanager.grants.revoke - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.RevokeGrant" UpdateEntitlement Method : google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.UpdateEntitlement Audit log type : Admin activity Permissions : privilegedaccessmanager.entitlements.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.privilegedaccessmanager.v1.PrivilegedAccessManager.UpdateEntitlement" google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager The following audit logs are associated with methods belonging to google.cloud.privilegedaccessmanager.v1alpha.PrivilegedAccessManager .
- Filter for this method : protoPayload.methodName="google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.ListGrants" RevokeGrant Method : google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.RevokeGrant Audit log type : Admin activity Permissions : privilegedaccessmanager.grants.revoke - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.RevokeGrant" UpdateEntitlement Method : google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.UpdateEntitlement Audit log type : Admin activity Permissions : privilegedaccessmanager.entitlements.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.privilegedaccessmanager.v1beta.PrivilegedAccessManager.UpdateEntitlement" System events System Event audit logs are generated by GCP systems, not direct user action.

### "Configure temporary access \_|\_ Identity and Access Management (IAM) \_\

- URL: [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to use conditional role bindings to manage just-in-time privileged access to projects .
- Grant temporary access A conditional role binding can be used to grant time-bounded access to a resource, ensuring that a user can no longer access the resource after the specified expiry date and time.
- For example, you can grant temporary access to a project that starts and stops at a specified time or on a scheduled and recurring basis.
- HTTP method and URL: POST https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT ID :setIamPolicy Request JSON body: { "policy": { "etag": "BwWKmjvelug=", "version": 3, "bindings": [ { "role": "roles/owner", "members": [ "user:my-user@example.com" ] }, { "role": "roles/bigquery.dataViewer", "members": [ "group:my-group@example.com" ], "condition": { "title": "Business hours", "description": "Business hours Monday-Friday", "expression": "request.time.getHours('Europe/Berlin') >= 9 && request.time.getHours('Europe/Berlin') <= 17 && request.time.getDayOfWeek('Europe/Berlin') >= 1 && request.time.getDayOfWeek('Europe/Berlin') <= 5" } } ] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "IAM overview \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- Source ID: `site-api-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Privileged Access Manager (PAM) : With Privileged Access Manager, you can let principals request and be given temporary, auditable access to resources.
- Advanced access control In addition to allow policies, IAM provides the following access control mechanisms to help you refine who has access to what resources: Additional policy types : IAM offers the following policy types in addition to allow policies: Deny policies : Deny policies prevent principals from using certain permissions, even if they're granted a role with the permission.
- For example, you could require that principals request access each time they want to view a sensitive resource instead of permanently granting them a IAM role.
- You can also configure whether principals are required to provide justifications or get approvals when they request access.

### "Best practices for using service accounts securely \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Use the Service Account Credentials API for temporary privilege elevation Some applications only require access to certain resources at specific times or under specific circumstances.
- Permissions that enable a user to impersonate a service account or attach a service account to a resource include the following: iam.serviceAccounts.getAccessToken iam.serviceAccounts.getOpenIdToken iam.serviceAccounts.actAs iam.serviceAccounts.implicitDelegation iam.serviceAccounts.signBlob iam.serviceAccounts.signJwt iam.serviceAccountKeys.create deploymentmanager.deployments.create cloudbuild.builds.create Roles that contain some of these permissions include (but aren't limited to): Owner ( roles/owner ) Editor ( roles/editor ) Service Account User ( roles/iam.serviceAccountUser ) Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Workload Identity User ( roles/iam.workloadIdentityUser ) Deployment Manager Editor ( roles/deploymentmanager.editor ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Before you assign any of these roles to a user, ask yourself: Which resources inside and outside the current Google Cloud project could the user gain access to by impersonating the service account?
- Don't run code from less protected sources on compute resources that have a privileged service account attached When you attach a service account to a compute resource, such as a VM instance, processes running on that resource can use the metadata server to request access tokens and ID tokens .
- Allow policy, group, or custom role modifications: A user who doesn't have access to a privileged service account might still have permission to modify the allow policies of the service account, enclosing Google Cloud project, or folder.

