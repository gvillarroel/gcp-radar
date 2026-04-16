---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.010Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Custom data-collection forms for chats in Web SDK"
feature_slug: "custom-data-collection-forms-for-chats-in-web-sdk"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide"
keywords:
  - "custom"
  - "collection"
  - "forms"
  - "chats"
  - "web"
  - "sdk"
  - "can"
  - "send"
---

# Custom data-collection forms for chats in Web SDK

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Web SDK can send custom data-collection forms for chats to end users.

## Extended Definition

The Web SDK can send custom data-collection forms for chats to end users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Real-time and Standard Reporting Real-time reports Dismissed chats are moved from Chats > Ongoing to Chats Previous The status for dismissed chats on the Previous Chats page is Dismissed - Inactive End user If that chat is restarted by the consumer sending a response, the chat is placed back in queue and will show in Chats > Future When an agent picks up a restarted chat, that chat will be moved to the Ongoing chat page Reporting The chat duration timer stops as soon as a chat has been placed into dismissed status.
- Ex. "Can we help you?" "Want to learn more?" Proactive triggers help increase product sales and customer retention while minimizing customer churn by sending a relevant, targeted message from any web page.
- All default and custom statuses other than "Available" are considered unavailable, allowing the agent to self-select when they are ready to take chats by changing their status to Available.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.
- Here are the reserved data properties that you can send to CCAI Platform: reserved verified customer : indicates that you consider this end-user to be a legitimate customer. reserved bad actor : indicates that you consider this end-user to potentially be a bad actor.
- Using SmartActions for Web SDK Chats While the same flow of prompting the consumer to take an action like send a photo or video is not available for Web SDK chat, consumers can still add image attachments.

### "Chat platform API Guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- When an end user selects this option, after the email is sent, The customer will need to mark the chat as deflected and ended by using the PATCH /chats/:id endpoint with the following params in the request body: "status": "finished" , "escalation id": &lt;id of escalation> , and "deflection channel": "email" Continue with virtual agent : This is technically a valid deflection option, however it doesn't make sense for using the queue selection VA as the VA would just try to escalate the chat again.
- Sending the media file as a chat message : To send the media file as a chat message, send the following payload to the POST /chats/:id/message endpoint : { "from user id" : <id of end user>, "message" : "type" : < "photo" or "video" >, "content" : { "media id" : < media id returned as described in 2 .c > } } Expect unrecognized JSON keys in API responses All API updates are backward compatible.
- If a link is selected, end the chat and use external link for the deflection channel parameter Send and receive messages To send or receive messages, follow these steps: Text content : To send text messages, use the POST /chats/:id/message endpoint as defined in the API doc.
- Creating chats with transcripts: The chat platform API supports creating a chat with a transcript of an existing conversation, for a scenario where a chat happens within a customer's platform, for example, with a chatbot, before being sent to Contact Center AI Platform.

