---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.711Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script project key deprecation"
feature_slug: "apps-script-project-key-deprecation"
latest_feature_date: "2016-07-12"
deprecation_date: "2016-07-12"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/vertex-ai"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
keywords:
  - "keys"
  - "deprecation"
  - "key"
  - "project"
  - "deprecated"
  - "using"
  - "script"
  - "apps"
---

# Apps Script project key deprecation

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecated using project keys as script identifiers and designated the Script ID as the preferred unique identifier; deprecated on 2016-07-12.

## Extended Definition

Deprecated using project keys as script identifiers and designated the Script ID as the preferred unique identifier; deprecated on 2016-07-12.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/vertex-ai](https://developers.google.com/apps-script/advanced/vertex-ai)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- July 12, 2016 Deprecated The use of project keys to identify scripts is now deprecated.
- Fixed Issue 2916 : HTML files inserted into a new Apps Script project using the Google Drive SDK are no longer created with the server js filetype.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Vertex AI Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/vertex-ai](https://developers.google.com/apps-script/advanced/vertex-ai)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate text using a service account The following example shows how to generate text by authenticating as an Apps Script project using a service account . / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { const service = getServiceAccountService (); // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- The function returns the output to Apps Script's execution log . / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- Please follow the setup instructions.' ); } const serviceAccountKey = JSON . parse ( serviceAccountKeyString ); const CLIENT EMAIL = serviceAccountKey . client email ; const PRIVATE KEY = serviceAccountKey . private key ; const SCOPES = [ 'https://www.googleapis.com/auth/cloud-platform' ]; return OAuth2 . createService ( 'ServiceAccount' ) . setTokenUrl ( 'https://oauth2.googleapis.com/token' ) . setPrivateKey ( PRIVATE KEY ) . setIssuer ( CLIENT EMAIL ) . setPropertyStore ( PropertiesService . getScriptProperties ()) . setScope ( SCOPES ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Endpoints . generateContent ( payload , model , {}, // Authenticate with the service account token. { Authorization : Bearer ${ service . getAccessToken () } }, ); // Use optional chaining for safe property access return response ? . candidates ? .[ 0 ] ? . content ? . parts ? .[ 0 ] ? . text 'No response generated.' ; } / Get a new OAuth2 service for a given service account. / function getServiceAccountService () { const serviceAccountKeyString = PropertiesService . getScriptProperties (). getProperty ( 'SERVICE ACCOUNT KEY' ); if ( ! serviceAccountKeyString ) { throw new Error ( 'SERVICE ACCOUNT KEY property is not set.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .
- In the Apps Script project, go to Project Settings , click Edit script properties , then click Add script property to add the following script properties: LOCATION with the location of the Google Cloud project created in previous steps such as us-central1 .
- Coding level : Advanced Duration : 30 minutes Project type : Custom function Overview A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a Vertex AI agent and Gemini model.
- Page Summary outlined flag The webpage provides an advanced guide on creating a fact-check custom function for Google Sheets using Google Apps Script, powered by a Vertex AI agent and Gemini model.

