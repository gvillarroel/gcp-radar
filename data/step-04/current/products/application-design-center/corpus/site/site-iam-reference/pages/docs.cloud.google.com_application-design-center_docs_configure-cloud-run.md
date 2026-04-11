---
title: "Configure a Cloud Run service \_|\_ Application Design Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-cloud-run
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-cloud-run
  title: "Configure a Cloud Run service \_|\_ Application Design Center \_|\_ Google\
    \ Cloud Documentation"
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
Configure a Cloud Run service
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Run is a fully managed application platform that lets you run
containers directly on top of Google's scalable infrastructure. For more
information, see Cloud Run overview .
This document describes the connections and parameters you can configure when
using App Design Center to create a Cloud Run service.
The configuration parameters are based on the terraform-google-cloud-run Terraform
module.
Component connections
The following table includes the components that you can connect to a
Cloud Run service, and the resulting updates to your application and
its generated Terraform code.
Connected component
Application updates
Background information
Secret Manager
The Cloud Run service can reference the secret data.
The Secret Manager Secret Data field is referenced by the Cloud Run env_secret_vars field.
The roles/secretmanager.secretAccessor role is added to the Cloud Run service account.
Configure secrets for services
Service account
The Cloud Run service uses the service account as a service identity .
The roles/run.invoker role is added to the service account.
The service account email and IAM information are added to the Cloud Run environment variables.
Authenticating service-to-service
AlloyDB for PostgreSQL
The Cloud Run service can connect to the AlloyDB for PostgreSQL instance.
The AlloyDB for PostgreSQL resource metadata is added to the Cloud Run environment variables.
The AlloyDB for PostgreSQL roles/alloydb.admin role is added to the Cloud Run service account.
Connect from Cloud Run
BigQuery
The Cloud Run service can interact with the BigQuery dataset.
The BigQuery resource metadata is added to the Cloud Run environment variables.
The BigQuery roles/bigquery.dataEditor role is added to the Cloud Run service account.
BigQuery overview
Bigtable
The Cloud Run service can perform administrative functions on the Bigtable instance.
The Bigtable resource metadata information is added to the Cloud Run environment variables.
The roles/bigtable.admin role is added to the Cloud Run service account.
Bigtable overview
Another Cloud Run service
The source Cloud Run service can send traffic to the destination Cloud Run service.
The source Cloud Run service contains the destination Cloud Run service URI in its environment variables.
What is Cloud Run
Cloud SQL (MySQL)
The Cloud Run service can read and write data to the Cloud SQL (MySQL) instance.
The Cloud SQL connection metadata is added to the Cloud Run service.
The roles/cloudsql.instanceUser and roles/cloudsql.client roles are added to the Cloud Run service account.
The Cloud Run service account is added as an IAM user to the Cloud SQL instance.
Connect from Cloud Run
Cloud SQL (PostgreSQL)
The Cloud Run service can read and write data to the Cloud SQL (PostgreSQL) instance.
The Cloud SQL connection metadata is added to the Cloud Run service.
The roles/cloudsql.instanceUser and roles/cloudsql.client roles are added to the Cloud Run service account.
The Cloud Run service account is added as an IAM user to the Cloud SQL instance.
Connect from Cloud Run
Cloud Storage
The Cloud Run service can manage objects in the Cloud Storage bucket.
The Cloud Run service account IAM information is added to the Cloud Storage bucket.
The roles/storage.objectAdmin role is assigned to the Cloud Run service account.
Connect to Google Cloud services
Global Cloud Load Balancing backend
The load balancer can distribute incoming traffic to the Cloud Run service.
The Cloud Run service is added as a backend endpoint in the Cloud Load Balancing serverless NEG backends configuration.
Set up a global external Application Load Balancer with Cloud Run
Memorystore for Redis
The Cloud Run service can cache data in the Memorystore for Redis instance.
The Memorystore for Redis connection information is added to the Cloud Run environment variables.
The roles/redis.editor role is added to the Cloud Run service account.
Connecting to a Redis instance from a Cloud Run service
Memorystore for Redis Cluster
The Cloud Run service can cache data in the Memorystore for Redis Cluster.
The Memorystore for Redis Cluster connection information is added to the Cloud Run environment variables.
The roles/redis.editor role is added to the Cloud Run service account.
Connect to a Memorystore for Redis Cluster instance
Pub/Sub
The Cloud Run service can receive messages or publish to the Pub/Sub topic.
The Pub/Sub topic ID is added to the Cloud Run environment variables.
The roles/pubsub.publisher and roles/pubsub.subscriber roles are added to the Cloud Run service account.
The Cloud Run service is added to the Pub/Sub push and pull subscription fields.
Use Pub/Sub with Cloud Run tutorial
Regional Cloud Load Balancing backend
The load balancer can distribute incoming traffic to the Cloud Run service.
The Cloud Run service is added as a backend endpoint in the Cloud Load Balancing serverless NEG backends configuration.
Set up a regional external Application Load Balancer with Cloud Run
Regional Cloud Load Balancing frontend
The HTTP and HTTPS IP addresses of the load balancer are available to the application running in the Cloud Run container.
The Cloud Load Balancing address metadata is added to the Cloud Run environment variables.
Forwarding rules overview
Spanner
The Cloud Run service can manage the Spanner instance.
The Spanner connection details are added to the Cloud Run environment variables.
The roles/spanner.databaseAdmin role is added to the Cloud Run service account.
The Cloud Run service account IAM information is added to the Spanner instance.
Connect to Google Cloud services
Vertex AI
The Cloud Run service can interact with Vertex AI services.
The roles/aiplatform.user role is added to the Cloud Run service account.
Host AI apps and agents on Cloud Run
Required configuration parameters
If your template includes a Cloud Run component, you must configure the
following parameters before you deploy.
Parameter name
Description and constraints
Background information
Project ID
The project where you want to deploy the Cloud Run resource.
Configure components
Region
The Cloud Run service deployment location.
Cloud Run locations
Service Name
name
Cloud Run service
Optional configuration parameters
The following parameters are optional. To display advanced parameters, in the
Configuration area, select Show advanced fields .
Feature
Subfeature
Parameter name
Description and constraint information
Background information
Containers
Container Name
name
Building containers
Container Image
image
Deploying container images to Cloud Run
Working Dir
The container's working directory. If not specified, the container runtime's default is used, which might be configured in the container image.
workingDir
Depends on Container
dependsOn[]
Configure container start order for sidecar deployments
Container Args
args[]
Configure containers for services
Container Command
command
Configure containers for services
Env Vars
Key
name
Environment variables for services
Value
value
Environment variables for services
Env Secret Vars
Key
EnvVarSource
Manage secrets
Secret
secret
Manage secrets
Version
version
Manage secrets
Volume Mounts
Name
name
Connect from Cloud Run
Mount Path
mountPath
Connect from Cloud Run
Ports
Name
name
Use HTTP/2 for services
Container Port
containerPort
Use HTTP/2 for services
Resources
CPU
limits
Configure CPU limits for services
Memory
limits
Configure memory limits for services
CPU Idle
Whether CPU is only allocated during requests.
cpuIdle
Startup CPU Boost
startupCPUBoost
Set startup CPU boost
Startup Probe
Failure Threshold
failureThreshold
Configure container health checks for services
Initial Delay Seconds
initialDelaySeconds
Configure probes
Timeout Seconds
timeoutSeconds
Configure probes
Period Seconds
periodSeconds
Configure probes
HTTP Get Path
path
Configure probes
HTTP Get Port
port
Configure probes
HTTP Headers Name
name
Configure probes
HTTP Headers Value
value
Configure probes
TCP Socket Port
port
The default TCP startup probe
GRPC Port
port
Configure probes
GRPC Service
service
Configure probes
Liveness Probe
livenessProbe
Use cases
Description
description
Set service descriptions
Create Service Account
Create a new service account for the Cloud Run service.
Configure service identity for jobs
Service Account Project Roles
Roles to grant to the newly created service account. Enable Create Service Account and don't provide input for Service Account .
Configure service identity for jobs
Ingress
IngressTraffic
Restrict network ingress for Cloud Run
Members
Users and service accounts that can invoke the service. For public access, enter allUsers . For access by logged-in Google users, enter allAuthenticatedUsers , or enter a list of specific users and service accounts. For more information, see members .
Configure service identity for jobs
VPC Access
Connector
connector
VPC with connectors
Egress
egress
Control egress service traffic
Network Interfaces
Network
network
Deploy a service
Subnetwork
subnetwork
Deploy a service
Tags
tags
Deploy a service
Cloud Run Deletion Protection
Prevents Terraform from destroying or recreating Cloud Run jobs and services.
deletion_protection
Enable Prometheus Sidecar
Enable Promethus sidecar in the Cloud Run instance.
Write Prometheus metrics by using the Prometheus sidecar
Volumes
Name
name
Configure an in-memory volume
Secret
Secret
secret
Make a secret accessible to Cloud Run
Default Mode
defaultMode
Path
path
Make a secret available to Cloud Run
Version
version
Make a secret available to Cloud Run
Mode
mode
Make a secret available to Cloud Run
Cloud SQL Instance
Instances
instances[]
Connect from Cloud Run
Empty Dir
Medium
medium
Configure in-memory volume mounts for services
Size Limit
sizeLimit
Configure in-memory volume mounts for services
GCS
Bucket
bucket
Configure Cloud Storage volume mounts for services
Read Only
readOnly
Configure Cloud Storage volume mounts for services
NFS
Server
server
Configure NFS volume mounts for services
Path
path
Configure NFS volume mounts for services
Read Only
readOnly
Configure NFS volume mounts for services
Service Scaling
Min Instance Count
minInstanceCount
Set minimum instances for services
Revision
revision
Cloud Run service revisions
Template Scaling
Min Instance Count
minInstanceCount
Set minimum instances for services
Max Instance Count
maxInstanceCount
About maximum instances
Encryption Key
encryptionKey
Using customer managed encryption keys
Max Instance Request Concurrency
maxInstanceRequestConcurrency
Maximum concurrent requests for services
Session Affinity
sessionAffinity
Set session affinity for services
Execution Environment
executionEnvironment
About service execution environments
Traffic
Type
type
Rollbacks, gradual rollouts, and traffic migration
Percent
percent
Rollbacks, gradual rollouts, and traffic migration
Revision
revision
Rollbacks, gradual rollouts, and traffic migration
Tag
tag
Rollbacks, gradual rollouts, and traffic migration
Service Labels
Key
labels
Configure labels for services
Value
labels
Configure labels for services
Service Annotations
Key
annotations
annotations
Value
annotations
annotations
Client
Name
Arbitrary identifier for the API client.
client
Version
Arbitrary identifier for the version identifier.
clientVersion
Launch Stage
LaunchStage
Product launch stages
Custom Audiences
customAudience
Set custom audiences for services
Binary Authorization
Breakglass Justification
breakglassJustification
Use breakglass
Use Default
useDefault
Use Binary Authorization
Template Labels
Key
labels
Configuring labels for services
Value
labels
Configuring labels for services
Template Annotations
Key
annotations
annotations
Value
annotations
annotations
Timeout
timeout
Set request timeout for services
Service Account
serviceAccount
Configure service identity for services
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
