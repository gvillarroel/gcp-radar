---
title: "API Gateway roles and permissions \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/apigateway
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/dlp
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/apigateway
  title: "API Gateway roles and permissions \_|\_ Identity and Access Management (IAM)\
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
API Gateway roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for API Gateway. To
search through all roles and permissions, see the role and
permission index .
API Gateway roles
Role
Permissions
ApiGateway Admin
( roles/ apigateway.admin )
Full access to ApiGateway and related resources.
apigateway.*
apigateway.apiconfigs.create
apigateway.apiconfigs.delete
apigateway.apiconfigs.get
apigateway. apiconfigs. getIamPolicy
apigateway.apiconfigs.list
apigateway. apiconfigs. setIamPolicy
apigateway.apiconfigs.update
apigateway.apis.create
apigateway. apis. createTagBinding
apigateway.apis.delete
apigateway. apis. deleteTagBinding
apigateway.apis.get
apigateway.apis.getIamPolicy
apigateway.apis.list
apigateway. apis. listEffectiveTags
apigateway. apis. listTagBindings
apigateway.apis.setIamPolicy
apigateway.apis.update
apigateway.gateways.create
apigateway. gateways. createTagBinding
apigateway.gateways.delete
apigateway. gateways. deleteTagBinding
apigateway.gateways.get
apigateway. gateways. getIamPolicy
apigateway.gateways.list
apigateway. gateways. listEffectiveTags
apigateway. gateways. listTagBindings
apigateway. gateways. setIamPolicy
apigateway.gateways.update
apigateway.locations.get
apigateway.locations.list
apigateway.operations.cancel
apigateway.operations.delete
apigateway.operations.get
apigateway.operations.list
apihub. runTimeProjectAttachments. list
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors. get
monitoring.timeSeries.list
resourcemanager.projects.get
resourcemanager.projects.list
servicemanagement.services.get
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
Apigateway Editor
( roles/ apigateway.editor )
Editor role for apigateway
apigateway.apiconfigs.create
apigateway.apiconfigs.delete
apigateway.apiconfigs.get
apigateway. apiconfigs. getIamPolicy
apigateway.apiconfigs.list
apigateway.apiconfigs.update
apigateway.apis.create
apigateway.apis.delete
apigateway.apis.get
apigateway.apis.getIamPolicy
apigateway.apis.list
apigateway. apis. listEffectiveTags
apigateway. apis. listTagBindings
apigateway.apis.update
apigateway.gateways.create
apigateway.gateways.delete
apigateway.gateways.get
apigateway. gateways. getIamPolicy
apigateway.gateways.list
apigateway. gateways. listEffectiveTags
apigateway. gateways. listTagBindings
apigateway.gateways.update
apigateway.locations.*
apigateway.locations.get
apigateway.locations.list
apigateway.operations.*
apigateway.operations.cancel
apigateway.operations.delete
apigateway.operations.get
apigateway.operations.list
apihub. runTimeProjectAttachments. list
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors. get
monitoring.timeSeries.list
resourcemanager.projects.get
resourcemanager.projects.list
servicemanagement.services.get
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
ApiGateway Viewer
( roles/ apigateway.viewer )
Read-only access to ApiGateway and related resources.
apigateway.apiconfigs.get
apigateway. apiconfigs. getIamPolicy
apigateway.apiconfigs.list
apigateway.apis.get
apigateway.apis.getIamPolicy
apigateway.apis.list
apigateway. apis. listEffectiveTags
apigateway. apis. listTagBindings
apigateway.gateways.get
apigateway. gateways. getIamPolicy
apigateway.gateways.list
apigateway. gateways. listEffectiveTags
apigateway. gateways. listTagBindings
apigateway.locations.*
apigateway.locations.get
apigateway.locations.list
apigateway.operations.get
apigateway.operations.list
apihub. runTimeProjectAttachments. list
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors. get
monitoring.timeSeries.list
resourcemanager.projects.get
resourcemanager.projects.list
servicemanagement.services.get
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
Cloud API Gateway Service Agent
( roles/ apigateway.serviceAgent )
Gives Cloud API Gateway service account access to Service Management check and reports as well as impersonation on user-specified service accounts.
Warning: Do not grant service agent roles to any principals except
service agents .
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
servicemanagement. services. check
servicemanagement. services. quota
servicemanagement. services. report
Cloud API Gateway Management Service Agent
( roles/ apigateway_management.serviceAgent )
Gives Cloud API Gateway service account access to retrieve a Service configuration.
Warning: Do not grant service agent roles to any principals except
service agents .
iam.serviceAccounts.get
servicemanagement. services. create
servicemanagement. services. delete
servicemanagement.services.get
servicemanagement. services. list
servicemanagement. services. update
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.services.get
serviceusage.values.test
API Gateway permissions
Permission
Included in roles
apigateway.apiconfigs.create
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway.apiconfigs.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway.apiconfigs.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Attack Surface Management Scanner Service Agent ( roles/ securitycenter.attackSurfaceManagementScannerServiceAgent )
apigateway. apiconfigs. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway.apiconfigs.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway. apiconfigs. setIamPolicy
Owner ( roles/ owner )
ApiGateway Admin ( roles/ apigateway.admin )
Security Admin ( roles/ iam.securityAdmin )
apigateway.apiconfigs.update
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway.apis.create
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway. apis. createTagBinding
Owner ( roles/ owner )
ApiGateway Admin ( roles/ apigateway.admin )
Tag User ( roles/ resourcemanager.tagUser )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
apigateway.apis.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway. apis. deleteTagBinding
Owner ( roles/ owner )
ApiGateway Admin ( roles/ apigateway.admin )
Tag User ( roles/ resourcemanager.tagUser )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
apigateway.apis.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway.apis.getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway.apis.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway. apis. listEffectiveTags
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway. apis. listTagBindings
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway.apis.setIamPolicy
Owner ( roles/ owner )
ApiGateway Admin ( roles/ apigateway.admin )
Security Admin ( roles/ iam.securityAdmin )
apigateway.apis.update
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway.gateways.create
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway. gateways. createTagBinding
Owner ( roles/ owner )
ApiGateway Admin ( roles/ apigateway.admin )
Tag User ( roles/ resourcemanager.tagUser )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
apigateway.gateways.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway. gateways. deleteTagBinding
Owner ( roles/ owner )
ApiGateway Admin ( roles/ apigateway.admin )
Tag User ( roles/ resourcemanager.tagUser )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
apigateway.gateways.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway. gateways. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway.gateways.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway. gateways. listEffectiveTags
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway. gateways. listTagBindings
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway. gateways. setIamPolicy
Owner ( roles/ owner )
ApiGateway Admin ( roles/ apigateway.admin )
Security Admin ( roles/ iam.securityAdmin )
apigateway.gateways.update
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway.locations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway.locations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway.operations.cancel
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway.operations.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
apigateway.operations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
apigateway.operations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
ApiGateway Admin ( roles/ apigateway.admin )
Apigateway Editor ( roles/ apigateway.editor )
ApiGateway Viewer ( roles/ apigateway.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
