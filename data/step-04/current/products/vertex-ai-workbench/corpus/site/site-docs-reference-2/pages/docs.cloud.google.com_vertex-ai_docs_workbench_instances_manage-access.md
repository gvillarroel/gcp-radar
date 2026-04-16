---
title: "Manage access to a Vertex AI Workbench instance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access
  title: "Manage access to a Vertex AI Workbench instance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Vertex AI Workbench
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage access to an instance
This guide describes how you can grant access to
a specific Vertex AI Workbench instance.
To manage access to Vertex AI resources, see
the Vertex AI page on access control .
You grant access to a Vertex AI Workbench instance by setting an
Identity and Access Management (IAM) policy on the instance.
The policy binds one or more principals, such as a user or a
service account, to one or more
roles .
Each role contains a list of permissions that let the principal interact
with the instance.
You can grant access to an instance, instead of to a parent resource
such as a project, folder, or organization, to exercise the
principle of least privilege .
If you grant access to a
parent resource
(for example, to a project), you implicitly grant access to all its child
resources (for example, to all instances in that project). To limit access to
resources, set IAM policies on lower-level resources when
possible, instead of at the project level or above.
For general information about how to grant, change, and revoke access to
resources unrelated to Vertex AI Workbench, for example, to grant access to
a Google Cloud project, see the IAM documentation for
managing access to projects, folders, and
organizations .
Access limitations
Access to an instance can include a broad range of abilities, depending
on the role you assign to the principal. For example,
you might grant a principal the ability to start, stop, upgrade, and
monitor the health status of an instance. For the complete list of
IAM permissions available, see Predefined
Vertex AI Workbench IAM
roles .
However, even granting a principal full access to
a Vertex AI Workbench instance doesn't grant
the ability to use the instance's JupyterLab interface.
To grant access to the JupyterLab interface, see
Manage access to an instance's
JupyterLab interface .
Grant access to Vertex AI Workbench instances
To grant users permission to access
a specific Vertex AI Workbench instance,
set an IAM policy on the instance.
gcloud
To grant a role to a principal on
a Vertex AI Workbench instance, use the
get-iam-policy
command to retrieve the current policy,
edit the current policy's access, and then use the
set-iam-policy
command to update the policy on the instance.
Retrieve the current policy
Before using any of the command data below,
make the following replacements:
INSTANCE_NAME : the name of your instance
PROJECT_ID : your Google Cloud project ID
LOCATION : the zone where your instance is located
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud workbench instances get-iam-policy INSTANCE_NAME \
--project = PROJECT_ID \
--location = LOCATION
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud workbench instances get-iam-policy INSTANCE_NAME `
--project = PROJECT_ID `
--location = LOCATION
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud workbench instances get-iam-policy INSTANCE_NAME ^
--project = PROJECT_ID ^
--location = LOCATION
The response is the text of your instance's IAM policy.
See the following for an example.
{
"bindings": [
{
"role": "roles/notebooks.viewer",
"members": [
"user:email@example.com"
]
}
],
"etag": "BwWWja0YfJA=",
"version": 3
}
Edit the policy
Edit the policy with a text editor to add or remove principals and their
associated roles. For example, to grant the notebooks.admin role to
eve@example.com , add the following new binding to the policy
in the "bindings" section:
{
"role" : "roles/notebooks.admin" ,
"members" : [
"user:eve@example.com"
]
}
After adding the new binding, the policy might look like the following:
{
"bindings" : [
{
"role": "roles/notebooks.viewer",
"members": [
"user:email@example.com"
]
} ,
{
"role" : "roles/notebooks.admin" ,
"members" : [
"user:eve@example.com"
]
}
] ,
"etag" : "BwWWja0YfJA=" ,
"version" : 3
}
Save the updated policy in a file named request.json .
Update the policy on the instance
In the body of the request, provide the updated IAM
policy from the previous step, nested inside a "policy" section.
Before using any of the command data below,
make the following replacements:
INSTANCE_NAME : the name of your instance
PROJECT_ID : your Google Cloud project ID
LOCATION : the zone where your instance is located
Save the following content in a file called request.json :
{
"policy" : {
"bindings" : [
{
"role" : "roles/notebooks.viewer" ,
"members" : [
"user:email@example.com"
]
},
{
"role" : "roles/notebooks.admin" ,
"members" : [
"user:eve@example.com"
]
}
],
"etag" : "BwWWja0YfJA=" ,
"version" : 3
}
}
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud workbench instances set-iam-policy INSTANCE_NAME \
--project = PROJECT_ID \
--location = LOCATION \
request.json --format = json
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud workbench instances set-iam-policy INSTANCE_NAME `
--project = PROJECT_ID `
--location = LOCATION `
request.json --format = json
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud workbench instances set-iam-policy INSTANCE_NAME ^
--project = PROJECT_ID ^
--location = LOCATION ^
request.json --format = json
Grant access to the JupyterLab interface
Granting a principal access to
a Vertex AI Workbench instance doesn't grant
the ability to use the instance's JupyterLab interface.
To grant access to the JupyterLab interface, see Manage access to a
Vertex AI Workbench instance's
JupyterLab interface .
API
To grant a role to a principal on
a Vertex AI Workbench instance, use the
getIamPolicy
method to retrieve the current policy,
edit the current policy's access, and then use the
setIamPolicy
method to update the policy on the instance.
Retrieve the current policy
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID
LOCATION : the zone where your instance is located
INSTANCE_NAME : the name of your instance
HTTP method and URL:
GET https://notebooks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_NAME :getIamPolicy
To send your request, choose one of these options:
curl
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://notebooks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_NAME :getIamPolicy"
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://notebooks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_NAME :getIamPolicy" | Select-Object -Expand Content
The response is the text of your instance's IAM policy.
See the following for an example.
{
"bindings": [
{
"role": "roles/notebooks.viewer",
"members": [
"user:email@example.com"
]
}
],
"etag": "BwWWja0YfJA=",
"version": 3
}
Edit the policy
Edit the policy with a text editor to add or remove principals and their
associated roles. For example, to grant the notebooks.admin role to
eve@example.com, add the following new binding to the policy
in the "bindings" section:
{
"role" : "roles/notebooks.admin" ,
"members" : [
"user:eve@example.com"
]
}
After adding the new binding, the policy might look like the following:
{
"bindings" : [
{
"role": "roles/notebooks.viewer",
"members": [
"user:email@example.com"
]
} ,
{
"role" : "roles/notebooks.admin" ,
"members" : [
"user:eve@example.com"
]
}
] ,
"etag" : "BwWWja0YfJA=" ,
"version" : 3
}
Update the policy on the instance
In the body of the request, provide the updated IAM
policy from the previous step, nested inside a "policy" section.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID
LOCATION : the zone where your instance is located
INSTANCE_NAME : the name of your instance
HTTP method and URL:
POST https://notebooks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_NAME :setIamPolicy
Request JSON body:
{
"policy": {
"bindings": [
{
"role": "roles/notebooks.viewer",
"members": [
"user:email@example.com"
]
},
{
"role": "roles/notebooks.admin",
"members": [
"user:eve@example.com"
]
}
],
"etag": "BwWWja0YfJA=",
"version": 3
}
}
To send your request, choose one of these options:
curl
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://notebooks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_NAME :setIamPolicy"
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://notebooks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_NAME :setIamPolicy" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Grant access to the JupyterLab interface
Granting a principal access to
a Vertex AI Workbench instance doesn't grant
the ability to use the instance's JupyterLab interface.
To grant access to the JupyterLab interface, see
Manage access to an instance's
JupyterLab interface .
What's next
Grant a principal access to
JupyterLab.
To learn about Identity and Access Management (IAM) and how
IAM roles can help grant and restrict access,
see the IAM documentation .
Learn about the IAM roles available
to Vertex AI Workbench .
Learn how to create and manage
custom roles .
To learn how to grant access to other Google resources, see
Manage access to
other resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
