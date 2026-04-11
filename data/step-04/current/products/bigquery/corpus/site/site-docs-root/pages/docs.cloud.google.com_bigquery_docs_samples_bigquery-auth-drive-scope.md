---
title: "Create credentials with scopes \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-auth-drive-scope
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-auth-drive-scope
  title: "Create credentials with scopes \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create credentials with scopes
Stay organized with collections
Save and categorize content based on your preferences.
Create credentials with Drive and BigQuery API scopes.
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
GoogleCredentials credentials =
ServiceAccountCredentials . getApplicationDefault ()
. createScoped (
ImmutableSet . of (
"https://www.googleapis.com/auth/bigquery" ,
"https://www.googleapis.com/auth/drive" ));
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery =
BigQueryOptions . newBuilder (). setCredentials ( credentials ). build (). getService ();
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
import google.auth
# Create credentials with Drive & BigQuery API scopes.
# Both APIs must be enabled for your project before running this code.
#
# If you are using credentials from gcloud, you must authorize the
# application first with the following command:
#
# gcloud auth application-default login \
# --scopes=https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/cloud-platform
credentials , project = google . auth . default (
scopes = [
"https://www.googleapis.com/auth/drive" ,
"https://www.googleapis.com/auth/cloud-platform" ,
]
)
# Construct a BigQuery client object.
client = bigquery . Client ( credentials = credentials , project = project )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
