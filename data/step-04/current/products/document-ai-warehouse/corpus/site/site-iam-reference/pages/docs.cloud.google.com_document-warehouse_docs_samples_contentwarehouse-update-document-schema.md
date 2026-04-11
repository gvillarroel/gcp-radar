---
title: "Update document schema \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-fetch-acl
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema
  title: "Update document schema \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Samples
Update document schema
Stay organized with collections
Save and categorize content based on your preferences.
Update a document schema
Explore further
For detailed documentation that includes this code sample, see the following:
Manage document schemas
Code sample
Java
For more information, see the
Document AI Warehouse Java API
reference documentation .
To authenticate to Document AI Warehouse, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.contentwarehouse.v1. DocumentSchema ;
import com.google.cloud.contentwarehouse.v1. DocumentSchemaName ;
import com.google.cloud.contentwarehouse.v1. DocumentSchemaServiceClient ;
import com.google.cloud.contentwarehouse.v1. DocumentSchemaServiceSettings ;
import com.google.cloud.contentwarehouse.v1. PropertyDefinition ;
import com.google.cloud.contentwarehouse.v1. TextTypeOptions ;
import com.google.cloud.contentwarehouse.v1. UpdateDocumentSchemaRequest ;
import com.google.cloud.resourcemanager.v3. Project ;
import com.google.cloud.resourcemanager.v3. ProjectName ;
import com.google.cloud.resourcemanager.v3. ProjectsClient ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeoutException ;
public class UpdateDocumentSchema {
public static void updateDocumentSchema () throws IOException ,
InterruptedException , ExecutionException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String location = "your-region" ; // Format is "us" or "eu".
String documentSchemaId = "your-document-schema-id" ;
/* The below method call retrieves details about the schema you are about to update.
* It is important to note that some properties cannot be edited or removed.
* For more information on managing document schemas, please see the below documentation.
* https://cloud.google.com/document-warehouse/docs/manage-document-schemas */
GetDocumentSchema . getDocumentSchema ( projectId , location , documentSchemaId );
updateDocumentSchema ( projectId , location , documentSchemaId );
}
// Updates an existing Document Schema
public static void updateDocumentSchema ( String projectId , String location ,
String documentSchemaId ) throws IOException , InterruptedException ,
ExecutionException , TimeoutException {
String projectNumber = getProjectNumber ( projectId );
String endpoint = "contentwarehouse.googleapis.com:443" ;
if ( ! "us" . equals ( location )) {
endpoint = String . format ( "%s-%s" , location , endpoint );
}
DocumentSchemaServiceSettings documentSchemaServiceSettings =
DocumentSchemaServiceSettings . newBuilder (). setEndpoint ( endpoint ). build ();
/* Create the Schema Service Client
* Initialize client that will be used to send requests.
* This client only needs to be created once, and can be reused for multiple requests. */
try ( DocumentSchemaServiceClient documentSchemaServiceClient =
DocumentSchemaServiceClient . create ( documentSchemaServiceSettings )) {
/* The full resource name of the location, e.g.:
projects/{project_number}/location/{location}/documentSchemas/{document_schema_id} */
DocumentSchemaName documentSchemaName =
DocumentSchemaName . of ( projectNumber , location , documentSchemaId );
// Define the new Schema Property with updated values
PropertyDefinition propertyDefinition = PropertyDefinition . newBuilder ()
. setName ( "plaintiff" )
. setDisplayName ( "Plaintiff" )
. setIsSearchable ( true )
. setIsRepeatable ( true )
. setIsRequired ( false )
. setTextTypeOptions ( TextTypeOptions . newBuilder ()
. build ())
. build ();
DocumentSchema updatedDocumentSchema = DocumentSchema . newBuilder ()
. setDisplayName ( "Test Doc Schema" )
. addPropertyDefinitions ( 0 , propertyDefinition ). build ();
// Create the Request to Update the Document Schema
UpdateDocumentSchemaRequest updateDocumentSchemaRequest =
UpdateDocumentSchemaRequest . newBuilder ()
. setName ( documentSchemaName . toString ())
. setDocumentSchema ( updatedDocumentSchema )
. build ();
// Update Document Schema
updatedDocumentSchema =
documentSchemaServiceClient . updateDocumentSchema ( updateDocumentSchemaRequest );
// Read the output of Updated Document Schema Name
System . out . println ( updatedDocumentSchema . getName ());
}
}
private static String getProjectNumber ( String projectId ) throws IOException {
/* Initialize client that will be used to send requests.
* This client only needs to be created once, and can be reused for multiple requests. */
try ( ProjectsClient projectsClient = ProjectsClient . create ()) {
ProjectName projectName = ProjectName . of ( projectId );
Project project = projectsClient . getProject ( projectName );
String projectNumber = project . getName (); // Format returned is projects/xxxxxx
return projectNumber . substring ( projectNumber . lastIndexOf ( "/" ) + 1 );
}
}
}
Python
For more information, see the
Document AI Warehouse Python API
reference documentation .
To authenticate to Document AI Warehouse, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import contentwarehouse
# TODO(developer): Uncomment these variables before running the sample.
# project_number = "YOUR_PROJECT_NUMBER"
# location = "us" # Format is 'us' or 'eu'
# document_schema_id = "YOUR_SCHEMA_ID"
def update_document_schema (
project_number : str , location : str , document_schema_id : str
) - > None :
# Create a Schema Service client
document_schema_client = contentwarehouse . DocumentSchemaServiceClient ()
# The full resource name of the location, e.g.:
# projects/{project_number}/locations/{location}/documentSchemas/{document_schema_id}
document_schema_path = document_schema_client . document_schema_path (
project = project_number ,
location = location ,
document_schema = document_schema_id ,
)
# Define Schema Property of Text Type with updated values
updated_property_definition = contentwarehouse . PropertyDefinition (
name = "stock_symbol" , # Must be unique within a document schema (case insensitive)
display_name = "Searchable text" ,
is_searchable = True ,
is_repeatable = False ,
is_required = True ,
text_type_options = contentwarehouse . TextTypeOptions (),
)
# Define Update Document Schema Request
update_document_schema_request = contentwarehouse . UpdateDocumentSchemaRequest (
name = document_schema_path ,
document_schema = contentwarehouse . DocumentSchema (
display_name = "My Test Schema" ,
property_definitions = [ updated_property_definition ],
),
)
# Update Document schema
updated_document_schema = document_schema_client . update_document_schema (
request = update_document_schema_request
)
# Read the output
print ( f "Updated Document Schema: { updated_document_schema } " )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
