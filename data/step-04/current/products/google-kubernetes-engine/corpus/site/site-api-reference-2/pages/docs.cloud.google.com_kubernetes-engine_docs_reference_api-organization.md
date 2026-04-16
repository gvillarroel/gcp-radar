---
title: "API organization and structure \_|\_ Google Kubernetes Engine (GKE) \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-organization
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-organization
  title: "API organization and structure \_|\_ Google Kubernetes Engine (GKE) \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
API organization and structure
Stay organized with collections
Save and categorize content based on your preferences.
The programmatic interface to your Google Kubernetes Engine cluster has two
principal APIs: The Google Kubernetes Engine API (and the
associated Google Cloud CLI) and the
Kubernetes API (and the associated kubectl command-line
interface).
Note: Before you use some parts of the Google Kubernetes Engine API or Kubernetes API,
you may need to grant access to additional resources in
Identity and Access Management (IAM). For more information, visit
API permissions .
Google Kubernetes Engine API
You use the Google Kubernetes Engine API and Google Cloud CLI
primarily for configuring your cluster on Google Cloud. This might
include tasks such as:
Creating a cluster.
Deleting a cluster.
Configuring cluster-level networking, such as rotating the cluster control
plane IP or enabling network policy enforcement.
Updating the version of Kubernetes running on the cluster.
Adding, removing, or modifying node pools in your cluster.
Setting the machine type or node image used for your cluster's nodes.
Configuring the geographic zones or regions in which your cluster runs.
Google Kubernetes Engine API versioning
The Google Kubernetes Engine API has three groups:
v1 for generally available features.
v1alpha1 for alpha features.
v1beta1 for beta features.
Similarly, Google Kubernetes Engine gcloud commands are divided into three groups:
gcloud container clusters contain flags for generally available
features and use the v1 group.
gcloud alpha container clusters contain flags for alpha
features and use the v1alpha1 group.
gcloud beta container clusters contain flags for beta
features and use the v1beta1 group.
Note: To use Google Kubernetes Engine alpha features and commands, Google must
allowlist your project.
To learn how to use Google Kubernetes Engine beta features through the v1beta1
API, refer to Google Kubernetes Engine Beta Features .
Google Kubernetes Engine beta features
When new features for Google Kubernetes Engine are released to beta, they are made
available through the v1beta1 API .
To use gcloud commands for Google Kubernetes Engine beta features, just run
gcloud beta container clusters commands.
Note: Commands that use the v1beta1 API to create or modify clusters only
affect beta functionality on those clusters. For generally available features,
you can still access the cluster using the standard v1 API.
As features "graduate" from beta to general availability, the commands move from
the v1beta1 API to the v1 API, and from the gcloud beta container track to
the gcloud container track in the command-line interface). The commands might
undergo small changes during this transition. Any breaking changes are only made
after a deprecation warning and must maintain a three month period of backward
compatibility.
Kubernetes API
You use the Kubernetes API and kubectl command-line interface for managing
your cluster's containerized applications and workloads. This might include
tasks such as:
Deploying an application
Scaling an application
Configuring intra-cluster networking settings
Configuring Pods and Containers
Controlling when Pods are evicted or restarted
Kubernetes API versioning
Kubernetes supports multiple API versions, each at a different API path such as
/api/v1 or /apis/extensions/v1beta1 . You must specify the API version when
writing object configuration files or when interacting with the
API directly.
The API is versioned separately from Kubernetes itself. For more information on
API versioning, refer to the
Kubernetes API versioning documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
