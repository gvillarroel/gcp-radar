---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.681Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "TextStyleBuilder.setForegroundColorObject"
feature_slug: "textstylebuilder-setforegroundcolorobject"
latest_feature_date: "2020-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/advanced/calendar"
keywords:
  - "setforegroundcolorobject"
  - "textstylebuilder"
  - "foreground"
  - "setting"
  - "color"
  - "via"
  - "adds"
  - "for"
---

# TextStyleBuilder.setForegroundColorObject

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds TextStyleBuilder.setForegroundColorObject(color) for setting foreground color via Color objects.

## Extended Definition

Adds TextStyleBuilder.setForegroundColorObject(color) for setting foreground color via Color objects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The TextStyleBuilder class now has a TextStyleBuilder.setForegroundColorObject(color) method that updates the foreground color of the style builder using a Color object.
- The TextStyle class now has a TextStyle.getForegroundColorObject() method that gets the foreground color of the style as a Color object.
- February 29, 2016 Feature The Spreadsheet API adds new methods for getTabColor() and setTabColor(color) .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- This API gives administrators of Google Workspace domains (including resellers) the ability to manage the group settings for groups in their Google Workspace account.
- Reference For detailed information on this service, see the reference documentation for the Admin SDK Groups Settings API.
- Sample code is provided for getting and updating a group's settings.
- Apps Script to manage group settings for Google Workspace domains.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- In most cases, the built-in service is easier to use, but this advanced service provides a few extra features, including setting the background color for individual events.
- The conditional fetch is accomplished by setting the 'If-None-Match' header to the etag of the last known state of the event. / function conditionalFetch () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.
- The conditional update is accomplished by setting the 'If-Match' header to the etag of the new event when it was created. / function conditionalUpdate () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.
- Page Summary outlined flag The advanced Calendar service in Apps Script allows access to the public Google Calendar API, offering more features than the built-in service, such as setting event background colors.

