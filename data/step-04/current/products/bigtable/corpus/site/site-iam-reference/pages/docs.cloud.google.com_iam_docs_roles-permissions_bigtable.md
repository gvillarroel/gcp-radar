---
title: "Bigtable roles and permissions \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable
  title: "Bigtable roles and permissions \_|\_ Identity and Access Management (IAM)\
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
Bigtable roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for Bigtable. To
search through all roles and permissions, see the role and
permission index .
Bigtable roles
Role
Permissions
Bigtable Administrator
( roles/ bigtable.admin )
Administers all Bigtable instances within a project, including the data stored within
tables. Can create new instances. Intended for project administrators.
Lowest-level resources where you can grant this role:
Table
bigtable.*
bigtable.appProfiles.create
bigtable.appProfiles.delete
bigtable.appProfiles.get
bigtable.appProfiles.list
bigtable.appProfiles.update
bigtable. authorizedViews. create
bigtable. authorizedViews. createTagBinding
bigtable. authorizedViews. delete
bigtable. authorizedViews. deleteTagBinding
bigtable.authorizedViews.get
bigtable. authorizedViews. getIamPolicy
bigtable.authorizedViews.list
bigtable. authorizedViews. listEffectiveTags
bigtable. authorizedViews. listTagBindings
bigtable. authorizedViews. mutateRows
bigtable. authorizedViews. readRows
bigtable. authorizedViews. sampleRowKeys
bigtable. authorizedViews. setIamPolicy
bigtable. authorizedViews. update
bigtable.backups.create
bigtable.backups.delete
bigtable.backups.get
bigtable.backups.getIamPolicy
bigtable.backups.list
bigtable.backups.read
bigtable.backups.restore
bigtable.backups.setIamPolicy
bigtable.backups.update
bigtable.clusters.create
bigtable.clusters.delete
bigtable.clusters.get
bigtable.clusters.list
bigtable.clusters.update
bigtable.hotTablets.list
bigtable.instances.create
bigtable. instances. createTagBinding
bigtable.instances.delete
bigtable. instances. deleteTagBinding
bigtable. instances. executeQuery
bigtable.instances.get
bigtable. instances. getIamPolicy
bigtable.instances.list
bigtable. instances. listEffectiveTags
bigtable. instances. listTagBindings
bigtable.instances.ping
bigtable. instances. setIamPolicy
bigtable.instances.update
bigtable.keyvisualizer.get
bigtable.keyvisualizer.list
bigtable.locations.list
bigtable.logicalViews.create
bigtable.logicalViews.delete
bigtable.logicalViews.get
bigtable. logicalViews. getIamPolicy
bigtable.logicalViews.list
bigtable.logicalViews.readRows
bigtable. logicalViews. setIamPolicy
bigtable.logicalViews.update
bigtable. materializedViews. create
bigtable. materializedViews. delete
bigtable.materializedViews.get
bigtable. materializedViews. getIamPolicy
bigtable. materializedViews. list
bigtable. materializedViews. readRows
bigtable. materializedViews. sampleRowKeys
bigtable. materializedViews. setIamPolicy
bigtable. materializedViews. update
bigtable.schemaBundles.create
bigtable.schemaBundles.delete
bigtable.schemaBundles.get
bigtable. schemaBundles. getIamPolicy
bigtable.schemaBundles.list
bigtable. schemaBundles. setIamPolicy
bigtable.schemaBundles.update
bigtable. tables. checkConsistency
bigtable.tables.create
bigtable.tables.delete
bigtable. tables. generateConsistencyToken
bigtable.tables.get
bigtable.tables.getIamPolicy
bigtable.tables.list
bigtable.tables.mutateRows
bigtable.tables.readRows
bigtable.tables.sampleRowKeys
bigtable.tables.setIamPolicy
bigtable.tables.undelete
bigtable.tables.update
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring.timeSeries.*
monitoring.timeSeries.create
monitoring.timeSeries.list
resourcemanager.projects.get
Bigtable Editor
( roles/ bigtable.editor )
Editor role for bigtable
bigtable.appProfiles.*
bigtable.appProfiles.create
bigtable.appProfiles.delete
bigtable.appProfiles.get
bigtable.appProfiles.list
bigtable.appProfiles.update
bigtable. authorizedViews. create
bigtable. authorizedViews. delete
bigtable.authorizedViews.get
bigtable. authorizedViews. getIamPolicy
bigtable.authorizedViews.list
bigtable. authorizedViews. listEffectiveTags
bigtable. authorizedViews. listTagBindings
bigtable. authorizedViews. mutateRows
bigtable. authorizedViews. readRows
bigtable. authorizedViews. sampleRowKeys
bigtable. authorizedViews. update
bigtable.backups.create
bigtable.backups.delete
bigtable.backups.get
bigtable.backups.getIamPolicy
bigtable.backups.list
bigtable.backups.read
bigtable.backups.restore
bigtable.backups.update
bigtable.clusters.*
bigtable.clusters.create
bigtable.clusters.delete
bigtable.clusters.get
bigtable.clusters.list
bigtable.clusters.update
bigtable.hotTablets.list
bigtable.instances.create
bigtable.instances.delete
bigtable. instances. executeQuery
bigtable.instances.get
bigtable. instances. getIamPolicy
bigtable.instances.list
bigtable. instances. listEffectiveTags
bigtable. instances. listTagBindings
bigtable.instances.ping
bigtable.instances.update
bigtable.keyvisualizer.*
bigtable.keyvisualizer.get
bigtable.keyvisualizer.list
bigtable.locations.list
bigtable.logicalViews.create
bigtable.logicalViews.delete
bigtable.logicalViews.get
bigtable. logicalViews. getIamPolicy
bigtable.logicalViews.list
bigtable.logicalViews.readRows
bigtable.logicalViews.update
bigtable. materializedViews. create
bigtable. materializedViews. delete
bigtable.materializedViews.get
bigtable. materializedViews. getIamPolicy
bigtable. materializedViews. list
bigtable. materializedViews. readRows
bigtable. materializedViews. sampleRowKeys
bigtable. materializedViews. update
bigtable.schemaBundles.create
bigtable.schemaBundles.delete
bigtable.schemaBundles.get
bigtable. schemaBundles. getIamPolicy
bigtable.schemaBundles.list
bigtable.schemaBundles.update
bigtable. tables. checkConsistency
bigtable.tables.create
bigtable.tables.delete
bigtable. tables. generateConsistencyToken
bigtable.tables.get
bigtable.tables.getIamPolicy
bigtable.tables.list
bigtable.tables.mutateRows
bigtable.tables.readRows
bigtable.tables.sampleRowKeys
bigtable.tables.undelete
bigtable.tables.update
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring.timeSeries.list
resourcemanager.projects.get
resourcemanager.projects.list
Bigtable User
( roles/ bigtable.user )
Provides read-write access to the data stored within Bigtable tables. Intended for
application developers or service accounts.
Lowest-level resources where you can grant this role:
Table
bigtable.appProfiles.get
bigtable.appProfiles.list
bigtable.authorizedViews.get
bigtable.authorizedViews.list
bigtable. authorizedViews. mutateRows
bigtable. authorizedViews. readRows
bigtable. authorizedViews. sampleRowKeys
bigtable.backups.get
bigtable.backups.list
bigtable.clusters.get
bigtable.clusters.list
bigtable.hotTablets.list
bigtable. instances. executeQuery
bigtable.instances.get
bigtable.instances.list
bigtable.instances.ping
bigtable.keyvisualizer.*
bigtable.keyvisualizer.get
bigtable.keyvisualizer.list
bigtable.locations.list
bigtable.logicalViews.get
bigtable.logicalViews.list
bigtable.logicalViews.readRows
bigtable.materializedViews.get
bigtable. materializedViews. list
bigtable. materializedViews. readRows
bigtable. materializedViews. sampleRowKeys
bigtable.schemaBundles.get
bigtable.schemaBundles.list
bigtable. tables. checkConsistency
bigtable. tables. generateConsistencyToken
bigtable.tables.get
bigtable.tables.list
bigtable.tables.mutateRows
bigtable.tables.readRows
bigtable.tables.sampleRowKeys
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring.timeSeries.*
monitoring.timeSeries.create
monitoring.timeSeries.list
resourcemanager.projects.get
Bigtable Viewer
( roles/ bigtable.viewer )
Provides no data access. Intended as a minimal set of permissions to access
the Google Cloud console for Bigtable.
Lowest-level resources where you can grant this role:
Table
bigtable.appProfiles.get
bigtable.appProfiles.list
bigtable.authorizedViews.get
bigtable.authorizedViews.list
bigtable.backups.get
bigtable.backups.list
bigtable.clusters.get
bigtable.clusters.list
bigtable.hotTablets.list
bigtable.instances.get
bigtable.instances.list
bigtable. instances. listEffectiveTags
bigtable. instances. listTagBindings
bigtable.locations.list
bigtable.logicalViews.get
bigtable.logicalViews.list
bigtable.materializedViews.get
bigtable. materializedViews. list
bigtable.schemaBundles.get
bigtable.schemaBundles.list
bigtable. tables. checkConsistency
bigtable. tables. generateConsistencyToken
bigtable.tables.get
bigtable.tables.list
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring.timeSeries.list
resourcemanager.projects.get
Bigtable Reader
( roles/ bigtable.reader )
Provides read-only access to the data stored within Bigtable tables. Intended for
data scientists, dashboard generators, and other data-analysis scenarios.
Lowest-level resources where you can grant this role:
Table
bigtable.appProfiles.get
bigtable.appProfiles.list
bigtable.authorizedViews.get
bigtable.authorizedViews.list
bigtable. authorizedViews. readRows
bigtable. authorizedViews. sampleRowKeys
bigtable.backups.get
bigtable.backups.list
bigtable.clusters.get
bigtable.clusters.list
bigtable.hotTablets.list
bigtable. instances. executeQuery
bigtable.instances.get
bigtable.instances.list
bigtable.instances.ping
bigtable.keyvisualizer.*
bigtable.keyvisualizer.get
bigtable.keyvisualizer.list
bigtable.locations.list
bigtable.logicalViews.get
bigtable.logicalViews.list
bigtable.logicalViews.readRows
bigtable.materializedViews.get
bigtable. materializedViews. list
bigtable. materializedViews. readRows
bigtable. materializedViews. sampleRowKeys
bigtable.schemaBundles.get
bigtable.schemaBundles.list
bigtable. tables. checkConsistency
bigtable. tables. generateConsistencyToken
bigtable.tables.get
bigtable.tables.list
bigtable.tables.readRows
bigtable.tables.sampleRowKeys
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring.timeSeries.*
monitoring.timeSeries.create
monitoring.timeSeries.list
resourcemanager.projects.get
Bigtable permissions
Permission
Included in roles
bigtable.appProfiles.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.appProfiles.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.appProfiles.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.appProfiles.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.appProfiles.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. createTagBinding
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Tag User ( roles/ resourcemanager.tagUser )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. deleteTagBinding
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Tag User ( roles/ resourcemanager.tagUser )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.authorizedViews.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.authorizedViews.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. listEffectiveTags
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. listTagBindings
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. mutateRows
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. readRows
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. sampleRowKeys
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. setIamPolicy
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Security Admin ( roles/ iam.securityAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. authorizedViews. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.backups.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.backups.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.backups.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.backups.getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.backups.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.backups.read
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.backups.restore
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.backups.setIamPolicy
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Security Admin ( roles/ iam.securityAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.backups.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.clusters.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.clusters.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.clusters.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.clusters.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.clusters.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.hotTablets.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.instances.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. instances. createTagBinding
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Tag User ( roles/ resourcemanager.tagUser )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.instances.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. instances. deleteTagBinding
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Tag User ( roles/ resourcemanager.tagUser )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. instances. executeQuery
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.instances.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. instances. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.instances.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. instances. listEffectiveTags
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable Viewer ( roles/ bigtable.viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. instances. listTagBindings
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable Viewer ( roles/ bigtable.viewer )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.instances.ping
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. instances. setIamPolicy
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Security Admin ( roles/ iam.securityAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.instances.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.keyvisualizer.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.keyvisualizer.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.locations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.logicalViews.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.logicalViews.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.logicalViews.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. logicalViews. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.logicalViews.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.logicalViews.readRows
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. logicalViews. setIamPolicy
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Security Admin ( roles/ iam.securityAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.logicalViews.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. materializedViews. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. materializedViews. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.materializedViews.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. materializedViews. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. materializedViews. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. materializedViews. readRows
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. materializedViews. sampleRowKeys
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. materializedViews. setIamPolicy
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Security Admin ( roles/ iam.securityAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. materializedViews. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.schemaBundles.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.schemaBundles.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.schemaBundles.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. schemaBundles. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.schemaBundles.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. schemaBundles. setIamPolicy
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Security Admin ( roles/ iam.securityAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.schemaBundles.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. tables. checkConsistency
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.tables.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.tables.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable. tables. generateConsistencyToken
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.tables.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigtable.tables.getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.tables.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Viewer ( roles/ bigtable.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigtable.tables.mutateRows
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.tables.readRows
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigtable.tables.sampleRowKeys
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Bigtable User ( roles/ bigtable.user )
Bigtable Reader ( roles/ bigtable.reader )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
bigtable.tables.setIamPolicy
Owner ( roles/ owner )
Bigtable Administrator ( roles/ bigtable.admin )
Security Admin ( roles/ iam.securityAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.tables.undelete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
bigtable.tables.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigtable Administrator ( roles/ bigtable.admin )
Bigtable Editor ( roles/ bigtable.editor )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
