---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.122Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Mobile SDK UI customization"
feature_slug: "mobile-sdk-ui-customization"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "mobile"
  - "sdk"
  - "ui"
  - "customization"
  - "chat"
  - "interface"
  - "can"
  - "now"
---

# Mobile SDK UI customization

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The mobile SDK chat interface can now be customized more extensively to match branding needs.

## Extended Definition

The mobile SDK chat interface can now be customized more extensively to match branding needs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- You can do this either using the json file (see content card property) or by using the UJETChatContentCardTheme class. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let contentCardTheme = UJETChatContentCardTheme () contentCardTheme . backgroundColor = UJETColorRef ( assetName : "agent message background color" ) contentCardTheme . cornerRadius = 16 let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme let contentCardBorder = UJETBorderTheme () contentCardBorder . width = 1 contentCardBorder . color = UJETColorRef ( assetName : "agent message border color" ) contentCardTheme . border = contentCardBorder let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme // The font family is inherited from the contentCardFontTheme let subtitle = UJETFontTheme () subtitle . size = 12 contentCardTheme . subtitle = subtitle // The font family is inherited from the contentCardFontTheme let bodyFont = UJETFontTheme () bodyFont . size = 10 contentCardTheme . body = bodyFont theme . chatTheme ? . contentCard = contentCardTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Form card theme You can add customization for form cards together with chat customization.
- For reference, see the example app and uncomment the customizeChatTheme method. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let quickReplyTheme = UJETChatQuickReplyButtonTheme () quickReplyTheme . style = . individual quickReplyTheme . alignment = . right quickReplyTheme . backgroundColor = UJETColorRef ( assetName : "white color" ) quickReplyTheme . backgroundColorForHighlightedState = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColor = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColorForHighlightedState = UJETColorRef ( assetName : "white color" ) let fontTheme = UJETFontTheme () fontTheme . family = "Arial Rounded MT Bold" fontTheme . size = 14 quickReplyTheme . font = fontTheme chatTheme ? . quickReplyButtonTheme = quickReplyTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Content cards theme You can add customization for content cards together with chat customization.
- Border width can be only 0 or 1 and if you don't want to differentiate the post session VA experience then you could set containerColor white and border to 0. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let postSessionVaTheme = UJETChatPostSessionVaTheme () postSessionVaTheme.containerColor = UJETColorRef ( assetName: "white color" ) let postSessionVaBorder = UJETBorderTheme () postSessionVaBorder.width = 0 postSessionVaBorder.color = UJETColorRef ( assetName: "white color" ) containerColor.border = postSessionVaBorder chatTheme?.postSessionVaTheme = postSessionVaTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme UJET.setGlobalTheme ( globalTheme ) } Chat actions menu You can add customization for chat actions menu together with chat customization.
- The following code shows how to configure the download transcript button: typedef NS OPTIONS ( NSUInteger, UJETChatDownloadTranscriptVisibilityOptions ) { UJETChatDownloadTranscriptVisibilityOptionsShowAll = 0 , UJETChatDownloadTranscriptVisibilityOptionsHideFromOptionsMenu = 1 << 0 , UJETChatDownloadTranscriptVisibilityOptionsHideFromPostChatScreen = 1 << 1 , UJETChatDownloadTranscriptVisibilityOptionsHideAll = UJETChatDownloadTranscriptVisibilityOptionsHideFromOptionsMenu UJETChatDownloadTranscriptVisibilityOptionsHideFromPostChatScreen } ; @property ( nonatomic, assign ) UJETChatDownloadTranscriptVisibilityOptions transcriptVisibilityOptions ; PSTN Fallback We provide PSTN fallback for several situations: Mobile network is offline.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- You can customize the chat header title text by using the following options: <item name = "ujet chatCustomHeaderTextColor" >@color/chatHeaderTextLightMode</item> <item name = "ujet chatCustomHeaderTextColowDark" >@color/chatHeaderTextDarkMode</item> <item name = "ujet chatCustomHeaderTextSize" >16sp</item> <item name = "ujet chatCustomHeaderTextStyle" >bold</item> You can customize Virtual Agent quick replies in the chat UI by using the following options: <item name = "ujet colorChatQuickReplyButtonBackground" >@color/chatQuickReplyButtonBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonBackgroundDark" >@color/chatQuickReplyButtonBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackground" >@color/chatQuickReplyButtonPressedBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackgroundDark" >@color/chatQuickReplyButtonPressedBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonText" >@color/chatQuickReplyButtonTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonTextDark" >@color/chatQuickReplyButtonTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedText" >@color/chatQuickReplyButtonPressedTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedTextDark" >@color/chatQuickReplyButtonPressedTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonStroke" >@color/chatQuickReplyButtonStrokeLightMode</item> <item name = "ujet colorChatQuickReplyButtonStrokeDark" >@color/chatQuickReplyButtonStrokeDarkMode</item> <item name = "ujet chatQuickReplyButtonTypeFace" >Kreon-Regular.ttf</item> <item name = "ujet chatQuickReplyButtonStrokeWidth" >3dp</item> <item name = "ujet chatQuickReplyButtonCornerRadius" >3dp</item> <item name = "ujet chatQuickReplyButtonVerticalMargin" >0dp</item> <item name = "ujet chatQuickReplyButtonHorizontalPadding" >10dp</item> <item name = "ujet chatQuickReplyButtonVerticalPadding" >1dp</item> <item name = "ujet chatQuickReplyButtonAlignment" >right</item> Content cards You can add customization for content cards along with chat customization.
- ChatStyles ( ... contentCard = ContentCardStyle ( backgroundColor = "color reference" , cornerRadius = 8 , font = FontStyle ( colorReference = "color reference" , size = 16 , style = "bold italic" , family = "Roboto-Black.ttf" , ) , border = BorderStyle ( color = "color reference" , width = 2 , ) , title = TextStyle ( FontStyle ( colorReference = "color reference" , size = 18 , style = "bold italic" , family = "Roboto-Black.ttf" , ) ) , subtitle = TextStyle ( FontStyle ( colorReference = "color reference" , size = 16 , style = "bold italic" , family = "Roboto-Black.ttf" , ) ) , body = TextStyle ( FontStyle ( colorReference = "color reference" , size = 16 , style = "bold italic" , family = "Roboto-Black.ttf" , ) ) ) ) Web form theme You can customize the web form card along with chat customization.
- Boolean false Show CSAT skip button Config option to show or hide the skip button in the CSAT dialog Boolean false Block chat termination by end-user Config option to show or hide the end chat button in the chat UI Boolean false Hide download chat transcript Show or hide the download chat transcript button in the chat actions menu and in the chat user interface.
- For example, <!--Default style applies to both Light and Dark Mode Themes--> <style name = "Ujet" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDefault</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkDefault</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo default</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Light Mode Theme only--> <style name = "Ujet.Light" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryLightMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkLightMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo light mode</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Dark Mode Theme only--> <style name = "Ujet.Dark" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDarkMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkForDarkMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> You can customize background color in the application by overriding keys for each style item in style.xml.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- Consumer UI examples after chat is dismissed but not timed-out Web: Mobile: When Same is selected, the consumer is placed back in the same chat window waiting for the chat to be re-assigned to the next available agent: If the consumer selects New , they are brought back to the start of the queue menu selection screen.
- Image Video Audio Document Chat adapter 100 MB 100 MB 100 MB 100 MB Web SDK 20 MB 20 MB N/A N/A Mobile SDKs 2 MB 20 MB N/A N/A For the mobile SDKs, if you attach an image or video file larger than the limit shown in this table, the file is compressed to within the limit.
- In the Web & Mobile Chat Settings pane, for Transfer Limits , do the following for Web or Mobile , or both, depending on your requirements: Select the Limit the total count of transfers in a single chat session to [number field] checkbox.

