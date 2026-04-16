---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.108Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Content cards"
feature_slug: "content-cards"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "content"
  - "cards"
  - "let"
  - "you"
  - "deliver"
  - "rich"
  - "messages"
  - "virtual"
---

# Content cards

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Content cards let you deliver rich messages in virtual agent chats with customizable layouts and deep links.

## Extended Definition

Content cards let you deliver rich messages in virtual agent chats with customizable layouts and deep links.

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
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can customize the chat header title text by using the following options: <item name = "ujet chatCustomHeaderTextColor" >@color/chatHeaderTextLightMode</item> <item name = "ujet chatCustomHeaderTextColowDark" >@color/chatHeaderTextDarkMode</item> <item name = "ujet chatCustomHeaderTextSize" >16sp</item> <item name = "ujet chatCustomHeaderTextStyle" >bold</item> You can customize Virtual Agent quick replies in the chat UI by using the following options: <item name = "ujet colorChatQuickReplyButtonBackground" >@color/chatQuickReplyButtonBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonBackgroundDark" >@color/chatQuickReplyButtonBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackground" >@color/chatQuickReplyButtonPressedBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackgroundDark" >@color/chatQuickReplyButtonPressedBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonText" >@color/chatQuickReplyButtonTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonTextDark" >@color/chatQuickReplyButtonTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedText" >@color/chatQuickReplyButtonPressedTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedTextDark" >@color/chatQuickReplyButtonPressedTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonStroke" >@color/chatQuickReplyButtonStrokeLightMode</item> <item name = "ujet colorChatQuickReplyButtonStrokeDark" >@color/chatQuickReplyButtonStrokeDarkMode</item> <item name = "ujet chatQuickReplyButtonTypeFace" >Kreon-Regular.ttf</item> <item name = "ujet chatQuickReplyButtonStrokeWidth" >3dp</item> <item name = "ujet chatQuickReplyButtonCornerRadius" >3dp</item> <item name = "ujet chatQuickReplyButtonVerticalMargin" >0dp</item> <item name = "ujet chatQuickReplyButtonHorizontalPadding" >10dp</item> <item name = "ujet chatQuickReplyButtonVerticalPadding" >1dp</item> <item name = "ujet chatQuickReplyButtonAlignment" >right</item> Content cards You can add customization for content cards along with chat customization.
- Use UjetCustomData.putObject("external chat transfer", hashMapObject) to set the transcript data in JSON format as follows: HashMap<String, Object> jsonData = new HashMap<> () ; // Convert json string into hashmap object and store it in jsonData UjetCustomData customData = new UjetCustomData () ; customData.putObject ( "external chat transfer" , jsonData ) ; // Use external chat transfer key to send chat transcript data UjetStartOptions ujetStartOptions = new UjetStartOptions.Builder () .setUnsignedCustomData ( customData ) .build () ; Ujet.start ( ujetStartOptions ) ; JSON format: greeting override : string agent : dictionary name : string avatar : string [url of agent avatar, optional] transcript : array sender : string ["end user" or "agent"] timestamp : string [ie "2021-03-15 12:00:00Z"] content : array type : string [one of text, media] text : string [required for text type] media : dictionary [required for media type] type : string [one of image, video] url : string [public URL pointing at media file] JSON example: { "greeting override" : "Please hold while we connect you with a human agent." , "agent" : { "name" : "Name" , "avatar" : "avatar url" }, "transcript" : [ { "sender" : "agent" , "timestamp" : "2021-03-15 12:00:15Z" , "content" : [ { "type" : "text" , "text" : " Suggestions shown: \n\n Help with batch or delivery\n Help with metrics or order feedback\n Help with Instant Cashout" } ] }, { "sender" : "end user" , "timestamp" : "2021-03-15 12:00:16Z" , "content" : [ { "type" : "text" , "text" : "Help with batch or delivery" } ] } ] } You can use Markdown on the text type.
- Boolean true UjetOption ujetOption = new UjetOption.Builder () .setLogLevel ( Log.INFO ) .setDefaultLanguage ( "en" ) .setFallbackPhoneNumber ( "+18001112222" ) .setUncaughtExceptionHandlerEnabled ( false ) .setNetworkSensitivity ( 0 ) .setDarkModeEnabled ( true ) .setShowSingleChannelEnabled ( true ) .setAutoMinimizeCallView ( true ) .setShowAgentIconBorderEnabled ( true ) .setStaticFontSizeInPickerView ( true ) .setHideMediaAttachmentInChat ( true ) .setIgnoreReadPhoneStatePermission ( true ) .setCobrowseLicenseKey ( "COBROWSE IO LICENSE KEY HERE" ) .setCobrowseURL ( "COBROWSE IO API URL HERE" ) .setCustomChatHeaderTitle ( "CHAT HEADER TITLE TEXT" ) .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatQuickReplyButtonsStyle ( QuickReplyButtonsStyle.INDIVIDUAL ) .setChatStyles ( new ChatStyles ( ... )) // See Content Cards Theme item .build () ) .setBlockChatTerminationByEndUser ( true ) .setHideStatusBar ( true ) .setLoadingSpinnerDrawableRes ( R.drawable.RESOURCE NAME ) .setLandscapeOrientationDisabled ( true ) .setShowCsatSkipButton ( false ) .setHideDownloadChatTranscript ( 0 ) // 0 to 3 .
- ChatStyles ( ... contentCard = ContentCardStyle ( backgroundColor = "color reference" , cornerRadius = 8 , font = FontStyle ( colorReference = "color reference" , size = 16 , style = "bold italic" , family = "Roboto-Black.ttf" , ) , border = BorderStyle ( color = "color reference" , width = 2 , ) , title = TextStyle ( FontStyle ( colorReference = "color reference" , size = 18 , style = "bold italic" , family = "Roboto-Black.ttf" , ) ) , subtitle = TextStyle ( FontStyle ( colorReference = "color reference" , size = 16 , style = "bold italic" , family = "Roboto-Black.ttf" , ) ) , body = TextStyle ( FontStyle ( colorReference = "color reference" , size = 16 , style = "bold italic" , family = "Roboto-Black.ttf" , ) ) ) ) Web form theme You can customize the web form card along with chat customization.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- In the Global Chat Settings pane, for Rich Messaging , select the required options from the following: Allow agents to attach files Allow agents to format messages (e.g. bold, italicize, create lists) Allow agents to use emojis .
- Rich formatting and emojis are available in chat shortcuts and in web SDK and mobile SDKs messages without any special configuration.
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- You can do this either using the json file (see content card property) or by using the UJETChatContentCardTheme class. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let contentCardTheme = UJETChatContentCardTheme () contentCardTheme . backgroundColor = UJETColorRef ( assetName : "agent message background color" ) contentCardTheme . cornerRadius = 16 let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme let contentCardBorder = UJETBorderTheme () contentCardBorder . width = 1 contentCardBorder . color = UJETColorRef ( assetName : "agent message border color" ) contentCardTheme . border = contentCardBorder let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme // The font family is inherited from the contentCardFontTheme let subtitle = UJETFontTheme () subtitle . size = 12 contentCardTheme . subtitle = subtitle // The font family is inherited from the contentCardFontTheme let bodyFont = UJETFontTheme () bodyFont . size = 10 contentCardTheme . body = bodyFont theme . chatTheme ? . contentCard = contentCardTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Form card theme You can add customization for form cards together with chat customization.
- For reference, see the example app and uncomment the customizeChatTheme method. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let quickReplyTheme = UJETChatQuickReplyButtonTheme () quickReplyTheme . style = . individual quickReplyTheme . alignment = . right quickReplyTheme . backgroundColor = UJETColorRef ( assetName : "white color" ) quickReplyTheme . backgroundColorForHighlightedState = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColor = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColorForHighlightedState = UJETColorRef ( assetName : "white color" ) let fontTheme = UJETFontTheme () fontTheme . family = "Arial Rounded MT Bold" fontTheme . size = 14 quickReplyTheme . font = fontTheme chatTheme ? . quickReplyButtonTheme = quickReplyTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Content cards theme You can add customization for content cards together with chat customization.
- UJETCustomData customData = [ UJETCustomData new ] ; [ customData setExternalChatTransfer : jsonString ] ; UJETStartOptions options = [ UJETStartOptions new ] ; options . unsignedCustomData = customData ; [ UJET startWithOptions : options ] ; JSON format: greeting override: string agent: dictionary name: string avatar: string [url of agent avatar, optional] transcript: array sender: string ["end user" or "agent"] timestamp: string [ie "2021-03-15 12:00:00Z"] content: array type: string [one of text, media] text: string [required for text type] media: dictionary [required for media type] type: string [one of image, video] url: string [public url pointing at media file] JSON example: { "greeting override" : "Please hold while we connect you with a human agent." , "agent" : { "name" : "Name" , "avatar" : "avatar url" }, "transcript" : [ { "sender" : "agent" , "timestamp" : "2021-03-15 12:00:15Z" , "content" : [ { "type" : "text" , "text" : " Suggestions shown: \n\n Help with batch or delivery\n Help with metrics or order feedback\n Help with Instant Cashout" } ] }, { "sender" : "end user" , "timestamp" : "2021-03-15 12:00:16Z" , "content" : [ { "type" : "text" , "text" : "Help with batch or delivery" } ] } ] } You can use Markdown on the text type.
- PKPushRegistry voipRegistry = [[ PKPushRegistry alloc ] initWithQueue : dispatch get main queue () ] ; voipRegistry . delegate = self ; voipRegistry . desiredPushTypes = [ NSSet setWithObject : PKPushTypeVoIP ] ; Add the following delegate methods in implementing UIApplicationDelegate protocol file: Please print your device token to test push notifications. // PKPushRegistryDelegate - ( void ) pushRegistry :( PKPushRegistry ) registry didUpdatePushCredentials :( PKPushCredentials ) credentials forType :( NSString ) type { [ UJET updatePushToken : credentials . token type : UjetPushTypeVoIP ] ; } - ( void ) pushRegistry :( PKPushRegistry ) registry didReceiveIncomingPushWithPayload :( PKPushPayload ) payload forType :( PKPushType ) type withCompletionHandler :( void ( ^ )( void )) completion { if ( payload . dictionaryPayload [ @ "ujet" ] ) { [ UjetreceivedNotification : payload . dictionaryPayload completion : completion ] ; } else { completion (); } } // UIApplicationDelegate - ( void ) application :( UIApplication ) application didRegisterForRemoteNotificationsWithDeviceToken :( NSData ) deviceToken { [ UjetupdatePushToken : deviceToken type : UjetPushTypeAPN ] ; } - ( void ) application :( UIApplication ) application didReceiveRemoteNotification :( NSDictionary ) userInfo fetchCompletionHandler :( void ( ^ )( UIBackgroundFetchResult )) completionHandler { if ( userInfo [ @ "ujet" ] ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } // UserNotificationsDelegate overrides [UIApplicationDelegate didReceiveRemoteNotification:] - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center willPresentNotification :( UNNotification ) notification withCompletionHandler :( void ( ^ )( UNNotificationPresentationOptions )) completionHandler { NSDictionary userInfo = notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center didReceiveNotificationResponse :( UNNotificationResponse ) response withCompletionHandler :( void ( ^ )( void )) completionHandler { NSDictionary userInfo = response . notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } Enable push notifications Select your target and open Capabilities tab.

