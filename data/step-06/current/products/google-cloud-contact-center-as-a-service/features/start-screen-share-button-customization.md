---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.035Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Start Screen Share button customization"
feature_slug: "start-screen-share-button-customization"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
keywords:
  - "start"
  - "screen"
  - "share"
  - "button"
  - "customization"
  - "administrators"
  - "can"
  - "customize"
---

# Start Screen Share button customization

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can customize the Start Screen Share button color to match brand palettes.

## Extended Definition

Administrators can customize the Start Screen Share button color to match brand palettes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)

## Supporting Pages

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For reference, see the example app and uncomment the customizeChatTheme method. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let quickReplyTheme = UJETChatQuickReplyButtonTheme () quickReplyTheme . style = . individual quickReplyTheme . alignment = . right quickReplyTheme . backgroundColor = UJETColorRef ( assetName : "white color" ) quickReplyTheme . backgroundColorForHighlightedState = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColor = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColorForHighlightedState = UJETColorRef ( assetName : "white color" ) let fontTheme = UJETFontTheme () fontTheme . family = "Arial Rounded MT Bold" fontTheme . size = 14 quickReplyTheme . font = fontTheme chatTheme ? . quickReplyButtonTheme = quickReplyTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Content cards theme You can add customization for content cards together with chat customization.
- Customize the Screen Share consent dialog To customize the Screen Share consent dialog, you need to implement the UJETCobrowseAlertProvider protocol in your provider class.
- You can do this either using the json file (see content card property) or by using the UJETChatContentCardTheme class. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let contentCardTheme = UJETChatContentCardTheme () contentCardTheme . backgroundColor = UJETColorRef ( assetName : "agent message background color" ) contentCardTheme . cornerRadius = 16 let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme let contentCardBorder = UJETBorderTheme () contentCardBorder . width = 1 contentCardBorder . color = UJETColorRef ( assetName : "agent message border color" ) contentCardTheme . border = contentCardBorder let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme // The font family is inherited from the contentCardFontTheme let subtitle = UJETFontTheme () subtitle . size = 12 contentCardTheme . subtitle = subtitle // The font family is inherited from the contentCardFontTheme let bodyFont = UJETFontTheme () bodyFont . size = 10 contentCardTheme . body = bodyFont theme . chatTheme ? . contentCard = contentCardTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Form card theme You can add customization for form cards together with chat customization.
- This can be accomplished either by using the JSON file (see form card property) or by using the UJETChatActionMenuTheme class. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let actionMenuTheme = UJETChatActionMenuTheme () let photoLibraryIcon = UJETChatUserInputIconTheme () photoLibraryIcon.visible = true photoLibraryIcon.image = UJETImageRef ( assetName: "library button asset" ) let cameraIcon = UJETChatUserInputIconTheme () cameraIcon.visible = true cameraIcon.image = UJETImageRef ( assetName: "camera button asset" ) let cobrowseIcon = UJETChatUserInputIconTheme () cobrowseIcon.visible = true cobrowseIcon.image = UJETImageRef ( assetName: "cobrowse button asset" ) actionMenuTheme.libraryIcon = photoLibraryIcon actionMenuTheme.cameraIcon = cameraIcon actionMenuTheme.cobrowseIcon = cobrowseIcon chatTheme?.actionMenu = actionMenuTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme UJET.setGlobalTheme ( globalTheme ) } Other appearances You can customize other appearances such as font size and background color. theme.supportTitleLabelFontSize = 30 ; theme.supportDescriptionLabelFontSize = 20 ; theme.supportPickerViewFontSize = 30 ; theme.staticFontSizeInSupportPickerView = YES ; theme.backgroundColor = UIColor.darkGrayColor ; theme.backgroundColorForDarkMode = UIColor.lightGrayColor ; CallKit On iOS 10.0 and greater, CallKit is enabled for all calls.

### "Use Screen Share \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enter remote control mode from Screen Share mode, follow these steps: Start with an active Screen Share session in Screen Share mode.
- To enter full device mode from Screen Share mode or remote control mode, follow these steps: Start with an active Screen Share session.
- Mobile The agent or consumer can end the session by clicking the End Screen Share button.
- Web Agent : the session can be ended by clicking the End Screen Share button.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- You can customize the chat header title text by using the following options: <item name = "ujet chatCustomHeaderTextColor" >@color/chatHeaderTextLightMode</item> <item name = "ujet chatCustomHeaderTextColowDark" >@color/chatHeaderTextDarkMode</item> <item name = "ujet chatCustomHeaderTextSize" >16sp</item> <item name = "ujet chatCustomHeaderTextStyle" >bold</item> You can customize Virtual Agent quick replies in the chat UI by using the following options: <item name = "ujet colorChatQuickReplyButtonBackground" >@color/chatQuickReplyButtonBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonBackgroundDark" >@color/chatQuickReplyButtonBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackground" >@color/chatQuickReplyButtonPressedBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackgroundDark" >@color/chatQuickReplyButtonPressedBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonText" >@color/chatQuickReplyButtonTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonTextDark" >@color/chatQuickReplyButtonTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedText" >@color/chatQuickReplyButtonPressedTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedTextDark" >@color/chatQuickReplyButtonPressedTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonStroke" >@color/chatQuickReplyButtonStrokeLightMode</item> <item name = "ujet colorChatQuickReplyButtonStrokeDark" >@color/chatQuickReplyButtonStrokeDarkMode</item> <item name = "ujet chatQuickReplyButtonTypeFace" >Kreon-Regular.ttf</item> <item name = "ujet chatQuickReplyButtonStrokeWidth" >3dp</item> <item name = "ujet chatQuickReplyButtonCornerRadius" >3dp</item> <item name = "ujet chatQuickReplyButtonVerticalMargin" >0dp</item> <item name = "ujet chatQuickReplyButtonHorizontalPadding" >10dp</item> <item name = "ujet chatQuickReplyButtonVerticalPadding" >1dp</item> <item name = "ujet chatQuickReplyButtonAlignment" >right</item> Content cards You can add customization for content cards along with chat customization.
- 0 = Show everywhere, 1 = Hide from the options menu, 2 = Hide from the post chat screen, 3 = Hide from both the options menu and the post chat screen. .setPushNotificationsAllowed ( true ) .build () ; //The following customizes various attributes in chat UI ChatStyles chatStyles = new ChatStyles () ; chatStyles.setBackButton ( new BackButtonStyle ( false, "ujet agent sample" )) ; //customizes back button styles chatStyles.setHeader ( ... ) ; //customizes chat header styles chatStyles.setAgentMessageBubbles ( ... ) ; //customizes agent messages styles chatStyles.setConsumerMessageBubbles ( ... ) ; //customizes consumer messages styles chatStyles.setSystemMessages ( ... ) ; //customizes system messages styles chatStyles.setEndChatButton ( ... ) ; //customizes end chat button styles chatStyles.setTimeStamps ( ... ) ; //customizes timestamp styles chatStyles.setUserInputBar ( ... ) ; //customizes user input bar styles UjetOption ujetOption = new UjetOption.Builder () .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatStyles ( chatStyles ) .build () ) //The following customizes various attributes in chat UI using json file.
- Strings You can customize strings used in the application by overriding keys for each string in strings.xml. <resources> <!--Greeting title and message in splash screen--> <string name = "ujet greeting title" >Customer Support</string> <string name = "ujet greeting description" >runs on UJET</string> </resources> Text size customization Customize title, description and picker text size used in the application by overriding following keys in dimens.xml.
- For example, <!--Default style applies to both Light and Dark Mode Themes--> <style name = "Ujet" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDefault</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkDefault</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo default</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Light Mode Theme only--> <style name = "Ujet.Light" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryLightMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkLightMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo light mode</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Dark Mode Theme only--> <style name = "Ujet.Dark" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDarkMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkForDarkMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> You can customize background color in the application by overriding keys for each style item in style.xml.

