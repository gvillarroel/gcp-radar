---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.035Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Web SDK transcript download controls"
feature_slug: "web-sdk-transcript-download-controls"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "web"
  - "sdk"
  - "transcript"
  - "download"
  - "controls"
  - "can"
  - "hide"
  - "options"
---

# Web SDK transcript download controls

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The web SDK can hide transcript download options during and after a chat session.

## Extended Definition

The web SDK can hide transcript download options during and after a chat session.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Boolean true UjetOption ujetOption = new UjetOption.Builder () .setLogLevel ( Log.INFO ) .setDefaultLanguage ( "en" ) .setFallbackPhoneNumber ( "+18001112222" ) .setUncaughtExceptionHandlerEnabled ( false ) .setNetworkSensitivity ( 0 ) .setDarkModeEnabled ( true ) .setShowSingleChannelEnabled ( true ) .setAutoMinimizeCallView ( true ) .setShowAgentIconBorderEnabled ( true ) .setStaticFontSizeInPickerView ( true ) .setHideMediaAttachmentInChat ( true ) .setIgnoreReadPhoneStatePermission ( true ) .setCobrowseLicenseKey ( "COBROWSE IO LICENSE KEY HERE" ) .setCobrowseURL ( "COBROWSE IO API URL HERE" ) .setCustomChatHeaderTitle ( "CHAT HEADER TITLE TEXT" ) .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatQuickReplyButtonsStyle ( QuickReplyButtonsStyle.INDIVIDUAL ) .setChatStyles ( new ChatStyles ( ... )) // See Content Cards Theme item .build () ) .setBlockChatTerminationByEndUser ( true ) .setHideStatusBar ( true ) .setLoadingSpinnerDrawableRes ( R.drawable.RESOURCE NAME ) .setLandscapeOrientationDisabled ( true ) .setShowCsatSkipButton ( false ) .setHideDownloadChatTranscript ( 0 ) // 0 to 3 .
- Boolean false Show CSAT skip button Config option to show or hide the skip button in the CSAT dialog Boolean false Block chat termination by end-user Config option to show or hide the end chat button in the chat UI Boolean false Hide download chat transcript Show or hide the download chat transcript button in the chat actions menu and in the chat user interface.
- Use UjetCustomData.putObject("external chat transfer", hashMapObject) to set the transcript data in JSON format as follows: HashMap<String, Object> jsonData = new HashMap<> () ; // Convert json string into hashmap object and store it in jsonData UjetCustomData customData = new UjetCustomData () ; customData.putObject ( "external chat transfer" , jsonData ) ; // Use external chat transfer key to send chat transcript data UjetStartOptions ujetStartOptions = new UjetStartOptions.Builder () .setUnsignedCustomData ( customData ) .build () ; Ujet.start ( ujetStartOptions ) ; JSON format: greeting override : string agent : dictionary name : string avatar : string [url of agent avatar, optional] transcript : array sender : string ["end user" or "agent"] timestamp : string [ie "2021-03-15 12:00:00Z"] content : array type : string [one of text, media] text : string [required for text type] media : dictionary [required for media type] type : string [one of image, video] url : string [public URL pointing at media file] JSON example: { "greeting override" : "Please hold while we connect you with a human agent." , "agent" : { "name" : "Name" , "avatar" : "avatar url" }, "transcript" : [ { "sender" : "agent" , "timestamp" : "2021-03-15 12:00:15Z" , "content" : [ { "type" : "text" , "text" : " Suggestions shown: \n\n Help with batch or delivery\n Help with metrics or order feedback\n Help with Instant Cashout" } ] }, { "sender" : "end user" , "timestamp" : "2021-03-15 12:00:16Z" , "content" : [ { "type" : "text" , "text" : "Help with batch or delivery" } ] } ] } You can use Markdown on the text type.
- 0 = Show everywhere, 1 = Hide from the options menu, 2 = Hide from the post chat screen, 3 = Hide from both the options menu and the post chat screen. .setPushNotificationsAllowed ( true ) .build () ; //The following customizes various attributes in chat UI ChatStyles chatStyles = new ChatStyles () ; chatStyles.setBackButton ( new BackButtonStyle ( false, "ujet agent sample" )) ; //customizes back button styles chatStyles.setHeader ( ... ) ; //customizes chat header styles chatStyles.setAgentMessageBubbles ( ... ) ; //customizes agent messages styles chatStyles.setConsumerMessageBubbles ( ... ) ; //customizes consumer messages styles chatStyles.setSystemMessages ( ... ) ; //customizes system messages styles chatStyles.setEndChatButton ( ... ) ; //customizes end chat button styles chatStyles.setTimeStamps ( ... ) ; //customizes timestamp styles chatStyles.setUserInputBar ( ... ) ; //customizes user input bar styles UjetOption ujetOption = new UjetOption.Builder () .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatStyles ( chatStyles ) .build () ) //The following customizes various attributes in chat UI using json file.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The following code shows how to configure the download transcript button: typedef NS OPTIONS ( NSUInteger, UJETChatDownloadTranscriptVisibilityOptions ) { UJETChatDownloadTranscriptVisibilityOptionsShowAll = 0 , UJETChatDownloadTranscriptVisibilityOptionsHideFromOptionsMenu = 1 << 0 , UJETChatDownloadTranscriptVisibilityOptionsHideFromPostChatScreen = 1 << 1 , UJETChatDownloadTranscriptVisibilityOptionsHideAll = UJETChatDownloadTranscriptVisibilityOptionsHideFromOptionsMenu UJETChatDownloadTranscriptVisibilityOptionsHideFromPostChatScreen } ; @property ( nonatomic, assign ) UJETChatDownloadTranscriptVisibilityOptions transcriptVisibilityOptions ; PSTN Fallback We provide PSTN fallback for several situations: Mobile network is offline.
- UJETGlobalOptions options = [ UJETGlobalOptions new ] ; options.fallbackPhoneNumber = @ "+18001112222" ; options.preferredLanguage = @ "en" ; [ UJET setGlobalOptions:options ] ; Show or hide the download transcript button You can configure the SDK to show or hide the download transcript button in the chat options menu and in the post-chat screen.
- UJETCustomData customData = [ UJETCustomData new ] ; [ customData setExternalChatTransfer : jsonString ] ; UJETStartOptions options = [ UJETStartOptions new ] ; options . unsignedCustomData = customData ; [ UJET startWithOptions : options ] ; JSON format: greeting override: string agent: dictionary name: string avatar: string [url of agent avatar, optional] transcript: array sender: string ["end user" or "agent"] timestamp: string [ie "2021-03-15 12:00:00Z"] content: array type: string [one of text, media] text: string [required for text type] media: dictionary [required for media type] type: string [one of image, video] url: string [public url pointing at media file] JSON example: { "greeting override" : "Please hold while we connect you with a human agent." , "agent" : { "name" : "Name" , "avatar" : "avatar url" }, "transcript" : [ { "sender" : "agent" , "timestamp" : "2021-03-15 12:00:15Z" , "content" : [ { "type" : "text" , "text" : " Suggestions shown: \n\n Help with batch or delivery\n Help with metrics or order feedback\n Help with Instant Cashout" } ] }, { "sender" : "end user" , "timestamp" : "2021-03-15 12:00:16Z" , "content" : [ { "type" : "text" , "text" : "Help with batch or delivery" } ] } ] } You can use Markdown on the text type.
- In this case, signPayload delegate for UJETPayloadCustomData should just call success(nil);. - ( void ) signPayload :( NSDictionary ) payload payloadType :( UjetPayloadType ) payloadType success :( void ( ^ )( NSString )) success failure :( void ( ^ )( NSError )) failure { if ( payloadType == UjetPayloadCustomData ) { success ( nil ); } } UJETStartOptions options = [ UJETStartOptions new ] ; options . unsignedCustomData = customData ; [ UJET startWithOptions : options ] ; Using unsigned custom data to send external chat transcript You can send the chat transcript to the SDK when it's started with unsigned custom data by calling setExternalChatTransfer: or setExternalChatTransferWithDictionary: method to set JSON data with NSString or NSDictionary, respectively.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- When a chat changes from Active to Dismissed: The chat handle time is paused The chat's handle time is based on only the active chat time The chat ID remains the same In the chat transcript, 2 activities are logged Timestamp when the User/Agent left the chat Ex. "[13:30:39 System] Admin U. left the chat." Chat dismissed Ex. "[13:30:39 System] Chat dismissed" When a chat changes from Dismissed to Active: The chat's handle time timer starts from where it left off The chat's handle time is based on the total active chat time The chat ID remains the same Customizing strings/prompts Web SDK To update messaging for your consumers, strings for the Web SDK can be customized by your web developers installing and configuring the Web SDK.
- Here's an example of a transfer limit field: "transfer limit" : { "enabled" : true , "limit count" : 10 , "limit reached" : "true" }, Agent experience If you select Disable all transfer options when configuring the transfer limit, the Chat Transfer button in the agent adapter is inactive when the transfer limit is reached for a chat session.

