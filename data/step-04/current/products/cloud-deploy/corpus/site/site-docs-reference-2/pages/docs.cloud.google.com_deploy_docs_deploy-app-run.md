---
title: "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/deploy/docs/deploy-app-run
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/deploy-app-run
  title: "Quickstart: Deploy an app to Cloud Run using Cloud Deploy \_|\_ Google Cloud\
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
Deploy an app to Cloud Run using Cloud Deploy
This page shows you how to use Cloud Deploy to deliver a sample
application image named hello to a sequence of two Cloud Run
services, two Cloud Run jobs, or two Cloud Run
worker pools. (Cloud Run worker pools are in
Preview ).
In this quickstart, you'll do the following:
Create a Skaffold configuration
Create configuration files for two Cloud Run services,
two jobs, or two worker pools.
These files define the services or jobs, and specify the (pre-built)
container images to deploy.
Define your Cloud Deploy delivery pipeline and deployment
targets , which point to the two services,
the two jobs, or the two worker pools.
Instantiate your delivery pipeline by creating a release, which automatically
deploys to the first target.
Promote the release to the second target.
View both rollouts in Google Cloud console.
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
Enable the Cloud Deploy, Cloud Build, Cloud Run, and Cloud Storage APIs.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Deploy, Cloud Build, Cloud Run, and Cloud Storage APIs.
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
Required roles
To ensure that the Cloud Deploy service account has the necessary
permissions to run Cloud Deploy operations and deploy to Cloud Run,
ask your administrator to grant the
following IAM roles to the Cloud Deploy service account on your project:
Important: You must grant these roles
to the Cloud Deploy service account, not to your user account. Failure to grant the roles to the correct principal might result in permission errors.
Cloud Run Developer ( roles/run.developer )
IAM Service Account User ( roles/iam.serviceAccountUser )
Cloud Deploy Job Runner ( roles/clouddeploy.jobRunner )
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give the Cloud Deploy service account
the required permissions through custom
roles or other predefined
roles .
Prepare your Skaffold configuration
Cloud Deploy uses Skaffold to provide the details for
what to deploy and how to deploy it properly for your separate
targets .
For this quickstart, you create a skaffold.yaml file, which identifies the
Cloud Run service or job definition to be used to deploy the
sample app.
Open a terminal window.
Create a new directory, named deploy-run-quickstart and navigate into it.
mkdir deploy-run-quickstart
cd deploy-run-quickstart
Create a file named skaffold.yaml with the following contents:
Services
apiVersion: skaffold/v4beta7
kind: Config
metadata:
name: deploy-run-quickstart
profiles:
- name: dev
manifests:
rawYaml:
- run-service-dev.yaml
- name: prod
manifests:
rawYaml:
- run-service-prod.yaml
deploy:
cloudrun: {}
Jobs
apiVersion: skaffold/v4beta7
kind: Config
metadata:
name: deploy-run-quickstart
profiles:
- name: dev
manifests:
rawYaml:
- run-job-dev.yaml
- name: prod
manifests:
rawYaml:
- run-job-prod.yaml
deploy:
cloudrun: {}
Worker pools (Preview)
apiVersion: skaffold/v4beta7
kind: Config
metadata:
name: deploy-run-quickstart
profiles:
- name: dev
manifests:
rawYaml:
- run-worker-pool-dev.yaml
- name: prod
manifests:
rawYaml:
- run-worker-pool-prod.yaml
deploy:
cloudrun: {}
This file is a minimal Skaffold config, identifying your
Cloud Run services, jobs, or worker pools. See the
skaffold.yaml reference for
more information about this file.
Prepare your Cloud Run services, jobs, or worker pools
For this quickstart, you'll create either two different
Cloud Run services, two Cloud Run jobs, or
two Cloud Run worker pools, in the same project.
Cloud Deploy also supports deploying across multiple projects. Also,
we use Skaffold profiles to
make it possible to have two services, jobs, or worker pools in the same
project. When you use different projects, you might not need to use Skaffold
profiles.
Services
Create a file named run-service-dev.yaml with the following contents:
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
name: deploy-run-service-dev
spec:
template:
spec:
containers:
- image: my-app-image
This file defines a Cloud Run service. As the name
deploy-run-service-dev implies, this is your dev service, and
corresponds to the first target in your delivery pipeline progression.
Create a file named run-service-prod.yaml with the following contents:
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
name: deploy-run-service-prod
spec:
template:
spec:
containers:
- image: my-app-image
This file defines another Cloud Run service, and as the
name deploy-run-service-prod implies, this is your prod service, and
corresponds to the second target in your delivery pipeline progression.
These files are Cloud Run service definitions,
which are used to deploy the application. The container image to deploy is
set here as a placeholder, my-app-image , which is replaced with the
specific image when you create the release .
Jobs
Create a file named run-job-dev.yaml with the following contents:
apiVersion: run.googleapis.com/v1
kind: Job
metadata:
name: deploy-run-job-dev
spec:
template:
spec:
template:
spec:
containers:
- image: my-app-image
This file defines a Cloud Run job. As the name
deploy-run-job-dev implies, this is your dev job, and corresponds to
the first target in your delivery pipeline progression.
Create a file named run-job-prod.yaml with the following contents:
apiVersion: run.googleapis.com/v1
kind: Job
metadata:
name: deploy-run-job-prod
spec:
template:
spec:
template:
spec:
containers:
- image: my-app-image
This file defines another Cloud Run job. As the name
deploy-run-job-prod implies, this is your prod job, and corresponds
to the second target in your delivery pipeline progression.
These files are Cloud Run job definitions, which are
used to deploy the application. The container image to deploy is set here as
a placeholder, my-app-image , which is replaced with the specific image
when you create the release .
Worker pools (Preview)
Create a file named run-worker-pool-dev.yaml with the following contents:
apiVersion: run.googleapis.com/v1
kind: WorkerPool
metadata:
name: deploy-run-worker-pool-dev
annotations:
run.googleapis.com/launch-stage: BETA
spec:
template:
spec:
containers:
- image: my-app-image
This file defines a Cloud Run worker pool. As the name
deploy-run-worker-pool-dev implies, this is your dev worker pool, and
corresponds to the first target in your delivery pipeline progression.
Create a file named run-worker-pool-prod.yaml with the following contents:
apiVersion: run.googleapis.com/v1
kind: WorkerPool
metadata:
name: deploy-run-worker-pool-prod
annotations:
run.googleapis.com/launch-stage: BETA
spec:
template:
spec:
containers:
- image: my-app-image
This file defines another Cloud Run worker pool. As the
name deploy-run-worker-pool-prod implies, this is your prod worker
pool, and corresponds to the second target in your delivery pipeline
progression.
These files are Cloud Run worker pool definitions, which
are used to deploy the application. The container image to deploy is set
here as a placeholder, my-app-image , which is replaced with the specific
image when you create the release .
Create your delivery pipeline and targets
You can define your pipeline and targets in one file or in separate files. In
this quickstart, you create a single file.
In the deploy-run-quickstart directory, create a new file:
clouddeploy.yaml , with the following contents:
apiVersion : deploy.cloud.google.com/v1
kind : DeliveryPipeline
metadata :
name : my-run-demo-app-1
description : main application pipeline
serialPipeline :
stages :
- targetId : run-qsdev
profiles : [ dev ]
- targetId : run-qsprod
profiles : [ prod ]
---
apiVersion : deploy.cloud.google.com/v1
kind : Target
metadata :
name : run-qsdev
description : Cloud Run development service
run :
location : projects/ PROJECT_ID /locations/us-central1
---
apiVersion : deploy.cloud.google.com/v1
kind : Target
metadata :
name : run-qsprod
description : Cloud Run production service
run :
location : projects/ PROJECT_ID /locations/us-central1
Note: In this file, targets are included with the delivery pipeline, but you
can define targets in a separate file or multiple separate files.
Register your pipeline and targets with the Cloud Deploy service:
gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 -- project = PROJECT_ID
You now have a pipeline, with targets, ready to deploy your application to
your first target.
Confirm your pipeline and targets:
In the Google Cloud console, navigate to the Cloud Deploy
Delivery pipelines page to view of list of your available delivery
pipelines.
Open the Delivery pipelines page
The delivery pipeline you just created is shown, and the two targets are
listed in the Targets column.
Create a release
A release is the central Cloud Deploy resource representing the
changes being deployed. The delivery pipeline defines the lifecycle of that
release. See
Cloud Deploy service architecture
for details about that lifecycle.
Run the following command from the deploy-run-quickstart directory to create a
release resource that represents the container image to deploy:
Services
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=my-run-demo-app-1 \
--images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a
Jobs
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=my-run-demo-app-1 \
--images=my-app-image=us-docker.pkg.dev/cloudrun/container/job@sha256:8eb3f5e72586de6375abe95aa67511c57c61d35fb37d5670e4d68624a68ef916
Worker pools (Preview)
gcloud deploy releases create test - release - 001 \
--project= PROJECT_ID \
--region=us-central1 \
--delivery-pipeline=my-run-demo-app-1 \
--skaffold-version=2.17.0 \
--images=my-app-image=us-docker.pkg.dev/cloudrun/container/hello@sha256:95ade4b17adcd07623b0a0c68359e344fe54e65d0cb01b989e24c39f2fcd296a
Notice the
--images= flag , which
you use to replace the placeholder ( my-app-image ) in the
service, job, or worker pool definition with
the specific,
SHA-qualified image. Google recommends that you templatize your service and job
definitions this way, and that you use SHA-qualified image names at release
creation.
The --skaffold-version= flag
specifies the Skaffold version to use for deployment. For Cloud Run
worker pool support, you must use Skaffold version 2.17 or later.
As with all releases (unless they include --disable-initial-rollout ),
Cloud Deploy automatically creates a
rollout resource too. The application is
automatically deployed into the first target in the progression.
Promote the release
Note: after you create the release, you might need wait a few minutes before you
continue with this step.
From the Delivery pipelines page, click the my-run-demo-app-1 pipeline.
Open the Delivery pipelines page
The Delivery pipeline details page shows a graphical representation of your
delivery pipeline's progress. In this case, it shows that the release was
deployed to the run-qsdev target.
On the first target in the delivery pipeline visualization, click Promote .
The Promote release dialog is shown. It shows the details of the target
you're promoting to.
Click Promote .
The release is now queued for deployment into run-qsprod . When deployment
is complete, the delivery pipeline visualization shows it as deployed:
View the results in Google Cloud console
In the Google Cloud console, navigate to the Cloud Deploy
Delivery pipelines page to view your my-run-demo-app-1 delivery pipeline.
Open the Delivery pipelines page
Click the name of your delivery pipeline "my-run-demo-app-1".
The pipeline visualization shows the app's progress through the pipeline.
And your release is listed on the Releases tab under Delivery pipeline
details .
Click the release name, test-release-001 .
Your rollouts appear under Rollouts . You can click a rollout to view its
details, including the deployment log.
Accessing your Cloud Run service
By default, you must be authenticated in order to access newly created
Cloud Run services or worker pools. See the Cloud Run
Authentication overview to learn how to
provide credentials and to find out what Identity and Access Management configuration is
required in order access the service without authentication. This doesn't apply
to Cloud Run jobs.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the deploy-qs-dev Cloud Run service, job, or worker pool:
Services
gcloud run services delete deploy - run - service - dev -- region = us - central1 -- project = PROJECT_ID
Jobs
gcloud run jobs delete deploy - run - job - dev -- region = us - central1 -- project = PROJECT_ID
Worker pools (Preview)
gcloud beta run worker-pools delete deploy-run-worker-pool-dev --region=us-central1 --project= PROJECT_ID
Delete the deploy-qs-prod service, job, or worker pool:
Services
gcloud run services delete deploy - run - service - prod -- region = us - central1 -- project = PROJECT_ID
Jobs
gcloud run jobs delete deploy - run - job - prod -- region = us - central1 -- project = PROJECT_ID
Worker pools (Preview)
gcloud beta run worker - pools delete deploy - run - worker - pool - prod -- region = us - central1 -- project = PROJECT_ID
Delete the delivery pipeline, targets, release and rollouts:
gcloud deploy delete -- file = clouddeploy . yaml -- force -- region = us - central1 -- project = PROJECT_ID
Delete the Cloud Storage buckets that Cloud Deploy created.
One ends with _clouddeploy , and the other is [region].deploy-artifacts.[project].appspot.com .
Open the Cloud Storage browser page
That's it, you completed this quickstart!
What's next
Learn more about Cloud Deploy .
Learn the basics of deploying applications .
Read the how-to article for deploying to Cloud Run
Learn how to manage your manifests .
Learn how to combine Google Cloud CI/CD tools to develop and deliver
software effectively to GKE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
