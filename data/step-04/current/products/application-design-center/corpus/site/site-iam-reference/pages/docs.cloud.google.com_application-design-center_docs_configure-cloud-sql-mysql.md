---
title: "Configure a Cloud SQL (MySQL) instance \_|\_ Application Design Center \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql
  title: "Configure a Cloud SQL (MySQL) instance \_|\_ Application Design Center \_\
    |\_ Google Cloud Documentation"
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
Configure a Cloud SQL (MySQL) instance
Stay organized with collections
Save and categorize content based on your preferences.
Cloud SQL (MySQL) is a fully-managed database service that helps you set
up, maintain, manage, and administer your relational databases on Google Cloud.
For more information, see the following:
Cloud SQL overview
About instance settings
This document describes the connections and parameters you can configure when
using App Design Center to create a Cloud SQL for MySQL
instance. The configuration parameters are based on the terraform-google-sql-db
Terraform module.
Component connections
The following table includes the components that you can connect to a
Cloud SQL (MySQL) instance, and the resulting updates to your application and
its generated Terraform code.
Connected component
Application updates
Background information
Compute Engine instance template
The Compute Engine instances can connect and read and write data to the Cloud SQL (MySQL) instance.
The Cloud SQL connection metadata is added to the Compute Engine instance template.
The roles/cloudsql.instanceUser and roles/cloudsql.client roles are added to the Compute Engine instance template service account.
The Compute Engine service account is added as an IAM user to the Cloud SQL instance.
Connect from Compute Engine
Secret Manager
The Secret Manager Secret Data field contains the password for the default user.
Use Secret Manager to handle secrets in Cloud SQL
Service account
The service account can connect to the Cloud SQL (MySQL) instance.
The roles/cloudsql.instanceUser and roles/cloudsql.client roles are added to the service account.
The service account IAM information is added to the Cloud SQL instance.
Roles and permissions
Cloud Run
The Cloud Run service can read and write data to the Cloud SQL (MySQL) instance.
The Cloud SQL connection metadata is added to the Cloud Run service.
The roles/cloudsql.instanceUser and roles/cloudsql.client roles are added to the Cloud Run service account.
The Cloud Run service account is added as an IAM user to the Cloud SQL instance.
Connect from Cloud Run
Required configuration parameters
If your template includes a Cloud SQL (MySQL) component, you must
configure the following parameters before you deploy.
Parameter name
Description and constraint information
Background information
Project ID
The project where you want to deploy the Cloud SQL resource.
Configure components
Name
name
Create a MySQL instance
Database Version
databaseVersion
SqlDatabaseVersion
Region
region
Manage instance locations
Optional configuration parameters
The following parameters are optional. To display advance parameters, in the
Configuration area, select Show advanced fields .
Feature
Parameter name
Description and constraint information
Background information
Zone
gceZone
Manage instance locations
Edition
edition
Introduction to Cloud SQL for MySQL editions
Availability Type
availabilityType
Availability in Cloud SQL
Enable Default Db
If selected, create a default database. In the Db Name field, enter the name of the default database.
Create a database on the Cloud SQL instance
Enable Default User
If selected, create a default user. Enter a User Name and User Password for the default user.
Default MySQL user
Root Password
rootPassword
Initial root password when the instance is created.
Machine
Select a machine series and type for your instance. The options that you select determine available storage type and configuration options. You can't change the machine series after you create your instance.
Machine series overview
Disk Autoresize
Disk Autoresize
storageAutoResize
Enable automatic storage increases
Disk Autoresize Limit
storageAutoResizeLimit
Automatic storage increase limit
Disk Size
dataDiskSizeGb
Storage capacity
Disk Type
dataDiskType
Storage type
Pricing Plan
pricingPlan
SqlPricingPlan
Backup Configuration
Binary Log Enabled
binaryLogEnabled
Create a MySQL instance
Enabled
enabled
Create a MySQL instance
Start Time
start_time
Create a MySQL instance
Region
location
Custom backup locations
Zone
location
Custom backup locations
Transaction Log Retention Days
transactionLogRetentionDays
Log retention period
Retained Backups
retainedBackups
Logs and disk usage
Retention Unit
retentionUnit
Logs and disk usage
IP Configuration
Authorized Network Key
authorizedNetworks[]
Authorize with authorized networks
Authorized Network Value
authorizedNetworks[]
Authorize with authorized networks
IPv4 Enabled
ipv4Enabled
Configure Public IP
Private Network
privateNetwork
Configure Private IP
SSL Mode
sslMode
SSL mode
Allocated IP Range
allocatedIpRange
Allocated IP address ranges for services
Enable Private Path for Google Cloud Services
Private path for Google Cloud services
Create an instance that supports private services access and Private Service Connect
PSC Enabled
pscEnabled
Private Service Connect overview
PSC Allowed Consumer Projects
allowedConsumerProjects
Create an instance that supports private services access and Private Service Connect
Maintenance Version
maintenanceVersion
Self-service maintenance
User Host
The host for the default user.
host
Deletion protection
If selected, the Cloud SQL instance cannot be deleted.
Prevent deletion of an instance
User Deletion Policy
To allow the user to be abandoned rather than deleted, enter ABANDON .
MySQL users cannot be deleted if they have been granted SQL roles.
Data Cache Enabled
Data cache
Data cache overview
Additional Databases
Name
name
Create and manage databases
Collation
collation
Create and manage databases
Additional Users
Name
name
About MySQL users and roles
Password
Enter a password, or select Random Password to generate a password.
About MySQL users and roles
Type
SqlUserType
About MySQL users and roles
Host
host
About MySQL users and roles
IAM Users
ID
The IAM user's ID.
IAM authentication
Email
The IAM user's email.
Add an individual IAM user or service account to a Cloud SQL instance
Type
type
Add an individual IAM user or service account to a Cloud SQL instance
Random Instance Name
Add a random suffix to the end of the instance name.
random_instance_name
Replica Database Version
The read replica database version to use. Only use during a database update.
SqlDatabaseVersion
Master Instance Name
masterInstanceName
Create read replicas
Instance Type
instanceType
SqlInstanceType
Secondary Zone
The preferred zone for the replica instance.
secondaryZone
Follow GAE Application
The App Engine application to follow. Must be in the same region as the Cloud SQL instance.
followGaeApplication
Activation Policy
activationPolicy
Activation Policy
Deletion Protection Enabled
deletionProtectionEnabled
Prevent deletion of an instance
Read Replica Deletion Protection Enabled
To block Terraform from deleting replica SQL Instances, select the checkbox.
Considering deletion protection for read replicas
Maintenance Window
Maintenance Window Day
day
About maintenance on Cloud SQL instances
Maintenance Window Hour
hour
About maintenance on Cloud SQL instances
Maintenance Window Update Track
updateTrack
About maintenance on Cloud SQL instances
Database flags
Name
databaseFlags
Configure database flags
Value
databaseFlags
Configure database flags
User Labels
Key
Key label for the Cloud SQL instance.
userLabels
Value
Value label for the Cloud SQL instance.
userLabels
Deny Maintenance Period
End Date
endDate
Configure a deny maintenance period
Start Date
startDate
Configure a deny maintenance period
Time
time
Configure a deny maintenance period
Insights Config
Query Plans Per Minute
queryPlansPerMinute
Use query insights to improve query performance
Query String Length
queryStringLength
Use query insights to improve query performance
Record Application Tags
recordApplicationTags
Enable query insights
Record Client Address
recordClientAddress
Enable query insights
Password Validation Policy Config
Enable Password Policy
enablePasswordPolicy
Set password policy
Min Length
minLength
Set password policy
Complexity
complexity
Set password policy
Disallow Username Substring
disallowUsernameSubstring
Set password policy
Reuse Interval
reuseInterval
Set password policy
Read Replicas
Name
read_replicas
Read replicas
Name Override
A string to override the default read replica name.
read_replicas
Read Replica Name Suffix
The optional suffix to add to the read instance name.
Read replicas
DB Charset
charset
Create a database on the Cloud SQL instance
DB Collation
collation
Create a database on the Cloud SQL instance
Create Timeout
The optional timeout that is applied to limit long database creates.
create_timeout
Update Timeout
The optional timeout that is applied to limit long database updates.
update_timeout
Delete Timeout
The optional timeout that is applied to limit long database deletes.
delete_timeout
Encryption Key Name
encryption_key_name
About client-side encryption
Read Replica Deletion Protection
If selected, blocks Terraform from deleting replica SQL Instances.
deletion_protection
Enable Random Password Special
If selected, enables special characters in generated random passwords.
enable_random_password_special
Connector Enforcement
connectorEnforcement
Cloud SQL Language Connectors overview
Enable Google ML Integration
enable_google_ml_integration
Build generative AI applications using Cloud SQL
Database Integration Roles
The roles required by the default database instance service account for integration with Google Cloud services.
Before you begin
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
