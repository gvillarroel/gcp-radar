---
title: "Delete and undelete service accounts \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/service-accounts-delete-undelete
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/service-accounts-delete-undelete
  title: "Delete and undelete service accounts \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Delete and undelete service accounts | Identity and Access Management (IAM) | Google Cloud Documentation
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
Delete a service account
Undelete a service account Find a deleted service account's numeric ID
Undelete the service account by numeric ID
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Delete and undelete service accounts
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Delete a service account
Undelete a service account Find a deleted service account's numeric ID
Undelete the service account by numeric ID
What's next
This page explains how to delete and undelete service accounts using the
Identity and Access Management (IAM) API, the Google Cloud console, and the gcloud command-
line tool.
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
Console gcloud C# C++ Go Java Python REST
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
To use the .NET samples on this page in a local development environment, install and
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
To use the C++ samples on this page in a local development environment, install and
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
Understand IAM service accounts
Required roles
To get the permissions that
you need to delete and undelete service accounts,
ask your administrator to grant you the
following IAM roles on the project:
To delete service accounts:
Delete Service Accounts ( roles/iam.serviceAccountDeleter )
To delete and undelete service accounts:
Service Account Admin ( roles/iam.serviceAccountAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
IAM basic roles also contain permissions to manage service
accounts.
You should not grant basic roles in a production environment, but you can grant them in a
development or test environment.
Delete a service account
When you delete a service account, applications will no longer have access to
Google Cloud resources through that service account. If you delete the
default App Engine and Compute Engine service accounts, then the
App Engine apps and Compute Engine VM instances that use those
service accounts will no longer have access to resources in the project.
Delete service accounts with caution. Make sure your critical applications are
no longer using a service account before deleting it. If you're not sure whether
a service account is being used, Google recommends
disabling the service account
instead of deleting it. Disabled service accounts can be re-enabled if they are
still needed. For more information, see Disable unused service
accounts before deleting them .
If you want to restore a deleted service account, you can
undelete it, if it's been 30 days or less
since you deleted the service account. After 30 days,
IAM permanently removes the service account. Google Cloud
cannot recover the service account after it is permanently removed, even if you
file a support request.
To further reduce the risk of deleting a necessary service account, you can
also enable change risk recommendations . Change
risk recommendations generate warnings when you try to delete service accounts
that Google Cloud has identified as important.
If you delete a service account, then create a new service account with the same
name, the new service account is treated as a separate identity; it does not
inherit the roles granted to the deleted service account. In contrast, when you
delete a service account, then undelete it, the service account's identity does
not change, and the service account retains its roles.
When a service account is deleted, its role bindings are not immediately
removed; they are automatically purged from the system after a maximum of
60 days. Until that time, the service account appears in
role bindings with a deleted: prefix and a
?uid= NUMERIC_ID suffix, where
NUMERIC_ID is a unique numeric ID for the service
account.
Deleted service accounts do not count towards your
service account quota .
Console gcloud C++ C# Go Java Python REST
More
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
Select a project.
Select the service account you want to delete, and then click
Delete delete .
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
Execute the gcloud iam service-accounts delete command to delete a service account.
Command:
gcloud iam service-accounts delete \
SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
Output:
Deleted service account SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C++ API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
namespace iam = :: google :: cloud :: iam_admin_v1 ;
[]( std :: string const & name ) {
iam :: IAMClient client ( iam :: MakeIAMConnection ());
auto response = client . DeleteServiceAccount ( name );
if ( ! response . ok ()) throw std :: runtime_error ( response . message ());
std :: cout << "ServiceAccount successfully deleted. \n " ;
}
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C# API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
using System ;
using Google.Apis.Auth.OAuth2 ;
using Google.Apis.Iam.v1 ;
public partial class ServiceAccounts
{
public static void DeleteServiceAccount ( string email )
{
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( IamService . Scope . CloudPlatform );
var service = new IamService ( new IamService . Initializer
{
HttpClientInitializer = credential
});
string resource = "projects/-/serviceAccounts/" + email ;
service . Projects . ServiceAccounts . Delete ( resource ). Execute ();
Console . WriteLine ( "Deleted service account: " + email );
}
}
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Go API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
import (
"context"
"fmt"
"io"
iam "google.golang.org/api/iam/v1"
)
// deleteServiceAccount deletes a service account.
func deleteServiceAccount ( w io . Writer , email string ) error {
ctx := context . Background ()
service , err := iam . NewService ( ctx )
if err != nil {
return fmt . Errorf ( "iam.NewService: %w" , err )
}
_ , err = service . Projects . ServiceAccounts . Delete ( "projects/-/serviceAccounts/" + email ). Do ()
if err != nil {
return fmt . Errorf ( "Projects.ServiceAccounts.Delete: %w" , err )
}
fmt . Fprintf ( w , "Deleted service account: %v" , email )
return nil
}
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Java API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
import com.google.cloud.iam.admin.v1. IAMClient ;
import com.google.iam.admin.v1. DeleteServiceAccountRequest ;
import com.google.iam.admin.v1. ServiceAccountName ;
import java.io.IOException ;
public class DeleteServiceAccount {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace the variables before running the sample.
String projectId = "your-project-id" ;
String serviceAccountName = "my-service-account-name" ;
deleteServiceAccount ( projectId , serviceAccountName );
}
// Deletes a service account.
public static void deleteServiceAccount ( String projectId , String serviceAccountName )
throws IOException {
// Initialize client that will be used to send requests.
// This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient client = IAMClient . create ()) {
String accountName = ServiceAccountName . of ( projectId , serviceAccountName ). toString ();
String accountEmail = String . format ( "%s@%s.iam.gserviceaccount.com" , accountName , projectId );
DeleteServiceAccountRequest request = DeleteServiceAccountRequest . newBuilder ()
. setName ( accountEmail )
. build ();
client . deleteServiceAccount ( request );
System . out . println ( "Deleted service account: " + serviceAccountName );
}
}
}
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Python API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
from google.cloud import iam_admin_v1
from google.cloud.iam_admin_v1 import types
def delete_service_account ( project_id : str , account : str ) - > None :
"""Deletes a service account.
project_id: ID or number of the Google Cloud project you want to use.
account: ID or email which is unique identifier of the service account.
"""
iam_admin_client = iam_admin_v1 . IAMClient ()
request = types . DeleteServiceAccountRequest ()
request . name = f "projects/ { project_id } /serviceAccounts/ { account } "
iam_admin_client . delete_service_account ( request = request )
print ( f "Deleted a service account: { account } " )
The
serviceAccounts.delete
method deletes a service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_ID : The ID of your service account.
This can either be the service account's email address in the form
SA_NAME @ PROJECT_ID .iam.gserviceaccount.com , or the service
account's unique numeric ID.
HTTP method and URL:
DELETE https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If successful, the response body will be empty.
Undelete a service account
In some cases, you can use the undelete command to undelete a deleted service
account. You can usually undelete a deleted service account if it meets these
criteria:
The service account was deleted less than 30 days
ago.
After 30 days, IAM permanently removes
the service account. Google Cloud cannot recover the service account
after it is permanently removed, even if you file a support request.
There is no existing service account with the same name as the deleted service
account.
For example, suppose that you accidentally delete the service account
my-service-account@project-id.iam.gserviceaccount.com . You still need a
service account with that name, so you create a new service account with the
same name, my-service-account@project-id.iam.gserviceaccount.com .
The new service account does not inherit the permissions of the deleted
service account. In effect, it is completely separate from the deleted
service account. However, you cannot undelete the original service account,
because the new service account has the same name.
To address this issue, delete the new service account, then try to undelete
the original service account.
If you are not able to undelete the service account, you can create a new
service account with the same name; revoke all of the roles from the deleted
service account; and grant the same roles to the new service account. For
details, see Policies with deleted principals .
Find a deleted service account's numeric ID
When you undelete a service account, you must provide its numeric ID. The
numeric ID is a 21-digit number, such as 123456789012345678901 , that uniquely
identifies the service account. For example, if you delete a service account,
then create a new service account with the same name, the original service
account and the new service account will have different numeric IDs.
If you know that a binding in an allow policy includes the deleted service
account, you can get the allow policy , then find the numeric ID
in the allow policy. The numeric ID is appended to the name of the deleted
service account. For example, in this allow policy, the numeric ID for the
deleted service account is 123456789012345678901 :
{
"version" : 1 ,
"etag" : "BwUjMhCsNvY=" ,
"bindings" : [
{
"members" : [
"deleted:serviceAccount:my-service-account@project-id.iam.gserviceaccount.com?uid=123456789012345678901"
],
"role" : "roles/iam.serviceAccountUser"
},
]
}
Numeric IDs are only appended to the names of deleted principals.
Alternatively, you can search your audit logs for the DeleteServiceAccount
operation that deleted the service account:
In the Google Cloud console, go to the Logs explorer page.
Go to Logs explorer
In the query editor, enter the following query, replacing
SERVICE_ACCOUNT_EMAIL with the email address of your
service account (for example,
my-service-account@project-id.iam.gserviceaccount.com ):
resource.type="service_account"
resource.labels.email_id=" SERVICE_ACCOUNT_EMAIL "
"DeleteServiceAccount"
If the service account was deleted more than an hour ago, click
schedule Last 1 hour ,
select a longer period of time from the drop-down list, then click
Apply .
Click Run query . The Logs Explorer displays the DeleteServiceAccount
operations that affected service accounts with the name you specified.
Find and note the numeric ID of the deleted service account by doing one of
the following:
If the search results include only one DeleteServiceAccount operation,
find the numeric ID in the Unique ID field of the Log fields pane.
If the search results show more than one log, do the following:
Find the correct log entry. To find the correct log entry, click the
keyboard_arrow_right expander arrow
next to a log entry. Review the details of the log entry and determine
whether the log entry shows the operation that you want to undo. Repeat
this process until you find the correct log entry.
In the correct log entry, locate the service account's numeric ID. To
locate the numeric ID, expand the log entry's protoPayload field,
then find the resourceName field.
The numeric ID is everything after serviceAccounts in the resourceName
field.
Undelete the service account by numeric ID
After you find the numeric ID for the deleted service account, you can try to
undelete the service account.
gcloud REST
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
Execute the gcloud beta iam service-accounts undelete command to undelete a service account.
Command:
gcloud beta iam service-accounts undelete ACCOUNT_ID
Output:
restoredAccount :
email : SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
etag : BwWWE7zpApg=
name : projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID . iam.gserviceaccount.com
oauth2ClientId : '123456789012345678901'
projectId : PROJECT_ID
uniqueId : ' ACCOUNT_ID '
The
serviceAccounts.undelete
method restores a deleted service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_NUMERIC_ID : The unique numeric ID of the service account.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NUMERIC_ID :undelete
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NUMERIC_ID :undelete"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NUMERIC_ID :undelete" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If the account can be undeleted, you receive a 200 OK response
code with details about the restored service account, like the following:
{
"restoredAccount": {
"name": "projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com",
"projectId": "my-project",
"uniqueId": "123456789012345678901",
"email": "my-service-account@my-project.iam.gserviceaccount.com",
"displayName": "My service account",
"etag": "BwUp3rVlzes=",
"description": "A service account for running jobs in my project",
"oauth2ClientId": "987654321098765432109"
}
}
What's next
Learn how to list and edit service accounts .
Review the process for granting IAM roles to all types of principals ,
including service accounts.
Understand how to attach service accounts to resources .
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
