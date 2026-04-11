---
title: "Storage Transfer Service roles and permissions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer
  title: "Storage Transfer Service roles and permissions \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
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
Storage Transfer Service roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Storage Transfer Service. To
search through all roles and permissions, see the role and
permission index .
Storage Transfer Service roles
Role
Permissions
Storage Transfer Admin
( roles/ storagetransfer.admin )
Create, update and manage transfer jobs and operations.
resourcemanager.projects.get
resourcemanager.projects.list
storagetransfer.*
storagetransfer. agentpools. create
storagetransfer. agentpools. delete
storagetransfer.agentpools.get
storagetransfer. agentpools. list
storagetransfer. agentpools. report
storagetransfer. agentpools. update
storagetransfer.jobs.create
storagetransfer.jobs.delete
storagetransfer.jobs.get
storagetransfer.jobs.list
storagetransfer.jobs.run
storagetransfer.jobs.update
storagetransfer. operations. assign
storagetransfer. operations. cancel
storagetransfer.operations.get
storagetransfer. operations. list
storagetransfer. operations. pause
storagetransfer. operations. report
storagetransfer. operations. resume
storagetransfer. projects. getServiceAccount
Storage Transfer Viewer
( roles/ storagetransfer.viewer )
Read access to storage transfer jobs and operations.
resourcemanager.projects.get
resourcemanager.projects.list
storagetransfer.agentpools.get
storagetransfer. agentpools. list
storagetransfer.jobs.get
storagetransfer.jobs.list
storagetransfer.operations.get
storagetransfer. operations. list
storagetransfer. projects. getServiceAccount
Storage Transfer Agent
( roles/ storagetransfer.transferAgent )
Perform transfers from an agent.
logging.logEntries.create
monitoring.timeSeries.create
pubsub.subscriptions.consume
pubsub.subscriptions.create
pubsub.subscriptions.delete
pubsub.subscriptions.get
pubsub. topics. attachSubscription
pubsub.topics.create
pubsub.topics.get
pubsub.topics.list
pubsub.topics.publish
storagetransfer. agentpools. report
storagetransfer. operations. assign
storagetransfer.operations.get
storagetransfer. operations. report
Storage Transfer User
( roles/ storagetransfer.user )
Create and update storage transfer jobs and operations.
resourcemanager.projects.get
resourcemanager.projects.list
storagetransfer. agentpools. create
storagetransfer.agentpools.get
storagetransfer. agentpools. list
storagetransfer. agentpools. report
storagetransfer. agentpools. update
storagetransfer.jobs.create
storagetransfer.jobs.get
storagetransfer.jobs.list
storagetransfer.jobs.run
storagetransfer.jobs.update
storagetransfer.operations.*
storagetransfer. operations. assign
storagetransfer. operations. cancel
storagetransfer.operations.get
storagetransfer. operations. list
storagetransfer. operations. pause
storagetransfer. operations. report
storagetransfer. operations. resume
storagetransfer. projects. getServiceAccount
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Storage Transfer Service Agent
( roles/ storagetransfer.serviceAgent )
Grants Storage Transfer Service Agent permissions required to run transfers
Warning: Do not grant service agent roles to any principals except
service agents .
pubsub.subscriptions.consume
pubsub.subscriptions.create
pubsub.subscriptions.delete
pubsub.subscriptions.get
pubsub.subscriptions.update
pubsub. topics. attachSubscription
pubsub.topics.create
pubsub.topics.delete
pubsub.topics.get
pubsub.topics.publish
pubsub.topics.update
Storage Transfer Service permissions
Permission
Included in roles
storagetransfer. agentpools. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. agentpools. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
storagetransfer.agentpools.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Viewer ( roles/ storagetransfer.viewer )
Support User ( roles/ iam.supportUser )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. agentpools. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Viewer ( roles/ storagetransfer.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. agentpools. report
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Agent ( roles/ storagetransfer.transferAgent )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. agentpools. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer.jobs.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer.jobs.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
storagetransfer.jobs.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Viewer ( roles/ storagetransfer.viewer )
Support User ( roles/ iam.supportUser )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer.jobs.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Viewer ( roles/ storagetransfer.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer.jobs.run
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer.jobs.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. operations. assign
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Agent ( roles/ storagetransfer.transferAgent )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. operations. cancel
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer.operations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Viewer ( roles/ storagetransfer.viewer )
Support User ( roles/ iam.supportUser )
Storage Transfer Agent ( roles/ storagetransfer.transferAgent )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. operations. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Viewer ( roles/ storagetransfer.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. operations. pause
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. operations. report
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Agent ( roles/ storagetransfer.transferAgent )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. operations. resume
Owner ( roles/ owner )
Editor ( roles/ editor )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer User ( roles/ storagetransfer.user )
storagetransfer. projects. getServiceAccount
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Storage Transfer Admin ( roles/ storagetransfer.admin )
Storage Transfer Viewer ( roles/ storagetransfer.viewer )
Support User ( roles/ iam.supportUser )
Storage Transfer User ( roles/ storagetransfer.user )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
