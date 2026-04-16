---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.072Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Session data in the agent adapter"
feature_slug: "session-data-in-the-agent-adapter"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
keywords:
  - "session"
  - "agent"
  - "adapter"
  - "can"
  - "displayed"
  - "including"
  - "virtual"
  - "variables"
---

# Session data in the agent adapter

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Session data can be displayed in the agent adapter, including virtual agent session variables and custom data from web and mobile SDK sessions.

## Extended Definition

Session data can be displayed in the agent adapter, including virtual agent session variables and custom data from web and mobile SDK sessions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)

## Supporting Pages

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prevent the display of custom data You can use the invisible to agent property with a custom data object to prevent signed or unsigned custom data from being displayed in the agent adapter.
- For more information, see View session data in the agent adapter .
- You can customize the chat header title text by using the following options: <item name = "ujet chatCustomHeaderTextColor" >@color/chatHeaderTextLightMode</item> <item name = "ujet chatCustomHeaderTextColowDark" >@color/chatHeaderTextDarkMode</item> <item name = "ujet chatCustomHeaderTextSize" >16sp</item> <item name = "ujet chatCustomHeaderTextStyle" >bold</item> You can customize Virtual Agent quick replies in the chat UI by using the following options: <item name = "ujet colorChatQuickReplyButtonBackground" >@color/chatQuickReplyButtonBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonBackgroundDark" >@color/chatQuickReplyButtonBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackground" >@color/chatQuickReplyButtonPressedBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackgroundDark" >@color/chatQuickReplyButtonPressedBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonText" >@color/chatQuickReplyButtonTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonTextDark" >@color/chatQuickReplyButtonTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedText" >@color/chatQuickReplyButtonPressedTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedTextDark" >@color/chatQuickReplyButtonPressedTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonStroke" >@color/chatQuickReplyButtonStrokeLightMode</item> <item name = "ujet colorChatQuickReplyButtonStrokeDark" >@color/chatQuickReplyButtonStrokeDarkMode</item> <item name = "ujet chatQuickReplyButtonTypeFace" >Kreon-Regular.ttf</item> <item name = "ujet chatQuickReplyButtonStrokeWidth" >3dp</item> <item name = "ujet chatQuickReplyButtonCornerRadius" >3dp</item> <item name = "ujet chatQuickReplyButtonVerticalMargin" >0dp</item> <item name = "ujet chatQuickReplyButtonHorizontalPadding" >10dp</item> <item name = "ujet chatQuickReplyButtonVerticalPadding" >1dp</item> <item name = "ujet chatQuickReplyButtonAlignment" >right</item> Content cards You can add customization for content cards along with chat customization.
- Virtual agent quick replies are grouped together by default but if you want to display them individually, you can use this config option to set QuickReplyButtonsStyle.INDIVIDUAL UjetStylesOptions QuickReplyButtonsStyle.GROUPED Customize chat UI various attributes Config option to customize various attributes such as the font, background color, icon, etc.

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- A ( -- ) displays when no score is available. last sentiment score for the last consumer response (updates in real-time) session current average sentiment score (updates in real-time) prev. leg average sentiment score of the previous segment There are three sentiments types (neutral, happy, and negative) in the Real-Time Sentiment Analysis and scores displayed fall into the following ranges: Over 63 = Happy Between 38 and 63 = Neutral Below 38 = Negative During the session, the Real-Time Sentiment Analysis scores are sent the to the Agent Adapter.
- There are three sentiments types (neutral, happy, and negative) in the Real-Time Sentiment Analysis and scores displayed fall into the following ranges: 40-75 = Neutral Over 75 = Happy Below 30 = Negative During the session, the Real-Time Sentiment Analysis scores are sent the to the Agent Adapter.
- The analysis is generated in real-time to display the sentiment of the present session, or as a one-time score upon Virtual Agent escalation.
- The analysis is generated in real-time to display the sentiment of the present session, or as a one-time score upon Virtual Agent escalation.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.
- The following variables are available: Customer Attributes : First Name : the end-user's first name Last Name : the end-user's last name Full Name : the end-user's full name Agent Attributes : First Name : the agent's first name Last Name : the agent's last name Full Name : the agent's full name Alias : the agent's alias ID : the agent's ID Session Attributes : Queue : the assigned queue Repeat this step to add more attributes.
- Here's an example of a transfer limit field: "transfer limit" : { "enabled" : true , "limit count" : 10 , "limit reached" : "true" }, Agent experience If you select Disable all transfer options when configuring the transfer limit, the Chat Transfer button in the agent adapter is inactive when the transfer limit is reached for a chat session.
- Sensitive data redaction You can configure Contact Center AI Platform (CCAI Platform) to redact sensitive data from chat sessions in real time in the agent adapter, in the web SDK widget, and in chat transcripts.

