---
title: "Migrating to the Service Account Credentials API \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/migrating-to-credentials-api
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/migrating-to-credentials-api
  title: "Migrating to the Service Account Credentials API \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Migrating to the Service Account Credentials API | Identity and Access Management (IAM) | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
IAM
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X.509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin
Enabling audit logs
Migrating code for signing JWTs Signing JWTs with the REST API
Signing JWTs with a client library
Migrating code for signing binary blobs Signing binary blobs with the REST API
Signing binary blobs with a client library
Migrating code that uses the gcloud CLI
Checking quotas
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Migrating to the Service Account Credentials API
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Enabling audit logs
Migrating code for signing JWTs Signing JWTs with the REST API
Signing JWTs with a client library
Migrating code for signing binary blobs Signing binary blobs with the REST API
Signing binary blobs with a client library
Migrating code that uses the gcloud CLI
Checking quotas
What's next
The Service Account Credentials API creates short-lived
credentials for Identity and Access Management (IAM) service accounts. You can also
use this API to sign JSON Web Tokens (JWTs), as well as blobs of binary data
that contain other types of tokens.
The IAM API also contains methods for signing JWTs
and binary blobs. As of July 1, 2020, these methods
are deprecated in the REST API and in all client libraries
for the IAM API. Also, if you use the Google Cloud CLI to sign
JWTs, you might need to add a new claim to the JWT Claims Set. You can still
use the deprecated methods, but they don't support advanced features like HTTP
request batching . We encourage you to migrate to the
Service Account Credentials API instead.
Compared to the IAM API, the Service Account Credentials API
provides more flexibility for the expiration time of signed JWTs. In addition,
the Service Account Credentials API adds multiple new API methods to generate
impersonation tokens.
This page explains how to update your existing code to use the Service Account
Credentials API. If you have feedback on this change, you can
complete the feedback form . You can also use the email address
iam-sign-deprecation-public@google.com to request support and provide detailed
feedback.
Before you begin
Enable the Service Account Credentials API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Enabling audit logs
If you want to receive audit logs for requests to sign JWTs and
blobs, you must enable Data Access audit logs for the
IAM API. Enabling Data Access audit logs for the
IAM API also enables these audit logs for the Service Account
Credentials API.
There are a few notable differences between the log entries that each API
generates:
Differences for audit log entries
Method name
IAM API
The method name ( protoPayload.methodName ) is one of the
following:
google.iam.admin.v1.SignBlob
google.iam.admin.v1.SignJwt
Service Account Credentials API
The method name is one of the following:
SignBlob
SignJwt
Request type
IAM API
The request type ( protoPayload.request.@type ) is one of
the following:
type.googleapis.com/google.iam.admin.v1.SignBlobRequest
type.googleapis.com/google.iam.admin.v1.SignJwtRequest
Service Account Credentials API
The request type is one of the following:
type.googleapis.com/google.iam.credentials.v1.SignBlobRequest
type.googleapis.com/google.iam.credentials.v1.SignJwtRequest
Service name
IAM API
The service name ( protoPayload.serviceName ) is
iam.googleapis.com .
Service Account Credentials API
The service name is iamcredentials.googleapis.com .
Data Access audit logs count toward your free monthly allotment of logging data
ingestion. If you exceed this allotment, you will be charged for log ingestion.
For details, see Pricing for Google Cloud Observability .
Migrating code for signing JWTs
This section describes how to migrate code that signs JWTs to the Service
Account Credentials API.
Signing JWTs with the REST API
The following table shows the differences between
signing a JWT with the IAM REST API and
signing a JWT with the Service Account Credentials API . Update
your code to reflect these differences:
Differences for signing a JWT
HTTP endpoints
IAM API
The IAM API uses the following HTTP methods and endpoints:
POST https://iam.googleapis.com/v1/projects/ project-id / serviceAccounts/ sa-email :signJwt
In this URL, project-id is the project ID,
and sa-email is the email address for the
service account.
POST https://iam.googleapis.com/v1/projects/-/ serviceAccounts/ sa-email :signJwt
In this URL, the wildcard character - takes the place
of the project ID, and sa-email is the
email address for the service account.
Service Account Credentials API
Use the following HTTP method and endpoint. Do not replace the wildcard
character with the project ID:
POST https://iamcredentials.googleapis.com/v1/ projects/-/ serviceAccounts/ sa-email :signJwt
In this URL, sa-email is the email address for the service
account.
Request body
IAM API
The request body includes a payload field. Its value is the JWT payload to
sign. The payload must be a JSON object, serialized as a string, that contains a
JWT Claims Set.
If you provide an expiration time ( exp ) claim, it must be no more than
12 hours in the future. If you omit
the exp claim, it is added automatically and is set to
1 hour in the future.
Service Account Credentials API
The request body includes a payload field that is identical to the
IAM API, except for the behavior of the expiration time
( exp ) claim:
If you provide the exp claim, it must be no more than
12 hours in the future.
If you omit the exp claim, it is not added automatically . You must
provide this claim if you use the signed JWT to authenticate with Google APIs,
or with another API that requires the exp claim.
Response body
Both APIs use the same fields in the response body.
Signing JWTs with a client library
The client libraries for the Service Account Credentials API are separate from
the client libraries for the IAM API.
To use the Service Account Credentials API, add its client library to your
application, and update your code to use the new client library:
C# Go Java Node.js PHP Python Ruby
More
Add the Service Account Credentials client library
for C# to your application. Use the
SignJwt() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
C# , you can remove it from your application.
Add the Service Account Credentials client library
for Go to your application. Use the
IamCredentialsClient.SignJwt() function
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
Go , you can remove it from your application.
Add the Service Account Credentials client library
for Java to your application. Use the
IamCredentialsClient#signJwt() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
Java , you can remove it from your application.
Add the Service Account Credentials client library
for Node.js to your application. Use the
signJwt() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
Node.js , you can remove it from your application.
Add the Service Account Credentials client library
for PHP to your application. Use the
signJwt() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
PHP , you can remove it from your application.
Add the Service Account Credentials client library
for Python to your application. Use the
sign_jwt() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the
iam_credentials
client library , you can remove it from your application.
Add the Service Account Credentials client library
for Ruby to your application. Use the
sign_service_account_jwt() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
Ruby , you can remove it from your application.
Migrating code for signing binary blobs
This section describes how to migrate code that signs binary blobs to the
Service Account Credentials API.
Signing binary blobs with the REST API
The following table shows the differences between
signing a binary blob with the IAM REST API
and
signing a binary blob with the Service Account Credentials API .
Update your code to reflect these differences:
Differences for signing a binary blob
HTTP endpoints
IAM API
The IAM API uses the following HTTP methods and endpoints:
POST https://iam.googleapis.com/v1/projects/ project-id / serviceAccounts/ sa-email :signBlob
In this URL, project-id is the project ID,
and sa-email is the email address for the
service account.
POST https://iam.googleapis.com/v1/projects/-/ serviceAccounts/ sa-email :signBlob
In this URL, the wildcard character - takes the place
of the project ID, and sa-email is the
email address for the service account.
Service Account Credentials API
Use the following HTTP method and endpoint. Do not replace the wildcard
character with the project ID:
POST https://iamcredentials.googleapis.com/v1/ projects/-/ serviceAccounts/ sa-email :signBlob
In this URL, sa-email is the email address for the service
account.
Request body
IAM API
The request body includes a bytesToSign field. Its value is a base64-encoded
string that represents the binary blob to sign.
Service Account Credentials API
The request body includes a payload field that has the same value as the
bytesToSign field in the IAM API.
Response body
IAM API
The response body contains a keyId field, which identifies the key that was
used to sign the blob, and a signature field, which contains a base64-encoded
string that represents the signature.
Service Account Credentials API
The response body contains a keyId field that is identical to the keyId
field in the IAM API, as well as a signedBlob field that
is identical to the signature field in the IAM API.
Note: The signedBlob field contains only the signature, not the original blob.
Signing binary blobs with a client library
The client libraries for the Service Account Credentials API are separate from
the client libraries for the IAM API.
To use the Service Account Credentials API, add its client library to your
application, and update your code to use the new client library:
C++ C# Go Java Node.js PHP Python Ruby
More
If you use the Cloud Storage C++ client library to sign
blobs, either directly or as a dependency of another client
library:
Upgrade to version 0.9.0 or later of
google-cloud-cpp .
If you use another client library to sign blobs:
Contact iam-sign-deprecation-public@google.com for support.
If you use the IAM client library for
C# , either directly or as a dependency of
another client library:
Add the Service Account Credentials client library
for C# to your application. Use the
SignBlob() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
C# , you can remove it from your application.
If you use the Firebase Admin DotNet SDK, either directly
or as a dependency of another client library:
Upgrade to version 1.17.1 or later of firebase-admin-dotnet .
If you use another client library to sign blobs:
Contact iam-sign-deprecation-public@google.com for support.
If you use the IAM client library for
Go , either directly or as a dependency of
another client library:
Add the Service Account Credentials client library
for Go to your application. Use the
IamCredentialsClient.SignBlob() function
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
Go , you can remove it from your application.
If you use the Firebase Admin Go SDK, either directly
or as a dependency of another client library:
Upgrade to version 4.1.0 or later of firebase-admin-go .
If you use another client library to sign blobs:
Contact iam-sign-deprecation-public@google.com for support.
If you use the IAM client library for
Java , either directly or as a dependency of
another client library:
Add the Service Account Credentials client library
for Java to your application. Use the
IamCredentialsClient#signBlob() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
Java , you can remove it from your application.
If you use the Google Auth Library for Java, either
directly or as a dependency of another client library:
Upgrade to version 0.14.0 or later of google-auth-library-java .
If you use the Firebase Admin Java SDK, either directly
or as a dependency of another client library:
Upgrade to version 7.0.1 or later of firebase-admin-java .
If you use another client library to sign blobs:
Contact iam-sign-deprecation-public@google.com for support.
If you use the IAM client library for
Node.js , either directly or as a dependency of
another client library:
Add the Service Account Credentials client library
for Node.js to your application. Use the
signBlob() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
Node.js , you can remove it from your application.
If you use the Google Auth Library for Node.js, either
directly or as a dependency of another client library:
Upgrade to version 6.0.0 or later of google-auth-library-nodejs .
If you use the Firebase Admin Node.js SDK, either directly
or as a dependency of another client library:
Upgrade to version 8.13.0 or later of firebase-admin-node .
If you use another client library to sign blobs:
Contact iam-sign-deprecation-public@google.com for support.
If you use the IAM client library for
PHP , either directly or as a dependency of
another client library:
Add the Service Account Credentials client library
for PHP to your application. Use the
signBlob() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
PHP , you can remove it from your application.
If you use the Google Auth Library for PHP, either directly
or as a dependency of another client library:
Upgrade to version 1.5.0 or later of google-auth-library-php .
If you use another client library to sign blobs:
Contact iam-sign-deprecation-public@google.com for support.
If you use the IAM client library for
Python , either directly or as a dependency of
another client library:
Add the Service Account Credentials client library
for Python to your application. Use the
sign_blob() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the
iam_credentials
client library , you can remove it from your application.
If you use the Google Auth Library for Python, either
directly or as a dependency of another client library:
Upgrade to version 1.21.2 or later of google-auth .
If you use the Python client for Cloud Storage, either
directly or as a dependency of another client library:
Upgrade to version 1.30.0 or later of python-storage .
If you use another client library to sign blobs:
Contact iam-sign-deprecation-public@google.com for support.
If you use the IAM client library for
Ruby , either directly or as a dependency of
another client library:
Add the Service Account Credentials client library
for Ruby to your application. Use the
sign_service_account_blob() method
to generate a signature.
The name of the service account must use the wildcard character - to represent the
project ID:
Valid: Name with wildcard character
projects/ - /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
Invalid: Name with project ID
projects/ my-project /serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
If you no longer use the IAM client library for
Ruby , you can remove it from your application.
If you use another client library to sign blobs:
Contact iam-sign-deprecation-public@google.com for support.
Migrating code that uses the gcloud CLI
The Google Cloud CLI provides commands that use the IAM API to
sign JWTs and binary blobs, including the following:
gcloud beta iam service-accounts sign-jwt
gcloud iam service-accounts sign-blob
On or after July 1, 2021, we will update these commands to
use the Service Account Credentials API. This change will not affect commands to
sign blobs.
If you use the gcloud CLI to sign JWTs, you must follow these steps
before July 1, 2021:
Check whether you include the expiration time ( exp ) claim in the JWT Claims
Set.
If you already include this claim, you do not need to make any changes. You
can skip the remaining steps.
If you do not include this claim, continue to the next step.
Check whether you use the signed JWT to authenticate with Google APIs, or
with another API that requires the exp claim.
If you omit this claim, the IAM API automatically sets it
to 1 hour in the future. In
contrast, the Service Account Credentials API does not set this field
automatically.
If you are sure that you do not need the exp claim, you do not need to
make any changes. You can skip the remaining steps.
If you know that you need the exp claim, or if you aren't sure, continue
to the next step.
Update your code for creating JWTs so that it adds the exp claim to the JWT
Claims Set.
You can set the exp claim up to
1 hour in the future.
Checking quotas
Quota for the Service Account Credentials API is separate from quota for the
IAM API. If you have received a quota increase to sign JWTs
and blobs with the IAM API, you might also need to request an
increase for the Service Account Credentials API.
Note: Most Google Cloud customers use the default quota for signing JWTs
and blobs. If you use the default quota, you do not need to read this section.
To view your quota and actual usage for both APIs, and to request a quota
increase if necessary, do the following:
In the Google Cloud console, go to the Quotas page.
Go to the Quotas page
Select a project. You can click a recent project, or you can click Select
project to search all of your projects.
In the Filter table text box above the table, enter Sign requests per
minute , then select the value that appears.
In the Filter table text box, select OR from the drop-down list.
In the Filter table text box, enter Generate credentials , then select
the value that appears.
The Google Cloud console shows your current usage for signing JWTs and
blobs over the past minute; your peak usage per minute over the past 7 days;
and your current quota, which appears in the Limit column.
Compare the quotas for each row in the table, and ensure that your quota for
the Service Account Credentials API is higher than your 7-day peak usage of the
IAM API.
Optional: If your quota for the Service Account Credentials API is too low,
select the checkbox for the Service Account Credentials API, then click Edit
quotas . Complete the form to request a quota increase.
Repeat these steps for each project where you use the IAM
API to sign JWTs and blobs.
What's next
Find out how to create a signed JWT or
create a signed binary blob with the Service Account
Credentials REST API.
Get details about the
REST API for the Service Account Credentials API .
Understand quotas and limits for IAM .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
