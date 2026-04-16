---
title: "Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/basics
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings
  title: "Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Agent settings
Stay organized with collections
Save and categorize content based on your preferences.
Agents have many settings that affect behavior.
Each console provides different settings.
Conversational Agents console agent settings
To access agent settings:
Console
Open the Conversational Agents console .
Choose your Google Cloud project.
Select your agent.
Click these settings icon in the top right corner.
Update the settings as desired.
Click Save .
API
See the get and patch/update methods for the Agent type.
Go to the Agent API reference
Select a protocol and version for the Agent reference:
Protocol
V3
V3beta1
REST
Agent resource
Agent resource
RPC
Agent interface
Agent interface
C++
AgentsClient
Not available
C#
AgentsClient
Not available
Go
AgentsClient
Not available
Java
AgentsClient
AgentsClient
Node.js
AgentsClient
AgentsClient
PHP
Not available
Not available
Python
AgentsClient
AgentsClient
Ruby
Not available
Not available
Close
The following subsections describe the different categories of agent settings.
General settings
The following general settings are available for agents:
Display name link
A human-readable name for your agent.
Time zone link
The default time zone for your agent.
Conversation start link
This setting determines whether your agent starts the conversation
with a generative playbook or a deterministic flow.
Agent location link
The agent region you selected when creating the agent.
Agent lock link
Lock the agent
Indicates whether the agent is locked.
A locked agent cannot be edited.
Logging settings link
Enable Cloud Logging
Indicates whether
Cloud logging
is enabled for the agent.
Enable conversation history
Indicates whether you would like Google to collect and store
redacted
end-user queries for quality improvement.
Note: Some features, such as
Experiments ,
Conversation history ,
BigQuery export ,
Analytics ,
and NLU model improvement require this setting to be enabled,
as they rely on traffic logs.
Specify a Cloud Storage URI to store and playback voice conversations
When conversation history is enabled,
you can provide a Cloud Storage URI,
and conversation audio will be saved in this location.
This field is synchronized with
advanced speech settings for audio export bucket .
You can optionally use the Browse Google cloud storage button,
which will open a bucket selection panel.
Enable consent-based end-user input redaction
If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging . By default the session parameter is true . If this setting is disabled, no redaction occurs.
User consent is collected using a boolean session parameter: $session.params.conversation-redaction . If this setting is enabled, and the session parameter is set to false , no redaction occurs (other redaction strategies still apply) . If this setting is enabled, and the session parameter is set to true , redaction occurs.
An example consent requesting flow could be: first ask the user if they would like to keep end-user input, and match the response with two intents, one is "yes intent" and the other is "no intent". Then, set the session parameter to false (no redaction) in the parameter presets of the "yes intent" route in fulfillment , and to true (redaction occurs) in the parameter preset of the "no intent" route.
BigQuery export link
Enable BigQuery export
Indicates whether
BigQuery export
is enabled.
BigQuery dataset
The BigQuery dataset name.
BigQuery table
The BigQuery table name.
Intent Suggestions link
You can enable
intent suggestions .
User feedback link
You can enable this setting to provide feedback about the quality of the agent's answers,
which includes thumbs up/down.
Git integration link
Use this setting to add a
Git integration .
Generative AI settings
The following generative AI settings are available:
General
Generative model selection link
Select the model used by generative features.
For more information,
see model versions .
Token limits
Input token limit link
Select the input token limit for the
generative model .
This is the maximum token size for input sent to the model.
Depending on the model, a
token
can be somewhere between one character and one word.
Smaller token limits have lower latency,
but the model input size is limited.
Larger token limits have higher latency,
but the model input size can be larger.
Output token limit link
Select the output token limit for the
generative model .
This is the maximum token size for output received from the model.
Depending on the model, a
token
can be somewhere between one character and one word.
Smaller token limits have lower latency,
but the model output size is limited.
Larger token limits have higher latency,
but the model output size can be larger.
Temperature link
The temperature for a LLM lets you control how creative
the responses are.
A low value provides more predictable responses.
A high value provides more creative or random responses.
Context token limits link
Note: This feature is restricted access.
The setting culls some past turns from the LLM
prompt in order to keep the prompt size from growing with every
sequential turn handled by the agent. This feature offers a way to
mitigate unwanted prompt size growth.
Normally, without truncation, each subsequent turn will be appended into
the "conversation history" of the LLM prompt regardless of whether it is
relevant to the current turn. This can ultimately lead to the prompt
increasing in size with every turn. As more of the prompt is taken up by
conversation history, less of the prompt can be used for few-shot
examples (so these might get dropped). Eventually, the prompt might also
breach current token limits. You can increase token sizes to accommodate
this, but keep in mind that increased prompt sizes also add to the LLM
response latency.
Context truncation lets you set a percentage of the token
budget to be reserved for conversation history, as a maximum.
Conversation turns are preserved in most recent to least recent order.
This setting can help you prevent token limits from being exceeded.
Regardless of which setting you choose, a minimum of two conversation
turns are preserved, in most recent to least recent order.
You must first set a token limit
before you can modify this setting.
Truncating context might cause some parameters to be
inadvertently be lost if they are part of culled turns. Evaluate your
playbook interactions carefully after enabling this option.
Token input budget is also used by the following:
System instructions and examples: Automatically added to the prompt.
This behavior cannot be modified.
Playbook instructions and goals: Any instructions and goals that you
write will be added to the prompt in their entirety.
Playbook few-shot examples: Are added either in order (by default) or
by an algorithm that you choose (such as regular expression best
match ordering). Examples are culled to fit within input token
budget after all other items are included.
Conversation history made up of user and agent utterances, flow and
playbook transition context, tool calls and outputs in the same
session from all previous turns sequentially handled by the current
playbook.
Banned phrases link
List of phrases that are banned for generative AI.
If a banned phrase appears in the prompt or the generated response,
the generation will fail.
Be aware that the list of banned phrases
has consequences on every query and LLM call
and will increase latency.
Safety filters link
Configure sensitivity levels of safety filters with respect to different
Responsible AI (RAI) categories.
Content will be assessed against the following four categories:
Category
Description
Hate speech
Negative or harmful comments targeting identity and/or protected attributes.
Dangerous content
Promotes or enables access to harmful goods, services, and/or activities
Sexually explicit content
Contains references to sexual acts and/or other lewd content
Harassment
Malicious, intimidating, bullying, and/or abusive comments targeting another individual
Content is blocked based on the probability that it's harmful. The sensitivity level can be customized by choosing one of Block none , Block few , Block some , and Block most for each category.
For more information, see configure safety attributes .
Prompt security link
You can check the enable prompt security check setting
to enable prompt security checks.
When enabled,
the agent will reject user queries that trigger the
security filter, including prompt injection attacks.
These attacks may be used to reveal parts of the agent prompt
or to provide responses the agent is not supposed to supply.
This is accomplished by sending an additional LLM prompt
that checks whether the user query is possibly malicious.
When enabled,
you can provide the following options:
Prompt security settings :
You can select either Default for default security settings
or Customize to clarify what user queries should
be considered safe or unsafe.
Select generative model :
This controls the LLM used for classification.
If you select Default (recommended),
a default model will be chosen for you,
which may automatically change
as newer and improved models become available.
Security prompt :
You can select either Default for a default security prompt
or Customize to provide instructions that assist
in classifying malicious user queries.
If you select Default ,
the prompt may automatically update for improvements.
Input threshold :
The minimum character length for a user query
before security checks are applied.
Small queries are more ambiguous and may be classified incorrectly.
Any queries smaller than the input threshold
will be treated as inherently safe.
Generative Fallback
Text prompt configuration link
See Generative fallback: define your own prompt .
Data Store
See Data store agent settings .
Deterministic Flows
These settings apply to all flows in this agent,
except for the ML settings which are applied per flow.
To edit other flow-specific settings,
navigate to the flow in the console and edit the settings there.
Intent training
Flows uses machine learning (ML) algorithms
to understand end-user inputs, match them to intents,
and extract structured data.
Flows learn from
training phrases
that you provide and the language models built into flows.
Based on this data,
it builds a model for making decisions
about which intent should be matched to an end-user input.
You can apply unique ML settings for each flow of an agent.
The following intent training settings are available:
Spell correction link
If this is enabled and end-user input has a spelling or grammar mistake,
an intent will be matched as though it was written correctly.
The detect intent response will contain the corrected end-user input.
For example, if an end-user enters "I want an applle",
it will be processed as though the end-user entered "I want an apple".
This also applies to matches involving both system and custom entities.
Spell correction is available in English, French, German, Spanish, and
Italian. It is available in all Dialogflow CX regions .
Note: If original and corrected end-user input match different intents,
the intent matching the original end-user input is selected.
Warnings and best practices:
Spell correction can't correct ASR (automatic speech recognition)
errors, so we don't recommend enabling it for agents using ASR inputs.
It is possible for corrected input to match the wrong intent.
You can fix this by adding commonly mismatched phrases to
negative examples .
Spell correction increases the agent's response time slightly.
If an agent is defined using domain-specific jargon,
the corrections may be undesired.
Flow-specific ML settings
NLU type link
This can be one of:
Advanced NLU (default): Advanced NLU technology. This NLU type works
better than standard, especially for large agents and flows.
Standard NLU : Standard NLU technology.
Will
no longer receive quality improvements or new features .
Auto train link
If enabled, the flow is trained whenever it is updated with the console.
For large flows, this may cause console UI delays,
so you should disable this setting
and manually train as needed for
large flows.
Classification threshold link
To filter out false positive results and still get variety in
matched natural language inputs for your agent, you can tune the machine
learning classification threshold. This setting controls the minimum intent
detection confidence required for an
intent match .
If the confidence score for an intent match is less than the threshold
value, then a
no-match event
will be invoked.
You can set a separate classification threshold value for every flow in each
language enabled for the agent. This is to accommodate different languages
performing best at different classification thresholds. For more information
about creating a multilingual agent, see the
multilingual agents documentation .
Note: Before adjusting this value,
you should try adding
negative examples .
Training status link
Indicates whether the flow has been trained since the latest update
to the flow data.
Train link
Use this button to manually train the flow.
Language link
The languages supported by your agent.
Once an agent is created, the default language cannot be changed.
However, you can perform the following:
Export your agent to the
JSON format .
Extract the downloaded file.
Find the agent.json file.
Update the defaultLanguageCode and supportedLanguageCodes
fields to the desired values.
Restore
the agent to the same or different agent from step 1.
Update language-specific training phrases and entity values as needed.
You can also enable language auto detection and switching.
Connectivity
Custom payload template link
In this section,
you can create descriptions and payloads for
custom payload templates .
Parameter definition link
Clearly state what parameters from the session parameters
will be sent to the webhook,
and what session parameters can be set
by the webhook's response.
Client certificate settings link
Used to upload SSL certificates.
Speech and IVR
Speech options
Text-to-Speech link
Languages and voices link
You can select the language and voice used for speech synthesis.
You may enable Custom voice for
your agent by selecting the custom voice option from the voice
name dropbox and specifying the custom voice name in the corresponding
field. The custom voice name must follow the following pattern:
projects/ PROJECT_ID /locations/ LOCATION /models/ MODEL_NAME .
You can also use
voice cloning .
If you are using telephony gateway, make sure the Dialogflow Service Agent service account
service- PROJECT_NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com
is granted with "AutoML Predictor" in your custom voice project.
For regular API calls, make sure the service account used to call Dialogflow CX is granted with "AutoML Predictor"
role in your custom voice project.
Voice pitch link
Controls the relative highness or lowness of the tone of speech.
Speaking rate link
Controls the speaking speed of the voice.
Override request-level synthesized speech configuration link
When enabled, the synthesized speech configuration specified in the
agent settings overrides the one specified in the API, partner
integration, or the conversation profile.
Pronunciation link
Use these settings to provide the agent with pronunciation of certain phrases,
using X-SAMPA phonetic encoding.
Speech-to-Text link
Enable auto speech adaptation link
See Auto speech adaptation .
Enable advanced speech settings link
For details about advanced speech options, see the
Advanced speech settings
guide.
DTMF settings link
See DTMF for telephony integrations for
more information.
Enable manual speech adaptation link
See manual speech adaptation .
Call companion
See Call companion .
UI Settings
You can use these settings to customize the
Messenger and Call Companion user interfaces.
Security
See Security settings
and
Access control .
Dialogflow CX console agent settings
To access agent settings:
Console
Open the console.
Choose your Google Cloud project.
Select your agent.
Click Agent Settings .
Update the settings as desired.
Click Save .
API
See the get and patch/update methods for the Agent type.
Go to the Agent API reference
Select a protocol and version for the Agent reference:
Protocol
V3
V3beta1
REST
Agent resource
Agent resource
RPC
Agent interface
Agent interface
C++
AgentsClient
Not available
C#
AgentsClient
Not available
Go
AgentsClient
Not available
Java
AgentsClient
AgentsClient
Node.js
AgentsClient
AgentsClient
PHP
Not available
Not available
Python
AgentsClient
AgentsClient
Ruby
Not available
Not available
Close
General settings
The following general settings are available for agents:
Display name
A human-readable name for your agent.
Time zone
The default time zone for your agent.
Default language
The default language supported by your agent.
Once an agent is created, the default language cannot be changed.
However, you can perform the following:
Export your agent to the
JSON format .
Unzip the downloaded file.
Find the agent.json file.
Update the defaultLanguageCode and supportedLanguageCodes
fields to the desired values.
Restore
the agent to the same or different agent from step 1.
Update language-specific training phrases and entity values as needed.
Agent lock
Lock the agent
Indicates whether the agent is locked.
A locked agent cannot be edited.
Logging settings
Enable Cloud Logging
Indicates whether
Cloud logging
is enabled for the agent.
Enable conversation history
Indicates whether you would like Google to collect and store
redacted
end-user queries for quality improvement.
Note: Some features, such as
Experiments ,
Conversation history ,
BigQuery export ,
Analytics ,
and NLU model improvement require this setting to be enabled,
as they rely on traffic logs.
Enable consent-based end-user input redaction
If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true . If this setting is disabled, no redaction occurs.
User consent is collected using a boolean session parameter: $session.params.conversation-redaction . If this setting is enabled, and the session parameter is set to false , no redaction occurs (other redaction strategies still apply) . If this setting is enabled, and the session parameter is set to true , redaction occurs.
An example consent requesting flow could be: first ask the user if they would like to keep end-user input, and match the response with two intents, one is "yes intent" and the other is "no intent". Then, set the session parameter to false (no redaction) in the parameter presets of the "yes intent" route in fulfillment , and to true (redaction occurs) in the parameter preset of the "no intent" route.
BigQuery export
Enable BigQuery export
Indicates whether
BigQuery export
is enabled.
BigQuery dataset
The BigQuery dataset name.
BigQuery table
The BigQuery table name.
Intent Suggestions
You can enable
intent suggestions .
Custom payload template
In this section,
you can create descriptions and payloads for
custom payload templates .
ML settings
Dialogflow CX uses machine learning (ML) algorithms
to understand end-user inputs, match them to intents,
and extract structured data.
Dialogflow CX learns from
training phrases
that you provide and the language models built into Dialogflow CX.
Based on this data,
it builds a model for making decisions
about which intent should be matched to an end-user input.
You can apply unique ML settings for each flow of an agent,
and the model created by Dialogflow CX is unique for each flow.
The following agent-wide ML settings are available:
Allow ML to correct spelling
If this is enabled and end-user input has a spelling or grammar mistake,
an intent will be matched as though it was written correctly.
The detect intent response will contain the corrected end-user input.
For example, if an end-user enters "I want an applle",
it will be processed as though the end-user entered "I want an apple".
This also applies to matches involving both system and custom entities.
Spell correction is available in English, French, German, Spanish, and
Italian. It is available in all Dialogflow CX regions .
Note: If original and corrected end-user input match different intents,
the intent matching the original end-user input is selected.
Warnings and best practices:
Spell correction can't correct ASR (automatic speech recognition)
errors, so we don't recommend enabling it for agents using ASR inputs.
It is possible for corrected input to match the wrong intent.
You can fix this by adding commonly mismatched phrases to
negative examples .
Spell correction increases the agent's response time slightly.
If an agent is defined using domain-specific jargon,
the corrections may be undesired.
The following flow-specific ML settings are available:
NLU type
This can be one of:
Advanced NLU (default): Advanced NLU technology. This NLU type works
better than standard, especially for large agents and flows.
Standard NLU : Standard NLU technology.
Will
no longer receive quality improvements or new features .
Auto train
If enabled, the flow is trained whenever it is updated with the console.
For large flows, this may cause console UI delays,
so you should disable this setting
and manually train as needed for
large flows.
Classification threshold
To filter out false positive results and still get variety in
matched natural language inputs for your agent, you can tune the machine
learning classification threshold. This setting controls the minimum intent
detection confidence required for an
intent match .
If the confidence score for an intent match is less than the threshold
value, then a
no-match event
will be invoked.
You can set a separate classification threshold value for every flow in each
language enabled for the agent. This is to accommodate different languages
performing best at different classification thresholds. For more information
about creating a multilingual agent, see the
multilingual agents documentation .
Note: Before adjusting this value,
you should try adding
negative examples .
Training status
Indicates whether the flow has been trained since the latest update
to the flow data.
Train NLU
Use this button to manually train the flow.
Generative AI settings
The following generative AI settings are available:
General
Banned phrases
List of phrases that are banned for generative AI.
If a banned phrase appears in the prompt or the generated response,
the generation will fail.
Safety filters
Configure sensitivity levels of safety filters with respect to different Responsible AI (RAI) categories. Content will be assessed against the following four categories:
Category
Description
Hate speech
Negative or harmful comments targeting identity and/or protected attributes.
Dangerous content
Promotes or enables access to harmful goods, services, and activities
Sexually explicit content
Contains references to sexual acts or other lewd content
Harassment
Malicious, intimidating, bullying, or abusive comments targeting another individual
Content is blocked based on the probability that it's harmful. The sensitivity level can be customized by choosing one of Block none , Block few , Block some , and Block most for each category.
For more information, see configure safety attributes .
Prompt security
You can check the enable prompt security check setting
to enable prompt security checks.
When enabled,
the agent will attempt to prevent prompt injection attacks.
These attacks may be used to reveal parts of the agent prompt
or to provide responses the agent is not supposed to supply.
This is accomplished by sending an additional LLM prompt
that checks whether the user query is possibly malicious.
Generative Agent
Note: This setting has restricted access.
Generative model selection
Select the model used by generative features.
For more information,
see model versions .
Playbook context truncation
Playbook context truncation culls some past turns from the playbook
prompt in order to keep the prompt size from growing with every
sequential turn handled by the playbook. This feature offers a way to
mitigate unwanted prompt size growth.
Normally, without truncation, each subsequent turn will be appended into
the "conversation history" of the LLM prompt regardless of whether it is
relevant to the current turn. This can ultimately lead to the prompt
increasing in size with every turn. As more of the prompt is taken up by
conversation history, less of the prompt can be used for few-shot
examples (so these might get dropped). Eventually, the prompt might also
breach current token limits. You can increase token sizes to accommodate
this, but keep in mind that increased prompt sizes also add to the LLM
response latency.
Playbook context truncation lets you set a percentage of the token
budget to be reserved for conversation history, as a maximum.
Conversation turns are preserved in most recent to least recent order.
This setting can help you prevent token limits from being exceeded.
Regardless of which setting you choose, a minimum of two conversation
turns are preserved, in most recent to least recent order.
You must first set a
token limit
before you can modify this setting.
Important: Truncating context might cause some parameters to be
inadvertently be lost if they are part of culled turns. Evaluate your
playbook interactions carefully after enabling this option.
Token input budget is also used by the following:
System instructions and examples: Automatically added to the prompt.
This behavior cannot be modified.
Playbook instructions and goals: Any instructions and goals that you
write will be added to the prompt in their entirety.
Playbook few-shot examples: Are added either in order (by default) or
by an algorithm that you choose (such as regular expression best
match ordering). Examples are culled to fit within input token
budget after all other items are included.
Conversation history made up of user and agent utterances, flow and
playbook transition context, tool calls and outputs in the same
session from all previous turns sequentially handled by the current
playbook.
Generative Fallback
Text prompt configuration
See Generative fallback: define your own prompt .
Data Store
See Data store agent settings .
Speech and IVR settings
The following speech and IVR settings are available:
Text-to-Speech
Voice selection
Note: SSML Tags are not supported for Chirp3-HD voices. If you want
to use Chirp3-HD voices, you must remove all SSML tags and test the
results to assess if the quality meet your needs.
You can select the language and voice used for speech synthesis.
You may enable Custom voice for
your agent by selecting the custom voice option from the voice
selection dropbox and specifying the custom voice name in the corresponding
field. The custom voice name must follow the following pattern:
projects/ PROJECT_ID /locations/ LOCATION /models/ MODEL_NAME .
If you are using telephony gateway, make sure the Dialogflow Service Agent service account
service- PROJECT_NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com
is granted with "AutoML Predictor" in your custom voice project.
For regular API calls, make sure the service account used to call Dialogflow CX is granted with "AutoML Predictor"
role in your custom voice project.
Speech-to-Text
Enable auto speech adaptation
See Auto speech adaptation .
Advanced speech settings
For details about advanced speech options, see the
Advanced speech settings
guide.
DTMF
See DTMF for telephony integrations for
more information.
Multimodal
See Call companion .
Share settings
See Access control .
Languages settings
Add additional language support to your agent.
For the full list of languages, see the
language reference .
Language auto detection
When you configure
language auto detection ,
your chat agent will automatically detect the end-user's language and switch to
that language. See the
language auto detection documentation
for details.
Security settings
See Security settings .
Advanced settings
Currently, the only advanced setting is for
sentiment analysis .
Vertex AI Agent Builder console settings
This section describes the settings available for agent apps.
General
The following general settings are available for agent apps:
Display name
A human-readable name for your agent app.
Location
The agent app region.
App lock
If enabled,
changes to the agent app are not permitted.
Logging
The following logging settings are available for agent apps:
Enable Cloud Logging
If enabled,
logs will be sent to Cloud Logging .
Enable Conversation History
If enabled,
conversation history
will be available.
Indicates whether you would like Google to collect and store redacted end-user queries
for quality improvement.
This setting does not affect whether conversation history is used
to generate agent responses.
Enable BigQuery Export
If enabled,
conversation history is exported to BigQuery.
The Enable Conversation History setting must also be enabled.
GenAI
The following generative AI settings are available for agent apps:
Generative model selection
Select the
generative model
that agents should use by default.
Input token limit
Select the input token limit for the
generative model .
This is the maximum token size for input sent to the model.
Depending on the model, a
token
can be somewhere between one character and one word.
Smaller token limits have lower latency,
but the model input size is limited.
Larger token limits have higher latency,
but the model input size can be larger.
Output token limit
Select the output token limit for the
generative model .
This is the maximum token size for output received from the model.
Depending on the model, a
token
can be somewhere between one character and one word.
Smaller token limits have lower latency,
but the model output size is limited.
Larger token limits have higher latency,
but the model output size can be larger.
Temperature
The temperature for a LLM lets you control how creative
the responses are.
A low value provides more predictable responses.
A high value provides more creative or random responses.
Banned phrases
List of phrases that are banned for generative AI.
If a banned phrase appears in the prompt or the generated response,
the agent will return a fallback response instead.
Safety filters
Configure sensitivity levels of safety filters with respect to different Responsible AI (RAI) categories. Content will be assessed against the following four categories:
Category
Description
Hate speech
Negative or harmful comments targeting identity and/or protected attributes.
Dangerous content
Promotes or enables access to harmful goods, services, and activities
Sexually explicit content
Contains references to sexual acts or other lewd content
Harassment
Malicious, intimidating, bullying, or abusive comments targeting another individual
Content is blocked based on the probability that it's harmful. The sensitivity level can be customized by choosing one of Block none (disabling RAI checks), Block few (blocking only high-probability instances of harmful content), Block some (medium and high probability instances), and Block most (low, medium, and high probability) for each category.
For more information, see configure safety attributes .
Prompt security
You can check the enable prompt security check setting
to enable prompt security checks.
When enabled,
the agent will attempt to prevent prompt injection attacks.
These attacks may be used to reveal parts of the agent prompt
or to provide responses the agent is not supposed to supply.
This is accomplished by sending an additional LLM prompt
that checks whether the user query is possibly malicious.
Git
These settings provide a Git integration.
Follow the instructions to configure the integration.
Previous
arrow_back
Zip code collection
Next
Speech models
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
