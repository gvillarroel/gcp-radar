---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.601Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Time-driven installable triggers for add-ons"
feature_slug: "time-driven-installable-triggers-for-add-ons"
latest_feature_date: "2014-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/guides/triggers"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "time"
  - "driven"
  - "installable"
  - "triggers"
  - "add"
  - "ons"
  - "sheets"
  - "docs"
---

# Time-driven installable triggers for add-ons

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Google Sheets and Docs add-ons can use time-driven installable triggers.

## Extended Definition

Google Sheets and Docs add-ons can use time-driven installable triggers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to create two time-driven triggers—one that fires every 6 hours, and one that fires every Monday at 9 a.m. (in the time zone that your script is set to). triggers/triggers.gs View on GitHub / Creates two time-driven triggers. @see https://developers.google.com/apps-script/guides/triggers/installable#time-driven triggers / function createTimeDrivenTriggers () { // Trigger every 6 hours.
- Installable triggers, however, offer more flexibility than simple triggers: they can call services that require authorization , they offer several additional types of events including time-driven (clock) triggers, and they can be controlled programmatically.
- Time-driven triggers let scripts execute at a particular time or on a recurring interval, as frequently as every minute or as infrequently as once per month. (An add-on can use a time-driven trigger once per hour at most.) The time might be slightly randomized—for example, if you create a recurring 9 AM trigger, Apps Script chooses a time between 9 AM and 10 AM, then keeps that timing consistent from day to day so that 24 hours elapse before the trigger fires again.
- Event-driven triggers Installable event-driven triggers are conceptually similar to simple triggers like onOpen() , but they can respond to additional events, and they behave differently.

### Simple Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Event Simple triggers Installable triggers Open Sheets Slides Forms Docs function onOpen(e) Sheets Forms Docs Edit Sheets function onEdit(e) Sheets Selection change Sheets function onSelectionChange(e) Install Sheets Slides Forms Docs function onInstall(e) Change Sheets Form submit Sheets Forms Time-driven (clock) Sheets Slides Forms Docs Standalone Get Standalone function doGet(e) Post Standalone function doPost(e) The open event for Google Forms does not occur when a user opens a form to respond, but rather when an editor opens the form to modify it.
- For example, Google Sheets, Slides, Forms, and Docs all support simple open triggers, but only Sheets, Docs and Forms support installable open triggers.
- These restrictions don't apply to doGet(e) or doPost(e) . onOpen(e) The onOpen(e) trigger runs automatically when a user opens a spreadsheet, document, presentation, or form that they have permission to edit. (The trigger does not run when responding to a form, only when opening the form to edit it.) onOpen(e) is most commonly used to add custom menu items to Google Sheets, Slides, Docs, or Forms. triggers/triggers.gs View on GitHub / The event handler triggered when opening the spreadsheet. @param {Event} e The onOpen event. @see https://developers.google.com/apps-script/guides/triggers#onopene / function onOpen ( e ) { // Add a custom menu to the spreadsheet.
- Restrictions Because simple triggers fire automatically, without asking the user for authorization, they are subject to several restrictions: The script must be bound to a Google Sheets, Slides, Docs, or Forms file, or else be an add-on that extends one of those applications.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Time-driven events Time-driven triggers (also called clock triggers) let scripts execute at a particular time or on a recurring interval.
- Time-driven ( installable ) authMode A value from the ScriptApp.AuthMode enum.
- For example, the following sample code shows a simple onEdit(e) trigger for a Google Sheets script that uses the event object to determine which cell was edited. function onEdit ( e ){ // Set a comment on the edited cell to indicate when it was changed . var range = e . range ; range . setNote ( 'Last modified: ' + new Date ()); } This page describes the fields in the event object for different types of triggers.
- 4034124084959907503 values Array with values in the same order as they appear in the spreadsheet. [ '2015/05/04 15:00', 'amin@example.com', 'Bob', '27', 'Bill', '28', 'Susan', '25' ] Google Docs events Triggers allow Docs to respond when a user opens a document.

