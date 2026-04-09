---
title: "Create short-lived credentials for a service account \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/create-short-lived-credentials-direct
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/create-short-lived-credentials-direct
  title: "Create short-lived credentials for a service account \_|\_ Identity and\
    \ Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create short-lived credentials for a service account | Identity and Access Management (IAM) | Google Cloud Documentation
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
Create a short-lived access token Provide required permissions
Generate the access token
Create an OpenID Connect (OIDC) ID token Provide required permissions
Generate the ID token
Create a self-signed JSON Web Token (JWT) Provide required permissions
Generate the JWT
Create a self-signed binary object (blob) Provide required permissions
Generate the self-signed blob
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Create short-lived credentials for a service account
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Create a short-lived access token Provide required permissions
Generate the access token
Create an OpenID Connect (OIDC) ID token Provide required permissions
Generate the ID token
Create a self-signed JSON Web Token (JWT) Provide required permissions
Generate the JWT
Create a self-signed binary object (blob) Provide required permissions
Generate the self-signed blob
This page explains how to create short-lived credentials for a service account,
which you can use to impersonate the service account . Depending
on the type of token you create, the short-lived token provides the identity
(for ID tokens) or permissions (for access tokens) associated with the service
account.
If your system architecture requires you to use a series of token generation
calls, you can use a delegation chain consisting of several service
accounts . In most cases, the direct method, as explained
on this page, is sufficient.
Before you begin
Enable the IAM and Service Account Credentials APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
See more code actions.
Light code theme
Dark code theme
gcloud services enable iam.googleapis.com iamcredentials.googleapis.com
Set up authentication.
Select the tab for how you plan to use the samples on this page:
Console gcloud Go Java Node.js Python REST
More
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To use the Go samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
To use the Java samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
To use the Node.js samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
To use the Python samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Understand IAM service accounts .
Understand service account impersonation .
Understand what kind of token you need, and use the appropriate steps provided
in the sections below:
OAuth 2.0 access tokens
OpenID Connect (OIDC) ID tokens
Self-signed JSON Web Tokens (JWTs)
Self-signed binary blobs
Create a short-lived access token
Access tokens are accepted for authentication by most Google APIs. When
you generate an access token by using service account impersonation, the
access token comes without a refresh token, which means that when the
token expires, you must repeat the impersonation process to generate a new
one.
For more information, see Access tokens .
To create a short-lived access token, complete these tasks:
Provide the required permissions to the caller .
Generate the access token .
Provide required permissions
A direct request involves two identities: the caller
that requests the credential, and the service account for which the
credential is created. How you set up the permissions depends on whether the
caller is authenticating as a service account or as a user account.
If you want to run a REST or gcloud CLI command on this page in a
local development environment, the caller can be represented by user
credentials. For automated workloads, such as an application running on
Compute Engine, the caller must be represented by a service account.
Service account User credentials
More
When the calling application uses a service account as its identity, the
following principals are involved:
Caller service account ( CALLER_SA )
This service account represents the calling application,
which issues the request for the short-lived credentials.
Privilege-bearing service account ( PRIV_SA )
This service account is granted the IAM roles needed for
the short-lived token. This is the service account for which the
short-lived token is created.
Note: In most cases, if you're using short-lived credentials to
authenticate the caller service account, the caller service account and the
privilege-bearing service account can't be the same. For more information, see
Self-impersonation .
To give CALLER_SA permissions to create short-lived
credentials for PRIV_SA , you grant
CALLER_SA the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) on PRIV_SA .
Grant the required role on PRIV_SA :
Console gcloud REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select a project.
Click the email address of the privilege-bearing service account,
PRIV_SA .
Click the Permissions tab.
Under Principals with access to this service account , click
person_add
Grant Access .
Enter the email address of the caller service account,
CALLER_SA .
For example, demo@my-project.iam.gserviceaccount.com .
Select the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ).
Click Save to grant the role to the service account.
The
gcloud iam service-accounts add-iam-policy-binding
command grants a role on a service account.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing
service account for which the token is generated.
CALLER_SA : The email address of the
service account representing the application that is requesting the short-lived token.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam service-accounts add-iam-policy-binding PRIV_SA \
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (PowerShell)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA `
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (cmd.exe)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA ^
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountTokenCreator --format = json
You should receive a response similar to the following:
Updated IAM policy for serviceAccount [ PRIV_SA ].
{
"bindings": [
{
"members": [
"serviceAccount: CALLER_SA "
],
"role": "roles/iam.serviceAccountTokenCreator"
}
],
"etag": "BwXhCB4eyjY=",
"version": 1
}
Read the allow policy for PRIV_SA :
The
serviceAccounts.getIamPolicy
method gets a service account's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/serviceAccountAdmin",
"members": [
"user:my-user@example.com"
]
}
]
}
If you have not granted any roles on the service account, the response
contains only an etag value. Include that etag
value in the next step.
Modify the allow policy to grant CALLER_SA the
Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ).
For example, to modify the sample response from the previous step,
add the following:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"serviceAccount: CALLER_SA "
]
}
]
}
Write the updated allow policy:
The
serviceAccounts.setIamPolicy
method sets an updated allow policy for the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account
for which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
POLICY : A JSON representation of the policy that you
want to set. For more information about the format of a policy, see the
Policy reference .
For example, to set the allow policy shown in the previous step, replace
POLICY with the following, where CALLER_SA is
the service account creating the short-lived token:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"serviceAccount: CALLER_SA "
]
}
]
}
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy
Request JSON body:
{
"policy": POLICY
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy"
PowerShell (Windows)
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
When you want to use the Google Cloud CLI to generate short-lived tokens,
or you want to generate short-lived tokens from a local development environment,
you can use a user account to generate the tokens. Often, you can use your own
user account.
When you use a user account to generate short-lived tokens, the following
identities are involved:
Caller account ( CALLER_ACCOUNT )
This user account is used to generate short-lived credentials for the
privilege-bearing service account.
Privilege-bearing service account ( PRIV_SA )
This service account is granted the IAM roles needed for
the short-lived token. This is the service account for which the
short-lived token is created.
To enable CALLER_ACCOUNT to create short-lived
credentials for PRIV_SA , you grant
CALLER_ACCOUNT the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) on PRIV_SA .
Grant the required role on PRIV_SA :
Console gcloud REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select a project.
Click the email address of the privilege-bearing service account,
PRIV_SA .
Click the Permissions tab.
Under Principals with access to this service account , click
person_add
Grant Access .
Enter the principal identifier of the caller account,
CALLER_ACCOUNT .
For example, my-user@example.com .
Select the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ).
Click Save to grant the role to the user account.
The
gcloud iam service-accounts add-iam-policy-binding
command grants a role on a service account.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing
service account for which the token is generated.
CALLER_ACCOUNT : The email address of the
user account being used to request the short-lived token.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam service-accounts add-iam-policy-binding PRIV_SA \
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (PowerShell)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA `
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (cmd.exe)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA ^
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountTokenCreator --format = json
You should receive a response similar to the following:
Updated IAM policy for serviceAccount [ PRIV_SA ].
{
"bindings": [
{
"members": [
"user:my-user@example.com"
],
"role": "roles/iam.serviceAccountTokenCreator"
}
],
"etag": "BwX1ZbefjXU=",
"version": 1
}
Read the allow policy for PRIV_SA :
The
serviceAccounts.getIamPolicy
method gets a service account's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/serviceAccountAdmin",
"members": [
"user:my-user@example.com"
]
}
]
}
If you have not granted any roles on the service account, the response
contains only an etag value. Include that etag
value in the next step.
Modify the allow policy to grant
CALLER_ACCOUNT the Service Account Token Creator role (
roles/iam.serviceAccountTokenCreator ).
For example, to modify the sample response from the previous step,
add the following:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"user:my-user@example.com"
]
}
]
}
Write the updated allow policy:
The
serviceAccounts.setIamPolicy
method sets an updated allow policy for the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account
for which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
POLICY : A JSON representation of the policy that you
want to set. For more information about the format of a policy, see the
Policy reference .
For example, to set the allow policy shown in the previous step,
replace POLICY with the following, where
CALLER_ACCOUNT is the user account creating the short-lived token:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
" CALLER_ACCOUNT "
]
}
]
}
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy
Request JSON body:
{
"policy": POLICY
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy"
PowerShell (Windows)
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
Generate the access token
You can generate an OAuth 2.0 access token by using the gcloud CLI,
the REST API, or the Cloud Client Libraries and Google API Client Libraries.
If you use the REST API, and your system is configured to allow extended
token lifetimes, you can create a token with a lifetime longer than the default.
The Google Cloud CLI does not support setting a lifetime for the token.
The samples below are designed to be used in a local development environment;
the caller must be represented by a user account, rather than a service account.
Generate an OAuth 2.0 access token for a service account:
gcloud REST Go Java Node.js Python
More
Ensure that you are signed into the gcloud CLI
with the caller user account.
Generate a token for the service account by using the gcloud auth
print-access-token command.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud auth print-access-token --impersonate-service-account = PRIV_SA
Windows (PowerShell)
gcloud auth print-access-token --impersonate-service-account = PRIV_SA
Windows (cmd.exe)
gcloud auth print-access-token --impersonate-service-account = PRIV_SA
You should receive a response similar to the following:
WARNING: This command is using service account impersonation. All API calls will be executed as
[my-sa@my-project.iam.gserviceaccount.com].
ya29.c.b0AXv0zTPnzTnDV8F8Aj5Fgy46Yf2v_v8eZIoKq7xGpfbpXuy23aQ1693m3gAuE8AZga7w6kdagN7a9bfdDYbdeoGY0CMHOClsCwIdutL7k_RFC672lOCbUgF5hS8Iu2nCA8hle-11LJXBLmaxFmH08ZTBJLuDrWSNd8cYqGYFunSC1K1qLIPBF18tsa0hxVgKPucI8b1A9L8_MK1JGLGcr0n7-zY77_lmbcdODG3NmIbLOGWOutjJgqSO_YoeCKK2QTUZIp5PG7RkKlXWnmYJA9pEahzNoQrs5sWZctc2bia9af_ITzqqlXC9h1Kj5-me6e8rd734MJvpagqYazRk0gGWpMb03XmMGpgPc_FBp4pnX9rGOzW83SNpcDz8zeFO1Q0Bo3N7CuZougjRce0y8I2_4rtw5ME_nV3wrCWa..................................................................................................................................................................................................................................................................................................
The Service Account Credentials API's
serviceAccounts.generateAccessToken
method generates an OAuth 2.0 access token for a service account.
Before using any of the request data,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing service account for which
the short-lived token is created.
LIFETIME : The amount of time until the access token expires, in
seconds. For example, 300s .
By default, the maximum token lifetime is 1 hour
(3,600 seconds). To extend the maximum lifetime for these tokens to
12 hours (43,200 seconds),
add the service account to an organization policy that includes the
constraints/iam.allowServiceAccountCredentialLifetimeExtension list constraint.
HTTP method and URL:
POST https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :generateAccessToken
Request JSON body:
{
"scope": [
"https://www.googleapis.com/auth/cloud-platform"
],
"lifetime": " LIFETIME "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :generateAccessToken"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :generateAccessToken" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
If the generateAccessToken request was successful, the response body
contains an OAuth 2.0 access token and an expiration time. The accessToken can then
be used to authenticate a request on behalf of the service account until the
expireTime has been reached:
{
"accessToken": "eyJ0eXAi...NiJ9",
"expireTime": "2020-04-07T15:01:23.045123456Z"
}
import (
"context"
"fmt"
"io"
"time"
"golang.org/x/oauth2/google"
"google.golang.org/api/impersonate"
"google.golang.org/api/option"
)
// getAccessTokenFromImpersonatedCredentials uses a service account (SA1) to impersonate
// another service account (SA2) and obtain OAuth2 token for the impersonated account.
// To obtain a token for SA2, SA1 should have the "roles/iam.serviceAccountTokenCreator" permission on SA2.
func getAccessTokenFromImpersonatedCredentials ( w io . Writer , impersonatedServiceAccount , scope string ) error {
// impersonatedServiceAccount := "name@project.service.gserviceaccount.com"
// scope := "https://www.googleapis.com/auth/cloud-platform"
ctx := context . Background ()
// Construct the GoogleCredentials object which obtains the default configuration from your
// working environment.
credentials , err := google . FindDefaultCredentials ( ctx , scope )
if err != nil {
fmt . Fprintf ( w , "failed to generate default credentials: %v" , err )
return fmt . Errorf ( "failed to generate default credentials: %w" , err )
}
ts , err := impersonate . CredentialsTokenSource ( ctx , impersonate . CredentialsConfig {
TargetPrincipal : impersonatedServiceAccount ,
Scopes : [] string { scope },
Lifetime : 300 * time . Second ,
// delegates: The chained list of delegates required to grant the final accessToken.
// For more information, see:
// https://cloud.google.com/iam/docs/create-short-lived-credentials-direct#sa-credentials-permissions
// Delegates is NOT USED here.
Delegates : [] string {},
}, option . WithCredentials ( credentials ))
if err != nil {
fmt . Fprintf ( w , "CredentialsTokenSource error: %v" , err )
return fmt . Errorf ( "CredentialsTokenSource error: %w" , err )
}
// Get the OAuth2 token.
// Once you've obtained the OAuth2 token, you can use it to make an authenticated call.
t , err := ts . Token ()
if err != nil {
fmt . Fprintf ( w , "failed to receive token: %v" , err )
return fmt . Errorf ( "failed to receive token: %w" , err )
}
fmt . Fprintf ( w , "Generated OAuth2 token with length %d.\n" , len ( t . AccessToken ))
return nil
}
package com.google.cloud.auth.samples ;
import com.google.auth.oauth2. GoogleCredentials ;
import com.google.auth.oauth2. ImpersonatedCredentials ;
import java.io.IOException ;
import java.util.Arrays ;
import java.util.List ;
public class AccessTokenFromImpersonatedCredentials {
public static void main ( String [] args ) throws IOException {
// TODO(Developer): Replace the below variables before running the code.
// Provide the scopes that you might need to request access to Google APIs,
// depending on the level of access you need.
// This example uses the cloud-wide scope and uses IAM to narrow the permissions.
// https://cloud.google.com/docs/authentication/external/authorization-gcp
// For more information, see: https://developers.google.com/identity/protocols/oauth2/scopes
String scope = "https://www.googleapis.com/auth/cloud-platform" ;
// The name of the privilege-bearing service account for whom the credential is created.
String impersonatedServiceAccount = "name@project.service.gserviceaccount.com" ;
getAccessToken ( impersonatedServiceAccount , scope );
}
// Use a service account (SA1) to impersonate another service account (SA2) and obtain an ID token
// for the impersonated account.
// To obtain a token for SA2, SA1 should have the "roles/iam.serviceAccountTokenCreator"
// permission on SA2.
public static void getAccessToken (
String impersonatedServiceAccount , String scope ) throws IOException {
// Construct the GoogleCredentials object which obtains the default configuration from your
// working environment.
GoogleCredentials googleCredentials = GoogleCredentials . getApplicationDefault ();
// delegates: The chained list of delegates required to grant the final accessToken.
// For more information, see:
// https://cloud.google.com/iam/docs/create-short-lived-credentials-direct#sa-credentials-permissions
// Delegate is NOT USED here.
List<String> delegates = null ;
// Create the impersonated credential.
ImpersonatedCredentials impersonatedCredentials =
ImpersonatedCredentials . newBuilder ()
. setSourceCredentials ( googleCredentials )
. setTargetPrincipal ( impersonatedServiceAccount )
. setScopes ( Arrays . asList ( scope ))
. setLifetime ( 300 )
. setDelegates ( delegates )
. build ();
// Get the OAuth2 token.
// Once you've obtained the OAuth2 token, you can use it to make an authenticated call.
impersonatedCredentials . refresh ();
String accessToken = impersonatedCredentials . getAccessToken (). getTokenValue ();
System . out . println ( "Generated access token." );
}
}
/**
* TODO(developer):
* Uncomment and replace these variables before running the sample.
*/
// const impersonatedServiceAccount = 'name@project.service.gserviceaccount.com';
// const scope = 'https://www.googleapis.com/auth/cloud-platform';
const { GoogleAuth , Impersonated } = require ( ' google-auth-library ' );
async function getAccessTokenFromImpersonatedCredentials () {
const googleAuth = new GoogleAuth ({
scopes : scope ,
});
// Construct the GoogleCredentials object which obtains the default configuration from your
// working environment.
const { credential } = await googleAuth . getApplicationDefault ();
// delegates: The chained list of delegates required to grant the final accessToken.
// For more information, see:
// https://cloud.google.com/iam/docs/create-short-lived-credentials-direct#sa-credentials-permissions
// Delegate is NOT USED here.
const delegates = [];
// Create the impersonated credential.
const impersonatedCredentials = new Impersonated ({
sourceClient : credential ,
delegates ,
targetPrincipal : impersonatedServiceAccount ,
targetScopes : [ scope ],
lifetime : 300 ,
});
// Get the OAuth2 token.
// Once you've obtained the OAuth2 token, you can use it to make an authenticated call
// to the target audience.
const resp = await impersonatedCredentials . getAccessToken ();
// Token is in resp.token.
console . log ( 'Generated OAuth2 token with length %s' , resp . token . length );
}
getAccessTokenFromImpersonatedCredentials ();
def accesstoken_from_impersonated_credentials (
impersonated_service_account : str , scope : str
):
from google.auth import impersonated_credentials
import google.auth.transport.requests
"""
Use a service account (SA1) to impersonate another service account (SA2)
and obtain an ID token for the impersonated account.
To obtain a token for SA2, SA1 should have the
"roles/iam.serviceAccountTokenCreator" permission on SA2.
Args:
impersonated_service_account: The name of the privilege-bearing service account for whom the credential is created.
Examples: name@project.service.gserviceaccount.com
scope: Provide the scopes that you might need to request to access Google APIs,
depending on the level of access you need.
For this example, we use the cloud-wide scope and use IAM to narrow the permissions.
https://cloud.google.com/docs/authentication#authorization_for_services
For more information, see: https://developers.google.com/identity/protocols/oauth2/scopes
"""
# Construct the GoogleCredentials object which obtains the default configuration from your
# working environment.
credentials , project_id = google . auth . default ()
# Create the impersonated credential.
target_credentials = impersonated_credentials . Credentials (
source_credentials = credentials ,
target_principal = impersonated_service_account ,
# delegates: The chained list of delegates required to grant the final accessToken.
# For more information, see:
# https://cloud.google.com/iam/docs/create-short-lived-credentials-direct#sa-credentials-permissions
# Delegate is NOT USED here.
delegates = [],
target_scopes = [ scope ],
lifetime = 300 ,
)
# Get the OAuth2 token.
# Once you've obtained the OAuth2 token, use it to make an authenticated call
# to the target audience.
request = google . auth . transport . requests . Request ()
target_credentials . refresh ( request )
# The token field is target_credentials.token.
print ( "Generated OAuth2 token." )
Create an OpenID Connect (OIDC) ID token
ID tokens follow the
OpenID Connect (OIDC) specification . ID tokens are
accepted by a limited number of services and applications.
For more information, see ID tokens and
Authentication for applications hosted on Cloud Run or Cloud Run functions .
To create an ID token, complete these tasks:
Provide the required permissions to the caller .
Use the Service Account OpenID Connect Identity Token Creator role
( roles/iam.serviceAccountOpenIdTokenCreator ) for creating an ID
token. This is a different role than the role you use for other token
types.
Generate the ID token .
Provide required permissions
A direct request involves two identities: the caller
that requests the credential, and the service account for which the
credential is created. How you set up the permissions depends on whether the
caller is authenticating as a service account or as a user account.
If you want to run a REST or gcloud CLI command on this page in a
local development environment, the caller can be represented by user
credentials. For automated workloads, such as an application running on
Compute Engine, the caller must be represented by a service account.
Service account User credentials
More
When the calling application uses a service account as its identity, the
following principals are involved:
Caller service account ( CALLER_SA )
This service account represents the calling application,
which issues the request for the short-lived credentials.
Privilege-bearing service account ( PRIV_SA )
This service account is granted the IAM roles needed for
the short-lived token. This is the service account for which the
short-lived token is created.
Note: In most cases, if you're using short-lived credentials to
authenticate the caller service account, the caller service account and the
privilege-bearing service account can't be the same. For more information, see
Self-impersonation .
To give CALLER_SA permissions to create short-lived
credentials for PRIV_SA , you grant
CALLER_SA the Service Account OpenID Connect Identity Token Creator role
( roles/iam.serviceAccountOpenIdTokenCreator ) on PRIV_SA .
Grant the required role on PRIV_SA :
Console gcloud REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select a project.
Click the email address of the privilege-bearing service account,
PRIV_SA .
Click the Permissions tab.
Under Principals with access to this service account , click
person_add
Grant Access .
Enter the email address of the caller service account,
CALLER_SA .
For example, demo@my-project.iam.gserviceaccount.com .
Select the Service Account OpenID Connect Identity Token Creator role
( roles/iam.serviceAccountOpenIdTokenCreator ).
Click Save to grant the role to the service account.
The
gcloud iam service-accounts add-iam-policy-binding
command grants a role on a service account.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing
service account for which the token is generated.
CALLER_SA : The email address of the
service account representing the application that is requesting the short-lived token.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam service-accounts add-iam-policy-binding PRIV_SA \
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountOpenIdTokenCreator --format = json
Windows (PowerShell)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA `
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountOpenIdTokenCreator --format = json
Windows (cmd.exe)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA ^
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountOpenIdTokenCreator --format = json
You should receive a response similar to the following:
Updated IAM policy for serviceAccount [ PRIV_SA ].
{
"bindings": [
{
"members": [
"serviceAccount: CALLER_SA "
],
"role": "roles/iam.serviceAccountOpenIdTokenCreator"
}
],
"etag": "BwXhCB4eyjY=",
"version": 1
}
Read the allow policy for PRIV_SA :
The
serviceAccounts.getIamPolicy
method gets a service account's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/serviceAccountAdmin",
"members": [
"user:my-user@example.com"
]
}
]
}
If you have not granted any roles on the service account, the response
contains only an etag value. Include that etag
value in the next step.
Modify the allow policy to grant CALLER_SA the
Service Account OpenID Connect Identity Token Creator role ( roles/iam.serviceAccountOpenIdTokenCreator ).
For example, to modify the sample response from the previous step,
add the following:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountOpenIdTokenCreator" ,
"members" : [
"serviceAccount: CALLER_SA "
]
}
]
}
Write the updated allow policy:
The
serviceAccounts.setIamPolicy
method sets an updated allow policy for the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account
for which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
POLICY : A JSON representation of the policy that you
want to set. For more information about the format of a policy, see the
Policy reference .
For example, to set the allow policy shown in the previous step, replace
POLICY with the following, where CALLER_SA is
the service account creating the short-lived token:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountOpenIdTokenCreator" ,
"members" : [
"serviceAccount: CALLER_SA "
]
}
]
}
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy
Request JSON body:
{
"policy": POLICY
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy"
PowerShell (Windows)
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
When you want to use the Google Cloud CLI to generate short-lived tokens,
or you want to generate short-lived tokens from a local development environment,
you can use a user account to generate the tokens. Often, you can use your own
user account.
When you use a user account to generate short-lived tokens, the following
identities are involved:
Caller account ( CALLER_ACCOUNT )
This user account is used to generate short-lived credentials for the
privilege-bearing service account.
Privilege-bearing service account ( PRIV_SA )
This service account is granted the IAM roles needed for
the short-lived token. This is the service account for which the
short-lived token is created.
To enable CALLER_ACCOUNT to create short-lived
credentials for PRIV_SA , you grant
CALLER_ACCOUNT the Service Account OpenID Connect Identity Token Creator role
( roles/iam.serviceAccountOpenIdTokenCreator ) on PRIV_SA .
Grant the required role on PRIV_SA :
Console gcloud REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select a project.
Click the email address of the privilege-bearing service account,
PRIV_SA .
Click the Permissions tab.
Under Principals with access to this service account , click
person_add
Grant Access .
Enter the principal identifier of the caller account,
CALLER_ACCOUNT .
For example, my-user@example.com .
Select the Service Account OpenID Connect Identity Token Creator role
( roles/iam.serviceAccountOpenIdTokenCreator ).
Click Save to grant the role to the user account.
The
gcloud iam service-accounts add-iam-policy-binding
command grants a role on a service account.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing
service account for which the token is generated.
CALLER_ACCOUNT : The email address of the
user account being used to request the short-lived token.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam service-accounts add-iam-policy-binding PRIV_SA \
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountOpenIdTokenCreator --format = json
Windows (PowerShell)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA `
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountOpenIdTokenCreator --format = json
Windows (cmd.exe)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA ^
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountOpenIdTokenCreator --format = json
You should receive a response similar to the following:
Updated IAM policy for serviceAccount [ PRIV_SA ].
{
"bindings": [
{
"members": [
"user:my-user@example.com"
],
"role": "roles/iam.serviceAccountOpenIdTokenCreator"
}
],
"etag": "BwX1ZbefjXU=",
"version": 1
}
Read the allow policy for PRIV_SA :
The
serviceAccounts.getIamPolicy
method gets a service account's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/serviceAccountAdmin",
"members": [
"user:my-user@example.com"
]
}
]
}
If you have not granted any roles on the service account, the response
contains only an etag value. Include that etag
value in the next step.
Modify the allow policy to grant
CALLER_ACCOUNT the Service Account OpenID Connect Identity Token Creator role (
roles/iam.serviceAccountOpenIdTokenCreator ).
For example, to modify the sample response from the previous step,
add the following:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountOpenIdTokenCreator" ,
"members" : [
"user:my-user@example.com"
]
}
]
}
Write the updated allow policy:
The
serviceAccounts.setIamPolicy
method sets an updated allow policy for the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account
for which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
POLICY : A JSON representation of the policy that you
want to set. For more information about the format of a policy, see the
Policy reference .
For example, to set the allow policy shown in the previous step,
replace POLICY with the following, where
CALLER_ACCOUNT is the user account creating the short-lived token:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountOpenIdTokenCreator" ,
"members" : [
" CALLER_ACCOUNT "
]
}
]
}
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy
Request JSON body:
{
"policy": POLICY
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy"
PowerShell (Windows)
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
Generate the ID token
You can generate an OpenID Connect (OIDC) ID token by using the
gcloud CLI, the REST API, or the Cloud Client Libraries and
Google API Client Libraries.
The samples below are designed to be used in a local development environment;
the caller must be represented by a user account, rather than a service account.
OIDC ID tokens are valid for 1 hour
(3,600 seconds).
Generate a Google-signed OIDC ID token for a service account:
gcloud REST
More
Ensure that you are signed into the gcloud CLI
with the caller user account.
Generate a token for the service account by using the gcloud auth
print-identity-token command.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
AUDIENCE_NAME : The audience for the token, usually the URL of the
application or service that the token will be used to access.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud auth print-identity-token --impersonate-service-account = PRIV_SA --audiences = " AUDIENCE_NAME "
Windows (PowerShell)
gcloud auth print-identity-token --impersonate-service-account = PRIV_SA --audiences = " AUDIENCE_NAME "
Windows (cmd.exe)
gcloud auth print-identity-token --impersonate-service-account = PRIV_SA --audiences = " AUDIENCE_NAME "
You should receive a response similar to the following:
WARNING: This command is using service account impersonation. All API calls will be executed as
[my-sa@my-project.iam.gserviceaccount.com].
eyJhbGciOiJSUzI1NiIsImtpZDNhMDg4ZDRmZmMjJkYTVmZTM5MDZjY2MiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJ3d3cuZXhhbXBsJhenAiOiIxMTYzwNDYyMDk0ODIiLCJleHAiOjE2NTQ4ODU0MzEsImlhdCI6MTY1NDg4MTgzMSwiaXN6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwic3ViIMDQ2MjA5NDgyIn0.F7mu8IHj5VQdu7ItFrnYAKyGd7YqXuOP_rFLc98q8BaFBycAF1zAQnSnwqnSUXba0UK9PDT_-IOry68qLwBObz4XlX9lk0ehpN0O0W9FcFToKLB6wefXXPd4h7xtuPe5KzmpSOqj2Qqv34HriGw00Nqd-oGSgNY_lZ4wGEf4rT4oQa_kEcrY57Q2G6pwd769BhgeFwoLi5aK_Cv2kvf_zfMszC-xlkP9zwWQ8XinJBwe-qcQBa4NTgrbueNtXsEjccBS366zmw
The Service Account Credentials API's
serviceAccounts.generateIdToken
method generates an OIDC ID token for a service account.
Before using any of the request data,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
AUDIENCE_NAME : The audience for the token, usually the URL of the
application or service that the token will be used to access.
HTTP method and URL:
POST https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :generateIdToken
Request JSON body:
{
"audience": " AUDIENCE_NAME ",
"includeEmail": "true"
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :generateIdToken"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :generateIdToken" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
If the generateId request was successful, the response body
contains an ID token that is valid for 1 hour. The token can then be used to
authenticate a request on behalf of the service account:
{
"token": "eyJ0eXAi...NiJ9"
}
Create a self-signed JSON Web Token (JWT)
Self-signed JSON Web Tokens (JWTs) are useful in a variety of scenarios:
Securely communicating between your own applications. In this scenario, one
application can sign a token that can be verified by another application for
authentication purposes.
Authenticating a call to a Google API as described in
Service account authorization without OAuth .
Authenticating to an API deployed with API Gateway.
Treating a service account as an identity provider by signing a JWT that
contains arbitrary claims about a user, account, or device.
To create a JWT, complete these tasks:
Provide the required permissions to the caller .
Generate the JWT .
Provide required permissions
A direct request involves two identities: the caller
that requests the credential, and the service account for which the
credential is created. How you set up the permissions depends on whether the
caller is authenticating as a service account or as a user account.
If you want to run a REST or gcloud CLI command on this page in a
local development environment, the caller can be represented by user
credentials. For automated workloads, such as an application running on
Compute Engine, the caller must be represented by a service account.
Service account User credentials
More
When the calling application uses a service account as its identity, the
following principals are involved:
Caller service account ( CALLER_SA )
This service account represents the calling application,
which issues the request for the short-lived credentials.
Privilege-bearing service account ( PRIV_SA )
This service account is granted the IAM roles needed for
the short-lived token. This is the service account for which the
short-lived token is created.
Note: In most cases, if you're using short-lived credentials to
authenticate the caller service account, the caller service account and the
privilege-bearing service account can't be the same. For more information, see
Self-impersonation .
To give CALLER_SA permissions to create short-lived
credentials for PRIV_SA , you grant
CALLER_SA the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) on PRIV_SA .
Grant the required role on PRIV_SA :
Console gcloud REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select a project.
Click the email address of the privilege-bearing service account,
PRIV_SA .
Click the Permissions tab.
Under Principals with access to this service account , click
person_add
Grant Access .
Enter the email address of the caller service account,
CALLER_SA .
For example, demo@my-project.iam.gserviceaccount.com .
Select the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ).
Click Save to grant the role to the service account.
The
gcloud iam service-accounts add-iam-policy-binding
command grants a role on a service account.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing
service account for which the token is generated.
CALLER_SA : The email address of the
service account representing the application that is requesting the short-lived token.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam service-accounts add-iam-policy-binding PRIV_SA \
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (PowerShell)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA `
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (cmd.exe)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA ^
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountTokenCreator --format = json
You should receive a response similar to the following:
Updated IAM policy for serviceAccount [ PRIV_SA ].
{
"bindings": [
{
"members": [
"serviceAccount: CALLER_SA "
],
"role": "roles/iam.serviceAccountTokenCreator"
}
],
"etag": "BwXhCB4eyjY=",
"version": 1
}
Read the allow policy for PRIV_SA :
The
serviceAccounts.getIamPolicy
method gets a service account's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/serviceAccountAdmin",
"members": [
"user:my-user@example.com"
]
}
]
}
If you have not granted any roles on the service account, the response
contains only an etag value. Include that etag
value in the next step.
Modify the allow policy to grant CALLER_SA the
Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ).
For example, to modify the sample response from the previous step,
add the following:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"serviceAccount: CALLER_SA "
]
}
]
}
Write the updated allow policy:
The
serviceAccounts.setIamPolicy
method sets an updated allow policy for the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account
for which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
POLICY : A JSON representation of the policy that you
want to set. For more information about the format of a policy, see the
Policy reference .
For example, to set the allow policy shown in the previous step, replace
POLICY with the following, where CALLER_SA is
the service account creating the short-lived token:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"serviceAccount: CALLER_SA "
]
}
]
}
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy
Request JSON body:
{
"policy": POLICY
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy"
PowerShell (Windows)
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
When you want to use the Google Cloud CLI to generate short-lived tokens,
or you want to generate short-lived tokens from a local development environment,
you can use a user account to generate the tokens. Often, you can use your own
user account.
When you use a user account to generate short-lived tokens, the following
identities are involved:
Caller account ( CALLER_ACCOUNT )
This user account is used to generate short-lived credentials for the
privilege-bearing service account.
Privilege-bearing service account ( PRIV_SA )
This service account is granted the IAM roles needed for
the short-lived token. This is the service account for which the
short-lived token is created.
To enable CALLER_ACCOUNT to create short-lived
credentials for PRIV_SA , you grant
CALLER_ACCOUNT the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) on PRIV_SA .
Grant the required role on PRIV_SA :
Console gcloud REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select a project.
Click the email address of the privilege-bearing service account,
PRIV_SA .
Click the Permissions tab.
Under Principals with access to this service account , click
person_add
Grant Access .
Enter the principal identifier of the caller account,
CALLER_ACCOUNT .
For example, my-user@example.com .
Select the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ).
Click Save to grant the role to the user account.
The
gcloud iam service-accounts add-iam-policy-binding
command grants a role on a service account.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing
service account for which the token is generated.
CALLER_ACCOUNT : The email address of the
user account being used to request the short-lived token.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam service-accounts add-iam-policy-binding PRIV_SA \
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (PowerShell)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA `
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (cmd.exe)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA ^
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountTokenCreator --format = json
You should receive a response similar to the following:
Updated IAM policy for serviceAccount [ PRIV_SA ].
{
"bindings": [
{
"members": [
"user:my-user@example.com"
],
"role": "roles/iam.serviceAccountTokenCreator"
}
],
"etag": "BwX1ZbefjXU=",
"version": 1
}
Read the allow policy for PRIV_SA :
The
serviceAccounts.getIamPolicy
method gets a service account's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/serviceAccountAdmin",
"members": [
"user:my-user@example.com"
]
}
]
}
If you have not granted any roles on the service account, the response
contains only an etag value. Include that etag
value in the next step.
Modify the allow policy to grant
CALLER_ACCOUNT the Service Account Token Creator role (
roles/iam.serviceAccountTokenCreator ).
For example, to modify the sample response from the previous step,
add the following:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"user:my-user@example.com"
]
}
]
}
Write the updated allow policy:
The
serviceAccounts.setIamPolicy
method sets an updated allow policy for the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account
for which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
POLICY : A JSON representation of the policy that you
want to set. For more information about the format of a policy, see the
Policy reference .
For example, to set the allow policy shown in the previous step,
replace POLICY with the following, where
CALLER_ACCOUNT is the user account creating the short-lived token:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
" CALLER_ACCOUNT "
]
}
]
}
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy
Request JSON body:
{
"policy": POLICY
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy"
PowerShell (Windows)
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
Generate the JWT
Generate a self-signed JWT:
REST
More
The Service Account Credentials API's
serviceAccounts.signJwt
method signs a JWT using a service account's system-managed private key.
Before using any of the request data,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
JWT_PAYLOAD : The JWT payload to sign, which is a JSON object that
contains a JWT Claims Set. Include the claims that are necessary for your desired use case and
to meet the validation requirements for the service you are calling. If you are calling a
Google API, see
Google's Authentication Guide for claim requirements.
The exp (expiration time) claim must be no more than 12 hours in the future.
If you are calling a Google API, the exp claim must be set no more than 1 hour in
the future.
The following example payload contains claims to call a Google API, where
EXP is an integer timestamp representing the expiration time:
{ \"iss\": \" PRIV_SA \", \"sub\": \" PRIV_SA \", \"aud\": \"https://firestore.googleapis.com/\", \"iat\": 1529350000, \"exp\": EXP }
HTTP method and URL:
POST https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :signJwt
Request JSON body:
{
"payload": " JWT_PAYLOAD "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :signJwt"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :signJwt" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
If the signJwt request was successful, the response body contains a signed JWT and
the signing key ID that was used to sign the JWT. You can use the signedJwt value as
a bearer token to directly authenticate a request on behalf of the service account. The token is
valid up to the expiration time specified in the request:
{
"keyId": "42ba1e...fc0a",
"signedJwt": "eyJ0eXAi...NiJ9"
}
Create a self-signed binary object (blob)
Self-signed binary objects, or blobs, are used to transmit binary data in such a
way that the originator of the data is known (because the blob is self-signed).
Blobs can be used to create signatures, a Cloud Storage object required for
various authentication flows including signed URLs. For information about
signatures, see the Cloud Storage documentation .
To create a self-signed binary object, complete these tasks:
Provide the required permissions to the caller .
Generate the self-signed blob .
Provide required permissions
A direct request involves two identities: the caller
that requests the credential, and the service account for which the
credential is created. How you set up the permissions depends on whether the
caller is authenticating as a service account or as a user account.
If you want to run a REST or gcloud CLI command on this page in a
local development environment, the caller can be represented by user
credentials. For automated workloads, such as an application running on
Compute Engine, the caller must be represented by a service account.
Service account User credentials
More
When the calling application uses a service account as its identity, the
following principals are involved:
Caller service account ( CALLER_SA )
This service account represents the calling application,
which issues the request for the short-lived credentials.
Privilege-bearing service account ( PRIV_SA )
This service account is granted the IAM roles needed for
the short-lived token. This is the service account for which the
short-lived token is created.
Note: In most cases, if you're using short-lived credentials to
authenticate the caller service account, the caller service account and the
privilege-bearing service account can't be the same. For more information, see
Self-impersonation .
To give CALLER_SA permissions to create short-lived
credentials for PRIV_SA , you grant
CALLER_SA the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) on PRIV_SA .
Grant the required role on PRIV_SA :
Console gcloud REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select a project.
Click the email address of the privilege-bearing service account,
PRIV_SA .
Click the Permissions tab.
Under Principals with access to this service account , click
person_add
Grant Access .
Enter the email address of the caller service account,
CALLER_SA .
For example, demo@my-project.iam.gserviceaccount.com .
Select the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ).
Click Save to grant the role to the service account.
The
gcloud iam service-accounts add-iam-policy-binding
command grants a role on a service account.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing
service account for which the token is generated.
CALLER_SA : The email address of the
service account representing the application that is requesting the short-lived token.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam service-accounts add-iam-policy-binding PRIV_SA \
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (PowerShell)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA `
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (cmd.exe)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA ^
--member = serviceAccount: CALLER_SA --role = roles/iam.serviceAccountTokenCreator --format = json
You should receive a response similar to the following:
Updated IAM policy for serviceAccount [ PRIV_SA ].
{
"bindings": [
{
"members": [
"serviceAccount: CALLER_SA "
],
"role": "roles/iam.serviceAccountTokenCreator"
}
],
"etag": "BwXhCB4eyjY=",
"version": 1
}
Read the allow policy for PRIV_SA :
The
serviceAccounts.getIamPolicy
method gets a service account's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/serviceAccountAdmin",
"members": [
"user:my-user@example.com"
]
}
]
}
If you have not granted any roles on the service account, the response
contains only an etag value. Include that etag
value in the next step.
Modify the allow policy to grant CALLER_SA the
Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ).
For example, to modify the sample response from the previous step,
add the following:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"serviceAccount: CALLER_SA "
]
}
]
}
Write the updated allow policy:
The
serviceAccounts.setIamPolicy
method sets an updated allow policy for the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account
for which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
POLICY : A JSON representation of the policy that you
want to set. For more information about the format of a policy, see the
Policy reference .
For example, to set the allow policy shown in the previous step, replace
POLICY with the following, where CALLER_SA is
the service account creating the short-lived token:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"serviceAccount: CALLER_SA "
]
}
]
}
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy
Request JSON body:
{
"policy": POLICY
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy"
PowerShell (Windows)
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
When you want to use the Google Cloud CLI to generate short-lived tokens,
or you want to generate short-lived tokens from a local development environment,
you can use a user account to generate the tokens. Often, you can use your own
user account.
When you use a user account to generate short-lived tokens, the following
identities are involved:
Caller account ( CALLER_ACCOUNT )
This user account is used to generate short-lived credentials for the
privilege-bearing service account.
Privilege-bearing service account ( PRIV_SA )
This service account is granted the IAM roles needed for
the short-lived token. This is the service account for which the
short-lived token is created.
To enable CALLER_ACCOUNT to create short-lived
credentials for PRIV_SA , you grant
CALLER_ACCOUNT the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) on PRIV_SA .
Grant the required role on PRIV_SA :
Console gcloud REST
More
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Select a project.
Click the email address of the privilege-bearing service account,
PRIV_SA .
Click the Permissions tab.
Under Principals with access to this service account , click
person_add
Grant Access .
Enter the principal identifier of the caller account,
CALLER_ACCOUNT .
For example, my-user@example.com .
Select the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ).
Click Save to grant the role to the user account.
The
gcloud iam service-accounts add-iam-policy-binding
command grants a role on a service account.
Before using any of the command data below,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing
service account for which the token is generated.
CALLER_ACCOUNT : The email address of the
user account being used to request the short-lived token.
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud iam service-accounts add-iam-policy-binding PRIV_SA \
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (PowerShell)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA `
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountTokenCreator --format = json
Windows (cmd.exe)
gcloud iam service-accounts add-iam-policy-binding PRIV_SA ^
--member = user: CALLER_ACCOUNT --role = roles/iam.serviceAccountTokenCreator --format = json
You should receive a response similar to the following:
Updated IAM policy for serviceAccount [ PRIV_SA ].
{
"bindings": [
{
"members": [
"user:my-user@example.com"
],
"role": "roles/iam.serviceAccountTokenCreator"
}
],
"etag": "BwX1ZbefjXU=",
"version": 1
}
Read the allow policy for PRIV_SA :
The
serviceAccounts.getIamPolicy
method gets a service account's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/serviceAccountAdmin",
"members": [
"user:my-user@example.com"
]
}
]
}
If you have not granted any roles on the service account, the response
contains only an etag value. Include that etag
value in the next step.
Modify the allow policy to grant
CALLER_ACCOUNT the Service Account Token Creator role (
roles/iam.serviceAccountTokenCreator ).
For example, to modify the sample response from the previous step,
add the following:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"user:my-user@example.com"
]
}
]
}
Write the updated allow policy:
The
serviceAccounts.setIamPolicy
method sets an updated allow policy for the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
PRIV_SA : The email address of the privilege-bearing service account
for which the short-lived token is created.
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
POLICY : A JSON representation of the policy that you
want to set. For more information about the format of a policy, see the
Policy reference .
For example, to set the allow policy shown in the previous step,
replace POLICY with the following, where
CALLER_ACCOUNT is the user account creating the short-lived token:
{
"version" : 1 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/serviceAccountAdmin" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
" CALLER_ACCOUNT "
]
}
]
}
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy
Request JSON body:
{
"policy": POLICY
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy"
PowerShell (Windows)
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ PRIV_SA :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
Generate the self-signed blob
Generate a self-signed blob for the service account:
REST
More
The Service Account Credentials API's
serviceAccounts.signBlob
method signs a blob using a service account's system-managed private key.
Before using any of the request data,
make the following replacements:
PRIV_SA : The email address of the privilege-bearing service account for
which the short-lived token is created.
BLOB_PAYLOAD : A base64-encoded string of bytes. For example,
VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu .
HTTP method and URL:
POST https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :signBlob
Request JSON body:
{
"payload": " BLOB_PAYLOAD "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :signBlob"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ PRIV_SA :signBlob" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
If the signBlob request was successful, the response body contains a signed blob and
the signing key ID that was used to sign the blob. You can use the signedBlob value
as a bearer token to directly authenticate a request on behalf of the service account. The token
is valid until the service account's system-managed private key expires. This key's ID is the
value of the keyId field in the response.
{
"keyId": "42ba1e...fc0a",
"signedBlob": "eyJ0eXAi...NiJ9"
}
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
