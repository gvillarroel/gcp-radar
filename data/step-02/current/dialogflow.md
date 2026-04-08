# Dialogflow

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 277
Unique features: 329

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-11 | Cloud Logging log splitting |  | Conversational Agents now splits large Cloud Logging entries into smaller log entries. |
| 2025-12-11 | Responsible AI fields |  | The v3 and v3beta1 APIs now expose Responsible AI fields that let you flag, filter, or block harmful content. |
| 2025-11-13 | Regular expression validation |  | Agent Settings and Entity Types now support regular expression validation. |
| 2025-11-06 | Custom voice |  | Conversation profiles now let you specify a custom voice in the console. |
| 2025-10-23 | Block none safety setting |  | The Block none safety option in agent settings is no longer restricted access. |
| 2025-10-23 | Entity Types pagination settings |  | The Entity Types console now lets you set page size for entity entries and excluded phrases. |
| 2025-10-23 | LlmModelSettings model parameters |  | The v3beta1 API now exposes temperature, input_token_limit, and output_token_limit in LlmModelSettings so you can tune the model per playbook. |
| 2025-10-23 | Service account authorization for tools and webhooks |  | You can now configure service account authorization for both tools and webhooks. |
| 2025-10-16 | Dialogflow CX console | 2025-10-31 | The Dialogflow CX console will be deprecated and users will be automatically routed to the Conversational Agents console; deprecated on 2025-10-31. |
| 2025-09-04 | Data store tools |  | Data store tools now support gemini-2.5-flash-lite in all regions and gemini-2.5-flash in GA; Data store tools now support Gemini 2.0 Flash and Gemini 2.0 Flash-Lite models. |
| 2025-09-04 | Generators |  | Generators now support gemini-2.5-flash-lite in all regions and gemini-2.5-flash in GA; Generators now support Gemini 2.0 Flash and Gemini 2.0 Flash-Lite models. |
| 2025-09-04 | Playbooks |  | Playbooks now support gemini-2.5-flash-lite in all regions and gemini-2.5-flash in GA; Playbooks now support Gemini 2.0 Flash and Gemini 2.0 Flash-Lite models. |
| 2025-09-04 | Prompt security controls |  | Agent settings now include new prompt security controls. |
| 2025-08-07 | Gemini 1.0 Pro model | 2025-09-01 | This Gemini model version is used by Vertex AI agents and Conversational Agents generative features; deprecated on 2025-09-01. |
| 2025-08-07 | Gemini 1.5 Flash model | 2025-09-01 | This Gemini model version is used by Vertex AI agents and Conversational Agents generative features; deprecated on 2025-09-01. |
| 2025-08-07 | Gemini 1.5 Pro model | 2025-09-01 | This Gemini model version is used by Vertex AI agents and Conversational Agents generative features; deprecated on 2025-09-01. |
| 2025-07-31 | Parameter passing between playbooks and flows |  | Parameters can now be passed between routine playbooks, task playbooks, and flows. |
| 2025-07-31 | Routine playbooks |  | Routine playbooks are generally available; Routine playbooks are a Dialogflow CX playbook type for recurring conversational workflows. |
| 2025-07-24 | AlloyDB data store source |  | This data store source is available as a public GA source for Conversational Agents data stores; This data store source is available as a public GA source for Conversational Agents data stores. |
| 2025-07-24 | Bigtable data store source |  | This data store source is available as a public GA source for Conversational Agents data stores; This data store source is available as a public GA source for Conversational Agents data stores. |
| 2025-07-24 | Chirp 3 HD voices |  | Twenty-one new Chirp 3 HD voices are available across 34 locales; New Chirp 3 HD Cloud Text-to-Speech voices are now available. |
| 2025-07-24 | Cloud SQL data store source |  | This data store source is available as a public GA source for Conversational Agents data stores; This data store source is available as a public GA source for Conversational Agents data stores. |
| 2025-07-24 | Firestore data store source |  | This data store source is available as a public GA source for Conversational Agents data stores; This data store source is available as a public GA source for Conversational Agents data stores. |
| 2025-07-24 | Microsoft Entra ID data store source |  | This data store source is available in private GA for Conversational Agents data stores; This data store source is available in private GA for Conversational Agents data stores. |
| 2025-07-24 | Spanner data store source |  | This data store source is available as a public GA source for Conversational Agents data stores; This data store source is available as a public GA source for Conversational Agents data stores. |
| 2025-07-17 | Conversational history flow analysis |  | The conversational history flow analysis feature is available. |
| 2025-07-17 | Customer-managed encryption keys (CMEK) |  | Customer-managed encryption keys are available in EU regions. |
| 2025-07-17 | Gemini 2.5 Flash model |  | This Gemini model is available in all regions for Generators, Playbooks, and Data stores tools. |
| 2025-06-26 | Data store creation in the Conversational Agents console |  | Some data store types can be created directly in the Conversational Agents console. |
| 2025-04-24 | Code blocks |  | Playbooks now support code blocks for finer control. |
| 2025-04-24 | Tool testing |  | The console now lets you test tools. |
| 2025-04-24 | Voice cloning |  | You can create personalized voice models with voice cloning. |
| 2025-04-01 | Prebuilt agents |  | All prebuilt agents are now generally available. |
| 2025-03-27 | Data store sources |  | Additional native and third-party data store sources are now available in private GA. |
| 2025-03-21 | Conversational Agents console |  | The Conversational Agents console is now generally available; A console for creating agents that combine generative and deterministic features. |
| 2025-03-21 | Dialogflow CX Playbooks |  | Playbooks now support 38 languages; Playbooks now support DTMF in playbook settings and conditional actions as a preview feature. |
| 2025-03-21 | Gemini 2.0 Flash model |  | Gemini 2.0 Flash is now available in preview for playbooks. |
| 2025-03-21 | Language management |  | The console adds a Manage languages option for language settings. |
| 2025-03-21 | Latency display |  | The simulator can now show latency per conversation turn. |
| 2025-03-21 | Multiple tool versions |  | Agents now support multiple tool versions alongside playbooks and flows. |
| 2025-03-21 | Simulator |  | The simulator now has feature parity with the Dialogflow CX console. |
| 2025-03-14 | Dialogflow CX customer-managed encryption keys |  | Customer-managed encryption keys (CMEK) is now generally available; Dialogflow CX supports Customer-Managed Encryption Keys for encrypting customer data. |
| 2025-03-11 | Dialogflow CX Data Store Handlers |  | Data store handlers now support the gemini-2.0-flash-lite-001 model in multiple regions as a preview feature. |
| 2025-03-11 | Dialogflow CX generators |  | Generators now support the gemini-2.0-flash-001 model in multiple regions as a generally available feature; Dialogflow CX generators provide generative content capabilities within agents. |
| 2025-03-10 | Additional Git provider support |  | Dialogflow CX Git export and restore now supports additional Git providers. |
| 2025-03-10 | Conditional actions |  | Conditional actions add branching behavior to Dialogflow CX playbooks. |
| 2025-03-10 | Connector tools |  | Connector tools can be used in Dialogflow CX playbooks to connect with external systems. |
| 2025-03-10 | Dialogflow CX Console Search |  | The console search feature now searches all resources, including playbooks, examples, and tools. |
| 2025-03-10 | DTMF support |  | Dialogflow CX playbooks now support DTMF input. |
| 2025-03-10 | Gemini 2.0 Flash 001 in data store handlers |  | Dialogflow CX data store handlers now support the Gemini 2.0 Flash 001 model as a Preview feature in selected regions. |
| 2025-03-10 | Google Secrets token storage |  | Dialogflow CX Git export and restore can store tokens in Google Secrets. |
| 2025-03-10 | Language management in the Conversational Agents console |  | The Conversational Agents console can now be used to manage languages. |
| 2025-03-10 | Task playbooks |  | Task playbooks are a Dialogflow CX playbook type for task-oriented conversations. |
| 2025-02-24 | Chirp HD voices |  | Dialogflow text-to-speech now supports Chirp HD voices. |
| 2025-02-24 | Dialogflow text-to-speech voices | 2025-02-24 | Dialogflow can synthesize responses using supported text-to-speech voices; deprecated on 2025-02-24. |
| 2025-01-09 | Banned phrase full-match requirement |  | Dialogflow CX can require banned phrases to match the entire input exactly before the ban is triggered. |
| 2025-01-09 | Generative phrase and synonym translation |  | Dialogflow CX can auto-generate and auto-translate intent training phrases, entity synonyms, and fulfillment phrases into a selected language. |
| 2025-01-09 | Service Directory support for flexible webhooks |  | Dialogflow CX flexible webhooks can integrate with Service Directory. |
| 2024-12-19 | Banned phrase match requirements |  | Dialogflow CX lets you configure banned phrases to use either partial-match or full-match behavior across playbooks, datastores, and generators. |
| 2024-12-12 | Dialogflow Messenger access token name |  | Dialogflow Messenger can store an end-user authentication token under a configured access token name and use it as a bearer token for tool authentication. |
| 2024-11-14 | Context token limits |  | Dialogflow CX can reserve a configurable percentage of the token budget for conversation history in generative AI settings. |
| 2024-11-14 | RAG optimization for data store tools |  | Data store tools used by Dialogflow playbooks can be optimized for retrieval-augmented generation performance. |
| 2024-10-24 | G.711 A-law audio encoding |  | Dialogflow CX and ES support G.711 A-law encoding for input and output audio in addition to Mu-law. |
| 2024-10-10 | gemini-1.5-flash-001 for data store handlers |  | Conversational Agents data store handlers support the gemini-1.5-flash-001 model in general availability. |
| 2024-10-10 | gemini-1.5-flash-002 for data store handlers |  | Conversational Agents data store handlers support the gemini-1.5-flash-002 model in public preview. |
| 2024-09-26 | Prompt injection security checks |  | Dialogflow CX can perform security checks to help prevent prompt injection attacks. |
| 2024-09-19 | code-bison model | 2024-10-21 | Dialogflow CX generative features used the code-bison model for supported agent capabilities; deprecated on 2024-10-21. |
| 2024-09-19 | Journey Voices MULAW output encoding |  | Text-to-Speech Journey Voices in Dialogflow CX and ES support MULAW output audio encoding in addition to LINEAR16. |
| 2024-09-19 | text-bison model | 2024-10-21 | Dialogflow CX generative features used the text-bison model for supported agent capabilities; deprecated on 2024-10-21. |
| 2024-09-19 | text-bison@002 model | 2024-10-21 | Dialogflow CX generative features used the text-bison@002 model for supported agent capabilities; deprecated on 2024-10-21. |
| 2024-08-29 | Journey Voices LINEAR16-only output support |  | Text-to-Speech Journey Voices in Dialogflow CX and ES were updated to support only LINEAR16 output audio encoding. |
| 2024-08-15 | Custom client certificates for OpenAPI tool authentication |  | Vertex AI Agents OpenAPI tool authentication supports custom client certificates for mutual TLS authentication. |
| 2024-08-15 | Safety filter sensitivity controls |  | Dialogflow CX lets you configure sensitivity levels for safety filters across Responsible AI categories. |
| 2024-07-26 | Consent-based end-user content redaction |  | Dialogflow CX can redact end-user input and parameters from conversation history and Cloud Logging based on consent. |
| 2024-07-11 | Agent app generative settings |  | Vertex AI Agents agent apps provide generative settings for input token limit, output token limit, and temperature. |
| 2024-06-27 | gemini-1.5-flash for generators |  | Dialogflow CX generators can use the gemini-1.5-flash generative model. |
| 2024-06-13 | Additional regions for agent apps |  | Vertex AI Agents agent apps are supported in europe-west1, europe-west2, europe-west3, northamerica-northeast1, and us-west1. |
| 2024-06-07 | code-bison@001 model | 2024-06-07 | Dialogflow generative features used the code-bison@001 model for supported generative capabilities; deprecated on 2024-06-07. |
| 2024-06-07 | Fine-tuned text-bison@001 options | 2024-07-06 | Dialogflow generative features supported fine-tuned text-bison@001 model options; Dialogflow generative features supported fine-tuned text-bison@001 model options; deprecated on 2024-07-06. |
| 2024-06-07 | gemini-1.5-flash for data store agents |  | Data store agents can select the gemini-1.5-flash generative model in the console. |
| 2024-06-07 | Salesforce custom webhook templates |  | Dialogflow CX provides custom webhook templates for Salesforce integrations. |
| 2024-06-07 | Self-service evaluation for data store agents |  | Data store agents can run self-service evaluation to assess quality and receive recommended changes. |
| 2024-06-07 | text-bison-001 model | 2024-07-06 | Dialogflow generative features used the text-bison@001 model for supported generative capabilities; Dialogflow generative features used the text-bison-001 model for supported generative capabilities; deprecated on 2024-07-06. |
| 2024-05-29 | Soul Machines integration |  | Dialogflow CX can integrate with Soul Machines to create 3-D avatars. |
| 2024-05-21 | Bearer token support for OpenAPI tool authentication |  | Vertex AI Agents OpenAPI tool authentication supports bearer tokens. |
| 2024-05-21 | Private network access for OpenAPI tools |  | Vertex AI Agents OpenAPI tools support private network access. |
| 2024-05-21 | VPC Service Controls support for Cloud Functions and Cloud Run |  | Dialogflow CX VPC Service Controls support Cloud Functions and Cloud Run. |
| 2024-04-30 | EU multi-region support for agent apps |  | Vertex AI Agents agent apps support the EU multi-region. |
| 2024-04-30 | Expanded language support for agent apps |  | Vertex AI Agents agent apps support all languages available in Vertex AI generative models. |
| 2024-04-30 | Session ID built-in parameter |  | Dialogflow CX exposes the session ID through built-in parameters. |
| 2024-04-23 | US multi-region for Dialogflow CX |  | Dialogflow CX is available in the US multi-region through the usa-dialogflow.googleapis.com hostname. |
| 2024-04-18 | Conversation history API |  | Dialogflow CX offers a Conversation History API in public preview. |
| 2024-04-04 | Cross-language data stores for agents |  | Vertex AI Conversation can connect a data store created in one language to an agent that uses different languages. |
| 2024-04-03 | Language auto-detect for chat |  | Dialogflow CX chat conversations can automatically detect an end-user's language and respond in the same language. |
| 2024-04-02 | Call companion |  | Dialogflow CX Call Companion is generally available and includes new user interface settings. |
| 2024-04-02 | Dialogflow CX phone gateway |  | Dialogflow CX phone gateway is generally available. |
| 2024-04-02 | Parse and chunk configuration for data stores |  | Vertex AI Conversation data stores support configurable parsing and chunking behavior. |
| 2024-03-29 | Smart endpointing |  | Dialogflow CX can enable smart endpointing for speech interactions. |
| 2024-03-25 | DTMF for telephony integrations |  | Dialogflow CX telephony integrations support DTMF input in preview. |
| 2024-03-25 | Gemini Pro 1.0 for Vertex AI Conversation data stores |  | Vertex AI Conversation data stores support Gemini Pro 1.0 in general availability with optimized prompting. |
| 2024-03-25 | Request-level speech model override |  | Dialogflow CX can override the speech model specified in a runtime API request through advanced speech settings. |
| 2024-03-19 | $request.user-utterance request-scoped parameter |  | Dialogflow CX request-scoped parameters support $request.user-utterance to reference the end-user utterance. |
| 2024-03-19 | Filter and userMetadata example parameters for data store tools |  | Vertex AI Conversation data store tools support filter and userMetadata example parameters. |
| 2024-03-19 | Offers and deals prebuilt component |  | Dialogflow CX provides a prebuilt component for offers and deals use cases. |
| 2024-03-18 | Cancel order prebuilt component |  | Dialogflow CX provides a prebuilt component for cancel order workflows. |
| 2024-03-18 | Exchange order prebuilt component |  | Dialogflow CX provides a prebuilt component for exchange order workflows. |
| 2024-03-18 | Retail fraud and dispute prebuilt component |  | Dialogflow CX provides a prebuilt component for retail fraud and dispute workflows. |
| 2024-03-18 | Return and refund prebuilt component |  | Dialogflow CX provides a prebuilt component for return and refund workflows. |
| 2024-03-05 | Playbook-based generative agent creation |  | Vertex AI Conversation supports creating generative agents with playbooks in public preview. |
| 2024-02-20 | Channel-specific response messages |  | Dialogflow CX supports channel-specific response messages for Google Chat, LINE, Messenger from Meta, Workplace from Meta, and Slack. |
| 2024-02-20 | Custom entity import and export |  | Dialogflow CX supports importing and exporting custom entities. |
| 2024-02-13 | Dialogflow CX text-to-speech custom voices |  | Dialogflow CX text-to-speech settings support selecting custom voices. |
| 2024-02-12 | Dialogflow CX order status prebuilt component |  | Dialogflow CX provides a prebuilt component for order status flows. |
| 2024-02-12 | Dialogflow CX retail authentication prebuilt component |  | Dialogflow CX provides a prebuilt component for retail authentication flows. |
| 2024-01-25 | Vertex AI Conversation data stores unstructured CSV support |  | Vertex AI Conversation data stores support unstructured CSV content. |
| 2024-01-24 | Data store agents custom summarization prompts |  | Data store agents support custom summarization prompts. |
| 2024-01-24 | Dialogflow CX generators model support |  | Dialogflow CX generators support the text-bison@002 and gemini-pro models. |
| 2024-01-18 | Dialogflow CX partial response playback cancellation |  | Dialogflow CX supports cancellation of partial response playback. |
| 2024-01-16 | Vertex AI Conversation generative agents |  | Vertex AI Conversation provides generative agents in the Vertex AI Conversation console. |
| 2023-12-21 | Data store agents generative model selection |  | Data store agents support selecting the generative model. |
| 2023-12-19 | Dialogflow CX Workplace from Meta integration |  | Dialogflow CX provides an integration for Workplace from Meta. |
| 2023-12-14 | Dialogflow CX Department of Motor Vehicles generative prebuilt agent |  | Dialogflow CX provides a generative prebuilt agent for Department of Motor Vehicles use cases. |
| 2023-12-14 | Dialogflow CX retail generative prebuilt agent |  | Dialogflow CX provides a generative prebuilt agent for retail use cases. |
| 2023-12-14 | Dialogflow CX travel generative prebuilt agent |  | Dialogflow CX provides a generative prebuilt agent for travel use cases. |
| 2023-12-12 | Data store agents customer-managed encryption keys |  | Data store agents support Customer-Managed Encryption Keys for encrypting customer data. |
| 2023-12-04 | Dialogflow speech telephony speech models |  | Dialogflow supports the telephony and telephony_short speech recognition models for en and en-us. |
| 2023-11-29 | Dialogflow CX answer feedback |  | Dialogflow CX answer feedback collects user feedback on answers and includes related configuration options; Dialogflow CX answer feedback collects user feedback on answers. |
| 2023-11-01 | Data store agents language and region expansion |  | Data store agents support additional languages and regions. |
| 2023-11-01 | Dialogflow CX DIVIDE system function |  | Dialogflow CX provides the DIVIDE system function. |
| 2023-11-01 | Dialogflow CX MULTIPLY system function |  | Dialogflow CX provides the MULTIPLY system function. |
| 2023-10-23 | Dialogflow CX account balance prebuilt component |  | Dialogflow CX provides a prebuilt component for account balance flows. |
| 2023-10-23 | Dialogflow CX account statement prebuilt component |  | Dialogflow CX provides a prebuilt component for account statement flows. |
| 2023-10-23 | Dialogflow CX alphanumeric collection prebuilt component |  | Dialogflow CX provides a prebuilt component for alphanumeric collection flows. |
| 2023-10-23 | Dialogflow CX arrange appointment prebuilt component |  | Dialogflow CX provides a prebuilt component for arranging appointments. |
| 2023-10-23 | Dialogflow CX authentication prebuilt component |  | Dialogflow CX provides a prebuilt component for authentication flows. |
| 2023-10-23 | Dialogflow CX credit card enrollment prebuilt component |  | Dialogflow CX provides a prebuilt component for credit card enrollment flows. |
| 2023-10-23 | Dialogflow CX credit card statement prebuilt component |  | Dialogflow CX provides a prebuilt component for credit card statement flows. |
| 2023-10-23 | Dialogflow CX disputes prebuilt component |  | Dialogflow CX provides a prebuilt component for disputes flows. |
| 2023-10-23 | Dialogflow CX financial services steering prebuilt component |  | Dialogflow CX provides a prebuilt component for financial services steering flows. |
| 2023-10-23 | Dialogflow CX lock card prebuilt component |  | Dialogflow CX provides a prebuilt component for lock card flows. |
| 2023-10-23 | Dialogflow CX lost and stolen card prebuilt component |  | Dialogflow CX provides a prebuilt component for lost and stolen card flows. |
| 2023-10-23 | Dialogflow CX make a payment prebuilt component |  | Dialogflow CX provides a prebuilt component for payment flows. |
| 2023-10-23 | Dialogflow CX open account prebuilt component |  | Dialogflow CX provides a prebuilt component for account opening flows. |
| 2023-10-23 | Dialogflow CX transaction history prebuilt component |  | Dialogflow CX provides a prebuilt component for transaction history flows. |
| 2023-10-12 | Dialogflow CX generative feedback |  | Dialogflow CX generative feedback supports more languages. |
| 2023-10-12 | Dialogflow CX generative playbooks |  | Dialogflow CX provides generative playbooks for building generative conversational experiences. |
| 2023-10-02 | Dialogflow CX manual speech adaptation |  | Dialogflow CX supports manual configuration of speech adaptation. |
| 2023-09-29 | Dialogflow CX Google Chat integration |  | Dialogflow CX provides an integration for Google Chat. |
| 2023-09-29 | Dialogflow CX Slack integration |  | Dialogflow CX provides an integration for Slack. |
| 2023-09-25 | Dialogflow CX call companion |  | Dialogflow CX call companion provides a mobile user interface that supplements a phone call with an agent. |
| 2023-09-19 | Dialogflow CX intent import/export |  | Dialogflow CX supports importing and exporting intents; Dialogflow CX supports importing and exporting intents. |
| 2023-09-19 | Dialogflow CX training phrase import/export |  | Dialogflow CX supports importing and exporting training phrases. |
| 2023-09-15 | Dialogflow CX FILTER system function |  | Dialogflow CX provides the FILTER system function. |
| 2023-09-15 | Dialogflow CX recursive flow export |  | Dialogflow CX flow export supports recursive export of flows. |
| 2023-08-31 | Dialogflow CX generative AI agents |  | Dialogflow CX generative AI agents use generative AI to power conversational agents. |
| 2023-08-31 | Dialogflow CX generative fallback |  | Dialogflow CX generative fallback uses generative AI to respond when standard matching does not resolve an input; Dialogflow CX generative fallback uses generative AI when standard matching does not resolve an input. |
| 2023-08-31 | Dialogflow CX generative personalization |  | Dialogflow CX generative personalization adapts generative responses using personalization context. |
| 2023-08-31 | Dialogflow CX Messenger |  | Dialogflow CX Messenger is the redesigned generally available web messaging integration. |
| 2023-08-31 | Legacy Dialogflow Messenger | 2023-08-31 | Legacy Dialogflow Messenger is the older version of the Dialogflow CX Messenger integration; deprecated on 2023-08-31. |
| 2023-08-14 | Dialogflow CX route groups |  | Dialogflow CX route groups can be scoped at the flow level or the agent level. |
| 2023-08-11 | Dialogflow CX open source integrations |  | Google open sourced a set of Dialogflow CX integrations for multiple external platforms. |
| 2023-08-08 | Dialogflow CX analytics |  | Dialogflow CX analytics was reimplemented with new views and metrics; Dialogflow CX provides analytics for agent activity statistics. |
| 2023-08-08 | Dialogflow CX compare and merge intents |  | Dialogflow CX provides a feature to compare and merge intents. |
| 2023-08-08 | Dialogflow CX conversation history flow analysis views |  | Dialogflow CX conversation history includes flow analysis table and graph views. |
| 2023-08-08 | Dialogflow CX intent suggestions |  | Dialogflow CX provides intent suggestions. |
| 2023-08-08 | Dialogflow CX split intents |  | Dialogflow CX provides a feature to split intents. |
| 2023-08-08 | Dialogflow CX timeout-based end-of-speech sensitivity |  | Dialogflow CX provides a timeout-based end-of-speech sensitivity setting. |
| 2023-08-01 | Dialogflow CX feedback prebuilt component |  | Dialogflow CX provides a prebuilt component for feedback flows. |
| 2023-07-18 | Dialogflow CX generative AI agent |  | Dialogflow CX provides a generative AI agent capability for conversational automation. |
| 2023-07-11 | Dialogflow CX speech recognition model selection |  | Dialogflow CX supports selecting the speech recognition model. |
| 2023-07-06 | Dialogflow CX conversation history |  | Dialogflow CX conversation history provides access to prior conversation records and analysis. |
| 2023-07-05 | Dialogflow CX GitHub export/restore |  | Dialogflow CX supports exporting and restoring agents through GitHub. |
| 2023-07-05 | Dialogflow CX interaction logging export to BigQuery |  | Dialogflow CX supports exporting interaction logs to BigQuery. |
| 2023-07-05 | Dialogflow CX prebuilt components |  | Dialogflow CX prebuilt components are reusable prebuilt flows for common agent scenarios. |
| 2023-06-28 | Dialogflow CX flow-scoped parameters |  | Dialogflow CX supports parameters scoped to a flow. |
| 2023-06-27 | Dialogflow CX IS_CREDIT_CARD_NUMBER system function |  | Dialogflow CX provides the IS_CREDIT_CARD_NUMBER system function. |
| 2023-06-27 | Dialogflow CX IS_DATE system function |  | Dialogflow CX provides the IS_DATE system function. |
| 2023-06-27 | Dialogflow CX IS_FUTURE_DATE system function |  | Dialogflow CX provides the IS_FUTURE_DATE system function. |
| 2023-06-27 | Dialogflow CX IS_PAST_DATE system function |  | Dialogflow CX provides the IS_PAST_DATE system function. |
| 2023-06-27 | Dialogflow CX IS_PHONE_NUMBER system function |  | Dialogflow CX provides the IS_PHONE_NUMBER system function. |
| 2023-06-27 | Dialogflow CX NESTED_FIELD system function |  | Dialogflow CX provides the NESTED_FIELD system function. |
| 2023-06-27 | Dialogflow CX ROUND system function |  | Dialogflow CX provides the ROUND system function. |
| 2023-06-27 | Dialogflow CX TO_OBJECT system function |  | Dialogflow CX provides the TO_OBJECT system function. |
| 2023-06-27 | Dialogflow CX TO_PHONE_NUMBER system function |  | Dialogflow CX provides the TO_PHONE_NUMBER system function. |
| 2023-06-27 | Dialogflow CX UPPER system function |  | Dialogflow CX provides the UPPER system function. |
| 2023-05-03 | Dialogflow CX ADD_DATE system function |  | Dialogflow CX provides the ADD_DATE system function. |
| 2023-04-26 | Dialogflow CX training phrase import |  | Dialogflow CX supports importing training phrases. |
| 2023-04-12 | Dialogflow CX flexible webhooks |  | Dialogflow CX flexible webhooks allow configuration of HTTP method, URL parameters, and request and response message fields. |
| 2023-03-27 | Dialogflow CX TO_NUMBER system function |  | Dialogflow CX provides the TO_NUMBER system function. |
| 2023-03-21 | Dialogflow CX sentiment analysis |  | Dialogflow CX sentiment analysis supports all Dialogflow CX regions and more than 70 new languages. |
| 2023-03-03 | Dialogflow CX speech synthesis voice selection |  | Dialogflow CX provides a setting for choosing the speech synthesis voice. |
| 2023-02-14 | Dialogflow CX regional system entities support |  | Dialogflow CX supports selected system entities in additional regions for English, French, Italian, German, and Spanish. |
| 2023-02-06 | Flow import conflict resolution |  | Dialogflow CX provides flow import options to resolve resource conflicts during import. |
| 2023-01-18 | Channel-specific responses |  | Dialogflow CX supports responses tailored to specific communication channels. |
| 2023-01-18 | Custom payload templates |  | Dialogflow CX supports reusable custom payload templates for responses. |
| 2022-12-27 | MATCH system function |  | Dialogflow CX supports the MATCH system function for expressions and conditions. |
| 2022-12-16 | Flow export to draw.io |  | Dialogflow CX can export flows as diagrams in draw.io XML format. |
| 2022-12-12 | Interaction logging export to BigQuery |  | Dialogflow CX can export interaction logs to BigQuery. |
| 2022-12-12 | Sentiment analysis regional support |  | Dialogflow CX sentiment analysis is available in additional regions for several supported languages. |
| 2022-11-21 | GitHub integration |  | Dialogflow CX integrates with GitHub to push exported agents and pull agents for restore. |
| 2022-11-15 | Agent export to JSON |  | Dialogflow CX can export agents in JSON format. |
| 2022-11-07 | Language support |  | Dialogflow CX supports additional generally available languages for agent interactions; Dialogflow ES supports additional preview languages for agent interactions. |
| 2022-10-21 | Twilio telephony integration |  | Dialogflow CX provides a telephony integration with Twilio; Dialogflow ES provides a telephony integration with Twilio. |
| 2022-10-11 | Automatic training |  | Dialogflow CX Advanced NLU supports automatic training. |
| 2022-10-03 | Conversation history tool |  | Dialogflow CX provides a tool to browse, filter, and analyze production conversations. |
| 2022-07-06 | C# client library |  | Dialogflow CX provides a client library for C#; Dialogflow ES provides a client library for C++. |
| 2022-07-06 | Go client library |  | Dialogflow CX provides a client library for Go. |
| 2022-06-21 | Search |  | Dialogflow CX provides search across core agent resources; Dialogflow CX provides search to find, filter, and access core resources within an agent. |
| 2022-06-13 | Google Assistant integration | 2023-06-13 | Dialogflow ES integrates with Google Assistant for conversational experiences; deprecated on 2023-06-13. |
| 2022-05-23 | Fine-grained webhook errors for built-in events |  | Dialogflow CX supports fine-grained webhook error handling for built-in events. |
| 2022-05-23 | Version-specific webhooks |  | Dialogflow CX supports assigning webhooks to specific versions. |
| 2022-04-06 | Access Transparency logging |  | Dialogflow CX supports Access Transparency logs for Google personnel access to Dialogflow data. |
| 2022-04-05 | Agent editing lock |  | Dialogflow CX provides a setting to lock agent editing. |
| 2022-04-05 | List-related system functions |  | Dialogflow CX provides list-related system functions including APPEND, GET, and REMOVE. |
| 2022-01-19 | IDENTITY system function |  | Dialogflow CX provides the IDENTITY system function for copying composite parameter objects in parameter presets. |
| 2021-12-15 | Auto sync for agent collaboration |  | Dialogflow CX provides auto sync to support collaborative agent editing; Dialogflow CX provides auto sync to support collaborative agent editing. |
| 2021-12-15 | Change history |  | Dialogflow CX provides change history for tracking agent modifications; Dialogflow CX provides change history for tracking agent modifications. |
| 2021-12-15 | Simulator flow version selection |  | Dialogflow CX simulator lets you specify flow versions during simulation. |
| 2021-12-13 | Regional availability |  | Dialogflow CX is available in additional Google Cloud regions; Dialogflow CX is available in the asia-south1 region. |
| 2021-12-08 | Simulator page lifecycle navigation |  | Dialogflow CX simulator provides page lifecycle navigation to show execution steps for each conversational turn. |
| 2021-11-17 | Agent backup |  | Dialogflow CX supports agent backup. |
| 2021-11-17 | Call transfer |  | Dialogflow CX Phone Gateway supports call transfer. |
| 2021-11-17 | Custom CA certificates for webhooks |  | Dialogflow CX webhooks support custom certificate authority certificates. |
| 2021-10-20 | Regionalized ES V2 API |  | Dialogflow ES V2 API supports regionalized operation. |
| 2021-10-19 | Change history API |  | Dialogflow CX exposes change history through the API. |
| 2021-10-19 | Continuous testing and deployment |  | Dialogflow CX provides a preview feature for continuous testing and deployment. |
| 2021-10-15 | Flow version comparison |  | Dialogflow CX provides side-by-side comparison of flow versions. |
| 2021-08-11 | Experiments |  | Dialogflow CX provides experiments to compare flow version performance against a control version using live traffic. |
| 2021-07-02 | sys.long-utterance built-in event |  | Dialogflow CX provides the sys.long-utterance built-in event to handle user queries that exceed the maximum length. |
| 2021-06-30 | Versions and environments API |  | Dialogflow ES API provides methods to manage versions and environments. |
| 2021-06-25 | System functions |  | Dialogflow CX provides system functions for use in expressions and conversational logic. |
| 2021-06-15 | Dialogflow V1 API | 2021-07-12 | Dialogflow V1 API supports bot requests for legacy Dialogflow integrations; The Dialogflow V1 API is undergoing a gradual shutdown; deprecated on 2021-07-12. |
| 2021-04-19 | Dialogflow CX regional support in us-west1 |  | Dialogflow CX supports deployment in the us-west1 region. |
| 2021-04-16 | Dialogflow CX Phone Gateway integration |  | Dialogflow CX includes an integration with Phone Gateway for telephony access. |
| 2021-04-13 | Dialogflow CX Facebook Messenger integration |  | Dialogflow CX includes an integration with Facebook Messenger. |
| 2021-04-13 | Dialogflow CX LINE integration |  | Dialogflow CX includes an integration with LINE messaging. |
| 2021-04-13 | Dialogflow CX Voximplant integration |  | Dialogflow CX includes an integration with Voximplant. |
| 2021-04-07 | Dialogflow CX expanded language support |  | Dialogflow CX adds support for Arabic, Bengali, Filipino, Finnish, Malay, Marathi, Romanian, Sinhala, Tamil, Telugu, and Vietnamese. |
| 2021-04-01 | Legacy analytics page | 2021-04-01 | The legacy analytics page in the Dialogflow ES console was removed and replaced by the generally available analytics page; deprecated on 2021-04-01. |
| 2021-03-03 | VPC Service Controls support |  | Dialogflow supports VPC Service Controls for both CX and ES agents. |
| 2021-02-18 | Dialogflow ES regional support in europe-west1 |  | Dialogflow ES supports deployment in the europe-west1 region. |
| 2021-02-02 | Dialogflow CX Financial services agent |  | Dialogflow CX provides a prebuilt Financial services agent. |
| 2021-02-02 | Dialogflow CX Healthcare agent |  | Dialogflow CX provides a prebuilt Healthcare agent. |
| 2021-02-02 | Dialogflow CX Order and account management agent |  | Dialogflow CX provides a prebuilt Order and account management agent. |
| 2021-02-02 | Dialogflow CX Payment arrangement agent |  | Dialogflow CX provides a prebuilt Payment arrangement agent. |
| 2021-02-02 | Dialogflow CX Small talk agent |  | Dialogflow CX provides a prebuilt Small talk agent. |
| 2021-02-02 | Dialogflow CX Telecommunications agent |  | Dialogflow CX provides a prebuilt Telecommunications agent. |
| 2021-02-02 | Dialogflow CX Travel baggage claim agent |  | Dialogflow CX provides a prebuilt Travel baggage claim agent. |
| 2021-02-02 | Dialogflow CX Travel car rental agent |  | Dialogflow CX provides a prebuilt Travel car rental agent. |
| 2021-02-02 | Dialogflow CX Travel flight information agent |  | Dialogflow CX provides a prebuilt Travel flight information agent. |
| 2021-02-01 | Dialogflow CX sentiment conditions |  | Dialogflow CX conditions can use sentiment in conditional logic. |
| 2021-01-27 | Dialogflow CX Experiments |  | Dialogflow CX Experiments compare the performance of flow versions against a control version on live traffic. |
| 2021-01-21 | Dialogflow CX system entity extension |  | Dialogflow CX allows system entities to be extended with custom values. |
| 2020-12-15 | Dialogflow CX |  | Dialogflow CX is a conversational agent design experience based on flow and state-machine concepts; Dialogflow CX is a conversational agent design experience based on flow and state-machine concepts. |
| 2020-12-15 | Dialogflow CX DTMF input |  | Dialogflow CX supports DTMF input for telephony partner integrations. |
| 2020-12-15 | Dialogflow CX parameter redaction |  | Dialogflow CX can redact end-user parameter data from logs. |
| 2020-12-15 | Dialogflow CX prebuilt agents |  | Dialogflow CX provides prebuilt agents for common use cases. |
| 2020-12-15 | Dialogflow CX regionalization |  | Dialogflow CX supports regionalized deployment across multiple global regions. |
| 2020-12-15 | Dialogflow CX security settings |  | Dialogflow CX security settings control data redaction and data retention. |
| 2020-11-24 | Dialogflow CX test cases |  | Dialogflow CX includes a test cases feature for validating agent behavior. |
| 2020-11-20 | Dialogflow CX agent validation |  | Dialogflow CX includes agent validation to check agents for issues. |
| 2020-11-20 | Dialogflow CX Messenger integration |  | Dialogflow CX includes the Dialogflow Messenger integration for web chat. |
| 2020-11-04 | Dialogflow CX multilingual language support |  | Dialogflow CX supports the same set of languages as Dialogflow ES. |
| 2020-08-10 | Dialogflow regionalization and data residency |  | Dialogflow supports regionalization and data residency controls. |
| 2020-07-30 | Facebook Workplace integration |  | Dialogflow includes an integration with Facebook Workplace. |
| 2020-07-30 | Mega agents |  | Mega agents combine multiple sub-agents into a single agent configuration; Mega agents combine multiple sub-agents into a single mega agent. |
| 2020-07-27 | Dialogflow Messenger |  | Dialogflow Messenger provides a customizable chat dialog that can be embedded in a website. |
| 2020-07-23 | Amazon Alexa exporter | 2020-07-23 | The Amazon Alexa exporter is no longer supported; deprecated on 2020-07-23. |
| 2020-07-23 | Amazon Alexa importer | 2020-07-23 | The Amazon Alexa importer is no longer supported; deprecated on 2020-07-23. |
| 2020-07-06 | Analytics page |  | The Dialogflow Console includes an improved Analytics page with new metrics and data views. |
| 2020-05-08 | Voximplant telephony integration |  | Dialogflow includes a one-click integration with the Voximplant telephony partner. |
| 2020-05-05 | Auto speech adaptation |  | Dialogflow provides auto speech adaptation for speech recognition tuning; Auto Speech Adaptation improves agent speech recognition accuracy. |
| 2020-04-30 | Avaya telephony integration |  | Dialogflow includes a one-click integration with the Avaya telephony partner. |
| 2020-04-20 | AudioCodes telephony integration |  | Dialogflow includes a one-click integration with the AudioCodes telephony partner. |
| 2020-04-20 | SignalWire telephony integration |  | Dialogflow includes a one-click integration with the SignalWire telephony partner. |
| 2020-02-19 | Agent validation |  | Dialogflow includes agent validation to check agents for quality and correctness; Dialogflow includes agent validation to check agents for quality and correctness. |
| 2020-02-19 | Fulfillment settings API updates |  | Dialogflow allows fulfillment settings to be updated through the API. |
| 2020-02-19 | Versions and environments |  | Dialogflow supports versions and environments for managing agent releases; Versions and Environments let you manage agent versions and deployment environments. |
| 2020-01-06 | Kik integration | 2020-01-06 | The built-in Kik integration is deprecated and scheduled for shutdown; deprecated on 2020-01-06. |
| 2020-01-06 | Skype integration | 2020-01-06 | The built-in Skype integration is deprecated and scheduled for shutdown; deprecated on 2020-01-06. |
| 2020-01-06 | Spark integration | 2020-01-06 | The built-in Spark integration is deprecated and scheduled for shutdown; deprecated on 2020-01-06. |
| 2020-01-06 | Twilio IP Messaging integration | 2020-01-06 | The built-in Twilio IP Messaging integration is deprecated and scheduled for shutdown; deprecated on 2020-01-06. |
| 2020-01-06 | Twilio Text Messaging integration | 2020-01-06 | The built-in Twilio Text Messaging integration is deprecated and scheduled for shutdown; deprecated on 2020-01-06. |
| 2020-01-06 | Twitter integration | 2020-01-06 | The built-in Twitter integration is deprecated and scheduled for shutdown; deprecated on 2020-01-06. |
| 2020-01-06 | Viber integration | 2020-01-06 | The built-in Viber integration is deprecated and scheduled for shutdown; deprecated on 2020-01-06. |
| 2019-12-04 | Cortana exporter | 2019-12-04 | The Cortana exporter was removed from the console; deprecated on 2019-12-04. |
| 2019-12-04 | Mutual TLS authentication for webhooks |  | Dialogflow supports mutual TLS authentication for securing and trusting webhook traffic. |
| 2019-10-01 | Automatic agent training control |  | Dialogflow allows automatic agent training to be disabled. |
| 2019-10-01 | Session entities with fulfillment |  | Dialogflow can create session entities from fulfillment. |
| 2019-09-19 | System entity extension |  | Dialogflow allows system entities to be extended with custom values. |
| 2019-09-13 | Fuzzy matching |  | Dialogflow fuzzy matching improves flexibility for matching multi-word entities with varied word order. |
| 2019-09-13 | Regexp entities |  | Dialogflow regexp entities allow regular expressions to be used for entity matching. |
| 2019-06-13 | Agent Management API |  | The API supports creating and updating Dialogflow agents. |
| 2019-05-23 | Sentiment Analysis |  | Sentiment Analysis evaluates end-user sentiment in Dialogflow interactions. |
| 2019-05-23 | Speech Response |  | Speech Response returns spoken responses from detect intent requests. |
| 2019-05-15 | Hangouts Chat Integration |  | Hangouts Chat Integration allows Dialogflow agents to connect with Hangouts Chat. |
| 2019-04-18 | @sys.person System Entity |  | The @sys.person system entity captures given names, last names, and full personal names. |
| 2019-01-15 | Polish Language Support |  | Polish language support adds system entities and pre-defined follow-up intents for Polish agents. |
| 2018-12-18 | Locale-specific System Entities for Training Phrase Annotation | 2018-12-18 | Some locale-specific system entities were used to annotate training phrases; deprecated on 2018-12-18. |
| 2018-12-18 | Turkish Language Support |  | Turkish language support adds system entities and pre-defined follow-up intents for Turkish agents. |
| 2018-12-04 | Template Mode for Training Phrases | 2018-12-04 | Template mode was a method for creating training phrases; deprecated on 2018-12-04. |
| 2018-09-20 | Traditional Chinese Machine Learning Support |  | Machine learning support enables Dialogflow ML features for zh-TW. |
| 2018-07-24 | Automatic Spell Correction |  | Automatic Spell Correction corrects misspellings in end-user input. |
| 2018-07-24 | Data Logging |  | Data Logging stores interaction data to support analysis and troubleshooting. |
| 2018-07-24 | Enhanced Speech Models |  | Enhanced Speech Models improve speech recognition performance for supported use cases. |
| 2018-07-24 | Knowledge Connectors |  | Knowledge Connectors allow agents to answer questions using knowledge documents. |
| 2018-07-24 | Sentiment Analysis for Detect Intent Requests |  | Sentiment Analysis for detect intent requests returns sentiment information with intent detection results. |
| 2018-07-24 | Speech Response for Detect Intent Requests |  | Speech Response for detect intent requests returns spoken output alongside intent detection results. |
| 2018-07-24 | Telephony Gateway |  | Telephony Gateway connects Dialogflow agents to telephone integrations. |
| 2018-05-08 | @sys.geo-capital System Entity |  | The @sys.geo-capital system entity recognizes capital city names. |
| 2018-05-08 | @sys.geo-city System Entity |  | The @sys.geo-city system entity recognizes city names. |
| 2018-05-08 | @sys.geo-country System Entity |  | The @sys.geo-country system entity recognizes country names. |
| 2018-05-08 | Negative Examples |  | Negative Examples let you add mismatched phrases to the Default Fallback Intent to improve intent matching. |
| 2018-05-08 | Stackdriver Logging for Fulfillment |  | Stackdriver Logging for fulfillment lets you enable and view logs for fulfillment execution. |
| 2018-03-29 | Additional System Entities for Hindi |  | Additional system entities were added for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian. |
| 2018-03-29 | and Norwegian |  | Additional system entities were added for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian; Dialogflow added broader language support for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian. |
| 2018-03-29 | Danish |  | Additional system entities were added for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian; Dialogflow added broader language support for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian. |
| 2018-03-29 | Indonesian |  | Additional system entities were added for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian; Dialogflow added broader language support for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian. |
| 2018-03-29 | Swedish |  | Additional system entities were added for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian; Dialogflow added broader language support for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian. |
| 2018-03-29 | Thai |  | Additional system entities were added for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian; Dialogflow added broader language support for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian. |
| 2018-02-22 | and Dutch |  | Machine learning support was added for Brazilian Portuguese, Korean, and Dutch. |
| 2018-02-22 | Expanded Language Support for Hindi |  | Dialogflow added broader language support for Hindi, Thai, Indonesian, Swedish, Danish, and Norwegian. |
| 2018-02-22 | Korean |  | Machine learning support was added for Brazilian Portuguese, Korean, and Dutch. |
| 2018-02-22 | Machine Learning Support for Brazilian Portuguese |  | Machine learning support was added for Brazilian Portuguese, Korean, and Dutch. |
| 2017-12-01 | Banking Prebuilt Agent |  | The Banking prebuilt agent provides a ready-made conversational agent for banking scenarios. |
| 2017-12-01 | Easter Egg Prebuilt Agent |  | The Easter Egg prebuilt agent provides a ready-made conversational agent for novelty interactions. |
| 2017-12-01 | Mobile Account Prebuilt Agent |  | The Mobile Account prebuilt agent provides a ready-made conversational agent for mobile account scenarios. |
| 2017-12-01 | Online Shopping Prebuilt Agent |  | The Online Shopping prebuilt agent provides a ready-made conversational agent for shopping scenarios. |
| 2017-11-16 | Dialogflow Beta |  | Dialogflow Beta was the beta release of the Dialogflow platform. |

Source file slug: `dialogflow.md`

