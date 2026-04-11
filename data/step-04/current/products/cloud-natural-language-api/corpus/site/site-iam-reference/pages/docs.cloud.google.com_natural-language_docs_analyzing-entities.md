---
title: "Analyzing Entities \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/analyzing-entities
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/analyzing-entities
  title: "Analyzing Entities \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Guides
Send feedback
Analyzing Entities
Stay organized with collections
Save and categorize content based on your preferences.
Entity Analysis inspects the given text for known entities (proper nouns
such as public figures, landmarks, etc.), and returns information about those
entities. Entity analysis is performed with the analyzeEntities method. For
information about the types of entities Natural Language identifies, see
the Entity documentation. For
information on which languages are supported by the Natural Language API,
see Language Support .
This section demonstrates a few ways to detect entities in a document.
For each document, you must submit a separate request.
Analyzing Entities in a String
Here is an example of performing entity analysis on a text string sent directly
to the Natural Language API:
Protocol
To analyze entities in a document, make a POST request to the
documents:analyzeEntities
REST method and provide
the appropriate request body as shown in the following example.
The example uses the gcloud auth application-default print-access-token
command to obtain an access token for a service account set up for the
project using the Google Cloud Platform gcloud CLI .
For instructions on installing the gcloud CLI,
setting up a project with a service account
see the Quickstart .
curl -X POST \
-H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \
-H "Content-Type: application/json; charset=utf-8" \
--data "{
'encodingType': 'UTF8',
'document': {
'type': 'PLAIN_TEXT',
'content': 'President Trump will speak from the White House, located
at 1600 Pennsylvania Ave NW, Washington, DC, on October 7.'
}
}" "https://language.googleapis.com/v2/documents:analyzeEntities"
If you don't specify document.language_code , then the language will be automatically
detected. For information on which languages are supported by the Natural Language API,
see Language Support . See the Document
reference documentation for more information on configuring the request
body.
If the request is successful, the server returns a 200 OK HTTP status code and
the response in JSON format:
{
"entities" : [
{
"name" : "October 7" ,
"type" : "DATE" ,
"metadata" : {
"month" : "10" ,
"day" : "7"
},
"mentions" : [
{
"text" : {
"content" : "October 7" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "1600" ,
"type" : "NUMBER" ,
"metadata" : {
"value" : "1600"
},
"mentions" : [
{
"text" : {
"content" : "1600" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "7" ,
"type" : "NUMBER" ,
"metadata" : {
"value" : "7"
},
"mentions" : [
{
"text" : {
"content" : "7" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "1600 Pennsylvania Ave NW, Washington, DC" ,
"type" : "ADDRESS" ,
"metadata" : {
"locality" : "Washington" ,
"narrow_region" : "District of Columbia" ,
"street_name" : "Pennsylvania Avenue Northwest" ,
"street_number" : "1600" ,
"broad_region" : "District of Columbia" ,
"country" : "US"
},
"mentions" : [
{
"text" : {
"content" : "1600 Pennsylvania Ave NW, Washington, DC" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "1600 Pennsylvania Ave NW" ,
"type" : "LOCATION" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "1600 Pennsylvania Ave NW" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.901
}
]
},
{
"name" : "President" ,
"type" : "PERSON" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "President" ,
"beginOffset" : - 1
},
"type" : "COMMON" ,
"probability" : 0.941
}
]
},
{
"name" : "Trump" ,
"type" : "PERSON" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "Trump" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.948
}
]
},
{
"name" : "Washington, DC" ,
"type" : "LOCATION" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "Washington, DC" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.92
}
]
},
{
"name" : "White House" ,
"type" : "LOCATION" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "White House" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.785
}
]
}
],
"languageCode" : "en" ,
"languageSupported" : true
}
The entities array contains Entity
objects representing the detected entities, which include information such as
the entity name and type.
gcloud
Refer to the analyze-entities
command for complete details.
To perform entity analysis, use the gcloud CLI and
use the --content flag to identify the content to analyze:
gcloud ml language analyze-entities --content="President Trump will speak from the White House, located
at 1600 Pennsylvania Ave NW, Washington, DC, on October 7."
If the request is successful, the server returns a response in JSON format:
{
"entities" : [
{
"name" : "Trump" ,
"type" : "PERSON" ,
"metadata" : {
"mid" : "/m/0cqt90" ,
"wikipedia_url" : "https://en.wikipedia.org/wiki/Donald_Trump"
},
"salience" : 0.7936003 ,
"mentions" : [
{
"text" : {
"content" : "Trump" ,
"beginOffset" : 10
},
"type" : "PROPER"
},
{
"text" : {
"content" : "President" ,
"beginOffset" : 0
},
"type" : "COMMON"
}
]
},
{
"name" : "White House" ,
"type" : "LOCATION" ,
"metadata" : {
"mid" : "/m/081sq" ,
"wikipedia_url" : "https://en.wikipedia.org/wiki/White_House"
},
"salience" : 0.09172433 ,
"mentions" : [
{
"text" : {
"content" : "White House" ,
"beginOffset" : 36
},
"type" : "PROPER"
}
]
},
{
"name" : "Pennsylvania Ave NW" ,
"type" : "LOCATION" ,
"metadata" : {
"mid" : "/g/1tgb87cq"
},
"salience" : 0.085507184 ,
"mentions" : [
{
"text" : {
"content" : "Pennsylvania Ave NW" ,
"beginOffset" : 65
},
"type" : "PROPER"
}
]
},
{
"name" : "Washington, DC" ,
"type" : "LOCATION" ,
"metadata" : {
"mid" : "/m/0rh6k" ,
"wikipedia_url" : "https://en.wikipedia.org/wiki/Washington,_D.C."
},
"salience" : 0.029168168 ,
"mentions" : [
{
"text" : {
"content" : "Washington, DC" ,
"beginOffset" : 86
},
"type" : "PROPER"
}
]
}
{
"name" : "1600 Pennsylvania Ave NW, Washington, DC" ,
"type" : "ADDRESS" ,
"metadata" : {
"country" : "US" ,
"sublocality" : "Fort Lesley J. McNair" ,
"locality" : "Washington" ,
"street_name" : "Pennsylvania Avenue Northwest" ,
"broad_region" : "District of Columbia" ,
"narrow_region" : "District of Columbia" ,
"street_number" : "1600"
},
"salience" : 0 ,
"mentions" : [
{
"text" : {
"content" : "1600 Pennsylvania Ave NW, Washington, DC" ,
"beginOffset" : 60
},
"type" : "TYPE_UNKNOWN"
}
]
}
}
{
"name" : "1600" ,
"type" : "NUMBER" ,
"metadata" : {
"value" : "1600"
},
"salience" : 0 ,
"mentions" : [
{
"text" : {
"content" : "1600" ,
"beginOffset" : 60
},
"type" : "TYPE_UNKNOWN"
}
]
},
{
"name" : "October 7" ,
"type" : "DATE" ,
"metadata" : {
"day" : "7" ,
"month" : "10"
},
"salience" : 0 ,
"mentions" : [
{
"text" : {
"content" : "October 7" ,
"beginOffset" : 105
},
"type" : "TYPE_UNKNOWN"
}
]
}
{
"name" : "7" ,
"type" : "NUMBER" ,
"metadata" : {
"value" : "7"
},
"salience" : 0 ,
"mentions" : [
{
"text" : {
"content" : "7" ,
"beginOffset" : 113
},
"type" : "TYPE_UNKNOWN"
}
]
}
],
"language" : "en"
}
The entities array contains Entity
objects representing the detected entities, which include information such as
the entity name and type.
Go
To learn how to install and use the client library for Natural Language, see
Natural Language client libraries .
For more information, see the
Natural Language Go API
reference documentation .
To authenticate to Natural Language, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
language "cloud.google.com/go/language/apiv2"
"cloud.google.com/go/language/apiv2/languagepb"
)
// analyzeEntities sends a string of text to the Cloud Natural Language API to
// detect the entities of the text.
func analyzeEntities ( w io . Writer , text string ) error {
ctx := context . Background ()
// Initialize client.
client , err := language . NewClient ( ctx )
if err != nil {
return err
}
defer client . Close ()
resp , err := client . AnalyzeEntities ( ctx , & languagepb . AnalyzeEntitiesRequest {
Document : & languagepb . Document {
Source : & languagepb . Document_Content {
Content : text ,
},
Type : languagepb . Document_PLAIN_TEXT ,
},
EncodingType : languagepb . EncodingType_UTF8 ,
})
if err != nil {
return fmt . Errorf ( "AnalyzeEntities: %w" , err )
}
fmt . Fprintf ( w , "Response: %q\n" , resp )
return nil
}
Java
To learn how to install and use the client library for Natural Language, see
Natural Language client libraries .
For more information, see the
Natural Language Java API
reference documentation .
To authenticate to Natural Language, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Instantiate the Language client com.google.cloud.language.v2.LanguageServiceClient
try ( LanguageServiceClient language = LanguageServiceClient . create ()) {
Document doc = Document . newBuilder (). setContent ( text ). setType ( Type . PLAIN_TEXT ). build ();
AnalyzeEntitiesRequest request =
AnalyzeEntitiesRequest . newBuilder ()
. setDocument ( doc )
. setEncodingType ( EncodingType . UTF16 )
. build ();
AnalyzeEntitiesResponse response = language . analyzeEntities ( request );
// Print the response
for ( Entity entity : response . getEntitiesList ()) {
System . out . printf ( "Entity: %s" , entity . getName ());
System . out . println ( "Metadata: " );
for ( Map . Entry<String , String > entry : entity . getMetadataMap (). entrySet ()) {
System . out . printf ( "%s : %s" , entry . getKey (), entry . getValue ());
}
for ( EntityMention mention : entity . getMentionsList ()) {
System . out . printf ( "Begin offset: %d\n" , mention . getText (). getBeginOffset ());
System . out . printf ( "Content: %s\n" , mention . getText (). getContent ());
System . out . printf ( "Type: %s\n\n" , mention . getType ());
System . out . printf ( "Probability: %s\n\n" , mention . getProbability ());
}
}
}
Node.js
To learn how to install and use the client library for Natural Language, see
Natural Language client libraries .
For more information, see the
Natural Language Node.js API
reference documentation .
To authenticate to Natural Language, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud client library
const language = require ( ' @google-cloud/language ' ). v2 ;
// Creates a client
const client = new language . LanguageServiceClient ();
/**
* TODO(developer): Uncomment the following line to run this code.
*/
// const text = 'Your text to analyze, e.g. Hello, world!';
// Prepares a document, representing the provided text
const document = {
content : text ,
type : 'PLAIN_TEXT' ,
};
// Detects entities in the document
const [ result ] = await client . analyzeEntities ({ document });
const entities = result . entities ;
console . log ( 'Entities:' );
entities . forEach ( entity = > {
console . log ( entity . name );
console . log ( ` - Type: ${ entity . type } ` );
if ( entity . metadata ) {
console . log ( ` - Metadata: ${ entity . metadata } ` );
}
});
Python
To learn how to install and use the client library for Natural Language, see
Natural Language client libraries .
For more information, see the
Natural Language Python API
reference documentation .
To authenticate to Natural Language, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import language_v2
def sample_analyze_entities ( text_content : str = "California is a state." ) - > None :
"""
Analyzes Entities in a string.
Args:
text_content: The text content to analyze
"""
client = language_v2 . LanguageServiceClient ()
# Available types: PLAIN_TEXT, HTML
document_type_in_plain_text = language_v2 . Document . Type . PLAIN_TEXT
# Optional. If not specified, the language is automatically detected.
# For list of supported languages:
# https://cloud.google.com/natural-language/docs/languages
language_code = "en"
document = {
"content" : text_content ,
"type_" : document_type_in_plain_text ,
"language_code" : language_code ,
}
# Available values: NONE, UTF8, UTF16, UTF32.
# See https://cloud.google.com/natural-language/docs/reference/rest/v2/EncodingType.
encoding_type = language_v2 . EncodingType . UTF8
response = client . analyze_entities (
request = { "document" : document , "encoding_type" : encoding_type }
)
for entity in response . entities :
print ( f "Representative name for the entity: { entity . name } " )
# Get entity type, e.g. PERSON, LOCATION, ADDRESS, NUMBER, et al.
# See https://cloud.google.com/natural-language/docs/reference/rest/v2/Entity#type.
print ( f "Entity type: { language_v2 . Entity . Type ( entity . type_ ) . name } " )
# Loop over the metadata associated with entity.
# Some entity types may have additional metadata, e.g. ADDRESS entities
# may have metadata for the address street_name, postal_code, et al.
for metadata_name , metadata_value in entity . metadata . items ():
print ( f " { metadata_name } : { metadata_value } " )
# Loop over the mentions of this entity in the input document.
# The API currently supports proper noun mentions.
for mention in entity . mentions :
print ( f "Mention text: { mention . text . content } " )
# Get the mention type, e.g. PROPER for proper noun
print ( f "Mention type: { language_v2 . EntityMention . Type ( mention . type_ ) . name } " )
# Get the probability score associated with the first mention of the entity in the (0, 1.0] range.
print ( f "Probability score: { mention . probability } " )
# Get the language of the text, which will be the same as
# the language specified in the request or, if not specified,
# the automatically-detected language.
print ( f "Language of the text: { response . language_code } " )
Additional languages
C# :
Please follow the
C# setup instructions
on the client libraries page
and then visit the
Natural Language reference documentation for .NET.
PHP :
Please follow the
PHP setup instructions
on the client libraries page
and then visit the
Natural Language reference documentation for PHP.
Ruby :
Please follow the
Ruby setup instructions
on the client libraries page
and then visit the
Natural Language reference documentation for Ruby.
Analyzing Entities from Cloud Storage
For your convenience, the Natural Language API can perform entity
analysis directly on a file located in Cloud Storage, without the need
to send the contents of the file in the body of your request.
Here is an example of performing entity analysis on a file located in Cloud
Storage.
Protocol
To analyze entities from a document stored in Cloud Storage,
make a POST request to the
documents:analyzeEntities
REST method and provide
the appropriate request body with the path to the document
as shown in the following example.
curl -X POST \
-H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \
-H "Content-Type: application/json; charset=utf-8" \
--data "{
'document':{
'type':'PLAIN_TEXT',
'gcsContentUri':'gs:// <bucket-name> / <object-name> '
}
}" "https://language.googleapis.com/v2/documents:analyzeEntities"
If you don't specify document.language_code , then the language will be automatically
detected. For information on which languages are supported by the Natural Language API,
see Language Support . See the Document
reference documentation for more information on configuring the request body.
If the request is successful, the server returns a 200 OK HTTP status code and
the response in JSON format:
{
"entities" : [
{
"name" : "October 7" ,
"type" : "DATE" ,
"metadata" : {
"month" : "10" ,
"day" : "7"
},
"mentions" : [
{
"text" : {
"content" : "October 7" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "1600" ,
"type" : "NUMBER" ,
"metadata" : {
"value" : "1600"
},
"mentions" : [
{
"text" : {
"content" : "1600" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "7" ,
"type" : "NUMBER" ,
"metadata" : {
"value" : "7"
},
"mentions" : [
{
"text" : {
"content" : "7" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "1600 Pennsylvania Ave NW, Washington, DC" ,
"type" : "ADDRESS" ,
"metadata" : {
"locality" : "Washington" ,
"narrow_region" : "District of Columbia" ,
"street_name" : "Pennsylvania Avenue Northwest" ,
"street_number" : "1600" ,
"broad_region" : "District of Columbia" ,
"country" : "US"
},
"mentions" : [
{
"text" : {
"content" : "1600 Pennsylvania Ave NW, Washington, DC" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "1600 Pennsylvania Ave NW" ,
"type" : "LOCATION" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "1600 Pennsylvania Ave NW" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.901
}
]
},
{
"name" : "President" ,
"type" : "PERSON" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "President" ,
"beginOffset" : - 1
},
"type" : "COMMON" ,
"probability" : 0.941
}
]
},
{
"name" : "Trump" ,
"type" : "PERSON" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "Trump" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.948
}
]
},
{
"name" : "Washington, DC" ,
"type" : "LOCATION" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "Washington, DC" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.92
}
]
},
{
"name" : "White House" ,
"type" : "LOCATION" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "White House" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.785
}
]
}
],
"languageCode" : "en" ,
"languageSupported" : true
}
The entities array contains Entity
objects representing the detected entities, which include information such as
the entity name and type.
gcloud
Refer to the analyze-entities
command for complete details.
To perform entity analysis on a file in Cloud Storage, use the gcloud
command line tool and use the --content-file flag to identify the file
path that contains the content to analyze:
gcloud ml language analyze-entities --content-file=gs:// YOUR_BUCKET_NAME / YOUR_FILE_NAME
If the request is successful, the server returns a response in JSON format:
{
"entities" : [
{
"name" : "October 7" ,
"type" : "DATE" ,
"metadata" : {
"month" : "10" ,
"day" : "7"
},
"mentions" : [
{
"text" : {
"content" : "October 7" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "1600" ,
"type" : "NUMBER" ,
"metadata" : {
"value" : "1600"
},
"mentions" : [
{
"text" : {
"content" : "1600" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "7" ,
"type" : "NUMBER" ,
"metadata" : {
"value" : "7"
},
"mentions" : [
{
"text" : {
"content" : "7" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "1600 Pennsylvania Ave NW, Washington, DC" ,
"type" : "ADDRESS" ,
"metadata" : {
"locality" : "Washington" ,
"narrow_region" : "District of Columbia" ,
"street_name" : "Pennsylvania Avenue Northwest" ,
"street_number" : "1600" ,
"broad_region" : "District of Columbia" ,
"country" : "US"
},
"mentions" : [
{
"text" : {
"content" : "1600 Pennsylvania Ave NW, Washington, DC" ,
"beginOffset" : - 1
},
"type" : "TYPE_UNKNOWN" ,
"probability" : 1
}
]
},
{
"name" : "1600 Pennsylvania Ave NW" ,
"type" : "LOCATION" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "1600 Pennsylvania Ave NW" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.901
}
]
},
{
"name" : "President" ,
"type" : "PERSON" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "President" ,
"beginOffset" : - 1
},
"type" : "COMMON" ,
"probability" : 0.941
}
]
},
{
"name" : "Trump" ,
"type" : "PERSON" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "Trump" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.948
}
]
},
{
"name" : "Washington, DC" ,
"type" : "LOCATION" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "Washington, DC" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.92
}
]
},
{
"name" : "White House" ,
"type" : "LOCATION" ,
"metadata" : {},
"mentions" : [
{
"text" : {
"content" : "White House" ,
"beginOffset" : - 1
},
"type" : "PROPER" ,
"probability" : 0.785
}
]
}
],
"languageCode" : "en" ,
"languageSupported" : true
}
The entities array contains Entity
objects representing the detected entities, which include information such as
the entity name and type.
Go
To learn how to install and use the client library for Natural Language, see
Natural Language client libraries .
For more information, see the
Natural Language Go API
reference documentation .
To authenticate to Natural Language, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
func analyzeEntitiesFromGCS ( ctx context . Context , gcsURI string ) ( * languagepb . AnalyzeEntitiesResponse , error ) {
return client . AnalyzeEntities ( ctx , & languagepb . AnalyzeEntitiesRequest {
Document : & languagepb . Document {
Source : & languagepb . Document_GcsContentUri {
GcsContentUri : gcsURI ,
},
Type : languagepb . Document_PLAIN_TEXT ,
},
EncodingType : languagepb . EncodingType_UTF8 ,
})
}
Java
To learn how to install and use the client library for Natural Language, see
Natural Language client libraries .
For more information, see the
Natural Language Java API
reference documentation .
To authenticate to Natural Language, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Instantiate the Language client com.google.cloud.language.v2.LanguageServiceClient
try ( LanguageServiceClient language = LanguageServiceClient . create ()) {
// Set the GCS Content URI path to the file to be analyzed
Document doc =
Document . newBuilder (). setGcsContentUri ( gcsUri ). setType ( Type . PLAIN_TEXT ). build ();
AnalyzeEntitiesRequest request =
AnalyzeEntitiesRequest . newBuilder ()
. setDocument ( doc )
. setEncodingType ( EncodingType . UTF16 )
. build ();
AnalyzeEntitiesResponse response = language . analyzeEntities ( request );
// Print the response
for ( Entity entity : response . getEntitiesList ()) {
System . out . printf ( "Entity: %s\n" , entity . getName ());
System . out . println ( "Metadata: " );
for ( Map . Entry<String , String > entry : entity . getMetadataMap (). entrySet ()) {
System . out . printf ( "%s : %s" , entry . getKey (), entry . getValue ());
}
for ( EntityMention mention : entity . getMentionsList ()) {
System . out . printf ( "Begin offset: %d\n" , mention . getText (). getBeginOffset ());
System . out . printf ( "Content: %s\n" , mention . getText (). getContent ());
System . out . printf ( "Type: %s\n\n" , mention . getType ());
System . out . printf ( "Probability: %s\n\n" , mention . getProbability ());
}
}
}
Node.js
To learn how to install and use the client library for Natural Language, see
Natural Language client libraries .
For more information, see the
Natural Language Node.js API
reference documentation .
To authenticate to Natural Language, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud client library
const language = require ( ' @google-cloud/language ' ). v2 ;
// Creates a client
const client = new language . LanguageServiceClient ();
/**
* TODO(developer): Uncomment the following lines to run this code
*/
// const bucketName = 'Your bucket name, e.g. my-bucket';
// const fileName = 'Your file name, e.g. my-file.txt';
// Prepares a document, representing a text file in Cloud Storage
const document = {
gcsContentUri : `gs:// ${ bucketName } / ${ fileName } ` ,
type : 'PLAIN_TEXT' ,
};
// Detects entities in the document
const [ result ] = await client . analyzeEntities ({ document });
const entities = result . entities ;
console . log ( 'Entities:' );
entities . forEach ( entity = > {
console . log ( entity . name );
console . log ( ` - Type: ${ entity . type } ` );
if ( entity . metadata ) {
console . log ( ` - Metadata: ${ entity . metadata } ` );
}
});
Python
To learn how to install and use the client library for Natural Language, see
Natural Language client libraries .
For more information, see the
Natural Language Python API
reference documentation .
To authenticate to Natural Language, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import language_v2
def sample_analyze_entities (
gcs_content_uri : str = "gs://cloud-samples-data/language/entity.txt" ,
) - > None :
"""
Analyzes Entities in text file stored in Cloud Storage.
Args:
gcs_content_uri: Google Cloud Storage URI where the file content is located.
e.g. gs://[Your Bucket]/[Path to File]
"""
client = language_v2 . LanguageServiceClient ()
# Available types: PLAIN_TEXT, HTML
document_type_in_plain_text = language_v2 . Document . Type . PLAIN_TEXT
# Optional. If not specified, the language is automatically detected.
# For list of supported languages:
# https://cloud.google.com/natural-language/docs/languages
language_code = "en"
document = {
"gcs_content_uri" : gcs_content_uri ,
"type_" : document_type_in_plain_text ,
"language_code" : language_code ,
}
# Available values: NONE, UTF8, UTF16, UTF32.
# See https://cloud.google.com/natural-language/docs/reference/rest/v2/EncodingType.
encoding_type = language_v2 . EncodingType . UTF8
response = client . analyze_entities (
request = { "document" : document , "encoding_type" : encoding_type }
)
for entity in response . entities :
print ( f "Representative name for the entity: { entity . name } " )
# Get entity type, e.g. PERSON, LOCATION, ADDRESS, NUMBER, et al.
# See https://cloud.google.com/natural-language/docs/reference/rest/v2/Entity#type.
print ( f "Entity type: { language_v2 . Entity . Type ( entity . type_ ) . name } " )
# Loop over the metadata associated with entity.
# Some entity types may have additional metadata, e.g. ADDRESS entities
# may have metadata for the address street_name, postal_code, et al.
for metadata_name , metadata_value in entity . metadata . items ():
print ( f " { metadata_name } : { metadata_value } " )
# Loop over the mentions of this entity in the input document.
# The API currently supports proper noun mentions.
for mention in entity . mentions :
print ( f "Mention text: { mention . text . content } " )
# Get the mention type, e.g. PROPER for proper noun
print (
"Mention type:" f " { language_v2 . EntityMention . Type ( mention . type_ ) . name } "
)
# Get the probability score associated with the first mention of the entity in the (0, 1.0] range.
print ( f "Probability score: { mention . probability } " )
# Get the language of the text, which will be the same as
# the language specified in the request or, if not specified,
# the automatically-detected language.
print ( f "Language of the text: { response . language_code } " )
Additional languages
C# :
Please follow the
C# setup instructions
on the client libraries page
and then visit the
Natural Language reference documentation for .NET.
PHP :
Please follow the
PHP setup instructions
on the client libraries page
and then visit the
Natural Language reference documentation for PHP.
Ruby :
Please follow the
Ruby setup instructions
on the client libraries page
and then visit the
Natural Language reference documentation for Ruby.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
