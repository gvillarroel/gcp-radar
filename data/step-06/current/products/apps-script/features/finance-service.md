---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.761Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Finance service"
feature_slug: "finance-service"
latest_feature_date: "2014-10-23"
deprecation_date: "2014-10-23"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-license-manager"
keywords:
  - "finance"
  - "removed"
  - "deprecated"
  - "script"
  - "apps"
  - "was"
  - "the"
  - "in"
---

# Finance service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Apps Script Finance service was removed; Deprecated the Finance service in Apps Script with planned shutdown after a six-month transition period; deprecated on 2014-10-23.

## Extended Definition

The Apps Script Finance service was removed; Deprecated the Finance service in Apps Script with planned shutdown after a six-month transition period; deprecated on 2014-10-23.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/advanced/admin-sdk-license-manager](https://developers.google.com/apps-script/advanced/admin-sdk-license-manager)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The deprecated SOAP service and old XML service have now been removed from autocomplete and documentation, as announced on July 9, 2013 and documented in the Apps Script sunset schedule .
- The Apps Script Contacts service was deprecated in December 2022.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Settings service lets you use the Admin SDK's Groups Settings API in Google Apps Script.
- Here, the description is modified, but various other settings can be changed in the same way. @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch / function updateGroupSettings () { const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings . newGroups (); group . description = "Newly changed group description" ; AdminGroupsSettings .

### "Admin SDK Enterprise License Manager Service \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-license-manager](https://developers.google.com/apps-script/advanced/admin-sdk-license-manager)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Admin SDK Enterprise License Manager service in Apps Script allows domain admins to manage user licenses using the Admin SDK Enterprise License Manager API.
- Like all advanced services in Apps Script, the Admin SDK Enterprise License Manager service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Enterprise License Manager service lets you use the Admin SDK Enterprise License Manager API in Google Apps Script.
- For more details follow the link https://developers.google.com/admin-sdk/licensing/reference/rest/v1/licenseAssignments/insert / function insertLicenseAssignment () { const productId = "Google-Apps" ; const skuId = "Google-Vault" ; const userId = "marty@hoverboard.net" ; try { const results = AdminLicenseManager .

