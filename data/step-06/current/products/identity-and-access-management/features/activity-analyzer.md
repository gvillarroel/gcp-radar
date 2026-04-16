---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.422Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Activity Analyzer"
feature_slug: "activity-analyzer"
latest_feature_date: "2021-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/service-account-overview"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys"
keywords:
  - "activity"
  - "analyzer"
  - "shows"
  - "when"
  - "accounts"
  - "and"
  - "keys"
  - "were"
---

# Activity Analyzer

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Activity Analyzer shows when service accounts and keys were last used to call a Google API.

## Extended Definition

Activity Analyzer shows when service accounts and keys were last used to call a Google API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts](https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts)
- [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)

## Supporting Pages

### "Best practices for using service accounts securely \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Protect against non-repudiation threats Whenever you notice suspicious activity affecting one of your resources on Google Cloud, Cloud Audit Logs are an important source of information to find out when the activity happened and which users were involved.
- Permissions that enable a user to impersonate a service account or attach a service account to a resource include the following: iam.serviceAccounts.getAccessToken iam.serviceAccounts.getOpenIdToken iam.serviceAccounts.actAs iam.serviceAccounts.implicitDelegation iam.serviceAccounts.signBlob iam.serviceAccounts.signJwt iam.serviceAccountKeys.create deploymentmanager.deployments.create cloudbuild.builds.create Roles that contain some of these permissions include (but aren't limited to): Owner ( roles/owner ) Editor ( roles/editor ) Service Account User ( roles/iam.serviceAccountUser ) Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Workload Identity User ( roles/iam.workloadIdentityUser ) Deployment Manager Editor ( roles/deploymentmanager.editor ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Before you assign any of these roles to a user, ask yourself: Which resources inside and outside the current Google Cloud project could the user gain access to by impersonating the service account?
- To record all impersonation events, you must also enable data access logs for the following APIs: Identity and Access Management (IAM) API in all Google Cloud projects that contain service accounts Security Token Service API in all Google Cloud projects that contain workload identity pools By enabling these logs, you make sure that an entry is added to the Cloud Audit Logs whenever a user requests an access token or an ID token for a service account.
- The same level of access control doesn't apply to VM instances that use metadata-based keys or to Windows instances: Publishing an SSH key to metadata or requesting Windows credentials requires access to the VM instance's metadata and the iam.serviceAccounts.actAs permission on the attached service account.

### "Example logs for service accounts \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts](https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- In this example, the service account is named my-service-account@my-project.iam.gserviceaccount.com , and the service account key ID is c71e040fb4b71d798ce4baca14e15ab62115aaef : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "my-service-account@my-project.iam.gserviceaccount.com" , "serviceAccountKeyName" : "//iam.googleapis.com/projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com/keys/c71e040fb4b71d798ce4baca14e15ab62115aaef" }, "methodName" : "google.cloud.redis.v1.CloudRedis.CreateInstance" , "request" : { "@type" : "type.googleapis.com/google.cloud.redis.v1.CreateInstanceRequest" } } } Logs for impersonating a service account to access Google Cloud This section shows the log entries you receive when you create short-lived credentials for a service account, then use the credentials to impersonate the service account and access Google Cloud.
- As a result, the protoPayload.authenticationInfo.principalEmail field is set to example-user@example.com , and the protoPayload.request.serviceAccounts[0].email field is set to my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" }, "methodName" : "v1.compute.instances.insert" , "request" : { "@type" : "type.googleapis.com/compute.instances.insert" , "serviceAccounts" : [ { "email" : "my-service-account@my-project.iam.gserviceaccount.com" } ] }, "resourceName" : "projects/my-project/zones/us-central1-a/instances/my-instance" }, "resource" : { "type" : "gce instance" } } Logs for accessing Google Cloud with a service account key This section shows the log entries you receive when you create a service account key, then use the key to access Google Cloud.
- The following example shows a log entry for granting the Service Account User role to a principal: { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "methodName" : "google.iam.admin.v1.SetIAMPolicy" , "request" : { "@type" : "type.googleapis.com/google.iam.v1.SetIamPolicyRequest" , "resource" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "resourceName" : "projects/-/serviceAccounts/123456789012345678901" , "response" : { "@type" : "type.googleapis.com/google.iam.v1.Policy" , "bindings" : [ { "members" : [ "user:my-user@example.com" ], "role" : "roles/iam.serviceAccountUser" } ] } }, "resource" : { "type" : "service account" } } When you grant the Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ), which allows a principal to create short-lived credentials, IAM generates a similar log entry.
- The following example shows a log entry for a principal using the iam.serviceAccounts.actAs permission to attach a service account to a Compute Engine instance. { "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" }, "serviceName" : "iam.googleapis.com" , "methodName" : "iam.serviceAccounts.actAs" , "authorizationInfo" : [ { "resource" : "projects/-/serviceAccounts/sample-service-account@sample-project.iam.gserviceaccount.com" , "permission" : "iam.serviceAccounts.actAs" , "granted" : true , "permissionType" : "ADMIN WRITE" } ], "resourceName" : "projects/-/serviceAccounts/sample-service-account@sample-project.iam.gserviceaccount.com" , "request" : { "name" : "sample-service-account@sample-project.iam.gserviceaccount.com" , "project number" : "787155667719" , "@type" : "type.googleapis.com/CanActAsServiceAccountRequest" }, "response" : { "success" : true , "@type" : "type.googleapis.com/CanActAsServiceAccountResponse" } }, "insertId" : "vojt0vd4fdy" , "resource" : { "type" : "audited resource" , "labels" : { "project id" : "sample-project" , "method" : "iam.serviceAccounts.actAs" , "service" : "iam.googleapis.com" } }, "timestamp" : "2024-08-05T21:56:56.097601933Z" , "severity" : "NOTICE" , "logName" : "projects/sample-project/logs/cloudaudit.googleapis.com%2Factivity" , "receiveTimestamp" : "2024-08-05T21:56:56.097601933Z" } Logs for setting up a Compute Engine instance to run as a service account If a user has the Service Account User role ( roles/iam.serviceAccountUser ) on a service account, the user can create a Compute Engine virtual machine (VM) instance that runs as that service account.

### "Service accounts overview \_|\_ Identity and Access Management (IAM) \_\

- URL: [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Note: The default Compute Engine and App Engine service accounts are granted the Editor role ( roles/editor ) on the project when they are created.
- Use caution when letting users impersonate highly privileged service accounts, such as the Compute Engine and App Engine default service accounts .
- Activity Analyzer lets you check when a service account or key was last used.
- When managing access for service accounts, use the following principal identifiers to refer to the service accounts: Principal type Principal identifier An individual service account serviceAccount: SA EMAIL ADDRESS Example: serviceAccount:my-service-account@my-project.iam.gserviceaccount.com All service accounts in a project principalSet://cloudresourcemanager.googleapis.com/ projects/ PROJECT NUMBER / type/ ServiceAccount Example: principalSet://cloudresourcemanager.googleapis.com/ projects/ 123456789012/ type/ ServiceAccount All service accounts in all projects in a folder principalSet://cloudresourcemanager.googleapis.com/ folders/ FOLDER NUMBER / type/ ServiceAccount Example: principalSet://cloudresourcemanager.googleapis.com/ folders/ 123456789012/ type/ ServiceAccount Note : Moving projects into or out of a folder changes the service accounts included in this principal set.

### "Best practices for managing service account keys \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- The best way to mitigate these threats is to avoid user-managed service account keys and to use other methods to authenticate service accounts whenever possible.
- Because the Editor roles grant permission to create or upload service account keys, a bad actor can create new keys for existing service accounts and use these keys to either escalate their own access, or to hand the keys to other users to obtain access to project resources.
- You can reduce the risk of accidentally leaving copies of service account keys in temporary locations by using the Google Cloud CLI : The gcloud iam service-accounts keys create command lets you write the service account key file straight to the location where you need it.
- Protecting against non-repudiation threats When you notice suspicious activity affecting your Google Cloud resources and want to analyze its origins, you need data that lets you reconstruct the chain of events that led to the suspicious activity.

