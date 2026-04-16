---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.940Z"
product_name: "Identity Platform"
product_slug: "identity-platform"
feature_name: "SMS toll fraud protection for SMS-based flows on iOS"
feature_slug: "sms-toll-fraud-protection-for-sms-based-flows-on-ios"
latest_feature_date: "2024-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/CreateSessionCookieResponse"
  - "https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/GetAccountInfoResponse"
  - "https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims"
  - "https://docs.cloud.google.com/identity-platform/docs/error-codes"
keywords:
  - "sms"
  - "toll"
  - "fraud"
  - "protection"
  - "for"
  - "based"
  - "flows"
  - "on"
---

# SMS toll fraud protection for SMS-based flows on iOS

Product: Identity Platform
Coverage: MEDIUM

## Step 02 Summary

Identity Platform's reCAPTCHA Enterprise integration adds SMS toll fraud protection for SMS-based flows on iOS.

## Extended Definition

Identity Platform's reCAPTCHA Enterprise integration adds SMS toll fraud protection for SMS-based flows on iOS.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/CreateSessionCookieResponse](https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/CreateSessionCookieResponse)
- [https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/GetAccountInfoResponse](https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/GetAccountInfoResponse)
- [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims)
- [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes)

## Supporting Pages

### CreateSessionCookieResponse \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/CreateSessionCookieResponse](https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/CreateSessionCookieResponse)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Access and resource management Identity Platform Reference Send feedback CreateSessionCookieResponse Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
- JSON representation { "sessionCookie" : string } Fields sessionCookie string The session cookie that has been created from the Identity Platform ID token specified in the request.
- JSON representation Response message for projects.createSessionCookie.

### GetAccountInfoResponse \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/GetAccountInfoResponse](https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/GetAccountInfoResponse)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Access and resource management Identity Platform Reference Send feedback GetAccountInfoResponse Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
- JSON representation { "kind" : string , "users" : [ { object ( UserInfo ) } ] } Fields kind (deprecated) string This item is deprecated! users[] object ( UserInfo ) The information of specific user account(s) matching the parameters in the request.
- JSON representation Response message for accounts.lookup.

### "Configure custom claims on users \_|\_ Identity Platform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims](https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Access and resource management Identity Platform Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- TryGetValue ( "admin" , out isAdmin )) { if (( bool ) isAdmin ) { // Allow access to requested admin resource. } } FirebaseAuthSnippets . cs To determine what custom claims are present for a user: Node.js // Lookup the user associated with the specified uid. getAuth () . getUser ( uid ) . then (( userRecord ) = > { // The claims can be accessed on the user record. console . log ( userRecord . customClaims [ 'admin' ]); }); custom claims . js Java // Lookup the user associated with the specified uid.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Your app can use these claims to handle complex authorization scenarios, such as restricting a user's access to a resource based on their role.

### Error codes \_|\_ Identity Platform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity-platform/docs/error-codes](https://docs.cloud.google.com/identity-platform/docs/error-codes)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- E.164 phone numbers are written in the format: [+][country code][subscriber number including area code] . auth/missing-verification-code ERROR MISSING VERIFICATION CODE ERROR MISSING VERIFICATION CODE FirebaseAuthInvalidCredentialsException 17043 The phone auth credential was created with an empty SMS verification code. auth/invalid-verification-code ERROR INVALID VERIFICATION CODE ERROR INVALID VERIFICATION CODE FirebaseAuthInvalidCredentialsException 17044 The SMS verification code used to create the phone auth credential is invalid.
- Home Documentation Access and resource management Identity Platform Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Resend the verification code SMS, and be sure to use the verification code provided by the user. auth/missing-verification-id ERROR MISSING VERIFICATION ID ERROR MISSING VERIFICATION ID FirebaseAuthInvalidCredentialsException 17045 The phone authentication credential was created with an empty verification ID. auth/invalid-verification-id ERROR INVALID VERIFICATION ID ERROR INVALID VERIFICATION ID FirebaseAuthInvalidCredentialsException 17046 The verification ID used to create the phone auth credential is invalid. auth/code-expired ERROR SESSION EXPIRED ERROR SESSION EXPIRED FirebaseAuthInvalidCredentialsException 17051 The SMS code has expired.
- Phone authentication error codes Web error code iOS error code Android error code Android exception ID and description auth/missing-phone-number ERROR MISSING PHONE NUMBER ERROR MISSING PHONE NUMBER FirebaseAuthInvalidCredentialsException 17041 To send verification codes, provide a phone number for the recipient. auth/invalid-phone-number ERROR INVALID PHONE NUMBER ERROR INVALID PHONE NUMBER FirebaseAuthInvalidCredentialsException 17042 The format of the phone number provided is incorrect.

