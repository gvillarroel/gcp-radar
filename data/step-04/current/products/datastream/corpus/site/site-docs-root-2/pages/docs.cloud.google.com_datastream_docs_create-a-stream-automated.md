---
title: "Create a stream using the automated flow \_|\_ Datastream \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/datastream/docs/create-a-stream-automated
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/create-a-stream-automated
  title: "Create a stream using the automated flow \_|\_ Datastream \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Create a stream using the automated flow
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a stream using the automated setup flow.
Note: The automated stream setup flow is available when replicating to
BigQuery from Google Cloud managed Cloud SQL sources such as
Cloud SQL for PostgreSQL, Cloud SQL for MySQL, and Cloud SQL for SQL Server.
The instances must be private services access
enabled and must use the
Private Service Connect interfaces
connectivity type. For more information about source requirements, see
Before you begin .
The automated stream setup simplifies the process of moving data from
Google Cloud managed databases to BigQuery by reducing the
number of steps that you need to perform. The flow lets you create a stream
directly from the overview page of your Cloud SQL instances.
Datastream automates securing the VPC connection between the
stream and the source database, creating database configurations and stream
connection resources.
Before you begin
Enable the Datastream, Network Connectivity, and
Compute Engine APIs.
Ensure that you have the required Identity and Access Management (IAM) permissions to
create and manage Datastream resources. See the section that
follows for more details.
Create and configure a source Cloud SQL database for
replication. For more information, see
Configure sources .
Make sure that your source database is configured to use
private services access .
For Cloud SQL for PostgreSQL instances : we recommend that you enable logical
replication for your instance prior to creating the stream. If you don't enable
logical replication, Datastream enables it for you, which restarts your
source instance.
Note: For information about enabling logical replication for a
Cloud SQL for PostgreSQL instance, see
Configure a Cloud SQL for PostgreSQL database for CDC .
For Cloud SQL for MySQL instances : enable point-in-time recovery for your
Cloud SQL for MySQL instance and make sure that your database version is 8.0.14 or
later. Datastream only supports enabling point-in-time recovery
in the Standard backup tier when using the automated stream setup.
Note: Datastream uses GTID-based replication when using the
automated stream setup flow.
For Cloud SQL for SQL Server instances : make sure that Datastream
supports the
SQL Server version that
your instance uses.
Required permissions
To use the automated stream creation flow, you need the following
Identity and Access Management (IAM) roles or permissions:
serviceusage.services.enable , compute.networkAdmin for enabling the
required APIs and performing network configuration tasks.
cloudsql.admin for instance configuration tasks.
datastream.admin for administration tasks that Datastream
performs on your behalf.
Additional permissions required for Cloud SQL for PostgreSQL
For Cloud SQL for PostgreSQL instances, your database administrator user also
needs GRANT permissions for the schema that you want to replicate. Connect to
your source database and run the following:
GRANT cloudsqlsuperuser TO " USER_NAME " ;
ALTER ROLE " USER_NAME " CREATEROLE ;
GRANT SELECT on ALL TABLES IN SCHEMA " SCHEMA_NAME " to " USER_NAME " WITH GRANT OPTION ;
ALTER DEFAULT PRIVILEGES
IN SCHEMA " SCHEMA_NAME "
GRANT SELECT ON TABLES TO " USER_NAME " WITH GRANT OPTION ;
Note: You need the cloudsqlsuperuser role to create the publication for all
tables in your database instance.
Future tables are automatically added to the stream only if they're created by
the user whose account details you provide to authenticate during the automated
flow. If a future table is created by a different user, then that user must
explicitly grant the Datastream reader user SELECT permission on the
table.
Create and start the stream
To create and start a stream, perform the following steps:
Console
Get started
Go to your source Cloud SQL database instance overview page.
Go to Cloud SQL Instances
In the Stream data into BigQuery section, click
Create stream .
On the Get started page, provide the name for your stream in the
Stream name field. A unique identifier is auto-populated.
In the Provide the instance user account details section, select the
authentication method:
IAM database authentication : this option is available
if your user has the Identity and Access Management (IAM) principal identity
assigned. For more information, see
IAM principals .
If you select this option, you must manually grant the cloudsqlsuperuser
role and the CREATEROLE permission to your user:
In Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Select your Cloud SQL instance.
In the navigation menu, click Cloud SQL Studio and sign in.
In the Explorer pane, run the following query for your user:
GRANT cloudsqlsuperuser TO " USER_NAME " ;
ALTER ROLE " USER_NAME " CREATEROLE ;
Built-in database authentication : provide the username and the
password of a user with the cloudsqlsuperuser role.
If you select this option, make sure that the user has GRANT permissions
on the tables that they want to replicate.
Review additional stream details, such as region, encryption and labels.
Expand the Additional stream details section to apply changes, if
required.
Click Continue .
Configure source
On the Configure stream source page, select the database from which
you want to replicate data.
The Objects to include list selects all available objects by default.
The objects on the list are the objects for which you have the necessary
permissions to stream. To change the selected objects, modify the selections
in the list.
Review advanced stream configurations, such as backfill mode and the
maximum number of concurrent backfill connections. Expand the Advanced
stream configurations section to apply changes, if required.
Click Continue .
Configure destination
On the Configure destination page, adjust the BigQuery
destination settings, if required. For more information, see
Configure information about the destination for the stream .
Create and start the stream
Click Create and start later to create your stream and start it later
in Datastream, or Start to create and start your stream right
away.
Important: Clicking Start restarts your
Cloud SQL for PostgreSQL instance. If you don't have the logical decoding
enabled for your instance, Datastream enables it for you.
You're notified about the tasks that are automatically performed for you:
Datastream creates the required Virtual Private Cloud resources,
such as internal IP address range, subnetwork and network attachment.
Datastream configures tables for CDC, sets up replication
slots, sets up a publication for all tables in the database, and creates
a dedicated Datastream user.
Datastream creates a private connectivity configuration and
source and destination connection profiles.
Confirm that you want to create or create and start your stream.
Monitor the stream
You can monitor basic stream details from your source instance overview page in
the Google Cloud console. The page displays information such as stream
status, stream name, destination BigQuery dataset, and
destination project identifier.
From the overview page, you can also perform actions such as starting, stopping,
or pausing the stream. For more granular monitoring information, click the
stream name to navigate to Datastream.
Delete the stream
When you delete a stream that you created using the automated flow, some
resources, such as the PostgreSQL replication slot are deleted automatically.
However, there are resources that you need to manually delete:
The publication. The publication is created using the database administrator
user, and can be deleted only by its owner, so by default, the user who
created it.
The Datastream reader user.
The Datastream source and destination connection profiles
The private connectivity resources.
All the network resources created during the automated flow, such as the
subnetwork and the network attachment.
What's next
Learn how to create a stream manually .
Learn more about how to monitor
streams .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
