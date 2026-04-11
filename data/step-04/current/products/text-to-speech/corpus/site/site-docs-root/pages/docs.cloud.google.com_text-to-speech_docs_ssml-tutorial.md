---
title: "Speak addresses with SSML \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/ssml-tutorial
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/ssml-tutorial
  title: "Speak addresses with SSML \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\
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
Guides
Send feedback
Speak addresses with SSML
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial demonstrates how to use Speech Synthesis Markup Language (SSML)
to speak a text file of addresses. You can mark up a string of text with SSML
tags to personalize synthetic audio from Cloud Text-to-Speech.
Plaintext
SSML rendering of plaintext
123 Street Ln
<speak>123 Street Ln</speak>
1 Number St
<speak>1 Number St</speak>
1 Piazza del Fibonacci
<speak>1 Piazza del Fibonacci</speak>
Objective
Send a synthetic speech request to Cloud Text-to-Speech using SSML and Cloud Text-to-Speech client libraries .
Costs
Refer to the Cloud TTS pricing page
for cost information.
Before you begin
Make sure that you have a Cloud Text-to-Speech project
in Google Cloud console .
This tutorial allows you to use Java, Node.js, or Python.
If you plan to use Java, download
and install Maven. If you plan to use
Node.js, download npm .
Download the code samples
To download the code samples, clone the Google Cloud GitHub samples for the
programming language that you intend to use.
Java
This tutorial uses code in the texttospeech/cloud-client/src/main/java/com/example/texttospeech/ directory of the
Google Cloud Platform Java samples repository .
To download and navigate to the code for this tutorial, run the following commands
from the terminal.
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
cd java-docs-samples/texttospeech/cloud-client/src/main/java/com/example/texttospeech/
Node.js
This tutorial uses code in the texttospeech
directory of the
Google Cloud Platform Node.js samples repository .
To download and navigate to the code for this tutorial, run the
following commands
from the terminal.
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
cd texttospeech/
Python
This tutorial uses code in the texttospeech/snippets directory of the
Google Cloud Platform Python samples repository .
To download and navigate to the code for this tutorial, run the following commands
from the terminal.
git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git
cd samples/snippets
Install the client library
This tutorial uses the Text-to-Speech client library .
Java
This tutorial uses the following dependencies.
<!-- Using libraries-bom to manage versions.
See https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM -->
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.32.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-texttospeech</artifactId>
</dependency>
</dependencies>
Node.js
From terminal, run the follow command.
npm install @google-cloud/text-to-speech
Python
From terminal, run the follow command.
pip install --upgrade google-cloud-texttospeech
Set up your Google Cloud Platform credentials
Provide authentication credentials to your application code by setting the
environment variable GOOGLE_APPLICATION_CREDENTIALS . This
variable applies only to your current shell session. If you want the variable
to apply to future shell sessions, set the variable in your shell startup file,
for example in the ~/.bashrc or ~/.profile file.
Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
export GOOGLE_APPLICATION_CREDENTIALS = "/home/user/Downloads/service-account-file.json"
Windows
For PowerShell:
$env :GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
$env :GOOGLE_APPLICATION_CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json"
For command prompt:
set GOOGLE_APPLICATION_CREDENTIALS = KEY_PATH
Replace KEY_PATH with the path of the JSON file that contains your credentials.
Import libraries
This tutorial uses the following system and client libraries.
Java
To learn how to install and use the client library for Cloud TTS, see
Cloud TTS client libraries .
For more information, see the
Cloud TTS Java API
reference documentation .
To authenticate to Cloud TTS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud client library
import com.google.cloud.texttospeech.v1. AudioConfig ;
import com.google.cloud.texttospeech.v1. AudioEncoding ;
import com.google.cloud.texttospeech.v1. SsmlVoiceGender ;
import com.google.cloud.texttospeech.v1. SynthesisInput ;
import com.google.cloud.texttospeech.v1. SynthesizeSpeechResponse ;
import com.google.cloud.texttospeech.v1. TextToSpeechClient ;
import com.google.cloud.texttospeech.v1. VoiceSelectionParams ;
import com.google.common.html.HtmlEscapers ;
import com.google.protobuf. ByteString ;
import java.io.FileOutputStream ;
import java.io.IOException ;
import java.io.OutputStream ;
import java.nio.file.Files ;
import java.nio.file.Paths ;
Node.js
To learn how to install and use the client library for Cloud TTS, see
Cloud TTS client libraries .
For more information, see the
Cloud TTS Node.js API
reference documentation .
To authenticate to Cloud TTS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud client library
const textToSpeech = require ( ' @google-cloud/text-to-speech ' );
// Import other required libraries
const fs = require ( 'fs' );
//const escape = require('escape-html');
const util = require ( 'util' );
Python
To learn how to install and use the client library for Cloud TTS, see
Cloud TTS client libraries .
For more information, see the
Cloud TTS Python API
reference documentation .
To authenticate to Cloud TTS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import html
from google.cloud import texttospeech
Use the Cloud Text-to-Speech API
The following function takes a
string of text tagged with SSML and the name of an MP3 file.
The function uses the text tagged with SSML to generate synthetic audio.
The function saves the synthetic audio to the MP3 filename designated as a
parameter.
The entire SSML input can only be read by a single voice.
You can set the voice in the
VoiceSelectionParams
object.
Note : This function overrides any
pre-existing files with the same name as the outfile parameter. Ensure that
you do not lose any pre-existing local files by using a unique filename as your outfile .
Java
To learn how to install and use the client library for Cloud TTS, see
Cloud TTS client libraries .
For more information, see the
Cloud TTS Java API
reference documentation .
To authenticate to Cloud TTS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* Generates synthetic audio from a String of SSML text.
*
* <p>Given a string of SSML text and an output file name, this function calls the Text-to-Speech
* API. The API returns a synthetic audio version of the text, formatted according to the SSML
* commands. This function saves the synthetic audio to the designated output file.
*
* @param ssmlText String of tagged SSML text
* @param outFile String name of file under which to save audio output
* @throws Exception on errors while closing the client
*/
public static void ssmlToAudio ( String ssmlText , String outFile ) throws Exception {
// Instantiates a client
try ( TextToSpeechClient textToSpeechClient = TextToSpeechClient . create ()) {
// Set the ssml text input to synthesize
SynthesisInput input = SynthesisInput . newBuilder (). setSsml ( ssmlText ). build ();
// Build the voice request, select the language code ("en-US") and
// the ssml voice gender ("male")
VoiceSelectionParams voice =
VoiceSelectionParams . newBuilder ()
. setLanguageCode ( "en-US" )
. setSsmlGender ( SsmlVoiceGender . MALE )
. build ();
// Select the audio file type
AudioConfig audioConfig =
AudioConfig . newBuilder (). setAudioEncoding ( AudioEncoding . MP3 ). build ();
// Perform the text-to-speech request on the text input with the selected voice parameters and
// audio file type
SynthesizeSpeechResponse response =
textToSpeechClient . synthesizeSpeech ( input , voice , audioConfig );
// Get the audio contents from the response
ByteString audioContents = response . getAudioContent ();
// Write the response to the output file
try ( OutputStream out = new FileOutputStream ( outFile )) {
out . write ( audioContents . toByteArray ());
System . out . println ( "Audio content written to file " + outFile );
}
}
}
Node.js
To learn how to install and use the client library for Cloud TTS, see
Cloud TTS client libraries .
For more information, see the
Cloud TTS Node.js API
reference documentation .
To authenticate to Cloud TTS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* Generates synthetic audio from a String of SSML text.
*
* Given a string of SSML text and an output file name, this function
* calls the Text-to-Speech API. The API returns a synthetic audio
* version of the text, formatted according to the SSML commands. This
* function saves the synthetic audio to the designated output file.
*
* ARGS
* ssmlText: String of tagged SSML text
* outfile: String name of file under which to save audio output
* RETURNS
* nothing
*
*/
async function ssmlToAudio ( ssmlText , outFile ) {
// Creates a client
const client = new textToSpeech . TextToSpeechClient ();
// Constructs the request
const request = {
// Select the text to synthesize
input : { ssml : ssmlText },
// Select the language and SSML Voice Gender (optional)
voice : { languageCode : 'en-US' , ssmlGender : 'MALE' },
// Select the type of audio encoding
audioConfig : { audioEncoding : 'MP3' },
};
// Performs the Text-to-Speech request
const [ response ] = await client . synthesizeSpeech ( request );
// Write the binary audio content to a local file
const writeFile = util . promisify ( fs . writeFile );
await writeFile ( outFile , response . audioContent , 'binary' );
console . log ( 'Audio content written to file ' + outFile );
}
Python
To learn how to install and use the client library for Cloud TTS, see
Cloud TTS client libraries .
For more information, see the
Cloud TTS Python API
reference documentation .
To authenticate to Cloud TTS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def ssml_to_audio ( ssml_text : str ) - > None :
"""
Generates SSML text from plaintext.
Given a string of SSML text and an output file name, this function
calls the Text-to-Speech API. The API returns a synthetic audio
version of the text, formatted according to the SSML commands. This
function saves the synthetic audio to the designated output file.
Args:
ssml_text: string of SSML text
"""
# Instantiates a client
client = texttospeech . TextToSpeechClient ()
# Sets the text input to be synthesized
synthesis_input = texttospeech . SynthesisInput ( ssml = ssml_text )
# Builds the voice request, selects the language code ("en-US") and
# the SSML voice gender ("MALE")
voice = texttospeech . VoiceSelectionParams (
language_code = "en-US" , ssml_gender = texttospeech . SsmlVoiceGender . MALE
)
# Selects the type of audio file to return
audio_config = texttospeech . AudioConfig (
audio_encoding = texttospeech . AudioEncoding . MP3
)
# Performs the text-to-speech request on the text input with the selected
# voice parameters and audio file type
response = client . synthesize_speech (
input = synthesis_input , voice = voice , audio_config = audio_config
)
# Writes the synthetic audio to the output file.
with open ( "test_example.mp3" , "wb" ) as out :
out . write ( response . audio_content )
print ( "Audio content written to file " + "test_example.mp3" )
Personalize synthetic audio
The following function takes in the
name of a text file and converts the contents of the file into a string of text
tagged with SSML.
Java
To learn how to install and use the client library for Cloud TTS, see
Cloud TTS client libraries .
For more information, see the
Cloud TTS Java API
reference documentation .
To authenticate to Cloud TTS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* Generates SSML text from plaintext.
*
* <p>Given an input filename, this function converts the contents of the input text file into a
* String of tagged SSML text. This function formats the SSML String so that, when synthesized,
* the synthetic audio will pause for two seconds between each line of the text file. This
* function also handles special text characters which might interfere with SSML commands.
*
* @param inputFile String name of plaintext file
* @return a String of SSML text based on plaintext input.
* @throws IOException on files that don't exist
*/
public static String textToSsml ( String inputFile ) throws Exception {
// Read lines of input file
String rawLines = new String ( Files . readAllBytes ( Paths . get ( inputFile )));
// Replace special characters with HTML Ampersand Character Codes
// These codes prevent the API from confusing text with SSML tags
// For example, '<' --> '&lt;' and '&' --> '&amp;'
String escapedLines = HtmlEscapers . htmlEscaper (). escape ( rawLines );
// Convert plaintext to SSML
// Tag SSML so that there is a 2 second pause between each address
String expandedNewline = escapedLines . replaceAll ( "\\n" , "\n<break time='2s'/>" );
String ssml = "<speak>" + expandedNewline + "</speak>" ;
// Return the concatenated String of SSML
return ssml ;
}
Node.js
To learn how to install and use the client library for Cloud TTS, see
Cloud TTS client libraries .
For more information, see the
Cloud TTS Node.js API
reference documentation .
To authenticate to Cloud TTS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* Generates SSML text from plaintext.
*
* Given an input filename, this function converts the contents of the input text file
* into a String of tagged SSML text. This function formats the SSML String so that,
* when synthesized, the synthetic audio will pause for two seconds between each line
* of the text file. This function also handles special text characters which might
* interfere with SSML commands.
*
* ARGS
* inputfile: String name of plaintext file
* RETURNS
* a String of SSML text based on plaintext input
*
*/
function textToSsml ( inputFile ) {
let rawLines = '' ;
// Read input file
try {
rawLines = fs . readFileSync ( inputFile , 'utf8' );
} catch ( e ) {
console . log ( 'Error:' , e . stack );
return ;
}
// Replace special characters with HTML Ampersand Character Codes
// These codes prevent the API from confusing text with SSML tags
// For example, '<' --> '&lt;' and '&' --> '&amp;'
let escapedLines = rawLines ;
escapedLines = escapedLines . replace ( /&/g, '&amp;');
escapedLines = escapedLines . replace ( /"/g , '&quot;' );
escapedLines = escapedLines . replace ( /</g, '&lt;');
escapedLines = escapedLines . replace ( />/g, '&gt;');
// Convert plaintext to SSML
// Tag SSML so that there is a 2 second pause between each address
const expandedNewline = escapedLines . replace ( /\n/g , '\n<break time="2s"/>' );
const ssml = '<speak>' + expandedNewline + '</speak>' ;
// Return the concatenated String of SSML
return ssml ;
}
Python
To learn how to install and use the client library for Cloud TTS, see
Cloud TTS client libraries .
For more information, see the
Cloud TTS Python API
reference documentation .
To authenticate to Cloud TTS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def text_to_ssml ( inputfile : str ) - > str :
"""
Generates SSML text from plaintext.
Given an input filename, this function converts the contents of the text
file into a string of formatted SSML text. This function formats the SSML
string so that, when synthesized, the synthetic audio will pause for two
seconds between each line of the text file. This function also handles
special text characters which might interfere with SSML commands.
Args:
inputfile: name of plaintext file
Returns: SSML text based on plaintext input
"""
# Parses lines of input file
with open ( inputfile ) as f :
raw_lines = f . read ()
# Replace special characters with HTML Ampersand Character Codes
# These Codes prevent the API from confusing text with
# SSML commands
# For example, '<' --> '&lt;' and '&' --> '&amp;'
escaped_lines = html . escape ( raw_lines )
# Convert plaintext to SSML
# Wait two seconds between each address
ssml = "<speak> {} < /speak>" . format (
escaped_lines . replace ( " \n " , ' \n < break time="2s"/>' )
)
# Return the concatenated string of ssml script
return ssml
Put it all together
This program uses the following input.
123 Street Ln, Small Town, IL 12345 USA
1 Jenny St & Number St, Tutone City, CA 86753
1 Piazza del Fibonacci, 12358 Pisa, Italy
Passing the above text to text_to_ssml() generates the following tagged text.
<speak>123 Street Ln, Small Town, IL 12345 USA
<break time="2s"/>1 Jenny St &amp; Number St, Tutone City, CA 86753
<break time="2s"/>1 Piazza del Fibonacci, 12358 Pisa, Italy
<break time="2s"/></speak>
Run the code
To generate an audio file of synthetic speech, run the following code from the command line.
Java
Linux or MacOS
From the java-docs-samples/texttospeech/cloud-client/ directory,
execute the following command on the command line.
$ mvn clean package
Windows
From the java-docs-samples/texttospeech/cloud-client/ directory,
execute the following command on the command line.
$ mvn clean package
Node.js
Linux or MacOS
In the hybridGlossaries.js file, uncomment the TODO (developer)
commented-out variables.
In the following command, replace projectId with your Google Cloud project ID.
From the nodejs-docs-samples/texttospeech directory,
execute the following command on the command line.
$ node ssmlAddresses.js projectId
Windows
In the hybridGlossaries.js file, uncomment the TODO (developer)
commented-out variables.
In the following command, replace projectId with your Google Cloud project ID.
From the nodejs-docs-samples/texttospeech directory,
execute the following command on the command line.
$env: C:/Node.js/node.exe C: ssmlAddresses.js projectId
Python
Linux or MacOS
From the python-docs-samples/texttospeech/snippets directory,
execute the following command on the command line.
$ python ssml_addresses.py
Windows
From the python-docs-samples/texttospeech/snippets directory,
execute the following command on the command line.
$env: C:/Python3/python.exe C: ssml_addresses.py
Check your output
This program outputs an example.mp3 audio file of synthetic speech.
Java
Navigate into java-docs-samples/texttospeech/cloud-client/resources/ directory.
Check the resources directory for an example.mp3 file.
Node.js
Navigate into nodejs-docs-samples/texttospeech/resources/ directory.
Check the resources directory for an example.mp3 file.
Python
Navigate into python-docs-samples/texttospeech/snippets/resources .
Check the resources directory for an example.mp3 file.
Listen to the following audio clip
to check that your example.mp3 file sounds the same.
Your browser does not support the audio element.
Troubleshoot
Forgetting to set the GOOGLE_APPLICATION_CREDENTIALS
environment variable on the command line generates the error message:
The Application Default Credentials are not available.
Passing text_to_ssml() the name of a non-existent file generates the error message:
IOError: [Errno 2] No such file or directory
Passing ssml_to_audio() a ssml_text parameter which contains
None generates the error message:
InvalidArgument: 400 Invalid input type. Type has to be text or SSML
Make sure that you are running the code from the correct directory .
What's next
Explore other SSML tags .
Learn how to use SSML with Translation and Vision
Clean up
To avoid incurring charges to your Google Cloud Platform account for the
resources used in this tutorial, use the Google Cloud console
to delete your project if you do not need it.
Delete your project
In the Google Cloud console , go to the Projects page.
In the project list, select the project you want to delete and click Delete .
In the dialog box, type the project ID, and click Shut down to delete the project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
