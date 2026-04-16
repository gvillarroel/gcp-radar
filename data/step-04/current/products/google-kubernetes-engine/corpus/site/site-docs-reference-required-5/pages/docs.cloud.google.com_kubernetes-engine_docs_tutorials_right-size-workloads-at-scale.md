---
title: "Right-size your GKE workloads at scale \_|\_ Kubernetes Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/right-size-workloads-at-scale
  title: "Right-size your GKE workloads at scale \_|\_ Kubernetes Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Right-size your GKE workloads at scale
Stay organized with collections
Save and categorize content based on your preferences.
Standard
This tutorial shows you how to right-size your Google Kubernetes Engine (GKE)
workloads with VPA recommendations and usage metrics.
Understand why resource rightsizing is important
Under-provisioning can starve your containers of the necessary resources to run
your applications, making them slow and unreliable. Over-provisioning doesn't
impact the performance of your applications but might increase your monthly
bill.
The following table describes the implications of under-provisioning and
over-provisioning CPU and memory:
Resource
Provisioning status
Risk
Explanation
CPU
Over
Cost
Increases the cost of your workloads by reserving unnecessary
resources.
Under
Performance
Can cause workloads to slow down or become unresponsive.
Not set
Reliability
CPU can be throttled to 0 causing your workloads to become
unresponsive.
Memory
Over
Cost
Increases the cost of your workloads by reserving unnecessary
resources.
Under
Reliability
Can cause applications to terminate with an out of memory (OOM)
error.
Not set
Reliability
kubelet can stop your Pods, at any time, and mark them as
failed.
Objectives
In this tutorial, you will learn how to:
Deploy a sample application.
Export GKE recommendations metrics from
Monitoring to BigQuery.
Use BigQuery and Looker Studio to view
GKE container recommendations across projects.
Costs
In this document, you use the following billable components of Google Cloud:
Monitoring
GKE
BigQuery
Cloud Run
Cloud Build
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Set up your project
Cloud Shell is preinstalled with the software you need
for this tutorial, including Docker ,
kubectl ,
gcloud CLI , and Terraform .
If you don't use Cloud Shell, you must install the gcloud CLI.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
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
Enable the Resource Manager, Google Kubernetes Engine, Cloud Monitoring, BigQuery, Cloud Run, Cloud Build APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudresourcemanager.googleapis.com container.googleapis.com monitoring.googleapis.com bigquery.googleapis.com run.googleapis.com cloudbuild.googleapis.com cloudscheduler.googleapis.com artifactregistry.googleapis.com
Install the Google Cloud CLI.
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
Enable the Resource Manager, Google Kubernetes Engine, Cloud Monitoring, BigQuery, Cloud Run, Cloud Build APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudresourcemanager.googleapis.com container.googleapis.com monitoring.googleapis.com bigquery.googleapis.com run.googleapis.com cloudbuild.googleapis.com cloudscheduler.googleapis.com artifactregistry.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/serviceusage.serviceUsageAdmin, roles/container.clusterAdmin, roles/iam.serviceAccountAdmin, roles/iam.securityAdmin, roles/container.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Set up your environment
To set up your environment, follow these steps
Set environment variables:
export PROJECT_ID = PROJECT_ID
export REGION = us-central1
export ZONE = us-central1-f
export IMAGE = $REGION -docker.pkg.dev/ $PROJECT_ID /main/vpa-recs-image:latest
Replace PROJECT_ID with your Google Cloud
project ID .
Set the default environment variables:
gcloud config set project $PROJECT_ID
gcloud config set compute/region $REGION
gcloud config set compute/zone $ZONE
Clone the code repository.
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
Change to the working directory.
cd kubernetes-engine-samples/cost-optimization/gke-vpa-recommendations
(Optional) Set up the sample application
This is an optional section to deploy a sample application. To use an existing cluster, ensure that Cloud Monitoring is configured on your cluster .
To simulate a realistic environment, you will use a setup script to deploy
Online Boutique .
The following steps install the sample application and modify the default
configuration. For example, the instructions configure the
Horizontal Pod Autoscaler (HPA)
for some workloads and changes resource requests and limits.
Run the setup script:
./scripts/setup.sh
The setup script does the following:
Creates a GKE cluster.
Deploys the Online Boutique sample application.
Updates Pod CPU and memory resource requests.
Configures a HorizontalPodAutoscaler resource for the adservice
workloads to simulate a realistic environment.
The setup script might take up to 10 minutes to complete.
Verify that the sample application is ready:
kubectl get deployment
The output is similar to the following:
NAME READY UP-TO-DATE AVAILABLE AGE
adservice 2/2 2 2 4m54s
cartservice 1/1 1 1 4m55s
checkoutservice 1/1 1 1 4m56s
currencyservice 1/1 1 1 4m55s
emailservice 1/1 1 1 4m56s
frontend 1/1 1 1 4m55s
loadgenerator 1/1 1 1 4m55s
paymentservice 1/1 1 1 4m55s
productcatalogservice 1/1 1 1 4m55s
recommendationservice 1/1 1 1 4m56s
redis-cart 1/1 1 1 4m54s
shippingservice 1/1 1 1 4m54s
Warning: Workloads with HPA enabled may provide incorrect recommendations if
they frequently trigger scaling events.
Create a repository
Create the repository to store the metric exporter image.
Create a new Docker repository:
gcloud artifacts repositories create main --repository-format = docker \
--location = $REGION \
--description = "docker repository"
Setup authentication to Docker repositories:
gcloud auth configure-docker $REGION -docker.pkg.dev
Deploy the image by running the following command:
gcloud builds submit metrics-exporter --region = $REGION --tag $IMAGE
Deploy the application
In the following section, you use Terraform to perform the following tasks:
Create a Service Account and assign the permissions required to manage and
interact with Google Cloud resources.
Grant the monitoring viewer, BigQuery data editor, BigQuery
data owner, BigQuery job user, and Cloud Run invoker roles
to the Service Account.
Deploy a Cloud Run job that pulls a Docker image from the Artifact Registry
and runs it with the specified configuration.
Create a Cloud Scheduler job that triggers the Cloud Run service
daily.
Create a BigQuery dataset, table and view to store metrics data and
recommendations.
Configure Terraform
Set configuration environment variables:
export TF_VAR_BIGQUERY_DATASET = gke_metrics_dataset
export TF_VAR_BIGQUERY_TABLE = gke_metrics
export TF_VAR_RECOMMENDATION_WINDOW_SECONDS = 1209600
export TF_VAR_RECOMMENDATION_DISTANCE = 86400
export TF_VAR_LATEST_WINDOW_SECONDS = 600
export TF_VAR_METRIC_WINDOW = 259200
export TF_VAR_METRIC_DISTANCE = 600
This command includes the following:
TF_VAR_BIGQUERY_DATASET and TF_VAR_BIGQUERY_TABLE : hold the
GKE metric data.
TF_VAR_RECOMMENDATION_WINDOW_SECONDS : the timeframe for
VPA recommendations. Defaults to 1,209,600 seconds, or 14 days.
TF_VAR_RECOMMENDATION_DISTANCE : the interval at which VPA
recommendation data points are returned. Defaults to 86,400 seconds, or
every 1 day.
TF_VAR_LATEST_WINDOW_SECONDS : the timeframe for obtaining the
most recent requested and limit resource values. Defaults to 600 seconds,
or 10 minutes.
METRIC_WINDOW : establishes the timeframe for
GKE usage and utilization metrics. Defaults to 25,9200
seconds, or 3 days.
METRIC_DISTANCE : the interval at which data points are
returned. Defaults to 600 seconds, or every 10 minutes.
Adjust these values based on the needs of your workloads. Example, for batch
workloads which run once a month, update
TF_VAR_RECOMMENDATION_WINDOW_SECONDS and METRIC_WINDOW to 2592000
seconds (30 days).
Deploy the Terraform configuration
Initialize, validate and apply your configuration:
terraform -chdir = terraform init
terraform -chdir = terraform validate
terraform -chdir = terraform apply -var project_id = $PROJECT_ID -var region = $REGION -var image = $IMAGE
This command provides an execution plan and asks for your approval before
making any changes. Review the plan, and if everything is as expected, type
yes to proceed.
After the apply command completes successfully, your resources are created
and managed by Terraform.
Manually run the Cloud Scheduler job:
gcloud scheduler jobs run recommendation-schedule --location ${ REGION }
Verify the Deployment
Select the Logs tab on the workload-recommendations details page.
Verify the metrics logs are being processed in the Cloud Run
console:
Go to Cloud Run
The logs show metrics being written to BigQuery. The output should be
similar to the following:
INFO - Building Row
INFO - Successfully wrote 12 rows to BigQuery table [PROJECT_ID].gke_metric_dataset.gke_metrics.
INFO - Run Completed
If output does not match, wait five minutes and then run the command
gcloud scheduler jobs run recommendation-schedule --location $REGION .
View the container recommendation in BigQuery
Go to the BigQuery page in the Google Cloud console:
Go to BigQuery
Verify the data is visible in the gke_metrics table and the
container_recommendations view. Depending on the number of workloads,
it might take a few minutes to write all metrics to BigQuery.
In the query editor, select all rows in the container_recommendations view:
SELECT * FROM ` PROJECT_ID . gke_metrics_dataset . container_recommendations `
This program extracts the following metrics from cloud monitoring:
Workload details : the project ID, cluster name, controller and
container name.
CPU/memory usage and utilization : the amount of CPU and memory that is
being used by the workload, as well as the percentage of CPU and memory that
is being utilized.
Requested and limits : the amount of CPU and memory that was requested for
the workload, as well as the maximum amount of CPU and memory that is allowed
for the workload.
CPU and memory workload recommendations : recommendations for how much
CPU and memory should be allocated to the workload to ensure that it runs
smoothly, based on VPA recommendations for Deployments and on actual usage and
target utilizations for non-Deployment objects.
Warning: Failing or restarting workloads cause recommendations to be incorrect.
Ensure workloads are healthy before updating resource configurations.
Visualize recommendations in Looker Studio
Looker Studio is a free, self-service business intelligence
platform that lets you build and consume data visualizations, dashboards,
and reports. With Looker Studio, you can connect to your data,
create visualizations, and share your insights with others.
Use Looker Studio to visualize data in the
BigQuery container_recommendations view:
Open the
Workload Rightsizing dashboard template
Click Use my own data .
Select your project.
For Dataset, select gke_metric_dataset .
For Table, select container_recommendations .
Click Add .
Click Add to Report .
Looker Studio template details
The Looker Studio template details page provides the following
information:
GKE Workload Rightsizing Overview : provides an overview of your
clusters, including:
The number of Best Effort and Burstable workloads that are at risk of reliability
and performance issues.
Potential CPU and memory resource savings. Positive values indicate over-provisioning,
while negative values indicate under-provisioning.
Workload Recommendations : Provides recommendations for workload CPU and memory
requests and limits.
GKE Workloads at Risk : Shows workloads that are at the greatest
risk of experiencing reliability and performance issues.
History - Workload Rightsizing - How are we doing? : Provides an historical view
of how well workload rightsizing and reducing the number of Best Effort workloads
has been implemented.
CPU requested and limit container recommendation
If the workloads CPU requested and limit values are equal, the QoS is
considered Guaranteed, and the CPU recommendation is set to the maximum within
the window period of 14 days. Otherwise, the 95th percentile of the CPU
requested recommendation within 14 days is used.
When the CPU request and limit values are equal, the recommendation for CPU
limit is set to the maximum CPU request VPA recommendation for Deployment
objects only and the CPU usage with a target utilization of 70%. If the request
and limit of the workload are not identical, the existing limit ratio is used.
Memory requested and limit container recommendation
Memory recommendations use the maximum VPA recommendation for Deployments
objects only and the maximum memory usage with a target utilization of 80% to
ensure the workloads reliability. You can update the target utilization values
in the container_recommendation view's query.
It's a
best practice to use the same amount of memory for requests and limits
because memory is an incompressible resource. When memory is exhausted, the Pod
must be taken down. To avoid having Pods taken down and destabilizing your
environment, you must set the requested memory to the memory limit.
Prioritizing recommendations
A priority value is assigned to each row to surface workloads which require
immediate attention based on the recommendations. The units of CPU and
memory are different. To normalize the units, the
E2 machine type on-demand price
ratio between predefined CPU and memory is used as an approximation to convert
memory units to CPU units.
The priority is calculated using the following formula:
priority = (CPU requested - CPU recommendation) + ((memory requested -
memory recommendation) / (vCPUs on-demand pricing /memory on-demand pricing ))
For Autopilot, the total resources requested by your deployment
configuration should be within the supported
minimum and maximum values .
View VPA recommendations for multiple projects
To view VPA container recommendations across multiple projects, use a new
project as a scoping project .
When deploying this project in your production environment, add all projects
you want to analyze to the new project's metrics scope.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
The easiest way to avoid billing is to delete the project you created for
the tutorial.
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
What's next
Learn more about GKE cost optimization in
Best practices for running cost-optimized Kubernetes applications on GKE .
Find design recommendations and best practices to optimize the cost of Google Cloud workloads in
Google Cloud Well-Architected Framework: Cost optimization .
Learn more about cost-optimizing your cluster at low-demand periods in
Reducing costs by scaling down GKE clusters during off-peak hours .
Learn more about GKE cost optimization in
Monitoring GKE clusters for cost optimization using Monitoring .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
