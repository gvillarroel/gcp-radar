---
title: "Quickstart: Write an allow policy by using client libraries \_|\_ Identity\
  \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/write-policy-client-libraries
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/write-policy-client-libraries
  title: "Quickstart: Write an allow policy by using client libraries \_|\_ Identity\
    \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Quickstart: Write an allow policy by using client libraries | Identity and Access Management (IAM) | Google Cloud Documentation
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
Before you begin Create a Google Cloud project
Install the client library
Read, modify, and write an allow policy
How did it go?
Clean up
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
On this page
Before you begin Create a Google Cloud project
Install the client library
Read, modify, and write an allow policy
How did it go?
Clean up
What's next
Grant roles using client libraries
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to get started with the IAM methods from
the Resource Manager API in your favorite programming language.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Create a Google Cloud project
For this quickstart, you need a new Google Cloud project.
Warning: If you use an existing project, then completing this quickstart will
enable some users to temporarily access resources in that project.
Start by creating a Google Cloud account. With this account, you get $300 in free credits,
plus free usage of over 20 products, up to monthly limits.
Create an account
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Enable the Resource Manager API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudresourcemanager.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/resourcemanager.projectIamAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Enable the Resource Manager API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudresourcemanager.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/resourcemanager.projectIamAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Install the client library
C# Go Java Python
More
For more on setting up your C# development environment, refer to the C# Development Environment Setup Guide .
install-package Google.Apis.Iam.v1
install-package Google.Apis.CloudResourceManager.v1
go get golang.org/x/oauth2/google
go get google.golang.org/api/cloudresourcemanager/v1
For more on setting up your Java development environment, refer to the Java Development Environment Setup Guide .
If you are using Maven , add this to your pom.xml
file.
< dependency >
< groupId>com . google . apis < / groupId >
< artifactId>google - api - services - cloudresourcemanager < / artifactId >
< version>v3 - rev20240128 - 2.0.0 < / version >
< / dependency >
< dependency >
< groupId>com . google . auth < / groupId >
< artifactId>google - auth - library - oauth2 - http < / artifactId >
< / dependency >
< dependency >
< groupId>com . google . http - client < / groupId >
< artifactId>google - http - client - jackson2 < / artifactId >
< / dependency >
< dependency >
< groupId>com . google . apis < / groupId >
< artifactId>google - api - services - iam < / artifactId >
< version>v1 - rev20240118 - 2.0.0 < / version >
< / dependency >
For more on setting up your Python development environment, refer to the Python Development Environment Setup Guide .
pip install --upgrade google-api-python-client google-auth google-auth-httplib2
Read, modify, and write an allow policy
The code snippet in this quickstart does the following:
Initializes the Resource Manager service, which manages Google Cloud
projects.
Reads the allow policy for your
project.
Modifies the allow policy by granting the Log Writer role
( roles/logging.logWriter ) to your Google Account.
Writes the updated allow policy.
Prints all the principals that have the Log Writer role
( roles/logging.logWriter ) at the project level.
Revokes the Log Writer role.
Replace the following values before running the code snippet:
your-project : The ID of your project.
your-member : The email address for your
user account. For example,
user:my-user@example.com .
Note: The following snippet modifies access by getting, modifying, and setting
the allow policy for the project. For more information on allow policies,
see the IAM overview .
C# Go Java Python
More
To learn how to install and use the client library for Resource Manager, see
Resource Manager client libraries .
For more information, see the
Resource Manager C# API
reference documentation .
To authenticate to Resource Manager, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Apis.Auth.OAuth2 ;
using Google.Apis.CloudResourceManager.v1 ;
using Google.Apis.CloudResourceManager.v1.Data ;
using Google.Apis.Iam.v1 ;
using System ;
using System.Collections.Generic ;
using System.Linq ;
public class QuickStart
{
public static void Main ( string [] args )
{
// TODO: Replace with your project ID
var projectId = "your-project" ;
// TODO: Replace with the ID of your principal.
// For examples, see https://cloud.google.com/iam/docs/principal-identifiers
var member = "your-principal" ;
// Role to be granted
var role = "roles/logging.logWriter" ;
// Initialize service
CloudResourceManagerService crmService = InitializeService ();
// Grant your principal the "Log Writer" role for your project
AddBinding ( crmService , projectId , member , role );
// Get the project's policy and print all principals with the the "Log Writer" role
var policy = GetPolicy ( crmService , projectId );
var binding = policy . Bindings . FirstOrDefault ( x = > x . Role == role );
Console . WriteLine ( "Role: " + binding . Role );
Console . Write ( "Members: " );
foreach ( var m in binding . Members )
{
Console . Write ( "[" + m + "] " );
}
Console . WriteLine ();
// Remove principal from the "Log Writer" role
RemoveMember ( crmService , projectId , member , role );
}
public static CloudResourceManagerService InitializeService ()
{
// Get credentials
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( IamService . Scope . CloudPlatform );
// Create the Cloud Resource Manager service object
CloudResourceManagerService crmService = new CloudResourceManagerService (
new CloudResourceManagerService . Initializer
{
HttpClientInitializer = credential
});
return crmService ;
}
public static Policy GetPolicy ( CloudResourceManagerService crmService , String projectId )
{
// Get the project's policy by calling the
// Cloud Resource Manager Projects API
var policy = crmService . Projects . GetIamPolicy (
new GetIamPolicyRequest (),
projectId ). Execute ();
return policy ;
}
public static void SetPolicy ( CloudResourceManagerService crmService , String projectId , Policy policy )
{
// Set the project's policy by calling the
// Cloud Resource Manager Projects API
crmService . Projects . SetIamPolicy (
new SetIamPolicyRequest
{
Policy = policy
}, projectId ). Execute ();
}
public static void AddBinding (
CloudResourceManagerService crmService ,
string projectId ,
string member ,
string role )
{
// Get the project's policy
var policy = GetPolicy ( crmService , projectId );
// Find binding in policy
var binding = policy . Bindings . FirstOrDefault ( x = > x . Role == role );
// If binding already exists, add principal to binding
if ( binding != null )
{
binding . Members . Add ( member );
}
// If binding does not exist, add binding to policy
else
{
binding = new Binding
{
Role = role ,
Members = new List<string> { member }
};
policy . Bindings . Add ( binding );
}
// Set the updated policy
SetPolicy ( crmService , projectId , policy );
}
public static void RemoveMember (
CloudResourceManagerService crmService ,
string projectId ,
string member ,
string role )
{
// Get the project's policy
var policy = GetPolicy ( crmService , projectId );
// Remove the principal from the role
var binding = policy . Bindings . FirstOrDefault ( x = > x . Role == role );
if ( binding == null )
{
Console . WriteLine ( "Role does not exist in policy." );
}
else
{
if ( binding . Members . Contains ( member ))
{
binding . Members . Remove ( member );
}
else
{
Console . WriteLine ( "The member has not been granted this role." );
}
if ( binding . Members . Count == 0 )
{
policy . Bindings . Remove ( binding );
}
}
// Set the updated policy
SetPolicy ( crmService , projectId , policy );
}
}
To learn how to install and use the client library for Resource Manager, see
Resource Manager client libraries .
For more information, see the
Resource Manager Go API
reference documentation .
To authenticate to Resource Manager, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
"flag"
"fmt"
"log"
"strings"
"time"
"google.golang.org/api/cloudresourcemanager/v1"
)
func main () {
// TODO: Add your project ID
projectID := flag . String ( "project_id" , "" , "Cloud Project ID" )
// TODO: Add the ID of your principal.
// For examples, see https://cloud.google.com/iam/docs/principal-identifiers
member := flag . String ( "member_id" , "" , "Your principal ID" )
flag . Parse ()
// The role to be granted
var role string = "roles/logging.logWriter"
// Initializes the Cloud Resource Manager service
ctx := context . Background ()
crmService , err := cloudresourcemanager . NewService ( ctx )
if err != nil {
log . Fatalf ( "cloudresourcemanager.NewService: %v" , err )
}
// Grants your principal the "Log writer" role for your project
addBinding ( crmService , * projectID , * member , role )
// Gets the project's policy and prints all principals with the "Log Writer" role
policy := getPolicy ( crmService , * projectID )
// Find the policy binding for role. Only one binding can have the role.
var binding * cloudresourcemanager . Binding
for _ , b := range policy . Bindings {
if b . Role == role {
binding = b
break
}
}
fmt . Println ( "Role: " , binding . Role )
fmt . Print ( "Members: " , strings . Join ( binding . Members , ", " ))
// Removes member from the "Log writer" role
removeMember ( crmService , * projectID , * member , role )
}
// addBinding adds the principal to the project's IAM policy
func addBinding ( crmService * cloudresourcemanager . Service , projectID , member , role string ) {
policy := getPolicy ( crmService , projectID )
// Find the policy binding for role. Only one binding can have the role.
var binding * cloudresourcemanager . Binding
for _ , b := range policy . Bindings {
if b . Role == role {
binding = b
break
}
}
if binding != nil {
// If the binding exists, adds the principal to the binding
binding . Members = append ( binding . Members , member )
} else {
// If the binding does not exist, adds a new binding to the policy
binding = & cloudresourcemanager . Binding {
Role : role ,
Members : [] string { member },
}
policy . Bindings = append ( policy . Bindings , binding )
}
setPolicy ( crmService , projectID , policy )
}
// removeMember removes the principal from the project's IAM policy
func removeMember ( crmService * cloudresourcemanager . Service , projectID , member , role string ) {
policy := getPolicy ( crmService , projectID )
// Find the policy binding for role. Only one binding can have the role.
var binding * cloudresourcemanager . Binding
var bindingIndex int
for i , b := range policy . Bindings {
if b . Role == role {
binding = b
bindingIndex = i
break
}
}
// Order doesn't matter for bindings or members, so to remove, move the last item
// into the removed spot and shrink the slice.
if len ( binding . Members ) == 1 {
// If the principal is the only member in the binding, removes the binding
last := len ( policy . Bindings ) - 1
policy . Bindings [ bindingIndex ] = policy . Bindings [ last ]
policy . Bindings = policy . Bindings [: last ]
} else {
// If there is more than one member in the binding, removes the principal
var memberIndex int
for i , mm := range binding . Members {
if mm == member {
memberIndex = i
}
}
last := len ( policy . Bindings [ bindingIndex ]. Members ) - 1
binding . Members [ memberIndex ] = binding . Members [ last ]
binding . Members = binding . Members [: last ]
}
setPolicy ( crmService , projectID , policy )
}
// getPolicy gets the project's IAM policy
func getPolicy ( crmService * cloudresourcemanager . Service , projectID string ) * cloudresourcemanager . Policy {
ctx := context . Background ()
ctx , cancel := context . WithTimeout ( ctx , time . Second * 10 )
defer cancel ()
request := new ( cloudresourcemanager . GetIamPolicyRequest )
policy , err := crmService . Projects . GetIamPolicy ( projectID , request ). Do ()
if err != nil {
log . Fatalf ( "Projects.GetIamPolicy: %v" , err )
}
return policy
}
// setPolicy sets the project's IAM policy
func setPolicy ( crmService * cloudresourcemanager . Service , projectID string , policy * cloudresourcemanager . Policy ) {
ctx := context . Background ()
ctx , cancel := context . WithTimeout ( ctx , time . Second * 10 )
defer cancel ()
request := new ( cloudresourcemanager . SetIamPolicyRequest )
request . Policy = policy
policy , err := crmService . Projects . SetIamPolicy ( projectID , request ). Do ()
if err != nil {
log . Fatalf ( "Projects.SetIamPolicy: %v" , err )
}
}
To learn how to install and use the client library for Resource Manager, see
Resource Manager client libraries .
For more information, see the
Resource Manager Java API
reference documentation .
To authenticate to Resource Manager, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.iam.admin.v1. IAMClient ;
import com.google.iam.admin.v1. ServiceAccountName ;
import com.google.iam.v1. Binding ;
import com.google.iam.v1. GetIamPolicyRequest ;
import com.google.iam.v1. Policy ;
import com.google.iam.v1. SetIamPolicyRequest ;
import com.google.protobuf. FieldMask ;
import java.io.IOException ;
import java.util.ArrayList ;
import java.util.Arrays ;
import java.util.List ;
public class Quickstart {
public static void main ( String [] args ) throws IOException {
// TODO: Replace with your project ID.
String projectId = "your-project" ;
// TODO: Replace with your service account name.
String serviceAccount = "your-service-account" ;
// TODO: Replace with the ID of your principal.
// For examples, see https://cloud.google.com/iam/docs/principal-identifiers
String member = "your-principal" ;
// The role to be granted.
String role = "roles/logging.logWriter" ;
quickstart ( projectId , serviceAccount , member , role );
}
// Creates new policy and adds binding.
// Checks if changes are present and removes policy.
public static void quickstart ( String projectId , String serviceAccount ,
String member , String role ) throws IOException {
// Construct the service account email.
// You can modify the ".iam.gserviceaccount.com" to match the name of the service account
// to use for authentication.
serviceAccount = serviceAccount + "@" + projectId + ".iam.gserviceaccount.com" ;
// Initialize client that will be used to send requests.
// This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient iamClient = IAMClient . create ()) {
// Grants your principal the "Log writer" role for your project.
addBinding ( iamClient , projectId , serviceAccount , member , role );
// Get the project's policy and print all principals with the "Log Writer" role
Policy policy = getPolicy ( iamClient , projectId , serviceAccount );
Binding binding = null ;
List<Binding> bindings = policy . getBindingsList ();
for ( Binding b : bindings ) {
if ( b . getRole (). equals ( role )) {
binding = b ;
break ;
}
}
System . out . println ( "Role: " + binding . getRole ());
System . out . print ( "Principals: " );
for ( String m : binding . getMembersList ()) {
System . out . print ( "[" + m + "] " );
}
System . out . println ();
// Removes principal from the "Log writer" role.
removeMember ( iamClient , projectId , serviceAccount , member , role );
}
}
public static void addBinding ( IAMClient iamClient , String projectId , String serviceAccount ,
String member , String role ) {
// Gets the project's policy.
Policy policy = getPolicy ( iamClient , projectId , serviceAccount );
// If policy is not retrieved, return early.
if ( policy == null ) {
return ;
}
Policy . Builder updatedPolicy = policy . toBuilder ();
// Get the binding if present in the policy.
Binding binding = null ;
for ( Binding b : updatedPolicy . getBindingsList ()) {
if ( b . getRole (). equals ( role )) {
binding = b ;
break ;
}
}
if ( binding != null ) {
// If binding already exists, adds principal to binding.
binding . getMembersList (). add ( member );
} else {
// If binding does not exist, adds binding to policy.
binding = Binding . newBuilder ()
. setRole ( role )
. addMembers ( member )
. build ();
updatedPolicy . addBindings ( binding );
}
// Sets the updated policy.
setPolicy ( iamClient , projectId , serviceAccount , updatedPolicy . build ());
}
public static void removeMember ( IAMClient iamClient , String projectId , String serviceAccount ,
String member , String role ) {
// Gets the project's policy.
Policy . Builder policy = getPolicy ( iamClient , projectId , serviceAccount ). toBuilder ();
// Removes the principal from the role.
Binding binding = null ;
for ( Binding b : policy . getBindingsList ()) {
if ( b . getRole (). equals ( role )) {
binding = b ;
break ;
}
}
if ( binding != null && binding . getMembersList (). contains ( member )) {
List<String> newMemberList = new ArrayList <> ( binding . getMembersList ());
newMemberList . remove ( member );
Binding newBinding = binding . toBuilder (). clearMembers ()
. addAllMembers ( newMemberList )
. build ();
List<Binding> newBindingList = new ArrayList <> ( policy . getBindingsList ());
newBindingList . remove ( binding );
if ( ! newBinding . getMembersList (). isEmpty ()) {
newBindingList . add ( newBinding );
}
policy . clearBindings ()
. addAllBindings ( newBindingList );
}
// Sets the updated policy.
setPolicy ( iamClient , projectId , serviceAccount , policy . build ());
}
public static Policy getPolicy ( IAMClient iamClient , String projectId , String serviceAccount ) {
// Gets the project's policy by calling the
// IAMClient API.
GetIamPolicyRequest request = GetIamPolicyRequest . newBuilder ()
. setResource ( ServiceAccountName . of ( projectId , serviceAccount ). toString ())
. build ();
return iamClient . getIamPolicy ( request );
}
private static void setPolicy ( IAMClient iamClient , String projectId ,
String serviceAccount , Policy policy ) {
List<String> paths = Arrays . asList ( "bindings" , "etag" );
// Sets a project's policy.
SetIamPolicyRequest request = SetIamPolicyRequest . newBuilder ()
. setResource ( ServiceAccountName . of ( projectId , serviceAccount ). toString ())
. setPolicy ( policy )
// A FieldMask specifying which fields of the policy to modify. Only
// the fields in the mask will be modified. If no mask is provided, the
// following default mask is used:
// `paths: "bindings, etag"`
. setUpdateMask ( FieldMask . newBuilder (). addAllPaths ( paths ). build ())
. build ();
iamClient . setIamPolicy ( request );
}
}
To learn how to install and use the client library for Resource Manager, see
Resource Manager client libraries .
For more information, see the
Resource Manager Python API
reference documentation .
To authenticate to Resource Manager, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import resourcemanager_v3
from google.iam.v1 import iam_policy_pb2 , policy_pb2
def quickstart ( project_id : str , principal : str ) - > None :
"""Demonstrates basic IAM operations.
This quickstart shows how to get a project's IAM policy,
add a principal to a role, list members of a role,
and remove a principal from a role.
Args:
project_id: ID or number of the Google Cloud project you want to use.
principal: The principal ID requesting the access.
"""
# Role to be granted.
role = "roles/logging.logWriter"
crm_service = resourcemanager_v3 . ProjectsClient ()
# Grants your principal the 'Log Writer' role for the project.
modify_policy_add_role ( crm_service , project_id , role , principal )
# Gets the project's policy and prints all principals with the 'Log Writer' role.
policy = get_policy ( crm_service , project_id )
binding = next ( b for b in policy . bindings if b . role == role )
print ( f "Role: { ( binding . role ) } " )
print ( "Members: " )
for m in binding . members :
print ( f "[ { m } ]" )
# Removes the principal from the 'Log Writer' role.
modify_policy_remove_principal ( crm_service , project_id , role , principal )
def get_policy (
crm_service : resourcemanager_v3 . ProjectsClient , project_id : str
) - > policy_pb2 . Policy :
"""Gets IAM policy for a project."""
request = iam_policy_pb2 . GetIamPolicyRequest ()
request . resource = f "projects/ { project_id } "
policy = crm_service . get_iam_policy ( request )
return policy
def set_policy (
crm_service : resourcemanager_v3 . ProjectsClient ,
project_id : str ,
policy : policy_pb2 . Policy ,
) - > None :
"""Adds a new role binding to a policy."""
request = iam_policy_pb2 . SetIamPolicyRequest ()
request . resource = f "projects/ { project_id } "
request . policy . CopyFrom ( policy )
crm_service . set_iam_policy ( request )
def modify_policy_add_role (
crm_service : resourcemanager_v3 . ProjectsClient ,
project_id : str ,
role : str ,
principal : str ,
) - > None :
"""Adds a new role binding to a policy."""
policy = get_policy ( crm_service , project_id )
for bind in policy . bindings :
if bind . role == role :
bind . members . append ( principal )
break
else :
binding = policy_pb2 . Binding ()
binding . role = role
binding . members . append ( principal )
policy . bindings . append ( binding )
set_policy ( crm_service , project_id , policy )
def modify_policy_remove_principal (
crm_service : resourcemanager_v3 . ProjectsClient ,
project_id : str ,
role : str ,
principal : str ,
) - > None :
"""Removes a principal from a role binding."""
policy = get_policy ( crm_service , project_id )
for bind in policy . bindings :
if bind . role == role :
if principal in bind . members :
bind . members . remove ( principal )
break
set_policy ( crm_service , project_id , policy )
if __name__ == "__main__" :
# TODO: Replace with your project ID.
project_id = "your-project-id"
# TODO: Replace with the ID of your principal.
# For examples, see https://cloud.google.com/iam/docs/principal-identifiers
principal = "your-principal"
quickstart ( project_id , principal )
Congratulations! You used the IAM methods in the Resource Manager API
to modify access for a project.
How did it go?
It worked!
Great!
What did you like about the quickstart? What could
we have done better?
Let us know! .
I got stuck.
We're sorry to hear that.
Let us know what went wrong . We'll want to fix it.
Clean up
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
What's next
Read about how IAM works .
Learn more about
granting, changing, and revoking access .
Troubleshoot access issues with the Policy Troubleshooter .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
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
