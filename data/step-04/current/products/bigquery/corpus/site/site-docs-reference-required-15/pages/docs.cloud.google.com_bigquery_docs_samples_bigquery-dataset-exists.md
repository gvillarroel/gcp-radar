---
title: "Check dataset existence \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists
  title: "Check dataset existence \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Check dataset existence
Stay organized with collections
Save and categorize content based on your preferences.
A function to check whether a dataset exists.
Explore further
For detailed documentation that includes this code sample, see the following:
Listing datasets
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
import com.google.cloud.bigquery. Dataset ;
import com.google.cloud.bigquery. DatasetId ;
// Sample to check dataset exist
public class DatasetExists {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String datasetName = "MY_DATASET_NAME" ;
datasetExists ( datasetName );
}
public static void datasetExists ( String datasetName ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
Dataset dataset = bigquery . getDataset ( DatasetId . of ( datasetName ));
if ( dataset != null ) {
System . out . println ( "Dataset already exists." );
} else {
System . out . println ( "Dataset not found." );
}
} catch ( BigQueryException e ) {
System . out . println ( "Something went wrong. \n" + e . toString ());
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
from google.cloud.exceptions import NotFound
client = bigquery . Client ()
# TODO(developer): Set dataset_id to the ID of the dataset to determine existence.
# dataset_id = "your-project.your_dataset"
try :
client . get_dataset ( dataset_id ) # Make an API request.
print ( "Dataset {} already exists" . format ( dataset_id ))
except NotFound :
print ( "Dataset {} is not found" . format ( dataset_id ))
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
