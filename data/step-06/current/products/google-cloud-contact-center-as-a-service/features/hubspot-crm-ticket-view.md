---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:46.996Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "HubSpot CRM ticket view"
feature_slug: "hubspot-crm-ticket-view"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "hubspot"
  - "crm"
  - "ticket"
  - "view"
  - "integrations"
  - "can"
  - "now"
  - "use"
---

# HubSpot CRM ticket view

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

HubSpot integrations can now use either the standard CRM ticket view or the real-time Help desk view.

## Extended Definition

HubSpot integrations can now use either the standard CRM ticket view or the real-time Help desk view.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- To differentiate between a Message Preview and a message that was previously sent by the consumer, the Message Preview is displayed with the following changes while the consumer is typing: The background of the chat bubble is white/transparent The chat bubble has a dashed-line border The chat font is italicized The chat displays Message Preview below the bubble instead of the timestamp Once the consumer sends their message, the Message Preview is updated to display as a typical message with the colored background, standard font, and timestamp.
- Proactive Web SDK Triggers Overview When triggers are configured, and the trigger conditions are met, the Web SDK window will appear expanded on the page, prompting the consumer to make a selection from choices dictated by the trigger configuration.
- Chat Shortcuts Overview When chatting with consumers and prospects, agents need to get to the resolution as quickly as possible, and chat shortcuts can be used to add repeatable phrases, steps, and solutions to chat conversations.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Many new updates to the Agent call adapter Review and select from multiple matching account records Select from open cases associated with the selected account Create a new case Configurable option to not create a ticket and/or create a new ticket Handling multiple matching account records Flexible ticket to session association Feature details The object/term Account is referenced below as well as in the Agent Adapter UI, however, the object being referenced as "Account" may be different based on your configuration in Developer Settings .
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.
- Case owner and assignment After the default administrator is enabled, the default administrator is used as the owner for the following: Ticket/case and contact creation when a new chat is initiated before an agent is assigned to the chat Voicemail tickets/cases before receiving a callback call Call ticket/cases for abandoned calls (if enabled) Note: If the default user is not configured, CCAI Platform uses a random Agent When a call/chat is transferred: CCAI Platform assigns the case to the agent who the call is transferred to.
- Admin Portal settings that can impact the Agent experience Do not append call or chat session to any existing open ticket Prompt agents to select open case from list (when applicable) Allow agent to select "Create a new case" option for outbound calls Allow agent to select "Do not create a case" option for outbound calls Allow "Use entered number to make call" option Attach CCAI Platform Sessions directly to the account lookup object.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Boolean true UjetOption ujetOption = new UjetOption.Builder () .setLogLevel ( Log.INFO ) .setDefaultLanguage ( "en" ) .setFallbackPhoneNumber ( "+18001112222" ) .setUncaughtExceptionHandlerEnabled ( false ) .setNetworkSensitivity ( 0 ) .setDarkModeEnabled ( true ) .setShowSingleChannelEnabled ( true ) .setAutoMinimizeCallView ( true ) .setShowAgentIconBorderEnabled ( true ) .setStaticFontSizeInPickerView ( true ) .setHideMediaAttachmentInChat ( true ) .setIgnoreReadPhoneStatePermission ( true ) .setCobrowseLicenseKey ( "COBROWSE IO LICENSE KEY HERE" ) .setCobrowseURL ( "COBROWSE IO API URL HERE" ) .setCustomChatHeaderTitle ( "CHAT HEADER TITLE TEXT" ) .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatQuickReplyButtonsStyle ( QuickReplyButtonsStyle.INDIVIDUAL ) .setChatStyles ( new ChatStyles ( ... )) // See Content Cards Theme item .build () ) .setBlockChatTerminationByEndUser ( true ) .setHideStatusBar ( true ) .setLoadingSpinnerDrawableRes ( R.drawable.RESOURCE NAME ) .setLandscapeOrientationDisabled ( true ) .setShowCsatSkipButton ( false ) .setHideDownloadChatTranscript ( 0 ) // 0 to 3 .
- You will need to add an intent filter that contains the deep link in your manifest. <activity android:name = "co.ujet.android.activity.UjetActivity" > <intent-filter> <action android:name = "android.intent.action.VIEW" /> <category android:name = "android.intent.category.DEFAULT" /> <category android:name = "android.intent.category.BROWSABLE" /> <data android:host = "<package name>" android:scheme = "ujet" android:path = "/smartchannel" /> </intent-filter> </activity> Preferred channel The Preferred Channel parameter lets you to route consumers directly to a specific channel.
- Configure external deflection link icons Customize the icon in the External Deflection Link channel by uploading the icon into a drawable folder of your app and ensure you use the same icon name while creating the external deflection link in the CCAI Platform portal at Settings > Chat > External Deflection Links > View links > Add Deflection Link.
- String ticketId = "TICKET ID" ; UjetStartOptions ujetStartOptions = new UjetStartOptions.Builder () .setTicketId ( ticketId ) .build () ; Ujet.start ( ujetStartOptions ) ; Send custom data to your CRM Custom data can be sent to support agents and will appear in the support ticket for the incoming call/chat.

