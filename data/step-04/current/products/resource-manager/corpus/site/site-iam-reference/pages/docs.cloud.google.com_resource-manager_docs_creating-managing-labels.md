---
title: "Create and update labels for projects \_|\_ Resource Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/access-control-folders
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels
  title: "Create and update labels for projects \_|\_ Resource Manager \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Create and update labels for projects
Stay organized with collections
Save and categorize content based on your preferences.
This document provides details on how to create and update
labels for projects using the Resource Manager API and the Google Cloud console. It provides
details on how to understand costs using labels and the services that support labels.
Note: For more information about adding or updating labels on specific resources,
such as Compute Engine instance and Cloud Storage buckets, see the
corresponding product documentation of the resource.
Create labels for projects
Console
To add labels to a single project:
Open the Labels page in the Google Cloud console.
Open the Labels page
Select your project from the Select a project drop-down.
To add a new label entry, click + Add label and enter a label key and
value for each label you want to add.
When you're finished adding labels, click Save .
To add labels for more than one project at the same time:
Open the Manage resources page in the Google Cloud console.
Open the Manage resources page
On the Manage resources page, select the projects for
which you want to add labels.
In the info panel, in the Labels tab, click + Add label and
enter a label key and value for each label you want to add.
When you're finished adding labels, click Save .
After you add labels, you can filter projects by typing a label key or value in
the filter box above the projects list. The filter box will suggest keys and
values so you can preview results.
REST
To create a new project with a label, set the labels field when you create
the project.
Request:
POST https://cloudresourcemanager.googleapis.com/v3/projects
{
"labels": {
"color": "red"
},
"name": "myproject",
"projectId": "our-project-123"
}
Response:
{
"projectNumber": "333197460082",
"projectId": "our-project-123",
"lifecycleState": "ACTIVE",
"name": "myproject",
"labels": {
"color": "red"
},
"createTime": "2016-01-12T22:18:28.633Z",
}
To add labels for existing projects:
Get the project using the projects.get() method.
Modify the labels field.
Update the project using the projects.patch() method.
Once you add labels, you can filter projects based on labels. For details about
using labels to filter projects, see Listing Projects .
Python
To authenticate to Resource Manager, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
To create a **new** project with a label, set the `labels` field when you create
the project using the [`projects.create()`][create-client-library-doc] method.
To add labels to an **existing** project:
+ Get the `project` object using the
[`projects.get()`][get-client-library-doc] method.
+ Modify the `labels` field.
+ Call the [`projects.patch()`][patch-client-library-doc] method.
Once you add labels, you can filter projects based on labels. For details about
using labels to filter projects, see [Listing Projects][listing-proj-doc].
-->
Update labels for projects
Console
To update labels for a single project:
Open the Labels page in the Google Cloud console.
Open the Labels page
Select your project from the Select a project drop-down.
Update the labels for your project:
To edit a label, click the value that you want to edit, then
make your desired changes.
To delete a label, hold the pointer over the key or value, then click
delete
.
When you're finished updating labels, click Save .
To update labels for more than one project at the same time:
Open the Manage resources page in the Google Cloud console.
Open the Manage resources page
On the Manage resources page, select the projects for
which you want to update labels.
In the info panel, click the Labels tab and update labels for the
selected projects:
To edit a label, click the value that you want to edit, then
make your desired changes.
To delete a label, hold the pointer over the key or value, then click
delete
.
When you're finished updating labels, click Save .
REST
To update a project's labels, do the following:
Get the project object using the
projects.get()
method.
Modify the labels that you want to update.
Call the projects.patch method.
The following example updates the label color:blue :
The following code snippet changes the value of the color label from blue
to red .
Request:
PATCH https://cloudresourcemanager.googleapis.com/v3/projects/ PROJECT_NAME
{
updateMask=labels
}
Where PROJECT_NAME is the name of the project you want
to update.
Request JSON body:
{
"labels":
{
"color": "red"
}
}
Response:
{
"projects": [
{
"name": "projects/123456789012",
"parent": "folders/123456789012",
"projectId": "my-project",
"state": "ACTIVE",
"displayName": " PROJECT_NAME "
"createTime": "2013-11-13T20:31:53.308Z"
"updateTime": "2013-11-13T20:35:42.308Z"
"etag": "BwWUlZ6XEfY="
"labels": {
"color": "red"
},
}
]
}
Python
To authenticate to Resource Manager, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
To update a project's labels, do the following:
+ Get the `project` object using the
[`projects.get()`][get-client-library-doc] method.
+ Modify the labels that you want to update.
+ Call the [`projects.patch()`][patch-client-library-doc] method.
-->
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
