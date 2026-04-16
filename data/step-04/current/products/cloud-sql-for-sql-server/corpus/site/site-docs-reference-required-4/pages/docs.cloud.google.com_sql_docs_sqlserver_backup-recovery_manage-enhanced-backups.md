---
title: "Manage enhanced backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups
  title: "Manage enhanced backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Manage enhanced backups
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
Enhanced backups allow you to use Backup and DR Service with your
Cloud SQL instances to manage your backups. You can
enable enhanced backups for any instance by associating it with a
Backup and DR backup plan .
You can also manage enhanced backups for your instance by
doing the following:
Change your instance's associated backup plan
Perform an on-demand backup
List all backups in the backup vault for your instance
For more information about how enhanced backups work and their integration with
Backup and DR,
see Enhanced backups .
For more information on how backups work in Cloud SQL, see
Cloud SQL overview .
Before you begin
Before you can manage enhanced backups for your Cloud SQL instances,
you must do the following:
Enable the Backup and DR API
Confirm you have the required permissions
Enable the Backup and DR API
To use enhanced backups with your Cloud SQL instances, you must first
enable the Backup and DR API:
Enable the Backup and DR API
Required permissions
The following permissions are required to configure enhanced backups for your
Cloud SQL instances:
backupdr.backupPlans.list
backupdr.backupPlanAssociations.createForCloudSqlInstance
backupdr.backupPlanAssociations.fetchForCloudSqlInstance
backupdr.backupPlanAssociations.list
backupdr.backupPlanAssociations.getForCloudSqlInstance
backupdr.backupPlanAssociations.triggerBackupForCloudSqlInstance
backupdr.backupPlanAssociations.deleteForCloudSqlInstance
backupdr.backupPlans.useForCloudSqlInstance
backupdr.bvdataSources.get
backupdr.bvdataSources.list
For more information about these permissions, see
Backup and DR roles and permissions .
Enable enhanced backups
To enable enhanced backups for your instance, do the following:
Identify the backup vault and backup plan you want to use .
Associate your Cloud SQL instance to the backup plan .
For more information about enhanced backups, see
About Cloud SQL backups .
Identify the backup plan you want to use
The backup plan
is used by enhanced backups to define your instance's backup
schedule and retention settings. To associate your Cloud SQL
instance with a backup plan, you need to first identify the
backup plan you
want to use. For more information, see
Create and manage a backup plan .
Important: The backup plan you want to use must be in the same region as your
Cloud SQL instance.
Once you've identified the backup plan you want to associate, use the backup
plan name to associate it with your Cloud SQL instance.
Associate a backup plan to a Cloud SQL instance
Warning: When you attach a backup plan to a Cloud SQL instance, the existing
backup and restore settings are overwritten by the backup plan.
To associate a backup plan with a Cloud SQL instance, you'll
need the name for the backup plan you want to use. For more information on how
to find the backup plan name,
see Create and manage a backup plan .
Console
To associate a backup plan with your Cloud SQL instance, do the
following:
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Find the instance you want to associate the backup plan with. To open
the Overview page of the instance, click the instance name.
Click Edit .
In the Data Protection section, under Backup tier , select
Enhanced backup tier .
In the Backup plan section, click Select .
In the Select a backup plan window, do the following:
Under Project , click Browse , then search for and select
the Backup and DR project that contains the backup plan.
Once you select the project, you'll see a list of all available
backup plans. Find the backup plan you want to use, then click
Select .
Click Save .
Your instance is enabled for enhanced backups and using the associated
backup plan's backup and retention settings.
Caution: This might cause your instance to restart.
gcloud
To associate a backup plan with your Cloud SQL instance, run the
following command:
gcloud backup - dr backup - plan - associations create BACKUP_PLAN_ASSOCIATION_NAME
-- project = PROJECT_ID
-- resource = INSTANCE_ID
-- backup - plan = BACKUP_PLAN_NAME
-- resource - type = sqladmin . googleapis . com / Instance
-- location = REGION_ID
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup
plan association.
PROJECT_ID : your instance's project ID.
INSTANCE_ID : the ID of the instance you want to associate
the backup plan to.
BACKUP_PLAN_NAME : the name of the backup plan you want to
use. For more information, see
identify the backup plan you want to use .
REGION_ID : the instance's region.
REST v1
To create a backup plan association, use the
backupPlanAssociations
method in the
Backup and DR API .
Before using any of the request data,
make the following replacements:
backup-plan-association-id : the backup plan association ID
resource-name : the full name of the Cloud SQL instance, in projects/ project-id /locations/ location /instances/ instance-name format
backup-plan-name : the name of the backup plan, in projects/ project-id /backupPlans/ backup-plan-name format
HTTP method and URL:
POST https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations
Request JSON body:
{
"name": " backup-plan-association-id ",
"resourceType": "sql.googleapis.com/Instance",
"resource": " resource-name ",
"backupPlan": " backup-plan-name "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "operation",
"state": "CREATING",
"user": "user@example.com",
"updateTime": "2020-01-21T22:43:37.981Z",
"operationType": "backupPlanAssociations.create",
"name": " operation-id ",
"dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name "
}
Manage enhanced backups
After you instance is enabled for enhanced backups and a backup plan is
associated with the instance, you can
perform an on-demand backup ,
view all the backups in the backup vault ,
or change the associated backup plan .
To manage a backup plan, see
Create and manage a backup plan .
To manage a backup vault, see
Create and manage a backup vault .
Change your instance's associated backup plan
You can change the associated backup plan with your Cloud SQL instance.
To change the backup plan applied to your Cloud SQL instance, the new
plan must be in the same backup vault as your current backup plan, and be in
the same region as your Cloud SQL instance.
To change the associated backup plan, you must:
Remove the associated backup plan
Associate the new backup plan with your instance
Remove the associated backup plan
To change to a new backup plan, you must first remove the existing backup
plan association from your Cloud SQL instance. To remove the backup
plan, do the following:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Find the instance you want to change the backup option for. To open the
Overview page of an instance, click the instance name.
Click Edit .
In the Data Protection section, under Backup tier , select the
Standard backup tier . Update the standard backups settings for your
instance as necessary.
Click Save .
The instance's associated backup plan is deleted and your instance is now
managed under the standard backups option. You can now
associate the new backup plan to your
instance.
gcloud
To change to a new backup plan, you must first remove the existing backup
plan association from your Cloud SQL instance. To remove the backup
plan, do the following:
gcloud backup-dr backup-plan-associations delete BACKUP_PLAN_ASSOCIATION_NAME
--location= BACKUP_VAULT_LOCATION
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup
plan association you want to delete.
BACKUP_VAULT_LOCATION : the location of the backup vault.
The instance's associated backup plan is deleted and your instance is now
managed under the standard backups option. You can now
associate the new backup plan to your
instance.
REST v1
To change a backup plan association, you need to first remove the existing
backup plan association. Use the
backupPlanAssociations
method in the
Backup and DR API .
Before using any of the request data,
make the following replacements:
backup-plan-association-id : the backup plan association ID, in projects/ project-id /locations/ location /backupPlanAssociations/ backup-plan-association-id format
HTTP method and URL:
POST https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/delete
Request JSON body:
{
"name": " backup-plan-association-id ",
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/delete"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/delete" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "operation",
"done": "true",
"user": "user@example.com",
"updateTime": "2020-01-21T22:43:37.981Z",
"operationType": "backupPlanAssociations.delete",
"name": " operation-id "
}
Associate the new backup plan with your instance
After you remove the existing backup plan, you can associate a new backup plan
to your Cloud SQL instance:
Console
To associate the new backup plan with your instance, do the following:
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Find the instance you want to change the backup plan for. To open
the Overview page of the instance, click the instance name.
Click Edit .
In the Data Protection section, under Backup tier ,
select Enhanced backup tier .
In the Select a backup plan window, do one of the following:
Under Project , click Browse , then search for and select the
Backup and DR project that contains the backup plan you
want to use.
Once you select the project, you'll see a list of all available backup
plans. Find the backup plan you want to use, then click Select .
Click Save .
Your instance is enabled for enhanced backups and is using the new
backup plan that you selected.
Note: This will cause your instance to restart.
gcloud
To associate the new backup plan with your instance, do the following:
gcloud backup - dr backup - plan - associations create BACKUP_PLAN_ASSOCIATION_NAME
-- project = PROJECT_ID
-- resource = INSTANCE_ID
-- backup - plan = BACKUP_PLAN_NAME
-- resource - type = sqladmin . googleapis . com / Instance
-- location = REGION_ID
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup
plan association.
PROJECT_ID : the instance's project ID.
INSTANCE_ID : the instance's ID.
BACKUP_PLAN_NAME : the name of the backup plan. For more
information, see identify the backup plan you want to use .
REGION_ID : the instance's region.
REST v1
After you delete the existing backup plan association, associate the new
backup plan using the
backupPlanAssociations
method in the
Backup and DR API .
Before using any of the request data,
make the following replacements:
backup-plan-association-id : the backup plan association ID
resource-name : the full name of the Cloud SQL instance, in projects/ project-id /locations/ location /instances/ instance-name format
backup-plan-name : the name of the backup plan, in projects/ project-id /backupPlans/ backup-plan-name format
HTTP method and URL:
POST https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations
Request JSON body:
{
"name": " backup-plan-association-id ",
"resourceType": "sql.googleapis.com/Instance",
"resource": " resource-name ",
"backupPlan": " backup-plan-name "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "operation",
"state": "CREATING",
"user": "user@example.com",
"updateTime": "2020-01-21T22:43:37.981Z",
"operationType": "backupPlanAssociations.create",
"name": " operation-id ",
"dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name "
}
Perform an on-demand backup
You can perform an on-demand backup for a Cloud SQL instance with and
associated backup plan using Google Cloud console, gcloud CLI , or the
Cloud SQL API.
Console
To perform an on-demand backup for an instance with enhanced backups enabled,
do the following:
In the Google Cloud console, go to the Cloud SQL Backups page.
Go to Cloud SQL Backups
Click Create backup .
In the Create an on-demand backup window, under
Choose a backup rule , select the type of on-demand backup you want to
take. The backup rule defines the retention period of the on-demand
backup.
Click Create .
Your on-demand backup is created.
gcloud
To perform an on-demand backup for an instance with enhanced backups enabled,
run the following command:
gcloud backup-dr backup-plan-associations trigger-backup BACKUP_PLAN_ASSOCIATION_NAME
--backup-rule-id= BACKUP_RULE_ID
--project= PROJECT_ID
--location= BACKUP_VAULT_LOCATION
[--no-async]
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup
plan association of your Cloud SQL instance. To find a list
of all backup plans associated with a Cloud SQL instance,
see List all backup plan associations .
BACKUP_RULE_ID : the backup rule name for the type of
on-demand backup you want to take (e.g. rule-daily ).
PROJECT_ID : the instance's project ID.
BACKUP_VAULT_LOCATION : the location of the backup vault
associated with your backup plan.
REST v1
To trigger an on-demand backup for your Cloud SQL instance, use the
backupPlanAssociations
method in the
Backup and DR API .
Before using any of the request data,
make the following replacements:
backup-rule-id : the backup rule ID for which a backup needs to be triggered
HTTP method and URL:
GET https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/ backup-plan-association-id :triggerBackup
Request JSON body:
{
"ruleId": " backup-rule-id "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/ backup-plan-association-id :triggerBackup"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/ backup-plan-association-id :triggerBackup" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "operation",
"done": "true",
"user": "user@example.com",
"updateTime": "2020-01-21T22:43:37.981Z",
"operationType": "backupPlanAssociations:triggerBackup",
"name": " operation-id "
}
List all the backups in a backup vault for your instance
You can list all backups for in the backup vault for your
Cloud SQL instance using Google Cloud console, gcloud CLI , or the
Cloud SQL API.
Console
In the Google Cloud console, go to the Cloud SQL Backups page.
Go to Cloud SQL Backups
In the Backup tier drop-down, select Enhanced tier , then
select the Backup vault that contains the backup you want to use.
All backups available in the backup vault for your selected instance
are displayed.
gcloud
To list all available backups for your Cloud SQL instance in the
backup vault, you need to first find the data-source for your
Cloud SQL instance, then run the gcloud backup-dr backups list
command.
To find your instance's data-source , run the following command:
gcloud backup - dr data - source - references
fetch - for - resource - type sqladmin . googleapis . com / Instance
-- location = REGION_ID | grep INSTANCE_NAME
Replace the following:
REGION_ID : the region ID for your Cloud SQL
instance.
INSTANCE_NAME : the name of your Cloud SQL
instance.
To list all the backups in a backup vault for your instance,
run the following command:
gcloud backup-dr backups list
--data-source= DATA_SOURCE
--location= REGION_ID
--backup-vault= BACKUP_VAULT_NAME
Replace the following:
DATA_SOURCE : the data-source for your
Cloud SQL instance.
REGION_ID : the region ID for the backup
vault.
BACKUP_VAULT_NAME : the name of the backup vault
associated with your backup plan.
REST v1
To list all available backups for your Cloud SQL instance in the
backup vault, you need to first find the data source for your
Cloud SQL instance, then get all the backups using the data source
name.
Find the instance's data source
To find your instance's data source, use the
dataSource.References
method in the Backup and DR API .
HTTP method and URL:
GET https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /dataSourceReferences:fetchForResourceType?filter=dataSourceGcpResourceInfo.gcp_resourcename="projects/ project-id /instances/ instance-id
Request JSON body:
{
"resourceType": "sqladmin.googleapis.com/Instance"
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /dataSourceReferences:fetchForResourceType?filter=dataSourceGcpResourceInfo.gcp_resourcename="projects/ project-id /instances/ instance-id "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /dataSourceReferences:fetchForResourceType?filter=dataSourceGcpResourceInfo.gcp_resourcename="projects/ project-id /instances/ instance-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"name": "projects/ project-id /locations/ location /dataSourceReferences/ dataSourceId "
"dataSourceBackupConfigState": "ACTIVE",
"dataSourceBackupCount": "1",
"dataSourceBackupConfigInfo": {
"lastBackupState: "SUCCEEDED",
"lastSuccessfulBackupConsistencyTime": "2024-09-19T18:00:00Z"
},
"dataSourceGcpResourceInfo": {
"gcpResourceName": "projects/ project-id /instances/ instance-id ",
"type": "sqladmin.googleapis.com/Instance",
"location": " location "
"cloudSqlInstanceProperties": {
"name": "projects/ project-id /instances/ instance-id "
}
}
}
List the instance's backups
To list your the backups for your instance using the data source ID, use the
backupVaults.dataSources.backups
method in the Backup and DR API .
HTTP method and URL:
GET https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"backups": [
{
"name": " backup-name ",
"state": "ACTIVE",
"backupType": "ON_DEMAND",
"createTime": "",
"expireTime": "",
"CloudSqlInstanceBackupProperties": {
"databaseInstalledVersion": " database-installed-version ",
"finalBackup": "TRUE",
"sourceInstance": " instance-name ",
"instanceTier": "db-custom-1-3840"
}
},
{
...
}
]
}
Disable enhanced backups
You can disable enhanced backups by switching your Cloud SQL instance
back to the standard backups option. This deletes the association between the
backup plan and your instance.
Change your instance to standard backups
Warning: Changing your instance to standard backups causes your instance
to restart.
Console
To disable enhanced backups and switch your instance back to the standard
backups option, do the following:
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Find the instance you want to change the backup option for. To open
the Overview page of the instance, click the instance name.
Click Edit .
In the Data Protection section, under Backup tier ,
select the Standard backup tier . Update the Standard backups
settings for your instance as necessary.
Click Save .
Your instance's associated backup plan is deleted and your instance
is now managed under the Standard backups option, managed by Cloud SQL.
gcloud
To disable enhanced backups and switch your instance back to the standard
backups option, run the following command:
gcloud backup-dr backup-plan-associations delete BACKUP_PLAN_ASSOCIATION_NAME
--location= BACKUP_VAULT_LOCATION
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup
plan association you want to delete.
BACKUP_VAULT_LOCATION : the location of the backup vault.
REST v1
To disable enhanced backups, you need to remove the backup plan association
using the
backupPlanAssociations
method in the
Backup and DR API .
Before using any of the request data,
make the following replacements:
backup-plan-association-id : the backup plan association ID, in projects/ project-id /locations/ location /backupPlanAssociations/ backup-plan-association-id format
HTTP method and URL:
POST https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/delete
Request JSON body:
{
"name": " backup-plan-association-id ",
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/delete"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/delete" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "operation",
"done": "true",
"user": "user@example.com",
"updateTime": "2020-01-21T22:43:37.981Z",
"operationType": "backupPlanAssociations.delete",
"name": " operation-id "
}
What's next
Restore an instance
About Cloud SQL backups
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
