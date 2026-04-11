---
title: "Package access_approval (1.19.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval
  title: "Package access_approval (1.19.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package access_approval (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.19.0 (latest)
1.18.0
1.17.0
1.16.2
1.15.0
1.14.1
1.13.5
1.12.0
1.11.3
1.10.1
1.9.1
1.8.0
1.7.5
1.6.1
1.5.1
1.4.1
1.3.5
1.2.0
1.1.1
1.0.0
0.2.2
0.1.0
API documentation for accessapproval_v1.services.access_approval package.
Classes
AccessApprovalAsyncClient
This API allows a customer to manage accesses to cloud resources by
Google personnel. It defines the following resource model:
The API has a collection of
ApprovalRequest
resources, named approvalRequests/{approval_request}
The API has top-level settings per Project/Folder/Organization,
named accessApprovalSettings
The service also periodically emails a list of recipients, defined
at the Project/Folder/Organization level in the
accessApprovalSettings, when there is a pending ApprovalRequest for
them to act on. The ApprovalRequests can also optionally be
published to a Pub/Sub topic owned by the customer (contact support
if you would like to enable Pub/Sub notifications).
ApprovalRequests can be approved or dismissed. Google personnel can
only access the indicated resource or resources if the request is
approved (subject to some exclusions:
https://cloud.google.com/access-approval/docs/overview#exclusions ).
Note: Using Access Approval functionality will mean that Google may
not be able to meet the SLAs for your chosen products, as any
support response times may be dramatically increased. As such the
SLAs do not apply to any service disruption to the extent impacted
by Customer's use of Access Approval. Do not enable Access Approval
for projects where you may require high service availability and
rapid response by Google Cloud Support.
After a request is approved or dismissed, no further action may be
taken on it. Requests with the requested_expiration in the past or
with no activity for 14 days are considered dismissed. When an
approval expires, the request is considered dismissed.
If a request is not approved or dismissed, we call it pending.
AccessApprovalClient
This API allows a customer to manage accesses to cloud resources by
Google personnel. It defines the following resource model:
The API has a collection of
ApprovalRequest
resources, named approvalRequests/{approval_request}
The API has top-level settings per Project/Folder/Organization,
named accessApprovalSettings
The service also periodically emails a list of recipients, defined
at the Project/Folder/Organization level in the
accessApprovalSettings, when there is a pending ApprovalRequest for
them to act on. The ApprovalRequests can also optionally be
published to a Pub/Sub topic owned by the customer (contact support
if you would like to enable Pub/Sub notifications).
ApprovalRequests can be approved or dismissed. Google personnel can
only access the indicated resource or resources if the request is
approved (subject to some exclusions:
https://cloud.google.com/access-approval/docs/overview#exclusions ).
Note: Using Access Approval functionality will mean that Google may
not be able to meet the SLAs for your chosen products, as any
support response times may be dramatically increased. As such the
SLAs do not apply to any service disruption to the extent impacted
by Customer's use of Access Approval. Do not enable Access Approval
for projects where you may require high service availability and
rapid response by Google Cloud Support.
After a request is approved or dismissed, no further action may be
taken on it. Requests with the requested_expiration in the past or
with no activity for 14 days are considered dismissed. When an
approval expires, the request is considered dismissed.
If a request is not approved or dismissed, we call it pending.
Modules
pagers
API documentation for accessapproval_v1.services.access_approval.pagers module.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
