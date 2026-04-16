---
title: "Load Google Analytics 4 data into BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/bigqueryconnection
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer
  title: "Load Google Analytics 4 data into BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Load Google Analytics 4 data into BigQuery
You can load data from Google Analytics 4 to BigQuery using the
BigQuery Data Transfer Service for Google Analytics 4 connector. With the
BigQuery Data Transfer Service, you can schedule recurring transfer jobs that
add your latest data from Google Analytics 4 to
BigQuery.
Connector overview
The BigQuery Data Transfer Service for the Google Analytics connector supports the following options for your data transfer.
Data transfer options
Support
Supported reports
The Google Analytics connector supports the transfer of reporting data from Google Analytics Data API v1 .
For information about how Google Analytics reports are transformed into BigQuery tables and views, see Google Analytics report transformation .
Repeat frequency
The Google Analytics connector supports daily data transfers.
By default, data transfers are scheduled at the time when the data transfer is created. You can configure the time of data transfer when you set up your data transfer .
Refresh window
You can schedule your data transfers to retrieve Google Analytics data from up to 30 days at the time the data transfer is run. You can configure the duration of the refresh window when you set up your data transfer .
By default, the Google Analytics connector has a refresh window of 4 days.
For more information, see Refresh windows .
Backfill data availability
Run a data backfill to retrieve data outside of your scheduled data transfer. You can retrieve data as far back as the data retention policy on your data source allows.
For information about the data retention policy for Google Analytics, see Google Analytics Data Retention Policy .
Data ingestion from Google Analytics 4 transfers
When you transfer data from Google Analytics 4 into BigQuery, the
data is loaded into BigQuery tables that are partitioned by date.
The table partition that the data is loaded into corresponds to the date from
the data source. If you schedule multiple transfers for the same date,
BigQuery Data Transfer Service overwrites the partition for that specific date with
the latest data. Multiple transfers in the same day or running backfills don't
result in duplicate data, and partitions for other dates are not affected.
Refresh windows
A refresh window is the number of days that a data transfer retrieves data
when a data transfer occurs. For example, if the refresh window is three days
and a daily transfer occurs, the BigQuery Data Transfer Service retrieves all data from
your source table from the past three days. In this
example, when a daily transfer occurs, the BigQuery Data Transfer Service creates a new
BigQuery destination table partition with a copy of your source table data
from the current day, then automatically triggers backfill runs to update the
BigQuery destination table partitions with your source table data from the
past two days. The automatically triggered backfill runs will either overwrite
or incrementally update your BigQuery destination table,
depending on whether or not incremental updates are supported in the
BigQuery Data Transfer Service connector.
When you run a data transfer for the first time, the data transfer retrieves all
source data available within the refresh window. For example, if the refresh
window is three days and you run the data transfer for the first time, the
BigQuery Data Transfer Service retrieves all source data within three days.
To retrieve data outside the refresh window, such as historical data, or to
recover data from any transfer outages or gaps, you can initiate or schedule a
backfill run .
Before you begin
Review the following prerequisites and information before you create a
Google Analytics 4 data transfer.
Prerequisites
In Google Analytics 4, the user account or the service account must have viewer access to the property ID
that is used in the transfer configuration.
Verify that you have completed all actions required to enable the BigQuery Data Transfer Service .
Create a BigQuery dataset to store
your Google Analytics 4 data.
If you intend to set up transfer run notifications for Pub/Sub,
ensure that you have the pubsub.topics.setIamPolicy Identity and Access Management (IAM) permission. If you only set up email notifications, Pub/Sub permissions aren't required. For more
information, see
BigQuery Data Transfer Service run notifications .
Required BigQuery roles
To get the permissions that
you need to create a BigQuery Data Transfer Service data transfer,
ask your administrator to grant you the
BigQuery Admin ( roles/bigquery.admin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create a BigQuery Data Transfer Service data transfer. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a BigQuery Data Transfer Service data transfer:
BigQuery Data Transfer Service permissions:
bigquery.transfers.update
bigquery.transfers.get
BigQuery permissions:
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.datasets.update
bigquery.datasets.setIamPolicy
bigquery.jobs.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information, see Grant bigquery.admin access .
Custom reports
The BigQuery Data Transfer Service for Google Analytics connector
supports the use of custom reports by specifying dimensions and metrics
in the Google Analytics transfer configuration. These custom reports ingest data from the
Google Analytics Data API version supported by the BigQuery Data Transfer Service .
You can specify a custom report when you create a Google Analytics transfer .
Custom reports limitations
Only one custom report is supported per transfer configuration.
A maximum of 9 dimensions and 10 metrics are supported per custom report.
Not all dimensions and metrics are compatible with each other. Use the GA4 Dimensions & Metrics Explorer tool
to validate your custom report dimensions and metrics before creating the transfer.
Set up a Google Analytics 4 data transfer
Select one of the following options:
Console
Go to the Data transfers page in the Google Cloud console.
Go to Data transfers
Click add Create transfer .
On the Create transfer page, do the following:
In the Source type section, for Source , choose
Google Analytics 4 .
In the Data source details section:
In the Property ID field, enter a property ID .
Optional: In the Table Filter field, enter a comma-separated list of tables to include, for
example, Audiences, Events . Prefix this list with the - character
to exclude certain tables, for example -Audiences, Events . All
tables are included by default.
Optional: To ingest custom reports instead of the standard reports, do the following:
In the Custom Report Table Name field, enter the output table name for the custom report.
For more information about valid table names, see Table naming .
In the Custom Report Dimensions field, enter the dimensions for the custom report.
For more information, see Custom reports .
In the Custom Report Metrics field, enter the metrics for the custom report.
For more information, see Custom reports .
Optional: In the Refresh window field, enter a duration for your refresh window
in days. The refresh window has a default value of four days, and can be a
value up to 30 days.
In the Destination settings section, in the Destination dataset
menu, select the dataset that you created to store your data.
In the Transfer config name section, for Display name , enter a
name for the data transfer. The transfer name can be any value that lets
you identify the transfer if you need to modify it later.
In the Schedule options section:
Select either Start now or Start at set time , then provide a
start date and run time.
For Repeats , choose an option for how often to run the
data transfer. If you select Days , provide a valid time in UTC.
Optional: In the Service Account menu, select a
service account from the service
accounts that are associated with your Google Cloud project. The
selected service account must have the
required roles to run
this data transfer.
If you signed in with a
federated identity , then a
service account is required to create a data transfer. If you signed in
with a Google Account , then a service
account for the data transfer is optional. For more information about
using service accounts with data transfers, see
Use service accounts .
Optional: In the Notification options section:
Click the toggle to enable email notifications. When you enable this
option, the transfer administrator receives an email notification
when a transfer run fails.
Click the toggle to enable Pub/Sub notifications. For
Select a Cloud Pub/Sub topic , choose your
topic name or click
Create a topic . This option configures Pub/Sub
run notifications for your
transfer.
Optional: If you use CMEKs , in the
Advanced options section, select Customer-managed key . A list of
your available CMEKs appears for you to choose from. For information
about how CMEKs work with the BigQuery Data Transfer Service, see
Specify encryption key with transfers .
Click Save .
bq
Enter the bq mk command and supply the transfer creation flag —
--transfer_config . The following flags are required:
--data_source
--target_dataset
--display_name
--params
bq mk --transfer_config \
--project_id = PROJECT_ID \
--target_dataset = DATASET \
--display_name = NAME \
--params = ' PARAMETERS ' \
--data_source = DATA_SOURCE
Where:
PROJECT_ID : your project ID. If --project_id isn't specified,
the default project is used.
DATASET : the target dataset for the data transfer configuration.
NAME : the display name for the data transfer configuration. The
transfer name can be any value that lets you identify the transfer if you
need to modify it later.
PARAMETERS : the parameters for the created data transfer
configuration in JSON format, for example, --params='{"param":"param_value"}' . For
Google Analytics 4 transfers, the property_id
parameter is required.
DATA_SOURCE : the data source — ga4 .
For example, the following command creates a Google Analytics 4
data transfer named My Transfer using property ID 468039345 , with the
target dataset mydataset .
The data transfer is created in the default project:
bq mk --transfer_config
--project_id = your_project
--target_dataset = mydataset
--display_name = My Transfer
--params = '{"property_id":"468039345"}'
--data_source = ga4
API
Use the
projects.locations.transferConfigs.create
method and supply an instance of the
TransferConfig
resource.
Limitations
Aggregated totals for distinct users and session metrics might not be accurate and might not match the values in Google Analytics.
Specify encryption key with transfers
You can specify customer-managed encryption keys (CMEKs)
to encrypt data for a transfer run. You can use a CMEK to support transfers from
Google Analytics 4 .
When you specify a CMEK with a transfer, the BigQuery Data Transfer Service applies the
CMEK to any intermediate on-disk cache of ingested data so that the entire
data transfer workflow is CMEK compliant.
You cannot update an existing transfer to add a CMEK if the transfer was not
originally created with a CMEK. For example, you cannot change a destination
table that was originally default encrypted to now be encrypted with CMEK.
Conversely, you also cannot change a CMEK-encrypted destination table
to have a different type of encryption.
You can update a CMEK for a transfer if the transfer configuration was
originally created with a CMEK encryption. When you update a CMEK for a transfer
configuration, the BigQuery Data Transfer Service propagates the CMEK to the destination
tables at the next run of the transfer, where the BigQuery Data Transfer Service
replaces any outdated CMEKs with the new CMEK during the transfer run.
For more information, see Update a transfer .
You can also use project default keys .
When you specify a project default key with a transfer, the BigQuery Data Transfer Service
uses the project default key as the default key for any new transfer
configurations.
Pricing
There is no cost to run a Google Analytics 4 transfer.
Once data is transferred to BigQuery, standard
BigQuery storage and
query pricing applies.
Quota
Google Analytics 4 transfers are subject to the analytics property quotas
as enforced by Google Analytics 4. To allow more quota per property,
you can upgrade to Google Analytics 360 .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
