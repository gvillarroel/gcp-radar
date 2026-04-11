---
title: "Analyzing Sentiment \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/analyzing-sentiment
  title: "Analyzing Sentiment \_|\_ Cloud Natural Language API \_|\_ Google Cloud\
    \ Documentation"
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
Analyzing Sentiment
Stay organized with collections
Save and categorize content based on your preferences.
Sentiment Analysis inspects the given text and identifies the prevailing
emotional opinion within the text, especially to determine a writer's attitude
as positive, negative, or neutral. Sentiment analysis is performed through the
analyzeSentiment method. For information on which languages are supported by the Natural Language API,
see Language Support . For information on
how to interpret the score and magnitude sentiment values included in the
analysis, see Interpreting sentiment analysis values .
This section demonstrates a few ways to detect sentiment in a document.
For each document, you must submit a separate request.
Analyzing Sentiment in a String
Here is an example of performing sentiment analysis on a text string sent
directly to the Natural Language API:
Protocol
To analyze sentiment in a document, make a POST request to the
documents:analyzeSentiment
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
'content': 'Enjoy your vacation!'
}
}" "https://language.googleapis.com/v2/documents:analyzeSentiment"
If you don't specify document.language_code , then the language will be automatically
detected. For information on which languages are supported by the Natural Language API,
see Language Support . See
the Document
reference documentation for more information on configuring the request body.
If the request is successful, the server returns a 200 OK HTTP status code and
the response in JSON format:
{
"documentSentiment": {
"magnitude": 0.8,
"score": 0.8
},
"language": "en",
"sentences": [
{
"text": {
"content": "Enjoy your vacation!",
"beginOffset": 0
},
"sentiment": {
"magnitude": 0.8,
"score": 0.8
}
}
]
}
documentSentiment.score
indicates positive sentiment with a value greater than zero, and negative
sentiment with a value less than zero.
gcloud
Refer to the analyze-sentiment
command for complete details.
To perform sentiment analysis, use the gcloud CLI and
use the --content flag to identify the content to analyze:
gcloud ml language analyze-sentiment --content="Enjoy your vacation!"
If the request is successful, the server returns a response in JSON format:
{
"documentSentiment": {
"magnitude": 0.8,
"score": 0.8
},
"language": "en",
"sentences": [
{
"text": {
"content": "Enjoy your vacation!",
"beginOffset": 0
},
"sentiment": {
"magnitude": 0.8,
"score": 0.8
}
}
]
}
documentSentiment.score
indicates positive sentiment with a value greater than zero, and negative
sentiment with a value less than zero.
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
// analyzeSentiment sends a string of text to the Cloud Natural Language API to
// assess the sentiment of the text.
func analyzeSentiment ( w io . Writer , text string ) error {
ctx := context . Background ()
// Initialize client.
client , err := language . NewClient ( ctx )
if err != nil {
return err
}
defer client . Close ()
resp , err := client . AnalyzeSentiment ( ctx , & languagepb . AnalyzeSentimentRequest {
Document : & languagepb . Document {
Source : & languagepb . Document_Content {
Content : text ,
},
Type : languagepb . Document_PLAIN_TEXT ,
},
EncodingType : languagepb . EncodingType_UTF8 ,
})
if err != nil {
return fmt . Errorf ( "AnalyzeSentiment: %w" , err )
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
AnalyzeSentimentResponse response = language . analyzeSentiment ( doc );
Sentiment sentiment = response . getDocumentSentiment ();
if ( sentiment == null ) {
System . out . println ( "No sentiment found" );
} else {
System . out . printf ( "Sentiment magnitude: %.3f\n" , sentiment . getMagnitude ());
System . out . printf ( "Sentiment score: %.3f\n" , sentiment . getScore ());
}
return sentiment ;
}
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
def sample_analyze_sentiment ( text_content : str = "I am so happy and joyful." ) - > None :
"""
Analyzes Sentiment in a string.
Args:
text_content: The text content to analyze.
"""
client = language_v2 . LanguageServiceClient ()
# text_content = 'I am so happy and joyful.'
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
# Available values: NONE, UTF8, UTF16, UTF32
# See https://cloud.google.com/natural-language/docs/reference/rest/v2/EncodingType.
encoding_type = language_v2 . EncodingType . UTF8
response = client . analyze_sentiment (
request = { "document" : document , "encoding_type" : encoding_type }
)
# Get overall sentiment of the input document
print ( f "Document sentiment score: { response . document_sentiment . score } " )
print ( f "Document sentiment magnitude: { response . document_sentiment . magnitude } " )
# Get sentiment for all sentences in the document
for sentence in response . sentences :
print ( f "Sentence text: { sentence . text . content } " )
print ( f "Sentence sentiment score: { sentence . sentiment . score } " )
print ( f "Sentence sentiment magnitude: { sentence . sentiment . magnitude } " )
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
Analyzing Sentiment from Cloud Storage
For your convenience, the Natural Language API can perform sentiment
analysis directly on a file located in Cloud Storage, without the need
to send the contents of the file in the body of your request.
Here is an example of performing sentiment analysis on a file located in Cloud
Storage.
Protocol
To analyze sentiment from a document stored in Cloud Storage,
make a POST request to the
documents:analyzeSentiment
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
}" "https://language.googleapis.com/v2/documents:analyzeSentiment"
If you don't specify document.language_code , then the language will be automatically
detected. For information on which languages are supported by the Natural Language API,
see Language Support . See
the Document
reference documentation for more information on configuring the request body.
If the request is successful, the server returns a 200 OK HTTP status code and
the response in JSON format:
{
"documentSentiment": {
"magnitude": 0.8,
"score": 0.8
},
"language_code": "en",
"sentences": [
{
"text": {
"content": "Enjoy your vacation!",
"beginOffset": 0
},
"sentiment": {
"magnitude": 0.8,
"score": 0.8
}
}
]
}
documentSentiment.score
indicates positive sentiment with a value greater than zero, and negative
sentiment with a value less than zero.
gcloud
Refer to the analyze-sentiment
command for complete details.
To perform sentiment analysis on a file in Cloud Storage, use the gcloud
command line tool and use the --content-file flag to identify the file
path that contains the content to analyze:
gcloud ml language analyze-sentiment --content-file=gs:// YOUR_BUCKET_NAME / YOUR_FILE_NAME
If the request is successful, the server returns a response in JSON format:
{
"documentSentiment": {
"magnitude": 0.8,
"score": 0.8
},
"language": "en",
"sentences": [
{
"text": {
"content": "Enjoy your vacation!",
"beginOffset": 0
},
"sentiment": {
"magnitude": 0.8,
"score": 0.8
}
}
]
}
documentSentiment.score
indicates positive sentiment with a value greater than zero, and negative
sentiment with a value less than zero.
Go
To learn how to install and use the client library for Natural Language, see
Natural Language client libraries .
For more information, see the
Natural Language Go API
reference documentation .
To authenticate to Natural Language, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
func analyzeSentimentFromGCS ( ctx context . Context , gcsURI string ) ( * languagepb . AnalyzeSentimentResponse , error ) {
return client . AnalyzeSentiment ( ctx , & languagepb . AnalyzeSentimentRequest {
Document : & languagepb . Document {
Source : & languagepb . Document_GcsContentUri {
GcsContentUri : gcsURI ,
},
Type : languagepb . Document_PLAIN_TEXT ,
},
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
Document doc =
Document . newBuilder (). setGcsContentUri ( gcsUri ). setType ( Type . PLAIN_TEXT ). build ();
AnalyzeSentimentResponse response = language . analyzeSentiment ( doc );
Sentiment sentiment = response . getDocumentSentiment ();
if ( sentiment == null ) {
System . out . println ( "No sentiment found" );
} else {
System . out . printf ( "Sentiment magnitude : %.3f\n" , sentiment . getMagnitude ());
System . out . printf ( "Sentiment score : %.3f\n" , sentiment . getScore ());
}
return sentiment ;
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
// Detects the sentiment of the document
const [ result ] = await client . analyzeSentiment ({ document });
const sentiment = result . documentSentiment ;
console . log ( 'Document sentiment:' );
console . log ( ` Score: ${ sentiment . score } ` );
console . log ( ` Magnitude: ${ sentiment . magnitude } ` );
const sentences = result . sentences ;
sentences . forEach ( sentence = > {
console . log ( `Sentence: ${ sentence . text . content } ` );
console . log ( ` Score: ${ sentence . sentiment . score } ` );
console . log ( ` Magnitude: ${ sentence . sentiment . magnitude } ` );
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
def sample_analyze_sentiment (
gcs_content_uri : str = "gs://cloud-samples-data/language/sentiment-positive.txt" ,
) - > None :
"""
Analyzes Sentiment in text file stored in Cloud Storage.
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
# Available values: NONE, UTF8, UTF16, UTF32
# See https://cloud.google.com/natural-language/docs/reference/rest/v2/EncodingType.
encoding_type = language_v2 . EncodingType . UTF8
response = client . analyze_sentiment (
request = { "document" : document , "encoding_type" : encoding_type }
)
# Get overall sentiment of the input document
print ( f "Document sentiment score: { response . document_sentiment . score } " )
print ( f "Document sentiment magnitude: { response . document_sentiment . magnitude } " )
# Get sentiment for all sentences in the document
for sentence in response . sentences :
print ( f "Sentence text: { sentence . text . content } " )
print ( f "Sentence sentiment score: { sentence . sentiment . score } " )
print ( f "Sentence sentiment magnitude: { sentence . sentiment . magnitude } " )
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
