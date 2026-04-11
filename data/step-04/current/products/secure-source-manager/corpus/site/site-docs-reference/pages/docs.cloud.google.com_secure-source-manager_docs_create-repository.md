---
title: "Create a repository \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/create-repository
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs/create-access-instance
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/create-repository
  title: "Create a repository \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation"
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
Create a repository
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a repository using the
Secure Source Manager web interface or Secure Source Manager API.
If your Secure Source Manager instance hasn't been created yet, see
Create a Secure Source Manager instance to get
started.
Before you begin
Create or request access to a Secure Source Manager instance. For more
information, see
Create a Secure Source Manager instance .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Install the beta Google Cloud CLI component:
gcloud components install alpha
Required roles
To get the permissions that
you need to create a repository,
ask your administrator to grant you the
following IAM roles:
Secure Source Manager Instance Repository Creator role ( roles/securesourcemanager.instanceRepositoryCreator )
on the Secure Source Manager instance
Secure Source Manager Repo Creator role ( roles/securesourcemanager.repoCreator )
on the instance project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For information on granting Secure Source Manager roles,
see Access control with IAM and
Grant users instance access .
Create a repository
Web interface
To access the Secure Source Manager instance through its web interface, copy the following URL
into your browser address bar.
INSTANCE_ID - PROJECT_NUMBER . LOCATION .sourcemanager.dev
Replace the following:
INSTANCE_ID with the instance name.
PROJECT_NUMBER with the instance's Google Cloud
project number. For information on identifying projects, see
Identifying projects .
LOCATION with the instance's region.
Authenticate using your Secure Source Manager credentials if needed.
Click the + Create new repository icon in the top right of the
navigation menu.
Fill out the repository details:
Repository ID : Enter a name for the repository.
Note: Repository IDs must follow the
resource naming convention .
They must include only lower case letters, numbers, or dashes, must
begin with a letter, and cannot be changed after creating the
repository.
Description : Optional. Description of the repository.
Caution: Don't put sensitive or identifying data in the description or
other similar resource fields. These fields are treated as Service
Data in accordance with the Google Cloud Privacy Notice .
Default branch : Name of the default branch.
Initialize repository : Optional. Select this option if you
want to initialize the repository and add .gitignore, license, and
README files.
.gitignore : Optional. Choose which files to not track
using the drop-down menu templates.
license : Optional. Select a common license from the drop-down menu.
Click Create repository .
gcloud
Create a repository using the gcloud CLI by running the
following command:
gcloud source-manager repos create REPOSITORY_ID \
--region = LOCATION \
--project = PROJECT_ID \
--instance = INSTANCE_ID \
--description = DESCRIPTION \
--default-branch = BRANCH \
--gitignores = GITIGNORES \
--license = LICENSE \
--readme = README
Replace the following:
REPOSITORY_ID with the name for your
repository.
Note: Repository IDs must follow the
resource naming convention .
They must include only lower case letters, numbers, or dashes, must begin
with a letter, and cannot be changed after creating the repository.
LOCATION with the region where you want to create the
repository. For information on supported locations, see
Locations .
PROJECT_ID with the project ID of the
Secure Source Manager instance you want to create the repository in.
INSTANCE_ID with the instance ID of the
instance you are creating the repository in. To list the
Secure Source Manager instances in your project, see
List and view instances .
DESCRIPTION with a description of the
repository. This is optional and can be omitted.
Caution: Don't put sensitive or identifying data in the description or
other similar resource fields. These fields are treated as Service
Data in accordance with the Google Cloud Privacy Notice .
BRANCH with the default branch name. This is
optional and can be omitted. Default branch name when not set is
main .
GITIGNORES with a comma-separated list of
gitignore template names. This is optional and can be omitted.
To view the full list of available templates,
see the repository initialization configuration reference .
LICENSE with the license template name to
apply to your repository. This is optional and can be omitted.
To view the full list of available license templates, see the
repository initialization configuration reference .
README with default to create a README file
from the default template. This is optional and can be omitted. If
omitted, a README file won't be created.
API
Create a repository using a REST call by running the following command:
curl \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
https://securesourcemanager.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /repositories?repository_id = REPOSITORY_ID \
-d '{"instance": "projects/ PROJECT_ID /locations/ REGION /instances/ INSTANCE_ID "}'
Replace the following:
REGION is the region of your Secure Source Manager instance.
For information on supported locations, see
Locations .
INSTANCE_ID is your Secure Source Manager instance ID.
PROJECT_ID is the project ID of your
Secure Source Manager instance. See
Identifying projects
for information on where to find your project ID.
REPOSITORY_ID is the name for your repository.
Additional values can be specified using the HTTP POST data flag,
-d'{}' including initializing the repository, adding a specific
.gitignore file, or licenses. See the
Reference documentation for more information.
Caution: Don't put sensitive or identifying data in the description or
other similar resource fields. These fields are treated as Service
Data in accordance with the Google Cloud Privacy Notice . Note: Repository IDs must follow the
resource naming convention .
They must include only lower case letters, numbers, or dashes, must begin
with a letter, and cannot be changed after creating the repository.
If you want your output to be human readable, you can pipe it to JSON
using json_pp .
For example:
curl \
-X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
https://securesourcemanager.googleapis.com/v1/projects/my-project-id/locations/us-central1/repositories?repository_id = my-repo \
-d '{"instance": "projects/my-project-id/locations/us-central1/instances/prod-test-instance", "initialConfig":{"defaultBranch":"main"}}' | json_pp
The response will resemble the following:
{
"name" : "operations/266bf4c7-13fe-11ed-be24-da823b7355d0" ,
"metadata" : {
"@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata" ,
"createTime" : "2022-08-04T14:02:59.810496928Z" ,
"endTime" : "2022-08-04T14:03:00.558354528Z" ,
"target" : "projects/654987321654/locations/us-central1/repositories/my-repo" ,
"verb" : "create" ,
"apiVersion" : "v1"
},
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.Repository" ,
"name" : "projects/my-project-id/locations/us-central1/repositories/my-repo" ,
"instance" : "projects/654987321654/locations/us-central1/instances/prod-test-instance" ,
"createTime" : "2022-08-04T14:03:00Z" ,
"uris" : {
"html" : "https://prod-test-instance-654987321654.us-central1.sourcemanager.dev/my-project-id/my-repo" ,
"gitHttps" : "https://prod-test-instance-654987321654-git.us-central1.sourcemanager.dev/my-project-id/my-repo.git"
}
}
Where:
654987321654 is the repository project number.
my-project-id is the repository project ID.
my-repo is the REPOSITORY_ID that you set in the create command.
The uris field contains the URLs to access the repository via the web browser
or via Git protocol HTTPS access.
Access your new repository with the HTML URI in the response. Code
review, issue tracking, and pull requests are supported in the
Secure Source Manager web interface.
The repository is created in your Secure Source Manager instance.
The Repo Admin role ( roles/securesourcemanager.repoAdmin ) is granted to you
when you create a new repository. The new IAM permission might
take up to 2 minutes to propagate, so if you get a permissions error when you
try to access the repository after creation, wait a few minutes and try again.
Repositories you've created are listed in the Secure Source Manager web
interface on the My repositories page.
What's next
Grant users repository access
Use Git source code management
with Secure Source Manager.
List and view repositories
in the Secure Source Manager web interface.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
