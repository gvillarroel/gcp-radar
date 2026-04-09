---
title: "Create and use data profile scans \_|\_ Dataplex Universal Catalog \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/use-data-profiling
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/use-data-profiling
  title: "Create and use data profile scans \_|\_ Dataplex Universal Catalog \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Guides
Send feedback
Create and use data profile scans
Stay organized with collections
Save and categorize content based on your preferences.
Dataplex Universal Catalog lets you identify common statistical
characteristics (common values, data distribution, null counts) of the columns
in your BigQuery tables. This information helps you to understand
and analyze your data more effectively.
For more information about Dataplex Universal Catalog data profile scans, see
About data profiling .
Tip: While this document covers how to manage data profile scans across
your project, you can also create and manage data profile scans when working
with a specific table. For more information, see the
Manage data profile scans for a specific table section
of this document.
Before you begin
Enable the Dataplex API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles and permissions
This section describes the IAM roles and permissions needed to
use Dataplex Universal Catalog data profile scans.
User roles and permissions
To get the permissions that
you need to create and manage data profile scans,
ask your administrator to grant you the
following IAM roles:
Create, run, update, and delete data profile scans:
Dataplex DataScan Editor ( roles/dataplex.dataScanEditor )
on the project containing the data scan
View data profile scan results, jobs, and history:
Dataplex DataScan Viewer ( roles/dataplex.dataScanViewer )
on the project containing the data scan
Publish data profile scan results to Dataplex Universal Catalog:
Dataplex Catalog Editor ( roles/dataplex.catalogEditor )
on the @bigquery entry group
View published data profile scan results in BigQuery on the Data profile tab:
BigQuery Data Viewer ( roles/bigquery.dataViewer )
on the table
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create and manage data profile scans. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create and manage data profile scans:
Create, run, update, and delete data profile scans:
dataplex.datascans.create
on project
dataplex.datascans.update
on data scan
dataplex.datascans.delete
on data scan
dataplex.datascans.run
on data scan
dataplex.datascans.get
on data scan
dataplex.datascans.list
on project
dataplex.dataScanJobs.get
on data scan job
dataplex.dataScanJobs.list
on data scan
View data profile scan results, jobs, and history:
dataplex.datascans.getData
on data scan
dataplex.datascans.list
on project
dataplex.dataScanJobs.get
on data scan job
dataplex.dataScanJobs.list
on data scan
Publish data profile scan results to Dataplex Universal Catalog:
dataplex.entryGroups.useDataProfileAspect
on entry group
bigquery.tables.update
on table
dataplex.entries.update
on entry
View published data profile results for a table in BigQuery or Dataplex Universal Catalog:
bigquery.tables.get
on table
bigquery.tables.getData
on table
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Dataplex Universal Catalog service account roles and permissions
To ensure that the Dataplex Universal Catalog service account has the necessary
permissions to run data profile scans and export results,
ask your administrator to grant the
following IAM roles to the Dataplex Universal Catalog service account:
Important: You must grant these roles
to the Dataplex Universal Catalog service account, not to your user account. Failure to grant the roles to the correct principal might result in permission errors.
Run data profile scans against BigQuery data:
BigQuery Job User ( roles/bigquery.jobUser )
on project running the scan
BigQuery Data Viewer ( roles/bigquery.dataViewer )
on tables being scanned
Run data profile scans for BigQuery external tables that use Cloud Storage data:
Storage Object Viewer ( roles/storage.objectViewer )
on Cloud Storage bucket
Storage Legacy Bucket Reader ( roles/storage.legacyBucketReader )
on Cloud Storage bucket
Export data profile scan results to a BigQuery table:
BigQuery Data Editor ( roles/bigquery.dataEditor )
on table
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to run data profile scans and export results. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to run data profile scans and export results:
Run data profile scans against BigQuery data:
bigquery.jobs.create
on project
bigquery.tables.get
on table
bigquery.tables.getData
on table
Run data profile scans for BigQuery external tables that use Cloud Storage data:
storage.buckets.get
on bucket
storage.objects.get
on object
Export data profile scan results to a BigQuery table:
bigquery.tables.create
on dataset
bigquery.tables.updateData
on table
Your administrator might also be able to give the Dataplex Universal Catalog service account
these permissions
with custom roles or
other predefined roles .
If a table uses BigQuery row-level
security , then Dataplex Universal Catalog
can only scan rows visible to the Dataplex Universal Catalog service account. To
allow Dataplex Universal Catalog to scan all rows, add its service account to a row
filter where the predicate is TRUE .
If a table uses BigQuery column-level security , then Dataplex Universal Catalog
requires access to scan protected columns. To grant access, give the
Dataplex Universal Catalog service account the
Data Catalog Fine-Grained Reader ( roles/datacatalog.fineGrainedReader )
role on all policy tags used in the table. The user creating or updating a data
scan also needs permissions on protected columns.
Grant roles to the Dataplex Universal Catalog service account
To run data profile scans, Dataplex Universal Catalog uses a service account that
requires permissions to run BigQuery jobs and read
BigQuery table data. To grant the required roles, follow
these steps:
Get the Dataplex Universal Catalog service account email address. If you haven't
created a data profile or data quality scan in this project before,
run the following gcloud command to generate the service identity:
gcloud beta services identity create --service = dataplex.googleapis.com
The command returns the service account email, which has the following format:
service- PROJECT_ID @gcp-sa-dataplex.iam.gserviceaccount.com.
If the service account already exists, you can find its email by viewing
principals with the Dataplex name on the IAM page in the Google Cloud console.
Grant the service account the BigQuery Job User
( roles/bigquery.jobUser ) role on your project. This role lets the
service account run BigQuery jobs for the scan.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount:service- PROJECT_NUMBER @gcp-sa-dataplex.iam.gserviceaccount.com" \
--role = "roles/bigquery.jobUser"
Replace the following:
PROJECT_ID : your Google Cloud project ID.
service- PROJECT_NUMBER @gcp-sa-dataplex.iam.gserviceaccount.com : the email of the Dataplex Universal Catalog service account.
Grant the service account the BigQuery Data Viewer
( roles/bigquery.dataViewer ) role for each table that you want to
profile. This role grants read-only access to the tables.
gcloud bigquery tables add-iam-policy-binding DATASET_ID . TABLE_ID \
--member = "serviceAccount:service- PROJECT_NUMBER @gcp-sa-dataplex.iam.gserviceaccount.com" \
--role = "roles/bigquery.dataViewer"
Replace the following:
DATASET_ID : the ID of the dataset containing the table.
TABLE_ID : the ID of the table to profile.
service- PROJECT_NUMBER @gcp-sa-dataplex.iam.gserviceaccount.com : the email of the Dataplex Universal Catalog service account.
Create a data profile scan
Console
In the Google Cloud console, go to the Dataplex Universal Catalog
Data profiling & quality page.
Go to Data profiling & quality
Click Create data profile scan .
Optional: Enter a Display name .
Enter an ID . See the
Resource naming conventions .
Optional: Enter a Description .
In the Table field, click Browse . Choose the table to scan, and
then click Select .
For tables in multi-region datasets, choose a region where to create
the data scan.
To browse the tables organized within Dataplex Universal Catalog lakes,
click Browse within Dataplex Lakes .
In the Scope field, choose Incremental or Entire data .
If you choose Incremental data , in the Timestamp column field,
select a column of type DATE or TIMESTAMP from your
BigQuery table that increases as new records are added,
and that can be used to identify new records. For tables partitioned on a
column of type DATE or TIMESTAMP , we recommend using the partition
column as the timestamp field.
Optional: To filter your data, do any of the following:
To filter by rows, select the Filter rows checkbox.
Enter a valid SQL expression that can be used in a
WHERE clause in GoogleSQL syntax .
For example: col1 >= 0 .
The filter can be a combination of SQL conditions over multiple
columns. For example: col1 >= 0 AND col2 < 10 .
To filter by columns, select the Filter columns checkbox.
To include columns in the profile scan, in the Include columns
field, click Browse . Select the columns to include, and then
click Select .
To exclude columns from the profile scan, in the Exclude columns
field, click Browse . Select the columns to exclude, and then
click Select .
Note: You can use Include columns , Exclude columns , or both. If
you use both the fields, then the data profile scan first selects the
columns based on your input in the Include columns field and then
excludes the columns based on your input in the Exclude columns field.
To apply sampling to your data profile scan, in the Sampling size
list, select a sampling percentage. Choose a percentage value that ranges
between 0.0% and 100.0% with up to 3 decimal digits.
For larger datasets, choose a lower sampling percentage. For example,
for a 1 PB table, if you enter a value between 0.1% and 1.0%,
the data profile samples between 1-10 TB of data.
There must be at least 100 records in the sampled data to return a result.
For incremental data scans, the data profile scan applies sampling to
the latest increment.
Optional: Publish the data profile scan results in the
BigQuery and Dataplex Universal Catalog pages in the
Google Cloud console for the source table. Select the
Publish results to Dataplex Catalog
checkbox.
You can view the latest scan results in the Data profile tab in the
BigQuery and Dataplex Universal Catalog pages for the source
table. To enable users to access the published scan results, see the
Grant access to data profile scan results section
of this document.
The publishing option might not be available in the following cases:
You don't have the required permissions on the table.
Another data profile scan is set to publish results.
In the Schedule section, choose one of the following options:
Repeat : Run the data profile scan on a schedule: hourly, daily,
weekly, monthly, or custom. Specify how often the scan should run and
at what time. If you choose custom, use
cron format to specify the
schedule.
On-demand : Run the data profile scan on demand.
One-time run : Run the data profile scan once now, and remove the scan
after the auto-deletion time. This feature is in preview .
Set post-scan results auto-deletion : The auto-deletion time
defines the duration a data profile scan remains active after
execution. A data profile scan without a specified auto-deletion
time is automatically removed after 24 hours. The auto-deletion
time can range from 0 seconds (immediate deletion) to 365 days.
Click Continue .
Optional: Export the scan results to a BigQuery standard
table. In the Export scan results to BigQuery table section, do the
following:
In the Select BigQuery dataset field, click Browse . Select a
BigQuery dataset to store the data profile scan results.
In the BigQuery table field, specify the table to store the data
profile scan results. If you're using an existing table, make sure
that it is compatible with the
export table schema .
If the specified table doesn't exist, Dataplex Universal Catalog creates
it for you.
Note: You can use the same results table for multiple data profile
scans.
Optional: Add labels. Labels are key-value pairs that let you group
related objects together or with other Google Cloud resources.
To create the scan, click Create .
If you set the schedule to on-demand, you can also run the scan now
by clicking Run scan .
gcloud
To create a data profile scan, use the
gcloud dataplex datascans create data-profile command .
If the source data is organized in a Dataplex Universal Catalog lake, include
the --data-source-entity flag:
gcloud dataplex datascans create data-profile DATASCAN \
--location= LOCATION \
--data-source-entity= DATA_SOURCE_ENTITY
If the source data isn't organized in a Dataplex Universal Catalog lake, include
the --data-source-resource flag:
gcloud dataplex datascans create data-profile DATASCAN \
--location= LOCATION \
--data-source-resource= DATA_SOURCE_RESOURCE
Replace the following variables:
DATASCAN : The name of the data profile scan.
LOCATION : The Google Cloud region in which to create
the data profile scan.
DATA_SOURCE_ENTITY : The Dataplex Universal Catalog
entity that contains the data for the data profile scan. For example,
projects/test-project/locations/test-location/lakes/test-lake/zones/test-zone/entities/test-entity .
DATA_SOURCE_RESOURCE : The name of the resource
that contains the data for the data profile scan. For example,
//bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog C# API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Dataplex.V1 ;
using Google.LongRunning ;
public sealed partial class GeneratedDataScanServiceClientSnippets
{
/// <summary>Snippet for CreateDataScan</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void CreateDataScanRequestObject ()
{
// Create client
DataScanServiceClient dataScanServiceClient = DataScanServiceClient . Create ();
// Initialize request argument(s)
CreateDataScanRequest request = new CreateDataScanRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( "[PROJECT]" , "[LOCATION]" ),
DataScan = new DataScan (),
DataScanId = "" ,
ValidateOnly = false ,
};
// Make the request
Operation<DataScan , OperationMetadata > response = dataScanServiceClient . CreateDataScan ( request );
// Poll until the returned long-running operation is complete
Operation<DataScan , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
DataScan result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DataScan , OperationMetadata > retrievedResponse = dataScanServiceClient . PollOnceCreateDataScan ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
DataScan retrievedResult = retrievedResponse . Result ;
}
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Go API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewDataScanClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . CreateDataScanRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#CreateDataScanRequest.
}
op , err := c . CreateDataScan ( ctx , req )
if err != nil {
// TODO: Handle error.
}
resp , err := op . Wait ( ctx )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Java API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. CreateDataScanRequest ;
import com.google.cloud.dataplex.v1. DataScan ;
import com.google.cloud.dataplex.v1. DataScanServiceClient ;
import com.google.cloud.dataplex.v1. LocationName ;
public class SyncCreateDataScan {
public static void main ( String [] args ) throws Exception {
syncCreateDataScan ();
}
public static void syncCreateDataScan () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) {
CreateDataScanRequest request =
CreateDataScanRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setDataScan ( DataScan . newBuilder (). build ())
. setDataScanId ( "dataScanId1260787906" )
. setValidateOnly ( true )
. build ();
DataScan response = dataScanServiceClient . createDataScanAsync ( request ). get ();
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Python API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_data_scan ():
# Create a client
client = dataplex_v1 . DataScanServiceClient ()
# Initialize request argument(s)
data_scan = dataplex_v1 . DataScan ()
data_scan . data . entity = "entity_value"
request = dataplex_v1 . CreateDataScanRequest (
parent = "parent_value" ,
data_scan = data_scan ,
data_scan_id = "data_scan_id_value" ,
)
# Make the request
operation = client . create_data_scan ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Ruby API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the create_data_scan call in the DataScanService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::DataScanService::Client#create_data_scan.
#
def create_data_scan
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: DataScanService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: CreateDataScanRequest . new
# Call the create_data_scan method.
result = client . create_data_scan request
# The returned object is of type Gapic::Operation. You can use it to
# check the status of an operation, cancel it, or wait for results.
# Here is how to wait for a response.
result . wait_until_done! timeout : 60
if result . response?
p result . response
else
puts "No response received."
end
end
REST
To create a data profile scan, use the
dataScans.create method .
Note: If your BigQuery table is configured with the Require
partition filter setting set to true , use the table's partition column as the
data profile scan's row filter or timestamp column.
Export table schema
If you want to export the data profile scan results to an existing
BigQuery table, make sure that it is compatible with the
following table schema:
Column name
Column data type
Sub field name (if applicable)
Sub field data type
Mode
Example
data_profile_scan
struct/record
resource_name
string
nullable
//dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan
project_id
string
nullable
test-project
location
string
nullable
us-central1
data_scan_id
string
nullable
test-datascan
data_source
struct/record
resource_name
string
nullable
Entity case:
//dataplex.googleapis.com/projects/test-project/locations/europe-west2/lakes/test-lake/zones/test-zone/entities/test-entity
Table case:
//bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table
dataplex_entity_project_id
string
nullable
test-project
dataplex_entity_project_number
integer
nullable
123456789012
dataplex_lake_id
string
nullable
(Valid only if source is entity)
test-lake
dataplex_zone_id
string
nullable
(Valid only if source is entity)
test-zone
dataplex_entity_id
string
nullable
(Valid only if source is entity)
test-entity
table_project_id
string
nullable
dataplex-table
table_project_number
int64
nullable
345678901234
dataset_id
string
nullable
(Valid only if source is table)
test-dataset
table_id
string
nullable
(Valid only if source is table)
test-table
data_profile_job_id
string
nullable
caeba234-cfde-4fca-9e5b-fe02a9812e38
data_profile_job_configuration
json
trigger
string
nullable
ondemand / schedule
incremental
boolean
nullable
true / false
sampling_percent
float
nullable
(0-100)
20.0 (indicates 20%)
row_filter
string
nullable
col1 >= 0 AND col2
column_filter
json
nullable
{"include_fields":["col1","col2"], "exclude_fields":["col3"]}
job_labels
json
nullable
{"key1":value1}
job_start_time
timestamp
nullable
2023-01-01 00:00:00 UTC
job_end_time
timestamp
nullable
2023-01-01 00:00:00 UTC
job_rows_scanned
integer
nullable
7500
column_name
string
nullable
column-1
column_type
string
nullable
string
column_mode
string
nullable
repeated
percent_null
float
nullable
(0.0-100.0)
20.0 (indicates 20%)
percent_unique
float
nullable
(0.0-100.0)
92.5
min_string_length
integer
nullable
(Valid only if column type is string)
10
max_string_length
integer
nullable
(Valid only if column type is string)
4
average_string_length
float
nullable
(Valid only if column type is string)
7.2
min_value
float
nullable
(Valid only if column type is numeric - integer/float)
max_value
float
nullable
(Valid only if column type is numeric - integer/float)
average_value
float
nullable
(Valid only if column type is numeric - integer/float)
standard_deviation
float
nullable
(Valid only if column type is numeric - integer/float)
quartile_lower
integer
nullable
(Valid only if column type is numeric - integer/float)
quartile_median
integer
nullable
(Valid only if column type is numeric - integer/float)
quartile_upper
integer
nullable
(Valid only if column type is numeric - integer/float)
top_n
struct/record - repeated
value
string
nullable
"4009"
count
integer
nullable
20
percent
float
nullable
10 (indicates 10%)
Export table setup
When you export to
BigQueryExport
tables, follow these guidelines:
For the field resultsTable , use the format:
//bigquery.googleapis.com/projects/{project-id}/datasets/{dataset-id}/tables/{table-id} .
Use a BigQuery standard table.
If the table doesn't exist when the scan is created or updated,
Dataplex Universal Catalog creates the table for you.
By default, the table is partitioned on the job_start_time column daily.
If you want the table to be partitioned in other configurations or if
you don't want the partition, then recreate the table with the required
schema and configurations and then provide the pre-created table as the
results table.
Make sure the results table is in the same location as the source table.
If VPC-SC is configured on the project, then the results table must be in the
same VPC-SC perimeter as the source table.
If the table is modified during the scan execution stage, then the current
running job exports to the previous results table and the table change
takes effect from the next scan job.
Don't modify the table schema. If you need customized columns, create a view
upon the table.
To reduce costs, set an expiration on the partition based on your use case.
For more information, see how to set the partition expiration .
Create multiple data profile scans
You can configure data profile scans for multiple tables in a
BigQuery dataset at the same time by using the Google Cloud console.
In the Google Cloud console, go to the Dataplex Universal Catalog
Data profiling & quality page.
Go to Data profiling & quality
Click Create data profile scan .
Select the Multiple data profile scans option.
Enter an ID prefix . Dataplex Universal Catalog automatically generates scan
IDs by using the provided prefix and unique suffixes.
Enter a Description for all of the data profile scans.
In the Dataset field, click Browse . Select a dataset to pick tables
from. Click Select .
If the dataset is multi-regional, select a Region in which to create the
data profile scans.
Configure the common settings for the scans:
In the Scope field, choose Incremental or Entire data .
Note: If you choose Incremental data, you can select only tables that
are partitioned on a column of type DATE or TIMESTAMP .
To apply sampling to the data profile scans, in the Sampling size
list, select a sampling percentage.
Choose a percentage value between 0.0% and 100.0% with up to 3 decimal
digits.
Optional: Publish the data profile scan results in the
BigQuery and Dataplex Universal Catalog pages in the
Google Cloud console for the source table. Select the
Publish results to Dataplex Catalog checkbox.
You can view the latest scan results in the Data profile tab in the
BigQuery and Dataplex Universal Catalog pages for the source
table. To enable users to access the published scan results, see the
Grant access to data profile scan
results section of this document.
Note: You must choose tables that don't have any existing scans publishing
their results.
In the Schedule section, choose one of the following options:
Repeat : Run the data profile scans on a schedule: hourly, daily,
weekly, monthly, or custom. Specify how often the scans should run and
at what time. If you choose custom, use
cron format to specify the
schedule.
On-demand : Run the data profile scans on demand.
One-time run : Run the data profile scan once now, and remove
the scan after the auto-deletion time. This feature is in
preview .
Set post-scan results auto-deletion : The auto-deletion time
defines the duration a data profile scan remains active after
execution. A data profile scan without a specified auto-deletion
time is automatically removed after 24 hours. The auto-deletion
time can range from 0 seconds (immediate deletion) to 365 days.
Click Continue .
In the Choose tables field, click Browse . Choose one or more tables
to scan, and then click Select .
Click Continue .
Optional: Export the scan results to a BigQuery standard
table. In the Export scan results to BigQuery table section, do the
following:
In the Select BigQuery dataset field, click Browse . Select a
BigQuery dataset to store the data profile scan results.
In the BigQuery table field, specify the table to store the data
profile scan results. If you're using an existing table, make sure that
it is compatible with the
export table schema .
If the specified table doesn't exist, Dataplex Universal Catalog creates it
for you.
Dataplex Universal Catalog uses the same results table for all of the data
profile scans.
Optional: Add labels. Labels are key-value pairs that let you group related
objects together or with other Google Cloud resources.
To create the scans, click Create .
If you set the schedule to on-demand, you can also run the scans now by
clicking Run scan .
Run a data profile scan
Console
In the Google Cloud console, go to the Dataplex Universal Catalog
Data profiling & quality page.
Go to Data profiling & quality
Click the data profile scan to run.
Click Run now .
gcloud
To run a data profile scan, use the
gcloud dataplex datascans run command :
gcloud dataplex datascans run DATASCAN \
--location= LOCATION
Replace the following variables:
DATASCAN : The name of the data profile scan.
LOCATION : The Google Cloud region in which the
data profile scan was created.
C#
C#
Before trying this sample, follow the C# setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog C# API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
public sealed partial class GeneratedDataScanServiceClientSnippets
{
/// <summary>Snippet for RunDataScan</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void RunDataScanRequestObject ()
{
// Create client
DataScanServiceClient dataScanServiceClient = DataScanServiceClient . Create ();
// Initialize request argument(s)
RunDataScanRequest request = new RunDataScanRequest
{
DataScanName = DataScanName . FromProjectLocationDataScan ( "[PROJECT]" , "[LOCATION]" , "[DATASCAN]" ),
};
// Make the request
RunDataScanResponse response = dataScanServiceClient . RunDataScan ( request );
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Go API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewDataScanClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . RunDataScanRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#RunDataScanRequest.
}
resp , err := c . RunDataScan ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Java API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. DataScanName ;
import com.google.cloud.dataplex.v1. DataScanServiceClient ;
import com.google.cloud.dataplex.v1. RunDataScanRequest ;
import com.google.cloud.dataplex.v1. RunDataScanResponse ;
public class SyncRunDataScan {
public static void main ( String [] args ) throws Exception {
syncRunDataScan ();
}
public static void syncRunDataScan () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) {
RunDataScanRequest request =
RunDataScanRequest . newBuilder ()
. setName ( DataScanName . of ( "[PROJECT]" , "[LOCATION]" , "[DATASCAN]" ). toString ())
. build ();
RunDataScanResponse response = dataScanServiceClient . runDataScan ( request );
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Python API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_run_data_scan ():
# Create a client
client = dataplex_v1 . DataScanServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . RunDataScanRequest (
name = "name_value" ,
)
# Make the request
response = client . run_data_scan ( request = request )
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Ruby API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the run_data_scan call in the DataScanService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::DataScanService::Client#run_data_scan.
#
def run_data_scan
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: DataScanService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: RunDataScanRequest . new
# Call the run_data_scan method.
result = client . run_data_scan request
# The returned object is of type Google::Cloud::Dataplex::V1::RunDataScanResponse.
p result
end
REST
To run a data profile scan, use the
dataScans.run method .
Note: Run isn't supported for data profile scans that are on a one-time
schedule.
View data profile scan results
Console
In the Google Cloud console, go to the Dataplex Universal Catalog
Data profiling & quality page.
Go to Data profiling & quality
Click the name of a data profile scan.
The Overview section displays information about the most recent
jobs, including when the scan was run, the number of table records
scanned, and the job status.
The Data profile scan configuration section displays details about
the scan.
To see detailed information about a job, such as the scanned table's
columns, statistics about the columns that were found in the scan, and the
job logs, click the Jobs history tab. Then, click a job ID.
Note: If you exported the scan results to a BigQuery table,
then you can also access the scan results from the table.
gcloud
To view the results of a data profile scan job, use the
gcloud dataplex datascans jobs describe command :
gcloud dataplex datascans jobs describe JOB \
--location= LOCATION \
--datascan= DATASCAN \
--view=FULL
Replace the following variables:
JOB : The job ID of the data profile scan job.
LOCATION : The Google Cloud region in which the
data profile scan was created.
DATASCAN : The name of the data profile scan the
job belongs to.
--view=FULL : To see the scan job result, specify FULL .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog C# API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
public sealed partial class GeneratedDataScanServiceClientSnippets
{
/// <summary>Snippet for GetDataScan</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void GetDataScanRequestObject ()
{
// Create client
DataScanServiceClient dataScanServiceClient = DataScanServiceClient . Create ();
// Initialize request argument(s)
GetDataScanRequest request = new GetDataScanRequest
{
DataScanName = DataScanName . FromProjectLocationDataScan ( "[PROJECT]" , "[LOCATION]" , "[DATASCAN]" ),
View = GetDataScanRequest . Types . DataScanView . Unspecified ,
};
// Make the request
DataScan response = dataScanServiceClient . GetDataScan ( request );
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Go API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewDataScanClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . GetDataScanRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#GetDataScanRequest.
}
resp , err := c . GetDataScan ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Java API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. DataScan ;
import com.google.cloud.dataplex.v1. DataScanName ;
import com.google.cloud.dataplex.v1. DataScanServiceClient ;
import com.google.cloud.dataplex.v1. GetDataScanRequest ;
public class SyncGetDataScan {
public static void main ( String [] args ) throws Exception {
syncGetDataScan ();
}
public static void syncGetDataScan () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) {
GetDataScanRequest request =
GetDataScanRequest . newBuilder ()
. setName ( DataScanName . of ( "[PROJECT]" , "[LOCATION]" , "[DATASCAN]" ). toString ())
. build ();
DataScan response = dataScanServiceClient . getDataScan ( request );
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Python API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_data_scan ():
# Create a client
client = dataplex_v1 . DataScanServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetDataScanRequest (
name = "name_value" ,
)
# Make the request
response = client . get_data_scan ( request = request )
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Ruby API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the get_data_scan call in the DataScanService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::DataScanService::Client#get_data_scan.
#
def get_data_scan
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: DataScanService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: GetDataScanRequest . new
# Call the get_data_scan method.
result = client . get_data_scan request
# The returned object is of type Google::Cloud::Dataplex::V1::DataScan.
p result
end
REST
To view the results of a data profile scan, use the
dataScans.get method .
View published results
If the data profile scan results are published to the BigQuery
and Dataplex Universal Catalog pages in the Google Cloud console, then you can
see the latest scan results on the source table's Data profile tab.
In the Google Cloud console, go to the Dataplex Universal Catalog Search
page.
Go to Search
Search for and then select the table.
Click the Data profile tab.
The latest published results are displayed.
Note: Published results might not be available if a scan is running for the
first time.
View the most recent data profile scan job
Console
In the Google Cloud console, go to the Dataplex Universal Catalog
Data profiling & quality page.
Go to Data profiling & quality
Click the name of a data profile scan.
Click the Latest job results tab.
The Latest job results tab, when there is at least one successfully
completed run, provides information about the most recent job. It lists the scanned
table's columns and statistics about the columns that were found in the scan.
gcloud
To view the most recent successful data profile scan, use the
gcloud dataplex datascans describe command :
gcloud dataplex datascans describe DATASCAN \
--location= LOCATION \
--view=FULL
Replace the following variables:
DATASCAN : The name of the data profile scan to view
the most recent job for.
LOCATION : The Google Cloud region in which the data
profile scan was created.
--view=FULL : To see the scan job result, specify FULL .
REST
To view the most recent scan job, use the
dataScans.get method .
View historical scan results
Dataplex Universal Catalog saves the data profile scan history of the last 300
jobs or for the past year, whichever occurs first.
Console
In the Google Cloud console, go to the Dataplex Universal Catalog
Data profiling & quality page.
Go to Data profiling & quality
Click the name of a data profile scan.
Click the Jobs history tab.
The Jobs history tab provides information about past jobs, such as
the number of records scanned in each job, the job status, and the time the
job was run.
To view detailed information about a job, click any of the jobs in the
Job ID column.
gcloud
To view historical data profile scan jobs, use the
gcloud dataplex datascans jobs list command :
gcloud dataplex datascans jobs list \
--location= LOCATION \
--datascan= DATASCAN
Replace the following variables:
LOCATION : The Google Cloud region in which the data
profile scan was created.
DATASCAN : The name of the data profile scan to view
jobs for.
C#
C#
Before trying this sample, follow the C# setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog C# API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax ;
using Google.Cloud.Dataplex.V1 ;
using System ;
public sealed partial class GeneratedDataScanServiceClientSnippets
{
/// <summary>Snippet for ListDataScanJobs</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void ListDataScanJobsRequestObject ()
{
// Create client
DataScanServiceClient dataScanServiceClient = DataScanServiceClient . Create ();
// Initialize request argument(s)
ListDataScanJobsRequest request = new ListDataScanJobsRequest
{
ParentAsDataScanName = DataScanName . FromProjectLocationDataScan ( "[PROJECT]" , "[LOCATION]" , "[DATASCAN]" ),
Filter = "" ,
};
// Make the request
PagedEnumerable<ListDataScanJobsResponse , DataScanJob > response = dataScanServiceClient . ListDataScanJobs ( request );
// Iterate over all response items, lazily performing RPCs as required
foreach ( DataScanJob item in response )
{
// Do something with each item
Console . WriteLine ( item );
}
// Or iterate over pages (of server-defined size), performing one RPC per page
foreach ( ListDataScanJobsResponse page in response . AsRawResponses ())
{
// Do something with each page of items
Console . WriteLine ( "A page of results:" );
foreach ( DataScanJob item in page )
{
// Do something with each item
Console . WriteLine ( item );
}
}
// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10 ;
Page<DataScanJob> singlePage = response . ReadPage ( pageSize );
// Do something with the page of items
Console . WriteLine ( $"A page of {pageSize} results (unless it's the final page):" );
foreach ( DataScanJob item in singlePage )
{
// Do something with each item
Console . WriteLine ( item );
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage . NextPageToken ;
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Go API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
"google.golang.org/api/iterator"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewDataScanClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . ListDataScanJobsRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#ListDataScanJobsRequest.
}
it := c . ListDataScanJobs ( ctx , req )
for {
resp , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
// If you need to access the underlying RPC response,
// you can do so by casting the `Response` as below.
// Otherwise, remove this line. Only populated after
// first call to Next(). Not safe for concurrent access.
_ = it . Response .( * dataplexpb . ListDataScanJobsResponse )
}
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Java API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. DataScanJob ;
import com.google.cloud.dataplex.v1. DataScanName ;
import com.google.cloud.dataplex.v1. DataScanServiceClient ;
import com.google.cloud.dataplex.v1. ListDataScanJobsRequest ;
public class SyncListDataScanJobs {
public static void main ( String [] args ) throws Exception {
syncListDataScanJobs ();
}
public static void syncListDataScanJobs () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) {
ListDataScanJobsRequest request =
ListDataScanJobsRequest . newBuilder ()
. setParent ( DataScanName . of ( "[PROJECT]" , "[LOCATION]" , "[DATASCAN]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. build ();
for ( DataScanJob element : dataScanServiceClient . listDataScanJobs ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Python API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_data_scan_jobs ():
# Create a client
client = dataplex_v1 . DataScanServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListDataScanJobsRequest (
parent = "parent_value" ,
)
# Make the request
page_result = client . list_data_scan_jobs ( request = request )
# Handle the response
for response in page_result :
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Ruby API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the list_data_scan_jobs call in the DataScanService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::DataScanService::Client#list_data_scan_jobs.
#
def list_data_scan_jobs
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: DataScanService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: ListDataScanJobsRequest . new
# Call the list_data_scan_jobs method.
result = client . list_data_scan_jobs request
# The returned object is of type Gapic::PagedEnumerable. You can iterate
# over elements, and API calls will be issued to fetch pages as needed.
result . each do | item |
# Each element is of type ::Google::Cloud::Dataplex::V1::DataScanJob.
p item
end
end
REST
To view historical data profile scan jobs, use the
dataScans.jobs.list method .
Grant access to data profile scan results
To enable the users in your organization to view the scan results, do the following:
In the Google Cloud console, go to the Dataplex Universal Catalog
Data profiling & quality page.
Go to Data profiling & quality
Click the data profile scan you want to share the results of.
Click the Permissions tab.
Do the following:
To grant access to a principal, click
person_add
Grant access . Grant the Dataplex DataScan DataViewer role to the
associated principal.
To remove access from a principal, select the principal that you
want to remove the Dataplex DataScan DataViewer role from. Click
person_remove
Remove access , and then confirm when prompted.
Manage data profile scans for a specific table
The steps in this document show how to manage data profile scans across your
project by using the Dataplex Universal Catalog Data profiling & quality page
in the Google Cloud console.
You can also create and manage data profile scans when working with a
specific table. In the Google Cloud console, on the Dataplex Universal Catalog
page for the table, use the Data profile tab. Do the following:
In the Google Cloud console, go to the Dataplex Universal Catalog Search
page.
Go to Search
Search for and then select the table.
Click the Data profile tab.
Depending on whether the table has a data profile scan whose results are
published, you can work with the table's data profile scans in the following ways:
Data profile scan results are published : the latest published scan
results are displayed on the page.
To manage the data profile scans for this table, click Data profile
scan , and then select from the following options:
Create new scan : create a new data profile scan. For more
information, see the Create a data profile scan section
of this document. When you create a scan from a table's details page, the
table is preselected.
Run now : run the scan.
Edit scan configuration : edit settings including the display name,
filters, sampling size, and schedule.
Manage scan permissions : control who can access the scan results.
For more information, see the
Grant access to data profile scan results
section of this document.
View historical results : view detailed information about previous
data profile scan jobs. For more information, see the
View data profile scan results and
View historical scan results sections of
this document.
View all scans : view a list of data profile scans that apply to this
table.
Data profile scan results aren't published : click the menu next to
Quick data profile , and then select from the following options:
Customize data profiling : create a new data profile scan. For more
information, see the
Create a data profile scan section
of this document. When you create a scan from a table's details page, the
table is preselected.
View previous profiles : view a list of data profile scans that
apply to this table.
Update a data profile scan
Console
In the Google Cloud console, go to the Dataplex Universal Catalog
Data profiling & quality page.
Go to Data profiling & quality
Click the name of a data profile scan.
Click Edit , and then edit the values.
Click Save .
gcloud
To update a data profile scan, use the
gcloud dataplex datascans update data-profile command :
gcloud dataplex datascans update data-profile DATASCAN \
--location= LOCATION \
--description= DESCRIPTION
Replace the following variables:
DATASCAN : The name of the data profile scan to
update.
LOCATION : The Google Cloud region in which the data
profile scan was created.
DESCRIPTION : The new description for the data
profile scan.
Note: You can update specification fields, such as rowFilter ,
samplingPercent , or includeFields , in the data profile specification file. See the
JSON format .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog C# API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
using Google.LongRunning ;
using Google.Protobuf.WellKnownTypes ;
public sealed partial class GeneratedDataScanServiceClientSnippets
{
/// <summary>Snippet for UpdateDataScan</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void UpdateDataScanRequestObject ()
{
// Create client
DataScanServiceClient dataScanServiceClient = DataScanServiceClient . Create ();
// Initialize request argument(s)
UpdateDataScanRequest request = new UpdateDataScanRequest
{
DataScan = new DataScan (),
UpdateMask = new FieldMask (),
ValidateOnly = false ,
};
// Make the request
Operation<DataScan , OperationMetadata > response = dataScanServiceClient . UpdateDataScan ( request );
// Poll until the returned long-running operation is complete
Operation<DataScan , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
DataScan result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DataScan , OperationMetadata > retrievedResponse = dataScanServiceClient . PollOnceUpdateDataScan ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
DataScan retrievedResult = retrievedResponse . Result ;
}
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Go API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewDataScanClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . UpdateDataScanRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#UpdateDataScanRequest.
}
op , err := c . UpdateDataScan ( ctx , req )
if err != nil {
// TODO: Handle error.
}
resp , err := op . Wait ( ctx )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Java API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. DataScan ;
import com.google.cloud.dataplex.v1. DataScanServiceClient ;
import com.google.cloud.dataplex.v1. UpdateDataScanRequest ;
import com.google.protobuf. FieldMask ;
public class SyncUpdateDataScan {
public static void main ( String [] args ) throws Exception {
syncUpdateDataScan ();
}
public static void syncUpdateDataScan () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) {
UpdateDataScanRequest request =
UpdateDataScanRequest . newBuilder ()
. setDataScan ( DataScan . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setValidateOnly ( true )
. build ();
DataScan response = dataScanServiceClient . updateDataScanAsync ( request ). get ();
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Python API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_data_scan ():
# Create a client
client = dataplex_v1 . DataScanServiceClient ()
# Initialize request argument(s)
data_scan = dataplex_v1 . DataScan ()
data_scan . data . entity = "entity_value"
request = dataplex_v1 . UpdateDataScanRequest (
data_scan = data_scan ,
)
# Make the request
operation = client . update_data_scan ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Dataplex Universal Catalog quickstart using
client libraries .
For more information, see the
Dataplex Universal Catalog Ruby API
reference documentation .
To authenticate to Dataplex Universal Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the update_data_scan call in the DataScanService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::DataScanService::Client#update_data_scan.
#
def update_data_scan
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: DataScanService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: UpdateDataScanRequest . new
# Call the update_data_scan method.
result = client . update_data_scan request
# The returned object is of type Gapic::Operation. You can use it to
# check the status of an operation, cancel it, or wait for results.
# Here is how to wait for a response.
result . wait_until_done! timeout : 60
if result . response?
p result . response
else
puts "No response received."
end
end
REST
To edit a data profile scan, use the
dataScans.patch method .
Note: Update isn't supported for data profile scans that are on a one-time
schedule.
Delete a data profile scan
Console
In the Google Cloud console, go to the Dataplex Universal Catalog
Data profiling & quality page.
Go to Data profiling & quality
Click the scan you want to delete.
Click Delete , and then confirm when prompted.
gcloud
To delete a data profile scan, use the
gcloud dataplex datascans delete command :
gcloud dataplex datascans delete DATASCAN \
--location= LOCATION --async
Replace the following variables:
DATASCAN : The name of the data profile scan to
delete.
LOCATION : The Google Cloud region in which the data
profile scan was created.
REST
To delete a data profile scan, use the
dataScans.delete method .
Note: Delete isn't supported for data profile scans that are on a one-time
schedule.
What's next
Learn how to explore your data by generating data insights .
Learn about data profiling .
Learn about auto data quality .
Learn how to use auto data quality .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
