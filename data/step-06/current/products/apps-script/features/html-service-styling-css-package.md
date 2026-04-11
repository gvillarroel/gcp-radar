---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.773Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "HTML Service styling CSS package"
feature_slug: "html-service-styling-css-package"
latest_feature_date: "2014-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-license-manager"
keywords:
  - "released"
  - "package"
  - "applies"
  - "css"
  - "styling"
  - "html"
  - "that"
  - "an"
---

# HTML Service styling CSS package

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Released an HTML Service CSS package that applies Google-styled fonts, buttons, and form elements in dialogs and sidebars.

## Extended Definition

Released an HTML Service CSS package that applies Google-styled fonts, buttons, and form elements in dialogs and sidebars.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/advanced/admin-sdk-license-manager](https://developers.google.com/apps-script/advanced/admin-sdk-license-manager)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Feature Released a CSS package to apply Google styling to fonts, buttons, and form elements in HTML service dialogs and sidebars, primarily for use in add-ons.
- A new Card service supports Gmail add-ons by defining several UI widget elements that you can use to create a Gmail add-on interface without HTML or CSS.
- Feature Added the following class, enum, and methods to the Spreadsheet service, to give precise control over protected sheets and ranges: Protection ProtectionType Range.canEdit() Range.isEndColumnBounded() Range.isEndRowBounded() Range.isStartColumnBounded() Range.isStartRowBounded() Range.protect() Sheet.getProtections(type) Sheet.protect() Spreadsheet.getProtections(type) Fixed Issue 4617 : HTML service pages that use the new IFRAME sandbox mode now render correctly in Firefox.
- Here is the list of HTML tags that are permitted: B , BLOCKQUOTE , BODY , BR , CENTER , CAPTION , CITE , CODE , DIV , EM , H1 , H2 , H3 , H4 , H5 , H6 , HR , I , LABEL , LEGEND , LI , OL , P , SPAN , STRONG , SUB , SUP , TABLE , TBODY , TD , THEAD , TITLE , TR , TT , UL Added support for sheet protection, in reference to this issue .

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Next steps Plan travels with an AI agent accessible across Google Workspace Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons Custom functions in Sheets Extending Sheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Confirm that you're enabling the correct API, then click Enable . gcloud CLI If necessary, set the current Cloud project to the one you created with the gcloud config set project command: gcloud config set project PROJECT ID Replace PROJECT ID with the Project ID of the Cloud project you created.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.
- The project ID can't be changed after the project is created, so choose an ID that meets your needs for the lifetime of the project.

### "Admin SDK Enterprise License Manager Service \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-license-manager](https://developers.google.com/apps-script/advanced/admin-sdk-license-manager)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- This is an advanced service that requires explicit enablement before it can be used.
- This is an advanced service that must be enabled before use .
- LicenseAssignments . listForProduct ( productId , customerId , { maxResults : 500 , pageToken : pageToken , }, ); assignments = assignments . concat ( response . items ); pageToken = response . nextPageToken ; } while ( pageToken ); // Print the productId and skuId for ( const assignment of assignments ) { console . log ( "userId: %s, productId: %s, skuId: %s" , assignment . userId , assignment . productId , assignment . skuId , ); } } Insert a license assignment for a user This sample demonstrates how to insert a license assignment for a user, for a given product ID and sku ID combination. advanced/adminSDK.gs View on GitHub / Insert a license assignment for a user, for a given product ID and sku ID combination.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

