---
title: "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/build/docs/build-push-docker-image
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs
source_metadata:
  url: https://docs.cloud.google.com/build/docs/build-push-docker-image
  title: "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Build and push a Docker image with Cloud Build
Learn how to get started with Cloud Build by building a Docker image
and pushing the image to Artifact Registry. Artifact Registry provides a single
location for managing private packages and Docker container images.
You will first build the image using a Dockerfile , which is the Docker
configuration file, and then build the same image using the
Cloud Build configuration file.
Note: This quickstart shows you how to build an image with Docker, but
Cloud Build supports most build tools and programming languages.
To follow step-by-step guidance for this task directly in the
Cloud Shell Editor, click Guide me :
Guide me
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build, Compute Engine and Artifact Registry APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build, Compute Engine and Artifact Registry APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
If you've already installed Google Cloud CLI previously, make sure you have the
latest available version by running gcloud components update .
Make sure that you have the following role or roles on the project:
Artifact Registry Administrator, Cloud Build Editor, Logs Viewer, Service Account User, Service Usage Admin, Storage Bucket Viewer, Storage Object Creator
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Prepare source files to build
You'll need some sample source code to package into a container image. In this section,
you'll create a shell script and a Dockerfile . A Dockerfile is a text
document that contains instructions for Docker to build an image.
Open a terminal window.
Create a new directory named quickstart-docker and navigate into it:
mkdir quickstart-docker
cd quickstart-docker
Create a file named quickstart.sh with the following contents:
#!/bin/sh
echo "Hello, world! The time is $( date ) ."
Create a file named Dockerfile with the following contents:
FROM alpine
COPY quickstart.sh /
CMD [ "/quickstart.sh" ]
In the terminal window, run the following command to make quickstart.sh executable:
chmod +x quickstart.sh
Create a Docker repository in Artifact Registry
Use the
gcloud artifacts repositories create
command to create a Docker repository named quickstart-docker-repo in the
location us-west2 with the description "Docker repository":
gcloud artifacts repositories create quickstart-docker-repo --repository-format = docker \
--location = us-west2 --description = "Docker repository"
Verify that your repository was created:
gcloud artifacts repositories list
The list of displayed repositories should include quickstart-docker-repo .
Artifact Registry uses a
naming convention to identify
repositories and images. For example, when you interact with Docker images
stored in Artifact Registry in the us-west2 region, you use
us-west2-docker.pkg.dev as the registry hostname in your commands.
Build an image using a Dockerfile
Use the gcloud builds submit command to
build a Docker image using a Dockerfile . You don't require a separate
Cloud Build config file.
Get your Google Cloud project ID by running the following command:
gcloud config get-value project
Run the following command from the directory containing quickstart.sh and
Dockerfile :
gcloud builds submit -- region = us - west2 -- tag us - west2 - docker . pkg . dev / PROJECT_ID / quickstart - docker - repo / quickstart - image: tag1
Note: If your project ID contains a colon, replace the colon with a forward slash.
After the build is complete, the output should be similar to the following:
DONE
------------------------------------------------------------------------------------------------------------------------------------
ID CREATE_TIME DURATION SOURCE IMAGES STATUS
545cb89c-f7a4-4652-8f63-579ac974be2e 2020 -11-05T18:16:04+00:00 16S gs://gcb-docs-project_cloudbuild/source/1604600163.528729-b70741b0f2d0449d8635aa22893258fe.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS
You've just built a Docker image named quickstart-image using a Dockerfile
and pushed the image to Artifact Registry.
Build an image using a build config file
In this section you use a Cloud Build config file to build the same
Docker image built in the previous steps. The build config file instructs
Cloud Build to perform tasks based on your specifications.
In the same directory that contains quickstart.sh and the Dockerfile ,
create a file named cloudbuild.yaml with the following contents. This file is
your build config file. At build time, Cloud Build automatically
replaces $PROJECT_ID with your project ID.
steps :
- name : 'gcr.io/cloud-builders/docker'
script : |
docker build -t us-west2-docker.pkg.dev/$PROJECT_ID/quickstart-docker-repo/quickstart-image:tag1 .
automapSubstitutions : true
images :
- 'us-west2-docker.pkg.dev/$PROJECT_ID/quickstart-docker-repo/quickstart-image:tag1'
Start the build by running the following command:
gcloud builds submit -- region = us - west2 -- config cloudbuild . yaml
After the build is complete, the output should be similar to the following:
DONE
------------------------------------------------------------------------------------------------------------------------------------
ID CREATE_TIME DURATION SOURCE IMAGES STATUS
046ddd31-3670-4771-9336-8919e7098b11 2020 -11-05T18:24:02+00:00 15S gs://gcb-docs-project_cloudbuild/source/1604600641.576884-8153be22c94d438aa86c78abf11403eb.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS
You've just built quickstart-image using the build config file and pushed the
image to Artifact Registry.
View build details
Open the Cloud Build page in the Google Cloud console.
Open the Cloud Build page
If necessary, select your project and click Open .
You will see the Build history page:
If necessary, select us-west2 in the Region drop-down menu to view
builds in that region.
There will be two builds listed, one for each of the builds you executed in
this quickstart.
Click one of the builds.
You will see the Build details page.
To view the artifacts of your build, under Build Summary , click Build artifacts .
You should see output similar to the following:
You can download your build log and view your image details in
Artifact Registry from this page.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Open the Artifact Registry page in the Google Cloud console.
Open the Artifact Registry page
Select your project and click Open .
Select quickstart-docker-repo .
Click Delete .
You have now deleted the repository that you created as part of this quickstart.
What's next
Learn how to run a Docker image .
Learn how to create a basic build config
file .
Learn how to deploy using Cloud Build .
Learn how to build Node.js applications .
Learn how to build Java applications .
Learn how to build Go applications .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
