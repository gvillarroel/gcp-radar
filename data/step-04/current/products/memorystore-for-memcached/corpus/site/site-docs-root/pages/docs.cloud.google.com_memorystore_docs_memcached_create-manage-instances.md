---
title: "Create and manage Memcached instances \_|\_ Memorystore for Memcached \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/memcached/create-manage-instances
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/memcached
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/memcached/create-manage-instances
  title: "Create and manage Memcached instances \_|\_ Memorystore for Memcached \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Memorystore for Memcached is being deprecated and will be shut down on January 31, 2029. After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects. We recommend that you migrate your workloads to Memorystore for Valkey , which offers superior performance and features.
Learn more about the deprecation | Read the migration guide
Home
Documentation
Databases
Memorystore
Memorystore for Memcached
Guides
Send feedback
Create and manage Memcached instances
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use the Google Cloud console and the Google Cloud CLI to
create and manage Memorystore for Memcached instances.
Caution: Any network on which you provision a Memorystore for Memcached instance must
have a private services access
connection. Otherwise, you cannot select that network when creating a
Memorystore for Memcached instance. See Networking
for more details.
See Best practices for provisioning Memcached instances
for instance creation guidance.
For a list of the permissions you need to create and manage Memcached instances,
see Access control and permissions .
Creating Memcached instances
Important: You must establish a private services access connection for a network before you can use it to provision a
Memorystore for Memcached instance.
To create a Memcached instance:
Console
Go to the Memorystore for Memcached page in the Google Cloud console.
Memorystore for Memcached
Click the Create Instance button.
On the Create a Memcached instance page, select the configurations
for your new instance.
Enter an Instance ID using only lowercase letters, numbers, and
hyphens. Start with a letter.
For example, my-memcached-instance-1 .
Optionally, enter a Display name for your instance.
Choose a region from the Region dropdown.
Choose Automatically distribute or a preferred zone from the Zone dropdown.
Choose your number of Nodes .
Choose your Memory per node .
Choose your Cores per node .
Choose your Version .
Select your Authorized network .
Note: If you see the Private service connection required
panel, you need to establish a private services access connection .
Click Create .
gcloud
Set the default project in which to create a Memcached instance. Enter
the following command, replacing highlighted-variables with
appropriate values:
gcloud config set core/project project-id
Create a Memcached instance:
gcloud memcache instances create instance-id --node-count= number-of-nodes --node-cpu= number-of-cpus --node-memory= memory-per-node --region= region --zones= zone(s) --memcached-version= memcached-version
Where:
instance-id is the ID assigned to the instance. Your
instance ID must be 1 to 63 characters and use only lowercase
letters, numbers, or hyphens. It must start with a lowercase letter
and end with a lowercase letter or number.
number-of-nodes is your node count.
number-of-cpus is your vCPU count.
Acceptable values: 1 or 2-32 (even values only).
Each vCPU requires 0.9GB of node memory, and supports up to 8GB of
node memory.
memory-per-node is your memory for each node.
Minimum: 1 GB or (0.9GB * vCPUs per node), whichever is greater.
Maximum: 256 GB.
Note: Memory per node is constrained by the number of vCPUs that the
node has. You can provision up to 8 GB of memory for every vCPU, and
must provision at least 0.9GB for every vCPU. Therefore, to reach
the maximum memory per node of 256 GB, you must set --node-cpu=32 .
region is the region in which to create the nodes.
zone(s) are the zones in which to create the nodes.
Exclude the --zones flag to automatically distribute nodes among
zones.
memcached version is your Memcached version for
your instance. Acceptable values are 1.5 and 1.6.15 .
For example:
gcloud memcache instances create myinstance --node-count=3 --node-cpu=2 --node-memory=2GB --region=us-central1 --zones=us-central1-a,us-central1-b,us-central1-c --memcached-version=1.6.15
Creating a Memcached instance that uses a specific IP address range
Console
Follow the instructions at Creating Memcached instances until you reach the Select IP ranges (optional) section.
Use the Select IP ranges drop down menu to select an existing allocated range for your network. For
instructions on creating and listing IP range allocations for private services access, see Create an IP allocation and List allocated IP address ranges .
gcloud
Create a Memcached instance:
gcloud memcache instances create instance-id --node-count= number-of-nodes --node-cpu= number-of-cpus --node-memory= memory-per-node --region= region --zones= zone(s) --authorized-network= network --reserved-ip-range-id= range-name(s)
Replace the following:
instance-id is the ID assigned to the instance. Your
instance ID must be 1 to 63 characters and use only lowercase
letters, numbers, or hyphens. It must start with a lowercase letter
and end with a lowercase letter or number.
number-of-nodes is your node count.
number-of-cpus is your vCPU count.
Acceptable values: 1 or 2-32 (even values only).
Each vCPU requires 0.9GB of node memory, and supports up to 8GB of
node memory.
memory-per-node is your memory for each node.
Minimum: 1 GB or (0.9GB * vCPUs per node), whichever is greater.
Maximum: 256 GB.
Note: Memory per node is constrained by the number of vCPUs that the
node has. You can provision up to 8 GB of memory for every vCPU, and
must provision at least 0.9GB for every vCPU. Therefore, to reach
the maximum memory per node of 256 GB, you must set --node-cpu=32 .
region is the region in which to create the nodes.
zone(s) are the zones in which to create the nodes.
Exclude the --zones flag to automatically distribute nodes among
zones.
network is the network used to create your instance. It uses
the format: projects/NETWORK_PROJECT_ID/global/networks/NETWORK_ID .
The network ID used here must match the network ID where the allocated
IP range is located. Otherwise, the create operation fails.
range-name(s) is the name of one or more allocated private
services access ranges. For instructions on creating and listing IP
range allocations for private services access, see Create an IP allocation and List allocated IP address ranges .
For example:
gcloud memcache instances create myinstance --node-count=3 --node-cpu=2 --node-memory=2GB --region=us-central1 --zones=us-central1-a,us-central1-b,us-central1-c --authorized-network=projects/my-project-335118/global/networks/default --reserved-ip-range-id=myrange1,myrange2
Viewing instance information
To view an instance's information:
Console
Go to the Memorystore for Memcached page in the Google Cloud console.
Memorystore for Memcached
Click the Instance ID to view its information.
gcloud
To view the list of all Memcached instances in a region, enter the
following command:
gcloud memcache instances list --region= region-id
To view the details of an instance, enter the following command:
gcloud memcache instances describe instance_id --region= region_id
Editing instances
To edit an instance:
Console
Go to the Memorystore for Memcached page in the Google Cloud console.
Memorystore for Memcached
Click on the Instance ID of the instance you'd like to edit.
Click the Edit button.
From the Edit Memcached instance page you can change an
instance's:
Number of nodes – see Scaling Memcached instances
for more details.
Display name
Click the Save button.
While your updates are being made, a swirling circle appears next to your
instance on the Memorystore for Memcached home page. When the updates are
finished, the circle becomes a green checkmark.
gcloud
You can update the following properties after creating an instance:
Number of nodes – see Scaling Memcached instances
for more details.
Memcached configuration – see Configuring Memcached instances
for more details.
Labels
Display name
For example, enter the following command to update the display name and
labels of an instance, replacing variables with appropriate
values:
gcloud memcache instances update instance-id --region=region-id --display-name= name --labels= key = value
Deleting instances
To delete an instance:
Console
Go to the Memorystore for Memcached page in the Google Cloud console.
Memorystore for Memcached
Click the instance ID.
Click the Delete button.
Confirm that you want to delete the instance by entering the instance ID,
and clicking the Delete button.
gcloud
To delete an instance enter the following command:
gcloud memcache instances delete instance-id --region= region-id
What's next
Connect to a Memcached instance .
Use the Auto Discovery service .
Configure your Memcached instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
