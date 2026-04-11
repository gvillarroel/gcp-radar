---
title: "Access the Secret Manager API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/accessing-the-api
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/accessing-the-api
  title: "Access the Secret Manager API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Guides
Send feedback
Access the Secret Manager API
Stay organized with collections
Save and categorize content based on your preferences.
We recommend that you access Secret Manager API using the following tools:
The Google Cloud CLI , which provides a
command-line interface for managing secrets.
Convenient, idiomatic Secret Manager client libraries , which lets you access and manage
secrets from within your application source code. Client libraries are available
in many languages including C#(.NET), Go, Java, Node.js, PHP, Python, and Ruby.
Before you begin
Enable the Secret Manager API .
Requests to the Secret Manager API require authentication. For
information, see
Set up authentication for Secret Manager .
Use Secret Manager with Compute Engine and Google Kubernetes Engine
To use Secret Manager with workloads running on Compute Engine
or GKE, the underlying instance or node must have the
cloud-platform OAuth scope. If you receive an error with the following
message, it means the instance or node was not provisioned with the correct
OAuth scopes.
Request had insufficient authentication scopes
The required OAuth scope to use Secret Manager is:
https://www.googleapis.com/auth/cloud-platform
When creating a new instance, instance group, or node pool,
specify the cloud-platform scope :
gcloud
gcloud compute instances create " INSTANCE_ID " \
--scopes "https://www.googleapis.com/auth/cloud-platform"
For an existing instance, instance group, or node pool,
update the access scopes :
gcloud
gcloud compute instances set-service-account " INSTANCE_ID " \
--service-account " SERVICE_ACCOUNT_EMAIL " \
--scopes "https://www.googleapis.com/auth/cloud-platform"
See the
Compute Engine service account permissions
for more information.
Use Secret Manager with App Engine
To use Secret Manager with workloads running on App Engine, you must
grant any required permissions to the
App Engine service.
What's next
Learn more about
managing access to Secret Manager resources with IAM .
Learn how to create a secret and access a secret version .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
