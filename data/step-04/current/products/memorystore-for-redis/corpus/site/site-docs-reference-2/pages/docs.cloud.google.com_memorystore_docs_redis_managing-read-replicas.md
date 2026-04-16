---
title: "Manage read replicas \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/managing-read-replicas
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/release-notes
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/managing-read-replicas
  title: "Manage read replicas \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
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
Manage read replicas
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for enabling and managing read replicas .
Create a Redis instance with read replicas
Console
Note: Once you create and instance with read replicas, read replicas can't be
disabled for that instance.
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click Create Instance .
Follow the instructions at Create a Redis instance on a VPC network ,
but return to these instructions when selecting Tier .
Choose Standard tier.
Under the Configure read replicas dropdown, select your desired number
of read replicas.
Return to the Create a Redis instance on a VPC network
instructions for additional guidance on other Memorystore
configurations, or click the Create button.
gcloud
Note: Once you create and instance with read replicas, read replicas can't be
disabled for that instance.
Enter the following command, replacing variables with appropriate
values:
gcloud redis instances create instance-id --size= size --region= region-id --replica-count= count --read-replicas-mode=read-replicas-enabled --tier=standard
Where:
count is a value from 1 to 5. This sets the number of read
replicas.
Enable read replicas on existing Redis instances
Console
Important:
Enabling read replicas
on an existing Redis instance is an exclusive operation, meaning you cannot
perform other update operation
instance modifications as a part of the same operation that enables read
replicas.
After enabling read replicas, scale the node count
to the number of read replicas that you want.
Before you enable read replicas on an existing Memorystore for Redis
instance, we strongly recommend that you reduce the write traffic to the
primary node. This way, the primary node can synchronize data to the
replicas fully. If you don't reduce the write traffic, then you might not
be able to enable the read replicas.
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the ID of the instance.
Under the Configuration section, next to Read Replicas ,
click ENABLE .
(Optional) Specify a custom IP range
If your instance uses the direct peering connection mode ,
you can enter a specific CIDR range with a block size of at least /28 ,
as long as it doesn't overlap with any other existing ranges.
For example, you could enter 10.100.0.0/28 .
If your instance uses the private services access connection mode ,
you can choose an existing allocated range of size /28 from the
dropdown menu. For instructions on allocating an IP address range
viewable from the dropdown menu, see
Creating an IP allocation .
Click Enable Read Replicas .
gcloud
Important: Enabling read replicas
on an existing Redis instance is an exclusive operation, meaning you cannot
perform other update operation
instance modifications as a part of the same operation that enables read
replicas.
After enabling read replicas, scale the node count
to the number of read replicas that you want.
Before you enable read replicas on an existing Memorystore for Redis
instance, we strongly recommend that you reduce the write traffic to the
primary node. This way, the primary node can synchronize data to the
replicas fully. If you don't reduce the write traffic, then you might not
be able to enable the read replicas.
To enable read replicas for your instance, enter the following command,
replacing variables with appropriate values.
gcloud redis instances update INSTANCE_ID --read-replicas-mode=READ_REPLICAS_ENABLED --secondary-ip-range= SECONDARY_RANGE
Where:
INSTANCE_ID is the ID of the instance for which you're enabling
read replicas.
SECONDARY_RANGE is one of the following options:
auto . auto is supported for both networking connection modes.
If your instance uses the direct peering connection mode
you must provide a valid CIDR IP address range
of size /28 . For example, --secondary-ip-range=10.100.0.0/28 .
If your instance uses the private services access connection mode
you must provide the name of an allocated range
of size /28 . For example, --secondary-ip-range=my-secondary-range-memorystore .
Scale read replica enabled instances
Add or remove replica nodes from your Redis instance
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the Instance ID of the instance to which you want to add/remove
replica nodes.
Click Edit .
Under Configure read replicas , enter your desired number of replicas.
Click Save .
gcloud
Enter the following command, replacing variables with appropriate
values:
gcloud redis instances update instance-id --region= region-id --replica-count= count
Where:
count is a value from 1 to 5. This sets the number of read
replicas.
Scale the size of Redis nodes
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the Instance ID of the instance you want to resize.
Click Edit .
Under Capacity , enter a new size in the field to update the
instance's capacity.
Click Save .
gcloud
Enter the following command, replacing variables with appropriate
values:
gcloud redis instances update instance-id --region= region-id --size= size
Where:
size is the size of each Redis node in your instance, including
the primary node. For example, if you have a read replica enabled instance
with six nodes (including the primary node) with --size=10 , your total
instance size is 60 GiB.
Connect to your instance using the read endpoint
For instructions on using the read endpoint to connect to your instance, see
Connect to a Redis instance using the read endpoint .
View read replica information for your instance
To find information about read replicas for your instance, run the following
command replacing variables with appropriate values:
gcloud redis instances describe instance-id --region= region-id
In the metadata output from the previous command:
readEndpoint: shows the read endpoint IP address.
readEndpointPort shows the read endpoint port number.
readReplicasMode shows if read replicas have been enabled.
readReplicaCount shows the number of replicas the instance has.
nodes: displays each replica node ID, and the region where each replica node
is located.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
