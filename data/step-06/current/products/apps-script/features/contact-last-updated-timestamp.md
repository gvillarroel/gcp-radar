---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.677Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Contact last updated timestamp"
feature_slug: "contact-last-updated-timestamp"
latest_feature_date: "2010-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "contact"
  - "last"
  - "updated"
  - "timestamp"
  - "exposes"
  - "date"
  - "when"
  - "was"
---

# Contact last updated timestamp

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Contact exposes the date when a contact was last updated.

## Extended Definition

Contact exposes the date when a contact was last updated.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Added a new method to Contact to get the date a contact was last updated: getLastUpdated() .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Updated the appearance of the warning bar that is displayed when running a script that is published as a service by a user other than the owner, in response to this issue.
- September 17, 2010 Feature Added new methods to CalendarEvent to get the creation date and the date the event was last updated: getDateCreated() and getLastUpdated() .

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- UpdateDraftActionResponseBuilder Methods Method Return type Brief description build() Update Draft Action Response Builds the current update draft action response and validates it. set Send Status(sendStatus) Update Draft Action Response Builder Sets the enum field that determines whether or not the email sends after the update action. set Update Draft Bcc Recipients Action(updateDraftBccRecipientsAction) Update Draft Action Response Builder Sets an action that updates the email Bcc recipients of a draft. set Update Draft Body Action(updateDraftBodyAction) Update Draft Action Response Builder Set an action that updates the email body of a draft. set Update Draft Cc Recipients Action(updateDraftCcRecipientsAction) Update Draft Action Response Builder Sets an action that updates the Cc recipients of a draft. set Update Draft Subject Action(updateDraftSubjectAction) Update Draft Action Response Builder Sets an action that updates the subject line of a draft. set Update Draft To Recipients Action(updateDraftToRecipientsAction) Update Draft Action Response Builder Sets an action that updates the To recipients of a draft.
- ActionResponseBuilder Methods Method Return type Brief description add Modify Card(modifyCard) Action Response Builder Sets the modify card operation to the action. build() Action Response Builds the current action response and validates it. set Link Preview(linkPreview) Action Response Builder Sets the LinkPreview to the action. set Navigation(navigation) Action Response Builder Sets the response to a Navigation action. set Notification(notification) Action Response Builder Sets the notification to display when the action is activated. set Open Link(openLink) Action Response Builder Sets the URL to navigate to when the action is activated. set State Changed(stateChanged) Action Response Builder Sets a flag to indicate that this action changed the existing data state.
- CalendarEventActionResponseBuilder Methods Method Return type Brief description add Attachments(attachments) Calendar Event Action Response Builder Specifies that the response should add the attachments to the Calendar event when the associated UI action is taken. add Attendees(emails) Calendar Event Action Response Builder Specifies that the response should add the indicated attendees to the Calendar event when the associated UI action is taken. build() Calendar Event Action Response Builds the current Calendar event action response and validates it. set Conference Data(conferenceData) Calendar Event Action Response Builder Specifies that the response should set the indicated conference data to the Calendar event when the associated UI action is taken.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- For example, the following sample code shows a simple onEdit(e) trigger for a Google Sheets script that uses the event object to determine which cell was edited. function onEdit ( e ){ // Set a comment on the edited cell to indicate when it was changed . var range = e . range ; range . setNote ( 'Last modified: ' + new Date ()); } This page describes the fields in the event object for different types of triggers.
- When the Apps Script EventUpdated trigger fires indicating a calendar event change, perform an incremental sync for the affected calendar using the stored nextSyncToken .
- 4034124084959907503 Google Calendar events Google Calendar triggers fire when a user's calendar events are updated (created, edited, or deleted).

