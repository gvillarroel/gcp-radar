---
title: "Configure an AlloyDB for PostgreSQL cluster and instance \_|\_ Application\
  \ Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-alloydb
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-alloydb
  title: "Configure an AlloyDB for PostgreSQL cluster and instance \_|\_ Application\
    \ Design Center \_|\_ Google Cloud Documentation"
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
Configure an AlloyDB for PostgreSQL cluster and instance
Stay organized with collections
Save and categorize content based on your preferences.
AlloyDB is a fully managed, PostgreSQL-compatible database service
built for your most demanding enterprise workloads, including high transaction
rates, large data sizes, and real-time analytics. For more information, see
AlloyDB overview .
This document describes the parameters you can configure when using
App Design Center to create an AlloyDB cluster and
instances. The configuration parameters are based on the
terraform-google-alloy-db
module.
Before you begin
Create a private services access configuration in a
Virtual Private Cloud (VPC) network that resides in the same
Google Cloud project where you'll create your AlloyDB instances.
For more information, see the following:
Private service access overview .
Enable private service access .
Component connections
You can connect the following components to an AlloyDB instance:
Component
Description
Background Information
Compute Engine instance templates
The Compute Engine instances can connect to the AlloyDB instance.
The AlloyDB resource metadata information is added to the instance template.
The roles/alloydb.admin role is added to the Compute Engine instance template service account.
Connection overview
Cloud Run
The Cloud Run service can connect to the AlloyDB instance.
The AlloyDB resource metadata is added to the Cloud Run environment variables.
The AlloyDB roles/alloydb.admin role is added to the Cloud Run service account.
Connect from Cloud Run
Required configuration parameters
The following table describes the required parameters for configuring an
AlloyDB cluster and a primary instance:
Parameter name
Description and constraint information
Background information
Project ID
The project where you want to deploy the AlloyDB instance.
Configure components
Cluster ID
The ID of the AlloyDB cluster.
Create cluster and its primary instance
Region
The location where the AlloyDB cluster is deployed.
AlloyDB locations
Optional configuration parameters
The following table describes the optional parameters for configuring an
AlloyDB cluster and a primary instance:
Feature
Subfeature
Parameter name
Description and constraint information
Background information
Primary instance
Instance ID
name
Create a primary instance
Display name
displayName
Create a primary instance
Database flags
Key
databaseFlags
Configure an instance's database flags
Value
databaseFlags
Configure an instance's database flags
Labels
Key
labels
Best practices for labels
Value
labels
Best practices for labels
Annotations
Key
annotations
annotations
Value
annotations
annotations
GCE Zone
gceZone
Regions and zones
Availability Type
availabilityType
Test a primary instance for high availability
Machine CPU Count
cpuCount
Sizing and deployment recommendations
Machine Type
machineType
Create a primary instance
SSL Mode
sslMode
Configure SSL enforcement mode
Require Connectors
requireConnectors
Control connector enforcement
Query Insights Config
Query String Length
queryStringLength
About Query Insights
Record Application Tags
recordApplicationTags
Improve query performance using query insights
Record Client Address
recordClientAddress
Improve query performance using query insights
Query Plans Per Minute
queryPlansPerMinute
Improve query performance using query insights
Enable Public IP
enablePublicIP
Connect using public IP
Enable Outbound Public IP
enableOutboundPublicIP
Connect using public IP
CIDR Range
cidrRange
Public IP
Network Self Link
network
Enable private services access
Cluster Type
clusterType
Cross-region replication overview
Cluster Labels
Key
labels
Best practices for labels
Value
labels
Best practices for labels
Cluster Display Name
displayName
Create a cluster
Cluster Initial User
User
initialUser
Create a new cluster
Password
initialUser
Create a new cluster
Skip Await Major Version Upgrade
skip_await_major_version_upgrade
Database in-place major version upgrade overview
Subscription Type
subscriptionType
Free trial cluster overview
Cluster Encryption Key Name
encryptionConfig
About CMEK
Automated Backup Policy
Region
location
On-demand backup locations
Backup Window
backupWindow
Continuous backup and recovery
Enabled
enabled
Data backup and recovery overview
Weekly Schedule
Days of Week
daysOfWeek
Automated backup configuration attributes
Start Time
startTimes
Automated backup configuration attributes
Quantity Based Retention Count
count
Automated backup configuration attributes
Time Based Retention Count
retentionPeriod
Automated backup configuration attributes
Labels
Key
labels
Best practices for labels
Value
labels
Best practices for labels
Backup Encryption Key Name
encryptionConfig
Backups and restoration
Continuous Backup Enable
enabled
Continuous backup and recovery
Continuous Backup Recovery Window Days
recoveryWindowDays
Continuous backup and recovery
Maintenance Update Policy
Maintenance Windows
Day
day
Maintenance overview
Start Time
Hours
startTime
Maintenance overview
Continuous Backup Encryption Key Name
kmsKeyName
Backups and restoration
Read Pool Instance(s)
Instance ID
name
Create a read pool instance
Display Name
displayName
Create a read pool instance
Node Count
nodeCount
Create a read pool instance
Database Flags
Key
databaseFlags
Configure database flags
Value
databaseFlags
Configure database flags
Machine CPU Count
cpuCount
Create a read pool instance
Machine Type
machineType
Create a read pool instance
SSL Mode
sslMode
Configure SSL enforcement mode
Require Connectors
requireConnectors
About the AlloyDB Auth Proxy
Query Insights Config
Query String Length
queryStringLength
About Query Insights
Record Application Tags
recordApplicationTags
Improve query performance using query insights
Record Client Address
recordClientAddress
Improve query performance using query insights
Query Plans Per Minute
queryPlansPerMinute
Improve query performance using query insights
Enable Public IP
publicIpAddress
Connect using public IP
CIDR Range
cidrRange
Public IP
Primary Cluster Name
primaryClusterName
Create a cluster and its primary instance
Allocated IP Range
allocatedIpRange
Enable private services access
Database Version
databaseVersion
Database version policies
PSC Enabled
pscEnabled
Private Service Connect overview
PSC Allowed Consumer Projects
allowed_consumer_projects
Allowed Private Service Connect projects
PSC Auto Connections
Consumer Network
consumer_network
Allowed Private Service Connect projects
Consumer Project
consumer_project
Allowed Private Service Connect projects
Deletion Policy
deletion_policy
deletion_policy
Network Attachment Resource
networkAttachment
Network attachment
Restore Cluster
Restore Backup Source
Backup Name
restoreBackupSource
Use point-in-time recovery (PITR)
Restore Continuous Backup Source
Cluster
cluster
Use point-in-time recovery (PITR)
Point in Time
pointInTime
Use point-in-time recovery (PITR)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
