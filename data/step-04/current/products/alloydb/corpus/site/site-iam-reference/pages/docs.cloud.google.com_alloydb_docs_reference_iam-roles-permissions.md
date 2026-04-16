---
title: "IAM roles and permissions for AlloyDB \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions
  title: "IAM roles and permissions for AlloyDB \_|\_ AlloyDB for PostgreSQL \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
IAM roles and permissions for AlloyDB
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the Identity and Access Management (IAM) predefined roles and permissions for
AlloyDB. For a complete list of
IAM roles and permissions for AlloyDB, see
AlloyDB for PostgreSQL roles and permissions .
In order to assign these roles and permissions to an IAM account:
The Cloud Resource Manager API must be enabled in the Google Cloud project.
Enable
the API
You must have the roles/owner (Owner) basic IAM role in the
Google Cloud project, or a role that grants these permissions:
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
To gain these permissions while following the principle of least privilege,
ask your administrator to grant you the
roles/resourcemanager.projectIamAdmin (Project IAM Admin)
role.
Predefined AlloyDB IAM roles
The following table lists the predefined roles available for
AlloyDB, along with their AlloyDB permissions:
Predefined role name
Description AlloyDB permissions
roles/alloydb.admin AlloyDB Admin
Full control for all AlloyDB resources.
alloydb.*
roles/alloydb.client AlloyDB Client
Connectivity access to AlloyDB instances from clients.
alloydb.clusters.generateClientCertificate
alloydb.clusters.get
alloydb.instances.connect
alloydb.instances.get
roles/alloydb.databaseUser AlloyDB Database User
Authenticated database-user access to AlloyDB instances.
alloydb.clusters.get
alloydb.instances.get
alloydb.users.login
alloydb.instances.executeSql
roles/alloydb.viewer AlloyDB Viewer
Read-only access to all AlloyDB resources.
alloydb.*.get
alloydb.*.getIamPolicy
alloydb.*.list
AlloyDB IAM permissions and their roles
The following table lists each permission that AlloyDB supports
and the predefined AlloyDB roles that include it.
Permission
AlloyDB roles
alloydb.backups.create
AlloyDB Admin
alloydb.backups.createTagBinding
AlloyDB Admin
alloydb.backups.delete
AlloyDB Admin
alloydb.backups.deleteTagBinding
AlloyDB Admin
alloydb.backups.get
AlloyDB Admin
AlloyDB Viewer
alloydb.backups.getIamPolicy
AlloyDB Admin
AlloyDB Viewer
alloydb.backups.list
AlloyDB Admin
AlloyDB Viewer
alloydb.backups.listTagBindings
AlloyDB Admin
AlloyDB Viewer
alloydb.backups.listEffectiveTags
AlloyDB Admin
AlloyDB Viewer
alloydb.backups.setIamPolicy
AlloyDB Admin
alloydb.backups.update
AlloyDB Admin
alloydb.clusters.create
AlloyDB Admin
alloydb.clusters.createTagBinding
AlloyDB Admin
alloydb.clusters.delete
AlloyDB Admin
alloydb.clusters.deleteTagBinding
AlloyDB Admin
alloydb.clusters.failover
AlloyDB Admin
alloydb.clusters.generateClientCertificate
AlloyDB Admin
AlloyDB Client
alloydb.clusters.get
AlloyDB Admin
AlloyDB Client
AlloyDB Viewer
alloydb.clusters.getIamPolicy
AlloyDB Admin
AlloyDB Viewer
alloydb.clusters.import
AlloyDB Admin
alloydb.clusters.list
AlloyDB Admin
AlloyDB Viewer
alloydb.clusters.listTagBindings
AlloyDB Admin
AlloyDB Viewer
alloydb.clusters.listEffectiveTags
AlloyDB Admin
AlloyDB Viewer
alloydb.clusters.setIamPolicy
AlloyDB Admin
alloydb.clusters.update
AlloyDB Admin
alloydb.databases.list
AlloyDB Admin
AlloyDB Viewer
alloydb.instances.connect
AlloyDB Admin
AlloyDB Client
alloydb.instances.create
AlloyDB Admin
alloydb.instances.delete
AlloyDB Admin
alloydb.instances.executeSql
AlloyDB Admin
AlloyDB Database User
alloydb.instances.failover
AlloyDB Admin
alloydb.instances.get
AlloyDB Admin
AlloyDB Client
AlloyDB Database User
AlloyDB Viewer
alloydb.instances.getIamPolicy
AlloyDB Admin
AlloyDB Viewer
alloydb.instances.list
AlloyDB Admin
AlloyDB Viewer
alloydb.instances.restart
AlloyDB Admin
alloydb.instances.setIamPolicy
AlloyDB Admin
alloydb.instances.update
AlloyDB Admin
alloydb.locations.get
AlloyDB Admin
AlloyDB Viewer
alloydb.locations.list
AlloyDB Admin
AlloyDB Viewer
alloydb.operations.cancel
AlloyDB Admin
alloydb.operations.delete
AlloyDB Admin
alloydb.operations.get
AlloyDB Admin
AlloyDB Viewer
alloydb.operations.list
AlloyDB Admin
AlloyDB Viewer
alloydb.supportedDatabaseFlags.get
AlloyDB Admin
AlloyDB Viewer
alloydb.supportedDatabaseFlags.getIamPolicy
AlloyDB Admin
AlloyDB Viewer
alloydb.supportedDatabaseFlags.list
AlloyDB Admin
AlloyDB Viewer
alloydb.supportedDatabaseFlags.setIamPolicy
AlloyDB Admin
alloydb.users.list
AlloyDB Admin
AlloyDB Client
alloydb.users.get
AlloyDB Admin
AlloyDB Client
alloydb.users.create
AlloyDB Admin
alloydb.users.update
AlloyDB Admin
alloydb.users.delete
AlloyDB Admin
alloydb.users.login
AlloyDB Admin
AlloyDB Database User
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
