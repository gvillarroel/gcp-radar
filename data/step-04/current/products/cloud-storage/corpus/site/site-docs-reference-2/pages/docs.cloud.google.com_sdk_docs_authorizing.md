---
title: "Authorize the gcloud CLI \_|\_ Google Cloud SDK \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sdk/docs/authorizing
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/authorizing
  title: "Authorize the gcloud CLI \_|\_ Google Cloud SDK \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Google Cloud SDK
Guides
Send feedback
Authorize the gcloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
In order to access Google Cloud, you will usually have to
authorize the Google Cloud CLI. This page demonstrates available
authorization options and shows you how to manage the accounts you use for
authorization. If you're using a Compute Engine instance or
Cloud Shell, you're not required to authorize the gcloud CLI.
Types of accounts
To grant authorization to the gcloud CLI to access
Google Cloud, you can use either a
user account or a
service account .
A user account is a Google Cloud account that allows end users to
authenticate to your application. For most common use cases, especially
interactively using the gcloud CLI, using a user account is best
practice.
A service account is a Google Cloud account associated with your
Google Cloud project and not a specific user.
You can use the built-in service account available when using
Cloud Run functions, App Engine, Compute Engine, or
Google Kubernetes Engine. A service account is recommended to run gcloud CLI
scripts on multiple machines.
Choose an authorization type
You must authorize the Google Cloud CLI to manage Google Cloud
resources. Both Google Cloud CLI and Google Cloud use OAuth2
for authentication and authorization.
Choose one of the following authorization types:
Type
Description
User account
Recommended if you're using the gcloud CLI from the command
line or you're writing scripts with the gcloud CLI for use on a
single machine.
Service account
Recommended if you're installing and setting up the gcloud CLI
as part of a machine deployment process in production, or for use on
Compute Engine virtual machine instances where all users have access
to root .
For more information about authentication and Google Cloud, see
Authentication overview .
Authorize with a user account
This section describes how to authorize with a user account.
Authenticating with a Google Account
Use the following gcloud CLI commands to authorize access
with a user account:
Command
Description
gcloud init
Authorizes access and performs other common setup steps.
gcloud auth login
Authorizes access only.
During authorization, these commands obtain account credentials from
Google Cloud and store them on the local system. The specified account
becomes the active account in your configuration .
The gcloud CLI uses the stored credentials to access
Google Cloud. You can have any number of accounts with stored
credentials for a single gcloud CLI installation, but only one
account is active at a time.
Run gcloud init
gcloud init authorizes access and performs
other common setup steps . gcloud init uses
a web-based authorization flow to authenticate the user account and grant
access permissions.
To authorize access and perform other common setup steps:
Run gcloud init :
gcloud init
Or, to prevent the command from automatically opening a web browser:
gcloud init --console-only
Using the --console-only flag is useful if you're running the command on
a remote system using ssh and do not have access to a browser on that
system. You must then manually open the provided URL in a browser on your
local system to complete the authorization process.
Follow the browser-based authorization flow to authenticate the account
and grant access permissions.
For more information about gcloud init , see
Initializing the gcloud CLI .
Run gcloud auth login
Running gcloud auth login authorizes the user account only.
To authorize access without performing other setup steps, use one of the following options.
If you want to authorize the gcloud CLI on a machine with a
browser, follow these steps.
Authorize the gcloud CLI:
gcloud auth login
Follow the browser-based authorization flow to authenticate the account
and grant access permissions.
If you want to authorize the gcloud CLI on a machine that
doesn't have a browser and you can install the gcloud CLI on
another machine with a browser, use the --no-browser flag.
Authorize the gcloud CLI:
gcloud auth login --no-browser
Copy the long command that begins with gcloud auth login
--remote-bootstrap=" .
Paste and run this command on the command line of a different, trusted
machine that has local installations of both a web browser and the
gcloud CLI tool version 372.0 or later.
Copy the long URL output from the machine with the web browser.
Paste the long URL back to the first machine under the prompt, "Enter
the output of the above command", and press Enter to complete the
authorization.
If you want to authorize the gcloud CLI on a machine that
doesn't have a browser and you cannot install the gcloud CLI
on another machine with a browser, use the --no-launch-browser flag. The
--no-launch-browser flag prevents the command from automatically opening a
web browser.
Authorize the gcloud CLI:
gcloud auth login --no-launch-browser
Copy the long URL that begins with
https://accounts.google.com/o/oauth2/auth...
Paste this URL into the browser of a different, trusted machine that has
a web browser.
Copy the authorization code from the machine with the web browser.
Paste the authorization code back to the first machine at the prompt,
"Enter verification code", and press Enter to complete the
authorization.
If you already have an access token, use one of the following
methods to pass the access token to the gcloud CLI:
Store the access token in a file and set its path through the
--access-token-file
flag.
Store the access token in a file and set its path in the
auth/access_token_file
property.
Set the CLOUDSDK_AUTH_ACCESS_TOKEN environment variable to the
access token value.
Authenticating with Workforce Identity Federation
This section describes how to sign in to the gcloud CLI using
Workforce Identity Federation.
gcloud CLI browser-based sign-in
To sign in to the gcloud CLI using a browser-based sign-in flow, do
the following:
Create a login configuration file.
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
Sign in using browser-based authentication.
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
To discontinue using the login configuration file, do the following:
If you used the --activate flag when you created the configuration file, or if you
activated the configuration file with
gcloud config set auth/login_config_file , you must run the following
command to unset it:
gcloud config unset auth/login_config_file
Clear the CLOUDSDK_AUTH_LOGIN_CONFIG_FILE environment variable, if it is set.
gcloud CLI headless sign-in
To sign in to gcloud CLI, using a headless flow, do the following:
OIDC
Sign a user in to your IdP app and get the OIDC token.
For information on obtaining the token, refer to your
IdP's OIDC documentation.
Save the OIDC token returned by IdP in a secure location on
your local machine.
Generate a configuration file by running the following command:
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ PROVIDER_ID \
--subject-token-type = "urn:ietf:params:oauth:token-type:id_token" \
--credential-source-file = " PATH_TO_OIDC_ID_TOKEN " \
--workforce-pool-user-project = " WORKFORCE_POOL_USER_PROJECT " \
--output-file = "config.json"
Replace the following:
WORKFORCE_POOL_ID : the workforce pool ID
PROVIDER_ID : the provider ID
PATH_TO_OIDC_TOKEN : the path to the OIDC IdP
credential file
WORKFORCE_POOL_USER_PROJECT : the project number
associated with the workforce pools user project
The principal must have serviceusage.services.use permission on this
project.
When you run the command, it produces an OIDC IdP config file that is
formatted similar to the following:
{
"type" : "external_account" ,
"audience" : "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ PROVIDER_ID " ,
"subject_token_type" : "urn:ietf:params:oauth:token-type:id_token" ,
"token_url" : "https://sts.googleapis.com/v1/token" ,
"workforce_pool_user_project" : " WORKFORCE_POOL_USER_PROJECT " ,
"credential_source" : {
"file" : " PATH_TO_OIDC_CREDENTIALS_FILE "
}
}
SAML
Sign a user in to your IdP app and get the SAML assertion.
For information on obtaining the SAML assertion from
your IdP, refer to your IdP's SAML documentation.
Save the SAML response returned by IdP in a secure location
on your local machine, then store the path, as follows:
SAML_ASSERTION_PATH = SAML_ASSERTION_PATH
To generate a configuration file, run the following command:
gcloud iam workforce-pools create-cred-config \
locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID \
--subject-token-type = "urn:ietf:params:oauth:token-type:saml2" \
--credential-source-file = " SAML_ASSERTION_PATH " \
--workforce-pool-user-project = " PROJECT_ID " \
--output-file = "config.json"
Replace the following:
WORKFORCE_PROVIDER_ID : the workforce provider
ID you created earlier in this guide.
WORKFORCE_POOL_ID : the workforce pool ID you
created earlier in this guide.
SAML_ASSERTION_PATH : the path of the SAML
assertion file.
PROJECT_ID : the project ID
The configuration file that is generated looks similar to the
following:
{
"type" : "external_account" ,
"audience" : "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID " ,
"subject_token_type" : "urn:ietf:params:oauth:token-type:saml2" ,
"token_url" : "https://sts.googleapis.com/v1/token" ,
"credential_source" : {
"file" : " SAML_ASSERTION_PATH "
},
"workforce_pool_user_project" : " PROJECT_ID "
}
To sign in to gcloud using token exchange, run the following command:
gcloud auth login --cred-file = "config.json"
gcloud then transparently exchanges your IdP credentials for
temporary Google Cloud access tokens, allowing you to make other
gcloud calls to Google Cloud.
The output is similar to the following:
Authenticated with external account user credentials for:
[principal://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /subject/ USER_ID ].
To list the credentialed accounts and your currently active account,
run the following command:
gcloud auth list
Authorize with a service account
The gcloud auth login command can
authorize access with a service account by using a credential file stored on
your local file system. This credential can be a user credential with permission
to impersonate the service account, a credential configuration file for
Workload Identity Federation , or a
service account key.
Authorize a service account using service account impersonation
To authorize the gcloud CLI to
use impersonated service account credentials ,
do the following:
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Choose an existing account or create a new account by clicking Create
service account .
To get the permission that
you need to impersonate a service account,
ask your administrator to grant you the
Service Account Token Creator ( roles/iam.serviceAccountTokenCreator )
IAM role on the service account.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
iam.serviceAccounts.getAccessToken
permission,
which is required to
impersonate a service account.
You might also be able to get
this permission
with custom roles or
other predefined roles .
Authorize the gcloud CLI with your user identity by running
gcloud auth login .
To set up the gcloud CLI to use the identity and
access provided by a service account by default, use the
gcloud CLI config command :
gcloud config set auth/impersonate_service_account SERVICE_ACCT_EMAIL
To stop using impersonated service account credentials with the
gcloud CLI by default, unset the flag with the
gcloud CLI config command :
gcloud config unset auth/impersonate_service_account
Authorize a service account using Workload Identity Federation
To authorize the gcloud CLI with a service account using external
credentials from Workload Identity Federation, do the following:
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Choose an existing account or create a new account by clicking Create
service account .
Create a credential configuration file for Workload Identity Federation by following the directions for
your supported identity provider.
To activate your service account, run
gcloud auth login with the
--cred-file flag:
gcloud auth login --cred-file = CONFIGURATION_FILE
Replace CONFIGURATION_FILE with the path to a
credential configuration file
for Workload Identity Federation.
Authorize a service account using a service account key
Note:
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
To authorize the gcloud CLI with a service account using a service
account key, do the following:
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
Choose an existing account or create a new account by clicking Create
service account .
To create service account keys, see the IAM instructions to
Create a service account key .
To activate your service account, run
gcloud auth login with the
--cred-file flag:
gcloud auth login --cred-file= KEY_FILE
Replace KEY_FILE with the path to a service account key
file.
List accounts
To list the accounts whose credentials are stored on the local system, run
gcloud auth list :
gcloud auth list
The gcloud CLI lists the accounts and shows which account is active:
Credentialed accounts:
- user-1@gmail.com (active)
- user-2@gmail.com
Switch the active account
To switch the active account, run
gcloud config set :
gcloud config set account ACCOUNT
where [ACCOUNT] is the full email address of the account.
You can also switch accounts by creating a separate configuration that specifies
the different account and switching between configurations:
gcloud config configurations activate CONFIGURATION
If you want to switch the account used by the gcloud CLI on a
per-invocation basis, override the active account using the
--account flag.
Set authorized session length
As an administrator, you can control how long different users can access the
gcloud CLI without having to re-authenticate. For example, you can
force users with elevated privileges to re-authenticate more frequently than
regular users.
For more information, see
Set session length for Google Cloud services .
Revoke credentials for an account
You can revoke credentials when you want to disallow access by the
gcloud CLI by a particular account. You don't need to revoke
credentials to switch between accounts.
To revoke credentials, run
gcloud auth revoke :
gcloud auth revoke ACCOUNT
To revoke all access for the gcloud CLI for all machines,
remove the gcloud CLI from the list of apps that have access to your account .
Work with credential files
Find your credential files
To find the location of your credential files, run
gcloud info :
gcloud info
The gcloud CLI prints information about your installation.
Credential files are stored in the user configuration directory:
User Config Directory: [/home/ USERNAME /.config/gcloud]
Set up Application Default Credentials
The gcloud CLI provides support for managing Application Default
Credentials (ADC) with the
gcloud auth application-default
command group. To make user credentials available to ADC, run
gcloud auth application-default login :
gcloud auth application-default login
These credentials are
not used by the gcloud CLI .
For more ways to set up ADC, see
Set up Application Default Credentials .
Note: You might have configurations in your environment to make
different credentials available to ADC. If the gcloud auth application-default
command group results in unexpected credentials, unset these configurations and
try again with the following commands:
unset GOOGLE_APPLICATION_CREDENTIALS
gcloud config unset auth/impersonate_service_account
gcloud auth application-default login
What's next
To learn more about authentication and Google Cloud, see
Authentication overview .
To learn more about customizing gcloud CLI, see
gcloud CLI properties .
To learn more about managing named sets of gcloud CLI
properties, see
gcloud CLI configurations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
