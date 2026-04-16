---
title: "Manage intents with the API \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/how/manage-intents
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/how/manage-intents
  title: "Manage intents with the API \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Manage intents with the API
Stay organized with collections
Save and categorize content based on your preferences.
Intents
determine which user requests are understood and what action to take.
In most cases, you will use the Dialogflow ES console to manage intents.
In advanced scenarios, you may wish to use the API to manage intents.
This page describes how to create, list, and delete intents using the API.
Before you begin
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
Use IntentView to return all intent data
When creating, listing, or getting an intent,
intent data is returned to the caller.
By default, this returned data is abbreviated.
The samples below use this default.
To retrieve all intent data,
you must set the IntentView parameter to INTENT_VIEW_FULL .
For more information, see the methods for the
Intents
type.
Create intent
The following samples show how to create an intent.
For more information, see the
Intents reference .
REST
To create an intent for your agent,
call the create method on the intent resource.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID
HTTP method and URL:
POST https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/intents
Request JSON body:
{
"displayName": "ListRooms",
"priority": 500000,
"webhookState": "WEBHOOK_STATE_UNSPECIFIED",
"trainingPhrases": [
{
"type": "EXAMPLE",
"parts": [
{
"text": "What rooms are available at 10am today?"
}
]
}
],
"action": "listRooms",
"messages": [
{
"text": {
"text": [
"Here are the available rooms:"
]
}
}
]
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/intents"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/intents" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
Response
{
"name": "projects/ PROJECT_ID /agent/intents/ 5b290a94-55d6-4074-96f4-9c4c4879c2bb ",
"displayName": "ListRooms",
"priority": 500000,
"action": "listRooms",
"messages": [
{
"text": {
"text": [
"Here are the available rooms:"
]
}
}
]
}
The path segment after intents contains your new intent ID.
Go
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
func CreateIntent ( projectID , displayName string , trainingPhraseParts , messageTexts [] string ) error {
ctx := context . Background ()
intentsClient , clientErr := dialogflow . NewIntentsClient ( ctx )
if clientErr != nil {
return clientErr
}
defer intentsClient . Close ()
if projectID == "" || displayName == "" {
return fmt . Errorf ( "intentmgmt.CreateIntent received empty project (%s) or intent (%s)" , projectID , displayName )
}
parent := fmt . Sprintf ( "projects/%s/agent" , projectID )
var targetTrainingPhrases [] * dialogflowpb . Intent_TrainingPhrase
var targetTrainingPhraseParts [] * dialogflowpb . Intent_TrainingPhrase_Part
for _ , partString := range trainingPhraseParts {
part := dialogflowpb . Intent_TrainingPhrase_Part { Text : partString }
targetTrainingPhraseParts = [] * dialogflowpb . Intent_TrainingPhrase_Part { & part }
targetTrainingPhrase := dialogflowpb . Intent_TrainingPhrase { Type : dialogflowpb . Intent_TrainingPhrase_EXAMPLE , Parts : targetTrainingPhraseParts }
targetTrainingPhrases = append ( targetTrainingPhrases , & targetTrainingPhrase )
}
intentMessageTexts := dialogflowpb . Intent_Message_Text { Text : messageTexts }
wrappedIntentMessageTexts := dialogflowpb . Intent_Message_Text_ { Text : & intentMessageTexts }
intentMessage := dialogflowpb . Intent_Message { Message : & wrappedIntentMessageTexts }
target := dialogflowpb . Intent { DisplayName : displayName , WebhookState : dialogflowpb . Intent_WEBHOOK_STATE_UNSPECIFIED , TrainingPhrases : targetTrainingPhrases , Messages : [] * dialogflowpb . Intent_Message { & intentMessage }}
request := dialogflowpb . CreateIntentRequest { Parent : parent , Intent : & target }
_ , requestErr := intentsClient . CreateIntent ( ctx , & request )
if requestErr != nil {
return requestErr
}
return nil
}
Java
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* Create an intent of the given intent type
*
* @param displayName The display name of the intent.
* @param projectId Project/Agent Id.
* @param trainingPhrasesParts Training phrases.
* @param messageTexts Message texts for the agent's response when the intent is detected.
* @return The created Intent.
*/
public static Intent createIntent (
String displayName ,
String projectId ,
List<String> trainingPhrasesParts ,
List<String> messageTexts )
throws ApiException , IOException {
// Instantiates a client
try ( IntentsClient intentsClient = IntentsClient . create ()) {
// Set the project agent name using the projectID (my-project-id)
AgentName parent = AgentName . of ( projectId );
// Build the trainingPhrases from the trainingPhrasesParts
List<TrainingPhrase> trainingPhrases = new ArrayList <> ();
for ( String trainingPhrase : trainingPhrasesParts ) {
trainingPhrases . add (
TrainingPhrase . newBuilder ()
. addParts ( Part . newBuilder (). setText ( trainingPhrase ). build ())
. build ());
}
// Build the message texts for the agent's response
Message message =
Message . newBuilder (). setText ( Text . newBuilder (). addAllText ( messageTexts ). build ()). build ();
// Build the intent
Intent intent =
Intent . newBuilder ()
. setDisplayName ( displayName )
. addMessages ( message )
. addAllTrainingPhrases ( trainingPhrases )
. build ();
// Performs the create intent request
Intent response = intentsClient . createIntent ( parent , intent );
System . out . format ( "Intent created: %s\n" , response );
return response ;
}
}
Node.js
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const projectId = 'The Project ID to use, e.g. 'YOUR_GCP_ID';
// const displayName = 'The display name of the intent, e.g. 'MAKE_RESERVATION';
// const trainingPhrasesParts = 'Training phrases, e.g. 'How many people are staying?';
// const messageTexts = 'Message texts for the agent's response when the intent is detected, e.g. 'Your reservation has been confirmed';
// Imports the Dialogflow library
const dialogflow = require ( ' @google-cloud/dialogflow ' );
// Instantiates the Intent Client
const intentsClient = new dialogflow . IntentsClient ();
async function createIntent () {
// Construct request
// The path to identify the agent that owns the created intent.
const agentPath = intentsClient . projectAgentPath ( projectId );
const trainingPhrases = [];
trainingPhrasesParts . forEach ( trainingPhrasesPart = > {
const part = {
text : trainingPhrasesPart ,
};
// Here we create a new training phrase for each provided part.
const trainingPhrase = {
type : 'EXAMPLE' ,
parts : [ part ],
};
trainingPhrases . push ( trainingPhrase );
});
const messageText = {
text : messageTexts ,
};
const message = {
text : messageText ,
};
const intent = {
displayName : displayName ,
trainingPhrases : trainingPhrases ,
messages : [ message ],
};
const createIntentRequest = {
parent : agentPath ,
intent : intent ,
};
// Create the intent
const [ response ] = await intentsClient . createIntent ( createIntentRequest );
console . log ( `Intent ${ response . name } created` );
}
createIntent ();
Python
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def create_intent ( project_id , display_name , training_phrases_parts , message_texts ):
"""Create an intent of the given intent type."""
from google.cloud import dialogflow
intents_client = dialogflow . IntentsClient ()
parent = dialogflow . AgentsClient . agent_path ( project_id )
training_phrases = []
for training_phrases_part in training_phrases_parts :
part = dialogflow . Intent . TrainingPhrase . Part ( text = training_phrases_part )
# Here we create a new training phrase for each provided part.
training_phrase = dialogflow . Intent . TrainingPhrase ( parts = [ part ])
training_phrases . append ( training_phrase )
text = dialogflow . Intent . Message . Text ( text = message_texts )
message = dialogflow . Intent . Message ( text = text )
intent = dialogflow . Intent (
display_name = display_name , training_phrases = training_phrases , messages = [ message ]
)
response = intents_client . create_intent (
request = { "parent" : parent , "intent" : intent }
)
print ( "Intent created: {} " . format ( response ))
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
List intents
The following samples show how to lists intents.
For more information, see the
Intents reference .
REST
To list the intents for your agent,
call the list method on the intents resource.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID
HTTP method and URL:
GET https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/intents
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/intents"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/intents" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
"intents": [
{
"name": "projects/ PROJECT_ID /agent/intents/5b290a94-55d6-4074-96f4-9c4c4879c2bb",
"displayName": "ListRooms",
"priority": 500000,
"action": "listRooms",
"messages": [
{
"text": {
"text": [
"Here are the available rooms:"
]
}
}
]
},
...
]
}
The path segments after intents contain your intent IDs.
Go
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
func ListIntents ( projectID string ) ([] * dialogflowpb . Intent , error ) {
ctx := context . Background ()
intentsClient , clientErr := dialogflow . NewIntentsClient ( ctx )
if clientErr != nil {
return nil , clientErr
}
defer intentsClient . Close ()
if projectID == "" {
return nil , fmt . Errorf ( "intentmgmt.ListIntents received empty project (%s)" , projectID )
}
parent := fmt . Sprintf ( "projects/%s/agent" , projectID )
request := dialogflowpb . ListIntentsRequest { Parent : parent }
intentIterator := intentsClient . ListIntents ( ctx , & request )
var intents [] * dialogflowpb . Intent
for intent , status := intentIterator . Next (); status != iterator . Done ; {
intents = append ( intents , intent )
intent , status = intentIterator . Next ()
}
return intents , nil
}
Java
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* List intents
*
* @param projectId Project/Agent Id.
* @return Intents found.
*/
public static List<Intent> listIntents ( String projectId ) throws ApiException , IOException {
List<Intent> intents = Lists . newArrayList ();
// Instantiates a client
try ( IntentsClient intentsClient = IntentsClient . create ()) {
// Set the project agent name using the projectID (my-project-id)
AgentName parent = AgentName . of ( projectId );
// Performs the list intents request
for ( Intent intent : intentsClient . listIntents ( parent ). iterateAll ()) {
System . out . println ( "====================" );
System . out . format ( "Intent name: '%s'\n" , intent . getName ());
System . out . format ( "Intent display name: '%s'\n" , intent . getDisplayName ());
System . out . format ( "Action: '%s'\n" , intent . getAction ());
System . out . format ( "Root followup intent: '%s'\n" , intent . getRootFollowupIntentName ());
System . out . format ( "Parent followup intent: '%s'\n" , intent . getParentFollowupIntentName ());
System . out . format ( "Input contexts:\n" );
for ( String inputContextName : intent . getInputContextNamesList ()) {
System . out . format ( "\tName: %s\n" , inputContextName );
}
System . out . format ( "Output contexts:\n" );
for ( Context outputContext : intent . getOutputContextsList ()) {
System . out . format ( "\tName: %s\n" , outputContext . getName ());
}
intents . add ( intent );
}
}
return intents ;
}
Node.js
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const projectId = 'The Project ID to use, e.g. 'YOUR_GCP_ID';
// Imports the Dialogflow library
const dialogflow = require ( ' @google-cloud/dialogflow ' );
// Instantiates clients
const intentsClient = new dialogflow . IntentsClient ();
async function listIntents () {
// Construct request
// The path to identify the agent that owns the intents.
const projectAgentPath = intentsClient . projectAgentPath ( projectId );
console . log ( projectAgentPath );
const request = {
parent : projectAgentPath ,
};
// Send the request for listing intents.
const [ response ] = await intentsClient . listIntents ( request );
response . forEach ( intent = > {
console . log ( '====================' );
console . log ( `Intent name: ${ intent . name } ` );
console . log ( `Intent display name: ${ intent . displayName } ` );
console . log ( `Action: ${ intent . action } ` );
console . log ( `Root folowup intent: ${ intent . rootFollowupIntentName } ` );
console . log ( `Parent followup intent: ${ intent . parentFollowupIntentName } ` );
console . log ( 'Input contexts:' );
intent . inputContextNames . forEach ( inputContextName = > {
console . log ( `\tName: ${ inputContextName } ` );
});
console . log ( 'Output contexts:' );
intent . outputContexts . forEach ( outputContext = > {
console . log ( `\tName: ${ outputContext . name } ` );
});
});
}
listIntents ();
Python
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def list_intents ( project_id ):
from google.cloud import dialogflow
intents_client = dialogflow . IntentsClient ()
parent = dialogflow . AgentsClient . agent_path ( project_id )
intents = intents_client . list_intents ( request = { "parent" : parent })
for intent in intents :
print ( "=" * 20 )
print ( "Intent name: {} " . format ( intent . name ))
print ( "Intent display_name: {} " . format ( intent . display_name ))
print ( "Action: {} \n " . format ( intent . action ))
print ( "Root followup intent: {} " . format ( intent . root_followup_intent_name ))
print ( "Parent followup intent: {} \n " . format ( intent . parent_followup_intent_name ))
print ( "Input contexts:" )
for input_context_name in intent . input_context_names :
print ( " \t Name: {} " . format ( input_context_name ))
print ( "Output contexts:" )
for output_context in intent . output_contexts :
print ( " \t Name: {} " . format ( output_context . name ))
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
Delete intents
The following samples show how to delete an intent.
For more information, see the
Intents reference .
REST
To delete an intent for your agent,
call the delete method on the intents resource.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID
INTENT_ID : your intent ID
HTTP method and URL:
DELETE https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/intents/ INTENT_ID
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
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/intents/ INTENT_ID "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /agent/intents/ INTENT_ID " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a successful status code (2xx) and an empty response.
Go
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
func DeleteIntent ( projectID , intentID string ) error {
ctx := context . Background ()
intentsClient , clientErr := dialogflow . NewIntentsClient ( ctx )
if clientErr != nil {
return clientErr
}
defer intentsClient . Close ()
if projectID == "" || intentID == "" {
return fmt . Errorf ( "intentmgmt.DeleteIntent received empty project (%s) or intent (%s)" , projectID , intentID )
}
targetPath := fmt . Sprintf ( "projects/%s/agent/intents/%s" , projectID , intentID )
request := dialogflowpb . DeleteIntentRequest { Name : targetPath }
requestErr := intentsClient . DeleteIntent ( ctx , & request )
if requestErr != nil {
return requestErr
}
return nil
}
Java
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* Delete intent with the given intent type and intent value
*
* @param intentId The id of the intent.
* @param projectId Project/Agent Id.
*/
public static void deleteIntent ( String intentId , String projectId )
throws ApiException , IOException {
// Instantiates a client
try ( IntentsClient intentsClient = IntentsClient . create ()) {
IntentName name = IntentName . of ( projectId , intentId );
// Performs the delete intent request
intentsClient . deleteIntent ( name );
}
}
Node.js
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Dialogflow library
const dialogflow = require ( ' @google-cloud/dialogflow ' );
// Instantiates clients
const intentsClient = new dialogflow . IntentsClient ();
const intentPath = intentsClient . projectAgentIntentPath ( projectId , intentId );
const request = { name : intentPath };
// Send the request for deleting the intent.
const result = await intentsClient . deleteIntent ( request );
console . log ( `Intent ${ intentPath } deleted` );
return result ;
Python
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def delete_intent ( project_id , intent_id ):
"""Delete intent with the given intent type and intent value."""
from google.cloud import dialogflow
intents_client = dialogflow . IntentsClient ()
intent_path = intents_client . intent_path ( project_id , intent_id )
intents_client . delete_intent ( request = { "name" : intent_path })
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
Manage agents with the API
Next
Manage knowledge bases
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
