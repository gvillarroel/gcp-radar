---
title: "Configure database retention policy \_|\_ Cloud Composer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/configure-db-retention
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/configure-db-retention
  title: "Configure database retention policy \_|\_ Cloud Composer \_|\_ Google Cloud\
    \ Documentation"
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
Composer 3 Guides
Send feedback
Configure database retention policy
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how to configure a retention policy for the Airflow
database, so that older records are automatically removed from it, which helps
to maintain the Airflow database's size.
Database retention policy is available only in Cloud Composer 3.
About database retention
As the time goes, the Airflow database of your environment stores more and
more data. This data includes information and logs related to past DAG runs,
tasks, and other Airflow operations.
If you set a retention period for the Airflow database in your environment:
Cloud Composer removes records related to DAG executions and user
sessions older than the specified time period.
The most recent DAG run information is always retained, even after the
retention period is passed for related records.
The default retention period is 60 days. You can set a
custom retention period from 30 to
730 days.
Database retention operations work in the following way:
By default, database retention is enabled . You can enable or
disable it for a new or an existing environment. The
default retention period is 60 days.
A cleanup operation runs automatically at least once within 24 hours after
you enable database retention. It's not possible to set a custom schedule
for this operation. Cloud Composer doesn't perform the cleanup
operation immediately after you enable database retention or change the
retention period.
The cleanup operation doesn't lock Airflow database tables, and maintains
data consistency even if it is interrupted.
It's not possible to reduce Cloud SQL storage size through database
retention operations after it was increased. Database retention operations
only help to keep the Airflow database from increasing over time. For more
information, see the corresponding known issue .
Before you begin
If your environment runs the database cleanup DAG on a
schedule, then you can stop the DAG after you configure the database
retention policy. The maintenance DAG approach
is obsolete in Cloud Composer 3. This DAG does
redundant work and you can reduce the resource consumption by stopping it.
Configure database retention for a new environment
To enable or disable database retention or set a custom database retention
period when you create an environment:
Console
On the Create environment page:
In the Database data retention policy section, configure database
retention:
(Default) To enable database retention, select
Enable database data retention policy .
To disable database retention, select
Disable database data retention policy .
(Optional) To set a custom retention period, in the Retention period
field, specify a retention period between 30
and 730 days.
gcloud
When you create an environment, the --airflow-database-retention-days
argument enables database retention and specifies the retention period, in
days.
This argument must always be specified explicitly:
A value of 0 disables database retention.
Specify 60 to use the default value.
Specify a value to set a custom database retention period between
30 and 730 days.
gcloud composer environments create ENVIRONMENT_NAME \
--location LOCATION \
--image-version composer-3-airflow-2.10.5-build.33 \
--airflow-database-retention-days RETENTION_PERIOD
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
RETENTION_PERIOD : a custom value for the retention period.
Example:
gcloud composer environments create example-environment \
--location us-central1 \
--airflow-database-retention-days 60
API
When you create an environment, in the Environment
>
EnvironmentConfig >
[DataRetentionConfig][api-res-data-retention-config] >
AirflowMetadataRetentionPolicyConfig
resource, specify database retention parameters:
{
"name" : "projects/ PROJECT_ID /locations/ LOCATION /environments/ ENVIRONMENT_NAME " ,
"config" : {
"dataRetentionConfig" : {
"airflowMetadataRetentionConfig" : {
"retentionMode" : "RETENTION_MODE_ENABLED" ,
"retentionDays" : " RETENTION_PERIOD "
}
}
}
}
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
RETENTION_PERIOD : a custom value for the retention period between
30 and 730 days.
Example:
// POST https://composer.googleapis.com/v1/{parent=projects/*/locations/*}/environments
{
"name" : "projects/example-project/locations/us-central1/environments/example-environment" ,
"config" : {
"dataRetentionConfig" : {
"airflowMetadataRetentionConfig" : {
"retentionMode" : "RETENTION_MODE_ENABLED" ,
"retentionDays" : "90"
}
}
}
}
Terraform
When you create an environment, the airflow_metadata_retention_config block
in the data_retention_config specifies database retention parameters:
retention_mode field specifies the database retention mode:
(Default) RETENTION_MODE_ENABLED enables database retention.
RETENTION_MODE_DISABLED disables database retention.
(Optional) retention_days specifies a custom retention period. The
default value is 60 days.
resource "google_composer_environment" "example" {
provider = google-beta
name = " ENVIRONMENT_NAME "
region = " LOCATION "
config {
data_retention_config {
airflow_metadata_retention_config {
retention_mode = " RETENTION_MODE "
retention_days = RETENTION_PERIOD
}
}
}
}
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
RETENTION_MODE : database retention mode
( RETENTION_MODE_ENABLED or RETENTION_MODE_DISABLED ).
RETENTION_PERIOD : a custom value for the retention period between
30 and 730 days.
Example:
resource "google_composer_environment" "example" {
provider = google-beta
name = "example-environment"
region = "us-central1"
config {
data_retention_config {
airflow_metadata_retention_config {
retention_mode = "RETENTION_MODE_ENABLED"
retention_days = 90
}
}
Configure database retention for an existing environment
To enable or disable database retention for an existing environment and to set
a custom retention period:
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
The Database data retention policy item lists the current database
data retention policy of your environment.
Click Edit .
Set the status of database retention:
To enable database retention,
select Enable database data retention policy .
To disable database retention,
deselect Enable database data retention policy .
(Optional) To set a custom retention period, in the Retention period
field, specify a retention period between 30
and 730 days.
gcloud
The --airflow-database-retention-days argument enables database retention
and specifies the retention period, in days. A value of 0 disables database retention.
gcloud composer environments update ENVIRONMENT_NAME \
--airflow-database-retention-days RETENTION_PERIOD
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
RETENTION_PERIOD : a custom value for the retention period between
30 and 730 days.
Example:
gcloud composer environments update example-environment \
--location us-central1 \
--airflow-database-retention-days 60
API
Construct an environments.patch API request.
In this request:
In the updateMask parameter, specify the
config.dataRetentionConfig.airflowMetadataRetentionConfig mask.
In the request body, specify database retention parameters.
{
"config" : {
"dataRetentionConfig" : {
"airflowMetadataRetentionConfig" : {
"retentionMode" : " RETENTION_MODE " ,
"retentionDays" : " RETENTION_PERIOD "
}
}
}
}
Replace:
RETENTION_MODE : RETENTION_MODE_ENABLED enables database retention,
RETENTION_MODE_DISABLED disables database retention.
RETENTION_PERIOD : a custom value for the retention period between
30 and 730 days. If
this field is omitted, the default value is used
(60 days).
Example:
// PATCH https://composer.googleapis.com/v1/projects/example-project/
// locations/us-central1/environments/example-environment?updateMask=
// config.dataRetentionConfig.airflowMetadataRetentionConfig
{
"config" : {
"dataRetentionConfig" : {
"airflowMetadataRetentionConfig" : {
"retentionMode" : "RETENTION_MODE_ENABLED" ,
"retentionMode" : "90"
}
}
}
}
Terraform
The airflow_metadata_retention_config block
in the data_retention_config specifies database retention parameters:
retention_mode field specifies the database retention mode:
(Default) RETENTION_MODE_ENABLED enables database retention.
RETENTION_MODE_DISABLED disables database retention.
(Optional) retention_days specifies a custom retention period. The
default value is 60 days.
resource "google_composer_environment" "example" {
provider = google-beta
name = " ENVIRONMENT_NAME "
region = " LOCATION "
config {
data_retention_config {
airflow_metadata_retention_config {
retention_mode = " RETENTION_MODE "
retention_days = RETENTION_PERIOD
}
}
}
}
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
RETENTION_MODE : database retention mode
( RETENTION_MODE_ENABLED or RETENTION_MODE_DISABLED ).
RETENTION_PERIOD : a custom value for the retention period between
30 and 730 days.
Example:
resource "google_composer_environment" "example" {
provider = google-beta
name = "example-environment"
region = "us-central1"
config {
data_retention_config {
airflow_metadata_retention_config {
retention_mode = "RETENTION_MODE_ENABLED"
retention_days = 90
}
}
Check database retention status
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
The Database data retention policy item lists the current database
data retention policy of your environment.
gcloud
gcloud composer environments describe ENVIRONMENT_NAME \
--location LOCATION \
--format = "value(config.dataRetentionConfig.airflowMetadataRetentionConfig.retentionMode)"
View database retention logs
You can view database retention operation logs on the
Environment details > Logs > . The logs are
located in All logs > Composer logs >
Database retention .
Log entries list the status of the operation, and the database size.
For more information about viewing Cloud Composer logs, see
View logs .
What's next
Enable saving logs to the environment's bucket
Clean up the Airflow database
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
