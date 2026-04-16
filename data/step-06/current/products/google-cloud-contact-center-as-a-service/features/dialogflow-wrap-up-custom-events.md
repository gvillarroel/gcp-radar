---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.135Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Dialogflow wrap-up custom events"
feature_slug: "dialogflow-wrap-up-custom-events"
latest_feature_date: "2023-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "dialogflow"
  - "wrap"
  - "up"
  - "custom"
  - "events"
  - "sends"
  - "df"
  - "cx"
---

# Dialogflow wrap-up custom events

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Sends DF wrap-up events as custom events to Dialogflow CX when a Virtual Agent session ends.

## Extended Definition

Sends DF wrap-up events as custom events to Dialogflow CX when a Virtual Agent session ends.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Emails will have the end-user's entered email address in the Reply-to Header field All emails will use this subject format: {Queue Name} [from: {email} ] Your CRM team should set up a rule that identifies the email address in the subject or body of the email and use the email address to identify the contact for the best experience Once enabled, the email form with the custom email per-queue shows at all times for the email channel, including: during operation hours, after operation hours, and for email deflection options CCAI Platform portal sends to the email address specified and then inbound emails are handled by your email provider.
- Redefined indicates that the wrap-up settings for that specific queue have been customized and are different from the default settings inherited from the global or parent queue level.
- Queue-level wrap-up settings Queue-level wrap-up settings allow you to customize the communication of wrap-up times for different queues within a contact center.
- If an IVR queue menu is mapped as an Mobile PSTN fallback, the queue cannot be deleted without removing this association Rich data The following data is passed to the CRM ticket for the IVR fallback call: End-user's phone number To gather the phone number data, the end-user is required to input their phone number Example phone number gathering screen in Mobile: Selected queue menu When the end-user makes a call via PSTN, the system retrieves the queue name and custom data package via phone number lookup Custom data package (as configured by your mobile development team) The custom data package is mapped to the correct ticket based on the active call session with the phone number entered by the end-user in the app CCAI Platform portal configuration Go to Settings > Queue > Mobile .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- When a chat changes from Active to Dismissed: The chat handle time is paused The chat's handle time is based on only the active chat time The chat ID remains the same In the chat transcript, 2 activities are logged Timestamp when the User/Agent left the chat Ex. "[13:30:39 System] Admin U. left the chat." Chat dismissed Ex. "[13:30:39 System] Chat dismissed" When a chat changes from Dismissed to Active: The chat's handle time timer starts from where it left off The chat's handle time is based on the total active chat time The chat ID remains the same Customizing strings/prompts Web SDK To update messaging for your consumers, strings for the Web SDK can be customized by your web developers installing and configuring the Web SDK.
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- To differentiate between a Message Preview and a message that was previously sent by the consumer, the Message Preview is displayed with the following changes while the consumer is typing: The background of the chat bubble is white/transparent The chat bubble has a dashed-line border The chat font is italicized The chat displays Message Preview below the bubble instead of the timestamp Once the consumer sends their message, the Message Preview is updated to display as a typical message with the colored background, standard font, and timestamp.
- The following variables are available: Customer Attributes : First Name : the end-user's first name Last Name : the end-user's last name Full Name : the end-user's full name Agent Attributes : First Name : the agent's first name Last Name : the agent's last name Full Name : the agent's full name Alias : the agent's alias ID : the agent's ID Session Attributes : Queue : the assigned queue Repeat this step to add more attributes.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- CRM sends agent status update When Agent is not Offline in CCAI Platform, CRM status changes will be made in CCAI Platform based on status mapping When Agent is in Offline in CCAI Platform, CRM status changes will be ignored When the CRM status changes while on an active session/call CCAI Platform treats this status change the same as the agent Next Status feature and when the session is complete, after Wrap-up, the next status is governed by the new CRM status If the agent has defined their Next Status and a CRM status change request is also received, the agent's next status will be set to the latest received status Salesforce Configuration Configure omni-channel If your org has already configured Omni-Channel, skip this section.
- Create an APEX REST class Although your code will be different, please see the below example: @RestResource ( urlmapping = '/searchVIP' ) global class UjetVIPSearch { @httpPOST global static void searchVIP () { RestRequest req = RestContext . request ; RestResponse res = RestContext . response ; responsewrapper response = new responsewrapper (); try { requestWrapper jsonBody ; jsonBody = ( requestWrapper ) JSON . deserialize ( req . requestBody . toString (), requestWrapper . class ); String aninumber = jsonBody . phone ; // CCAI Platform will send phone parameter in format % 222 % 333 % 4444 if ( string . isNotBlank ( aninumber )) { integer cnt = [ SELECT count() from Contact where Contact.Phone like :aninumber AND VIP c = true ] ; response . is vip = ( cnt > 0 ); res . responseBody = blob . valueof ( JSON . serialize ( response )); } else { res . statuscode = 404 ; res . responseBody = blob . valueof ( 'No Contact found' ); } } catch ( exception e ) { res . statuscode = 500 ; res . responseBody = blob . valueof ( e . getmessage ()); } } public class responsewrapper { public boolean is vip ; } public class requestWrapper { public string phone ; } } Modify security Since the Apex REST class will be accessed by the agent's OAuth token, you will need to add all applicable agent profiles into the "Enabled Profiles" column.
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.

