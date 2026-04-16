---
title: "Migrate from Cloud SQL for PostgreSQL to AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/migrate-cloud-sql-to-alloydb
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/migrate-cloud-sql-to-alloydb
  title: "Migrate from Cloud SQL for PostgreSQL to AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Send feedback
Migrate from Cloud SQL for PostgreSQL to AlloyDB for PostgreSQL
Stay organized with collections
Save and categorize content based on your preferences.
Standard
Free trial
This page describes how to migrate a Cloud SQL for PostgreSQL instance by
copying a Cloud SQL backup into an AlloyDB for PostgreSQL
cluster.
Copying a Cloud SQL backup into an AlloyDB cluster enables you to quickly
load data into Cloud SQL for PostgreSQL, which lets you evaluate or migrate into AlloyDB.
This page assumes familiarity with Cloud SQL. If you're new to
AlloyDB, see the AlloyDB overview .
To learn how to migrate your data from Cloud SQL to AlloyDB using
continuous data replication ,
see Database Migration Service for PostgreSQL to AlloyDB .
Note: Restoring enhanced backups to Cloud SQL for PostgreSQL
isn't supported while enhanced backups
are in Preview.
The following aren't supported:
Cross-project and cross-region restores
Instances with Customer Managed Encryption Keys (CMEK)
Instances with Identity and Access Management (IAM) group authentication
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the AlloyDB, Compute Engine, and Service Networking APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following:
The necessary
Identity and Access Management (IAM) permissions
A Cloud SQL backup with a size that's less than
15TB
A version of PostgreSQL supported by
AlloyDB
Required roles
To get the permissions that you need to copy a
Cloud SQL for PostgreSQL backup into an AlloyDB cluster,
grant yourself the following IAM roles on your project:
Cloud SQL Viewer
( roles/cloudsql.viewer ) or any custom role that includes the cloudsql.backupRuns.export permission.
Cloud
AlloyDB Admin ( roles/alloydb.admin )
Copy a Cloud SQL backup into an AlloyDB cluster
Copying a Cloud SQL backup into an AlloyDB
standard
cluster restores the backup to the same version of PostgreSQL on
AlloyDB, for example, a PostgreSQL 14 Cloud SQL backup restores to a PostgreSQL
14 standard
cluster. Keep in mind that extension versions and PostgreSQL minor versions might be
different.
Copying a backup from Cloud SQL only supports the configuration of those
items supported in the AlloyDB
standard cluster.
Note: You can't copy a backup if it's greater than
15TB.
To copy a Cloud SQL backup into an AlloyDB
standard
cluster, follow these steps:
Console
In the Google Cloud console, go to the Clusters
page.
Go to Clusters
Click Migrate data and then select Copy from Cloud
SQL Backup .
In the Copy from Cloud SQL backup page, enable the required
APIs. If you already enabled the APIs, you don't need to re-enable the APIs.
On the Select the cluster type page, select Provisioned cluster .
Click Select Cluster Type .
Select the Cloud SQL instance that you want to copy a backup
from and then click Select instance . You can filter
Cloud SQL instances.
Only compatible database versions are
displayed. Replicas don't have backups and aren't displayed in the list of
available instances.
Select the backup you want to import from and then click Select
backup . This page displays the most recent 1,000 backups.
In the Create your provisioned cluster page, enter your
networking information. The cluster ID is populated by default, but you can
also customize your provisioned cluster.
Click Create Cluster .
After the operation completes, a primary instance is automatically created. You see a
new AlloyDB
cluster with the data that is copied from the Cloud SQL for PostgreSQL
backup that you selected.
When you copy a Cloud SQL for PostgreSQL
backup into an AlloyDB cluster, database flags are migrated if
the database flags are in Cloud SQL for PostgreSQL and in
AlloyDB. Resource level permissions aren't automatically
migrated. After the copy is complete, you must manually set up permissions and
those database flags that weren't migrated due to a mismatch.
You can check which database flags in Cloud SQL for PostgreSQL are supported in
AlloyDB in the Create your provisioned cluster
page.
gcloud
To use the gcloud CLI , you can install and initialize the
gcloud CLI, or you can use Cloud Shell .
Run the gcloud
beta alloydb clusters migrate-cloud-sql command:
gcloud beta alloydb clusters migrate-cloud-sql CLUSTER_ID \
--cloud-sql-backup-id= CLOUD_SQL_BACKUP_ID \
--cloud-sql-instance-id= CLOUD_SQL_INSTANCE_ID \
--cloud-sql-project-id= CLOUD_SQL_PROJECT_ID \
--password= PASSWORD \
--region= REGION \
--database-version= DATABASE_VERSION \
--subscription-type= STANDARD
Replace the following:
CLUSTER_ID : Cloud SQL for PostgreSQL cluster ID.
CLOUD_SQL_BACKUP_ID : Cloud SQL backup ID to migrate from. This must be the
backup ID.
CLOUD_SQL_INSTANCE_ID : Cloud SQL instance ID to migrate from. This must be
the instance ID.
CLOUD_SQL_PROJECT_ID : Cloud SQL project ID to migrate from. This must be the
project ID.
PASSWORD : Initial PostgreSQL user password to set up during cluster
creation.
REGION : Location, for example, asia-east1 or
us-east1 . See the full list of regions at Regional locations .
DATABASE_VERSION : Database version of the cluster. This must be one
of: POSTGRES_14 , POSTGRES_15 , POSTGRES_16 , or POSTGRES_17 .
The database version must be the same as the version of the Cloud SQL backup.
SUBSCRIPTION_TYPE : Subscription type of the cluster.
This must be one of the following: STANDARD or TRIAL .
Run the gcloud beta alloydb operations describe command to
confirm the status of the backup operation:
gcloud beta alloydb operations describe OPERATION_ID \
--region=REGION_ID \
--project=PROJECT_ID
Replace the following:
OPERATION_ID : the name of the Cloud SQL for PostgreSQL operation.
REGION_ID : the region in which the Cloud SQL for PostgreSQL cluster is deployed.
PROJECT_ID : the project ID.
Use the gcloud
alloydb instances create command to create
a primary instance .
REST API
To get a list of backups for the instance from which you want to restore
your backup, call the backupsRuns.list
method:
GET "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /backupRuns"
Replace the following:
PROJECT_ID : the project ID.
INSTANCE_ID : the instance ID.
Request JSON body:
{
"kind": string,
"items": [
{
object (BackupRun)
}
],
"nextPageToken": string
}
To send your request, use one of these options:
curl (Linux, macOS, or Cloud Shell)
The following command assumes that you signed into the
gcloud CLI with your user account by running gcloud init or
gcloud auth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI .
You can check the active account by running
gcloud auth list .
Save the request body in a file named request.json and execute
the following command:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
"https://sqladmin.googleapis.com//sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /backupRuns"
PowerShell (Windows)
The following command assumes that you signed into the
gcloud CLI with your user account by running
gcloud
init or gcloud
auth login , or by using Cloud Shell ,
which automatically signs you into the gcloud CLI .
You can check the active account by running gcloud
auth list .
Save the request body in a file named request.json and execute
the following command:
$cred = gcloud auth print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }
Invoke-WebRequest \
-Method GET \
-Headers $headers \
-ContentType: "application/json; charset=utf-8" \
-Uri
"https://sqladmin.googleapis.com//sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /backupRuns"|Select-Object -Expand Content
You receive a JSON response similar to the following:
Response
If successful, the response body contains a list of
BackupRun .
The API response returns a list of backups for the instance as an array
list, including "id": string, .
Call the restoreFromCloudSQL
method:
POST https://alloydb.googleapis.com/v1beta/projects/ PROJECT_ID /locations/ REGION /clusters:restoreFromCloudSQL
Replace the following:
PROJECT_ID : the project ID.
REGION : the region in which the AlloyDB cluster
is deployed.
Request JSON body:
{
"clusterId": string,
"cluster": {
"databaseVersion": "POSTGRES_14/POSTGRES_15/POSTGRES_16/POSTGRES_17",
"subscriptionType" : "STANDARD"
},
// Union field source can be only one of the following:
"cloudsqlBackupRunSource": {
object (CloudSQLBackupRunSource)
}
// End of list of possible types for union field source.
}
To send your request, use one of these options:
curl (Linux, macOS, or Cloud Shell)
The following command assumes that you signed into the
gcloud CLI with your user account by running
gcloud init or
gcloud auth login , or by using
Cloud Shell ,
which automatically signs you into the gcloud CLI .
You can check the active account by running gcloud auth list .
Save the request body in a file named request.json and execute
the following command:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://alloydb.googleapis.com/v1beta/projects/ PROJECT_ID /locations/ REGION /clusters:restoreFromCloudSQL"
PowerShell (Windows)
The following command assumes that you signed into the
gcloud CLI with your user account by running
gcloud
init or gcloudauth login ,
or by using Cloud Shell ,
which automatically signs you into the gcloud CLI .
You can check the active account by running gcloud auth list .
Save the request body in a file named request.json and execute
the following command:
$cred = gcloud auth print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }
Invoke-WebRequest \
-Method POST \
-Headers $headers \
-ContentType: "application/json; charset=utf-8" \
-InFile request.json \
-Uri "https://alloydb.googleapis.com/v1beta/projects/ PROJECT_ID /locations/ REGION /clusters:restoreFromCloudSQL"|Select-Object -Expand Content
You receive a JSON response similar to the following:
Response
If successful, the response body contains an instance of Operation .
A new cluster is created in the specified project and location,
with a volume restored from the backup pointed in the CloudSQLBackupRunSource
message.
When the cluster is in a READY state, create the primary
instance by calling the projects.locationsinstances.create
method:
POST https://alloydb.googleapis.com/v1beta/{parent=projects/ PROJECT_ID /locations/ REGION /clusters/ CLUSTER_ID }/instances
Replace the following:
PROJECT_ID : the project ID.
REGION : the region in which the AlloyDB cluster
is deployed.
CLUSTER_ID : the cluster ID.
Request JSON body:
{
"instanceId": "string",
"instance": {
"object": "Instance"
}
}
The request body contains an instance of Instance .
To send your request, use one of these options:
curl (Linux, macOS, or Cloud Shell)
The following command assumes that you signed into the
gcloud CLI with your user account by running
gcloud init or
gcloud auth login , or by using
Cloud Shell ,
which automatically signs you into the gcloud CLI .
You can check the active account by running gcloud auth list .
Save the request body in a file named request.json and execute
the following command:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://alloydb.googleapis.com/v1beta/projects/ PROJECT_ID /locations/ REGION /clusters/ CLUSTER_ID /instances"
PowerShell (Windows)
The following command assumes that you signed into the
gcloud CLI with your user account by running
gcloud init or
gcloud auth login , or by using
Cloud Shell ,
which automatically signs you into the gcloud CLI .
You can check the active account by running gcloud auth list .
Save the request body in a file named request.json and execute
the following command:
$cred = gcloud auth print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }
Invoke-WebRequest \
-Method POST \
-Headers $headers \
-ContentType: "application/json; charset=utf-8" \
-InFile request.json \
-Uri "https://alloydb.googleapis.com/v1beta/projects/ PROJECT_ID /locations/ REGION /clusters/ CLUSTER_ID /instances"|Select-Object -Expand Content
You receive a JSON response similar to the following:
Response
If successful, the response body contains a newly created instance of
Operation .
After the instance is updated to the READY state, connect to the instance
and access the restored data from the Cloud SQL snapshot.
What's next
Connect to AlloyDB using public IP .
Manage your data using AlloyDB Studio .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
