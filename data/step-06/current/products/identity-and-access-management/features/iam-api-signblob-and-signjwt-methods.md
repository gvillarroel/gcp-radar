---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.447Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "IAM API signBlob and signJwt methods"
feature_slug: "iam-api-signblob-and-signjwt-methods"
latest_feature_date: "2020-06-22"
deprecation_date: "2021-07-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/reference/rest"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds"
  - "https://docs.cloud.google.com/iam/docs/authentication"
  - "https://docs.cloud.google.com/iam/docs/audit-logging"
keywords:
  - "iam"
  - "api"
  - "signblob"
  - "and"
  - "signjwt"
  - "methods"
  - "the"
  - "are"
---

# IAM API signBlob and signJwt methods

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

The IAM API signBlob and signJwt methods are deprecated in favor of the Service Account Credentials API; deprecated on 2021-07-01.

## Extended Definition

The IAM API signBlob and signJwt methods are deprecated in favor of the Service Account Credentials API; deprecated on 2021-07-01.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest)
- [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds)
- [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging)

## Supporting Pages

### Identity and Access Management (IAM) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.serviceAccounts Methods create POST /v1/{name=projects/ }/serviceAccounts Creates a ServiceAccount . delete DELETE /v1/{name=projects/ /serviceAccounts/ } Deletes a ServiceAccount . disable POST /v1/{name=projects/ /serviceAccounts/ }:disable Disables a ServiceAccount immediately. enable POST /v1/{name=projects/ /serviceAccounts/ }:enable Enables a ServiceAccount that was disabled by DisableServiceAccount . get GET /v1/{name=projects/ /serviceAccounts/ } Gets a ServiceAccount . getIamPolicy POST /v1/{resource=projects/ /serviceAccounts/ }:getIamPolicy Gets the IAM policy that is attached to a ServiceAccount . list GET /v1/{name=projects/ }/serviceAccounts Lists every ServiceAccount that belongs to a specific project. patch PATCH /v1/{serviceAccount.name=projects/ /serviceAccounts/ } Patches a ServiceAccount . setIamPolicy POST /v1/{resource=projects/ /serviceAccounts/ }:setIamPolicy Sets the IAM policy that is attached to a ServiceAccount . signBlob (deprecated) POST /v1/{name=projects/ /serviceAccounts/ }:signBlob Signs a blob using the system-managed private key for a ServiceAccount . signJwt (deprecated) POST /v1/{name=projects/ /serviceAccounts/ }:signJwt Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount . testIamPermissions POST /v1/{resource=projects/ /serviceAccounts/ }:testIamPermissions Tests whether the caller has the specified permissions on a ServiceAccount . undelete POST /v1/{name=projects/ /serviceAccounts/ }:undelete Restores a deleted ServiceAccount . update PUT /v1/{name=projects/ /serviceAccounts/ } Note: We are in the process of deprecating this method.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://iam.googleapis.com REST Resource: v3beta.folders.locations.accessPolicies Methods create POST /v3beta/{parent=folders/ /locations/ }/accessPolicies Creates an access policy, and returns a long running operation. delete DELETE /v3beta/{name=folders/ /locations/ /accessPolicies/ } Deletes an access policy. get GET /v3beta/{name=folders/ /locations/ /accessPolicies/ } Gets an access policy. list GET /v3beta/{parent=folders/ /locations/ }/accessPolicies Lists access policies. patch PATCH /v3beta/{accessPolicy.name=folders/ /locations/ /accessPolicies/ } Updates an access policy. searchPolicyBindings GET /v3beta/{name=folders/ /locations/ /accessPolicies/ }:searchPolicyBindings Returns all policy bindings that bind a specific policy if a user has searchPolicyBindings permission on that policy.
- REST Resource: v1.projects.locations.workloadIdentityPools Methods create POST /v1/{parent=projects/ /locations/ }/workloadIdentityPools Creates a new WorkloadIdentityPool . delete DELETE /v1/{name=projects/ /locations/ /workloadIdentityPools/ } Deletes a WorkloadIdentityPool . get GET /v1/{name=projects/ /locations/ /workloadIdentityPools/ } Gets an individual WorkloadIdentityPool . getIamPolicy POST /v1/{resource=projects/ /locations/ /workloadIdentityPools/ }:getIamPolicy Gets the IAM policy of a WorkloadIdentityPool . list GET /v1/{parent=projects/ /locations/ }/workloadIdentityPools Lists all non-deleted WorkloadIdentityPool s in a project. patch PATCH /v1/{workloadIdentityPool.name=projects/ /locations/ /workloadIdentityPools/ } Updates an existing WorkloadIdentityPool . setIamPolicy POST /v1/{resource=projects/ /locations/ /workloadIdentityPools/ }:setIamPolicy Sets the IAM policies on a WorkloadIdentityPool testIamPermissions POST /v1/{resource=projects/ /locations/ /workloadIdentityPools/ }:testIamPermissions Returns the caller's permissions on a WorkloadIdentityPool undelete POST /v1/{name=projects/ /locations/ /workloadIdentityPools/ }:undelete Undeletes a WorkloadIdentityPool , as long as it was deleted fewer than 30 days ago.
- REST Resource: v1.locations.workforcePools Methods create POST /v1/{location=locations/ }/workforcePools Creates a new WorkforcePool . delete DELETE /v1/{name=locations/ /workforcePools/ } Deletes a WorkforcePool . get GET /v1/{name=locations/ /workforcePools/ } Gets an individual WorkforcePool . getIamPolicy POST /v1/{resource=locations/ /workforcePools/ }:getIamPolicy Gets IAM policies on a WorkforcePool . list GET /v1/{location=locations/ }/workforcePools Lists all non-deleted WorkforcePool s under the specified parent. patch PATCH /v1/{workforcePool.name=locations/ /workforcePools/ } Updates an existing WorkforcePool . setIamPolicy POST /v1/{resource=locations/ /workforcePools/ }:setIamPolicy Sets IAM policies on a WorkforcePool . testIamPermissions POST /v1/{resource=locations/ /workforcePools/ }:testIamPermissions Returns the caller's permissions on the WorkforcePool . undelete POST /v1/{name=locations/ /workforcePools/ }:undelete Undeletes a WorkforcePool , as long as it was deleted fewer than 30 days ago.

### "Service Account Credentials audit logging \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ GenerateAccessToken (LRO) GenerateIdToken (LRO) SignBlob (LRO) SignJwt (LRO) API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Service Account Credentials. google.iam.credentials.v1.IAMCredentials The following audit logs are associated with methods belonging to google.iam.credentials.v1.IAMCredentials .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Service Account Credentials audit logs use the service name iamcredentials.googleapis.com .
- Filter for this method : protoPayload.methodName="SignJwt" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- API methods in the following list that are marked with (LRO) are long-running operations (LROs).

### "Authenticate to IAM \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- Grant the required role to the principal that will attach the service account to other resources. gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member = "user: USER EMAIL " --role = roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for a Google Account Create the resource that will run your code, and attach the service account to that resource.
- To provide access to your project and your resources, grant a role to the service account: gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" --role = ROLE Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account ROLE : the role to grant Note : The --role flag affects which resources the service account can access in your project.
- Set the --service-account flag to the email address for the service account that you created. gcloud compute instances create INSTANCE NAME --zone = ZONE --service-account = SERVICE ACCOUNT EMAIL For more information about authenticating to Google APIs, see Authentication methods .

### "Identity and Access Management audit logging \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Identity and Access Management. google.iam.admin.v1.IAM The following audit logs are associated with methods belonging to google.iam.admin.v1.IAM .
- Query name Expression Service account created resource.type = "service account" protoPayload.serviceName = "iam.googleapis.com" protoPayload.methodName:"CreateServiceAccount" log id("cloudaudit.googleapis.com/activity") (protoPayload.request.account id:" SERVICE ACCOUNT SHORT ID " OR protoPayload.response.email:" SERVICE ACCOUNT EMAIL ") Service account deleted resource.type = "service account" protoPayload.serviceName = "iam.googleapis.com" protoPayload.methodName:"DeleteServiceAccount" log id("cloudaudit.googleapis.com/activity") resource.labels.email id:" SERVICE ACCOUNT EMAIL " Service account key created resource.type = "service account" protoPayload.serviceName = "iam.googleapis.com" protoPayload.methodName:"CreateServiceAccountKey" log id("cloudaudit.googleapis.com/activity") resource.labels.email id:" SERVICE ACCOUNT EMAIL " Service account key deleted resource.type = "service account" protoPayload.serviceName = "iam.googleapis.com" protoPayload.methodName:"DeleteServiceAccountKey" log id("cloudaudit.googleapis.com/activity") resource.labels.email id:" SERVICE ACCOUNT EMAIL " Any resource created, modified, or deleted log id("cloudaudit.googleapis.com/activity") AND protoPayload.methodName:("create" OR "delete" OR "update") Custom role updated log id("cloudaudit.googleapis.com/activity") resource.type = "iam role" protoPayload.serviceName = "iam.googleapis.com" protoPayload.methodName:"UpdateRole" resource.labels.role name:" ROLE NAME " Project-level allow policy updated resource.type = "project" AND log id("cloudaudit.googleapis.com/activity") AND protoPayload.methodName:"SetIamPolicy" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this method : protoPayload.methodName="google.iam.v3beta.PolicyBindings.SearchTargetPolicyBindings" UpdatePolicyBinding Method : google.iam.v3beta.PolicyBindings.UpdatePolicyBinding Audit log type : Admin activity Permissions : cloudresourcemanager.googleapis.com/projects.updatePolicyBinding - ADMIN WRITE iam.googleapis.com/principalaccessboundarypolicies.bind - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.iam.v3beta.PolicyBindings.UpdatePolicyBinding" google.iam.v3beta.PrincipalAccessBoundaryPolicies The following audit logs are associated with methods belonging to google.iam.v3beta.PrincipalAccessBoundaryPolicies .
- Filter for this method : protoPayload.methodName="google.iam.v3.PolicyBindings.SearchTargetPolicyBindings" UpdatePolicyBinding Method : google.iam.v3.PolicyBindings.UpdatePolicyBinding Audit log type : Admin activity Permissions : cloudresourcemanager.googleapis.com/projects.updatePolicyBinding - ADMIN WRITE iam.googleapis.com/principalaccessboundarypolicies.bind - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.iam.v3.PolicyBindings.UpdatePolicyBinding" google.iam.v3.PrincipalAccessBoundaryPolicies The following audit logs are associated with methods belonging to google.iam.v3.PrincipalAccessBoundaryPolicies .

