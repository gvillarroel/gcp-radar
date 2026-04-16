---
title: "Attach your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster
  title: "Attach your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\
    \ Cloud Documentation"
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
Attach your CNCF conformant cluster
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you're attaching an Amazon EKS or Azure AKS cluster, see
Attach your EKS cluster
or
Attach your AKS cluster .
For instructions on using the previous generation of GKE attached clusters, see
Attach third-party clusters .
Be aware that the previous generation product is in maintenance mode. It won't
receive new features, fixes, or support, so its continued use is discouraged.
With GKE attached clusters, you can bring your existing Kubernetes
clusters — whether they're hosted on AWS, Azure, or elsewhere —
into the GKE dashboard for centralized management. This
includes the ability to attach any CNCF conformant Kubernetes cluster.
Supported Kubernetes Clusters
You can add any
conformant Kubernetes cluster
with x86 nodes to your fleet, and then view it within the Google Cloud console
alongside your GKE clusters.
While Google doesn't verify every Kubernetes distribution for complete feature
compatibility, any discovered incompatibilities are documented here. For
further details and troubleshooting assistance, refer to
GKE cluster version and upgrade support .
Prerequisites
Ensure that your cluster meets the cluster requirements .
When attaching your cluster, you must specify the following:
A supported Google Cloud
administrative region
A platform version
The administrative region is a Google Cloud region
to administer your attached cluster from. You can choose any supported
region, but best practice is to choose the region geographically closest to
your cluster. No user data is stored in the administrative region.
The platform version is the version of GKE attached clusters to be installed on your
cluster. You can list all supported versions by running the following command:
gcloud container attached get-server-config \
--location = GOOGLE_CLOUD_REGION
Replace GOOGLE_CLOUD_REGION with the name of the
Google Cloud location to administer your cluster from.
Platform version numbering
These documents refer to the GKE attached clusters version as the platform version,
to distinguish it from the Kubernetes version. GKE attached clusters uses the same
version numbering convention as GKE - for example, 1.21.5-gke.1. When attaching
or updating your cluster, you must choose a platform version whose minor version
is the same as or one level below the Kubernetes version of your cluster. For
example, you can attach a cluster running Kubernetes v1.22.* with
GKE attached clusters platform version 1.21.* or 1.22.*.
This lets you upgrade your cluster to the next minor version before upgrading
GKE attached clusters.
Attach your cluster
Note: The default number of clusters that you can attach per project is 50. To
increase this quota, contact Google Cloud support .
To attach your CNCF conformant cluster to Google Cloud
Fleet management ,
run the following commands:
Ensure that your kubeconfig file has an entry for the cluster you'd like
to attach. Specific instructions vary by distribution.
Run this command to extract your cluster's kubeconfig context and
store it in the KUBECONFIG_CONTEXT environment variable:
KUBECONFIG_CONTEXT = $( kubectl config current-context )
The command to register your cluster varies slightly depending on whether
your cluster has a public or private OIDC issuer. Choose the tab that
applies to your cluster:
Private OIDC issuer
Use the
gcloud container attached clusters register command to register the cluster:
gcloud container attached clusters register CLUSTER_NAME \
--location = GOOGLE_CLOUD_REGION \
--fleet-project = PROJECT_NUMBER \
--platform-version = PLATFORM_VERSION \
--distribution = generic \
--context = KUBECONFIG_CONTEXT \
--has-private-issuer \
--kubeconfig = KUBECONFIG_PATH
Replace the following:
CLUSTER_NAME : the name of your cluster. The
CLUSTER_NAME must be compliant with the RFC 1123 Label Names standard .
GOOGLE_CLOUD_REGION : the Google Cloud region to
administer your cluster from
PROJECT_NUMBER : the fleet host project to register
the cluster with
PLATFORM_VERSION : the platform version to use for the
cluster
KUBECONFIG_CONTEXT : context in the kubeconfig for
accessing the cluster
KUBECONFIG_PATH : path to your kubeconfig
Public OIDC issuer
Retrieve your cluster's OIDC issuer URL and save it for use later.
Specific instructions vary by distribution.
Run this command to extract your cluster's kubeconfig context and
store it in the KUBECONFIG_CONTEXT environment variable:
KUBECONFIG_CONTEXT = $( kubectl config current-context )
Use the
gcloud container attached clusters register command to register the cluster:
gcloud container attached clusters register CLUSTER_NAME \
--location = GOOGLE_CLOUD_REGION \
--fleet-project = PROJECT_NUMBER \
--platform-version = PLATFORM_VERSION \
--distribution = generic \
--issuer-url = ISSUER_URL \
--context = KUBECONFIG_CONTEXT \
--kubeconfig = KUBECONFIG_PATH
Replace the following:
CLUSTER_NAME : the name of your cluster. The
CLUSTER_NAME must be compliant with the RFC 1123 Label Names standard .
GOOGLE_CLOUD_REGION : the Google Cloud region to
administer your cluster
PROJECT_NUMBER : the fleet host project where the
cluster will be registered
PLATFORM_VERSION : the GKE attached clusters version to
use for the cluster
ISSUER_URL : the issuer URL retrieved earlier
KUBECONFIG_CONTEXT : context in the kubeconfig for
accessing your cluster, as extracted earlier
KUBECONFIG_PATH : path to your kubeconfig
Authorize Cloud Logging / Cloud Monitoring
Note: Starting with Kubernetes version 1.28, manual policy binding to
authorize the gke-system/gke-telemetry-agent service account for log and
metric collection is no longer necessary. The required permissions are now
automatically granted to this service account. You can therefore disregard
this section.
In order for GKE attached clusters to create and upload system logs and metrics to
Google Cloud, it must be authorized.
To authorize the Kubernetes workload identity gke-system/gke-telemetry-agent
to write logs to Google Cloud Logging, and metrics to Google Cloud Monitoring,
run this command:
gcloud projects add-iam-policy-binding GOOGLE_PROJECT_ID \
--member = "serviceAccount: GOOGLE_PROJECT_ID .svc.id.goog[gke-system/gke-telemetry-agent]" \
--role = roles/gkemulticloud.telemetryWriter
Replace GOOGLE_PROJECT_ID with the cluster's Google Cloud project ID.
This IAM binding grants access for all clusters in the Google Cloud project project to
upload logs and metrics. You only need to run it after creating your
first cluster for the project.
Adding this IAM binding will fail unless at least one cluster has been
created in your Google Cloud project. This is because the workload identity pool
it refers to ( GOOGLE_PROJECT_ID .svc.id.goog ) is
not provisioned until cluster creation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
