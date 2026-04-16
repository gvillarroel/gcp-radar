---
title: "Detect intent with audio output \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/how/detect-intent-tts
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/how/detect-intent-tts
  title: "Detect intent with audio output \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Dialogflow
Dialogflow ES
Send feedback
Detect intent with audio output
Stay organized with collections
Save and categorize content based on your preferences.
Applications often need a bot to talk back to the end-user.
Dialogflow can use
Cloud Text-to-Speech
powered by
DeepMind WaveNet
to generate speech responses from your agent.
This conversion from intent text responses to audio is known as
audio output , speech synthesis , text-to-speech , or TTS .
This guide provides an example
that uses audio for both input and output when detecting an intent.
This use case is common when developing apps that communicate with users
via a purely audio interface.
For a list of supported languages,
see the TTS column on the
Languages page.
Before you begin
This feature is only applicable when using the API for
end-user interactions .
If you are using an
integration ,
you can skip this guide.
You should do the following before reading this guide:
Read Dialogflow basics .
Perform setup steps .
Create an agent
If you have not already created an agent, create one now:
Go to the Dialogflow ES console .
If requested, sign in to the Dialogflow Console.
See Dialogflow console overview for more information.
Click Create Agent in the left sidebar menu.
(If you already have other agents, click the agent name,
scroll to the bottom and click Create new agent .)
Enter your agent's name, default language, and default time zone.
If you have already created a project, enter that project.
If you want to allow the Dialogflow Console to create the project,
select Create a new Google project .
Click the Create button.
Import the example file to your agent
The steps in this guide make assumptions about your agent,
so you need to
import
an agent prepared for this guide.
When importing, these steps use the restore option,
which overwrites all agent settings, intents, and entities.
To import the file, follow these steps:
Download the
room-booking-agent.zip
file.
Go to the Dialogflow ES console .
Select your agent.
Click the
settings settings button
next to the agent name.
Select the Export and Import tab.
Select Restore From Zip
and follow instructions to restore the zip file that you downloaded.
Detect intent
To detect intent, call the detectIntent method on the
Sessions
type.
REST
1. Prepare audio content
Download the
book-a-room.wav
sample input_audio file,
which says "book a room".
The audio file must be base64 encoded for this example,
so it can be provided in the JSON request below.
Here is a Linux example:
wget https://cloud.google.com/dialogflow/es/docs/data/book-a-room.wav
base64 -w 0 book-a-room.wav > book-a-room.b64
For examples on other platforms, see
Embedding Base64 encoded audio
in the Cloud Speech API documentation.
2. Make detect intent request
Call the detectIntent method on the
Sessions
type and specify base64 encoded audio.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID
SESSION_ID : a session ID
BASE64_AUDIO : the base64 content from the output file above
HTTP method and URL:
POST https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/sessions/ SESSION_ID :detectIntent
Request JSON body:
{
"queryInput": {
"audioConfig": {
"languageCode": "en-US"
}
},
"outputAudioConfig" : {
"audioEncoding": "OUTPUT_AUDIO_ENCODING_LINEAR_16"
},
"inputAudio": " BASE64_AUDIO "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/sessions/ SESSION_ID :detectIntent"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/sessions/ SESSION_ID :detectIntent" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"responseId": "b7405848-2a3a-4e26-b9c6-c4cf9c9a22ee",
"queryResult": {
"queryText": "book a room",
"speechRecognitionConfidence": 0.8616504,
"action" : "room.reservation",
"parameters": {
"time": "",
"date": "",
"duration": "",
"guests": "",
"location": ""
},
"fulfillmentText": "I can help with that. Where would you like to reserve a room?",
"fulfillmentMessages" : [
{
"text": {
"text": [
"I can help with that. Where would you like to reserve a room?"
]
}
}
],
"intent": {
"name": "projects/ PROJECT_ID /agent/intents/e8f6a63e-73da-4a1a-8bfc-857183f71228",
"displayName": "room.reservation"
},
"intentDetectionConfidence": 1,
"diagnosticInfo": {},
"languageCode": "en-us"
},
"outputAudio" : "UklGRs6vAgBXQVZFZm10IBAAAAABAAEAwF0AAIC7AA..."
}
Notice that the value of the queryResult.action
field is room.reservation ,
and the outputAudio field contains a large base64 audio string.
3. Play output audio
Copy the text from the outputAudio field
and save it in a file named output_audio.b64 .
This file needs to be converted to audio.
Here is a Linux example:
base64 -d output_audio.b64 > output_audio.wav
For examples on other platforms, see
Decoding Base64-Encoded Audio Content
in the Text-to-speech API documentation.
You can now play the output_audio.wav audio file
and hear that it matches the text from the queryResult.fulfillmentMessages[1].text.text[0] field above.
The second fulfillmentMessages element is chosen,
because it is the text response for the default platform.
Java
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.gax.rpc. ApiException ;
import com.google.cloud.dialogflow.v2. DetectIntentRequest ;
import com.google.cloud.dialogflow.v2. DetectIntentResponse ;
import com.google.cloud.dialogflow.v2. OutputAudioConfig ;
import com.google.cloud.dialogflow.v2. OutputAudioEncoding ;
import com.google.cloud.dialogflow.v2. QueryInput ;
import com.google.cloud.dialogflow.v2. QueryResult ;
import com.google.cloud.dialogflow.v2. SessionName ;
import com.google.cloud.dialogflow.v2. SessionsClient ;
import com.google.cloud.dialogflow.v2. TextInput ;
import com.google.common.collect.Maps ;
import java.io.IOException ;
import java.util.List ;
import java.util.Map ;
public class DetectIntentWithTextToSpeechResponse {
public static Map<String , QueryResult > detectIntentWithTexttoSpeech (
String projectId , List<String> texts , String sessionId , String languageCode )
throws IOException , ApiException {
Map<String , QueryResult > queryResults = Maps . newHashMap ();
// Instantiates a client
try ( SessionsClient sessionsClient = SessionsClient . create ()) {
// Set the session name using the sessionId (UUID) and projectID (my-project-id)
SessionName session = SessionName . of ( projectId , sessionId );
System . out . println ( "Session Path: " + session . toString ());
// Detect intents for each text input
for ( String text : texts ) {
// Set the text (hello) and language code (en-US) for the query
TextInput . Builder textInput =
TextInput . newBuilder (). setText ( text ). setLanguageCode ( languageCode );
// Build the query with the TextInput
QueryInput queryInput = QueryInput . newBuilder (). setText ( textInput ). build ();
//
OutputAudioEncoding audioEncoding = OutputAudioEncoding . OUTPUT_AUDIO_ENCODING_LINEAR_16 ;
int sampleRateHertz = 16000 ;
OutputAudioConfig outputAudioConfig =
OutputAudioConfig . newBuilder ()
. setAudioEncoding ( audioEncoding )
. setSampleRateHertz ( sampleRateHertz )
. build ();
DetectIntentRequest dr =
DetectIntentRequest . newBuilder ()
. setQueryInput ( queryInput )
. setOutputAudioConfig ( outputAudioConfig )
. setSession ( session . toString ())
. build ();
// Performs the detect intent request
DetectIntentResponse response = sessionsClient . detectIntent ( dr );
// Display the query result
QueryResult queryResult = response . getQueryResult ();
System . out . println ( "====================" );
System . out . format ( "Query Text: '%s'\n" , queryResult . getQueryText ());
System . out . format (
"Detected Intent: %s (confidence: %f)\n" ,
queryResult . getIntent (). getDisplayName (), queryResult . getIntentDetectionConfidence ());
System . out . format (
"Fulfillment Text: '%s'\n" ,
queryResult . getFulfillmentMessagesCount () > 0
? queryResult . getFulfillmentMessages ( 0 ). getText ()
: "Triggered Default Fallback Intent" );
queryResults . put ( text , queryResult );
}
}
return queryResults ;
}
}
Node.js
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Dialogflow client library
const dialogflow = require ( ' @google-cloud/dialogflow ' ). v2 ;
// Instantiate a DialogFlow client.
const sessionClient = new dialogflow . SessionsClient ();
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const projectId = 'ID of GCP project associated with your Dialogflow agent';
// const sessionId = `user specific ID of session, e.g. 12345`;
// const query = `phrase(s) to pass to detect, e.g. I'd like to reserve a room for six people`;
// const languageCode = 'BCP-47 language code, e.g. en-US';
// const outputFile = `path for audio output file, e.g. ./resources/myOutput.wav`;
// Define session path
const sessionPath = sessionClient . projectAgentSessionPath (
projectId ,
sessionId
);
const fs = require ( 'fs' );
const util = require ( 'util' );
async function detectIntentwithTTSResponse () {
// The audio query request
const request = {
session : sessionPath ,
queryInput : {
text : {
text : query ,
languageCode : languageCode ,
},
},
outputAudioConfig : {
audioEncoding : 'OUTPUT_AUDIO_ENCODING_LINEAR_16' ,
},
};
sessionClient . detectIntent ( request ). then ( responses = > {
console . log ( 'Detected intent:' );
const audioFile = responses [ 0 ]. outputAudio ;
util . promisify ( fs . writeFile )( outputFile , audioFile , 'binary' );
console . log ( `Audio content written to file: ${ outputFile } ` );
});
}
detectIntentwithTTSResponse ();
Python
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def detect_intent_with_texttospeech_response (
project_id , session_id , texts , language_code
):
"""Returns the result of detect intent with texts as inputs and includes
the response in an audio format.
Using the same `session_id` between requests allows continuation
of the conversation."""
from google.cloud import dialogflow
session_client = dialogflow . SessionsClient ()
session_path = session_client . session_path ( project_id , session_id )
print ( "Session path: {} \n " . format ( session_path ))
for text in texts :
text_input = dialogflow . TextInput ( text = text , language_code = language_code )
query_input = dialogflow . QueryInput ( text = text_input )
# Set the query parameters with sentiment analysis
output_audio_config = dialogflow . OutputAudioConfig (
audio_encoding = dialogflow . OutputAudioEncoding . OUTPUT_AUDIO_ENCODING_LINEAR_16
)
request = dialogflow . DetectIntentRequest (
session = session_path ,
query_input = query_input ,
output_audio_config = output_audio_config ,
)
response = session_client . detect_intent ( request = request )
print ( "=" * 20 )
print ( "Query text: {} " . format ( response . query_result . query_text ))
print (
"Detected intent: {} (confidence: {} ) \n " . format (
response . query_result . intent . display_name ,
response . query_result . intent_detection_confidence ,
)
)
print ( "Fulfillment text: {} \n " . format ( response . query_result . fulfillment_text ))
# The response's audio_content is binary.
with open ( "output.wav" , "wb" ) as out :
out . write ( response . output_audio )
print ( 'Audio content written to file "output.wav"' )
See the Detect intent responses section for a description of the relevant response fields.
Detect intent responses
The response for a detect intent request is a DetectIntentResponse type.
Normal detect intent processing controls the content of the DetectIntentResponse.queryResult.fulfillmentMessages field.
The DetectIntentResponse.outputAudio field is populated with audio
based on the values of default platform text responses
found in the DetectIntentResponse.queryResult.fulfillmentMessages field.
If multiple default text responses exist,
they will be concatenated when generating audio.
If no default platform text responses exist,
the generated audio content will be empty.
The DetectIntentResponse.outputAudioConfig field is populated with audio
settings used to generate the output audio.
Detect intent from a stream
When detecting intent from a stream,
you send requests similar to the example that does not use output audio:
Detecting Intent from a Stream .
However, you supply a
OutputAudioConfig
field to the request.
The output_audio and output_audio_config fields are populated in the very last streaming response that you get from the Dialogflow API server.
For more information, see
StreamingDetectIntentRequest
and
StreamingDetectIntentResponse .
Agent settings for speech
You can control various aspects of speech synthesis.
See the agent speech settings .
Note: API calls that provide output audio config
override all existing text-to-speech settings applied to the agent.
Use the Dialogflow simulator
You can interact with the agent and receive audio responses via the
Dialogflow simulator :
Follow the steps above to enable automatic text to speech .
Type or say "book a room" in the simulator.
See the output audio section at the bottom of the simulator.
Previous
arrow_back
Detect intent with audio input stream
Next
Detect intent with sentiment analysis
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
