---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.072Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Rich messaging"
feature_slug: "rich-messaging"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "rich"
  - "messaging"
  - "lets"
  - "users"
  - "format"
  - "chat"
  - "messages"
  - "styles"
---

# Rich messaging

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Rich messaging lets users format chat messages with styles, lists, links, and emojis in the chat adapter, shortcuts, and SDK initial messages.

## Extended Definition

Rich messaging lets users format chat messages with styles, lists, links, and emojis in the chat adapter, shortcuts, and SDK initial messages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Global Chat Settings pane, for Rich Messaging , select the required options from the following: Allow agents to attach files Allow agents to format messages (e.g. bold, italicize, create lists) Allow agents to use emojis .
- Rich formatting and emojis are available in chat shortcuts and in web SDK and mobile SDKs messages without any special configuration.
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- Configure rich messaging and file attachments for the chat adapter To configure rich messaging and file attachments for the chat adapter, follow these steps: In the CCAI Platform portal, click Settings > Chat .

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 0 = Show everywhere, 1 = Hide from the options menu, 2 = Hide from the post chat screen, 3 = Hide from both the options menu and the post chat screen. .setPushNotificationsAllowed ( true ) .build () ; //The following customizes various attributes in chat UI ChatStyles chatStyles = new ChatStyles () ; chatStyles.setBackButton ( new BackButtonStyle ( false, "ujet agent sample" )) ; //customizes back button styles chatStyles.setHeader ( ... ) ; //customizes chat header styles chatStyles.setAgentMessageBubbles ( ... ) ; //customizes agent messages styles chatStyles.setConsumerMessageBubbles ( ... ) ; //customizes consumer messages styles chatStyles.setSystemMessages ( ... ) ; //customizes system messages styles chatStyles.setEndChatButton ( ... ) ; //customizes end chat button styles chatStyles.setTimeStamps ( ... ) ; //customizes timestamp styles chatStyles.setUserInputBar ( ... ) ; //customizes user input bar styles UjetOption ujetOption = new UjetOption.Builder () .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatStyles ( chatStyles ) .build () ) //The following customizes various attributes in chat UI using json file.
- The Contact Center AI Platform (CCAI Platform) Android SDK uses foreground services to initiate chat and call, so we used FOREGROUND SERVICE REMOTE MESSAGING service type for chat as we are dealing with text messages and FOREGROUND SERVICE MICROPHONE service type for call.
- Use UjetCustomData.putObject("external chat transfer", hashMapObject) to set the transcript data in JSON format as follows: HashMap<String, Object> jsonData = new HashMap<> () ; // Convert json string into hashmap object and store it in jsonData UjetCustomData customData = new UjetCustomData () ; customData.putObject ( "external chat transfer" , jsonData ) ; // Use external chat transfer key to send chat transcript data UjetStartOptions ujetStartOptions = new UjetStartOptions.Builder () .setUnsignedCustomData ( customData ) .build () ; Ujet.start ( ujetStartOptions ) ; JSON format: greeting override : string agent : dictionary name : string avatar : string [url of agent avatar, optional] transcript : array sender : string ["end user" or "agent"] timestamp : string [ie "2021-03-15 12:00:00Z"] content : array type : string [one of text, media] text : string [required for text type] media : dictionary [required for media type] type : string [one of image, video] url : string [public URL pointing at media file] JSON example: { "greeting override" : "Please hold while we connect you with a human agent." , "agent" : { "name" : "Name" , "avatar" : "avatar url" }, "transcript" : [ { "sender" : "agent" , "timestamp" : "2021-03-15 12:00:15Z" , "content" : [ { "type" : "text" , "text" : " Suggestions shown: \n\n Help with batch or delivery\n Help with metrics or order feedback\n Help with Instant Cashout" } ] }, { "sender" : "end user" , "timestamp" : "2021-03-15 12:00:16Z" , "content" : [ { "type" : "text" , "text" : "Help with batch or delivery" } ] } ] } You can use Markdown on the text type.
- Boolean true UjetOption ujetOption = new UjetOption.Builder () .setLogLevel ( Log.INFO ) .setDefaultLanguage ( "en" ) .setFallbackPhoneNumber ( "+18001112222" ) .setUncaughtExceptionHandlerEnabled ( false ) .setNetworkSensitivity ( 0 ) .setDarkModeEnabled ( true ) .setShowSingleChannelEnabled ( true ) .setAutoMinimizeCallView ( true ) .setShowAgentIconBorderEnabled ( true ) .setStaticFontSizeInPickerView ( true ) .setHideMediaAttachmentInChat ( true ) .setIgnoreReadPhoneStatePermission ( true ) .setCobrowseLicenseKey ( "COBROWSE IO LICENSE KEY HERE" ) .setCobrowseURL ( "COBROWSE IO API URL HERE" ) .setCustomChatHeaderTitle ( "CHAT HEADER TITLE TEXT" ) .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatQuickReplyButtonsStyle ( QuickReplyButtonsStyle.INDIVIDUAL ) .setChatStyles ( new ChatStyles ( ... )) // See Content Cards Theme item .build () ) .setBlockChatTerminationByEndUser ( true ) .setHideStatusBar ( true ) .setLoadingSpinnerDrawableRes ( R.drawable.RESOURCE NAME ) .setLandscapeOrientationDisabled ( true ) .setShowCsatSkipButton ( false ) .setHideDownloadChatTranscript ( 0 ) // 0 to 3 .

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Key features End-user entry fields: name, email address, and message box Apply text formatting to the message Attach media files Display message content instructions for users Admin Configuration Options Customizable destination email address per queue Customizable instruction message per queue Security option to include a hidden reCAPTCHA for the Web SDK Configuration considerations When email enhancement is enabled, the email will go out from no-reply@company.com email.
- SMS messaging and queue settings Overview Once SMS Messaging is enabled and you have configured chat settings, you can begin setting up SMS messaging queues.
- SMS system messages Two types of system messages can be configured for SMS chats, Greeting and After Hour .
- For more information, see SMS messaging and privacy .

