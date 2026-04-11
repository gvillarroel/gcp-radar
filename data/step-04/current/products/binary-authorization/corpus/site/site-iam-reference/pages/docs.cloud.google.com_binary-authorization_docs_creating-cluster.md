---
title: "Create a cluster \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/creating-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/multi-project-setup-cli
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/creating-cluster
  title: "Create a cluster \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
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
Create a cluster
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create a cluster in Google Kubernetes Engine (GKE)
with Binary Authorization enabled. You perform this step at the command
line using gcloud commands or in the Google Cloud console. This
step is part of
setting up Binary Authorization for GKE .
Before you begin
Enable Binary Authorization .
Enable the GKE API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Configure a platform policy using the
Google Cloud console ,
command-line tool ,
or REST API .
Create a cluster with Binary Authorization enabled (CV monitoring-only)
Binary Authorization works with Autopilot or Standard
clusters. To configure monitoring-only evaluation mode, you must specify at
least one check-based platform policy .
To create a cluster with Binary Authorization enabled with only
CV monitoring, do the following:
Console
The following steps configure a Standard cluster.
In the Google Cloud console, go to the GKE page.
Go to GKE
Click Create Cluster . Enter values for the default fields as
described in
Creating a zonal cluster .
In the navigation menu, click Security .
Select Enable Binary Authorization .
1.
Select Audit-only and configure
CV check-based platform policies
that you want Binary Authorization to evaluate your cluster's images against.
Click Create .
gcloud
Set your default Google Cloud project:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with the ID of the project
where you want to create the cluster.
Create a cluster that uses only CV platform policy-based
monitoring:
Before using any of the command data below,
make the following replacements:
CLUSTER_NAME : a cluster name.
LOCATION : the location—for example, us-central1 or asia-south1 .
POLICY_PROJECT_ID : the ID of the project where the policy is stored.
POLICY_ID : the policy ID.
CLUSTER_PROJECT_ID : the cluster project ID.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME \
--location = LOCATION \
--binauthz-evaluation-mode = POLICY_BINDINGS \
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID /platforms/gke/policies/ POLICY_ID \
--project = CLUSTER_PROJECT_ID
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME `
--location = LOCATION `
--binauthz-evaluation-mode = POLICY_BINDINGS `
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID /platforms/gke/policies/ POLICY_ID `
--project = CLUSTER_PROJECT_ID
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME ^
--location = LOCATION ^
--binauthz-evaluation-mode = POLICY_BINDINGS ^
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID /platforms/gke/policies/ POLICY_ID ^
--project = CLUSTER_PROJECT_ID
Important:
The cluster creation process does not check the validity or existence of the
provided platform policies. Platform policy validity is checked only during
the periodic monitoring cycles. Take extra caution in ensuring platform
policies exist, are formatted appropriately, and have no typographical errors
prior to cluster creation.
It can take a few minutes for your cluster to be created.
Create a cluster with Binary Authorization enabled (enforce-only)
Binary Authorization works with Autopilot or Standard
clusters. The enforcement policy is set to the
project policy
which by default allows all images. To change the project policy follow
these instructions .
To create a cluster with Binary Authorization enabled with only enforcement enabled,
do the following:
Console
The following steps configure a Standard cluster.
In the Google Cloud console, go to the GKE page.
Go to GKE
Click Create Cluster . Enter values for the default fields as
described in
Creating a zonal cluster .
In the navigation menu, click Security .
Select Enable Binary Authorization .
Select Enforce-only .
Click Create .
gcloud
Set your default Google Cloud project:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with the ID of the project
where you want to create the cluster.
Create a cluster that uses policy enforcement only:
Before using any of the command data below,
make the following replacements:
CLUSTER_NAME : a cluster name.
LOCATION : the location—for example, us-central1 or asia-south1 .
CLUSTER_PROJECT_ID : the cluster project ID.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME \
--location = LOCATION \
--binauthz-evaluation-mode = PROJECT_SINGLETON_POLICY_ENFORCE \
--project = CLUSTER_PROJECT_ID
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME `
--location = LOCATION `
--binauthz-evaluation-mode = PROJECT_SINGLETON_POLICY_ENFORCE `
--project = CLUSTER_PROJECT_ID
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME ^
--location = LOCATION ^
--binauthz-evaluation-mode = PROJECT_SINGLETON_POLICY_ENFORCE ^
--project = CLUSTER_PROJECT_ID
Terraform
The following Terraform example creates and configures a Standard
cluster:
resource "google_container_cluster" "default" {
name = "gke-standard-regional-binauthz-enforce"
location = "us-west1"
initial_node_count = 1
binary_authorization {
evaluation_mode = "PROJECT_SINGLETON_POLICY_ENFORCE"
}
}
To learn more about using Terraform, see
Terraform support for GKE .
It can take a few minutes for your cluster to be created.
Create a cluster with Binary Authorization enabled (CV monitor and enforce)
Binary Authorization works with Autopilot or Standard
clusters.
For enforcement, the policy is set to the
project policy
which by default allows all images. To change the project policy follow
these instructions .
For CV monitoring, you must specify at least one
CV check-based platform policy .
To create a cluster with Binary Authorization enabled with both CV
monitoring and enforcement, do the following:
Console
The following steps configure a Standard cluster.
In the Google Cloud console, go to the GKE page.
Go to GKE
Click Create Cluster . Enter values for the default fields as
described in
Creating a zonal cluster .
In the navigation menu, click Security .
Select Enable Binary Authorization .
Select Audit and Enforce and configure CV check-based platform policies .
Click Create .
gcloud
Set your default Google Cloud project:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with the ID of the project where you want
to create the cluster.
Create a cluster that uses both project-singleton policy enforcement and
CV platform policy-based monitoring:
Before using any of the command data below,
make the following replacements:
CLUSTER_NAME : a cluster name.
LOCATION : the location—for example, us-central1 or asia-south1 .
POLICY_PROJECT_ID : the ID of the project where the policy is stored.
POLICY_ID : the policy ID.
CLUSTER_PROJECT_ID : the cluster project ID.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME \
--location = LOCATION \
--binauthz-evaluation-mode = POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE \
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID /platforms/gke/policies/ POLICY_ID \
--project = CLUSTER_PROJECT_ID
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME `
--location = LOCATION `
--binauthz-evaluation-mode = POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE `
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID /platforms/gke/policies/ POLICY_ID `
--project = CLUSTER_PROJECT_ID
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME ^
--location = LOCATION ^
--binauthz-evaluation-mode = POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE ^
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID /platforms/gke/policies/ POLICY_ID ^
--project = CLUSTER_PROJECT_ID
Important:
The cluster creation process does not check the validity or existence of the
provided platform policies. Platform policy validity is checked only during
periodic CV monitoring cycles. Take extra caution in ensuring
that platform policies exist, are formatted appropriately, and have no
typographical errors prior to cluster creation.
It can take a few minutes for your cluster to be created.
Create a CV cluster that uses multiple platform policies (CV monitoring only)
Binary Authorization works with Autopilot or Standard
clusters.
You can create clusters with multiple platform policies bound to them (see
GKE API Reference
for more information).
Console
The following steps configure a Standard cluster.
In the Google Cloud console, go to the GKE page.
Go to GKE
Click Create Cluster . Enter values for the default fields as
described in
Creating a zonal cluster .
In the navigation menu, click Security .
Select Enable Binary Authorization .
Select Audit-only
and configure one or more platform policies that you want
Binary Authorization to evaluate your cluster against.
Click Create .
gcloud
Set your default Google Cloud project:
gcloud config set project PROJECT_ID
Create the cluster.
Before using any of the command data below,
make the following replacements:
CLUSTER_NAME : a cluster name.
LOCATION : the location — for example, us-central1 or asia-south1 .
POLICY_PROJECT_ID_1 : the ID of the project where the first platform policy is stored.
POLICY_ID_1 : the policy ID of the first platform policy.
POLICY_PROJECT_ID_2 : the ID of the project where the second platform policy is stored. Multiple policies can be stored in the same project or in different projects.
POLICY_ID_2 : the policy ID of the second platform policy.
CLUSTER_PROJECT_ID : the cluster project ID.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME \
--location = LOCATION \
--binauthz-evaluation-mode = POLICY_BINDINGS \
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_1 /platforms/gke/policies/ POLICY_ID_1 \
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_2 /platforms/gke/policies/ POLICY_ID_2 \
--project = CLUSTER_PROJECT_ID
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME `
--location = LOCATION `
--binauthz-evaluation-mode = POLICY_BINDINGS `
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_1 /platforms/gke/policies/ POLICY_ID_1 `
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_2 /platforms/gke/policies/ POLICY_ID_2 `
--project = CLUSTER_PROJECT_ID
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME ^
--location = LOCATION ^
--binauthz-evaluation-mode = POLICY_BINDINGS ^
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_1 /platforms/gke/policies/ POLICY_ID_1 ^
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_2 /platforms/gke/policies/ POLICY_ID_2 ^
--project = CLUSTER_PROJECT_ID
Important:
The cluster creation process does not check the validity or existence of the
provided platform policies. Platform policy validity is checked only during
periodic CV monitoring cycles. Take extra caution in ensuring
that platform policies exist, are formatted appropriately, and have no
typographical errors prior to cluster creation.
It can take a few minutes for your cluster to be created.
Create a CV cluster that uses multiple platform policies (CV monitor and enforce)
Binary Authorization works with Autopilot or Standard
clusters.
You can create clusters with multiple platform policies bound to them (see
GKE API Reference
for more information).
Console
The following steps configure a Standard cluster.
In the Google Cloud console, go to the GKE page.
Go to GKE
Click Create Cluster . Enter values for the default fields as
described in Creating a zonal cluster .
In the navigation menu, click Security .
Select Enable Binary Authorization .
Select Audit and Enforce and configure CV monitoring
policies.
Click Create .
gcloud
Set your default Google Cloud project:
gcloud config set project PROJECT_ID
Create a cluster that uses both project-singleton policy enforcement and
CV platform policy-based monitoring:
Before using any of the command data below,
make the following replacements:
CLUSTER_NAME : a cluster name.
LOCATION : the location — for example, us-central1 or asia-south1 .
POLICY_PROJECT_ID_1 : the ID of the project where the first platform policy is stored.
POLICY_ID_1 : the policy ID of the first platform policy.
POLICY_PROJECT_ID_2 : the ID of the project where the second platform policy is stored. Multiple policies can be stored in the same project or in different projects.
POLICY_ID_2 : the policy ID of the second platform policy.
CLUSTER_PROJECT_ID : the cluster project ID.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME \
--location = LOCATION \
--binauthz-evaluation-mode = POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE \
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_1 /platforms/gke/policies/ POLICY_ID_1 \
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_2 /platforms/gke/policies/ POLICY_ID_2 \
--project = CLUSTER_PROJECT_ID
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME `
--location = LOCATION `
--binauthz-evaluation-mode = POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE `
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_1 /platforms/gke/policies/ POLICY_ID_1 `
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_2 /platforms/gke/policies/ POLICY_ID_2 `
--project = CLUSTER_PROJECT_ID
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud beta container clusters create CLUSTER_NAME ^
--location = LOCATION ^
--binauthz-evaluation-mode = POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE ^
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_1 /platforms/gke/policies/ POLICY_ID_1 ^
--binauthz-policy-bindings = name = projects/ POLICY_PROJECT_ID_2 /platforms/gke/policies/ POLICY_ID_2 ^
--project = CLUSTER_PROJECT_ID
Important:
The cluster creation process does not check the validity or existence of the
provided platform policies. Platform policy validity is checked only during
periodic CV monitoring cycles. Take extra caution in ensuring
that platform policies exist, are formatted appropriately, and have no
typographical errors prior to cluster creation.
It can take a few minutes for your cluster to be created.
Verify that Binary Authorization is enabled
To verify that Binary Authorization is enabled for the cluster, do the following:
Console
Open the GKE page in the Google Cloud console.
Go to GKE
Under Kubernetes clusters , find your cluster.
Under Security , verify that Binary Authorization is set to
Enabled .
gcloud
To list the policy bindings for your cluster, do the following:
gcloud beta container clusters describe CLUSTER_NAME --location LOCATION --project CLUSTER_PROJECT_ID | grep -A 10 policyBindings:
Note that there may be additional information after the policy binding
listing.
What's next
Learn more about Binary Authorization Continuous Validation ( Preview ).
Learn more about Binary Authorization enforcement .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
