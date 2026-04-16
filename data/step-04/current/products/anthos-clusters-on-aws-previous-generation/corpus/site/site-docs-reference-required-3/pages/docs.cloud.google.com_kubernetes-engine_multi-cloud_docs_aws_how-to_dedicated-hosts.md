---
title: "Create a cluster with dedicated hosts \_|\_ GKE on AWS \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/dedicated-hosts
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/dedicated-hosts
  title: "Create a cluster with dedicated hosts \_|\_ GKE on AWS \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Create a cluster with dedicated hosts
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page shows you how to create a cluster and node pool that uses AWS
dedicated instances
or dedicated hosts .
Dedicated hosts and instances are reserved for your use alone and not shared
with other AWS customers. The setting for dedicated hosts and instances is
known as tenancy .
Before you begin
Note: To use dedicated instances or hosts with GKE on AWS, your
account must be allowlisted for the feature. Contact your support
representative for access.
To use dedicated instances or hosts with GKE on AWS, you must create
a new cluster version 1.22.8-gke.200 or higher. You can't upgrade an
existing cluster and add dedicated hosts.
Cluster requirements
Before creating a cluster, you must complete the
prerequisites . In particular, you must
provide the following resources:
An AWS VPC where the cluster will run.
Up to three AWS subnets for the three control plane replicas. Each must be
in a different AWS Availability Zone.
The AWS IAM role that GKE on AWS assumes when managing your
cluster. This requires a specific set of
IAM permissions .
KMS symmetric CMK keys for at-rest encryption of cluster data (etcd)
and configuration.
The AWS IAM instance profile for each control plane replica. This requires
a specific set of IAM permissions .
An EC2 SSH key pair (optional) if you need SSH access to the EC2 instances
that run each control plane replica.
It is your responsibility to create and manage these resources, which
can be shared between all your Anthos clusters. All other underlying
cluster-scoped AWS resources are managed by GKE on AWS.
These instructions use the GKE Multi-Cloud API to create a cluster and node pool.
Before using the GKE Multi-Cloud API, ensure that you're familiar with
Google Cloud APIs .
Dedicated hosts and dedicated instances
When you create a cluster or node pool, you choose from one of the following
options:
DEFAULT : launch instances with your VPC's default tenancy
DEDICATED : launch instances on a dedicated instance
HOST : launch instances on a dedicated host
Before you create a cluster or node pool, decide which option is right for you.
For more information, see
Configuring instance tenancy with a launch configuration ,
dedicated instances ,
and dedicated hosts
in the AWS documentation.
Mixing tenancy settings in a cluster
You can configure tenancy settings individually for each control plane and node
pool. For example, you can create a cluster with the control plane on shared
hosts, a node pool on dedicated hosts, and another node pool on shared hosts.
Allocate dedicated hosts
Before you create a cluster with dedicated hosts, you need to allocate hosts for
all the instances your cluster needs. The hosts should have the following
attributes:
Use the same instance families that your cluster
resources need
Allocated in the same zones where you planned to create clusters
Enable auto-placement
You have enough quota to launch dedicated hosts
For more information on allocating dedicated hosts, see
Getting started with dedicated hosts .
Limitations
This sections lists the limitations of dedicated host support in
GKE on AWS.
Node pools
You can't update a node pool's tenancy setting. To move workloads onto instances
with another tenancy setting, create a new node pool with your desired tenancy
and delete the existing one.
Supported instance families
GKE on AWS supports dedicated hosts from the following instance
families.
t3
m5
m5d
c5
c5d
r5
r5d
i3en
Other instance families are not supported.
Node types
Only Linux node pools are supported.
Create a cluster
You create a cluster that supports dedicated hosts with the
Method: projects.locations.awsClusters.create
with the GKE Multi-Cloud API.
To create a cluster, perform the following steps:
gcloud
The following sample creates a cluster with dedicated hosts.
Before using any of the command data below,
make the following replacements:
CLUSTER_NAME : your chosen cluster name
GOOGLE_CLOUD_LOCATION : the
supported Google Cloud region
that manages your cluster—for example, us-west1
AWS_REGION : the AWS region to create the cluster in
API_ROLE_ARN : the ARN of the GKE Multi-Cloud API role
CONFIG_KMS_KEY_ARN : the Amazon Resource Name (ARN) of
the AWS KMS key to encrypt user data
DB_KMS_KEY_ARN : the Amazon Resource Name (ARN) of
the AWS KMS key to encrypt the
cluster's secrets
CONTROL_PLANE_PROFILE : the profile of the IAM instance
associated with the cluster
CONTROL_PLANE_SUBNET_1 , CONTROL_PLANE_SUBNET_2 ,
CONTROL_PLANE_SUBNET_3 with the subnet IDs for your cluster's
three control plane instances
TENANCY_TYPE : The setting for the control plane's
tenancy .
Can be DEFAULT , DEDICATED , or HOST .
CLUSTER_VERSION : A
supported cluster version
FLEET_PROJECT : the
Fleet host project where the
cluster will be registered. If you want to manage this cluster from another
Project, see
Cross-project registration
POD_ADDRESS_CIDR_BLOCKS : the CIDR address range for your
cluster's pods
SERVICE_ADDRESS_CIDR_BLOCKS : the CIDR address range for
your cluster's services
VPC_ID : the ID of the AWS VPC for this cluster
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud alpha container aws clusters create CLUSTER_NAME \
--location GOOGLE_CLOUD_LOCATION \
--aws-region AWS_REGION \
--role-arn API_ROLE_ARN \
--config-encryption-kms-key-arn CONFIG_KMS_KEY_ARN \
--database-encryption-kms-key-arn DB_KMS_KEY_ARN \
--iam-instance-profile CONTROL_PLANE_PROFILE \
--subnet-ids CONTROL_PLANE_SUBNET_1 , CONTROL_PLANE_SUBNET_2 , CONTROL_PLANE_SUBNET_3 \
--instance-placement TENANCY_TYPE
--cluster-version CLUSTER_VERSION \
--fleet-project FLEET_PROJECT \
--pod-address-cidr-blocks POD_ADDRESS_CIDR_BLOCKS \
--service-address-cidr-blocks SERVICE_ADDRESS_CIDR_BLOCKS \
--vpc-id VPC_ID \
--tags = "control-plane= CLUSTER_NAME "
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud alpha container aws clusters create CLUSTER_NAME `
--location GOOGLE_CLOUD_LOCATION `
--aws-region AWS_REGION `
--role-arn API_ROLE_ARN `
--config-encryption-kms-key-arn CONFIG_KMS_KEY_ARN `
--database-encryption-kms-key-arn DB_KMS_KEY_ARN `
--iam-instance-profile CONTROL_PLANE_PROFILE `
--subnet-ids CONTROL_PLANE_SUBNET_1 , CONTROL_PLANE_SUBNET_2 , CONTROL_PLANE_SUBNET_3 `
--instance-placement TENANCY_TYPE
--cluster-version CLUSTER_VERSION `
--fleet-project FLEET_PROJECT `
--pod-address-cidr-blocks POD_ADDRESS_CIDR_BLOCKS `
--service-address-cidr-blocks SERVICE_ADDRESS_CIDR_BLOCKS `
--vpc-id VPC_ID `
--tags = "control-plane= CLUSTER_NAME "
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud alpha container aws clusters create CLUSTER_NAME ^
--location GOOGLE_CLOUD_LOCATION ^
--aws-region AWS_REGION ^
--role-arn API_ROLE_ARN ^
--config-encryption-kms-key-arn CONFIG_KMS_KEY_ARN ^
--database-encryption-kms-key-arn DB_KMS_KEY_ARN ^
--iam-instance-profile CONTROL_PLANE_PROFILE ^
--subnet-ids CONTROL_PLANE_SUBNET_1 , CONTROL_PLANE_SUBNET_2 , CONTROL_PLANE_SUBNET_3 ^
--instance-placement TENANCY_TYPE
--cluster-version CLUSTER_VERSION ^
--fleet-project FLEET_PROJECT ^
--pod-address-cidr-blocks POD_ADDRESS_CIDR_BLOCKS ^
--service-address-cidr-blocks SERVICE_ADDRESS_CIDR_BLOCKS ^
--vpc-id VPC_ID ^
--tags = "control-plane= CLUSTER_NAME "
REST
The following sample creates a cluster with dedicated hosts.
Before using any of the request data,
make the following replacements:
ENDPOINT : your Google Cloud
service endpoint
PROJECT_ID : your Google Cloud project
USERNAME : user that can perform operations as a cluster admin
CLUSTER_NAME : your chosen cluster name
GOOGLE_CLOUD_LOCATION : the
supported Google Cloud region
that manages your cluster—for example, us-west1
AWS_REGION : the AWS region to create the cluster in
API_ROLE_ARN : the ARN of the GKE Multi-Cloud API role
CONFIG_KMS_KEY_ARN : the Amazon Resource Name (ARN) of
the AWS KMS key to encrypt user data
DB_KMS_KEY_ARN : the Amazon Resource Name (ARN) of
the AWS KMS key to encrypt the
cluster's secrets
CONTROL_PLANE_PROFILE : the profile of the IAM instance
associated with the cluster
CONTROL_PLANE_SUBNET_1 , CONTROL_PLANE_SUBNET_2 ,
CONTROL_PLANE_SUBNET_3 with the subnet IDs for your cluster's
three control plane instances
TENANCY_TYPE : The setting for the control plane's
tenancy .
Can be DEFAULT , DEDICATED , or HOST .
CLUSTER_VERSION : A
supported cluster version
FLEET_PROJECT : the
Fleet host project where the
cluster will be registered. If you want to manage this cluster from another
Project, see
Cross-project registration
POD_ADDRESS_CIDR_BLOCKS : the CIDR address range for your
cluster's pods
SERVICE_ADDRESS_CIDR_BLOCKS : the CIDR address range for
your cluster's services
VPC_ID : the ID of the AWS VPC for this cluster
HTTP method and URL:
POST ENDPOINT /projects/ PROJECT_ID /locations/ GOOGLE_CLOUD_LOCATION /awsClusters
Request JSON body:
{
"name": " CLUSTER_NAME ",
"authorization": {
"adminUsers": [
{
"username": " USERNAME "
}
]
},
"awsRegion": " AWS_REGION ",
"controlPlane": {
"awsServicesAuthentication": {
"roleArn": " API_ROLE_ARN "
},
"configEncryption": {
"kmsKeyArn": " CONFIG_KMS_KEY_ARN "
},
"databaseEncryption": {
"kmsKeyArn": " DB_KMS_KEY_ARN "
},
"iamInstanceProfile": " CONTROL_PLANE_PROFILE ",
"mainVolume": {},
"rootVolume": {},
"sshConfig": {},
"subnetIds": [
" CONTROL_PLANE_SUBNET_1 ",
" CONTROL_PLANE_SUBNET_2 ",
" CONTROL_PLANE_SUBNET_3 "
],
"tags": {
"google:gkemulticloud:cluster": " CLUSTER_NAME "
},
"instancePlacement": {
"tenancy": " TENANCY_TYPE "
},
"version": " CLUSTER_VERSION "
},
"fleet": {
"project": " FLEET_PROJECT "
},
"networking": {
"podAddressCidrBlocks": [
" POD_ADDRESS_CIDR_BLOCKS "
],
"serviceAddressCidrBlocks": [
" SERVICE_ADDRESS_CIDR_BLOCKS "
],
"vpcId": " VPC_ID "
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ " ENDPOINT /projects/ PROJECT_ID /locations/ GOOGLE_CLOUD_LOCATION /awsClusters"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri " ENDPOINT /projects/ PROJECT_ID /locations/ GOOGLE_CLOUD_LOCATION /awsClusters" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
For additional options, see the
Method: projects.locations.awsClusters.create
reference documentation.
Create a node pool
gcloud
The following sample creates a node pool with dedicated hosts. When you create a
node pool, all instances within the pool have the same instance type and tenancy
setting.
Before using any of the command data below,
make the following replacements:
GOOGLE_CLOUD_LOCATION : the
supported Google Cloud region
CLUSTER_NAME : your cluster's name
NODE_POOL_NAME : the name of the node pool
that manages your cluster—for example, us-west1
MIN_NODES : the minimum number of nodes the node pool
can contain
MAX_NODES : the maximum number of nodes the node pool
can contain
CONFIG_KMS_KEY_ARN : the Amazon Resource Name (ARN) of the
AWS KMS key that encrypts user data
NODEPOOL_PROFILE : the IAM instance profile for node pool VMs
ROOT_VOLUME_SIZE : the desired size for each node's root volume, in Gb
TENANCY_TYPE : The setting for the control plane's
tenancy .
Can be DEFAULT , DEDICATED , or HOST .
INSTANCE_TYPE : the desired AWS machine instance type
for this node pool
NODEPOOL_SUBNET : the ID of the subnet the node pool
will run on. If this subnet is outside of the VPC primary CIDR block, some
additional steps are needed. For more information, see
security groups .
CLUSTER_VERSION : A
supported cluster version
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud alpha container aws node-pools create NODE_POOL_NAME \
--cluster CLUSTER_NAME \
--location GOOGLE_CLOUD_LOCATION \
--min-nodes MIN_NODES \
--max-nodes MAX_NODES \
--config-encryption-kms-key-arn CONFIG_KMS_KEY_ARN \
--iam-instance-profile NODEPOOL_PROFILE \
--root-volume-size ROOT_VOLUME_SIZE \
--instance-placement TENANCY_TYPE
--instance-type INSTANCE_TYPE \
--subnet-id NODEPOOL_SUBNET \
--ssh-ec2-key-pair SSH_KEY_PAIR_NAME \
--node-version CLUSTER_VERSION \
--max-pods-per-node 110 \
--tags "Name= CLUSTER_NAME - NODE_POOL_NAME "
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud alpha container aws node-pools create NODE_POOL_NAME `
--cluster CLUSTER_NAME `
--location GOOGLE_CLOUD_LOCATION `
--min-nodes MIN_NODES `
--max-nodes MAX_NODES `
--config-encryption-kms-key-arn CONFIG_KMS_KEY_ARN `
--iam-instance-profile NODEPOOL_PROFILE `
--root-volume-size ROOT_VOLUME_SIZE `
--instance-placement TENANCY_TYPE
--instance-type INSTANCE_TYPE `
--subnet-id NODEPOOL_SUBNET `
--ssh-ec2-key-pair SSH_KEY_PAIR_NAME `
--node-version CLUSTER_VERSION `
--max-pods-per-node 110 `
--tags "Name= CLUSTER_NAME - NODE_POOL_NAME "
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud alpha container aws node-pools create NODE_POOL_NAME ^
--cluster CLUSTER_NAME ^
--location GOOGLE_CLOUD_LOCATION ^
--min-nodes MIN_NODES ^
--max-nodes MAX_NODES ^
--config-encryption-kms-key-arn CONFIG_KMS_KEY_ARN ^
--iam-instance-profile NODEPOOL_PROFILE ^
--root-volume-size ROOT_VOLUME_SIZE ^
--instance-placement TENANCY_TYPE
--instance-type INSTANCE_TYPE ^
--subnet-id NODEPOOL_SUBNET ^
--ssh-ec2-key-pair SSH_KEY_PAIR_NAME ^
--node-version CLUSTER_VERSION ^
--max-pods-per-node 110 ^
--tags "Name= CLUSTER_NAME - NODE_POOL_NAME "
REST
The following sample creates a node pool with dedicated hosts. When you create a
node pool, all instances within the pool have the same instance type and tenancy
setting.
Before using any of the request data,
make the following replacements:
ENDPOINT : your Google Cloud
service endpoint
PROJECT_ID : your Google Cloud project
USERNAME : user that can perform operations as a cluster admin
GOOGLE_CLOUD_LOCATION : the
supported Google Cloud region
CLUSTER_NAME : your cluster's name
NODE_POOL_NAME : the name of the node pool
that manages your cluster—for example, us-west1
MIN_NODES : the minimum number of nodes the node pool
can contain
MAX_NODES : the maximum number of nodes the node pool
can contain
CONFIG_KMS_KEY_ARN : the Amazon Resource Name (ARN) of the
AWS KMS key that encrypts user data
NODEPOOL_PROFILE : the IAM instance profile for node pool VMs
ROOT_VOLUME_SIZE : the desired size for each node's root volume, in Gb
TENANCY_TYPE : The setting for the control plane's
tenancy .
Can be DEFAULT , DEDICATED , or HOST .
INSTANCE_TYPE : the desired AWS machine instance type
for this node pool
NODEPOOL_SUBNET : the ID of the subnet the node pool
will run on. If this subnet is outside of the VPC primary CIDR block, some
additional steps are needed. For more information, see
security groups .
CLUSTER_VERSION : A
supported cluster version
HTTP method and URL:
POST ENDPOINT /projects/ PROJECT_ID /locations/ GOOGLE_CLOUD_LOCATION / CLUSTER_NAME /awsNodePools
Request JSON body:
{
"name": " NODE_POOL_NAME ",
"autoscaling": {
"minNodeCount": MIN_NODES ,
"maxNodeCount": MAX_NODES
},
"config": {
"configEncryption": {
"kmsKeyArn": " CONFIG_KMS_KEY_ARN "
},
"iamInstanceProfile": " NODEPOOL_PROFILE ",
"rootVolume": {
"sizeGib": ROOT_VOLUME_SIZE
},
"instancePlacement": {
"tenancy": " TENANCY_TYPE "
},
"instanceType" : " INSTANCE_TYPE "
"tags": {
"google:gkemulticloud:cluster": " NODE_POOL_NAME "
}
},
"maxPodsConstraint": {
"maxPodsPerNode": "110"
},
"subnetId": " NODEPOOL_SUBNET ",
"version": " CLUSTER_VERSION "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ " ENDPOINT /projects/ PROJECT_ID /locations/ GOOGLE_CLOUD_LOCATION / CLUSTER_NAME /awsNodePools"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri " ENDPOINT /projects/ PROJECT_ID /locations/ GOOGLE_CLOUD_LOCATION / CLUSTER_NAME /awsNodePools" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
For additional options, see the
Method: projects.locations.awsClusters.awsNodePools.create
reference documentation.
Cleaning up
To delete a cluster using dedicated hosts, perform the following steps:
Delete any node pools
Delete a cluster .
After you have deleted your node pools and cluster, you can
Release dedicated hosts .
What's next
Read the
AWSInstancePlacement
API reference documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
