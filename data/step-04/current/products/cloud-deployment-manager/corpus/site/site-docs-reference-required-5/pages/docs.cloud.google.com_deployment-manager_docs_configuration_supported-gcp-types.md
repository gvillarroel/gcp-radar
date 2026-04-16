---
title: "Supported Google Cloud type providers \_|\_ Cloud Deployment Manager \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/configuration/syntax-reference
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types
  title: "Supported Google Cloud type providers \_|\_ Cloud Deployment Manager \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Reference
Send feedback
Supported Google Cloud type providers
Stay organized with collections
Save and categorize content based on your preferences.
Beta
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
If you want to create a resource using a Google Cloud
type provider, use the following syntax in your configuration:
resources :
- name : example-resource
type : gcp-types/[PROVIDER]:[RESOURCE]
properties :
...
Where [PROVIDER] is a Google Cloud service, such as compute-v1 , and
[RESOURCE] is the resource you want to create, such as instances .
For example, if you want to create a reserved IP address using the
Compute Engine v1 API, use the following syntax:
type : gcp - types / compute - v1 : addresses
The following is a list of Google Cloud type providers supported for
deployments. To speed up creating your deployments, consider using
the production-ready templates from the
Cloud Foundation Toolkit Project
in the Deployment Manager GitHub repository.
Depending on the service and its launch stage, you might be able to create
additional resource types in your deployments. For a full list of resource
types, including resources that are in alpha, run the following command:
gcloud beta deployment - manager types list -- project gcp - types
You can also create your own type providers, such as for third-party APIs. For
an overview of creating a type provider, see
Integrating with Deployment Manager .
Service
Type provider
App Engine
gcp-types/appengine-v1
Resource snippets
Access Context Manager
gcp-types/accesscontextmanager-v1beta
Resource snippets
BigQuery
gcp-types/bigquery-v2
Resource snippets
Bigtable
gcp-types/bigtableadmin-v2
Resource snippets
Cloud Run functions
gcp-types/cloudfunctions-v1
Note : As of November 1, 2019,
new Functions are private by default, and require appropriate IAM
permissions to invoke. Learn about IAM permissions for Cloud Run functions .
Resource snippets
Cloud Key Management Service
gcp-types/cloudkms-v1
Resource snippets
Resource Manager (v1)
gcp-types/cloudresourcemanager-v1
Resource snippets
Resource Manager (v2)
gcp-types/cloudresourcemanager-v2
Resource snippets
Compute Engine (Alpha)
gcp-types/compute-alpha
Resource snippets
Compute Engine (Beta)
gcp-types/compute-beta
Resource snippets
Compute Engine
gcp-types/compute-v1
Resource snippets
Google Kubernetes Engine
gcp-types/container-v1
Note : If you want to create and
manage private GKE clusters with
Deployment Manager, see the
best practices for setting up options for private clusters .
Resource snippets
Google Kubernetes Engine (v1 Beta 1)
gcp-types/container-v1beta1
Resource snippets
Managed Service for Apache Spark
gcp-types/dataproc-v1
Resource snippets
Cloud DNS
gcp-types/dns-v1
Resource snippets
Filestore
gcp-types/file-v1beta1
Resource snippets
Identity and Access Management
gcp-types/iam-v1
Resource snippets
Cloud Logging
gcp-types/logging-v2
Resource snippets
Cloud Monitoring
gcp-types/monitoring-v3
Resource snippets
Pub/Sub
gcp-types/pubsub-v1
Resource snippets
Memorystore
gcp-types/redis-v1
Resource snippets
Memorystore (v1 Beta 1)
gcp-types/redis-v1beta1
Resource snippets
Cloud Runtime Configuration API
gcp-types/runtimeconfig-v1beta1
Resource snippets
Service Management
gcp-types/servicemanagement-v1
Resource snippets
Spanner
gcp-types/spanner-v1
Resource snippets
Cloud SQL (v1 Beta 4)
gcp-types/sqladmin-v1beta4
Resource snippets
Cloud Storage
gcp-types/storage-v1
Resource snippets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
