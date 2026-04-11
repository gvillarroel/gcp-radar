---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.711Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script NATIVE sandbox mode"
feature_slug: "apps-script-native-sandbox-mode"
latest_feature_date: "2016-07-06"
deprecation_date: "2016-07-06"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/advanced/vertex-ai"
keywords:
  - "native"
  - "sandbox"
  - "deprecated"
  - "mode"
  - "script"
  - "apps"
  - "by"
  - "the"
---

# Apps Script NATIVE sandbox mode

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecated the NATIVE sandbox mode by shutting it down and defaulting scripts to IFRAME mode; deprecated on 2016-07-06.

## Extended Definition

Deprecated the NATIVE sandbox mode by shutting it down and defaulting scripts to IFRAME mode; deprecated on 2016-07-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/advanced/vertex-ai](https://developers.google.com/apps-script/advanced/vertex-ai)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- November 12, 2015 Change In the HTML service , all new scripts default to IFRAME sandbox mode unless NATIVE mode is explicitly specified.
- In the HTML service, the NATIVE sandbox mode is now the default if you have not specified which mode your script should use.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The webpage provides an advanced guide on creating a fact-check custom function for Google Sheets using Google Apps Script, powered by a Vertex AI agent and Gemini model.
- Coding level : Advanced Duration : 30 minutes Project type : Custom function Overview A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a Vertex AI agent and Gemini model.
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .
- In the Apps Script project, go to Project Settings , click Edit script properties , then click Add script property to add the following script properties: LOCATION with the location of the Google Cloud project created in previous steps such as us-central1 .

### Vertex AI Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/vertex-ai](https://developers.google.com/apps-script/advanced/vertex-ai)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate text using a service account The following example shows how to generate text by authenticating as an Apps Script project using a service account . / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { const service = getServiceAccountService (); // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- The function returns the output to Apps Script's execution log . / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- Home Google Workspace Apps Script Reference Send feedback Vertex AI Service Stay organized with collections Save and categorize content based on your preferences. access Gemini and other generative AI models.
- Endpoints . generateContent ( payload , model , {}, // Authenticate with the service account token. { Authorization : Bearer ${ service . getAccessToken () } }, ); // Use optional chaining for safe property access return response ? . candidates ? .[ 0 ] ? . content ? . parts ? .[ 0 ] ? . text 'No response generated.' ; } / Get a new OAuth2 service for a given service account. / function getServiceAccountService () { const serviceAccountKeyString = PropertiesService . getScriptProperties (). getProperty ( 'SERVICE ACCOUNT KEY' ); if ( ! serviceAccountKeyString ) { throw new Error ( 'SERVICE ACCOUNT KEY property is not set.

