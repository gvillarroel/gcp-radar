---
title: "Authenticate to GKE \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/authentication
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/authentication
  title: "Authenticate to GKE \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
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
Reference
Send feedback
Authenticate to GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This document describes how to authenticate to Google Kubernetes Engine programmatically. How
you authenticate to Google Kubernetes Engine depends on the interface you use to access the API
and the environment where your code is running.
The GKE API lets you interact with
the Google Cloud infrastructure that runs Kubernetes, like your
GKE clusters and nodes.
To interact with Kubernetes objects like Pods and Services, you must
authenticate to the Kubernetes API, which is separate to the
GKE API and is served by the Kubernetes API server in each
cluster. For instructions, see
Authenticate to the Kubernetes API server .
To access other Google Cloud resources like Cloud Storage buckets
from workloads running in GKE, use
Workload Identity Federation for GKE .
For more information about Google Cloud authentication, see the
Authentication methods .
API access
GKE supports programmatic access. You can access the API in
the following ways:
Client libraries
Google Cloud CLI
REST
Client libraries
The GKE client libraries provide
high-level language support for authenticating to GKE
programmatically.
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
Google Cloud CLI
When you use the gcloud CLI to access
GKE, you
log in to the gcloud CLI with a user
account, which provides the credentials used by the gcloud CLI commands.
If your organization's security policies prevent user accounts from having the required
permissions, you can use service account impersonation .
For more information, see
Authenticate for using the gcloud CLI .
For more information about using the gcloud CLI with GKE,
see the gcloud CLI reference pages .
REST
You can authenticate to
the GKE API
by using your gcloud CLI credentials or by using
Application Default Credentials .
For more information about authentication for REST requests, see
Authenticate for using REST .
For information about the types of credentials, see
gcloud CLI credentials and ADC credentials .
What's next
Authenticate to the Kubernetes API server .
Use external identity providers to authenticate to GKE .
Authenticate to Google Cloud APIs from GKE using Workload Identity Federation for GKE .
Learn about access control in GKE and Kubernetes .
Learn about the GKE API and the Kubernetes API .
Learn about Google Cloud authentication methods .
See a list of authentication use cases .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
