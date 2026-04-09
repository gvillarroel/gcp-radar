---
title: "Attach your EKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster
  title: "Attach your EKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud Documentation"
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
Attach your EKS cluster
Stay organized with collections
Save and categorize content based on your preferences.
Overview
To attach a cluster means to connect it to Google Cloud by registering it with
Google Cloud Fleet management and
installing the GKE attached clusters software on it.
You can attach a cluster using the gcloud CLI or Terraform. To learn
how to create and attach an EKS cluster using Terraform, check the
GitHub repository of samples for GKE attached clusters .
This page is for IT administrators and Operators who want to set up,
monitor, and manage cloud infrastructure. To learn more about common roles and
example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
To attach an EKS cluster using gcloud, perform the
following steps.
Prerequisites
Ensure that your cluster meets the cluster requirements .
When attaching your cluster, you must specify:
a supported Google Cloud administrative region
and
a platform version.
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
Attach an EKS cluster
Note: The default number of clusters that you can attach per project is 50. To
increase this quota, contact Google Cloud support .
To attach your EKS cluster to Google Cloud
Fleet management , perform the following steps:
Ensure that your kubeconfig file has an entry for the cluster you'd like
to attach:
aws eks update-kubeconfig --region AWS_REGION \
--name EKS_CLUSTER_NAME
Retrieve the OIDC issuer URL with the following command:
aws eks describe-cluster \
--region AWS_REGION \
--name EKS_CLUSTER_NAME \
--query "cluster.identity.oidc.issuer" \
--output text
The output of this command is the URL of your OIDC issuer. Save this value
for use later.
Run this command to extract your cluster's kubeconfig context and
store it in the KUBECONFIG_CONTEXT environment variable:
KUBECONFIG_CONTEXT = $( kubectl config current-context )
Use the
gcloud container attached clusters register command to register the cluster:
gcloud container attached clusters register CLUSTER_NAME \
--location = GOOGLE_CLOUD_REGION \
--fleet-project = PROJECT_NUMBER \
--platform-version = PLATFORM_VERSION \
--distribution = eks \
--issuer-url = ISSUER_URL \
--context = KUBECONFIG_CONTEXT \
--kubeconfig = KUBECONFIG_PATH
Replace:
AWS_REGION : the AWS region where your EKS cluster
is located
CLUSTER_NAME : the name of your cluster. This name can be
the same EKS_CLUSTER_NAME you used in the preceding steps. The
CLUSTER_NAME must be compliant with the RFC 1123 Label Names standard .
GOOGLE_CLOUD_REGION : the Google Cloud region to administer
your cluster
PLATFORM_VERSION : the GKE attached clusters version to use for
the cluster
PROJECT_NUMBER : the fleet host project where the cluster
will be registered
ISSUER_URL : the issuer URL retrieved earlier
KUBECONFIG_CONTEXT : context in the kubeconfig for accessing
the EKS cluster, as extracted earlier
KUBECONFIG_PATH : path to your kubeconfig
Note: If attaching your cluster fails, the system automatically rolls back any
changes made to Google Cloud resources related to the cluster, such as
workload identity pool. This means the connection between your cluster and
GKE attached clusters isn't established, but your actual EKS
cluster remains unaffected. You can try again to attach the cluster after
fixing the issue that caused the failure.
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
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
