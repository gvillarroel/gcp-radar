---
title: "Quickstart: Create audio from text by using client libraries \_|\_ Cloud Text-to-Speech\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/quickstart-client-libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/quickstart-client-libraries
  title: "Quickstart: Create audio from text by using client libraries \_|\_ Cloud\
    \ Text-to-Speech \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Text-to-Speech
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create audio from text by using client libraries
This quickstart walks you through the process of using client libraries to make
a request to Cloud TTS, creating audio from text.
To learn more about the fundamental concepts in Cloud Text-to-Speech,
read Cloud Text-to-Speech Basics . To see which
synthetic voices are available for your language, see the
supported voices and languages page .
Before you begin
Before you can send a request to the Cloud Text-to-Speech API, you must have completed
the following actions. See the
before you begin page for details.
Enable Cloud Text-to-Speech on a Google Cloud project.
Make sure billing is enabled for Cloud Text-to-Speech.
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
Install the client library
Go
go get cloud.google.com/go/texttospeech/apiv1
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
Node.js
Before installing the library, make sure you've prepared your environment for Node.js development .
npm install @google-cloud/text-to-speech
Python
Before installing the library, make sure you've prepared your environment for Python development .
pip install --upgrade google-cloud-texttospeech
Additional languages
C# :
Please follow the
C# setup instructions
on the client libraries page
and then visit the
Cloud TTS reference documentation for .NET.
PHP :
Please follow the
PHP setup instructions
on the client libraries page
and then visit the
Cloud TTS reference documentation for PHP.
Ruby :
Please follow the
Ruby setup instructions
on the client libraries page
and then visit the
Cloud TTS reference documentation for Ruby.
Create audio data
Now you can use Cloud TTS to create an audio file
of synthetic human speech. Use the following code to send a
synthesize request to the Cloud Text-to-Speech API.
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
Before running the example, make sure you've prepared your environment for Node.js development .
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
Before running the example, make sure you've prepared your environment for Python development .
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
Congratulations! You've sent your first request to Cloud Text-to-Speech.
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
the resources used on this page, follow these steps.
Use the Google Cloud console to delete your project if you don't
need it.
What's next
Learn more about Cloud Text-to-Speech by reading the
basics .
Review the list of
available voices
you can use for synthetic speech.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
