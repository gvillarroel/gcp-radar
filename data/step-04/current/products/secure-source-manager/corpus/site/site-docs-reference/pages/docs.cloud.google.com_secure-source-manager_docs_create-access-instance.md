---
title: "Quickstart: Create and access an instance \_|\_ Secure Source Manager \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/create-access-instance
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs/create-access-instance
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/create-access-instance
  title: "Quickstart: Create and access an instance \_|\_ Secure Source Manager \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and access an instance
Create a Secure Source Manager instance and access its web interface to
prepare for creating repositories and granting users access.
Note: Secure Source Manager doesn't support domain-scoped projects. If your
project ID contains a colon ( : ), you must create a new project before using
Secure Source Manager.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Verify that billing is enabled for your Google Cloud project .
Enable the Secure Source Manager API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable securesourcemanager.googleapis.com
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Verify that billing is enabled for your Google Cloud project .
Enable the Secure Source Manager API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable securesourcemanager.googleapis.com
Required roles
To get the permissions that
you need to create a Secure Source Manager instance,
ask your administrator to grant you the
Instance Owner ( roles/securesourcemanager.instanceOwner )
IAM role on the Google Cloud project.
Note: The
Secure Source Manager Admin role ( roles/securesourcemanager.admin ) or
IAM basic role of Owner
( roles/owner ) on your project also contains permissions to create
an instance. You shouldn't grant administrator roles or basic roles in a
production environment, but you can grant them in a development or test
environment.
Secure Source Manager roles don't appear in the Google Cloud console until
they have been granted to a principal. To grant a Secure Source Manager role
for the first time, see
Grant and revoke IAM roles .
Create an instance
Run the following command to create an instance named my-instance in the
us-central1 location . You might be asked to
authenticate to the gcloud CLI.
gcloud source-manager instances create my-instance \
--region = us-central1
Where:
my-instance is the name of the instance.
us-central1 is the region where you are creating the instance.
A long-running create instance operation starts. The output looks similar to
the following:
Create request issued for [ my - instance ].
done : false
metadata :
'@ type ' : type . googleapis . com / google . cloud . securesourcemanager . v1 . OperationMetadata
apiVersion : v1
createTime : ' 2023 - 02 - 27 T20 : 57 : 52.315609549 Z '
requestedCancellation : false
target : projects / PROJECT_ID / locations / us - central1 / instances / my - instance
verb : create
name : projects / PROJECT_ID / locations / us - central1 / operations / operation - 1234567894561 - 5 ec69948c0f2b - 60 dd727f - a9b97a2e
Where:
projects/ PROJECT_ID /locations/us-central1/operations/operation-1234567894561-5ec69948c0f2b-60dd727f-a9b97a2e
is the OPERATION_NAME .
PROJECT_ID is your project ID.
It takes up to 60 minutes to create the instance.
Note the OPERATION_NAME as you will need to use it to check the
status of the operation.
Check the status of the create operation by running the following command:
gcloud source-manager operations describe OPERATION_NAME \
--region = us-central1
Replace the following:
OPERATION_NAME with the operation name from your create
command response.
Once the instance is ready, the response will look similar to the following:
{
"name" : "projects/ PROJECT_ID /locations/us-central1/operations/operation-123456789012-5ec69948c0f2b-60dd727f-a9b97a2e" ,
"metadata" : {
"@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata" ,
"createTime" : "2022-11-01T14:31:32.420469714Z" ,
"endTime" : "2022-11-01T14:48:34.140378114Z" ,
"target" : "projects/ PROJECT_ID /locations/us-central1/instances/my-instance" ,
"verb" : "create" ,
"requestedCancellation" : false ,
"apiVersion" : "v1"
},
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.Instance" ,
"name" : "projects/ PROJECT_ID /locations/us-central1/instances/my-instance" ,
"createTime" : "2022-11-01T14:31:32.416413630Z" ,
"updateTime" : "2022-11-01T14:31:32.416413630Z"
},
"state" : "ACTIVE" ,
"hostConfig" : {
"html" : "my-instance-098765432109.us-central1.sourcemanager.dev" ,
"api" : "my-instance-098765432109-api.us-central1.sourcemanager.dev" ,
"gitHttp" : "my-instance-098765432109-git.us-central1.sourcemanager.dev"
}
}
}
Where:
my-instance-098765432109.us-central1.sourcemanager.dev is the
instance HTML URL.
PROJECT_ID is your project ID.
Note: It's possible for the status check to report completion before the
instance is fully operational. If you encounter errors accessing the
instance after creation, wait 60 minutes and try again before reaching
out for assistance via Secure Source Manager Support at
secure-source-manager-support@google.com .
Copy the HTML URL from the successfully created check status command. You
will need this URL to access the instance via web browser.
Access an instance
After the instance is created, you can access the instance via its web interface
using a browser.
Note: To create repositories in the
instance you need the Repo Creator role
( roles/securesourcemanager.repoCreator ) on the instance project and the
Instance Repository Creator role
( roles/securesourcemanager.instanceRepositoryCreator ) on the Secure Source Manager
instance.
To get the HTML URL for your instance, run the following command again:
gcloud source-manager operations describe OPERATION_NAME \
--region = us-central1
Copy the HTML URL from the successful response from the
gcloud source-manager operations describe command into your browser
address bar.
An Oauth 2.0 screen appears asking if you want to give sourcemanager.dev
access to your Google Cloud account.
Click the Allow button.
The Secure Source Manager web interface opens. You can create and view
repositories and all associated issues and pull requests from the web
interface.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Create and clone a repository
Grant users instance access
Add repository users
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
