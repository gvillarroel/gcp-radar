---
title: "Approving Access Approval requests \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/approve-requests
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/approve-requests
  title: "Approving Access Approval requests \_|\_ Google Cloud Documentation"
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
Approving Access Approval requests
This document explains how to approve an Access Approval request.
Before you begin
Make sure that you understand the concepts in the
Overview page.
Grant the Access Approval Approver ( roles/accessapproval.approver )
IAM role on the project, folder, or
organization to the principal
who you want to be able to perform approvals. You can grant the
Access Approval Approver IAM role to either an
individual user , a service account , or a
Google group .
If you are using a custom signing key, you
must also grant the Cloud KMS CryptoKey Signer/Verifier
( roles/cloudkms.signerVerifier ) IAM role to the
Access Approval service account for your resource. If you are using a
Google-managed signing key, you don't need to provide any other permissions.
For information about granting an IAM role, see Grant
a single role .
Configure settings to receive notifications
You have the following options for receiving Access Approval requests:
Receive requests through email.
Receive requests through Pub/Sub.
You can choose both of these options by following the instructions in
Setting up email and Pub/Sub
notifications .
Approve Access Approval requests
After you have enrolled some users as approvers, those users receive all
access requests.
Console
To approve an Access Approval request using the
Google Cloud console, do the following:
To see all your pending approval requests, go to the
Access Approval page in the Google Cloud console.
Go to Access Approval
If you have opted to receive Access Approval requests through
email, you can also go to this page by clicking the link in the email
sent to you with the approval request.
Note: You can only see the pending Access Approval requests for
the hierarchy level you have selected. For example, if you have selected a
folder, you can only see the Access Approval requests made for
folder-level resources, not all projects within those folders.
To approve a request, click Approve .
You also have the option of dismissing the request. Dismissing the
request is optional because access continues to be denied even if you
don't dismiss the request.
If you don't approve the Google employee's access request within 14
days or before the request expires, the request is automatically
dismissed.
In the dialog box that opens, select the date and time when you want
the access to expire.
Note: Bulk approve option doesn't let you select the expiration
date and time.
Select Approve to approve access till the set expiration date and
time.
Optional: To validate the signature on a request after approving it,
follow the steps given in
Validate a request signature .
cURL
To approve an Access Approval request using cURL, do the following:
Take the approvalRequest name from the Pub/Sub message.
Make an API call to approve or dismiss that approvalRequest .
# HTTP POST request with empty body ( an effect of using -d '' )
# service-account-credential.json is attained by going to the
# IAM -> Service Accounts menu in the cloud console and creating
# a service account.
curl -H "$(oauth2l header --json service-account-credentials.json cloud-platform)" \
-d '' https://accessapproval.googleapis.com/v1/projects/<var>PROJECT_ID</var>/approvalRequests/<var>APPROVAL_REQUEST_ID</var>:approve
Note: This preceding example is a sample request using cURL. You can
approve an access request by appending :approve to a POST request to
the mentioned URI that contains a unique approvalRequestId .
You can reply to a request with one of the following options:
Action
Effect
Google access state
:approve
Approves the request.
Denied before approval, approved after approval.
:dismiss
Dismisses the request for approval. We recommend dismissing the access request instead of not taking any action. Dismissing the access request prompts the Google employee to follow up.
Denied before dismissal, denied after dismissal.
No action
Google employee access is still denied. Google employee needs to open a new request to access the resource after the requestedExpiration time passes.
Denied before no action, denied after expiration time.
After you approve the request, the request status changes to Approved . Any
Google employee with characteristics matching the approval scope can make an
access within the approved time frame. These matching characteristics include
the same justification, location, or desk location.
Access Approval doesn't provide any IAM role or any
new permission to the Google employee who requested access.
If you don't approve the Google employee's access request, access is denied to
the Google employee. Dismissing the request only removes it from your list of
pending requests. If you fail to dismiss an approval request, access continues
to be denied.
After enabling,
Access Transparency logs all
accesses to Customer Data that you approve.
Access to Google personnel is allowed until the approval expires or the
justification for access is no longer valid. For example, access expires if the
support case for which Google personnel requested access is closed.
What's next
Learn about the actions by Google personnel that are excluded from
Access Approval notifications .
Learn about the fields in an Access Approval request .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
