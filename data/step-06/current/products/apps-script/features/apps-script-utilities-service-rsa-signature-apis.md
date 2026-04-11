---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.697Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Utilities service: RSA signature APIs"
feature_slug: "apps-script-utilities-service-rsa-signature-apis"
latest_feature_date: "2018-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/advanced"
  - "https://developers.google.com/apps-script/advanced/vertex-ai"
keywords:
  - "generation"
  - "rsa"
  - "signature"
  - "utilities"
  - "script"
  - "added"
  - "apis"
  - "apps"
---

# Apps Script Utilities service: RSA signature APIs

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Utilities added RSA signature generation methods and the RsaAlgorithm options for secure hashing workflows.

## Extended Definition

Utilities added RSA signature generation methods and the RsaAlgorithm options for secure hashing workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- [https://developers.google.com/apps-script/advanced/vertex-ai](https://developers.google.com/apps-script/advanced/vertex-ai)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- August 04, 2015 Feature Added the following methods to the Spreadsheet service to let scripts control "warning-based" protection for spreadsheet ranges (which means that every user can edit data in the area, except editing prompts the user to confirm the edit): Protection.isWarningOnly() Protection.setWarningOnly(warningOnly) June 30, 2015 Feature Added two variations of the method computeRsaSha256Signature to the Utilities global object to let scripts sign a string using the RSA SHA-256 algorithm.
- November 03, 2022 Feature Apps Script added a new method to the Utilities class . parseDate(date, timeZone, format ) parses a provided string date according to the specification described in the Java Standard Edition SimpleDateFormat class .
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- How method signatures are determined Advanced services generally use the same objects, method names, and parameters as the corresponding public APIs, although method signatures are translated for use in Apps Script.
- Support for advanced services Because advanced services are thin wrappers around Google APIs, any issue encountered while using them is usually an issue with the underlying API, not with Apps Script.
- Page Summary outlined flag Advanced services in Apps Script allow experienced developers to connect to certain public Google APIs with less set-up than using their HTTP interfaces.
- The corresponding method signature in Apps Script has the following arguments: The request body (usually a resource), as a JavaScript object.

### Vertex AI Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/vertex-ai](https://developers.google.com/apps-script/advanced/vertex-ai)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Generate text using a service account The following example shows how to generate text by authenticating as an Apps Script project using a service account . / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { const service = getServiceAccountService (); // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- The function returns the output to Apps Script's execution log . / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- Please follow the setup instructions.' ); } const serviceAccountKey = JSON . parse ( serviceAccountKeyString ); const CLIENT EMAIL = serviceAccountKey . client email ; const PRIVATE KEY = serviceAccountKey . private key ; const SCOPES = [ 'https://www.googleapis.com/auth/cloud-platform' ]; return OAuth2 . createService ( 'ServiceAccount' ) . setTokenUrl ( 'https://oauth2.googleapis.com/token' ) . setPrivateKey ( PRIVATE KEY ) . setIssuer ( CLIENT EMAIL ) . setPropertyStore ( PropertiesService . getScriptProperties ()) . setScope ( SCOPES ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Google Workspace Apps Script Reference Send feedback Vertex AI Service Stay organized with collections Save and categorize content based on your preferences. access Gemini and other generative AI models.

