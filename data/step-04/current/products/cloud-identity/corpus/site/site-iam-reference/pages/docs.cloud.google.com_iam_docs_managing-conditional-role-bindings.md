---
title: "Manage conditional role bindings \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/managing-conditional-role-bindings
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/managing-conditional-role-bindings
  title: "Manage conditional role bindings \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Manage conditional role bindings | Identity and Access Management (IAM) | Google Cloud Documentation
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
Add a conditional role binding to a policy
Modify an existing conditional role binding
Remove a condition from a role binding
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Manage conditional role bindings
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Add a conditional role binding to a policy
Modify an existing conditional role binding
Remove a condition from a role binding
What's next
This topic describes how to add, modify, and remove conditional role bindings in
your Identity and Access Management (IAM) allow policies.
Note: Conditional role bindings do not override role bindings with no conditions. If a
principal is bound to a role, and the role binding does not have a condition, then the principal
always has that role. Adding the principal to a conditional binding for the same role has no
effect.
Before you begin
Enable the IAM API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Read the IAM Conditions overview
to understand the basics of IAM conditional
role bindings.
Review the attribute reference to learn about the
different condition attributes that can be used in an expression.
Required roles
To manage conditional role bindings in a resource's allow policy, you need
permissions to get the resource, and to get and set the allow policy for the
resource. These permissions have the following form, where
SERVICE is the name of the service that owns the
resource and RESOURCE_TYPE is the name of the resource
type that you want to manage access to:
SERVICE . RESOURCE_TYPE .get
SERVICE . RESOURCE_TYPE .getIamPolicy
SERVICE . RESOURCE_TYPE .setIamPolicy
For example, to manage conditional role bindings in a project's allow policy,
you need the following permissions:
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
To gain the required permissions, ask your administrator to grant you a
predefined or custom role that includes the permissions. For example, your
administrator could grant you the Security Admin role
( roles/iam.securityAdmin ), which includes permissions to get almost all
Google Cloud resources and manage their allow policies.
Add a conditional role binding to a policy
Conditional role bindings can be added to new or existing allow policies to
further control access to Google Cloud resources. This section shows you how to
add a simple time-based condition to an existing allow
policy using the Google Cloud console, the Google Cloud CLI, and the REST API.
Note: You cannot use conditions when you grant
legacy basic roles , including Owner
( roles/owner ), Editor ( roles/editor ), and Viewer
( roles/viewer ). Also, you cannot use conditions when you grant roles to all users
( allUsers ) or all authenticated users
( allAuthenticatedUsers ).
To add a conditional role binding to an existing allow policy:
Console gcloud REST
More
In the Google Cloud console, go to the IAM page.
Go to the IAM page
From the list of principals, locate the desired principal and click the
edit
button.
From the Edit permissions panel, locate the desired role to configure a
condition for. Then under IAM condition (optional) , click Add IAM
condition .
In the Edit condition panel, enter a title and optional description for
the condition.
You can add a condition expression using either the Condition builder or
the Condition editor . The condition builder provides an interactive
interface to select your desired condition type, operator, and other
applicable details about the expression. The condition editor provides a
text-based interface to manually enter an expression using CEL syntax .
Condition builder :
From the Condition type drop-down, select Expiring Access .
From the Operator drop-down, select by .
From the Time drop-down, click the
date_range button to select from a
date and time range.
Click Save to apply the condition.
Once the Edit condition panel is closed, click Save again from
the Edit permissions panel to update your allow policy.
Condition editor :
Click the Condition editor tab and enter the following expression
(replacing the timestamp with your own):
reques t . t ime < t imes ta mp( "2019-12-31T12:00:00.000Z" )
After entering your expression, you can optionally choose to validate the
CEL syntax by clicking Run Linter above the text box on the
top-right.
Click Save to apply the condition.
Once the Edit condition panel is closed, click Save again from
the Edit permissions panel to update your allow policy.
Allow policies are set using the read-modify-write pattern.
Execute the gcloud projects get-iam-policy command to get
the current allow policy for the project. In the following example, the JSON
version of the allow policy is downloaded to a path on disk.
Command:
gcloud projects get-iam-policy project-id --format json > file-path
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
Note the allow policy's current version , which is
1 . To configure the allow policy with expirable
access, add the following highlighted condition expression (replacing the
timestamp with your own). The gcloud CLI updates the version
automatically:
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
"title" : "Expires_2019" ,
"description" : "Expires at noon on 2019-12-31" ,
"expression" :
"request.time < timestamp('2019-12-31T12:00:00Z')"
}
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 3
}
Next, set the new allow policy by executing the
gcloud projects set-iam-policy command:
gcloud projects set-iam-policy project-id file-path
The new allow policy is applied, and travis@example.com 's role binding will
expire at the specified time.
Use the read-modify-write pattern to allow access until a
specific time.
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
Note the allow policy's current version , which is
1 .
Next, modify the allow policy so that it allows access until a specific
time. Make sure to change the version field to the value
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
"role" : "roles/iam.securityReviewer" ,
"condition" : {
"title" : "Expires_2019" ,
"description" : "Expires at noon on 2019-12-31" ,
"expression" : "request.time < timestamp('2019-12-31T12:00:00Z')"
},
"members" : [
"group:my-group@example.com"
]
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
Modify an existing conditional role binding
After you create a conditional role binding, you can change the condition
expression at any time. This section shows you how to update a
time-based condition in an existing allow policy using the
Google Cloud console, the Google Cloud CLI, and the REST API.
To modify a conditional role binding in an existing allow policy:
Console gcloud REST
More
In the Google Cloud console, go to the IAM page.
Go to the IAM page
From the list of principals, locate the desired principal and click the
edit
button.
From the Edit permissions panel, locate the desired role to configure a
condition for. Then under IAM condition (optional) , click the name of the
existing condition to edit it.
In the Edit condition panel, you can either keep or update the existing
title and description for the condition.
You can either edit the existing condition expression or add a new one using
either the Condition builder or the Condition editor . The condition
builder provides an interactive interface to select your desired condition
type, operator, and other applicable details about the expression. The
condition editor provides a text-based interface to manually enter an
expression using CEL syntax .
Condition builder :
Add a new condition expression or modify the existing condition
expression.
Click Save to apply the condition.
Once the Edit condition panel is closed, click Save again from
the Edit permissions panel to update your allow policy.
Condition editor :
Click the Condition editor tab and either add a new condition
expression or modify the existing condition expression.
After entering your expression, you can optionally choose to validate the
CEL syntax by clicking Run Linter above the text box on the
top-right.
Click Save to apply the condition.
Once the Edit condition panel is closed, click Save again from
the Edit permissions panel to update your allow policy.
Allow policies are set using the read-modify-write pattern.
Execute the gcloud projects get-iam-policy command to get
the current allow policy for the project. In the following example, the JSON
version of the allow policy is downloaded to a path on disk.
Command:
gcloud projects get-iam-policy project-id --format json > file-path
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
"role" : "roles/bigquery.dataViewer" ,
"condition" : {
"title" : "Duration_3_months" ,
"description" : "Expires in 3 months on 2019-10-12" ,
"expression" :
"request.time > timestamp(\"2019-07-12T07:00:00.000Z\") && request.time < timestamp(\"2019-10-12T07:00:00.000Z\")"
}
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 3
}
In this example, we will update the title ,
description , and timestamp values in the expression to change
the duration of the scheduled access condition. Update the following
highlighted portion of the condition (replacing the values with your own):
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
"title" : "Duration_5_months" ,
"description" : "Expires in 5 months on 2020-01-12" ,
"expression" :
"request.time > timestamp('2019-07-12T07:00:00.000Z') && request.time < timestamp('2020-01-12T07:00:00.000Z')"
}
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 3
}
Next, set the new allow policy by executing the
gcloud projects set-iam-policy command.
gcloud projects set-iam-policy project-id file-path
The updated allow policy is applied, and fatima@example.com 's role binding
will expire at the new time.
Use the read-modify-write pattern to modify the conditional
role binding.
First, read the allow policy for the project:
The Resource Manager API's
projects.getIamPolicy
method gets a project's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
HTTP method and URL:
POST https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": 3
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
"condition": {
"title": "Duration_3_months",
"description": "Expires in 3 months on 2019-10-12",
"expression":
"request.time > timestamp(\"2019-07-12T07:00:00.000Z\") && request.time < timestamp(\"2019-10-12T07:00:00.000Z\")"
},
"members": [
"group:my-group@example.com"
]
}
]
}
Next, modify the conditional role binding in the allow policy. In this
example, we will update the timestamp values to change the duration of the
scheduled access condition. Update the following highlighted portion of the
condition expression (replacing the timestamp with your own):
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
"condition" : {
"title" : "Duration_5_months" ,
"description" : "Expires in 5 months on 2020-01-12" ,
"expression" :
"request.time > timestamp('2019-07-12T07:00:00.000Z') && request.time < timestamp('2020-01-12T07:00:00.000Z')"
},
"members" : [
"group:my-group@example.com"
]
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
"condition": {
"title": "Duration_5_months",
"description": "Expires in 5 months on 2020-01-12",
"expression":
"request.time > timestamp('2019-07-12T07:00:00.000Z') && request.time < timestamp('2020-01-12T07:00:00.000Z')"
},
"members": [
"group:my-group@example.com"
],
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
Remove a condition from a role binding
Removing a condition from a role binding doesn't revoke the role. Instead, it
lets all principals in that role binding use the permissions in the role
unconditionally.
This section shows you how to remove a time-based
condition in an allow policy using the
Google Cloud console, the Google Cloud CLI, and the REST API.
To remove a condition from a role binding in an allow policy:
Console gcloud REST
More
In the Google Cloud console, go to the IAM page.
Go to the IAM page
From the list of principals, locate the desired principal and click the
edit
button.
From the Edit permissions panel, locate the desired role binding. Then
under IAM condition (optional) , click the name of an existing condition.
In the Edit condition panel, click the
delete button to remove the condition. You will be prompted to
confirm deletion of the condition.
Once the Edit condition panel is closed, click Save again from the
Edit permissions panel to update your allow policy.
Allow policies are set using the read-modify-write pattern.
Execute the gcloud projects get-iam-policy command to get
the current allow policy for the project. In the following example, the JSON
version of the allow policy is downloaded to a path on disk.
Command:
gcloud projects get-iam-policy project-id --format json > file-path
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
"role" : "roles/bigquery.dataViewer" ,
"condition" : {
"title" : "Duration_3_months" ,
"description" : "Expires in 3 months on 2019-10-12" ,
"expression" :
"request.time > timestamp(\"2019-07-12T07:00:00.000Z\") && request.time < timestamp(\"2019-10-12T07:00:00.000Z\")"
}
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 3
}
To remove the conditional role binding from the allow policy, remove the
condition block as shown below:
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
}
],
"etag" : "BwWKmjvelug=" ,
"version" : 3
}
Note that the version is still set to 3 , despite
the fact that unconditional role bindings only require a version
1 allow policy. We recommend that you always use the
highest version number when setting an allow policy, both for conditional role
bindings and unconditional role bindings. See
version requirements for more information. The
gcloud CLI updates the version number for the allow policy
automatically.
Next, set the updated allow policy by executing the
gcloud projects set-iam-policy command:
gcloud projects set-iam-policy project-id file-path
The updated allow policy is applied, removing the conditional role binding for
fatima@example.com . The role binding will no longer expire.
Use the read-modify-write pattern to remove the conditional
role binding.
First, read the allow policy for the project:
The Resource Manager API's
projects.getIamPolicy
method gets a project's allow policy.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
HTTP method and URL:
POST https://cloudresourcemanager.googleapis.com/v1/projects/ PROJECT_ID :getIamPolicy
Request JSON body:
{
"options": {
"requestedPolicyVersion": 3
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
"condition": {
"title": "Duration_3_months",
"description": "Expires in 3 months on 2019-10-12",
"expression":
"request.time > timestamp(\"2019-07-12T07:00:00.000Z\") && request.time < timestamp(\"2019-10-12T07:00:00.000Z\")"
},
"members": [
"group:my-group@example.com"
]
}
]
}
Next, modify the allow policy by removing the conditional role binding:
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
]
}
]
}
Note that the version is still set to 3 , despite
the fact that unconditional role bindings only require a version
1 allow policy. We recommend that you always use the
highest version number when setting an allow policy, both for conditional role
bindings and unconditional role bindings. See
version requirements for more information.
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
]
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
Attribute reference for IAM Conditions
Resource types that accept conditional role bindings
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
