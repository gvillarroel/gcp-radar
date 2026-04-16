---
title: "Create IAM policy \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy
  title: "Create IAM policy \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create IAM policy
Stay organized with collections
Save and categorize content based on your preferences.
Create an IAM policy for a table.
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
import com.google.cloud. Identity ;
import com.google.cloud. Policy ;
import com.google.cloud. Role ;
import com.google.cloud.bigquery. BigQuery ;
import com.google.cloud.bigquery. BigQueryException ;
import com.google.cloud.bigquery. BigQueryOptions ;
import com.google.cloud.bigquery. TableId ;
// Sample to create iam policy for table
public class CreateIamPolicy {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
String tableName = "MY_TABLE_NAME" ;
createIamPolicy ( datasetName , tableName );
}
public static void createIamPolicy ( String datasetName , String tableName ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
TableId tableId = TableId . of ( datasetName , tableName );
Policy policy = bigquery . getIamPolicy ( tableId );
policy
. toBuilder ()
. addIdentity (
Role . of ( "roles/bigquery.dataViewer" ),
Identity . user ( "example-analyst-group@google.com" ))
. build ();
bigquery . setIamPolicy ( tableId , policy );
System . out . println ( "Iam policy created successfully" );
} catch ( BigQueryException e ) {
System . out . println ( "Iam policy was not created. \n" + e . toString ());
}
}
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
bqclient = bigquery . Client ()
policy = bqclient . get_iam_policy (
your_table_id , # e.g. "project.dataset.table"
)
analyst_email = "example-analyst-group@google.com"
binding = {
"role" : "roles/bigquery.dataViewer" ,
"members" : { f "group: { analyst_email } " },
}
policy . bindings . append ( binding )
updated_policy = bqclient . set_iam_policy (
your_table_id , # e.g. "project.dataset.table"
policy ,
)
for binding in updated_policy . bindings :
print ( repr ( binding ))
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
