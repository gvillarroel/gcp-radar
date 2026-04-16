---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.402Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "IAM service account tags"
feature_slug: "iam-service-account-tags"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines"
  - "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/service-accounts-create"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts"
keywords:
  - "iam"
  - "account"
  - "tags"
  - "accounts"
  - "can"
  - "be"
  - "tagged"
  - "to"
---

# IAM service account tags

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

IAM service accounts can be tagged to conditionally grant or deny access to specific service accounts.

## Extended Definition

IAM service accounts can be tagged to conditionally grant or deny access to specific service accounts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)
- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts](https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts)

## Supporting Pages

### "Best practices for using service accounts in pipelines \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines](https://docs.cloud.google.com/iam/docs/best-practices-for-using-service-accounts-in-deployment-pipelines)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use dedicated service accounts per deployment pipeline When you let multiple deployment pipelines use the same service account, IAM can't differentiate between the pipelines.
- To perform the deployment, the deployment pipeline typically can't use your identity because: The source code and its metadata might not indicate that you were the author, or the author information isn't tamper-proof (as in the case of unsigned Git commits) The identity you used to submit source code might be different from your identity for Google Cloud, and the two identities can't be mapped Most deployment pipelines therefore perform deployments under their own identity by using a service account.
- Avoid attaching service accounts to VM instances used by CI/CD systems For applications deployed on Compute Engine that need access to Google Cloud resources, it's typically best to attach a service account to the underlying VM instance .
- Home Documentation Security IAM Identity and Access Management (IAM) Guides Send feedback Best practices for using service accounts in pipelines Stay organized with collections Save and categorize content based on your preferences.

### "Best practices for using service accounts securely \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Linux instances, you can enforce that SSH access is more restrictive than access to the attached service account by using OS Login: To connect to a VM instance that has OS Login enabled, a user must not only be allowed to use OS Login , but must also have the iam.serviceAccounts.actAs permission on the attached service account.
- Permissions that enable a user to impersonate a service account or attach a service account to a resource include the following: iam.serviceAccounts.getAccessToken iam.serviceAccounts.getOpenIdToken iam.serviceAccounts.actAs iam.serviceAccounts.implicitDelegation iam.serviceAccounts.signBlob iam.serviceAccounts.signJwt iam.serviceAccountKeys.create deploymentmanager.deployments.create cloudbuild.builds.create Roles that contain some of these permissions include (but aren't limited to): Owner ( roles/owner ) Editor ( roles/editor ) Service Account User ( roles/iam.serviceAccountUser ) Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Workload Identity User ( roles/iam.workloadIdentityUser ) Deployment Manager Editor ( roles/deploymentmanager.editor ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Before you assign any of these roles to a user, ask yourself: Which resources inside and outside the current Google Cloud project could the user gain access to by impersonating the service account?
- Roles that contain that permission include: Owner ( roles/owner ) Security Admin ( roles/iam.securityAdmin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Roles that include the iam.serviceAccounts.setIamPolicy permission give a user full control over a service account: The user can grant themselves permission to impersonate the service account, which gives the user the ability to access the same resources as the service account.
- Although service accounts are a useful tool, there are several ways in which a service account can be abused: Privilege escalation: A bad actor might gain access to resources they otherwise wouldn't have access to by impersonating the service account.

### "Create service accounts \_|\_ Identity and Access Management (IAM) \_|\_\

- URL: [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should receive a JSON response similar to the following: { "name": "projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com", "projectId": "my-project", "uniqueId": "123456789012345678901", "email": "my-service-account@my-project.iam.gserviceaccount.com", "displayName": "My service account", "etag": "BwUp3rVlzes=", "description": "A service account for running jobs in my project", "oauth2ClientId": "987654321098765432109" } After you create a service account, grant one or more roles to the service account so that it can act on your behalf.
- To create the service account, run the gcloud iam service-accounts create command: gcloud iam service-accounts create SERVICE ACCOUNT NAME \ --description = " DESCRIPTION " \ --display-name = " DISPLAY NAME " Replace the following values: SERVICE ACCOUNT NAME : the name of the service account DESCRIPTION : an optional description of the service account DISPLAY NAME : a service account name to display in the Google Cloud console Optional: To grant your service account an IAM role on your project, run the gcloud projects add-iam-policy-binding command: gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" \ --role = " ROLE NAME " Replace the following values: PROJECT ID : the project ID SERVICE ACCOUNT NAME : the name of the service account ROLE NAME : a role name, such as roles/compute.osLogin Optional: To allow users to attach the service account to other resources , run the gcloud iam service-accounts add-iam-policy-binding command to grant a user the Service Account User role ( roles/iam.serviceAccountUser ) on the service account: gcloud iam service-accounts add-iam-policy-binding \ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --member = "user: USER EMAIL " \ --role = "roles/iam.serviceAccountUser" Replace the following values: PROJECT ID : the project ID SERVICE ACCOUNT NAME : the name of the service account USER EMAIL : the email address for the user C++ To learn how to install and use the client library for IAM, see IAM client libraries .
- String projectId = "your-project-id" ; String serviceAccountName = "my-service-account-name" ; createServiceAccount ( projectId , serviceAccountName ); } // Creates a service account. public static ServiceAccount createServiceAccount ( String projectId , String serviceAccountName ) throws IOException { ServiceAccount serviceAccount = ServiceAccount . newBuilder () . setDisplayName ( "your-display-name" ) . build (); CreateServiceAccountRequest request = CreateServiceAccountRequest . newBuilder () . setName ( ProjectName . of ( projectId ). toString ()) . setAccountId ( serviceAccountName ) . setServiceAccount ( serviceAccount ) . build (); // Initialize client that will be used to send requests. // This client only needs to be created once, and can be reused for multiple requests. try ( IAMClient iamClient = IAMClient . create ()) { serviceAccount = iamClient . createServiceAccount ( request ); System . out . println ( "Created service account: " + serviceAccount . getEmail ()); } return serviceAccount ; } } Python To learn how to install and use the client library for IAM, see IAM client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content APIs Explorer (browser) Copy the request body and open the method reference page .

### "Example logs for service accounts \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts](https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows a log entry for a principal using the iam.serviceAccounts.actAs permission to attach a service account to a Compute Engine instance. { "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" }, "serviceName" : "iam.googleapis.com" , "methodName" : "iam.serviceAccounts.actAs" , "authorizationInfo" : [ { "resource" : "projects/-/serviceAccounts/sample-service-account@sample-project.iam.gserviceaccount.com" , "permission" : "iam.serviceAccounts.actAs" , "granted" : true , "permissionType" : "ADMIN WRITE" } ], "resourceName" : "projects/-/serviceAccounts/sample-service-account@sample-project.iam.gserviceaccount.com" , "request" : { "name" : "sample-service-account@sample-project.iam.gserviceaccount.com" , "project number" : "787155667719" , "@type" : "type.googleapis.com/CanActAsServiceAccountRequest" }, "response" : { "success" : true , "@type" : "type.googleapis.com/CanActAsServiceAccountResponse" } }, "insertId" : "vojt0vd4fdy" , "resource" : { "type" : "audited resource" , "labels" : { "project id" : "sample-project" , "method" : "iam.serviceAccounts.actAs" , "service" : "iam.googleapis.com" } }, "timestamp" : "2024-08-05T21:56:56.097601933Z" , "severity" : "NOTICE" , "logName" : "projects/sample-project/logs/cloudaudit.googleapis.com%2Factivity" , "receiveTimestamp" : "2024-08-05T21:56:56.097601933Z" } Logs for setting up a Compute Engine instance to run as a service account If a user has the Service Account User role ( roles/iam.serviceAccountUser ) on a service account, the user can create a Compute Engine virtual machine (VM) instance that runs as that service account.
- In this example, the user example-user@example.com created an access token for the service account my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" }, "methodName" : "GenerateAccessToken" , "request" : { "@type" : "type.googleapis.com/google.iam.credentials.v1.GenerateAccessTokenRequest" , "name" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "serviceName" : "iamcredentials.googleapis.com" }, "resource" : { "labels" : { "email id" : "my-service-account@my-project.iam.gserviceaccount.com" , "project id" : "my-project" , "unique id" : "123456789012345678901" }, "type" : "service account" } } Logs for authenticating with short-lived credentials After you create short-lived credentials for a service account, you can use the credentials to impersonate the service account when you call Google Cloud APIs.
- Also, the resource.type field is set to project : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" }, "methodName" : "SetIamPolicy" , "request" : { "@type" : "type.googleapis.com/google.iam.v1.SetIamPolicyRequest" , "resource" : "my-project" }, "resourceName" : "projects/my-project" , "response" : { "@type" : "type.googleapis.com/google.iam.v1.Policy" , "bindings" : [ { "members" : [ "serviceAccount:my-service-account@my-project.iam.gserviceaccount.com" ], "role" : "roles/resourcemanager.organizationViewer" } ] }, "serviceName" : "cloudresourcemanager.googleapis.com" }, "resource" : { "type" : "project" } } Logs for attaching service accounts to resources If a user has the Service Account User role ( roles/iam.serviceAccountUser ) on a service account, the user can attach the service account to resources .
- In this example, the user example-user@example.com created a key for the service account my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" , }, "methodName" : "google.iam.admin.v1.CreateServiceAccountKey" , "request" : { "@type" : "type.googleapis.com/google.iam.admin.v1.CreateServiceAccountKeyRequest" , "name" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "resourceName" : "projects/-/serviceAccounts/123456789012345678901" }, "resource" : { "type" : "service account" } } Logs for authenticating with a service account key After you create a service account key, you can use the key to request an OAuth 2.0 access token for a service account , then use the access token to authenticate requests to Google Cloud services.

