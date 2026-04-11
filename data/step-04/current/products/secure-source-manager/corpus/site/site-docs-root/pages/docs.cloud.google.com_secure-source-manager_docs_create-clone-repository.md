---
title: "Quickstart: Create and clone a repository \_|\_ Secure Source Manager \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/create-clone-repository
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/create-clone-repository
  title: "Quickstart: Create and clone a repository \_|\_ Secure Source Manager \_\
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
Create and clone a repository
Create a repository in Secure Source Manager and clone it to your local machine.
Before you begin
Create or request access to a Secure Source Manager instance. For more
information, see
Create a Secure Source Manager instance .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Note: The Secure Source Manager Admin role
( roles/securesourcemanager.admin ) or IAM basic
role of Owner ( roles/owner ) on your
project also contains permissions to create and clone a repository. You
shouldn't grant administrator roles or basic roles in a production environment,
but you can grant them in a development or test environment.
For information on granting Secure Source Manager roles, see Access control
with IAM and
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
The repository is created in your Secure Source Manager instance.
The Repo Admin role ( roles/securesourcemanager.repoAdmin ) is granted to you
when you create a new repository. The new IAM permission might
take up to 2 minutes to propagate, so if you get a permissions error when you
try to access the repository after creation, wait a few minutes and try again.
Repositories you've created are listed in the Secure Source Manager web
interface on the My repositories page.
Set up your credentials
Add the Secure Source Manager authentication helper to your global Git config
by running the following command:
Linux
git config --global credential. 'https://*.*.sourcemanager.dev' .helper gcloud.sh
Earlier versions of Git might not support wildcards. To add the
authentication helper without wildcards, run the following command:
git config --global credential. 'https:// INSTANCE_ID - PROJECT_NUMBER -git. LOCATION .sourcemanager.dev' .helper gcloud.sh
Windows
git config --global credential.https://*.*.sourcemanager.dev.helper gcloud.cmd
Earlier versions of Git might not support wildcards. To add the
authentication helper without wildcards, run the following command:
git config --global credential.https:// INSTANCE_ID - PROJECT_NUMBER -git. LOCATION .sourcemanager.dev.helper gcloud.cmd
Replace the following:
INSTANCE_ID with the name of your
Secure Source Manager instance.
PROJECT_NUMBER with your project number. For help
finding your project number, see
Identifying projects .
LOCATION with the instance's region. For more
information on regions, see Locations .
The authentication helper uses the gcloud CLI to fetch your
Google Cloud credentials when using Git commands with
Secure Source Manager.
To re-authenticate after the initial credential setup, run the following
gcloud CLI command:
gcloud auth login
Clone a repository
In the Secure Source Manager web interface, navigate to your repository
page.
Copy the HTTPS URL at the top of your repository page.
Clone your repository by running the following command:
git clone REPOSITORY_URL
Where REPOSITORY_URL is the HTTPS URL displayed at the top
of the repository page you want to clone.
Disregard the warning about cloning an empty repository.
Push to a repository
In a terminal window, change directories into your cloned repository.
cd REPOSITORY_NAME
Where REPOSITORY_NAME is your repository name.
Create an empty README file:
touch README.md
Add the README file to Git and create a commit message:
git add README.md
git commit -m "initial commit"
Push your changes to your remote repository:
git push -u origin main
Git pushes the file from the main branch to the origin remote. The output
is similar to the following:
Enumerating objects: 3 , done .
Counting objects: 100 % ( 3 /3 ) , done .
Writing objects: 100 % ( 3 /3 ) , 211 bytes | 211 .00 KiB/s, done .
Total 3 ( delta 0 ) , reused 0 ( delta 0 ) , pack-reused 0
remote: . Processing 1 references
remote: Processed 1 references in total
To https://instance-id-123456789012-git.us-central1.sourcemanager.dev/my-project/my-repo.git
* [ new branch ] main -> main
branch 'main' set up to track 'origin/main' .
View your files in Secure Source Manager
In the Secure Source Manager web interface, click the name of your
repository.
Your repository page opens and your README.md file is listed in the
<> Code tab.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Before you remove the repository, ensure any files you want to keep are
available in another location.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the project ID of the Google Cloud project where Secure Source Manager is running.
LOCATION : the region where your instance is located. For information on supported locations, see Locations .
REPOSITORY_ID : the repository ID.
HTTP method and URL:
DELETE https://securesourcemanager.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /repositories/ REPOSITORY_ID
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
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://securesourcemanager.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /repositories/ REPOSITORY_ID "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://securesourcemanager.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /repositories/ REPOSITORY_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
"name":"operations/cc3ea26c-9b57-11ed-be0a-2e3b5910efef","metadata":{"@type":"type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata","createTime":"2023-01-23T19:54:49.904779921Z","endTime":"2023-01-23T19:54:50.947030402Z","target":"projects/my-project/locations/us-central1/repositories/my-repo","verb":"delete","apiVersion":"v1"},"done":true,"response":{"@type":"type.googleapis.com/google.protobuf.Empty"}
```
The response resembles the following:
{ "name" : "operations/cc3ea26c-9b57-11ed-be0a-2e3b5910efef" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata" , "createTime" : "2023-01-23T19:54:49.904779921Z" , "endTime" : "2023-01-23T19:54:50.947030402Z" , "target" : "projects/my-project/locations/us-central1/repositories/my-repo" , "verb" : "delete" , "apiVersion" : "v1" } , "done" :true, "response" : { "@type" : "type.googleapis.com/google.protobuf.Empty" }
What's next
List and view repositories
in the Secure Source Manager web interface.
Work with Pull requests and issues in Secure Source Manager .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
