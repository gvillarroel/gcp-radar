---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.496Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Mutual TLS authentication for webhooks"
feature_slug: "mutual-tls-authentication-for-webhooks"
latest_feature_date: "2019-12-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook"
  - "https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters"
  - "https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent"
keywords:
  - "mutual"
  - "tls"
  - "authentication"
  - "webhooks"
  - "dialogflow"
  - "supports"
  - "securing"
  - "trusting"
---

# Mutual TLS authentication for webhooks

Product: Dialogflow
Coverage: LOW

## Step 02 Summary

Dialogflow supports mutual TLS authentication for securing and trusting webhook traffic.

## Extended Definition

Dialogflow supports mutual TLS authentication for securing and trusting webhook traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook)
- [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent)

## Supporting Pages

### "Create fulfillment using webhook \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-fulfillment-using-webhook)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- See https://cloud.google.com/dialogflow/es/docs/reference/common-types#webhookrequest @param response: Express JS response object @param ssml: SSML string. @example: sendSSML(request, response, 'hello') Will call response.json() with SSML payload '<speak>hello</speak>' / function sendSSML ( request , response , ssml ) { ssml = <speak> ${ ssml } < /speak> ; if ( request . originalDetectIntentRequest . source == 'GOOGLE TELEPHONY' ) { // Dialogflow Phone Gateway Response // see https://cloud.google.com/dialogflow/es/docs/reference/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Intent.Message.TelephonySynthesizeSpeech response . json ({ fulfillmentMessages : [{ platform : 'TELEPHONY' , telephonySynthesizeSpeech : { ssml : ssml } }] }); } else { // Some CCAI telephony partners accept SSML in a plain text response. // Check your specific integration and customize the payload here. response . json ({ fulfillmentText : ssml }); } } / Extract an output context from the incoming WebhookRequest. @param request: Dialogflow WebhookRequest JSON with camelCase keys.
- See the License for the specific language governing permissions and limitations under the License. / 'use strict' ; const functions = require ( 'firebase-functions' ); // TODO: set this to the minimum valid length for your sequence. // There's no logic in here to enforce this length, but once the // user has said this many digits, the slot-filling prompt will // also instruct the user to say "that's all" to end the slot-filling. const MIN SEQUENCE LENGTH = 10 ; exports . dialogflowFirebaseFulfillment = functions . https . onRequest (( request , response ) = > { let dfRequest = request . body ; let action = dfRequest . queryResult . action ; switch ( action ) { case 'handle-sequence' : handleSequence ( dfRequest , response ); break ; case 'validate-sequence' : validateSequence ( dfRequest , response ); break ; default : response . json ({ fulfillmentText : Webhook for action " ${ action } " not implemented. }); } }); //// // Helper functions / Send an SSML response. @param request: Dialogflow WebhookRequest JSON with camelCase keys.
- See https://cloud.google.com/dialogflow/es/docs/reference/common-types#webhookrequest @param name: A string @return: The context object if found, or undefined @see: https://cloud.google.com/dialogflow/es/docs/reference/rpc/google.cloud.dialogflow.v2#google.cloud.dialogflow.v2.Context and note this webhook uses JSON camelCase instead of RPC snake case. @example: // Modify an existing output content let context = getOutputContext(request, 'some-context'); context.lifespanCount = 5; context.parameters.some parameter = 'new value'; response.json({ fulfillmentText: 'new value set', outputContexts: [context] }); / function getOutputContext ( request , name ) { return request . queryResult . outputContexts . find ( context = > context . name . endsWith ( /contexts/ ${ name } ) ); } //// // Action handler functions / Fulfillment function for: actions: handle-sequence intents: "Sequence", "Sequence - Edit" @param request: Dialogflow WebhookRequest JSON with camelCase keys.
- See https://cloud.google.com/dialogflow/es/docs/reference/common-types#webhookrequest @param response: Express JS response object / function handleSequence ( request , response ) { let parameters = request . queryResult . parameters ; let isSlotFilling = ! request . queryResult . allRequiredParamsPresent ; let isEditing = getOutputContext ( request , 'editing-sequence' ); console . log ( request . queryResult . action + ': ' + JSON . stringify ( parameters )); if ( isSlotFilling ) { // Prompt the user for the sequence let verbatim = <prosody rate="slow"><say-as interpret-as="verbatim"> ${ parameters . existing sequence } < /say-as></prosody> ; if ( ! parameters . existing sequence && ! parameters . new sequence ) { // Initial prompt response . json ({ fulfillmentText : "What is your sequence?

### Actions and parameters \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can retrieve the explicit partial match, where Dialogflow substitutes the unknown part with U s using the following format: $parameter-name.partial You can retrieve the nearest date in the past using the following format: $parameter-name.recent For example, if today's date is August 11, 2021, your parameter name is date , and the user says "August 13": Parameter reference Resolved value $date 2021-08-13 $date.partial UUUU-08-13 $date.recent 2020-08-13 Parameter reference for a composite entity Composite entities are entities that contain other sub-entities.
- Parameter reference for ambiguous dates When a parameter is associated with the @sys.date system entity, and the end-user supplies a partial date (not specifying month, day, and year), Dialogflow will match to the nearest date in the future.
- User : Medium Agent : Got it, that was three black t-shirts in medium If the end-user supplies data for more than one parameter in a single expression, Dialogflow collects the data provided and continues asking for the missing data.
- When an intent is matched at runtime, the Dialogflow agent continues collecting information from the end-user until the end-user has provided data for each of the required parameters.

### Before you begin \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, when you prompt "what's your order number" and an end-user replies "no I want to place an order", the regexp will reject and Dialogflow will know to look for another intent that might match that phrase.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Before you begin Stay organized with collections Save and categorize content based on your preferences.
- Before trying this tutorial, you should be familiar with Dialogflow basics covered in Quickstarts .
- Create an agent Use the Dialogflow ES console to create an agent named "PackageTracker".

