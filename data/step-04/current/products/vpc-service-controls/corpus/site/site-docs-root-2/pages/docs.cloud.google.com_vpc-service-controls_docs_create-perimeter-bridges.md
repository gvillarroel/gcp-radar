---
title: "Creating a perimeter bridge \_|\_ VPC Service Controls \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/create-perimeter-bridges
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/create-perimeter-bridges
  title: "Creating a perimeter bridge \_|\_ VPC Service Controls \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Creating a perimeter bridge
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create service perimeter bridges.
Before you begin
Read Overview of VPC Service Controls
Read Service Perimeter Configuration
Read Sharing across perimeters with bridges
Create a perimeter bridge
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
If you are prompted, select your organization.
On the VPC Service Controls page, click New perimeter .
On the Create a service perimeter page, in the Title field,
enter a name for the perimeter.
You can search for a perimeter only using its name, so we recommend
using a unique name for the perimeter. You can't search for a perimeter
using its ID.
Optional: In the Description field, enter a description for the perimeter.
For Perimeter type , select Bridge .
For Enforcement mode , select a perimeter enforcement mode. The available
options are Dry run and Enforced .
For more information about the dry run and enforced modes, see Service perimeter
details and configuration .
Click Continue .
Select the projects that you want to secure within the perimeter:
Click Add projects .
In the Add projects pane, in each row corresponding to a
project that you want to add to the perimeter, select the checkbox.
Click Add selected projects .
Click Create .
gcloud
To create a perimeter bridge, use the following command:
gcloud access-context-manager perimeters create BRIDGE_NAME \
--title=" BRIDGE_TITLE " --perimeter-type=bridge \
--resources= PROJECTS \
--policy= POLICY_NAME
Where:
BRIDGE_NAME is the name of the perimeter bridge you are
creating.
BRIDGE_TITLE is the title of the bridge.
PROJECTS is a comma-delimited list of one or more project IDs.
For example: projects/100712 or
projects/100712,projects/233130 . Only numeric IDs are supported. You
cannot use the project name.
POLICY_NAME is the numeric name of your organization's access
policy. For example, 330193482019 .
API
To create a perimeter bridge, call accessPolicies.servicePerimeters.create .
POST https://accesscontextmanager.googleapis.com/v1/accessPolicies/ POLICY_NAME /servicePerimeters
Where:
POLICY_NAME is the numeric name of your organization's access
policy. For example, 330193482019 .
Request body
The request body must include a ServicePerimeter
resource that defines the perimeter bridge.
For the ServicePerimeter resource, specify PERIMETER_TYPE_BRIDGE for
perimeterType .
Response body
If successful, the response body for the call contains an
Operation resource that provides details about the
POST operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
