---
title: "Detect intent with audio input file \_|\_ Dialogflow ES \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/how/detect-intent-audio
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/how/detect-intent-audio
  title: "Detect intent with audio input file \_|\_ Dialogflow ES \_|\_ Google Cloud\
    \ Documentation"
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
Detect intent with audio input file
Stay organized with collections
Save and categorize content based on your preferences.
This guide shows how to send audio input to a detect intent request using the API.
Dialogflow processes the audio and converts it to text before attempting an intent match.
This conversion is known as
audio input , speech recognition , speech-to-text , or STT .
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
To detect intent,
call the detectIntent method on the
Sessions
type.
REST
Download the
book-a-room.wav
sample input audio file,
which says "book a room".
The audio file must be base64 encoded for this example,
so it can be provided in the JSON request below.
Here is a Linux example:
wget https://cloud.google.com/dialogflow/es/docs/data/book-a-room.wav
base64 -w 0 book-a-room.wav > book-a-room.b64
For examples on other platforms, see
Base64 encoding audio content
in the Cloud Speech-to-Text API documentation.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID
AUDIO : the base64 encoded audio content
HTTP method and URL:
POST https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/sessions/123456789:detectIntent
Request JSON body:
{
"queryInput": {
"audioConfig": {
"languageCode": "en-US"
}
},
"inputAudio": " AUDIO "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/sessions/123456789:detectIntent"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/sessions/123456789:detectIntent" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"responseId": "3c1e5a89-75b9-4c3f-b63d-4b1351dd5e32",
"queryResult": {
"queryText": "book a room",
"action": "room.reservation",
"parameters": {
"time": "",
"date": "",
"guests": "",
"duration": "",
"location": ""
},
"fulfillmentText": "I can help with that. Where would you like to reserve a room?",
"fulfillmentMessages": [
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
}
}
Notice that the value of the queryResult.action field is "room.reservation",
and the value of the queryResult.fulfillmentMessages[0|1].text.text[0]
field asks the user for more information.
Go
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
func DetectIntentAudio ( projectID , sessionID , audioFile , languageCode string ) ( string , error ) {
ctx := context . Background ()
sessionClient , err := dialogflow . NewSessionsClient ( ctx )
if err != nil {
return "" , err
}
defer sessionClient . Close ()
if projectID == "" || sessionID == "" {
return "" , fmt . Errorf ( "detect.DetectIntentAudio empty project (%s) or session (%s)" , projectID , sessionID )
}
sessionPath := fmt . Sprintf ( "projects/%s/agent/sessions/%s" , projectID , sessionID )
// In this example, we hard code the encoding and sample rate for simplicity.
audioConfig := dialogflowpb . InputAudioConfig { AudioEncoding : dialogflowpb . AudioEncoding_AUDIO_ENCODING_LINEAR_16 , SampleRateHertz : 16000 , LanguageCode : languageCode }
queryAudioInput := dialogflowpb . QueryInput_AudioConfig { AudioConfig : & audioConfig }
audioBytes , err := os . ReadFile ( audioFile )
if err != nil {
return "" , err
}
queryInput := dialogflowpb . QueryInput { Input : & queryAudioInput }
request := dialogflowpb . DetectIntentRequest { Session : sessionPath , QueryInput : & queryInput , InputAudio : audioBytes }
response , err := sessionClient . DetectIntent ( ctx , & request )
if err != nil {
return "" , err
}
queryResult := response . GetQueryResult ()
fulfillmentText := queryResult . GetFulfillmentText ()
return fulfillmentText , nil
}
Java
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.gax.rpc. ApiException ;
import com.google.cloud.dialogflow.v2. AudioEncoding ;
import com.google.cloud.dialogflow.v2. DetectIntentRequest ;
import com.google.cloud.dialogflow.v2. DetectIntentResponse ;
import com.google.cloud.dialogflow.v2. InputAudioConfig ;
import com.google.cloud.dialogflow.v2. QueryInput ;
import com.google.cloud.dialogflow.v2. QueryResult ;
import com.google.cloud.dialogflow.v2. SessionName ;
import com.google.cloud.dialogflow.v2. SessionsClient ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
import java.nio.file.Files ;
import java.nio.file.Paths ;
public class DetectIntentAudio {
// DialogFlow API Detect Intent sample with audio files.
public static QueryResult detectIntentAudio (
String projectId , String audioFilePath , String sessionId , String languageCode )
throws IOException , ApiException {
// Instantiates a client
try ( SessionsClient sessionsClient = SessionsClient . create ()) {
// Set the session name using the sessionId (UUID) and projectID (my-project-id)
SessionName session = SessionName . of ( projectId , sessionId );
System . out . println ( "Session Path: " + session . toString ());
// Note: hard coding audioEncoding and sampleRateHertz for simplicity.
// Audio encoding of the audio content sent in the query request.
AudioEncoding audioEncoding = AudioEncoding . AUDIO_ENCODING_LINEAR_16 ;
int sampleRateHertz = 16000 ;
// Instructs the speech recognizer how to process the audio content.
InputAudioConfig inputAudioConfig =
InputAudioConfig . newBuilder ()
. setAudioEncoding (
audioEncoding ) // audioEncoding = AudioEncoding.AUDIO_ENCODING_LINEAR_16
. setLanguageCode ( languageCode ) // languageCode = "en-US"
. setSampleRateHertz ( sampleRateHertz ) // sampleRateHertz = 16000
. build ();
// Build the query with the InputAudioConfig
QueryInput queryInput = QueryInput . newBuilder (). setAudioConfig ( inputAudioConfig ). build ();
// Read the bytes from the audio file
byte [] inputAudio = Files . readAllBytes ( Paths . get ( audioFilePath ));
// Build the DetectIntentRequest
DetectIntentRequest request =
DetectIntentRequest . newBuilder ()
. setSession ( session . toString ())
. setQueryInput ( queryInput )
. setInputAudio ( ByteString . copyFrom ( inputAudio ))
. build ();
// Performs the detect intent request
DetectIntentResponse response = sessionsClient . detectIntent ( request );
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
return queryResult ;
}
}
}
Node.js
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
const fs = require ( 'fs' );
const util = require ( 'util' );
const { struct } = require ( 'pb-util' );
// Imports the Dialogflow library
const dialogflow = require ( ' @google-cloud/dialogflow ' );
// Instantiates a session client
const sessionClient = new dialogflow . SessionsClient ();
// The path to identify the agent that owns the created intent.
const sessionPath = sessionClient . projectAgentSessionPath (
projectId ,
sessionId
);
// Read the content of the audio file and send it as part of the request.
const readFile = util . promisify ( fs . readFile );
const inputAudio = await readFile ( filename );
const request = {
session : sessionPath ,
queryInput : {
audioConfig : {
audioEncoding : encoding ,
sampleRateHertz : sampleRateHertz ,
languageCode : languageCode ,
},
},
inputAudio : inputAudio ,
};
// Recognizes the speech in the audio and detects its intent.
const [ response ] = await sessionClient . detectIntent ( request );
console . log ( 'Detected intent:' );
const result = response . queryResult ;
// Instantiates a context client
const contextClient = new dialogflow . ContextsClient ();
console . log ( ` Query: ${ result . queryText } ` );
console . log ( ` Response: ${ result . fulfillmentText } ` );
if ( result . intent ) {
console . log ( ` Intent: ${ result . intent . displayName } ` );
} else {
console . log ( ' No intent matched.' );
}
const parameters = JSON . stringify ( struct . decode ( result . parameters ));
console . log ( ` Parameters: ${ parameters } ` );
if ( result . outputContexts && result . outputContexts . length ) {
console . log ( ' Output contexts:' );
result . outputContexts . forEach ( context = > {
const contextId =
contextClient . matchContextFromProjectAgentSessionContextName (
context . name
);
const contextParameters = JSON . stringify (
struct . decode ( context . parameters )
);
console . log ( ` ${ contextId } ` );
console . log ( ` lifespan: ${ context . lifespanCount } ` );
console . log ( ` parameters: ${ contextParameters } ` );
});
}
Python
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def detect_intent_audio ( project_id , session_id , audio_file_path , language_code ):
"""Returns the result of detect intent with an audio file as input.
Using the same `session_id` between requests allows continuation
of the conversation."""
from google.cloud import dialogflow
session_client = dialogflow . SessionsClient ()
# Note: hard coding audio_encoding and sample_rate_hertz for simplicity.
audio_encoding = dialogflow . AudioEncoding . AUDIO_ENCODING_LINEAR_16
sample_rate_hertz = 16000
session = session_client . session_path ( project_id , session_id )
print ( "Session path: {} \n " . format ( session ))
with open ( audio_file_path , "rb" ) as audio_file :
input_audio = audio_file . read ()
audio_config = dialogflow . InputAudioConfig (
audio_encoding = audio_encoding ,
language_code = language_code ,
sample_rate_hertz = sample_rate_hertz ,
)
query_input = dialogflow . QueryInput ( audio_config = audio_config )
request = dialogflow . DetectIntentRequest (
session = session ,
query_input = query_input ,
input_audio = input_audio ,
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
Additional languages
C# :
Please follow the
C# setup instructions
on the client libraries page
and then visit the
Dialogflow CX reference documentation for .NET.
PHP :
Please follow the
PHP setup instructions
on the client libraries page
and then visit the
Dialogflow CX reference documentation for PHP.
Ruby :
Please follow the
Ruby setup instructions
on the client libraries page
and then visit the
Dialogflow CX reference documentation for Ruby.
Previous
arrow_back
Update data with a FieldMask
Next
Detect intent with audio input stream
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
