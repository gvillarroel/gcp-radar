---
title: "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run
source_metadata:
  url: https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus
  title: "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Autoscale worker pools based on Prometheus metrics
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— Cloud Run External Metrics Autoscaling (CREMA)
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Preview
— Cloud Run worker pools
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This tutorial describes how to autoscale your Cloud Run worker pools
based on Prometheus metrics using Cloud Run External Metrics Autoscaling (CREMA) .
The CREMA autoscaler service performs a ratio-based calculation using data
from Prometheus. The autoscaler service dynamically adjusts the instance count to ensure
your worker pool has the right amount of resources for the current workload. CREMA
calculates the CPU utilization of your worker pool over a specific time period
and compares it against your configured threshold to adjust instances.
Objectives
In this tutorial, you will:
Deploy a Cloud Run worker pool to run a
background workload that reports utilization metrics to Google Cloud managed
service for Prometheus.
Deploy the autoscaler CREMA service to dynamically
scale the worker pool based on the Prometheus metrics.
Test your CREMA service by observing service logs and
verifying instance count changes in the Google Cloud console.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Build
Artifact Registry
Cloud Run
Cloud Monitoring
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
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
Enable the Cloud Run, Parameter Manager, Artifact Registry, Cloud Build, and Cloud Monitoring APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install and initialize the gcloud CLI .
Update components:
gcloud components update
Set the following configuration variables for CREMA used in this tutorial:
export PROJECT_ID = PROJECT_ID
export REGION = us-central1
export CREMA_SA_NAME = crema-service-account
export CONSUMER_SA_NAME = consumer-service-account
export CONSUMER_WORKER_POOL_NAME = worker-pool-consumer
export CREMA_SERVICE_NAME = my-crema-service
Replace PROJECT_ID with the ID of your Google Cloud project.
Set your project ID by running the following command:
gcloud config set project $PROJECT_ID
You incur charges for your Cloud Run scaling service based on how often you trigger scaling. For more information, estimate costs with the pricing calculator .
Required roles
To get the permissions that
you need to complete the tutorial,
ask your administrator to grant you the
following IAM roles on your project:
Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin )
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Cloud Run Admin ( roles/run.admin )
Create Service Accounts ( roles/iam.serviceAccountCreator )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
Parameter Manager Admin ( roles/parametermanager.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: IAM basic
roles might also contain permissions to complete the tutorial. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
Create custom service accounts
This tutorial requires the following two service accounts with minimum
permissions required to use the provisioned
resources:
Consumer service account: identity for the worker pool that
runs a background workload. Run the following command to create the consumer service
account:
gcloud iam service-accounts create $CONSUMER_SA_NAME \
--display-name = "Consumer service account"
CREMA service account: identity for the autoscaler. Run the following
command to create the CREMA service account:
gcloud iam service-accounts create $CREMA_SA_NAME \
--display-name = "CREMA service account"
Grant additional permissions to your custom service accounts
To scale the worker pool, grant the following permissions
on the custom service accounts:
Grant your CREMA service account permission to read from the Parameter Manager:
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member = "serviceAccount: $CREMA_SA_NAME @ $PROJECT_ID .iam.gserviceaccount.com" \
--role = "roles/parametermanager.parameterViewer"
Grant your CREMA service account the permission to scale the worker pool:
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member = "serviceAccount: $CREMA_SA_NAME @ $PROJECT_ID .iam.gserviceaccount.com" \
--role = "roles/run.developer"
Grant your CREMA service account the service account user role:
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member = "serviceAccount: $CREMA_SA_NAME @ $PROJECT_ID .iam.gserviceaccount.com" \
--role = "roles/iam.serviceAccountUser"
Grant your CREMA service account permission to view metrics:
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member = "serviceAccount: $CREMA_SA_NAME @ $PROJECT_ID .iam.gserviceaccount.com" \
--role = "roles/monitoring.viewer"
Grant your CREMA service account permission to write metrics:
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member = "serviceAccount: $CREMA_SA_NAME @ $PROJECT_ID .iam.gserviceaccount.com" \
--role = "roles/monitoring.metricWriter"
Deploy a Cloud Run worker pool
Deploy a worker pool with 0 instances for CREMA to scale up:
gcloud beta run worker-pools deploy $CONSUMER_WORKER_POOL_NAME \
--image us-docker.pkg.dev/cloudrun/container/worker-pool:latest \
--instances 0 \
--region $REGION \
--memory 4G \
--cpu 4 \
--service-account = " $CONSUMER_SA_NAME @ $PROJECT_ID .iam.gserviceaccount.com"
Deploy the autoscaler CREMA service
Deploy the CREMA service to autoscale your worker pool based on Prometheus metrics.
Configure the autoscaler
This tutorial uses the Parameter Manager to
store the YAML configuration file for CREMA.
Create a parameter in the Parameter Manager to store parameter versions
for CREMA:
PARAMETER_ID = crema-config
PARAMETER_REGION = global
gcloud parametermanager parameters create $PARAMETER_ID --location = $PARAMETER_REGION --parameter-format = YAML
In your root directory, create a YAML file, my-crema-config.yaml to define the autoscaler configuration. Set the autoscaling threshold to 50% CPU utilization:
apiVersion : crema/v1
kind : CremaConfig
spec :
pollingInterval : 30
triggerAuthentications :
- metadata :
name : google-crema-auth
spec :
podIdentity :
provider : gcp
scaledObjects :
- spec :
scaleTargetRef :
name : projects/ PROJECT_ID /locations/us-central1/workerPools/worker-pool-consumer
minReplicaCount : 1
maxReplicaCount : 20
triggers :
- type : prometheus
metadata :
serverAddress : https://monitoring.googleapis.com/v1/projects/ PROJECT_ID /location/global/prometheus
threshold : "0.5"
query : |
histogram_quantile(
0.50,
sum by (le) (
increase(
run_googleapis_com:container_cpu_utilizations_bucket{
monitored_resource="cloud_run_worker_pool",
worker_pool_name="worker-pool-consumer",
location="us-central1",
project_id=" PROJECT_ID "
}[2m]
)
)
)
authenticationRef :
name : google-crema-auth
advanced :
horizontalPodAutoscalerConfig :
behavior :
scaleDown :
stabilizationWindowSeconds : 300
Replace PROJECT_ID with the Google Cloud project ID.
Upload your local YAML file as a new parameter version:
LOCAL_YAML_CONFIG_FILE = my-crema-config.yaml
PARAMETER_VERSION = 1
gcloud parametermanager parameters versions create $PARAMETER_VERSION \
--location = $PARAMETER_REGION \
--parameter = $PARAMETER_ID \
--payload-data-from-file = $LOCAL_YAML_CONFIG_FILE
Run the following command to verify your parameter addition is successful:
gcloud parametermanager parameters versions list \
--parameter = $PARAMETER_ID \
--location = $PARAMETER_REGION
You should see the parameter path, such as projects/ PROJECT_ID /locations/global/parameters/crema-config/versions/1 .
Deploy the service to scale your workloads
To deploy the service to scale your worker pool, run the following command with
a prebuilt container image:
CREMA_CONFIG_PARAM_VERSION = projects/ $PROJECT_ID /locations/ $PARAMETER_REGION /parameters/ $PARAMETER_ID /versions/ $PARAMETER_VERSION
IMAGE = us-central1-docker.pkg.dev/cloud-run-oss-images/crema-v1/autoscaler:1.0
gcloud beta run deploy $CREMA_SERVICE_NAME \
--image = ${ IMAGE } \
--region = ${ REGION } \
--service-account = " ${ CREMA_SA_NAME } " \
--no-allow-unauthenticated \
--no-cpu-throttling \
--base-image = us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/java25 \
--labels = created-by = crema \
--set-env-vars = "CREMA_CONFIG= ${ CREMA_CONFIG_PARAM_VERSION } ,OUTPUT_SCALER_METRICS=True"
Test your autoscaling service
To verify your autoscaling service is working correctly, check
the Logs tab of the Cloud Run service .
The CREMA autoscaler service scales up the consumer worker instances from 0.
You should see the following
logs in your service's logs each time metrics are refreshed:
[INFO] [METRIC-PROVIDER] Starting metric collection cycle
[INFO] [METRIC-PROVIDER] Successfully fetched scaled object metrics ...
[INFO] [METRIC-PROVIDER] Sending scale request ...
[INFO] [SCALER] Received ScaleRequest ...
[INFO] [SCALER] Current instances ...
[INFO] [SCALER] Recommended instances ...
Cloud Run labels each log message with the component that emitted it.
Clean up
To avoid additional charges to your Google Cloud account, delete all the resources
you deployed with this tutorial.
Delete the project
If you created a new project for this tutorial, delete the project.
If you used an existing project and need to keep it without the changes you added
in this tutorial, delete resources that you created for the tutorial .
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
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
Delete tutorial resources
Delete the Cloud Run service you deployed in this tutorial.
Cloud Run services don't incur costs until they receive requests.
To delete your Cloud Run service, run the following command:
gcloud run services delete SERVICE-NAME
Replace SERVICE-NAME with the name of your service.
You can also delete Cloud Run services from the
Google Cloud console .
Remove the gcloud default region configuration you added during tutorial
setup:
gcloud config unset run / region
Remove the project configuration:
gcloud config unset project
Delete other Google Cloud resources created in this tutorial:
Delete the Cloud Run worker pool
Delete the worker pool container image from Artifact Registry
Delete the CREMA service
Delete the service accounts
Delete the parameters in Parameter Manager
What's next
Learn more about Cloud Run worker pools .
Explore other Cloud Run demos, tutorials, and samples .
Configure other KEDA scalers with CREMA.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
