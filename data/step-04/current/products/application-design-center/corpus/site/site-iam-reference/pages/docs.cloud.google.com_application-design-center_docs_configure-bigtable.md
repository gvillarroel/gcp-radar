---
title: "Configure a Bigtable instance \_|\_ Application Design Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-bigtable
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-bigtable
  title: "Configure a Bigtable instance \_|\_ Application Design Center \_|\_ Google\
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
Configure a Bigtable instance
Stay organized with collections
Save and categorize content based on your preferences.
Bigtable is a key-value and wide-column store, ideal for fast access to
structured, semi-structured, or unstructured data. For example, you might create
a Bigtable instance to store data for the following use cases:
Clickstream
Internet-of-things (IoT)
Batch analytics
Machine learning model training
For more information, see the following:
Bigtable overview .
Instances, clusters, and nodes .
This document describes the connections and parameters you can configure when
using App Design Center to create a Bigtable
instance. The configuration parameters are based on the terraform-google-bigtable Terraform module.
Component connections
The following table includes the components that you can connect to a
Bigtable instance, and the resulting updates to your
application and its generated Terraform code.
Connected component
Application updates
Background information
Compute Engine instance template
The Compute Engine instances can connect to and manage the Bigtable instance.
The Bigtable resource metadata information is added to the Compute Engine instance template.
The roles/bigtable.admin role is added to the Compute Engine instance template service account.
Bigtable overview
Cloud Run
The Cloud Run service can perform administrative functions on the Bigtable instance.
The Bigtable resource metadata information is added to the Cloud Run environment variables.
The roles/bigtable.admin role is added to the Cloud Run service account.
What is Cloud Run
Required configuration parameters
If your template includes a Bigtable component, you must
configure the following Bigtable instance parameters before you
deploy.
Parameter name
Description and constraints
Background information
Project ID
The project where you want to deploy the Bigtable instance.
Configure components
Name
name
name
Optional configuration parameters
The following parameters are optional. To display advanced parameters, in the
Configuration area, select Show advanced fields .
Feature
Subfeature
Parameter name
Description and constraint information
Background information
Display Name
displayName
display_name
Zones
Key
The zones map object key.
zones
Zone
location
Bigtable locations
Cluster ID
clusterID
cluster_id
Num Nodes
serveNodes
Nodes
KMS Key Name
kmsKeyName
Customer-managed encryption keys (CMEK)
Autoscaling Config
Min Nodes
minServeNodes
Determine the minimum number of nodes
Max Nodes
maxServeNodes
Determine the maximum number of nodes
CPU Target
cpuUtilizationPercent
Determine the CPU utilization target
Storage Target
storageUtilizationGibPerNode
Determine the storage utilization target
Tables
Key
The tables map object key.
tables
Table Name
name
name
Split Keys
split_keys
Optional: Split the table by row key
Deletion Protection
deletion_protection
Modify deletion protection
Change Stream Retention
retentionPeriod
Change streams overview
Automated Backup Policy
Retention Period
retentionPeriod
Use automated backup
Frequency
frequency
Use automated backup
Column Family
Key
The column_family map object key. This object is in the tables object.
column_family
Family
family
Column families
Deletion Protection
When selected, a terraform apply or terraform destroy that would delete the instance will fail. When not selected, the instance can be deleted.
deletion_protection
Storage Type
defaultStorageType
Choose between SSD and HDD storage
Labels
Key
labels
Create and manage instance labels
Value
labels
Create and manage instance labels
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
