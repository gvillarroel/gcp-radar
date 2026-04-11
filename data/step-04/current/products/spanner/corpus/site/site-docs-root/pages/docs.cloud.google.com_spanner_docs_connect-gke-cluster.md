---
title: "Connect Spanner with a GKE cluster \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/connect-gke-cluster
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/connect-gke-cluster
  title: "Connect Spanner with a GKE cluster \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
Connect Spanner with a GKE cluster
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to grant your Google Kubernetes Engine (GKE)
cluster permissions to access your Spanner database.
GKE is a managed Kubernetes service that makes it easy to deploy
and manage containerized applications. By using GKE and
Spanner together, you can take advantage of scalability,
reliability, security, and high availability in your application layer and in
your database layer.
Your GKE cluster can access the Spanner API through
Workload Identity Federation for GKE .
Workload Identity Federation for GKE allows a Kubernetes service account in your cluster to act
as an IAM service account. The IAM service account provides Application Default
Credentials
for your pods, so that you don't need to configure each pod to use your personal
user credential.
After you configure your applications to authenticate using Workload Identity Federation for GKE,
you can use Spanner client libraries
to query your Spanner databases. You can also migrate your
applications to your GKE node pools .
To create a connection in a sample environment, try the
Connecting Spanner with GKE Autopilot codelab .
Enable Workload Identity Federation for GKE
If you haven't done so already, enable Workload Identity Federation for GKE for your
GKE cluster. You can enable Workload Identity Federation for GKE on a new
cluster by creating a new node pool
or you can enable Workload Identity Federation for GKE on an existing node pool .
GKE autopilot clusters
have Workload Identity Federation for GKE enabled by default. For more information, see
Enable Workload Identity Federation for GKE .
Authenticate connection to Spanner with Workload Identity Federation for GKE
Configure your applications to authenticate to Google Cloud by using
Workload Identity Federation for GKE.
Ensure that your GKE Pod uses a Kubernetes ServiceAccount
object, as described in Configure authorization and principals .
Create an IAM allow policy that grants the necessary
Spanner IAM roles to the Kubernetes
ServiceAccount object. The following example grants the Spanner Database
User ( roles/spanner.databaseUser ) role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ PROJECT_ID .svc.id.goog/subject/ns/ NAMESPACE /sa/ KSA_NAME \
--role=roles/spanner.databaseUser \
--condition=None
Replace the following:
PROJECT_ID : The project ID of the
GKE cluster.
PROJECT_NUMBER : The numerical
Google Cloud project number.
NAMESPACE : The Kubernetes namespace that
contains the ServiceAccount.
KSA_NAME : The name of the ServiceAccount.
Connect Spanner databases
After your application Pod is authenticated, you can use one of the
Spanner client libraries
to query your Spanner database.
What's next
Learn how to deploy your application to the GKE cluster .
Learn how to deploy your application using GKE Autopilot
and Spanner .
Learn more about how to migrate existing workloads to Workload Identity Federation for GKE .
Learn more about SQL best practices .
Integrate Spanner with other ORMs including Hibernate ORM ,
gorm , and Django ORM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
