---
title: "Class EnrolledService (1.19.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.EnrolledService
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.EnrolledService
  title: "Class EnrolledService (1.19.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class EnrolledService (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.19.0 (latest)
1.18.0
1.17.0
1.16.2
1.15.0
1.14.1
1.13.5
1.12.0
1.11.3
1.10.1
1.9.1
1.8.0
1.7.5
1.6.1
1.5.1
1.4.1
1.3.5
1.2.0
1.1.1
1.0.0
0.2.2
0.1.0
EnrolledService ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represents the enrollment of a cloud resource into a specific
service.
Attributes
Name
Description
cloud_product
str
The product for which Access Approval will be enrolled.
Allowed values are listed below (case-sensitive):
- all
- GA
- App Engine
- BigQuery
- Cloud Bigtable
- Cloud Key Management Service
- Compute Engine
- Cloud Dataflow
- Cloud Dataproc
- Cloud DLP
- Cloud EKM
- Cloud HSM
- Cloud Identity and Access Management
- Cloud Logging
- Cloud Pub/Sub
- Cloud Spanner
- Cloud SQL
- Cloud Storage
- Google Kubernetes Engine
- Organization Policy Serivice
- Persistent Disk
- Resource Manager
- Secret Manager
- Speaker ID
Note: These values are supported as input for legacy
purposes, but will not be returned from the API.
- all
- ga-only
- appengine.googleapis.com
- bigquery.googleapis.com
- bigtable.googleapis.com
- container.googleapis.com
- cloudkms.googleapis.com
- cloudresourcemanager.googleapis.com
- cloudsql.googleapis.com
- compute.googleapis.com
- dataflow.googleapis.com
- dataproc.googleapis.com
- dlp.googleapis.com
- iam.googleapis.com
- logging.googleapis.com
- orgpolicy.googleapis.com
- pubsub.googleapis.com
- spanner.googleapis.com
- secretmanager.googleapis.com
- speakerid.googleapis.com
- storage.googleapis.com
Calls to UpdateAccessApprovalSettings using 'all' or any of
the XXX.googleapis.com will be translated to the associated
product name ('all', 'App Engine', etc.).
Note: 'all' will enroll the resource in all products
supported at both 'GA' and 'Preview' levels.
More information about levels of support is available at
https://cloud.google.com/access-approval/docs/supported-services
enrollment_level
google.cloud.accessapproval_v1.types.EnrollmentLevel
The enrollment level of the service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
