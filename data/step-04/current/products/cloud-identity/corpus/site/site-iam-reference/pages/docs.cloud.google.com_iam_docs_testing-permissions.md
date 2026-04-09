---
title: "Test permissions for custom user interfaces \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/testing-permissions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/testing-permissions
  title: "Test permissions for custom user interfaces \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Test permissions for custom user interfaces | Identity and Access Management (IAM) | Google Cloud Documentation
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
How to test permissions
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Test permissions for custom user interfaces
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
How to test permissions
What's next
Most Google Cloud resources expose the testIamPermissions() method, which
allows you to programmatically check whether the currently authenticated caller
has been granted one or more specific IAM permissions on the
resource. The testIamPermissions() method takes a resource identifier and a
set of permissions as input parameters, and returns the set of permissions that
the caller is allowed.
You can use the testIamPermissions() method to determine whether a user should
have access to an administrative tool in a web application. For example, you can
use this method to decide, based on the user's permissions, whether to display
detailed information about a Google Cloud resource.
Note: If you need to test a permission so that you can troubleshoot access to a
resource, use the Policy Troubleshooter instead.
For example, to determine if the currently authenticated user has the permission
to delete a project, call the
projects.testIamPermissions()
method by providing the project ID (such as foo-project ) and the
resourcemanager.projects.delete permission as input parameters. If the caller
has been granted the resourcemanager.projects.delete permission, it will be
listed in the response body. If the caller does not have this permission,
the response body will list no permissions.
The testIamPermissions() method is intended for third-party graphical
user interfaces (GUIs) that need to display Google Cloud resources based
on what the authenticated user has permissions to see. For example, the
Google Cloud console internally uses the testIamPermissions() method to
determine what resources and functionality are visible to you after
authenticating. Different users are typically granted different permissions,
and the Google Cloud console hides or exposes items accordingly.
Before you begin
Enable the Resource Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up authentication.
Select the tab for how you plan to use the samples on this page:
C# C++ Java Python REST
More
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
No IAM role is required to test permissions.
How to test permissions
This example shows how to test the resourcemanager.projects.get and
resourcemanager.projects.delete permissions for a
Google Cloud project . To
test permissions for other Google Cloud resources, use the
testIamPermissions() method exposed by each resource. For example, you can
test the IAM permissions for a
Cloud Storage bucket .
C++ C# Java Python REST
More
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C++ API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
namespace iam = :: google :: cloud :: iam_admin_v1 ;
[]( std :: string const & name , std :: vector<std :: string > const & permissions ) {
iam :: IAMClient client ( iam :: MakeIAMConnection ());
auto response = client . TestIamPermissions ( name , permissions );
if ( ! response ) throw std :: move ( response ). status ();
std :: cout << "Permissions successfully tested: " << response - > DebugString ()
<< " \n " ;
}
To authenticate to Resource Manager, set up Application Default Credentials.
For more information, see Before you begin .
To learn how to install and use the client library for Resource Manager, see
Resource Manager client
libraries .
IAM tests the permissions of the service account that you
are using to generate credentials.
using System ;
using System.Collections.Generic ;
using Google.Apis.Auth.OAuth2 ;
using Google.Apis.CloudResourceManager.v1 ;
using Google.Apis.CloudResourceManager.v1.Data ;
public partial class AccessManager
{
public static IList<String> TestIamPermissions ( string projectId )
{
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( CloudResourceManagerService . Scope . CloudPlatform );
var service = new CloudResourceManagerService (
new CloudResourceManagerService . Initializer
{
HttpClientInitializer = credential
});
TestIamPermissionsRequest requestBody = new TestIamPermissionsRequest ();
var permissions = new List<string> () { "resourcemanager.projects.get" , "resourcemanager.projects.delete" };
requestBody . Permissions = new List<string> ( permissions );
var returnedPermissions = service . Projects . TestIamPermissions ( requestBody , projectId ). Execute (). Permissions ;
return returnedPermissions ;
}
}
To authenticate to Resource Manager, set up Application Default Credentials.
For more information, see Before you begin .
To learn how to install and use the client library for Resource Manager, see
Resource Manager client
libraries .
IAM tests the permissions of the service account that you
are using to generate credentials.
import com.google.api.client.googleapis.javanet. GoogleNetHttpTransport ;
import com.google.api.client.json.gson. GsonFactory ;
import com.google.api.services.cloudresourcemanager.v3.CloudResourceManager ;
import com.google.api.services.cloudresourcemanager.v3.model.TestIamPermissionsRequest ;
import com.google.api.services.cloudresourcemanager.v3.model.TestIamPermissionsResponse ;
import com.google.api.services.iam.v1.IamScopes ;
import com.google.auth.http. HttpCredentialsAdapter ;
import com.google.auth.oauth2. GoogleCredentials ;
import java.io.IOException ;
import java.security.GeneralSecurityException ;
import java.util.Arrays ;
import java.util.Collections ;
import java.util.List ;
public class TestPermissions {
// Tests if the caller has the listed permissions.
public static void testPermissions ( String projectId ) {
// projectId = "my-project-id"
CloudResourceManager service = null ;
try {
service = createCloudResourceManagerService ();
} catch ( IOException | GeneralSecurityException e ) {
System . out . println ( "Unable to initialize service: \n" + e . toString ());
return ;
}
List<String> permissionsList =
Arrays . asList ( "resourcemanager.projects.get" , "resourcemanager.projects.delete" );
TestIamPermissionsRequest requestBody =
new TestIamPermissionsRequest (). setPermissions ( permissionsList );
try {
TestIamPermissionsResponse testIamPermissionsResponse =
service . projects (). testIamPermissions ( projectId , requestBody ). execute ();
System . out . println (
"Of the permissions listed in the request, the caller has the following: "
+ testIamPermissionsResponse . getPermissions (). toString ());
} catch ( IOException e ) {
System . out . println ( "Unable to test permissions: \n" + e . toString ());
}
}
public static CloudResourceManager createCloudResourceManagerService ()
throws IOException , GeneralSecurityException {
// Use the Application Default Credentials strategy for authentication. For more info, see:
// https://cloud.google.com/docs/authentication/production#finding_credentials_automatically
GoogleCredentials credential =
GoogleCredentials . getApplicationDefault ()
. createScoped ( Collections . singleton ( IamScopes . CLOUD_PLATFORM ));
CloudResourceManager service =
new CloudResourceManager . Builder (
GoogleNetHttpTransport . newTrustedTransport (),
GsonFactory . getDefaultInstance (),
new HttpCredentialsAdapter ( credential ))
. setApplicationName ( "service-accounts" )
. build ();
return service ;
}
}
To authenticate to Resource Manager, set up Application Default Credentials.
For more information, see Before you begin .
To learn how to install and use the client library for Resource Manager, see
Resource Manager client
libraries .
IAM tests the permissions of the service account that you
are using to generate credentials.
def test_permissions ( project_id : str ) - > List [ str ]:
"""Tests IAM permissions of currently authenticated user to a project."""
projects_client = resourcemanager_v3 . ProjectsClient ()
if not project_id . startswith ( "projects/" ):
project_id = "projects/" + project_id
owned_permissions = projects_client . test_iam_permissions (
resource = project_id ,
permissions = [ "resourcemanager.projects.get" , "resourcemanager.projects.delete" ],
) . permissions
print ( "Currently authenticated user has following permissions:" , owned_permissions )
return owned_permissions
In this example, the user has an IAM role that allows them to
get information about a project, but not to delete projects.
The Resource Manager API's
projects.testIamPermissions
method accepts a list of permissions and tests which of the permissions a principal has.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
HTTP method and URL:
POST https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :testIamPermissions
Request JSON body:
{
"permissions": [
"resourcemanager.projects.get",
"resourcemanager.projects.delete"
]
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :testIamPermissions"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :testIamPermissions" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"permissions": [
"resourcemanager.projects.get"
]
}
What's next
Learn how to grant, change, and revoke access to principals .
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
