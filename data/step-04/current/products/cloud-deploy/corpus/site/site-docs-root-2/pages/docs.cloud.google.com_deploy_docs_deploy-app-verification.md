---
title: "Quickstart: Verify your application after deploying it \_|\_ Cloud Deploy\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/deploy-app-verification
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/deploy-app-verification
  title: "Quickstart: Verify your application after deploying it \_|\_ Cloud Deploy\
    \ \_|\_ Google Cloud Documentation"
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
Verify your application after deploying it
This quickstart shows you how to use Cloud Deploy to verify your deployed
application, as part of the delivery pipeline.
In this quickstart, you'll do the following:
Create one GKE cluster or one Cloud Run
service.
You can use deploy verification on GKE attached clusters too, but
this quickstart uses GKE and Cloud Run
only.
Define your Cloud Deploy delivery pipeline and deployment
target.
The delivery pipeline includes only one stage and uses only one target.
You define the configuration for the deploy verification in the stage
stanza.
Create a Skaffold configuration which is needed by the release, and either a Kubernetes
manifest or a Cloud Run service definition.
Create a release, which automatically deploys to the target.
After the application is deployed, the
verification is run as a
phase of the
rollout.
View the results of the verification in the Cloud Build logs,
using the Cloud Deploy Rollout details page in
Google Cloud console.
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
Make sure the default
Compute Engine service account has sufficient permissions.
The service account might already have the necessary permissions. These steps
are included for projects that disable automatic role grants for default service
accounts.
First add the clouddeploy.jobRunner role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount:$(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--role="roles/clouddeploy.jobRunner"
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
includes the actAs permission to deploy to the runtime:
gcloud iam service-accounts add-iam-policy-binding $(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--member=serviceAccount:$(gcloud projects describe PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--role="roles/iam.serviceAccountUser" \
--project= PROJECT_ID
Create your runtime environment
If you're deploying to Cloud Run, you can skip this command .
For GKE, create one cluster: deploy-verification-cluster ,
with default settings. The cluster's Kubernetes API endpoint must be
network-reachable from the public internet. GKE clusters
are externally accessible by default.
gcloud container clusters create-auto deploy-verification-cluster \
--project= PROJECT_ID \
--region=us-central1
Create your delivery pipeline and targets
You can define your pipeline and targets in one file or in separate files. In
this quickstart, you create a single file.
Open a terminal window.
Create a new directory and navigate into it.
GKE
mkdir deploy-verification-gke-quickstart
cd deploy-verification-gke-quickstart
Cloud Run
mkdir deploy-verification-run-quickstart
cd deploy-verification-run-quickstart
Create your delivery pipeline and target definition:
GKE
In the deploy-verification-gke-quickstart directory, create a new file:
clouddeploy.yaml , with the following contents:
apiVersion : deploy . cloud . google . com / v1
kind : DeliveryPipeline
metadata :
name : deploy - verification - demo - app - gke - 1
description : main application pipeline
serialPipeline :
stages :
- targetId : verify - staging
profiles : []
strategy :
standard :
verify :
tasks :
- type : container
image : ubuntu
command : [ "/bin/sh" ]
args : [ "-c" , ' echo "Your test or tests would go here." ' ]
---
apiVersion : deploy . cloud . google . com / v1
kind : Target
metadata :
name : verify - staging
description : verification staging cluster
gke :
cluster : projects / PROJECT_ID / locations / us - central1 / clusters / deploy - verification - cluster
Cloud Run
In the deploy-verification-run-quickstart directory, create a new file:
clouddeploy.yaml , with the following contents:
apiVersion : deploy . cloud . google . com / v1
kind : DeliveryPipeline
metadata :
name : deploy - verification - demo - app - run - 1
description : main application pipeline
serialPipeline :
stages :
- targetId : verify - staging
profiles : []
strategy :
standard :
verify :
tasks :
- type : container
image : ubuntu
command : [ "/bin/sh" ]
args : [ "-c" , ' echo "Your test or tests would go here." ' ]
---
apiVersion : deploy . cloud . google . com / v1
kind : Target
metadata :
name : verify - staging
description : staging Run service
run :
location : projects / PROJECT_ID / locations / us - central1
Note: In this file, the target is included with the delivery pipeline, but
you can define targets in a separate file or multiple separate files.
This file includes the verify stanza within the delivery pipeline's strategy definition.
It defines the container and command
to run after deploying the application. In this case, we're deploying an
Ubuntu container and running a simple echo command. You can view the
results of this command in the logs. In a more realistic scenario, you would
run tests against your deployed application.
Register your pipeline and targets with the Cloud Deploy service:
gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project= PROJECT_ID
You now have a delivery pipeline, with one target, ready to deploy your
application and verify that deployment.
Confirm your pipeline and targets:
In the Google Cloud console, navigate to the Cloud Deploy
Delivery pipelines page to view of list of your available delivery
pipelines.
Open the Delivery pipelines page
The delivery pipeline you just created is shown, with one target listed in
the Targets column.
Create your Skaffold configuration file and application manifest
Cloud Deploy uses Skaffold to identify
the manifest to be used to deploy the sample app to your
target .
Create a file named skaffold.yaml with the following contents:
GKE
apiVersion: skaffold/v4beta7
kind: Config
manifests:
rawYaml:
- k8s-pod.yaml
deploy:
kubectl: {}
Cloud Run
apiVersion: skaffold/v4beta7
kind: Config
manifests:
rawYaml:
- service.yaml
deploy:
cloudrun: {}
See the skaffold.yaml reference
for more information about this configuration file.
Create the definition for your application—a service definition for
Cloud Run or a Kubernetes manifest for GKE.
GKE
Create a file named k8s-pod.yaml , with the following contents:
apiVersion: v1
kind: Pod
metadata:
name: my-verification-pod
spec:
containers:
- name: nginx
image: my-app-image
This file is a basic Kubernetes
manifest , which is applied to the cluster to
deploy the application. The container image to deploy is set here as a
placeholder, my-app-image , which is replaced with the specific image
when you create the release .
Cloud Run
Create a file named service.yaml , with the following contents:
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
name: my-verification-run-service
spec:
template:
spec:
containers:
- image: my-app-image
This file is a basic Cloud Run service definition,
which is used to deploy the application. The container image to deploy
is set here as a placeholder, my-app-image , which is replaced with the
specific image when you create the release .
Create a release
A release is the central Cloud Deploy resource representing the
changes being deployed. The delivery pipeline defines the lifecycle of that
release. See
Cloud Deploy service architecture
for details about that lifecycle.
GKE
Run the following command from the deploy-verification-gke-quickstart
directory to create a release resource that represents the container
image to deploy:
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=deploy-verification-demo-app-gke-1 \
--images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa
Notice the
--images= flag ,
which you use to replace the placeholder ( my-app-image ) in the
manifest
with the specific, SHA-qualified image. Google recommends that you
templatize your manifests this way, and that you use SHA-qualified image
names at release creation.
Cloud Run
Run the following command from the deploy-verification-run-quickstart
directory to create a release resource that represents the container
image to deploy:
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=deploy-verification-demo-app-run-1 \
--images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a
Notice the
--images= flag ,
which you use to replace the placeholder ( my-app-image ) in the
service definition
with the specific, SHA-qualified image. Google recommends that you
templatize your service definitions this way, and that you use
SHA-qualified image names at release creation.
As with all releases (unless they include --disable-initial-rollout ),
Cloud Deploy automatically creates a
rollout resource too. The application is
automatically deployed into the one target configured for this delivery
pipeline.
The verification job we specified in our delivery pipeline runs as part of this
rollout, after the application is deployed.
View the results in Google Cloud console
After a few minutes, your release is deployed into your target runtime.
The verification job that we configured (for example purposes) prints a string
to the Cloud Build log. We can view that log to confirm that the
verification worked as expected.
In the Google Cloud console, navigate to the Cloud Deploy
Delivery pipelines page to view your delivery pipeline
("deploy-verification-demo-app-gke-1" or "deploy-verification-demo-app-run-1").
Open the Delivery pipelines page
Click the name of your delivery pipeline
("deploy-verification-demo-app-gke-1" or "deploy-verification-demo-app-run-1").
The pipeline visualization shows the app's deployment status. Because there's
only one stage in the pipeline, the visualization shows only one node.
And your release is listed on the Releases tab under Delivery pipeline
details .
Click the Rollouts tab, under Delivery pipeline details .
Click the rollout name to view the rollout details.
Verify is listed as a job.
Click Verify
The job run log is displayed.
Scroll down in the list of log entries to find verification-test , and click
it.
Notice the textPayload . That string is what was configured in the
Verify stanza in your
Delivery Pipeline .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the GKE cluster or Cloud Run service:
GKE
gcloud container clusters delete deploy - verification - cluster -- region = us - central1 -- project = PROJECT_ID
Cloud Run
gcloud run services delete my - verification - run - service -- region = us - central1 -- project = PROJECT_ID
Delete the delivery pipeline, target, release, and rollout:
gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT_ID
Delete the Cloud Storage buckets that Cloud Deploy created.
One ends with _clouddeploy , and the other is [region].deploy-artifacts.[project].appspot.com .
Open the Cloud Storage browser page
That's it, you completed this quickstart!
What's next
Learn more about Cloud Deploy .
Learn more about deploy verification .
Try out the Cloud Deploy walkthrough .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
