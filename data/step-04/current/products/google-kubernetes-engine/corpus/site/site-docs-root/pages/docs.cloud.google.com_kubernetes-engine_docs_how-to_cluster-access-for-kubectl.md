---
title: "Install kubectl and configure cluster access \_|\_ Google Kubernetes Engine\
  \ (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl
  title: "Install kubectl and configure cluster access \_|\_ Google Kubernetes Engine\
    \ (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
Install kubectl and configure cluster access
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page provides instructions to install the kubectl command-line tool that's
used to manage and access Google Kubernetes Engine (GKE) clusters. The kubectl
configuration is required if you run multiple clusters in Google Cloud.
You learn the following:
How kubectl works.
How to install kubectl and any required dependencies .
How to set a default cluster for kubectl .
How to run kubectl commands against a specific cluster .
This page is for IT administrators, Operators, and
Developers who set up, monitor, and manage cloud infrastructure,
including provisioning and configuring cloud resources. To learn more about
common roles and example tasks that are referenced in Google Cloud documentation,
see Common GKE user roles and
tasks .
Before reading this page, ensure that you're familiar with Kubernetes kubectl .
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
Ensure that you have an existing Autopilot or Standard
cluster. To create a new cluster, see
Create an Autopilot cluster .
Install kubectl
You can install kubectl using the Google Cloud CLI or an external package manager, such as apt or yum .
gcloud
Install the kubectl component:
gcloud components install kubectl
Verify that kubectl is installed by checking whether it has the latest version:
kubectl version --client
apt
Verify that you have the cloud-sdk repository:
grep -rhE ^deb /etc/apt/sources.list* | grep "cloud-sdk"
The output is similar to the following:
deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main
If the cloud-sdk repository is not listed then install the gcloud CLI .
Install the kubectl component:
apt-get update
apt-get install -y kubectl
Verify that kubectl is installed by checking it has the latest version:
kubectl version --client
yum
Verify that you have the cloud-sdk repository:
yum repolist | grep "google-cloud-sdk"
The output is similar to the following:
google-cloud-sdk Google Cloud SDK 2,205
Install the kubectl component:
yum install -y kubectl
Verify that kubectl is installed by checking whether it has the latest version:
kubectl version --client
Install required plugins
kubectl and other Kubernetes clients require an authentication plugin,
gke-gcloud-auth-plugin , which uses the
Client-go Credential Plugins framework to
provide authentication tokens to communicate with GKE clusters.
Before Kubernetes version 1.26 is released, gcloud CLI will start
to require that the gke-gcloud-auth-plugin binary is installed. If the plugin
is not installed, existing installations of kubectl or other custom Kubernetes
clients stop working.
You must
install this plugin to use kubectl and other clients to interact with GKE.
Existing clients display an error message if the plugin is not installed.
Before you begin, check whether the plugin is already installed:
gke-gcloud-auth-plugin --version
If the output displays version information, skip this section.
You can install the authentication plugin using the gcloud CLI or an
external package manager such as apt or yum .
gcloud
Install the gke-gcloud-auth-plugin binary:
gcloud components install gke-gcloud-auth-plugin
apt
Install the gke-gcloud-auth-plugin binary:
apt-get install google-cloud-sdk-gke-gcloud-auth-plugin
yum
Install the gke-gcloud-auth-plugin binary:
yum install google-cloud-sdk-gke-gcloud-auth-plugin
Verify the gke-gcloud-auth-plugin binary installation:
Check the gke-gcloud-auth-plugin binary version:
gke-gcloud-auth-plugin --version
Update the kubectl configuration to use the plugin:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
Replace the following:
CLUSTER_NAME : the name of your cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
location of the control plane of your
cluster. Provide a region for regional clusters, or a zone for zonal clusters.
Verify the configuration by running the following command:
kubectl get namespaces
The output is similar to the following:
NAME STATUS AGE
default Active 51d
kube-node-lease Active 51d
kube-public Active 51d
kube-system Active 51d
For more information about this plugin, see the Kubernetes
KEP .
Interact with kubectl
Kubernetes uses a YAML file called
kubeconfig
to store cluster authentication information for kubectl . By default,
the file is saved at $HOME/.kube/config .
kubeconfig contains a group of access parameters called contexts . Each
context contains a Kubernetes cluster, a user, and an optional default
namespace. kubectl refers to contexts when running commands.
Optionally, you can configure kubectl using the following tasks:
Choose the cluster that kubectl talks to.
Set the default cluster for kubectl by setting the current context in the
kubeconfig file.
Run kubectl commands against a specific cluster by using the --cluster
flag.
View kubeconfig
To view your environment's kubeconfig , run the following command:
kubectl config view
The command returns a list of all clusters for which kubeconfig entries have
been generated. If a GKE cluster is listed, you can run kubectl
commands against it in your current environment. Otherwise, you need to Store
cluster information for kubectl .
View the current context for kubectl
The current context is the cluster that is currently the default for
kubectl . All kubectl commands run against that cluster.
When you create a cluster using gcloud container clusters create-auto , an
entry is automatically added to the kubeconfig file in your environment, and
the current context changes to that cluster. For example:
gcloud container clusters create-auto my-cluster
Creating my-cluster...done
Fetching cluster endpoint and auth data.
kubeconfig entry generated for my-cluster
To view the current context for kubectl , run the following command:
kubectl config current-context
Store cluster information for kubectl
When you create a cluster using the Google Cloud console or using gcloud CLI from a
different computer, your environment's kubeconfig file is not updated.
Additionally, if a project team member uses gcloud CLI to create a cluster from
their computer, their kubeconfig is updated but yours is not. The kubeconfig
entry contains either:
Your credentials as shown in gcloud auth list , or
The application default credentials, if configured .
To generate a kubeconfig context in your environment, ensure that you have the
container.clusters.get permission. The least-privileged IAM
role that provides this permission is container.clusterViewer .
To generate a kubeconfig context for a specific cluster, run the
following command:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
Replace the following:
CLUSTER_NAME : the name of your cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
location of the control plane of your
cluster. Provide a region for regional clusters, or a zone for zonal clusters.
Note: Running gcloud container clusters get-credentials also changes
the current context for kubectl to that cluster.
Generate a kubeconfig entry using a cluster's internal IP address
All clusters have multiple endpoint addresses, each with different
characteristics. One of these endpoints serves as the canonical endpoint that's
used by kubectl and other services to communicate with your cluster control
plane.
GKE automatically selects the endpoint based on the following
order:
The external IP address (if you have enabled the external endpoint)
The internal IP address
The DNS address (if IP access is disabled)
To use the canonical endpoint by default, run the
get-credentials
command. For more control over which endpoint kubectl uses, use the
--internal-ip or --dns-endpoint flag.
To update your kubeconfig file to use the internal IP address, run the
following command:
gcloud container clusters get-credentials CLUSTER_NAME --internal-ip
To update your kubeconfig file to use the DNS address, run the following
command:
gcloud container clusters get-credentials CLUSTER_NAME --dns-endpoint
Replace CLUSTER_NAME with the name of your cluster.
By default, running get-credentials uses the IP address specified in the endpoint field.
Set a default cluster for kubectl commands
If you have previously generated a kubeconfig entry for clusters, you can switch
the current context for kubectl to that cluster by running the following
command:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
Replace the following:
CLUSTER_NAME : the name of your cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
location of the control plane of your
cluster. Provide a region for regional clusters, or a zone for zonal clusters.
For example, consider a project with two clusters, my-cluster and
my-new-cluster . The current context is my-new-cluster , but you want to run
all kubectl commands against my-cluster . To switch the current context
from my-new-cluster to my-cluster , run the following command:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
Run individual kubectl commands against a specific cluster
You can run individual kubectl commands against a specific cluster by using
--cluster= CLUSTER_NAME .
For example, consider an environment with two clusters, my-cluster and
my-new-cluster , in which the current context is my-cluster . You want to
deploy an application to my-new-cluster , but you don't want to change the
current context. To deploy the application to my-new-cluster without changing
the current context, you would run the following command:
kubectl run my-app --image us-docker.pkg.dev/my-project/my-repo/my-app:1.0 --cluster my-new-cluster
What's next
Learn how to authorize access to resources in GKE clusters .
Authenticate to Google Cloud services from GKE workloads .
Read the kubectl cheat sheet .
Troubleshoot the kubectl command-line tool .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
GKE performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try GKE free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
