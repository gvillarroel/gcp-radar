---
title: "Quickstart: Perform sentiment analysis by using client libraries \_|\_ Cloud\
  \ Natural Language API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-client-libraries
  title: "Quickstart: Perform sentiment analysis by using client libraries \_|\_ Cloud\
    \ Natural Language API \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Perform sentiment analysis by using client libraries
This page shows you how to get started with the Cloud Natural Language API in your favorite programming language using the Google Cloud Client Libraries.
Before you begin
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Natural Language API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable language.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
Note: If the gcloud CLI prints a warning that your account
doesn't have the serviceusage.services.use permission, then some
gcloud CLI commands and client libraries might not work. Ask an
administrator to grant you the Service Usage Consumer IAM role
( roles/serviceusage.serviceUsageConsumer ), then run the following command:
gcloud auth application-default set-quota-project PROJECT_ID
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Natural Language API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable language.googleapis.com
Create local authentication credentials for your user account:
gcloud auth application-default login
Note: If the gcloud CLI prints a warning that your account
doesn't have the serviceusage.services.use permission, then some
gcloud CLI commands and client libraries might not work. Ask an
administrator to grant you the Service Usage Consumer IAM role
( roles/serviceusage.serviceUsageConsumer ), then run the following command:
gcloud auth application-default set-quota-project PROJECT_ID
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Install the client library
Go
go get cloud.google.com/go/language/apiv1
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
Node.js
Before installing the library, make sure you've prepared your environment for Node.js development .
npm install @google-cloud/language
Python
Before installing the library, make sure you've prepared your environment for Python development .
pip install --upgrade google-cloud-language
Analyze some text
Now you can use the Natural Language API to analyze some text. Run the following code to perform your first text sentiment analysis:
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
Before running the example, make sure you've prepared your environment for Node.js development .
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
Before running the example, make sure you've prepared your environment for Python development .
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
Congratulations! You've sent your first request to the Natural Language API.
How did it go?
It worked!
Great!
What did you like about the quickstart? What could
we have done better?
Let us know! .
I got stuck.
We're sorry to hear that.
Let us know what went wrong . We'll want to fix it.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Use the Google Cloud console to delete your project if you do not need it.
What's next
Find out more about our Cloud Natural Language API Client Libraries .
Consult the Natural Language Basics for
conceptual information on forming Natural Language API requests and handling
responses.
Work through the
Sentiment Analysis Tutorial and
browse the Sample Applications .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
