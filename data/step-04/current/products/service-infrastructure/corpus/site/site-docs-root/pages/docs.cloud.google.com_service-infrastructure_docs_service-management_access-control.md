---
title: "Service Management API Access Control \_|\_ Service Infrastructure \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control
  title: "Service Management API Access Control \_|\_ Service Infrastructure \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Guides
Send feedback
Service Management API Access Control
Stay organized with collections
Save and categorize content based on your preferences.
The Service Management API uses Identity and Access Management (Cloud IAM) to control
access to managed services and their child resources. This page explains the
IAM resources, roles, and permissions provided by the Service Management
API, and how to use them to control access.
IAM resources
IAM applies IAM policies on resources to control who can perform
what actions on the resources. The Service Management API uses the following
resources to provide its functionality:
Service Producer
Managed Services
Service Configurations
Service Rollouts
Service Consumers
You will need different permissions to use and manage different resources,
see the following sections for details.
IAM permissions
Calls to the Service Management API require the caller to have the necessary
IAM permissions on the target resources.
The following table lists the permissions that apply to services:
Permission
Description
servicemanagement.services.delete
Delete services.
servicemanagement.services.get
Read services.
servicemanagement.services.create
Create new services in projects.
servicemanagement.services.list
List services in projects.
servicemanagement.services.update
Update services.
servicemanagement.services.bind
View and enable the service on projects the caller controls.
servicemanagement.services.setIamPolicy
Set IAM access policy for services.
servicemanagement.services.getIamPolicy
Read IAM access policy for services.
servicemanagement.services.check
Check service consumer status. See
services.check
servicemanagement.services.quota
Allocate quota for a service consumer. See
services.allocateQuota
servicemanagement.services.report
Report service usage. See
services.report
The following table shows the required permissions for each
Service Management API method, where applicable. This information is also
documented in the
API Reference :
Method
Required Permission(s)
services.delete
servicemanagement.services.delete on the specified service_name .
services.get
servicemanagement.services.get on the specified service_name .
services.getConfig
servicemanagement.services.get on the specified service_name .
services.undelete
servicemanagement.services.delete on the specified service_name .
services.configs.create
servicemanagement.services.update on the specified service_name .
services.configs.get
servicemanagement.services.get on the specified service_name .
services.configs.list
servicemanagement.services.get on the specified service_name .
services.configs.submit
servicemanagement.services.update on the specified service_name .
services.rollouts.create
servicemanagement.services.update on the specified service_name .
services.rollouts.get
servicemanagement.services.get on the specified service_name .
services.rollouts.list
servicemanagement.services.get on the specified service_name .
IAM roles
With Identity and Access Management, permissions are granted by binding users to roles. See
Understanding Roles for details.
The following table lists the roles that apply to services:
Role
Permissions
roles/viewer
servicemanagement.services.get
servicemanagement.services.list
roles/editor
All permissions of roles/viewer , plus
servicemanagement.services.bind
servicemanagement.services.check
servicemanagement.services.create
servicemanagement.services.delete
servicemanagement.services.quota
servicemanagement.services.report
servicemanagement.services.update
roles/owner
All permissions of roles/editor , plus
servicemanagement.services.getIamPolicy
servicemanagement.services.setIamPolicy
roles/servicemanagement.admin
monitoring.timeSeries.list
resourcemanager.folders.get
resourcemanager.folders.list
resourcemanager.organizations.get
resourcemanager.projects.get
resourcemanager.projects.list
serviceconsumermanagement.consumers.get
serviceconsumermanagement.quota.get
serviceconsumermanagement.quota.update
serviceconsumermanagement.tenancyu.addResource
serviceconsumermanagement.tenancyu.create
serviceconsumermanagement.tenancyu.delete
serviceconsumermanagement.tenancyu.list
serviceconsumermanagement.tenancyu.removeResource
servicemanagement.services.bind
servicemanagement.services.check
servicemanagement.services.create
servicemanagement.services.delete
servicemanagement.services.get
servicemanagement.services.getIamPolicy
servicemanagement.services.list
servicemanagement.services.quota
servicemanagement.services.report
servicemanagement.services.setIamPolicy
servicemanagement.services.update
serviceusage.quotas.get
serviceusage.services.get
roles/servicemanagement.configEditor
servicemanagement.services.get
servicemanagement.services.update
roles/servicemanagement.reporter
servicemanagement.services.report
roles/servicemanagement.serviceConsumer
servicemanagement.services.bind
roles/servicemanagement.serviceController
servicemanagement.services.check
servicemanagement.services.get
servicemanagement.services.quota
servicemanagement.services.report
Managing policies
IAM evaluates policies hierarchically: a
child resource always inherits the policy of its parent. For
the Service Management API, each managed service is a child resource of
its service producer project. Therefore the roles granted on the service
producer project apply to all managed services that belong to the project. See
Managing Policies
for the instructions for granting roles at the project level.
You can also manage the IAM policy for an individual service. The following
sections describe how to manage service-level roles using Google Cloud console,
Service Management API, and Google Cloud CLI.
Managing access using Google Cloud console
Open the Endpoints page in the Google Cloud console.
Open the Endpoints page
Click the service that you want to manage access for.
Click the "PERMISSIONS" link at the top of the page. This toggles
the info panel on and off.
From the info panel, you can view the list of current members, add new
members, and remove members, for any service-level role.
Managing access using gcloud CLI
gcloud CLI includes
gcloud endpoints services
commands to manage IAM policies for managed services:
endpoints services get-iam-policy
Show the IAM policy of the service.
endpoints services check-iam-policy
Check the IAM policy of the service.
endpoints services add-iam-policy-binding
Add a member to a role.
endpoints services remove-iam-policy-binding
Remove a member from a role.
For example:
# Show the IAM policy of service "endpointsapis.appspot.com" .
gcloud endpoints services get - iam - policy endpointsapis . appspot . com
# The above command may produce an output similar to this :
bindings :
- members :
- user : email1 @gmail . com
- group : group1 @googlegroups . com
role : roles / servicemanagement . serviceConsumer
# Add a user to "roles/servicemanagement.serviceConsumer" role .
gcloud endpoints services add - iam - policy - binding endpointsapis . appspot . com --member "user:email1@gmail.com" --role "roles/servicemanagement.serviceConsumer"
# Add a group to "roles/servicemanagement.serviceConsumer" role .
gcloud endpoints services add - iam - policy - binding endpointsapis . appspot . com --member "group:group1@googlegroups.com" --role "roles/servicemanagement.serviceConsumer"
# Remove a user from "roles/servicemanagement.serviceConsumer" role .
gcloud endpoints services remove - iam - policy - binding endpointsapis . appspot . com --member "user:email1@gmail.com" --role "roles/servicemanagement.serviceConsumer"
# Remove a group from "roles/servicemanagement.serviceConsumer" role .
gcloud endpoints services remove - iam - policy - binding endpointsapis . appspot . com --member "group:group1@googlegroups.com" --role "roles/servicemanagement.serviceConsumer"
Managing access using the Service Management API
The Service Management API includes the
IAM Policy API
for managing service-level and consumer-level policies. You can use the gcurl
command to experiment with the API methods.
See Getting Started for the initial setup steps.
For example:
# View the current IAM policy on service "endpointsapis.appspot.com".
gcurl -d '{}' https://servicemanagement.googleapis.com/v1/services/endpointsapis.appspot.com:getIamPolicy
# View the current IAM policy on service "endpointsapis.appspot.com" and consumer "12345".
gcurl -d '{}' https://servicemanagement.googleapis.com/v1/services/endpointsapis.appspot.com/consumers/12345:getIamPolicy
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
