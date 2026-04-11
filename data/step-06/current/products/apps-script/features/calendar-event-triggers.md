---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.700Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Calendar event triggers"
feature_slug: "calendar-event-triggers"
latest_feature_date: "2018-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/events"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
keywords:
  - "detect"
  - "introduced"
  - "triggers"
  - "calendar"
  - "scripts"
  - "event"
  - "so"
  - "can"
---

# Calendar event triggers

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Introduced Calendar event triggers so scripts can detect recently changed events through regular synchronization with the Calendar advanced service.

## Extended Definition

Introduced Calendar event triggers so scripts can detect recently changed events through regular synchronization with the Calendar advanced service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- You can use these triggers in conjunction with the Calendar advanced service to discover recently changed calendar events via regular sync operations.
- July 17, 2014 Feature Added the value ON CHANGE to the ScriptApp.EventType enum so that Google Sheets change events can be detected correctly.
- You can also set an event trigger that fires when the user clicks on the add-on attachment provider in the Calendar dropdown menu.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Time-driven events Time-driven triggers (also called clock triggers) let scripts execute at a particular time or on a recurring interval.
- Presentation user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Google Forms events The Forms-specific triggers let scripts respond when a user edits a form or submits a response.
- 4034124084959907503 Google Calendar events Google Calendar triggers fire when a user's calendar events are updated (created, edited, or deleted).
- Page Summary outlined flag Apps Script can run a function automatically using simple or installable triggers when a specific event occurs.

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Time-driven triggers let scripts execute at a particular time or on a recurring interval, as frequently as every minute or as infrequently as once per month. (An add-on can use a time-driven trigger once per hour at most.) The time might be slightly randomized—for example, if you create a recurring 9 AM trigger, Apps Script chooses a time between 9 AM and 10 AM, then keeps that timing consistent from day to day so that 24 hours elapse before the trigger fires again.
- Installable triggers, however, offer more flexibility than simple triggers: they can call services that require authorization , they offer several additional types of events including time-driven (clock) triggers, and they can be controlled programmatically.
- Event-driven triggers Installable event-driven triggers are conceptually similar to simple triggers like onOpen() , but they can respond to additional events, and they behave differently.
- Event-driven triggers respond to various events in Google Workspace applications, such as opening, editing, or submitting forms, and can call services requiring authorization.

