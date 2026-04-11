---
title: "Installing with the GKE add-on \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall
  title: "Installing with the GKE add-on \_|\_ Config Connector \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Installing with the GKE
add-on
Standard
This page describes how to install Config Connector on a
Google Kubernetes Engine (GKE) cluster using the Config Connector add-on.
For details on each installation options with their advantages and disadvantages,
see
Choosing an installation type .
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Select or
create a Google Cloud project
to install Config Connector in.
If you've previously
manually installed Config Connector ,
uninstall it before installing the Config Connector add-on:
Uninstalling cluster mode
Uninstalling namespaced mode
Installing the Config Connector add-on
You use the Config Connector add-on by creating a new GKE cluster, or
enabling it on an existing cluster. After installing the Config Connector add-on, you
configure your Config Connector installation with your
Google service accounts
and your namespaces.
Note: When you enable the Config Connector add-on, Config Connector creates a
namespace called configconnector-operator-system .
Do not make any changes or add any resources to this namespace.
Requirements
The Config Connector add-on has the following requirements:
You must use a GKE version of:
1.15.11-gke.5 and later
1.16.8-gke.8 and later
1.17.4-gke.5 and later
You must enable a
workload identity pool
and Kubernetes Engine Monitoring on the
clusters where you enable Config Connector.
Setting up a GKE cluster
You can use the Config Connector add-on on a new or existing cluster.
Creating a new cluster with the Config Connector add-on enabled
You can create a GKE cluster using the gcloud CLI or the
Google Cloud console.
gcloud
To create a cluster with the Google Cloud CLI run the following
command:
gcloud container clusters create CLUSTER_NAME \
--release-channel CHANNEL \
--addons ConfigConnector \
--workload-pool = PROJECT_ID .svc.id.goog \
--logging = SYSTEM \
--monitoring = SYSTEM
Replace the following:
CLUSTER_NAME with the name of your GKE
cluster.
CHANNEL with a
GKE release channel ,
rapid and regular are supported.
PROJECT_ID with your Google Cloud project ID.
Google Cloud console
To create a cluster with the Google Cloud console, perform the following steps:
Visit the Google Kubernetes Engine menu in Google Cloud console.
Visit the Google Kubernetes Engine menu
Click Create . The Create a Kubernetes cluster page appears.
Specify a Name for your cluster.
Choose a supported Master version .
Configure the rest of your cluster as you want.
From the navigation pane, under Cluster ,
click Security .
Select the Enable Workload Identity checkbox.
From the navigation pane on the left side, under Cluster , click
Features .
Select the Enable Config Connector checkbox.
Click Create .
After you've created the cluster, move on to Creating an identity .
Enabling the Config Connector add-on on an existing cluster
You can enable the Config Connector add-on on an existing GKE cluster
with gcloud or the Google Cloud console.
Prerequisites
Enabling the Config Connector add-on on an existing cluster has the following
prerequisites:
You need a cluster that meets the requirements for the
Config Connector add-on.
Set up
Workload Identity Federation for GKE
on the cluster where you want to install Config Connector.
Note: Enabling Workload Identity Federation for GKE on an existing cluster does not
automatically enable Workload Identity Federation for GKE on the cluster's existing node pools.
We recommend that you enable Workload Identity Federation for GKE on all your cluster's node
pools since Config Connector could run on any of them.
To enable Workload Identity Federation for GKE for a node pool, use the gcloud command-line
tool:
gcloud container node-pools update NODE_POOL \
--workload-metadata = GKE_METADATA \
--cluster CLUSTER_NAME
Replace the following:
NODE_POOL with your node pool's name
CLUSTER_NAME with your cluster's name
Enabling the Config Connector add-on
You can enable the Config Connector add-on in an existing GKE cluster
with the Google Cloud CLI or the Google Cloud console.
gcloud
To enable the Config Connector add-on in an existing GKE cluster
use the Google Cloud CLI:
gcloud container clusters update CLUSTER_NAME \
--update-addons ConfigConnector = ENABLED
Replace CLUSTER_NAME with the name of your GKE
cluster.
Google Cloud console
Visit the Google Kubernetes Engine menu in Google Cloud console.
Visit the Google Kubernetes Engine menu
Select the cluster that you want to install Config Connector on. The
Cluster Details page appears.
Under the Features section, locate the Config Connector row and
click create Edit .
Select the Enable Config Connector checkbox and click
Save Changes to update your cluster.
Create an identity
Config Connector creates and manages Google Cloud resources by authenticating with an
Identity and Access Management (IAM) service account and using
Workload Identity Federation for GKE to bind IAM service accounts with Kubernetes
service accounts.
Note: You only need to perform these steps once per cluster.
To create the identity, complete the following steps:
Create an IAM service account. If you want to use an existing service account, you
can use that account and skip this step:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for your service account.
To learn more about creating service accounts, see
Creating and managing service accounts .
Give the IAM service account elevated permissions on your project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" \
--role = "roles/editor"
Replace PROJECT_ID with your project ID.
Note: Granting the editor role allows most Config Connector functionality except
project and organization wide configurations such as IAM
modifications. In a production environment, we recommend that you set more granular permissions.
For more information about IAM roles, see Understanding roles .
Create an IAM policy binding between the IAM
service account and the predefined Kubernetes service account that
Config Connector runs:
gcloud iam service-accounts add-iam-policy-binding \
SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--member = "serviceAccount: PROJECT_ID .svc.id.goog[cnrm-system/cnrm-controller-manager]" \
--role = "roles/iam.workloadIdentityUser"
Configuring Config Connector
Note: When you enable the Config Connector add-on, it automatically creates a
ConfigConnector CustomResource that is configured in namespaced-mode. This
is done for legacy reasons. You must still complete the following steps to
configure the ConfigConnector to use cluster-mode. If you'd like to install
Config Connector in namespaced-mode instead, see
Install Config Connector in namespaced mode .
To complete the installation, create a configuration file for
the ConfigConnector
CustomResource ,
then apply it using the kubectl apply command. The Config Connector Operator installs
Google Cloud resource CRDs and Config Connector components in your cluster.
To configure the operator as cluster mode, complete the following steps:
Copy the following YAML file into a file named configconnector.yaml :
# configconnector.yaml
apiVersion : core.cnrm.cloud.google.com/v1beta1
kind : ConfigConnector
metadata :
# the name is restricted to ensure that there is only one
# ConfigConnector resource installed in your cluster
name : configconnector.core.cnrm.cloud.google.com
spec :
mode : cluster
googleServiceAccount : " SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com"
# Setting `stateIntoSpec` to `Absent` is recommended. It means setting `cnrm.cloud.google.com/state-into-spec`
# annotation to `absent` for all Config Connector resources created in the cluster in the future.
# It prevents Config Connector from populating unspecified fields into the spec.
stateIntoSpec : Absent
Replace the following:
SERVICE_ACCOUNT_NAME with your service account's name.
PROJECT_ID with your project ID.
Apply the configuration to your cluster with kubectl apply :
kubectl apply -f configconnector.yaml
Specifying where to create your resources
Config Connector can organize resources by project, folder, or organization,
which is the same way you would organize resources with Google Cloud.
Before creating resources with Config Connector, you must configure where to create your
resources. To determine where to create the resource, Config Connector uses an annotation on either
the resource configuration or an existing Namespace. For more information, see
Organizing resources .
If you do not have a Namespace for this purpose, create one with kubectl .
kubectl create namespace NAMESPACE
Replace NAMESPACE with your namespace name. For example
config-connector .
Select a tab to choose where you want Config Connector to create resources.
Project
To create resources in a certain project ,
run the following command:
kubectl annotate namespace \
NAMESPACE cnrm.cloud.google.com/project-id = PROJECT_ID
Replace the following:
NAMESPACE with your namespace name.
PROJECT_ID with your Google Cloud project ID.
Folder
To create resources in a certain folder ,
run the following command:
kubectl annotate namespace \
NAMESPACE cnrm.cloud.google.com/folder-id = FOLDER_ID
Replace the following:
NAMESPACE with your namespace name.
FOLDER_ID with your Google Cloud folder ID.
Organization
To create resources in a certain organization ,
run the following command:
kubectl annotate namespace \
NAMESPACE cnrm.cloud.google.com/organization-id = ORGANIZATION_ID
Replace the following:
NAMESPACE with your namespace name.
ORGANIZATION_ID with your Google Cloud organization ID.
When you annotate your namespace, Config Connector creates resources in the
corresponding project, folder or organization. To learn more about how
Config Connector uses Kubernetes namespaces, see
Kubernetes Namespaces and Google Cloud projects .
Verifying your installation
Config Connector runs all of its components in a namespace named cnrm-system .
You can verify the Pods are ready by running the following command:
kubectl wait -n cnrm-system \
--for=condition=Ready pod --all
If Config Connector is installed correctly, the output is similar to the
following:
pod/cnrm-controller-manager-0 condition met
Note: The controller Pod can take several minutes to start.
Upgrading Config Connector
Upgrades to your cluster's Config Connector add-on are managed by Google Cloud.
The resources in your cluster are preserved whenever an upgrade occurs.
Read about how Google Cloud manages Config Connector add-on upgrades , or skip
to how to get the latest Config Connector version .
How Google Cloud manages Config Connector add-on upgrades
The Config Connector version that a GKE cluster gets depends
entirely on the cluster's GKE minor version. For example:
GKE minor version
Config Connector version
1.20
1.69.0
1.21
1.69.0
1.22
1.71.0
1.23
1.82.0
1.24
1.89.0
Note: The above table is just an example and should not be relied on to
determine which Config Connector version your cluster will get.
As versions qualify, Google Cloud re-maps the newest GKE
minor versions to a newly released Config Connector version. This is done for
all the GKE minor versions that are new enough to not be
available on the Regular or Stable release channels.
Since the Config Connector version that a cluster gets depends on the cluster's
GKE minor version, there are two cases where a cluster's
Config Connector add-on is automatically upgraded by Google Cloud:
The cluster is upgraded to a new GKE minor version that is
mapped to a newer Config Connector version.
Note: It can sometimes take up to one week for Config Connector to be
upgraded after the GKE cluster is upgraded to a new minor
version if the new minor version maps to a newer Config Connector version.
The cluster is on a GKE minor version that is new enough to
not be available on the Regular or Stable release channels, and
Google Cloud re-maps that GKE minor version to a new
Config Connector version.
When Google Cloud re-maps a GKE minor version and upgrades
existing clusters to a new Config Connector version, it is said to be "rolling
out a new Config Connector version" to that GKE minor version.
Google Cloud does not roll out new Config Connector versions to
GKE minor versions that are old enough to be available on the
Regular or Stable release channels versions for stability reasons, except in
emergency situations where a widespread issue has been detected.
How to get the latest Config Connector version
The version of Config Connector installed through the Config Connector add-on is
often behind by up to 12 months or more. If you need the latest Config Connector
version, we recommend switching to
Config Controller
or
manually installing Config Connector and performing upgrades yourself .
The migration instructions for each option are:
To switch to Config Controller, follow the Config Controller migration instructions
to migrate your existing Config Connector resources to a Config Controller
instance.
To manually install Config Connector, follow the instructions
to switch from Config Connector add-on to Manual installation .
Uninstalling Config Connector
Warning: Don't uninstall Config Connector from a Config Controller cluster. This is an unsupported change to Config Controller because it can cause unexpected behavior in your cluster.
To uninstall Config Connector, complete the following steps:
Use kubectl delete to remove the Config Connector CRDs along with
controller components:
kubectl delete ConfigConnector configconnector.core.cnrm.cloud.google.com --wait = true
Disable the Config Connector add-on in your cluster using the gcloud CLI or
the Google Cloud console:
gcloud
To disable the Config Connector add-on with gcloud , run the following command:
gcloud container clusters update CLUSTER_NAME --update-addons ConfigConnector = DISABLED
Replace CLUSTER_NAME with the name of the cluster that has
Config Connector add-on installed.
Cloud console
To disable the Config Connector add-on from the Google Cloud console, perform the
following steps.
Go to the Google Kubernetes Engine Clusters page on the Google Cloud console and select the cluster that you want to update.
Visit the Google Kubernetes Engine menu
Click Edit . The Edit clusters screen appears.
Click Add-ons .
Select Config Connector and choose Disabled .
Click Save to update your cluster.
What's next
Get started with Config Connector.
Learn how to troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
