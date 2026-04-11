---
title: "Create a client with a service account key file \_|\_ BigQuery \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials
  title: "Create a client with a service account key file \_|\_ BigQuery \_|\_ Google\
    \ Cloud Documentation"
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
Create a client with a service account key file
Stay organized with collections
Save and categorize content based on your preferences.
Create a BigQuery client using a service account key file.
Code sample
C#
Before trying this sample, follow the C# setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery C# API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
var credentials = GoogleCredential . FromFile ( jsonPath );
var client = BigQueryClient . Create ( projectId , credentials );
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
public static void explicit () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "MY_PROJECT_ID" ;
File credentialsPath = new File ( "path/to/your/service_account.json" );
// Load credentials from JSON key file. If you can't set the GOOGLE_APPLICATION_CREDENTIALS
// environment variable, you can explicitly load the credentials file to construct the
// credentials.
GoogleCredentials credentials ;
try ( FileInputStream serviceAccountStream = new FileInputStream ( credentialsPath )) {
credentials = ServiceAccountCredentials . fromStream ( serviceAccountStream );
}
// Instantiate a client.
BigQuery bigquery =
BigQueryOptions . newBuilder ()
. setCredentials ( credentials )
. setProjectId ( projectId )
. build ()
. getService ();
// Use the client.
System . out . println ( "Datasets:" );
for ( Dataset dataset : bigquery . listDatasets (). iterateAll ()) {
System . out . printf ( "%s%n" , dataset . getDatasetId (). getDataset ());
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
// Create a BigQuery client explicitly using service account credentials.
// by specifying the private key file.
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const options = {
keyFilename : 'path/to/service_account.json' ,
projectId : 'my_project' ,
};
const bigquery = new BigQuery ( options );
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
from google.oauth2 import service_account
# TODO(developer): Set key_path to the path to the service account key
# file.
# key_path = "path/to/service_account.json"
credentials = service_account . Credentials . from_service_account_file (
key_path ,
scopes = [ "https://www.googleapis.com/auth/cloud-platform" ],
)
# Alternatively, use service_account.Credentials.from_service_account_info()
# to set credentials directly via a json object rather than set a filepath
# TODO(developer): Set key_json to the content of the service account key file.
# credentials = service_account.Credentials.from_service_account_info(key_json)
client = bigquery . Client (
credentials = credentials ,
project = credentials . project_id ,
)
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
