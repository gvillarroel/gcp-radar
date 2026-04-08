---
title: "Manage access bindings \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/manage-access-bindings
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/manage-access-bindings
  title: "Manage access bindings \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Manage access bindings | Access Context Manager | Google Cloud Documentation
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
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Access Context Manager
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
How-to guides
All how-to guides
Access control with IAM
Create an access policy
Create a basic access level
Create a custom access level
Use mobile devices with access levels
Manage an access policy
Create custom constraints
Manage access levels
Make bulk changes to access levels
Audit logging
Use Context-Aware Access
Set up context-aware access
Define access policies using access levels
Apply policies to user groups with access bindings
Configure session controls for re-authentication
Configure a credential strength policy
Configure Chrome browser attributes
Configure enterprise certificate conditions
Configure time and date conditions
Manage access bindings
Context-aware access enforcement points
Use certificate-based access
Certificate-based access overview
Understand mutual TLS at Google Cloud
Set up certificate-based access
Create access levels for certificate-based access
Enforce certificate-based access for a user group
Enforce certificate-based access with VPC Service Controls
Enable certificate-based access in client applications
Enable certificate-based access for web applications
Enable certificate-based access for VMs
Setting up Endpoint Verification
Enable certificate-based access with your enterprise certificates
Enable certificate-based access with Endpoint Verification certificates
Configure certificate-based access for Workload Identity Federation
Concepts
All concepts
Overview
Scoped policies
Custom access levels
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
View access bindings
Update an access binding
Delete access bindings
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Manage access bindings
Stay organized with collections
Save and categorize content based on your preferences.
On this page
View access bindings
Update an access binding
Delete access bindings
This page explains how to manage your existing access bindings, which define how
access policies are applied to your user groups. You can view, modify, and
delete these bindings as needed. Access bindings determine how access levels and
session controls are applied to a user group.
For information about how to create access bindings and for more details on
access levels and session controls, see Apply policies to user groups
with access bindings .
Preview
— Session controls feature only
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
View access bindings
After the access bindings are created for a group of users, access to the
Google Cloud console and Google Cloud APIs are controlled based
on satisfaction of the bound access level.
You can view the details of the access binding that you created, edit it, or
delete it.
Console gcloud API
More
In the Google Cloud console, go to the Access Context Manager page.
Go to Access Context Manager
If you are prompted, select a project. The list of access bindings are
listed on the Access Context Manager page.
To view all access bindings, run the following command:
gcloud access-context-manager cloud-bindings list \
--organization ORG_ID
ORG_ID : Your organization ID.
If the access-context-manager/organization property hasn't been set,
replace ORG_ID in the optional --organization
flag with the ID for the organization that you used when creating the
GcpAccessAdmin role.
To view the details of an access binding, run the following command:
gcloud access-context-manager cloud-bindings describe \
--binding = BINDING_ID
BINDING_ID is the ID of the access-binding or fully qualified identifier for
the access binding.
View all access bindings:
Before using any of the request data,
make the following replacements:
ORG_ID is the ID for the organization that you used when creating the
GcpAccessAdmin role.
If the access-context-manager/organization property hasn't been set,
replace ORG_ID in the optional --organization
flag with the ID for the organization that you used when creating the
GcpAccessAdmin role.
HTTP method and URL:
See more code actions.
Light code theme
Dark code theme
GET https://accesscontextmanager.googleapis.com/v1/organizations/ ORG_ID /gcpUserAccessBindings
To send your request, choose one of these options:
curl PowerShell
More
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://accesscontextmanager.googleapis.com/v1/organizations/ ORG_ID /gcpUserAccessBindings"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://accesscontextmanager.googleapis.com/v1/organizations/ ORG_ID /gcpUserAccessBindings" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": string,
"groupKey": string,
"accessLevels": [
string
]
"dryRunAccessLevels": [
string
]
}
View the details of an access binding:
HTTP method and URL:
GET https://accesscontextmanager.googleapis.com/v1/ BINDING_ID
To send your request, choose one of these options:
curl PowerShell
More
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://accesscontextmanager.googleapis.com/v1/ BINDING_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://accesscontextmanager.googleapis.com/v1/ BINDING_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "organizations/427391306986/gcpUserAccessBindings/aAQS-YRSviv2hC12vZFUN3AZzvwa6KV2hJ89iMytB_nHUcT1l",
"groupKey": "045jfvxd0ybeul8",
"accessLevels": [
"accessPolicies/305009197125/accessLevels/device_lock"
],
"dryRunAccessLevels": [
"accessPolicies/305009197125/accessLevels/another"
]
}
Update an access binding
You can update an access binding to do the following:
Add, remove, or change which applications have a policy.
Modify the access levels for an application within a user group.
Add a new dry run access level or promote an existing one to a live level.
Important: You can't change the user group after an access binding is created.
You must create a new access binding if you need to change the user group.
Console gcloud API
More
In the Google Cloud console, go to the Access Context Manager page.
Go to Access Context Manager
If you are prompted, select a project.
On the Access Context Manager page, select an access binding and then click Edit
to update it.
You cannot update access bindings with dry run access levels or session
controls in the Google Cloud console.
Create a YAML binding file.
gcloud access-context-manager cloud-bindings update
--binding ACCESS_BINDING
--binding-file BINDING_FILE_PATH
[ --level DEFAULT_ACCESS_LEVEL ]
[ --dry-run-level DEFAULT_DRY_RUN_ACCESS_LEVEL ]
[ --session-length = DEFAULT_SESSION_LENGTH ]
[ --session-reauth-method = DEFAULT_SESSION_REAUTH_METHOD ]
Replace the following:
ACCESS_BINDING is in the form
organizations/ ORG_ID /gcpUserAccessBindings/ ACCESS_BINDING_NAME .
BINDING_FILE_PATH : The path to the YAML file that contains the access binding scheme.
The binding file supports only scopedAccessSettings .
DEFAULT_ACCESS_LEVEL : The optional access level name, which takes the form
accessPolicies/POLICY_ID/accessLevels/ACCESS_LEVEL_NAME . Replace POLICY_ID
with the access policy ID, and ACCESS_LEVEL_NAME with the access level name.
DEFAULT_DRY_RUN_ACCESS_LEVEL_2 : An optional access level name in the form
`accessPolicies/POLICY_ID/accessLevels/ACCESS_LEVEL_NAME`.
Include this flag to apply the specified dry run access level to all applications by default if
they aren't specified in the YAML.
DEFAULT_SESSION_LENGTH : The optional session duration in the hour format,
such as 15h for 15 hours, or 2h for two hours.
DEFAULT_SESSION_REAUTH_METHOD : The optional method to challenge users to re-verify their
identity, which must be one of the following:
LOGIN : Apply the standard login, which can include MFA or other
Workspace-defined factors.
PASSWORD : Only require a password, even if other factors are defined. If passwords
are managed using an external IdP, users are redirected to the IdP. If the IdP session is live,
users are implicitly re-authenticated. If the IdP is not live, users must sign in through the IdP.
SECURITY_KEY : Require a hardware security key.
How the --level and --binding-file arguments work together
If you only use --binding-file , only the applications in the file
have the policies applied.
If you only use --level , the access level applies to all applications.
If you use both, the rules are combined. The --level
value applies to all applications, whereas the policies in the YAML file
specified by --binding-file only apply to the applications as defined
in the file.
Working with session controls
To set default session controls for all applications, use
--session-length and --session-reauth-method .
If you also define session controls in the YAML file, those session
controls override the default settings for those specific
applications.
You must use --session-length and --session-reauth-method
together.
To remove a default access level or a default dry run access level, provide an
empty string, such as --level= or --dry-run-level= . When these arguments
are not provided, the update command won't make any changes.
To remove a session control, set --session-length=0 .
Create a JSON body.
{
"accessLevels": [
" DEFAULT_ACCESS_LEVEL "
],
"scopedAccessSettings": [
{
"scope": {
"clientScope": {
"restrictedClientApplication": {
"clientId": " CLIENT_ID "
}
}
},
"activeSettings": {
"accessLevels": [
" ACCESS_LEVEL_A "
],
"sessionSettings": [
{
"sessionLength": " SESSION_LENGTH ",
"sessionReauthMethod": " SESSION_REAUTH_METHOD ",
"sessionLengthEnabled": true
}
]
}
},
{
"scope": {
"clientScope": {
"restrictedClientApplication": {
"name": " CLIENT_NAME "
}
},
"activeSettings": {
"accessLevels": [
" ACCESS_LEVEL_C "
]
}
}
}
]
}
Replace the following:
DEFAULT_ACCESS_LEVEL : The optional access level name, which takes the form
accessPolicies/POLICY_ID/accessLevels/ACCESS_LEVEL_NAME . Replace POLICY_ID
with the access policy ID, and ACCESS_LEVEL_NAME with the access level name.
CLIENT_ID : The OAuth client ID. You must use clientId when
an application contains sessionSettings .
ACCESS_LEVEL_A : An access level name in the format
accessPolicies/POLICY_ID/accessLevels/ACCESS_LEVEL_NAME .
SESSION_LENGTH : The session duration using ISO 8601 duration
format, such as 30m for 30 minutes, or 2h for
two hours.
SESSION_REAUTH_METHOD : The optional method to challenge users
to re-verify their identity, which must be one of the following:
LOGIN : Apply the standard login, which can include MFA or other
Workspace-defined factors.
PASSWORD : Only require a password, even if other factors are
defined. If passwords are managed using an external IdP, users are
redirected to the IdP. If the IdP session is live, users are implicitly
re-authenticated. If the IdP is not live, users must sign in through the
IdP.
SECURITY_KEY : Require a hardware security key.
CLIENT_NAME : The client name. If the application contains
sessionSettings , you cannot use the client name. Instead, use the
OAuth client ID.
ACCESS_LEVEL_C : An access level name in the format
accessPolicies/POLICY_ID/accessLevels/ACCESS_LEVEL_NAME .
Send the PATCH request.
PATCH https://accesscontextmanager.googleapis.com/v1/ ACCESS_BINDING ?fieldMask= FIELDMASK
Replace the following:
ACCESS_BINDING is in the form
organizations/ ORG_ID /gcpUserAccessBindings/ ACCESS_BINDING_NAME .
FIELD_MASK : A required, comma-separated list of fields that
you want to update. This tells the API which parts of the access binding
to modify.
fieldMask should contain the top-level JSON keys in the request body
that you want to update, which can contain accessLevels ,
dryRunAccessLevels , and scopedAccessSettings .
Important: If you don't include a fieldMask , nothing is updated.
If successful, you should receive a representation of the JSON object.
If there is a problem, you receive an error message.
Delete access bindings
Console gcloud API
More
In the Google Cloud console, go to the Access Context Manager page.
Go to Access Context Manager
If you are prompted, select a project.
On the Access Context Manager page, select an access binding, and then click
Delete .
gcloud access-context-manager cloud-bindings delete \
--binding ACCESS_BINDING
Replace the following:
ACCESS_BINDING is in the form
organizations/ ORG_ID /gcpUserAccessBindings/ ACCESS_BINDING_NAME .
ACCESS_BINDING_NAME is the unique string returned
for the name identifier when the access binding was created.
Before using any of the request data,
make the following replacements:
ACCESS_BINDING_NAME is the unique string returned
for the name identifier when the access binding was created.
HTTP method and URL:
DELETE https://accesscontextmanager.googleapis.com/v1/ ACCESS_BINDING_NAME
To send your request, choose one of these options:
curl PowerShell
More
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://accesscontextmanager.googleapis.com/v1/ ACCESS_BINDING_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://accesscontextmanager.googleapis.com/v1/ ACCESS_BINDING_NAME " | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
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
Español – América Latina
Français
Indonesia
Italiano
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
