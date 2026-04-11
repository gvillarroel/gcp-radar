---
title: "Quickstart: Automate pipeline tasks \_|\_ Cloud Deploy \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/deploy/docs/deploy-app-automation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/deploy-app-automation
  title: "Quickstart: Automate pipeline tasks \_|\_ Cloud Deploy \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Automate release promotion and rollout advancement in Cloud Deploy
This page shows you how to use Cloud Deploy to automatically promote a
release to a target and advance a rollout to its next phase.
In this quickstart, you'll do the following:
Create two GKE clusters or two Cloud Run
services.
Create a Skaffold configuration and either a Kubernetes
manifest or a Cloud Run service definition.
Define your Cloud Deploy delivery pipeline and deployment
targets.
The pipeline will deploy to two targets: dev and staging . And the
staging target uses a
canary deployment strategy .
Define two automation rules:
An automation to promote the release into the staging target on
successful rollout to dev .
An automation to advance the rollout to the stable phase upon successful
completion of the canary-25 ` phase.
Instantiate your delivery pipeline by creating a release, which automatically
deploys to the dev target.
View the delivery pipeline and release in the Google Cloud console.
Because of the automated promotion, this release is promoted into the
staging automatically.
Because the staging target uses a canary deployment strategy, and this
is the first deployment into that runtime, the canary-25 phase is skipped.
See
Why phases are sometimes skipped
to understand more about why the canary phase is skipped the first time.
Because of the automated phase-advance, the rollout is advanced to the
stable phase.
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
Enable the Cloud Deploy, Cloud Build, GKE, Cloud Run, and Cloud Storage APIs.
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
Note: You can run the gcloud CLI in
the Google Cloud console without installing the Google Cloud CLI. To run the
gcloud CLI in the Google Cloud console,
use
Cloud Shell .
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
Enable the Cloud Deploy, Cloud Build, GKE, Cloud Run, and Cloud Storage APIs.
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
Note: You can run the gcloud CLI in
the Google Cloud console without installing the Google Cloud CLI. To run the
gcloud CLI in the Google Cloud console,
use
Cloud Shell .
If you already have the CLI installed, make sure you're running the latest
version:
gcloud components update
Make sure the default Compute Engine service account has sufficient permissions.
The service account might already have the necessary permissions. These steps
are included for projects that disable automatic role grants for default service
accounts.
First add the clouddeploy.jobRunner role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount:$(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--role="roles/clouddeploy.jobRunner"
Add the clouddeploy.releaser role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount:$(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--role="roles/clouddeploy.releaser"
Add the developer role for your specific runtime.
For GKE:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount:$(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--role="roles/container.developer"
For Cloud Run:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount:$(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--role="roles/run.developer"
Add the iam.serviceAccountUser role, which
includes the actAs permission for the default service account to
deploy to the runtime:
gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--member=serviceAccount:$(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--role="roles/iam.serviceAccountUser" \
--project= PROJECT_ID
Add the iam.serviceAccountUser role, including actAs
permission for yourself, to use the default service account:
gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--member=user: YOUR_EMAIL_ADDRESS \
--role="roles/iam.serviceAccountUser" \
--project= PROJECT_ID
In this case, YOUR_EMAIL_ADDRESS is the email address you use to access
Google Cloud.
Create your runtime environments
If you're deploying to Cloud Run, you can skip this command .
For GKE, create two clusters: automation-quickstart-cluster-dev
and automation-quickstart-cluster-staging , with default settings. The
clusters' Kubernetes API endpoints must be network-reachable from the public
internet. GKE clusters are externally accessible by
default.
gcloud container clusters create - auto automation - quickstart - cluster - dev \
-- project = PROJECT_ID \
-- region = us - central1 \
&& gcloud container clusters create - auto automation - quickstart - cluster - staging \
-- project = PROJECT_ID \
-- region = us - central1
Get your project number.
You need your project number to identify the default service account. This is
necessary for configuring the automation resource.
Run the following command to get your project number:
gcloud projects describe PROJECT_ID --format="value(projectNumber)"
Copy the project number from the command-line output, and paste it here.
You don't need to run this as a command. Pasting it here populates the
service account reference in the automation config later in this quickstart.
PROJECT_NUMBER
Prepare your Skaffold configuration and application manifest
Cloud Deploy uses Skaffold to provide the details for
what to deploy and how to deploy it properly for your separate
targets .
In this quickstart, you create a skaffold.yaml file, which identifies the
application manifest to be used to deploy the sample app.
Open a terminal window.
Create a new directory and navigate into it.
GKE
mkdir deploy-automation-gke-quickstart
cd deploy-automation-gke-quickstart
Cloud Run
mkdir deploy-automation-run-quickstart
cd deploy-automation-run-quickstart
Create a file named skaffold.yaml with the following contents:
GKE
apiVersion: skaffold/v4beta7
kind: Config
metadata:
name: gke-automation
manifests:
rawYaml:
- k8s-deployment.yaml
deploy:
kubectl: {}
Cloud Run
apiVersion: skaffold/v4beta7
kind: Config
metadata:
name: run-automation
profiles:
- name: dev
manifests:
rawYaml:
- run-dev.yaml
- name: staging
manifests:
rawYaml:
- run-staging.yaml
deploy:
cloudrun: {}
This file is a minimal Skaffold config. For this quickstart, you create the
file. But you can also
have Cloud Deploy create one for you ,
for simple, non-production applications.
See the skaffold.yaml reference
for more information about this file.
Create the definition for your application—a pair of service
definitions for Cloud Run or a Kubernetes manifest for
GKE.
GKE
Create a file named k8s-deployment.yaml , with the following contents:
apiVersion: apps/v1
kind: Deployment
metadata:
name: my-deployment
labels:
app: my-app
namespace: default
spec:
replicas: 1
selector:
matchLabels:
app: my-app
template:
metadata:
labels:
app: my-app
spec:
containers:
- name: nginx
image: my-app-image
---
apiVersion: v1
kind: Service
metadata:
name: my-service
namespace: default
spec:
selector:
app: my-app
ports:
- protocol: TCP
port: 80
This file is a simple Kubernetes
manifest , which is used to deploy the
application. The container image to deploy is set here as a placeholder,
my-app-image , which is replaced with the specific image when you
create the release .
Cloud Run
Create a file named run-dev.yaml , with the following contents:
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
name: my-automation-run-service-dev
spec:
template:
spec:
containers:
- image: my-app-image
Create a file named run-staging.yaml , with the following contents:
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
name: my-automation-run-service-staging
spec:
template:
spec:
containers:
- image: my-app-image
These files are simple Cloud Run service definitions,
which are used to deploy the application. The container image to deploy
is set here as a placeholder, my-app-image , which is replaced with the
specific image when you create the release .
Create your delivery pipeline, targets, and automation
You can define your delivery pipeline and targets in one file or in separate
files. You can also define an automation action in a separate file. This
quickstart uses one file for the pipeline, targets, and automation.
Create your delivery pipeline, target definitions, and automation action:
GKE
In the deploy-automation-gke-quickstart directory, create a new file:
clouddeploy.yaml , with the following contents:
apiVersion : deploy . cloud . google . com / v1
kind : DeliveryPipeline
metadata :
name : my - automation - demo - app - 1
description : Automation demonstration pipeline
serialPipeline :
stages :
- targetId : automation - quickstart - dev
- targetId : automation - quickstart - staging
profiles : []
strategy :
canary :
runtimeConfig :
kubernetes :
serviceNetworking :
service : "my-service"
deployment : "my-deployment"
canaryDeployment :
percentages : [ 25 ]
verify : false
---
apiVersion : deploy . cloud . google . com / v1
kind : Target
metadata :
name : automation - quickstart - dev
description : Dev cluster to demonstrate deploy automation
gke :
cluster : projects / PROJECT_ID / locations / us - central1 / clusters / automation - quickstart - cluster - dev
---
apiVersion : deploy . cloud . google . com / v1
kind : Target
metadata :
name : automation - quickstart - staging
description : Staging cluster to demonstrate deploy automation
gke :
cluster : projects / PROJECT_ID / locations / us - central1 / clusters / automation - quickstart - cluster - staging
---
apiVersion : deploy . cloud . google . com / v1
kind : Automation
metadata :
name : my - automation - demo - app - 1 / promote
description : promotes a release
suspended : false
serviceAccount : PROJECT_NUMBER - compute @ developer.gserviceaccount.com
selector :
targets :
- id : automation - quickstart - dev
rules :
- promoteReleaseRule :
id : "promote-release"
wait : 1 m
destinationTargetId : "@next"
---
apiVersion : deploy . cloud . google . com / v1
kind : Automation
metadata :
name : my - automation - demo - app - 1 / advance
description : advances a rollout
suspended : false
serviceAccount : PROJECT_NUMBER - compute @ developer.gserviceaccount.com
selector :
targets :
- id : automation - quickstart - staging
rules :
- advanceRolloutRule :
id : "advance-rollout"
sourcePhases : [ "canary-25" ]
wait : 1 m
Note: In this file, the targets and the automations config are included
with the delivery pipeline, but you can define targets in a separate
file or multiple separate files, and automations in a separate file or
files.
Cloud Run
In the deploy-automation-run-quickstart directory, create a new file:
clouddeploy.yaml , with the following contents:
apiVersion : deploy . cloud . google . com / v1
kind : DeliveryPipeline
metadata :
name : my - automation - demo - app - 1
description : Automation demonstration pipeline
serialPipeline :
stages :
- targetId : automation - quickstart - dev
profiles : [ dev ]
- targetId : automation - quickstart - staging
profiles : [ staging ]
strategy :
canary :
runtimeConfig :
cloudRun :
automaticTrafficControl : true
canaryDeployment :
percentages : [ 25 ]
verify : false
---
apiVersion : deploy . cloud . google . com / v1
kind : Target
metadata :
name : automation - quickstart - dev
description : Dev cluster to demonstrate deploy automation
run :
location : projects / PROJECT_ID / locations / us - central1
---
apiVersion : deploy . cloud . google . com / v1
kind : Target
metadata :
name : automation - quickstart - staging
description : Staging cluster to demonstrate deploy automation
run :
location : projects / PROJECT_ID / locations / us - central1
---
apiVersion : deploy . cloud . google . com / v1
kind : Automation
metadata :
name : my - automation - demo - app - 1 / promote
description : Promotes a release to the next target
suspended : false
serviceAccount : PROJECT_NUMBER - compute @ developer.gserviceaccount.com
selector :
targets :
- id : automation - quickstart - dev
rules :
- promoteReleaseRule :
id : "promote-release"
wait : 1 m
destinationTargetId : "@next"
---
apiVersion : deploy . cloud . google . com / v1
kind : Automation
metadata :
name : my - automation - demo - app - 1 / advance
description : advances a rollout
suspended : false
serviceAccount : PROJECT_NUMBER - compute @ developer.gserviceaccount.com
selector :
targets :
- id : automation - quickstart - staging
rules :
- advanceRolloutRule :
id : "advance-rollout"
sourcePhases : [ "canary-25" ]
wait : 1 m
Note: In this file, the targets and the automations config are included
with the delivery pipeline, but you can define targets in a separate
file or multiple separate files, and automations in a separate file or
files.
Register your pipeline and targets with the Cloud Deploy service:
gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT_ID
You now have a pipeline, with one multi-target comprising two
GKE or Cloud Run targets, ready to deploy
your application.
Confirm your pipeline and targets:
In the Google Cloud console, navigate to the Cloud Deploy
Delivery pipelines page to view of list of your available delivery
pipelines.
Open the Delivery pipelines page
The delivery pipeline you just created is shown, with two targets listed in
the Targets column.
Click the pipeline name to open the delivery pipeline visualization and
details.
Select the Automations tab, under Delivery pipeline details .
The two automations you created are shown.
Create a release
A release is the central Cloud Deploy resource representing the
changes being deployed. The delivery pipeline defines the lifecycle of that
release. See
Cloud Deploy service architecture
for details about that lifecycle.
GKE
Run the following command from the deploy-automation-gke-quickstart
directory to create a release resource that represents the container
image to deploy:
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=my-automation-demo-app-1 \
--images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa
Notice the --images= flag , which you use to replace the placeholder ( my-app-image )
in the
manifest
with the specific, SHA-qualified image. Google recommends that you
templatize your manifests this way, and that you use SHA-qualified image
names at release creation.
Cloud Run
Run the following command from the deploy-automation-run-quickstart
directory to create a release resource that represents the container
image to deploy:
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=my-automation-demo-app-1 \
--images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a
Notice the
--images= flag ,
which you use to replace the placeholder ( my-app-image ) in the
service definition
with the specific, SHA-qualified image. Google recommends that you
templatize your service and job definitions this way, and that you use
SHA-qualified image names at release creation.
By default, when you create a release, a rollout is created automatically for
the first target in your pipeline.
Because this quickstart includes two automations, two things happen
automatically:
After a successful deployment in the first target, the release is
automatically promoted to the second target.
There is a one-minute wait time on the promote automation.
In the second target, where there is a 25% canary configured, the second
automation advances the rollout from canary-25 to stable .
For this first release, the canary-25 phase is skipped, because there is no
pre-existing version of the app to canary against. And the rollout is
automatically advanced to stable .
There is a one-minute delay on the advance automation.
When everything finishes, the application is deployed to successfully to both
targets without you having to do anything further.
If you want to know more about running a canary deployment strategy, you can
try the canary quickstart .
View the results in Google Cloud console
You can view the results, including the automation runs, in the
Google Cloud console.
Navigate to the Cloud Deploy Delivery pipelines page to view
your delivery pipeline.
Open the Delivery pipelines page
Click the name of your delivery pipeline "my-automation-demo-app-1".
The pipeline visualization shows the app's deployment status. If enough time
has elapsed, both targets will show green.
And your release is listed on the Releases tab under Delivery pipeline
details .
Click the Automation runs tab.
There are two entries, one for each of the two automations you created. You
can click either one to see the details of that automation run.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the GKE clusters or Cloud Run
services:
GKE
gcloud container clusters delete automation - quickstart - cluster - dev -- region = us - central1 -- project = PROJECT_ID \
&& gcloud container clusters delete automation - quickstart - cluster - staging -- region = us - west1 -- project = PROJECT_ID
Cloud Run
gcloud run services delete my - automation - run - service - dev -- region = us - central1 -- project = PROJECT_ID \
&& gcloud run services delete my - automation - run - service - staging -- region = us - central1 -- project = PROJECT_ID
Delete the delivery pipeline, targets, automations, release, and rollouts:
gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT_ID
Delete the Cloud Storage buckets that Cloud Deploy created.
One ends with _clouddeploy , and the other is [region].deploy-artifacts.[project].appspot.com .
Open the Cloud Storage browser page
That's it, you completed this quickstart!
What's next
Learn more about Cloud Deploy .
Try some other automations .
Learn the basics of deploying applications .
Try out the Cloud Deploy walkthrough .
Learn how to combine Google Cloud CI/CD tools to develop and deliver
software effectively to GKE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
