---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.413Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Authentication activity view"
feature_slug: "authentication-activity-view"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/service-account-overview"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines"
keywords:
  - "authentication"
  - "activity"
  - "view"
  - "lets"
  - "you"
  - "when"
  - "accounts"
  - "and"
---

# Authentication activity view

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Lets you view when service accounts and keys were last used to call a Google API.

## Extended Definition

Lets you view when service accounts and keys were last used to call a Google API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts](https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)

## Supporting Pages

### "Best practices for using service accounts securely \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In these cases, you can use Activity Analyzer to view the most recent authentication activities for your service accounts.
- To record all impersonation events, you must also enable data access logs for the following APIs: Identity and Access Management (IAM) API in all Google Cloud projects that contain service accounts Security Token Service API in all Google Cloud projects that contain workload identity pools By enabling these logs, you make sure that an entry is added to the Cloud Audit Logs whenever a user requests an access token or an ID token for a service account.
- Protect against non-repudiation threats Whenever you notice suspicious activity affecting one of your resources on Google Cloud, Cloud Audit Logs are an important source of information to find out when the activity happened and which users were involved.
- Limit metadata server access to selected users and processes When you attach a service account to a VM instance, workloads deployed on the VM can access the metadata server to request tokens for the service accounts.

### "Service accounts overview \_|\_ Identity and Access Management (IAM) \_\

- URL: [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security IAM Guides Send feedback Service accounts overview Stay organized with collections Save and categorize content based on your preferences.
- Activity Analyzer lets you check when a service account or key was last used.
- For example, you could set up Workload Identity Federation to allow external workloads to authenticate as service accounts, or create a service account key and use it in any environment to obtain OAuth 2.0 access tokens.
- For example, if you have a service account in the project my-service-accounts and a Cloud SQL instance in the project my-application , you must enable the Cloud SQL API in both my-service-accounts and my-application .

### "Example logs for service accounts \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts](https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this example, the service account is named my-service-account@my-project.iam.gserviceaccount.com , and the service account key ID is c71e040fb4b71d798ce4baca14e15ab62115aaef : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "my-service-account@my-project.iam.gserviceaccount.com" , "serviceAccountKeyName" : "//iam.googleapis.com/projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com/keys/c71e040fb4b71d798ce4baca14e15ab62115aaef" }, "methodName" : "google.cloud.redis.v1.CloudRedis.CreateInstance" , "request" : { "@type" : "type.googleapis.com/google.cloud.redis.v1.CreateInstanceRequest" } } } Logs for impersonating a service account to access Google Cloud This section shows the log entries you receive when you create short-lived credentials for a service account, then use the credentials to impersonate the service account and access Google Cloud.
- As a result, the protoPayload.authenticationInfo.principalEmail field is set to example-user@example.com , and the protoPayload.request.serviceAccounts[0].email field is set to my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" }, "methodName" : "v1.compute.instances.insert" , "request" : { "@type" : "type.googleapis.com/compute.instances.insert" , "serviceAccounts" : [ { "email" : "my-service-account@my-project.iam.gserviceaccount.com" } ] }, "resourceName" : "projects/my-project/zones/us-central1-a/instances/my-instance" }, "resource" : { "type" : "gce instance" } } Logs for accessing Google Cloud with a service account key This section shows the log entries you receive when you create a service account key, then use the key to access Google Cloud.
- In this example, the user example-user@example.com created an access token for the service account my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" }, "methodName" : "GenerateAccessToken" , "request" : { "@type" : "type.googleapis.com/google.iam.credentials.v1.GenerateAccessTokenRequest" , "name" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "serviceName" : "iamcredentials.googleapis.com" }, "resource" : { "labels" : { "email id" : "my-service-account@my-project.iam.gserviceaccount.com" , "project id" : "my-project" , "unique id" : "123456789012345678901" }, "type" : "service account" } } Logs for authenticating with short-lived credentials After you create short-lived credentials for a service account, you can use the credentials to impersonate the service account when you call Google Cloud APIs.
- In this example, the user example-user@example.com created a key for the service account my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" , }, "methodName" : "google.iam.admin.v1.CreateServiceAccountKey" , "request" : { "@type" : "type.googleapis.com/google.iam.admin.v1.CreateServiceAccountKeyRequest" , "name" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "resourceName" : "projects/-/serviceAccounts/123456789012345678901" }, "resource" : { "type" : "service account" } } Logs for authenticating with a service account key After you create a service account key, you can use the key to request an OAuth 2.0 access token for a service account , then use the access token to authenticate requests to Google Cloud services.

### "Best practices for using service accounts in pipelines \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)
- Source ID: `site-docs-root-2`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- If you use a dedicated service account for each deployment pipeline , then this information lets you identify the deployment pipeline that initiated the activity and might also help you narrow down which code changes and pipeline runs could have been responsible.
- But identifying the exact pipeline run and code change that led to the activity can be difficult without more information that lets you correlate Cloud Audit Logs with the logs of your deployment pipeline.
- Align the retention periods of deployment pipeline logs and Cloud Audit Logs To analyze suspicious activity related to a deployment pipeline, you typically need multiple types of logs, including Admin Activity audit logs , Data Access audit logs , and the logs of your deployment pipeline.
- Deployment pipelines differ from interactive tools like the Google Cloud console or the gcloud CLI in the way they interact with Identity and Access Management, and you must take these differences into consideration when securing your Google Cloud resources.

