---
title: "Cluster deployment files \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files
  title: "Cluster deployment files \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Guides
Send feedback
Cluster deployment files
Stay organized with collections
Save and categorize content based on your preferences.
Cluster blueprints represent
patterns of infrastructure that you might need to deploy multiple times for
different purposes or with different configurations.
Deployment files are an optional feature that modify a blueprint's configuration
without changing the underlying Terraform and Packer modules. Common use cases
for using deployment files include the following:
Specifying a deployment_name that must be unique to each deployment
Specifying project_id , region , or zone that might vary across
deployments
Specifying an alternative Terraform remote state configuration
What can be specified in a deployment file
The following shows the parameters that can be set in a deployment file.
vars:
project_id: PROJECT_ID
deployment_name: DEPLOYMENT_NAME
region: REGION
zone: ZONE
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
Using deployment files
Deployment files are supported in Cluster Toolkit v1.29.0 and later. For more
information on how to specify the deployment file, see
Cluster deployment overview .
Variable precedence
For variables that are specified in the vars section of blueprints and
deployment files, the following precedence is enforced:
If a variable is specified in both the deployment file and blueprint, the
value in the deployment file takes precedence
If a variable is specified in the deployment file and the --vars flag of
gcluster create or gcluster deploy commands, then the value supplied in the --vars
flag takes precedence
Any variable that isn't specified in the deployment file or --vars flag,
uses the value from the blueprint
If terraform_backend_defaults is set in a deployment file, then it replaces
all terraform_backend_defaults settings in the blueprint.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
