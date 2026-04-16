---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.058Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Supported languages"
feature_slug: "supported-languages"
latest_feature_date: "2025-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-location"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "languages"
  - "now"
  - "supports"
  - "additional"
  - "agent"
  - "facing"
  - "end"
  - "user"
---

# Supported languages

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The product now supports additional agent-facing and end-user-facing languages, including Croatian, Hindi, Romanian, Russian, Ukrainian, Tagalog, and English (India).

## Extended Definition

The product now supports additional agent-facing and end-user-facing languages, including Croatian, Hindi, Romanian, Russian, Ukrainian, Tagalog, and English (India).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-location](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-location)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following agent facing languages are supported: Arabic Chinese English French (France) French (Canada) Japanese German Italian Korean Portuguese Spanish (Mexico) Spanish (Spain) Thai Turkish Vietnamese Consumer facing languages For consumer-facing languages, once a language is added: You can customize queue names.
- Supported languages Agent facing languages Admins can configure locations and those locations have default assigned languages.
- Customer-facing languages currently include: Arabic Czech Chinese, Simplified Chinese, Traditional Danish Dutch English (Australian) English (Canada) English (UK) English (US) Finnish French (France) French (Canada) German Hungarian Italian Japanese Korean Norwegian Polish Portuguese (Brazil) Portuguese (Portugal) Spanish (Spain) Spanish (Mexico) Swedish Thai Turkish Vietnamese Note: Text-to-Speech (TTS) is not yet available for these languages.
- Sample input Hi @{END USER}, thank you for contacting us. @{AGENT} Description: inserts the first name of the Agent. @{QUEUE SIZE} Description: this is the position in queue; the numerical value representing the current total number of consumers waiting in queue including the consumer seeing the number is inserted.

### "Localized languages in the agent adapter \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-location](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-location)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Localized languages in the agent adapter Stay organized with collections Save and categorize content based on your preferences.
- Note: See Supported Languages for the full list of agent and consumer facing supported languages.
- User interface components Localized user interface components: The agent will see all call and chat adapter controls in the language set or selected, including call flows, confirmation and error messages, agent statistics and more.
- Agents can choose from a list of supported languages using the CCAI Platform portal and localized Adapters.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- Mobile SDK All Mobile SDK functionality is the same as the Web SDK with these notable exceptions: Mobile SDK supports Picture and Video attachments up to 18MB Mobile SDK allows for multiple file types to be uploaded to the same message Mobile SDK supports uploading all file types (Text, Picture, Video) No rich text editor functionality Does not support reCAPTCHA Setting up and assigning agents to channels and queues: IVR, mobile, web Overview Channels are configurable and should be enabled and set up individually.
- Details At least one agent must be assigned to a call/chat queue for the queue to be enabled Agents can only be assigned to a leaf queue, so if there is a sub-queue associated, agents must be assigned to one of the sub-queues Queue menus are set up and ready to use when the color turns from red to white If enabling multiple languages, see Enabling Multiple Languages Assign agents to the IVR channel Go to Settings > Queue.
- Configuration details Calls transferred to a third party are recorded; however, once the agent leaves the call, the remainder of the call between the end-user and the 3rd party is redacted.

