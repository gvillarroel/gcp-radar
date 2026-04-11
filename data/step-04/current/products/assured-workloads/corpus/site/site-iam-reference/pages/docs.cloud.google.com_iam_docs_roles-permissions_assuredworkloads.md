---
title: "Assured Workloads roles and permissions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/assuredworkloads
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/assuredworkloads
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/assuredworkloads
  title: "Assured Workloads roles and permissions \_|\_ Identity and Access Management\
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
Assured Workloads roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Assured Workloads. To
search through all roles and permissions, see the role and
permission index .
Assured Workloads roles
Role
Permissions
Assured Workloads Administrator
( roles/ assuredworkloads.admin )
Grants full access to Assured Workloads resources, CRM resources - project/folder and Organization Policy administration
assuredworkloads.*
assuredworkloads. operations. get
assuredworkloads. operations. list
assuredworkloads.updates.list
assuredworkloads. updates. update
assuredworkloads. violations. get
assuredworkloads. violations. list
assuredworkloads. violations. update
assuredworkloads. workload. create
assuredworkloads. workload. delete
assuredworkloads.workload.get
assuredworkloads.workload.list
assuredworkloads. workload. update
axt.labels.set
bigquery.config.update
logging.settings.update
orgpolicy.policies.*
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.*
orgpolicy.policy.get
orgpolicy.policy.set
resourcemanager.folders.create
resourcemanager.folders.get
resourcemanager.folders.list
resourcemanager. organizations. get
resourcemanager. projects. create
resourcemanager.projects.get
resourcemanager.projects.list
Assured Workloads Editor
( roles/ assuredworkloads.editor )
Grants read, write access to Assured Workloads resources, CRM resources - project/folder and Organization Policy administration
assuredworkloads.*
assuredworkloads. operations. get
assuredworkloads. operations. list
assuredworkloads.updates.list
assuredworkloads. updates. update
assuredworkloads. violations. get
assuredworkloads. violations. list
assuredworkloads. violations. update
assuredworkloads. workload. create
assuredworkloads. workload. delete
assuredworkloads.workload.get
assuredworkloads.workload.list
assuredworkloads. workload. update
axt.labels.set
bigquery.config.update
logging.settings.update
orgpolicy.policies.*
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.*
orgpolicy.policy.get
orgpolicy.policy.set
resourcemanager.folders.create
resourcemanager.folders.get
resourcemanager.folders.list
resourcemanager. organizations. get
resourcemanager. projects. create
resourcemanager.projects.get
resourcemanager.projects.list
Assured Workloads Reader
( roles/ assuredworkloads.reader )
Grants read access to all Assured Workloads resources and CRM resources - project/folder
assuredworkloads.operations.*
assuredworkloads. operations. get
assuredworkloads. operations. list
assuredworkloads.updates.list
assuredworkloads. violations. get
assuredworkloads. violations. list
assuredworkloads.workload.get
assuredworkloads.workload.list
orgpolicy.policies.list
orgpolicy.policy.get
resourcemanager.folders.get
resourcemanager.folders.list
resourcemanager. organizations. get
resourcemanager.projects.get
resourcemanager.projects.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Assured Workloads Monitoring Service Agent
( roles/ assuredworkloads.monitoringServiceAgent )
Gives the Assured Workloads service account access to create CAIS feed and monitor Assured Workloads.
Warning: Do not grant service agent roles to any principals except
service agents .
cloudasset. assets. exportResource
cloudasset.assets.listResource
cloudasset.feeds.create
cloudasset.feeds.delete
cloudasset.feeds.get
Assured Workloads Service Agent
( roles/ assuredworkloads.serviceAgent )
Gives the Assured Workloads service account access to create KMS keyrings and keys, monitor Assured Workloads and read Organization Policies.
Warning: Do not grant service agent roles to any principals except
service agents .
cloudkms.cryptoKeys.create
cloudkms.keyRings.create
orgpolicy.policies.list
orgpolicy.policy.get
serviceusage.consumerpolicy.*
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. consumerpolicy. update
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.services.enable
serviceusage.services.get
serviceusage.services.use
serviceusage.values.test
Assured Workloads permissions
Permission
Included in roles
assuredworkloads. operations. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
Assured Workloads Reader ( roles/ assuredworkloads.reader )
Support User ( roles/ iam.supportUser )
assuredworkloads. operations. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Assured Workloads Reader ( roles/ assuredworkloads.reader )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
assuredworkloads.updates.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Assured Workloads Reader ( roles/ assuredworkloads.reader )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
assuredworkloads. updates. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
assuredworkloads. violations. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
Assured Workloads Reader ( roles/ assuredworkloads.reader )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Controls Partner Monitoring Service Agent ( roles/ cloudcontrolspartner.monitoringServiceAgent )
assuredworkloads. violations. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Assured Workloads Reader ( roles/ assuredworkloads.reader )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Controls Partner Monitoring Service Agent ( roles/ cloudcontrolspartner.monitoringServiceAgent )
assuredworkloads. violations. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
assuredworkloads. workload. create
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
assuredworkloads. workload. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
assuredworkloads.workload.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
Assured Workloads Reader ( roles/ assuredworkloads.reader )
Support User ( roles/ iam.supportUser )
assuredworkloads.workload.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Assured Workloads Reader ( roles/ assuredworkloads.reader )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
assuredworkloads. workload. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
