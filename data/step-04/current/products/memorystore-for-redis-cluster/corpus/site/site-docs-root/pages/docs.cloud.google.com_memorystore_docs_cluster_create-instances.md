---
title: "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/create-instances
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/create-instances
  title: "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Guides
Send feedback
Create instances
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for creating Memorystore for Redis Cluster instances.
Before you begin
Complete the before you begin instructions:
In the Google Cloud console, on the project selector page, select or create a Google Cloud project .
Note: If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.
Go to project selector
Make sure that billing is enabled for your project. Learn how to check if billing is enabled on a project .
Install and initialize the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have the latest version by running gcloud components update . You need at least gcloud CLI version 440.0.0 to access the Memorystore for Redis Cluster gcloud CLI commands.
Enable the Memorystore for Redis API
Memorystore for Redis
Enable the Network Connectivity API
Network Connectivity API
Enable the Service Consumer Management API
Service Consumer Management API
Other prerequisites
You must have one of these IAM roles in the Google Cloud project you're using:
roles/redis.admin (the Memorystore Admin predefined IAM role)
roles/owner (the Owner basic IAM role)
roles/editor (the Editor basic IAM role)
Set up networking
Read the Networking page to determine
if you need to set up a service connection policy.
If a service connection policy hasn't been created for the network with which
you will create the Redis cluster, follow the Networking
guidance to create it.
Create an instance
Important : Before you follow the steps in this
procedure, complete the steps in the Before you
begin and Set up networking sections.
If you create a cluster with replicas, and a single zone of the region
where you want the cluster to be created is unavailable, then Memorystore for Redis Cluster
creates the cluster in the available zones of the region. This zonal
allocation is temporary. After the unavailable zone becomes available,
Memorystore for Redis Cluster redistributes the nodes of the cluster so that
they're evenly distributed among the zones.
If you create a cluster without replicas and a single zone is unavailable,
then Memorystore for Redis Cluster fails to create the cluster.
Tip: If you plan on using private networking,
then you can deploy both the private networking setup of your choice and the
Memorystore for Redis Cluster instance along with clients such as Compute Engine VMs by using Terraform.
For more information, see
Simplified Cloud Networking Configuration Solutions .
Console
In the Google Cloud console, go to the Memorystore for Redis Cluster
page.
Memorystore for Redis Cluster
Click Create cluster .
In the Name your cluster instance section, enter an ID for the
cluster. The Cluster ID must use only lowercase letters, numbers, and
hyphens. It must also start with a letter and be unique in its region.
From the Region menu, select a region for your cluster.
In the Zonal availability section, select the Multi-zone option
because you want to create a multi-zone
cluster.
In the Node Type section, select one of the following node types :
Shared-Core ( redis-shared-core-nano )
Small ( redis-standard-small )
Medium ( redis-highmem-medium )
X-Large ( redis-highmem-xlarge )
In the Cluster size section, enter the number of shards
for your cluster. The shard count determines the total memory capacity for
storing cluster data. For more information about cluster specifications, see
Cluster and node specification .
If you want to create a cluster with replicas, then in the
Replicas section, select the number of replicas (per shard). You can
select 0-5 replicas. The default value is 1 replica.
In the Set up connection section, select the network that your
applications can use to connect to this cluster. For more information about
private networking for Memorystore for Redis Cluster, see Networking overview .
If you want to increase the security of your cluster, then
in the Security section, enable IAM authentication by selecting the Enable IAM AUTH checkbox.
Note: If you select this checkbox, then Memorystore for Redis Cluster selects
the Enable In-Transit Encryption (TLS) checkbox automatically and
the Certificate authority management section is displayed.
Memorystore for Redis Cluster encrypts
your credentials so that they're confidential when they're transmitted
from the instance to the application.
In the Certificate authority management section, select the
Per-instance CA , Customer-managed CA , or Shared CA option. These
options represent the Certificate Authority (CA) modes for your cluster. The
CA mode determines which CA hierarchy is used to issue the digital
certificates for the cluster.
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
project that you're using to create the cluster, select the pool from
the CA pool menu.
In the Encryption section, select one of the following options:
Google-managed encryption key : you want Google to use a key to
encrypt the data in the cluster. This is Google default encryption .
Cloud KMS key : you want to manage the encryption of your
data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Redis Cluster.
If you select this option, then do the following:
From the Key management type menu, select Cloud KMS .
From the Select a Cloud KMS key menu, select a CMEK.
In the Data persistence strategy section, specify how you want Memorystore for Redis Cluster
to persist the data in your cluster. Acceptable values are No persistence ,
Append Only File (AOF) persistence ,
and Redis Database (RDB) persistence .
If you want to enable automated backups for your cluster, then do the
following:
Select the Automated daily backups checkbox.
In the Days to retain backups field, enter the number of days
that you want Memorystore for Redis Cluster to keep backups before they're
deleted automatically. You can specify from 1 to 365 days. The
default value is 35 days.
From the Time window menu, select a time for the daily backup.
In the Maintenance section, select one of the following options:
Default : Memorystore for Redis Cluster updates your cluster routinely to
ensure that the service is reliable, performant, secure, and up-to-date.
Custom : you want to customize the maintenance schedule for your
cluster to align with your application's needs and to minimize
disruptions. If you select this option, then specify the day that you want
maintenance to occur and the hour when you want the maintenance window to
start.
Click Create cluster .
gcloud
To create a Memorystore for Redis Cluster instance, run the create command:
gcloud redis clusters create INSTANCE_ID \
--region= REGION_ID \
--network= NETWORK \
--replica-count= REPLICA_COUNT \
--node-type= NODE_TYPE \
--shard-count= SHARD_COUNT
Replace the following:
INSTANCE_ID is the ID of the Memorystore for Redis Cluster instance
you're creating. Your instance ID must be 1 to 63 characters and use only
lowercase letters, numbers, or hyphens. It must start with a lowercase
letter and end with a lowercase letter or number.
REGION_ID is the region where you want the instance placed.
Note: You can only create instances in the supported regions for Memorystore for Redis Cluster. Not all of the regions currently supported by Memorystore for Redis
are available for Memorystore for Redis Cluster. The gcloud redis regions list commands shows supported regions for Memorystore for Redis, not Memorystore for Redis Cluster.
NETWORK is the network used to create your instance. It must use
the format: projects/NETWORK_PROJECT_ID/global/networks/NETWORK_ID . The
network ID used here must match the network ID used by the service
connection policy. Otherwise, the create operation fails.
REPLICA_COUNT is the number of replicas (per shard).
Accepted values are 0 - 5 .
NODE_TYPE is your chosen node type. Accepted values are:
redis-shared-core-nano
redis-standard-small
redis-highmem-medium
redis-highmem-xlarge
Caution : We recommend that you use the
redis-shared-core-nano node type for development or testing
purposes only because this node type has no SLA. If you run Memorystore for Redis Cluster in
a production environment, then we recommend using the
redis-standard-small , redis-highmem-medium , or
redis-highmem-xlarge node types. For more information about these
node types, see Choose a node type .
SHARD_COUNT determines the number of shards in your
instance. Shard count determines the total memory capacity for storing
cluster data. To see more details about cluster specification, see Cluster and node specification .
For example:
gcloud alpha redis clusters create my-instance \
--region=us-central1 \
--network=projects/my-project-335118/global/networks/default \
--replica-count=2 \
--node-type=redis-highmem-medium \
--shard-count=8
By default, in-transit encryption
is disabled, and the authorized network is default .
Create a single-zone instance
This section provides instructions on creating a Single-zone instance .
Important: Before following these steps, complete the steps in the
Before you begin
and Set up networking
sections.
Console
In the Google Cloud console, go to the Memorystore for Redis Cluster
page.
Memorystore for Redis Cluster
Click Create cluster .
In the Name your cluster instance section, enter an ID for the
cluster. The Cluster ID must use only lowercase letters, numbers, and
hyphens. It must also start with a letter and be unique in its region.
From the Region menu, select a region for your cluster.
In the Zonal availability section, do the following:
Select the Single zone option.
From the Zone menu, select the zone where you want
Memorystore for Redis Cluster to create the cluster.
In the Node Type section, select one of the following node types :
Shared-Core ( redis-shared-core-nano )
Small ( redis-standard-small )
Medium ( redis-highmem-medium )
X-Large ( redis-highmem-xlarge )
In the Cluster size section, enter the number of shards
for your cluster. The shard count determines the total memory capacity for
storing cluster data. For more information about cluster specifications, see
Cluster and node specification .
If you want to create a cluster with replicas, then in the
Replicas section, select the number of replicas (per shard). You can
select 0-5 replicas. The default value is 1 replica.
In the Set up connection section, select the network that your
applications can use to connect to this cluster. For more information about
private networking for Memorystore for Redis Cluster, see Networking overview .
If you want to increase the security of your cluster, then
in the Security section, enable IAM authentication by selecting the Enable IAM AUTH checkbox.
Note: If you select this checkbox, then Memorystore for Redis Cluster selects
the Enable In-Transit Encryption (TLS) checkbox automatically and
the Certificate authority management section is displayed.
Memorystore for Redis Cluster encrypts
your credentials so that they're confidential when they're transmitted
from the instance to the application.
In the Certificate authority management section, select the
Per-instance CA , Customer-managed CA , or Shared CA option. These
options represent the Certificate Authority (CA) modes for your cluster. The
CA mode determines which CA hierarchy is used to issue the digital
certificates for the cluster.
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
project that you're using to create the cluster, select the pool from
the CA pool menu.
In the Encryption section, select one of the following options:
Google-managed encryption key : you want Google to use a key to
encrypt the data in the cluster. This is Google default encryption .
Cloud KMS key : you want to manage the encryption of your
data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Redis Cluster.
If you select this option, then do the following:
From the Key management type menu, select Cloud KMS .
From the Select a Cloud KMS key menu, select a CMEK.
In the Data persistence strategy section, specify how you want Memorystore for Redis Cluster
to persist the data in your cluster. Acceptable values are No persistence ,
Append Only File (AOF) persistence ,
and Redis Database (RDB) persistence .
If you want to enable automated backups for your cluster, then do the
following:
Select the Automated daily backups checkbox.
In the Days to retain backups field, enter the number of days
that you want Memorystore for Redis Cluster to keep backups before they're
deleted automatically. You can specify from 1 to 365 days. The
default value is 35 days.
From the Time window menu, select a time for the daily backup.
In the Maintenance section, select one of the following options:
Default : Memorystore for Redis Cluster updates your cluster routinely to
ensure that the service is reliable, performant, secure, and up-to-date.
Custom : you want to customize the maintenance schedule for your
cluster to align with your application's needs and to minimize
disruptions. If you select this option, then specify the day that you want
maintenance to occur and the hour when you want the maintenance window to
start.
Click Create cluster .
gcloud
To create a single-zone instance, run the create command:
gcloud redis clusters create INSTANCE_ID \
--region= REGION_ID \
--network= NETWORK \
--replica-count= REPLICA_COUNT \
--node-type= NODE_TYPE \
--shard-count= SHARD_COUNT \
--zone-distribution-mode= ZONE_DISTRIBUTION_MODE \
--zone= ZONE
Replace the following:
INSTANCE_ID is the ID of the Memorystore for Redis Cluster instance you're creating. Your instance ID must be 1 to 63 characters and use only lowercase letters, numbers, or hyphens. It must start with a lowercase letter and end with a lowercase letter or number.
REGION_ID is the region where you want the instance placed.
NETWORK is the network used to create your instance. It must use the format: projects/NETWORK_PROJECT_ID/global/networks/NETWORK_ID . The network ID used here must match the network ID used by the service connection policy. Otherwise, the create operation fails.
REPLICA_COUNT is the number of replicas (per shard). Accepted values are 0 - 5 .
NODE_TYPE is your chosen node type. Accepted values are:
redis-shared-core-nano
redis-standard-small
redis-highmem-medium
redis-highmem-xlarge
Caution : We recommend that you use the
redis-shared-core-nano node type for development or testing
purposes only because this node type has no SLA. If you run Memorystore for Redis Cluster in
a production environment, then we recommend using the
redis-standard-small , redis-highmem-medium , or
redis-highmem-xlarge node types. For more information about these
node types, see Choose a node type .
SHARD_COUNT determines the number of shards in your instance. Shard count determines the total memory capacity for storing cluster data. For more information about cluster specification, see Cluster and node specification .
ZONE_DISTRIBUTION_MODE is the mode that lets you choose between provisioning a single-zone instance or a multi-zone instance. The default is multi-zone. Accepted values are single-zone , and multi-zone .
ZONE is the zone where you want to provision your nodes. This flag is applicable only if the --zone-distribution-mode is set to single-zone .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
