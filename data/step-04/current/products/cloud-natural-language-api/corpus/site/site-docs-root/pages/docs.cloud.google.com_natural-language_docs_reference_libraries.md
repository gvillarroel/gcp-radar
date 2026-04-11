---
title: "Natural Language client libraries \_|\_ Cloud Natural Language API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/reference/libraries
  title: "Natural Language client libraries \_|\_ Cloud Natural Language API \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Reference
Send feedback
Natural Language client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Natural Language API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Beta
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
C#
If you are using Visual Studio 2017 or higher, open nuget package manager window and type the following:
Install-Package Google.Apis
If you are using .NET Core command-line interface tools to install your dependencies, run the following command:
dotnet add package Google.Apis
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/language/apiv1
For more information, see Setting Up a Go Development Environment .
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
< artifactId>google - cloud - language < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - language : 2.89.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-language" % "2.89.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/language
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/apiclient
For more information, see Using PHP on Google Cloud .
Python
Note:
See the migration guide for information about migrating to the latest Python client
library.
For more information on setting up Python development environment, such as
installing and using pip , see the Python Development Environment Setup Guide .
pip install --upgrade google-cloud-language
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-api-client
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
C++
#include "google/cloud/language/v2/language_client.h"
#include <iostream>
auto constexpr kText = R " ""(
Four score and seven years ago our fathers brought forth on this
continent, a new nation, conceived in Liberty, and dedicated to
the proposition that all men are created equal. )"" " ;
int main ( int argc , char * argv []) try {
if ( argc != 1 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " \n " ;
return 1 ;
}
namespace language = :: google :: cloud :: language_v2 ;
auto client = language :: LanguageServiceClient (
language :: MakeLanguageServiceConnection ());
google :: cloud :: language :: v2 :: Document document ;
document . set_type ( google :: cloud :: language :: v2 :: Document :: PLAIN_TEXT );
document . set_content ( kText );
document . set_language_code ( "en-US" );
auto response = client . AnalyzeEntities ( document );
if ( ! response ) throw std :: move ( response ). status ();
for ( auto const & entity : response - > entities ()) {
if ( entity . type () != google :: cloud :: language :: v2 :: Entity :: NUMBER ) continue ;
std :: cout << entity . DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
Go
// Sample language-quickstart uses the Google Cloud Natural API to analyze the
// sentiment of "Hello, world!".
package main
import (
"context"
"fmt"
"log"
language "cloud.google.com/go/language/apiv1"
"cloud.google.com/go/language/apiv1/languagepb"
)
func main () {
ctx := context . Background ()
// Creates a client.
client , err := language . NewClient ( ctx )
if err != nil {
log . Fatalf ( "Failed to create client: %v" , err )
}
defer client . Close ()
// Sets the text to analyze.
text := "Hello, world!"
// Detects the sentiment of the text.
sentiment , err := client . AnalyzeSentiment ( ctx , & languagepb . AnalyzeSentimentRequest {
Document : & languagepb . Document {
Source : & languagepb . Document_Content {
Content : text ,
},
Type : languagepb . Document_PLAIN_TEXT ,
},
EncodingType : languagepb . EncodingType_UTF8 ,
})
if err != nil {
log . Fatalf ( "Failed to analyze text: %v" , err )
}
fmt . Printf ( "Text: %v\n" , text )
if sentiment . DocumentSentiment . Score > = 0 {
fmt . Println ( "Sentiment: positive" )
} else {
fmt . Println ( "Sentiment: negative" )
}
}
Java
// Imports the Google Cloud client library
import com.google.cloud.language.v1. Document ;
import com.google.cloud.language.v1. Document .Type ;
import com.google.cloud.language.v1. LanguageServiceClient ;
import com.google.cloud.language.v1. Sentiment ;
public class QuickstartSample {
public static void main ( String ... args ) throws Exception {
// Instantiates a client
try ( LanguageServiceClient language = LanguageServiceClient . create ()) {
// The text to analyze
String text = "Hello, world!" ;
Document doc = Document . newBuilder (). setContent ( text ). setType ( Type . PLAIN_TEXT ). build ();
// Detects the sentiment of the text
Sentiment sentiment = language . analyzeSentiment ( doc ). getDocumentSentiment ();
System . out . printf ( "Text: %s%n" , text );
System . out . printf ( "Sentiment: %s, %s%n" , sentiment . getScore (), sentiment . getMagnitude ());
}
}
}
Node.js
async function quickstart () {
// Imports the Google Cloud client library
const language = require ( ' @google-cloud/language ' );
// Instantiates a client
const client = new language . LanguageServiceClient ();
// The text to analyze
const text = 'Hello, world!' ;
const document = {
content : text ,
type : 'PLAIN_TEXT' ,
};
// Detects the sentiment of the text
const [ result ] = await client . analyzeSentiment ({ document : document });
const sentiment = result . documentSentiment ;
console . log ( `Text: ${ text } ` );
console . log ( `Sentiment score: ${ sentiment . score } ` );
console . log ( `Sentiment magnitude: ${ sentiment . magnitude } ` );
}
Python
# Imports the Google Cloud client library.
from google.cloud import language_v1
# Instantiates a client.
client = language_v1 . LanguageServiceClient ()
# The text to analyze.
text = "Hello, world!"
document = language_v1 . types . Document (
content = text , type_ = language_v1 . types . Document . Type . PLAIN_TEXT
)
# Detects the sentiment of the text.
sentiment = client . analyze_sentiment (
request = { "document" : document }
) . document_sentiment
print ( f "Text: { text } " )
print ( f "Sentiment: { sentiment . score } , { sentiment . magnitude } " )
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-nl on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-nl on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-nl on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-nl on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-nl on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-nl on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-nl on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-nl on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
