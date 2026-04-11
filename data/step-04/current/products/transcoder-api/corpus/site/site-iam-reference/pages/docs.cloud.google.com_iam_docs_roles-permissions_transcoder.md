---
title: "Transcoder API roles and permissions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/transcoder
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/transcoder
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/transcoder
  title: "Transcoder API roles and permissions \_|\_ Identity and Access Management\
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
Transcoder API roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Transcoder API. To
search through all roles and permissions, see the role and
permission index .
Transcoder API roles
Role
Permissions
Transcoder Admin
( roles/ transcoder.admin )
Full access to all transcoder resources.
resourcemanager.projects.get
resourcemanager.projects.list
transcoder.*
transcoder.jobTemplates.create
transcoder. jobTemplates. createTagBinding
transcoder.jobTemplates.delete
transcoder. jobTemplates. deleteTagBinding
transcoder.jobTemplates.get
transcoder.jobTemplates.list
transcoder. jobTemplates. listEffectiveTags
transcoder. jobTemplates. listTagBindings
transcoder.jobs.create
transcoder. jobs. createTagBinding
transcoder.jobs.delete
transcoder. jobs. deleteTagBinding
transcoder.jobs.get
transcoder.jobs.list
transcoder. jobs. listEffectiveTags
transcoder. jobs. listTagBindings
Transcoder Editor
( roles/ transcoder.editor )
Editor role for transcoder
resourcemanager.projects.get
resourcemanager.projects.list
transcoder.jobTemplates.create
transcoder.jobTemplates.delete
transcoder.jobTemplates.get
transcoder.jobTemplates.list
transcoder. jobTemplates. listEffectiveTags
transcoder. jobTemplates. listTagBindings
transcoder.jobs.create
transcoder.jobs.delete
transcoder.jobs.get
transcoder.jobs.list
transcoder. jobs. listEffectiveTags
transcoder. jobs. listTagBindings
Transcoder Viewer
( roles/ transcoder.viewer )
Viewer of all transcoder resources.
resourcemanager.projects.get
resourcemanager.projects.list
transcoder.jobTemplates.get
transcoder.jobTemplates.list
transcoder. jobTemplates. listEffectiveTags
transcoder. jobTemplates. listTagBindings
transcoder.jobs.get
transcoder.jobs.list
transcoder. jobs. listEffectiveTags
transcoder. jobs. listTagBindings
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Transcoder Service Agent
( roles/ transcoder.serviceAgent )
Downloads and uploads media files from and to customer Cloud Storage buckets. Publishes status updates to customer Pub/Sub.
Warning: Do not grant service agent roles to any principals except
service agents .
pubsub.topics.publish
storage.objects.create
storage.objects.delete
storage.objects.get
transcoder.jobs.delete
Transcoder API permissions
Permission
Included in roles
transcoder.jobTemplates.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
transcoder. jobTemplates. createTagBinding
Owner ( roles/ owner )
Tag User ( roles/ resourcemanager.tagUser )
Transcoder Admin ( roles/ transcoder.admin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
transcoder.jobTemplates.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
transcoder. jobTemplates. deleteTagBinding
Owner ( roles/ owner )
Tag User ( roles/ resourcemanager.tagUser )
Transcoder Admin ( roles/ transcoder.admin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
transcoder.jobTemplates.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Transcoder Viewer ( roles/ transcoder.viewer )
Support User ( roles/ iam.supportUser )
transcoder.jobTemplates.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Transcoder Viewer ( roles/ transcoder.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
transcoder. jobTemplates. listEffectiveTags
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Transcoder Viewer ( roles/ transcoder.viewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
transcoder. jobTemplates. listTagBindings
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Transcoder Viewer ( roles/ transcoder.viewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
transcoder.jobs.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Media Asset Service Agent ( roles/ mediaasset.serviceAgent )
transcoder. jobs. createTagBinding
Owner ( roles/ owner )
Tag User ( roles/ resourcemanager.tagUser )
Transcoder Admin ( roles/ transcoder.admin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
transcoder.jobs.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Media Asset Service Agent ( roles/ mediaasset.serviceAgent )
Transcoder Service Agent ( roles/ transcoder.serviceAgent )
transcoder. jobs. deleteTagBinding
Owner ( roles/ owner )
Tag User ( roles/ resourcemanager.tagUser )
Transcoder Admin ( roles/ transcoder.admin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
transcoder.jobs.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Transcoder Viewer ( roles/ transcoder.viewer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Media Asset Service Agent ( roles/ mediaasset.serviceAgent )
transcoder.jobs.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Transcoder Viewer ( roles/ transcoder.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
transcoder. jobs. listEffectiveTags
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Transcoder Viewer ( roles/ transcoder.viewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
transcoder. jobs. listTagBindings
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
Transcoder Admin ( roles/ transcoder.admin )
Transcoder Editor ( roles/ transcoder.editor )
Transcoder Viewer ( roles/ transcoder.viewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
