---
title: "Execute a Cloud Run job using Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/tutorials/execute-cloud-run-jobs
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/authentication
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/tutorials/execute-cloud-run-jobs
  title: "Execute a Cloud Run job using Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Workflows
Guides
Send feedback
Execute a Cloud Run job using Workflows
Stay organized with collections
Save and categorize content based on your preferences.
Workflows enables you to execute
Cloud Run jobs as part of a workflow
to perform more complex data processing or orchestrate a system of existing jobs.
This tutorial demonstrates how to use Workflows to execute a
Cloud Run job that processes data passed as environment
variables to the job, in response to an event from Cloud Storage.
Note that you can also store the event data in a Cloud Storage
bucket which allows you to encrypt the data using
customer-managed encryption keys .
For more information, see
Execute a Cloud Run job that processes event data saved in Cloud Storage .
Objectives
In this tutorial you will:
Create a Cloud Run job that processes data files in a
Cloud Storage bucket.
Deploy a workflow that does the following:
Accepts a Cloud Storage event as an argument.
Checks if the Cloud Storage bucket specified in the event
is the same bucket used by the Cloud Run job.
If so, uses the Cloud Run Admin API connector
to execute the Cloud Run job.
Create an Eventarc trigger that executes the workflow in response
to events affecting the Cloud Storage bucket.
Trigger the workflow by updating an input data file in the
Cloud Storage bucket.
Costs
In this document, you use the following billable components of Google Cloud:
Artifact Registry
Cloud Build
Cloud Run
Cloud Storage
Eventarc
Workflows
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
Console
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
Enable the Artifact Registry, Cloud Build,
Cloud Run, Cloud Storage, Eventarc,
and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the following roles to the service account:
Cloud Run Admin, Eventarc Event Receiver, Logs Writer, Workflows Invoker .
To grant a role, find the Select a role list, then select the role.
To grant additional roles, click add Add another
role and add each additional role.
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
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
Enable the Artifact Registry, Cloud Build,
Cloud Run, Cloud Storage, Eventarc,
and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the following roles to the service account:
Cloud Run Admin, Eventarc Event Receiver, Logs Writer, Workflows Invoker .
To grant a role, find the Select a role list, then select the role.
To grant additional roles, click add Add another
role and add each additional role.
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
Before creating a trigger for direct events from Cloud Storage,
grant the
Pub/Sub
Publisher role ( roles/pubsub.publisher ) to the
Cloud Storage service agent:
In the Google Cloud console, go to the
IAM page.
Go to IAM
Select the Include Google-provided role grants
checkbox.
In the Principal column, find the Cloud Storage
Service Agent with the form
service- PROJECT_NUMBER @gs-project-accounts.iam.gserviceaccount.com ,
and then click edit Edit
principal in the corresponding row.
Click either add Add role
or
add Add another role .
In the Select a role list, filter for
Pub/Sub Publisher , and then select the
role.
Click Save .
If you enabled the Cloud Pub/Sub service agent on or
before April 8, 2021, to support authenticated Pub/Sub push
requests, grant the
Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
In the Google Cloud console, go to the
IAM page.
Go to IAM
Select the Include Google-provided role grants
checkbox.
In the Name column, find the
Cloud Pub/Sub Service Account
and then click edit Edit
principal in the corresponding row.
Click either add Add role
or
add Add another role .
In the Select a role list, filter for
Service Account Token Creator , and then select the role.
Click Save .
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Cloud Shell supports the /dev/urandom commands in
this tutorial that generate pseudorandom numbers.
gcloud
To use an online terminal with the gcloud CLI already
set up, activate Cloud Shell:
At the bottom of this page, a Cloud Shell session starts and
displays a command-line prompt. It can take a few seconds for the session to
initialize.
Cloud Shell supports the /dev/urandom commands in
this tutorial that generate pseudorandom numbers.
Create or select a Google Cloud project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Make sure that billing is enabled for your Google Cloud project .
Enable the Artifact Registry, Cloud Build,
Cloud Run, Cloud Storage, Eventarc,
and Workflows APIs:
gcloud services enable artifactregistry.googleapis.com \
cloudbuild.googleapis.com \
eventarc.googleapis.com \
run.googleapis.com \
storage.googleapis.com \
workflows.googleapis.com
Create a service account for your workflow to use for authentication
with other Google Cloud services and grant it the appropriate roles.
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for
the service account.
Grant roles to the user-managed service account you created in the
previous step. Run the following command once for each of the following
IAM roles or you can use the --role flag
multiple times in a single command:
roles/eventarc.eventReceiver : to receive events
roles/logging.logWriter : to write logs
roles/run.admin : to execute the Cloud Run
job
roles/workflows.invoker : to invoke workflows
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--role = ROLE
Replace the following:
PROJECT_ID : the project ID where you created
the service account
ROLE : the role to grant to the user-managed
service account
Note: The --role flag affects which resources your
service account can access in your project. You can revoke these roles or
grant additional roles later. In production environments, don't grant the
Owner, Editor, or Viewer roles. Instead, grant a
predefined role
or custom role that meets
your needs.
Before creating a trigger for direct events from Cloud Storage,
grant the Pub/Sub
Publisher role ( roles/pubsub.publisher ) to the
Cloud Storage service agent:
SERVICE_ACCOUNT = " $( gcloud storage service-agent --project = PROJECT_ID ) "
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: ${ SERVICE_ACCOUNT } " \
--role = 'roles/pubsub.publisher'
If you enabled the Cloud Pub/Sub service agent on or before April
8, 2021, to support authenticated Pub/Sub push requests, grant
the Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/iam.serviceAccountTokenCreator
Replace PROJECT_NUMBER with your Google Cloud
project number. You can find your project number on the
Welcome
page of the Google Cloud console or by running the following command:
gcloud projects describe PROJECT_ID --format = 'value(projectNumber)'
Terraform
To use an online terminal with the gcloud CLI already
set up, activate Cloud Shell:
At the bottom of this page, a Cloud Shell session starts and
displays a command-line prompt. It can take a few seconds for the session to
initialize.
Cloud Shell supports the /dev/urandom commands in
this tutorial that generate pseudorandom numbers.
Create or select a Google Cloud project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Make sure that billing is enabled for your Google Cloud project .
Enable the Artifact Registry, Cloud Build,
Cloud Run, Cloud Storage, Eventarc,
and Workflows APIs:
gcloud services enable artifactregistry.googleapis.com \
cloudbuild.googleapis.com \
eventarc.googleapis.com \
run.googleapis.com \
storage.googleapis.com \
workflows.googleapis.com
Create a service account for your workflow to use for authentication
with other Google Cloud services and grant it the appropriate roles.
Additionally, to support direct events from Cloud Storage,
grant the Pub/Sub
Publisher role ( roles/pubsub.publisher ) to the
Cloud Storage service agent.
Modify your main.tf file as shown in the following sample.
For more information, see the
Google provider for Terraform documentation .
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Note that in a typical Terraform workflow, you apply the entire plan at
once. However, for the purposes of this tutorial, you can target a
specific resource. For example:
terraform apply -target="google_service_account.workflows"
# Used to retrieve project information later
data "google_project" "project" {}
# Create a dedicated service account
resource "google_service_account" "workflows" {
account_id = "workflows-run-job-sa"
display_name = "Workflows Cloud Run Job Service Account"
}
# Grant permission to receive Eventarc events
resource "google_project_iam_member" "eventreceiver" {
project = data.google_project.project.id
role = "roles/eventarc.eventReceiver"
member = "serviceAccount:${google_service_account.workflows.email}"
}
# Grant permission to write logs
resource "google_project_iam_member" "logwriter" {
project = data.google_project.project.id
role = "roles/logging.logWriter"
member = "serviceAccount:${google_service_account.workflows.email}"
}
# Grant permission to execute Cloud Run jobs
resource "google_project_iam_member" "runadmin" {
project = data.google_project.project.id
role = "roles/run.admin"
member = "serviceAccount:${google_service_account.workflows.email}"
}
# Grant permission to invoke workflows
resource "google_project_iam_member" "workflowsinvoker" {
project = data.google_project.project.id
role = "roles/workflows.invoker"
member = "serviceAccount:${google_service_account.workflows.email}"
}
# Grant the Cloud Storage service agent permission to publish Pub/Sub topics
data "google_storage_project_service_account" "gcs_account" {}
resource "google_project_iam_member" "pubsubpublisher" {
project = data.google_project.project.id
role = "roles/pubsub.publisher"
member = "serviceAccount:${data.google_storage_project_service_account.gcs_account.email_address}"
}
If you enabled the Cloud Pub/Sub service agent on or before April
8, 2021, to support authenticated Pub/Sub push requests, grant
the Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/iam.serviceAccountTokenCreator
Replace PROJECT_NUMBER with your Google Cloud
project number. You can find your project number on the
Welcome
page of the Google Cloud console or by running the following command:
gcloud projects describe PROJECT_ID --format = 'value(projectNumber)'
Create a Cloud Run job
This tutorial uses a sample Cloud Run job from GitHub. The job
reads data from an input file in Cloud Storage, and performs some
arbitrary processing for each line in the file.
Get the sample code by cloning the sample app repository to your local
machine:
git clone https://github.com/GoogleCloudPlatform/jobs-demos.git
Alternatively, you can
download the sample as a ZIP file
and extract it.
Change to the directory that contains the sample code:
cd jobs-demos/parallel-processing
Create a Cloud Storage bucket to store an input file that can be
written to and trigger an event:
Console
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
Click add Create .
On the Create a bucket page, enter a name for your bucket:
input- PROJECT_ID
Replace PROJECT_ID with the ID of your
Google Cloud project.
Retain the other defaults.
Click Create .
gcloud
Run the
gcloud storage buckets create command:
gcloud storage buckets create gs://input- PROJECT_ID
If the request is successful, the command returns the following message:
Creating gs://input- PROJECT_ID /...
Terraform
To create a Cloud Storage bucket, use the
google_storage_bucket
resource and modify your main.tf file as shown in the
following sample.
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Note that in a typical Terraform workflow, you apply the entire plan
at once. However, for the purposes of this tutorial, you can target a
specific resource. For example:
terraform apply -target="random_id.bucket_name_suffix"
and
terraform apply -target="google_storage_bucket.default"
# Cloud Storage bucket names must be globally unique
resource "random_id" "bucket_name_suffix" {
byte_length = 4
}
# Create a Cloud Storage bucket
resource "google_storage_bucket" "default" {
name = "input-${data.google_project.project.name}-${random_id.bucket_name_suffix.hex}"
location = "us-central1"
storage_class = "STANDARD"
force_destroy = false
uniform_bucket_level_access = true
}
Create an Artifact Registry standard repository where you can store your
container image:
Console
In the Google Cloud console, go to the Artifact Registry
Repositories page:
Go to Repositories
Click add
Create repository .
Enter a name for the repository—for example, my-repo . For each
repository location in a project, repository names must be unique.
Retain the default format which should be Docker .
Retain the default mode which should be Standard .
For the region, select us-central1 (Iowa) .
Retain all the other defaults.
Click Create .
gcloud
Run the command:
gcloud artifacts repositories create REPOSITORY \
--repository-format = docker \
--location = us-central1
Replace REPOSITORY with a unique name for the
repository—for example, my-repo . For each repository location in a
project, repository names must be unique.
Terraform
To create an Artifact Registry repository, use the
google_artifact_registry_repository resource
and modify your main.tf file as shown in the following sample.
Note that in a typical Terraform workflow, you apply the entire plan at
once. However, for the purposes of this tutorial, you can target a
specific resource. For example:
terraform apply -target="google_artifact_registry_repository.default"
# Create an Artifact Registry repository
resource "google_artifact_registry_repository" "default" {
location = "us-central1"
repository_id = "my-repo"
format = "docker"
}
Build the container image using a default Google Cloud buildpack:
export SERVICE_NAME = parallel-job
gcloud builds submit \
--pack image = us-central1-docker.pkg.dev/ PROJECT_ID / REPOSITORY / ${ SERVICE_NAME }
Replace REPOSITORY with the name of your
Artifact Registry repository.
It can take a couple of minutes for the build to complete.
Create a Cloud Run job that deploys the container image:
Console
In the Google Cloud console, go to the Cloud Run
page:
Go to Cloud Run
Click Create job to display the Create job form.
In the form, select
us-central1-docker.pkg.dev/ PROJECT_ID / REPOSITORY /parallel-job:latest
as the Artifact Registry container image URL.
Optional: For the job name, enter parallel-job .
Optional: For the region, select us-central1 (Iowa) .
For the number of tasks that you want to run in the job, enter
10 . All of the tasks must succeed for the job to succeed. By
default, the tasks execute in parallel.
Expand the Container, Variables & Secrets, Connections, Security
section and retain all the defaults with the exception of the following
settings:
Click the General tab.
For the container command, enter python .
For the container argument, enter process.py .
Click the Variables & Secrets tab.
Click Add variable , and enter INPUT_BUCKET for the
name and input- PROJECT_ID for the
value.
Click Add variable , and enter INPUT_FILE for the
name and input_file.txt for the value.
To create the job, click Create .
gcloud
Set the default Cloud Run region:
gcloud config set run/region us-central1
Create the Cloud Run job:
gcloud run jobs create parallel-job \
--image us-central1-docker.pkg.dev/ PROJECT_ID / REPOSITORY /parallel-job:latest \
--command python \
--args process.py \
--tasks 10 \
--set-env-vars = INPUT_BUCKET = input- PROJECT_ID ,INPUT_FILE = input_file.txt
Note that if you don't specify an
image tag , Artifact Registry
looks for the image with the default latest tag.
For a full list of available options when creating a job, refer to
the gcloud run jobs create
command line documentation.
Once the job is created, you should see a message that indicates
success.
Terraform
To create a Cloud Run job, use the
google_cloud_run_v2_job resource
and modify your main.tf file as shown in the following sample.
Note that in a typical Terraform workflow, you apply the entire plan at
once. However, for the purposes of this tutorial, you can target a
specific resource. For example:
terraform apply -target="google_cloud_run_v2_job.default"
# Create a Cloud Run job
resource "google_cloud_run_v2_job" "default" {
name = "parallel-job"
location = "us-central1"
template {
task_count = 10
template {
containers {
image = "us-central1-docker.pkg.dev/${data.google_project.project.name}/${google_artifact_registry_repository.default.repository_id}/parallel-job:latest"
command = [ "python" ]
args = [ "process.py" ]
env {
name = "INPUT_BUCKET"
value = google_storage_bucket.default.name
}
env {
name = "INPUT_FILE"
value = "input_file.txt"
}
}
}
}
}
Deploy a workflow that executes the Cloud Run job
Define and deploy a workflow that executes the Cloud Run job
you just created. A workflow definition is made up of a series of steps
described using the
Workflows syntax .
Console
In the Google Cloud console, go to the
Workflows page:
Go to Workflows
Click
add
Create .
Enter a name for the new workflow, such as cloud-run-job-workflow .
For the region, select us-central1 (Iowa) .
In the Service account field, select the service account you
created earlier.
The service account serves as the workflow's identity. You should have
already granted the Cloud Run Admin role to the service account so
that the workflow can execute the Cloud Run job.
Click Next .
In the workflow editor, enter the following definition for your
workflow:
main :
params : [ event ]
steps :
- init :
assign :
- project_id : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- event_bucket : ${event.data.bucket}
- event_file : ${event.data.name}
- target_bucket : ${"input-" + project_id}
- job_name : parallel-job
- job_location : us-central1
- check_input_file :
switch :
- condition : ${event_bucket == target_bucket}
next : run_job
- condition : true
next : end
- run_job :
call : googleapis.run.v1.namespaces.jobs.run
args :
name : ${"namespaces/" + project_id + "/jobs/" + job_name}
location : ${job_location}
body :
overrides :
containerOverrides :
env :
- name : INPUT_BUCKET
value : ${event_bucket}
- name : INPUT_FILE
value : ${event_file}
result : job_execution
- finish :
return : ${job_execution}
Click Deploy .
gcloud
Create a source code file for your workflow:
touch cloud-run-job-workflow.yaml
Copy the following workflow definition to your source code file:
main :
params : [ event ]
steps :
- init :
assign :
- project_id : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- event_bucket : ${event.data.bucket}
- event_file : ${event.data.name}
- target_bucket : ${"input-" + project_id}
- job_name : parallel-job
- job_location : us-central1
- check_input_file :
switch :
- condition : ${event_bucket == target_bucket}
next : run_job
- condition : true
next : end
- run_job :
call : googleapis.run.v1.namespaces.jobs.run
args :
name : ${"namespaces/" + project_id + "/jobs/" + job_name}
location : ${job_location}
body :
overrides :
containerOverrides :
env :
- name : INPUT_BUCKET
value : ${event_bucket}
- name : INPUT_FILE
value : ${event_file}
result : job_execution
- finish :
return : ${job_execution}
Deploy the workflow by entering the following command:
gcloud workflows deploy cloud-run-job-workflow \
--location = us-central1 \
--source = cloud-run-job-workflow.yaml \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace the following:
SERVICE_ACCOUNT_NAME : the name of
the service account you created earlier
PROJECT_ID : the ID of your
Google Cloud project
The service account serves as the workflow's identity. You should have
already granted the roles/run.admin role to the service account so
that the workflow can execute the Cloud Run job.
Terraform
To create a workflow, use the
google_workflows_workflow resource
and modify your main.tf file as shown in the following sample.
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Note that in a typical Terraform workflow, you apply the entire plan at once.
However, for the purposes of this tutorial, you can target a specific
resource. For example:
terraform apply -target="google_workflows_workflow.default"
# Create a workflow
resource "google_workflows_workflow" "default" {
name = "cloud-run-job-workflow"
region = "us-central1"
description = "Workflow that routes a Cloud Storage event and executes a Cloud Run job"
deletion_protection = false # set to "true" in production
# Note that $$ is needed for Terraform
source_contents = << EOF
main :
params : [ event ]
steps :
- init :
assign :
- project_id : $$ { sys.get_env ( "GOOGLE_CLOUD_PROJECT_ID" )}
- event_bucket : $$ { event.data.bucket }
- event_file : $$ { event.data.name }
- target_bucket : "${google_storage_bucket.default.name}"
- job_name : parallel-job
- job_location : us-central 1
- check_input_file :
switch :
- condition : $$ { event_bucket = = target_bucket }
next : run_job
- condition : true
next : end
- run_job :
call : googleapis.run.v1.namespaces.jobs.run
args :
name : $$ { "namespaces/" + project_id + "/jobs/" + job_name }
location : $$ { job_location }
body :
overrides :
containerOverrides :
env :
- name : INPUT_BUCKET
value : $$ { event_bucket }
- name : INPUT_FILE
value : $$ { event_file }
result : job_execution
- finish :
return : $$ { job_execution }
EOF
}
The workflow does the following:
init step—Accepts a Cloud Storage event as an argument and then
sets necessary variables.
check_input_file step—Checks if the Cloud Storage bucket
specified in the event is the bucket used by the Cloud Run job.
If yes, the workflow proceeds to the run_job step.
If no, the workflow terminates, halting any further processing.
run_job step—Uses the Cloud Run Admin API connector's
googleapis.run.v1.namespaces.jobs.run method
to execute the job. The Cloud Storage bucket and data file names are
passed as override variables from the workflow to the job.
finish step—Returns information about the job execution as the result of
the workflow.
Create an Eventarc trigger for the workflow
To automatically execute the workflow and in turn the Cloud Run
job whenever the input data file is updated, create an Eventarc
trigger that responds to Cloud Storage events in the bucket
containing the input data file.
Console
In the Google Cloud console, go to the
Workflows page:
Go to Workflows
Click the name of your workflow, such as cloud-run-job-workflow .
On the Workflow details page, click
edit
Edit .
On the Edit workflow page, in the Triggers section,
click Add new trigger > Eventarc .
The Eventarc trigger pane opens.
In the Trigger name field, enter a name for the trigger, such as
cloud-run-job-workflow-trigger .
From the Event provider list, select Cloud Storage .
From the Event list, select
google.cloud.storage.object.v1.finalized .
In the Bucket field, select the bucket containing the input data
file. The bucket name has the form
input- PROJECT_ID .
In the Service account field, select the service account you
created earlier.
The service account serves as the trigger's identity. You should have
already granted the following roles to the service account:
Eventarc Event Receiver : to receive events
Workflows Invoker : to execute workflows
Click Save trigger .
The Eventarc trigger now appears in the Triggers
section on the Edit workflow page.
Click Next .
Click Deploy .
gcloud
Create an Eventarc trigger by running the following command:
gcloud eventarc triggers create cloud-run-job-workflow-trigger \
--location = us \
--destination-workflow = cloud-run-job-workflow \
--destination-workflow-location = us-central1 \
--event-filters = "type=google.cloud.storage.object.v1.finalized" \
--event-filters = "bucket=input- PROJECT_ID " \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
SERVICE_ACCOUNT_NAME : the name of the service
account you created earlier.
The service account serves as the trigger's identity. You should have
already granted the following roles to the service account:
roles/eventarc.eventReceiver : to receive events
roles/workflows.invoker : to execute workflows
Terraform
To create a trigger, use the
google_eventarc_trigger resource
and modify your main.tf file as shown in the following sample.
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Note that in a typical Terraform workflow, you apply the entire plan at once.
However, for the purposes of this tutorial, you can target a specific
resource. For example:
terraform apply -target="google_eventarc_trigger.default"
# Create an Eventarc trigger that routes Cloud Storage events to Workflows
resource "google_eventarc_trigger" "default" {
name = "cloud-run-job-trigger"
location = google_workflows_workflow.default.region
# Capture objects changed in the bucket
matching_criteria {
attribute = "type"
value = "google.cloud.storage.object.v1.finalized"
}
matching_criteria {
attribute = "bucket"
value = google_storage_bucket.default.name
}
# Send events to Workflows
destination {
workflow = google_workflows_workflow.default.id
}
service_account = google_service_account.workflows.email
}
Note: Although your trigger is created immediately, it can take up to two
minutes for a trigger to propagate and filter events.
Whenever a file is uploaded or overwritten in the Cloud Storage
bucket containing the input data file, the workflow is executed with the
corresponding Cloud Storage event as an argument.
Trigger the workflow
Test the end-to-end system by updating the input data file in
Cloud Storage.
Generate new data for the input file and upload it to Cloud Storage
in the location expected by the Cloud Run job:
base64 /dev/urandom | head -c 100000 >input_file.txt
gcloud storage cp input_file.txt gs://input- PROJECT_ID /input_file.txt
If you created a Cloud Storage bucket using Terraform, you can
retrieve the name of the bucket by running the following command:
gcloud storage buckets list gs://input*
The Cloud Run job can take a few minutes to run.
Confirm that the Cloud Run job ran as expected by viewing
the job executions:
gcloud config set run/region us-central1
gcloud run jobs executions list --job = parallel-job
You should see a successful job execution in the output indicating that
10/10 tasks have completed.
Learn more about
triggering a workflow with events or Pub/Sub messages .
Clean up
If you created a new project for this tutorial, delete the project .
If you used an existing project and wish to keep it without the changes added
in this tutorial, delete resources created for the tutorial .
Delete the project
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
Delete the resources you created in this tutorial:
Delete the Eventarc trigger:
gcloud eventarc triggers delete cloud-run-job-workflow-trigger --location = us
Delete the workflow:
gcloud workflows delete cloud-run-job-workflow --location = us-central1
Delete the Cloud Run job:
gcloud run jobs delete parallel-job
Delete the Cloud Storage bucket created for the input data:
gcloud storage rm --recursive gs://input- PROJECT_ID /
Delete the Artifact Registry repository:
gcloud artifacts repositories delete REPOSITORY --location = us-central1
What's next
Learn more about Cloud Run jobs .
Learn more about Workflows connectors .
Learn more about Workflows .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
