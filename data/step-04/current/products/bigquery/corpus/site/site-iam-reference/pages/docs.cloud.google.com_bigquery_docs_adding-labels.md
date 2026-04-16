---
title: "Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/adding-labels
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/adding-labels
  title: "Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Add labels to resources
This document describes how to add labels to BigQuery resources, including
the following resources:
datasets
tables and views
jobs
job sessions
reservations
For more information about labels in BigQuery, see
Introduction to labels .
Before you begin
Grant users the necessary Identity and Access Management (IAM) roles to perform each task in this document. Each task's 'Required IAM roles' section lists the permissions needed to perform that task.
Add labels to datasets
You can add a label to a BigQuery dataset when you create it by
using the bq command-line tool's bq mk command or by calling the
datasets.insert API
method. You cannot add a label to a dataset when you create it using
the Google Cloud console. However, you can add a dataset label after creation.
For more information about creating a dataset, see
Creating a dataset .
When you add a label to a dataset, the label does not propagate to resources within the
dataset. Tables or views do not inherit dataset labels. Also, when you add
a label to a dataset, it is included in your storage billing data, but not in
your job-related billing data.
For more information about label format, see
Requirements for labels .
Required IAM roles
To get the permission that
you need to add a label to an existing dataset,
ask your administrator to grant you the
BigQuery Data Owner ( roles/bigquery.dataOwner )
IAM role.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
bigquery.datasets.update
permission,
which is required to
add a label to an existing dataset.
You might also be able to get
this permission
with custom roles or
other predefined roles .
For more information about IAM roles and permissions in
BigQuery, see Predefined roles and permissions .
Add a label to a dataset
To add a label to a dataset after it is created:
Console
In the Google Cloud console, select the dataset.
On the dataset details page, in the Labels section, click
edit Edit .
In the Edit labels dialog:
Click Add label
Enter the key and value in the appropriate fields. To apply additional labels,
click Add label . Each key can be used only once per dataset,
but you can use the same key in different datasets within the same
project.
To update a label, modify the existing keys or values.
To save your changes, click Update .
SQL
Use the
ALTER SCHEMA SET OPTIONS DDL statement
to set the labels on an existing dataset. This action overwrites any
existing labels on the dataset. The following example sets a label on the
mydataset dataset:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, enter the following statement:
ALTER SCHEMA mydataset
SET OPTIONS (
labels = [ ( 'sensitivity' , 'high' ) ] );
Click play_circle Run .
For more information about how to run queries, see Run an interactive query .
bq
To add a label to an existing dataset, use the bq update command with
the set_label flag. To add multiple labels, repeat the flag.
If the dataset is in a project other than your default project, specify the
project ID in the following format:
PROJECT_ID:DATASET .
bq update --set_label KEY:VALUE PROJECT_ID:DATASET
Replace the following:
KEY:VALUE : The key-value pair for a label you
want to add. The key must be unique. Keys and values can contain only
lowercase letters, numeric characters, underscores, and dashes. All
characters must use UTF-8 encoding, and international characters are
allowed.
PROJECT_ID : your project ID.
DATASET : the dataset you're labeling.
Examples:
To add a label to track departments, use the bq update command and
specify department as the label key. For example, to add a
department:shipping label to mydataset in your default project, use:
bq update --set_label department:shipping mydataset
To add multiple labels to a dataset, repeat the set_label flag and specify
a unique key for each label. For example, to add a department:shipping
label and cost_center:logistics label to mydataset in your default
project, use:
bq update \
--set_label department:shipping \
--set_label cost_center:logistics \
mydataset
API
To add a label to an existing dataset, call the
datasets.patch
method and populate the labels property for the
dataset resource .
Because the datasets.update method replaces the entire dataset resource,
use the datasets.patch method instead.
Go
Before trying this sample, follow the Go setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Go API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import (
"context"
"fmt"
"cloud.google.com/go/bigquery"
)
// addDatasetLabel demonstrates adding label metadata to an existing dataset.
func addDatasetLabel ( projectID , datasetID string ) error {
// projectID := "my-project-id"
// datasetID := "mydataset"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %v" , err )
}
defer client . Close ()
ds := client . Dataset ( datasetID )
meta , err := ds . Metadata ( ctx )
if err != nil {
return err
}
update := bigquery . DatasetMetadataToUpdate {}
update . SetLabel ( "color" , "green" )
if _ , err := ds . Update ( ctx , update , meta . ETag ); err != nil {
return err
}
return nil
}
Java
This sample uses the Google HTTP Client Library for Java
to send a request to the BigQuery API.
Before trying this sample, follow the Java setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Java API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.bigquery. BigQuery ;
import com.google.cloud.bigquery. BigQueryException ;
import com.google.cloud.bigquery. BigQueryOptions ;
import com.google.cloud.bigquery. Dataset ;
import java.util.HashMap ;
import java.util.Map ;
// Sample to updates a label on dataset
public class LabelDataset {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
labelDataset ( datasetName );
}
public static void labelDataset ( String datasetName ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
// This example dataset starts with existing label { color: 'green' }
Dataset dataset = bigquery . getDataset ( datasetName );
// Add label to dataset
Map<String , String > labels = new HashMap <> ();
labels . put ( "color" , "green" );
dataset . toBuilder (). setLabels ( labels ). build (). update ();
System . out . println ( "Label added successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Label was not added. \n" + e . toString ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Node.js API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
// Import the Google Cloud client library
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const bigquery = new BigQuery ();
async function labelDataset () {
// Updates a label on a dataset.
/**
* TODO(developer): Uncomment the following lines before running the sample
*/
// const datasetId = "my_dataset";
// Retrieve current dataset metadata.
const dataset = bigquery . dataset ( datasetId );
const [ metadata ] = await dataset . getMetadata ();
// Add label to dataset metadata
metadata . labels = { color : 'green' };
const [ apiResponse ] = await dataset . setMetadata ( metadata );
console . log ( ` ${ datasetId } labels:` );
console . log ( apiResponse . labels );
}
Python
Before trying this sample, follow the Python setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Python API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from google.cloud import bigquery
# Construct a BigQuery client object.
client = bigquery . Client ()
# TODO(developer): Set dataset_id to the ID of the dataset to fetch.
# dataset_id = "your-project.your_dataset"
dataset = client . get_dataset ( dataset_id ) # Make an API request.
dataset . labels = { "color" : "green" }
dataset = client . update_dataset ( dataset , [ "labels" ]) # Make an API request.
print ( "Labels added to {} " . format ( dataset_id ))
Add labels to tables and views
This document describes how to add a label to an existing table or view. For more
information about adding a label when you create a table or view, see
Creating a table or
Creating a view .
Because views are treated like table resources, you use the tables.patch
method to modify both views and tables.
Table and view labels are not included in billing data.
Required IAM roles
To get the permissions that
you need to add a label to an existing table or view,
ask your administrator to grant you the
BigQuery Data Editor ( roles/bigquery.dataEditor )
IAM role.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to add a label to an existing table or view. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to add a label to an existing table or view:
bigquery.tables.update
bigquery.tables.get
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information about IAM roles and permissions in
BigQuery, see Predefined roles and permissions .
Add a label to a table or view
To add a label to an existing table or view:
Console
In the Google Cloud console, select the table, or view.
Click the Details tab.
In the Labels section, click
edit Edit .
In the Edit labels dialog:
Click Add label
Enter the key and value in the appropriate fields. To apply additional labels,
click Add label . Each key can be used only once per dataset,
but you can use the same key in different datasets within the same project.
Modify existing keys or values to update a label.
Click Update to save your changes.
SQL
Use the
ALTER TABLE SET OPTIONS DDL statement
to set the labels on an existing table, or the
ALTER VIEW SET OPTIONS DDL statement
to set the labels on an existing view. This action overwrites any
existing labels on the table or view. The following example sets two labels
on the mytable table:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, enter the following statement:
ALTER TABLE mydataset . mytable
SET OPTIONS (
labels = [ ( 'department' , 'shipping' ), ( 'cost_center' , 'logistics' ) ] );
Click play_circle Run .
For more information about how to run queries, see Run an interactive query .
bq
To add a label to an existing table or view, use the bq update command
with the set_label flag. To add multiple labels, repeat the flag.
If the table or view is in a project other than your default project, specify
the project ID in the following format:
PROJECT_ID:DATASET .
bq update \
--set_label KEY:VALUE \
PROJECT_ID:DATASET.TABLE_OR_VIEW
Replace the following:
KEY:VALUE : The key-value pair for a label you
want to add. The key must be unique. Keys and values can contain only
lowercase letters, numeric characters, underscores, and dashes. All
characters must use UTF-8 encoding, and international characters are
allowed.
PROJECT_ID : your project ID.
DATASET : the dataset that contains the table or
view you're labeling.
TABLE_OR_VIEW : the name of the table or view
you're labeling.
Examples:
To add a table label that tracks departments, use the bq update command
and specify department as the label key. For example, to add a
department:shipping label to mytable in your default project, use:
bq update --set_label department:shipping mydataset.mytable
To add a view label that tracks departments, use the bq update command
and specify department as the label key. For example, to add a
department:shipping label to myview in your default project, use:
bq update --set_label department:shipping mydataset.myview
To add multiple labels to a table or view, repeat the set_label flag and
specify a unique key for each label. For example, to add a
department:shipping label and cost_center:logistics label to mytable
in your default project, use:
bq update \
--set_label department:shipping \
--set_label cost_center:logistics \
mydataset.mytable
API
To add a label to an existing table or view, call the
tables.patch
method and populate the labels property for the
table resource .
Because views are treated like table resources, you use the tables.patch
method to modify both views and tables.
Because the tables.update method replaces the entire dataset resource, use
the tables.patch method instead.
Go
Before trying this sample, follow the Go setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Go API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import (
"context"
"fmt"
"cloud.google.com/go/bigquery"
)
// addTableLabel demonstrates adding Label metadata to a BigQuery table.
func addTableLabel ( projectID , datasetID , tableID string ) error {
// projectID := "my-project-id"
// datasetID := "mydataset"
// tableID := "mytable"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %v" , err )
}
defer client . Close ()
tbl := client . Dataset ( datasetID ). Table ( tableID )
meta , err := tbl . Metadata ( ctx )
if err != nil {
return err
}
update := bigquery . TableMetadataToUpdate {}
update . SetLabel ( "color" , "green" )
if _ , err := tbl . Update ( ctx , update , meta . ETag ); err != nil {
return err
}
return nil
}
Java
This sample uses the Google HTTP Client Library for Java
to send a request to the BigQuery API.
Before trying this sample, follow the Java setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Java API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.bigquery. BigQuery ;
import com.google.cloud.bigquery. BigQueryException ;
import com.google.cloud.bigquery. BigQueryOptions ;
import com.google.cloud.bigquery. Table ;
import com.google.cloud.bigquery. TableId ;
import java.util.HashMap ;
import java.util.Map ;
// Sample to adds a label to an existing table
public class LabelTable {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
labelTable ( datasetName , tableName );
}
public static void labelTable ( String datasetName , String tableName ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
// This example table starts with existing label { color: 'green' }
Table table = bigquery . getTable ( TableId . of ( datasetName , tableName ));
// Add label to table
Map<String , String > labels = new HashMap <> ();
labels . put ( "color" , "green" );
table . toBuilder (). setLabels ( labels ). build (). update ();
System . out . println ( "Label added successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Label was not added. \n" + e . toString ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Node.js API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
// Import the Google Cloud client library
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const bigquery = new BigQuery ();
async function labelTable () {
// Adds a label to an existing table.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const datasetId = 'my_dataset';
// const tableId = 'my_table';
const dataset = bigquery . dataset ( datasetId );
const [ table ] = await dataset . table ( tableId ). get ();
// Retrieve current table metadata
const [ metadata ] = await table . getMetadata ();
// Add label to table metadata
metadata . labels = { color : 'green' };
const [ apiResponse ] = await table . setMetadata ( metadata );
console . log ( ` ${ tableId } labels:` );
console . log ( apiResponse . labels );
}
Python
Before trying this sample, follow the Python setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Python API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from google.cloud import bigquery
client = bigquery . Client ()
# TODO(dev): Change table_id to the full name of the table you want to create.
table_id = "your-project.your_dataset.your_table_name"
table = client . get_table ( table_id ) # API request
labels = { "color" : "green" }
table . labels = labels
table = client . update_table ( table , [ "labels" ]) # API request
print ( f "Added { table . labels } to { table_id } ." )
Add labels to jobs
Labels can be added to query jobs through the command line by using the
bq command-line tool's --label flag. The bq tool supports adding
labels only to query jobs.
You can also add a label to a job when it's submitted through the API by specifying
the labels property in the job configuration when you call the
jobs.insert method. The API
can be used to add labels to any job type.
You cannot add labels to or update labels on pending, running, or completed
jobs.
When you add a label to a job, the label is included in your billing data.
Required IAM roles
To get the permission that
you need to add a label to a job,
ask your administrator to grant you the
BigQuery User ( roles/bigquery.user )
IAM role.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
bigquery.jobs.create
permission,
which is required to
add a label to a job.
You might also be able to get
this permission
with custom roles or
other predefined roles .
For more information about IAM roles and permissions in
BigQuery, see Predefined roles and permissions .
Add a label to a job
To add a label to a job:
bq
To add a label to a query job, use the bq query command with
the --label flag. To add multiple labels, repeat the flag. The
flag indicates that your query uses GoogleSQL
syntax.
bq query --label KEY:VALUE ' QUERY '
Replace the following:
KEY:VALUE : The key-value pair for a label you
want to add to the query job. The key must be unique. Keys and values can
contain only lowercase letters, numeric characters, underscores, and
dashes. All characters must use UTF-8 encoding, and international
characters are allowed. To add multiple labels to a query job, repeat the
--label flag and specify a unique key
for each label.
QUERY : a valid GoogleSQL query.
Examples:
To add a label to a query job, use:
bq query \
--label department:shipping \
\
'SELECT
column1, column2
FROM
`mydataset.mytable`'
To add multiple labels to a query job, repeat the --label flag and
specify a unique key for each label. For example, to add a
department:shipping label and cost_center:logistics label to a query
job, use:
bq query \
--label department:shipping \
--label cost_center:logistics \
\
'SELECT
column1, column2
FROM
`mydataset.mytable` '
API
To add a label to a job, call the
jobs.insert
method and populate the labels property for the
job configuration .
You can use the API to add labels to any job type.
Python
Before trying this sample, follow the Python setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Python API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from google.cloud import bigquery
client = bigquery . Client ()
sql = """
SELECT corpus
FROM `bigquery-public-data.samples.shakespeare`
GROUP BY corpus;
"""
labels = { "color" : "green" }
config = bigquery . QueryJobConfig ()
config . labels = labels
location = "us"
job = client . query ( sql , location = location , job_config = config )
job_id = job . job_id
print ( f "Added { job . labels } to { job_id } ." )
Associate jobs in a session with a label
If you run queries in a
session , you can assign a label to
all future query jobs in that session using BigQuery
multi-statement queries.
SQL
Set the @@query_label
system variable in the session by running the following query:
SET @@query_label = " KEY:VALUE " ;
KEY:VALUE : The key-value pair for the label to assign to all future
queries in the session. You can also add multiple key-value pairs, separated
by a comma; for example, SET @@query_label = "key1:value1,key2:value2" .
The key must be unique. Keys and values can contain only lowercase letters,
numeric characters, underscores, and dashes. All characters must use UTF-8
encoding, and international characters are allowed.
Example:
SET @@query_label = "cost_center:logistics" ;
API
To add a label to a query job in a session when you
run a query using an API call , call
the jobs.insert
method and populate the query_label property for the
connectionProperties
job configuration .
After you associate a query label with a session and run queries in that session,
you can collect audit logs for those queries.
For more information, see the
Audit log reference for BigQuery .
Add a label to a reservation
When you add a label to a reservation, it is included in your billing
data. You can use labels to filter the Analysis Slots Attribution SKU in
your Cloud Billing data.
The Analysis Slots Attribution SKU only records slot usage. It doesn't record
costs for BigQuery Reservation API SKUs. Reservation labels aren't supported as
filters for BigQuery Reservation API SKUs.
For more information about using labels in your billing data, see Use
Filters to refine data .
Required IAM roles
To get the permission that
you need to add a label to a reservation,
ask your administrator to grant you the
BigQuery Resource Editor ( roles/bigquery.resourceEditor )
IAM role on the administration project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
bigquery.reservations.update
permission,
which is required to
add a label to a reservation.
You might also be able to get
this permission
with custom roles or
other predefined roles .
Add a label to a reservation
To add a label to a reservation:
Console
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the navigation menu, click Capacity management .
Click the Slot reservations tab.
Find the reservation you want to update.
Expand the
more_vert
Actions option.
Click Edit .
To expand the Advanced settings section, click the
expand_more expander arrow .
Click Add Label .
Enter the key-value pair in the appropriate fields. To apply additional labels,
click Add label .
Click Save .
SQL
To add a label to a reservation, use the ALTER RESERVATION SET OPTIONS
DDL
statement .
This action overwrites any existing labels on the reservation. The
following example sets a label on the myreservation reservation:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, enter the following statement:
ALTER RESERVATION myreservation
SET OPTIONS (
labels = [ ( 'sensitivity' , 'high' ) ] );
Click play_circle Run .
For more information about how to run queries, see Run an interactive query .
bq
To add a label to a reservation, use the bq update command with the
set_label flag and the --reservation flag. To add multiple labels, repeat
the set_label flag.
bq update --set_label KEY:VALUE --location LOCATION --reservation RESERVATION_NAME
Replace the following:
KEY:VALUE : The key-value pair for a label you
want to add to the reservation. The key must be unique. Keys and values can
contain only lowercase letters, numeric characters, underscores, and
dashes. All characters must use UTF-8 encoding, and international
characters are allowed. To add multiple labels to a reservation, repeat the
--set_label flag and specify a unique key
for each label.
LOCATION : the location of the reservation.
The location flag can't be last in the command,
otherwise the FATAL Flags positioning error
is returned.
RESERVATION_NAME : the name of the reservation.
Add a label without a value
A label that has a key with an empty value is sometimes called a tag. Do not
confuse this with a tag resource . For more
information, see labels and tags .
You can create a new label without a value, or remove a value from an
existing label key.
Labels without values are useful when you label a resource but you don't need
the key-value format. For example, if a table contains test data used by multiple groups, such as support or
development, you can add a test_data label to the table to identify it.
To add a label without a value:
Console
In the Google Cloud console, select the appropriate resource (a
dataset, table, or view).
For datasets, the dataset details page opens automatically. For
tables and views, click Details to open the details page.
On the details page, in the Labels section, click
edit Edit .
In the Edit labels dialog:
Click Add label .
Enter a new key in the appropriate field and leave the value field blank. To apply additional labels,
click Add label and repeat.
To save your changes, click Update .
SQL
To add a label without a value, use the
ALTER TABLE SET OPTIONS DDL statement :
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, enter the following statement:
ALTER TABLE mydataset . mytable
SET OPTIONS (
labels =[ ( "key1" , "" ), ( "key2" , "" ) ] );
Click play_circle Run .
For more information about how to run queries, see Run an interactive query .
bq
To add a label without a value to an existing resource, use the
bq update command with the
set_label flag. Specify the key, followed by a colon, but leave the value
unspecified.
bq update --set_label KEY : RESOURCE_ID
Replace the following:
KEY : : the label key that you want to use.
RESOURCE_ID : a valid dataset, table, or view name.
If the resource is in a project other than your default project, specify the
project ID in the following format:
PROJECT_ID:DATASET .
Examples:
Use the following command to create a test_data label for
mydataset.mytable . mydataset is in your default project.
bq update --set_label test_data: mydataset
API
Call the datasets.patch
method or the tables.patch
method and add labels with the value set to the empty string ( "" ) in the
dataset resource
or the table resource .
You can remove values from existing labels by replacing their values with
the empty string.
Because views are treated like table resources, you use the tables.patch
method to modify both views and tables. Also, because the tables.update
method replaces the entire dataset resource, use the tables.patch method instead.
What's next
Learn how to view labels on BigQuery
resources.
Learn how to update labels on
BigQuery resources.
Learn how to filter resources using labels .
Learn how to delete labels on
BigQuery resources.
Read about Using labels in the
Resource Manager documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
