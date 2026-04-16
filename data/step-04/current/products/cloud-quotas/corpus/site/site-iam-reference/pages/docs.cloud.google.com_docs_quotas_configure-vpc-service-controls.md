---
title: "Configure VPC Service Controls for Cloud Quotas \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/configure-vpc-service-controls
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/permissions
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/configure-vpc-service-controls
  title: "Configure VPC Service Controls for Cloud Quotas \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Guides
Send feedback
Configure VPC Service Controls for Cloud Quotas
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud Virtual Private Cloud (VPC) Service Controls lets you set up a
secure perimeter to guard against data exfiltration. Configure
Cloud Quotas with
VPC Service Controls so that API
requests to Cloud Quotas stay within the VPC
service perimeter boundary.
Limitations
Because VPC Service Controls enforces boundaries at the project level,
Cloud Quotas requests that originate from clients within the
perimeter can only access organization resources if the organization sets up an
egress rule .
To set up an egress rule, see the VPC Service Controls instructions for
configuring ingress and egress policies
Enforced actions
VPC Service Controls is only enforced on the following
Cloud Quotas actions:
Quota preference creation,
update, get and list.
Quota info get and list.
For examples of setting
QuotaPreference and
QuotaInfo , see the description of
the API resource model .
For reference information, see the
REST API overview .
Set up
Follow these steps to restrict the Cloud Quotas API to your
VPC service perimeter:
Follow the instructions to set up the Cloud Quotas API .
Follow the VPC Service Controls Quickstart
to complete the following tasks:
Create a service perimeter .
Add projects to the perimeter that you want to protect.
Restrict the Cloud Quotas API. For example, see these instructions that
add other Google Cloud APIs to the VPC service
perimeter .
After setting up your service perimeter, VPC Service Controls checks calls
to the Cloud Quotas API to help make sure that the calls originate
from within the same perimeter.
What's next
Learn about VPC Service Controls .
See the Cloud Quotas entry in the
VPC Service Controls supported products table .
Refer to the description of the Cloud Quotas
API resource model for examples.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
