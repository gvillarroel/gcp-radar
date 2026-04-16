---
title: "Create a model \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-model
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-model
  title: "Create a model \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create a model
Stay organized with collections
Save and categorize content based on your preferences.
Create a model within an existing dataset.
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
// Sample to create a model
public class CreateModel {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String modelName = "MY_MODEL_NAME" ;
String sql =
"CREATE MODEL `"
+ datasetName
+ "."
+ modelName
+ "`"
+ "OPTIONS ( "
+ "model_type='linear_reg', "
+ "max_iterations=1, "
+ "learn_rate=0.4, "
+ "learn_rate_strategy='constant' "
+ ") AS ( "
+ "SELECT 'a' AS f1, 2.0 AS label "
+ "UNION ALL "
+ "SELECT 'b' AS f1, 3.8 AS label "
+ ")" ;
createModel ( sql );
}
public static void createModel ( String sql ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
QueryJobConfiguration config = QueryJobConfiguration . newBuilder ( sql ). build ();
// create a model using query and it will wait to complete job.
Job job = bigquery . create ( JobInfo . of ( config ));
job = job . waitFor ();
if ( job . isDone ()) {
System . out . println ( "Model created successfully" );
} else {
System . out . println ( "Model was not created" );
}
} catch ( BigQueryException | InterruptedException e ) {
System . out . println ( "Model was not created. \n" + e . toString ());
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
async function createModel () {
// Creates a model named "my_model" in "my_dataset".
/**
* TODO(developer): Uncomment the following lines before running the sample
*/
// const datasetId = "my_dataset";
// const modelId = "my_model";
const query = `CREATE OR REPLACE MODEL \` ${ datasetId } . ${ modelId } \`
OPTIONS(model_type='logistic_reg') AS
SELECT
IF(totals.transactions IS NULL, 0, 1) AS label,
IFNULL(device.operatingSystem, "") AS os,
device.isMobile AS is_mobile,
IFNULL(geoNetwork.country, "") AS country,
IFNULL(totals.pageviews, 0) AS pageviews
FROM
\`bigquery-public-data.google_analytics_sample.ga_sessions_*\`
WHERE
_TABLE_SUFFIX BETWEEN '20160801' AND '20170631'
LIMIT 100000;` ;
const queryOptions = {
query : query ,
};
// Run query to create a model
const [ job ] = await bigquery . createQueryJob ( queryOptions );
// Wait for the query to finish
await job . getQueryResults ();
console . log ( `Model ${ modelId } created.` );
}
createModel ();
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
