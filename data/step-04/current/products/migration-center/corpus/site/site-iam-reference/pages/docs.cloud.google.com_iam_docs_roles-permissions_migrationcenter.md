---
title: "Google Cloud Migration Center roles and permissions \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/migrationcenter
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/migrationcenter
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/migrationcenter
  title: "Google Cloud Migration Center roles and permissions \_|\_ Identity and Access\
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
Google Cloud Migration Center roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Google Cloud Migration Center. To
search through all roles and permissions, see the role and
permission index .
Google Cloud Migration Center roles
Role
Permissions
Migration Center Admin
Beta
( roles/ migrationcenter.admin )
Full access to Migration Center all resources.
migrationcenter.*
migrationcenter.assets.delete
migrationcenter.assets.get
migrationcenter.assets.list
migrationcenter. assets. reportFrames
migrationcenter.assets.update
migrationcenter. assetsExportJobs. create
migrationcenter. assetsExportJobs. delete
migrationcenter. assetsExportJobs. get
migrationcenter. assetsExportJobs. list
migrationcenter. assetsExportJobs. run
migrationcenter. discoveryClients. create
migrationcenter. discoveryClients. delete
migrationcenter. discoveryClients. get
migrationcenter. discoveryClients. list
migrationcenter. discoveryClients. sendHeartbeat
migrationcenter. discoveryClients. update
migrationcenter. errorFrames. get
migrationcenter. errorFrames. list
migrationcenter.groups.create
migrationcenter.groups.delete
migrationcenter.groups.get
migrationcenter.groups.list
migrationcenter.groups.update
migrationcenter. importDataFiles. create
migrationcenter. importDataFiles. delete
migrationcenter. importDataFiles. get
migrationcenter. importDataFiles. list
migrationcenter. importJobs. create
migrationcenter. importJobs. delete
migrationcenter.importJobs.get
migrationcenter. importJobs. list
migrationcenter. importJobs. update
migrationcenter.locations.get
migrationcenter.locations.list
migrationcenter. operations. cancel
migrationcenter. operations. delete
migrationcenter.operations.get
migrationcenter. operations. list
migrationcenter. preferenceSets. create
migrationcenter. preferenceSets. delete
migrationcenter. preferenceSets. get
migrationcenter. preferenceSets. list
migrationcenter. preferenceSets. update
migrationcenter.relations.get
migrationcenter.relations.list
migrationcenter. reportConfigs. create
migrationcenter. reportConfigs. delete
migrationcenter. reportConfigs. get
migrationcenter. reportConfigs. list
migrationcenter.reports.create
migrationcenter.reports.delete
migrationcenter.reports.get
migrationcenter.reports.list
migrationcenter.settings.get
migrationcenter. settings. update
migrationcenter.sources.create
migrationcenter.sources.delete
migrationcenter.sources.get
migrationcenter.sources.list
migrationcenter.sources.update
resourcemanager.projects.get
resourcemanager.projects.list
rma.*
rma.annotations.create
rma.annotations.get
rma.collectors.create
rma.collectors.delete
rma.collectors.get
rma.collectors.list
rma.collectors.update
rma.locations.get
rma.locations.list
rma.operations.cancel
rma.operations.delete
rma.operations.get
rma.operations.list
serviceusage.quotas.get
Migration Center Viewer
Beta
( roles/ migrationcenter.viewer )
Read-only access to Migration Center all resources.
migrationcenter.assets.get
migrationcenter.assets.list
migrationcenter. assetsExportJobs. get
migrationcenter. assetsExportJobs. list
migrationcenter. discoveryClients. get
migrationcenter. discoveryClients. list
migrationcenter.errorFrames.*
migrationcenter. errorFrames. get
migrationcenter. errorFrames. list
migrationcenter.groups.get
migrationcenter.groups.list
migrationcenter. importDataFiles. get
migrationcenter. importDataFiles. list
migrationcenter.importJobs.get
migrationcenter. importJobs. list
migrationcenter.locations.*
migrationcenter.locations.get
migrationcenter.locations.list
migrationcenter.operations.get
migrationcenter. operations. list
migrationcenter. preferenceSets. get
migrationcenter. preferenceSets. list
migrationcenter.relations.*
migrationcenter.relations.get
migrationcenter.relations.list
migrationcenter. reportConfigs. get
migrationcenter. reportConfigs. list
migrationcenter.reports.get
migrationcenter.reports.list
migrationcenter.settings.get
migrationcenter.sources.get
migrationcenter.sources.list
resourcemanager.projects.get
resourcemanager.projects.list
rma.annotations.get
rma.collectors.get
rma.collectors.list
rma.locations.*
rma.locations.get
rma.locations.list
rma.operations.get
rma.operations.list
serviceusage.quotas.get
Migration Center Discovery Client
Beta
( roles/ migrationcenter.discoveryClient )
Migration Center Discover Client role
migrationcenter. assets. reportFrames
migrationcenter. discoveryClients. get
migrationcenter. discoveryClients. sendHeartbeat
Migration Center Discovery Client Registrator
Beta
( roles/ migrationcenter.discoveryClientRegistrator )
Registrator of Migration Center Discover Clients
migrationcenter. discoveryClients. create
migrationcenter. discoveryClients. delete
migrationcenter. discoveryClients. update
migrationcenter.operations.get
migrationcenter.sources.create
migrationcenter.sources.delete
resourcemanager.projects.get
resourcemanager.projects.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Migration Center Service Agent
( roles/ migrationcenter.serviceAgent )
Gives Migration Center Service Account access to objects storedin object store and Cloud Migration products.
Warning: Do not grant service agent roles to any principals except
service agents .
storage.objects.get
vmmigration. migratingVms. create
Google Cloud Migration Center permissions
Permission
Included in roles
migrationcenter.assets.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.assets.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter.assets.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
RMA Service Agent ( roles/ rapidmigrationassessment.serviceAgent )
migrationcenter. assets. reportFrames
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Discovery Client ( roles/ migrationcenter.discoveryClient )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
RMA Service Agent ( roles/ rapidmigrationassessment.serviceAgent )
migrationcenter.assets.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. assetsExportJobs. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. assetsExportJobs. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. assetsExportJobs. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter. assetsExportJobs. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter. assetsExportJobs. run
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. discoveryClients. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Discovery Client Registrator ( roles/ migrationcenter.discoveryClientRegistrator )
migrationcenter. discoveryClients. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Discovery Client Registrator ( roles/ migrationcenter.discoveryClientRegistrator )
migrationcenter. discoveryClients. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
Migration Center Discovery Client ( roles/ migrationcenter.discoveryClient )
migrationcenter. discoveryClients. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter. discoveryClients. sendHeartbeat
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Discovery Client ( roles/ migrationcenter.discoveryClient )
migrationcenter. discoveryClients. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Discovery Client Registrator ( roles/ migrationcenter.discoveryClientRegistrator )
migrationcenter. errorFrames. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter. errorFrames. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter.groups.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.groups.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.groups.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter.groups.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter.groups.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. importDataFiles. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. importDataFiles. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. importDataFiles. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter. importDataFiles. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter. importJobs. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. importJobs. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.importJobs.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
RMA Service Agent ( roles/ rapidmigrationassessment.serviceAgent )
migrationcenter. importJobs. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
RMA Service Agent ( roles/ rapidmigrationassessment.serviceAgent )
migrationcenter. importJobs. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.locations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter.locations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter. operations. cancel
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. operations. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.operations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
Migration Center Discovery Client Registrator ( roles/ migrationcenter.discoveryClientRegistrator )
migrationcenter. operations. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter. preferenceSets. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. preferenceSets. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. preferenceSets. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter. preferenceSets. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter. preferenceSets. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.relations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter.relations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter. reportConfigs. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. reportConfigs. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter. reportConfigs. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter. reportConfigs. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter.reports.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.reports.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.reports.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter.reports.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
migrationcenter.settings.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
migrationcenter. settings. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
migrationcenter.sources.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Discovery Client Registrator ( roles/ migrationcenter.discoveryClientRegistrator )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
RMA Service Agent ( roles/ rapidmigrationassessment.serviceAgent )
migrationcenter.sources.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Discovery Client Registrator ( roles/ migrationcenter.discoveryClientRegistrator )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
RMA Service Agent ( roles/ rapidmigrationassessment.serviceAgent )
migrationcenter.sources.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
RMA Service Agent ( roles/ rapidmigrationassessment.serviceAgent )
migrationcenter.sources.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Migration Center Admin ( roles/ migrationcenter.admin )
Migration Center Viewer ( roles/ migrationcenter.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
RMA Service Agent ( roles/ rapidmigrationassessment.serviceAgent )
migrationcenter.sources.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Migration Center Admin ( roles/ migrationcenter.admin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
RMA Service Agent ( roles/ rapidmigrationassessment.serviceAgent )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
