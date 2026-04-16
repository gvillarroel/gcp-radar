---
title: "Manage Airflow connections \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/manage-airflow-connections
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/known-issues
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/manage-airflow-connections
  title: "Manage Airflow connections \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
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
Manage Airflow connections
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to manage Airflow connections
in your environment and access them from your DAGs.
About Airflow connections
Aiflow connections store credentials and other connection information, such as
user names, connections strings, and passwords. Your DAGs use connections to
communicate and access resources in Google Cloud and other services
from your DAGs.
Airflow operators in your DAGs either use a default connection for the
operator, or you specify a custom connection name.
About connection security
Most Airflow operators do not accept credentials directly. Instead, they use
Airflow connections.
When you create a new environment, Cloud Composer generates a
unique, permanent fernet key for the environment and secures connection extras
by default. You can view the fernet_key in the Configuration page in
Airflow UI .
For more information about how connections and passwords are secured in
Airflow, see
Securing Connections
and
Masking sensitive data
in the Airflow documentations.
Important: In Cloud Composer, we recommend to
store your connections in Secret Manager instead of storing them
in Airflow or directly in your DAGs.
About connection types
Airflow uses connections of different types to connect to specific services.
For example, the
Google Cloud connection type
connects to other services in Google Cloud. As another example, S3 connection
type connects to an Amazon S3 bucket.
To add a connection type to Airflow,
install a PyPI package with that connection type.
Some packages are preinstalled in your environment. For
example, you can use connection from the apache-airflow-providers-google
package without installing custom PyPI packages.
Preconfigured connections
Cloud Composer configures the following default connections in your
environment. You can use these connections to access resources in your project
without configuring them.
google_cloud_default
bigquery_default
google_cloud_datastore_default
google_cloud_storage_default
Add a connection in Secret Manager
You can store a connection in Secret Manager, without adding
it to Airflow. We recommend to use this approach when storing credentials and
other sensitive information.
Important: Your DAGs prioritize connections stored in
Secret Manager over connections stored in Airflow.
To add a connection in Secret Manager:
Configure Secret Manager for your environment .
Add a secret with the name that
matches the pattern for connections.
For example: airflow-connections-example_connection . In your DAGs, use the connection name without the prefix: example_connection .
Add parameters for the connection:
JSON format
Note: Airflow supports the JSON format starting from version 2.3.0 .
As an alternative, you can use the URI format.
Add the JSON representation of your connection as the value of the
secret. For example:
{
"conn_type" : "mysql" ,
"host" : "example.com" ,
"login" : "login" ,
"password" : "password" ,
"port" : "9000"
}
For more information about the JSON connection format, see
Airflow documentation .
URI format
Add the URI representation of your connection as the value of the
secret:
The secret must store a
URI representation of the connection.
For example, mysql://login:password@example.com:9000 .
The URI must be URL-encoded. For
example, a password that has a space symbol in it must be URL-encoded
as follows:
mysql://login:secret%20password@example.com:9000 .
Airflow has a convenience method for
generating connection URIs. An example of how to encode a complex URL
with JSON extras is available in the
Airflow documentation .
Check that all connection parameters are
correctly read from Secret Manager .
Add a connection in Airflow
As an alternative to storing your connections in
Secret Manager, you can store them in Airflow.
To add a connection in Airflow:
Airflow CLI
Run the
connections add Airflow CLI command
with Google Cloud CLI. For example:
In Airflow 2:
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
connections add -- \
--conn-type "mysql" \
--conn-host "example.com" \
--conn-port "9000" \
--conn-login "login" \
--conn-password "password" \
example_connection
You can also use the --conn-uri argument:
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
connections add -- \
--conn-uri "mysql://login:password@example.com:9000" \
example_connection
In Airflow 1:
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
connections -- \
--add \
--conn_type "mysql" \
--conn_host "example.com" \
--conn_port "9000" \
--conn_login "login" \
--conn_password "password" \
--conn_id "example_connection"
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
Airflow UI
Follow the Airflow documentation on creating connections .
Check that Airflow correctly reads a connection
Note: This command is only available in Airflow 2.
You can run the connections get Airflow CLI command through
Google Cloud CLI to check
that a connection is read correctly. For example, if you store a connection in
Secret Manager, this provides a way to check if all
parameters of a connection are read by Airflow from a secret.
Warning: Airflow prints connection passwords in the command's output . This
happens both for connections stored in Airflow and in
Secret Manager.
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
connections get \
-- CONNECTION_NAME
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
CONNECTION_NAME with the name of the connection. If your connection is
stored in Secret Manager, use the connection name without
the connection prefix. For example, specify example_connection instead of
airflow-connections-example_connection_json .
Example:
gcloud composer environments run example-environment \
--location us-central1 \
connections get \
-- example_connection -o json
Use Airflow connections in your DAGs
This section shows how to access your connection from a DAG.
Use a Secret Manager connection
Use the name of the connection without the prefix. For example, if your secret
is named airflow-connections-aws_s3 , specify
aws_s3 .
transfer_dir_from_s3 = S3ToGCSOperator (
task_id = 'transfer_dir_from_s3' ,
aws_conn_id = 'aws_s3' ,
prefix = 'data-for-gcs' ,
bucket = 'example-s3-bucket-transfer-operators' ,
dest_gcs = 'gs://us-central1-example-environ-361f4221-bucket/data/from-s3/' )
If you store a default connection in Secret Manager you can omit
the connection name. See Airflow documentation for a specific operator to get
the default connection name used by an operator. For example, the
S3ToGCSOperator Airflow operator uses the aws_default connection by
default. You can store this default connection in a secret named
airflow-connections-aws_default .
Use a connection stored in Airflow
Use the name of the connection, as it is defined in Airflow:
transfer_dir_from_s3 = S3ToGCSOperator (
task_id = 'transfer_dir_from_s3' ,
aws_conn_id = 'aws_s3' ,
prefix = 'data-for-gcs' ,
bucket = 'example-s3-bucket-transfer-operators' ,
dest_gcs = 'gs://us-central1-example-environ-361f4221-bucket/data/from-s3/' )
To use the default connection for an operator, omit the connection name. See
Airflow documentation for a specific operator to get the default connection
name used by an operator. For example, the S3ToGCSOperator Airflow operator
uses the aws_default connection by default.
Troubleshooting
If your environment cannot access the secret stored in Secret Manager:
Make sure that Secret Manager is configured in your
environment.
Check that connection's name in Secret Manager corresponds
to the connection used by Airflow. For example, for a connection named
example_connection , the secret name is
airflow-connections-example_connection .
Check that Airflow correctly reads a connection .
What's next
Configure Secret Manager
Configure email notifications
Write DAGs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
