---
title: "Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/create-instances
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/create-instances
  title: "Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
Create instances
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for creating single-zone and multi-zone
instances in Memorystore for Valkey.
Before you begin
Complete the before you begin instructions:
In the Google Cloud console, on the project selector page, select or create a Google Cloud project .
Note: If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.
Go to project selector
Make sure that billing is enabled for your project. Learn how to check if billing is enabled on a project .
Install and initialize the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have the latest version by running gcloud components update . You need at least gcloud CLI version 489.0.0 to access the Memorystore for Valkey gcloud CLI commands.
Enable the Memorystore for Valkey API
Memorystore for Valkey
Enable the Network Connectivity API
Network Connectivity API
Enable the Service Consumer Management API
Service Consumer Management API
Other prerequisites
You must have one of these IAM roles in the Google Cloud project you're using:
roles/memorystore.admin (the Memorystore Admin predefined IAM role)
roles/owner (the Owner basic IAM role)
roles/editor (the Editor basic IAM role)
Set up networking
Read the Networking page to determine
if you need to set up a service connection policy.
If a service connection policy hasn't been created for the network with which
you will create the Valkey instance, follow the Networking
guidance to create it.
Create a multi-zone instance
This section provides instructions on creating a multi-zone instance .
Important : Before you follow the steps in this
procedure, complete the steps in the Before you
begin and Set up networking sections.
If you create an instance with replicas, and a single zone of the region
where you want the instance to be created is unavailable, then Memorystore for Valkey
creates the instance in the available zones of the region. This zonal
allocation is temporary. After the unavailable zone becomes available,
Memorystore for Valkey redistributes the nodes of the instance so that
they're evenly distributed among the zones.
If you create an instance without replicas and a single zone is
unavailable, then Memorystore for Valkey fails to create the instance.
Console
In the Google Cloud console, go to the Memorystore for Valkey
page.
Memorystore for Valkey
Click Create instance .
In the Name your instance section, enter an ID for the instance. The
instance ID must use only lowercase letters, numbers, and hyphens. It must
also start with a letter and be unique in its region.
From the Region menu, select a region for your instance.
In the Zonal availability section, select the Multi-zone option
because you want to create a multi-zone
instance.
In the Node Type section, select one of the following node types :
Shared-Core ( shared-core-nano )
Small ( standard-small )
Medium ( highmem-medium )
X-Large ( highmem-xlarge )
In the Cluster Mode section, specify whether you want a Cluster Mode
Enabled or Cluster Mode Disabled instance. For more information about these
types of instances, see Enable and disable cluster mode .
Note: After you create a Cluster Mode Enabled or Cluster Mode Disabled
instance, you can't change the instance to the other mode. We
recommend that you select Enabled because this mode has better
horizontal scaling characteristics.
In the Instance size section, enter the number of shards for your
instance. The shard count determines the total memory capacity for
storing instance data. For more information about instance specifications, see
Instance and node specification .
If you want to create an instance with replicas, then in the Replicas
section, select the number of replicas (per shard). You can select 0-5
replicas. The default value is 1 replica.
In the Set up connection section, select the network that your
applications can use to connect to this instance. For more information about
private networking for Memorystore for Valkey, see Networking .
If you want to increase the security of your instance, then in the
Security section, enable IAM authentication by selecting the Enable IAM AUTH checkbox.
Note: If you select this checkbox, then Memorystore for Valkey selects
the Enable In-Transit Encryption (TLS) checkbox automatically and
the Certificate authority management section is displayed.
Memorystore for Valkey encrypts
your credentials so that they're confidential when they're transmitted
from the instance to the application.
In the Certificate authority management section, select the
Per-instance CA , Customer-managed CA , or Shared CA option.
These options represent the
Certificate Authority (CA) modes for your instance. The
CA mode determines which CA hierarchy is used to issue the digital
certificates for the instance.
If you select the Customer-managed CA option, then you must add a CA
pool. A CA pool is a collection of multiple CAs with a common certificate
issuance policy and Identity and Access Management (IAM) policy. A CA pool makes CA
rotation management easier and lets you achieve higher total effective
queries per second (QPS).
To add a CA pool, do one of the following:
To add a CA pool from another Google Cloud project, select the
Add CA from another project checkbox, and then enter the resource
ID for
the pool in the text field.
To add a CA pool that's located in the same Google Cloud project as the
project that you're using to create the instance, select the pool from
the CA pool menu.
In the Encryption section, select one of the following options:
Google-managed encryption key : you want Google to use a key to
encrypt the data in the instance. This is Google default encryption .
Cloud KMS key : you want to manage the encryption of your
data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Valkey.
If you select this option, then do the following:
From the Key management type menu, select Cloud KMS .
From the Select a Cloud KMS key menu, select a CMEK.
In the Data persistence strategy section, specify how you want Memorystore for Valkey
to persist the data in your instance. Acceptable values are No persistence ,
Append Only File (AOF) persistence ,
and Memory Snapshot persistence .
If you want to enable automated backups for your instance, then do the
following:
Select the Automated daily backups checkbox.
In the Days to retain backups field, enter the number of days
that you want Memorystore for Valkey to keep backups before they're
deleted automatically. You can specify from 1 to 365 days. The
default value is 35 days.
From the Time window menu, select a time for the daily backup.
In the Maintenance section, select one of the following options:
Default : Memorystore for Valkey updates your instance routinely to
ensure that the service is reliable, performant, secure, and up-to-date.
Custom : you want to customize the maintenance schedule for your
instance to align with your application's needs and to minimize
disruptions. If you select this option, then specify the day that you want
maintenance to occur and the hour when you want the maintenance window to
start.
In the Choose version section, select your Valkey version . Available versions are 7.2, 8.0, and 9.0. The default
version is version 9.0.
Important: If you select 9.0 as the version of the instance, then you
can't downgrade the instance to an earlier version.
Click Create instance .
gcloud
To create a Memorystore for Valkey instance, run the create command:
gcloud memorystore instances create INSTANCE \
--location= REGION_ID \
--endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT_ID /global/networks/ NETWORK_ID ", "projectId": " PROJECT_ID "}}]}]' \
--replica-count= REPLICA_COUNT \
--node-type= NODE_TYPE \
--engine-version= ENGINE_VERSION \
--shard-count= SHARD_COUNT \
--mode= MODE
Replace the following:
INSTANCE is the ID of the Memorystore for Valkey instance
you're creating. Your instance ID must be 1 to 63 characters and use only
lowercase letters, numbers, or hyphens. It must start with a lowercase
letter and end with a lowercase letter or number.
REGION_ID is the region where you want the instance placed.
Note: You can only create instances in the supported regions
for Memorystore for Valkey.
PROJECT_ID is the ID of the project where you want to create
your instance.
NETWORK_ID is the ID of the network you want to use to create
your instance.
REPLICA_COUNT is the number of replicas (per shard).
Accepted values are 0 - 5 .
NODE_TYPE is your chosen node type. Accepted values are:
shared-core-nano
standard-small
highmem-medium
highmem-xlarge
Caution : We recommend that you use the
shared-core-nano node type for development or testing purposes
only because this node type has no SLA. If you run Memorystore for Valkey in a
production environment, then we recommend using the standard-small , highmem-medium , or highmem-xlarge node types. For more
information about these node types, see Choose a node type .
ENGINE_VERSION is the version of your Memorystore for Valkey
instance. Accepted values for this parameter are VALKEY_7_2 , VALKEY_8_0 ,
and VALKEY_9_0 . If you don't specify a value, then VALKEY_9_0 is the
default value.
Important: If you specify VALKEY_9_0 as the version of the
instance, then you can't downgrade the instance to an earlier version.
SHARD_COUNT determines the number of shards in your instance. The
shard count determines the total memory capacity for storing instance data.
Cluster Mode Disabled instances only support one shard. For more information,
see Instance and node specification .
MODE determines whether you're creating a Cluster Mode Enabled
or Cluster Mode Disabled instance. If this field is omitted, then the instance defaults
to Cluster Mode Enabled. For more information, see
Enable and disable Cluster Mode .
Note: After you create a Cluster Mode Enabled or Cluster Mode Disabled
instance, you can't change the instance to the other mode. We
recommend that you create a Cluster Mode Enabled instance because this
type of instance has better scaling characteristics.
For example:
Cluster Mode Enabled example
gcloud memorystore instances create my-instance \
--location=us-central1 \
--endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/my-project/global/networks/default", "projectId": "my-project"}}]}]' \
--replica-count=2 \
--node-type=highmem-medium \
--shard-count=8 \
--mode=cluster
Cluster Mode Disabled example
gcloud memorystore instances create my-instance \
--location=us-central1 \
--endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/my-project/global/networks/default", "projectId": "my-project"}}]}]' \
--shard-count=1 \
--replica-count=2 \
--node-type=highmem-medium \
--mode=cluster-disabled
By default, in-transit encryption
is disabled and the authorized network is default .
Create a single-zone instance
This section provides instructions on creating a single-zone instance .
Important: Before following these steps, complete the steps in the
Before you begin
and Set up networking
sections.
Console
In the Google Cloud console, go to the Memorystore for Valkey
page.
Memorystore for Valkey
Click Create instance .
In the Name your instance section, enter an ID for the instance. The
instance ID must use only lowercase letters, numbers, and hyphens. It must
also start with a letter and be unique in its region.
From the Region menu, select a region for your instance.
In the Zonal availability section, do the following:
Select the Single zone option.
From the Zone menu, select the zone where you want
Memorystore for Valkey to create the instance.
In the Node Type section, select one of the following node types :
Shared-Core ( shared-core-nano )
Small ( standard-small )
Medium ( highmem-medium )
X-Large ( highmem-xlarge )
In the Cluster Mode section, specify whether you want a Cluster Mode
Enabled or Cluster Mode Disabled instance. For more information about these
types of instances, see Enable and disable cluster mode .
Note: After you create a Cluster Mode Enabled or Cluster Mode Disabled
instance, you can't change the instance to the other mode. We
recommend that you select Enabled because this mode has better
horizontal scaling characteristics.
In the Instance size section, enter the number of shards for your
instance. The shard count determines the total memory capacity for
storing instance data. For more information about instance specifications, see
Instance and node specification .
If you want to create an instance with replicas, then in the Replicas
section, select the number of replicas (per shard). You can select 0-5
replicas. The default value is 1 replica.
In the Set up connection section, select the network that your
applications can use to connect to this instance. For more information about
private networking for Memorystore for Valkey, see Networking .
If you want to increase the security of your instance, then
in the Security section, enable IAM authentication by selecting the Enable IAM AUTH checkbox.
Note: If you select this checkbox, then Memorystore for Valkey selects
the Enable In-Transit Encryption (TLS) checkbox automatically and
the Certificate authority management section is displayed.
Memorystore for Valkey encrypts
your credentials so that they're confidential when they're transmitted
from the instance to the application.
In the Certificate authority management section, select
the Per-instance CA , Customer-managed CA , or Shared CA option.
These options represent the
Certificate Authority (CA) modes for your instance. The
CA mode determines which CA hierarchy is used to issue the digital
certificates for the instance.
If you select the Customer-managed CA option, then you must add a CA
pool. A CA pool is a collection of multiple CAs with a common certificate
issuance policy and Identity and Access Management (IAM) policy. A CA pool makes CA
rotation management easier and lets you achieve higher total effective
queries per second (QPS).
To add a CA pool, do one of the following:
To add a CA pool from another Google Cloud project, select the
Add CA from another project checkbox, and then enter the resource
ID
for the pool in the text field.
To add a CA pool that's located in the same Google Cloud project as the
project that you're using to create the instance, select the pool from
the CA pool menu.
In the Encryption section, select one of the following options:
Google-managed encryption key : you want Google to use a key to
encrypt the data in the instance. This is Google default encryption .
Cloud KMS key : you want to manage the encryption of your
data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Valkey.
If you select this option, then do the following:
From the Key management type menu, select Cloud KMS .
From the Select a Cloud KMS key menu, select a CMEK.
In the Data persistence strategy section, specify how you want Memorystore for Valkey
to persist the data in your instance. Acceptable values are No persistence ,
Append Only File (AOF) persistence ,
and Memory Snapshot persistence .
If you want to enable automated backups for your instance, then do the
following:
Select the Automated daily backups checkbox.
In the Days to retain backups field, enter the number of days
that you want Memorystore for Valkey to keep backups before they're
deleted automatically. You can specify from 1 to 365 days. The
default value is 35 days.
From the Time window menu, select a time for the daily backup.
In the Maintenance section, select one of the following options:
Default : Memorystore for Valkey updates your instance routinely to
ensure that the service is reliable, performant, secure, and up-to-date.
Custom : you want to customize the maintenance schedule for your
instance to align with your application's needs and to minimize
disruptions. If you select this option, then specify the day that you want
maintenance to occur and the hour when you want the maintenance window to
start.
In the Choose version section, select your Valkey version . Available versions are 7.2, 8.0, and 9.0. The default
version is version 9.0.
Important: If you select 9.0 as the version of the instance, then you
can't downgrade the instance to an earlier version.
Click Create instance .
gcloud
To create a single-zone instance, run the create command:
gcloud memorystore instances create INSTANCE \
--location= REGION_ID \
--endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT_ID /global/networks/ NETWORK_ID ", "projectId": " PROJECT_ID "}}]}]' \
--replica-count= REPLICA_COUNT \
--node-type= NODE_TYPE \
--engine-version= ENGINE_VERSION \
--shard-count= SHARD_COUNT \
--zone-distribution-config-mode= ZONE_DISTRIBUTION_CONFIG_MODE \
--zone-distribution-config= ZONE \
--mode= MODE
Replace the following:
INSTANCE is the ID of the Memorystore for Valkey instance
you're creating. Your instance ID must be 1 to 63 characters and use only
lowercase letters, numbers, or hyphens. It must start with a lowercase
letter and end with a lowercase letter or number.
REGION_ID is the region where you want the instance placed.
PROJECT_ID is the ID of the project where you want to create
your instance.
NETWORK_ID is the ID of the network you want to use to create
your instance.
REPLICA_COUNT is the number of replicas (per shard).
Accepted values are 0 - 5 .
NODE_TYPE is your chosen node type. Accepted values are:
shared-core-nano
standard-small
highmem-medium
highmem-xlarge
Caution : We recommend that you use the
shared-core-nano node type for development or testing purposes
only because this node type has no SLA. If you run Memorystore for Valkey in a
production environment, then we recommend using the standard-small , highmem-medium , or highmem-xlarge node types. For more
information about these node types, see Choose a node type .
ENGINE_VERSION is the version of your Memorystore for Valkey
instance. Accepted values for this parameter are VALKEY_7_2 , VALKEY_8_0 ,
and VALKEY_9_0 . If you don't specify a value, then VALKEY_9_0 is the
default value.
Important: If you specify VALKEY_9_0 as the version of the
instance, then you can't downgrade the instance to an earlier version.
SHARD_COUNT determines the number of shards in your instance.
The shard count determines the total memory capacity for storing instance
data. If the mode that you select is Cluster Mode Disabled, then you can
specify only one shard for your instance. For more information, see
Instance and node specification .
MODE determines whether you're creating a Cluster Mode Enabled
or Cluster Mode Disabled instance. If you omit this field, then the mode
defaults to Cluster Mode Enabled. For more information, see
Enable and disable Cluster Mode .
Note: After you create a Cluster Mode Enabled or Cluster Mode Disabled
instance, you can't change the instance to the other mode. We
recommend that you create a Cluster Mode Enabled instance because this
type of instance has better scaling characteristics.
ZONE_DISTRIBUTION_CONFIG_MODE is the mode that lets you choose
between provisioning a single-zone instance or a multi-zone instance. The
default is multi-zone . Accepted values are single-zone , and
multi-zone .
ZONE is the zone where you want to provision your nodes. This
flag is applicable only if the --zone-distribution-config-mode= is set
to single-zone .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
