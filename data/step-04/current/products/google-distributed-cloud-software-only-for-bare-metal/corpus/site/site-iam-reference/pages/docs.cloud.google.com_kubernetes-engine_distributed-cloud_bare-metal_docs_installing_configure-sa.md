---
title: "Set up Google Cloud resources \_|\_ Google Distributed Cloud (software only)\
  \ for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
  title: "Set up Google Cloud resources \_|\_ Google Distributed Cloud (software only)\
    \ for bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Set up Google Cloud resources
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Google Cloud resources that you need to create and
configure prior to creating clusters.
Before you begin
Create a Google Cloud project
and a billing account .
If you aren't a Google Cloud project owner, have a project owner
grant you the following Identity and Access Management (IAM) roles:
Role
Purpose
roles/compute.viewer
Required: Needed when bmctl validates the clusterOperations.location
field in the cluster configuration file.
roles/iam.serviceAccountAdmin
Required: Needed to create the service accounts that Google Distributed Cloud
requires.
roles/iam.securityAdmin
Required: Needed to grant IAM roles to the service
accounts that Google Distributed Cloud requires.
roles/iam.serviceAccountKeyAdmin
Required: Needed to create JSON key files for the service accounts that
Google Distributed Cloud requires.
roles/serviceusage.serviceUsageAdmin
Required: Needed to enable the Google APIs that Google Distributed Cloud
requires.
roles/gkeonprem.admin
Optional: Needed if you want to create clusters using GKE On-Prem API
clients or configure a
cluster to be managed by the GKE On-Prem API .
roles/gkehub.viewer
roles/container.viewer
Optional: Needed if you want to access the GKE pages in the
Google Cloud console.
For information on granting the roles, see
Manage access to projects, folders, and organizations .
Enable APIs
Several Google APIs must be enabled in your associated Google Cloud project.
Google Distributed Cloud uses the APIs when creating clusters. The APIs are
also needed to maintain a connection to Google Cloud. The connection
to Google Cloud lets Google Distributed Cloud use Cloud Logging and
Cloud Monitoring and fleet features such as Cloud Service Mesh, Config Sync,
Policy Controller, and Config Controller.
If you will be using the bmctl tool to create clusters, you can include the
--enable-apis flag when you run bmctl create config , and bmctl will
enable the APIs listed in the following gcloud services enable command. If
you will be using a GKE On-Prem API client to create
an admin cluster
or a user cluster ,
you need enable the APIs prior to creating the cluster.
To enable the APIs, run the following commands:
Login to Google Cloud CLI:
gcloud auth login
Enable the following APIs:
gcloud services enable --project= PROJECT_ID \
anthos.googleapis.com \
anthosaudit.googleapis.com \
anthosgke.googleapis.com \
cloudresourcemanager.googleapis.com \
compute.googleapis.com \
connectgateway.googleapis.com \
container.googleapis.com \
gkeconnect.googleapis.com \
gkehub.googleapis.com \
gkeonprem.googleapis.com \
iam.googleapis.com \
kubernetesmetadata.googleapis.com \
logging.googleapis.com \
monitoring.googleapis.com \
opsconfigmonitoring.googleapis.com \
serviceusage.googleapis.com \
stackdriver.googleapis.com \
storage.googleapis.com
With the exception of gkeonprem.googleapis.com , these Google APIs are
required for your project. The following two APIs are required for version
1.29 and higher only:
compute.googleapis.com
kubernetesmetadata.googleapis.com
If you install your clusters behind a proxy, you must add many of these APIs
to the list of allowed connections. For a list of APIs and endpoints that
you must add to the allowlist and the rationale for their access, see
Install behind a proxy .
Note: The GKE On-Prem API, gkeonprem.googleapis.com , is recommended, but
not required. This Google Cloud-hosted API lets you manage the lifecycle of
your on-premises clusters using standard Google Cloud applications,
such as Google Cloud console or gcloud CLI. The GKE On-Prem API
doesn't interfere with the installation or operation of your clusters, but
it does store cluster state metadata in Google Cloud. This metadata
lets the API manage the cluster lifecycle and doesn't include
workload-specific data. If you don't want to use standard Google Cloud
applications to manage your clusters, you can disable the GKE On-Prem API.
For instructions, see Disabling
services . If you choose to
disable the GKE On-Prem API, set
gkeOnPremAPI.enabled
to false in the cluster spec to prevent the cluster from being enrolled in
the GKE On-Prem API.
To see what APIs and services are enabled in your project, run the following
command:
gcloud services list --project= PROJECT_ID \
--enabled
Configure service accounts
To use the Google APIs, Google Distributed Cloud requires a
service account configured with specific
IAM roles in your associated Google Cloud project. As a best
practice, you should create separate service accounts for different purposes,
particularly in production environments.
If you will be using the bmctl tool to create clusters, you can include
the --create-service-accounts flag when you run bmctl create config to have
bmctl create the service accounts with the required IAM roles.
If you will be using a GKE On-Prem API client to create an admin cluster, by
default the bmctl register bootstrap command creates the service accounts with
the required IAM roles when you run the command to
create a bootstrap cluster .
The service accounts are required for user cluster creation as well, but the
service accounts would have been created and configured when creating the admin
cluster that manages the user clusters.
The following table describes the service accounts that are created
automatically:
Service account
Purpose
Roles
anthos-baremetal-gcr
Google Distributed Cloud uses this service account to download container images
from Artifact Registry.
None
anthos-baremetal-connect
Connect Agent
uses this service account to maintain a connection between your cluster and
Google Cloud. This enables access to the cluster and to workload management
features, including the Google Cloud console and the
connect gateway
to interact with your cluster.
roles/gkehub.connect
anthos-baremetal-register
Connect Agent uses this service account to register your clusters with
a fleet .
roles/gkehub.admin
anthos-baremetal-cloud-ops
Stackdriver Agent uses this service account to export logs and metrics
from clusters to Cloud Logging and
Cloud Monitoring .
You can't disable Cloud Logging and
Cloud Monitoring for your clusters. This service account and all of the
roles listed for this service account are required.
roles/logging.logWriter
roles/monitoring.metricWriter
roles/stackdriver.resourceMetadata.writer
roles/opsconfigmonitoring.resourceMetadata.writer
roles/monitoring.dashboardEditor
roles/monitoring.viewer
roles/serviceusage.serviceUsageViewer
roles/kubernetesmetadata.publisher
Configure service accounts manually
If you prefer, you can manually create the service accounts, configure them with
the necessary roles, and download JSON key files prior to creating clusters.
If you are using bmctl to create clusters, you add references to the
JSON key files to the appropriate cluster config file. For an example,
see Editing the config file .
If you are using a GKE On-Prem API to create an admin cluster, you can
specify the key files
when you run bmctl register bootstrap to create the bootstrap cluster.
To create the service accounts and key files:
On your admin workstation, make sure you're in the baremetal directory.
If you haven't already, login to Google Cloud CLI:
gcloud auth login
Create the service accounts:
gcloud iam service-accounts create anthos-baremetal-gcr \
--project= PROJECT_ID
gcloud iam service-accounts create anthos-baremetal-connect \
--project= PROJECT_ID
gcloud iam service-accounts create anthos-baremetal-register \
--project= PROJECT_ID
gcloud iam service-accounts create anthos-baremetal-cloud-ops \
--project= PROJECT_ID
Grant the required IAM roles on the service accounts:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-connect@ PROJECT_ID .iam.gserviceaccount.com" \
--role="roles/gkehub.connect"
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-register@ PROJECT_ID .iam.gserviceaccount.com" \
--role=roles/gkehub.admin
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT_ID .iam.gserviceaccount.com" \
--role="roles/logging.logWriter"
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT_ID .iam.gserviceaccount.com" \
--role="roles/monitoring.metricWriter"
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT_ID .iam.gserviceaccount.com" \
--role="roles/stackdriver.resourceMetadata.writer"
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT_ID .iam.gserviceaccount.com" \
--role="roles/opsconfigmonitoring.resourceMetadata.writer"
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT_ID .iam.gserviceaccount.com" \
--role="roles/monitoring.dashboardEditor"
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT_ID .iam.gserviceaccount.com" \
--role="roles/monitoring.viewer"
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT_ID .iam.gserviceaccount.com" \
--role="roles/serviceusage.serviceUsageViewer"
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:anthos-baremetal-cloud-ops@ PROJECT_ID .iam.gserviceaccount.com" \
--role="roles/kubernetesmetadata.publisher"
Download the service account JSON key files:
gcloud iam service-accounts keys create anthos-baremetal-gcr.json \
--project= PROJECT_ID \
--iam-account=anthos-baremetal-gcr@ PROJECT_ID .iam.gserviceaccount.com
gcloud iam service-accounts keys create connect-agent.json \
--project= PROJECT_ID \
--iam-account=anthos-baremetal-connect@ PROJECT_ID .iam.gserviceaccount.com
gcloud iam service-accounts keys create connect-register.json \
--project= PROJECT_ID \
--iam-account=anthos-baremetal-register@ PROJECT_ID .iam.gserviceaccount.com
gcloud iam service-accounts keys create anthos-baremetal-cloud-ops.json \
--project= PROJECT_ID \
--iam-account=anthos-baremetal-cloud-ops@ PROJECT_ID .iam.gserviceaccount.com
Configure a service account that can access a Cloud Storage bucket
You use a service account and key file to access Cloud Storage. You can use
this service account to enable snapshots of clusters to be automatically
uploaded to Cloud Storage buckets, or to import virtual machine (VM) images
from Cloud Storage buckets for use with VM Runtime on GDC.
To create the service account and key file, complete the following steps:
Make sure you are in the baremetal directory.
If you haven't already, login to Google Cloud CLI:
gcloud auth login
If it isn't already, enable the Cloud Storage API,
storage.googleapis.com in your Google Cloud project:
gcloud services enable --project = PROJECT_ID \
storage.googleapis.com
Create a service account that your cluster can use to access
Cloud Storage buckets:
gcloud iam service-accounts create SA_NAME \
--project = PROJECT_ID
Replace SA_NAME with the name of the new service account. This
service account name appears in the email address that is provisioned during
creation, in the format
SA_NAME @ PROJECT_ID .iam.gserviceaccount.com .
Create a custom role with the following permissions:
storage.buckets.create
storage.buckets.get
storage.buckets.list
storage.objects.create
resourcemanager.projects.get
gcloud iam roles create ROLE_ID \
--permissions = storage.buckets.create,storage.buckets.get,storage.buckets.list,storage.objects.create \
--project = PROJECT_ID
Replace ROLE_ID with the name of the new custom role, such as
snapshotUpload . The complete path of this custom role has the format
projects/ PROJECT_ID /roles/ ROLE_ID .
Add a policy binding to the service account:
gcloud iam service-accounts add-iam-policy-binding SA_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--member = serviceAccount: SA_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--role = 'projects/ PROJECT_ID /roles/ ROLE_ID '
Download the service account JSON key file:
gcloud iam service-accounts keys create OUTPUT_FILE \
--iam-account = SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
For more information about how to create cluster snapshots and automatically
upload them to a Cloud Storage bucket, see
Create snapshots to help diagnose cluster problems .
For more information on how to import VM images from Cloud Storage, see
Create and use credentials to import images from Cloud Storage for VM Runtime on GDC .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
