---
title: "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create
  title: "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Create a read pool instance in a cluster
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a read pool instance in
an AlloyDB for PostgreSQL cluster.
Before you begin
The Google Cloud project you are using must have been
enabled to access AlloyDB .
You must have one of these IAM roles in the Google Cloud project you are using:
roles/alloydb.admin (the AlloyDB Admin predefined IAM role)
roles/owner (the Owner basic IAM role)
roles/editor (the Editor basic IAM role)
If you don't have any of these roles, contact your Organization Administrator to request
access.
Create a read pool instance
Console
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click a cluster in the Resource Name column.
Go to the Instances in your cluster
section, and click Add read pool .
Configure your read pool instance:
In the Read pool instance ID field, enter an ID for the read
pool instance.
In the Node count field, enter a node count.
The number of nodes in a read pool instance determines the
instance's overall computing capacity.
Note: You can have a maximum of 20 nodes across all the read
pool instances in a cluster.
Select one of the following machine series:
C4A (Google Axion-based machine series)
N2 (x86-based machine series). This is the default machine series.
C4 (x86-based machine series)
Z3 (Intel Xeon-based machine series)
Select a machine type.
C4A supports 1, 2, 4, 8, 16, 32, 48, 64, and 72 vCPUs.
N2 supports 2, 4, 8, 16, 32, 64, 96, and 128 vCPUs.
C4 supports 4, 8, 16, 24, 32, 48, 96, 144, 192, and 288 machine types or shapes.
Z3 supports 8, 14, 16, 22, 32, 44, and 88 v vCPUs.
For more information about using the C4A Axion-based machine series, including
the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .
Optional: To connect your applications and clients over the
public internet, click Enable Public IP in Public IP
Connectivity . Enabling public IP might require additional
configuration to make sure that you have a secure connection. For more information, see
Connect using public IP .
By default, private IP is always enabled. For more
information, see
Enable private services access .
Optional: To enable managed connection pooling, select
Enable managed connection pool under Managed connection pool .
For more information, see Configure managed connection
pooling .
Choose your network security settings. To keep your
data secure, we recommend that you use
mTLS encryption using AlloyDB connectors or SSL encryption.
When you change your security settings, your instance is
available for use, but existing, noncompliant connections are dropped.
Optional: Set custom flags to your instance. For each flag, follow
these steps:
Click Advanced Configuration Options .
Click Add a database flag .
Select a flag from the New database flag list.
Provide a value for the flag.
Click Done .
Click Add read pool .
gcloud
To use the gcloud CLI, you can
install and initialize the Google Cloud CLI, or you
can use Cloud Shell .
Use the gcloud alloydb instances create
command to create a read pool instance.
gcloud alloydb instances create INSTANCE_ID \
--instance-type = READ_POOL \
--read-pool-node-count = NODE_COUNT \
--region = REGION_ID \
--cluster = CLUSTER_ID \
--cpu-count = CPU_COUNT \
--machine-type = MACHINE_TYPE \
--project = PROJECT_ID
Replace the following:
INSTANCE_ID : The ID of the instance you are creating.
It must begin with a lowercase letter and can contain lowercase
letters, numbers, and hyphens.
NODE_COUNT : The number of nodes in the instance.
Specify a number 1 through 20 , inclusive. Note that you cannot
have more than 20 nodes across all read pool instances in a cluster.
REGION_ID : The region of your existing cluster, in
which your want to create the read pool instance.
CLUSTER_ID : The ID of your existing cluster, in
which you want to create the read pool instance.
CPU_COUNT : the number of vCPUs that you want
for the instance.
You must specify either cpu_count or machine_type .
If only cpu_count is provided, an N2 instance is created with the
following specifications:
2: 2 vCPUs, 16 GB RAM
4: 4 vCPUs, 32 GB RAM
8: 8 vCPUs, 64 GB RAM
16: 16 vCPUs, 128 GB RAM
32: 32 vCPUs, 256 GB RAM
64: 64 vCPUs, 512 GB RAM
96: 96 vCPUs, 768 GB RAM
128: 128 vCPUs, 864 GB RAM
If both machine_type and cpu_count are provided, the cpu_count
value must align with the number of vCPUs specified in the machine_type .
For example, if machine_type is n2-highmem-4 , then you must set cpu_count
to 4 .
MACHINE_TYPE : Select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd . For more information, see Choose an AlloyDB machine type.
PROJECT_ID : The ID of the project where your existing
cluster is located.
To create a read pool instance for a
Private Service Connect-enabled cluster, add the
--allowed-psc-projects flag to set a comma separated list of project IDs or
[project numbers](/resource-manager/docs/creating-managing-projects#identifying_projects
that you want to allow access to the instance—for example,
my-project-1 , 12345 , my-project-n .
gcloud alloydb instances create INSTANCE_ID \
--instance-type = READ_POOL \
--region = REGION_ID \
--cluster = CLUSTER_ID \
--cpu-count = CPU_COUNT \
--machine-type = MACHINE_TYPE \
--project = PROJECT_ID \
--allowed-psc-projects = ALLOWED_PROJECT_LIST
Replace the following:
ALLOWED_PROJECT (Optional): The comma-separated list
of project IDs or project numbers that you want to allow access to the
instance—for example, my-project-1 , 12345 , my-project-n . You must
set a list of allowed projects or numbers, if your cluster uses
Private Service Connect as the method of connecting to the
instance.
To enable managed connection pooling in your read pool instance, add the
--enable-connection-pooling flag to the
gcloud alloydb instances create
command:
gcloud alloydb instances create INSTANCE_ID \
--instance-type = READ_POOL \
--region = REGION_ID \
--cluster = CLUSTER_ID \
--cpu-count = CPU_COUNT \
--machine-type = MACHINE_TYPE \
--project = PROJECT_ID \
--enable-connection-pooling
To create a read pool instance for a public IP-enabled cluster, add the
--assign-inbound-public-ip= ASSIGN_IPV4 parameter.
gcloud alloydb instances create INSTANCE_ID \
--instance-type = READ_POOL \
--region = REGION_ID \
--cluster = CLUSTER_ID \
--cpu-count = CPU_COUNT \
--machine-type = MACHINE_TYPE \
--project = PROJECT_ID \
--assign-inbound-public-ip = ASSIGN_IPV4
Optionally, you can pass the comma separated list of CIDR blocks, such as
64.233.160.0/16 to the --authorized-external-networks parameter to set
authorized external networks on your instance.
Note: For PSC-enabled instances, additional settings are required, see Connect to an instance using Private Service Connect for details.
What's next
Learn
options for connecting your read pool instance .
View instance details .
Scale an instance .
Restart an instance or read pool nodes .
Troubleshoot read pool queries .
Learn about sizing recommendations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
