---
title: "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/full-resource-names
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/batch
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/full-resource-names
  title: "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Reference
Send feedback
Full resource names
Stay organized with collections
Save and categorize content based on your preferences.
Some Identity and Access Management (IAM) features, such as
troubleshooting access issues and
viewing the grantable roles on a resource , require
you to provide a full resource name .
Note: IAM Conditions also accepts resource names for a
limited number of services. For details, see the
resource attribute reference for
IAM Conditions.
This page provides examples of full resource names for commonly used
Google Cloud services. It is not a complete list. To learn more about how
full resource names are formatted, see the
resource names section of the API design guide.
Resource type
Full resource name format
BigQuery datasets
//bigquery.googleapis.com/projects/ PROJECT_ID /datasets/ DATASET_ID
Cloud Billing accounts
//cloudbilling.googleapis.com/billingAccounts/ BILLING_ACCOUNT_ID
Cloud Run services
//run.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION_ID /services/ SERVICE_ID
Spanner instances
//spanner.googleapis.com/projects/ PROJECT_ID /instances/ INSTANCE_ID
Cloud SQL instances
//sqladmin.googleapis.com/projects/ PROJECT_ID /instances/ INSTANCE_ID
Cloud Storage buckets 1
//storage.googleapis.com/projects/_/buckets/ BUCKET_ID
Compute Engine instances
//compute.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /instances/ INSTANCE_ID
Compute Engine networks
//compute.googleapis.com/projects/ PROJECT_ID /global/networks/ NETWORK
Compute Engine subnetworks
//compute.googleapis.com/projects/ PROJECT_ID /regions/ REGION /subnetworks/ SUBNETWORK
Google Kubernetes Engine clusters
//container.googleapis.com/projects/ PROJECT_ID /clusters/ CLUSTER_ID
IAM service accounts
//iam.googleapis.com/projects/ PROJECT_ID / serviceAccounts/ SERVICE_ACCOUNT_EMAIL
IAM service account keys
//iam.googleapis.com/projects/ PROJECT_ID / serviceAccounts/ SERVICE_ACCOUNT_EMAIL /keys/ KEY_ID
Identity-Aware Proxy App Engine app service
//iap.googleapis.com/projects/ PROJECT_NUMBER /iap_web/appengine- PROJECT_ID /services/ APP_SERVICE_ID
Identity-Aware Proxy Compute Engine backend service
//iap.googleapis.com/projects/ PROJECT_NUMBER /iap_web/compute/services/ BACKEND_SERVICE_ID_OR_NAME
Pub/Sub topics
//pubsub.googleapis.com/projects/ PROJECT_ID /topics/ TOPIC_ID
Resource Manager organizations
//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION_NUMBER
Resource Manager folders
//cloudresourcemanager.googleapis.com/folders/ FOLDER_NUMBER
Resource Manager projects
//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID
1 The format shown here is compatible with IAM.
Some services use a different format for this resource type.
What's next
Learn how to troubleshoot access issues for a
resource.
Understand how to view the roles you can grant on a
resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
