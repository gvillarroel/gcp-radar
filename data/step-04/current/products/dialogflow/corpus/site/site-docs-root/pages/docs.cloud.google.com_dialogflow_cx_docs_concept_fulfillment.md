---
title: "Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment
  title: "Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Fulfillments
Stay organized with collections
Save and categorize content based on your preferences.
For an agent's conversational turn,
the agent must respond to the end-user with an answer to a question,
a query for information, or session termination.
Your agent may also need to contact your service to
generate dynamic responses or take actions for a turn.
Fulfillment
is used to accomplish all of this.
A fulfillment may contain any of the following:
Static response messages.
Webhook calls for dynamic responses and/or to take actions.
Parameter presets to set or override parameter values.
During an agent's turn,
it is possible (and sometimes desirable) to call multiple fulfillments,
each of which may generate a response message.
Dialogflow CX maintains these responses in a response queue .
Once the agent's turn is over,
Dialogflow CX sends the ordered responses to the end-user.
Fulfillment use cases
Fulfillment is used everywhere that a response message is needed:
Page entry fulfillment
Routes
Event handlers
Initial prompts for forms
Reprompt handlers for forms
For each of these use cases,
the console will open a fulfillment editing panel.
Agent responses (dialogue options)
Agent response messages are agent responses that you define at design-time.
You define them when creating fulfillment. At runtime, these responses are added
to the response queue .
There are several types of response messages, which are described in the
following subsections. When using the console,
a fulfillment panel has an initial Agent dialogue card,
but you can click + Add dialogue response to add more cards for other
response message types.
Static text response
Static text response messages send text dialogue to the end-user. If your detect
intent API calls or integration calls use speech synthesis, this text will be
used to generate audio content. In this case, supplied text can optionally use
the Speech Synthesis Markup Language (SSML) .
You can define multiple text response cards, and multiple text responses within
each card. If you define multiple cards, they are concatenated for a single
response at runtime. If you define multiple responses within a card, one of the
messages in the card is chosen at random at runtime.
These text messages can contain
parameter references and
inline system functions .
Custom payload
Some integrations
support a custom payload response to handle rich responses.
These custom payloads must be supplied in the JSON format
defined in the integration's documentation. For example, see the
Dialogflow CX Messenger custom payload format .
You can include parameter references
in your custom payload JSON. They should be treated as JSON string values,
so make sure to wrap them in double quotes. For example:
{
"someField": "$session.params.date"
}
Note: Custom payload JSON must be limited to 24 levels of depth.
You can also send a custom payload to integrations that you develop.
It won't be processed by Dialogflow CX, so you need to handle it in your own
business logic.
Also see the following custom payload templates
section.
Live agent handoff
This response signals to the detect intent API caller that the conversation
should be handed off to a human agent. Dialogflow CX only uses this signal to
identify conversations that are handed off for measurement purposes, and it does
not alter the session state in any way. Your system or integration can use this
signal to take whatever actions are necessary to hand off the conversation.
Dialogflow CX doesn't impose any structure on this data, so you can choose any
structure that suits your system.
Conversation success metadata
This response signals to the detect intent API caller that the conversation
with the Dialogflow CX agent succeeded. Dialogflow CX only uses this signal to
identify conversations that succeeded for measurement purposes, and it does not
alter the session state in any way. Your system or integration can use this
signal to take whatever actions are necessary. Dialogflow CX doesn't impose any
structure on this data, so you can choose any structure that suits your system.
Play prerecorded audio
This response plays an audio file for
integrations
that support this feature.
Audio file format requirements might differ for different integrations.
For example, see the requirements
for Dialogflow CX Phone Gateway.
For
partner telephony integrations ,
the URL for the audio file must be accessible by the partner.
A publicly available URL, such as a
public file in Cloud Storage ,
is always accessible by the partner. The partner may also provide restricted
access for audio files. See the partner documentation for details.
Output audio text
This response is similar to the text response,
however it is only applicable to speech synthesis.
If your agent can handle both text and voice sessions,
you can use unique text and output audio text responses
to create a different user experience for text versus voice.
If output audio text is supplied for a voice session,
the plain text responses are ignored.
If your agent handles both text and voice sessions,
and you want the same response messages,
just use text responses for both text and voice sessions.
Output audio text is concatenated similar to text responses.
If the output audio text responses are a mixture of text and SSML,
the concatenated result is treated as SSML.
The agent designer should ideally use either text or SSML consistently.
Conditional response
This response type is used for conditional responses.
The general format is:
if [condition]
[response]
elif [condition]
[response]
elif [condition]
[response]
else
[response]
endif
where:
[condition] is the same format that is used for
route conditions
[response] is a text response
elif and else blocks are optional
For example:
if $session.params.user-age >= 21
Ok, you may enter.
else
Sorry, you cannot enter.
endif
Both [condition] and [response] can use inline
system functions to generate dynamic values during conversations.
For more information, please check the references of
system functions and
route conditions . The
[condition] is resolved based on the session state at the beginning of the
fulfillment. If the [response] relies on the session state, it is resolved
based on the updated session state at the end of fulfillment.
For multilingual agents ,
[condition] is common for all languages, while [response]
is language-specific. When you change [condition] for one language
in the console, this part is updated in all agent's languages, and,
since it becomes a new condition, [response] is cleared for
all languages other than the language you selected when updating [condition] .
Telephony transfer call
Note: Call transfer is only available for
Dialogflow CX Phone Gateway .
For some telephony integrations,
you can specify a US phone number for call transfer.
At runtime, when the Dialogflow CX virtual agent
calls a fulfillment with call transfer,
the call is transferred to the specified number
and virtual agent handling is suspended.
Data store tool response
This response type configures agent responses returned from linked
data store tools . If
you configured a data store tool in this fulfillment, a data store tool response
card is populated automatically.
Source links : Lets you set the maximum number of citations that will be
returned to the user after the response. A citation is a link to the source
of information in the data store, rendered as buttons. The default is 1.
Inline citations : Rather than links listed after the response, this
field lets you limit the number of inline citations returned per sentence .
Generative fallback : Checking this box tells the agent to attempt an AI-
generated response if data store returns an empty result. If it fails, it
will move on to static responses.
Static responses : You can enter static text responses in the
final field. These are sent to the user word-for-word.
Channel-specific response messages
When defining fulfillment,
you can create channel-specific response messages ,
so you can create targeted responses for text chat, voice, SMS,
specific integrations that support channels, and so on.
Any response messages that are not specific to a channel
are called default response messages .
At runtime,
Dialogflow CX will select either the default response message,
or a channel-specific response message
when a detect intent request specifies a channel.
As a best practice,
you should define default response messages,
even if you are using channel-specific response messages.
The default response messages can act as a fallback
when your system fails to provide a valid channel.
A channel name is a custom field that you can set to any text.
If you are using the Dialogflow CX API directly for runtime calls,
you can use any channel names that you like.
If you are using an existing integration,
you must use the channel names that the integration recognizes.
Setting channel-specific response messages at design-time
To provide channel-specific response messages for fulfillment
when using the console:
Click Add channel after adding default response messages.
The user interface will allow you to add channel-specific response messages.
Click Add channel again to add a different channel.
To provide channel-specific response messages for fulfillment
when using the API:
Set the Fulfillment.messages[i].channel field to the desired channel
for each response message.
If this field is not set,
the response is a default response message.
Utilizing channel-specific response messages at runtime
Note: If you are using an existing integration that supports channels,
the integration implementation performs the steps below.
To receive a channel-specific response message,
the channel must be specified in the detect intent request message.
See the queryParams.channel field in the detectIntent method
of the Sessions type.
Go to the Session API reference
Select a protocol and version for the Session reference:
Protocol
V3
V3beta1
REST
Session resource
Session resource
RPC
Session interface
Session interface
C++
SessionsClient
Not available
C#
SessionsClient
Not available
Go
SessionsClient
Not available
Java
SessionsClient
SessionsClient
Node.js
SessionsClient
SessionsClient
PHP
Not available
Not available
Python
SessionsClient
SessionsClient
Ruby
Not available
Not available
Close
If no channel is defined in a request,
or no matching channel is found in fulfillment,
the default response message will be returned by Dialogflow CX.
Custom payload templates
If you use custom payloads often,
you should use custom payload templates .
Custom payloads are sometimes large and complex,
so using templates can help make the agent creation process easier.
You can provide these templates in your agent settings,
which makes them available for selection
whenever you create fulfillment for your agent.
For example,
the JSON payload for "yes" and "no" buttons can be defined
as custom payload templates.
When creating fulfillment that requires these buttons,
you only need to select the template when creating fulfillment.
When you select a template for a fulfillment custom payload,
the contents of the template are inserted into the payload.
You can then edit the payload as needed.
If you change a template,
the change does not propagate automatically to all fulfillment payloads
where it has been referenced.
To create a custom payload template, see the
agent general settings .
To select a custom payload template when creating fulfillment,
click Select template when creating a fulfillment custom payload.
Webhook calls
When a fulfillment is called,
and the fulfillment has a
webhook ,
the agent sends a request to your webhook.
Your webhook can take any actions necessary within your service,
provide a dynamic response message,
override parameter values,
and change the current page.
The following describes webhook settings for fulfillment:
Term
Definition
Enable webhook
This enables webhook for the fulfillment.
Webhook
Select the webhook resource.
Tag
The text tag you provide here will get populated in the WebhookRequest.fulfillmentInfo.tag field of the webhook request sent to your webhook service. This can be used to control the webhook behavior in a way that is fulfillment-specific.
Return partial response
Allows cancellation of a partial response playback. See advanced speech settings for details.
Parameter presets
You can use a fulfillment to provide presets that set or override
current parameter values.
These presets will be applied before resolving static response messages or
calling a webhook.
You can also use
system functions
to preset the parameter to a dynamically generated value.
Some examples include:
Setting a parameter now to the current time:
Parameter
Value
now
$sys.func.NOW()
Incrementing an existing parameter counter by 1:
Parameter
Value
counter
$sys.func.ADD($session.params.counter, 1)
Setting a parameter new-cost to the other-cost parameter value,
while maintaining the full composite object value:
Parameter
Value
new-cost
$sys.func.IDENTITY($session.params.other-cost)
Data store tools
See the data store tools documentation
for more information about this feature.
Advanced speech settings
These advanced speech settings
can optionally override the same
page speech settings ,
flow speech settings ,
and
agent speech settings .
Response queue
During an agent's turn,
it is possible (and sometimes desirable) to call multiple fulfillments,
each of which may generate a response message.
Dialogflow CX maintains these responses in a response queue .
Partial response for streaming API
By default, Dialogflow CX only sends the ordered responses to the end-user
once the agent's turn is over. You can also enable the
Return partial response option in fulfillment to return
currently queued responses as a partial response when using the streaming APIs.
See Lifecycle of a page for more
details.
For example, if your webhook will likely run for a long time, you can
add a static response in the fulfillment and enable partial response. This makes
Dialogflow CX flush the response queue and send all messages as a partial
response before calling the webhook.
Partial response is not currently supported for the following,
but it will be supported later:
Audio inputs in the
simulator .
Partner telephony integrations
may or may not support partial response at this time.
See the partner documentation to verify.
To test this feature in the simulator, you need to turn on partial response.
In the following example, consider that your webhook takes 5 seconds to
complete, and you don't enable partial response. The Dialogflow CX agent's
conversational turn is not over until the webhook completes. During this 5
second turn, responses are queued while waiting for the webhook, and they are
not returned to the end-user until the turn is complete.
This leads to a bad user experience.
If you enable partial response in the first fulfillment, Dialogflow CX returns the
first fulfillment message quickly and calls the webhook. After the webhook is
completed, Dialogflow CX returns the final response. The end-user experience is
improved in this scenario, because they are told to expect a short wait. In
addition, the webhook call is executing concurrently with a response being sent
to the end-user.
Speech Synthesis Markup Language (SSML)
You can use Speech Synthesis Markup Language (SSML)
in text or output audio text fulfillment fields.
This allows you to customize your audio response
by providing details on pauses, and audio formatting for acronyms, dates,
times, abbreviations, or text that should be censored.
For syntax details, see the
Text-to-speech SSML documentation .
Note: A fulfillment field can have no more than one
<speak></speak> tag pair.
Previous
arrow_back
Parameters
Next
Webhooks
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
