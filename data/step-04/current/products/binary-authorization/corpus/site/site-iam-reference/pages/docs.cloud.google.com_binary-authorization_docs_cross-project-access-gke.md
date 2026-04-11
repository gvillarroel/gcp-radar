---
title: "Configure cross-project access in GKE \_|\_ Binary Authorization \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/cross-project-access-gke
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/multi-project-setup-cli
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/cross-project-access-gke
  title: "Configure cross-project access in GKE \_|\_ Binary Authorization \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
Configure cross-project access in GKE
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to give Binary Authorization access to policies and container
images that exist in different Google Cloud projects than your current project.
For example, if you deploy images in your Google Kubernetes Engine (GKE) cluster
from an Artifact Registry or Container Registry ( Deprecated )
repository that's owned by a different project, you'll need to give the
Binary Authorization service in your project access to the image metadata in
the source repository.
Terminology
This document uses the following terms:
Service agent: A Google Cloud-managed service account.
Binary Authorization uses a service agent to interact with your Google Cloud
resources, like GKE clusters.
Policy project: The Google Cloud project that contains your
Binary Authorization policy.
Cluster project: The Google Cloud project that contains your
GKE cluster.
Artifact project: The Google Cloud project that contains your
Artifact Registry or Container Registry ( Deprecated )
repository.
Scenarios that require cross-project access
You must grant cross-project permissions in situations like the following:
Your policy project is different than your cluster project.
Your cluster project is different than your artifact project.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
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
Enable the Binary Authorization API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable binaryauthorization.googleapis.com
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
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
Enable the Binary Authorization API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable binaryauthorization.googleapis.com
Cluster project different than the policy project
Grant the Binary Authorization service agent in the cluster project the
Binary Authorization Policy Evaluator
( roles/binaryauthorization.policyEvaluator )
role on the policy project.
gcloud projects add-iam-policy-binding POLICY_PROJECT_ID \
--member = "serviceAccount:service- $( gcloud projects describe CLUSTER_PROJECT_ID --format = 'value(projectNumber)' ) @gcp-sa-binaryauthorization.iam.gserviceaccount.com" \
--role = roles/binaryauthorization.policyEvaluator
Replace the following:
POLICY_PROJECT_ID : the ID of the project that contains your policy.
CLUSTER_PROJECT_ID : the project ID of the cluster.
Cluster project different than the artifact project
Grant the Binary Authorization service agent in the cluster project the
Artifact Registry Reader
( roles/artifactregistry.reader ) role on the artifact project.
gcloud projects add-iam-policy-binding ARTIFACT_PROJECT_ID \
--member = "serviceAccount:service- $( gcloud projects describe CLUSTER_PROJECT_ID --format = 'value(projectNumber)' ) @gcp-sa-binaryauthorization.iam.gserviceaccount.com" \
--role = roles/artifactregistry.reader
Replace the following:
ARTIFACT_PROJECT_ID : the ID of the project that contains
your Artifact Registry repository.
Note: If you use Container Registry, you can
use the Storage Object Viewer
( roles/storage.objectViewer ) role, but we recommend that
you migrate to Artifact Registry. Container Registry is deprecated. For
migration instructions, see Transition from Container Registry .
CLUSTER_PROJECT_ID : the project ID that runs your GKE
clusters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
