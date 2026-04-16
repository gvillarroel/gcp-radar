---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.011Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Custom panel language variables"
feature_slug: "custom-panel-language-variables"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "custom"
  - "panel"
  - "language"
  - "variables"
  - "urls"
  - "can"
  - "use"
  - "agent"
---

# Custom panel language variables

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Custom panel URLs can use agent language variables to dynamically set the panel language.

## Extended Definition

Custom panel URLs can use agent language variables to dynamically set the panel language.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Configure custom panels \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dynamically control the custom-panel language You can use the {AGENT LOCATION LANGUAGE} or the {AGENT LANGUAGE} variable in your custom URL to dynamically control the language for a custom panel: Agent location language : Add the {AGENT LOCATION LANGUAGE} variable to your URL to display the custom panel in the language of the agent's assigned location.
- Agent variables {AGENT ID} : the agent ID {AGENT CUSTOM ID} : the agent's custom ID {AGENT EMAIL} : the agent's email {AGENT ALIAS} : the agent's alias {AGENT LOCATION LANGUAGE} : the language code for the language of the agent's assigned location—for example, en-US .
- Optional: To dynamically control the custom-panel language based on the agent's assigned location or language selection, see Dynamically control the custom-panel language .
- Optional: To dynamically control the custom-panel language based on the agent's assigned location or language selection, see Dynamically control the custom-panel language .

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following agent facing languages are supported: Arabic Chinese English French (France) French (Canada) Japanese German Italian Korean Portuguese Spanish (Mexico) Spanish (Spain) Thai Turkish Vietnamese Consumer facing languages For consumer-facing languages, once a language is added: You can customize queue names.
- Customer-facing languages currently include: Arabic Czech Chinese, Simplified Chinese, Traditional Danish Dutch English (Australian) English (Canada) English (UK) English (US) Finnish French (France) French (Canada) German Hungarian Italian Japanese Korean Norwegian Polish Portuguese (Brazil) Portuguese (Portugal) Spanish (Spain) Spanish (Mexico) Swedish Thai Turkish Vietnamese Note: Text-to-Speech (TTS) is not yet available for these languages.
- If you still need help, email support@yourcompany.com Chat : Shows once the chat option is selected with other queues available for selection below Example after hours chat screen: Sample variable attributes for customizing web and mobile messages The following variables can be inserted into Mobile and Web SDK messages and reference either information passed from the SDK or wait information.
- Variables for dynamic consumer messages Variables are dynamic content tags that allow you to personalize messaging configuration in order to manage secure payments, configure greeting and after-hours messaging, and inform customers of their wait time and place in queue.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The following variables are available: Customer Attributes : First Name : the end-user's first name Last Name : the end-user's last name Full Name : the end-user's full name Agent Attributes : First Name : the agent's first name Last Name : the agent's last name Full Name : the agent's full name Alias : the agent's alias ID : the agent's ID Session Attributes : Queue : the assigned queue Repeat this step to add more attributes.
- Chat Settings - Live Translation Live translation provides real-time language translation between customers (end users) and agents.
- This enables agents to communicate with customers in their preferred language.
- When a chat changes from Active to Dismissed: The chat handle time is paused The chat's handle time is based on only the active chat time The chat ID remains the same In the chat transcript, 2 activities are logged Timestamp when the User/Agent left the chat Ex. "[13:30:39 System] Admin U. left the chat." Chat dismissed Ex. "[13:30:39 System] Chat dismissed" When a chat changes from Dismissed to Active: The chat's handle time timer starts from where it left off The chat's handle time is based on the total active chat time The chat ID remains the same Customizing strings/prompts Web SDK To update messaging for your consumers, strings for the Web SDK can be customized by your web developers installing and configuring the Web SDK.

