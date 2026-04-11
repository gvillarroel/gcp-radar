---
title: "Document AI Warehouse client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/libraries
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/libraries
  title: "Document AI Warehouse client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Reference
Send feedback
Document AI Warehouse client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Document AI Warehouse API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Preview
This library is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA libraries are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - contentwarehouse < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - contentwarehouse : 0.84.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-contentwarehouse" % "0.84.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/contentwarehouse
For more information, see Setting Up a Node.js Development Environment .
Python
pip install --upgrade google-cloud-contentwarehouse
For more information, see Setting Up a Python Development Environment .
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
C++
#include "google/cloud/contentwarehouse/v1/document_client.h"
#include "google/cloud/location.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 3 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-number location-id \n " ;
return 1 ;
}
auto const location = google :: cloud :: Location ( argv [ 1 ], argv [ 2 ]);
namespace contentwarehouse = :: google :: cloud :: contentwarehouse_v1 ;
auto client = contentwarehouse :: DocumentServiceClient (
contentwarehouse :: MakeDocumentServiceConnection ());
for ( auto md : client . SearchDocuments ( location . FullName ())) {
if ( ! md ) throw std :: move ( md ). status ();
std :: cout << md - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
Java
public class QuickStart {
public static void main ( String [] args )
throws IOException , InterruptedException , ExecutionException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String location = "your-region" ; // Format is "us" or "eu".
String userId = "your-user-id" ; // Format is user:<user-id>
quickStart ( projectId , location , userId );
}
public static void quickStart ( String projectId , String location , String userId )
throws IOException , InterruptedException , ExecutionException , TimeoutException {
String projectNumber = getProjectNumber ( projectId );
String endpoint = "contentwarehouse.googleapis.com:443" ;
if ( ! "us" . equals ( location )) {
endpoint = String . format ( "%s-%s" , location , endpoint );
}
DocumentSchemaServiceSettings documentSchemaServiceSettings =
DocumentSchemaServiceSettings . newBuilder (). setEndpoint ( endpoint ). build ();
// Create a Schema Service client
try ( DocumentSchemaServiceClient documentSchemaServiceClient =
DocumentSchemaServiceClient . create ( documentSchemaServiceSettings )) {
/* The full resource name of the location, e.g.:
projects/{project_number}/locations/{location} */
String parent = LocationName . format ( projectNumber , location );
/* Create Document Schema with Text Type Property Definition
* More detail on managing Document Schemas:
* https://cloud.google.com/document-warehouse/docs/manage-document-schemas */
DocumentSchema documentSchema = DocumentSchema . newBuilder ()
. setDisplayName ( "My Test Schema" )
. setDescription ( "My Test Schema's Description" )
. addPropertyDefinitions (
PropertyDefinition . newBuilder ()
. setName ( "test_symbol" )
. setDisplayName ( "Searchable text" )
. setIsSearchable ( true )
. setTextTypeOptions ( TextTypeOptions . newBuilder (). build ())
. build ()). build ();
// Define Document Schema request
CreateDocumentSchemaRequest createDocumentSchemaRequest =
CreateDocumentSchemaRequest . newBuilder ()
. setParent ( parent )
. setDocumentSchema ( documentSchema ). build ();
// Create Document Schema
DocumentSchema documentSchemaResponse =
documentSchemaServiceClient . createDocumentSchema ( createDocumentSchemaRequest );
// Create Document Service Client Settings
DocumentServiceSettings documentServiceSettings =
DocumentServiceSettings . newBuilder (). setEndpoint ( endpoint ). build ();
// Create Document Service Client and Document with relevant properties
try ( DocumentServiceClient documentServiceClient =
DocumentServiceClient . create ( documentServiceSettings )) {
TextArray textArray = TextArray . newBuilder (). addValues ( "Test" ). build ();
Document document = Document . newBuilder ()
. setDisplayName ( "My Test Document" )
. setDocumentSchemaName ( documentSchemaResponse . getName ())
. setPlainText ( "This is a sample of a document's text." )
. addProperties (
Property . newBuilder ()
. setName ( documentSchema . getPropertyDefinitions ( 0 ). getName ())
. setTextValues ( textArray )). build ();
// Define Request Metadata for enforcing access control
RequestMetadata requestMetadata = RequestMetadata . newBuilder ()
. setUserInfo (
UserInfo . newBuilder ()
. setId ( userId ). build ()). build ();
// Define Create Document Request
CreateDocumentRequest createDocumentRequest = CreateDocumentRequest . newBuilder ()
. setParent ( parent )
. setDocument ( document )
. setRequestMetadata ( requestMetadata )
. build ();
// Create Document
CreateDocumentResponse createDocumentResponse =
documentServiceClient . createDocument ( createDocumentRequest );
System . out . println ( createDocumentResponse . getDocument (). getName ());
System . out . println ( documentSchemaResponse . getName ());
}
}
}
private static String getProjectNumber ( String projectId ) throws IOException {
try ( ProjectsClient projectsClient = ProjectsClient . create ()) {
ProjectName projectName = ProjectName . of ( projectId );
Project project = projectsClient . getProject ( projectName );
String projectNumber = project . getName (); // Format returned is projects/xxxxxx
return projectNumber . substring ( projectNumber . lastIndexOf ( "/" ) + 1 );
}
}
}
Node.js
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Required. The parent, which owns this collection of document.
* Format: projects/{project_number}/locations/{location}.
*/
// const parent = 'abc123'
/**
* The maximum number of rule sets to return. The service may return
* fewer than this value.
* If unspecified, at most 50 rule sets will be returned.
* The maximum value is 1000; values above 1000 will be coerced to 1000.
*/
// const pageSize = 1234
/**
* A page token, received from a previous `ListRuleSets` call.
* Provide this to retrieve the subsequent page.
* When paginating, all other parameters provided to `ListRuleSets`
* must match the call that provided the page token.
*/
// const pageToken = 'abc123'
// Imports the Contentwarehouse library
const { RuleSetServiceClient } = require ( ' @google-cloud/contentwarehouse ' ). v1 ;
// Instantiates a client
const contentwarehouseClient = new RuleSetServiceClient ();
async function callListRuleSets () {
// Construct request
const request = {
parent ,
};
// Run request
const iterable = await contentwarehouseClient . listRuleSetsAsync ( request );
for await ( const response of iterable ) {
console . log ( response );
}
}
callListRuleSets ();
Python
from google.cloud import contentwarehouse
# TODO(developer): Uncomment these variables before running the sample.
# project_number = 'YOUR_PROJECT_NUMBER'
# location = 'YOUR_PROJECT_LOCATION' # Format is 'us' or 'eu'
# user_id = "user:xxxx@example.com" # Format is "user:xxxx@example.com"
def quickstart ( project_number : str , location : str , user_id : str ) - > None :
# Create a Schema Service client
document_schema_client = contentwarehouse . DocumentSchemaServiceClient ()
# The full resource name of the location, e.g.:
# projects/{project_number}/locations/{location}
parent = document_schema_client . common_location_path (
project = project_number , location = location
)
# Define Schema Property of Text Type
property_definition = contentwarehouse . PropertyDefinition (
name = "stock_symbol" , # Must be unique within a document schema (case insensitive)
display_name = "Searchable text" ,
is_searchable = True ,
text_type_options = contentwarehouse . TextTypeOptions (),
)
# Define Document Schema Request
create_document_schema_request = contentwarehouse . CreateDocumentSchemaRequest (
parent = parent ,
document_schema = contentwarehouse . DocumentSchema (
display_name = "My Test Schema" ,
property_definitions = [ property_definition ],
),
)
# Create a Document schema
document_schema = document_schema_client . create_document_schema (
request = create_document_schema_request
)
# Create a Document Service client
document_client = contentwarehouse . DocumentServiceClient ()
# The full resource name of the location, e.g.:
# projects/{project_number}/locations/{location}
parent = document_client . common_location_path (
project = project_number , location = location
)
# Define Document Property Value
document_property = contentwarehouse . Property (
name = document_schema . property_definitions [ 0 ] . name ,
text_values = contentwarehouse . TextArray ( values = [ "GOOG" ]),
)
# Define Document
document = contentwarehouse . Document (
display_name = "My Test Document" ,
document_schema_name = document_schema . name ,
plain_text = "This is a sample of a document's text." ,
properties = [ document_property ],
)
# Define Request
create_document_request = contentwarehouse . CreateDocumentRequest (
parent = parent ,
document = document ,
request_metadata = contentwarehouse . RequestMetadata (
user_info = contentwarehouse . UserInfo ( id = user_id )
),
)
# Create a Document for the given schema
response = document_client . create_document ( request = create_document_request )
# Read the output
print ( f "Rule Engine Output: { response . rule_engine_output } " )
print ( f "Document Created: { response . document } " )
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
document-ai-warehouse on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
document-ai-warehouse on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
document-ai-warehouse on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
document-ai-warehouse on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
