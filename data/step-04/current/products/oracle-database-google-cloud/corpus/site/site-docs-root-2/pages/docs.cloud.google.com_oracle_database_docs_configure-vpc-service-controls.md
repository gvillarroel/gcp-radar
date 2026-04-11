---
title: "Configure VPC Service Controls \_|\_ Oracle Database at Google Cloud \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/configure-vpc-service-controls
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/configure-vpc-service-controls
  title: "Configure VPC Service Controls \_|\_ Oracle Database at Google Cloud \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Guides
Send feedback
Configure VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how you can use VPC Service Controls to secure
Oracle Database@Google Cloud resources. VPC Service Controls let you create a service
perimeter that protects the resources and data of the services that you specify.
Using VPC Service Controls provides the following advantages:
Protecting against the risk of data exfiltration
Preventing data leakage by restricting access to resources, except those
specifically allowed in the ingress and egress rules
Providing an extra layer of security against misconfigured Identity and Access Management (IAM)
policies
For more information about VPC Service Controls, its security benefits, and
its capabilities, see
Overview of VPC Service Controls .
Before you begin
Set up your Oracle Database@Google Cloud environment .
Grant the IAM roles and permissions
required to create service perimeters.
Create an access policy ,
if you don't already have one.
Enable the Compute Engine API.
Enable the Compute Engine API
Enable the Service Networking API.
Enable the Service Networking API
Review limitations
when you use VPC Service Controls with Oracle Database@Google Cloud.
Create a service perimeter
To create a service perimeter, follow the instructions in
Create a service perimeter .
Add Oracle Database@Google Cloud API to the perimeter
To mitigate the risk of your data being exfiltrated from Oracle Database@Google Cloud,
you must restrict the Oracle Database@Google Cloud API.
To add Oracle Database@Google Cloud as a restricted service through Google Cloud console,
see update a service perimeter .
Alternatively, you can use the gcloud access-context-manager perimeters update
command to restrict Oracle Database@Google Cloud. For reference information, see
access-context-manager perimeters update .
gcloud access-context-manager perimeters update PERIMETER_ID \
--policy= POLICY_ID \
--add-restricted-services=oracledatabase.googleapis.com
Replace the following:
PERIMETER_ID : the ID of the perimeter
POLICY_ID : the ID of the access policy
Test the perimeter
Test your VPC Service Controls perimeter before enforcing it. For more
information, see Dry run mode for service perimeters
and Using dry-run mode to test ingress or egress policies .
Update the perimeter
To add or remove resources, you can update a service perimeter .
Create access levels
Optionally, to permit external access to protected resources inside a perimeter,
you can use access levels. Access levels apply only to requests for protected
resources coming from outside the service perimeter. You can't use access levels
to give protected resources or VMs permission to access data and services outside
the perimeter.
See Allowing access to protected resources from outside a perimeter .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
