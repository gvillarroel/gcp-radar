---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.137Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Twinning"
feature_slug: "twinning"
latest_feature_date: "2023-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
keywords:
  - "twinning"
  - "allows"
  - "primary"
  - "extension"
  - "secondary"
  - "operate"
  - "single"
  - "phone"
---

# Twinning

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Allows a primary extension and a secondary extension to operate as a single phone.

## Extended Definition

Allows a primary extension and a secondary extension to operate as a single phone.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Configure the secondary lookup object the same way you configured the primary lookup object, except you don't need to select a primary phone number field.
- Account and case behavior Account ID Account ID can be selected by: Clicking on the phone number from Account or Contact record Clicking the sync icon to sync when on the page of an Account or Contact record Entering an outbound phone number that is associated to an Account Clicking on a phone number in a Case that is associated with an Account ID and Case Case ID Case ID can be selected by: Once the Account ID is selected by one of the options above, CCAI Platform checks for one or more open cases for the selected Account ID and selects the most recent, or allows the agent to select based on your settings.
- Configure account lookup and field mapping You can configure your Salesforce integration to provide flexible account lookup using primary and secondary lookup objects.
- This makes it easier to connect different support sessions to a single account for consumers who have multiple phone numbers, such as mobile, home, or work numbers.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- To assign extension numbers to your agents, do one of the following: To automatically generate phone extensions for your agents, select the Enable Auto-generated extension checkbox.
- This means that each direct phone number can be assigned only once, to a single agent or queue, resulting in unambiguous phone number assignments.
- To configure agent extensions, do the following: In the Extensions length list, select a length for the phone extensions for your agents.
- The system then automatically generates phone extensions of the length you specified and assigns them to your agents.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Boolean true UjetOption ujetOption = new UjetOption.Builder () .setLogLevel ( Log.INFO ) .setDefaultLanguage ( "en" ) .setFallbackPhoneNumber ( "+18001112222" ) .setUncaughtExceptionHandlerEnabled ( false ) .setNetworkSensitivity ( 0 ) .setDarkModeEnabled ( true ) .setShowSingleChannelEnabled ( true ) .setAutoMinimizeCallView ( true ) .setShowAgentIconBorderEnabled ( true ) .setStaticFontSizeInPickerView ( true ) .setHideMediaAttachmentInChat ( true ) .setIgnoreReadPhoneStatePermission ( true ) .setCobrowseLicenseKey ( "COBROWSE IO LICENSE KEY HERE" ) .setCobrowseURL ( "COBROWSE IO API URL HERE" ) .setCustomChatHeaderTitle ( "CHAT HEADER TITLE TEXT" ) .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatQuickReplyButtonsStyle ( QuickReplyButtonsStyle.INDIVIDUAL ) .setChatStyles ( new ChatStyles ( ... )) // See Content Cards Theme item .build () ) .setBlockChatTerminationByEndUser ( true ) .setHideStatusBar ( true ) .setLoadingSpinnerDrawableRes ( R.drawable.RESOURCE NAME ) .setLandscapeOrientationDisabled ( true ) .setShowCsatSkipButton ( false ) .setHideDownloadChatTranscript ( 0 ) // 0 to 3 .
- Permission Description CAMERA Used for smart action to take photos and record videos MICROPHONE Allows app to use VoIP call through Twilio STORAGE Allows app to save photos and videos Deep linking setup ( optional ) If you want to use smart actions for an IVR (PSTN) call, you need to set up deep linking in your project.
- For example, <!--Default style applies to both Light and Dark Mode Themes--> <style name = "Ujet" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDefault</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkDefault</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo default</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Light Mode Theme only--> <style name = "Ujet.Light" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryLightMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkLightMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo light mode</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Dark Mode Theme only--> <style name = "Ujet.Dark" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDarkMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkForDarkMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> You can customize background color in the application by overriding keys for each style item in style.xml.
- The object of the custom data is the value of the custom data key. { "iat" : 1537399656 , "exp" : 1537400256 , "custom data" : { "location" : { "label" : "Location" , "value" : "1000 Stockton St, San Francisco, CA, United States" , "type" : "string" }, "dashboard url" : { "label" : "Dashboard URL" , "value" : "http://(company name)/dashboard/device user ID" , "type" : "url" }, "contact date" : { "label" : "Contact Date" , "value" : 1537399655992 , "type" : "date" }, "membership number" : { "label" : "Membership Number" , "value" : 62303 , "type" : "number" }, "model" : { "label" : "Model" , "value" : "iPhone" , "type" : "string" }, "os version" : { "label" : "OS Version" , "value" : "12.0" , "type" : "string" }, "last transaction id" : { "label" : "Last Transaction ID" , "value" : "243324DE-01A1-4F71-BABC-3572B77AC487" , "type" : "string" }, "battery" : { "label" : "Battery" , "value" : "-100%" , "type" : "string" }, "bluetooth" : { "label" : "Bluetooth" , "value" : "Bluetooth not supported" , "type" : "string" }, "wifi" : { "label" : "Wi-Fi" , "value" : "Wi-Fi not connected" , "type" : "string" }, "ssn" : { "invisible to agent" : true , "label" : "Social Security Number" , "value" : "102-186-1837" , "type" : "string" } } } The key is a unique identifier for the data.

