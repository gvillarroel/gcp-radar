---
title: "Step 1: Prepare your project \_|\_ Manufacturing Data Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/step-one-prepare-your-project
  title: "Step 1: Prepare your project \_|\_ Manufacturing Data Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Manufacturing Data Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Step 1: Prepare your project
This page describes the steps to prepare your Google Cloud project before
deploying Manufacturing Data Engine (MDE) using Terraform.
Note: Access to the MDE deployment assets requires approval from your Google Cloud
account team. We suggest reaching out to them as soon as possible if you are interested in testing
or deploying MDE. If you don't know who your Google Cloud account team is,
feel free to use the Contact Us button on the top right of the screen and we will be in
touch shortly.
Overview
MDE is delivered as a packaged solution.
A Terraform script deploys all the required components and the integration code
into your Google Cloud project. This unlocks maximum flexibility for you to
modify and extends the architecture based on your needs.
The deployment script automatically sets up and configures the solution, assuming
prerequisites such as a Google Cloud project and permissions
are in place. Some customers may have extensive, customized Google Cloud
restrictions in place. If this is the case, extra work (via Google Cloud Consulting
or a Systems Integration partner) may be required for the deployment to navigate
around these restrictions.
Caution: While the provided commands and Terraform scripts create a stable
MDE deployment, they are primarily intended
for demo, proof-of-concept, or other non-production use-cases. It is expected
that customers and partners customize these scripts for production deployments to meet
their specific security, networking, and other requirements.
1. Prepare your client environment
Your client environment needs to have the following CLI tools installed in their
most updated version:
Google Cloud CLI with the following additional components installed:
kubectl
cbt
Terraform CLI
( v1.9.x or later)
Make sure you also check the Minimum requirements for Terraform and the Terraform providers .
Helm CLI (v3.9.x or later)
You can use any client environment to deploy MDE,
but you can save time by deploying it from Cloud Shell since it has most of
the required tools already installed.
Activate Cloud Shell
2. Prepare your Google Cloud project
Make sure your Google Cloud project has the following characteristics:
An active Cloud Billing account.
It's part of an organization with an active Cloud Identity or Workspace account.
Note: The Google Workspace requirement is not a hard requirement, you can
set up your project without an organization as long as you have the right
permissions to create network and infrastructure resources. If you plan on
deploying Manufacturing Connect (MC), then you need an active domain.
Set up the default project to the MDE
deployment project using the following command:
gcloud config set project PROJECT_ID
Replace the following:
PROJECT_ID with the MDE
deployment project ID.
3. Create service accounts
You will need two different Service Accounts in your Google Cloud project:
mde-df-worker@ PROJECT_ID .iam.gserviceaccount.com
mde-tf@ PROJECT_ID .iam.gserviceaccount.com .
Replace the following:
PROJECT_ID with the MDE
deployment project ID.
Note: If your service account names differ from those listed, make sure to
replace them accordingly in any references to these accounts in Terraform.
A user in your org with the roles/iam.serviceAccountCreator role can create
the mde-df-worker and mde-tf service accounts with the
following commands:
gcloud iam service-accounts create mde-df-worker \
--description = "Manufacturing Data Engine Dataflow Worker Service Account" \
--display-name = "Manufacturing Data Engine Dataflow Worker Service Account"
gcloud iam service-accounts create mde-tf \
--description = "Manufacturing Data Engine Terraform Service Account" \
--display-name = "Manufacturing Data Engine Terraform Service Account"
4. Grant roles for the mde-tf service account
Grant the mde-tf service account, used by Terraform for deployments,
the following roles:
roles/bigquery.admin
roles/bigtable.admin
roles/cloudsql.admin
roles/compute.instanceAdmin
roles/compute.loadBalancerAdmin
roles/compute.networkAdmin
roles/compute.securityAdmin
roles/container.admin
roles/container.developer
roles/dataflow.admin
roles/dns.admin
roles/iam.serviceAccountAdmin
roles/iam.serviceAccountUser
roles/pubsub.admin
roles/resourcemanager.projectIamAdmin
roles/secretmanager.admin
roles/secretmanager.secretVersionManager
roles/serviceusage.serviceUsageAdmin
roles/storage.admin
roles/monitoring.admin
roles/redis.admin
roles/file.editor
A user with the roles/iam.securityAdmin role or equivalent permissions can
grant the required roles to the mde-tf service account with the
following commands:
export PROJECT_ID = $( gcloud config get-value project )
export SA_TERRAFORM = "mde-tf"
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/bigquery.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/dataflow.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/bigtable.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/cloudsql.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/compute.instanceAdmin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/compute.loadBalancerAdmin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/compute.networkAdmin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/compute.securityAdmin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/container.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/container.developer'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/dns.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/iam.serviceAccountAdmin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/iam.serviceAccountUser'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/pubsub.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/resourcemanager.projectIamAdmin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/secretmanager.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/secretmanager.secretVersionManager'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/serviceusage.serviceUsageAdmin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/storage.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/monitoring.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/redis.admin'
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_TERRAFORM } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/file.editor'
5. Impersonate the mde-tf service account
Allow your user account to impersonate the mde-tf service account
if you have the roles/iam.serviceAccountTokenCreator role.
A user with the roles/iam.serviceAccountAdmin role or equivalent
permissions can grant your user account the role on the mde-tf service
account using the following command:
export USER_EMAIL = $( gcloud auth list --filter = status:ACTIVE --format = "value(account)" )
export PROJECT_ID = $( gcloud config get-value project )
gcloud iam service-accounts add-iam-policy-binding \
--role roles/iam.serviceAccountTokenCreator \
--member "user: ${ USER_EMAIL } " \
"mde-tf" @ " ${ PROJECT_ID } " .iam.gserviceaccount.com
6. Enable the Google Cloud APIs
Make sure Google Cloud APIs are enabled.
The following Google Cloud APIs must be enabled in order to execute
Terraform scripts:
compute.googleapis.com
iamcredentials.googleapis.com
cloudresourcemanager.googleapis.com
A user with the roles/servicemanagement.serviceConsumer role or equivalent
permissions can enable the APIs using the following command:
gcloud services enable \
compute.googleapis.com \
iamcredentials.googleapis.com \
cloudresourcemanager.googleapis.com
7. Prepare a Cloud Storage Bucket
Prepare a Cloud Storage Bucket to store Terraform state:
Terraform requires a Cloud Storage bucket to save Terraform state
( PROJECT_ID -tf ), and the mde-tf service
account must have read and write permissions on this bucket.
Note: This guide assumes that the Cloud Storage bucket is named
PROJECT_ID -tf . If you used a different name,
replace your bucket name whenever you encounter a reference to
PROJECT_ID -tf .
A user with the roles/storage.admin role or equivalent permissions can
create the bucket and grant the mde-tf the requisite permissions with
the following command:
export PROJECT_ID = $( gcloud config get-value project )
gcloud storage buckets create "gs:// ${ PROJECT_ID } -tf"
gcloud storage buckets add-iam-policy-binding gs:// " ${ PROJECT_ID } -tf" \
--member = "serviceAccount:mde-tf@ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/storage.objectViewer'
gcloud storage buckets add-iam-policy-binding gs:// " ${ PROJECT_ID } -tf" \
--member = "serviceAccount:mde-tf@ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = 'roles/storage.objectCreator'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
