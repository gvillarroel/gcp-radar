---
title: "Cloud Scheduler roles and permissions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudscheduler
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudscheduler
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudscheduler
  title: "Cloud Scheduler roles and permissions \_|\_ Identity and Access Management\
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
Cloud Scheduler roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Cloud Scheduler. To
search through all roles and permissions, see the role and
permission index .
Cloud Scheduler roles
Role
Permissions
Cloud Scheduler Admin
( roles/ cloudscheduler.admin )
Full access to jobs and executions.
Note that a Cloud Scheduler Admin (or any custom role with the permission
cloudscheduler.jobs.create) can create jobs that publish to any Pub/Sub topics within the
project.
appengine.applications.get
cloudscheduler.*
cloudscheduler.jobs.create
cloudscheduler.jobs.delete
cloudscheduler.jobs.enable
cloudscheduler.jobs.fullView
cloudscheduler.jobs.get
cloudscheduler.jobs.list
cloudscheduler.jobs.pause
cloudscheduler.jobs.run
cloudscheduler.jobs.update
cloudscheduler.locations.get
cloudscheduler.locations.list
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.services.get
serviceusage.services.list
serviceusage.values.test
Cloud Scheduler Viewer
( roles/ cloudscheduler.viewer )
Get and list access to jobs, executions, and locations.
appengine.applications.get
cloudscheduler.jobs.fullView
cloudscheduler.jobs.get
cloudscheduler.jobs.list
cloudscheduler.locations.*
cloudscheduler.locations.get
cloudscheduler.locations.list
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.services.get
serviceusage.services.list
serviceusage.values.test
Cloud Scheduler Job Runner
( roles/ cloudscheduler.jobRunner )
Access to run jobs.
appengine.applications.get
cloudscheduler.jobs.fullView
cloudscheduler.jobs.run
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.services.get
serviceusage.services.list
serviceusage.values.test
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Cloud Scheduler Service Agent
( roles/ cloudscheduler.serviceAgent )
Grants Cloud Scheduler Service Account access to manage resources.
Warning: Do not grant service agent roles to any principals except
service agents .
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
logging.logEntries.create
logging.logEntries.route
pubsub.topics.publish
Cloud Scheduler permissions
Permission
Included in roles
cloudscheduler.jobs.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
KubeRun Events Control Plane Service Agent ( roles/ kuberun.eventsControlPlaneServiceAgent )
cloudscheduler.jobs.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
KubeRun Events Control Plane Service Agent ( roles/ kuberun.eventsControlPlaneServiceAgent )
cloudscheduler.jobs.enable
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
cloudscheduler.jobs.fullView
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Cloud Scheduler Viewer ( roles/ cloudscheduler.viewer )
Cloud Scheduler Job Runner ( roles/ cloudscheduler.jobRunner )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
cloudscheduler.jobs.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Cloud Scheduler Viewer ( roles/ cloudscheduler.viewer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
KubeRun Events Control Plane Service Agent ( roles/ kuberun.eventsControlPlaneServiceAgent )
cloudscheduler.jobs.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Cloud Scheduler Viewer ( roles/ cloudscheduler.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
cloudscheduler.jobs.pause
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
cloudscheduler.jobs.run
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Cloud Scheduler Job Runner ( roles/ cloudscheduler.jobRunner )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
cloudscheduler.jobs.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
cloudscheduler.locations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Cloud Scheduler Viewer ( roles/ cloudscheduler.viewer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
cloudscheduler.locations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloud Scheduler Admin ( roles/ cloudscheduler.admin )
Cloud Scheduler Viewer ( roles/ cloudscheduler.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Application Integration Service Agent ( roles/ integrations.serviceAgent )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
