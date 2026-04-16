---
title: "Enable and disable the Cloud Composer service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/access-control
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service
  title: "Enable and disable the Cloud Composer service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Enable and disable the Cloud Composer service
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how to enable and disable the Cloud Composer service
in your Google Cloud project.
For information about services management on Google Cloud, see
Enabling and Disabling Services .
For a list of services required by Cloud Composer in
VPC Service Controls configurations, see Configure VPC Service Controls .
Enable the Cloud Composer service
This section describes how to enable the Cloud Composer service in
your Google Cloud project.
Before you begin
To enable the Cloud Composer service, you must have the correct
Identity and Access Management permissions. To learn about the IAM
requirements for Service Usage, see Service Usage page
for Access Control .
Make sure that billing is enabled in your project.
Enable Cloud Composer API
Console
Enable the Cloud Composer API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
gcloud
Enable the composer.googleapis.com API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable composer.googleapis.com
API
Use the services.enable method to enable
the composer.googleapis.com API.
Terraform
Use the google_project_service
resource to configure the composer.googleapis.com API.
Important: If you disable the BigQuery API, your Cloud Composer
environment stops working. This happens because Google Kubernetes Engine depends
on BigQuery and Cloud Composer inherits this dependency
from the Kubernetes Engine API.
Disable the Cloud Composer service
This section describes how to disable the Cloud Composer service in
your Google Cloud project.
Before you begin
Warning: You cannot recover environments in your project after you disable
the Cloud Composer API. After the API is disabled, you still have
access to data stored in your environment's buckets, but the environments
themselves are no longer usable.
To disable the Cloud Composer service, you must have the correct
Identity and Access Management permissions. To learn about the IAM
requirements for Service Usage, see the Service Usage
page for Access Control .
Make sure that all Cloud Composer environments in
your project are deleted. Disabling the API irreversibly deletes tenant
project parts of Cloud Composer environments, and these
environments become unusable.
To avoid additional charges, complete the following steps for each
environment before you disable the Cloud Composer API:
Pause the DAGs.
If required, export the environment's data, such as DAGs from the
environment's bucket.
Delete your environment , including the resources that are
not deleted automatically.
Disable Cloud Composer API
To disable the Cloud Composer service:
Console
In the Google Cloud console, go to the Cloud Composer API
page.
Go to Cloud Composer API
Click Manage .
Click Disable API .
gcloud
Run the gcloud services disable command:
gcloud services disable composer.googleapis.com
API
Use the services.disable method to disable
the composer.googleapis.com API.
Terraform
Remove the configuration for the composer.googleapis.com API. You usually
use the google_project_service
resource to configure Google Cloud services.
Services required by Cloud Composer
Upcoming deprecation: We're planning to
phase out the APIs that aren't required by Cloud Composer 3
This section describes services that are required by
Cloud Composer. In some cases, organization or project
administrators can restrict what Google services can be used in their projects.
The following services are required by Cloud Composer:
artifactregistry.googleapis.com
cloudbuild.googleapis.com
composer.googleapis.com
compute.googleapis.com
container.googleapis.com
deploymentmanager.googleapis.com
logging.googleapis.com
cloudkms.googleapis.com, if you are using Cloud KMS or CMEK keys
monitoring.googleapis.com
pubsub.googleapis.com
storage.googleapis.com
secretmanager.googleapis.com, if you are using Secret Manager
as a secret backend
cloudresourcemanager.googleapis.com
servicedirectory.googleapis.com
Google services like Cloud DNS or IAM are already
allowed by default in most projects.
In addtion, allow using all services that your DAGs are using, for example:
bigquery.googleapis.com
dataflow.googleapis.com
datacatalog.googleapis.com
You can find the *.googleapis.com names of the services in API pages
linked from the API Explorer page .
Upcoming deprecation of services that aren't required by Cloud Composer 3
We're planning to phase out the APIs that aren't required by Cloud Composer 3:
Starting February 27, 2026 , the following APIs will
become fully detachable . Deactivating these APIs won't cause the
deactivation of the Cloud Composer API.
artifactregistry.googleapis.com
cloudbuild.googleapis.com
container.googleapis.com
pubsub.googleapis.com
sqladmin.googleapis.com
Starting May 27, 2026 , these APIs
will no longer be enabled automatically when you enable the
Cloud Composer API. To create Cloud Composer 2 environments in new
projects, the group of detached APIs must be enabled manually.
Existing Cloud Composer 3 and Cloud Composer 2 environments in projects where
the Cloud Composer API is already enabled won't be impacted. You can do the
following:
After February 27, 2026 , if your project has only Cloud Composer 3
environments, then you can manually disable the detached APIs.
After February 27, 2026 , if your project has
Cloud Composer 2 environments, then we recommend keeping these APIs
enabled because disabling them might lead to environment's malfunction.
After May 27, 2026 , if you use automation scripts to provision
Cloud Composer 2 environments, then make sure that the listed APIs are
enabled in addition to the Cloud Composer API.
What's next
Create environments
Access control
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
