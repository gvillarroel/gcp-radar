---
title: "Viewing historical Access Approval requests \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests
  title: "Viewing historical Access Approval requests \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Approval
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Viewing historical Access Approval requests
This document explains how you can view all historical access requests for a
project. Access request logs are retained for a period of 400 days in accordance
with the
Cloud Logging retention period .
Before you begin
Ensure that you have set up Access Approval by following the
instructions in the Quickstart .
Ensure that you have the Access Approval Viewer
( roles/accessapproval.viewer ) Identity and Access Management (IAM) role. For
more information about IAM roles for
Access Approval, see Access Approval roles .
View historical access requests
Console
Go to the Access Approval page in the Google Cloud console.
Go to Access Approval
Click History .
A table appears that includes all approved, auto-approved, dismissed, and
expired requests.
Optional: If you want to see the details of any access request, click
Details in the Details & logs column.
Optional: If you want to view the Cloud Audit Logs or the Access Transparency logs, click
Logs .
Cloud Audit Logs provide information about the approval and dismissal actions
taken by members within your organization. For more information, see
Cloud Audit Logs overview .
Access Transparency logs provide information about the actions taken by Google
personnel when accessing Customer Data. For more information, see
Access Transparency overview .
You can also see historical approvals using the
Logs Explorer .
Go to Cloud Logging
If you enable Cloud Audit Logs in your Google Cloud project, you can
filter by the Audited Resource accessapproval.googleapis.com .
cURL
curl -H "$(oauth2l header --json service-account-credentials.json cloud-platform)" \
https://accessapproval.googleapis.com/v1/projects/ PROJECT_ID /approvalRequests?filter=ALL
By default, the API lists all unapproved, approved, auto-approved, and
non-expired requests. There is a filter parameter to do tasks such as
listing all dismissed requests. For more information, see
Access Approval API .
You receive a list of historical access approvals with their status.
{
"approvalRequests" : [
{
"name" : "projects/123456/approvalRequests/xyzabc123" ,
"requestedResourceName" : "projects/123456" ,
"requestedReason" : {
"detail" : "Case number: bar123"
"type" : "CUSTOMER_INITIATED_SUPPORT"
},
"requestedLocations" : {
"principalOfficeCountry" : "US" ,
"principalPhysicalLocationCountry" : "US"
},
"requestTime" : "2018-08-30T17:49:13.712Z" ,
"requestedExpiration" : "2018-09-04T17:49:13.540Z" ,
"approve" : {
"approveTime" : "2018-08-30T17:49:15.737Z" ,
"expireTime" : "2018-09-04T17:49:13.540Z"
}
}
]
}
What's next
Learn more about the anatomy of an approval request .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
