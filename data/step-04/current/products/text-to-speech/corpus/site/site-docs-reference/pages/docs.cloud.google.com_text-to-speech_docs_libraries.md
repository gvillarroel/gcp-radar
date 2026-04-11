---
title: "Cloud TTS client libraries \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/libraries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/libraries
  title: "Cloud TTS client libraries \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Text-to-Speech
Reference
Send feedback
Cloud TTS client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Text-to-Speech API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
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
go get cloud.google.com/go/texttospeech/apiv1
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
< artifactId>google - cloud - texttospeech < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - texttospeech : 2.89.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-texttospeech" % "2.89.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/text-to-speech
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/apiclient
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-texttospeech
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
#include "google/cloud/texttospeech/v1/text_to_speech_client.h"
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
namespace texttospeech = :: google :: cloud :: texttospeech_v1 ;
auto client = texttospeech :: TextToSpeechClient (
texttospeech :: MakeTextToSpeechConnection ());
google :: cloud :: texttospeech :: v1 :: SynthesisInput input ;
input . set_text ( kText );
google :: cloud :: texttospeech :: v1 :: VoiceSelectionParams voice ;
voice . set_language_code ( "en-US" );
google :: cloud :: texttospeech :: v1 :: AudioConfig audio ;
audio . set_audio_encoding ( google :: cloud :: texttospeech :: v1 :: LINEAR16 );
auto response = client . SynthesizeSpeech ( input , voice , audio );
if ( ! response ) throw std :: move ( response ). status ();
// Normally one would play the results (response->audio_content()) over some
// audio device. For this quickstart, we just print some information.
auto constexpr kWavHeaderSize = 48 ;
auto constexpr kBytesPerSample = 2 ; // we asked for LINEAR16
auto const sample_count =
( response - > audio_content (). size () - kWavHeaderSize ) / kBytesPerSample ;
std :: cout << "The audio has " << sample_count << " samples \n " ;
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
Go
// Command quickstart generates an audio file with the content "Hello, World!".
package main
import (
"context"
"fmt"
"log"
"os"
texttospeech "cloud.google.com/go/texttospeech/apiv1"
"cloud.google.com/go/texttospeech/apiv1/texttospeechpb"
)
func main () {
// Instantiates a client.
ctx := context . Background ()
client , err := texttospeech . NewClient ( ctx )
if err != nil {
log . Fatal ( err )
}
defer client . Close ()
// Perform the text-to-speech request on the text input with the selected
// voice parameters and audio file type.
req := texttospeechpb . SynthesizeSpeechRequest {
// Set the text input to be synthesized.
Input : & texttospeechpb . SynthesisInput {
InputSource : & texttospeechpb . SynthesisInput_Text { Text : "Hello, World!" },
},
// Build the voice request, select the language code ("en-US") and the SSML
// voice gender ("neutral").
Voice : & texttospeechpb . VoiceSelectionParams {
LanguageCode : "en-US" ,
SsmlGender : texttospeechpb . SsmlVoiceGender_NEUTRAL ,
},
// Select the type of audio file you want returned.
AudioConfig : & texttospeechpb . AudioConfig {
AudioEncoding : texttospeechpb . AudioEncoding_MP3 ,
},
}
resp , err := client . SynthesizeSpeech ( ctx , & req )
if err != nil {
log . Fatal ( err )
}
// The resp's AudioContent is binary.
filename := "output.mp3"
err = os . WriteFile ( filename , resp . AudioContent , 0644 )
if err != nil {
log . Fatal ( err )
}
fmt . Printf ( "Audio content written to file: %v\n" , filename )
}
Java
// Imports the Google Cloud client library
import com.google.cloud.texttospeech.v1. AudioConfig ;
import com.google.cloud.texttospeech.v1. AudioEncoding ;
import com.google.cloud.texttospeech.v1. SsmlVoiceGender ;
import com.google.cloud.texttospeech.v1. SynthesisInput ;
import com.google.cloud.texttospeech.v1. SynthesizeSpeechResponse ;
import com.google.cloud.texttospeech.v1. TextToSpeechClient ;
import com.google.cloud.texttospeech.v1. VoiceSelectionParams ;
import com.google.protobuf. ByteString ;
import java.io.FileOutputStream ;
import java.io.OutputStream ;
/**
* Google Cloud TextToSpeech API sample application. Example usage: mvn package exec:java
* -Dexec.mainClass='com.example.texttospeech.QuickstartSample'
*/
public class QuickstartSample {
/** Demonstrates using the Text-to-Speech API. */
public static void main ( String ... args ) throws Exception {
// Instantiates a client
try ( TextToSpeechClient textToSpeechClient = TextToSpeechClient . create ()) {
// Set the text input to be synthesized
SynthesisInput input = SynthesisInput . newBuilder (). setText ( "Hello, World!" ). build ();
// Build the voice request, select the language code ("en-US") and the ssml voice gender
// ("neutral")
VoiceSelectionParams voice =
VoiceSelectionParams . newBuilder ()
. setLanguageCode ( "en-US" )
. setSsmlGender ( SsmlVoiceGender . NEUTRAL )
. build ();
// Select the type of audio file you want returned
AudioConfig audioConfig =
AudioConfig . newBuilder (). setAudioEncoding ( AudioEncoding . MP3 ). build ();
// Perform the text-to-speech request on the text input with the selected voice parameters and
// audio file type
SynthesizeSpeechResponse response =
textToSpeechClient . synthesizeSpeech ( input , voice , audioConfig );
// Get the audio contents from the response
ByteString audioContents = response . getAudioContent ();
// Write the response to the output file.
try ( OutputStream out = new FileOutputStream ( "output.mp3" )) {
out . write ( audioContents . toByteArray ());
System . out . println ( "Audio content written to file \"output.mp3\"" );
}
}
}
}
Node.js
// Imports the Google Cloud client library
const textToSpeech = require ( ' @google-cloud/text-to-speech ' );
// Import other required libraries
const { writeFile } = require ( 'node:fs/promises' );
// Creates a client
const client = new textToSpeech . TextToSpeechClient ();
async function quickStart () {
// The text to synthesize
const text = 'hello, world!' ;
// Construct the request
const request = {
input : { text : text },
// Select the language and SSML voice gender (optional)
voice : { languageCode : 'en-US' , ssmlGender : 'NEUTRAL' },
// select the type of audio encoding
audioConfig : { audioEncoding : 'MP3' },
};
// Performs the text-to-speech request
const [ response ] = await client . synthesizeSpeech ( request );
// Save the generated binary audio content to a local file
await writeFile ( 'output.mp3' , response . audioContent , 'binary' );
console . log ( 'Audio content written to file: output.mp3' );
}
await quickStart ();
Python
"""Synthesizes speech from the input string of text or ssml.
Make sure to be working in a virtual environment.
Note: ssml must be well-formed according to:
https://www.w3.org/TR/speech-synthesis/
"""
from google.cloud import texttospeech
# Instantiates a client
client = texttospeech . TextToSpeechClient ()
# Set the text input to be synthesized
synthesis_input = texttospeech . SynthesisInput ( text = "Hello, World!" )
# Build the voice request, select the language code ("en-US") and the ssml
# voice gender ("neutral")
voice = texttospeech . VoiceSelectionParams (
language_code = "en-US" , ssml_gender = texttospeech . SsmlVoiceGender . NEUTRAL
)
# Select the type of audio file you want returned
audio_config = texttospeech . AudioConfig (
audio_encoding = texttospeech . AudioEncoding . MP3
)
# Perform the text-to-speech request on the text input with the selected
# voice parameters and audio file type
response = client . synthesize_speech (
input = synthesis_input , voice = voice , audio_config = audio_config
)
# The response's audio_content is binary.
with open ( "output.mp3" , "wb" ) as out :
# Write the response to the output file.
out . write ( response . audio_content )
print ( 'Audio content written to file "output.mp3"' )
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-speech on Stack Overflow
Source code
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
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
