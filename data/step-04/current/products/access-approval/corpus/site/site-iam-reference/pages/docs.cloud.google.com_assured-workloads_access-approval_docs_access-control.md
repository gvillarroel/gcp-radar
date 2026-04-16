---
title: "Access control with IAM \_|\_ Access Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
  title: "Access control with IAM \_|\_ Access Approval \_|\_ Google Cloud Documentation"
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
Access control with IAM
This page describes the Identity and Access Management (IAM) roles required to use
Access Approval.
Required roles
The following sections mention the IAM roles and permissions
required to perform various actions with Access Approval. The sections
also provide instructions about granting the required roles.
View Access Approval requests and configuration
The following table lists the IAM permissions required to view
Access Approval requests and configuration:
Predefined IAM role
Required permissions and roles
roles/accessapproval.viewer
accessapproval.requests.get
accessapproval.requests.list
accessapproval.serviceAccounts.get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
To grant the Access Approval Viewer ( roles/accessapproval.viewer )
role, do the following:
Console
To grant this IAM role to yourself, do the following:
Go to the IAM page in the Google Cloud console.
Go to IAM
In the View by principals tab, click person_add Grant access .
In the New principals field in the right pane, enter your email
address.
Click the Select a role field, and select the
Access Approval Viewer role from the menu.
Click Save .
gcloud
Run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member='user: EMAIL_ID ' \
--role='roles/accessapproval.viewer'
Replace the following:
ORGANIZATION_ID : The organization ID.
EMAIL_ID : The email ID of the user.
For more information about the command, see gcloud organizations
add-iam-policy-binding .
View and approve an Access Approval request
The following table lists the IAM permissions required to view
and approve an Access Approval request:
Predefined IAM role
Required permissions and roles
roles/accessapproval.approver
accessapproval.requests.approve
accessapproval.requests.dismiss
accessapproval.requests.get
accessapproval.requests.invalidate
accessapproval.requests.list
accessapproval.serviceAccounts.get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
To grant the Access Approval Approver
( roles/accessapproval.approver ) role, do the following:
Console
To grant this IAM role to yourself, do the following:
Go to the IAM page in the Google Cloud console.
Go to IAM
In the View by principals tab, click person_add Grant access .
In the New principals field in the right pane, enter your email
address.
Click the Select a role field, and select the
Access Approval Approver role from the menu.
Click Save .
gcloud
Run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member='user: EMAIL_ID ' \
--role='roles/accessapproval.approver'
Replace the following:
ORGANIZATION_ID : The organization ID.
EMAIL_ID : The email ID of the user.
Update the Access Approval configuration
The following table lists the IAM permissions required to
update Access Approval configuration:
Predefined IAM role
Required permissions and roles
roles/accessapproval.configEditor
accessapproval.serviceAccounts.get
accessapproval.settings.delete
accessapproval.settings.get
accessapproval.settings.update
resourcemanager.projects.get
resourcemanager.projects.list
To grant the Access Approval Config Editor
( roles/accessapproval.configEditor ) role, do the following:
Console
To grant this IAM role to yourself, do the following:
Go to the IAM page in the Google Cloud console.
Go to IAM
In the View by principals tab, click person_add Grant access .
In the New principals field in the right pane, enter your email
address.
Click the Select a role field, and select the
Access Approval Config Editor role from the menu.
Click Save .
gcloud
Run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member='user: EMAIL_ID ' \
--role='roles/accessapproval.approver'
Replace the following:
ORGANIZATION_ID : The organization ID.
EMAIL_ID : The email ID of the user.
Invalidate existing Access Approval requests
The following table lists the IAM permissions required to
invalidate existing Access Approval requests that have been approved:
Predefined IAM role
Required permissions and roles
roles/accessapproval.invalidator
accessapproval.requests.get
accessapproval.requests.list
accessapproval.serviceAccounts.get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
To grant the Access Approval Invalidator
( roles/accessapproval.invalidator ) role, do the following:
Console
To grant this IAM role to yourself, do the following:
Go to the IAM page in the Google Cloud console.
Go to IAM
In the View by principals tab, click person_add Grant access .
In the New principals field in the right pane, enter your email
address.
Click the Select a role field, and select the
Access Approval Invalidator role from the menu.
Click Save .
gcloud
Run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member='user: EMAIL_ID ' \
--role='roles/accessapproval.invalidator'
Replace the following:
ORGANIZATION_ID : The organization ID.
EMAIL_ID : The email ID of the user.
What's next
Grant or revoke a single IAM role
Manage access to service accounts
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
