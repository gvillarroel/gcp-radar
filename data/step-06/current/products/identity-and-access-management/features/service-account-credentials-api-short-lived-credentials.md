---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.455Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Service Account Credentials API short-lived credentials"
feature_slug: "service-account-credentials-api-short-lived-credentials"
latest_feature_date: "2018-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/create-downscoped-short-lived-credentials"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/service-accounts-create"
keywords:
  - "account"
  - "credentials"
  - "api"
  - "short"
  - "lived"
  - "creates"
  - "through"
  - "the"
---

# Service Account Credentials API short-lived credentials

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Creates short-lived service account credentials through the Service Account Credentials API.

## Extended Definition

Creates short-lived service account credentials through the Service Account Credentials API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/create-downscoped-short-lived-credentials](https://docs.cloud.google.com/iam/docs/create-downscoped-short-lived-credentials)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts](https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts)
- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create)

## Supporting Pages

### "Create a downscoped short-lived credential \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/create-downscoped-short-lived-credentials](https://docs.cloud.google.com/iam/docs/create-downscoped-short-lived-credentials)
- Source ID: `site-docs-root-2`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is used to ensure access is restricted to only objects starting with this prefix string. / async function getTokenFromBroker ( bucketName , objectPrefix ) { const googleAuth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/cloud-platform' , }); // Define the Credential Access Boundary object. const cab = { // Define the access boundary. accessBoundary : { // Define the single access boundary rule. accessBoundaryRules : [ { availableResource : //storage.googleapis.com/projects/ /buckets/ ${ bucketName } , // Downscoped credentials will have readonly access to the resource. availablePermissions : [ 'inRole:roles/storage.objectViewer' ], // Only objects starting with the specified prefix string in the object name // will be allowed read access. availabilityCondition : { expression : "resource.name.startsWith('projects/ /buckets/" + ${ bucketName } /objects/ ${ objectPrefix } ') , }, }, ], }, }; // Obtain an authenticated client via ADC. const client = await googleAuth . getClient (); // Use the client to create a DownscopedClient. const cabClient = new DownscopedClient ( client , cab ); // Refresh the tokens. const refreshedAccessToken = await cabClient . getAccessToken (); // This will need to be passed to the token consumer. return refreshedAccessToken ; } The following example shows how a token consumer can provide a refresh handler that automatically obtains and refreshes downscoped tokens: // Imports the Google Auth and Google Cloud libraries. const { OAuth2Client } = require ( ' google-auth-library ' ); const { Storage } = require ( ' @google-cloud/storage ' ); / Simulates token consumer generating calling GCS APIs using generated downscoped tokens for specified bucket. @param bucketName The name of the Cloud Storage bucket. @param objectName The name of the object in the Cloud Storage bucket to read. / async function tokenConsumer ( bucketName , objectName ) { // Create the OAuth credentials (the consumer). const oauth2Client = new OAuth2Client (); // We are defining a refresh handler instead of a one-time access // token/expiry pair. // This will allow the consumer to obtain new downscoped tokens on // demand every time a token is expired, without any additional code // changes. oauth2Client . refreshHandler = async () = > { // The common pattern of usage is to have a token broker pass the // downscoped short-lived access tokens to a token consumer via some // secure authenticated channel.
- For example, suppose you need to create a downscoped short-lived credential that allows a service account to create objects in a bucket: At a minimum, you must grant a role to the service account that includes the storage.objects.create permission, such as the Storage Object Creator role ( roles/storage.objectCreator ).
- GoogleCredentials sourceCredentials = GoogleCredentials . getApplicationDefault () . createScoped ( "https://www.googleapis.com/auth/cloud-platform" ); // Initialize the Credential Access Boundary rules.
- GoogleCredentials sourceCredentials = GoogleCredentials . getApplicationDefault () . createScoped ( "https://www.googleapis.com/auth/cloud-platform" ); // Initialize the Credential Access Boundary rules.

### "Example logs for service accounts \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts](https://docs.cloud.google.com/iam/docs/audit-logging/examples-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this example, the user example-user@example.com created an access token for the service account my-service-account@my-project.iam.gserviceaccount.com : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "example-user@example.com" }, "methodName" : "GenerateAccessToken" , "request" : { "@type" : "type.googleapis.com/google.iam.credentials.v1.GenerateAccessTokenRequest" , "name" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "serviceName" : "iamcredentials.googleapis.com" }, "resource" : { "labels" : { "email id" : "my-service-account@my-project.iam.gserviceaccount.com" , "project id" : "my-project" , "unique id" : "123456789012345678901" }, "type" : "service account" } } Logs for authenticating with short-lived credentials After you create short-lived credentials for a service account, you can use the credentials to impersonate the service account when you call Google Cloud APIs.
- In this example, the service account is named my-service-account@my-project.iam.gserviceaccount.com , and the service account key ID is c71e040fb4b71d798ce4baca14e15ab62115aaef : { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalEmail" : "my-service-account@my-project.iam.gserviceaccount.com" , "serviceAccountKeyName" : "//iam.googleapis.com/projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com/keys/c71e040fb4b71d798ce4baca14e15ab62115aaef" }, "methodName" : "google.cloud.redis.v1.CloudRedis.CreateInstance" , "request" : { "@type" : "type.googleapis.com/google.cloud.redis.v1.CreateInstanceRequest" } } } Logs for impersonating a service account to access Google Cloud This section shows the log entries you receive when you create short-lived credentials for a service account, then use the credentials to impersonate the service account and access Google Cloud.
- The following example shows a log entry for granting the Service Account User role to a principal: { "logName" : "projects/my-project/logs/cloudaudit.googleapis.com%2Factivity" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "methodName" : "google.iam.admin.v1.SetIAMPolicy" , "request" : { "@type" : "type.googleapis.com/google.iam.v1.SetIamPolicyRequest" , "resource" : "projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com" }, "resourceName" : "projects/-/serviceAccounts/123456789012345678901" , "response" : { "@type" : "type.googleapis.com/google.iam.v1.Policy" , "bindings" : [ { "members" : [ "user:my-user@example.com" ], "role" : "roles/iam.serviceAccountUser" } ] } }, "resource" : { "type" : "service account" } } When you grant the Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ), which allows a principal to create short-lived credentials, IAM generates a similar log entry.
- For example, suppose that the user example-user@example.com creates short-lived credentials for the service account my-service-account@my-project.iam.gserviceaccount.com .

### "Best practices for using service accounts securely \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- To help ensure that the different parts of your application only have access to the resources they need, use the Service Account Credentials API for temporary privilege elevation: Create dedicated service accounts for each part of the application or use case and only grant the service account access to the necessary resources.
- Use the Service Account Credentials API for temporary privilege elevation Some applications only require access to certain resources at specific times or under specific circumstances.
- Grant the supervisor service account the Service Account Token Creator role on the other service accounts so that it can request short-lived access tokens for these service accounts.
- For help with creating short-lived credentials, see Create short-lived credentials for a service account .

### "Create service accounts \_|\_ Identity and Access Management (IAM) \_|\_\

- URL: [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String projectId = "your-project-id" ; String serviceAccountName = "my-service-account-name" ; createServiceAccount ( projectId , serviceAccountName ); } // Creates a service account. public static ServiceAccount createServiceAccount ( String projectId , String serviceAccountName ) throws IOException { ServiceAccount serviceAccount = ServiceAccount . newBuilder () . setDisplayName ( "your-display-name" ) . build (); CreateServiceAccountRequest request = CreateServiceAccountRequest . newBuilder () . setName ( ProjectName . of ( projectId ). toString ()) . setAccountId ( serviceAccountName ) . setServiceAccount ( serviceAccount ) . build (); // Initialize client that will be used to send requests. // This client only needs to be created once, and can be reused for multiple requests. try ( IAMClient iamClient = IAMClient . create ()) { serviceAccount = iamClient . createServiceAccount ( request ); System . out . println ( "Created service account: " + serviceAccount . getEmail ()); } return serviceAccount ; } } Python To learn how to install and use the client library for IAM, see IAM client libraries .
- HTTP method and URL: POST https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts Request JSON body: { "accountId": " SA NAME ", "serviceAccount": { "description": " SA DESCRIPTION ", "displayName": " SA DISPLAY NAME " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content APIs Explorer (browser) Copy the request body and open the method reference page .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

