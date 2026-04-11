---
title: "Cloud Profiler roles and permissions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudprofiler
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudprofiler
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudprofiler
  title: "Cloud Profiler roles and permissions \_|\_ Identity and Access Management\
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
Cloud Profiler roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Cloud Profiler. To
search through all roles and permissions, see the role and
permission index .
Cloud Profiler roles
Role
Permissions
Cloudprofiler Admin
( roles/ cloudprofiler.admin )
Admin role for cloudprofiler
cloudprofiler.*
cloudprofiler.profiles.create
cloudprofiler.profiles.list
cloudprofiler.profiles.update
resourcemanager.projects.get
resourcemanager.projects.list
Cloudprofiler Viewer
( roles/ cloudprofiler.viewer )
Viewer role for cloudprofiler
cloudprofiler.profiles.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud Profiler Agent
( roles/ cloudprofiler.agent )
Cloud Profiler agents are allowed to register and provide the profiling data.
cloudprofiler.profiles.create
cloudprofiler.profiles.update
Cloud Profiler User
( roles/ cloudprofiler.user )
Cloud Profiler users are allowed to query and view the profiling data.
cloudprofiler.profiles.list
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.quotas.get
serviceusage.services.get
serviceusage.services.list
serviceusage.values.test
Cloud Profiler permissions
Permission
Included in roles
cloudprofiler.profiles.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloudprofiler Admin ( roles/ cloudprofiler.admin )
Cloud Profiler Agent ( roles/ cloudprofiler.agent )
Dataproc Worker ( roles/ dataproc.worker )
cloudprofiler.profiles.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Cloudprofiler Admin ( roles/ cloudprofiler.admin )
Cloudprofiler Viewer ( roles/ cloudprofiler.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Cloud Profiler User ( roles/ cloudprofiler.user )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
cloudprofiler.profiles.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Cloudprofiler Admin ( roles/ cloudprofiler.admin )
Cloud Profiler Agent ( roles/ cloudprofiler.agent )
Dataproc Worker ( roles/ dataproc.worker )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
