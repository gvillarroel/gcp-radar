---
title: "Quickstart: Use deploy parameters \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/deploy-app-parameters
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/deploy-app-parameters
  title: "Quickstart: Use deploy parameters \_|\_ Cloud Deploy \_|\_ Google Cloud\
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
Use deploy parameters
This page shows you how to use Cloud Deploy to deliver a sample application
to two targets at the same time (a parallel
deployment ), while passing a different parameter value
to each rendered manifest or service definition, using three different methods.
In this quickstart, you'll do the following:
Create two GKE clusters or two Cloud Run
services.
You can use GKE attached clusters too, but this quickstart uses
GKE and Cloud Run only.
Create a Skaffold configuration and either a Kubernetes
manifest or a Cloud Run service definition.
The manifest or service definition will be the same for both
child targets , but at deploy time
the rendered manifest or service definition for each child target will have
different values for the specific parameters configured in this quickstart.
Define your Cloud Deploy delivery pipeline and deployment
targets.
This pipeline will have one multi-target , referencing two child targets , to
deliver your app to the two clusters or two services.
Define deploy parameters in three different
places:
In the pipeline progression
On the child targets
On the command line, when creating the release
Instantiate your delivery pipeline by creating a release, which automatically
deploys to the two targets in parallel.
View the "controller rollout" and child rollouts in Google Cloud console.
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
Create your runtime environments
If you're deploying to Cloud Run, you can skip this command .
For GKE, create two clusters: deploy-params-cluster-prod1
and deploy-params-cluster-prod2 , with default settings. The clusters'
Kubernetes API endpoints must be network-reachable from the public internet.
GKE clusters are externally accessible by default.
gcloud container clusters create - auto deploy - params - cluster - prod1 \
-- project = PROJECT_ID \
-- region = us - central1 \
&& gcloud container clusters create - auto deploy - params - cluster - prod2 \
-- project = PROJECT_ID \
-- region = us - west1
Prepare your Skaffold configuration and manifests
Cloud Deploy uses Skaffold to provide
the details for what to deploy and how to deploy it properly for your separate
targets .
In this quickstart, you create a skaffold.yaml file, which identifies the
Kubernetes manifest or Cloud Run service definition to be used
to deploy the sample app.
Open a terminal window.
Create a new directory and navigate into it.
GKE
mkdir deploy-params-gke-quickstart
cd deploy-params-gke-quickstart
Cloud Run
mkdir deploy-params-run-quickstart
cd deploy-params-run-quickstart
Create a file named skaffold.yaml with the following contents:
GKE
apiVersion: skaffold/v4beta7
kind: Config
manifests:
rawYaml:
- kubernetes.yaml
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
This file is a minimal Skaffold config. For this quickstart, you create the
file. But you can also
have Cloud Deploy create one for you ,
for simple, non-production applications.
See the skaffold.yaml reference
for more information about this file.
Create the definition for your application—a service definition for
Cloud Run or a Kubernetes manifest for GKE.
GKE
Create a file named kubernetes.yaml , with the following contents:
apiVersion : apps / v1
kind : Deployment
metadata :
name : my - deployment
spec :
replicas : 1 # from-param: ${replicaCount}
selector :
matchLabels :
app : my - app
template :
metadata :
labels :
app : my - app
annotations :
commit : defaultShaValue # from-param: ${git-sha}
spec :
containers :
- name : nginx
image : my - app - image
env :
- name : envvar1
value : default1 # from-param: ${application_env1}
- name : envvar2
value : default2 # from-param: ${application_env2}
This file is a Kubernetes
manifest , which is applied to the cluster to
deploy the application. The container image to deploy is set here as a
placeholder, my-app-image , which is replaced with the specific image
when you create the release .
Cloud Run
Create a file named service.yaml , with the following contents:
apiVersion : serving . knative . dev / v1
kind : Service
metadata :
name : my - parallel - run - service
spec :
autoscaling . knative . dev / minScale : 1 # from-param: ${minInstances}
selector :
matchLabels :
app : my - app
template :
metadata :
annotations :
commit : defaultShaValue # from-param: ${git-sha}
spec :
containers :
- image : my - app - image
env :
- name : envvar1
value : defaultValue1 # from-param: ${application_env1}
- name : envvar2
value : defaultValue2 # from-param: ${application_env2}
This file is a basic Cloud Run service definition,
which is used to deploy the application. The container image to deploy
is set here as a placeholder, my-app-image , which is replaced with the
specific image when you create the release .
Note: If you want to use different manifests per target, read this article
about managing manifests to
find out more about using Skaffold profiles.
Create your delivery pipeline and targets
You can define your pipeline and targets in one file or in separate files. In
this quickstart, we create a single file.
Create your delivery pipeline and target definition:
GKE
In the deploy-params-gke-quickstart directory, create a new file:
clouddeploy.yaml , with the following contents:
apiVersion: deploy.cloud.google.com/v1
kind: DeliveryPipeline
metadata:
name: my-params-demo-app-1
description: main application pipeline
serialPipeline:
stages:
- targetId: params-prod-multi
deployParameters:
- values:
replicaCount: "2"
# Apply the deploy parameter replicaCount: "2" to the target with this label
matchTargetLabels:
label1: label1
- values:
replicaCount: "3"
# Apply the deploy parameter replicaCount: "3" to the target with this label
matchTargetLabels:
label2: label2
---
apiVersion: deploy.cloud.google.com/v1
kind: Target
metadata:
name: params-prod-multi
description: production clusters
multiTarget:
targetIds: [params-prod-a, params-prod-b]
---
apiVersion: deploy.cloud.google.com/v1
kind: Target
metadata:
name: params-prod-a
labels:
label1: label1
description: production cluster 1
deployParameters:
application_env1: "sampleValue1"
gke:
cluster: projects/ PROJECT_ID /locations/us-central1/clusters/deploy-params-cluster-prod1
---
apiVersion: deploy.cloud.google.com/v1
kind: Target
metadata:
name: params-prod-b
labels:
label2: label2
description: production cluster 2
deployParameters:
application_env2: "sampleValue2"
gke:
cluster: projects/ PROJECT_ID /locations/us-west1/clusters/deploy-params-cluster-prod2
Note: In this file, targets are included with the delivery pipeline,
but you can define targets in a separate file or multiple separate files.
Cloud Run
In the deploy-params-run-quickstart directory, create a new file:
clouddeploy.yaml , with the following contents:
apiVersion: deploy.cloud.google.com/v1
kind: DeliveryPipeline
metadata:
name: my-params-demo-app-1
description: main application pipeline
serialPipeline:
stages:
- targetId: params-prod-multi
deployParameters:
- values:
minInstances: "2"
# Apply the deploy parameter minInstances: "2" to the target with this label
matchTargetLabels:
label1: label1
- values:
minInstances: "3"
# Apply the deploy parameter minInstances: "3" to the target with this label
matchTargetLabels:
label2: label2
---
apiVersion: deploy.cloud.google.com/v1
kind: Target
metadata:
name: params-prod-multi
description: production clusters
multiTarget:
targetIds: [params-prod-a, params-prod-b]
---
apiVersion: deploy.cloud.google.com/v1
kind: Target
metadata:
name: params-prod-a
labels:
label1: label1
description: production cluster 1
deployParameters:
application_env1: "sampleValue1"
run:
location: projects/ PROJECT_ID /locations/us-central1
---
apiVersion: deploy.cloud.google.com/v1
kind: Target
metadata:
name: params-prod-b
labels:
label2: label2
description: production cluster 2
deployParameters:
application_env2: "sampleValue2"
run:
location: projects/ PROJECT_ID /locations/us-west1
Note: In this file, targets are included with the delivery pipeline,
but you can define targets in a separate file or multiple separate files.
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
The delivery pipeline you just created is shown. Notice that there is one
target listed in the Targets column even though you configured three
targets (one multi-target and two child targets) in your clouddeploy.yaml
file.
Notice that the only target listed is the multi-target params-prod-multi . Child
targets are not shown.
Create a release
A release is the central Cloud Deploy resource representing the
changes being deployed. The delivery pipeline defines the lifecycle of that
release. See
Cloud Deploy service architecture
for details about that lifecycle.
GKE
Run the following command from the deploy-gke-parallel-quickstart
directory to create a release resource that represents the container
image to deploy:
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=my-params-demo-app-1 \
--images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa \
--deploy-parameters="git-sha=f787cac"
Notice the
--images= flag ,
which you use to replace the placeholder ( my-app-image ) in the
manifest
with the specific, SHA-qualified image. Google recommends that you
templatize your manifests this way, and that you use SHA-qualified image
names at release creation.
Cloud Run
Run the following command from the deploy-run-parallel-quickstart
directory to create a release resource that represents the container
image to deploy:
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=my-params-demo-app-1 \
--images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a \
--deploy-parameters="git-sha=f787cac"
Notice the
--images= flag ,
which you use to replace the placeholder ( my-app-image ) in the
service definition
with the specific, SHA-qualified image. Google recommends that you
templatize your service and job definitions this way, and that you use
SHA-qualified image names at release creation.
As always, when you create a release, a rollout is created automatically for the
first target in your pipeline (unless a specific target is specified using
--to-target= ). In this quickstart, this target is a multi-target, so the
rollout is a "controller rollout" for two
child targets, and there are no subsequent targets in the delivery pipeline.
This means that your application is deployed everywhere upon rollout creation.
View the results in Google Cloud console
Now that you've created the release, and the controller rollout and child
rollouts are created, those child rollouts are now deployed (or are in the
process of being deployed) to their respective GKE clusters
or Cloud Run services.
In the Google Cloud console, navigate to the Cloud Deploy
Delivery pipelines page to view your my-parallel-demo-app-1 delivery pipeline.
Open the Delivery pipelines page
Click the name of your delivery pipeline "my-parallel-demo-app-1".
The pipeline visualization shows the app's deployment status. Because there's
only one stage in the pipeline, the visualization shows only one node.
And your release is listed on the Releases tab under Delivery pipeline
details .
Click the release name, test-release-001 .
Your rollouts appear under Rollouts . You can click a rollout to view its
details, including the deployment log.
Under Release details , select the Artifacts tab.
The Deploy parameters table lists all the parameters you configured in
your manifest and the values you provided for those parameters:
GKE
Cloud Run
In addition to the parameters and values, the table shows which target each
parameter applies to.
In the Release inspector column, click on View artifacts for either
target.
Click Show diff , then select params-prod-a for one target, and
params-prod-b for the other.
A diff is shown, comparing the rendered manifests of the two targets,
including the values you specified:
GKE
Cloud Run
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the GKE clusters or Cloud Run
services:
GKE
gcloud container clusters delete deploy - params - cluster - prod1 -- region = us - central1 -- project = PROJECT_ID \
&& gcloud container clusters delete deploy - params - cluster - prod2 -- region = us - west1 -- project = PROJECT_ID
Cloud Run
gcloud run services delete my - parallel - run - service -- region = us - central1 -- project = PROJECT_ID \
&& gcloud run services delete my - parallel - run - service -- region = us - west1 -- project = PROJECT_ID
Delete the delivery pipeline, multi-target, child targets, release, and
rollouts:
gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT_ID
Delete the Cloud Storage buckets that Cloud Deploy created.
One ends with _clouddeploy , and the other is [region].deploy-artifacts.[project].appspot.com .
Open the Cloud Storage browser page
That's it, you completed this quickstart!
What's next
Learn more about using deploy parameters .
Read more about how to deploy to multiple targets at the same time.
Learn more about Cloud Deploy .
Learn the basics of deploying applications .
Try out the Cloud Deploy walkthrough .
Learn how to manage your manifests .
Learn how to combine Google Cloud CI/CD tools to develop and deliver
software effectively to GKE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
