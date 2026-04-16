---
title: "VPC Service Controls for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control
  title: "VPC Service Controls for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
VPC Service Controls for API hub
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
This page provides an overview of using VPC Service Controls for API hub, covering service perimeter configuration, perimeter verification, and known limitations.
VPC Service Controls for API hub
API hub integrates with VPC Service Controls to provide enhanced network security for your API hub instance provisioned in Google Cloud.
VPC Service Controls enables you to establish a service perimeter around your API hub resources, constraining ingress and egress traffic. This perimeter helps to:
Limit unauthorised access: Control which Google Cloud services and VPC networks can access your API hub resources.
Prevent data exfiltration: Mitigate the risk of unauthorized download or export of API definitions, metadata, and other sensitive data stored within API hub.
Meet compliance requirements: Support your organization's compliance and regulatory obligations by enforcing strict access controls.
For more information about VPC Service Controls, see the Overview of VPC Service Controls .
Before you begin
Read about configuring service perimeters .
Read about management of VPC networks in service perimeters .
Ensure that you have the required IAM role permissions to configure service perimeters. See VPC Service Controls access control with IAM .
Configure VPC Service Controls for API hub
To configure VPC Service Controls, you can use the Google Cloud console, the gcloud tool, or the Access Context Manager APIs . Perform the following steps:
Create an access policy for API hub. For more information, see Create an access policy .
Create a service perimeter that includes the API hub ( apihub.googleapis.com ) service. For more information, see Create a service perimeter .
For information about the other optional VPC Service Controls configurations, see Service perimeter configuration stages .
Verify service perimeters
Verify and list the service perimeters created for API hub using the following gcloud command:
gcloud access-context-manager perimeters describe PERIMETER_NAME .
For more information about managing service perimeters, see Managing service perimeters .
Limitations
All Apigee runtime projects associated with an API hub instance must reside within the same VPC Service Controls service perimeter as the API hub host project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
