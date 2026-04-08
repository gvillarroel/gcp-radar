---
title: "Configure session controls for re-authentication \_|\_ Access Context Manager\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/session-controls-for-reauthentication
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/session-controls-for-reauthentication
  title: "Configure session controls for re-authentication \_|\_ Access Context Manager\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure session controls for re-authentication | Access Context Manager | Google Cloud Documentation
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
Define session length and re-authentication methods
Example policy configuration
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Configure session controls for re-authentication
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Define session length and re-authentication methods
Example policy configuration
Session controls let you configure how often users must re-authenticate after
being granted access and whether a full login, password only, or hardware
security key is required.
You can apply session controls to do the following:
Enforce frequent re-authentication for privileged users : Require users
with elevated privileges, such as project owners and billing administrators,
to re-authenticate more frequently.
Configure longer sessions for certain applications : Allow certain applications, such as context-based
AI applications like Gemini, to have longer session durations
to preserve the large context window required for optimal performance.
Warning: If you previously managed session controls within Workspace based on
Organizational Units (OUs), session controls defined through Access Context Manager
bindings will supersede any OU-based policies.
Define session length and re-authentication methods
You can define session controls when creating an Access Context Manager binding.
For more information about the session controls, see Apply policies to user groups using access bindings .
gcloud API Terraform
More
Set default session controls for all applications
Use the --session-length flag to set the session duration. The value can
range from 1 to 24 hours. Specify the duration in the hour duration format.
For example, use "12h" to set a session that is 12 hours long.
Use the --session-reauth-method flag to specify the re-authentication method. For
example, you can set a session duration time of 3 hours (3h) and a
LOGIN , PASSWORD , or SECURITY_KEY re-authentication method.
This will be applied to all applications unless overridden by
application-specific settings.
Set application-specific session controls
Define scopedAccessSettings in a YAML file to specify session controls
for specific applications using clientId . This lets you override the
default session controls for those applications. You can then pass the YAML
file using the --binding-file flag .
Define the sessionLength and sessionReauthMethod fields within the
sessionSettings object in the JSON body of your POST request to create
or update a GcpUserAccessBinding binding.
sessionLength is the length of the session between 1 and 24 hours. The value must
be a string and consist of an integer between 0 and 86400, followed immediately by the
letter 's'.
sessionReauthMethod can be LOGIN , PASSWORD , or SECURITY_KEY .
Use scopedAccessSettings to define application-specific session controls.
See Define configurations for specific applications for details.
Within the Terraform Google Cloud User Access Binding resource , populate the session_settings argument to configure general session length controls that apply to all user traffic:
session_length : The duration of the session in seconds. For example, 900s sets the session length to 15 minutes. The 's' at the end is required.
session_length_enabled : Set to false to disable the specified session settings.
session_reauth_method : The type of authentication challenge that's used to refresh credentials. The options are LOGIN , PASSWORD , or SECURITY_KEY .
use_oidc_max_age : An advanced field that's used to configure whether the session honors an
optional OIDC maximum age parameter, which is specified if the
authenticating credential is an OAuth token.
Key considerations when defining session controls:
Only the most recently created access binding that matches the request
is used when resolving session control settings.
Example policy configuration
The following example shows how to create a session control that
requires re-authentication every 18 hours with LOGIN and every two
hours for a specific application ( SENSITIVE_APP_ID ) with SECURITY_KEY .
Default settings
The --level , --session-length , and --session-reauth-method flags in the
Google Cloud CLI command (or the corresponding fields in the JSON body for the
API call) set the default behavior for all applications not explicitly defined
in scopedAccessSettings .
Application-specific settings
The scopedAccessSettings section in the YAML file (or JSON body) lets you
override the default settings for specific applications. In the example, we
set a two hour re-authentication requirement with SECURITY_KEY for the
application with the client ID SENSITIVE_APP_ID .
To exempt certain apps from session control, set the
sessionLength field to 0s or sessionLengthEnabled
to false . The sessionReauthMethod method will then be ignored.
gcloud API Terraform
More
The settings configuration:
scopedAccessSettings :
scope :
clientScope :
restrictedClientApplication :
clientId : SENSITIVE_APP_ID
activeSettings :
sessionSettings :
sessionLength : 7200s
sessionReauthMethod : SECURITY_KEY
sessionLengthEnabled : true
Create the access binding:
gcloud access-context-manager cloud-bindings create \
--organization ORG_ID \
--group-key GROUP_ID \
--binding-file BINDING_FILE_PATH \
--level DEFAULT_ACCESS_LEVEL
--session-length 18h \
--session-reauth-method LOGIN
JSON body:
{
"groupKey": "GROUP_ID",
"accessLevels": [
"accessPolicies/POLICY_ID/accessLevels/DEFAULT_ACCESS_LEVEL"
],
"scopedAccessSettings": [
{
"scope": {
"clientScope": {
"restrictedClientApplication": {
"clientId": "SENSITIVE_APP_ID"
}
}
},
"activeSettings": {
"accessLevels": [
"accessPolicies/POLICY_ID/accessLevels/ACCESS_LEVEL_NAME"
],
"sessionSettings": [
{
"sessionLength": "2h",
"sessionReauthMethod": "SECURITY_KEY",
"sessionLengthEnabled": true
}
]
}
}
]
Post request:
POST https://accesscontextmanager.googleapis.com/v1/organizations/ORG_ID/gcpUserAccessBindings
To specify a session length for access requests from users coming from "Group Key" across all apps :
resource "google_access_context_manager_gcp_user_access_binding" "gcp_user_access_binding" {
organization_id = "{Organization ID}"
group_key = "{Group Key}"
session_settings {
session_length = "1800s"
session_length_enabled = true
session_reauth_method = "LOGIN"
use_oidc_max_age = false
}
To specify a session length for requests from users coming from a specific Google Group using a specific app, such as the Google Cloud console, populate the appropriate scoped_access_settings argument with a session_settings argument in active_settings . The sub-arguments within session_settings are identical to the top level argument.
resource "google_access_context_manager_gcp_user_access_binding" "gcp_user_access_binding" {
organization_id = "{Organization ID}"
group_key = "{Group Key}"
scoped_access_settings {
scope {
client_scope {
restricted_client_application {
name = "Cloud Console"
}
}
}
active_settings {
session_settings {
session_length = "1800s"
session_length_enabled = true
session_reauth_method = "LOGIN"
use_oidc_max_age = false
}
}
}
}
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
