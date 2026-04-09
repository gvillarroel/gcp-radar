---
title: "Disable and enable service account keys \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/keys-disable-enable
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/keys-disable-enable
  title: "Disable and enable service account keys \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Disable and enable service account keys | Identity and Access Management (IAM) | Google Cloud Documentation
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
Before you begin Required roles
Disable a service account key
Enable a service account key
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Disable and enable service account keys
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Disable a service account key
Enable a service account key
What's next
This page explains how to disable and enable service account keys using the
Google Cloud console, the Google Cloud CLI ,
the Identity and Access Management API , or one
of the Google Cloud Client Libraries .
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
Before you begin
Enable the IAM API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up authentication.
Select the tab for how you plan to use the samples on this page:
gcloud Java REST
More
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
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Understand service account credentials .
Required roles
To get the permissions that
you need to disable and enable service account keys,
ask your administrator to grant you the
Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin )
IAM role on the project, or the service account whose keys you want
to manage.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
IAM basic roles also contain permissions to manage service
account keys.
You should not grant basic roles in a production environment, but you can grant them in a
development or test environment.
Disable a service account key
Disabling a service account key prevents you from using the key to authenticate
with Google APIs. You can enable a disabled key at any time.
Important: Disabling a service account key does not revoke short-lived
credentials that were issued based on the key. To revoke a compromised
short-lived credential, you must
disable or delete the service account that the credential
represents. If you do so, any workload that uses the service account will
immediately lose access to your resources.
Before you delete a service account key , we recommend that you
disable the key, then wait until you are sure that the key is no longer needed.
You can then delete the key.
You can view disabled keys in the Google Cloud console, but you cannot use the
Google Cloud console to disable a key. Use the gcloud CLI or the
REST API instead.
gcloud Java REST
More
Execute the gcloud iam service-accounts keys disable
command to disable a service account key.
Replace the following values:
KEY_ID : The ID of the key to disable. To find the
key's ID, list all keys for the service account , identify the
key that you want to disable, and then copy its ID.
SA_NAME : The name of the service account that the key
belongs to.
PROJECT_ID : Your Google Cloud project ID.
gcloud iam service-accounts keys disable KEY_ID \
--iam-account = SA_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--project = PROJECT_ID
Output:
Disabled key [ KEY_ID ] for service account
[ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com]
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Java API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
import com.google.cloud.iam.admin.v1. IAMClient ;
import java.io.IOException ;
public class DisableServiceAccountKey {
public static void main ( String [] args ) throws IOException {
// TODO(Developer): Replace the below variables before running.
String projectId = "gcloud-project-id" ;
String serviceAccountName = "service-account-name" ;
String serviceAccountKeyName = "service-account-key-name" ;
disableServiceAccountKey ( projectId , serviceAccountName , serviceAccountKeyName );
}
// Disables a service account key.
public static void disableServiceAccountKey ( String projectId ,
String accountName ,
String key ) throws IOException {
// Construct the service account email.
// You can modify the ".iam.gserviceaccount.com" to match the service account name in which
// you want to disable the key.
// See, https://cloud.google.com/iam/docs/creating-managing-service-account-keys#disabling
String email = String . format ( "%s@%s.iam.gserviceaccount.com" , accountName , projectId );
String name = String . format ( "projects/%s/serviceAccounts/%s/keys/%s" , projectId , email , key );
// Initialize client that will be used to send requests.
// This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient iamClient = IAMClient . create ()) {
iamClient . disableServiceAccountKey ( name );
System . out . println ( "Disabled service account key: " + name );
}
}
}
The
projects.serviceAccounts.keys.disable
method disables a service account key.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_NAME : The name of the service account whose key you want to disable.
KEY_ID : The ID of the key that you want to disable. To find the key's
ID, list all keys for the service account , identify the key that you
want to disable, and then copy its ID from the end of the name field. The key's ID
is everything after keys/ .
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/ KEY_ID :disable
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
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/ KEY_ID :disable"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/ KEY_ID :disable" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
}
Enable a service account key
After you disable a service account key, you can enable the key at any time,
then use the key to authenticate with Google APIs.
You cannot use the Google Cloud console to enable service account keys. Use
the gcloud CLI or the REST API instead.
gcloud Java REST
More
Execute the gcloud iam service-accounts keys enable
command to enable a service account key.
Replace the following values:
KEY_ID : The ID of the key to enable. To find the
key's ID, list all keys for the service account , identify the
key that you want to enable, and then copy its ID.
SA_NAME : The name of the service account that the key
belongs to.
PROJECT_ID : Your Google Cloud project ID.
gcloud iam service-accounts keys enable KEY_ID \
--iam-account = SA_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--project = PROJECT_ID
Output:
Enabled key [ KEY_ID ] for service account
[ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com]
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Java API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
import com.google.cloud.iam.admin.v1. IAMClient ;
import java.io.IOException ;
public class EnableServiceAccountKey {
public static void main ( String [] args ) throws IOException {
// TODO(Developer): Replace the below variables before running.
String projectId = "gcloud-project-id" ;
String serviceAccountName = "service-account-name" ;
String serviceAccountKeyName = "service-account-key-name" ;
enableServiceAccountKey ( projectId , serviceAccountName , serviceAccountKeyName );
}
// Enables a service account key.
public static void enableServiceAccountKey ( String projectId ,
String accountName ,
String key ) throws IOException {
// Construct the service account email.
// You can modify the ".iam.gserviceaccount.com" to match the service account name in which
// you want to enable the key.
// See, https://cloud.google.com/iam/docs/creating-managing-service-account-keys#enabling
String email = String . format ( "%s@%s.iam.gserviceaccount.com" , accountName , projectId );
String name = String . format ( "projects/%s/serviceAccounts/%s/keys/%s" , projectId , email , key );
// Initialize client that will be used to send requests.
// This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient iamClient = IAMClient . create ()) {
iamClient . enableServiceAccountKey ( name );
System . out . println ( "Enabled service account key: " + name );
}
}
}
The
projects.serviceAccounts.keys.enable
method enables a service account key.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_NAME : The name of the service account whose key you want to enable.
KEY_ID : The ID of the key that you want to enable. To find the key's ID,
list all keys for the service account , identify the key that you want
to enable, and then copy its ID from the end of the name field. The key's ID is
everything after keys/ .
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/ KEY_ID :enable
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
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/ KEY_ID :enable"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/ KEY_ID :enable" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
}
What's next
Learn how to delete service account keys .
Learn how to list and get service account keys .
Learn how to use service account keys to authenticate as a service
account .
Learn about
alternatives to service account keys for authentication .
Understand the best practices for managing service account
keys .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
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
