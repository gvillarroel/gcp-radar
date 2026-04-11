---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.689Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Spreadsheet service: Rich text and text styling"
feature_slug: "apps-script-spreadsheet-service-rich-text-and-text-styling"
latest_feature_date: "2019-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/analyticsdata"
  - "https://developers.google.com/apps-script/quickstart/vertex-ai"
keywords:
  - "styling"
  - "rich"
  - "spreadsheet"
  - "text"
  - "script"
  - "apps"
  - "and"
  - "the"
---

# Apps Script Spreadsheet service: Rich text and text styling

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Spreadsheet service added rich text and text-style APIs for creating and applying rich text formatting to cell ranges.

## Extended Definition

The Spreadsheet service added rich text and text-style APIs for creating and applying rich text formatting to cell ranges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- [https://developers.google.com/apps-script/quickstart/vertex-ai](https://developers.google.com/apps-script/quickstart/vertex-ai)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
- Page Summary outlined flag Several Apps Script services have been updated, including the Spreadsheet, Forms, Calendar, Docs, Chat, and Google Workspace Add-ons services, adding new features and capabilities.

### Analytics Data Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Properties . runReport ( request , properties/ ${ propertyId } , ); if ( ! report . rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "Google Analytics Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const dimensionHeaders = report . dimensionHeaders . map (( dimensionHeader ) = > { return dimensionHeader . name ; }); const metricHeaders = report . metricHeaders . map (( metricHeader ) = > { return metricHeader . name ; }); const headers = [... dimensionHeaders , ... metricHeaders ]; sheet . appendRow ( headers ); // Append the results. const rows = report . rows . map (( row ) = > { const dimensionValues = row . dimensionValues . map (( dimensionValue ) = > { return dimensionValue . value ; }); const metricValues = row . metricValues . map (( metricValues ) = > { return metricValues . value ; }); return [... dimensionValues , ... metricValues ]; }); sheet . getRange ( 2 , 1 , report . rows . length , headers . length ). setValues ( rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } catch ( e ) { // TODO (Developer) - Handle exception console . log ( "Failed with error: %s" , e . error ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Like all advanced services in Apps Script, the AnalyticsData service uses the same objects, methods, and parameters as the public API.
- Sample code Run a report The sample runs a report to retrieve the active users count by city and stores the results in a new spreadsheet. advanced/analyticsData.gs View on GitHub / Runs a report of a Google Analytics 4 property ID.
- Page Summary outlined flag The Analytics Data service allows Google Analytics users to programmatically access Google Analytics 4 (GA4) report data through the Google Analytics Data API v1 in Apps Script.

### "Quickstart: Generate text using Vertex AI \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/quickstart/vertex-ai](https://developers.google.com/apps-script/quickstart/vertex-ai)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open the Code.gs file and replace its contents with the following code: / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- For example, the execution log returns a response such as the following: Response: Google Apps Script is a cloud-based, JavaScript platform that lets you automate, integrate, and extend Google Workspace applications like Sheets, Docs, and Gmail.
- Home Google Workspace Apps Script Samples Send feedback Quickstart: Generate text using Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- Create and set up your Apps Script project To create and set up your Apps Script project, complete the following steps: Go to script.google.com .

