---
title: "Attach service accounts to resources \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/attach-service-accounts
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/attach-service-accounts
  title: "Attach service accounts to resources \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Attach service accounts to resources | Identity and Access Management (IAM) | Google Cloud Documentation
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
Configure your organization policies
Configure the service account Configure for a resource in the same project
Configure for a resource in a different project
Attach the service account to a resource
Enable service accounts to be attached across projects
Disable service accounts from being attached across projects
Audit logs for attaching service accounts
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Attach service accounts to resources
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Configure your organization policies
Configure the service account Configure for a resource in the same project
Configure for a resource in a different project
Attach the service account to a resource
Enable service accounts to be attached across projects
Disable service accounts from being attached across projects
Audit logs for attaching service accounts
What's next
For some Google Cloud resources, you can specify a user-managed service account that the
resource uses as its default identity. This process is known as attaching the service
account to the resource, or associating the service account with the resource.
When code running on the resource accesses Google Cloud services and resources, it uses the
service account attached to the resource as its identity. For example, if you attach a
service account to a Compute Engine instance , and the applications on the instance use a client library to call Google Cloud APIs,
those applications automatically use the attached service account for authentication and
authorization.
This page describes how to configure service accounts so that you can attach
them to resources.
Before you begin
Enable the IAM and Resource Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure you understand how service accounts work in
IAM.
Required roles
To get the permission that
you need to attach a service account to a resource,
ask your administrator to grant you the
Service Account User ( roles/iam.serviceAccountUser )
IAM role on the service account.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
iam.serviceAccounts.actAs
permission,
which is required to
attach a service account to a resource.
You might also be able to get
this permission
with custom roles or
other predefined roles .
Configure your organization policies
Depending on the location of the service account that you want to attach to the
resource, you might need to update your project's organization
policies before attaching the service account:
If the service account is in the same project as the resource that you want to
attach it to, then you don't need to update your project's organization
policies.
If the service account is in a different project than the resource that you
want to attach it to, then you need to update the organization policies for
the project containing the service account. For details, see Enable service
accounts to be attached across projects on this
page.
This might be the case if, for example, you create all of your service
accounts in a single project .
Configure the service account
Before you attach a service account to a resource, you must configure the
service account. This process differs depending on whether the service account
and the resource are in the same project or in different projects. After you
configure the service account, you can create the resource and attach the
service account to that resource.
Configure for a resource in the same project
Before you attach a service account to another resource in the same project,
grant roles to the service account so it can
access the appropriate resources, just as you would grant roles to any other
principal.
Configure for a resource in a different project
In some cases, you might need to attach a service account to a resource that is
located in a different project. For example, if you
create all of your service accounts in a single project , you
might need to attach one of them to a new resource in a different project.
Before you attach a service account to a resource in another project, do the
following:
In the project where the service account is located, follow the steps on
this page to
enable service accounts to be attached across projects .
Identify the project where you will create the resource.
Identify the type of resource that you will attach the service account to,
as well as the service that owns that type of resource.
For example, if you are creating a Pub/Sub subscription, then
Pub/Sub is the service that owns the resource.
Find the email address of the service agent for the service.
Different services use different service agents. For details, see
Service agents .
Note: Some services, including Dataflow, Dataproc, and
Google Kubernetes Engine, can create Compute Engine instances or depend on
Compute Engine in another way. For these services, you must find the
email addresses for multiple service agents: one for Compute Engine,
and another for the service that deploys the instances.
Grant the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) to the service agents:
Console gcloud REST
More
In the Google Cloud console, go to the Service accounts page.
Go to Service
accounts
Select the project that owns the service account that you will attach to a
resource.
Click the email address of the service account that you will attach to a
resource.
Go to the Principals with access tab.
Click person_add
Grant access , and then enter the email address of the service agent.
Click Select a role , type Service Account Token Creator , and click
the role.
Click Save to save your changes.
Optional: If you need to grant the role to another service agent, repeat the
previous steps.
Use the
gcloud iam service-accounts add-iam-policy-binding
command:
gcloud iam service-accounts add-iam-policy-binding \
SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--member = serviceAccount: SERVICE_AGENT_EMAIL \
--role = roles/iam.serviceAccountTokenCreator
Replace the following values:
SERVICE_ACCOUNT_NAME : The name of the user-managed
service account that you are attaching to a resource.
PROJECT_ID : The project ID where the user-managed
service account is located.
SERVICE_AGENT_EMAIL : The email address for the service
agent.
The command prints the updated allow policy for the user-managed service
account.
Optional: If you need to grant the role to another service agent, run the
command again.
To grant this role, use the read-modify-write pattern to update the allow policy
for your user-managed service account.
First, read the allow policy for the user-managed service account:
The
projects.serviceAccounts.getIamPolicy
method returns the allow policy for the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
USER_SA_NAME : The name of the user-managed service account that you are
binding to a resource.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ USER_SA_NAME @ PROJECT_ID .iam.gserviceaccount.com:getIamPolicy
Request JSON body:
{
"requestedPolicyVersion": 3
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ USER_SA_NAME @ PROJECT_ID .iam.gserviceaccount.com:getIamPolicy"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ USER_SA_NAME @ PROJECT_ID .iam.gserviceaccount.com:getIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWl3KCTUMY=",
"bindings": [
{
"role": "roles/iam.serviceAccountUser",
"members": [
"serviceAccount:my-service-account@my-project.iam.gserviceaccount.com"
]
}
]
}
Next, modify the allow policy to grant the Service Account Token Creator role
to the service agent.
{
"version" : 1 ,
"etag" : "BwWl3KCTUMY=" ,
"bindings" : [
{
"role" : "roles/iam.serviceAccountTokenCreator" ,
"members" : [
"serviceAccount: SERVICE_AGENT_EMAIL "
]
},
{
"role" : "roles/iam.serviceAccountUser" ,
"members" : [
"serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com"
]
}
]
}
Replace the following:
SERVICE_AGENT_EMAIL : The email address for the
service agent
SERVICE_ACCOUNT_NAME : The name of the user-managed
service account.
PROJECT_ID : The project ID where the user-managed
service account is located.
Note: If you need to grant the role to more than one service agent, add all of
the service accounts to the members array.
Finally, write the updated allow policy:
The
projects.serviceAccounts.setIamPolicy
method updates the allow policy for your service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
USER_SERVICE_ACCOUNT_NAME : The name of the user-managed service account
that you are binding to a resource.
SERVICE_AGENT_EMAIL : The email address of the service agent that will
create access tokens for your user-managed service account.
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com:setIamPolicy
Request JSON body:
{
"policy": {
"version": 1,
"etag": "BwWl3KCTUMY=",
"bindings": [
{
"role": "roles/iam.serviceAccountTokenCreator",
"members": [
"serviceAccount: SERVICE_AGENT_EMAIL "
]
},
{
"role": "roles/iam.serviceAccountUser",
"members": [
"serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com"
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com:setIamPolicy"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com:setIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"version": 1,
"etag": "BwWo331TkHE=",
"bindings": [
{
"role": "roles/iam.serviceAccountTokenCreator",
"members": [
"serviceAccount: SERVICE_AGENT_EMAIL "
]
},
{
"role": "roles/iam.serviceAccountUser",
"members": [
"serviceAccount:my-service-account@my-project.iam.gserviceaccount.com"
]
}
]
}
Attach the service account to a resource
After you configure the user-managed service account, you can create a new
resource and attach the service account to that resource. Make sure you create
the new resource in the appropriate project.
In most cases, you must attach a service account to a resource when you create
that resource. After the resource is created, you cannot change which service
account is attached to the resource. Compute Engine instances are an
exception to this rule; you can
change which service account is attached to an instance
as needed.
See the instructions for the type of resource that you want to create:
Attaching a service account when creating a resource
AI Platform Prediction
Model
versions
AI Platform Training
Jobs
App Engine standard environment
App versions
App Engine flexible environment
App versions
Cloud Composer
Environments
Cloud Run functions
Cloud Run function
Cloud Run
Services
Cloud Scheduler
Jobs
Cloud Source Repositories
Project
configs
Pub/Sub configuration for
repos
Compute Engine
Instances
Instance templates
Dataproc
Clusters
Google Kubernetes Engine
Clusters
Node pools
Notebooks
Notebook
instances
Pub/Sub
Subscriptions
After you have created the resource and attached the service account to that
resource, you can grant roles to the service account so it can access the
appropriate resources. This process is the same as granting a role to any other
principal.
To learn how to grant roles, see
Granting, changing, and revoking access to resources .
Enable service accounts to be attached across projects
If you want to let users attach service accounts in one project to resources in
another project, you must update the organization policies for the
project that contains the service accounts. Check the following boolean
constraints in the organization policies for that project:
Important: After you update your organization policies, we strongly discourage
you from undoing the changes, especially in production environments. If you undo
the changes, your Google Cloud resources might not work correctly.
Ensure that the iam.disableCrossProjectServiceAccountUsage boolean
constraint is not enforced for the project.
This boolean constraint controls whether you can attach a service account to
a resource in another project. It is enforced by default and can only be
configured at the project level, not the folder or organization level.
When this constraint is not enforced, IAM adds a
project lien that prevents the project from being deleted.
This lien has the origin
iam.googleapis.com/cross-project-service-accounts . We strongly discourage
you from deleting this lien.
Recommended: Ensure that the
iam.restrictCrossProjectServiceAccountLienRemoval boolean constraint is
enforced for the project.
This boolean constraint ensures that principals can remove the project lien
only if they have the resourcemanager.projects.updateLiens permission at
the organization level. If this constraint is not enforced, principals can
remove the project lien if they have this permission at the project level.
To learn how to view or change a boolean constraint in an organization
policy, see Creating and managing organization policies .
Disable service accounts from being attached across projects
If you previously enabled service accounts to be attached across
projects , we strongly discourage you from
disabling this feature, especially in production environments.
Caution: If you disable service accounts from being attached across projects,
your Google Cloud resources might not work correctly.
Specifically, in the project where your service accounts are located, you
shouldn't make any of these changes:
Don't update the project's organization policies to enforce the
iam.disableCrossProjectServiceAccountUsage boolean constraint.
Don't update the project's organization policies to not enforce the
iam.restrictCrossProjectServiceAccountLienRemoval boolean constraint.
Don't remove the project lien with the origin
iam.googleapis.com/cross-project-service-accounts , which prevents you from
deleting the project.
Don't delete the project.
If you are willing to accept the risk of disabling this feature, you can reduce
your risk by disabling the service accounts that you are using
across projects, then monitoring your Google Cloud environment for issues.
If you see any issues, you can re-enable the service accounts . If
you don't see any issues, then you might not have any Google Cloud
resources that depend on a service account in a different project.
Audit logs for attaching service accounts
When a principal uses the iam.serviceAccounts.actAs permission to attach a
service account to a resource, IAM generates an audit log. This
audit log contains the following information:
The email address of the principal that attached the service account to the
resource
Details about the service account that was attached to the resource
For a list of resources that you can attach service accounts to, see Attach the
service account to the new resource on this page.
For an example of this type of audit log, see Logs for using the
iam.serviceAccounts.actAs permission . To learn more about
audit logs in general, see Cloud Audit Logs overview .
What's next
Find out how to attach a service account to a Compute Engine
instance .
Review and apply best practices for securing service accounts .
Learn more about audit logging for IAM .
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
