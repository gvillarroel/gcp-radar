---
title: "Data Catalog client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/reference/libraries
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/reference/libraries
  title: "Data Catalog client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog is deprecated and will be discontinued on January 30, 2026. For steps to transition your Data Catalog users, workloads, and content to Dataplex Universal Catalog, see Transition from Data Catalog to Dataplex Universal Catalog .
Home
Documentation
Data analytics
Data Catalog
Reference
Send feedback
Data Catalog client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Data Catalog API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C#
Install-Package Google.Cloud.DataCatalog.V1
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/datacatalog/apiv1
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven, add this to your pom.xml file:
Maven :
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - datacatalog < / artifactId >
< version> DATA_CATALOG_LIBRARY_VERSION < / version >
< / dependency >
If you are using Gradle, add this to your dependencies:
compile group : ' com . google . cloud ' , name : ' google - cloud - datacatalog ' , version : ' DATA_CATALOG_LIBRARY_VERSION '
See Data Catalog Java Cloud Client Library reference
for the latest Data Catalog version.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/datacatalog
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-data-catalog
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-datacatalog
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-data_catalog
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library.
Java
import com.google.cloud.datacatalog.v1. DataCatalogClient ;
import com.google.cloud.datacatalog.v1. Entry ;
import com.google.cloud.datacatalog.v1. LookupEntryRequest ;
public class LookupEntryBigQueryDataset {
/**
* Lookup the Data Catalog entry referring to a BigQuery Dataset
*
* @param projectId The project ID to which the Dataset belongs, e.g. 'my-project'
* @param datasetId The dataset ID to which the Catalog Entry refers, e.g. 'my_dataset'
*/
public static void lookupEntry ( String projectId , String datasetId ) {
// String projectId = "my-project"
// String datasetId = "my_dataset"
// Get an entry by the resource name from the source Google Cloud Platform service.
String linkedResource =
String . format ( "//bigquery.googleapis.com/projects/%s/datasets/%s" , projectId , datasetId );
LookupEntryRequest request =
LookupEntryRequest . newBuilder (). setLinkedResource ( linkedResource ). build ();
// Alternatively, lookup by the SQL name of the entry would have the same result:
// String sqlResource = String.format("bigquery.dataset.`%s`.`%s`", projectId, datasetId);
// LookupEntryRequest request =
// LookupEntryRequest.newBuilder().setSqlResource(sqlResource).build();
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( DataCatalogClient dataCatalogClient = DataCatalogClient . create ()) {
Entry entry = dataCatalogClient . lookupEntry ( request );
System . out . printf ( "Entry name: %s\n" , entry . getName ());
} catch ( Exception e ) {
System . out . print ( "Error during lookupEntryBigQueryDataset:\n" + e . toString ());
}
}
}
Node.js
// -------------------------------
// Import required modules.
// -------------------------------
const { DataCatalogClient } = require ( ' @google-cloud/datacatalog ' ). v1 ;
const datacatalog = new DataCatalogClient ();
const lookup = async () = > {
// TODO(developer): Uncomment the following lines before running the sample.
// const projectId = 'my-project'
// const datasetId = 'my_dataset'
const resourceName = `//bigquery.googleapis.com/projects/ ${ projectId } /datasets/ ${ datasetId } ` ;
const request = { linkedResource : resourceName };
const [ result ] = await datacatalog . lookupEntry ( request );
return result ;
};
const response = await lookup ();
console . log ( response );
Python
from google.cloud import datacatalog_v1
datacatalog = datacatalog_v1 . DataCatalogClient ()
bigquery_project_id = "my_bigquery_project"
dataset_id = "my_dataset"
table_id = "my_table"
pubsub_project_id = "my_pubsub_project"
topic_id = "my_topic"
# To facilitate testing, we replace values with alternatives
# provided by the testing harness.
bigquery_project_id = override_values . get (
"bigquery_project_id" , bigquery_project_id
)
dataset_id = override_values . get ( "dataset_id" , dataset_id )
table_id = override_values . get ( "table_id" , table_id )
pubsub_project_id = override_values . get ( "pubsub_project_id" , pubsub_project_id )
topic_id = override_values . get ( "topic_id" , topic_id )
# BigQuery Dataset via linked_resource
resource_name = f "//bigquery.googleapis.com/projects/ { bigquery_project_id } /datasets/ { dataset_id } "
entry = datacatalog . lookup_entry ( request = { "linked_resource" : resource_name })
print (
f "Retrieved entry { entry . name } for BigQuery Dataset resource { entry . linked_resource } "
)
# BigQuery Dataset via sql_resource
sql_resource = f "bigquery.dataset.` { bigquery_project_id } `.` { dataset_id } `"
entry = datacatalog . lookup_entry ( request = { "sql_resource" : sql_resource })
print (
f "Retrieved entry { entry . name } for BigQuery Dataset resource { entry . linked_resource } "
)
# BigQuery Table via linked_resource
resource_name = (
f "//bigquery.googleapis.com/projects/ { bigquery_project_id } /datasets/ { dataset_id } "
f "/tables/ { table_id } "
)
entry = datacatalog . lookup_entry ( request = { "linked_resource" : resource_name })
print ( f "Retrieved entry { entry . name } for BigQuery Table { entry . linked_resource } " )
# BigQuery Table via sql_resource
sql_resource = f "bigquery.table.` { bigquery_project_id } `.` { dataset_id } `.` { table_id } `"
entry = datacatalog . lookup_entry ( request = { "sql_resource" : sql_resource })
print (
f "Retrieved entry { entry . name } for BigQuery Table resource { entry . linked_resource } "
)
# Pub/Sub Topic via linked_resource
resource_name = (
f "//pubsub.googleapis.com/projects/ { pubsub_project_id } /topics/ { topic_id } "
)
entry = datacatalog . lookup_entry ( request = { "linked_resource" : resource_name })
print (
f "Retrieved entry { entry . name } for Pub/Sub Topic resource { entry . linked_resource } "
)
# Pub/Sub Topic via sql_resource
sql_resource = f "pubsub.topic.` { pubsub_project_id } `.` { topic_id } `"
entry = datacatalog . lookup_entry ( request = { "sql_resource" : sql_resource })
print (
f "Retrieved entry { entry . name } for Pub/Sub Topic resource { entry . linked_resource } "
)
Additional resources
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-data-catalog on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-data-catalog on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-data-catalog on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-data-catalog on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-data-catalog on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-data-catalog on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-data-catalog on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
