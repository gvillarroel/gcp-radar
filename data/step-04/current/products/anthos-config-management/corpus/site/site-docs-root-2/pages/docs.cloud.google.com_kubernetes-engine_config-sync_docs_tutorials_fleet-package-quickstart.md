---
title: "Quickstart: Deploy Kubernetes resources across a fleet \_|\_ Config Sync \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart
  title: "Quickstart: Deploy Kubernetes resources across a fleet \_|\_ Config Sync\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploy resources across a fleet
This tutorial teaches you how to use a fleet package to deploy Kubernetes
resource manifests across a fleet of clusters. Using GitOps tools like
Config Sync's fleet packages can help you scale up configuration management
across large numbers of clusters.
In this tutorial, you complete the following tasks:
Connect a Git repository to Cloud Build
Create and register clusters to a fleet
Install Config Sync as a fleet default
Deploy resources from your repository to your fleet of clusters
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
Enable the GKE, Config Delivery (fleet packages), Cloud Build, Developer Connect APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com configdelivery.googleapis.com cloudbuild.googleapis.com developerconnect.googleapis.com
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
Enable the GKE, Config Delivery (fleet packages), Cloud Build, Developer Connect APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com configdelivery.googleapis.com cloudbuild.googleapis.com developerconnect.googleapis.com
Create, or have access to, a GitHub account.
Costs
In this document, you use the following billable components of Google Cloud:
GKE
Cloud Build
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Connect to Git
Your Git repository contains the resources that you want to deploy across a
fleet. To deploy those resources with a fleet package, you must connect your Git
repository to Cloud Build.
Create your Git repository
This tutorial uses GitHub as the Git provider. To create a new GitHub repository,
complete the following steps:
In your web browser, open GitHub .
If needed, sign in to your GitHub account. If you have access to other
organizations or teams on GitHub, make sure that you're creating the
repository with your personal account.
From the toolbar, select Add add and then
click New repository .
Type fleet-package-tutorial as the name of the repository.
Keep Public selected as the repository visibility.
Select Create repository .
Connect the repository to Cloud Build
Config Sync's fleet package service uses Cloud Build to sync and
fetch the Kubernetes resources from your Git repository.
To connect your GitHub repository to Cloud Build, complete the following
steps:
Open the Cloud Build page in the Google Cloud console, and then select
Repositories .
Open the Repositories page
Ensure that you are on the 2nd gen Repositories page. If needed, select
View repositories (2nd gen) .
Click Create host connection .
In the Region menu, select us-central1 (Iowa) as your region.
Caution: You can select only us-central1 (Iowa) as the region. The
Cloud Build connection and fleet package must be in the same region.
Fleet packages ( Preview ) supports only us-central1 .
In the Name field, type fleet-package-quickstart-connection as the
name for your connection.
Click Connect .
If this is your first time connecting Cloud Build to your GitHub
account, complete the following steps:
Accept the request for your GitHub OAuth token. The token is stored in
Secret Manager for use with Cloud Build GitHub Connection.
Click Continue .
Install Cloud Build into your GitHub repository. Select Install
in a new account .
In the new GitHub window that opens, select the GitHub account in which
you created the fork of Cymbal Bank earlier. In a production environment,
you might select other accounts or repositories that you have delegated
access to.
Follow any authentication prompts to confirm your identity in GitHub.
In the GitHub window for Cloud Build repository access, choose
Only select repositories .
From the drop-down menu that lists repositories, select your
fleet-package-tutorial repository.
Click Save .
In the Cloud Build page in the Google Cloud console, click Link
repository to connect a new Git repository to Cloud Build.
In the Connection menu, select fleet-package-quickstart-connection .
In the Repositories menu, select your fleet-package-tutorial
repository.
Select Link .
Set up your fleet
In this section, you set up your fleet by creating clusters, registering them to
a fleet, and installing Config Sync as a fleet package.
Create clusters
To demonstrate how you can use fleet packages to deploy resources across
multiple clusters, this tutorial shows you how to create two clusters.
Note: It can take up to 15 minutes to create each cluster.
To create the two clusters and register them to your project's fleet:
Create a GKE cluster:
gcloud container clusters create-auto cluster1 \
--project = PROJECT_ID \
--region = REGION \
--fleet-project = PROJECT_ID \
--release-channel = rapid
Replace the following:
PROJECT_ID with your project ID.
REGION with the region that you want to create your
cluster in, such as us-central1 .
Create a second GKE cluster:
gcloud container clusters create-auto cluster2 \
--project = PROJECT_ID \
--region = REGION \
--fleet-project = PROJECT_ID \
--release-channel = rapid
Install Config Sync as a fleet default
To use the fleet package service, Config Sync must be installed on
both clusters. You can install Config Sync on multiple clusters at once,
and any future clusters registered to the fleet, by completing the following
steps:
In the Google Cloud console, go to the Feature Manager page.
Go to Feature Manager
In the Config Sync pane, click Configure .
Click Customize fleet settings . In the dialog that appears, select
the version of Config Sync to install.
Click Configure .
In the Configuring fleet settings confirmation dialog, click
Confirm . If you haven't previously enabled Config Sync, clicking
Confirm also enables the anthosconfigmanagement.googleapis.com API.
In the Clusters in the fleet table, select both clusters and then Click
Sync to fleet settings . This installs Config Sync on both your
Clusters with the settings that you configured.
It can take a few minutes for the clusters to sync. You can proceed with
the next steps when Config Sync shows as Installed .
Set up a service account for Cloud Build
To create the service account and grant the required permissions to
Cloud Build, complete the following steps:
Create the service account:
gcloud iam service-accounts create "quickstart-service-account"
Grant the service account permission to fetch resources from your Git
repository by adding an IAM policy binding for the Resource
Bundle Publisher role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount:quickstart-service-account@ PROJECT_ID .iam.gserviceaccount.com" \
--role = 'roles/configdelivery.resourceBundlePublisher'
If prompted, select None as the condition for the policy.
Grant the service account permission to write logs by adding an
IAM policy binding for the Logs Writer role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount:quickstart-service-account@ PROJECT_ID .iam.gserviceaccount.com" \
--role = 'roles/logging.logWriter'
If prompted, select None as the condition for the policy.
Add an IAM policy binding for the Artifact Registry Writer role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount:quickstart-service-account@ PROJECT_ID .iam.gserviceaccount.com" \
--role = 'roles/artifactregistry.writer'
If prompted, select None as the condition for the policy.
Deploy resources across your fleet
In this tutorial, you add a Kubernetes manifest with an nginx deployment to your
Git repository, publish a release, and then create a fleet package to deploy the
nginx application.
Commit a Kubernetes manifest to your repository
To add your resources to GitHub and publish a release, complete the following steps:
In a web browser window of your GitHub repository, click
Add file and then Create new file .
Name your file deployment.yaml and paste the following contents into it:
apiVersion : apps/v1
kind : Deployment
metadata :
name : nginx-deployment
spec :
replicas : 3
selector :
matchLabels :
app : nginx
template :
metadata :
labels :
app : nginx
spec :
containers :
- image : nginx:1.14.2
name : nginx
ports :
- containerPort : 80
Click Commit changes...
In the confirmation dialog, keep Commit directly to the main branch
selected and then click Commit changes .
On the main page of your repository, select Releases from the sidebar.
At the top of the page, choose Draft a new release.
Select the Choose a tag menu and type v1.0.0 as the tag. Click
Create new tag.
Click Publish release .
Deploy a resource to clusters with a fleet package
To deploy the new resource, create a new fleet package:
This fleet package targets all of the clusters in your fleet since it
doesn't define a cluster selector (under the target.fleet section ). It is configured to
deploy the deployment variant (derived from your deployment.yaml file) to
all of these clusters.
In your Cloud Shell, create a file named fleet-package.yaml with the
following content:
resourceBundleSelector :
cloudBuildRepository :
name : projects/ PROJECT_ID /locations/us-central1/connections/fleet-package-quickstart-connection/repositories/ REPOSITORY_NAME
tag : v1.0.0
serviceAccount : projects/ PROJECT_ID /serviceAccounts/quickstart-service-account@ PROJECT_ID . iam.gserviceaccount.com
path :
# Match all files (including deployment.yaml) to generate variants
variantsPattern : "*.yaml"
target :
fleet :
project : projects/ PROJECT_ID
rolloutStrategy :
rolling :
maxConcurrent : 1
variantSelector :
# Explicitly match the variant generated from "deployment.yaml"
variantNameTemplate : "deployment"
Replace REPOSITORY_NAME with the repository name
from Cloud Build. This is usually in the format
USERNAME- REPOSITORY_NAME .
Create the fleet package to start the rollout:
gcloud container fleet packages create fp-nginx \
--source = fleet-package.yaml \
--project = PROJECT_ID
Verify that the fleet package was created:
gcloud container fleet packages list
You can click the link provided to view the streaming logs for the
Cloud Build job.
The fleet package starts rolling out the Kubernetes resources across your
fleet.
In the Google Kubernetes Engine page of the Google Cloud console, go to the Workloads
page to see an aggregated view of the workloads that are being deployed on
all your GKE clusters:
Open the Workloads page
It can take a few minutes for the workloads to become available. You might
also notice availability errors while Autopilot
adjusts your resource requests for the new deployment.
Notice how, because maxConcurrent: is set to 1 in your fleet package
definition, the fleet package API waits until the nginx-deployment is fully
deployed on one cluster before starting the deployment to the second cluster.
If you changed the roll-out strategy to maxConcurrent: 2 or higher, the
resources would deploy to both clusters simultaneously.
After a few minutes, you will see two new workloads for the nginx-deployment on
both your clusters. You might need to refresh the page.
Success: You used a single fleet package to add a new deployment sourced in a
Git repository to two clusters.
You can continue to explore different deployment strategies with fleet packages.
For example, you could add a new cluster to your fleet to observe that your
workload gets automatically deployed to that new cluster. For more information
about deployment strategies and variations, see Deploy fleet packages .
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
You can delete your repository by completing the following steps:
In a web browser window of your GitHub repository, under your
repository name, click Settings .
On the General settings page (which is selected by default), go to the
Danger Zone section and click Delete this repository .
Click I want to delete this repository .
Read the warnings and click I have read and understand these effects .
To verify that you're deleting the correct repository, in the text field,
type the name of your repository.
Click Delete this repository .
What's next
Learn more about fleet packages .
Learn how to deploy fleet packages .
Try the Scalable apps tutorial app tutorial, a series of tutorials that
teaches you how to deploy, run, and manage modern application environments on
GKE. It includes the
Centralize change management tutorial which explores scaling up
configuration changes with fleet packages.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
