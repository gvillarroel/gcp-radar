---
title: "Identity and access management overview for SAP on Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/security-for-sap/iam-for-sap
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/security-for-sap/iam-for-sap
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/security-for-sap/iam-for-sap
  title: "Identity and access management overview for SAP on Google Cloud \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
SAP on Google Cloud
Guides
Send feedback
Identity and access management overview for SAP on Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
Understanding how access management works on Google Cloud is
key to making the following decisions as you plan your SAP implementation:
How to organize your resources on Google Cloud.
Which team members can access and work with resources.
Exactly which permissions each team member needs to have to conform to the
least privileges
principle for resource access.
Which services and applications need to use which service accounts, and what
level of permissions to grant in each case.
Important: Google Cloud recommends that you follow the best practices for
enterprise-grade access control provided in
Verify every access attempt explicitly
in the Google Cloud Well-Architected Framework.
For a high-level overview of authentication on Google Cloud, see
Authentication overview .
Resource hierarchy and inheritance
The Cloud Platform Resource Hierarchy defines the various resource containers on Google Cloud,
how they relate to each other, and what the access scopes are.
Access control policies applied to a parent resource,
such as an organization or project,
are inherited by the children of that resource, such as the
Compute Engine virtual machines or Cloud Storage buckets in
the organization or project.
Identity and Access Management
Identity and Access Management (IAM) provides unified control over
permissions for Google Cloud resources. You can manage access control
by defining who has what access to resources. For example, you can control
who can perform control-plane operations on your SAP instances, such as
creating and modifying VMs, persistent disks, and networking.
IAM service accounts provide a way for you to give permissions to
applications and services. It's important to understand how service accounts
work in Compute Engine. For details, see
Service Accounts .
IAM roles grant permissions to users. For a
reference about roles and which permissions they provide, see
Identity and Access Management Roles .
For more details about IAM, see the
Overview of IAM .
Resource-specific IAM information
For each resource that your SAP systems use, such as a Compute Engine
resource, you need understand how IAM implements
authentication and access management for the resource and
what predefined roles IAM provides for the resource.
For information about how some resources that are
commonly used by SAP systems implement IAM, see:
BigQuery predefined roles and permissions
Compute Engine access control options
Cloud Logging access control guide
Cloud Monitoring access control
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
