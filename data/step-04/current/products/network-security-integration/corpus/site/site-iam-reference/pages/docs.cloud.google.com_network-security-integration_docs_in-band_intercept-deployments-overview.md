---
title: "Intercept deployments overview \_|\_ Network Security Integration \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/in-band/intercept-deployments-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-endpoint-groups
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/in-band/intercept-deployments-overview
  title: "Intercept deployments overview \_|\_ Network Security Integration \_|\_\
    \ Google Cloud Documentation"
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
Intercept deployments overview
Stay organized with collections
Save and categorize content based on your preferences.
An intercept deployment is a zonal resource that references the
forwarding rule of an internal passthrough Network Load Balancer whose backends are packet
inspection VMs. The intercept deployment represents the producer's
inspection service offering for a zone.
For a complete overview of the service producer resources, see
Service
producer .
Specifications
Intercept deployments have the following specifications:
An intercept deployment is a zonal, per-project resource.
The name of an intercept deployment has the following format:
projects/ PROJECT_ID /locations/ ZONE /interceptDeployments/ DEPLOYMENT_ID
For example, the name for an intercept deployment with the ID
example-intercept-deployment in project example-project of zone
us-east1-a is
projects/example-project/locations/us-east1-a/interceptDeployments/example-intercept-deployment .
You can associate each intercept deployment with exactly one intercept
deployment group. The intercept deployment group can reference no more
than a single intercept deployment for each zone.
Identity and Access Management roles
The following table describes the Identity and Access Management (IAM) roles required
for managing the intercept deployments:
Management task
Necessary role
Create an intercept deployment
Intercept Deployment Admin role ( networksecurity.interceptDeploymentAdmin )
on the project where the intercept deployment is created.
Modify an existing intercept deployment
Intercept Deployment Admin role ( networksecurity.interceptDeploymentAdmin )
on the project where the intercept deployment is created.
View details about the intercept deployment in a project
Any of the following roles for the project:
Intercept Deployment Admin role ( networksecurity.interceptDeploymentAdmin )
Intercept Deployment Viewer role ( networksecurity.interceptDeploymentViewer )
View all the intercept deployments in your project
Any of the following roles for the project:
Intercept Deployment Admin role ( networksecurity.interceptDeploymentAdmin )
Intercept Deployment Viewer role ( networksecurity.interceptDeploymentViewer )
Delete an intercept deployment
Intercept Deployment Admin role ( networksecurity.interceptDeploymentAdmin )
on the project.
Quotas
To view quotas associated with intercept deployments, see
Quotas and limits .
What's next
Create and manage intercept deployments
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
