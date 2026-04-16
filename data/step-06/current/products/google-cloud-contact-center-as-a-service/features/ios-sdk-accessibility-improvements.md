---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.110Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "iOS SDK accessibility improvements"
feature_slug: "ios-sdk-accessibility-improvements"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api"
keywords:
  - "ios"
  - "sdk"
  - "accessibility"
  - "improvements"
  - "mobile"
  - "adds"
  - "several"
  - "wcag"
---

# iOS SDK accessibility improvements

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The mobile iOS SDK adds support for several WCAG accessibility criteria to improve assistive technology compatibility.

## Extended Definition

The mobile iOS SDK adds support for several WCAG accessibility criteria to improve assistive technology compatibility.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)

## Supporting Pages

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- The following code shows how to configure the download transcript button: typedef NS OPTIONS ( NSUInteger, UJETChatDownloadTranscriptVisibilityOptions ) { UJETChatDownloadTranscriptVisibilityOptionsShowAll = 0 , UJETChatDownloadTranscriptVisibilityOptionsHideFromOptionsMenu = 1 << 0 , UJETChatDownloadTranscriptVisibilityOptionsHideFromPostChatScreen = 1 << 1 , UJETChatDownloadTranscriptVisibilityOptionsHideAll = UJETChatDownloadTranscriptVisibilityOptionsHideFromOptionsMenu UJETChatDownloadTranscriptVisibilityOptionsHideFromPostChatScreen } ; @property ( nonatomic, assign ) UJETChatDownloadTranscriptVisibilityOptions transcriptVisibilityOptions ; PSTN Fallback We provide PSTN fallback for several situations: Mobile network is offline.
- Check that your certificate is working with Apple's push notification server. openssl s client -connect gateway.push.apple.com:2195 -cert cert.pem -debug -showcerts When successful, it should return: --- New, TLSv1/SSLv3, Cipher is AES256-SHA Server public key is 2048 bit Secure Renegotiation IS supported Compression: NONE Expansion: NONE SSL-Session: Protocol : TLSv1 Cipher : AES256-SHA Session-ID: Session-ID-ctx: Master-Key: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Key-Arg : None Start Time: 1475785489 Timeout : 300 ( sec ) Verify return code: 0 ( ok ) --- Sign in to the CCAI Platform portal with administrator credentials, and go to Settings > Developer Settings > Mobile App .
- String // Should have this value as it is view.addSubview ( broadcastPickerView ) } @IBAction func denyButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.dismissed? () } } } Don't forget to pass this provider to our SDK through the following API: let provider = CobrowseAlertProvider () UJET.setCobrowseAlertProvider ( provider ) Broadcast Extension The feature requires adding a Broadcast Extension.
- This is especially important when the userId has changed. [ UJET getStatus ] ; If there is an existing session, we should prompt the user to resume the session or cancel the action: if ([ UJET getStatus ] ! = UjetStatusNone ) { // Display alert to cancel login or resume existing session } Customize There are several options for the SDK theme listed in UJETGlobalTheme.h .

### "Web SDK API reference \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api)
- Source ID: `site-docs-reference-3`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Mid-Session authentication by API \_|\_ Google Cloud Contact Center as a\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)
- Source ID: `site-docs-reference-required-5`
- Final score: 46
- Re-rank relevance: N/A

