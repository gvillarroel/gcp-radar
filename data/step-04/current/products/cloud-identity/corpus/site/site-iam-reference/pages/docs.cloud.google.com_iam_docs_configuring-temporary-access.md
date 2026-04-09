---
title: "Configure temporary access \_|\_ Identity and Access Management (IAM) \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/configuring-temporary-access
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/configuring-temporary-access
  title: "Configure temporary access \_|\_ Identity and Access Management (IAM) \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure temporary access | Identity and Access Management (IAM) | Google Cloud Documentation
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
Grant temporary access
Manage access based on days/hours of the week
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Configure temporary access
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Grant temporary access
Manage access based on days/hours of the week
What's next
This topic describes how to set temporary (expiring) access to Google Cloud
resources using conditional role bindings in your allow policies. By using the
date/time attributes , you
can enforce time-based controls when accessing a given resource. For example,
you can grant temporary access to a project that starts and stops at a specified
time or on a scheduled and recurring basis.
Note: The examples on this page show how to modify access to a
project .
However, you can adapt these steps to modify access to any Google Cloud resource that
accepts IAM allow policies. For a list of these resource types, see
Resource types that accept allow policies .
Before you begin
Read Conditions Overview to understand the
basics of Identity and Access Management (IAM) conditional role bindings.
Review the
date/time attributes
that can be used in a condition expression. Date/time attributes are
recognized by all Google Cloud services.
Required roles
To get the permissions that
you need to manage conditional role bindings,
ask your administrator to grant you the
following IAM roles:
To manage access to projects:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
on the project
To manage access to folders:
Folder Admin ( roles/resourcemanager.folderAdmin )
on the folder
To manage access to projects, folders, and organizations:
Organization Admin ( roles/resourcemanager.organizationAdmin )
on the organization
To manage access to almost all Google Cloud resources:
Security Admin ( roles/iam.securityAdmin )
on the project, folder, or organization whose resources you want to manage access to
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to manage conditional role bindings. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage conditional role bindings:
To manage access to projects:
resourcemanager.projects.getIamPolicy
on the project
resourcemanager.projects.setIamPolicy
on the project
To manage access to folders:
resourcemanager.folders.getIamPolicy
on the folder
resourcemanager.folders.setIamPolicy
on the folder
To manage access to organizations:
resourcemanager.organizations.getIamPolicy
on the organization
resourcemanager.organizations.setIamPolicy
on the organization
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Grant temporary access
A conditional role binding can be used to grant time-bounded access to a
resource, ensuring that a user can no longer access the resource after the
specified expiry date and time.
Note: Conditional role bindings do not override role bindings with no conditions. If a
principal is bound to a role, and the role binding does not have a condition, then the principal
always has that role. Adding the principal to a conditional binding for the same role has no
effect.
Consider the following scenario: the company ExampleCo's information security
rules emphasize that no employee should have indefinite access to resources in
production projects. Previously, the admins have been manually setting and
deleting IAM role bindings to meet the engineers' emergency
needs. To reduce administrative overhead, ExampleCo can instead configure a
conditional role binding with a date/time condition to set an end date for the
binding.
Note: You cannot use conditions when you grant
legacy basic roles , including Owner
( roles/owner ), Editor ( roles/editor ), and Viewer
( roles/viewer ). Also, you cannot use conditions when you grant roles to all users
( allUsers ) or all authenticated users
( allAuthenticatedUsers ).
To grant expirable access to a project resource:
Console gcloud REST
More
In the Google Cloud console, go to the IAM page.
Go to the IAM page
From the list of principals, locate the desired principal and click the
edit button.
From the Edit permissions panel, locate the desired role to
configure a condition for. Then under IAM condition (optional) , click
Add IAM condition .
In the Edit condition panel, enter a title and optional
description for the condition.
You can add a condition expression using either the Condition
builder or the Condition editor . The condition
builder provides an interactive interface to select your desired
condition type, operator, and other applicable details about the
expression. The condition editor provides a text-based interface to
manually enter an expression using
CEL syntax .
Condition builder :
From the Condition type drop-down, select Expiring
Access .
From the Operator drop-down, select by .
From the Time drop-down, click the
date_range
button to select from a date and time range.
Click Save to apply the condition.
After the Edit condition panel is closed, click Save
again from the Edit permissions panel to update your allow policy.
Condition editor :
Click the Condition editor tab and enter the following
expression (replacing the timestamp with your own):
request.time < timestamp("2020-07-01T00:00:00.000Z")
After entering your expression, you can optionally choose to validate
the CEL syntax by clicking Run Linter above the text box on the
top-right.
Click Save to apply the condition.
After the Edit condition panel is closed, click Save
again from the Edit permissions panel to update your allow policy.
Allow policies are set using the
read-modify-write
pattern.
Execute the
gcloud projects get-iam-policy
command to get the current allow policy for the project. In the following
example, the JSON version of the allow policy is downloaded to a path on disk.
Command:
gcloud projects get-iam-policy project-id --format=json > filepath
The JSON format of the allow policy is downloaded:
{
"bindings" : [
{
"members" : [
"user:my-user@example.com"
],
"role" : "roles/owner"
},
{
"members" : [
"group:my-group@example.com"
],
"role" : "roles/iam.securityReviewer"
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 1
}
To configure the allow policy with expirable access, add the following
highlighted condition expression (replacing the timestamp with your own). The
gcloud CLI updates the version automatically:
{
"bindings" : [
{
"members" : [
"user:my-user@example.com"
],
"role" : "roles/owner"
},
{
"members" : [
"group:my-group@example.com"
],
"role" : "roles/iam.securityReviewer" ,
"condition" : {
"title" : "Expires_July_1_2020" ,
"description" : "Expires on July 1, 2020" ,
"expression" :
"request.time < timestamp('2020-07-01T00:00:00.000Z')"
}
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 3
}
Next, set the new allow policy by executing the
gcloud projects set-iam-policy
command:
gcloud projects set-iam-policy project-id filepath
The new allow policy is applied, and the group's role grant will expire at
the specified time.
Use the read-modify-write
pattern to allow access until a specific time.
First, read the allow policy for the project:
The Resource Manager API's
projects.getIamPolicy
method gets a project's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :getIamPolicy"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1 ,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/owner",
"members": [
"user:my-user@example.com"
]
},
{
"role": "roles/iam.securityReviewer",
"members": [
"group:my-group@example.com"
]
}
]
}
Next, modify the allow policy so that it allows access until a specific
time. Make sure to change the version field to the value
3 :
{
"version" : 3 ,
"etag" : "BwWKmjvelug=" ,
"bindings" : [
{
"role" : "roles/owner" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/iam.securityReviewer" ,
"members" : [
"group:my-group@example.com"
],
"condition" : {
"title" : "Expires_July_1_2020" ,
"description" : "Expires on July 1, 2020" ,
"expression" :
"request.time < timestamp('2020-07-01T00:00:00.000Z')"
}
}
]
}
Finally, write the updated allow policy:
The Resource Manager API's
projects.setIamPolicy
method sets the allow policy in the request as the project's new allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
HTTP method and URL:
POST https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :setIamPolicy
Request JSON body:
{
"policy": {
"version": 3,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/owner",
"members": [
"user:my-user@example.com"
]
},
{
"role": "roles/iam.securityReviewer",
"members": [
"group:my-group@example.com"
],
"condition": {
"title": "Expires_July_1_2020",
"description": "Expires on July 1, 2020",
"expression":
"request.time < timestamp('2020-07-01T00:00:00.000Z')"
}
}
]
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :setIamPolicy"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
Manage access based on days/hours of the week
A conditional role binding can be used to grant access to a resource only within
certain days or hours of the week on a recurring basis.
Consider the following scenario: the company ExampleCo has a quality assurance
project. The entire QA team is required to have highly-privileged roles to
complete their work. ExampleCo has to abide by labor laws in their location,
which limit work hours to Monday through Friday from 9 AM to 5 PM. ExampleCo can
use date/time conditions to ensure that their employees are only able to access
Google Cloud during the work week and during scheduled work hours.
Note: You cannot use conditions when you grant
legacy basic roles , including Owner
( roles/owner ), Editor ( roles/editor ), and Viewer
( roles/viewer ). Also, you cannot use conditions when you grant roles to all users
( allUsers ) or all authenticated users
( allAuthenticatedUsers ).
To grant access to a project resource for only certain days or hours of the
week on a recurring basis:
Console gcloud REST
More
In the Google Cloud console, go to the IAM page.
Go to the IAM page
From the list of principals, locate the desired principal and click the
edit button.
From the Edit permissions panel, locate the desired role to
configure a condition for. Then under IAM condition (optional) , click
Add IAM condition .
In the Edit condition panel, enter a title and optional description
for the condition.
You can add a condition expression using either the Condition
builder or the Condition editor . The condition
builder provides an interactive interface to select your desired
condition type, operator, and other applicable details about the
expression. The condition editor provides a text-based interface to
manually enter an expression using
CEL syntax .
Condition builder :
Click Add .
From the Condition type drop-down, select Time
arrow_right
Schedule
arrow_right
Day of Week .
From the Operator drop-down, select After or On .
From the Day of Week drop-down, select Monday .
From the Choose a time zone drop-down, select your desired time
zone from the list.
Ensure that the And operator is selected on the left, and then
click Add again.
From the Condition type drop-down, select Time
arrow_right
Schedule
arrow_right
Day of Week .
From the Operator drop-down, select Before or On .
From the Day of Week drop-down, select Friday .
From the Choose a time zone drop-down, select your desired time
zone from the list.
At this point, you've configured access only on Monday through Friday.
Now, you will configure access from 9 AM (09:00) to 5 PM (17:00).
Ensure that the And operator is selected on the left, and then
click Add again.
From the Condition type drop-down, select Time
arrow_right
Schedule
arrow_right
Hour of Day .
From the Operator drop-down, select After or On .
From the Hour of Day drop-down, select 9 (9 AM).
From the Choose a time zone drop-down, select your desired time
zone from the list.
From the Condition type drop-down, select Time
arrow_right
Schedule
arrow_right
Hour of Day .
From the Operator drop-down, select Before or On . Note
that for this selection, "on" will logically evaluate to all times
between 17:00 (5 PM) and 17:59 (5:59 PM). To set access to expire at
4:59 PM, ensure the hour is set to 16 instead of 17.
From the Hour of Day drop-down, select 17 (5 PM).
From the Choose a time zone drop-down, select your desired time
zone from the list.
Click Save to apply the condition.
Once the Edit condition panel is closed, click Save
again from the Edit permissions panel to update your allow policy.
You've now configured access from Monday to Friday, 9 AM to 5 PM.
Condition editor :
Click the Condition editor tab and enter the following
expression (replacing the placeholder values with your own):
request.time.getHours("Europe/Berlin") >= 9 &&
request.time.getHours("Europe/Berlin") <= 17 &&
request.time.getDayOfWeek("Europe/Berlin") >= 1 &&
request.time.getDayOfWeek("Europe/Berlin") <= 5
After entering your expression, you can optionally choose to validate
the CEL syntax by clicking Run Linter above the text box on the
top-right.
Click Save to apply the condition.
Once the Edit condition panel is closed, click Save
again from the Edit permissions panel to update your allow policy.
Allow policies are set using the
read-modify-write
pattern.
Execute the
gcloud projects get-iam-policy
command to get the current allow policy for the project. In the following
example, the JSON version of the allow policy is downloaded to a path on disk.
Command:
gcloud projects get-iam-policy project-id --format=json > filepath
The JSON format of the allow policy is downloaded:
{
"bindings" : [
{
"members" : [
"user:my-user@example.com"
],
"role" : "roles/owner"
},
{
"members" : [
"group:my-group@example.com"
],
"role" : "roles/bigquery.dataViewer"
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 1
}
To configure the allow policy with scheduled access, add the following
highlighted condition expression (replacing the timestamp with your own). The
gcloud CLI updates the version automatically:
{
"bindings" : [
{
"members" : [
"user:my-user@example.com"
],
"role" : "roles/owner"
},
{
"members" : [
"group:my-group@example.com"
],
"role" : "roles/bigquery.dataViewer" ,
"condition" : {
"title" : "Business_hours" ,
"description" : "Business hours Monday-Friday" ,
"expression" : "request.time.getHours('Europe/Berlin') >= 9 && request.time.getHours('Europe/Berlin') <= 17 && request.time.getDayOfWeek('Europe/Berlin') >= 1 && request.time.getDayOfWeek('Europe/Berlin') <= 5"
}
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 3
}
Next, set the new allow policy by executing the
gcloud projects set-iam-policy
command:
gcloud projects set-iam-policy project-id filepath
The new allow policy is applied, and the group's role grant will allow access
between the specified days and times.
Use the read-modify-write
pattern to allow scheduled access.
First, read the allow policy for the project:
The Resource Manager API's
projects.getIamPolicy
method gets a project's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
POLICY_VERSION : The policy version to be
returned. Requests should specify the most recent policy version, which is policy version
3. See Specifying
a policy version when getting a policy for details.
HTTP method and URL:
POST https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": POLICY_VERSION
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :getIamPolicy"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1 ,
"etag": "BwWKmjvelug=",
"bindings": [
{
"role": "roles/owner",
"members": [
"user:my-user@example.com"
]
},
{
"role": "roles/bigquery.dataViewer",
"members": [
"group:my-group@example.com"
]
}
]
}
Next, modify the allow policy to allow scheduled access.
Add the following highlighted condition expression (replacing the timestamp with
your own). Ensure that you've updated the version value to
3 :
{
"etag" : "BwWKmjvelug=" ,
"version" : 3 ,
"bindings" : [
{
"role" : "roles/owner" ,
"members" : [
"user:my-user@example.com"
]
},
{
"role" : "roles/bigquery.dataViewer" ,
"members" : [
"group:my-group@example.com"
],
"condition" : {
"title" : "Business_hours" ,
"description" : "Business hours Monday-Friday" ,
"expression" :
"request.time.getHours('Europe/Berlin') >= 9 &&
request.time.getHours('Europe/Berlin') <= 17 &&
request.time.getDayOfWeek('Europe/Berlin') >= 1 &&
request.time.getDayOfWeek('Europe/Berlin') <= 5"
}
}
]
}
The Resource Manager API's
projects.setIamPolicy
method sets the allow policy in the request as the project's new allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
HTTP method and URL:
POST https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :setIamPolicy
Request JSON body:
{
"policy": {
"etag": "BwWKmjvelug=",
"version": 3,
"bindings": [
{
"role": "roles/owner",
"members": [
"user:my-user@example.com"
]
},
{
"role": "roles/bigquery.dataViewer",
"members": [
"group:my-group@example.com"
],
"condition": {
"title": "Business_hours",
"description": "Business hours Monday-Friday",
"expression": "request.time.getHours('Europe/Berlin') >= 9 && request.time.getHours('Europe/Berlin') <= 17 && request.time.getDayOfWeek('Europe/Berlin') >= 1 && request.time.getDayOfWeek('Europe/Berlin') <= 5"
}
}
]
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :setIamPolicy"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains the updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
What's next
Learn how to manage conditional role bindings .
Learn how to lint allow policies .
Learn how to use conditional role bindings to manage just-in-time privileged access to projects .
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
