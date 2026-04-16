---
title: "Enable Binary Authorization \_|\_ GKE attached clusters \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization
  title: "Enable Binary Authorization \_|\_ GKE attached clusters \_|\_ Google Cloud\
    \ Documentation"
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
Enable Binary Authorization
Stay organized with collections
Save and categorize content based on your preferences.
Note: Starting with Kubernetes version 1.28, manual policy binding
to authorize the service account for Binary Authorization is no longer necessary.
The required permissions are now automatically granted to this service account.
You can therefore disregard step 2 in the following instructions.
To enable Binary Authorization for GKE attached clusters, perform the following steps:
Enable the Binary Authorization API in your project:
gcloud services enable binaryauthorization.googleapis.com \
--project = PROJECT_ID
Replace PROJECT_ID with the ID of your
Google Cloud project.
Grant the binaryauthorization.policyEvaluator role to the Kubernetes
service account associated with the Binary Authorization agent:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_ID .svc.id.goog [ gke-system/binauthz-agent ] \
--role = "roles/binaryauthorization.policyEvaluator"
Enable Binary Authorization when registering or updating a cluster.
Register a cluster
To enable Binary Authorization when registering a cluster, use the
gcloud container attached clusters register command . Follow the instructions in
attach your EKS cluster ,
and include the optional argument
--binauthz-evaluation-mode=PROJECT_SINGLETON_POLICY_ENFORCE :
gcloud container attached clusters register CLUSTER_NAME \
...
--binauthz-evaluation-mode = PROJECT_SINGLETON_POLICY_ENFORCE
Replace CLUSTER_NAME with the name of
your cluster.
Update a cluster
To enable Binary Authorization when updating a cluster, use the
gcloud container attached clusters update command . Follow the instructions in
update your EKS cluster ,
and include the optional argument
--binauthz-evaluation-mode=PROJECT_SINGLETON_POLICY_ENFORCE :
gcloud container attached clusters update CLUSTER_NAME \
...
--binauthz-evaluation-mode = PROJECT_SINGLETON_POLICY_ENFORCE
Replace CLUSTER_NAME with the name of
your cluster.
By following these steps, you ensure that only trusted and verified images
are used to create Kubernetes containers in your GKE clusters. This helps
to maintain a secure environment for your applications.
Configure policies
Enabling Binary Authorization alone doesn't automatically protect your cluster.
By default, it allows all container images to be deployed if no policy is
configured. This means that to effectively secure your cluster, you need to
define and enforce a policy that specifies which images are allowed. To
learn how to configure a Binary Authorization policy, see
Configure a policy using the Google Cloud CLI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
