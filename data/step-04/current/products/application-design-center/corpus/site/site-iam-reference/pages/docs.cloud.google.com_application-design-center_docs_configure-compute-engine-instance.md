---
title: "Configure a Compute Engine instance template \_|\_ Application Design Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance
  title: "Configure a Compute Engine instance template \_|\_ Application Design Center\
    \ \_|\_ Google Cloud Documentation"
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
Configure a Compute Engine instance template
Stay organized with collections
Save and categorize content based on your preferences.
A Compute Engine instance template lets you describe a VM instance. You can
then create groups of identical instances based on the template. For more
information, see the following:
Compute Engine overview
Instance templates
This document describes the connections and parameters you can configure when
using App Design Center to create a Compute Engine instance
template. The configuration parameters are based on the instance_template
Terraform module.
Component connections
The following table includes the components that you can connect to a
Compute Engine instance template, and the resulting updates to your
application and its generated Terraform code.
Connected component
Application updates
Background information
Service Account
The Compute Engine instance template uses the connected service account instead of creating a new service account. The connected service account is used for authentication and authorization to other Google Cloud services.
The service account email and IAM information are added to the Compute Engine instance template.
Create a VM that uses a user-managed service account
AlloyDB for PostgreSQL
The Compute Engine instances can connect to the AlloyDB for PostgreSQL instance.
The AlloyDB for PostgreSQL resource metadata information is added to the instance template.
The roles/alloydb.admin role is added to the Compute Engine instance template service account.
Connect from Compute Engine
BigQuery
The Compute Engine instances can read and write data to the BigQuery dataset.
The BigQuery resource metadata is added to the Compute Engine instance template.
The roles/bigquery.dataEditor role is added to Compute Engine instance template service account.
BigQuery overview
Bigtable
The Compute Engine instances can access the Bigtable instance.
The Bigtable resource metadata information is added to the instance template.
The roles/bigtable.admin role is added to the Compute Engine instance template service account.
Bigtable overview
Cloud SQL (MySQL)
The Compute Engine instances can connect and read and write data to the Cloud SQL (MySQL) instance.
The Cloud SQL connection metadata is added to the Compute Engine instance template.
The roles/cloudsql.instanceUser and roles/cloudsql.client roles are added to the Compute Engine instance template service account.
The Compute Engine service account is added as an IAM user to the Cloud SQL instance.
Connect from Compute Engine
Cloud SQL (PostgreSQL)
The Compute Engine instances can connect and read and write data to the Cloud SQL (PostgreSQL) instance.
The Cloud SQL connection metadata is added to the Compute Engine instance template.
The roles/cloudsql.instanceUser and roles/cloudsql.client roles are added to the Compute Engine instance template service account.
The Compute Engine service account IAM information is added to the Cloud SQL instance.
Connect from Compute Engine
Cloud Storage
The Compute Engine instances can control bucket objects, including listing, creating, viewing, and deleting objects.
The roles/storage.objectAdmin role is assigned to the Compute Engine instance template service account.
Set and manage IAM policies on buckets
Memorystore
The Compute Engine instances can manage and cache data in the Memorystore instance.
The Pub/Sub topic ID is added to the Compute Engine instance template metadata.
Deployment options for Redis on Google Cloud
Pub/Sub
The Compute Engine instances can publish to and receive messages from the Pub/Sub topic.
The Pub/Sub topic ID is added to the Compute Engine instance template metadata.
Subscription overview
Regional Cloud Load Balancing frontend
The Compute Engine instances can redirect traffic to the regional Cloud Load Balancing frontend.
The Cloud Load Balancing address is added to the Compute Engine instance template.
Forwarding rules overview
Spanner
The Compute Engine instances can read and write data in the Spanner instance.
The roles/spanner.databaseAdmin role is added to the Compute Engine instance template service account.
The Compute Engine IAM information is added to the Spanner instance.
Using Spanner in a virtual machine instance
Vertex AI
The Compute Engine instances can interact with Vertex AI services.
The roles/aiplatform.user role is added to the Compute Engine instance template service account.
Vertex AI access control with IAM
Compute Engine (MIG)
The Compute Engine instance template is used to create instances in the managed instance group.
The instance template self link is added to the Compute Engine MIG.
Basic scenarios for creating managed instance groups (MIGs)
Required configuration parameters
If your template includes a Compute Engine instance template component, you
must configure the following parameters before you deploy.
Parameter name
Description and constraints
Background information
Project ID
The project where you want to create the Compute Engine instance template.
Configure components
Region
The region where the instance template is created.
Regional and global instance templates
Optional configuration parameters
The following parameters are optional. To display advanced parameters, in the
Configuration area, select Show advanced fields .
Feature
Parameter name
Description and constraint information
Background information
Name Prefix
The name prefix for the instance template.
name_prefix
Machine Type
properties.machineType
Machine families resource and comparison guide
Spot
spot
Spot VMs
Description
A description for the instance template.
description
Instance Description
A description for the instances generated by the template.
properties.description
Automatic Restart
properties.scheduling.automaticRestart
Maintenance and restart behaviors
Threads Per Core
properties.advancedMachineFeatures.threadsPerCore
Set the number of threads per core
Source Image
properties.disks[].initializeParams.sourceImage
OS images
Source Image Project
Project where the source image comes from. The default project contains Rocky Linux images.
Image families
Disk Size GB
properties.disks[].initializeParams.diskSizeGb
Create a customized boot disk
Disk Type
properties.disks[].initializeParams.diskType
Choose a disk type
Network
properties.networkInterfaces[].network
Networking overview for VMs
Subnetwork
properties.networkInterfaces[].subnetwork
Networks and subnets
Create Service Account
create_service_account
Service accounts
Min CPU Platform
properties.minCPUPlatform
Specify a minimum CPU platform for VM instances
Can IP Forward
properties.canIpForward
Enable IP forwarding for instances
Tags
properties.tags
Manage tags for resources
Labels
Key
properties.labels
Organize resources using labels
Value
properties.labels
Organize resources using labels
Preemptible
properties.scheduling.preemptible
Preemptible VM instances
Maintenance Interval
The frequency of planned maintenance events.
Enable advanced maintenance control on a sole-tenant node
On Host Maintenance
properties.scheduling.onHostMaintenance
Set the host maintenance policy for a compute instance
Spot Instance Termination Action
properties.scheduling.instanceTerminationAction
Preemption process
Enable Nested Virtualization
properties.advancedMachineFeatures.enableNestedVirtualization
About nested virtualization
Resource Policies
properties.resourcePolicies[]
REST Resource: resourcePolicies
Source Image Family
properties.disks[].initializeParams.sourceImage
Image families
Disk Labels
Key
properties.disks[].initializeParams.labels
Organize resources using labels
Value
properties.disks[].initializeParams.labels
Organize resources using labels
Disk Encryption Key
properties.disks[].diskEncryptionKey
Encrypt disks with customer-supplied encryption keys
Auto Delete
properties.disks[].autoDelete
Set the auto-delete state of a Persistent Disk volume
Additional Disks
Boot
properties.disks[].boot
Create a customized boot disk
Device Name
properties.disks[].deviceName
Adding a non-boot disk to your VM
Disk Name
properties.disks[].initializeParams.diskName
Adding a non-boot disk to your VM
Interface
properties.disks[].interface
Storage interface types
Mode
properties.disks[].mode
Create a regional disk
Source
properties.disks[].source
Create a regional disk
Source Image
The source image to create this disk.
properties.disks[].initializeParams.sourceImage
Source Snapshot
The source snapshot to create this disk.
properties.disks[].initializeParams.sourceSnapshot
Disk Resource Policies
properties.disks[].initializeParams.resourcePolicies[]
REST Resource: resourcePolicy
Subnetwork Project
The ID of the project in which the subnetwork belongs. If it is not provided, the provider project is used.
subnetwork_project
Network IP
properties.networkInterfaces[].networkIP
Internal IP addresses
NIC Type
properties.networkInterfaces[].nicType
Using Google Virtual NIC
Stack Type
properties.networkInterfaces[].stackType
Stack types
Additional Networks
Network
properties.networkInterfaces[].network
Networking overview for VMs
Subnetwork
properties.networkInterfaces[].subnetwork
Networks and subnets
Queue Count
properties.networkInterfaces[].queueCount
Default queue allocation
Total Egress Bandwidth Tier
properties.networkPerformanceConfig.totalEgressBandwidthTier
Network bandwidth
Startup Script
A script that executes when the instances start.
About startup scripts
Metadata
Key
properties.metadata
About VM metadata
Value
properties.metadata
About VM metadata
Service Account
Email
email
Service accounts
Service Account Project Roles
project_roles
Manage access to service accounts
Enable Shielded VM
Select the checkbox to enable Shielded VM, if supported by the selected instance image.
About Shielded VM
Shielded Instance Config
Enable Secure Boot
properties.shieldedInstanceConfig.enableSecureBoot
Secure boot
Enable vTPM
properties.shieldedInstanceConfig.enableVtpm
Virtual Trusted Platform Module (vTPM)
Enable Integrity Monitoring
properties.shieldedInstanceConfig.enableIntegrityMonitoring
Integrity monitoring
Enable Confidential VM
properties.confidentialInstanceConfig.enableConfidentialCompute
About Confidential VM
Confidential Instance Type
properties.confidentialInstanceConfig.confidentialInstanceType
Supported configurations
Access Config
NAT IP
properties.networkInterfaces[].accessConfigs[].natIP
External IP addresses
Network Tier
properties.networkInterfaces[].accessConfigs[].networkTier
Network Service Tiers
IPv6 Access Config
Network Tier
properties.networkInterfaces[].ipv6AccessConfigs[].networkTier
Network Service Tiers
GPU
Type
properties.guestAccelerators[].acceleratorType
GPU machine types
Count
properties.guestAccelerators[].acceleratorCount
GPU machine types
Alias IP Range
IP CIDR Range
properties.networkInterfaces[].aliasIpRanges[].ipCidrRange
IP addresses
Subnetwork Range Name
properties.networkInterfaces[].aliasIpRanges[].subnetworkRangeName
Networks and subnets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
