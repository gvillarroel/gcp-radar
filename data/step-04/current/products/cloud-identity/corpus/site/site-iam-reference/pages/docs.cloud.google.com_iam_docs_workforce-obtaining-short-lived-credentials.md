---
title: "Obtain short-lived tokens for Workforce Identity Federation \_|\_ Identity\
  \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/workforce-obtaining-short-lived-credentials
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/workforce-obtaining-short-lived-credentials
  title: "Obtain short-lived tokens for Workforce Identity Federation \_|\_ Identity\
    \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Obtain short-lived tokens for Workforce Identity Federation | Identity and Access Management (IAM) | Google Cloud Documentation
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
Identity and Access Management (IAM)
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
Exchange external credentials for a Google Cloud access token Browser-based sign-in with the gcloud CLI
Use configuration files for sign-in
Use the Google Cloud client libraries
Use the REST API
Manage sessions using the gcloud CLI
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Obtain short-lived tokens for Workforce Identity Federation
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Exchange external credentials for a Google Cloud access token Browser-based sign-in with the gcloud CLI
Use configuration files for sign-in
Use the Google Cloud client libraries
Use the REST API
Manage sessions using the gcloud CLI
What's next
This guide shows you how to use a workforce identity pool and workforce identity
pool provider to obtain short-lived tokens from Security Token Service. You
can use the tokens to access Google Cloud resources that support Workforce Identity Federation
that you have been granted access to.
The methods that are described in this guide can be used on headless machines.
You can obtain short-lived tokens by using this high-level process, described
in detail later in this document:
Obtain a credential from the trusted identity provider.
Exchange the credential for a token from the Security Token Service.
Before you begin
Configure Workforce Identity Federation
or, for IdP-specific instructions, see the following guides:
Configure Microsoft Entra ID-based Workforce Identity Federation
Configure Okta-based Workforce Identity Federation
Note your workforce identity pool ID and workforce identity pool provider
ID.
Ensure that you have the Identity and Access Management (IAM) permission
serviceusage.services.use . The least-privileged role that contains this
permission is Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ).
Enable the IAM and Security Token Service APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
Exchange external credentials for a Google Cloud access token
This section shows you how to use Security Token Service
to exchange your external credentials for an access token that grants access to
Google Cloud. You can do this by using the gcloud CLI,
REST API, and Cloud Client Libraries as described later in this guide.
If you need long-lived access, you can configure a long-running process to
continuously refresh credentials on that machine. Alternatively, you can
run a local server in the background with an endpoint that returns the
credentials.
Browser-based sign-in with the gcloud CLI
This section describes how to configure gcloud CLI to use
a browser-based sign-in flow. To do so, you create a sign-in configuration file
and then either reference the file in calls to gcloud auth login or activate
the file so that it is used by default.
Create the login configuration file
To create the login configuration file, run the following command. You can optionally activate
the file as the default for the gcloud CLI by adding the
--activate flag .
You can then run gcloud auth login without specifying
the configuration file path each time.
gcloud iam workforce-pools create-login-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ PROVIDER_ID \
--output-file = LOGIN_CONFIG_FILE_PATH
Replace the following:
WORKFORCE_POOL_ID : the workforce pool ID
PROVIDER_ID : the provider ID
LOGIN_CONFIG_FILE_PATH : the path to a configuration
file that you specify—for example, login.json
The file contains the endpoints used by the gcloud CLI to
enable the browser-based authentication flow and set the audience to the
IdP that was configured in the workforce identity pool provider. The file
doesn't contain confidential information.
The output looks similar to the following:
{
"type" : "external_account_authorized_user_login_config" ,
"audience" : "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID " ,
"auth_url" : "https://auth.cloud.google/authorize" ,
"token_url" : "https://sts.googleapis.com/v1/oauthtoken" ,
"token_info_url" : "https://sts.googleapis.com/v1/introspect"
}
Caution: We recommend that you first ensure that the contents of this file are correct and then safeguard the file—for example, by making it read-only and restricting access with an ACL. The file isn't validated; a malicious actor with write access to this file can change the endpoints and intercept credentials.
To stop gcloud auth login from using this configuration file automatically, you can unset it by running
gcloud config unset auth/login_config_file .
Sign in using browser-based authentication
To authenticate using browser-based sign-in authentication, you can use one of the following
methods:
If you used the --activate flag when you created the configuration file, or if you
activated the configuration file with
gcloud config set auth/login_config_file , the gcloud CLI
uses your configuration file automatically:
gcloud auth login
To sign in by specifying the location of the configuration file, run the
following command:
gcloud auth login --login-config = LOGIN_CONFIG_FILE_PATH
To use an environment variable to specify the location of the configuration
file, set CLOUDSDK_AUTH_LOGIN_CONFIG_FILE to the configuration path.
Disable browser-based sign-in
To discontinue using the login configuration file, do the following:
If you used the --activate flag when you created the configuration file, or if you
activated the configuration file with
gcloud config set auth/login_config_file , you must run the following
command to unset it:
gcloud config unset auth/login_config_file
Clear the CLOUDSDK_AUTH_LOGIN_CONFIG_FILE environment variable, if it is set.
Use configuration files for sign-in
As an alternative to browser-based sign-in, this section shows you different
ways to use credential configuration files to provide access to authenticated
Google Cloud actions. Setting up the configuration files does not
require you to be logged in to the gcloud CLI.
How you set up your configuration file depends on whether your IdP uses OIDC
or SAML.
OIDC SAML
More
You can source the credentials that you use to set up your configuration file
from the following sources:
File-sourced credentials
URL-sourced credentials
Non-interactive executable-sourced credentials
Interactive executable-sourced credentials
File-sourced credentials
When you use file-sourced credentials, tokens are loaded from a file. Another
process must refresh this file with a new OIDC token before the old token
expires. For example, if the token has a lifetime of one hour, you must
refresh the file before it is one hour old.
To generate the configuration file with a file-sourced credential, execute the
following command:
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID \
--subject-token-type = urn:ietf:params:oauth:token-type:id_token \
--credential-source-file = PATH_TO_OIDC_ID_TOKEN \
--workforce-pool-user-project = WORKFORCE_POOL_USER_PROJECT \
--output-file = config.json
Replace the following:
WORKFORCE_POOL_ID : the workforce identity pool ID
WORKFORCE_PROVIDER_ID : the workforce identity pool
provider ID
PATH_TO_OIDC_TOKEN : the path to the OIDC IdP
credential file
WORKFORCE_POOL_USER_PROJECT : the project number or
ID associated with the
workforce pools user project .
The principal must have serviceusage.services.use permission on this
project.
Running the command produces an OIDC IdP config file similar to the following:
{
"type" : "external_account" ,
"audience" : "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID " ,
"subject_token_type" : "urn:ietf:params:oauth:token-type:id_token" ,
"token_url" : "https://sts.googleapis.com/v1/token" ,
"workforce_pool_user_project" : " WORKFORCE_POOL_USER_PROJECT " ,
"credential_source" : {
"file" : " PATH_TO_OIDC_CREDENTIALS_FILE "
}
}
URL-sourced credentials
When you use URL-sourced credentials, tokens are loaded from a local server
with an endpoint that responds to HTTP GET requests. The response must be an
OIDC ID token, either in plain text or in JSON format.
To generate a configuration file with a URL-sourced credential, execute the
following command:
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID \
--subject-token-type = urn:ietf:params:oauth:token-type:id_token \
--credential-source-url = URL_TO_RETURN_OIDC_ID_TOKEN \
--workforce-pool-user-project = WORKFORCE_POOL_USER_PROJECT \
--output-file = config.json
Replace the following:
WORKFORCE_POOL_ID : the workforce identity pool ID.
WORKFORCE_PROVIDER_ID : the workforce identity pool
provider ID.
URL_TO_RETURN_OIDC_ID_TOKEN : the URL to call to
retrieve the OIDC credentials, such as an OIDC ID token—for example:
http://localhost:5000/token .
WORKFORCE_POOL_USER_PROJECT : the project number used
for quota and billing. The principal needs to have serviceusage.services.use permission
on this project.
Running the command produces an OIDC IdP config file similar to the following:
{
"type" : "external_account" ,
"audience" : "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID " ,
"subject_token_type" : "urn:ietf:params:oauth:token-type:id_token" ,
"token_url" : "https://sts.googleapis.com/v1/token" ,
"workforce_pool_user_project" : " WORKFORCE_POOL_USER_PROJECT " ,
"credential_source" : {
"url" : " URL_TO_RETURN_OIDC_ID_TOKEN "
}
}
Non-interactive executable-sourced credentials
When you use non-interactive executable-sourced credentials, tokens are loaded
from a local executable. The executable must provide a valid, unexpired OIDC
ID token in JSON format to stdout :
{
"version": 1,
"success": true,
"token_type": "urn:ietf:params:oauth:token-type:id_token",
"id_token": "HEADER.PAYLOAD.SIGNATURE",
"expiration_time": 1620499962
}
These fields are required for a successful response, with the exception of
expiration_time . The expiration_time field is only required when an
output file has been specified in the credential configuration.
The executable must surface any errors to stdout in the following
JSON format:
{
"version": 1,
"success": false,
"code": "401",
"message": "Caller not authorized."
}
These fields are all required for an error response. The code and message
fields are used by the client libraries when raising the appropriate error.
The command can return the following fields:
version : the version of the JSON output. Only
version 1 is supported.
success : the status of the response. When the
status is true , the executable must exit with exit code 0 and the
response must contain the following fields:
token_type : id_token
expiration_time field, if an output file is specified in the
credential configuration
When the status is false , the executable must exit with a non-zero
value and the response must contain the following fields:
code
message
token_type : the third-party subject token type,
which must be urn:ietf:params:oauth:token-type:id_token
id_token : the third-party OIDC token
expiration_time : the third-party OIDC token
expiration time in seconds (Unix epoch time)
code : the error code string
message : the error message
The client libraries set the following environment variables when the
executable is run:
GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE : the audience
field from the credential configuration. This variable is always set.
GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE : the expected
subject token type. This variable is always set.
GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE : the output
file location from the credential configuration. This variable is only
present when it is specified in the credential configuration.
These environment variables can be used by the executable to avoid hardcoding
these values.
To enable this credential sourcing method with the client libraries, the
GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment variable must be set
to 1 .
To generate the configuration file with an executable-sourced credential,
run the following command:
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID \
--subject-token-type = urn:ietf:params:oauth:token-type:id_token \
--executable-command = EXECUTABLE_COMMAND \
--executable-timeout-millis = EXECUTABLE_TIMEOUT \
--executable-output-file = EXECUTABLE_OUTPUT_FILE \
--workforce-pool-user-project = WORKFORCE_POOL_USER_PROJECT \
--output-file /path/to/generated/config.json
Replace the following:
WORKFORCE_POOL_ID : the workforce identity pool ID.
WORKFORCE_PROVIDER_ID : the workforce identity pool
provider ID.
EXECUTABLE_COMMAND : the full command, including
arguments, to run to retrieve the subject token, such as an OIDC ID token,
in the following format:
--executable-command="/path/to/command --foo=bar" .
EXECUTABLE_TIMEOUT : Optional. A duration, in
milliseconds, to wait for the executable to run (defaults to 30s).
EXECUTABLE_OUTPUT_FILE : Optional. A path to
the third-party credentials generated by the executable. This is useful for
caching the credentials. The Auth libraries first check for this path before
running the executable.
WORKFORCE_POOL_USER_PROJECT : the project number or
ID that is used for quota and billing. The principal must have the
serviceusage.services.use permission set on this project.
Running the command produces an OIDC IdP config file similar to the following:
{
"type" : "external_account" ,
"audience" : "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID " ,
"subject_token_type" : "urn:ietf:params:oauth:token-type:id_token" ,
"token_url" : "https://sts.googleapis.com/v1/token" ,
"workforce_pool_user_project" : " WORKFORCE_POOL_USER_PROJECT " ,
"credential_source" : {
"executable" : {
"command" : " EXECUTABLE_COMMAND " ,
"timeout_millis" : " EXECUTABLE_TIMEOUT " ,
"output_file" : " EXECUTABLE_OUTPUT_FILE "
}
}
}
Interactive executable-sourced credentials
When you use interactive executable-sourced credentials, you can provide an
executable that interacts with the user through stdin and stdout . If the
user successfully signs in, the executable writes a valid, unexpired
credential to the specified file.
To use this mode, the following flags are required:
--executable-output-file : the file that the executable writes the
credential information to
--exeutable-interactive-timeout-millis : a non-zero value that indicates
interactive mode and sets the timeout—for example, 6000 for a 60-second
timeout
The following fields are required for a successful response, with the
exception of expiration_time :
{
"version": 1,
"success": true,
"token_type": "urn:ietf:params:oauth:token-type:id_token",
"id_token": "HEADER.PAYLOAD.SIGNATURE",
"expiration_time": 1620499962
}
The executable must write any errors to the file specified in
--executable-output-file in the following JSON format. The following fields
are all required when returning an error response.
{
"version": 1,
"success": false,
"code": "401",
"message": "Caller not authorized."
}
The code and message fields must indicate the appropriate error. These
fields are used by the client libraries when raising the error.
Upon successful execution, the command returns the same fields for
interactive and non-interactive executable-sourced credentials.
The environment variables are also the same for interactive and
non-interactive executable-sourced credentials.
To generate an interactive executable-sourced credential, add the parameter
--executable-interactive-timeout-millis and the parameter
--executable-output-file .
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID \
--subject-token-type = urn:ietf:params:oauth:token-type:id_token \
--executable-command = EXECUTABLE_COMMAND \
--executable-interactive-timeout-millis = EXECUTABLE_INTERACTIVE_TIMEOUT \
--executable-output-file = EXECUTABLE_OUTPUT_FILE \
--workforce-pool-user-project = WORKFORCE_POOL_USER_PROJECT \
--output-file /path/to/generated/config.json
Replace the following:
WORKFORCE_POOL_ID : the workforce identity pool ID.
WORKFORCE_PROVIDER_ID : the workforce identity pool
provider ID.
EXECUTABLE_COMMAND : the full command, including
arguments, to run to retrieve the subject token, formatted as follows:
--executable-command="/path/to/command --arg1=val1 --arg2=val2"
EXECUTABLE_INTERACTIVE_TIMEOUT : a duration, in
milliseconds, to wait for the executable to run.
EXECUTABLE_OUTPUT_FILE : a path to the
third-party credentials generated by the executable. This path is useful
for caching the credentials. The authentication libraries first check for
this path before running the executable.
WORKFORCE_POOL_USER_PROJECT : the project number or
ID used for quota and billing. The principal must have the
serviceusage.services.use permission on this project.
Running the command produces an OIDC IdP config file similar to the following:
{
"type" : "external_account" ,
"audience" : "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID " ,
"subject_token_type" : "urn:ietf:params:oauth:token-type:id_token" ,
"token_url" : "https://sts.googleapis.com/v1/token" ,
"workforce_pool_user_project" : " WORKFORCE_POOL_USER_PROJECT " ,
"credential_source" : {
"executable" : {
"command" : " EXECUTABLE_COMMAND " ,
"interactive_timeout_millis" : " EXECUTABLE_INTERACTIVE_TIMEOUT " ,
"timeout_millis" : " EXECUTABLE_TIMEOUT " ,
"output_file" : " EXECUTABLE_OUTPUT_FILE " ,
}
}
}
The timeout_millis field is returned because an interactive executable can
also run in non-interactive mode, in some cases.
In interactive mode, the command returns a default timeout.
You can source the credentials that you use to set up your configuration file
from the following sources:
File-sourced credentials
URL-sourced credentials
Executable-sourced credentials
Executable-sourced credentials for gcloud interactive mode
File-sourced credentials
Assertions are loaded from a file. Another process must refresh this file with
a new base64-encoded SAML assertion before the old assertion expires. For
example, if the assertion has a lifetime of one hour, you must refresh the
file before it is one hour old.
Note: you must pass the
--subject-token-type=urn:ietf:params:oauth:token-type:saml2 flag when you
generate the configuration file.
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID \
--output-file = federation_config.json \
--credential-source-file = CREDENTIAL_FILE \
--subject-token-type = urn:ietf:params:oauth:token-type:saml2 \
--workforce-pool-user-project = WORKFORCE_POOL_USER_PROJECT
Replace the following:
WORKFORCE_POOL_ID : the workforce identity pool ID.
WORKFORCE_PROVIDER_ID : the workforce identity pool
provider ID.
CREDENTIAL_FILE : the path to the credential file
that is generated by the IdP.
WORKFORCE_POOL_USER_PROJECT : the project number or
ID that is used for quota and billing. The principal must have
serviceusage.services.use permission on this project.
URL-sourced credentials
Assertions are loaded from a local server
with an endpoint that responds to HTTP `GET` requests. The response must be
either a [base64-encoded](https://toolbox.googleapps.com/apps/encode_decode/)
SAML assertion or JSON containing a base64-encoded SAML assertion.
To use URL-sourced credentials, use the `--credential-source-url` flag:
```sh
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID \
--output-file=federation_config.json \
--credential-source-url= CREDENTIAL_URL \
--subject-token-type=urn:ietf:params:oauth:token-type:saml2 \
--workforce-pool-user-project= WORKFORCE_POOL_USER_PROJECT
```
Replace the following:
* WORKFORCE_POOL_ID : the workforce identity pool ID.
* WORKFORCE_PROVIDER_ID : the workforce identity pool
provider ID.
* CREDENTIAL_URL : the URL of the local server
endpoint.
* WORKFORCE_POOL_USER_PROJECT : the project number or
ID used for quota and billing. The principal needs to have
`serviceusage.services.use permission` on this project.
Executable-sourced credentials
Assertions are loaded from a local executable. The executable must provide a
valid, unexpired SAML assertion in JSON format to stdout .
{
"version": 1,
"success": true,
"token_type": "urn:ietf:params:oauth:token-type:saml2",
"saml_response": "...",
"expiration_time": 1620499962
}
These fields are required for a successful response, with the exception of
expiration_time . The expiration_time field is required only when an
output file is specified in the credential configuration.
If an error occurs, it must be surfaced by the executable in the following
JSON format to stdout:
{
"version": 1,
"success": false,
"code": "401",
"message": "Caller not authorized."
}
These fields are all required for an error response. The code and message
fields are used by the client libraries when raising the appropriate error.
The command can return the following fields:
version : the version of the JSON output. Only
version 1 is supported.
success : the status of the response.
When the status is true , the executable must exit with exit code 0
and the response must contain the following fields:
token_type : saml_response
expiration_time field, if an output file is specified in the
credential configuration
When the status is false , the executable must exit with a non-zero
value and the response must contain the following fields:
+ code
+ message
token_type : the third-party subject token type,
which must be urn:ietf:params:oauth:token-type:saml2
saml_response : the third-party SAML response
expiration_time : the third-party SAML response
expiration time in seconds (Unix epoch time)
code : the error code string
message : the error message
The client libraries set the following environment variables when the
executable is run:
GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE : the audience
field from the credential configuration. This variable is always set.
GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE : the expected
subject token type. This variable is always set.
GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE : the output
file location from the credential configuration. This variable is only
present when it is specified in the credential configuration.
Note: The executable can use these environment variables to avoid hardcoding
these values.
To enable this credential sourcing method with the client libraries, set the
GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment variable to 1 .
To generate the configuration file with a executable-sourced credential,
execute the following command:
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID \
--subject-token-type = urn:ietf:params:oauth:token-type:saml2 \
--executable-command = EXECUTABLE_COMMAND \
--executable-timeout-millis = EXECUTABLE_TIMEOUT \
--executable-output-file = EXECUTABLE_OUTPUT_FILE \
--workforce-pool-user-project = WORKFORCE_POOL_USER_PROJECT \
--output-file /path/to/generated/config.json
Replace the following:
WORKFORCE_POOL_ID : the workforce identity pool ID.
WORKFORCE_PROVIDER_ID : the workforce identity pool
provider ID.
EXECUTABLE_COMMAND : the full command, including
arguments, to run to retrieve the subject token, in the following format:
--executable-command="/path/to/command --foo=bar" .
EXECUTABLE_TIMEOUT : Optional. The duration in
milliseconds to wait for the executable to run (defaults to 30s).
EXECUTABLE_OUTPUT_FILE : Optional. The path to
the third-party identity (3PI) credentials generated by the executable. This
is useful for caching the credentials. The authorization libraries check for
its existence before running the executable.
WORKFORCE_POOL_USER_PROJECT : the project number used
for quota and billing. The principal must have the
serviceusage.services.use permission on this project.
Running the command produces a SAML IdP config file that is similar to the
following:
{
"type" : "external_account" ,
"audience" : "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID " ,
"subject_token_type" : "urn:ietf:params:oauth:token-type:saml2" ,
"token_url" : "https://sts.googleapis.com/v1/token" ,
"workforce_pool_user_project" : " WORKFORCE_POOL_USER_PROJECT " ,
"credential_source" : {
"executable" : {
"command" : " EXECUTABLE_COMMAND " ,
"timeout_millis" : " EXECUTABLE_TIMEOUT " ,
"output_file" : " EXECUTABLE_OUTPUT_FILE "
}
}
}
Executable-sourced credentials for gcloud interactive mode
When you use executable-sourced credentials for gcloud interactive mode, an
executable interacts with the user through the command line interface.
In the previous command, replace the following:
EXECUTABLE_OUTPUT_FILE : Required. The path to the
file that provides the credentials generated by the executable.
EXECUTABLE_TIMEOUT : Required. A non-zero timeout
value also signals the command to use interactive mode.
{
"version": 1,
"success": true,
"token_type": "urn:ietf:params:oauth:token-type:saml2",
"saml_response": "...",
"expiration_time": 1620499962
}
These fields are required for a successful response, with the exception of
expiration_time . When expiration_time is omitted, the executable is still
run.
The executable must surface any errors to the executable-output-file in the
following JSON format. When the executable reports an error, these fields are
all required. The code and message fields are used by the client libraries
when raising the appropriate error.
{
"version": 1,
"success": false,
"code": "401",
"message": "Caller not authorized."
}
Successful command execution returns the same fields as non-interactive
executable-sourced credentials .
The environment variables are also the same as a non-interactive
executable-sourced credentials.
To generate an interactive executable-sourced credential, add the parameter
--executable-interactive-timeout-millis .
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID \
--subject-token-type = urn:ietf:params:oauth:token-type:saml2 \
--executable-command = EXECUTABLE_COMMAND \
--executable-interactive-timeout-millis = EXECUTABLE_INTERACTIVE_TIMEOUT \
--executable-output-file = EXECUTABLE_OUTPUT_FILE \
--workforce-pool-user-project = WORKFORCE_POOL_USER_PROJECT \
--output-file /path/to/generated/config.json
Replace the following:
WORKFORCE_POOL_ID : the workforce identity pool ID.
WORKFORCE_PROVIDER_ID : the workforce identity pool
provider ID.
EXECUTABLE_COMMAND : the full command, including
arguments, to run to retrieve the subject token, formatted as follows:
--executable-command="/path/to/command --foo=bar") .
EXECUTABLE_INTERACTIVE_TIMEOUT : a duration, in
milliseconds, to wait for the executable to run.
EXECUTABLE_OUTPUT_FILE : a path to the
third-party credentials generated by the executable. This is useful for
caching the credentials. The authentication libraries first check for this
path before running the executable.
WORKFORCE_POOL_USER_PROJECT : the project number or
ID used for quota and billing. The principal must have the
serviceusage.services.use permission on this project.
Running the command produces a SAML IdP config file similar to the following:
{
"type" : "external_account" ,
"audience" : "//iam.googleapis.com/locations/global/workforcePools/<var>WORKFORCE_POOL_ID<var>/providers/<var>WORKFORCE_PROVIDER_ID</var>" ,
"subject_token_type" : "urn:ietf:params:oauth:token-type:saml2" ,
"token_url" : "https://sts.googleapis.com/v1/token" ,
"workforce_pool_user_project" : "<var>WORKFORCE_POOL_USER_PROJECT</var>" ,
"credential_source" : {
"executable" : {
"command" : "<var>EXECUTABLE_COMMAND</var>" ,
"interactive_timeout_millis" : "<var>EXECUTABLE_INTERACTIVE_TIMEOUT</var>" ,
"timeout_millis" : "<var>EXECUTABLE_TIMEOUT</var>" ,
"output_file" : "<var>EXECUTABLE_OUTPUT_FILE</var>" ,
}
}
}
Note: timeout_millis is included in the configuration because an interactive
executable-sourced credential can also run in non-interactive mode in some
cases. The gcloud CLI configuration generator auto fills that
field with default timeout setting of 30 seconds.
To sign in, run the following command:
gcloud auth login --cred-file = /path/to/config.json
Note that neither the gcloud CLI nor the bq command-line tool support
executable-sourced credential types.
For headless flows, the gcloud CLI automatically uses the following
scope: https://www.googleapis.com/auth/cloud-platform .
The gcloud CLI then transparently posts your credentials to the
Security Token Service endpoint, where it is exchanged for temporary
Google Cloud access tokens.
You can now execute gcloud commands using the gcloud CLI.
Use the Google Cloud client libraries
If you use a supported client library, you can configure the client library so
that it generates Google credentials automatically. When possible, we recommend
that you generate credentials automatically, so that you don't need to
implement the token-exchange process yourself.
Google Cloud client library support for workforce pools are supported in
the following languages: Node.js, Java, Python, Go and C++ (gRPC).
To use client libraries with these services or languages, do the following:
bq tool C++ gcloud Go Java Node.js Python
More
To authenticate using Workforce Identity Federation, use the
gcloud auth login command:
gcloud auth login --cred-file= FILEPATH .json
where FILEPATH is the path to the credential
configuration file.
Support for Workforce Identity Federation in the bq tool is
available in version 390.0.0 and later versions of the Google Cloud CLI .
Most of the Google Cloud Client Libraries for C++
support Workforce Identity Federation by using a ChannelCredentials object,
which is created by calling grpc::GoogleDefaultCredentials() . To initialize
this credential, you must build the client libraries with version 1.42.0 or
later of gRPC .
The Cloud Storage Cloud Client Libraries for C++ uses the REST API, not gRPC, so it
doesn't support Workforce Identity Federation.
auto creds = grpc :: GoogleDefaultCredentials ();
// Create a channel, stub and make RPC calls (same as in the previous example)
auto channel = grpc :: CreateChannel ( "greeter.googleapis.com" , creds );
std :: unique_ptr<Greeter :: Stub > stub ( Greeter :: NewStub ( channel ));
grpc :: Status s = stub - > sayHello ( & context , * request , response );
To authenticate using Workforce Identity Federation, use the
gcloud auth login command:
gcloud auth login --cred-file= FILEPATH .json
Replace FILEPATH with the path to the credential
configuration file.
Support for Workforce Identity Federation in the gcloud CLI is
available in version 392.0.0 and later versions of the Google Cloud CLI .
Cloud Client Libraries for Go support Workforce Identity Federation when you use
version v0.0.0-20211005180243-6b3c2da341f1 or later of the
golang.org/x/oauth2 module.
import (
"context"
"fmt"
"log"
"cloud.google.com/go/storage"
"google.golang.org/api/iterator"
"google.golang.org/api/option"
"io/ioutil"
)
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
# Explicit initialization can also be used .
# var jsonPath = "/path/to/3p-credentials.json"
# client , err := storage . NewClient ( ctx , option . WithCredentialsFile ( jsonPath ))
if err != nil {
log . Fatal ( err )
}
fmt . Println ( "Buckets:" )
it := client . Buckets ( ctx , projectID )
for {
battrs , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
log . Fatal ( err )
}
fmt . Println ( battrs . Name )
}
Cloud Client Libraries for Java support Workforce Identity Federation when you use
version 1.2.0 or later of the com.google.auth:google-auth-library-oauth2-http artifact .
import com.google.auth.oauth2. GoogleCredentials ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
GoogleCredentials credentials = GoogleCredentials . getApplicationDefault ();
GoogleCredentials sourceCredentials = credentials
. createScoped ( Arrays . asList ( "https://www.googleapis.com/auth/devstorage.read_only" ));
Storage storageService = StorageOptions . newBuilder (). setProjectId ( "project-id" )
. setCredentials ( sourceCredentials ). build (). getService ();
Cloud Client Libraries for Node.js support Workforce Identity Federation when you
use version 7.10.0 or later of the google-auth-library package .
Unlike workload identity pools, workforce identity pools are associated with
an organization and not a Google Cloud project. When you create a
GoogleAuth object, you must specify a project ID. For more information, see
the README for the google-auth-library package .
const auth = new GoogleAuth ({
scopes : 'https://www.googleapis.com/auth/cloud-platform' ,
// Specify a project ID.
projectId : 'CLOUD_RESOURCE_PROJECT_ID' ,
});
# API request using Auth library .
const client = await auth . getClient ();
const url =
`https://storage.googleapis.com/storage/v1/b?projects= ${ projectId } ` ;
const res = await client . request ({ url });
console . log ( res . data );
Cloud Client Libraries for Python support Workforce Identity Federation when you
use version 2.3.0 or later of the google-auth package .
from google.cloud import storage
import google.auth
credentials , project = google . auth . default (
scopes = [ 'https://www.googleapis.com/auth/devstorage.read_only' ])
client = storage . Client (
project = "project-id" , credentials = credentials )
In the example code, the project value can be None if the library is
unable to automatically discover the project ID. You can pass the project ID
explicitly when using a service instance, as the storage client example does,
or set the project ID through the environment variable GOOGLE_CLOUD_PROJECT .
For details, see the user guide for the google-auth package .
Use the REST API
You can call the Google Cloud Security Token Service API to exchange your
external credentials for Google Cloud access tokens by running the
following command:
curl https://sts.googleapis.com/v1/token \
--data-urlencode "audience=//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID " \
--data-urlencode "grant_type=urn:ietf:params:oauth:grant-type:token-exchange" \
--data-urlencode "requested_token_type=urn:ietf:params:oauth:token-type:access_token" \
--data-urlencode "scope=https://www.googleapis.com/auth/cloud-platform" \
--data-urlencode "subject_token_type= SUBJECT_TOKEN_TYPE " \
--data-urlencode "subject_token= EXTERNAL_SUBJECT_TOKEN " \
--data-urlencode "options={\"userProject\":\" BILLING_PROJECT_NUMBER \"}"
Replace the following:
AUDIENCE : the full resource name
of the provider that issues the subject token.
WORKFORCE_POOL_ID : the workforce identity pool ID
WORKFORCE_PROVIDER_ID : the workforce identity pool
provider ID
SUBJECT_TOKEN_TYPE : set to one of the following:
urn:ietf:params:oauth:token-type:id_token for OIDC ID tokens
urn:ietf:params:oauth:token-type:saml2 for SAML assertions
EXTERNAL_SUBJECT_TOKEN : the IdP-issued token that
represents the identity of the principal for whom the access token is
requested.
If you configured an OIDC provider, the token must be JWT formatted.
BILLING_PROJECT_NUMBER : the project number or ID
used for quota and billing. The principal must have the
serviceusage.services.use permission on this project.
The response is similar to the following:
{
"access_token" : "ya29.dr.AaT61Tc6Ntv1ktbGkaQ9U_MQfiQw..." ,
"issued_token_type" : "urn:ietf:params:oauth:token-type:access_token" ,
"token_type" : "Bearer" ,
"expires_in" : 3600
}
Manage sessions using the gcloud CLI
The temporary Google Cloud tokens that the gcloud CLI obtains
from the Security Token Service endpoint expire after a specified time interval.
When the token is about to expire, the gcloud CLI inspects the
credentials file you provided and inspects the validity of the credentials you
received from your IdP. If your credentials are still valid, the
gcloud CLI proceeds to transparently obtain a new
Google Cloud access token, and your current session runs without
interruption.
If your credentials have expired, then no new Google Cloud tokens are
issued, and any calls you make with those credentials fail. At this point, you
must re-authenticate.
You can terminate your session by executing the following command:
gcloud auth revoke
gcloud supports multiple user sessions. To get the list of sessions, including
the session that is currently active, execute the following command:
gcloud auth list
The output of the command is similar to the following:
Credentialed Accounts
ACTIVE ACCOUNT
* bola@example.com
principal://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /subject/kalani@example.com
To switch to a different session and set it as active, execute the following
command:
gcloud config set account principal://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /subject/ SUBJECT_ID
What's next
Delete Workforce Identity Federation users and their data
Learn which Google Cloud products support Workforce Identity Federation
Set up user access to console (federated)
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
