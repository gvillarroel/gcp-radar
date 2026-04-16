---
title: "Introduction to organization restrictions \_|\_ Resource Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview
  title: "Introduction to organization restrictions \_|\_ Resource Manager \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Introduction to organization restrictions
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of organization restrictions and how it works.
The organization restrictions feature lets you prevent data exfiltration
through phishing or insider attacks. For managed devices in an organization, the organization restrictions
feature restricts access only to resources in authorized Google Cloud organizations.
How organization restrictions works
In Google Cloud, Identity and Access Management (IAM) governs access to resources.
Administrators use allow and deny policies to control who can access the
resources within their organization. There is a need in organizations to
restrict access of their employees only to resources in authorized Google Cloud
organizations. Google Cloud administrators who administer Google Cloud, and
egress proxy administrators, who configure the egress proxy, engage together to
set up organization restrictions.
The following diagram illustrates how the different components work to enforce organization restrictions:
The architecture diagram shows the following components:
Managed device : A device that is governed by the organization policies of
a company. Employees of an organization use a managed device to access the organization
resources.
Egress proxy : An egress proxy administrator configures
the proxy to add organization restrictions headers to any requests originating
from a managed device. This proxy configuration prevents
users from accessing any Google Cloud resources in non-authorized Google Cloud organizations.
Google Cloud : The organization restrictions feature in Google Cloud inspects all requests
for organization restrictions header, and allows or denies the requests based on
the organization being accessed.
Common use cases
Here are some common organization restrictions use cases:
Restrict access to employees in your organization so that employees can
access resources only in your Google Cloud organization
and not other organizations.
Allow your employees to read from Cloud Storage resources
but restrict employee access only to resources in your Google Cloud organization.
Allow your employees to access a vendor Google Cloud organization in addition
to your Google Cloud organization.
Implementing these use cases require engagement between Google Cloud administrators,
who administer Google Cloud, and egress proxy administrators who configure the egress proxy.
What's next
Learn about organization restrictions configuration .
Learn about the services supported by organization restrictions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
