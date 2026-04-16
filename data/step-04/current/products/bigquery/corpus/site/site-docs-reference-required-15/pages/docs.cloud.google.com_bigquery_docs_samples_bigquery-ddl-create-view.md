---
title: "Create a view with DDL \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-ddl-create-view
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-ddl-create-view
  title: "Create a view with DDL \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Samples
Create a view with DDL
Stay organized with collections
Save and categorize content based on your preferences.
Create a view using a DDL query.
Explore further
For detailed documentation that includes this code sample, see the following:
Data definition language (DDL) statements in GoogleSQL
Code sample
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
import com.google.cloud.bigquery. BigQuery ;
import com.google.cloud.bigquery. BigQueryException ;
import com.google.cloud.bigquery. BigQueryOptions ;
import com.google.cloud.bigquery. Job ;
import com.google.cloud.bigquery. JobInfo ;
import com.google.cloud.bigquery. QueryJobConfiguration ;
// Sample to create a view using DDL
public class DdlCreateView {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String projectId = "MY_PROJECT_ID" ;
String datasetId = "MY_DATASET_ID" ;
String tableId = "MY_VIEW_ID" ;
String ddl =
"CREATE VIEW "
+ "`"
+ projectId
+ "."
+ datasetId
+ "."
+ tableId
+ "`"
+ " OPTIONS("
+ " expiration_timestamp=TIMESTAMP_ADD("
+ " CURRENT_TIMESTAMP(), INTERVAL 48 HOUR),"
+ " friendly_name=\"new_view\","
+ " description=\"a view that expires in 2 days\","
+ " labels=[(\"org_unit\", \"development\")]"
+ " )"
+ " AS SELECT name, state, year, number"
+ " FROM `bigquery-public-data.usa_names.usa_1910_current`"
+ " WHERE state LIKE 'W%'`" ;
ddlCreateView ( ddl );
}
public static void ddlCreateView ( String ddl ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
QueryJobConfiguration config = QueryJobConfiguration . newBuilder ( ddl ). build ();
// create a view using query and it will wait to complete job.
Job job = bigquery . create ( JobInfo . of ( config ));
job = job . waitFor ();
if ( job . isDone ()) {
System . out . println ( "View created successfully" );
} else {
System . out . println ( "View was not created" );
}
} catch ( BigQueryException | InterruptedException e ) {
System . out . println ( "View was not created. \n" + e . toString ());
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
// Import the Google Cloud client library and create a client
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const bigquery = new BigQuery ();
async function ddlCreateView () {
// Creates a view via a DDL query
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const projectId = "my_project"
// const datasetId = "my_dataset"
// const tableId = "my_new_view"
const query = `
CREATE VIEW \` ${ projectId } . ${ datasetId } . ${ tableId } \`
OPTIONS(
expiration_timestamp=TIMESTAMP_ADD(
CURRENT_TIMESTAMP(), INTERVAL 48 HOUR),
friendly_name="new_view",
description="a view that expires in 2 days",
labels=[("org_unit", "development")]
)
AS SELECT name, state, year, number
FROM \`bigquery-public-data.usa_names.usa_1910_current\`
WHERE state LIKE 'W%'` ;
// For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
const options = {
query : query ,
};
// Run the query as a job
const [ job ] = await bigquery . createQueryJob ( options );
job . on ( 'complete' , metadata = > {
console . log ( `Created new view ${ tableId } via job ${ metadata . id } ` );
});
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
# from google.cloud import bigquery
# project = 'my-project'
# dataset_id = 'my_dataset'
# table_id = 'new_view'
# client = bigquery.Client(project=project)
sql = """
CREATE VIEW ` {} . {} . {} `
OPTIONS(
expiration_timestamp=TIMESTAMP_ADD(
CURRENT_TIMESTAMP(), INTERVAL 48 HOUR),
friendly_name="new_view",
description="a view that expires in 2 days",
labels=[("org_unit", "development")]
)
AS SELECT name, state, year, number
FROM `bigquery-public-data.usa_names.usa_1910_current`
WHERE state LIKE 'W%'
""" . format (
project , dataset_id , table_id
)
job = client . query ( sql ) # API request.
job . result () # Waits for the query to finish.
print (
'Created new view " {} . {} . {} ".' . format (
job . destination . project ,
job . destination . dataset_id ,
job . destination . table_id ,
)
)
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
