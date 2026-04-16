---
title: "Webhook service \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/fulfillment-webhook
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/fulfillment-webhook
  title: "Webhook service \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Webhook service
Stay organized with collections
Save and categorize content based on your preferences.
To use fulfillment in a production system,
you should implement and deploy a webhook service.
To handle fulfillment,
your webhook service needs to accept JSON requests
and return JSON responses as specified in this guide.
The detailed processing flow for fulfillment and webhooks
is described in the
fulfillment overview document .
Webhook service requirements
The following requirements must be met by your webhook service:
It must handle HTTPS requests. HTTP is not supported.
If you host your webhook service on Google Cloud Platform using a
Compute
or
Serverless Computing
solution, see the product documentation for serving with HTTPS.
For other hosting options, see
Get an SSL certificate for your domain .
Its URL for requests must be publicly accessible.
It must handle POST requests with a JSON
WebhookRequest
body.
It must respond to WebhookRequest requests with a JSON
WebhookResponse
body.
Authentication
Note: Webhook source IPs are in the subset of those listed at
https://www.gstatic.com/ipranges/goog.json that excludes those at
https://www.gstatic.com/ipranges/cloud.json . Beyond this, Dialogflow cannot
make any guarantees about IP ranges for machines that send webhook requests.
Rather than restricting access via IP range, you should use one of the
authentication methods listed below.
It's important to secure your webhook service,
so that only you or your Dialogflow agent are authorized to make requests.
Dialogflow supports the following mechanisms for authentication:
Term
Definition
Login username and password
For webhook settings, you can specify optional login username and password values. If supplied, Dialogflow adds an authorization HTTP header to webhook requests. This header is of the form: "authorization: Basic <base 64 encoding of the string username:password>" .
Authentication headers
For webhook settings, you can specify optional HTTP header key-value pairs. If supplied, Dialogflow adds these HTTP headers to webhook requests. It is common to provide a single pair with a key of authorization .
Cloud Functions built-in authentication
You can use the built-in authentication when using Cloud Functions . In order to use this type of authentication, do not supply login username, login password, or authorization headers. If you do supply any of these fields, these fields will be used for authentication rather than the built-in authentication.
Service identity tokens
You can use service identity tokens for authentication. If you do not supply login username, login password, or a header with a key of authorization , Dialogflow automatically assumes that service identity tokens should be used and adds an authorization HTTP header to webhook requests. This header is of the form: "authorization: Bearer <identity token>" .
Mutual TLS authentication
See the Mutual TLS authentication documentation.
Webhook request
When an intent configured for fulfillment is matched,
Dialogflow sends an HTTPS POST webhook request to your webhook service.
The body of this request is a JSON object
with information about the matched intent.
In addition to the end-user query, many integrations also send some
information about the end-user as well. For example, an ID to uniquely identify
the user. This information can be accessed via the originalDetectIntentRequest
field in the webhook request, which will contain the information sent from the
integration platform.
See the
WebhookRequest
reference documentation for details.
Here is a sample request:
{
"responseId": " response-id ",
"session": "projects/ project-id /agent/sessions/ session-id ",
"queryResult": {
"queryText": "End-user expression",
"parameters": {
"param-name": "param-value"
},
"allRequiredParamsPresent": true,
"fulfillmentText": "Response configured for matched intent",
"fulfillmentMessages": [
{
"text": {
"text": [
"Response configured for matched intent"
]
}
}
],
"outputContexts": [
{
"name": "projects/ project-id /agent/sessions/ session-id /contexts/ context-name ",
"lifespanCount": 5,
"parameters": {
"param-name": "param-value"
}
}
],
"intent": {
"name": "projects/ project-id /agent/intents/ intent-id ",
"displayName": "matched-intent-name"
},
"intentDetectionConfidence": 1,
"diagnosticInfo": {},
"languageCode": "en"
},
"originalDetectIntentRequest": {}
}
Webhook response
Once your webhook receives a webhook request,
it needs to send a webhook response.
The body of this response is a JSON object with the following information:
The response
that Dialogflow returns to the end-user.
Updates to contexts
active for the conversation.
A follow-up event
to trigger an intent match.
A custom payload
to be sent to the integration
or detect intent client
The following limitations apply to your response:
The response must occur within 10 seconds for
Google Assistant
applications or 5 seconds for all other applications,
otherwise the request will time out.
The response must be less than or equal to 64 KiB in size.
See the
WebhookResponse
reference documentation for details.
Text response
Example for a
text response :
{
"fulfillmentMessages": [
{
"text": {
"text": [
"Text response from webhook"
]
}
}
]
}
Card response
Example for a
card response :
{
"fulfillmentMessages": [
{
"card": {
"title": "card title",
"subtitle": "card text",
"imageUri": "https://example.com/images/example.png",
"buttons": [
{
"text": "button text",
"postback": "https://example.com/path/for/end-user/to/follow"
}
]
}
}
]
}
Google Assistant response
Example for a
Google Assistant response :
{
"payload": {
"google": {
"expectUserResponse": true,
"richResponse": {
"items": [
{
"simpleResponse": {
"textToSpeech": "this is a Google Assistant response"
}
}
]
}
}
}
}
Context
Example that sets
output context :
{
"fulfillmentMessages": [
{
"text": {
"text": [
"Text response from webhook"
]
}
}
],
"outputContexts": [
{
"name": "projects/ project-id /agent/sessions/ session-id /contexts/ context-name ",
"lifespanCount": 5,
"parameters": {
"param-name": "param-value"
}
}
]
}
Event
Example that invokes a
custom event :
{
"followupEventInput": {
"name": "event-name",
"languageCode": "en-US",
"parameters": {
"param-name": "param-value"
}
}
}
Session entity
Example that sets a
session entity :
{
"fulfillmentMessages": [
{
"text": {
"text": [
"Choose apple or orange"
]
}
}
],
"sessionEntityTypes":[
{
"name":"projects/ project-id /agent/sessions/ session-id /entityTypes/fruit",
"entities":[
{
"value":"APPLE_KEY",
"synonyms":[
"apple",
"green apple",
"crabapple"
]
},
{
"value":"ORANGE_KEY",
"synonyms":[
"orange"
]
}
],
"entityOverrideMode":"ENTITY_OVERRIDE_MODE_OVERRIDE"
}
]
}
Custom payload
Example that provides a custom payload:
{
"fulfillmentMessages": [
{
"payload": {
"facebook": { // for Facebook Messenger integration
"attachment": {
"type": "",
"payload": {}
}
},
"slack": { // for Slack integration
"text": "",
"attachments": []
},
"richContent": [ // for Dialogflow Messenger integration
[
{
"type": "image",
"rawUrl": "https://example.com/images/logo.png",
"accessibilityText": "Example logo"
}
]
],
// custom integration payload here
}
}
]
}
Enable and manage fulfillment
To enable and manage fulfillment for your agent with the console:
Go to the Dialogflow ES console .
Select an agent.
Select Fulfillment in the left sidebar menu.
Toggle the Webhook field to Enabled .
Provide the details for your webhook service in the form.
If your webhook doesn't require authentication,
leave the authentication fields blank.
Click Save at the bottom of the page.
To enable and manage fulfillment for your agent with the API,
see the
agent reference .
The getFulfillment and updateFulfillment methods can
be used to manage fulfillment settings.
To enable fulfillment for an intent with the console:
Select Intents in the left sidebar menu.
Select an intent.
Scroll down to the Fulfillment section.
Toggle Enable webhook call for this intent to on.
Click Save .
To enable fulfillment for an intent with the API,
see the
intents reference .
Set the webhookState field to WEBHOOK_STATE_ENABLED .
Webhook errors
If your webhook service encounters an error,
it should return one of the following HTTP status codes:
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not found
500 Server fault
503 Service Unavailable
In any of the following error situations,
Dialogflow responds to the end-user with the built-in
response configured for the intent currently matched:
Response timeout exceeded.
Error status code received.
Response is invalid.
Webhook service is unavailable.
In addition, if the intent match was triggered by a
detect intent API call ,
the status field in the detect intent response contains the webhook error information. For example:
"status": {
"code": 206,
"message": "Webhook call failed. <details of the error...>"
}
Automatic retries
Dialogflow ES includes internal mechanisms that automatically retry on
certain webhook errors to improve robustness. Only non-terminal errors are
retried (for example, timeout or connection errors).
To reduce the likelihood of duplicated calls:
Set longer webhook timeout thresholds.
Support idempotency in webhook logic or deduplicate.
Using Cloud Functions
There are a few ways to use Cloud Functions for fulfillment. The Dialogflow
inline editor
integrates with
Cloud Functions .
When you use the inline editor to create and edit your webhook code,
Dialogflow establishes a secure connection to your Cloud Function.
You also have the option to use a Cloud Function not created by the inline editor (perhaps because you want to use a language other than Node.js). If the Cloud Function resides in the same project as your agent, your agent can call your webhook without needing any special configuration.
However, there are two situations
in which you must manually setup this integration:
The Dialogflow Service Agent
service account
with the following address must exist for your agent project:
service- agent-project-number @gcp-sa-dialogflow.iam.gserviceaccount.com
This special service account and the associated key
is normally created automatically
when you create the first agent for a project.
If your agent was created before May 10, 2021,
you may need to trigger creation of this special service account with the following:
Create a new agent for the project.
Execute the following command:
gcloud beta services identity create --service=dialogflow.googleapis.com --project= agent-project-id
If your webhook function resides in a different project than the agent,
you must provide the Cloud Functions Invoker
IAM role
to the Dialogflow Service Agent service account
in your function's project.
Service identity tokens
When Dialogflow calls a webhook, it provides a
Google identity token
with the request.
Any webhook can optionally validate the token
using Google client libraries or open source libraries like
github.com/googleapis/google-auth-library-nodejs .
For example, you can verify the email of the ID token as:
service- agent-project-number @gcp-sa-dialogflow.iam.gserviceaccount.com
Samples
The following samples show how to receive a WebhookRequest
and send a WebhookResponse .
These samples reference intents created in the
quickstart .
Go
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"encoding/json"
"fmt"
"log"
"net/http"
)
type intent struct {
DisplayName string `json:"displayName"`
}
type queryResult struct {
Intent intent `json:"intent"`
}
type text struct {
Text []string `json:"text"`
}
type message struct {
Text text `json:"text"`
}
// webhookRequest is used to unmarshal a WebhookRequest JSON object. Note that
// not all members need to be defined--just those that you need to process.
// As an alternative, you could use the types provided by
// the Dialogflow protocol buffers:
// https://godoc.org/google.golang.org/genproto/googleapis/cloud/dialogflow/v2#WebhookRequest
type webhookRequest struct {
Session string `json:"session"`
ResponseID string `json:"responseId"`
QueryResult queryResult `json:"queryResult"`
}
// webhookResponse is used to marshal a WebhookResponse JSON object. Note that
// not all members need to be defined--just those that you need to process.
// As an alternative, you could use the types provided by
// the Dialogflow protocol buffers:
// https://godoc.org/google.golang.org/genproto/googleapis/cloud/dialogflow/v2#WebhookResponse
type webhookResponse struct {
FulfillmentMessages []message `json:"fulfillmentMessages"`
}
// welcome creates a response for the welcome intent.
func welcome(request webhookRequest) (webhookResponse, error) {
response := webhookResponse{
FulfillmentMessages: []message{
{
Text: text{
Text: []string{"Welcome from Dialogflow Go Webhook"},
},
},
},
}
return response, nil
}
// getAgentName creates a response for the get-agent-name intent.
func getAgentName(request webhookRequest) (webhookResponse, error) {
response := webhookResponse{
FulfillmentMessages: []message{
{
Text: text{
Text: []string{"My name is Dialogflow Go Webhook"},
},
},
},
}
return response, nil
}
// handleError handles internal errors.
func handleError(w http.ResponseWriter, err error) {
w.WriteHeader(http.StatusInternalServerError)
fmt.Fprintf(w, "ERROR: %v", err)
}
// HandleWebhookRequest handles WebhookRequest and sends the WebhookResponse.
func HandleWebhookRequest(w http.ResponseWriter, r *http.Request) {
var request webhookRequest
var response webhookResponse
var err error
// Read input JSON
if err = json.NewDecoder(r.Body).Decode(&request); err != nil {
handleError(w, err)
return
}
log.Printf("Request: %+v", request)
// Call intent handler
switch intent := request.QueryResult.Intent.DisplayName; intent {
case "Default Welcome Intent":
response, err = welcome(request)
case "get-agent-name":
response, err = getAgentName(request)
default:
err = fmt.Errorf("Unknown intent: %s", intent)
}
if err != nil {
handleError(w, err)
return
}
log.Printf("Response: %+v", response)
// Send response
if err = json.NewEncoder(w).Encode(&response); err != nil {
handleError(w, err)
return
}
}
Java
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// TODO: add GSON dependency to Pom file
// (https://mvnrepository.com/artifact/com.google.code.gson/gson/2.8.5)
// TODO: Uncomment the line bellow before running cloud function
// package com.example;
import com.google.cloud.functions.HttpFunction ;
import com.google.cloud.functions.HttpRequest ;
import com.google.cloud.functions.HttpResponse ;
import com.google.gson.Gson ;
import com.google.gson.GsonBuilder ;
import com.google.gson.JsonObject ;
import com.google.gson.JsonParser ;
import java.io.BufferedWriter ;
public class Example implements HttpFunction {
public void service ( HttpRequest request , HttpResponse response ) throws Exception {
JsonParser parser = new JsonParser ();
Gson gson = new GsonBuilder (). create ();
JsonObject job = gson . fromJson ( request . getReader (), JsonObject . class );
String str =
job . getAsJsonObject ( "queryResult" )
. getAsJsonObject ( "intent" )
. getAsJsonPrimitive ( "displayName" )
. toString ();
JsonObject o = null ;
String a = '"' + "Default Welcome Intent" + '"' ;
String b = '"' + "get-agent-name" + '"' ;
String responseText = "" ;
if ( str . equals ( a )) {
responseText = '"' + "Hello from a Java GCF Webhook" + '"' ;
} else if ( str . equals ( b )) {
responseText = '"' + "My name is Flowhook" + '"' ;
} else {
responseText = '"' + "Sorry I didn't get that" + '"' ;
}
o =
parser
. parse (
"{\"fulfillmentMessages\": [ { \"text\": { \"text\": [ "
+ responseText
+ " ] } } ] }" )
. getAsJsonObject ();
BufferedWriter writer = response . getWriter ();
writer . write ( o . toString ());
}
}
Node.js
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
const functions = require ( '@google-cloud/functions-framework' );
// TODO: Add handleWebhook to 'Entry point' in the Google Cloud Function
functions . http ( 'handleWebhook' , ( request , response ) = > {
const tag = request . body . queryResult . intent . displayName ;
let jsonResponse = {};
if ( tag === 'Default Welcome Intent' ) {
//fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
jsonResponse = {
fulfillment_messages : [
{
text : {
//fulfillment text response to be sent to the agent
text : [ 'Hello from a GCF Webhook' ],
},
},
],
};
} else if ( tag === 'get-name' ) {
//fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
jsonResponse = {
fulfillment_messages : [
{
text : {
//fulfillment text response to be sent to the agent
text : [ 'My name is Flowhook' ],
},
},
],
};
} else {
jsonResponse = {
//fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
fulfillment_messages : [
{
text : {
////fulfillment text response to be sent to the agent
text : [
`There are no fulfillment responses defined for " ${ tag } "" tag` ,
],
},
},
],
};
}
response . send ( jsonResponse );
});
Python
To authenticate to Dialogflow CX, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# TODO: change the default Entry Point text to handleWebhook
import functions_framework
@functions_framework . http
def handleWebhook ( request ):
req = request . get_json ()
responseText = ""
intent = req [ "queryResult" ][ "intent" ][ "displayName" ]
if intent == "Default Welcome Intent" :
responseText = "Hello from a GCF Webhook"
elif intent == "get-agent-name" :
responseText = "My name is Flowhook"
else :
responseText = f "There are no fulfillment responses defined for Intent { intent } "
# You can also use the google.cloud.dialogflowcx_v3.types.WebhookRequest protos instead of manually writing the json object
res = { "fulfillmentMessages" : [{ "text" : { "text" : [ responseText ]}}]}
return res
Previous
arrow_back
Inline editor
Next
Webhook for slot filling
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
