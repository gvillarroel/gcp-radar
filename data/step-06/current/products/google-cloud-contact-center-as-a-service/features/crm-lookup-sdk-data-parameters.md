---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.061Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "CRM lookup SDK data parameters"
feature_slug: "crm-lookup-sdk-data-parameters"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "crm"
  - "lookup"
  - "sdk"
  - "parameters"
  - "now"
  - "supports"
  - "name"
  - "email"
---

# CRM lookup SDK data parameters

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

CRM lookup now supports SDK Name, SDK Email, SDK Phone, and SDK Identifier parameters.

## Extended Definition

CRM lookup now supports SDK Name, SDK Email, SDK Phone, and SDK Identifier parameters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Example, "Email Clicked". application String Contains application name.
- You can customize the chat header title text by using the following options: <item name = "ujet chatCustomHeaderTextColor" >@color/chatHeaderTextLightMode</item> <item name = "ujet chatCustomHeaderTextColowDark" >@color/chatHeaderTextDarkMode</item> <item name = "ujet chatCustomHeaderTextSize" >16sp</item> <item name = "ujet chatCustomHeaderTextStyle" >bold</item> You can customize Virtual Agent quick replies in the chat UI by using the following options: <item name = "ujet colorChatQuickReplyButtonBackground" >@color/chatQuickReplyButtonBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonBackgroundDark" >@color/chatQuickReplyButtonBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackground" >@color/chatQuickReplyButtonPressedBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackgroundDark" >@color/chatQuickReplyButtonPressedBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonText" >@color/chatQuickReplyButtonTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonTextDark" >@color/chatQuickReplyButtonTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedText" >@color/chatQuickReplyButtonPressedTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedTextDark" >@color/chatQuickReplyButtonPressedTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonStroke" >@color/chatQuickReplyButtonStrokeLightMode</item> <item name = "ujet colorChatQuickReplyButtonStrokeDark" >@color/chatQuickReplyButtonStrokeDarkMode</item> <item name = "ujet chatQuickReplyButtonTypeFace" >Kreon-Regular.ttf</item> <item name = "ujet chatQuickReplyButtonStrokeWidth" >3dp</item> <item name = "ujet chatQuickReplyButtonCornerRadius" >3dp</item> <item name = "ujet chatQuickReplyButtonVerticalMargin" >0dp</item> <item name = "ujet chatQuickReplyButtonHorizontalPadding" >10dp</item> <item name = "ujet chatQuickReplyButtonVerticalPadding" >1dp</item> <item name = "ujet chatQuickReplyButtonAlignment" >right</item> Content cards You can add customization for content cards along with chat customization.
- For example, <!--Default style applies to both Light and Dark Mode Themes--> <style name = "Ujet" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDefault</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkDefault</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo default</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Light Mode Theme only--> <style name = "Ujet.Light" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryLightMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkLightMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo light mode</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> <!--This is optional and can be used to update style in Dark Mode Theme only--> <style name = "Ujet.Dark" > <item name = "ujet typeFace" >ProximaNova-Reg.otf</item> <item name = "ujet colorPrimary" >@color/primaryDarkMode</item> <item name = "ujet colorPrimaryDark" >@color/primaryDarkForDarkMode</item> <item name = "ujet buttonRadius" >10dp</item> <item name = "ujet companyLogo" >@drawable/your company logo</item> <!-- You can customize the avatar in waiting UI before call or chat is connected by using the following option. --> <item name = "ujet defaultAvatar" >@drawable/your default avatar</item> </style> You can customize background color in the application by overriding keys for each style item in style.xml.
- Use UjetCustomData.putObject("external chat transfer", hashMapObject) to set the transcript data in JSON format as follows: HashMap<String, Object> jsonData = new HashMap<> () ; // Convert json string into hashmap object and store it in jsonData UjetCustomData customData = new UjetCustomData () ; customData.putObject ( "external chat transfer" , jsonData ) ; // Use external chat transfer key to send chat transcript data UjetStartOptions ujetStartOptions = new UjetStartOptions.Builder () .setUnsignedCustomData ( customData ) .build () ; Ujet.start ( ujetStartOptions ) ; JSON format: greeting override : string agent : dictionary name : string avatar : string [url of agent avatar, optional] transcript : array sender : string ["end user" or "agent"] timestamp : string [ie "2021-03-15 12:00:00Z"] content : array type : string [one of text, media] text : string [required for text type] media : dictionary [required for media type] type : string [one of image, video] url : string [public URL pointing at media file] JSON example: { "greeting override" : "Please hold while we connect you with a human agent." , "agent" : { "name" : "Name" , "avatar" : "avatar url" }, "transcript" : [ { "sender" : "agent" , "timestamp" : "2021-03-15 12:00:15Z" , "content" : [ { "type" : "text" , "text" : " Suggestions shown: \n\n Help with batch or delivery\n Help with metrics or order feedback\n Help with Instant Cashout" } ] }, { "sender" : "end user" , "timestamp" : "2021-03-15 12:00:16Z" , "content" : [ { "type" : "text" , "text" : "Help with batch or delivery" } ] } ] } You can use Markdown on the text type.

### "Mid-Session authentication by API \_|\_ Google Cloud Contact Center as a\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)
- Source ID: `site-docs-reference-required-5`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 123-456-7890 API samples Sample API response Success response sample: 202 Accepted { "message" : "accepted" } Failure response samples Missing Parameters 400 { "message" : "param is missing or the value is empty: comm type" } 400 { "message" : "param is missing or the value is empty: identifier" } Referencing a comm type other than call or chat 404 { "message" : "Not Found" } Session not active 400 { "message" : "Call is already ended" } 400 { "message" : "Chat is already ended" } Unsupported CRM request 400 { "message" : "Unsupported CRM request" } Duplicate request 400 { "message" : "Duplicate request: Please wait for the interval to expire" } API request sample Call Comm Type POST https://<subdomain>.<domain>/apps/api/v1/calls/:call id/end user Content-Type: application/json Authorization: Bearer <your access token> { "identifier" : "unique external id" , "name" : "John Doe" , "email" : "johndoe@example.com" , "phone" : "123-456-7890" } Chat Comm Type POST https://<subdomain>.<domain>/apps/api/v1/chats/:chat id/end user Content-Type: application/json Authorization: Bearer <your access token> { "identifier" : "unique external id" , "name" : "Jane Smith" , "email" : "janesmith@example.com" , "phone" : "098-765-4321" } Apps API Documentation For additional apps API endpoints, see Apps API Publication .
- For the call comm type: POST https://&lt;subdomain>.&lt;domain>//apps/api/v1/calls/:call id/end user For the chat comm type: POST https://&lt;subdomain>.&lt;domain>//apps/api/v1/chats/:chat id/end user API operations Parameters The body of the API request should have the following fields: ID Field name Type Required?
- Aids with customer lookup. john@doe.com 3 phone String No The generic phone number associated with the interaction.
- John Doe 2 email String No The generic email address associated with the interaction.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Feature name Description Voicemail Timeout A specified time value time out the voicemail for the agent after they've listened to it.
- Each mailbox displays the queue name, queue priority, and the number of voicemails in each mailbox.
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- When enabled, configure the TSS or upload a custom greeting in Settings Languages & Messages Deflection to Voicemail option - Request Already Placed Message. - Limit consumer to 1 voicemail per queue: a consumer could leave a separate voicemail request on a separate queue. - Limit consumer to 1 voicemail request across all queues: voicemail option not available if an unattended voicemail is already left form the phone number.

