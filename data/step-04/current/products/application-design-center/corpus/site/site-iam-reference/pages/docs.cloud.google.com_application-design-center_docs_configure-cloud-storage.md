---
title: "Configure a Cloud Storage bucket \_|\_ Application Design Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-cloud-storage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-cloud-storage
  title: "Configure a Cloud Storage bucket \_|\_ Application Design Center \_|\_ Google\
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
Configure a Cloud Storage bucket
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Storage allows world-wide storage and retrieval of any amount of data
at any time. You can use Cloud Storage for a range of scenarios including
serving website content, storing data for archival and disaster recovery, or
distributing large data objects to users via direct download. For more
information, see Product overview of Cloud Storage .
This document describes the connections and parameters you can configure when
using App Design Center to create a Cloud Storage bucket. The
configuration parameters are based on the terraform-google-cloud-storage
Terraform module.
Component connections
The following table includes the components that you can connect to a
Cloud Storage bucket, and the resulting updates to your application and
its generated Terraform code.
Connected component
Application updates
Background information
Compute Engine instance template
The Compute Engine instances can control bucket objects, including listing, creating, viewing, and deleting objects.
The roles/storage.objectAdmin role is assigned to the Compute Engine instance template service account.
Set and manage IAM policies on buckets
service account
The service account can manage objects in the Cloud Storage bucket.
The service account IAM information is added to the Cloud Storage bucket.
The roles/storage.objectAdmin role is assigned to the service account.
Set and manage IAM policies on buckets
Cloud Run
The Cloud Run service can manage objects in the Cloud Storage bucket.
The Cloud Run service account IAM information is added to the Cloud Storage bucket.
The roles/storage.objectAdmin role is assigned to the Cloud Run service account.
Connect to Google Cloud services
Pub/Sub
The Pub/Sub subscription can write messages to the Cloud Storage bucket.
The Cloud Storage bucket information is added to the Pub/Sub subscription fields.
Cloud Storage subscriptions
Required configuration parameters
If your template includes a Cloud Storage component, you must configure the
following parameters before you deploy.
Parameter name
Description and constraints
Background information
Project ID
The project where you want to deploy the Cloud Storage resource.
Configure components
Region
location
Bucket locations
Name
name
Bucket Names
Optional configuration parameters
The following parameters are optional. To display advanced parameters, in the
Configuration area, select Show advanced fields .
Feature
Parameter name
Description and constraint information
Background information
Storage Class
storageClass
Storage Classes
Bucket Policy Only
iamConfiguration.uniformBucketLevelAccess
Uniform bucket-level access
Versioning
versioning.enabled
Object versioning
Autoclass
autoclass.enabled
Autoclass
Retention Policy
Is Locked
retentionPolicy.isLocked
Bucket Lock
Retention period
retentionPolicy.retentionPeriod
Retention policy
Encryption
Default KMS Key Name
encryption.defaultKmsKeyName
Use customer-managed encryption keys
Lifecycle Rules
Type
lifecycle.rule[].action.type
Object Lifecycle Management
Storage Class
lifecycle.rule[].action.storageClass
setStorageClass
Age
lifecycle.rule[].condition.age
age
Send Age If Zero
send_age_if_zero
lifecycle_rules
Created Before
lifecycle.rule[].condition.createdBefore
createdBefore
With State
with_state
lifecycle_rules
Matches Storage Class
lifecycle.rule[].condition.matchesStorageClass[]
matchesStorageClass
Matches Prefix
lifecycle.rule[].condition.matchesPrefix[]
matchesPrefix and matchesSuffix
Matches Suffix
lifecycle.rule[].condition.matchesSuffix[]
matchesPrefix and matchesSuffix
Num Newer Versions
lifecycle.rule[].condition.numNewerVersions
numNewerVersions
Custom Time Before
lifecycle.rule[].condition.customTimeBefore
customTimeBefore
Days Since Custom Time
lifecycle.rule[].condition.daysSinceCustomTime
daysSinceCustomTime
Days Since Noncurrent Time
lifecycle.rule[].condition.daysSinceNoncurrentTime
daysSinceNoncurrentTime
Noncurrent Time Before
lifecycle.rule[].condition.noncurrentTimeBefore
noncurrentTimeBefore
Internal Encryption Config
Create Encryption Key
To create a Cloud Key Management Service key ring and key, select the checkbox.
Customer-managed encryption keys
Prevent Destroy
To prevent the destruction of the Cloud KMS key, select the checkbox.
Key versions and locked objects
Key Destroy Scheduled Duration
destroyScheduledDuration
Key versions and locked objects
Key Rotation Period
rotationPeriod
Key rotation
Force Destroy
To delete all contained objects when you delete a bucket, select the checkbox.
force_destroy
IAM Members
Role
The collection of permissions that you want to grant.
Set and manage IAM policies on buckets
Member
The principals that are granted the role.
Set and manage IAM policies on buckets
Labels
Key
labels
Tags and labels
Value
labels
Tags and labels
Custom Placement Config
Data Locations
customPlacementConfig.dataLocations[]
Dual-regions
CORS
Origin
cors[].origin[]
Cross-origin resource sharing (CORS)
Method
cors[].method[]
How CORS works
Response Header
cors[].responseHeader[]
Components of a CORS configuration
Max Age Seconds
cors[].maxAgeSeconds[]
Components of a CORS configuration
Log Bucket
logging.logBucket
Usage logs & storage logs
Log Object Prefix
logging.logObjectPrefix
Usage logs & storage logs
Website
Main Page Suffix
website.mainPageSuffix
Recommended: assign specialty pages
Not Found Page
website.notFoundPage
Recommended: assign specialty pages
Public Access Prevention
iamConfiguration.publicAccessPrevention
Public access prevention
Soft Delete Policy
Retention Duration Seconds
softDeletePolicy.retentionDurationSeconds
Soft delete
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
