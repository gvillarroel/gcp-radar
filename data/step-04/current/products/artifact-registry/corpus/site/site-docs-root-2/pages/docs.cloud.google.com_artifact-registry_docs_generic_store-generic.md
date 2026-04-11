---
title: "Quickstart: Store other formats in Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic
  title: "Quickstart: Store other formats in Artifact Registry \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Store other formats in Artifact Registry
Learn how to set up an Artifact Registry generic format repository
and upload a YAML file.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Artifact Registry API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Artifact Registry API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles
To get the permissions that
you need to create and manage Artifact Registry package repositories,
ask your administrator to grant you the
Artifact Registry Administrator ( roles/artifactregistry.admin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Launch Cloud Shell
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
In this quickstart, you will use Cloud Shell to run gcloud commands.
Create a generic repository
To create a generic format repository named quickstart-generic-repo in
the location us-central1 with the description Generic repository , run the
following command:
gcloud artifacts repositories create quickstart-generic-repo \
--repository-format = generic \
--location = us-central1 \
--description = "Generic repository"
To verify that your repository was created, run the following command:
gcloud artifacts repositories list
To simplify gcloud commands, run the following commands to set the default
repository to quickstart-generic-repo and the default location to
us-central1 .
To set the default repository to quickstart-generic-repo , run the
following command:
gcloud config set artifacts/repository quickstart-generic-repo
To set the default location to us-central1 , run the following command:
gcloud config set artifacts/location us-central1
After the values are set, you don't need to specify them in gcloud
commands that require a repository or a location.
Upload an artifact to the repository
In your home directory, create a file to upload to your repository:
echo "hello world" > hello.yaml
To upload the file as an artifact to the repository, run the following
command:
gcloud artifacts generic upload \
--source = hello.yaml \
--package = my-package \
--version = 1 .0.0
Where:
hello.yaml is the path of the file to upload.
my-package is the package to upload.
1.0.0 is the version of the artifact. You can't overwrite an
existing version in the repository.
View artifacts in the repository
To verify that your artifact was added to the repository, you can list all
artifacts by running the following command:
gcloud artifacts files list
The response includes the file details in the format
PACKAGE : VERSION : FILE_NAME .
In the following example, hello.yaml is the FILE_NAME :
FILE: my-package:1.0.0:hello.yaml
CREATE_TIME: 2023-03-09T20:55:07
UPDATE_TIME: 2023-03-09T20:55:07
SIZE (MB): 0.000
OWNER: projects/my-project/locations/us-central1/repositories/quickstart-generic-repo/packages/my-package/versions/1.0.0
Download a generic artifact
To download a generic artifact from your repository, run the following command:
gcloud artifacts generic download \
--name = hello.yaml \
--package = my-package \
--version = 1 .0.0 \
--destination = DESTINATION
Where:
hello.yaml is the name of the file to download.
my-package is the package to download.
1.0.0 is the version of the artifact.
Replace DESTINATION with the directory in your local
file system where you want to save the download. The destination folder must
already exist or the command will fail.
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used in this tutorial, either delete the project that contains the resources,
or keep the project and delete the repository.
Delete the project
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete the repository
Before you remove a repository, ensure that any packages that you want to keep
are available in another location.
To delete the quickstart-generic-repo repository, run the following
command:
gcloud artifacts repositories delete quickstart-generic-repo
If you want to remove the default repository and location settings that
you configured for the active gcloud configuration, run the following
commands:
gcloud config unset artifacts/repository
gcloud config unset artifacts/location
What's next
Learn more about generic artifacts
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
