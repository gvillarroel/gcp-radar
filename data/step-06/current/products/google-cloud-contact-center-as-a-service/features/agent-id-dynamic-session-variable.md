---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.116Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent ID dynamic session variable"
feature_slug: "agent-id-dynamic-session-variable"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "agent"
  - "id"
  - "dynamic"
  - "session"
  - "variable"
  - "can"
  - "inserted"
  - "automated"
---

# Agent ID dynamic session variable

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The agent ID can be inserted as a session variable in automated messages and chat shortcuts to support agent-specific routing.

## Extended Definition

The agent ID can be inserted as a session variable in automated messages and chat shortcuts to support agent-specific routing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- If you still need help, email support@yourcompany.com Chat : Shows once the chat option is selected with other queues available for selection below Example after hours chat screen: Sample variable attributes for customizing web and mobile messages The following variables can be inserted into Mobile and Web SDK messages and reference either information passed from the SDK or wait information.
- Agent Assigned Message: Message sent to the consumer once an agent has been assigned to the session. @{AGENT} will chat with you about @{QUEUE} Dismissal Warning Notification (Web Only): When inactive chats are set to auto-dismiss messages, this message is sent to the consumer based on the timer set in Settings > Chat .
- Sample input Hi @{END USER}, thank you for contacting us. @{AGENT} Description: inserts the first name of the Agent. @{QUEUE SIZE} Description: this is the position in queue; the numerical value representing the current total number of consumers waiting in queue including the consumer seeing the number is inserted.
- Variables for dynamic consumer messages Variables are dynamic content tags that allow you to personalize messaging configuration in order to manage secure payments, configure greeting and after-hours messaging, and inform customers of their wait time and place in queue.

### "Configure custom panels \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dynamically control the custom-panel language You can use the {AGENT LOCATION LANGUAGE} or the {AGENT LANGUAGE} variable in your custom URL to dynamically control the language for a custom panel: Agent location language : Add the {AGENT LOCATION LANGUAGE} variable to your URL to display the custom panel in the language of the agent's assigned location.
- These variables capture agent, end-user, and session information.
- End-user variables {UJET ID} : the end-user ID {ANI} : the end-user's phone number {DEVICE TYPE} : the device type of the end-user Session variables {SESSION TYPE} : the session type {PHONE NUMBER} : the end-user's phone number {SESSION ID} : the call ID or chat ID {MENU PATH} : the URL path to the menu {QUEUE NAME} : the name of the queue {QUEUE ID} : the internal queue ID {LANGUAGE} : the queue language {OUTBOUND PHONE NUMBER} : the outbound phone number {SUPPORT PHONE NUMBER} : the support phone number the end-user is calling Functions You can include functions from the following table in URLs and HTTP header field values.
- Agent variables {AGENT ID} : the agent ID {AGENT CUSTOM ID} : the agent's custom ID {AGENT EMAIL} : the agent's email {AGENT ALIAS} : the agent's alias {AGENT LOCATION LANGUAGE} : the language code for the language of the agent's assigned location—for example, en-US .

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Example use cases: Show order details for a specific user via Mobile or Web queues Present your users with product offerings based on their locations by directing to a specialized web page based on user ID Mobile FAQ page landing can be personalized to show the right page for the user's membership tier based on the User ID Feature details If mobile or Web SDK passes User ID/identifier to CCAI Platform portal, it can be inserted as a session variable into your manual deflection webpage or FAQ link From the Admin Portal, an admin can add "@@USER ID@@" into the URL in Manual Deflection to Webpage field under Mobile or Web queues to dynamically retrieve and insert User ID From the Admin Portal, an admin can add "@@USER ID@@" into the URL for Mobile FAQ to dynamically retrieve and insert UID CCAI Platform portal configuration Automatic redirect Go to Settings > Queue > Mobile OR Web .
- Insert a dynamic user ID Overview This feature enables the CCAI Platform portal to work with your mobile or web SDKs User ID/unique ID as a session variable for tracking or content personalization.
- When the variable is included in the Automatic Redirect to website option, the User ID value is dynamically inserted into the URL.
- Wrap-up settings Wrap-up exceeded This setting allows you to transition agents into a Wrap-up Exceeded status after they have gone beyond a wrap-up threshold time and have cleared all ongoing sessions.

