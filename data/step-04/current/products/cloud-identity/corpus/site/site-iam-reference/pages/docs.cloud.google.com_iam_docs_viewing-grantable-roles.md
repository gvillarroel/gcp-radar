---
title: "Viewing the grantable roles on resources \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/viewing-grantable-roles
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/viewing-grantable-roles
  title: "Viewing the grantable roles on resources \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Viewing the grantable roles on resources | Identity and Access Management (IAM) | Google Cloud Documentation
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
Understanding what roles are grantable
Listing grantable roles
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Viewing the grantable roles on resources
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Understanding what roles are grantable
Listing grantable roles
What's next
Before you grant an Identity and Access Management (IAM) role to a user for a
resource, you might want to know what roles are available to grant on a
particular resource.
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
Required roles
To get the permissions that
you need to list grantable roles,
ask your administrator to grant you the
Security Reviewer ( roles/iam.securityReviewer )
IAM role on the resource that you want to list grantable roles for.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This role contains the getIamPolicy permissions for all resource types. To
list grantable roles, you need the getIamPolicy permission for the resource
that you want to list grantable roles for—for example, to list grantable
roles for a project, you need the resourcemanager.projects.getIamPolicy
permission.
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Understanding what roles are grantable
A role is grantable on or above a resource if it contains any permissions for
that resource type. For example, the storage.admin role grants permissions to
the storage.buckets.get and storage.objects.get APIs, so it is grantable on
the Storage Buckets and Storage Objects resource types.
Roles can also be granted "above" the resource types that their permissions
are defined for. In other words, roles for lower-level resources can be granted
on a resource that is higher in the Google Cloud resource hierarchy. For
example, the storage.admin role can also be granted at the project or
organization levels, in addition to Storage Buckets .
Permissions granted by a role only affect resources at the specified level or
below; they do not affect higher-level or peer resources. Additionally, when a
role is granted on a resource, only permissions applicable to the given resource
are granted, regardless of the role's name, description, or other permissions it
contains. For example, assigning the role resourcemanager.organizationAdmin
(which grants the permission resourcemanager.projects.list ) to a user on the
project level only grants them permissions for that specific project. It will
not allow them to list or administer all projects in the organization.
Similarly, assigning the compute.admin role on a specific Compute Engine
instance only grants permissions for that instance, not others in the project.
Listing grantable roles
You can list grantable roles using the Google Cloud console, the Google Cloud CLI,
the IAM API, or the IAM client libraries.
The Google Cloud console always lists all grantable roles for the resource you're
viewing. The Google Cloud CLI, IAM API, and client libraries only list
grantable roles for enabled APIs .
Console gcloud C++ C# Go Java Python REST
More
To view grantable roles for a project, folder, or organization, do the
following:
In the Google Cloud console, go to the IAM page.
Go to the IAM page
Click Select a project at the top of the page.
Select the project, folder, or organization for which you want to view
grantable roles.
Click person_add Grant access .
Click Select a role . This menu displays all the roles,
including any custom roles, that you can grant on this resource.
To view grantable roles for other resource types, do the following:
In the Google Cloud console, go to the page listing the resource for which
you want to view grantable roles.
For example, to manage access to a Compute Engine instance, go to the
VM instances page.
Go to VM instances
Select the checkbox next to the resource for which you want to view
grantable roles.
Ensure that the info panel is visible. If it is not visible, click
Show info panel .
Click person_add Add
principal .
Click Select a role . This menu displays all the roles, including any
custom roles, that you can grant on this resource.
Use the gcloud iam list-grantable-roles
command to return a list of all roles that can be applied to a given
resource.
gcloud iam list-grantable-roles full-resource-name
Depending on the desired resource, a large number of roles may be returned.
To limit the results, you can specify a filter expression .
The output will look something like:
description : Full control of all Compute Engine resources.
name : roles/compute.admin
title : Compute Admin
---
description : Full control of Compute Engine instance resources.
name : roles/compute.instanceAdmin
title : Compute Instance Admin
# Additional results here...
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C++ API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
namespace iam = :: google :: cloud :: iam_admin_v1 ;
[]( std :: string const & resource ) {
iam :: IAMClient client ( iam :: MakeIAMConnection ());
int count = 0 ;
for ( auto & role : client . QueryGrantableRoles ( resource )) {
if ( ! role ) throw std :: move ( role ). status ();
std :: cout << "Role successfully retrieved: " << role - > name () << " \n " ;
++ count ;
}
if ( count == 0 ) {
std :: cout << "No grantable roles found in resource: " << resource << " \n " ;
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
public partial class CustomRoles
{
public static IList<Role> ViewGrantableRoles ( string fullResourceName )
{
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( IamService . Scope . CloudPlatform );
var service = new IamService ( new IamService . Initializer
{
HttpClientInitializer = credential
});
var request = new QueryGrantableRolesRequest
{
FullResourceName = fullResourceName
};
var response = service . Roles . QueryGrantableRoles ( request ). Execute ();
foreach ( var role in response . Roles )
{
Console . WriteLine ( "Title: " + role . Title );
Console . WriteLine ( "Name: " + role . Name );
Console . WriteLine ( "Description: " + role . Description );
Console . WriteLine ();
}
return response . Roles ;
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
// viewGrantableRoles lists roles grantable on a resource.
func viewGrantableRoles ( w io . Writer , fullResourceName string ) ([] * iam . Role , error ) {
ctx := context . Background ()
service , err := iam . NewService ( ctx )
if err != nil {
return nil , fmt . Errorf ( "iam.NewService: %w" , err )
}
request := & iam . QueryGrantableRolesRequest {
FullResourceName : fullResourceName ,
}
response , err := service . Roles . QueryGrantableRoles ( request ). Do ()
if err != nil {
return nil , fmt . Errorf ( "Roles.QueryGrantableRoles: %w" , err )
}
for _ , role := range response . Roles {
fmt . Fprintf ( w , "Found grantable role: %v\n" , role . Name )
}
return response . Roles , err
}
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Java API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
QueryGrantableRolesRequest request = new QueryGrantableRolesRequest ();
request . setFullResourceName ( fullResourceName );
QueryGrantableRolesResponse response = service . roles (). queryGrantableRoles ( request ). execute ();
for ( Role role : response . getRoles ()) {
System . out . println ( "Title: " + role . getTitle ());
System . out . println ( "Name: " + role . getName ());
System . out . println ( "Description: " + role . getDescription ());
System . out . println ();
}
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Python API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
def view_grantable_roles ( full_resource_name : str ) - > None :
roles = (
service . roles ()
. queryGrantableRoles ( body = { "fullResourceName" : full_resource_name })
. execute ()
)
for role in roles [ "roles" ]:
if "title" in role :
print ( "Title: " + role [ "title" ])
print ( "Name: " + role [ "name" ])
if "description" in role :
print ( "Description: " + role [ "description" ])
print ( " " )
The
roles.queryGrantableRoles
method returns a list of all roles grantable on a resource.
Before using any of the request data,
make the following replacements:
FULL_RESOURCE_NAME : A URI consisting of
the service name and the path to the resource. For examples, see
Full resource names .
HTTP method and URL:
POST https://iam.googleapis.com/v1/roles:queryGrantableRoles
Request JSON body:
{
"fullResourceName": " FULL_RESOURCE_NAME "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/roles:queryGrantableRoles"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/roles:queryGrantableRoles" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"roles": [
{
"name": "roles/compute.admin",
"title": "Compute Admin",
"description": "Full control of all Compute Engine resources."
},
{
"name": "roles/compute.instanceAdmin",
"title": "Compute Instance Admin (beta)",
"description": "Full control of Compute Engine instance resources."
}
]
}
In the examples above, the full resource name is a scheme-less URI
consisting of a DNS-compatible API service name and a resource path.
For example, to return all roles grantable on a project, use:
//cloudresourcemanager.googleapis.com/projects/ project-id
Lower-level resources have a more detailed fully qualified name. For
example, use the following to return all roles grantable on a Compute Engine
instance:
//compute.googleapis.com/projects/ project-id /zones/ zone-name /instances/ instance-id
What's next
Read about the available IAM roles .
Find out how to
choose the most appropriate predefined roles .
Learn how to
grant, change, and revoke a principal's access .
See examples of resource names for different types of
resources.
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
