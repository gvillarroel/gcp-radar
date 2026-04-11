---
title: "Database types \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/database-type
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/database-type
  title: "Database types \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Database types
Stay organized with collections
Save and categorize content based on your preferences.
When you create a Dataproc Metastore service, you must choose to use
either the MySQL database type or the Spanner database type.
This choice affects the features that you can integrate and use with your
Dataproc Metastore service. It's important to note that you can't
update your database type after you create a Dataproc Metastore
service. Make sure you choose the appropriate database type for your needs.
This page explains the differences between these database types and how to select
one for your service.
Differences between MySQL and Spanner
MySQL
The Dataproc Metastore MySQL database type is an implementation of Cloud SQL .
Note the following when using a MySQL database:
MySQL is the default database type when creating a Dataproc Metastore.
MySQL is supported by all Hive versions.
MySQL supports all Dataproc Metastore features.
MySQL supports Dataproc Metastore encryption, such as using
customer-managed encryption keys (CMEK).
Spanner
The Dataproc Metastore Spanner database type is an implementation of Spanner .
Note the following when using a Spanner database:
Spanner is only supported on Hive versions 2.3.6 and 3.1.2.
Spanner only supports Avro imports.
The maximum supported number of columns in a table is 5,000.
Additional details
The following table provides additional details about these differences.
MySQL
Spanner
Reliability (uptime)
Cloud SQL SLO 99.95% *
Spanner SLO 99.99% *
Maintenance windows
Required
Not Required
Notes:
* The Cloud SQL and Spanner SLOs don't directly
translate to Dataproc Metastore SLOs.
Dataproc Metastore
Your database type selection does not affect Dataproc Metastore
SLOs.
There's no pricing difference between the two database types.
Before you begin
Enable Dataproc Metastore
in your project.
Understand networking requirements
specific to your project.
Required Roles
To get the permission that
you need to create a Dataproc Metastore,
ask your administrator to grant you the
following IAM roles on your project, based on the principle of least privilege:
Grant full control of Dataproc Metastore resources ( roles/metastore.editor )
Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
metastore.services.create
permission,
which is required to
create a Dataproc Metastore.
You might also be able to get
this permission
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and
permissions, see Manage Managed Service for Apache Spark access with IAM .
Choose your database type
You choose your database type when you first create a
Dataproc Metastore service.
The following example shows an abbreviated version of the steps that you follow
to choose a database type. For complete step-by-step instructions, see
Create a Dataproc Metastore service .
Caution: You can't update your database type after you create a
Dataproc Metastore service. Make sure you choose the appropriate
database type for your requirements. To change your database type, you must
delete and recreate your service.
Console
In the Google Cloud console, open the Dataproc Metastore page:
Open Dataproc Metastore
In the navigation bar, click Create .
The Create service page opens.
For Database type , select either MySQL or Spanner .
MySQL is the default database type.
Choose the remaining configurations
for your service, as needed.
Click Submit .
gcloud CLI
Run the following gcloud metastore services create
command:
gcloud metastore services create SERVICE_ID \
--location= LOCATION \
--database-type= DATABASE_TYPE ; default="mysql"
Replace the following:
SERVICE_ID : the name or ID for your
Dataproc Metastore service.
LOCATION : the region that your
Dataproc Metastore service resides in.
DATABASE_TYPE : the database type that you want to
set for your Dataproc Metastore service.
Accepted values include mysql and spanner . The default value is
mysql .
What's next
Create a service
Update and delete a service
Data storage for internal tables
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
