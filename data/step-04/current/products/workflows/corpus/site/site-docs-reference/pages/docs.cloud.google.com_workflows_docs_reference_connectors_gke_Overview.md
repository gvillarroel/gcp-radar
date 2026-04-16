---
title: "Kubernetes API Connector Overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview
  title: "Kubernetes API Connector Overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Kubernetes API Connector Overview
Stay organized with collections
Save and categorize content based on your preferences.
The Workflows connector defines the built-in functions that can
be used to access other APIs within a workflow.
This page provides an overview of the individual connector. There is no need to
import or load connector libraries in a workflow—connectors work out of the box
when used in a call step.
Note: The Kubernetes API is distinct from the Kubernetes Engine API, which is
used to deploy and manage GKE clusters. To call the Kubernetes
Engine API in a workflow, use the Kubernetes
Engine API connector .
Kubernetes API
The Kubernetes API server runs on the control plane of a Google Kubernetes Engine (GKE)
cluster, allowing you to interact with objects in the cluster. This connector
uses a provided cluster_id field and optional project and location fields
to make a request to a cluster's control plane endpoint, even if the cluster is
private. Learn more about using
the Kubernetes API connector .
Note: If not specified, the project and location default to that of the
workflow. If the GKE cluster is in a different project or region,
you must specify it.
For more information about the control plane, see
GKE cluster architecture . For more information about API methods, see
Kubernetes API reference .
Functions
await_job
Wait for a Kubernetes Job to complete.
create_job
Run a Kubernetes Job in a GKE cluster.
delete_job
Delete a Kubernetes Job.
request
Send an HTTP request to a GKE cluster's control plane.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
