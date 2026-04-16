---
title: "Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/security-practices
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database
  title: "Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Access the Airflow database
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how to connect to a Cloud SQL instance that runs
the Airflow database of your Cloud Composer
environment and run SQL queries.
For example, you might want to run queries directly on the Airflow database,
make database backups, gather statistics based on the database content, or
retrieve any other custom information from the database.
Important: We recommend to avoid directly accessing the Airflow database, if
it is possible to use other approaches such as
Airflow REST API or Airflow CLI commands
instead.
Before you begin
Warning: Don't add your own custom tables to the Airflow database and don't
change the schema of the Airflow database. Don't add users or databases to the
Cloud SQL instance that hosts the Airflow database.
Export Airflow database contents to a Cloud SQL instance
This approach includes saving an environment snapshot, which contains an
Airflow database dump, and then importing the dump to a Cloud SQL instance.
In this way, you can run queries on a snapshot of the Airflow database contents.
Note: If you want to export the Airflow database contents on a schedule,
consider using scheduled snapshots .
You can use this approach in all versions of Airflow supported by
Cloud Composer 3, including Airflow 3 versions later than 3.1.7 where direct
access to the Airflow database is no longer possible.
Save an environment snapshot
Run the following command to save a snapshot of your environment. After you
save a snapshot, the operation's result will report the URI where the
snapshot is saved in the snapshotPath field. You will use this URI later.
For more information about creating snapshots, see
Save and load environment snapshots .
gcloud composer environments snapshots save \
ENVIRONMENT_NAME \
--location LOCATION \
--snapshot-location " SNAPSHOTS_URI "
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
(Optional) SNAPSHOTS_URI with the URI of a bucket folder in which to store
the snapshot. If you omit this argument, Cloud Composer saves
the snapshot in the /snapshots folder in your environment's bucket.
Important: We recommend saving snapshots used for database export
in a separate Cloud Storage bucket . This way, you can set up
separate permissions and a lifecycle configuration for this bucket.
One bucket can hold snapshots from several environments.
Example:
gcloud composer environments snapshots save \
example-environment \
--location us-central1 \
--snapshot-location "gs://example-bucket/environment_snapshots"
Example result:
Response:
'@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse
snapshotPath: gs://example-bucket/environment_snapshots/example-environment_us-central1_2026-03-17T11-26-24
Prepare the destination database
If you don't have a Cloud SQL instance, create one. This instance will
store the imported database.
Note: To optimize for cost, we suggest using a 2 CPU with 4GB memory
configuration for the destination Cloud SQL instance. You can always
resize the instance after the import if your workload demands more resources.
Run the following command to create a Cloud SQL instance:
gcloud sql instances create SQL_INSTANCE_NAME \
--database-version = POSTGRES_15 \
--cpu = 2 \
--memory = 4GB \
--storage-size = 100GB \
--storage-auto-increase \
--region = LOCATION \
--root-password = PASSWORD
Replace the following:
SQL_INSTANCE_NAME : name of the Cloud SQL instance.
LOCATION : region where the instance must be created. We recommend to use
the same region as the bucket where the snapshots are saved.
PASSWORD : password you will use to connect to the instance.
Caution: To avoid entering the password on the command-line , you can
create an instance without a password and then set it using the
gcloud sql users set-password
command.
Example:
gcloud sql instances create example-instance \
--database-version = POSTGRES_15 \
--cpu = 2 \
--memory = 4GB \
--storage-size = 100GB \
--storage-auto-increase \
--region = us-central1 \
--root-password = example_password
Run the following command to create a database named airflow_db :
gcloud sql databases create airflow_db \
--instance = SQL_INSTANCE_NAME
Replace the following:
SQL_INSTANCE_NAME : name of the Cloud SQL instance.
Example:
gcloud sql databases create airflow_db \
--instance = example-instance
Note: For subsequent database imports to the same Cloud SQL
instance, if the airflow_db database already exists on your instance, you
must drop the database and create it again. Importing into an existing
database with existing schemas will cause conflicts. You can use the
gcloud sql databases delete airflow_db Google Cloud CLI command to drop the
database.
Grant IAM permissions to the Cloud SQL service account
On the bucket containing the snapshot, grant a role for importing data
to the Cloud SQL service account of your Cloud SQL instance. For more information about IAM roles for importing data to
Cloud SQL, see
Import a SQL dump file to Cloud SQL for PostgreSQL .
Run the following command to obtain the Cloud SQL service account email:
gcloud sql instances describe SQL_INSTANCE_NAME \
--format = "value(serviceAccountEmailAddress)"
Replace the following:
SQL_INSTANCE_NAME : name of the Cloud SQL instance.
Example:
gcloud sql instances describe example-instance --format = "value(serviceAccountEmailAddress)"
Example output:
p231236835740-kw9999@gcp-sa-cloud-sql.iam.gserviceaccount.com
Grant read permissions to this service account:
gcloud storage buckets add-iam-policy-binding gs:// BUCKET_NAME \
--member = serviceAccount: SQL_SERVICE_ACCOUNT \
--role = roles/storage.objectAdmin
Replace the following:
BUCKET_NAME : name of the Cloud Storage bucket. This is the part
of the SNAPSHOTS_URI immediately after gs:// .
SQL_SERVICE_ACCOUNT : email of the Cloud SQL instance's service
account. You obtained it with the previous command.
Example:
gcloud storage buckets add-iam-policy-binding gs://example-bucket \
--member = serviceAccount:p231236835740-kw9999@gcp-sa-cloud-sql.iam.gserviceaccount.com \
--role = roles/storage.objectAdmin
Import the database dump
Run the following command to import the database dump file from the previously
saved snapshot into your Cloud SQL instance's airflow_db database.
The airflow_db database will be unavailable during the import process.
gcloud sql import sql SQL_INSTANCE_NAME \
$( gcloud storage ls SNAPSHOTS_URI /*.sql.gz ) \
--database = airflow_db \
--user = postgres
Replace the following:
SQL_INSTANCE_NAME : name of the Cloud SQL instance.
SNAPSHOT_PATH with the URI of the specific bucket folder where the snapshot
is stored. This URI is returned
when you save a snapshot .
Example:
gcloud sql import sql example-instance \
$( gcloud storage ls gs://example-bucket/environment_snapshots/example-environment_us-central1_2026-03-17T11-26-24/*.sql.gz ) \
--database = airflow_db \
--user = postgres
(Recommended) Revoke the bucket access after the import is complete
We recommend revoking Cloud Storage bucket access permissions from the
service account of your Cloud SQL instance after the import is completed.
Run the following command to do so:
gcloud storage buckets remove-iam-policy-binding gs:// BUCKET_NAME \
--member = serviceAccount: SQL_SERVICE_ACCOUNT \
--role = roles/storage.objectAdmin
Replace the following:
BUCKET_NAME : name of the Cloud Storage bucket. This is the part
of the SNAPSHOTS_URI immediately after gs:// .
SQL_SERVICE_ACCOUNT : email of the Cloud SQL instance's service
account. You obtained it with the previous command.
Example:
gcloud storage buckets revoke-iam-policy-binding gs://example-bucket \
--member = serviceAccount:p231236835740-kw9999@gcp-sa-cloud-sql.iam.gserviceaccount.com \
--role = roles/storage.objectAdmin
Run a SQL query on the imported database
After the import is completed, you can run queries on it. For example, you can
run a query with Google Cloud CLI .
Run a SQL query on the Airflow database from a DAG
To connect to the Airflow database:
Create a DAG with one or more SQLExecuteQueryOperator operators. To get
started, you can use the example DAG.
Caution: Your SQL query might run more than once because of the DAG
schedule and catchup.
If you want to run the SQL query only once, set
schedule to None , catchup to False , and then
trigger the DAG manually .
In the sql parameter of the operator, specify your SQL query.
Upload this DAG to your environment.
Trigger the DAG, for example, you can do it
manually or wait until it runs on a schedule.
Example DAG:
import datetime
import os
import airflow
from airflow.providers.common.sql.operators.sql import SQLExecuteQueryOperator
SQL_DATABASE = os . environ [ "SQL_DATABASE" ]
with airflow . DAG (
"airflow_db_connection_example" ,
start_date = datetime . datetime ( 2025 , 1 , 1 ),
schedule = None ,
catchup = False ) as dag :
SQLExecuteQueryOperator (
task_id = "run_airflow_db_query" ,
dag = dag ,
conn_id = "airflow_db" ,
database = SQL_DATABASE ,
sql = "SELECT * FROM dag LIMIT 10;" ,
)
For more information about using the SQLExecuteQueryOperator, see the
How-to Guide for Postgres using SQLExecuteQueryOperator
in the Airflow documentation.
Dump database contents and transfer them to a bucket
Deprecated: This approach is deprecated. Instead, use snapshots
to back up the environment's data, including the Airflow database contents.
What's next
Access Airflow REST API
Run Airflow CLI commands
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
