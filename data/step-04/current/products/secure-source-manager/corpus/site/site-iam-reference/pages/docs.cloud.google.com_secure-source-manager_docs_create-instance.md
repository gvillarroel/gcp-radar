---
title: "Create a Secure Source Manager instance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/create-instance
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/create-instance
  title: "Create a Secure Source Manager instance \_|\_ Google Cloud Documentation"
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
Create a Secure Source Manager instance
Stay organized with collections
Save and categorize content based on your preferences.
Secure Source Manager is a single-tenant service. A single
Secure Source Manager instance should only include users from one
Google Cloud customer unless multiple companies who have a contractual
relationship need to use a single instance for collaboration.
If you're working with multiple companies and want to collaborate with them on
source code, we recommend you create a separate instance for each company.
To create an instance with VPC Service Controls enabled, see
Configure Secure Source Manager in a VPC Service Controls perimeter .
Note: Secure Source Manager doesn't support domain-scoped projects. If your
project ID contains a colon ( : ), you must create a new project before using
Secure Source Manager.
Before you begin
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Enable the Secure Source Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Enable the Secure Source Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Required roles
To get the permissions that
you need to create a Secure Source Manager instance,
ask your administrator to grant you the
Secure Source Manager Instance Owner ( roles/securesourcemanager.instanceOwner )
IAM role on the Google Cloud project.
Note: The IAM basic role
of Owner ( roles/owner ) on your project also contains permissions to create
an instance. You shouldn't grant basic roles in a production environment, but
you can grant them in a development or test environment.
Secure Source Manager roles don't appear in the Google Cloud console until
they have been granted to a principal. To grant a Secure Source Manager role
for the first time, see
Grant and revoke IAM roles .
Data encryption
By default, Google Cloud automatically
encrypts data at rest using
encryption keys managed by Google. If you have specific compliance or regulatory
requirements related to the keys that protect your data, you can create
Secure Source Manager instances encrypted with
customer-managed encryption keys (CMEK) .
Don't store sensitive data in instance IDs or label key-value pairs as they
are not encrypted with CMEK.
If you are creating your first Secure Source Manager
instance in your project, you will need to manually create the
Secure Source Manager service agent by running the following command:
gcloud beta services identity create \
--service = securesourcemanager.googleapis.com \
--project = PROJECT_ID
Where PROJECT_ID is the project ID of the project where you will
create your Secure Source Manager instance.
After you create the per-product, per-project service account (P4SA), you must
grant the Secure Source Manager Service Agent role
( roles/securesourcemanager.serviceAgent ) to principal
service-PROJECT-NUMBER@gcp-sa-sourcemanager.iam.gserviceaccount.com
or the instance creation will fail.
Create an instance
To create an instance:
gcloud CLI
Run the following command to create an instance. You might be asked to
authenticate to the gcloud CLI.
gcloud source-manager instances create INSTANCE_ID \
--region = LOCATION \
--project = PROJECT_ID \
--kms-key = projects/ KEY_PROJECT /locations/ KEY_LOCATION /keyRings/ KEYRING_NAME /cryptoKeys/ KEY
Where:
INSTANCE_ID is the permanent ID for the instance.
The ID must use only lowercase letters, numbers, and hyphens,
must start with a letter, and cannot be changed after you create
it.
LOCATION is the region where you want to create the
instance. For information on supported locations, see
Locations .
PROJECT_ID is the project ID of the project you want to
create an instance in.
-kms-key is an optional flag. Include if you want to use your own
customer-managed encryption key (CMEK) to create the instance. CMEK
keys must be in the same location that you are creating your instance
in, but can be in a different project. Omit this flag if you want to
use Google default encryption. If you want to encrypt your data
using CMEK , replace the following:
KEY_PROJECT with the project you created your key in.
KEY_LOCATION with location of the key.
KEYRING_NAME with the name of your key ring.
KEY with the name of your key.
A long-running create instance operation starts. The output looks like
the following:
Create request issued for [my-instance].
done: false
metadata:
'@type': type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata
apiVersion: v1
createTime: '2023-02-27T20:57:52.315609549Z'
requestedCancellation: false
target: projects/my-project/locations/us-central1/instances/my-instance
verb: create
name: projects/my-project/locations/us-central1/operations/operation-1234567894561-5ec69948c0f2b-60dd727f-a9b97a2e
Where
projects/my-project/locations/us-central1/operations/operation-1234567894561-5ec69948c0f2b-60dd727f-a9b97a2e
is the OPERATION_NAME .
It takes up to 60 minutes to create the instance.
Note the OPERATION_NAME as you will need to use it to check
the status of the operation.
Check the status of the create operation by running the following
command:
gcloud source-manager operations describe OPERATION_NAME \
--region = LOCATION
Replace the following:
OPERATION_NAME with the operation name from your create
command response.
LOCATION with the region where you want to create the
instance. For information on supported locations, see
Locations .
Once the instance is ready, the response will look similar to the
following:
{
"name" : "projects/my-project/locations/us-central1/operations/operation-123456789012-5ec69948c0f2b-60dd727f-a9b97a2e" ,
"metadata" : {
"@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata" ,
"createTime" : "2022-11-01T14:31:32.420469714Z" ,
"endTime" : "2022-11-01T14:48:34.140378114Z" ,
"target" : "projects/my-project/locations/us-central1/instances/test" ,
"verb" : "create" ,
"requestedCancellation" : false ,
"apiVersion" : "v1"
},
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.Instance" ,
"name" : "projects/my-project/locations/us-central1/instances/test" ,
"createTime" : "2022-11-01T14:31:32.416413630Z" ,
"updateTime" : "2022-11-01T14:31:32.416413630Z" ,
"labels" : {
"ldap" : "user" ,
"source" : "manual"
},
"state" : "ACTIVE" ,
"hostConfig" : {
"html" : "test-098765432109.us-central1.sourcemanager.dev" ,
"api" : "test-098765432109-api.us-central1.sourcemanager.dev" ,
"gitHttp" : "test-098765432109-git.us-central1.sourcemanager.dev"
}
}
}
Where the test-098765432109.us-central1.sourcemanager.dev is the instance
HTML URL.
Note: It's possible for the status check to report completion before the
instance is fully operational. If you encounter errors accessing the
instance after creation, wait 60 minutes and try again before reaching out
for assistance through Secure Source Manager Support at
secure-source-manager-support@google.com .
Copy the HTML URL from the successfully created check status command. You
will need this URL to access the instance though its web interface.
API
Run the following command to create an instance. You might be asked to
authenticate to the gcloud CLI.
curl \
-X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \
https://securesourcemanager.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances?instance_id = INSTANCE_ID \
-H "Content-Type: application/json" \
-d '{ "kms_key":"projects/ KEY_PROJECT /locations/ KEY_LOCATION /keyRings/ KEYRING_NAME /cryptoKeys/ KEY "}'
Where:
INSTANCE_ID is the permanent ID for the instance.
The ID must use only lowercase letters, numbers, and hyphens,
and must start with a letter.
LOCATION is the region where you want to create the instance.
For information on supported locations, see
Locations .
PROJECT_ID is the project ID of the project you want to
create an instance in.
-d is an optional HTTP POST data flag that can be used to specify a
CMEK key to encrypt your instance. Omit this flag if you want to use the
default Google encryption. If you want to encrypt your data
using CMEK , replace the following:
KEY_PROJECT with the project you created your key in.
KEY_LOCATION with location of the key.
KEYRING_NAME with the name of your key ring.
KEY with the name of your key.
A long-running create instance operation starts. The output looks like
the following:
{
"name" : "projects/my-project/locations/us-central1/operations/operation-1234567894561-5ec69948c0f2b-60dd727f-a9b97a2e" ,
"metadata" : {
"@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata" ,
"createTime" : "2022-11-01T14:31:32.420469714Z" ,
"target" : "projects/my-project/locations/us-central1/instances/test" ,
"verb" : "create" ,
"requestedCancellation" : false ,
"apiVersion" : "v1"
},
"done" : false
}
Where
projects/my-project/locations/us-central1/operations/operation-1234567894561-5ec69948c0f2b-60dd727f-a9b97a2e
is the OPERATION_NAME .
It takes up to 60 minutes to create the instance.
Copy the OPERATION_NAME .
Check the status of the create operation by running the following command:
curl \
-X GET \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
https://securesourcemanager.googleapis.com/v1/ OPERATION_NAME
Where OPERATION_NAME is the operation name from the response to
your create command.
Once the instance is ready, the response will look similar to the
following:
{
"name" : "projects/my-project/locations/us-central1/operations/operation-123456789012-5ec69948c0f2b-60dd727f-a9b97a2e" ,
"metadata" : {
"@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata" ,
"createTime" : "2022-11-01T14:31:32.420469714Z" ,
"endTime" : "2022-11-01T14:48:34.140378114Z" ,
"target" : "projects/my-project/locations/us-central1/instances/test" ,
"verb" : "create" ,
"requestedCancellation" : false ,
"apiVersion" : "v1"
},
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.Instance" ,
"name" : "projects/my-project/locations/us-central1/instances/test" ,
"createTime" : "2022-11-01T14:31:32.416413630Z" ,
"updateTime" : "2022-11-01T14:31:32.416413630Z" ,
"labels" : {
"ldap" : "user" ,
"source" : "manual"
},
"state" : "ACTIVE" ,
"hostConfig" : {
"html" : "test-098765432109.us-central1.sourcemanager.dev" ,
"api" : "test-098765432109-api.us-central1.sourcemanager.dev" ,
"gitHttp" : "test-098765432109-git.us-central1.sourcemanager.dev"
}
}
}
Where the test-098765432109.us-central1.sourcemanager.dev is the instance
HTML URL.
Note: It's possible for the status check to report completion before the
instance is fully operational. If you encounter errors accessing the
instance after creation, wait 60 minutes and try again before reaching out
for assistance using Secure Source Manager Support at
secure-source-manager-support@google.com .
Copy the HTML URL from the successfully created check status command. You
will need this URL to access the instance through its web interface.
Terraform
To create a Secure Source Manager instance with Terraform, use the
google_secure_source_manager_instance
resource.
Access an instance
After the instance is created, you can access it through its web interface using
a browser.
To create repositories in the instance
you need the Repo Creator role ( roles/securesourcemanager.repoCreator ) on the
instance project and the Instance Repository Creator role
( roles/securesourcemanager.instanceRepositoryCreator ) on the Secure Source Manager
instance.
To access the Secure Source Manager instance through its web interface, copy the following URL
into your browser address bar.
INSTANCE_ID - PROJECT_NUMBER . LOCATION .sourcemanager.dev
Replace the following:
INSTANCE_ID with the instance name.
PROJECT_NUMBER with the instance's Google Cloud
project number. For information on identifying projects, see
Identifying projects .
LOCATION with the instance's region.
An OAuth screen appears asking if you want to give sourcemanager.dev
access to your Google Account.
Click the Allow button.
The Secure Source Manager web interface opens. You can create and view
repositories and all associated issues and pull requests from the web
interface.
What's next
Grant users instance access .
Create and clone a repository .
Grant users repository access .
Control access with IAM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
