---
title: "Directly import asset inventory data from AWS \_|\_ Migration Center \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/aws-import-data
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/aws-import-data
  title: "Directly import asset inventory data from AWS \_|\_ Migration Center \_\
    |\_ Google Cloud Documentation"
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
Directly import asset inventory data from AWS
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
Migration Center lets you import data about assets, performance,
and usage from your AWS infrastructure, and collect information about
the following assets in your AWS account:
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
The following data is collected during AWS discovery:
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
Migration Center collects metrics for the last 30 days
except for database memory usage. For database memory usage, AWS
saves only up to 7 days of data by default, so
Migration Center collects data for only the last 7 days.
Before you begin
Make sure that you have enabled the Cloud Run Admin API on the project.
Make sure that you have an AWS access key ID and secret access key to authenticate to your AWS account.
For more information, see
Manage access keys for IAM users .
Create a secret by
using Secret Manager for your AWS secret access key.
Create a dedicated service account to run the AWS discovery. For instructions,
see Create service accounts .
Make sure that you grant the following required permissions and roles to the
service account.
Permissions required for this task
To perform this task, you must have the following
permissions :
Permissions
migrationcenter.admin to the service account to run the AWS
discovery from Google Cloud Migration Center.
Roles
Secret Manager Secret Accessor ( roles/secretmanager.secretAccessor )
to access the AWS secret access key stored in Secret Manager.
Run AWS discovery
AWS discovery lets you scan and collect information about the assets
in your AWS account. The collected information is automatically imported into
Migration Center for assessment.
To run AWS discovery, follow these steps:
Go to the Data import page.
Go to Data import
Click Add data > AWS discovery .
For AWS account ID , provide your AWS access key ID.
For AWS account secret , provide your AWS secret access key.
Optional: For AWS region , enter the AWS region to scan for your
AWS assets. If you don't enter a region, assets
from all enabled AWS regions are discovered.
Click Start AWS discovery .
To view the discovered assets, go to the Assets page, and then click refresh Refresh .
What's next
Learn more about
Migration Center collection methods .
Learn how to
manage your file uploads .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
