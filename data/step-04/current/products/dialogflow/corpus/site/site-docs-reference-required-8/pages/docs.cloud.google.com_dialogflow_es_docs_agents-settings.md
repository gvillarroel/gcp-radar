---
title: "Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/agents-settings
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/agents-settings
  title: "Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Agent settings
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the various settings you can apply to an agent.
To access these settings:
Go to the Dialogflow ES console
Select your agent near the top of the left sidebar menu
Click the settings settings button next to the agent name
Note: If you're working on a small screen, and the sidebar menu is hidden,
click the menu menu button in the upper left corner.
Agent edition
Agents default to Dialogflow Trial Edition.
To change the edition for an agent:
Console
Note: Only project owners
are able to change the edition for an agent in
the Dialogflow Console.
Scroll to the bottom of the left sidebar menu,
where the agent edition is shown
Click the Edit or Upgrade link
Select a plan
API
Call the setAgent method for the
Projects resource .
Provide "TIER_ENTERPRISE" to the tier field to upgrade to the Dialogflow
Essentials edition or "TIER_STANDARD" to revert to the Dialogflow Trial
edition.
Note: The minimal permission required for using this method is
dialogflow.agents.create .
If you use multiple projects ,
the consumer project is used to determine the edition for quotas
and charges .
General
To access the general settings, click the General tab.
The following settings are available:
Description : Description of the agent.
Default Time Zone : Default time zone for the agent.
Date and time requests are resolved using this timezone
if the time zone is not provided in the API requests.
Agent Avatar URI : A URI for your agent's avatar used by some integrations.
Google Project : GCP project
linked to the agent.
Agent Webhook Protocol Version : Visible only in
V1 API legacy agents.
Allows you to switch to the V2 API
webhook format.
Beta Features : Toggle to enable beta features for the agent.
Log Settings :
Log interactions to Dialogflow :
Note: To view or change this setting with the console,
you must have the
IAM Project Owner role .
To read or change this setting with the API,
you must have one of the following
roles :
IAM Dialogflow API Admin,
IAM Editor,
or IAM Owner;
or a
custom role
containing the dialogflow.agents.create permission.
Indicates whether
Interaction logging
is enabled for the agent.
Log interactions to Google Cloud :
Note: To view or change this setting with the console,
you must have the
IAM Project Owner role .
This setting is not available in the API.
Indicates whether
Cloud logging
is enabled for the agent.
This option is only available if Log interactions to Dialogflow is enabled.
Disabling Dialogflow's logging will also disable this setting.
You can also click the Open logs link
to open your agent's logs in Cloud logging.
Delete Agent : Completely deletes the agent and cannot be undone.
If the agent is shared with other users,
those users must be removed from the agent before you can delete it.
See Agent management .
Languages
To access the language settings, click the Language tab.
You can set the default language and multiple additional languages.
For some root languages, you can also add one or more locales.
For more information, see Multilingual agents .
ML settings (machine learning)
To access the machine learning settings,
click the ML Settings tab.
Dialogflow agents use machine learning algorithms
to understand end-user expressions, match them to intents,
and extract structured data.
An agent learns from
training phrases
that you provide and the language models built into Dialogflow.
Based on this data,
it builds a model for making decisions
about which intent should be matched to an end-user expression.
This model is unique to your agent.
By default, Dialogflow updates your agent's machine learning model
every time you make changes to intents and entities,
import or restore an agent, or train your agent.
The following settings are available:
ML Classification Threshold :
To filter out false positive results and still get variety in
matched natural language inputs for your agent,
you can tune the machine learning classification threshold.
This setting controls the minimum
intent detection confidence
required for an intent match.
Note: Before adjusting this value,
you should try adding
negative examples .
Automatic Spell Correction :
If this is enabled and user input has a spelling or grammar mistake,
an intent will be matched as though it was written correctly.
The detect intent response will contain the corrected user input.
For example, if a user enters "I want an aple",
it will be processed as though the user entered "I want an apple".
This also applies to matches involving both system and custom entities.
Spell correction is available for all languages supported by Dialogflow.
Note: If original and corrected user input match different intents,
the intent matching the original user input is selected.
Warnings and best practices:
Spell correction can't correct ASR (automatic speech recognition)
errors, so we don't recommend enabling it for agents using ASR inputs.
It is possible for corrected input to match the wrong intent.
You can fix this by adding commonly mismatched phrases
to negative examples.
Spell correction increases the agent's response time slightly.
Spell correction should not be used with Actions on Google.
Spell correction is trained on general user queries.
If an agent is defined using domain-specific jargon,
the corrections may be undesired.
Automatic Training :
Enable or disable automatic agent training
each time the agent is modified.
Note: After restore or import ,
the agent is retrained, even if the automatic training is disabled.
Agent Validation :
See the
agent validation guide .
Export and import
Note: Dialogflow ES and Dialogflow CX agent types are incompatible.
You cannot import an incompatible agent.
To access the export and import settings,
click the Export and Import tab.
This feature allows you to export/import an agent to/from a zip file
for backing up agents or transferring them from one account to another.
While you can edit the JSON files directly and re-import them,
editing should be done using the Dialogflow Console or API.
This ensures that changes are validated by the system
and keeps troubleshooting to a minimum.
The following options are available:
Export as ZIP : Exports the agent as a zip file.
Restore from ZIP : Overwrites the current agent
with the supplied zip file.
Import from ZIP : Adds intents and entities to the current agent
from the supplied zip file.
If any existing intents or entities have the same name
as those in the zip file, they will be replaced.
These options are applied to the agent draft. To export an agent version,
load it to draft first.
The following are included in the export of an agent:
Intents
Entities
Most agent settings (see list below for excluded settings)
The following are not included in the export of an agent
and are not overwritten when importing or restoring:
Agent name
Inline editor
files package.json and index.json
Integration
settings
Edition
Knowledge bases and knowledge documents
Speech settings
Interaction logs
Maximum agent size (unzipped content) for agent import/restore should not exceed
50 MB.
Environments
To access the environments settings,
click the Environments tab.
Versions and environments allow you to deploy
multiple versions of your agent to separate, customizable environments.
For more information, see
Versions and Environments .
Speech
To access the speech settings,
click the Speech tab.
These are the settings for speech recognition and speech synthesis.
The following settings are available:
Improve Speech Recognition Quality
Enable Enhanced Speech Models and Data Logging :
See Data logging and enhanced speech models .
Enable Auto Speech Adaptation :
See Auto speech adaptation .
Text to Speech
Enable Automatic Text to Speech :
Automatically convert default text responses to speech in all conversations.
See Detect intent with audio output .
Voice Configuration :
Agent Language :
Choose the default language for voice synthesis.
Voice :
Choose a voice synthesis model.
Speaking Rate :
Adjusts the voice speaking rate.
Pitch :
Adjusts the voice pitch.
Volume Gain :
Adjust the audio volume gain.
Audio Effects Profile :
Select audio effects profiles you want applied to the synthesized voice.
Speech audio is optimized for the devices associated with the selected profiles
(for example, headphones, large speaker, phone call).
For a list of available profiles, see
Using device profiles for generated audio
in Text to Speech documentation.
Share
To access the share settings,
click the Share tab.
These settings are used to share agent access with other developers.
See Access control for more information.
Advanced
To access the advanced settings,
click the Advanced tab.
Currently, there is only one feature controlled from these settings.
For more information, see
Sentiment Analysis
Previous
arrow_back
Small talk
Next
Intents
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
