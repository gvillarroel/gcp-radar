---
title: "Prerequisites for your AKS attached cluster \_|\_ GKE attached clusters \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites
  title: "Prerequisites for your AKS attached cluster \_|\_ GKE attached clusters\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE attached clusters
Guides
Send feedback
Prerequisites for your AKS attached cluster
Stay organized with collections
Save and categorize content based on your preferences.
To operate as a GKE attached cluster, your cluster needs to have
the following characteristics.
AKS (Azure) cluster requirements
Ensure that you use a supported platform version . The
cluster Kubernetes major.minor version should match the selected platform
version. You can also list all supported versions using the following command:
gcloud container attached get-server-config \
--location = GOOGLE_CLOUD_REGION
Replace GOOGLE_CLOUD_REGION with the name of the
Google Cloud location to administer your cluster from.
Ensure that the kubectl command-line tool is installed on your local machine
and configured to access your cluster. This includes setting up the correct
user credentials in the kubeconfig file.
Ensure that there is network connectivity to your cluster.
When you attach a cluster, Google Cloud installs several Pods that are
managed by Google Cloud. These Pods must be scheduled on your nodes. Make
sure that any taints on your cluster don't prevent scheduling. If you have
such taints, your cluster registration fails and you might see an error
similar to the following:
1 node(s) had untolerated taint {CriticalAddOnsOnly: true}
Networking requirements
Because attached clusters rely on supporting Google Cloud services, you need to
modify your cluster's outbound firewall rules to allow it
access to the following domains. This is the only change you need to make to
your cluster to install and run GKE attached clusters.
Address
Purpose
.gcr.io
Pull images from the Artifact Registry.
gkeconnect.googleapis.com
Establish the channel used to receive requests from Google Cloud and
issue responses.
gkemulticloud.googleapis.com
Exchange Google or third-party credentials for a short-lived access token to Google Cloud resources. If your cluster was registered to the fleet using a
Google Cloud region, you need to allowlist
REGION -gkemulticloud.googleapis.com (for example,
us-central1-gkemulticloud.googleapis.com ).
oauth2.googleapis.com
Authenticate through OAuth token exchange for account access.
securetoken.googleapis.com
Retrieve refresh tokens for workload identity authorization.
storage.googleapis.com
Manage object storage and buckets, such as Artifact Registry objects.
sts.googleapis.com
Exchange Google or third-party credentials for a short-lived access token to
Google Cloud resources.
www.googleapis.com
Authenticate service tokens from incoming Google Cloud service
requests.
Logging and monitoring
To use logging and monitoring features, your cluster also needs to
be able to access the following URLs:
logging.googleapis.com
monitoring.googleapis.com
opsconfigmonitoring.googleapis.com
kubernetesmetadata.googleapis.com
Google Cloud requirements
Before attaching your cluster to the Google Cloud management service, you must
install the gcloud CLI, including the Google Cloud CLI command, and
grant access to your Google Cloud account to the Google Cloud management
service so it can manage your attached cluster resources.
Check your gcloud CLI installation with the following command:
gcloud version
If the gcloud CLI isn't installed, or if its version is earlier than
version 412.0.0, install version 412.0.0 or higher by following the
gcloud CLI installation instructions .
Install the kubectl
additional component .
If you haven't already done so,
create your Google Cloud project .
This will generate a Google Cloud project ID and a project number.
Set your active Google Cloud project and authenticate your account with
the following commands.
export PROJECT_ID = <your project id>
gcloud auth login
gcloud config set project $PROJECT_ID
gcloud auth application-default login
Enable the GKE attached clusters API and its required services with
the following commands:
gcloud services enable gkemulticloud.googleapis.com
gcloud services enable gkeconnect.googleapis.com
gcloud services enable connectgateway.googleapis.com
gcloud services enable cloudresourcemanager.googleapis.com
gcloud services enable anthos.googleapis.com
gcloud services enable logging.googleapis.com
gcloud services enable monitoring.googleapis.com
gcloud services enable opsconfigmonitoring.googleapis.com
gcloud services enable kubernetesmetadata.googleapis.com
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
