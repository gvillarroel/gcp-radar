---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.658Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "EventAttachmentTrigger"
feature_slug: "eventattachmenttrigger"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/triggers/events"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "eventattachmenttrigger"
  - "fires"
  - "trigger"
  - "event"
  - "when"
  - "that"
  - "adds"
  - "an"
---

# EventAttachmentTrigger

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds an event trigger that fires when users click an add-on attachment provider in the Calendar event attachment menu.

## Extended Definition

Adds an event trigger that fires when users click an add-on attachment provider in the Calendar event attachment menu.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following sample code shows a simple onEdit(e) trigger for a Google Sheets script that uses the event object to determine which cell was edited. function onEdit ( e ){ // Set a comment on the edited cell to indicate when it was changed . var range = e . range ; range . setNote ( 'Last modified: ' + new Date ()); } This page describes the fields in the event object for different types of triggers.
- When the Apps Script EventUpdated trigger fires indicating a calendar event change, perform an incremental sync for the affected calendar using the stored nextSyncToken .
- When a trigger fires, an event object ( e ) containing contextual information is passed to the function as an argument.
- When a trigger fires, Apps Script passes the function an event object as an argument, typically e .

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Time-driven triggers let scripts execute at a particular time or on a recurring interval, as frequently as every minute or as infrequently as once per month. (An add-on can use a time-driven trigger once per hour at most.) The time might be slightly randomized—for example, if you create a recurring 9 AM trigger, Apps Script chooses a time between 9 AM and 10 AM, then keeps that timing consistent from day to day so that 24 hours elapse before the trigger fires again.
- The following example shows how to create two time-driven triggers—one that fires every 6 hours, and one that fires every Monday at 9 a.m. (in the time zone that your script is set to). triggers/triggers.gs View on GitHub / Creates two time-driven triggers. @see https://developers.google.com/apps-script/guides/triggers/installable#time-driven triggers / function createTimeDrivenTriggers () { // Trigger every 6 hours.
- Installable triggers, however, offer more flexibility than simple triggers: they can call services that require authorization , they offer several additional types of events including time-driven (clock) triggers, and they can be controlled programmatically.
- There are several installable triggers for Google Workspace applications: An installable open trigger runs when a user opens a spreadsheet, document, or form that they have permission to edit.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- You can also set an event trigger that fires when the user clicks on the add-on attachment provider in the Calendar dropdown menu.
- By default, setting an empty or invalid date will not trigger a value-changed event, but you can call the method setFireEventsForInvalid() to override that behavior.
- Change When an add-on is installed from the store, the onInstall() simple trigger is now passed an event parameter , e , which includes an authMode property.
- The user interface for time-based triggers has been updated to make it more clear that the events are triggered between N and N+1 hours.

