---
title: "Migrate your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/migrate-cluster
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/migrate-cluster
  title: "Migrate your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\
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
Migrate your CNCF conformant cluster
Stay organized with collections
Save and categorize content based on your preferences.
The predecessor version of GKE attached clusters is known as GKE attached clusters
(previous generation). Migrating from the earlier
version of GKE attached clusters to the current generation gives you access to this
functionality, including lifecycle management and Fleet registration. Migration
is a one-way operation: once you have migrated to the current generation of
GKE attached clusters, there is no way to return to GKE attached clusters (previous generation).
Version numbering policy
These documents refer to the GKE attached clusters version as the platform version,
to distinguish it from the Kubernetes version. GKE attached clusters uses the same
version numbering convention as GKE - for example, 1.21.5-gke.1. When attaching
or updating your cluster, you must choose a platform version whose minor version
is the same as or one level below the Kubernetes version of your cluster. For
example, you can attach a cluster running Kubernetes v1.22.* with
GKE attached clusters platform version 1.21.* or 1.22.*.
This lets you upgrade your cluster to the next minor version before upgrading
GKE attached clusters.
Ensure Workload Identity is enabled
Existing clusters from GKE attached clusters (previous generation) must have Workload
Identity enabled before being migrated to the current generation of GKE attached clusters.
To determine whether WI is enabled, run the following command and check
the output for any Workload Identity field:
gcloud container hub memberships describe MEMBERSHIP_NAME
If Workload Identity is not enabled, the membership must be updated to enable it.
The command to update your cluster's membership varies slightly depending on
whether your cluster has a public or private OIDC issuer. Choose the tab that
applies to your cluster:
Private OIDC issuer
gcloud container hub memberships register MEMBERSHIP_NAME \
-- context = KUBECONFIG_CONTEXT \
-- kubeconfig = KUBECONFIG_PATH \
-- enable - workload - identity \
-- has - private - issuer
Replace:
MEMBERSHIP_NAME : the membership name of your cluster
KUBECONFIG_CONTEXT : context in the kubeconfig for accessing the AKS
cluster
KUBECONFIG_PATH : path to your kubeconfig file
Public OIDC issuer
Retrieve your cluster's OIDC issuer URL. Specific instructions vary by
distribution.
The output of this command will be the URL of your OIDC issuer. Save this value
for use later.
Update the membership:
gcloud container fleet memberships register MEMBERSHIP_NAME \
-- context = KUBECONFIG_CONTEXT \
-- kubeconfig = KUBECONFIG_PATH \
-- enable - workload - identity \
-- public - issuer - url = OIDC_URL
Replace:
MEMBERSHIP_NAME : the membership name of your cluster
KUBECONFIG_CONTEXT : context in the kubeconfig for accessing the AKS
cluster
KUBECONFIG_PATH : path to your kubeconfig
OIDC_URL : the OIDC URL retrieved earlier
Migrate your cluster
To migrate your cluster from GKE attached clusters (previous generation) to GKE attached clusters:
Extract your cluster's kubeconfig context and store it in the
KUBECONFIG_CONTEXT environment variable:
KUBECONFIG_CONTEXT=$(kubectl config current-context)
Run the following command to migrate your cluster to the current generation
of GKE attached clusters. This command extracts the relevant details of your cluster's
configuration and registers your cluster with Google Fleet Management, and
installs or upgrades any necessary software, such as the lifecycle agent, on
your cluster.
gcloud container attached clusters import \
-- location = GOOGLE_CLOUD_REGION \
-- fleet - membership = FLEET_MEMBERSHIP \
-- platform - version = PLATFORM_VERSION \
-- distribution = CLUSTER_DISTRIBUTION \
-- context = KUBECONFIG_CONTEXT \
[ -- kubeconfig = KUBECONFIG_PATH ]
Replace:
GOOGLE_CLOUD_REGION : the Google Cloud location
from which your cluster is administered
FLEET_MEMBERSHIP : the fully qualified membership designator
of your registered cluster (see below)
PLATFORM_VERSION : the version of GKE attached clusters that you
want to migrate to (example: v1.22.0-gke.1)
CLUSTER_DISTRIBUTION : the cluster type - eks for
AWS's Elastic Kubernetes Service, aks for Azure Kubernetes Service, or
generic for any other distribution
KUBECONFIG_CONTEXT : the name of the context in your
kubeconfig to connect to your cluster with
KUBECONFIG_PATH : the location of your kubeconfig file.
If not specified, the default is ~/.kube/config
The membership designator is a string that uniquely identifies your attached
cluster and has the form
projects/ PROJECT_NUMBER /locations/global/memberships/ MEMBERSHIP_ID ,
where
PROJECT_NUMBER is your Fleet host project number. You must
specify the same project number as one your cluster currently belongs to
MEMBERSHIP_ID : this must be the fleet membership ID of
your existing cluster. GKE attached clusters will use this value as your
cluster name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
