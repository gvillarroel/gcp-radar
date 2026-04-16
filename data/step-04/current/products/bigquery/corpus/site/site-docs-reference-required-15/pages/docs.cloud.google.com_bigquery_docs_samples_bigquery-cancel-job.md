---
title: "Cancel a job \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-cancel-job
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-cancel-job
  title: "Cancel a job \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Cancel a job
Stay organized with collections
Save and categorize content based on your preferences.
Attempt to cancel a job.
Explore further
For detailed documentation that includes this code sample, see the following:
Manage jobs
Code sample
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
// cancelJob demonstrates how a job cancellation request can be issued for a specific
// BigQuery job.
func cancelJob ( projectID , jobID string ) error {
// projectID := "my-project-id"
// jobID := "my-job-id"
ctx := context . Background ()
client , err := bigquery . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "bigquery.NewClient: %w" , err )
}
defer client . Close ()
job , err := client . JobFromID ( ctx , jobID )
if err != nil {
return nil
}
return job . Cancel ( ctx )
}
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
import com.google.cloud.bigquery. JobId ;
import com.google.cloud.bigquery. JobInfo ;
import com.google.cloud.bigquery. QueryJobConfiguration ;
import java.util.UUID ;
// Sample to cancel a job
public class CancelJob {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String query = "SELECT country_name from `bigquery-public-data.utility_us.country_code_iso`" ;
cancelJob ( query );
}
public static void cancelJob ( String query ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
// Specify a job configuration to set optional job resource properties.
QueryJobConfiguration queryConfig = QueryJobConfiguration . newBuilder ( query ). build ();
// The location and job name are optional,
// if both are not specified then client will auto-create.
String jobName = "jobId_" + UUID . randomUUID (). toString ();
JobId jobId = JobId . newBuilder (). setLocation ( "us" ). setJob ( jobName ). build ();
// Create a job with job ID
bigquery . create ( JobInfo . of ( jobId , queryConfig ));
// Get a job that was just created
Job job = bigquery . getJob ( jobId );
if ( job . cancel ()) {
System . out . println ( "Job canceled successfully" );
} else {
System . out . println ( "Job was not canceled" );
}
} catch ( BigQueryException e ) {
System . out . println ( "Job was not canceled.\n" + e . toString ());
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
async function cancelJob () {
// Attempts to cancel a job.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const jobId = "existing-job-id";
// Create a job reference
const job = bigquery . job ( jobId );
// Attempt to cancel job
const [ apiResult ] = await job . cancel ();
console . log ( apiResult . job . status );
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
def cancel_job (
client : bigquery . Client ,
location : str = "us" ,
job_id : str = "abcd-efgh-ijkl-mnop" ,
) - > None :
job = client . cancel_job ( job_id , location = location )
print ( f " { job . location } : { job . job_id } cancelled" )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
