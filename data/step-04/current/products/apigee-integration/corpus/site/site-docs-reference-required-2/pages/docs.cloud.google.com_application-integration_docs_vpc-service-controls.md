---
title: "Set up VPC Service Controls for Application Integration \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/application-integration/docs/vpc-service-controls
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/vpc-service-controls
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/vpc-service-controls
  title: "Set up VPC Service Controls for Application Integration \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up VPC Service Controls for Application Integration
VPC Service Controls lets you define a security perimeter around
the Application Integration Google Cloud service. With the security
perimeter around your service, you can constrain data within a VPC and
mitigate data exfiltration risks. If you are not already familiar
with VPC Service Controls, it is recommended that you go
through the following information:
Overview of VPC Service Controls
Service perimeter details and configuration
Grant access to VPC Service Controls
This document describes how to set up a VPC Service Controls perimeter for the
Application Integration service. After you have set up the perimeter,
you can configure egress and ingress policies that determine what other
Google Cloud services can access the Application Integration service (integrations.googleapis.com) and
conversely what services the Application Integration service can access.
Before you begin
Ensure that you have the required permissions to configure service perimeters.
To view a list of IAM roles required to configure VPC Service Controls,
see Access control with IAM in the
VPC Service Controls documentation.
Create a VPC service perimeter
To create a VPC service perimeter you can use either the Google Cloud console ,
or the gcloud command, or the accessPolicies.servicePerimeters.create API.
For more information, see Create a service perimeter .
To create a VPC Service Controls perimeter provide access to the user by using the gcloud commands, run the following command:
gcloud access-context-manager perimeters create \
--title= PERIMETER_TITLE \
--resources=projects/ PROJECT_ID \
--restricted-services=integrations.googleapis.com \
Replace the following:
PERIMETER_TITLE : the name of the VPC Service Controls perimeter
PROJECT_ID : the project for which you want to add the VPC Service Controls perimeter
The preceding command takes some time to complete.
The VPC Service Controls perimeter restricts integration services for your project when using the Application Integration services.
To allow any IP addresses, service accounts, or users to use Application Integration, use the ingress and egress rules . VPC Service Controls uses ingress and egress rules to allow access to and from the resources and clients protected by service perimeters.
Add egress policy to an existing service perimeter
To add an egress policy to an existing service perimeter,
use the gcloud access-context-manager
perimeters update command. For example, the following command adds an egress policy defined
in the vpcsc-egress.yaml file to an existing service perimeter named integrationPerimeter :
gcloud access-context-manager perimeters update integrationPerimeter
--set-egress-policies = vpcsc-egress.yaml
Similar to an egress policy, you can also define an ingress policy. To learn more about
specifying ingress rules, see Ingress rules reference .
Verify your perimeter
To verify the perimeter, use the gcloud access-context-manager perimeters describe PERIMETER_NAME
command. For example, the following command describes the integrationPerimeter perimeter:
gcloud access-context-manager perimeters describe integrationPerimeter
For more information about managing service perimeters,
see Managing service perimeters .
Considerations
If you have enabled VPC service perimeter for the Application Integration service, you
will not be able to use the following tasks in your integrations:
Apps Script task
Call REST Endpoint task
Cloud function task
Send email task
What's next
Learn how VPC Service Controls protects your data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
