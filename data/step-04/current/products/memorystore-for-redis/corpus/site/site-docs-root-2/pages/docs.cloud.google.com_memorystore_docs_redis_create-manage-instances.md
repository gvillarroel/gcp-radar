---
title: "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances
  title: "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
Create and manage Redis instances
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are looking for the Memorystore for Redis Cluster documentation,
see Create instances .
This page describes how to use the Google Cloud console and the Google Cloud CLI to
create and manage Memorystore for Redis instances .
For a list of the permissions you need to create and manage Redis instances,
see Access control and permissions .
Create a Redis instance on a VPC network
To create a new instance:
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click Create Instance .
On the Create a Redis instance page, select your desired
configurations for your new instance.
Give your instance an Instance ID and, if desired, a Display
name . The Instance ID must use only lowercase letters, numbers
and hyphens. It must also start with a letter and be unique in its
region.
For example: my-instance-1 .
Choose Basic or Standard tier. For more information about tiers, see Redis Tier Capabilities .
Choose a Region and a Zone for your instance.
Select Redis Version 7.0 (recommended) .
Under Capacity , enter a value between 1 and 300
GBs.
If you want to enable Redis AUTH
select Enable AUTH .
If you want to enable in-transit encryption
select Enable in-transit encryption .
Under Authorized network , select the default network, or one of
your available VPC networks.
Optional. To set up private services access connection click the Advanced network options expander.
If you see the Private service connection required panel , use the panel to establish a private services access connection.
Note: We recommend that you follow this step so that your instance
uses the private services access connection mode.
To add Redis configurations, click the Add Configuration button,
choose a configuration from the Configuration dropdown and enter
your desired value. For more information about available
configurations, see Configuring Redis Instances .
Click the Create button.
gcloud
Enter the following command, replacing VARIABLES with appropriate values:
gcloud redis instances create INSTANCE_ID --size= SIZE --region= REGION_ID
Where:
INSTANCE_ID is the ID assigned to the instance.
SIZE is the size of the instance, in gibibytes (GiB).
REGION_ID is the region ID.
For example:
gcloud redis instances create myinstance --size=5 --region=us-central1
Instance creation requirements
Instance IDs must begin with a lowercase letter and may only include
lowercase letters, hyphens, and numbers, with no spaces.
Optional flags
Redis version
Important: You can also upgrade
an existing Redis instance to a more recent OSS Redis version.
To choose one of the available OSS Redis versions
for Memorystore for Redis, use the --redis-version flag with one of the
following values:
redis_7_2
redis_7_0 (Default)
redis_6_X
redis_5_0
redis_4_0
redis_3_2
For example:
gcloud redis instances create myinstance --size=5 --region=us-central1 \
--zone=us-central1-a --redis-version=redis_6_X
Networking
You can create Redis instances using one of two connection modes :
--connect-mode=PRIVATE_SERVICE_ACCESS or --connect-mode=DIRECT_PEERING .
We recommend that you use the PRIVATE_SERVICE_ACCESS connection mode.
For more details, see Networking .
For instructions on using the --reserved-ip-range flag to specify a IP
address range, see Creating a Redis instance with a specific IP address range .
Redis AUTH
To enable AUTH ,
use the following flag:
--enable-auth
In-transit encryption
To enable in-transit encryption ,
use the following flag:
--transit-encryption-mode=SERVER_AUTHENTICATION
Standard tier
To create a Standard Tier instance , add --tier=STANDARD
to the create command. The following command creates a Standard Tier
instance:
gcloud redis instances create INSTANCE_ID --size= SIZE --zone= ZONE --alternative-zone= ALTERNATIVE_ZONE --tier= STANDARD
For example:
gcloud redis instances create myinstance --size=5 --region=us-central1 --tier=standard
For more information about using gcloud with Memorystore for Redis, see the Google Cloud CLI reference page .
Now your instance is created.
Create a Redis instance on a Shared VPC network from a service project
This section explains how to create a Redis instance in a service project using
the Shared VPC network from the host project. This allows you to connect to your
Redis instance from resources in different projects connected to the same Shared
VPC network. For more details, see Shared VPC overview .
Console
Verify or establish
a private services access connection for the network in the host project
that you use to create your Redis instance.
Make sure the Service Networking API is enabled for both the host project and the service project.
Follow the steps from Creating a Redis instance on a VPC network ,
but make the following modifications:
Complete the optional step for setting up a private services
access connection.
To select the Shared VPC network from the host project, use the
Authorized VPC Network menu. This menu appears next to Shared VPC Networks .
Note: If you set up a private services access connection , but the No existing IP ranges available status appears when you set an IP range name, then add the compute.globalAddresses.list permission to your account .
gcloud
Important: You must Establish a private services access connection
on the host project network before you can create a Redis instance with the
--connect-mode=private-service-access flag listed below. Otherwise, the
create operation fails. For more details, see Networking .
Make sure the Service Networking API is enabled for both the host project and the service project.
Create a Redis instance in a service project using the Shared VPC from the
host project:
gcloud redis instances create INSTANCE_ID --size= SIZE --region= REGION_ID --project= SERVICE_PROJECT_ID \
--network=projects/ HOST_PROJECT_ID /global/networks/ HOST_NETWORK_NAME \
--connect-mode=private-service-access
Where:
INSTANCE_ID is the ID assigned to the instance.
SIZE is the size of the instance, in gibibytes (GiB).
REGION_ID is the region ID.
SERVICE_PROJECT_ID is the project ID for your service project.
HOST_PROJECT_ID is the project ID for your host project.
HOST_NETWORK_NAME is the name of your host project network.
For example:
gcloud redis instances create myinstance --size=5 --region=us-central1 --project=my-service-project \
--network=projects/my-host-project/global/networks/my-host-shared-vpc \
--connect-mode=private-service-access
Create a Redis instance that uses a centralized IP address range
Centralized IP address range management is provided by using private services
access . Private services
access designates one IP address range that is used by multiple
Google Cloud services. Using private services access removes the need to
manage a different IP address range for each service.
Console
Verify or establish
a private service access connection for the network you use to create
the Redis instance.
Follow the steps from Creating a Redis instance on a VPC network ,
but make sure to complete the optional section on establishing a private
services access connection.
gcloud
Verify or establish
a private service access connection for the network you use to create
the Redis instance.
Create a Redis instance using the network on which you established a
private services access connection:
gcloud redis instances create INSTANCE_ID --size= SIZE --region= REGION_ID --project= PROJECT_ID \
--network=projects/ PROJECT_ID /global/networks/ NETWORK_NAME \
--connect-mode=private-service-access
Where:
INSTANCE_ID is the ID assigned to the instance.
SIZE is the size of the instance, in gibibytes (GiB).
REGION_ID is the region ID.
PROJECT_ID is the project ID.
NETWORK_NAME is the name of the network with which to create
the Redis instance.
For example:
gcloud redis instances create myinstance --size=5 --region=us-central1 --project=my-project \
--network=projects/my-project/global/networks/my-network \
--connect-mode=private-service-access
Create a Redis instance with a specific IP address range
The following instructions explain how to create a Redis instance from within an
IP address range of your choosing.
Custom ranges with direct peering
If your project uses the DIRECT_PEERING connection mode, use the following
command to designate a specific IP address range when creating an instance:
gcloud redis instances create INSTANCE_ID --region= REGION --size= SIZE --connect-mode=DIRECT_PEERING --network= VPC_NETWORK_NAME --reserved-ip-range= RESERVED_RANGE
Where:
VPC_NETWORK_NAME is the name of the network used to create the instance.
RESERVED_RANGE is your desired custom range. For example, 10.0.0.0/29 .
The minimum required block size is /29 for instances without read replicas
and /28 for instances with read replicas. You can't use this flag to
designate multiple ranges with this connection mode.
For example:
gcloud redis instances create myinstance --region=us-central1 --size=1 --connect-mode=DIRECT_PEERING --network=default --reserved-ip-range=10.0.0.0/24
Custom ranges with private services access
If you only have one IP address range allocated for your private services access connection ,
that range is used by default for Memorystore instance creation.
If you have multiple address ranges allocated
for private services access, you can select which one to use with the following
gcloud command:
gcloud redis instances create INSTANCE_ID --region= REGION --size= SIZE --connect-mode=PRIVATE_SERVICE_ACCESS --network= VPC_NETWORK_NAME --reserved-ip-range= RESERVED_RANGE_NAME
Where:
VPC_NETWORK_NAME is the name of network used to create the instance.
RESERVED_RANGE_NAME is the name of the allocated IP address
range(s). You can use this flag to specify the names of multiple range
allocations with this connection mode. To do so, provide the names separated
by a comma.
For example:
gcloud redis instances create myinstance --region=us-central1 --size=1 --connect-mode=PRIVATE_SERVICE_ACCESS --network=default --reserved-ip-range=my-reserved-range-1,my-reserved-range-2
Create a Redis instance with read replicas
For instructions on how to create a Redis instance with read replicas, see Creating a Redis instance with read replicas .
Create a Redis instance that uses customer managed encryption keys
For instructions on how to create a Redis instance that uses customer managed
encryption keys (CMEK), see Creating a Memorystore for Redis instance that uses CMEK .
List instances
You can list Memorystore for Redis instances by using either the
Google Cloud console or the gcloud CLI .
Console
In the Google Cloud console, go to the Memorystore for Redis
page.
Memorystore for Redis
The Memorystore for Redis page displays a list of your instances.
gcloud
To list instances, use the gcloud redis instances list command:
gcloud redis instances list \
--region= REGION_ID
Replace REGION_ID with the region where the instances are located.
For example:
gcloud redis instances list \
--region=us-central1
View instance information
Viewing high-level information about Memorystore for Redis instances is
essential to obtain a comprehensive snapshot of the instance's state,
configuration, and connectivity.
The following are sample use cases for viewing summary information about
Memorystore for Redis instances:
Retrieve connection details : obtain the private IP address (host) and port that you need to connect your applications or
Compute Engine VMs to the instance.
Verify the health and status : confirm if an instance is available, being
updated or repaired, or undergoing maintenance. As a result, you can verify that
the instance is fully operational or determine why a connection might fail.
Validate high availability and failover : reveal which zones host the
instance's primary and replica nodes. After a manual or automatic failover , you can confirm that Memorystore for Redis switches the
instance to the alternate zone.
Check the configuration and version : verify the version of the instance.
View configuration parameters that a user applies to an instance. For example,
you can obtain the value that a user sets for the maxmemory-policy parameter.
Check data resiliency settings : obtain information about
Redis Database (RDB) snapshots .
Check the audit security settings : confirm whether security features like
AUTH or in-transit encryption are enabled. Retrieve the service account identity
that's used for data import and export operations.
You can view summary information about a Memorystore for Redis instance by
using either the Google Cloud console or the gcloud CLI .
Console
In the Google Cloud console, go to the Memorystore for Redis
page.
Memorystore for Redis
Click the ID of an instance about which you want to view summary
information.
gcloud
To view summary information about an instance, use the
gcloud redis instances describe
command:
gcloud redis instances describe INSTANCE_ID \
--region= REGION_ID
Make the following replacements:
INSTANCE_ID : the ID of the instance about which you want to view
summary information
REGION_ID : the region where the instance is located
For example:
gcloud redis instances describe my-instance \
--region=us-central1
Edit instances
To edit an instance:
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the Instance ID of the instance you'd like to edit.
Click the Edit button
From the Edit Redis instance page you can change an instance's:
Display name
Capacity
Configurations
Click the Save button.
While your updates are being made, a spinning circle appears next to your
instance on the Memorystore for Redis home page. When the updates are
finished, the circle becomes a green checkmark.
Gcloud
You can update the following properties after creating an instance:
Display name
Redis configuration
Labels
Size (For more information on scaling, see Scaling Instances .)
For example, enter the following command to update the display name of an instance, replacing VARIABLES with appropriate values:
gcloud redis instances update INSTANCE_ID --region= REGION_ID --display-name= NEW_DISPLAY_NAME
For more details on how to set configuration parameters, see Configuring Redis Instances .
Delete instances
To delete an instance:
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
To delete an instance, click its Instance ID.
Click the Delete button.
To confirm deletion, enter the instance's ID.
Click delete again.
Gcloud
To delete an instance, enter the following command, replacing VARIABLES with appropriate values:
gcloud redis instances delete INSTANCE_ID --region= REGION_ID
After the instance is deleted, it's removed from the list of instances on the Memorystore homepage.
What's next
Learn how to connect to a Redis instance .
Learn how to monitor Redis instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
