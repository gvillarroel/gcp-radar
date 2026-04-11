---
title: "Running services on a schedule \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/triggering/using-scheduler
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/triggering/using-scheduler
  title: "Running services on a schedule \_|\_ Google Cloud Documentation"
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
Running services on a schedule
Stay organized with collections
Save and categorize content based on your preferences.
You can use Cloud Scheduler to securely trigger a Cloud Run
service on a schedule. This is similar to using cron jobs.
Possible use cases include:
Performing backups on a timed basis
Performing recurrent administration tasks, such as:
Re-generating a sitemap
Deleting old data, content, configuration, or revisions
Synchronizing content between data systems
Processing daily email notifications
Verifying and reporting on access to downstream services
Generating documents, such as bills
This page shows how to securely use Cloud Scheduler with
Cloud Run in the same Google Cloud project.
Before you start
Enable the Cloud Scheduler API on the project
you are using.
Creating and deploying your service
To create and deploy:
In your service, implement the job that you want to run on a schedule.
Note which request type your service is expecting to receive the job requests
from, for example, GET or POST . When you create the scheduled job that
invokes your service, you'll need to specify the HTTP method that matches this.
When you deploy the service you are using with
Cloud Scheduler, make sure you select ** Require authentication.**
Don't allow public access.
The following example shows how to deploy a Cloud Run service using Terraform:
resource "google_cloud_run_v2_service" "default" {
name = "my-scheduled-service"
location = "us-central1"
deletion_protection = false # set to "true" in production
template {
containers {
image = "us-docker.pkg.dev/cloudrun/container/hello"
}
}
# Use an explicit depends_on clause to wait until API is enabled
depends_on = [
google_project_service.run_api
]
}
Replace us-docker.pkg.dev/cloudrun/container/hello with a reference to your own container image.
Creating a service account for Cloud Scheduler
You need to create a service account to associate with Cloud Scheduler,
and give that service account the permission to invoke your Cloud Run
service. You can use an existing service account to represent Cloud Scheduler,
or you can create a new one.
To create a service account and give it permission to invoke the
Cloud Run service:
Console
In the Google Cloud console, go to the Service Accounts
page.
Go to Service Accounts
Select a project.
Enter a service account name to display in the Google Cloud console.
The Google Cloud console generates a service account ID based on
this name. Edit the ID if necessary. You cannot change the ID later.
Optional: Enter a description of the service account.
Click Create and continue .
Optional: Click the Select a role field.
Select Cloud Run > Cloud Run Invoker .
Click Done .
Command line
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME \
--display-name " DISPLAYED_SERVICE_ACCOUNT_NAME "
Replace
SERVICE_ACCOUNT_NAME with a lower case name unique within
your Google Cloud project, for example my-invoker-service-account-name .
DISPLAYED_SERVICE_ACCOUNT_NAME with the name you want to
display for this service account, for example, in the console, for example,
My Invoker Service Account .
For Cloud Run, give your service account permission to invoke
your service:
gcloud run services add-iam-policy-binding SERVICE \
--member = serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--role = roles/run.invoker
Replace
SERVICE with the name of the service you want to be
invoked by Cloud Scheduler.
SERVICE_ACCOUNT_NAME with the name of the service account.
PROJECT_ID with your Google Cloud project ID.
Grant your service account access to the project so that it has
permission to complete specific actions on the resources in your project:
gcloud projects add-iam-policy-binding RESOURCE_ID \
--member = PRINCIPAL --role = roles/run.invoker
Replace
RESOURCE_ID : Your Google Cloud project ID.
PRINCIPAL : An identifier for the principal,
or member, which usually has the following form:
PRINCIPAL_TYPE : ID . For example,
user:my-user@example.com . For a full list of the values that
PRINCIPAL can have, see the
Policy Binding reference .
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
To create a service account using Terraform:
resource "google_service_account" "default" {
account_id = "scheduler-sa"
description = "Cloud Scheduler service account; used to trigger scheduled Cloud Run jobs."
display_name = "scheduler-sa"
# Use an explicit depends_on clause to wait until API is enabled
depends_on = [
google_project_service.iam_api
]
}
resource "google_cloud_run_service_iam_member" "default" {
location = google_cloud_run_v2_service.default.location
service = google_cloud_run_v2_service.default.name
role = "roles/run.invoker"
member = "serviceAccount:${google_service_account.default.email}"
}
Creating a Cloud Scheduler job
You'll need to create a job that invokes your service at specified times. You
can use either the console or the command line:
To create a job you can use either the console or the gcloud command line.
Click on the appropriate tab:
Console
Visit the Cloud Scheduler console page.
Go to Cloud Scheduler
Click Create job .
Supply a name for the job.
Specify the frequency, or job interval, at which the job is to run, using
a configuration string. For example, the string 0 */3 * * * runs the job
every 3 hours. The string you supply here can be any
crontab compatible
string.
For more information, see Configuring Job Schedules .
From the dropdown list, choose the timezone to be used for the job
frequency.
Specify HTTP as the target:
Specify the fully qualified URL of your service, for example
https://myservice-abcdef-uc.a.run.app The job will send requests to this
URL.
Specify the HTTP method: the method must match what your
previously deployed Cloud Run service is expecting. The default
is POST .
Optionally, specify the data to be sent to the target. This data is sent in
the body of the request when either the POST or PUT HTTP method is selected.
Click More to show the auth settings.
From the dropdown menu, select Add OIDC token .
In the Service account field, copy the service account email of the
service account you created previously .
In the Audience field, copy the full URL of your service.
Click Create to create and save the job.
Command line
You need to use OIDC authentication to access an authenticated Cloud Run service
from Cloud Scheduler. OIDC authentication includes the service account and audience flags.
For more information, see Use Authentication for HTTP Targets .
To create the Cloud Scheduler job:
gcloud scheduler jobs create http test-job --schedule "5 * * * *"
--http-method = HTTP-METHOD
--uri = SERVICE-URL
--oidc-service-account-email = SERVICE-ACCOUNT-EMAIL
--oidc-token-audience = SERVICE-URL
Replace
HTTP-METHOD with the HTTP method (i.e. GET, POST, PUT, etc).
SERVICE-URL with your service URL.
SERVICE-ACCOUNT-EMAIL with your service account email.
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
To create a Cloud Scheduler job for the Cloud Run service:
resource "google_cloud_scheduler_job" "default" {
name = "scheduled-cloud-run-job"
region = "us-central1"
description = "Invoke a Cloud Run container on a schedule."
schedule = "*/8 * * * *"
time_zone = "America/New_York"
attempt_deadline = "320s"
retry_config {
retry_count = 1
}
http_target {
http_method = "POST"
uri = google_cloud_run_v2_service.default.uri
oidc_token {
service_account_email = google_service_account.default.email
}
}
# Use an explicit depends_on clause to wait until API is enabled
depends_on = [
google_project_service.scheduler_api
]
}
Your Cloud Run service will be triggered via a request by the
Cloud Scheduler job at the frequency you defined. You can confirm and
monitor this by examining the logs for this service .
What's next
Logging and viewing logs
Monitoring health and performance
Triggering from Pub/Sub
Invoking with HTTPS
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
