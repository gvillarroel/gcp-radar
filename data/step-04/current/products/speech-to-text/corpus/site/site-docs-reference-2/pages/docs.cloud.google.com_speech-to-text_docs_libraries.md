---
title: "Cloud Speech-to-Text client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/libraries
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/libraries
  title: "Cloud Speech-to-Text client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Reference
Send feedback
Cloud Speech-to-Text client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Speech-to-Text API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C#
Install-Package Google.Cloud.Speech.V2
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/speech/apiv2
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
< artifactId>google - cloud - speech < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - speech : 4.83.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-speech" % "4.83.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/speech
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud/speech
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-speech
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-speech
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
// Imports the Google Cloud client library
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.speech.v2. AutoDetectDecodingConfig ;
import com.google.cloud.speech.v2. CreateRecognizerRequest ;
import com.google.cloud.speech.v2. OperationMetadata ;
import com.google.cloud.speech.v2. RecognitionConfig ;
import com.google.cloud.speech.v2. RecognizeRequest ;
import com.google.cloud.speech.v2. RecognizeResponse ;
import com.google.cloud.speech.v2. Recognizer ;
import com.google.cloud.speech.v2. SpeechClient ;
import com.google.cloud.speech.v2. SpeechRecognitionAlternative ;
import com.google.cloud.speech.v2. SpeechRecognitionResult ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
import java.nio.file.Files ;
import java.nio.file.Path ;
import java.nio.file.Paths ;
import java.util.List ;
import java.util.concurrent.ExecutionException ;
public class QuickstartSampleV2 {
public static void main ( String [] args ) throws IOException , ExecutionException ,
InterruptedException {
String projectId = "my-project-id" ;
String filePath = "path/to/audioFile.raw" ;
String recognizerId = "my-recognizer-id" ;
quickstartSampleV2 ( projectId , filePath , recognizerId );
}
public static void quickstartSampleV2 ( String projectId , String filePath , String recognizerId )
throws IOException , ExecutionException , InterruptedException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( SpeechClient speechClient = SpeechClient . create ()) {
Path path = Paths . get ( filePath );
byte [] data = Files . readAllBytes ( path );
ByteString audioBytes = ByteString . copyFrom ( data );
String parent = String . format ( "projects/%s/locations/global" , projectId );
// First, create a recognizer
Recognizer recognizer = Recognizer . newBuilder ()
. setModel ( "latest_long" )
. addLanguageCodes ( "en-US" )
. build ();
CreateRecognizerRequest createRecognizerRequest = CreateRecognizerRequest . newBuilder ()
. setParent ( parent )
. setRecognizerId ( recognizerId )
. setRecognizer ( recognizer )
. build ();
OperationFuture<Recognizer , OperationMetadata > operationFuture =
speechClient . createRecognizerAsync ( createRecognizerRequest );
recognizer = operationFuture . get ();
// Next, create the transcription request
RecognitionConfig recognitionConfig = RecognitionConfig . newBuilder ()
. setAutoDecodingConfig ( AutoDetectDecodingConfig . newBuilder (). build ())
. build ();
RecognizeRequest request = RecognizeRequest . newBuilder ()
. setConfig ( recognitionConfig )
. setRecognizer ( recognizer . getName ())
. setContent ( audioBytes )
. build ();
RecognizeResponse response = speechClient . recognize ( request );
List<SpeechRecognitionResult> results = response . getResultsList ();
for ( SpeechRecognitionResult result : results ) {
// There can be several alternative transcripts for a given chunk of speech. Just use the
// first (most likely) one here.
if ( result . getAlternativesCount () > 0 ) {
SpeechRecognitionAlternative alternative = result . getAlternativesList (). get ( 0 );
System . out . printf ( "Transcription: %s%n" , alternative . getTranscript ());
}
}
}
}
}
Python
import os
from google.cloud.speech_v2 import SpeechClient
from google.cloud.speech_v2.types import cloud_speech
PROJECT_ID = os . getenv ( "GOOGLE_CLOUD_PROJECT" )
def quickstart_v2 ( audio_file : str ) - > cloud_speech . RecognizeResponse :
"""Transcribe an audio file.
Args:
audio_file (str): Path to the local audio file to be transcribed.
Returns:
cloud_speech.RecognizeResponse: The response from the recognize request, containing
the transcription results
"""
# Reads a file as bytes
with open ( audio_file , "rb" ) as f :
audio_content = f . read ()
# Instantiates a client
client = SpeechClient ()
config = cloud_speech . RecognitionConfig (
auto_decoding_config = cloud_speech . AutoDetectDecodingConfig (),
language_codes = [ "en-US" ],
model = "long" ,
)
request = cloud_speech . RecognizeRequest (
recognizer = f "projects/ { PROJECT_ID } /locations/global/recognizers/_" ,
config = config ,
content = audio_content ,
)
# Transcribes the audio into text
response = client . recognize ( request = request )
for result in response . results :
print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " )
return response
Additional resources
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-speech on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-speech on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-speech on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-speech on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-speech on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-speech on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-speech on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
