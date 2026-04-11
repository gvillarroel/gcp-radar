---
title: "Cloud Tasks roles and permissions \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudtasks
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudtasks
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudtasks
  title: "Cloud Tasks roles and permissions \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
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
Cloud Tasks roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Cloud Tasks. To
search through all roles and permissions, see the role and
permission index .
Cloud Tasks roles
Role
Permissions
Cloud Tasks Admin
Beta
( roles/ cloudtasks.admin )
Full access to queues and tasks.
cloudtasks.*
cloudtasks.cmekConfig.get
cloudtasks.cmekConfig.update
cloudtasks.locations.get
cloudtasks.locations.list
cloudtasks.queues.create
cloudtasks.queues.delete
cloudtasks.queues.get
cloudtasks.queues.getIamPolicy
cloudtasks.queues.list
cloudtasks.queues.pause
cloudtasks.queues.purge
cloudtasks.queues.resume
cloudtasks.queues.setIamPolicy
cloudtasks.queues.update
cloudtasks.tasks.create
cloudtasks.tasks.delete
cloudtasks.tasks.fullView
cloudtasks.tasks.get
cloudtasks.tasks.list
cloudtasks.tasks.run
monitoring.timeSeries.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloudtasks Editor
Beta
( roles/ cloudtasks.editor )
Editor role for cloudtasks
cloudtasks.cmekConfig.get
cloudtasks.locations.*
cloudtasks.locations.get
cloudtasks.locations.list
cloudtasks.queues.create
cloudtasks.queues.delete
cloudtasks.queues.get
cloudtasks.queues.list
cloudtasks.queues.pause
cloudtasks.queues.purge
cloudtasks.queues.resume
cloudtasks.queues.update
cloudtasks.tasks.*
cloudtasks.tasks.create
cloudtasks.tasks.delete
cloudtasks.tasks.fullView
cloudtasks.tasks.get
cloudtasks.tasks.list
cloudtasks.tasks.run
monitoring.timeSeries.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud Tasks Viewer
Beta
( roles/ cloudtasks.viewer )
Get and list access to tasks, queues, and locations.
cloudtasks.cmekConfig.get
cloudtasks.locations.*
cloudtasks.locations.get
cloudtasks.locations.list
cloudtasks.queues.get
cloudtasks.queues.list
cloudtasks.tasks.fullView
cloudtasks.tasks.get
cloudtasks.tasks.list
monitoring.timeSeries.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud Tasks Enqueuer
Beta
( roles/ cloudtasks.enqueuer )
Access to create tasks.
cloudtasks.tasks.create
cloudtasks.tasks.fullView
resourcemanager.projects.get
resourcemanager.projects.list
Cloud Tasks Queue Admin
Beta
( roles/ cloudtasks.queueAdmin )
Admin access to queues.
cloudtasks.locations.*
cloudtasks.locations.get
cloudtasks.locations.list
cloudtasks.queues.*
cloudtasks.queues.create
cloudtasks.queues.delete
cloudtasks.queues.get
cloudtasks.queues.getIamPolicy
cloudtasks.queues.list
cloudtasks.queues.pause
cloudtasks.queues.purge
cloudtasks.queues.resume
cloudtasks.queues.setIamPolicy
cloudtasks.queues.update
resourcemanager.projects.get
resourcemanager.projects.list
Cloud Tasks Task Deleter
Beta
( roles/ cloudtasks.taskDeleter )
Access to delete tasks.
cloudtasks.tasks.delete
resourcemanager.projects.get
resourcemanager.projects.list
Cloud Tasks Task Runner
Beta
( roles/ cloudtasks.taskRunner )
Access to run tasks.
cloudtasks.tasks.fullView
cloudtasks.tasks.run
resourcemanager.projects.get
resourcemanager.projects.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Cloud Tasks Service Agent
( roles/ cloudtasks.serviceAgent )
Grants Cloud Tasks Service Account access to manage resources.
Warning: Do not grant service agent roles to any principals except
service agents .
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
logging.logEntries.create
Cloud Tasks permissions
Permission
Included in roles
cloudtasks.cmekConfig.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Viewer ( roles/ cloudtasks.viewer )
Support User ( roles/ iam.supportUser )
cloudtasks.cmekConfig.update
Owner ( roles/ owner )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
cloudtasks.locations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Viewer ( roles/ cloudtasks.viewer )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.locations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Viewer ( roles/ cloudtasks.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Viewer ( roles/ cloudtasks.viewer )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.getIamPolicy
Owner ( roles/ owner )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Viewer ( roles/ cloudtasks.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.pause
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.purge
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.resume
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.setIamPolicy
Owner ( roles/ owner )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Security Admin ( roles/ iam.securityAdmin )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.queues.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Queue Admin ( roles/ cloudtasks.queueAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.tasks.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Enqueuer ( roles/ cloudtasks.enqueuer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.tasks.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Task Deleter ( roles/ cloudtasks.taskDeleter )
cloudtasks.tasks.fullView
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Viewer ( roles/ cloudtasks.viewer )
Cloud Tasks Enqueuer ( roles/ cloudtasks.enqueuer )
Cloud Tasks Task Runner ( roles/ cloudtasks.taskRunner )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Firebase Extensions API Service Agent ( roles/ firebasemods.serviceAgent )
cloudtasks.tasks.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Viewer ( roles/ cloudtasks.viewer )
Support User ( roles/ iam.supportUser )
cloudtasks.tasks.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Viewer ( roles/ cloudtasks.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
cloudtasks.tasks.run
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Tasks Admin ( roles/ cloudtasks.admin )
Cloudtasks Editor ( roles/ cloudtasks.editor )
Cloud Tasks Task Runner ( roles/ cloudtasks.taskRunner )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
