---
title: "Configure a Cloud Run job \_|\_ Application Design Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/configure-cloud-run-job
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/configure-cloud-run-job
  title: "Configure a Cloud Run job \_|\_ Application Design Center \_|\_ Google Cloud\
    \ Documentation"
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
Configure a Cloud Run job
Stay organized with collections
Save and categorize content based on your preferences.
A Cloud Run job is a containerized application that runs a
specific, non-HTTP task and then exits. You might use a Cloud Run
job for tasks that don't need to run continuously or serve requests. For
example, scheduled batch processing or data transformations.
This document describes the connections and parameters you can configure when
using App Design Center to create a Cloud Run job component. The
configuration parameters are based on the
terraform-google-cloud-run/modules/job-exec
Terraform module.
Component connections
The following table includes the components that you can connect to a
Cloud Run job component, and the resulting updates to your
application and its generated Terraform code.
Connected component
Application updates
Background information
Service account
The Cloud Run job uses the service account as a service identity.
The service account email is added to the Cloud Run job.
Configure service identity for jobs
Cloud SQL (MySQL)
The Cloud Run job can read and write data to the Cloud SQL (MySQL) instance.
Connect from Cloud Run
Cloud SQL (PostgreSQL)
The Cloud Run job can read and write data to the Cloud SQL (PostgreSQL) instance.
Connect from Cloud Run
Cloud Storage
The Cloud Run job can communicate with the Cloud Storage bucket.
The Cloud Storage bucket name is added to the Cloud Run job.
Connect to Google Cloud services
Required configuration parameters
If your template includes a Cloud Run job, you must configure the
following parameters before you deploy.
Parameter name
Description and constraints
Background information
Project ID
The project where you want to deploy the Cloud Run job.
Configure components
Name
name
Cloud Run services
Region
The Cloud Run service deployment location.
Cloud Run locations
Image
image
Deploying container images
Optional configuration parameters
The following parameters are optional. To display advanced parameters, in the
Configuration area, select Show advanced fields .
Feature
Parameter name
Description and constraint information
Background information
Create Service Account
Create a new service account for the Cloud Run job.
Configure service identity for jobs
Service Account Project Roles
Roles to grant to the newly created service account. Enable Create Service Account and don't provide input for Service Account .
Configure service identity for jobs
Exec
Whether to execute the job after it's created.
Execute jobs
Service Account Email
serviceAccount
Configure service identity for jobs
Argument
args[]
Configure containers for jobs
Container Command
command
Configure containers for jobs
Env Vars
Name
name
Environment variables for jobs
Value
value
Environment variables for jobs
Env Secret Vars
Name
EnvVarSource
Configure secrets for jobs
Secret
secret
Configure secrets for jobs
Version
version
Configure secrets for jobs
Launch Stage
LaunchStage
Product launch stages
Labels
Key
labels
Configure labels for jobs
Value
labels
Configure labels for jobs
Max Retries
maxRetries
Set maximum retries for jobs
Parallelism
parallelism
Set parallelism for jobs
Task Count
taskCount
Override job configuration for a specific execution
Volumes
Name
name
Configure in-memory volume mounts for jobs
Instances
instances[]
Connect from Cloud Run
Bucket
bucket
Configure Cloud Storage volume mounts for services
Read Only
readOnly
Configure Cloud Storage volume mounts for services
Mount Options
mountOptions[]
Configure Cloud Storage volume mounts for services
Volume Mounts
Name
name
Connect from Cloud Run
Mount Path
mountPath
Connect from Cloud Run
Vpc Access
Connector
connector
VPC with connectors
Egress
egress
Control egress service traffic
Limits
Cpu
limits
Configure CPU limits for jobs
Memory
limits
Configure memory limits for services
Timeout
timeout
Set task timeout for jobs
Cloud Run Deletion Protection
Prevents Terraform from destroying or recreating Cloud Run jobs and services.
deletion_protection
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
