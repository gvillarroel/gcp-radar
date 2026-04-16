---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.794Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Session entities with fulfillment"
feature_slug: "session-entities-with-fulfillment"
latest_feature_date: "2019-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-session"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook"
keywords:
  - "session"
  - "fulfillment"
  - "create"
  - "entities"
---

# Session entities with fulfillment

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow can create session entities from fulfillment.

## Extended Definition

Dialogflow can create session entities from fulfillment.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-session](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-session)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook)

## Supporting Pages

### "Create fulfillment using webhook \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook)
- Source ID: `site-iam-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Create fulfillment using webhook Stay organized with collections Save and categorize content based on your preferences.
- To create a webhook using Dialogflow's inline editor, follow these steps: Click the Fulfillment tab on the navigation bar to go to the fulfillment page.
- See https://cloud.google.com/dialogflow/es/docs/reference/common-types#webhookrequest @param response: Express JS response object @param ssml: SSML string. @example: sendSSML(request, response, 'hello') Will call response.json() with SSML payload '<speak>hello</speak>' / function sendSSML ( request , response , ssml ) { ssml = <speak> ${ ssml } < /speak> ; if ( request . originalDetectIntentRequest . source == 'GOOGLE TELEPHONY' ) { // Dialogflow Phone Gateway Response // see https://cloud.google.com/dialogflow/es/docs/reference/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Intent.Message.TelephonySynthesizeSpeech response . json ({ fulfillmentMessages : [{ platform : 'TELEPHONY' , telephonySynthesizeSpeech : { ssml : ssml } }] }); } else { // Some CCAI telephony partners accept SSML in a plain text response. // Check your specific integration and customize the payload here. response . json ({ fulfillmentText : ssml }); } } / Extract an output context from the incoming WebhookRequest. @param request: Dialogflow WebhookRequest JSON with camelCase keys.
- See the License for the specific language governing permissions and limitations under the License. / 'use strict' ; const functions = require ( 'firebase-functions' ); // TODO: set this to the minimum valid length for your sequence. // There's no logic in here to enforce this length, but once the // user has said this many digits, the slot-filling prompt will // also instruct the user to say "that's all" to end the slot-filling. const MIN SEQUENCE LENGTH = 10 ; exports . dialogflowFirebaseFulfillment = functions . https . onRequest (( request , response ) = > { let dfRequest = request . body ; let action = dfRequest . queryResult . action ; switch ( action ) { case 'handle-sequence' : handleSequence ( dfRequest , response ); break ; case 'validate-sequence' : validateSequence ( dfRequest , response ); break ; default : response . json ({ fulfillmentText : Webhook for action " ${ action } " not implemented. }); } }); //// // Helper functions / Send an SSML response. @param request: Dialogflow WebhookRequest JSON with camelCase keys.

### Session entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-session](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-session)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Session entities can extend or replace custom entity types and only exist during the session that they were created for.
- You can create special entities, called session entities , or user entities , during a session.
- Go to the SessionEntityType API reference Select a protocol and version for the SessionEntityType reference: Protocol V3 V3beta1 REST SessionEntityType resource SessionEntityType resource RPC SessionEntityType interface SessionEntityType interface C++ SessionEntityTypesClient Not available C# SessionEntityTypesClient Not available Go SessionEntityTypesClient Not available Java SessionEntityTypesClient SessionEntityTypesClient Node.js SessionEntityTypesClient SessionEntityTypesClient PHP Not available Not available Python SessionEntityTypesClient SessionEntityTypesClient Ruby Not available Not available Close Previous arrow back Custom entities Next Regexp entities arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Session entities Stay organized with collections Save and categorize content based on your preferences.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- You can create special entities, called session entities, during a session.
- You can create special entities, called session entities, during a session.
- Create Session Entity Type Request The request message for SessionEntityTypes.CreateSessionEntityType . com. google. cloud. dialogflow. v2.
- Batch Create Entities Request The request message for EntityTypes.BatchCreateEntities . com. google. cloud. dialogflow. v2.

