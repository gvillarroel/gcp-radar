---
title: "Attach service accounts to resources \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/attach-service-accounts
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/attach-service-accounts
  title: "Attach service accounts to resources \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Attach service accounts to resources
Stay organized with collections
Save and categorize content based on your preferences.
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
Note: Some services, including Dataflow, Managed Service for Apache Spark, and
Google Kubernetes Engine, can create Compute Engine instances or depend on
Compute Engine in another way. For these services, you must find the
email addresses for multiple service agents: one for Compute Engine,
and another for the service that deploys the instances.
Grant the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) to the service agents:
Console
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
gcloud
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
REST
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
Managed Service for Apache Spark
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
