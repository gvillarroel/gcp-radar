---
title: "Restrictions \_|\_ Google Workspace add-ons \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/guides/workspace-restrictions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/overview
source_metadata:
  url: https://developers.google.com/workspace/add-ons/guides/workspace-restrictions
  title: "Restrictions \_|\_ Google Workspace add-ons \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Send feedback
Restrictions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace add-ons enhance, but do not fundamentally change, existing Google Workspace features.
Add-ons cannot directly charge users for installation or include ads but can integrate with external billing systems.
Add-on functionality is limited in terms of event detection and contextual triggering within certain Google Workspace apps.
Google Workspace add-ons use a card-based interface system, rather than traditional HTML, CSS, or client-side scripting.
While add-ons are largely desktop-focused, some contextual triggering is supported within the Gmail mobile app.
There are a few restrictions on what add-ons can do. Improve your users'
overall experience by avoiding these pitfalls.
General restrictions
The following restrictions apply to all add-ons. Don't do the following:
Change features in Google Workspace
The add-ons framework is designed to enhance
Google Workspace applications—not to
add limits. Consequently, you can't alter existing features or lock down the
Google Workspace document sharing model.
Charge users to install
We don't provide a way to charge users for installing add-ons, and add-ons
can't include ads . However, you can roll your own payment
system or call into an existing billing database. Your add-on can connect to
non-Google services that bill users.
Detect many events
Except for certain triggers , add-ons can't
tell what a user does outside the add-on itself. For example, you can't detect
when the user clicks on the host application toolbar. It is possible to poll for
changes in a file's contents from a sidebar's client-side code, although
you'll always have a slight delay.
Google Workspace add-ons
The following restrictions only apply to
Google Workspace add-ons and the use of the
Card service . Don't do the following:
Extend all Google Workspace apps
Google Workspace add-ons can only extend Gmail,
Calendar, Drive, Meet, Docs, Sheets, and Slides. Eventually Google Workspace add-ons will be able to extend other Google Workspace
applications.
Document context in editors
Google Workspace add-ons don't yet support the use of
document context in editors. That is, you can't use methods such as
SpreadsheetApp.getActiveSpreadsheet()
to acquire the current document.
Use HTML/CSS or client-side scripting
Google Workspace add-ons must use card-based
interfaces. The HTML/CSS interfaces supported by Editor add-ons can't be used.
Google Workspace add-ons use a
widget-based approach to building user
interfaces. This lets the add-on work well on desktop and mobile platforms
without requiring you to build an interface for each.
Full mobile support
For the time being, Google Workspace add-ons function
on desktop web clients. Contextual triggering (that is, Gmail message reading)
is also supported from within the Gmail mobile app. Non-contextual homepages
are not yet available from the Gmail, Calendar, or Drive mobile apps.
Google Workspace add-ons are not
available from mobile web browsers.
Use Apps Script triggers
You can't create or use Apps Script
simple triggers in a
Google Workspace add-on.
Use SVG Images
You can't currently use SVG images with
Card service cards and widgets.
Have more than 100 widgets
For performance reasons, you can't add more than 100 widgets or 100 card
sections to a card.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Add-ons are restricted from altering Google Workspace features, charging users for installation, or detecting user actions outside the add-on. Google Workspace add-ons are limited to Gmail, Calendar, Drive, Meet, Docs, Sheets, and Slides, and must use card-based interfaces, not HTML/CSS. They cannot access document context in editors or utilize Apps Script triggers. Additionally, SVG images and exceeding 100 widgets per card are prohibited. Full mobile support is also unavailable, and only desktop web clients are supported.\n"]]
