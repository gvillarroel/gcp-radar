---
title: "Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/information-schema-project-options-changes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer
  title: "Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation"
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
Load Campaign Manager data into BigQuery
You can load data from Campaign Manager to BigQuery using the
BigQuery Data Transfer Service for Campaign Manager connector. With the
BigQuery Data Transfer Service, you can schedule recurring transfer jobs that
add your latest data from your Campaign Manager to
BigQuery.
Connector overview
The BigQuery Data Transfer Service for the Campaign Manager connector supports the following options for your data transfer.
Data transfer options
Support
Supported reports
The Campaign Manager connector supports the transfer of data from the following reports:
Data Transfer v2 (Campaign Manager DTv2) files
Data Transfer v2 (Campaign Manager DTv2) match tables
For information on how Campaign Manager reports are transformed into BigQuery tables and views, see Campaign Manager report transformations .
Repeat frequency
The Campaign Manager connector supports data transfer every 8 hours.
By default, Campaign Manager data transfers are scheduled at the time when the data transfer is created.
Refresh window
The Campaign Manager connector retrieves Campaign Manager data from up to 2 days at the time the data transfer is run. You cannot configure the refresh window for this connector.
For more information, see Refresh windows .
Backfill data availability
Run a data backfill to retrieve data outside of your scheduled data transfer. You can retrieve data as far back as the data retention policy on your data source allows.
For information about the data retention policy for Display & Video 360, see Data deletion and retention controls .
Data ingestion from Campaign Manager transfers
When you transfer data from Campaign Manager into BigQuery, the
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
Before you create a Campaign Manager data transfer:
Verify that you have completed all actions required to
enable the BigQuery Data Transfer Service .
Create a BigQuery dataset
to store the Campaign Manager data.
Ensure that your organization has access to Campaign Manager Data Transfer
v2 (Campaign Manager DTv2) files. These files are delivered
by the Campaign Manager team to a Cloud Storage bucket. To gain access
to Campaign Manager DTv2 files, your next step depends on if you have a direct
contract with Campaign Manager. In both cases, additional charges might apply.
If you have a contract with Campaign Manager, contact
Campaign Manager support
to set up Campaign Manager DTv2 files.
If you do not have a contract with Campaign Manager, your agency or
Campaign Manager reseller may have access to Campaign Manager DTv2
files. Contact your agency or reseller for access to these files.
After completing this step, you will receive a Cloud Storage
bucket name similar to the following:
dcdt_-dcm_account123456
The Google Cloud team doesn't have the
ability to generate or grant access to Campaign Manager DTv2 files on your
behalf. Contact
Campaign Manager support ,
your agency, or your Campaign Manager reseller for access to Campaign
Manager DTv2 files.
If you intend to set up transfer run notifications for Pub/Sub, you
must have pubsub.topics.setIamPolicy permissions. For more information, see
BigQuery Data Transfer Service run notifications .
Required permissions
Ensure that you have granted the following permissions.
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
Required Campaign Manager roles
Grant read access to the Campaign Manager DTv2 files
stored in Cloud Storage. Access is managed by the entity from which
you received the Cloud Storage bucket.
Set up a Campaign Manager transfer
Setting up a Campaign Manager data transfer requires a:
Cloud Storage bucket : The Cloud Storage bucket URI for your
Campaign Manager DTv2 files as described in Before you begin .
The bucket name should look like the following:
dcdt_-dcm_account123456
Campaign Manager ID : Your Campaign Manager Network, Advertiser, or
Floodlight ID. Network ID is the parent in the hierarchy.
Find your Campaign Manager ID
To retrieve your Campaign Manager ID, you can use the Cloud Storage
console to examine the files in your
Campaign Manager Data Transfer Cloud Storage
bucket. The Campaign Manager ID is used to match files in the provided
Cloud Storage bucket. The ID is embedded in the file name , not the
Cloud Storage bucket name.
For example:
In a file named dcm_account 123456 _activity_* ,
the ID is 123456 .
In a file named dcm_floodlight 7890 _activity_* ,
the ID is 7890 .
In a file named dcm_advertiser 567 _activity_* ,
the ID is 567 .
Finding your filename prefix
In rare cases, the files in your Cloud Storage bucket may have custom,
nonstandard file names that were set up for you by the Google Marketing Platform
services team.
For example:
In a file named dcm_account123456 custom _activity_* ,
the prefix is dcm_account123456custom — everything before
_activity .
Contact Campaign Manager support
if you need help.
Create a data transfer for Campaign Manager
Console
Go to the Data transfers page in the Google Cloud console.
Go to Data transfers
Click add Create transfer .
On the Create Transfer page:
In the Source type section, for Source , choose
Campaign Manager .
In the Transfer config name section, for Display name , enter a
name for the data transfer such as My Transfer . The transfer name can
be any value that lets you identify the transfer if you need to modify
it later.
In the Schedule options section, for Schedule , leave the
default value ( Start now ) or click Start at a set time .
For Repeats , choose an option for how often to run the
transfer. If you choose an option other than Daily , additional
options are available. For example, if you choose Weekly , an
option appears for you to select the day of the week.
For Start date and run time , enter the date and time to start
the data transfer. If you choose Start now , this option is
disabled.
In the Destination settings section, for Destination dataset ,
choose the dataset you created to store your data.
In the Data source details section:
For Cloud Storage bucket , enter or browse for the name of
the Cloud Storage bucket that stores your Data Transfer V2.0
files. When you enter the bucket name, don't include gs:// .
For DoubleClick ID , enter the appropriate Campaign Manager ID.
(Optional) If your files have
standard names like these examples ,
leave the File name prefix field blank. Specify a
filename prefix
if the files in your Cloud Storage bucket have custom file
names.
(Optional) In the Notification options section:
Click the toggle to enable email notifications. When you enable this
option, the transfer administrator receives an email notification
when a transfer run fails.
For Select a Pub/Sub topic , choose your topic
name or click Create a topic . This option configures
Pub/Sub run
notifications for your
transfer.
Click Save .
bq
Enter the bq mk command and supply the transfer creation flag —
--transfer_config . The following flags are also required:
--data_source
--target_dataset
--display_name
--params
bq mk --transfer_config \
--project_id = project_id \
--target_dataset = dataset \
--display_name = name \
--params = ' parameters ' \
--data_source = data_source
Where:
project_id is your project ID.
dataset is the target dataset for the data transfer configuration.
name is the display name for the data transfer configuration. The
transfer name can be any value that lets you identify the
transfer if you need to modify it later.
parameters contains the parameters for the created data transfer
configuration in JSON format. For example:
--params='{"param":"param_value"}' . For Campaign Manager, you must supply
the bucket and network_id parameters. bucket is the
Cloud Storage bucket that contains your Campaign Manager DTv2 files.
network_id is your network, floodlight, or advertiser ID.
data_source is the data source — dcm_dt (Campaign
Manager).
Caution: You cannot configure notifications using the command-line
tool.
You can also supply the --project_id flag to specify a particular
project. If --project_id isn't specified, the default project is used.
For example, the following command creates a Campaign Manager
data transfer named My Transfer using Campaign Manager ID 123456 ,
Cloud Storage bucket dcdt_-dcm_account123456 , and target dataset
mydataset . The parameter file_name_prefix is optional and used for rare,
custom file names only.
The data transfer is created in the default project:
bq mk --transfer_config \
--target_dataset=mydataset \
--display_name='My Transfer' \
--params='{"bucket": "dcdt_-dcm_account123456","network_id": "123456","file_name_prefix":"YYY"}' \
--data_source=dcm_dt
After running the command, you receive a message like the following:
[URL omitted] Please copy and paste the above URL into your web browser and
follow the instructions to retrieve an authentication code.
Follow the instructions and paste the authentication code on the command
line.
Caution: When you create a Campaign Manager data transfer using the
command-line tool, the transfer configuration is set up using the default
value for Schedule (every 8 hours).
API
Use the projects.locations.transferConfigs.create
method and supply an instance of the
TransferConfig
resource.
Java
Before trying this sample, follow the Java setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Java API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.api.gax.rpc. ApiException ;
import com.google.cloud.bigquery.datatransfer.v1. CreateTransferConfigRequest ;
import com.google.cloud.bigquery.datatransfer.v1. DataTransferServiceClient ;
import com.google.cloud.bigquery.datatransfer.v1. ProjectName ;
import com.google.cloud.bigquery.datatransfer.v1. TransferConfig ;
import com.google.protobuf. Struct ;
import com.google.protobuf. Value ;
import java.io.IOException ;
import java.util.HashMap ;
import java.util.Map ;
// Sample to create campaign manager transfer config
public class CreateCampaignmanagerTransfer {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
final String projectId = "MY_PROJECT_ID" ;
String datasetId = "MY_DATASET_ID" ;
String bucket = "gs://cloud-sample-data" ;
// the network_id only allows digits
String networkId = "7878" ;
String fileNamePrefix = "test_" ;
Map<String , Value > params = new HashMap <> ();
params . put ( "bucket" , Value . newBuilder (). setStringValue ( bucket ). build ());
params . put ( "network_id" , Value . newBuilder (). setStringValue ( networkId ). build ());
params . put ( "file_name_prefix" , Value . newBuilder (). setStringValue ( fileNamePrefix ). build ());
TransferConfig transferConfig =
TransferConfig . newBuilder ()
. setDestinationDatasetId ( datasetId )
. setDisplayName ( "Your Campaignmanager Config Name" )
. setDataSourceId ( "dcm_dt" )
. setParams ( Struct . newBuilder (). putAllFields ( params ). build ())
. build ();
createCampaignmanagerTransfer ( projectId , transferConfig );
}
public static void createCampaignmanagerTransfer ( String projectId , TransferConfig transferConfig )
throws IOException {
try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) {
ProjectName parent = ProjectName . of ( projectId );
CreateTransferConfigRequest request =
CreateTransferConfigRequest . newBuilder ()
. setParent ( parent . toString ())
. setTransferConfig ( transferConfig )
. build ();
TransferConfig config = client . createTransferConfig ( request );
System . out . println ( "Campaignmanager transfer created successfully :" + config . getName ());
} catch ( ApiException ex ) {
System . out . print ( "Campaignmanager transfer was not created." + ex . toString ());
}
}
}
Warning: If you change the schema of a report, all files on that day must have
the same schema, or the data transfer for the entire day will fail.
Troubleshoot Campaign Manager transfer setup
If you are having issues setting up your data transfer, see
Campaign Manager transfer issues
in Troubleshooting transfer configurations .
Query your data
When your data is transferred to BigQuery, the data is
written to ingestion-time partitioned tables. For more information, see
Introduction to partitioned tables .
If you query your tables directly instead of using the auto-generated views, you
must use the _PARTITIONTIME pseudocolumn in your query. For more information,
see Querying partitioned tables .
Campaign Manager sample queries
You can use the following Campaign Manager sample queries to
analyze your transferred data. You can also use the queries in a visualization
tool such as Data Studio .
These queries are provided to help you get started on querying your
Campaign Manager data with BigQuery. For additional questions on
what you can do with these reports, contact your Campaign Manager
technical representative.
Note: If you query your tables directly instead of using the auto-generated
views, you must use the _PARTITIONTIME pseudocolumn in your query. For more
information, see Querying partitioned tables .
In each of the following queries, replace the variables like dataset
with your values.
Latest campaigns
The following SQL sample query retrieves the latest campaigns.
SELECT
Campaign ,
Campaign_ID
FROM
` dataset .match_table_campaigns_ campaign_manager_id `
WHERE
_DATA_DATE = _LATEST_DATE
Impressions and distinct users by campaign
The following SQL sample query analyzes the number of impressions and
distinct users by campaign over the past 30 days.
# START_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -31 DAY)
# END_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -1 DAY)
SELECT
Campaign_ID ,
_DATA_DATE AS Date ,
COUNT ( * ) AS count ,
COUNT ( DISTINCT User_ID ) AS du
FROM
` dataset .impression_ campaign_manager_id `
WHERE
_DATA_DATE BETWEEN start_date
AND end_date
GROUP BY
Campaign_ID ,
Date
Latest campaigns ordered by campaign and date
The following SQL sample query analyzes the latest campaigns in the past 30
days, ordered by campaign and date.
# START_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -31 DAY)
# END_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -1 DAY)
SELECT
Campaign ,
Campaign_ID ,
Date
FROM (
SELECT
Campaign ,
Campaign_ID
FROM
` dataset .match_table_campaigns_ campaign_manager_id `
WHERE
_DATA_DATE = _LATEST_DATE ),
(
SELECT
date AS Date
FROM
`bigquery-public-data.utility_us.date_greg`
WHERE
Date BETWEEN start_date
AND end_date )
ORDER BY
Campaign_ID ,
Date
Impressions and distinct users by campaign within a date range
The following SQL sample query analyzes the number of impressions and distinct
users by campaign between start_date and end_date .
# START_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -31 DAY)
# END_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -1 DAY)
SELECT
base . * ,
imp . count AS imp_count ,
imp . du AS imp_du
FROM (
SELECT
*
FROM (
SELECT
Campaign ,
Campaign_ID
FROM
` dataset .match_table_campaigns_ campaign_manager_id `
WHERE
_DATA_DATE = _LATEST_DATE ),
(
SELECT
date AS Date
FROM
`bigquery-public-data.utility_us.date_greg`
WHERE
Date BETWEEN start_date
AND end_date ) ) AS base
LEFT JOIN (
SELECT
Campaign_ID ,
_DATA_DATE AS Date ,
COUNT ( * ) AS count ,
COUNT ( DISTINCT User_ID ) AS du
FROM
` dataset .impression_ campaign_manager_id `
WHERE
_DATA_DATE BETWEEN start_date
AND end_date
GROUP BY
Campaign_ID ,
Date ) AS imp
ON
base . Campaign_ID = imp . Campaign_ID
AND base . Date = imp . Date
WHERE
base . Campaign_ID = imp . Campaign_ID
AND base . Date = imp . Date
ORDER BY
base . Campaign_ID ,
base . Date
Impressions, clicks, activities and distinct users by campaign
The following SQL sample query analyzes the number of impressions, clicks,
activities, and distinct users by campaign over the past 30 days. In
this query, replace the variables like campaign_list with your
values. For example, replace campaign_list with a comma-separated
list of all the Campaign Manager campaigns of interest within the scope of the
query.
# START_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -31 DAY)
# END_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -1 DAY)
SELECT
base . * ,
imp . count AS imp_count ,
imp . du AS imp_du ,
click . count AS click_count ,
click . du AS click_du ,
activity . count AS activity_count ,
activity . du AS activity_du
FROM (
SELECT
*
FROM (
SELECT
Campaign ,
Campaign_ID
FROM
` dataset .match_table_campaigns_ campaign_manager_id `
WHERE
_DATA_DATE = _LATEST_DATE ),
(
SELECT
date AS Date
FROM
`bigquery-public-data.utility_us.date_greg`
WHERE
Date BETWEEN DATE_ADD ( CURRENT_DATE (), INTERVAL - 31 DAY )
AND DATE_ADD ( CURRENT_DATE (), INTERVAL - 1 DAY ) ) ) AS base
LEFT JOIN (
SELECT
Campaign_ID ,
_DATA_DATE AS Date ,
COUNT ( * ) AS count ,
COUNT ( DISTINCT User_ID ) AS du
FROM
` dataset .impression_ campaign_manager_id `
WHERE
_DATA_DATE BETWEEN DATE_ADD ( CURRENT_DATE (), INTERVAL - 31 DAY )
AND DATE_ADD ( CURRENT_DATE (), INTERVAL - 1 DAY )
GROUP BY
Campaign_ID ,
Date ) AS imp
ON
base . Campaign_ID = imp . Campaign_ID
AND base . Date = imp . Date
LEFT JOIN (
SELECT
Campaign_ID ,
_DATA_DATE AS Date ,
COUNT ( * ) AS count ,
COUNT ( DISTINCT User_ID ) AS du
FROM
` dataset .click_ campaign_manager_id `
WHERE
_DATA_DATE BETWEEN DATE_ADD ( CURRENT_DATE (), INTERVAL - 31 DAY )
AND DATE_ADD ( CURRENT_DATE (), INTERVAL - 1 DAY )
GROUP BY
Campaign_ID ,
Date ) AS click
ON
base . Campaign_ID = click . Campaign_ID
AND base . Date = click . Date
LEFT JOIN (
SELECT
Campaign_ID ,
_DATA_DATE AS Date ,
COUNT ( * ) AS count ,
COUNT ( DISTINCT User_ID ) AS du
FROM
` dataset .activity_ campaign_manager_id `
WHERE
_DATA_DATE BETWEEN DATE_ADD ( CURRENT_DATE (), INTERVAL - 31 DAY )
AND DATE_ADD ( CURRENT_DATE (), INTERVAL - 1 DAY )
GROUP BY
Campaign_ID ,
Date ) AS activity
ON
base . Campaign_ID = activity . Campaign_ID
AND base . Date = activity . Date
WHERE
base . Campaign_ID IN campaign_list
AND ( base . Date = imp . Date
OR base . Date = click . Date
OR base . Date = activity . Date )
ORDER BY
base . Campaign_ID ,
base . Date
Campaign activity
The following SQL sample query analyzes campaign activity over the past 30 days.
In this query, replace the variables like campaign_list with your
values. For example, replace campaign_list with a comma-separated
list of all the Campaign Manager campaigns of interest within the scope of the
query.
# START_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -31 DAY)
# END_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL -1 DAY)
SELECT
base . * ,
activity . count AS activity_count ,
activity . du AS activity_du
FROM (
SELECT
*
FROM (
SELECT
Campaign ,
Campaign_ID
FROM
` dataset .match_table_campaigns_ campaign_manager_id `
WHERE
_DATA_DATE = _LATEST_DATE ),
(
SELECT
mt_at . Activity_Group ,
mt_ac . Activity ,
mt_ac . Activity_Type ,
mt_ac . Activity_Sub_Type ,
mt_ac . Activity_ID ,
mt_ac . Activity_Group_ID
FROM
` dataset .match_table_activity_cats_ campaign_manager_id ` AS mt_ac
JOIN (
SELECT
Activity_Group ,
Activity_Group_ID
FROM
` dataset .match_table_activity_types_ campaign_manager_id `
WHERE
_DATA_DATE = _LATEST_DATE ) AS mt_at
ON
mt_at . Activity_Group_ID = mt_ac . Activity_Group_ID
WHERE
_DATA_DATE = _LATEST_DATE ),
(
SELECT
date AS Date
FROM
`bigquery-public-data.utility_us.date_greg`
WHERE
Date BETWEEN start_date
AND end_date ) ) AS base
LEFT JOIN (
SELECT
Campaign_ID ,
Activity_ID ,
_DATA_DATE AS Date ,
COUNT ( * ) AS count ,
COUNT ( DISTINCT User_ID ) AS du
FROM
` dataset .activity_ campaign_manager_id `
WHERE
_DATA_DATE BETWEEN DATE_ADD ( CURRENT_DATE (), INTERVAL - 31 DAY )
AND DATE_ADD ( CURRENT_DATE (), INTERVAL - 1 DAY )
GROUP BY
Campaign_ID ,
Activity_ID ,
Date ) AS activity
ON
base . Campaign_ID = activity . Campaign_ID
AND base . Activity_ID = activity . Activity_ID
AND base . Date = activity . Date
WHERE
base . Campaign_ID IN campaign_list
AND base . Activity_ID = activity . Activity_ID
ORDER BY
base . Campaign_ID ,
base . Activity_Group_ID ,
base . Activity_ID ,
base . Date
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
