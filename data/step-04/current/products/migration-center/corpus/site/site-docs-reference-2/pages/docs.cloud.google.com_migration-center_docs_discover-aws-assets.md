---
title: "Discover assets on AWS \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/discover-aws-assets
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/discover-aws-assets
  title: "Discover assets on AWS \_|\_ Migration Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Guides
Send feedback
Discover assets on AWS
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to run an inventory discovery on your
Amazon Web Services (AWS) account by using the Migration Center discovery client CLI.
You can use mcdc CLI to collect information about the following
assets in your AWS account:
Amazon Elastic Compute Cloud (EC2)
Amazon Relational Database Service (RDS)
Microsoft SQL Server
MySQL
PostgreSQL
Amazon CloudFront ( Preview )
Amazon DynamoDB ( Preview )
Amazon Elastic Container Service (ECS) ( Preview )
Amazon Elastic File System (EFS) ( Preview )
Amazon Elastic Kubernetes Service (EKS) ( Preview )
Amazon Redshift ( Preview )
Amazon Route53 ( Preview )
Amazon Simple Storage Service (S3) ( Preview )
Amazon Virtual Private Cloud (VPC) ( Preview )
Amazon API Gateway ( Preview )
Application Load Balancer (ALB) ( Preview )
AWS AppSync ( Preview )
AWS Lambda ( Preview )
AWS Batch ( Preview )
Amazon Elastic Container Registry (ECR) ( Preview )
Amazon EC2 Auto Scaling ( Preview )
Amazon Elastic Block Store (EBS) ( Preview )
Amazon VPC Internet Gateway ( Preview )
Amazon VPC NAT Gateway ( Preview )
Elastic IP Address (EIP) ( Preview )
Elastic Load Balancing (ELB) ( Preview )
Elastic Network Interface (ENI) ( Preview )
Simple Notification Service (SNS) ( Preview )
The mcdc CLI then sends the collected information to
Migration Center where you can complete the assessment.
Limitations
When running an inventory discovery on your AWS account, the
mcdc CLI has the following limitations:
Only EC2 and RDS asset types are included in the TCO report. To export and
analyze all asset types outside of Migration Center,
export your inventory .
The following information for EC2 instances is not collected:
Memory usage is not collected. To collect this information, make sure that
the Amazon CloudWatch agent is installed and configured on your EC2
instances.
Free disk space. To collect this information, run a guest discovery .
You cannot run the mcdc CLI on Linux machines to collect
data from AWS Windows EC2 instances. To collect information from Windows EC2
instances, run the mcdc CLI on a Windows machine.
Data collected during inventory discovery
The mcdc CLI collects the following information from the
supported AWS services:
Asset type
Data collected
Amazon EC2
Click to show the collected data.
Instance details (ID, type, state)
Owner discount ID
Instance type details (CPU, memory)
Tags
Operating system information (from SSM)
Block device mappings and volume details
Performance metrics (CPU utilization, network I/O, disk I/O)
Amazon RDS
Click to show the collected data.
Database instance details (identifier, class, status)
Engine and engine version details
Allocated storage
Tags
Performance metrics (CPU utilization, network throughput, IOPS, free storage)
Performance insights (free memory)
Amazon S3
Click to show the collected data.
Bucket details (name, ARN, region, creation date)
Tags
Versioning status
Lifecycle rules
Performance metrics (bucket size by storage class, number of objects)
Amazon EKS
Click to show the collected data.
Per cluster:
Cluster details (name, ARN, version, status, endpoint)
Tags
Role ARN
VPC configuration
Logging configuration
Launch types (EC2 or Fargate)
Per managed node group:
Node group details (name, ARN, AMI type, instance types, disk size)
Scaling configuration (min, max, selected size)
Associated auto scaling groups
Per Fargate profile:
Profile details (name, pod execution role ARN)
Subnets
Selectors (namespace, labels)
Amazon ECS
Click to show the collected data.
Per cluster:
Cluster details (name, ARN, status)
Tags
Number of services and tasks
Registered container instances
Per service:
Service details (name, ARN, launch type)
Task definition
Scheduling strategy
Deployment configuration
Load balancer information
Per task:
Task details (ARN, last status, selected status)
CPU and memory
Container information
Amazon Elastic Load Balancing (ELB)
Click to show the collected data.
Per load balancer (version 1 and 2):
Details (name, ARN/ID, DNS name, type, scheme)
Tags
VPC and availability zones
Listeners and rules
Target groups and target health
Instance health (for classic ELBs)
Amazon Lambda
Click to show the collected data.
Per function:
Configuration (name, ARN, runtime, role, handler, timeout)
Tags
Memory size and ephemeral storage
Package type and code size
Architectures
Layers
Environment variables
Tracing configuration
Event source mappings
Concurrency settings
Amazon CloudFront
Click to show the collected data.
Per distribution:
Details (ID, ARN, domain name, status, enabled)
Tags
Aliases (CNAMEs)
Origins and origin groups
Cache behaviors
Price class, HTTP version, IPv6 enabled
Amazon EFS
Click to show the collected data.
Per file system:
Details (ID, ARN, name, creation time)
Tags
Total size (standard and infrequent access)
Performance and throughput mode
Encryption status
Lifecycle policies
Backup policy
Replication configurations
Mount targets and access points
Amazon Redshift
Click to show the collected data.
Per provisioned cluster:
Cluster details (identifier, ARN, status, version)
Tags
Node type and count
Database name
VPC and IAM roles
Encryption status
Snapshot and aqua configuration
Per serverless workgroup:
Workgroup details (name, ARN, status, base RPU)
Tags
Namespace information (database name, IAM roles, KMS key)
VPC endpoint
Snapshot copy configurations
Amazon VPC
Click to show the collected data.
Per VPC:
VPC details (ID, ARN, state, CIDR block, tenancy)
Tags
DHCP options ID
Associated subnets
Associated network ACLs
Amazon DynamoDB
Click to show the collected data.
Table details (name, ARN, creation time, status, size bytes, item count, class)
Tags
Billing mode
Provisioned throughput
Streams information
Replicas
Continuous backups and Point-in-time recovery status
Amazon NAT Gateway
Click to show the collected data.
NAT Gateway details (ID, ARN, creation time, state)
Tags
VPC ID and Subnet ID
Connectivity type
Associated addresses
Amazon Route53
Click to show the collected data.
Hosted Zone details (name, ID, ARN, private zone, comment, record set count)
Tags
Caller reference
Linked service
Name servers
VPC associations
Resource record sets
Amazon ECR
Click to show the collected data.
Repository details (Name, ARN, Registry ID, URL)
Tags
Image scanning configuration
Encryption configuration (type, KMS key)
Image tag mutability settings
Elastic IP Address (EIP)
Click to show the collected data.
Allocation and Association IDs
Tags
Public and private IP addresses
Domain (VPC or Standard)
Associated instance and network interface IDs
Public and private DNS names
Network border group and IP pools
Elastic Network Interface (ENI)
Click to show the collected data.
Interface details (ID, ARN, type, description, status)
Tags
VPC and Subnet IDs
MAC address and private IP addresses
Associated Security Groups
IPv6 addresses and primary IPv6 status
Attachment details (ID, device index, instance ID)
Source or destination check status
Amazon Elastic Block Store (EBS)
Click to show the collected data.
Volume details (ID, ARN, type, size, status)
Tags
Availability Zone
Encryption status and KMS key ID
Performance metrics (IOPS, throughput)
Snapshot ID and create time
Multi-attach and channel information
Amazon EC2 Auto Scaling
Click to show the collected data.
Group details (Name, ARN, status)
Tags (including propagation settings)
Scaling configuration (min, max, size)
VPC Zone identifiers and availability zones
Launch template and mixed instances policy
Health check configuration (type, grace period)
Associated load balancers and target groups
Termination policies and suspended processes
Warm pool configuration
Amazon Batch
Click to show the collected data.
Compute Environment details (Name, ARN, type, state, status)
Tags
ECS Cluster and Service Role ARNs
Compute resources (instance types, allocation strategy, vCPU limits)
Network configuration (subnets, security groups)
EC2 configuration and launch templates
EKS configuration and update policies
Amazon AppSync
Click to show the collected data.
API details (ID, name, ARN, type, visibility)
Tags
Authentication configuration (type, additional providers)
Lambda authorizer and user pool configurations
Logging and tracing (X-ray) settings
Limits (query depth, resolver count)
Endpoint URIs
Amazon Simple Notification Service (SNS)
Click to show the collected data.
Topic details (name, ARN, display name, owner)
Tags
Attributes (policy, delivery policy)
Encryption (KMS Key ID)
FIFO topic and deduplication status
Feedback configuration for various protocols (Lambda, SQS, and HTTP)
Tracing configuration
Amazon API Gateway
Click to show the collected data.
Rest API details (ID, name, ARN, description)
Tags
Endpoint configuration (types, VPC endpoints)
API key source and binary media types
Execution ARN and root resource ID
Compression settings and policy
Amazon Internet Gateway
Click to show the collected data.
Gateway details (ID, ARN, Owner ID)
Tags
Associated VPC ID
Amazon Application Load Balancer (ALB)
Click to show the collected data.
Load balancer details (name, ARN, scheme, status)
Tags
VPC and Subnet mappings
Associated Security Groups
DNS Name and canonical Hosted Zone ID
IP Address Type (IPv4, dualstack)
Attributes (idle timeout, deletion protection, HTTP/2 settings)
Access and connection logging configuration
Web Application Firewall (WAF) and routing behaviors
The mcdc CLI collects metrics for the last 30 days
except for database memory usage. For database memory usage, AWS
saves only up to 7 days of data by default, so
the mcdc CLI collects data for only the last 7 days.
Before you begin
Before you begin the inventory discovery, complete the following steps:
Review the requirements for downloading and running the mcdc CLI .
Choose where to download the mcdc CLI and complete
the steps to download the mcdc CLI .
Make sure that you have access to your AWS account.
Choose where to download the mcdc CLI
You can download the mcdc CLI to both Linux and Windows
machines. We recommend using a Windows EC2 instance to
download and run the mcdc CLI, because it supports all
available collection methods .
You can download the mcdc CLI to a location with access to
your target assets, such as the following:
AWS CloudShell
A Linux EC2 instance
A Windows EC2 instance
Any computer where you have installed the mcdc CLI and
have remote access to your AWS account.
For instructions to download the mcdc CLI,
see Download mcdc CLI .
Create an AWS IAM policy
To authorize the mcdc CLI to read the AWS asset inventory data,
create an AWS IAM policy
with the following permissions:
Click to show the IAM policy.
{
"Version": "2012-10-17",
"Statement": [
{
"Effect": "Allow",
"Action": [
"apigateway:GetRestApis",
"apigateway:GetTags",
"appsync:ListGraphqlApis",
"appsync:ListTagsForResource",
"autoscaling:DescribeAutoScalingGroups",
"batch:DescribeComputeEnvironments",
"cloudfront:ListDistributions",
"cloudfront:ListTagsForResource",
"cloudwatch:DescribeAlarms",
"cloudwatch:GetMetricData",
"cloudwatch:ListTagsForResource",
"dynamodb:DescribeContinuousBackups",
"dynamodb:DescribeTable",
"dynamodb:ListTables",
"dynamodb:ListTagsOfResource",
"ec2:DescribeAddresses",
"ec2:DescribeInstances",
"ec2:DescribeInstanceTypes",
"ec2:DescribeInternetGateways",
"ec2:DescribeNatGateways",
"ec2:DescribeNetworkAcls",
"ec2:DescribeNetworkInterfaces",
"ec2:DescribeRegions",
"ec2:DescribeSubnets",
"ec2:DescribeVolumes",
"ec2:DescribeVpcs",
"ecr:DescribeRepositories",
"ecr:GetEncryptionConfiguration",
"ecr:ListTagsForResource",
"ecs:DescribeClusters",
"ecs:DescribeContainerInstances",
"ecs:DescribeServices",
"ecs:DescribeTasks",
"ecs:ListClusters",
"ecs:ListContainerInstances",
"ecs:ListServices",
"ecs:ListTasks",
"efs:DescribeAccessPoints",
"efs:DescribeBackupPolicy",
"efs:DescribeFileSystems",
"efs:DescribeLifecycleConfiguration",
"efs:DescribeMountTargets",
"efs:DescribeReplicationConfigurations",
"efs:ListTagsForResource",
"eks:DescribeCluster",
"eks:DescribeFargateProfile",
"eks:DescribeNodegroup",
"eks:ListClusters",
"eks:ListFargateProfiles",
"eks:ListNodegroups",
"elasticloadbalancing:DescribeInstanceHealth",
"elasticloadbalancing:DescribeListeners",
"elasticloadbalancing:DescribeLoadBalancers",
"elasticloadbalancing:DescribeRules",
"elasticloadbalancing:DescribeTags",
"elasticloadbalancing:DescribeTargetGroups",
"elasticloadbalancing:DescribeTargetHealth",
"lambda:GetFunctionConcurrency",
"lambda:ListEventSourceMappings",
"lambda:ListFunctions",
"lambda:ListTags",
"pi:GetResourceMetrics",
"rds:DescribeDBEngineVersions",
"rds:DescribeDBInstances",
"redshift:DescribeClusters",
"redshift-serverless:GetNamespace",
"redshift-serverless:ListSnapshotCopyConfigurations",
"redshift-serverless:ListTagsForResource",
"redshift-serverless:ListWorkgroups",
"route53:GetHostedZone",
"route53:ListHostedZones",
"route53:ListResourceRecordSets",
"route53:ListTagsForResource",
"s3:GetBucketLocation",
"s3:GetBucketTagging",
"s3:GetBucketVersioning",
"s3:GetLifecycleConfiguration",
"s3:ListAllMyBuckets",
"sns:GetTopicAttributes",
"sns:ListTagsForResource",
"sns:ListTopics",
"ssm:DescribeInstanceInformation"
],
"Resource": "*"
}
]
}
Authenticate to AWS
To authorize the mcdc CLI to access your AWS environment,
authenticate your account using one of the following methods:
Use your existing AWS credentials
Create an access key for the mcdc CLI
Use your existing AWS credentials
To use your existing AWS credentials, run the mcdc CLI
commands directly from the AWS Cloud Shell.
If you run the mcdc CLI from the AWS Cloud Shell, you
can use your existing credentials without an access key. In this case, the
mcdc CLI can access your AWS environment to
discover AWS assets, as the access is granted by your credentials.
Create an access key for the mcdc CLI
To create an access key for the mcdc CLI, follow
these steps:
Create a dedicated
IAM user
to interact with the AWS API.
Attach the IAM policy you created in the previous section to your new user.
In the AWS console, navigate to the IAM user that you created in the previous
step, and click User > Security Credentials > Create access key > Other > Next >
Create access key .
For more information, see Create an access key .
Store the access key ID and access key. You need this information to
scan your AWS inventory.
Optional: Set up access to collect guest operating system data
Guest operating system data enriches pricing reports, license reports,
and asset details exports. This data also helps assess suitability for
containerization migrations to Google Kubernetes Engine,
GKE Autopilot, and Cloud Run.
If you don't want to collect operating system data, you can skip this section.
To collect guest operating system data, the workstation running the mcdc CLI
must connect to the target EC2 instances. Make sure that the following
ports are open on the target EC2 instances:
Port 22 (SSH) for Linux machines
Port 135 (WMI) for Windows machines
Discover assets in your AWS account
To discover assets in your AWS account, follow these steps:
In the command line terminal, change to the directory where you downloaded
the mcdc CLI.
Run the discovery:
AWS CloudShell
To discover assets in your AWS account, run
the following command:
Linux
./mcdc discover aws --host-config \
[--services AWS_SERVICE_NAMES ] \
[--region AWS_REGION ]
Windows
mcdc.exe discover aws --host-config \
[--services AWS_SERVICE_NAMES ] \
[--region AWS_REGION ]
Replace the following:
AWS_SERVICE_NAMES : the types of assets to discover.
Provide a comma-separated list. Supported values are alb ,
apigateway , appsync , autoscaling , batch , cloudfront ,
db (RDS), dynamodb , ebs , ecr , ecs , efs , eip , eks ,
elb , eni , internetgateway , lambda , natgateway ,
redshift , route53 , s3 , sns , vm (EC2), and vpc . If you don't
provide this flag, all supported asset types are discovered.
AWS_REGION : the AWS region where your EC2
instances and RDS databases are located. This flag is optional.
If you don't provide this flag, assets from all enabled AWS regions
are discovered.
AWS access key
To discover assets in your AWS account by using your AWS access key ID
and access key, run the following command:
Linux
./mcdc discover aws --access-key-id AWS_ACCESS_KEY_ID \
--secret-access-key AWS_ACCESS_KEY \
[--services AWS_SERVICE_NAMES ] \
[--region AWS_REGION ]
Windows
mcdc.exe discover aws --access-key-id AWS_ACCESS_KEY_ID \
--secret-access-key AWS_ACCESS_KEY \
[--services AWS_SERVICE_NAMES ] \
[--region AWS_REGION ]
Replace the following:
AWS_ACCESS_KEY_ID : the access key ID you
created in the Create an access key for the
mcdc CLI section.
AWS_ACCESS_KEY : the access key that you created
in the Create an access key for the mcdc CLI
section.
AWS_SERVICE_NAMES : the types of assets to discover.
Provide a comma-separated list. Supported values are alb ,
apigateway , appsync , autoscaling , batch , cloudfront ,
db (RDS), dynamodb , ebs , ecr , ecs , efs , eip , eks ,
elb , eni , internetgateway , lambda , natgateway ,
redshift , route53 , s3 , sns , vm (EC2), and vpc . If you don't
provide this flag, all supported asset types are discovered.
AWS_REGION : the AWS region where your AWS assets
are located. This flag is optional. If you don't provide this flag,
assets from all enabled AWS regions are discovered.
The output should look similar to the following:
[+] Collecting for AWS Account: 123456789012
[+] Collecting RDS in region eu-north-1
[✓] Collected 0 DB instances
[!] No DB instances found
[+] Collecting ECS in region eu-north-1
[+] Successfully collected data for 2 ECS clusters in region eu-north-1
[+] Collecting S3...
[+] Successfully collected data for 74 S3 buckets
[✓] Collection completed.
Optional: To review the collected data, run the following command:
Linux
./mcdc discover ls
Windows
mcdc.exe discover ls
The output should look similar to the following:
VM Assets
PLATFORM VM ID NAME COLLECTED DATA OS IP ADDRESSES
i-011d6234b5769fe2a abc-rhel9.0-arm AWSVM Red Hat Enterprise Linux 192.0.2.1
i-08f7e5e469508460f def-rhel9.0-arm AWSVM Red Hat Enterprise Linux 192.0.2.2
i-09e28bb6eggg94db8 ghi-ol9.3 AWSVM Linux/UNIX 192.0.2.3
Database Assets
GENERATED ID PROVIDER ENGINE
arn:aws:rds:eu-west-1:12345678912:db:abc-sqlserver RDS SQL Server
AWS CloudFront Distribution: 2 assets were collected.
AWS ECS Cluster: 3 assets were collected.
AWS EFS: 5 assets were collected.
AWS Elastic Load Balancer: 7 assets were collected.
AWS Lambda: 9 assets were collected.
AWS Redshift: 2 assets were collected.
AWS S3 Bucket: 77 assets were collected.
AWS VPC: 84 assets were collected.
Optionally, use the --asset-types flag to display assets of a specific type.
For example, to display only EC2 instances, run the following command:
Linux
./mcdc discover ls --asset-types=vm
Windows
mcdc.exe discover ls --asset-types=vm
When using the --asset-types flag, only the following asset types are supported:
db : Relational Database Service (RDS)
vm : Elastic Compute Cloud (EC2)
After you discover your assets, to view the assets, export the collected
data to Migration Center.
What's next
Learn how to export collected data to Migration Center .
Learn how to export inventory and performance data .
Learn how to generate TCO reports .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
