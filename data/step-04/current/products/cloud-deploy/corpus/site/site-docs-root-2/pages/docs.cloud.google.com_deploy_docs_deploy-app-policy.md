---
title: "Quickstart: Use a deploy policy to restrict rollouts \_|\_ Cloud Deploy \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/deploy-app-policy
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/deploy-app-policy
  title: "Quickstart: Use a deploy policy to restrict rollouts \_|\_ Cloud Deploy\
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
Use a deploy policy to restrict rollouts
This quickstart shows you how to prevent Cloud Deploy rollouts to a target
during a specified time, and how to override that restriction.
In this quickstart, you'll do the following:
Create a Skaffold configuration and a Kubernetes manifest or
Cloud Run service definition to specify the (pre-built) container
image to deploy.
Define your Cloud Deploy delivery pipeline and one deployment
target , pointing to one GKE
cluster or Cloud Run service.
This pipeline includes only one stage, for the one target.
Configure a deploy policy for a target.
The policy defines a range of dates during which to prohibit rollouts to that
target.
Create a release.
Normally when you create a release, Cloud Deploy creates
a rollout for the first target in your delivery pipeline's progression. In
this case, because there is a policy preventing deployment to the target, the
rollout for that target is not created.
View the results in Google Cloud console.
Because of the policy, you won't see a rollout for the release, and there is
no pending action in the delivery pipeline visualization.
Override the deploy policy.
This override results in Cloud Deploy now creating the rollout
for the target.
View the results in Google Cloud console.
Because the policy has now been overridden, you can see that there is a
rollout in progress (or completed, if enough time has passed).
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
Enable the Cloud Deploy, Cloud Build, GKE, and Cloud Storage APIs.
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
Enable the Cloud Deploy, Cloud Build, GKE, and Cloud Storage APIs.
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
If you already have the Google Cloud CLI installed, make sure you're running
the latest version:
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
For GKE, create one cluster: quickstart-cluster-qsprod .
The cluster's Kubernetes API endpoint must be network-reachable from the public
internet. GKE clusters are externally accessible by
default.
gcloud container clusters create-auto quickstart-cluster-qsprod \
--project = PROJECT_ID \
--region = us-central1
Prepare your Skaffold configuration and application manifest
Cloud Deploy uses Skaffold to provide
the details for what to deploy and how to deploy it to your
target .
In this quickstart, you create a skaffold.yaml file, which which identifies
the Kubernetes manifest to be used to deploy the sample app.
Open a terminal window.
Create a new directory and navigate into it.
mkdir deploy-policy-quickstart
cd deploy-policy-quickstart
Create a file named skaffold.yaml with the following contents:
GKE
apiVersion : skaffold / v4beta1
kind : Config
manifests :
rawYaml :
- k8s - pod . yaml
deploy :
kubectl : {}
Cloud Run
apiVersion : skaffold / v4beta1
kind : Config
manifests :
rawYaml :
- service . yaml
deploy :
cloudrun : {}
This file is a minimal Skaffold config. For this quickstart, you create the
file. But you can also
have Cloud Deploy create one for you ,
for basic, non-production applications.
See the skaffold.yaml reference
for more information about this configuration file.
Create the manifest for your application—a service definition for
Cloud Run or a Kubernetes manifest for GKE.
GKE
Create a file named k8s-pod.yaml , with the following contents:
apiVersion : v1
kind : Pod
metadata :
name : getting - started
spec :
containers :
- name : nginx
image : my - app - image
This file is a basic Kubernetes
manifest , which is applied to the cluster to
deploy the application. The container image to deploy is set here as a
placeholder, my-app-image , which is replaced with the specific image
when you create the release .
Cloud Run
Create a file named service.yaml , with the following contents:
apiVersion : serving . knative . dev / v1
kind : Service
metadata :
name : my - deploy - policy - run - service
spec :
template :
spec :
containers :
- image : my - app - image
This file is a basic Cloud Run service definition,
which is used to deploy the application. The container image to deploy
is set here as a placeholder, my-app-image , which is replaced with the
specific image when you create the release .
Create your delivery pipeline and target
You can define your delivery pipeline and targets in one file or in separate
files. In this quickstart, you create a single file with both.
Create your delivery pipeline and target definition:
GKE
In the deploy-policy-quickstart directory, create a new file:
clouddeploy.yaml , with the following contents:
apiVersion : deploy . cloud . google . com / v1
kind : DeliveryPipeline
metadata :
name : deploy - policy - pipeline
serialPipeline :
stages :
- targetId : prod - target
---
apiVersion : deploy . cloud . google . com / v1
kind : Target
metadata :
name : prod - target
description : production cluster
gke :
cluster : projects / PROJECT_ID /locations/us-central1/clusters/ quickstart - cluster - qsprod
Cloud Run
In the deploy-policy-quickstart directory, create a new file:
clouddeploy.yaml , with the following contents:
apiVersion : deploy . cloud . google . com / v1
kind : DeliveryPipeline
metadata :
name : deploy - policy - pipeline
serialPipeline :
stages :
- targetId : prod - target
---
apiVersion : deploy . cloud . google . com / v1
kind : Target
metadata :
name : prod - target
description : production Run service
run :
location : projects / PROJECT_ID /locations/ us - central1
Note: In this file, the target is included with the delivery pipeline, but
you can define targets in a separate file or multiple separate files.
Register your pipeline and target resources with the Cloud Deploy
service:
gcloud deploy apply --file=clouddeploy.yaml --region=us-central1 --project= PROJECT_ID
You now have a delivery pipeline with one target.
Confirm your pipeline and targets:
In the Google Cloud console, navigate to the Cloud Deploy
Delivery pipelines page to view of list of your available delivery
pipelines.
Open the Delivery pipelines page
The delivery pipeline you just created is shown, with one target listed in
the Targets column.
Create your deploy policy
You can define the deploy policy in the same file as your delivery pipeline and
targets, or you can define it in a separate file. For this quickstart, we define
it separately.
In the same directory in which you created the delivery pipeline and targets,
create a new file, deploypolicy.yaml , with the following content:
apiVersion : deploy.cloud.google.com/v1
description : Restrict all rollouts in the deploy-policy-pipeline resource for the next ten years
kind : DeployPolicy
metadata :
name : quickstart-deploy-policy
selectors :
- deliveryPipeline :
id : 'deploy-policy-pipeline'
rules :
- rolloutRestriction :
id : no-rollouts
timeWindows :
timeZone : America/New_York
oneTimeWindows :
- start : 2024-01-01 00:00
end : 2034-01-01 24:00
This policy blocks rollouts for 10 years, beginning January 1, 2024. This
isn't a realistic policy; it's done like this for this quickstart only, to
ensure that the policy is in place when you create your release.
Register your deploy policy resource with the Cloud Deploy service:
gcloud deploy apply --file=deploypolicy.yaml --region=us-central1 --project= PROJECT_ID
Confirm your deploy policy:
In the Google Cloud console, navigate to the Cloud Deploy
Deploy policies page to view of list of your available policies.
Open the Deploy policies page
The deploy policy you just created is shown.
Create a release
A release is the central Cloud Deploy resource representing the
changes being deployed. The delivery pipeline defines the lifecycle of that
release. See
Cloud Deploy service architecture
for details about that lifecycle.
GKE
Run the following command from the deploy-policy-quickstart directory to
create the release:
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=deploy-policy-pipeline \
--images=my-app-image=gcr.io/google-containers/nginx@sha256:f49a843c290594dcf4d193535d1f4ba8af7d56cea2cf79d1e9554f077f1e7aaa
Notice the
--images= flag ,
which you use to replace the placeholder ( my-app-image ) in the
manifest or service definition with the
specific, SHA-qualified image. Google recommends that you templatize your
manifests this way, and that you use SHA-qualified image names at release
creation.
Cloud Run
Run the following command from the deploy-policy-quickstart directory to
create the release:
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=deploy-policy-pipeline \
--images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a
Notice the
--images= flag ,
which you use to replace the placeholder ( my-app-image ) in the
manifest or service definition with the
specific, SHA-qualified image. Google recommends that you templatize your
manifests this way, and that you use SHA-qualified image names at release
creation.
Under normal circumstances, Cloud Deploy creates the
rollout to the first target when you create
the release using this command. In this case, because rollouts are restricted
according to the deploy policy, no rollout is created. An error message is shown on the
command line:
ERROR: (gcloud.deploy.releases.create) A create-rollout attempt was blocked by the "quickstart-deploy-policy"
policy. Target: "prod-target", Delivery pipeline: "deploy-policy-pipeline", policy rule: "no-rollouts"
Override the policy restriction
To deploy the sample application, which is blocked by the deploy policy, you
need to override that policy. To do so, you create a new rollout against this
release, this time including the --override-deploy-policies option:
GKE
Run the following command from the deploy-policy-quickstart directory to
create the release:
gcloud deploy releases promote -- release = test - release - 001 \
-- project = PROJECT_ID \
-- region = us - central1 \
-- delivery - pipeline = deploy - policy - pipeline \
-- to - target = prod - target \
-- override - deploy - policies = quickstart - deploy - policy
Cloud Run
Run the following command from the deploy-policy-quickstart directory to
create the release:
gcloud deploy releases promote -- release = test - release - 001 \
-- project = PROJECT_ID \
-- region = us - central1 \
-- delivery - pipeline = deploy - policy - pipeline \
-- to - target = prod - target \
-- override - deploy - policies = quickstart - deploy - policy
Because you included
--override-deploy-policies=quickstart-deploy-policy , and because you have the
roles/clouddeploy.policyAdmin role, Cloud Deploy ignores the
deploy policy you created and creates the rollout to the prod-target .
View the results in Google Cloud console
In the Google Cloud console, navigate again to the Cloud Deploy
Delivery pipelines page to view your delivery pipeline
( deploy-policy-pipeline ).
Open the Delivery pipelines page
Click the name of your delivery pipeline ( deploy-policy-pipeline ).
The pipeline visualization shows the app's deployment status. In this case,
because the policy was overridden, the rollout was created and it succeeded.
And your release is listed on the Releases tab under Delivery pipeline
details .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the GKE cluster or Cloud Run service:
GKE
gcloud container clusters delete quickstart - cluster - qsprod -- region = us - central1 -- project = PROJECT_ID
Cloud Run
gcloud run services delete my - deploy - policy - run - service -- region = us - central1 -- project = PROJECT_ID
Delete the deploy policy:
gcloud deploy delete -- file = deploypolicy . yaml -- region = us - central1 -- project = PROJECT_ID
Delete the delivery pipeline, target, release, and rollout:
gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT_ID
Delete both of the Cloud Storage buckets that Cloud Deploy
created.
Open the Cloud Storage browser page
That's it, you completed this quickstart!
What's next
Learn more about Cloud Deploy .
Learn the basics of deploying applications .
Learn how to combine Google Cloud CI/CD tools to develop and deliver
software effectively to GKE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
