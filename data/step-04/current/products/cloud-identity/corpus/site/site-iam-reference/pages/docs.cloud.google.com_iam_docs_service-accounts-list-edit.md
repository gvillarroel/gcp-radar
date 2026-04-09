---
title: "List and edit service accounts \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/service-accounts-list-edit
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/service-accounts-list-edit
  title: "List and edit service accounts \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

List and edit service accounts | Identity and Access Management (IAM) | Google Cloud Documentation
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
Listing service accounts
Edit a service account
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
List and edit service accounts
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Listing service accounts
Edit a service account
What's next
This page explains how to list and edit service accounts using the
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
you need to manage service accounts,
ask your administrator to grant you the
following IAM roles on the project:
To view service accounts:
View Service Accounts ( roles/iam.serviceAccountViewer )
To edit service accounts:
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
Listing service accounts
You can list the user-managed service accounts in a project
to help you audit service accounts and keys, or as part of a custom tool for
managing service accounts.
You can't list the service agents that might appear in your
project's allow policy and audit logs. Service agents aren't located in your
project, and you can't access them directly.
Console gcloud C++ C# Go Java Python REST
More
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
Select a project.
The Service accounts page lists all of the user-managed service accounts
in the project you selected.
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
Execute the gcloud iam service-accounts list
command to list all service accounts in a project.
Command:
gcloud iam service-accounts list
The output is the list of all user-managed service accounts in the project:
NAME EMAIL
SA_DISPLAY_NAME_1 SA_NAME_1 @ PROJECT_ID .iam.gserviceaccount.com
SA_DISPLAY_NAME_2 SA_NAME_2 @ PROJECT_ID .iam.gserviceaccount.com
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C++ API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
namespace iam = :: google :: cloud :: iam_admin_v1 ;
[]( std :: string const & project_id ) {
iam :: IAMClient client ( iam :: MakeIAMConnection ());
int count = 0 ;
for ( auto & sa : client . ListServiceAccounts ( "projects/" + project_id )) {
if ( ! sa ) throw std :: move ( sa ). status ();
std :: cout << "ServiceAccount successfully retrieved: " << sa - > name ()
<< " \n " ;
++ count ;
}
if ( count == 0 ) {
std :: cout << "No service accounts found in project: " << project_id
<< " \n " ;
}
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
using System.Collections.Generic ;
using Google.Apis.Auth.OAuth2 ;
using Google.Apis.Iam.v1 ;
using Google.Apis.Iam.v1.Data ;
public partial class ServiceAccounts
{
public static IList<ServiceAccount> ListServiceAccounts ( string projectId )
{
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( IamService . Scope . CloudPlatform );
var service = new IamService ( new IamService . Initializer
{
HttpClientInitializer = credential
});
var response = service . Projects . ServiceAccounts . List (
"projects/" + projectId ). Execute ();
foreach ( ServiceAccount account in response . Accounts )
{
Console . WriteLine ( "Name: " + account . Name );
Console . WriteLine ( "Display Name: " + account . DisplayName );
Console . WriteLine ( "Email: " + account . Email );
Console . WriteLine ();
}
return response . Accounts ;
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
// listServiceAccounts lists a project's service accounts.
func listServiceAccounts ( w io . Writer , projectID string ) ([] * iam . ServiceAccount , error ) {
ctx := context . Background ()
service , err := iam . NewService ( ctx )
if err != nil {
return nil , fmt . Errorf ( "iam.NewService: %w" , err )
}
response , err := service . Projects . ServiceAccounts . List ( "projects/" + projectID ). Do ()
if err != nil {
return nil , fmt . Errorf ( "Projects.ServiceAccounts.List: %w" , err )
}
for _ , account := range response . Accounts {
fmt . Fprintf ( w , "Listing service account: %v\n" , account . Name )
}
return response . Accounts , nil
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
import com.google.iam.admin.v1. ServiceAccount ;
import java.io.IOException ;
public class ListServiceAccounts {
public static void main ( String [] args ) throws IOException {
// TODO(Developer): Replace the below variables before running.
String projectId = "your-project-id" ;
listServiceAccounts ( projectId );
}
// Lists all service accounts for the current project.
public static IAMClient . ListServiceAccountsPagedResponse listServiceAccounts ( String projectId )
throws IOException {
// Initialize client that will be used to send requests.
// This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient iamClient = IAMClient . create ()) {
IAMClient . ListServiceAccountsPagedResponse response =
iamClient . listServiceAccounts ( String . format ( "projects/%s" , projectId ));
for ( ServiceAccount account : response . iterateAll ()) {
System . out . println ( "Name: " + account . getName ());
System . out . println ( "Display name: " + account . getDisplayName ());
System . out . println ( "Email: " + account . getEmail () + "\n" );
}
return response ;
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
from typing import List
from google.cloud import iam_admin_v1
from google.cloud.iam_admin_v1 import types
def list_service_accounts ( project_id : str ) - > List [ iam_admin_v1 . ServiceAccount ]:
"""Get list of project service accounts.
project_id: ID or number of the Google Cloud project you want to use.
returns a list of iam_admin_v1.ServiceAccount
"""
iam_admin_client = iam_admin_v1 . IAMClient ()
request = types . ListServiceAccountsRequest ()
request . name = f "projects/ { project_id } "
accounts = iam_admin_client . list_service_accounts ( request = request )
return accounts . accounts
The
serviceAccounts.list
method lists every user-managed service account in your project.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
HTTP method and URL:
GET https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
"accounts": [
{
"name": "projects/my-project/serviceAccounts/sa-1@my-project.iam.gserviceaccount.com",
"projectId": "my-project",
"uniqueId": "123456789012345678901",
"email": "sa-1@my-project.iam.gserviceaccount.com",
"description": "My first service account",
"displayName": "Service account 1",
"etag": "BwUpTsLVUkQ=",
"oauth2ClientId": "987654321098765432109"
},
{
"name": "projects/my-project/serviceAccounts/sa-2@my-project.iam.gserviceaccount.com",
"projectId": "my-project",
"uniqueId": "234567890123456789012",
"email": "sa-2@my-project.iam.gserviceaccount.com",
"description": "My second service account",
"displayName": "Service account 2",
"etag": "UkQpTwBVUsL=",
"oauth2ClientId": "876543210987654321098"
}
]
}
Edit a service account
The display name (friendly name) and description of a service account are
commonly used to capture additional information about the service account, such
as the purpose of the service account or a contact person for the account.
Console gcloud C++ C# Go Java Python REST
More
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
Select a project.
Click the email address of the service account that you want to rename.
Enter the new name in the Name box, then click Save .
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
Execute the gcloud iam service-accounts update
command to update a service account.
Command:
gcloud iam service-accounts update
SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
--description=" UPDATED_SA_DESCRIPTION "
--display-name=" UPDATED_DISPLAY_NAME "
The output is the renamed service account:
description: UPDATED_SA_DESCRIPTION
displayName: UPDATED_DISPLAY_NAME
name: projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C++ API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
namespace iam = :: google :: cloud :: iam_admin_v1 ;
[]( std :: string const & name , std :: string const & display_name ) {
iam :: IAMClient client ( iam :: MakeIAMConnection ());
google :: iam :: admin :: v1 :: PatchServiceAccountRequest request ;
google :: iam :: admin :: v1 :: ServiceAccount service_account ;
service_account . set_name ( name );
service_account . set_display_name ( display_name );
google :: protobuf :: FieldMask update_mask ;
* update_mask . add_paths () = "display_name" ;
* request . mutable_service_account () = service_account ;
* request . mutable_update_mask () = update_mask ;
auto response = client . PatchServiceAccount ( request );
if ( ! response ) throw std :: move ( response ). status ();
std :: cout << "ServiceAccount successfully updated: "
<< response - > DebugString () << " \n " ;
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
using Google.Apis.Iam.v1.Data ;
public partial class ServiceAccounts
{
public static ServiceAccount RenameServiceAccount ( string email ,
string newDisplayName )
{
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( IamService . Scope . CloudPlatform );
var service = new IamService ( new IamService . Initializer
{
HttpClientInitializer = credential
});
// First, get a ServiceAccount using List() or Get().
string resource = "projects/-/serviceAccounts/" + email ;
var serviceAccount = service . Projects . ServiceAccounts . Get ( resource )
. Execute ();
// Then you can update the display name.
serviceAccount . DisplayName = newDisplayName ;
serviceAccount = service . Projects . ServiceAccounts . Update (
serviceAccount , resource ). Execute ();
Console . WriteLine ( $"Updated display name for {serviceAccount.Email} " +
"to: " + serviceAccount . DisplayName );
return serviceAccount ;
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
// renameServiceAccount renames a service account.
func renameServiceAccount ( w io . Writer , email , newDisplayName string ) ( * iam . ServiceAccount , error ) {
ctx := context . Background ()
service , err := iam . NewService ( ctx )
if err != nil {
return nil , fmt . Errorf ( "iam.NewService: %w" , err )
}
// First, get a ServiceAccount using List() or Get().
resource := "projects/-/serviceAccounts/" + email
serviceAccount , err := service . Projects . ServiceAccounts . Get ( resource ). Do ()
if err != nil {
return nil , fmt . Errorf ( "Projects.ServiceAccounts.Get: %w" , err )
}
// Then you can update the display name.
serviceAccount . DisplayName = newDisplayName
serviceAccount , err = service . Projects . ServiceAccounts . Update ( resource , serviceAccount ). Do ()
if err != nil {
return nil , fmt . Errorf ( "Projects.ServiceAccounts.Update: %w" , err )
}
fmt . Fprintf ( w , "Updated service account: %v" , serviceAccount . Email )
return serviceAccount , nil
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
import com.google.iam.admin.v1. GetServiceAccountRequest ;
import com.google.iam.admin.v1. PatchServiceAccountRequest ;
import com.google.iam.admin.v1. ServiceAccount ;
import com.google.iam.admin.v1. ServiceAccountName ;
import com.google.protobuf. FieldMask ;
import java.io.IOException ;
public class RenameServiceAccount {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace the variables before running the sample.
String projectId = "your-project-id" ;
String serviceAccountName = "my-service-account-name" ;
String displayName = "your-new-display-name" ;
renameServiceAccount ( projectId , serviceAccountName , displayName );
}
// Changes a service account's display name.
public static ServiceAccount renameServiceAccount ( String projectId , String serviceAccountName ,
String displayName ) throws IOException {
// Construct the service account email.
// You can modify the ".iam.gserviceaccount.com" to match the service account name in which
// you want to delete the key.
// See, https://cloud.google.com/iam/docs/creating-managing-service-account-keys?hl=en#deleting
String serviceAccountEmail = serviceAccountName + "@" + projectId + ".iam.gserviceaccount.com" ;
// Initialize client that will be used to send requests.
// This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient iamClient = IAMClient . create ()) {
// First, get a service account using getServiceAccount or listServiceAccounts
GetServiceAccountRequest serviceAccountRequest = GetServiceAccountRequest . newBuilder ()
. setName ( ServiceAccountName . of ( projectId , serviceAccountEmail ). toString ())
. build ();
ServiceAccount serviceAccount = iamClient . getServiceAccount ( serviceAccountRequest );
// You can patch only the `display_name` and `description` fields. You must use
// the `update_mask` field to specify which of these fields you want to patch.
serviceAccount = serviceAccount . toBuilder (). setDisplayName ( displayName ). build ();
PatchServiceAccountRequest patchServiceAccountRequest =
PatchServiceAccountRequest . newBuilder ()
. setServiceAccount ( serviceAccount )
. setUpdateMask ( FieldMask . newBuilder (). addPaths ( "display_name" ). build ())
. build ();
serviceAccount = iamClient . patchServiceAccount ( patchServiceAccountRequest );
System . out . println (
"Updated display name for "
+ serviceAccount . getName ()
+ " to: "
+ serviceAccount . getDisplayName ());
return serviceAccount ;
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
def rename_service_account (
project_id : str , account : str , new_name : str
) - > types . ServiceAccount :
"""Renames service account display name.
project_id: ID or number of the Google Cloud project you want to use.
account: ID or email which is unique identifier of the service account.
new_name: New display name of the service account.
"""
iam_admin_client = iam_admin_v1 . IAMClient ()
get_request = types . GetServiceAccountRequest ()
get_request . name = f "projects/ { project_id } /serviceAccounts/ { account } "
service_account = iam_admin_client . get_service_account ( request = get_request )
service_account . display_name = new_name
request = types . PatchServiceAccountRequest ()
request . service_account = service_account
# You can patch only the `display_name` and `description` fields.
# You must use the `update_mask` field to specify which of these fields
# you want to patch.
# To successfully set update mask you need to transform
# snake_case field to camelCase.
# e.g. `display_name` will become `displayName`
request . update_mask = "displayName"
updated_account = iam_admin_client . patch_service_account ( request = request )
return updated_account
The
serviceAccounts.patch
method updates a service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_ID : The ID of your service account.
This can either be the service account's email address in the form
SA_NAME @ PROJECT_ID .iam.gserviceaccount.com , or the service
account's unique numeric ID.
SA_NAME : The alphanumeric ID of your
service account. This name must be between 6 and 30 characters, and can contain lowercase
alphanumeric characters and dashes.
Replace at least one of the following:
UPDATED_DISPLAY_NAME : A new display name for your service
account.
UPDATED_DESCRIPTION : A new description for your service
account.
HTTP method and URL:
PATCH https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID
Request JSON body:
{
"serviceAccount": {
"email": " SA_NAME @ PROJECT_ID .iam.gserviceaccount.com",
"displayName": " UPDATED_DISPLAY_NAME ",
"description": " UPDATED_DESCRIPTION "
},
"updateMask": "displayName,description"
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID " | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"name": "projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com",
"displayName": "My updated service account",
"description": "An updated description of my service account"
}
What's next
Learn how to disable and enable service accounts .
Review the process for granting IAM roles to all types of principals ,
including service accounts.
Explore how you can use role recommendations to
downscope permissions for all principals, including service accounts.
Understand how to attach service accounts to resources .
Get best practices for working with service accounts .
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
