---
title: "Dialogflow CX release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/release-notes
  title: "Dialogflow CX release notes \_|\_ Google Cloud Documentation"
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
Resources
Send feedback
Dialogflow CX release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Dialogflow CX. We recommend
that Dialogflow CX developers periodically check this list for any
new announcements. Major changes will also be announced via Cloud Blog: AI & Machine Learning .
Note: You can also read the
historic release notes
prior to November 16, 2017.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
December 11, 2025
Feature
Conversational Agents (Dialogflow CX) : New Responsible AI fields are now available for the v3 and v3beta1 API endpoints. Responsible AI allows you to flag, filter or block harmful content.
Security
Conversational Agents (Dialogflow CX) : Dialogflow CX Messenger integration contained a vulnerability that allowed for authentication bypass when an agent was configured to use an authenticated API with a 3rd party identity. All versions released after August 20th, 2025 have been updated to protect from this vulnerability. No user action is required.
Feature
Conversational Agents (Dialogflow CX) : Conversational Agents now supports log splitting for large Cloud Logging log entries .
November 13, 2025
Feature
Conversational Agents (Dialogflow CX) : Regular expression validation (Regex) is now available in Agent Settings and Entity Types.
November 06, 2025
Feature
Conversational Agents (Dialogflow CX) :You can now specify custom voice in the Conversation profiles menu in the console.
October 23, 2025
Feature
Conversational Agents (Dialogflow CX) : You can now configure service account authorization for both tools and webhooks. See the reference documentation for details.
Feature
Conversational Agents (Dialogflow CX) : New fields temperature , input_token_limit and output_token_limit are now available for LlmModelSettings in the v3beta1 API. This allows you to adjust the model per playbook.
Feature
Conversational Agents (Dialogflow CX) :The Block none safety feature in agent settings is no longer restricted access.
Feature
Conversational Agents (Dialogflow CX) : The Entity Types console menu now allows you to set a page size for entity entries and excluded phrases. Pagination options are automatically displayed if there are more than 10 items listed.
October 16, 2025
Change
Dialogflow CX (Conversational Agents) : The default models for data stores and playbooks have been upgraded as follows:
Data stores
Default voice mode summarization from gemini-2.0-flash-lite-001 to gemini-2.5-flash-lite .
Default text mode summarization from gemini-2.0-flash-001 to gemini-2.5-flash .
Default text mode rewriter from gemini-2.0-flash-lite-001 to gemini-2.5-flash-lite .
Playbooks:
All newly-created playbooks use default model gemini-2.5-flash .
Deprecated
Dialogflow CX (Conversational Agents) : The Dialogflow CX console will be deprecated on October 31, 2025 . After that date all users will be automatically routed to the Conversational Agents console .
September 04, 2025
Announcement
Dialogflow CX (Conversational Agents) : This is a correction of the release note posted on August 7, 2025 . All deactivated models are now automatically upgraded to model gemini- 2.5-flash with the exception of generative fallback , which is automatically upgraded to gemini-2.5-flash-lite .
Feature
Dialogflow CX (Conversational Agents) : The following regions are now available:
asia-southeast2
europe-west4
europe-west6
Feature
Dialogflow CX (Conversational Agents) The model gemini-2.5-flash-lite is now available in all regions, and gemini-2.5-flash is now GA. These changes apply to the following features:
Generators
Playbooks
Data store tools
Feature
Dialogflow CX (Conversational Agents) : New prompt security controls are available in agent settings . See the agent settings documentation for details.
August 07, 2025
Deprecated
Dialogflow CX and Vertex AI : The gemini-1.0-pro , gemini-1.5-pro and gemini-1.5-flash models will be deprecated on September 1, 2025 and automatically upgraded to the gemini-2.0-flash-001 model. This change applies to Vertex AI agents and the following Conversational Agents generative features:
Playbooks
Data stores
Generators
Generative Fallback
After the upgrade on September 1, 2025, gemini-2.0-flash-001 will be automatically selected in the console. We recommend that you upgrade to the new model early to allow enough time for testing and to ensure that your solution works as intended.
July 31, 2025
Feature
Conversational Agents : Routine playbooks are now generally available.
Feature
Conversational Agents : Parameter passing is now available and documented between routine playbooks, task playbooks, and flows.
July 24, 2025
Feature
Conversational Agents : 21 new Chirp 3 HD voices are now available across 34 locales.
Feature
Conversational Agents data stores : Conversational Agents now supports AlloyDB AI, Bigtable, Firestore, Spanner and Cloud SQL data store source as public GA features; Microsoft Entra ID source has now private GA support. See the data store documentation for a complete list.
July 17, 2025
Feature
Conversational Agents : CMEK is now available in EU regions.
Feature
Conversational Agents : The conversational history flow analysis feature is now available.
Feature
Conversational Agents : The model gemini-2.5-flash is now available in all regions. This change applies to the following features:
Generators
Playbooks (Public Preview)
Data stores tools (Public Preview)
June 26, 2025
Feature
Conversational Agents data stores : You can now create some data store types directly within the Conversational Agents console rather than needing to use AI Applications. See the data store creation documentation for details.
Feature
Conversational Agents data stores : Conversational Agents now supports AlloyDB, Bigtable, Firestore, Spanner and Cloud SQL data store sources as public GA features. Microsoft Entra ID source has now private GA support.
June 12, 2025
Feature
Conversational Agents : New Chirp 3 HD Cloud Text-to-Speech voice Autonoe is now available.
Feature
Conversational Agents : Conversational Agents console now supports test cases .
Change
Data store handlers : Data store handler use tracking for billing purposes has been corrected.
Announcement
Conversational Agents : Service agent access tokens used for authentication by both webhooks and tools are now discontinued as mentioned in notification emails to customers earlier this year. Most customers can use service accounts instead.
May 01, 2025
Feature
Dialogflow CX (Conversational Agents) : Models gemini-2.0-flash-001 and gemini-2.0-flash-lite-001 are now GA. They are available in all supported regions.
This change applies to the following features:
Playbooks
Data store tools in playbooks
Generators
April 24, 2025
Feature
Dialogflow CX (Conversational Agents) : You can now create personalized voice models with voice cloning .
Feature
Dialogflow CX (Conversational Agents) : You can now use the console to test your tools .
Feature
Dialogflow CX (Conversational Agents) : You can now use code blocks to get better control over playbooks.
April 01, 2025
Feature
Dialogflow CX (Conversational Agents) : Data store tools no longer require the use of a playbook and can be used with any agent. For information about configuring data store tools for a flow-based agent, see the data store tools documentation .
Change
Dialogflow CX (Conversational Agents) : The gemini-1.0-pro model is deprecated as of March 24, 2025 and has been automatically upgraded to the gemini-1.5-flash-001 model. This change applies to the following features:
Playbooks
Data stores
Generators
Announcement
Dialogflow CX (Conversational Agents) : AI generation of language-specific information , entities and training phrases is now GA.
Feature
Dialogflow CX (Conversational Agents) : All prebuilt agents are now GA.
March 27, 2025
Feature
Dialogflow CX (Conversational Agents) data stores : Dialogflow now supports additional native and third-party data store sources as a private GA feature. For a list of data store sources, integration instructions, and the request form to be added to the allowlist, see the data stores documentation .
Change
Dialogflow CX (Conversational Agents) data store handlers : The method of adding data store handlers to an agent has been streamlined. You are no longer required to create a Chat app on Agent Builder. For updated implementation instructions, see the data stores tools documentation .
March 21, 2025
Feature
The Conversational Agents console is now generally available (GA). This console combines the power of Generative AI playbooks and data stores with deterministic flows. Additional features:
The console is now hosted at https://conversational-agents.cloud.google.com/ .
There is a new menu option for managing languages. Selecting Manage languages from the language drop-down menu at the top of the console now automatically redirects you to the Agent Settings language management section in the Deterministic Flows tab.
The simulator now has feature parity with the Dialogflow CX console.
Feature
Conversational Agents : Conversational Agents now supports multiple tool versions in addition to playbooks and flows. See the versions and environments documentation for details.
Feature
Conversational Agents playbooks : Playbooks now support 38 languages. Playbook language support is displayed on the language support page . Supported languages have been tested for quality with the gemini-2.0-flash-001 and gemini-1.5-flash-002 models.
Feature
Conversational Agents : New Chirp 3 HD Cloud Text-to-Speech voices are now available.
Feature
Conversational Agents playbooks : New model gemini-2.0-flash (Preview) is now available. For more information and supported regions, see Model support .
Feature
Conversational Agents : You can now toggle a Show latency option in the Conversational Agents Console simulator to view latency per conversation turn for simulator conversations. To view latency breakdown, click the total latency value for the conversation turn. Latency values are also shown in the original response, Cloud logging, and BigQuery export.
Be aware that latency values are not recorded directly in the logs, but are represented as startTime and completeTime values in the traceBlocks field.
Feature
Conversational Agents playbooks : You can now enable DTMF in playbook Settings and as a conditional actions as a Preview feature. See the playbook settings and DTMF for telephony integrations pages for more information.
March 14, 2025
Feature
Dialogflow CX (Conversational Agents) : Customer-managed encryption keys (CMEK) is now a GA feature.
March 11, 2025
Feature
Dialogflow CX (Conversational Agents) data store handlers : Model gemini-2.0-flash-lite-001 is now a Preview feature available in the following regions: global , us , us-central1 , us-east1 , us-west1 , europe-west1 , europe-west4 .
Feature
Dialogflow CX (Conversational Agents) generators : Model gemini-2.0-flash-001 is now a GA feature available in the following regions: global , us , us-central1 , us-east1 , us-west1 , europe-west1 , europe-west4 .
March 10, 2025
Change
Dialogflow CX (Conversational Agents) : The Conversational Agents console has moved to a new location .
Feature
Dialogflow CX (Conversational Agents) : You can now use the console search feature to search for all resources, including playbooks, examples, and tools.
Feature
Dialogflow CX (Conversational Agents) : Playbooks now support the following new features:
Two different playbook types : Task playbooks and routine playbooks.
Connector tools .
Conditional actions .
DTMF .
Feature
Dialogflow CX (Conversational Agents) : You can now use the Conversational Agents console to manage languages .
Feature
Dialogflow CX (Conversational Agents) data store handlers : New model gemini-2.0-flash-001 is now available to data store handlers as a Preview feature. This launch is limited to the following regions: global , us , us-central1 , us-east1 , us-west1 , europe-west1 , europe-west4 .
Feature
Dialogflow CX (Conversational Agents) : Text-to-speech used by Dialogflow now supports new Chirp 3 HD voices.
Feature
Dialogflow CX (Conversational Agents) : Git export/restore now supports additional Git providers and Google Secrets for token storage.
February 24, 2025
Feature
Dialogflow CX (Conversational Agents) : Text-to-speech used by Dialogflow now supports new Chirp HD voices .
Feature
Dialogflow CX (Conversational Agents) & ES : Text-to-speech removed support for voices across European markets. Affected users were sent an email announcement .
February 19, 2025
Change
Conversational Agents (CX), ES & Agent Assist : Starting February 24, 2025 , a limit of 5 phone numbers per project will be enforced . This limit doesn't apply to the global region. For instructions on deleting unused phone numbers and resolving the limit issue, see the RESOURCE_EXHAUSTED troubleshooting section . If you have a business requirement to increase the limit, request to increase the Phone numbers quota specifying the region and providing detailed justification for your request.
January 23, 2025
Feature
The Conversational Agents console has launched for preview to create agents that can use a combination of generative and deterministic features. See how we intend on migrating to this new console .
January 09, 2025
Feature
Dialogflow CX (Conversational Agents): Dialogflow CX has launched a new feature that allows you to auto-generate and auto-translate Intent training phrases, Entity synonyms, and Fulfillment phrases in the language of your choice. See the documentation for details.
Feature
Dialogflow CX (Conversational Agents): You can now require a full match for banned phrases in addition to a partial match. If enabled, a full match requires the input to be matched exactly in order to trigger a ban. For more information about setting banned phrases, see the documentation .
Feature
Dialogflow CX (Conversational Agents): Service directory support is now enabled for flexible webhooks . See the webhooks documentation for details.
December 19, 2024
Feature
Dialogflow CX (Conversational Agents) : You can now set either a partial match or a full match to banned phrases. This setting applies to playbooks, datastores, and generators. You can enable and test this feature in Agent Settings > Generative AI > Banned phrases > Match requirements .
December 13, 2024
Announcement
Dialogflow CX data stores : The following languages are now GA. See the language support page for details.
Arabic
Bengali
Bulgarian
Chinese Simplified
Chinese Traditional
Croatian
Czech
Estonian
Finnish
Hebrew
Hungarian
Japanese
Korean
Latvian
Lithuanian
Norwegian
Polish
Romanian
Russian
Serbian
Slovak
Slovenian
Swahili
Thai
Turkish
Ukrainian
Vietnamese
December 12, 2024
Feature
Dialogflow CX : You can now configure an access token name in Dialogflow Messenger to store the end user's authentication when they sign in, and then use it as the bearer token for tool authentication . See the Dialogflow Messenger documentation for more information about enabling this feature.
November 14, 2024
Feature
Dialogflow CX: New feature Context token limits has been added to Agent Settings > Generative AI . You can use this feature to set a percentage of the token budget to be reserved for conversation history, as a maximum. See the Agent Settings documentation for details.
Feature
Data store tools: You can now optimize the RAG performance of data store tools used by Playbooks. See the documentation for details.
Change
Generators and data store handlers: The model gemini-1.5-flash-002 is now GA.
Change
Data store handlers : The default generative model has been changed to gemini-1.5-flash-001 .
November 07, 2024
Change
Dialogflow CX : As of August 2024, us-dialogflow.* has been re-introduced as the canonical endpoint for the US multi-region. The usa-dialogflow.* endpoint is still supported as an alias. See the regionalization documentation for details.
October 24, 2024
Change
Dialogflow CX & ES : In order to increase the stability of Cloud Text-to-speech, out-of-quota requests for Journey Voices will now be fulfilled with a fallback voice of the same speaker persona. To opt out, contact your Google account team.
Feature
Dialogflow CX & ES : Dialogflow now supports A-law encoding in addition to Mu-law encoding for input and output audio. A-law and Mu-law are the two available formats in G.711 .
October 10, 2024
Feature
Conversational Agents : The gemini-1.5-flash-001 model is generally available (GA) for data store handlers as of August 20, 2024. The gemini-1.5-flash-002 model remains public Preview.
September 26, 2024
Announcement
Starting in late 2024 and ending in early 2025, there will be changes to some Dialogflow product names, feature names, and consoles. See the documentation for complete details.
Feature
Dialogflow CX : You can now enable security checks to prevent prompt injection attacks. See the documentation for details.
Change
Dialogflow CX : Cloud Text-to-Speech europe-west1 and europe-west3 regions for Neural2 voices now use corresponding regions.
September 19, 2024
Feature
Dialogflow CX & ES : Text-to-speech Journey Voices now supports MULAW output audio_encoding ( CX , ES ) in addition to LINEAR16. Future updates to Journey Voices will appear in the Cloud Text-to-Speech documentation .
Deprecated
Dialogflow CX and Vertex AI : The text-bison@002 , text-bison and code-bison models will be deprecated on October 21, 2024 and automatically upgraded to the gemini-1.5-flash-001 model. This change applies to Vertex AI agents and the following Dialogflow CX Generative Features :
Vertex AI agent apps
Data store agents (also known as Chat agents)
Generators
After the upgrade on October 21, 2024, gemini-1.5-flash-001 will be automatically selected in the console. We recommend that you upgrade to the new model early to allow enough time for testing and to ensure that your solution works as intended.
Change
Dialogflow CX : Cloud Text-to-Speech europe-west1 and europe-west3 regions for Neural2 voices will temporarily use the eu multi-region instead.
September 16, 2024
Change
Dialogflow CX and Vertex AI Agents : Generative features will migrate to the gemini-1.5-flash-001 model on September 30, 2024. See the email notification .
August 29, 2024
Feature
Dialogflow CX & ES : Text-to-Speech Journey Voices will get an update in the week of Sept 3. If you select a journey voice in your agent Text-to-Speech settings ( CX , ES ), only LINEAR16 output audio_encoding ( CX , ES ) will be supported starting from Sept 3. This model update will also include slight variations in pauses, tone, and so on of the synthesized journey voices.
August 15, 2024
Feature
Dialogflow CX : You can now configure sensitivity levels of safety filters with respect to different Responsible AI (RAI) categories.
Feature
Vertex AI Agents : OpenAPI tool authentication
now supports custom client certificates for mutual TLS authentication.
July 26, 2024
Feature
Dialogflow CX : You can now enable consent-based end-user content redaction. If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging. See the agent settings documentation for details.
Change
Dialogflow CX : Dialogflow now uses corresponding Cloud Text-to-Speech regions for Neural2 voices .
Change
The status of the Dialogflow Speech-to-Text model migrations has changed:
The Dialogflow speech model migration initially announced in December 2023 and later postponed to the new dates has been placed on hold until further notice (no ETA). For more information, see the migration documentation for Dialogflow CX and Dialogflow ES .
The Dialogflow phone_call speech model migration announced in March 2024 has been partially completed. The remaining migration parts have been placed on hold until further notice (no ETA). For more information, see the migration documentation for Dialogflow CX and Dialogflow ES .
July 11, 2024
Feature
Vertex AI Agents : Agent apps now provide generative settings for input token limit, output token limit, and temperature.
June 27, 2024
Breaking
Dialogflow ES : As of May 27 2024, Twilio no longer supports integrations with Dialogflow ES. For more details and information about migrating to Dialogflow CX, see the Twilio documentation .
Feature
Dialogflow CX : The gemini-1.5-flash generative model is now available for the generators feature.
June 13, 2024
Feature
Vertex AI Agents : The following new regions are supported by agent apps:
europe-west1
europe-west2
europe-west3
northamerica-northeast1
us-west1
June 11, 2024
Feature
The following was incorrectly announced: Dialogflow CX : The gemini-1.5-flash generative model is now available for the generators feature.
June 07, 2024
Feature
Data store agents : You can now run self-service evaluation which will assess the quality of your data store agent and recommend changes.
Deprecated
All generative features : It was announced previously that the text-bison@001 model will be deprecated. In addition, the code-bison@001 model and fine-tuned text-bison@001 options will be deprecated. This deprecation will happen mid June. The deprecated models will be updated to gemini-1.0-pro-001 , as previously announced . For more information, see the email announcement .
Feature
Dialogflow CX now offers custom webhook templates for integration with Salesforce. See the webhooks documentation for details.
Feature
Data store agents : The gemini-1.5-flash generative model is now available for selection in the console.
May 29, 2024
Feature
Dialogflow CX : You can now integrate with Soul Machines to create 3-D avatars.
May 21, 2024
Feature
Vertex AI Agents : OpenAPI tool authentication now supports Bearer Token .
Feature
Dialogflow CX : VPC Service Controls now support Cloud Functions and Cloud Run.
Feature
Vertex AI Agents : OpenAPI tools now support private network access
May 08, 2024
Change
Dialogflow ES and Dialogflow CX: The us-dialogflow.googleapis.com endpoint and locations/us resource location, which served as aliases for global resources, will be discontinued starting May 21, 2024. We have changed the date
to update resource locations and endpoints from April 16, 2024 to May 21, 2024 to provide you with additional time. For more information, see the email announcement .
Note
This change affects only the agents created in the global region ( ES , CX ) and only if you use the us alias in the API requests to these global-region agents. If you created agents in us-central1 , us-east1 , us-west1 , and us (multi-region) regions, no action is required.
The discontinued endpoint is different than the us multi-region endpoint that was announced recently .
Change
Dialogflow CX and Vertex AI Agents: Effective June 15, 2024, the following generative features will be upgraded from text-bison-001 and fine-tuned text-bison@001 options to gemini-1.0-pro-001:
Vertex AI agent apps
Data store agents (aka Chat agents)
Generators
Generative fallback
For more information, see the email announcement
May 06, 2024
Change
Data store agents : The default generative model has been changed to gemini-1.0-pro-001.
April 30, 2024
Feature
Vertex AI Agents: Agent apps now support all languages supported by Vertex AI generative models .
Change
Vertex AI Conversation has been renamed to Vertex AI Agents
Feature
Dialogflow CX: You can now access the session ID with built-in parameters .
Feature
Vertex AI Agents: Agent apps now support the eu multi-region.
April 23, 2024
Feature
Dialogflow CX: The following new region is available:
us : United States multi-region accessed via usa-dialogflow.googleapis.com hostname
April 18, 2024
Feature
Dialogflow CX: The Conversation history API is now available for public preview.
April 04, 2024
Feature
Vertex AI Conversation: You can now create a data store in one language that is connected to an agent that uses different languages.
April 03, 2024
Feature
Dialogflow CX: Language auto detect is now available for chat conversations . You can configure Dialogflow CX to detect an end-user's language and automatically respond in that same language. See the language reference page for a list of languages available for this feature.
April 02, 2024
Feature
Vertex AI Conversation: Data stores now support parse and chunk configuration .
Feature
Dialogflow CX: Dialogflow CX phone gateway is now generally available.
Feature
Dialogflow CX: Call companion is now generally available with new user interface settings .
March 29, 2024
Change
Starting on April 17, 2024, the Dialogflow CX and Dialogflow ES traffic with audio will gradually route away from the classic phone_call speech model to the new conformer-based speech models for the following language tags: en-au , en-gb , de , de-de , es , es-es , es-us , fr , fr-ca , fr-fr , it , it-it , ja , pt-br . For more information, see Dialogflow ES migration documentation and Dialogflow CX migration documentation .
Feature
Dialogflow CX: You can now enable smart endpointing .
March 25, 2024
Feature
Dialogflow CX: The Override request-level speech model has been added to advanced speech settings. This can be used to override the speech model provided in a runtime API request.
Feature
Dialogflow CX: DTMF for telephony integrations is now available for preview.
Deprecated
All generative features : The text-bison-001 model and fine-tuned text-bison@001 options will be deprecated by Vertex AI on July 6th. Please transition as soon as possible to the default option or another model available in the settings.
Feature
Vertex AI Conversation data stores : Gemini-pro 1.0 is now officially in General Availability. The model includes optimized prompting, delivering enhanced results with minimal latency impact. Please note: prompt optimization is currently focused on English, with other languages to follow.
March 19, 2024
Feature
Dialogflow CX request-scoped parameters now supports the $request.user-utterance parameter to reference the end-user utterance.
Feature
Dialogflow CX now provides the offers and deals prebuilt component .
Feature
Vertex AI Conversation data store tools now support filter and userMetadata example parameters.
March 18, 2024
Feature
The following prebuilt components have been added to Dialogflow CX:
Retail fraud and dispute
Cancel order
Return and refund
Exchange order
Change
The Dialogflow ES and Dialogflow CX us-dialogflow.googleapis.com endpoint and locations/us resource location,
which served as aliases for global resources, will be discontinued on May 21, 2024. For more information, see the email announcement .
March 11, 2024
Change
From March 18 to April 15, 2024 (new dates for the same migration announced earlier ), for certain language tag and speech setting combinations, the Dialogflow CX and Dialogflow ES traffic with audio will gradually route away from the classic Speech-to-Text models behind the command_and_search , default , phone_call , and video model identifiers to the new conformer-based speech models.
If your Dialogflow agents have audio traffic and use one of the following language tags: en , en-us , en-au , en-gb , en-in , de , es , es-es , es-us , fr , fr-ca , fr-fr , it , ja , nl , pt-br , read more about Dialogflow CX speech model migration and Dialogflow ES speech model migration .
March 06, 2024
Announcement
Vertex AI Conversation now supports the Dialogflow CX Messenger integration for preview.
March 05, 2024
Feature
Vertex AI Conversation generative agent creation with playbooks is now available for public preview. Try it by following the quickstart .
February 20, 2024
Change
The previously announced migration from Standard NLU to Advanced NLU will no longer occur on March 1, 2024. For more information, see the email announcement
Feature
Dialogflow CX channel-specific response messages are now available for the following integrations: Google Chat, LINE, Messenger from Meta, Workplace from Meta, Slack. See the integration documentation for details.
Feature
You can now import and export Dialogflow CX custom entities .
Change
Dialogflow CX agents now default to advanced NLU .
February 13, 2024
Feature
Dialogflow CX text-to-speech settings now have an option for custom voices .
February 12, 2024
Feature
Two new Dialogflow CX prebuilt components are available: retail authentication and order status .
January 25, 2024
Feature
Vertex AI Conversation data stores now support unstructured CSV .
January 24, 2024
Feature
Dialogflow CX generators has added support for text-bison@002 and gemini-pro models.
Feature
With data store agents, you can now provide a custom summarization prompt .
January 23, 2024
Fixed
The Dialogflow CX name collection prebuilt component removed use of the deprecated system entities @sys.given-name and @sys.last-name . They have been replaced with @sys.person .
Change
Speech model migration announced eariler will include two additional language tags: en-in and nl . The migration start date is postponed and will be announced in a new release note later. For more information, read Dialogflow CX speech model migration and Dialogflow ES speech model migration .
January 18, 2024
Change
To temporarily opt out from the speech model migration , you can now use the opt_out_conformer_model_migration field in the runtime Dialogflow API requests. Read more about temporary opt-out for Dialogflow CX and Dialogflow ES .
Feature
Dialogflow CX now allows cancellation of partial response playback .
January 16, 2024
Feature
Vertex AI Conversation has launched generative agents in the Vertex AI Conversation console. Generative agents were previously called playbook agents in the Dialogflow CX console. This feature currently has restricted access.
January 12, 2024
Change
Dialogflow CX Standard NLU agents will be
migrated to Advanced NLU starting March 1, 2024 . For updated information, see the email announcement .
January 03, 2024
Announcement
The Text-to-Speech API used by Dialogflow now supports two new experimental voices for en-us: en-US-Journey-D and en-US-Journey-F. For more details, see Journey voices .
December 21, 2023
Feature
Vertex AI Conversation: You can now select the generative model for data store agents.
December 19, 2023
Feature
Dialogflow CX now provides a new integration for Workplace from Meta .
December 15, 2023
Change
From January 23 to February 13, 2024, for certain language tag and speech setting combinations, the Dialogflow CX and Dialogflow ES traffic with audio will gradually route away from the classic Speech-to-Text models behind the command_and_search , default , phone_call , and video model identifiers to the new conformer-based speech models.
If your Dialogflow agents have audio traffic and use one of the following language tags: en ,
en-us , en-au , en-gb , de , es , es-es , es-us , fr , fr-ca , fr-fr ,
it , ja , pt-br , read more about Dialogflow CX speech model migration and Dialogflow ES speech model migration .
December 14, 2023
Feature
Three new Dialogflow CX generative prebuilt agents are now available. These prebuilt agents are built on playbooks and provide use cases for Department of Motor Vehicles, retail, and travel.
December 12, 2023
Change
To restore an agent with data store handlers, you now need to associate the target agent with a Vertex AI Conversation app and create data store references in the target agent prior to the restore operation. See more at Export and restore an agent .
Feature
Dialogflow CX and data store agents now support Customer-Managed Encryption Keys (CMEK) in GA. In order to use CMEK, you must contact your Google account team to request access.
December 04, 2023
Feature
The Speech-to-Text API used by Dialogflow now supports two new speech models for the en and en-us language tags: telephony and telephony_short . The two models are customized to recognize audio that originates from a phone call and corresponds to the most recent versions of the existing phone_call model. For more details, see Dialogflow CX speech models and Dialogflow ES speech models .
November 29, 2023
Feature
Dialogflow CX answer feedback is now generally available (GA) and has new configurations in Dialogflow Messenger , conversation history , and BigQuery export .
November 07, 2023
Change
Dialogflow CX now has a new language code for Hebrew: he-il . For supported features, check the language reference table .
The iw Hebrew language code is now deprecated, so new agents should use the he-il language code. Existing agents using the iw language code will continue working, but the list of supported features won't be expanded.
November 01, 2023
Feature
Dialogflow CX now supports the DIVIDE and MULTIPLY system functions.
Feature
Data store agents now support additional languages and regions.
October 25, 2023
Change
On the week of October 30, 2023, auto speech adaptation ( CX , ES ) will be updated for non-English agents. No major behavior changes are expected.
If you notice speech recognition issues in Dialogflow CX, you can mitigate by enabling manual speech adaptation on flows and pages experiencing issues. You can tune the adaptation as follows:
On the problematic flows and pages, disable auto speech adaptation by enabling manual speech adaptation without adding phrases.
If your agent is unable to recognize certain words and phrases, add those phrases to the adaptation with no boost.
If your agent is still unable to recognize certain words and phrases after step 2, duplicate those phrases so that you have one without boost and one with boost .
If you notice speech recognition issues in Dialogflow ES, you can mitigate by using the speechContexts field at runtime which overrides auto speech adaptation or by updating your agent design .
October 23, 2023
Feature
Dialogflow CX has added the following prebuilt components:
Account balance
Account statement
Alphanumeric collection
Arrange appointment
Authentication
Credit card enrollment
Credit card statement
Disputes
Financial services steering
Lock card
Lost and stolen card
Make a payment
Open account
Transaction history
October 12, 2023
Feature
Dialogflow CX launched generative playbooks with restricted access.
Change
Dialogflow CX spelling correction now supports all regions, but is limited to five languages.
Feature
Dialogflow CX generative feedback now supports more languages.
October 02, 2023
Feature
Dialogflow CX speech adaptation can now be configured manually.
September 29, 2023
Feature
Dialogflow CX launched two new integrations in preview:
Google Chat
Slack
September 25, 2023
Feature
Dialogflow CX now provides the call companion feature in preview, which provides a mobile-based user interface that supplements a phone call with an agent.
September 19, 2023
Feature
Dialogflow CX intent import/export and training phrase import/export are now generally available.
September 15, 2023
Feature
Dialogflow CX has added the FILTER system function.
Change
Improvements to Prebuilt Components:
Name collection : fixed issue with names containing multiple special characters
Credit card expiration date collection : updated SSML in agent responses
Date of birth (DOB) collection : fixed issue with entities for specific pronunciations of months and days
Feature
Dialogflow CX flow export now exports flows recursively.
August 31, 2023
Feature
Dialogflow CX Messenger has been redesigned and is now GA. This new version of the integration replaces the old version, which has been renamed Legacy Dialogflow Messenger . The old version is now deprecated, and it is recommended that all users of the old version migrate to the new version.
Feature
Dialogflow CX answer feedback is now GA, but access is limited and must be requested.
Feature
Dialogflow CX generative features are now GA and publicly available:
Generative AI agents
Generators
Generative fallback
Generative personalization
August 16, 2023
Change
Dialogflow CX now supports past, future, and partial date and time values for ambiguous end-user inputs matched to @sys.date, @sys.date-time, and @sys.time system entities .
August 14, 2023
Feature
Dialogflow CX route groups can now be flow-level or agent-level.
August 11, 2023
Feature
Google has open sourced the following Dialogflow CX integrations :
Azure Bot Service & Microsoft Teams
Discord
Google Chat
ServiceNow
Slack
Spark
Telegram
Twilio
Twitter
Viber
August 08, 2023
Feature
Dialogflow CX conversation history has added two new views: flow analysis table and flow analysis graph.
Feature
Dialogflow CX now provides intent suggestions .
Feature
Dialogflow CX now provides a split intents feature.
Feature
Dialogflow CX analytics has been reimplemented to provide all new views and metrics. The old views have been renamed legacy analytics .
Feature
Dialogflow CX now provides a compare and merge intents feature.
Feature
Dialogflow CX now provides a timeout-based end of speech sensitivity setting.
August 01, 2023
Feature
Dialogflow CX has added a new prebuilt component for feedback .
July 18, 2023
Feature
Dialogflow CX has launched three new generative AI features. These features are generally available (GA), but access is limited and must be requested:
Generative AI agent
Generators
Generative fallback
Also see the blog post announcing these features.
July 11, 2023
Feature
Dialogflow CX now supports speech recognition model selection .
July 06, 2023
Feature
Dialogflow CX conversation history has been promoted from Preview to GA (generally available).
Change
Dialogflow CX minimum voice session duration for pricing has been decreased from 1 minute to 1 second.
July 05, 2023
Feature
Dialogflow CX now provides prebuilt components , which are prebuilt flows that handle common scenarios and accelerate agent development.
Feature
The following Dialogflow CX features have been promoted from Preview to GA (generally available):
GitHub export/restore
Interaction logging export to BigQuery
June 28, 2023
Feature
Dialogflow CX now supports flow scoped parameters .
June 27, 2023
Feature
Dialogflow CX has added the following system functions :
IS_CREDIT_CARD_NUMBER
IS_DATE
IS_FUTURE_DATE
IS_PAST_DATE
IS_PHONE_NUMBER
NESTED_FIELD
ROUND
TO_OBJECT
TO_PHONE_NUMBER
UPPER
May 24, 2023
Change
Dialogflow CX quota for design time read requests has been increased to 200 per minute.
May 03, 2023
Feature
Dialogflow CX now provides the ADD_DATE system function.
April 26, 2023
Feature
Dialogflow CX now supports intent import/export and training phrase import .
April 12, 2023
Feature
Dialogflow CX now supports flexible webhooks , where you can define the request HTTP method, request URL parameters, and fields of the request and response messages.
March 27, 2023
Feature
Dialogflow CX now provides the TO_NUMBER system function .
March 21, 2023
Feature
Dialogflow CX sentiment analysis now supports all regions supported by Dialogflow CX and over 70 new languages .
March 03, 2023
Feature
Dialogflow CX now provides a setting for choosing the voice for speech synthesis.
March 02, 2023
Change
The Dialogflow CX maximum number of flows per agent has been increased from 20 to 50.
February 28, 2023
Change
The Dialogflow CX audio input duration limit has been increased from one minute to two minutes.
February 14, 2023
Feature
Dialogflow CX added regional support for some system entities . The following system entities:
@sys.person
@sys.address
@sys.geo-city
@sys.geo-country
@sys.geo-state
are now available in the following regions for English (en), French (fr), Italian (it), German (de), and Spanish (es) languages:
europe-west1
europe-west2
europe-west3
northamerica-northeast1
February 06, 2023
Feature
Dialogflow CX now provides flow import options for resolving resource conflicts.
January 30, 2023
Change
The Dialogflow CX flow stack limit has been increased to 25.
January 18, 2023
Feature
Dialogflow CX now provides custom payload templates .
Feature
Dialogflow CX now provides channel-specific responses .
January 17, 2023
Announcement
Migrating from Dialogflow ES to Dialogflow CX is recommended for complex agents, and migrating can significantly improve your agent design and end-user experience. See the new migration guide .
December 27, 2022
Feature
Dialogflow CX now supports the MATCH system function.
December 16, 2022
Feature
Dialogflow CX now supports flow export to diagram in the draw.io XML format .
Change
To improve security, the "dialogflow.sessions.detectIntent" and "dialogflow.sessions.streamingDetectIntent" permissions are being removed from the IAM Viewer role on January 31, 2023.
To continue using the Dialogflow CX/ES console simulator or making detectIntent/streamingDetectIntent API calls, users and service accounts with the IAM Viewer role must update roles granted to them to include a role with these permissions. For example, the IAM Dialogflow API Client role ( ES documentation , CX documentation ) includes these permissions. For Dialogflow CX, you can apply the agent-specific Client role using the Dialogflow console .
December 12, 2022
Feature
Dialogflow CX added sentiment analysis support in the following regions for English (en), French (fr), Italian (it), German (de), and Spanish (es) languages:
asia-southeast1
europe-west1
europe-west2
europe-west3
northamerica-northeast1
Feature
Dialogflow CX now supports interaction logging export to BigQuery .
November 21, 2022
Feature
Dialogflow CX now integrates with GitHub . This integration makes it easy to export your agent to JSON for a push to GitHub, and to pull from GitHub for an agent restore.
November 15, 2022
Feature
Dialogflow CX agents can now be exported to JSON .
November 07, 2022
Feature
The following languages are now GA (generally available) for Dialogflow CX:
Bulgarian (bg)
Catalan (ca)
Croatian (hr)
Czech (cs)
Greek (el)
Hebrew (iw)
Hmong (hmn)
Hungarian (hu)
Serbian (sr)
Slovak (sk)
Somali (so)
October 21, 2022
Feature
Dialogflow CX now provides a telephony integration with Twilio
October 11, 2022
Feature
Dialogflow CX Advanced NLU now supports automatic training.
October 03, 2022
Feature
Dialogflow CX now provides a conversation history tool, which can be used to browse, filter, and analyze production conversations.
August 18, 2022
Announcement
Dialogflow CX and ES have new tutorials that walk through the steps of deploying a Dialogflow agent on Google Cloud, integrating with Cloud Functions, Spanner, and App Engine:
Deploy a Dialogflow CX agent on Google Cloud
Deploy a Dialogflow ES agent on Google Cloud
July 06, 2022
Feature
Dialogflow ES now provides a new client library for C++ .
Feature
Dialogflow CX now provides new client libraries for C++ , C# , and Go .
June 21, 2022
Feature
The Dialogflow CX search feature is now GA (generally available).
June 13, 2022
Deprecated
The Dialogflow ES Google Assistant integration will be removed on June 13, 2023. This is due to the Google Assistant Conversational Actions planned sunsetting .
May 23, 2022
Feature
Dialogflow CX now supports version-specific webhooks .
Feature
Dialogflow CX now supports fine-grained webhook errors for built-in events .
April 28, 2022
Feature
Dialogflow ES has added preview support for the following languages :
Afrikaans, Albanian, Amharic, Armenian, Azerbaijani, Basque, Belarusian, Bosnian, Bulgarian, Catalan, Cebuano, Chichewa, Corsican, Croatian, Czech, Esperanto, Estonian, Frisian, Galician, Georgian, Greek, Gujarati, Haitian Creole, Hausa, Hmong, Hungarian, Icelandic, Igbo, Irish, Javanese, Kannada, Kazakh, Khmer, Kinyarwanda, Kurdish, Kyrgyz, Latin, Latvian, Lithuanian, Luxembourgish, Macedonian, Malagasy, Malayalam, Maltese, Maori, Mongolian, Nepali, Oriya/Odia, Punjabi, Samoan, Scots Gaelic, Serbian - Cyrillic, Serbian - Latin, Sesotho, Shona, Slovak, Slovenian, Somali, Sundanese, Swahili, Tajik, Tatar, Turkmen, Uzbek, Welsh, Xhosa, Yoruba, Zulu
April 06, 2022
Feature
Dialogflow CX now supports Access Transparency logging of Google personnel access to Dialogflow data.
April 05, 2022
Feature
Dialogflow CX now provides a setting to lock agent editing .
Feature
Dialogflow CX system functions have new list-related functions: APPEND, GET, and REMOVE.
January 24, 2022
Feature
Dialogflow CX has a new agent design best practices guide .
January 19, 2022
Change
The Dialogflow CX
QueryResult.match.event
field previously only populated custom events. It is now also populated with
no-match and no-input built-in events .
Feature
Dialogflow CX now provides an IDENTITY system function , which is useful to copy a composite parameter object in a parameter preset field.
December 15, 2021
Feature
Dialogflow CX auto sync for agent collaboration is now GA (generally available).
Feature
Dialogflow CX change history is now GA (generally available).
Feature
The Dialogflow CX simulator now allows you to specify flow versions when interacting with the simulator.
December 13, 2021
Feature
Dialogflow CX now supports the asia-southeast1 (Jurong West, Singapore) and europe-west3 (Frankfurt, Germany) regions.
December 08, 2021
Feature
The Dialogflow CX simulator now provides page lifecycle navigation to help you understand the execution steps taken for each conversational turn.
November 17, 2021
Feature
Dialogflow CX webhooks now support custom CA certificates .
Feature
Dialogflow CX now supports agent backup .
Feature
Dialogflow CX Phone Gateway now supports call transfer .
November 04, 2021
Feature
Preview launch of the following languages in Dialogflow CX:
Afrikaans, Amharic, Azerbaijani, Belarusian, Bulgarian, Bosnian, Catalan, Cebuano, Corsican, Czech, Welsh, Greek, Esperanto, Estonian, Basque, Persian, Frisian, Irish, Scots Gaelic, Galician, Gujarati, Hausa, Hebrew, Hmong, Croatian, Haitian Creole, Hungarian, Armenian, Igbo, Icelandic, Javanese, Georgian, Kazakh, Khmer, Kannada, Kurdish, Kyrgyz, Latin, Luxembourgish, Lithuanian, Latvian, Malagasy, Maori, Macedonian, Malayalam, Mongolian, Maltese, Nepali, Chichewa, Odia, Punjabi, Pashto, Kinyarwanda, Sindhi, Slovak, Slovenian, Samoan, Shona, Somali, Albanian, Serbian, Sesotho, Sundanese, Swahili, Tajik, Turkmen, Tatar, Uyghur, Urdu, Uzbek, Xhosa, Yiddish, Yoruba, Zulu
October 20, 2021
Feature
Dialogflow ES V2 API now supports regionalization .
October 19, 2021
Feature
Dialogflow CX change history is now available from the API.
Feature
Dialogflow CX now provides a continuous testing and deployment preview feature.
October 15, 2021
Feature
Dialogflow CX has a new feature for side-by-side flow version comparison .
October 14, 2021
Feature
GA (general availability) launch of the following languages in Dialogflow ES:
Bengali
Filipino
Finnish
Malay
Marathi
Romanian
Sinhala
Tamil
Telugu
Vietnamese
Feature
GA (general availability) launch of the following languages in Dialogflow CX:
Arabic
Bengali
Filipino
Finnish
Malay
Marathi
Romanian
Sinhala
Tamil
Telugu
Vietnamese
September 01, 2021
Change
New Dialogflow CX agent roles are introduced for granular control of agent resources.
August 26, 2021
Change
During the week of September 6, 2021, two new Dialogflow IAM permissions will become effective: dialogflow.fulfillments.get and dialogflow.fulfillments.update . If you use custom roles to grant access to the Dialogflow ES console and API, make sure to add these permissions to your custom roles to allow to create and update Dialogflow ES Fulfillment in the Dialogflow ES console and via the API. If you don't use custom roles, no action is required.
August 11, 2021
Feature
Dialogflow CX GA (generally available) launch of Experiments to compare the performance of flow versions to a control version while handling live traffic.
July 22, 2021
Change
On July 26, 2021, two new Dialogflow IAM permissions will become effective: dialogflow.changelogs.get and dialogflow.changelogs.list . If you use custom roles to grant access to the Dialogflow CX console, make sure to add these permissions to your custom roles to grant access to the Change history functionality. If you don't use custom roles, no action is required.
Breaking
The root CA used for Dialogflow's client certificates for mutual TLS will change to GTS Root R1 in the week of July 26 2021. Please see the mTLS documentation for Dialogflow ES and Dialogflow CX for details.
July 02, 2021
Feature
In Dialogflow CX, you can now use the Search feature (Preview launch) to search, filter, and access the core resources within an agent.
Feature
In Dialogflow CX, you can now use the sys.long-utterance built-in event to handle user queries exceeding the maximum length (256 characters).
June 30, 2021
Feature
The Dialogflow ES API now provides methods for managing versions and environments .
June 28, 2021
Feature
Dialogflow CX now supports the asia-south1 (Mumbai) region.
June 25, 2021
Feature
New System functions are now available in Dialogflow CX.
June 15, 2021
Deprecated
Final reminder: The Dialogflow V1 API shutdown will be finalized during the week of June 21, 2021 July 12, 2021. All bots (except Actions on Google) using Dialogflow V1 API requests will stop responding. Consider migrating to Dialogflow ES or Dialogflow CX .
June 04, 2021
Change
Dialogflow CX will have new pricing on September 1, 2021. For details, see the pricing documentation . In summary, the new pricing will be:
Text: $0.007/request
Audio: $0.06/minute
May 14, 2021
Feature
Preview launch of the Dialogflow ES Twilio telephony integration .
April 26, 2021
Feature
Preview launch of the following languages in Dialogflow ES:
Bengali
Filipino
Finnish
Malay
Marathi
Romanian
Sinhala
Tamil
Telugu
Vietnamese
April 20, 2021
Feature
Preview launch of Change history and Auto sync in Dialogflow CX.
April 19, 2021
Feature
Dialogflow CX now supports the us-west1 (US, Oregon) region .
April 16, 2021
Feature
Preview launch of the Dialogflow CX Phone Gateway integration.
April 14, 2021
Change
The "Auto-preview changes" option was removed from the Dialogflow ES Google Assistant integration.
April 13, 2021
Feature
Preview launch of the LINE integration for Dialogflow CX.
Feature
Preview launch of the Facebook Messenger integration for Dialogflow CX.
Feature
Preview launch of the Voximplant integration for Dialogflow CX.
April 07, 2021
Feature
Preview launch of the following languages in Dialogflow CX:
Arabic
Bengali
Filipino
Finnish
Malay
Marathi
Romanian
Sinhala
Tamil
Telugu
Vietnamese
April 01, 2021
Deprecated
The legacy analytics page has been removed from the Dialogflow ES console. Only the generally available new analytics page remains.
March 03, 2021
Feature
Dialogflow now supports VPC Service Controls for both CX and ES agents.
February 18, 2021
Feature
Dialogflow ES now supports the europe-west1 (Belgium) region .
February 02, 2021
Feature
Several new Dialogflow CX prebuilt agents have been launched. All of these prebuilt agents only support English at this time. The complete list of pre-built agents is currently:
Financial services agent (new)
Healthcare agent
Order and account management agent
Payment arrangement agent
Small talk agent (new)
Telecommunications agent (updated)
Travel: baggage claim agent (new)
Travel: car rental agent
Travel: flight information agent
February 01, 2021
Feature
Dialogflow CX conditions now support sentiment .
January 27, 2021
Feature
Dialogflow CX beta launch of Experiments to compare the performance of flow versions to a control version while handling live traffic.
January 21, 2021
Feature
Dialogflow CX system entities can now be extended.
December 15, 2020
Feature
GA (general availability) launch of Dialogflow CX .
Feature
CX Analytics for agent activity statistics.
Feature
CX Customer-managed encryption keys (CMEK) to manage your own Dialogflow data encryption keys.
Feature
CX Parameter redaction to redact end-user parameter data from logs.
Feature
CX Prebuilt agents for common agent use cases.
Feature
CX Regionalization expanded to multiple regions globally.
Feature
CX DTMF input for telephony partner integrations.
Feature
CX Security settings to control data redaction and data retention.
November 24, 2020
Feature
The Dialogflow CX test cases feature is now launched and documented.
November 20, 2020
Feature
The Dialogflow Messenger integration is now implemented for Dialogflow CX.
Feature
Agent Validation is now implemented for Dialogflow CX.
November 04, 2020
Feature
Dialogflow CX now supports the same languages as Dialogflow ES.
Change
Since October 2020, Dialogflow ES no longer automatically creates service accounts upon agent creation. Some service accounts may still be automatically created once you continue working with an agent.
September 01, 2020
Feature
Beta launch of Dialogflow CX . Dialogflow CX provides a new way of designing agents, taking a state machine approach to agent design. This gives you clear and explicit control over a conversation, a better end-user experience, and a better development workflow.
Change
The service previously named Dialogflow is now called Dialogflow ES , and the term Dialogflow is now an umbrella term used to describe both the Dialogflow ES and Dialogflow CX services.
Change
As part of introducing Dialogflow CX, some changes have been made to editions :
Dialogflow Enterprise Edition is no longer used as an umbrella term for paid editions.
Dialogflow Standard Edition is now called Dialogflow Trial Edition .
Dialogflow Plus Edition and Dialogflow Essentials Edition
have been merged to one Dialogflow Essentials (ES) Edition .
Dialogflow Customer Experience (CX) Edition is a new edition with a simpler pricing and quota model.
August 10, 2020
Feature
Beta launch of regionalization and data residency .
July 30, 2020
Feature
GA (general availability) launch of mega agents .
Feature
Beta launch of the Facebook Workplace integration .
July 27, 2020
Feature
Beta launch of Dialogflow Messenger . This new integration provides a customizable chat dialog for your agent that can be embedded in your website.
July 23, 2020
Deprecated
Amazon Alexa importer and exporter are no longer supported.
July 06, 2020
Feature
The Dialogflow Console has been upgraded with an improved Analytics page (Beta) that provides new metrics and data views.
June 29, 2020
Deprecated
The V1 API is in the process of a gradual shutdown. See the November 14, 2019 release note for details.
June 01, 2020
Change
The shutdown of 7 integrations announced in January is now extended to July 6th, 2020.
May 29, 2020
Change
The Dialogflow Facebook Messenger integration has been updated to to be compliant with newer Facebook Messenger API versions. If you have an agent that enabled this integration prior to today, you should have received an email from Dialogflow with upgrade instructions. If you have not received this email, please contact Dialogflow support .
May 17, 2020
Change
Old Node.js client library require statements must be updated. Your require statements should look like this:
const dialogflow = require('@google-cloud/dialogflow').v2;
or this:
const dialogflow = require('@google-cloud/dialogflow').v2beta1;
Old syntax that does not include @google-cloud is now deprecated. The old syntax will continue to work, but you will not receive updates.
May 08, 2020
Feature
Beta launch of a one-click integration with the Voximplant telephony partner:
May 05, 2020
Feature
GA (general availability) launch of auto speech adaptation .
April 30, 2020
Feature
Beta launch of a one-click integration with a new telephony partner:
Avaya
April 25, 2020
Change
In May 2020, the Facebook Messenger integration will be updated, and you may notice slight changes related to fulfillment.
To make sure that your Facebook Messenger bot keeps functioning normally, observe the following recommendations:
To get the Facebook sender.id value, use the originalDetectIntentRequest.payload.data.sender field from the Dialogflow WebhookRequest message.
To get the source field value, use the originalDetectIntentRequest.source field from the Dialogflow WebhookRequest message.
To send rich response messages from your webhook to the Facebook Messenger integration, use the WebhookResponse.fulfillment_messages[].payload field.
In your webhook logic, don't rely on the fields that are not documented in the official Facebook Messenger API .
If you have any questions, reach out to your primary support channel .
April 20, 2020
Feature
Beta launch of one-click integrations with two telephony partners:
AudioCodes
SignalWire
March 31, 2020
Change
When using fulfillment, the WebhookResponse.payload field can now only be used for two cases:
Custom data sent from your webhook service to a Dialogflow API caller.
Google Assistant integration custom payload rich response messages.
For all other
custom payload rich response messages ,
you should use the WebhookResponse.fulfillment_messages[].payload field.
March 27, 2020
Change
The shutdown of the V1 API announced in November has been extended to May 31, 2020,
March 13, 2020
Change
On March 16, 2020, the Inline Editor will use Cloud Functions instead of Cloud Functions for Firebase .
March 10, 2020
Change
Event names are now limited to 150 characters .
February 19, 2020
Feature
You can now update fulfillment settings with the API. For more information, visit the agent reference and click the link for your protocol or client library language.
Feature
GA (general availability) launch of agent validation .
Feature
GA (general availability) launch of versions and environments .
January 31, 2020
Feature
Beta launch of mega agents to combine multiple sub-agents agents into a single mega agent.
January 06, 2020
Deprecated
The following integrations are now deprecated and will be shut down on April 6th, 2020 May 6th, 2020 June 6th, 2020 July 6th, 2020 :
Kik
Skype
Spark
Twilio IP Messaging
Twilio (Text Messaging)
Twitter
Viber
Your live bots that use these integrations will stop working unless you take action. The implementations of these integrations have moved to open source. To continue using these integrations, follow the instructions at the GitHub repository .
December 19, 2019
Change
If you use the Telegram integration,
and the bot was created before August 19th, 2019, you must restart the integration in the Dialogflow console by February 28th, 2020. To restart it, perform the following steps for all your agents that use Telegram:
Make sure you don't change or delete your current token on the Telegram side.
Open the agent in the Dialoglow Console.
In the integration settings, click the STOP button.
Then click the START button.
December 04, 2019
Feature
You can now use Mutual TLS authentication to ensure that webhook traffic is both secure and trusted.
Deprecated
The Cortana exporter has been removed from the console.
November 14, 2019
Change
We are extending the V1 API shutdown deadline to March 31st, 2020 May 31st, 2020. Migrate to the V2 API as described here .
If you use Dialogflow exclusively for Actions on Google, you don't need to migrate your agent to the V2 API. However, note the following changes:
The Dialogflow simulator will show responses in the V2 format and the "Copy curl" button will generate requests in the V2 format. This should have no impact on the functionality of the Actions on Google simulator.
You will no longer be able to call API methods for the V1 intents and entities resources. You will still be able to modify your agent using the Dialogflow Console.
October 17, 2019
Change
When calling the API to provide an intent priority value,
the behavior has changed to the following:
If the supplied value is unspecified or 0, the service
translates the value to 500,000, which corresponds to the
Normal priority in the console.
If the supplied value is negative, the intent is ignored
in runtime detect intent requests.
Prior to this change, a value of 0 was stored as-is by the service. Any agents created before this change may still have intent priority values of 0. For runtime detect intent requests, a value of 0 is treated as -1, and the intent is ignored.
October 01, 2019
Feature
You can now create session entities with fulfillment .
Feature
You can now disable automatic agent training. See the ML settings for details.
September 20, 2019
Feature
Beta launch of Agent Validation to check your agent for quality and correctness.
September 19, 2019
Feature
You can now use System entity extension to extend system entities with custom values.
September 13, 2019
Feature
You can now use Fuzzy matching to allow flexibility with word ordering for multi-word entities.
Feature
You can now use Regexp entities to provide regular expressions for matching entities.
July 23, 2019
Feature
Beta launch of Auto speech adaptation to improve the speech recognition accuracy of your agent.
June 13, 2019
Feature
You can now create and update agents with the API. See the Agents type reference .
May 23, 2019
Feature
All REST command line samples in documentation now include both curl (Linux, macOS) and PowerShell (Windows) commands.
Feature
GA (general availability) launch of Sentiment analysis .
Feature
GA (general availability) launch of Speech response .
Change
Pricing and Quotas have been updated for speech response and sentiment analysis.
May 15, 2019
Feature
Integration with Hangouts Chat is now supported.
April 18, 2019
Feature
The new @sys.person system entity has been added to all languages except Portuguese and Ukrainian. It is used for given names, last names, or their combinations. You should start using @sys.person instead of the existing @sys.given-name and @sys.last-name system entities.
January 15, 2019
Feature
Added support for Polish, including new system entities and pre-defined follow-up intents .
December 18, 2018
Feature
Added support for Turkish, including new system entities and pre-defined follow-up intents .
Deprecated
You can no longer annotate training phrases with some locale-specific entities. These entities are marked as deprecated in the system entities documentation. However, if you already have training phrases annotated with these entities in your existing agents, they will continue to function properly.
December 04, 2018
Deprecated
Template mode has been deprecated. Example mode is the only supported way to create new training phrases. If you have existing training phrases that you've created in template mode, those will continue to work. For more information, see Example and template modes
September 20, 2018
Feature
Added zh-TW machine learning support.
August 09, 2018
Feature
The Dialogflow Enterprise Edition Plus pricing plan is now available. See Editions for details.
July 24, 2018
Feature
Beta launch of Knowledge Connectors
Feature
Beta launch of Telephony Gateway
Feature
Beta launch of Adding Sentiment Analysis to Detect Intent Requests
Feature
Beta launch of Adding Speech Response to Detect Intent Requests
Feature
Beta launch of Data Logging and Enhanced Speech Models
Feature
Beta launch of Automatic Spell Correction
May 08, 2018
Feature
You can now enable and view Stackdriver logs for your fulfillment.
Feature
The following geography system entities have been added to pt-BR, Nl, Ko, Hi, Id, Th, No, Sv, and Da languages: @sys.geo-country, @sys.geo-city, and @sys.geo-capital.
Feature
The Versions and Environments beta feature has launched.
Feature
When a phrase is matched to an intent when it shouldn't be, you can now designate it as a negative example and add it to the Default Fallback Intent.
April 17, 2018
Change
The Dialogflow V2 API is now GA (general availability). See the Google Cloud blog post for details. Users of the V2beta1 API are encouraged to migrate to the V2 API. See Migrating code from Dialogflow V2beta1 to V2 for instructions. The V2beta1 API will continue to be a beta channel for the stable V2 API. If you plan to continue using V2beta1, see the migration instructions which describe how enabling ML will become the default.
March 29, 2018
Feature
We added additional system entities for the following languages:
Hindi (hi)
Thai (th)
Indonesian (id)
Swedish (sv)
Danish (da)
Norwegian (no)
February 22, 2018
Feature
We added additional support for these languages:
Hindi (hi)
Thai (th)
Indonesian (id)
Swedish (sv)
Danish (da)
Norwegian (no)
We added ML support for these languages:
Brazilian Portuguese (br-PT)
Korean (ko)
Dutch (nl)
December 01, 2017
Change
We updated these prebuilt agents: flights (added FAQ) and profile bot (renamed to "Job Interview").
Feature
We added new prebuilt agents: banking, easter egg, mobile account, and online shopping
November 16, 2017
Feature
Dialogflow Beta release.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
