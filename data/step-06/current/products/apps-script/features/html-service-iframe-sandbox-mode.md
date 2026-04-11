---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.758Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "HTML service IFRAME sandbox mode"
feature_slug: "html-service-iframe-sandbox-mode"
latest_feature_date: "2014-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/advanced/vertex-ai"
keywords:
  - "iframe"
  - "sandbox"
  - "mode"
  - "html"
  - "script"
  - "added"
  - "apps"
  - "an"
---

# HTML service IFRAME sandbox mode

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script HTML service added an IFRAME sandbox mode that reduces restrictions and runs faster, with compatibility exceptions for some older browsers.

## Extended Definition

Apps Script HTML service added an IFRAME sandbox mode that reduces restrictions and runs faster, with compatibility exceptions for some older browsers.

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
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the following class, enum, and methods to the Spreadsheet service, to give precise control over protected sheets and ranges: Protection ProtectionType Range.canEdit() Range.isEndColumnBounded() Range.isEndRowBounded() Range.isStartColumnBounded() Range.isStartRowBounded() Range.protect() Sheet.getProtections(type) Sheet.protect() Spreadsheet.getProtections(type) Fixed Issue 4617 : HTML service pages that use the new IFRAME sandbox mode now render correctly in Firefox.
- Feature Added a new IFRAME sandbox mode for HTML service that imposes many fewer restrictions than the other sandbox modes and runs much faster.
- November 12, 2015 Change In the HTML service , all new scripts default to IFRAME sandbox mode unless NATIVE mode is explicitly specified.
- October 19, 2016 Feature Added X-Frame-Option header support to HtmlService , allowing iframes to render Apps Script HTML and web apps.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Coding level : Advanced Duration : 30 minutes Project type : Custom function Overview A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a Vertex AI agent and Gemini model.
- Home Google Workspace Apps Script Samples Send feedback Fact-check statements with an ADK AI agent and Gemini model Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The webpage provides an advanced guide on creating a fact-check custom function for Google Sheets using Google Apps Script, powered by a Vertex AI agent and Gemini model.
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .

### Vertex AI Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/vertex-ai](https://developers.google.com/apps-script/advanced/vertex-ai)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate text using a service account The following example shows how to generate text by authenticating as an Apps Script project using a service account . / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { const service = getServiceAccountService (); // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- The function returns the output to Apps Script's execution log . / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- Home Google Workspace Apps Script Reference Send feedback Vertex AI Service Stay organized with collections Save and categorize content based on your preferences. access Gemini and other generative AI models.
- Endpoints . generateContent ( payload , model , {}, // Authenticate with the service account token. { Authorization : Bearer ${ service . getAccessToken () } }, ); // Use optional chaining for safe property access return response ? . candidates ? .[ 0 ] ? . content ? . parts ? .[ 0 ] ? . text 'No response generated.' ; } / Get a new OAuth2 service for a given service account. / function getServiceAccountService () { const serviceAccountKeyString = PropertiesService . getScriptProperties (). getProperty ( 'SERVICE ACCOUNT KEY' ); if ( ! serviceAccountKeyString ) { throw new Error ( 'SERVICE ACCOUNT KEY property is not set.

