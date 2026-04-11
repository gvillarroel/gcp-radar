---
title: "Configure a Firestore database \_|\_ Application Design Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-firestore
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-firestore
  title: "Configure a Firestore database \_|\_ Application Design Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
Configure a Firestore database
Stay organized with collections
Save and categorize content based on your preferences.
Firestore is a flexible, scalable database for mobile, web, and server
development from Firebase and Google Cloud. This document
describes the connections and parameters you can configure when using
App Design Center to create a Firestore database. The
configuration parameters are based on the
terraform-google-firestore
Terraform module.
Component connections
The following table includes the components that you can connect to a
Firestore database, and the resulting updates to your application and
its generated Terraform code.
Component
Description
Background information
Compute Engine instance templates
Adds the roles/datastore.user IAM role to the Compute Engine instance template's service account.
Adds the Firestore database ID to the Compute Engine instance template's metadata field.
Configure per-database access permissions
Cloud Run service
Adds the roles/datastore.user IAM role to the Compute Engine instance template's service account.
Adds the Firestore database ID to the Cloud Run service's environment variables.
Required configuration parameters
If your template includes a Firestore component, you must configure the following parameters before you deploy.
Parameter name
Description and constraint information
Background information
Project ID
The project where you want to deploy the Firestore instance.
Creating and managing projects
Database ID
The ID of the Firestore database. Defaults to (default) .
Database ID
Region
The location where the Firestore database is deployed.
Locations
Optional configuration parameters
The following parameters are optional. To display advanced parameters, in the Configuration area, select Show advanced fields .
Feature
Parameter name
Description and constraint information
Background information
Database Type
DatabaseType
Choosing between Native mode and Datastore mode
Database Edition
DatabaseEdition
Firestore editions overview
Concurrency Mode
ConcurrencyMode
Concurrency modes
Delete Protection State
DeleteProtectionState
Delete protection
Kms Key Name
kmsKeyName
Customer-managed encryption keys
Point In Time Recovery Enablement
PointInTimeRecoveryEnablement
Point-in-time recovery overview
Deletion Policy
The deletion policy to be enforced when the Firestore Database is destroyed using Terraform.
Terraform deletion_policy
Backup Schedule
Weekly Recurrence Day
day
Back up and restore data
Weekly Recurrence Retention
retention
Daily Recurrence Retention
retention
Composite Index
Index ID
The ID of the composite index.
Indexing overview
Collection
The collection ID.
Query Scope
queryScope
Api Scope
apiScope
Density
density
Multikey
multikey
Field Path
fieldPath
Order
order
Array Config
arrayConfig
Vector Dimension
dimension
Field Configuration
Collection
The collection ID.
Single field indexes
Field
field
TTL Enabled
TtlConfig
Ascending Index Query Scope
IndexConfig
Descending Index Query Scope
IndexConfig
Array Index Query Scope
IndexConfig
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
