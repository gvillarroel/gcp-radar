---
title: "BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/access-control
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/admin-intro
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/access-control
  title: "BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
BigQuery IAM roles and permissions
This document provides a list of Identity and Access Management (IAM) predefined roles and
permissions for BigQuery. This page includes roles and permissions for
the following:
BigQuery: Roles and permissions that apply to
BigQuery resources such as datasets, tables, views, and
routines. Many of these roles and permissions can also be granted to
Resource Manager resources like projects, folders, and organizations.
BigQuery Connection API: Role that grants a service agent
access to a Cloud SQL connection.
BigQuery Continuous Query: Role that grants a
service account access to a continuous
query.
BigQuery Data Policy: Roles and permissions that apply to
Data Policies in BigQuery.
BigQuery Data Transfer Service: Role that grants a service agent
access to create jobs that transfer data.
BigQuery Engine for Apache Flink: Roles and permissions that apply to
BigQuery Engine for Apache Flink resources.
BigQuery Migration Service API: Roles and permissions that apply to
BigQuery Migration Service resources.
BigQuery Omni: Role that grants a service agent
access to tables.
BigQuery sharing: Roles and permissions that apply to
BigQuery sharing resources.
BigQuery predefined IAM roles
The following tables list the predefined BigQuery IAM
roles with a corresponding list of all the permissions each
role includes. Note that each permission is applicable to a particular resource
type.
Note: When new capabilities are added to BigQuery, new permissions
might be added to predefined IAM roles, and new predefined
IAM roles might be added to BigQuery. If your
organization requires role definitions to remain unchanged, you should create
custom IAM roles .
BigQuery roles
This table lists the predefined IAM roles and permissions for
BigQuery. To search through all roles and permissions, see the
role and permission index .
For information on granting predefined roles on BigQuery
resources like datasets, tables, and routines, see Control access to resources
with IAM .
Role
Permissions
BigQuery Admin
( roles/ bigquery.admin )
Provides permissions to manage all resources within the project. Can manage
all data within the project, and can cancel jobs from other users running
within the project.
It is possible to grant this role to the following lowest-level resources, but it is not
recommended. Other predefined roles grant full permissions over these resources and are less
permissive. BigQuery Admin is typically granted at the project level.
Lowest-level resources where you can grant this role:
Dataset
These resources within a dataset:
Table
View
Routine
Connection
Saved query
Data canvas
Pipeline
Data preparation
Repository
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.bireservations.*
bigquery.bireservations.get
bigquery.bireservations.update
bigquery.capacityCommitments.*
bigquery. capacityCommitments. create
bigquery. capacityCommitments. delete
bigquery. capacityCommitments. get
bigquery. capacityCommitments. list
bigquery. capacityCommitments. update
bigquery.config.*
bigquery.config.get
bigquery.config.update
bigquery.connections.*
bigquery.connections.create
bigquery.connections.delegate
bigquery.connections.delete
bigquery.connections.get
bigquery. connections. getIamPolicy
bigquery.connections.list
bigquery. connections. setIamPolicy
bigquery.connections.update
bigquery.connections.updateTag
bigquery.connections.use
bigquery.dataPolicies.attach
bigquery.dataPolicies.create
bigquery.dataPolicies.delete
bigquery.dataPolicies.get
bigquery. dataPolicies. getIamPolicy
bigquery.dataPolicies.list
bigquery. dataPolicies. setIamPolicy
bigquery.dataPolicies.update
bigquery.datasets.*
bigquery.datasets.create
bigquery. datasets. createTagBinding
bigquery.datasets.delete
bigquery. datasets. deleteTagBinding
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.datasets.link
bigquery. datasets. listEffectiveTags
bigquery. datasets. listSharedDatasetUsage
bigquery. datasets. listTagBindings
bigquery.datasets.setIamPolicy
bigquery.datasets.update
bigquery.datasets.updateTag
bigquery.jobs.*
bigquery.jobs.create
bigquery. jobs. createGlobalQuery
bigquery.jobs.delete
bigquery.jobs.get
bigquery.jobs.list
bigquery.jobs.listAll
bigquery. jobs. listExecutionMetadata
bigquery.jobs.update
bigquery.models.*
bigquery.models.create
bigquery.models.delete
bigquery.models.export
bigquery.models.getData
bigquery.models.getMetadata
bigquery.models.list
bigquery.models.updateData
bigquery.models.updateMetadata
bigquery.models.updateTag
bigquery.objectRefs.*
bigquery.objectRefs.read
bigquery.objectRefs.write
bigquery.readsessions.*
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.readsessions.update
bigquery. reservationAssignments.*
bigquery. reservationAssignments. create
bigquery. reservationAssignments. delete
bigquery. reservationAssignments. list
bigquery. reservationAssignments. search
bigquery.reservationGroups.*
bigquery. reservationGroups. create
bigquery. reservationGroups. delete
bigquery.reservationGroups.get
bigquery. reservationGroups. list
bigquery.reservations.*
bigquery.reservations.create
bigquery.reservations.delete
bigquery.reservations.get
bigquery. reservations. getIamPolicy
bigquery.reservations.list
bigquery. reservations. listFailoverDatasets
bigquery. reservations. setIamPolicy
bigquery.reservations.update
bigquery.reservations.use
bigquery.routines.*
bigquery.routines.create
bigquery.routines.delete
bigquery.routines.get
bigquery.routines.list
bigquery.routines.update
bigquery.routines.updateTag
bigquery. rowAccessPolicies. create
bigquery. rowAccessPolicies. delete
bigquery.rowAccessPolicies.get
bigquery. rowAccessPolicies. getIamPolicy
bigquery. rowAccessPolicies. list
bigquery. rowAccessPolicies. overrideTimeTravelRestrictions
bigquery. rowAccessPolicies. setIamPolicy
bigquery. rowAccessPolicies. update
bigquery.savedqueries.*
bigquery.savedqueries.create
bigquery.savedqueries.delete
bigquery.savedqueries.get
bigquery.savedqueries.list
bigquery.savedqueries.update
bigquery.tables.*
bigquery.tables.create
bigquery.tables.createIndex
bigquery.tables.createSnapshot
bigquery. tables. createTagBinding
bigquery.tables.delete
bigquery.tables.deleteIndex
bigquery.tables.deleteSnapshot
bigquery. tables. deleteTagBinding
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.getIamPolicy
bigquery.tables.list
bigquery. tables. listEffectiveTags
bigquery. tables. listTagBindings
bigquery.tables.replicateData
bigquery. tables. restoreSnapshot
bigquery.tables.setCategory
bigquery. tables. setColumnDataPolicy
bigquery.tables.setIamPolicy
bigquery.tables.update
bigquery.tables.updateData
bigquery.tables.updateIndex
bigquery.tables.updateTag
bigquery.transfers.*
bigquery.transfers.get
bigquery.transfers.update
bigquerymigration. translation. translate
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
dataform.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.config.get
dataform.config.update
dataform.folders.addContents
dataform.folders.create
dataform.folders.delete
dataform.folders.deleteTree
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.move
dataform.folders.queryContents
dataform.folders.setIamPolicy
dataform.folders.update
dataform.locations.get
dataform.locations.list
dataform.operations.cancel
dataform.operations.delete
dataform.operations.get
dataform.operations.list
dataform.releaseConfigs.create
dataform.releaseConfigs.delete
dataform.releaseConfigs.get
dataform.releaseConfigs.list
dataform.releaseConfigs.update
dataform.repositories.commit
dataform. repositories. computeAccessTokenStatus
dataform.repositories.create
dataform.repositories.delete
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform.repositories.move
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform. repositories. scheduleRelease
dataform. repositories. scheduleWorkflow
dataform. repositories. setIamPolicy
dataform.repositories.update
dataform.teamFolders.create
dataform.teamFolders.delete
dataform. teamFolders. deleteTree
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform. teamFolders. setIamPolicy
dataform.teamFolders.update
dataform. workflowConfigs. create
dataform. workflowConfigs. delete
dataform.workflowConfigs.get
dataform.workflowConfigs.list
dataform. workflowConfigs. update
dataform. workflowInvocations. cancel
dataform. workflowInvocations. create
dataform. workflowInvocations. delete
dataform. workflowInvocations. get
dataform. workflowInvocations. list
dataform. workflowInvocations. query
dataform.workspaces.commit
dataform.workspaces.create
dataform.workspaces.delete
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform. workspaces. installNpmPackages
dataform.workspaces.list
dataform. workspaces. makeDirectory
dataform. workspaces. moveDirectory
dataform.workspaces.moveFile
dataform.workspaces.pull
dataform.workspaces.push
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. removeDirectory
dataform.workspaces.removeFile
dataform.workspaces.reset
dataform. workspaces. searchFiles
dataform. workspaces. setIamPolicy
dataform.workspaces.writeFile
dataplex.datascans.*
dataplex.datascans.create
dataplex.datascans.delete
dataplex.datascans.get
dataplex.datascans.getData
dataplex. datascans. getIamPolicy
dataplex.datascans.list
dataplex.datascans.run
dataplex. datascans. setIamPolicy
dataplex.datascans.update
dataplex.operations.get
dataplex.operations.list
dataplex.projects.search
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Connection Admin
( roles/ bigquery.connectionAdmin )
Lowest-level resources where you can grant this role:
Connection
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.connections.*
bigquery.connections.create
bigquery.connections.delegate
bigquery.connections.delete
bigquery.connections.get
bigquery. connections. getIamPolicy
bigquery.connections.list
bigquery. connections. setIamPolicy
bigquery.connections.update
bigquery.connections.updateTag
bigquery.connections.use
BigQuery Connection User
( roles/ bigquery.connectionUser )
Lowest-level resources where you can grant this role:
Connection
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.connections.get
bigquery. connections. getIamPolicy
bigquery.connections.list
bigquery.connections.use
BigQuery Data Editor
( roles/ bigquery.dataEditor )
When granted on a dataset, this role grants these permissions:
Get metadata and permissions for the dataset.
For tables and views:
Create, update, get, list, and delete the dataset's tables and
views.
Read (query), export, replicate, and update table data.
Create, update, and delete indexes.
Create and restore snapshots.
All permissions for the dataset's routines and models.
Note: Principals that are granted the Data Editor role at the project level can also create
new datasets and list datasets in the project that they have access to.
When granted on a table or view, this role grants these permissions:
Get metadata, update metadata, get access controls, and delete the
table or view.
Get (query), export, replicate, and update table data.
Create, update, and delete indexes.
Create and restore snapshots.
All permissions for the routine.
The Data Editor role cannot be granted to individual models.
Note: The BigQuery Data Editor role is mapped to the
WRITER
BigQuery basic role. When you grant the BigQuery Data Editor role to a principal at
the dataset level, the principal is granted WRITER access to the dataset.
Lowest-level resources where you can grant this role:
Dataset
These resources within a dataset:
Table
View
Routine
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.config.get
bigquery.datasets.create
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.datasets.updateTag
bigquery.models.*
bigquery.models.create
bigquery.models.delete
bigquery.models.export
bigquery.models.getData
bigquery.models.getMetadata
bigquery.models.list
bigquery.models.updateData
bigquery.models.updateMetadata
bigquery.models.updateTag
bigquery.routines.*
bigquery.routines.create
bigquery.routines.delete
bigquery.routines.get
bigquery.routines.list
bigquery.routines.update
bigquery.routines.updateTag
bigquery.tables.create
bigquery.tables.createIndex
bigquery.tables.createSnapshot
bigquery.tables.delete
bigquery.tables.deleteIndex
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.getIamPolicy
bigquery.tables.list
bigquery.tables.replicateData
bigquery. tables. restoreSnapshot
bigquery.tables.update
bigquery.tables.updateData
bigquery.tables.updateIndex
bigquery.tables.updateTag
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
dataplex.datascans.create
dataplex.datascans.delete
dataplex.datascans.get
dataplex.datascans.getData
dataplex. datascans. getIamPolicy
dataplex.datascans.list
dataplex.datascans.run
dataplex.datascans.update
dataplex.operations.get
dataplex.operations.list
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Data Owner
( roles/ bigquery.dataOwner )
When granted on a dataset, this role grants these permissions:
All permissions for the dataset and for all of the resources within
the dataset: tables and views, models, and routines.
Note: Principals that are granted the Data Owner role at the project level can also create
new datasets and list datasets in the project that they have access to.
When granted on a table or view, this role grants these permissions:
All permissions for the table or view.
All permissions for row access policies except permission to
override time travel restrictions.
Set categories and column-level data policies.
When granted on a routine, this role grants these permissions:
All permissions for the routine.
You shouldn't grant the Data Owner role at the routine
level. Data Editor also grants all permissions for the routine and is a
less permissive role.
This role cannot be granted to individual models.
Note: The BigQuery Data Owner role is mapped to the
OWNER
BigQuery basic role. When you grant the BigQuery Data Owner role to a principal at
the dataset level, the principal is granted OWNER access to the dataset.
Lowest-level resources where you can grant this role:
Dataset
These resources within a dataset:
Table
View
Routine
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.config.get
bigquery.dataPolicies.attach
bigquery.dataPolicies.create
bigquery.dataPolicies.delete
bigquery.dataPolicies.get
bigquery. dataPolicies. getIamPolicy
bigquery.dataPolicies.list
bigquery. dataPolicies. setIamPolicy
bigquery.dataPolicies.update
bigquery.datasets.*
bigquery.datasets.create
bigquery. datasets. createTagBinding
bigquery.datasets.delete
bigquery. datasets. deleteTagBinding
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.datasets.link
bigquery. datasets. listEffectiveTags
bigquery. datasets. listSharedDatasetUsage
bigquery. datasets. listTagBindings
bigquery.datasets.setIamPolicy
bigquery.datasets.update
bigquery.datasets.updateTag
bigquery.models.*
bigquery.models.create
bigquery.models.delete
bigquery.models.export
bigquery.models.getData
bigquery.models.getMetadata
bigquery.models.list
bigquery.models.updateData
bigquery.models.updateMetadata
bigquery.models.updateTag
bigquery.routines.*
bigquery.routines.create
bigquery.routines.delete
bigquery.routines.get
bigquery.routines.list
bigquery.routines.update
bigquery.routines.updateTag
bigquery. rowAccessPolicies. create
bigquery. rowAccessPolicies. delete
bigquery.rowAccessPolicies.get
bigquery. rowAccessPolicies. getIamPolicy
bigquery. rowAccessPolicies. list
bigquery. rowAccessPolicies. setIamPolicy
bigquery. rowAccessPolicies. update
bigquery.tables.*
bigquery.tables.create
bigquery.tables.createIndex
bigquery.tables.createSnapshot
bigquery. tables. createTagBinding
bigquery.tables.delete
bigquery.tables.deleteIndex
bigquery.tables.deleteSnapshot
bigquery. tables. deleteTagBinding
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.getIamPolicy
bigquery.tables.list
bigquery. tables. listEffectiveTags
bigquery. tables. listTagBindings
bigquery.tables.replicateData
bigquery. tables. restoreSnapshot
bigquery.tables.setCategory
bigquery. tables. setColumnDataPolicy
bigquery.tables.setIamPolicy
bigquery.tables.update
bigquery.tables.updateData
bigquery.tables.updateIndex
bigquery.tables.updateTag
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
dataplex.datascans.*
dataplex.datascans.create
dataplex.datascans.delete
dataplex.datascans.get
dataplex.datascans.getData
dataplex. datascans. getIamPolicy
dataplex.datascans.list
dataplex.datascans.run
dataplex. datascans. setIamPolicy
dataplex.datascans.update
dataplex.operations.get
dataplex.operations.list
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Data Viewer
( roles/ bigquery.dataViewer )
When granted on a dataset, this role grants these permissions:
Get metadata and permissions for the dataset.
List a dataset's tables, views, and models.
Get metadata and access controls for the dataset's tables and views.
Get (query), replicate, and export table data and create snapshots.
List and invoke the dataset's routines.
When granted on a table or view, this role provides these permissions:
Get metadata and access controls for the table or view.
Get (query), export, and replicate table data.
Create snapshots.
When granted on a routine, this role grants these permissions:
In a query, reference a routine created by someone else.
This role cannot be granted to individual models.
Note: The BigQuery Data Viewer role is mapped to the
READER
BigQuery basic role. When you grant the BigQuery Data Viewer role to a principal at
the dataset level, the principal is granted READER access to the dataset.
Lowest-level resources where you can grant this role:
Dataset
These resources within a dataset:
Table
View
Routine
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.models.export
bigquery.models.getData
bigquery.models.getMetadata
bigquery.models.list
bigquery.routines.get
bigquery.routines.list
bigquery.tables.createSnapshot
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.getIamPolicy
bigquery.tables.list
bigquery.tables.replicateData
dataplex.datascans.get
dataplex.datascans.getData
dataplex. datascans. getIamPolicy
dataplex.datascans.list
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Filtered Data Viewer
( roles/ bigquery.filteredDataViewer )
Access to view filtered table data defined by a row access policy.
bigquery.filteredDataViewer is a system-managed role. Grant the role by using
row-level access policies. Don't apply the role directly to a resource through
Identity and Access Management (IAM).
bigquery. rowAccessPolicies. getFilteredData
BigQuery Job User
( roles/ bigquery.jobUser )
Provides permissions to run jobs, including queries, within the project.
This role can only be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.config.get
bigquery.jobs.create
dataform.folders.create
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.repositories.create
dataform.repositories.list
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Metadata Viewer
( roles/ bigquery.metadataViewer )
When granted on a dataset, this role grants these permissions:
Get metadata and access controls for the dataset.
Get metadata and access controls for tables and views.
Get metadata from the dataset's models and routines.
List tables, views, models, and routines in the dataset.
When granted on a table or view, this role provides these permissions:
Get metadata and access controls for the table or view.
When granted on a routine, this role grants these permissions:
In a query, reference a routine created by someone else.
This role cannot be granted to individual models.
Lowest-level resources where you can grant this role:
Dataset
These resources within a dataset:
Table
View
Routine
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.models.getMetadata
bigquery.models.list
bigquery.routines.get
bigquery.routines.list
bigquery.tables.get
bigquery.tables.getIamPolicy
bigquery.tables.list
dataplex.projects.search
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery ObjectRef Admin
( roles/ bigquery.objectRefAdmin )
Administer ObjectRef resources that includes read and write permissions
Lowest-level resources where you can grant this role:
Connection
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.objectRefs.*
bigquery.objectRefs.read
bigquery.objectRefs.write
BigQuery ObjectRef Reader
( roles/ bigquery.objectRefReader )
Role for reading referenced objects via ObjectRefs in BigQuery
Lowest-level resources where you can grant this role:
Connection
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.objectRefs.read
BigQuery Read Session User
( roles/ bigquery.readSessionUser )
Provides the ability to create and use read sessions.
This role can only be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.readsessions.*
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.readsessions.update
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Resource Admin
( roles/ bigquery.resourceAdmin )
Administers BigQuery workloads, including slot assignments, commitments, and reservations.
This role can only be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.bireservations.*
bigquery.bireservations.get
bigquery.bireservations.update
bigquery.capacityCommitments.*
bigquery. capacityCommitments. create
bigquery. capacityCommitments. delete
bigquery. capacityCommitments. get
bigquery. capacityCommitments. list
bigquery. capacityCommitments. update
bigquery.jobs.get
bigquery.jobs.list
bigquery.jobs.listAll
bigquery. jobs. listExecutionMetadata
bigquery. reservationAssignments.*
bigquery. reservationAssignments. create
bigquery. reservationAssignments. delete
bigquery. reservationAssignments. list
bigquery. reservationAssignments. search
bigquery.reservationGroups.*
bigquery. reservationGroups. create
bigquery. reservationGroups. delete
bigquery.reservationGroups.get
bigquery. reservationGroups. list
bigquery.reservations.*
bigquery.reservations.create
bigquery.reservations.delete
bigquery.reservations.get
bigquery. reservations. getIamPolicy
bigquery.reservations.list
bigquery. reservations. listFailoverDatasets
bigquery. reservations. setIamPolicy
bigquery.reservations.update
bigquery.reservations.use
recommender. bigqueryCapacityCommitmentsInsights.*
recommender. bigqueryCapacityCommitmentsInsights. get
recommender. bigqueryCapacityCommitmentsInsights. list
recommender. bigqueryCapacityCommitmentsInsights. update
recommender. bigqueryCapacityCommitmentsRecommendations.*
recommender. bigqueryCapacityCommitmentsRecommendations. get
recommender. bigqueryCapacityCommitmentsRecommendations. list
recommender. bigqueryCapacityCommitmentsRecommendations. update
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Resource Editor
( roles/ bigquery.resourceEditor )
Manages BigQuery workloads, but is unable to create or modify slot commitments.
This role can only be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.bireservations.get
bigquery. capacityCommitments. get
bigquery. capacityCommitments. list
bigquery.jobs.get
bigquery.jobs.list
bigquery.jobs.listAll
bigquery. jobs. listExecutionMetadata
bigquery. reservationAssignments.*
bigquery. reservationAssignments. create
bigquery. reservationAssignments. delete
bigquery. reservationAssignments. list
bigquery. reservationAssignments. search
bigquery.reservationGroups.*
bigquery. reservationGroups. create
bigquery. reservationGroups. delete
bigquery.reservationGroups.get
bigquery. reservationGroups. list
bigquery.reservations.create
bigquery.reservations.delete
bigquery.reservations.get
bigquery.reservations.list
bigquery. reservations. listFailoverDatasets
bigquery.reservations.update
bigquery.reservations.use
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Resource Viewer
( roles/ bigquery.resourceViewer )
Can view BigQuery workloads, but cannot create or modify slot reservations or commitments.
This role can only be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.bireservations.get
bigquery. capacityCommitments. get
bigquery. capacityCommitments. list
bigquery.jobs.get
bigquery.jobs.list
bigquery.jobs.listAll
bigquery. jobs. listExecutionMetadata
bigquery. reservationAssignments. list
bigquery. reservationAssignments. search
bigquery.reservationGroups.get
bigquery. reservationGroups. list
bigquery.reservations.get
bigquery.reservations.list
bigquery. reservations. listFailoverDatasets
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Authorized Routine Admin
Beta
( roles/ bigquery.routineAdmin )
Role for Authorized Routine to administer supported resources
bigquery.connections.use
bigquery.datasets.get
bigquery.models.getData
bigquery.models.getMetadata
bigquery.routines.get
bigquery.routines.list
bigquery.tables.create
bigquery.tables.delete
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.list
bigquery.tables.update
bigquery.tables.updateData
BigQuery Authorized Routine Data Editor
Beta
( roles/ bigquery.routineDataEditor )
Role for Authorized Routine to edit contents of supported resources
bigquery.datasets.get
bigquery.models.getData
bigquery.models.getMetadata
bigquery.routines.get
bigquery.routines.list
bigquery.tables.create
bigquery.tables.delete
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.list
bigquery.tables.update
bigquery.tables.updateData
BigQuery Authorized Routine Data Viewer
Beta
( roles/ bigquery.routineDataViewer )
Role for Authorized Routine to view data and contents of supported resources
bigquery.datasets.get
bigquery.models.getData
bigquery.models.getMetadata
bigquery.routines.get
bigquery.routines.list
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.list
BigQuery Authorized Routine Metadata Viewer
Beta
( roles/ bigquery.routineMetadataViewer )
Role for Authorized Routine to view metadata of supported resources
bigquery.datasets.get
bigquery.models.getMetadata
bigquery.routines.get
bigquery.routines.list
bigquery.tables.get
bigquery.tables.list
BigQuery Security Admin
Beta
( roles/ bigquery.securityAdmin )
Administer all BigQuery security controls
bigquery.dataPolicies.attach
bigquery.dataPolicies.create
bigquery.dataPolicies.delete
bigquery.dataPolicies.get
bigquery. dataPolicies. getIamPolicy
bigquery.dataPolicies.list
bigquery. dataPolicies. setIamPolicy
bigquery.dataPolicies.update
bigquery. datasets. createTagBinding
bigquery. datasets. deleteTagBinding
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery. datasets. listEffectiveTags
bigquery. datasets. listSharedDatasetUsage
bigquery. datasets. listTagBindings
bigquery.datasets.setIamPolicy
bigquery.datasets.update
bigquery.datasets.updateTag
bigquery. rowAccessPolicies. create
bigquery. rowAccessPolicies. delete
bigquery.rowAccessPolicies.get
bigquery. rowAccessPolicies. getIamPolicy
bigquery. rowAccessPolicies. list
bigquery. rowAccessPolicies. setIamPolicy
bigquery. rowAccessPolicies. update
bigquery. tables. createTagBinding
bigquery. tables. deleteTagBinding
bigquery.tables.get
bigquery.tables.getIamPolicy
bigquery.tables.list
bigquery. tables. listEffectiveTags
bigquery. tables. listTagBindings
bigquery. tables. setColumnDataPolicy
bigquery.tables.setIamPolicy
bigquery.tables.update
bigquery.tables.updateTag
dataplex.projects.search
BigQuery Studio Admin
( roles/ bigquery.studioAdmin )
Combination role of BigQuery Admin, Dataform Admin, Notebook Runtime Admin and Dataproc
Serverless Editor.
It is possible to grant this role to the following lowest-level resources, but it is not
recommended. Other predefined roles grant full permissions over these resources and are less
permissive. BigQuery Studio Admin is typically granted at the project level.
Lowest-level resources where you can grant this role:
Dataset
These resources within a dataset:
Table
View
Routine
Connection
Saved query
Data canvas
Data preparation
Pipeline
Repository
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
aiplatform.locations.get
aiplatform. notebookRuntimeTemplates.*
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. create
aiplatform. notebookRuntimeTemplates. delete
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. getIamPolicy
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimeTemplates. setIamPolicy
aiplatform. notebookRuntimeTemplates. update
aiplatform.notebookRuntimes.*
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. delete
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform. notebookRuntimes. start
aiplatform. notebookRuntimes. update
aiplatform. notebookRuntimes. upgrade
aiplatform.operations.list
bigquery.bireservations.*
bigquery.bireservations.get
bigquery.bireservations.update
bigquery.capacityCommitments.*
bigquery. capacityCommitments. create
bigquery. capacityCommitments. delete
bigquery. capacityCommitments. get
bigquery. capacityCommitments. list
bigquery. capacityCommitments. update
bigquery.config.*
bigquery.config.get
bigquery.config.update
bigquery.connections.*
bigquery.connections.create
bigquery.connections.delegate
bigquery.connections.delete
bigquery.connections.get
bigquery. connections. getIamPolicy
bigquery.connections.list
bigquery. connections. setIamPolicy
bigquery.connections.update
bigquery.connections.updateTag
bigquery.connections.use
bigquery.dataPolicies.attach
bigquery.dataPolicies.create
bigquery.dataPolicies.delete
bigquery.dataPolicies.get
bigquery. dataPolicies. getIamPolicy
bigquery.dataPolicies.list
bigquery. dataPolicies. setIamPolicy
bigquery.dataPolicies.update
bigquery.datasets.*
bigquery.datasets.create
bigquery. datasets. createTagBinding
bigquery.datasets.delete
bigquery. datasets. deleteTagBinding
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.datasets.link
bigquery. datasets. listEffectiveTags
bigquery. datasets. listSharedDatasetUsage
bigquery. datasets. listTagBindings
bigquery.datasets.setIamPolicy
bigquery.datasets.update
bigquery.datasets.updateTag
bigquery.jobs.*
bigquery.jobs.create
bigquery. jobs. createGlobalQuery
bigquery.jobs.delete
bigquery.jobs.get
bigquery.jobs.list
bigquery.jobs.listAll
bigquery. jobs. listExecutionMetadata
bigquery.jobs.update
bigquery.models.*
bigquery.models.create
bigquery.models.delete
bigquery.models.export
bigquery.models.getData
bigquery.models.getMetadata
bigquery.models.list
bigquery.models.updateData
bigquery.models.updateMetadata
bigquery.models.updateTag
bigquery.objectRefs.*
bigquery.objectRefs.read
bigquery.objectRefs.write
bigquery.readsessions.*
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.readsessions.update
bigquery. reservationAssignments.*
bigquery. reservationAssignments. create
bigquery. reservationAssignments. delete
bigquery. reservationAssignments. list
bigquery. reservationAssignments. search
bigquery.reservationGroups.*
bigquery. reservationGroups. create
bigquery. reservationGroups. delete
bigquery.reservationGroups.get
bigquery. reservationGroups. list
bigquery.reservations.*
bigquery.reservations.create
bigquery.reservations.delete
bigquery.reservations.get
bigquery. reservations. getIamPolicy
bigquery.reservations.list
bigquery. reservations. listFailoverDatasets
bigquery. reservations. setIamPolicy
bigquery.reservations.update
bigquery.reservations.use
bigquery.routines.*
bigquery.routines.create
bigquery.routines.delete
bigquery.routines.get
bigquery.routines.list
bigquery.routines.update
bigquery.routines.updateTag
bigquery. rowAccessPolicies. create
bigquery. rowAccessPolicies. delete
bigquery.rowAccessPolicies.get
bigquery. rowAccessPolicies. getIamPolicy
bigquery. rowAccessPolicies. list
bigquery. rowAccessPolicies. overrideTimeTravelRestrictions
bigquery. rowAccessPolicies. setIamPolicy
bigquery. rowAccessPolicies. update
bigquery.savedqueries.*
bigquery.savedqueries.create
bigquery.savedqueries.delete
bigquery.savedqueries.get
bigquery.savedqueries.list
bigquery.savedqueries.update
bigquery.tables.*
bigquery.tables.create
bigquery.tables.createIndex
bigquery.tables.createSnapshot
bigquery. tables. createTagBinding
bigquery.tables.delete
bigquery.tables.deleteIndex
bigquery.tables.deleteSnapshot
bigquery. tables. deleteTagBinding
bigquery.tables.export
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.getIamPolicy
bigquery.tables.list
bigquery. tables. listEffectiveTags
bigquery. tables. listTagBindings
bigquery.tables.replicateData
bigquery. tables. restoreSnapshot
bigquery.tables.setCategory
bigquery. tables. setColumnDataPolicy
bigquery.tables.setIamPolicy
bigquery.tables.update
bigquery.tables.updateData
bigquery.tables.updateIndex
bigquery.tables.updateTag
bigquery.transfers.*
bigquery.transfers.get
bigquery.transfers.update
bigquerymigration. translation. translate
cloudaicompanion. aiDevToolsSettings.*
cloudaicompanion. aiDevToolsSettings. create
cloudaicompanion. aiDevToolsSettings. delete
cloudaicompanion. aiDevToolsSettings. get
cloudaicompanion. aiDevToolsSettings. list
cloudaicompanion. aiDevToolsSettings. update
cloudaicompanion. codeToolsSettings.*
cloudaicompanion. codeToolsSettings. create
cloudaicompanion. codeToolsSettings. delete
cloudaicompanion. codeToolsSettings. get
cloudaicompanion. codeToolsSettings. list
cloudaicompanion. codeToolsSettings. update
cloudaicompanion.companions.*
cloudaicompanion. companions. generateChat
cloudaicompanion. companions. generateCode
cloudaicompanion. dataSharingWithGoogleSettings.*
cloudaicompanion. dataSharingWithGoogleSettings. create
cloudaicompanion. dataSharingWithGoogleSettings. delete
cloudaicompanion. dataSharingWithGoogleSettings. get
cloudaicompanion. dataSharingWithGoogleSettings. list
cloudaicompanion. dataSharingWithGoogleSettings. update
cloudaicompanion. entitlements. get
cloudaicompanion. geminiGcpEnablementSettings.*
cloudaicompanion. geminiGcpEnablementSettings. create
cloudaicompanion. geminiGcpEnablementSettings. delete
cloudaicompanion. geminiGcpEnablementSettings. get
cloudaicompanion. geminiGcpEnablementSettings. list
cloudaicompanion. geminiGcpEnablementSettings. update
cloudaicompanion.instances.*
cloudaicompanion. instances. completeCode
cloudaicompanion. instances. completeTask
cloudaicompanion. instances. exportMetrics
cloudaicompanion. instances. generateCode
cloudaicompanion. instances. generateText
cloudaicompanion. instances. queryEffectiveSetting
cloudaicompanion. instances. queryEffectiveSettingBindings
cloudaicompanion. licenses. selfAssign
cloudaicompanion. loggingSettings.*
cloudaicompanion. loggingSettings. create
cloudaicompanion. loggingSettings. delete
cloudaicompanion. loggingSettings. get
cloudaicompanion. loggingSettings. list
cloudaicompanion. loggingSettings. update
cloudaicompanion. operations. get
cloudaicompanion. releaseChannelSettings.*
cloudaicompanion. releaseChannelSettings. create
cloudaicompanion. releaseChannelSettings. delete
cloudaicompanion. releaseChannelSettings. get
cloudaicompanion. releaseChannelSettings. list
cloudaicompanion. releaseChannelSettings. update
cloudaicompanion. settingBindings.*
cloudaicompanion. settingBindings. aiDevToolsSettingsCreate
cloudaicompanion. settingBindings. aiDevToolsSettingsDelete
cloudaicompanion. settingBindings. aiDevToolsSettingsGet
cloudaicompanion. settingBindings. aiDevToolsSettingsList
cloudaicompanion. settingBindings. aiDevToolsSettingsUpdate
cloudaicompanion. settingBindings. aiDevToolsSettingsUse
cloudaicompanion. settingBindings. codeToolsSettingsCreate
cloudaicompanion. settingBindings. codeToolsSettingsDelete
cloudaicompanion. settingBindings. codeToolsSettingsGet
cloudaicompanion. settingBindings. codeToolsSettingsList
cloudaicompanion. settingBindings. codeToolsSettingsUpdate
cloudaicompanion. settingBindings. codeToolsSettingsUse
cloudaicompanion. settingBindings. dataSharingWithGoogleSettingsCreate
cloudaicompanion. settingBindings. dataSharingWithGoogleSettingsDelete
cloudaicompanion. settingBindings. dataSharingWithGoogleSettingsGet
cloudaicompanion. settingBindings. dataSharingWithGoogleSettingsList
cloudaicompanion. settingBindings. dataSharingWithGoogleSettingsUpdate
cloudaicompanion. settingBindings. dataSharingWithGoogleSettingsUse
cloudaicompanion. settingBindings. geminiGcpEnablementSettingsCreate
cloudaicompanion. settingBindings. geminiGcpEnablementSettingsDelete
cloudaicompanion. settingBindings. geminiGcpEnablementSettingsGet
cloudaicompanion. settingBindings. geminiGcpEnablementSettingsList
cloudaicompanion. settingBindings. geminiGcpEnablementSettingsUpdate
cloudaicompanion. settingBindings. geminiGcpEnablementSettingsUse
cloudaicompanion. settingBindings. loggingSettingsCreate
cloudaicompanion. settingBindings. loggingSettingsDelete
cloudaicompanion. settingBindings. loggingSettingsGet
cloudaicompanion. settingBindings. loggingSettingsList
cloudaicompanion. settingBindings. loggingSettingsUpdate
cloudaicompanion. settingBindings. loggingSettingsUse
cloudaicompanion. settingBindings. releaseChannelSettingsCreate
cloudaicompanion. settingBindings. releaseChannelSettingsDelete
cloudaicompanion. settingBindings. releaseChannelSettingsGet
cloudaicompanion. settingBindings. releaseChannelSettingsList
cloudaicompanion. settingBindings. releaseChannelSettingsUpdate
cloudaicompanion. settingBindings. releaseChannelSettingsUse
cloudaicompanion.topics.create
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
compute.projects.get
compute.regions.*
compute.regions.get
compute.regions.list
compute.reservations.get
compute.reservations.list
compute.zones.*
compute.zones.get
compute.zones.list
dataform.*
dataform.commentThreads.create
dataform.commentThreads.delete
dataform.commentThreads.get
dataform.commentThreads.list
dataform.commentThreads.update
dataform.comments.create
dataform.comments.delete
dataform.comments.get
dataform.comments.list
dataform.comments.update
dataform. compilationResults. create
dataform. compilationResults. get
dataform. compilationResults. list
dataform. compilationResults. query
dataform.config.get
dataform.config.update
dataform.folders.addContents
dataform.folders.create
dataform.folders.delete
dataform.folders.deleteTree
dataform.folders.get
dataform.folders.getIamPolicy
dataform.folders.move
dataform.folders.queryContents
dataform.folders.setIamPolicy
dataform.folders.update
dataform.locations.get
dataform.locations.list
dataform.operations.cancel
dataform.operations.delete
dataform.operations.get
dataform.operations.list
dataform.releaseConfigs.create
dataform.releaseConfigs.delete
dataform.releaseConfigs.get
dataform.releaseConfigs.list
dataform.releaseConfigs.update
dataform.repositories.commit
dataform. repositories. computeAccessTokenStatus
dataform.repositories.create
dataform.repositories.delete
dataform. repositories. fetchHistory
dataform. repositories. fetchRemoteBranches
dataform.repositories.get
dataform. repositories. getIamPolicy
dataform.repositories.list
dataform.repositories.move
dataform. repositories. queryDirectoryContents
dataform.repositories.readFile
dataform. repositories. scheduleRelease
dataform. repositories. scheduleWorkflow
dataform. repositories. setIamPolicy
dataform.repositories.update
dataform.teamFolders.create
dataform.teamFolders.delete
dataform. teamFolders. deleteTree
dataform.teamFolders.get
dataform. teamFolders. getIamPolicy
dataform. teamFolders. setIamPolicy
dataform.teamFolders.update
dataform. workflowConfigs. create
dataform. workflowConfigs. delete
dataform.workflowConfigs.get
dataform.workflowConfigs.list
dataform. workflowConfigs. update
dataform. workflowInvocations. cancel
dataform. workflowInvocations. create
dataform. workflowInvocations. delete
dataform. workflowInvocations. get
dataform. workflowInvocations. list
dataform. workflowInvocations. query
dataform.workspaces.commit
dataform.workspaces.create
dataform.workspaces.delete
dataform. workspaces. fetchFileDiff
dataform. workspaces. fetchFileGitStatuses
dataform. workspaces. fetchGitAheadBehind
dataform.workspaces.get
dataform. workspaces. getIamPolicy
dataform. workspaces. installNpmPackages
dataform.workspaces.list
dataform. workspaces. makeDirectory
dataform. workspaces. moveDirectory
dataform.workspaces.moveFile
dataform.workspaces.pull
dataform.workspaces.push
dataform. workspaces. queryDirectoryContents
dataform.workspaces.readFile
dataform. workspaces. removeDirectory
dataform.workspaces.removeFile
dataform.workspaces.reset
dataform. workspaces. searchFiles
dataform. workspaces. setIamPolicy
dataform.workspaces.writeFile
dataplex.datascans.*
dataplex.datascans.create
dataplex.datascans.delete
dataplex.datascans.get
dataplex.datascans.getData
dataplex. datascans. getIamPolicy
dataplex.datascans.list
dataplex.datascans.run
dataplex. datascans. setIamPolicy
dataplex.datascans.update
dataplex.operations.get
dataplex.operations.list
dataplex.projects.search
dataproc.batches.*
dataproc.batches.analyze
dataproc.batches.cancel
dataproc.batches.create
dataproc.batches.delete
dataproc.batches.get
dataproc.batches.list
dataproc. batches. sparkApplicationRead
dataproc. batches. sparkApplicationWrite
dataproc.operations.cancel
dataproc.operations.delete
dataproc.operations.get
dataproc.operations.list
dataproc.sessionTemplates.*
dataproc. sessionTemplates. create
dataproc. sessionTemplates. delete
dataproc.sessionTemplates.get
dataproc.sessionTemplates.list
dataproc. sessionTemplates. update
dataproc.sessions.*
dataproc.sessions.create
dataproc.sessions.delete
dataproc.sessions.get
dataproc.sessions.list
dataproc. sessions. sparkApplicationRead
dataproc. sessions. sparkApplicationWrite
dataproc.sessions.terminate
dataprocrm.nodePools.*
dataprocrm.nodePools.create
dataprocrm.nodePools.delete
dataprocrm. nodePools. deleteNodes
dataprocrm.nodePools.get
dataprocrm.nodePools.list
dataprocrm.nodePools.resize
dataprocrm.nodes.get
dataprocrm.nodes.heartbeat
dataprocrm.nodes.list
dataprocrm.nodes.update
dataprocrm.operations.get
dataprocrm.operations.list
dataprocrm.workloads.*
dataprocrm.workloads.cancel
dataprocrm.workloads.create
dataprocrm.workloads.delete
dataprocrm.workloads.get
dataprocrm.workloads.list
geminidataanalytics. locations. useDataEngineeringAgent
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Studio User
( roles/ bigquery.studioUser )
Combination role of BigQuery Job User, BigQuery Read Session User, Dataform Code Creator,
Notebook Runtime User and Dataproc Serverless Editor.
Lowest-level resources where you can grant this role:
Saved query
Data canvas
Data preparation
Pipeline
Repository
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
aiplatform.locations.get
aiplatform. notebookRuntimeTemplates. apply
aiplatform. notebookRuntimeTemplates. get
aiplatform. notebookRuntimeTemplates. getIamPolicy
aiplatform. notebookRuntimeTemplates. list
aiplatform. notebookRuntimes. assign
aiplatform. notebookRuntimes. get
aiplatform. notebookRuntimes. list
aiplatform.operations.list
bigquery.config.get
bigquery.jobs.create
bigquery.readsessions.*
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.readsessions.update
cloudaicompanion.companions.*
cloudaicompanion. companions. generateChat
cloudaicompanion. companions. generateCode
cloudaicompanion. entitlements. get
cloudaicompanion.instances.*
cloudaicompanion. instances. completeCode
cloudaicompanion. instances. completeTask
cloudaicompanion. instances. exportMetrics
cloudaicompanion. instances. generateCode
cloudaicompanion. instances. generateText
cloudaicompanion. instances. queryEffectiveSetting
cloudaicompanion. instances. queryEffectiveSettingBindings
cloudaicompanion. licenses. selfAssign
cloudaicompanion. operations. get
cloudaicompanion.topics.create
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
compute.projects.get
compute.regions.*
compute.regions.get
compute.regions.list
compute.zones.*
compute.zones.get
compute.zones.list
dataform.commentThreads.get
dataform.commentThreads.list
dataform.comments.get
dataform.comments.list
dataform.folders.create
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.repositories.create
dataform.repositories.list
dataplex.projects.search
dataproc.batches.*
dataproc.batches.analyze
dataproc.batches.cancel
dataproc.batches.create
dataproc.batches.delete
dataproc.batches.get
dataproc.batches.list
dataproc. batches. sparkApplicationRead
dataproc. batches. sparkApplicationWrite
dataproc.operations.cancel
dataproc.operations.delete
dataproc.operations.get
dataproc.operations.list
dataproc.sessionTemplates.*
dataproc. sessionTemplates. create
dataproc. sessionTemplates. delete
dataproc.sessionTemplates.get
dataproc.sessionTemplates.list
dataproc. sessionTemplates. update
dataproc.sessions.*
dataproc.sessions.create
dataproc.sessions.delete
dataproc.sessions.get
dataproc.sessions.list
dataproc. sessions. sparkApplicationRead
dataproc. sessions. sparkApplicationWrite
dataproc.sessions.terminate
dataprocrm.nodePools.*
dataprocrm.nodePools.create
dataprocrm.nodePools.delete
dataprocrm. nodePools. deleteNodes
dataprocrm.nodePools.get
dataprocrm.nodePools.list
dataprocrm.nodePools.resize
dataprocrm.nodes.get
dataprocrm.nodes.heartbeat
dataprocrm.nodes.list
dataprocrm.nodes.update
dataprocrm.operations.get
dataprocrm.operations.list
dataprocrm.workloads.*
dataprocrm.workloads.cancel
dataprocrm.workloads.create
dataprocrm.workloads.delete
dataprocrm.workloads.get
dataprocrm.workloads.list
geminidataanalytics. locations. useDataEngineeringAgent
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery User
( roles/ bigquery.user )
When granted on a dataset, this role provides the ability to read the dataset's metadata and list
tables in the dataset.
When granted on a project, this role also provides the ability to run jobs, including queries,
within the project. A principal with this role can enumerate their own jobs, cancel their own jobs, and
enumerate datasets within a project. Additionally, allows the creation of new datasets within the
project; the creator is granted the BigQuery Data Owner role ( roles/bigquery.dataOwner )
on these new datasets.
Lowest-level resources where you can grant this role:
Dataset
These resources within a dataset:
Routine
This role can also be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.bireservations.get
bigquery. capacityCommitments. get
bigquery. capacityCommitments. list
bigquery.config.get
bigquery.datasets.create
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.jobs.create
bigquery.jobs.list
bigquery.models.list
bigquery.readsessions.*
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.readsessions.update
bigquery. reservationAssignments. list
bigquery. reservationAssignments. search
bigquery.reservationGroups.get
bigquery. reservationGroups. list
bigquery.reservations.get
bigquery.reservations.list
bigquery. reservations. listFailoverDatasets
bigquery.reservations.use
bigquery.routines.list
bigquery.savedqueries.get
bigquery.savedqueries.list
bigquery.tables.list
bigquery.transfers.get
bigquerymigration. translation. translate
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
dataform.folders.create
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.repositories.create
dataform.repositories.list
dataplex.projects.search
resourcemanager.projects.get
resourcemanager.projects.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Connected Sheets Service Agent
( roles/ bigquery.connectedSheetsServiceAgent )
Grants Connected Sheets Service Account access to create and manage BigQuery jobs on the customers resources.
Warning: Do not grant service agent roles to any principals except
service agents .
bigquery.datasets.get
bigquery.jobs.create
bigquery.tables.create
bigquery.tables.update
bigquery.tables.updateData
BigQuery Connection API roles
This table lists the predefined IAM roles and permissions for
BigQuery Connection API. To search through all roles and
permissions, see the
role and permission index .
BigQuery Connection API offers the following service agent roles.
Service agent roles should only be granted to service agents .
Role
Permissions
BigQuery Connection Service Agent
( roles/ bigqueryconnection.serviceAgent )
Gives BigQuery Connection Service access to Cloud SQL instances in user projects.
Warning: Do not grant service agent roles to any principals except
service agents .
cloudsql.instances.connect
cloudsql.instances.get
logging.logEntries.create
logging.logEntries.route
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring.timeSeries.create
telemetry.metrics.write
BigQuery Continuous Query roles
This table lists the predefined IAM roles and permissions for
BigQuery Continuous Query. To search through all roles and
permissions, see the
role and permission index .
BigQuery Continuous Query offers the following service agent roles.
Service agent roles should only be granted to service agents .
Role
Permissions
BigQuery Continuous Query Service Agent
( roles/ bigquerycontinuousquery.serviceAgent )
Gives BigQuery Continuous Query access to the service accounts in the user project.
Warning: Do not grant service agent roles to any principals except
service agents .
iam. serviceAccounts. getAccessToken
BigQuery Data Policy roles
This table lists the predefined IAM roles and permissions for
BigQuery Data Policy. To search through all roles and
permissions, see the
role and permission index .
Role
Permissions
BigQuery Data Policy Admin
( roles/ bigquerydatapolicy.admin )
Role for managing Data Policies in BigQuery
This role can only be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.dataPolicies.attach
bigquery.dataPolicies.create
bigquery.dataPolicies.delete
bigquery.dataPolicies.get
bigquery. dataPolicies. getIamPolicy
bigquery.dataPolicies.list
bigquery. dataPolicies. setIamPolicy
bigquery.dataPolicies.update
Bigquerydatapolicy Editor
( roles/ bigquerydatapolicy.editor )
Editor role for bigquerydatapolicy
bigquery.bireservations.*
bigquery.bireservations.get
bigquery.bireservations.update
bigquery. capacityCommitments. get
bigquery. capacityCommitments. list
bigquery. capacityCommitments. update
bigquery.config.*
bigquery.config.get
bigquery.config.update
bigquery.connections.create
bigquery.connections.delete
bigquery.connections.get
bigquery. connections. getIamPolicy
bigquery.connections.list
bigquery.connections.update
bigquery.connections.updateTag
bigquery.connections.use
bigquery.dataPolicies.attach
bigquery.dataPolicies.create
bigquery.dataPolicies.delete
bigquery.dataPolicies.get
bigquery. dataPolicies. getIamPolicy
bigquery.dataPolicies.list
bigquery.dataPolicies.update
bigquery.datasets.create
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery. datasets. listEffectiveTags
bigquery. datasets. listTagBindings
bigquery.datasets.updateTag
bigquery.jobs.create
bigquery. jobs. createGlobalQuery
bigquery.jobs.delete
bigquery.jobs.get
bigquery.jobs.list
bigquery. jobs. listExecutionMetadata
bigquery.models.*
bigquery.models.create
bigquery.models.delete
bigquery.models.export
bigquery.models.getData
bigquery.models.getMetadata
bigquery.models.list
bigquery.models.updateData
bigquery.models.updateMetadata
bigquery.models.updateTag
bigquery.objectRefs.*
bigquery.objectRefs.read
bigquery.objectRefs.write
bigquery.readsessions.*
bigquery.readsessions.create
bigquery.readsessions.getData
bigquery.readsessions.update
bigquery. reservationAssignments.*
bigquery. reservationAssignments. create
bigquery. reservationAssignments. delete
bigquery. reservationAssignments. list
bigquery. reservationAssignments. search
bigquery.reservationGroups.*
bigquery. reservationGroups. create
bigquery. reservationGroups. delete
bigquery.reservationGroups.get
bigquery. reservationGroups. list
bigquery.reservations.create
bigquery.reservations.delete
bigquery.reservations.get
bigquery. reservations. getIamPolicy
bigquery.reservations.list
bigquery. reservations. listFailoverDatasets
bigquery.reservations.update
bigquery.reservations.use
bigquery.routines.*
bigquery.routines.create
bigquery.routines.delete
bigquery.routines.get
bigquery.routines.list
bigquery.routines.update
bigquery.routines.updateTag
bigquery. rowAccessPolicies. create
bigquery. rowAccessPolicies. delete
bigquery.rowAccessPolicies.get
bigquery. rowAccessPolicies. getIamPolicy
bigquery. rowAccessPolicies. list
bigquery. rowAccessPolicies. update
bigquery.savedqueries.*
bigquery.savedqueries.create
bigquery.savedqueries.delete
bigquery.savedqueries.get
bigquery.savedqueries.list
bigquery.savedqueries.update
bigquery.tables.createIndex
bigquery.tables.createSnapshot
bigquery.tables.deleteIndex
bigquery.tables.getIamPolicy
bigquery. tables. listEffectiveTags
bigquery. tables. listTagBindings
bigquery.tables.replicateData
bigquery. tables. restoreSnapshot
bigquery.tables.updateIndex
bigquery.transfers.*
bigquery.transfers.get
bigquery.transfers.update
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery Data Policy Viewer
( roles/ bigquerydatapolicy.viewer )
Role for viewing Data Policies in BigQuery
This role can only be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery.dataPolicies.get
bigquery.dataPolicies.list
Masked Reader
( roles/ bigquerydatapolicy.maskedReader )
Masked read access to sub-resources tagged by the policy tag associated with a data policy, for
example, BigQuery columns
This role can only be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery. dataPolicies. maskedGet
Raw Data Reader
Beta
( roles/ bigquerydatapolicy.rawDataReader )
Raw read access to sub-resources associated with a data policy, for example, BigQuery columns
This role can only be granted on Resource Manager resources (projects, folders, and
organizations).
bigquery. dataPolicies. getRawData
BigQuery Data Transfer Service roles
This table lists the predefined IAM roles and permissions for
BigQuery Data Transfer Service. To search through all roles and permissions, see the
role and permission index .
BigQuery Data Transfer Service offers the following service agent roles.
Service agent roles should only be granted to service agents .
Role
Permissions
BigQuery Data Transfer Service Agent
( roles/ bigquerydatatransfer.serviceAgent )
Gives BigQuery Data Transfer Service access to start BigQuery jobs in consumer project.
Warning: Do not grant service agent roles to any principals except
service agents .
bigquery.config.get
bigquery.connections.delegate
bigquery.jobs.create
compute.networkAttachments.get
compute. networkAttachments. update
compute.regionOperations.get
compute.subnetworks.use
dataform.folders.create
dataform.locations.*
dataform.locations.get
dataform.locations.list
dataform.repositories.create
dataform.repositories.list
iam. serviceAccounts. getAccessToken
logging.logEntries.create
logging.logEntries.route
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage.services.use
BigQuery Engine for Apache Flink roles
This table lists the predefined IAM roles and permissions for
BigQuery Engine for Apache Flink. To search through all roles and permissions, see the
role and permission index .
Role
Permissions
Managed Flink Admin
Beta
( roles/ managedflink.admin )
Full access to Managed Flink resources.
managedflink.*
managedflink. deployments. create
managedflink. deployments. delete
managedflink.deployments.get
managedflink.deployments.list
managedflink. deployments. update
managedflink.jobs.create
managedflink.jobs.delete
managedflink.jobs.get
managedflink.jobs.list
managedflink.jobs.update
managedflink.locations.get
managedflink.locations.list
managedflink.operations.cancel
managedflink.operations.delete
managedflink.operations.get
managedflink.operations.list
managedflink.sessions.create
managedflink.sessions.delete
managedflink.sessions.get
managedflink.sessions.list
managedflink.sessions.update
resourcemanager.projects.get
resourcemanager.projects.list
Managed Flink Viewer
Beta
( roles/ managedflink.viewer )
Readonly access to Managed Flink resources.
managedflink.deployments.get
managedflink.deployments.list
managedflink.jobs.get
managedflink.jobs.list
managedflink.locations.*
managedflink.locations.get
managedflink.locations.list
managedflink.operations.get
managedflink.operations.list
managedflink.sessions.get
managedflink.sessions.list
resourcemanager.projects.get
resourcemanager.projects.list
Managed Flink Developer
Beta
( roles/ managedflink.developer )
Full access to Managed Flink Jobs and Sessions and read access to Deployments.
managedflink.deployments.get
managedflink.deployments.list
managedflink.jobs.*
managedflink.jobs.create
managedflink.jobs.delete
managedflink.jobs.get
managedflink.jobs.list
managedflink.jobs.update
managedflink.locations.*
managedflink.locations.get
managedflink.locations.list
managedflink.operations.get
managedflink.operations.list
managedflink.sessions.*
managedflink.sessions.create
managedflink.sessions.delete
managedflink.sessions.get
managedflink.sessions.list
managedflink.sessions.update
resourcemanager.projects.get
resourcemanager.projects.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Managed Flink Service Agent
( roles/ managedflink.serviceAgent )
Gives Managed Flink Service Agent access to Cloud Platform resources.
Warning: Do not grant service agent roles to any principals except
service agents .
compute. networkAttachments. create
compute. networkAttachments. delete
compute.networkAttachments.get
compute. networkAttachments. list
compute. networkAttachments. update
compute.networks.get
compute.networks.list
compute.regionOperations.get
compute.subnetworks.get
compute.subnetworks.list
compute.subnetworks.use
dns. networks. targetWithPeeringZone
managedkafka.clusters.get
managedkafka.clusters.list
managedkafka.clusters.update
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring.timeSeries.create
serviceusage.services.use
storage.objects.get
BigQuery Migration Service roles
This table lists the predefined IAM roles and permissions for
BigQuery Migration Service. To search through all roles and permissions, see the
role and permission index .
Role
Permissions
Bigquerymigration Admin
( roles/ bigquerymigration.admin )
Admin role for bigquerymigration
bigquerymigration.*
bigquerymigration.subtasks.get
bigquerymigration. subtasks. list
bigquerymigration. translation. translate
bigquerymigration. workflows. create
bigquerymigration. workflows. delete
bigquerymigration. workflows. enableAiOutputTypes
bigquerymigration. workflows. enableLineageOutputTypes
bigquerymigration. workflows. enableOutputTypePermissions
bigquerymigration. workflows. get
bigquerymigration. workflows. list
bigquerymigration. workflows. orchestrateTask
bigquerymigration. workflows. update
resourcemanager.projects.get
resourcemanager.projects.list
MigrationWorkflow Editor
( roles/ bigquerymigration.editor )
Editor of EDW migration workflows.
bigquerymigration.subtasks.*
bigquerymigration.subtasks.get
bigquerymigration. subtasks. list
bigquerymigration. workflows. create
bigquerymigration. workflows. delete
bigquerymigration. workflows. enableAiOutputTypes
bigquerymigration. workflows. enableLineageOutputTypes
bigquerymigration. workflows. enableOutputTypePermissions
bigquerymigration. workflows. get
bigquerymigration. workflows. list
bigquerymigration. workflows. update
MigrationWorkflow Viewer
( roles/ bigquerymigration.viewer )
Viewer of EDW migration MigrationWorkflow.
bigquerymigration.subtasks.*
bigquerymigration.subtasks.get
bigquerymigration. subtasks. list
bigquerymigration. workflows. get
bigquerymigration. workflows. list
Task Orchestrator
( roles/ bigquerymigration.orchestrator )
Orchestrator of EDW migration tasks.
bigquerymigration. workflows. orchestrateTask
storage.objects.list
Migration Translation User
( roles/ bigquerymigration.translationUser )
User of EDW migration interactive SQL translation service.
bigquerymigration. translation. translate
Task Worker
( roles/ bigquerymigration.worker )
Worker that executes EDW migration subtasks.
storage.objects.create
storage.objects.get
storage.objects.list
BigQuery Omni roles
This table lists the predefined IAM roles and permissions for
BigQuery Omni. To search through all roles and permissions, see
the role and permission index .
BigQuery Omni offers the following service agent roles.
Service agent roles should only be granted to service agents .
Role
Permissions
BigQuery Omni Service Agent
( roles/ bigqueryomni.serviceAgent )
Gives BigQuery Omni access to tables in user projects.
Warning: Do not grant service agent roles to any principals except
service agents .
bigquery.jobs.create
bigquery.tables.updateData
BigQuery sharing roles
This table lists the predefined IAM roles and permissions for
BigQuery sharing. To search through all roles and permissions, see the
role and permission index .
Role
Permissions
Analytics Hub Admin
( roles/ analyticshub.admin )
Administer Data Exchanges and Listings
analyticshub. dataExchanges. create
analyticshub. dataExchanges. delete
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub. dataExchanges. setIamPolicy
analyticshub. dataExchanges. update
analyticshub. dataExchanges. viewSubscriptions
analyticshub.listings.create
analyticshub.listings.delete
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub. listings. setIamPolicy
analyticshub.listings.update
analyticshub. listings. viewSubscriptions
analyticshub.subscriptions.*
analyticshub. subscriptions. create
analyticshub. subscriptions. delete
analyticshub.subscriptions.get
analyticshub. subscriptions. list
analyticshub. subscriptions. update
resourcemanager.projects.get
resourcemanager.projects.list
Analyticshub Editor
( roles/ analyticshub.editor )
Editor role for analyticshub
analyticshub. dataExchanges. create
analyticshub. dataExchanges. delete
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub. dataExchanges. update
analyticshub.listings.create
analyticshub.listings.delete
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub.listings.update
analyticshub.subscriptions.*
analyticshub. subscriptions. create
analyticshub. subscriptions. delete
analyticshub.subscriptions.get
analyticshub. subscriptions. list
analyticshub. subscriptions. update
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Viewer
( roles/ analyticshub.viewer )
Can browse Data Exchanges and Listings
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Listing Admin
( roles/ analyticshub.listingAdmin )
Grants full control over the Listing, including updating, deleting and setting ACLs
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub.listings.delete
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub. listings. setIamPolicy
analyticshub.listings.update
analyticshub. listings. viewSubscriptions
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Publisher
( roles/ analyticshub.publisher )
Can publish to Data Exchanges thus creating Listings
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub.listings.create
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Subscriber
( roles/ analyticshub.subscriber )
Can browse Data Exchanges and subscribe to Listings
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub. dataExchanges. subscribe
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub. listings. subscribe
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Subscription Owner
( roles/ analyticshub.subscriptionOwner )
Grants full control over the Subscription, including updating and deleting
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub.subscriptions.*
analyticshub. subscriptions. create
analyticshub. subscriptions. delete
analyticshub.subscriptions.get
analyticshub. subscriptions. list
analyticshub. subscriptions. update
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery permissions
The following tables list the permissions available in
BigQuery. These are included in predefined roles and can be used
in custom role definitions. To search through all roles and permissions, see the
role and permission index .
BigQuery permissions
This table lists the IAM permissions for BigQuery
and the roles that include them. To search through all roles and permissions,
see the role and permission index .
Permission
Included in roles
bigquery.bireservations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery.bireservations.update
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery. capacityCommitments. create
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery. capacityCommitments. delete
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery. capacityCommitments. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery. capacityCommitments. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery. capacityCommitments. update
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.config.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Job User ( roles/ bigquery.jobUser )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery Studio User ( roles/ bigquery.studioUser )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
BigQuery Data Transfer Service Agent ( roles/ bigquerydatatransfer.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
FleetEngine Service Agent ( roles/ fleetengine.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
bigquery.config.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Assured Workloads Administrator ( roles/ assuredworkloads.admin )
Assured Workloads Editor ( roles/ assuredworkloads.editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.connections.create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.connections.delegate
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
BigQuery Data Transfer Service Agent ( roles/ bigquerydatatransfer.serviceAgent )
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Dataplex Discovery BigLake Publishing Service Agent ( roles/ dataplex.discoveryBigLakePublishingServiceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
bigquery.connections.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.connections.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Data Catalog Admin ( roles/ datacatalog.admin )
Datacatalog Editor ( roles/ datacatalog.editor )
Data Catalog Viewer ( roles/ datacatalog.viewer )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Connection User ( roles/ bigquery.connectionUser )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
bigquery. connections. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Connection User ( roles/ bigquery.connectionUser )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.connections.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Connection User ( roles/ bigquery.connectionUser )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery. connections. setIamPolicy
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Security Admin ( roles/ iam.securityAdmin )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.connections.update
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.connections.updateTag
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Data Catalog Admin ( roles/ datacatalog.admin )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Data Catalog Tag Editor ( roles/ datacatalog.tagEditor )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.connections.use
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Connection Admin ( roles/ bigquery.connectionAdmin )
BigQuery Connection User ( roles/ bigquery.connectionUser )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Dataplex Discovery BigLake Publishing Service Agent ( roles/ dataplex.discoveryBigLakePublishingServiceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.dataPolicies.attach
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.dataPolicies.create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.dataPolicies.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.dataPolicies.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Policy Viewer ( roles/ bigquerydatapolicy.viewer )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. dataPolicies. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. dataPolicies. getRawData
Raw Data Reader ( roles/ bigquerydatapolicy.rawDataReader )
bigquery.dataPolicies.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Policy Viewer ( roles/ bigquerydatapolicy.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. dataPolicies. maskedGet
Masked Reader ( roles/ bigquerydatapolicy.maskedReader )
bigquery. dataPolicies. setIamPolicy
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin )
Security Admin ( roles/ iam.securityAdmin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.dataPolicies.update
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.datasets.create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Commerce Business Enablement Configuration Admin ( roles/ commercebusinessenablement.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent )
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Kubernetes Engine Service Agent ( roles/ container.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Data Labeling Service Agent ( roles/ datalabeling.serviceAgent )
Dataplex Discovery Publishing Service Agent ( roles/ dataplex.discoveryPublishingServiceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent )
Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent )
FleetEngine Service Agent ( roles/ fleetengine.serviceAgent )
Cloud Logging Service Agent ( roles/ logging.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Observability Service Agent ( roles/ observability.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent )
StorageInsights Service Agent ( roles/ storageinsights.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery. datasets. createTagBinding
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Tag User ( roles/ resourcemanager.tagUser )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
bigquery.datasets.delete
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. datasets. deleteTagBinding
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Tag User ( roles/ resourcemanager.tagUser )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
bigquery.datasets.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Commerce Business Enablement Configuration Admin ( roles/ commercebusinessenablement.admin )
Data Catalog Admin ( roles/ datacatalog.admin )
Datacatalog Editor ( roles/ datacatalog.editor )
Data Catalog Viewer ( roles/ datacatalog.viewer )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer )
BigQuery Authorized Routine Metadata Viewer ( roles/ bigquery.routineMetadataViewer )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
SLZ BQDW Blueprint Project Level Remediator ( roles/ securedlandingzone.bqdwProjectRemediator )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
Audit Manager Auditing Service Agent ( roles/ auditmanager.serviceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent )
Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent )
Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Security Compliance Service Agent ( roles/ cloudsecuritycompliance.serviceAgent )
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Kubernetes Engine Service Agent ( roles/ container.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Data Labeling Service Agent ( roles/ datalabeling.serviceAgent )
Dataplex Discovery Publishing Service Agent ( roles/ dataplex.discoveryPublishingServiceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent )
Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent )
FleetEngine Service Agent ( roles/ fleetengine.serviceAgent )
Cloud Logging Service Agent ( roles/ logging.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Observability Service Agent ( roles/ observability.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Security Center Control Service Agent ( roles/ securitycenter.controlServiceAgent )
Security Health Analytics Service Agent ( roles/ securitycenter.securityHealthAnalyticsServiceAgent )
Security Center Service Agent ( roles/ securitycenter.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.datasets.getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
SLZ BQDW Blueprint Project Level Remediator ( roles/ securedlandingzone.bqdwProjectRemediator )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent )
bigquery.datasets.link
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Cloud Logging Service Agent ( roles/ logging.serviceAgent )
Observability Service Agent ( roles/ observability.serviceAgent )
bigquery. datasets. listEffectiveTags
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
bigquery. datasets. listSharedDatasetUsage
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. datasets. listTagBindings
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
bigquery.datasets.setIamPolicy
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Security Admin ( roles/ iam.securityAdmin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
SLZ BQDW Blueprint Project Level Remediator ( roles/ securedlandingzone.bqdwProjectRemediator )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent )
bigquery.datasets.update
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Commerce Business Enablement Configuration Admin ( roles/ commercebusinessenablement.admin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
SLZ BQDW Blueprint Project Level Remediator ( roles/ securedlandingzone.bqdwProjectRemediator )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent )
bigquery.datasets.updateTag
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Data Catalog Admin ( roles/ datacatalog.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Data Catalog Tag Editor ( roles/ datacatalog.tagEditor )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.jobs.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Job User ( roles/ bigquery.jobUser )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery Studio User ( roles/ bigquery.studioUser )
BigQuery User ( roles/ bigquery.user )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent )
BigQuery Data Transfer Service Agent ( roles/ bigquerydatatransfer.serviceAgent )
BigQuery Omni Service Agent ( roles/ bigqueryomni.serviceAgent )
Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent )
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Data Labeling Service Agent ( roles/ datalabeling.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Data Studio Service Agent ( roles/ datastudio.serviceAgent )
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
FleetEngine Service Agent ( roles/ fleetengine.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Monitoring Service Agent ( roles/ monitoring.notificationServiceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery. jobs. createGlobalQuery
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.jobs.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
bigquery.jobs.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent )
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Data Labeling Service Agent ( roles/ datalabeling.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.jobs.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
bigquery.jobs.listAll
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery. jobs. listExecutionMetadata
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.jobs.update
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
bigquery.models.create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.models.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.models.export
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.models.getData
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
bigquery.models.getMetadata
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Data Catalog Admin ( roles/ datacatalog.admin )
Datacatalog Editor ( roles/ datacatalog.editor )
Data Catalog Viewer ( roles/ datacatalog.viewer )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer )
BigQuery Authorized Routine Metadata Viewer ( roles/ bigquery.routineMetadataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
bigquery.models.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
bigquery.models.updateData
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.models.updateMetadata
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.models.updateTag
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Data Catalog Admin ( roles/ datacatalog.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Data Catalog Tag Editor ( roles/ datacatalog.tagEditor )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.objectRefs.read
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery ObjectRef Admin ( roles/ bigquery.objectRefAdmin )
BigQuery ObjectRef Reader ( roles/ bigquery.objectRefReader )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.objectRefs.write
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery ObjectRef Admin ( roles/ bigquery.objectRefAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.readsessions.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Read Session User ( roles/ bigquery.readSessionUser )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery Studio User ( roles/ bigquery.studioUser )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.readsessions.getData
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Read Session User ( roles/ bigquery.readSessionUser )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery Studio User ( roles/ bigquery.studioUser )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
bigquery.readsessions.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Read Session User ( roles/ bigquery.readSessionUser )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery Studio User ( roles/ bigquery.studioUser )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. reservationAssignments. create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery. reservationAssignments. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery. reservationAssignments. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery. reservationAssignments. search
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery. reservationGroups. create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery. reservationGroups. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.reservationGroups.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery. reservationGroups. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery.reservations.create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.reservations.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.reservations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery. reservations. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.reservations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery. reservations. listFailoverDatasets
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Resource Viewer ( roles/ bigquery.resourceViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery. reservations. setIamPolicy
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Security Admin ( roles/ iam.securityAdmin )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.reservations.update
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.reservations.use
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Resource Admin ( roles/ bigquery.resourceAdmin )
BigQuery Resource Editor ( roles/ bigquery.resourceEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery.routines.create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.routines.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.routines.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Data Catalog Admin ( roles/ datacatalog.admin )
Datacatalog Editor ( roles/ datacatalog.editor )
Data Catalog Viewer ( roles/ datacatalog.viewer )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer )
BigQuery Authorized Routine Metadata Viewer ( roles/ bigquery.routineMetadataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.routines.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer )
BigQuery Authorized Routine Metadata Viewer ( roles/ bigquery.routineMetadataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.routines.update
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.routines.updateTag
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Data Catalog Admin ( roles/ datacatalog.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Data Catalog Tag Editor ( roles/ datacatalog.tagEditor )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. rowAccessPolicies. create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. rowAccessPolicies. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.rowAccessPolicies.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. rowAccessPolicies. getFilteredData
BigQuery Filtered Data Viewer ( roles/ bigquery.filteredDataViewer )
bigquery. rowAccessPolicies. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. rowAccessPolicies. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. rowAccessPolicies. overrideTimeTravelRestrictions
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery. rowAccessPolicies. setIamPolicy
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Security Admin ( roles/ iam.securityAdmin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. rowAccessPolicies. update
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.savedqueries.create
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.savedqueries.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.savedqueries.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery.savedqueries.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquery.savedqueries.update
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
bigquery.tables.create
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent )
Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent )
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Kubernetes Engine Service Agent ( roles/ container.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Data Labeling Service Agent ( roles/ datalabeling.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.tables.createIndex
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.tables.createSnapshot
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
bigquery. tables. createTagBinding
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Tag User ( roles/ resourcemanager.tagUser )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
bigquery.tables.delete
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.tables.deleteIndex
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.tables.deleteSnapshot
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. tables. deleteTagBinding
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Tag User ( roles/ resourcemanager.tagUser )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
bigquery.tables.export
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.tables.get
BigQuery Admin ( roles/ bigquery.admin )
Data Catalog Admin ( roles/ datacatalog.admin )
Datacatalog Editor ( roles/ datacatalog.editor )
Data Catalog Viewer ( roles/ datacatalog.viewer )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer )
BigQuery Authorized Routine Metadata Viewer ( roles/ bigquery.routineMetadataViewer )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent )
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Kubernetes Engine Service Agent ( roles/ container.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Data Labeling Service Agent ( roles/ datalabeling.serviceAgent )
Datapipelines Service Agent ( roles/ datapipelines.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.tables.getData
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Data Labeling Service Agent ( roles/ datalabeling.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent )
FleetEngine Service Agent ( roles/ fleetengine.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.tables.getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.tables.list
BigQuery Admin ( roles/ bigquery.admin )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer )
BigQuery Authorized Routine Metadata Viewer ( roles/ bigquery.routineMetadataViewer )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
Looker Service Agent ( roles/ looker.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
bigquery. tables. listEffectiveTags
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
bigquery. tables. listTagBindings
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
Tag User ( roles/ resourcemanager.tagUser )
Tag Viewer ( roles/ resourcemanager.tagViewer )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
DSPM Service Agent ( roles/ dspm.serviceAgent )
bigquery.tables.replicateData
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Data Viewer ( roles/ bigquery.dataViewer )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. tables. restoreSnapshot
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.tables.setCategory
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery. tables. setColumnDataPolicy
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.tables.setIamPolicy
Owner ( roles/ owner )
BigQuery Admin ( roles/ bigquery.admin )
Security Admin ( roles/ iam.securityAdmin )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.tables.update
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent )
Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent )
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Kubernetes Engine Service Agent ( roles/ container.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.tables.updateData
BigQuery Admin ( roles/ bigquery.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin )
BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner )
Dataplex Storage Data Writer ( roles/ dataplex.storageDataWriter )
Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent )
Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent )
Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent )
Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent )
Vertex AI Service Agent ( roles/ aiplatform.serviceAgent )
Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent )
AutoML Service Agent ( roles/ automl.serviceAgent )
Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent )
Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent )
BigQuery Omni Service Agent ( roles/ bigqueryomni.serviceAgent )
Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent )
Chronicle Service Agent ( roles/ chronicle.serviceAgent )
Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent )
Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent )
Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent )
Kubernetes Engine Service Agent ( roles/ container.serviceAgent )
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Datastream Service Agent ( roles/ datastream.serviceAgent )
Dialogflow Service Agent ( roles/ dialogflow.serviceAgent )
Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent )
Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent )
AI Platform Service Agent ( roles/ ml.serviceAgent )
Retail Service Agent ( roles/ retail.serviceAgent )
Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent )
Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent )
bigquery.tables.updateIndex
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.tables.updateTag
BigQuery Admin ( roles/ bigquery.admin )
Data Catalog Admin ( roles/ datacatalog.admin )
BigQuery Data Editor ( roles/ bigquery.dataEditor )
BigQuery Data Owner ( roles/ bigquery.dataOwner )
BigQuery Security Admin ( roles/ bigquery.securityAdmin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Data Catalog Tag Editor ( roles/ datacatalog.tagEditor )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Data Scientist ( roles/ iam.dataScientist )
Databases Admin ( roles/ iam.databasesAdmin )
ML Engineer ( roles/ iam.mlEngineer )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
DLP API Service Agent ( roles/ dlp.serviceAgent )
bigquery.transfers.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Support User ( roles/ iam.supportUser )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent )
bigquery.transfers.update
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent )
BigQuery Connection API permissions
There are no IAM permissions for this service.
BigQuery Continuous Query permissions
There are no IAM permissions for this service.
BigQuery Data Policy permissions
There are no IAM permissions for this service.
BigQuery Data Transfer Service permissions
There are no IAM permissions for this service.
BigQuery Engine for Apache Flink permissions
This table lists the IAM permissions for
BigQuery Engine for Apache Flink and the roles that include them. To search through all
roles and permissions, see the
role and permission index .
Permission
Included in roles
managedflink. deployments. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
managedflink. deployments. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
managedflink.deployments.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.deployments.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink. deployments. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
managedflink.jobs.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.jobs.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.jobs.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.jobs.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.jobs.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.locations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.locations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.operations.cancel
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
managedflink.operations.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
managedflink.operations.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.operations.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.sessions.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.sessions.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.sessions.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.sessions.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Viewer ( roles/ managedflink.viewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
Managed Flink Developer ( roles/ managedflink.developer )
managedflink.sessions.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Managed Flink Admin ( roles/ managedflink.admin )
Managed Flink Developer ( roles/ managedflink.developer )
BigQuery Migration Service permissions
This table lists the IAM permissions for
BigQuery Migration Service and the roles that include them. To search through all
roles and permissions, see the
role and permission index .
Permission
Included in roles
bigquerymigration.subtasks.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
MigrationWorkflow Viewer ( roles/ bigquerymigration.viewer )
Support User ( roles/ iam.supportUser )
bigquerymigration. subtasks. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
MigrationWorkflow Viewer ( roles/ bigquerymigration.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
bigquerymigration. translation. translate
Owner ( roles/ owner )
Editor ( roles/ editor )
BigQuery Admin ( roles/ bigquery.admin )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
BigQuery Studio Admin ( roles/ bigquery.studioAdmin )
BigQuery User ( roles/ bigquery.user )
Migration Translation User ( roles/ bigquerymigration.translationUser )
DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver )
DLP Project Data Profiles Driver ( roles/ dlp.projectdriver )
Databases Admin ( roles/ iam.databasesAdmin )
Service agent roles
Warning: Don't grant service agent roles to any principals except service agents .
Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent )
Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent )
Dataprep Service Agent ( roles/ dataprep.serviceAgent )
bigquerymigration. workflows. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
bigquerymigration. workflows. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
bigquerymigration. workflows. enableAiOutputTypes
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
bigquerymigration. workflows. enableLineageOutputTypes
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
bigquerymigration. workflows. enableOutputTypePermissions
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
bigquerymigration. workflows. get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
MigrationWorkflow Viewer ( roles/ bigquerymigration.viewer )
Support User ( roles/ iam.supportUser )
bigquerymigration. workflows. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
MigrationWorkflow Viewer ( roles/ bigquerymigration.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
bigquerymigration. workflows. orchestrateTask
Owner ( roles/ owner )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
Task Orchestrator ( roles/ bigquerymigration.orchestrator )
bigquerymigration. workflows. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Bigquerymigration Admin ( roles/ bigquerymigration.admin )
MigrationWorkflow Editor ( roles/ bigquerymigration.editor )
BigQuery Omni permissions
There are no IAM permissions for this service.
BigQuery sharing permissions
This table lists the IAM permissions for
BigQuery sharing and the roles that include them. To search through all
roles and permissions, see the
role and permission index .
Permission
Included in roles
analyticshub. dataExchanges. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
analyticshub. dataExchanges. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
analyticshub.dataExchanges.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Support User ( roles/ iam.supportUser )
analyticshub. dataExchanges. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
analyticshub. dataExchanges. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
analyticshub. dataExchanges. setIamPolicy
Owner ( roles/ owner )
Analytics Hub Admin ( roles/ analyticshub.admin )
Security Admin ( roles/ iam.securityAdmin )
analyticshub. dataExchanges. subscribe
Owner ( roles/ owner )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
analyticshub. dataExchanges. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
analyticshub. dataExchanges. viewSubscriptions
Owner ( roles/ owner )
Analytics Hub Admin ( roles/ analyticshub.admin )
analyticshub.listings.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
analyticshub.listings.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
analyticshub.listings.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Support User ( roles/ iam.supportUser )
analyticshub. listings. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
analyticshub.listings.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
analyticshub. listings. setIamPolicy
Owner ( roles/ owner )
Analytics Hub Admin ( roles/ analyticshub.admin )
Security Admin ( roles/ iam.securityAdmin )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
analyticshub. listings. subscribe
Owner ( roles/ owner )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
analyticshub.listings.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
analyticshub. listings. viewSubscriptions
Owner ( roles/ owner )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
analyticshub. subscriptions. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
analyticshub. subscriptions. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
analyticshub.subscriptions.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Support User ( roles/ iam.supportUser )
analyticshub. subscriptions. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Security Admin ( roles/ iam.securityAdmin )
Security Reviewer ( roles/ iam.securityReviewer )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Security Auditor ( roles/ iam.securityAuditor )
Support User ( roles/ iam.supportUser )
analyticshub. subscriptions. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Permissions for BigQuery ML tasks
The following table describes the permissions needed for common
BigQuery ML tasks.
Permission
Description
bigquery.jobs.create
bigquery.models.create
bigquery.models.getData
bigquery.models.updateData
Create a new model using CREATE MODEL statement
bigquery.jobs.create
bigquery.models.create
bigquery.models.getData
bigquery.models.updateData
bigquery.models.updateMetadata
Replace an existing model using CREATE OR REPLACE MODEL statement
bigquery.models.delete
Delete model using models.delete API
bigquery.jobs.create
bigquery.models.delete
Delete model using DROP MODEL statement
bigquery.models.getMetadata
Get model metadata using models.get API
bigquery.models.list
List models and metadata on models using models.list API
bigquery.models.updateMetadata
Update model metadata using models.delete API. If setting or updating a non-zero expiration
time for Model, bigquery.models.delete permission is also needed
bigquery.jobs.create
bigquery.models.getData
Perform evaluation, prediction and model and feature inspections using functions such as
ML.EVALUATE , ML.PREDICT , ML.TRAINING_INFO , and
ML.WEIGHTS .
bigquery.jobs.create
bigquery.models.export
Export a model
bigquery.models.updateTag
Update Data Catalog tags for a model.
What's next
For more information about assigning roles at the dataset level, see
Controlling access to datasets .
For more information about assigning roles at the table or view level, see
Controlling access to tables and views .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
