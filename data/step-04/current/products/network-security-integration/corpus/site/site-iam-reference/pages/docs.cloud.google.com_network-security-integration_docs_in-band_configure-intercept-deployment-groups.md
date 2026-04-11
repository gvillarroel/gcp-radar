---
title: "Create and manage intercept deployment groups \_|\_ Network Security Integration\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-deployment-groups
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-endpoint-groups
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-deployment-groups
  title: "Create and manage intercept deployment groups \_|\_ Network Security Integration\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Security Integration
Guides
Send feedback
Create and manage intercept deployment groups
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create and manage intercept deployment groups.
Before you begin
Enable the
Network Security API in
your project.
Install the gcloud CLI .
Roles
To create, view, or delete intercept deployment groups, your
Identity and Access Management (IAM) principal must have the necessary
Identity and Access Management (IAM)
roles
on your project. For more information, see Manage access to projects, folders,
and organizations .
To check the progress of the operations listed on this page, your
Identity and Access Management (IAM) principal must have the following Intercept Deployment Admin
role
( roles/networksecurity.interceptDeploymentAdmin ) permissions:
networksecurity.interceptDeploymentGroups.create
networksecurity.interceptDeploymentGroups.delete
networksecurity.interceptDeploymentGroups.get
networksecurity.interceptDeploymentGroups.list
Create an intercept deployment group
An intercept deployment group is a global resource that holds a collection of
zonal intercept deployments.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.interceptDeploymentGroups.create
Roles
Intercept Deployment Admin role ( networksecurity.interceptDeploymentAdmin )
Console
In the Google Cloud console, go to the Deployment groups page.
Go to Deployment groups
Click Create deployment group .
For Name , enter a unique name of the deployment group.
For Network , select a VPC network. All
intercept deployments must reference internal passthrough Network Load Balancers
that use this network.
Click Create .
gcloud
To create an intercept deployment group, use the gcloud
network-security intercept-deployment-groups create
command :
gcloud network-security intercept-deployment-groups create DEPLOYMENT_GROUP_ID \
--location global \
--no-async \
--network NETWORK
Replace the following:
DEPLOYMENT_GROUP_ID : the ID of the intercept deployment group.
Don't include sensitive information, such as
personally identifiable information or security data, in the intercept
deployment group name. The intercept deployment group name is visible
to consumers that the producer explicitly granted access to.
NETWORK : the name of a VPC network. All intercept deployments must reference internal passthrough Network Load Balancers that use this network.
Terraform
To create an intercept deployment group, you can use a google_network_security_intercept_deployment_group resource .
resource "google_network_security_intercept_deployment_group" "default" {
intercept_deployment_group_id = "intercept-deployment-group"
location = "global"
network = google_compute_network.default.id
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
View details of an intercept deployment group
You can view the details of an intercept deployment group, such as its name and
the network.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.interceptDeploymentGroups.get
Roles
Intercept Deployment Admin role ( networksecurity.interceptDeploymentAdmin )
Intercept Deployment Viewer role ( networksecurity.interceptDeploymentViewer )
Console
In the Google Cloud console, go to the Deployment groups page.
Go to Deployment groups
Click the deployment group.
gcloud
To view the details of an intercept deployment group, use the gcloud
network-security intercept-deployment-groups describe
command :
gcloud network-security intercept-deployment-groups describe DEPLOYMENT_GROUP_ID \
--location global
Replace DEPLOYMENT_GROUP_ID with the ID of the intercept deployment group.
In the output, the name of the intercept deployment group is displayed in
the projects/ PROJECT_ID /locations/global/interceptDeploymentGroups/ DEPLOYMENT_GROUP_ID
format.
List intercept deployment groups
You can list all intercept deployment groups in a project, including their IDs.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.interceptDeploymentGroups.list
Roles
Intercept Deployment Admin role ( networksecurity.interceptDeploymentAdmin )
Intercept Deployment Viewer role ( networksecurity.interceptDeploymentViewer )
Console
To see all the intercept deployment groups of the project, complete the
following step:
In the Google Cloud console, go to the Deployment groups page.
Go to Deployment groups
To list the intercept deployment groups, click filter_list Filter .
From the Properties list, select Purpose and then for
Value , select NSI In-band .
gcloud
To list all intercept deployment groups of the project,
use the gcloud network-security intercept-deployment-groups list
command :
gcloud network-security intercept-deployment-groups list
Delete an intercept deployment group
Before you delete an intercept deployment group, delete intercept
deployments
that reference the intercept deployment group.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.interceptDeploymentGroups.delete
Roles
Intercept Deployment Admin role ( networksecurity.interceptDeploymentAdmin )
Console
In the Google Cloud console, go to the Deployment groups page.
Go to Deployment groups
Select the checkbox of the deployment group and click Delete .
Click Delete again to confirm.
gcloud
To delete an intercept deployment group, use the gcloud
network-security intercept-deployment-groups delete
command :
gcloud network-security intercept-deployment-groups delete DEPLOYMENT_GROUP_ID \
--no-async \
--location global
Replace DEPLOYMENT_GROUP_ID with the ID of the intercept deployment group.
What's next
Intercept deployments overview
Create and manage intercept deployments
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
