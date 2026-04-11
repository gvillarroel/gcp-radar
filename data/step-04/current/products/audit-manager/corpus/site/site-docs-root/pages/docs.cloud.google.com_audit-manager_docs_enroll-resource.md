---
title: "Enroll a resource for auditing \_|\_ Audit Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/audit-manager/docs/enroll-resource
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/audit-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/audit-manager/docs/enroll-resource
  title: "Enroll a resource for auditing \_|\_ Audit Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Audit Manager
Guides
Send feedback
Enroll a resource for auditing
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to enroll an organization, a folder, or a project as a
resource for auditing in Audit Manager.
Enrollment accomplishes the following tasks:
A Google-managed service agent
associated with Audit Manager is created, which monitors the
specified resource on your behalf. The service agent's email address uses the
following format, where RESOURCE_ID is the organization ID, folder ID,
or project ID.
RESOURCE_ID @gcp-sa-audit-manager.iam.gserviceaccount.com
Revoking this service agent's roles can cause Audit Manager to stop
auditing the resource.
The specified Cloud Storage buckets are configured as the destination
to store the audit data.
When you enroll a resource, its child resources are also enrolled. For example,
if you enroll an organization, any projects within that organization are also enrolled.
If a parent resource is already enrolled and you attempt to enroll
one of its child resources, then the child resource is enrolled independently.
Before you begin
Ensure that you have the following IAM roles and permissions:
Audit Manager Admin ( roles/auditmanager.admin ).
Storage Admin ( roles/storage.admin ) or Storage Legacy Bucket Owner ( roles/storage.legacyBucketOwner )
To enroll an organization or a folder, you must have the following additional permissions:
Organization: resourcemanager.organizations.setIamPolicy
Folder: resourcemanager.folders.setIamPolicy
Identify or create Cloud Storage buckets where the
audit data needs to be exported.
To learn about how to create Cloud Storage buckets,
see Create a bucket .
Enroll a resource for auditing
You can enroll an organization, a folder, or a project for auditing in
Audit Manager.
The simplest way to enroll a resource is through the Google Cloud console.
Alternatively, you can use the Audit Manager API or the Google Cloud CLI.
Console
In the Google Cloud console, go to the Audit Manager page.
Go to Audit Manager
Click settings Settings .
Depending on the resource you have
selected in the project selector, a list of folders
or projects are displayed on the Settings page.
On the Settings page, select the resource that you want to enroll
for Audit Manager, click
settings Enroll in the
Status column.
In the Select storage bucket details dialog, select one or more
Cloud Storage buckets where you want to save your reports and
evidence, and click Enroll .
Your resource is now enrolled for auditing.
gcloud
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : The type of
resource. Possible values are organization , folder , and
project .
RESOURCE_ID : The resource ID of the
organization, folder, or project. For example: 8767234 .
BUCKET_URI : The URI of the
Cloud Storage bucket. For example: gs://testbucketauditmanager .
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
gcloud audit-manager enrollments add \
-- RESOURCE_TYPE = RESOURCE_ID \
--eligible-gcs-buckets = BUCKET_URI
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud audit-manager enrollments add `
-- RESOURCE_TYPE = RESOURCE_ID `
--eligible-gcs-buckets = BUCKET_URI
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud audit-manager enrollments add ^
-- RESOURCE_TYPE = RESOURCE_ID ^
--eligible-gcs-buckets = BUCKET_URI
REST
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : The type of
resource. Possible values are organizations , folders , and
projects .
RESOURCE_ID : The resource ID of the
organization, folder, or project. For example: 8767234 .
BUCKET_URI : The URI of the
Cloud Storage bucket. For example: gs://testbucketauditmanager .
HTTP method and URL:
POST https://auditmanager.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID /locations/global:enrollResource
Request JSON body:
{
"destinations": [
{
"eligibleGcsBucket": " BUCKET_URI "
}
]
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://auditmanager.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID /locations/global:enrollResource"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://auditmanager.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID /locations/global:enrollResource" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Note: If you experience issues when enrolling a resource, see
Troubleshoot enrollment issues .
If you want to change the storage location for audit data after enrollment,
you need to update enrollment of your resource and specify the new storage
locations. The previous enrollment and storage locations are overwritten by
the new request.
What's next
Create a custom compliance framework .
Run an audit .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
