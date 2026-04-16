---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.047Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Screen Share"
feature_slug: "screen-share"
latest_feature_date: "2025-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide"
keywords:
  - "screen"
  - "share"
  - "renames"
  - "co"
  - "browse"
  - "capability"
  - "user"
  - "interface"
---

# Screen Share

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Renames the Co-browse capability to Screen Share in the user interface and documentation.

## Extended Definition

Renames the Co-browse capability to Screen Share in the user interface and documentation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide)

## Supporting Pages

### "Use Screen Share \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/cobrowse-agent-guide)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following list explains the difference: Web channel: With Screen Share mode using the web channel, you can see the end-user's active browser tab.
- Each time you initiate a different Screen Share mode, a message is sent to the end-user that describes the requested level of access and gives them the opportunity to approve or deny access.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Use Screen Share Stay organized with collections Save and categorize content based on your preferences.
- Screen Share modes Screen Share has three modes, with each mode giving you a different level of control over the end-user's device.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UJETEventEmailDidClick Queue Menu Data UJETEventEmailDidSubmit Queue Menu Data has attachment: (NSNumber) @YES, @NO UJETEventSessionViewDidAppear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionViewDidDisappear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionDidCreate Session Data UJETEventSessionDidEnd Session Data agent name: (NSString) null if agent didn't join duration: (NSNumber) only for call ended by: (NSString) type=call: @"agent", @"end user" type=chat: @"agent", @"end user", @"timeout", @"dismissed" UJETEventSdkDidTerminate UJETEventPostSessionOptInDidSelected opt in selected: (NSString) @"Yes", @"No" Event Data Metadata application: @"iOS" app id: (NSString) bundle identifier app version: (NSString) company: (NSString) subdomain device model: (NSString) device version: (NSString) sdk version: (NSString) timestamp: (NSString) ISO 8601 Queue Menu Data Metadata menu id: NSString menu key: NSString, nullable menu name: NSString menu path : NSString Session Data Queue Menu Data session id: NSString type: @"call", @"chat" end user identifier: NSString Setup Screen Share If you want to use Screen Share feature, then integrate UJETCobrowseKit.xcframework .
- Customize the Screen Share consent dialog To customize the Screen Share consent dialog, you need to implement the UJETCobrowseAlertProvider protocol in your provider class.
- In UJETObject.h from example project: @import UJETKit ; @interface UJETObject : NSObject <UJETDelegate> Implement signPayload : payloadType : success: failure: delegate method. - ( void ) signPayload: ( NSDictionary ) payload payloadType: ( UjetPayloadType ) payloadType success: ( void ( ^ )( NSString )) success failure: ( void ( ^ )( NSError )) failure { if ( payloadType == UjetPayloadAuthToken ) { [ self signAuthTokenInLocal:payload success:success failure:failure ] ; } } - ( void ) signAuthTokenInLocal: ( NSDictionary ) payload success: ( void ( ^ )( NSString )) success failure: ( void ( ^ )( NSError )) failure { NSMutableDictionary payloadData = [ payload mutableCopy ] ; NSDictionary userData = [[ NSUserDefaults standardUserDefaults ] objectForKey:@ "user-data" ] ; [ payloadData addEntriesFromDictionary:userData ] ; payloadData [ @ "iat" ] = [ NSNumber numberWithDouble: [[ NSDate date ] timeIntervalSince1970 ]] ; // required payloadData [ @ "exp" ] = [ NSNumber numberWithDouble: ([[ NSDate date ] timeIntervalSince1970 ] + 600 )] ; // required NSString signedToken = [ self encodeJWT:payloadData ] ; if ( signedToken.length > 0 ) { success ( signedToken ) ; } else { NSDictionary userInfo = @ { NSLocalizedDescriptionKey: @ "Failed to sign token" } ; NSError error = [ NSError errorWithDomain:@ "ExampleApp" code:0 userInfo:userInfo ] ; failure ( error ) ; } } - ( NSString ) encodeJWT: ( NSDictionary ) payload { id<JWTAlgorithm> algorithm = [ JWTAlgorithmHSBase algorithm384 ] ; NSString secret = NSBundle.mainBundle.infoDictionary [ @ "UJETCompanySecret" ] ; return [ JWTBuilder encodePayload:payload ] .secret () .algorithm ( algorithm ) .encode ; } We strongly recommend signing the payload from your application server, not in the client.
- This can be accomplished either by using the JSON file (see form card property) or by using the UJETChatActionMenuTheme class. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let actionMenuTheme = UJETChatActionMenuTheme () let photoLibraryIcon = UJETChatUserInputIconTheme () photoLibraryIcon.visible = true photoLibraryIcon.image = UJETImageRef ( assetName: "library button asset" ) let cameraIcon = UJETChatUserInputIconTheme () cameraIcon.visible = true cameraIcon.image = UJETImageRef ( assetName: "camera button asset" ) let cobrowseIcon = UJETChatUserInputIconTheme () cobrowseIcon.visible = true cobrowseIcon.image = UJETImageRef ( assetName: "cobrowse button asset" ) actionMenuTheme.libraryIcon = photoLibraryIcon actionMenuTheme.cameraIcon = cameraIcon actionMenuTheme.cobrowseIcon = cobrowseIcon chatTheme?.actionMenu = actionMenuTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme UJET.setGlobalTheme ( globalTheme ) } Other appearances You can customize other appearances such as font size and background color. theme.supportTitleLabelFontSize = 30 ; theme.supportDescriptionLabelFontSize = 20 ; theme.supportPickerViewFontSize = 30 ; theme.staticFontSizeInSupportPickerView = YES ; theme.backgroundColor = UIColor.darkGrayColor ; theme.backgroundColorForDarkMode = UIColor.lightGrayColor ; CallKit On iOS 10.0 and greater, CallKit is enabled for all calls.

### "Headless web SDK guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/headless-web-guide)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample shows you how to enable Screen Share: new Client ({ // ... cobrowse: { enabled: true, license: 'YOUR SCREEN SHARE LICENSE' } }) The following code sample show the options for Screen Share: interface CobrowseOption { enabled : boolean template? : string confirmSessionTemplate? : string confirmRemoteControlTemplate? : string confirmFullDeviceTemplate? : string sessionControlsTemplate? : string root? : Element messages ?: { confirmSessionTitle : string ; confirmSessionContent : string ; confirmRemoteControlTitle : string ; confirmRemoteControlContent : string ; confirmFullDeviceTitle : string ; confirmFullDeviceContent : string ; allowText : string ; denyText : string ; endSessionText : string ; } api? : string license? : string trustedOrigins? : string [] capabilities? : string [] registration? : boolean redactedViews? : string [] unredactedViews? : string [] } Custom template You can customize the Screen Share dialog template using the template option from the preceding code sample.
- The following example shows the default template: <dialog open class = "cobrowse-dialog" > <h1> $title </h1> <div class = "cobrowse-dialog content" > $content </div> <div class = "cobrowse-dialog footer" > <button class = "cobrowse-dialog allow js-cobrowse-allow" > $allow </button> <button class = "cobrowse-dialog deny js-cobrowse-deny" > $deny </button> </div> </dialog> You can use this template to configure a dialog that requests approval from the end-user for the following: Start a Screen Share session Start a remote control Screen Share session Start a full device Screen Share session Here are the template options: confirmSessionTemplate : For confirming a Screen Share session. confirmRemoteControlTemplate : For confirming a remote control Screen Share session. confirmFullDeviceTemplate .
- Here's the default template: <button class="cobrowse-end js-cobrowse-end">$end</button> Messages The following message variables are used in Custom templates : $title $content $allow $deny The following example shows how these variables are applied: { confirmSessionTitle : string ; // $title confirmSessionContent : string ; // $content confirmRemoteControlTitle : string ; // $title confirmRemoteControlContent : string ; // $content confirmFullDeviceTitle : string ; // $title confirmFullDeviceContent : string ; // $content allowText : string ; // $allow denyText : string ; // $deny endSessionText : string ; // $end } The following example shows the default English variable values: { "confirmSessionTitle" : "Screen Share Session Request" , "confirmSessionContent" : "Do you want to share your current screen with the agent?" , "endSessionText" : "End Screen Share Session" , "confirmRemoteControlTitle" : "Remote Access Request" , "confirmRemoteControlContent" : "The agent would like to have access to your currently shared screen to further assist you.
- Install the headless web SDK To install the headless web SDK, use the following code snippet in your project: npm install @ujet/websdk-headless --save Use the headless web SDK To use the headless Web SDK, you can follow the example code provided: import { Client } from "@ujet/websdk-headless" const client = new Client ({ ... }) async function authenticate () { const resp = await fetch ( "/your-auth-endpoint" ) const data = await resp . json () return { token : data . token } } const client = new Client ({ companyId : "YOUR-COMPANY-ID" , tenant : "YOUR-TENANT-NAME" , authenticate : authenticate , }) // const company = await client.getCompany() // const menus = await client.getMenus() The Client class accepts several options (you can customize according to your requirements): interface ClientOption { companyId : string ; authenticate : () = > Promise<TokenResponse> ; tenant ?: string ; host ?: string ; lang ?: string ; bridge ?: string ; cobrowse ?: { enabled : boolean ; messages ?: CobrowseMessages ; api ?: string ; license ?: string ; trustedOrigins ?: string []; capabilities ?: string []; registration ?: boolean ; redactedViews ?: string []; unredactedViews ?: string []; }; } Enable logging During implementation and testing it might be necessary to gather additional information in the console log.

