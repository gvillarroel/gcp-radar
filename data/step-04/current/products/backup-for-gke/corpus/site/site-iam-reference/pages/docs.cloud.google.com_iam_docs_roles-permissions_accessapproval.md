---
title: "Access Approval roles and permissions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/gkebackup
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval
  title: "Access Approval roles and permissions \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Reference
Send feedback
Access Approval roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Access Approval. To
search through all roles and permissions, see the role and
permission index .
Access Approval roles
Role
Permissions
Accessapproval Admin
( roles/ accessapproval.admin )
Admin role for accessapproval
accessapproval.*
accessapproval. requests. approve
accessapproval. requests. dismiss
accessapproval.requests.get
accessapproval. requests. invalidate
accessapproval.requests.list
accessapproval. serviceAccounts. get
accessapproval.settings.delete
accessapproval.settings.get
accessapproval.settings.update
resourcemanager.projects.get
resourcemanager.projects.list
Access Approval Approver
( roles/ accessapproval.approver )
Ability to view or act on access approval requests and view configuration.
accessapproval.requests.*
accessapproval. requests. approve
accessapproval. requests. dismiss
accessapproval.requests.get
accessapproval. requests. invalidate
accessapproval.requests.list
accessapproval. serviceAccounts. get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
Access Approval Config Editor
( roles/ accessapproval.configEditor )
Ability to update the Access Approval configuration
accessapproval. serviceAccounts. get
accessapproval.settings.*
accessapproval.settings.delete
accessapproval.settings.get
accessapproval.settings.update
resourcemanager.projects.get
resourcemanager.projects.list
Accessapproval Editor
( roles/ accessapproval.editor )
Editor role for accessapproval
accessapproval.requests.get
accessapproval.requests.list
accessapproval. serviceAccounts. get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
Access Approval Invalidator
( roles/ accessapproval.invalidator )
Ability to invalidate existing approved approval requests
accessapproval. requests. invalidate
accessapproval. serviceAccounts. get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
Access Approval Viewer
( roles/ accessapproval.viewer )
Ability to view access approval requests and configuration
accessapproval.requests.get
accessapproval.requests.list
accessapproval. serviceAccounts. get
accessapproval.settings.get
resourcemanager.projects.get
resourcemanager.projects.list
Access Approval permissions
Permission
Included in roles
accessapproval. requests. approve
Owner ( roles/ owner )
Accessapproval Admin ( roles/ accessapproval.admin )
Access Approval Approver ( roles/ accessapproval.approver )
accessapproval. requests. dismiss
Owner ( roles/ owner )
Accessapproval Admin ( roles/ accessapproval.admin )
Access Approval Approver ( roles/ accessapproval.approver )
accessapproval.requests.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Accessapproval Admin ( roles/ accessapproval.admin )
Access Approval Approver ( roles/ accessapproval.approver )
Accessapproval Editor ( roles/ accessapproval.editor )
Access Approval Viewer ( roles/ accessapproval.viewer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Controls Partner Access Approval Service Agent ( roles/ cloudcontrolspartner.accessApprovalServiceAgent )
accessapproval. requests. invalidate
Owner ( roles/ owner )
Accessapproval Admin ( roles/ accessapproval.admin )
Access Approval Approver ( roles/ accessapproval.approver )
Access Approval Invalidator ( roles/ accessapproval.invalidator )
accessapproval.requests.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Accessapproval Admin ( roles/ accessapproval.admin )
Access Approval Approver ( roles/ accessapproval.approver )
Accessapproval Editor ( roles/ accessapproval.editor )
Access Approval Viewer ( roles/ accessapproval.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Security Reviewer ( roles/ iam.securityReviewer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Controls Partner Access Approval Service Agent ( roles/ cloudcontrolspartner.accessApprovalServiceAgent )
accessapproval. serviceAccounts. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Accessapproval Admin ( roles/ accessapproval.admin )
Access Approval Approver ( roles/ accessapproval.approver )
Access Approval Config Editor ( roles/ accessapproval.configEditor )
Accessapproval Editor ( roles/ accessapproval.editor )
Access Approval Invalidator ( roles/ accessapproval.invalidator )
Access Approval Viewer ( roles/ accessapproval.viewer )
Support User ( roles/ iam.supportUser )
accessapproval.settings.delete
Owner ( roles/ owner )
Accessapproval Admin ( roles/ accessapproval.admin )
Access Approval Config Editor ( roles/ accessapproval.configEditor )
accessapproval.settings.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Accessapproval Admin ( roles/ accessapproval.admin )
Access Approval Approver ( roles/ accessapproval.approver )
Access Approval Config Editor ( roles/ accessapproval.configEditor )
Accessapproval Editor ( roles/ accessapproval.editor )
Access Approval Invalidator ( roles/ accessapproval.invalidator )
Access Approval Viewer ( roles/ accessapproval.viewer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Security Compliance Service Agent ( roles/ cloudsecuritycompliance.serviceAgent )
Audit Manager Auditing Service Agent ( roles/ auditmanager.serviceAgent )
accessapproval.settings.update
Owner ( roles/ owner )
Accessapproval Admin ( roles/ accessapproval.admin )
Access Approval Config Editor ( roles/ accessapproval.configEditor )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
