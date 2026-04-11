---
title: "Bigtable access control with IAM \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/access-control
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/access-control
  title: "Bigtable access control with IAM \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Bigtable access control with IAM
This page describes the access control options in Bigtable.
Overview
Bigtable uses Identity and Access Management (IAM) for
access control. You set IAM policies on resources to control who has what access
to which resources.
Bigtable resources are organized in a hierarchy. A
Google Cloud project is the parent of a Bigtable
instance, which is the parent of its clusters and tables. A table is the parent
of its authorized views while a cluster is the parent of its backups. You
can configure access control at each level.
If you have permissions at a level, then you automatically have permissions
below that level. For example, if you have access at the project level, then you
have access to the instances, clusters, tables, authorized views,
continuous materialized views in that project. If you are granted access to
an authorized view or a continuous materialized view, then you
don't automatically have access to higher-level resources that are parents of
the authorized view or continuous materialized view, such as the
table and instance. This behavior is called policy inheritance .
For more information about IAM hierarchy, see IAM policy
inheritance .
Here are some examples of using access control at the project level:
Allow a user to read from, but not write to, any table within the project.
Allow a user to read from and write to any table within the project, but not
manage instances.
Allow a user to read from and write to any table within the project, and
manage instances.
Examples of using access control at the instance level include the
following:
Allow a user to read from any table in only one instance in a project that
has multiple instances.
Allow a user to manage only one instance in a project that has multiple
instances.
Examples of using access control at the table level include the following:
Allow a user to write to a table but not read from the table.
Allow a user to read from a table but not write to the table.
Examples of using access control at the backup level include the following:
Prevent a user from deleting a backup.
Prevent a user from restoring from the backup.
Examples of using access control at the authorized view level
include the following:
Let a user read an authorized view but not modify it.
Let a user view data from only one of multiple authorized views of a
table.
Examples of using access control at the continuous materialized view
level include the following:
Let a user read from a continuous materialized view but not modify
the underlying table.
For a detailed description of IAM and its features, see the IAM
developer's guide. In particular, see Granting, Changing, and Revoking
Access .
In Bigtable, you cannot grant access to the following types of
principals :
allAuthenticatedUsers
allUsers
For lists of the permissions and roles that Bigtable supports, see
the following sections.
Enabling the Bigtable API
To view and assign Bigtable IAM roles, you must enable the
Bigtable API for your project. You won't be able to see the
Bigtable roles in the Google Cloud console until you enable the
API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Permissions
This section summarizes the permissions that Bigtable supports.
Permissions allow users to perform specific actions on Bigtable
resources. For example, the bigtable.instances.list permissions allows users
to list all of the Bigtable instances within a project. You don't
grant permissions to users directly; instead, you assign each user a predefined
role or custom role , which grants one or more
permissions.
The following tables list the IAM permissions that are associated with
Bigtable:
App profile permission name
Description
bigtable.appProfiles.create
Create a Bigtable app profile.
bigtable.appProfiles.delete
Delete a Bigtable app profile.
bigtable.appProfiles.get
Get information about a Bigtable app profile.
bigtable.appProfiles.list
List an instance's Bigtable app profiles.
bigtable.appProfiles.update
Update the settings for a Bigtable app profile.
Backups permission name
Description
bigtable.backups.create
Create a Bigtable backup.
bigtable.backups.delete
Delete a Bigtable backup.
bigtable.backups.get
Get information about a Bigtable backup.
bigtable.backups.getIamPolicy
Read a backup's access control lists (ACL). Returned as IAM policies.
bigtable.backups.list
List Bigtable backups.
bigtable.backups.restore
Restore from a Bigtable backup.
bigtable.backups.testIamPermissions
Get the caller's permissions on a specified backup.
bigtable.backups.read
Read from a Bigtable backup.
bigtable.backups.setIamPolicy
Update backup ACLs.
bigtable.backups.update
Modify the expiration of a Bigtable backup.
Cluster permission name
Description
bigtable.clusters.create
Create a Bigtable cluster.
bigtable.clusters.delete
Delete a Bigtable cluster.
bigtable.clusters.get
Get information about a Bigtable cluster.
bigtable.clusters.list
List an instance's Bigtable clusters.
bigtable.clusters.update
Update the settings for a Bigtable cluster.
Hot tablets permission name
Description
bigtable.hotTablets.list
List hot tablets for a cluster.
Instance permission name
Description
bigtable.instances.create
Create a Bigtable instance.
bigtable.instances.createTagBinding
Create a tag.
bigtable.instances.delete
Delete a Bigtable instance.
bigtable.instances.deleteTagBinding
Delete a tag.
bigtable.instances.get
Get information about a Bigtable instance.
bigtable.instances.getIamPolicy
Read instance access control lists (ACLs). Returned as IAM policies.
bigtable.instances.list
List a project's Bigtable instances.
bigtable.instances.listEffectiveTagBindings
List all tags in effect for an instance.
bigtable.instances.listTagBindings
List an instance's tags.
bigtable.instances.ping
Send channel priming requests.
bigtable.instances.executeQuery
Send ExecuteQuery and PrepareQuery requests to an instance.
bigtable.instances.setIamPolicy
Update ACLs.
bigtable.instances.update
Update the settings for a Bigtable instance.
Key Visualizer permission name
Description
bigtable.keyvisualizer.get
Get Key Visualizer information about a table, including metadata about
access patterns and row key distributions.
bigtable.keyvisualizer.list
List available Key Visualizer information for a table.
Location permission name
Description
bigtable.locations.list
List Bigtable locations.
Table permission name
Description
bigtable.tables.checkConsistency
Check if a replicated table is up to date.
bigtable.tables.create
Create a table.
bigtable.tables.delete
Delete a table.
bigtable.tables.generateConsistencyToken
Generate token to check if a replicated table is up to date.
bigtable.tables.get
Get information about a table, including column families and their
individual settings.
bigtable.tables.getIamPolicy
Read table ACLs. Returned as IAM policies.
bigtable.tables.list
List tables in an instance.
bigtable.tables.mutateRows
Modify rows within a table, or truncate the table.
bigtable.tables.readRows
Read rows from a table. This includes information about the table, such as
column families and their individual settings.
bigtable.tables.sampleRowKeys
Get a sample of the row keys that are used in a table.
bigtable.tables.setIamPolicy
Update table ACLs.
bigtable.tables.undelete
Recover a deleted table.
bigtable.tables.update
Update the settings for a table, including column families and their
individual settings.
Location permission name
Description
bigtable.locations.list
List Bigtable locations.
Authorized view permission name
Description
bigtable.authorizedViews.create
Create an authorized view.
bigtable.authorizedViews.delete
Delete an authorized view.
bigtable.authorizedViews.get
Get information about an authorized view.
bigtable.authorizedViews.getIamPolicy
View access control for an authorized view. Returned as IAM policies.
bigtable.authorizedViews.list
List authorized views in a table.
bigtable.authorizedViews.mutateRows
Modify rows within an authorized view.
bigtable.authorizedViews.readRows
Read rows from an authorized view.
bigtable.authorizedViews.sampleRowKeys
Get a sample of the row keys that are used in an authorized view.
bigtable.authorizedViews.setIamPolicy
Update access control policies for an authorized view.
bigtable.authorizedViews.update
Update the settings for an authorized view.
Continuous materialized view permission name
Description
bigtable.materializedViews.create
Create a continuous materialized view.
bigtable.materializedViews.delete
Delete a continuous materialized view.
bigtable.materializedViews.get
Get information about a continuous materialized view.
bigtable.materializedViews.getIamPolicy
View access control for a continuous materialized view. Returned as IAM policies.
bigtable.materializedViews.list
List continuous materialized views in an instance.
bigtable.materializedViews.readRows
Read rows from a continuous materialized view.
bigtable.materializedViews.sampleRowKeys
Get a sample of the row keys that are used in a continuous materialized view.
bigtable.materializedViews.setIamPolicy
Update access control policies for a continuous materialized view.
bigtable.materializedViews.update
Update the settings for a continuous materialized view.
Predefined roles
Each predefined role is a bundle of one or more permissions . For
example, roles/bigtable.reader provides read-only access to information about
Bigtable instances, clusters, tables, and column families, as well
as the data contained within your tables. You assign roles to users or groups,
which allows them to perform actions on the resources in your project.
The following table lists the predefined roles for Bigtable,
including a list of the permissions associated with each role:
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
Custom roles
If the predefined roles for Bigtable don't address your
business requirements, you can define your own custom roles
with permissions that you specify.
If your custom role needs to support access to the Google Cloud console, you
must identify the tasks that users will perform, then ensure that the custom
role has the required permissions for each task, as shown in the following
table. If a custom role does not have all of the required permissions for a
task, and a user tries to perform that task, the Google Cloud console won't
work correctly.
Google Cloud console task
Required permissions
Basic access to the Google Cloud console
bigtable.appProfiles.get
bigtable.appProfiles.list
bigtable.clusters.get
bigtable.clusters.list
bigtable.instances.get
bigtable.instances.list
bigtable.locations.list
bigtable.tables.get
bigtable.tables.list
resourcemanager.projects.get
Create an instance or cluster
Basic access permissions, plus:
bigtable.clusters.create
bigtable.instances.create
Modify an instance or cluster
Basic access permissions, plus:
bigtable.clusters.update
bigtable.instances.update
Manage replication configuration
Basic access permissions, plus:
bigtable.appProfiles.create
bigtable.appProfiles.delete
bigtable.appProfiles.update
Delete an instance or cluster
Basic access permissions, plus:
bigtable.clusters.delete
bigtable.instances.delete
Monitor an instance by viewing graphs
Basic access permissions, plus:
monitoring.metricDescriptors.get
monitoring.metricDescriptors.list
monitoring.timeSeries.list
Create and update a table
Basic access permissions, plus:
bigtable.tables.create
bigtable.tables.update
Restore a backup
Basic access permissions, plus:
bigtable.backups.list
bigtable.tables.create
bigtable.backups.restore
IAM management
This section explains how to manage IAM roles and related permissions at
project, instance, table, and backup level.
Project-level IAM management
At the project level, you can grant, change, and revoke IAM roles using the
Google Cloud console, the IAM API, or the Google Cloud CLI. See Granting,
Changing, and Revoking Access for detailed instructions.
Once you create a project, you can grant the project level IAM roles to users
based on the specific access levels.
Required roles
Before you set instance-level , table-level , backup-level ,
authorized view-level, or continuous materialized view-level IAM
roles for a user, ensure that the user has at least one of the following
project-level IAM roles:
Bigtable Viewer (recommended)
Bigtable Reader
Bigtable User
Bigtable Administrator
Note: You don't need to grant these project-level roles to service accounts
because service accounts are associated with a Google Cloud project as opposed
to a specific user.
Choose a project-level role that has no more permissions than the user actually
needs across all instances, tables, backups, authorized views, or
continuous materialized views in the project. For this reason, you should
grant the Bigtable Viewer role in almost all cases.
If the user does not have at least one of these project-level roles, the user
won't have access to Bigtable through the Google Cloud console.
The Google Cloud console requires one of these project-level roles so that it
can retrieve information about instances, clusters, tables, or backups on behalf
of the user.
Granting instance-level IAM roles
At the instance level, you can grant any of Bigtable's predefined
roles to a user or service account. You can also grant any custom
roles that you have defined.
Note: After you change a user's instance-level roles, it may take up to two
minutes for the changes to take effect.
To grant a predefined or custom role to a user or service account at the
instance level:
Console
Go to the Bigtable instances page in the
Google Cloud console.
Go to the instances page
Check the boxes next to the instances whose roles you want to manage. An
information panel appears.
In the information panel, click Permissions .
Under Add principals , start typing the email address of the user or
service account you want to add, then click the email address of the user or
service account.
Click the Select a role drop-down list, then click
Bigtable to select a predefined role or Custom to
select a custom role.
Click the name of each role that you want to assign.
Click Add . The user or service account is granted the roles that you
specified at the instance level.
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
Use the bigtable instances set-iam-policy command:
gcloud bigtable instances set-iam-policy \
INSTANCE_ID \
POLICY_FILE
Provide the following:
INSTANCE_ID :
The permanent identifier for the instance.
POLICY_FILE : Path to a local JSON or YAML file containing
a valid IAM policy .
Granting table-level IAM roles
At the table level, you can grant any of Bigtable's predefined
roles to a user or service account. You can also grant any custom
roles that you have defined.
Note: After you change a user's table-level roles, it can take up to two minutes
for the changes to take effect.
To grant a predefined or custom role to a user or service account at the table
level:
Console
Go to the Bigtable instances page in the
Google Cloud console.
Go to the instances page
Click the name of the instance that contains the table whose IAM you are
setting.
Select Tables in the left navigation pane.
Check the boxes next to the tables whose roles you want to manage. An
information panel appears.
In the information panel, click Permissions .
Under Add principals , start typing the email address of the user or
service account you want to add, then click the email address of the user or
service account.
Click the Select a role drop-down list, then click
Bigtable to select a predefined role or Custom to
select a custom role.
Click the name of each role that you want to assign.
Click Add . The user or service account is granted the roles that you
specified at the table level.
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
If you don't know the instance's table IDs, use the bigtable instances
tables list command to view a list of tables in the instance.
gcloud bigtable instances tables list --instances = INSTANCE_ID
Provide the following:
INSTANCE_ID :
The permanent identifier for the instance.
Use the bigtable instances tables set-iam-policy command:
gcloud bigtable instances tables set-iam-policy \
TABLE_ID \
--instance = INSTANCE_ID \
POLICY_FILE
Provide the following:
TABLE_ID : The permanent identifier for the table.
INSTANCE_ID :
The permanent identifier for the instance.
POLICY_FILE : Path to a local JSON or YAML file containing
a valid IAM policy .
Granting backup-level IAM roles
At the backup level, you can grant any of Bigtable's predefined
roles to a user or service account. You can also grant any custom
roles that you have defined.
Note: After you change a user's backup-level roles, it can take up to two
minutes for the changes to take effect.
To grant a predefined or custom role to a user or service account at the backup
level:
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
If you don't know the backup IDs in an instance, use the bigtable
instances backups list command to view a list of backups in the
instance.
gcloud bigtable backups list --instances = INSTANCE_ID
Provide the following:
INSTANCE_ID :
The permanent identifier for the instance.
Use the gcloud bigtable backups set-iam-policy command:
gcloud bigtable backups set-iam-policy BACKUP_ID \
--instance = INSTANCE_ID \
--cluster = CLUSTER_ID \
POLICY_FILE
Provide the following:
BACKUP_ID : The permanent identifier for the backup.
INSTANCE_ID :
The permanent identifier for the instance.
TABLE_ID : The permanent identifier for the table.
POLICY_FILE : Path to a local JSON or YAML file containing a valid
IAM policy .
Granting authorized view-level IAM roles
At the authorized view level, you can grant any of
Bigtable's predefined roles to a user or service account.
You can also grant any custom roles that you have defined.
Note: After you change a user's authorized view-level roles, it can take
up to two minutes for the changes to take effect.
To grant a predefined or custom role to a user or service account at the
authorized view level, do the following:
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance that contains the authorized view.
In the navigation pane, click Bigtable Studio .
In the explorer, expand the table and Authorized views .
Next to the authorized view that you want to modify, click the
more_vert action menu,
and then click Grant access .
Add at least one principal and select the role to which that principal
or group of principals should be assigned.
Optional: To grant access for additional roles, click Add another
role and then enter the principal and role for each additional role.
Click Save .
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
If you don't know the instance's table IDs, use the bigtable instances
tables list command to view a list of tables in the instance.
gcloud bigtable instances tables list --instances = INSTANCE_ID
If you don't know the view ID, use the bigtable authorized-views list
command to see a list of all authorized views of the table.
gcloud bigtable instances tables authorized-views list \
--instance = INSTANCE_ID \
--table = TABLE_ID
Use the bigtable authorized-views set-iam-policy command:
gcloud bigtable authorized-views set-iam-policy TABLE_ID { "</var>" }} \
AUTHORIZED_VIEW_ID { "</var>" }} --instance = INSTANCE_ID { "</var>" }} POLICY_FILE { "</var>" }}
Provide the following:
INSTANCE_ID :
The permanent identifier for the instance.
TABLE_ID : The permanent identifier for the table.
AUTHORIZED_VIEW_ID : The permanent identifier for the view.
POLICY_FILE : Path to a local JSON or YAML file containing a valid
IAM policy .
IAM conditions
IAM Conditions let you define and enforce
conditional, attribute-based access control for some Google Cloud
resources, including Bigtable resources.
In Bigtable, you can enforce conditional access based on the
following attributes:
Date/time attributes : Use to set temporary (expiring),
scheduled, or limited-duration access to Bigtable resources.
For example, you can allow a user to access a table until a specified date.
Resource attributes : Use to configure conditional
access based on a resource name, resource type, or resource service
attributes. In Bigtable, you can use attributes of instances,
clusters, tables, backups, and authorized views to configure
conditional access. For example, you can allow a user to manage tables only
on tables that begin with a specific prefix, or you can allow a user to
access only a specific table.
For more information about IAM Conditions, see the Conditions
overview .
What's next
Learn more about IAM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
