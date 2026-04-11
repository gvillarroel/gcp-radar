---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.761Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Sheets and Docs add-on time-driven installable triggers"
feature_slug: "sheets-and-docs-add-on-time-driven-installable-triggers"
latest_feature_date: "2014-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "installable"
  - "driven"
  - "time"
  - "docs"
  - "sheets"
  - "add"
  - "and"
  - "on"
---

# Sheets and Docs add-on time-driven installable triggers

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Add-ons for Google Sheets and Google Docs gained support for time-driven installable (clock) triggers.

## Extended Definition

Add-ons for Google Sheets and Google Docs gained support for time-driven installable (clock) triggers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Installable triggers, however, offer more flexibility than simple triggers: they can call services that require authorization , they offer several additional types of events including time-driven (clock) triggers, and they can be controlled programmatically.
- Time-driven triggers let scripts execute at a particular time or on a recurring interval, as frequently as every minute or as infrequently as once per month. (An add-on can use a time-driven trigger once per hour at most.) The time might be slightly randomized—for example, if you create a recurring 9 AM trigger, Apps Script chooses a time between 9 AM and 10 AM, then keeps that timing consistent from day to day so that 24 hours elapse before the trigger fires again.
- The following example shows how to create two time-driven triggers—one that fires every 6 hours, and one that fires every Monday at 9 a.m. (in the time zone that your script is set to). triggers/triggers.gs View on GitHub / Creates two time-driven triggers. @see https://developers.google.com/apps-script/guides/triggers/installable#time-driven triggers / function createTimeDrivenTriggers () { // Trigger every 6 hours.
- Event-driven triggers Installable event-driven triggers are conceptually similar to simple triggers like onOpen() , but they can respond to additional events, and they behave differently.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Here's a custom function, named DOUBLE , which multiplies an input value by 2: / Multiplies an input value by 2. @param {number} input The number to double. @return The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } If you don't know how to write JavaScript and don't have time to learn, check the Google Workspace add-on store to see whether someone else has already built the custom function you need.
- However, when they make a copy, they become the owner of the copy and can see the script.) Publish the script as a Sheets Editor add-on .
- These are the most common areas of confusion: Times and dates in Sheets become Date objects in Apps Script.
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Add-ons for Google Sheets and Docs can now use most installable triggers , although they still cannot use time-driven triggers (sometimes called clock triggers).
- October 14, 2014 Feature Add-ons for Google Sheets and Docs can now use time-driven installable triggers .
- Like the installable open triggers for Sheets and Forms, this trigger is similar to the simple onOpen() trigger, but allows the triggered function to call services that require authorization, if the user has authorized the script ahead of time.
- This lets an admin of a Google Apps domain install and authorize a Docs, Sheets, or Forms add-on for all users in the domain if the add-on is published to the Google Apps Marketplace .

