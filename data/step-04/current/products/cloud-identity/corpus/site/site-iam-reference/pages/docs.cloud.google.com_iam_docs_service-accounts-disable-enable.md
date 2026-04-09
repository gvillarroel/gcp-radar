---
title: "Disable and enable service accounts \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/service-accounts-disable-enable
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/service-accounts-disable-enable
  title: "Disable and enable service accounts \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Disable and enable service accounts | Identity and Access Management (IAM) | Google Cloud Documentation
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
Disable a service account
Enable a service account
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Disable and enable service accounts
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Disable a service account
Enable a service account
What's next
This page explains how to disable and enable service accounts using the
Identity and Access Management (IAM) API, the Google Cloud console, and the
gcloud CLI.
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
Service Account Admin ( roles/iam.serviceAccountAdmin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
IAM basic roles also contain permissions to manage service
accounts.
You should not grant basic roles in a production environment, but you can grant them in a
development or test environment.
Disable a service account
Similar to deleting a service account, when you disable a service account,
applications will no longer have access to Google Cloud resources
through that service account. If you disable the default App Engine and
Compute Engine service accounts, the instances will no longer have
access to resources in the project. If you attempt to disable an already
disabled service account, it will have no effect.
Unlike deleting a service account, disabled service accounts can easily be
re-enabled as necessary. We recommend disabling a service account before
deleting it to make sure no critical applications are using the service account.
For more information, see Disable unused service
accounts before deleting them .
Console gcloud C++ C# Go Java Python REST
More
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
Select a project.
Click the name of the service account that you want to disable.
Under Service account status , click Disable service account , then
click Disable to confirm the change.
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
Execute the gcloud iam service-accounts disable command to disable a service account.
Command:
gcloud iam service-accounts disable SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
Output:
Disabled service account SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
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
google :: iam :: admin :: v1 :: DisableServiceAccountRequest request ;
request . set_name ( name );
auto response = client . DisableServiceAccount ( request );
if ( ! response . ok ()) throw std :: runtime_error ( response . message ());
std :: cout << "ServiceAccount successfully disabled. \n " ;
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
public static void DisableServiceAccount ( string email )
{
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( IamService . Scope . CloudPlatform );
var service = new IamService ( new IamService . Initializer
{
HttpClientInitializer = credential
});
var request = new DisableServiceAccountRequest ();
string resource = "projects/-/serviceAccounts/" + email ;
service . Projects . ServiceAccounts . Disable ( request , resource ). Execute ();
Console . WriteLine ( "Disabled service account: " + email );
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
// disableServiceAccount disables a service account.
func disableServiceAccount ( w io . Writer , email string ) error {
// email:= service-account@your-project.iam.gserviceaccount.com
ctx := context . Background ()
service , err := iam . NewService ( ctx )
if err != nil {
return fmt . Errorf ( "iam.NewService: %w" , err )
}
request := & iam . DisableServiceAccountRequest {}
_ , err = service . Projects . ServiceAccounts . Disable ( "projects/-/serviceAccounts/" + email , request ). Do ()
if err != nil {
return fmt . Errorf ( "Projects.ServiceAccounts.Disable: %w" , err )
}
fmt . Fprintf ( w , "Disabled service account: %v" , email )
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
import com.google.iam.admin.v1. DisableServiceAccountRequest ;
import java.io.IOException ;
public class DisableServiceAccount {
public static void main ( String [] args ) throws IOException {
// TODO(Developer): Replace the below variables before running.
String projectId = "your-project-id" ;
String serviceAccountName = "your-service-account-name" ;
disableServiceAccount ( projectId , serviceAccountName );
}
// Disables a service account.
public static void disableServiceAccount ( String projectId , String accountName )
throws IOException {
String email = String . format ( "%s@%s.iam.gserviceaccount.com" , accountName , projectId );
// Initialize client that will be used to send requests.
// This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient iamClient = IAMClient . create ()) {
iamClient . disableServiceAccount ( DisableServiceAccountRequest . newBuilder ()
. setName ( String . format ( "projects/%s/serviceAccounts/%s" , projectId , email ))
. build ());
System . out . println ( "Disabled service account: " + accountName );
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
import time
from google.cloud import iam_admin_v1
from google.cloud.iam_admin_v1 import types
def disable_service_account ( project_id : str , account : str ) - > types . ServiceAccount :
"""Disables a service account.
project_id: ID or number of the Google Cloud project you want to use.
account: ID or email which is unique identifier of the service account.
"""
iam_admin_client = iam_admin_v1 . IAMClient ()
request = types . DisableServiceAccountRequest ()
name = f "projects/ { project_id } /serviceAccounts/ { account } "
request . name = name
iam_admin_client . disable_service_account ( request = request )
time . sleep ( 5 ) # waiting to make sure changes applied
get_request = types . GetServiceAccountRequest ()
get_request . name = name
service_account = iam_admin_client . get_service_account ( request = get_request )
if service_account . disabled :
print ( f "Disabled service account: { account } " )
return service_account
The
serviceAccounts.disable
method immediately disables a service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_ID : The ID of your service account.
This can either be the service account's email address in the form
SA_NAME @ PROJECT_ID .iam.gserviceaccount.com , or the service
account's unique numeric ID.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID :disable
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID :disable"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID :disable" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If successful, the response body will be empty.
Enable a service account
After enabling a disabled service account, applications will regain access to
Google Cloud resources through that service account.
You can enable a disabled service account whenever you need to. If you attempt
to enable an already enabled service account, it will have no effect.
Console gcloud C++ C# Go Java Python REST
More
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
Select a project.
Click the name of the service account that you want to enable.
Under Service account status , click Enable service account , then
click Enable to confirm the change.
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
Execute the gcloud iam service-accounts enable
command to enable a service account.
Command:
gcloud iam service-accounts enable SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
Output:
Enabled service account SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
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
google :: iam :: admin :: v1 :: EnableServiceAccountRequest request ;
request . set_name ( name );
auto response = client . EnableServiceAccount ( request );
if ( ! response . ok ()) throw std :: runtime_error ( response . message ());
std :: cout << "ServiceAccount successfully enabled. \n " ;
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
public static void EnableServiceAccount ( string email )
{
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( IamService . Scope . CloudPlatform );
var service = new IamService ( new IamService . Initializer
{
HttpClientInitializer = credential
});
var request = new EnableServiceAccountRequest ();
string resource = "projects/-/serviceAccounts/" + email ;
service . Projects . ServiceAccounts . Enable ( request , resource ). Execute ();
Console . WriteLine ( "Enabled service account: " + email );
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
// enableServiceAccount enables a service account.
func enableServiceAccount ( w io . Writer , email string ) error {
// email:= service-account@your-project.iam.gserviceaccount.com
ctx := context . Background ()
service , err := iam . NewService ( ctx )
if err != nil {
return fmt . Errorf ( "iam.NewService: %w" , err )
}
request := & iam . EnableServiceAccountRequest {}
_ , err = service . Projects . ServiceAccounts . Enable ( "projects/-/serviceAccounts/" + email , request ). Do ()
if err != nil {
return fmt . Errorf ( "Projects.ServiceAccounts.Enable: %w" , err )
}
fmt . Fprintf ( w , "Enabled service account: %v" , email )
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
import com.google.iam.admin.v1. EnableServiceAccountRequest ;
import java.io.IOException ;
public class EnableServiceAccount {
public static void main ( String [] args ) throws IOException {
// TODO(Developer): Replace the below variables before running.
String projectId = "your-project-id" ;
String serviceAccountName = "your-service-account-name" ;
enableServiceAccount ( projectId , serviceAccountName );
}
// Enables a service account.
public static void enableServiceAccount ( String projectId , String accountName )
throws IOException {
String email = String . format ( "%s@%s.iam.gserviceaccount.com" , accountName , projectId );
// Initialize client that will be used to send requests.
// This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient iamClient = IAMClient . create ()) {
iamClient . enableServiceAccount ( EnableServiceAccountRequest . newBuilder ()
. setName ( String . format ( "projects/%s/serviceAccounts/%s" , projectId , email ))
. build ());
System . out . println ( "Enabled service account: " + email );
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
import time
from google.cloud import iam_admin_v1
from google.cloud.iam_admin_v1 import types
def enable_service_account ( project_id : str , account : str ) - > types . ServiceAccount :
"""Enables a service account.
project_id: ID or number of the Google Cloud project you want to use.
account: ID or email which is unique identifier of the service account.
"""
iam_admin_client = iam_admin_v1 . IAMClient ()
request = types . EnableServiceAccountRequest ()
name = f "projects/ { project_id } /serviceAccounts/ { account } "
request . name = name
iam_admin_client . enable_service_account ( request = request )
time . sleep ( 5 ) # waiting to make sure changes applied
get_request = types . GetServiceAccountRequest ()
get_request . name = name
service_account = iam_admin_client . get_service_account ( request = get_request )
if not service_account . disabled :
print ( f "Enabled service account: { account } " )
return service_account
The
serviceAccounts.enable
method enables a previously disabled service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_ID : The ID of your service account.
This can either be the service account's email address in the form
SA_NAME @ PROJECT_ID .iam.gserviceaccount.com , or the service
account's unique numeric ID.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID :enable
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID :enable"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_ID :enable" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If successful, the response body will be empty.
What's next
Learn how to delete and undelete service accounts .
Review the process for granting IAM roles to all types of principals ,
including service accounts.
Explore how you can use role recommendations to
downscope permissions for all principals, including service accounts.
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
