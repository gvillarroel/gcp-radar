---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.133Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Custom CRM background screen pop"
feature_slug: "custom-crm-background-screen-pop"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
keywords:
  - "custom"
  - "crm"
  - "background"
  - "screen"
  - "pop"
  - "supports"
  - "doing"
  - "embedded"
---

# Custom CRM background screen pop

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Supports doing a CRM screen pop in the background for embedded adapters.

## Extended Definition

Supports doing a CRM screen pop in the background for embedded adapters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)

## Supporting Pages

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- You can do this either using the json file (see content card property) or by using the UJETChatContentCardTheme class. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let contentCardTheme = UJETChatContentCardTheme () contentCardTheme . backgroundColor = UJETColorRef ( assetName : "agent message background color" ) contentCardTheme . cornerRadius = 16 let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme let contentCardBorder = UJETBorderTheme () contentCardBorder . width = 1 contentCardBorder . color = UJETColorRef ( assetName : "agent message border color" ) contentCardTheme . border = contentCardBorder let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme // The font family is inherited from the contentCardFontTheme let subtitle = UJETFontTheme () subtitle . size = 12 contentCardTheme . subtitle = subtitle // The font family is inherited from the contentCardFontTheme let bodyFont = UJETFontTheme () bodyFont . size = 10 contentCardTheme . body = bodyFont theme . chatTheme ? . contentCard = contentCardTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Form card theme You can add customization for form cards together with chat customization.
- Do this by either using the json file (see the form card property ) or by using the UJETChatFormCardTheme class. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let formCardTheme = UJETChatFormCardTheme () formCardTheme.backgroundColor = UJETColorRef ( assetName: "agent message background color" ) formCardTheme.cornerRadius = 16 let formCardFontTheme = UJETFontTheme () formCardFontTheme.family = "Arial Rounded MT Bold" formCardFontTheme.size = 18 formCardTheme.font = formCardFontTheme let formCardBorder = UJETBorderTheme () formCardBorder.width = 1 formCardBorder.color = UJETColorRef ( assetName: "agent message border color" ) formCardTheme.border = formCardBorder let titleFontTheme = UJETFontTheme () titleFontTheme.family = "Arial Rounded MT Bold" titleFontTheme.size = 18 formCardTheme.title = titleFontTheme // The font family is inherited from the formCardFontTheme let subtitleFontTheme = UJETFontTheme () subtitleFontTheme.size = 12 formCardTheme.subtitle = subtitleFontTheme chatTheme?.formCard = formCardTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme globalTheme.defaultAgentImage = UIImage ( named: "agent avatar image" ) globalTheme.font = UIFont ( name: "Arial Rounded MT Bold" , size: 14 ) UJET.setGlobalTheme ( globalTheme ) } Web form configuration To configure the web form capability, implement the ujetWebFormDidReceive method of the UJETDelegate protocol.
- This can be accomplished either by using the JSON file (see form card property) or by using the UJETChatActionMenuTheme class. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let actionMenuTheme = UJETChatActionMenuTheme () let photoLibraryIcon = UJETChatUserInputIconTheme () photoLibraryIcon.visible = true photoLibraryIcon.image = UJETImageRef ( assetName: "library button asset" ) let cameraIcon = UJETChatUserInputIconTheme () cameraIcon.visible = true cameraIcon.image = UJETImageRef ( assetName: "camera button asset" ) let cobrowseIcon = UJETChatUserInputIconTheme () cobrowseIcon.visible = true cobrowseIcon.image = UJETImageRef ( assetName: "cobrowse button asset" ) actionMenuTheme.libraryIcon = photoLibraryIcon actionMenuTheme.cameraIcon = cameraIcon actionMenuTheme.cobrowseIcon = cobrowseIcon chatTheme?.actionMenu = actionMenuTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme UJET.setGlobalTheme ( globalTheme ) } Other appearances You can customize other appearances such as font size and background color. theme.supportTitleLabelFontSize = 30 ; theme.supportDescriptionLabelFontSize = 20 ; theme.supportPickerViewFontSize = 30 ; theme.staticFontSizeInSupportPickerView = YES ; theme.backgroundColor = UIColor.darkGrayColor ; theme.backgroundColorForDarkMode = UIColor.lightGrayColor ; CallKit On iOS 10.0 and greater, CallKit is enabled for all calls.
- For reference, see the example app and uncomment the customizeChatTheme method. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let quickReplyTheme = UJETChatQuickReplyButtonTheme () quickReplyTheme . style = . individual quickReplyTheme . alignment = . right quickReplyTheme . backgroundColor = UJETColorRef ( assetName : "white color" ) quickReplyTheme . backgroundColorForHighlightedState = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColor = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColorForHighlightedState = UJETColorRef ( assetName : "white color" ) let fontTheme = UJETFontTheme () fontTheme . family = "Arial Rounded MT Bold" fontTheme . size = 14 quickReplyTheme . font = fontTheme chatTheme ? . quickReplyButtonTheme = quickReplyTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Content cards theme You can add customization for content cards together with chat customization.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Customizable background color is shown in the screenshot. <style name = "Ujet" > <!-- Don 't include the following tags if you don' t want to customize any of these keys and prefer to use the CCAI Platform default values instead. --> <!-- You can customize light mode theme background color by updating value here in hex. --> <item name = "ujet colorBackground" >@color/backgroundDefault</item> <!-- You can customize dark mode theme background color by updating value here in hex. --> <item name = "ujet colorBackgroundDark" >@color/backgroundDefaultDark</item> </style> Customize the chat header title There are options available to customize the chat header title text in chat in your UI.
- You can customize the chat header title text by using the following options: <item name = "ujet chatCustomHeaderTextColor" >@color/chatHeaderTextLightMode</item> <item name = "ujet chatCustomHeaderTextColowDark" >@color/chatHeaderTextDarkMode</item> <item name = "ujet chatCustomHeaderTextSize" >16sp</item> <item name = "ujet chatCustomHeaderTextStyle" >bold</item> You can customize Virtual Agent quick replies in the chat UI by using the following options: <item name = "ujet colorChatQuickReplyButtonBackground" >@color/chatQuickReplyButtonBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonBackgroundDark" >@color/chatQuickReplyButtonBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackground" >@color/chatQuickReplyButtonPressedBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackgroundDark" >@color/chatQuickReplyButtonPressedBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonText" >@color/chatQuickReplyButtonTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonTextDark" >@color/chatQuickReplyButtonTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedText" >@color/chatQuickReplyButtonPressedTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedTextDark" >@color/chatQuickReplyButtonPressedTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonStroke" >@color/chatQuickReplyButtonStrokeLightMode</item> <item name = "ujet colorChatQuickReplyButtonStrokeDark" >@color/chatQuickReplyButtonStrokeDarkMode</item> <item name = "ujet chatQuickReplyButtonTypeFace" >Kreon-Regular.ttf</item> <item name = "ujet chatQuickReplyButtonStrokeWidth" >3dp</item> <item name = "ujet chatQuickReplyButtonCornerRadius" >3dp</item> <item name = "ujet chatQuickReplyButtonVerticalMargin" >0dp</item> <item name = "ujet chatQuickReplyButtonHorizontalPadding" >10dp</item> <item name = "ujet chatQuickReplyButtonVerticalPadding" >1dp</item> <item name = "ujet chatQuickReplyButtonAlignment" >right</item> Content cards You can add customization for content cards along with chat customization.
- For example, <!--Default style applies to both Light and Dark Mode Themes--> <style name = "Ujet" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDefault</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkDefault</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo default</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Light Mode Theme only--> <style name = "Ujet.Light" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryLightMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkLightMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo light mode</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Dark Mode Theme only--> <style name = "Ujet.Dark" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDarkMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkForDarkMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> You can customize background color in the application by overriding keys for each style item in style.xml.
- 0 = Show everywhere, 1 = Hide from the options menu, 2 = Hide from the post chat screen, 3 = Hide from both the options menu and the post chat screen. .setPushNotificationsAllowed ( true ) .build () ; //The following customizes various attributes in chat UI ChatStyles chatStyles = new ChatStyles () ; chatStyles.setBackButton ( new BackButtonStyle ( false, "ujet agent sample" )) ; //customizes back button styles chatStyles.setHeader ( ... ) ; //customizes chat header styles chatStyles.setAgentMessageBubbles ( ... ) ; //customizes agent messages styles chatStyles.setConsumerMessageBubbles ( ... ) ; //customizes consumer messages styles chatStyles.setSystemMessages ( ... ) ; //customizes system messages styles chatStyles.setEndChatButton ( ... ) ; //customizes end chat button styles chatStyles.setTimeStamps ( ... ) ; //customizes timestamp styles chatStyles.setUserInputBar ( ... ) ; //customizes user input bar styles UjetOption ujetOption = new UjetOption.Builder () .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatStyles ( chatStyles ) .build () ) //The following customizes various attributes in chat UI using json file.

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- If you still need help, email support@yourcompany.com Chat : Shows once the chat option is selected with other queues available for selection below Example after hours chat screen: Sample variable attributes for customizing web and mobile messages The following variables can be inserted into Mobile and Web SDK messages and reference either information passed from the SDK or wait information.
- Customer-facing languages currently include: Arabic Czech Chinese, Simplified Chinese, Traditional Danish Dutch English (Australian) English (Canada) English (UK) English (US) Finnish French (France) French (Canada) German Hungarian Italian Japanese Korean Norwegian Polish Portuguese (Brazil) Portuguese (Portugal) Spanish (Spain) Spanish (Mexico) Swedish Thai Turkish Vietnamese Note: Text-to-Speech (TTS) is not yet available for these languages.
- When selecting a Mobile App, the Channel drop-down automatically regulates all message configurations listed in both "Mobile & Web SDK" and "Audible Messages" sections for the selected mobile app, with the following exceptions: IVR Purchase Flow Messages All IVR messages customized for use within a mobile app can currently only be configured for English US.
- The following agent facing languages are supported: Arabic Chinese English French (France) French (Canada) Japanese German Italian Korean Portuguese Spanish (Mexico) Spanish (Spain) Thai Turkish Vietnamese Consumer facing languages For consumer-facing languages, once a language is added: You can customize queue names.

