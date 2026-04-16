---
title: "Extend Google Slides \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/slides
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/apps-script/guides/libraries
source_metadata:
  url: https://developers.google.com/apps-script/guides/slides
  title: "Extend Google Slides \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Extend Google Slides
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Apps Script allows you to programmatically create and modify Google Slides presentations using the Slides service.
You can customize Google Slides by adding custom menus, dialog boxes, and sidebars with Apps Script.
Apps Script lets you integrate Slides with other Google services like Calendar, Drive, and Gmail.
You can publish your Apps Script projects as add-ons for Google Slides to share them with others.
Google Apps Script lets you programmatically create and modify
Slides presentations using the
Slides service .
Use Apps Script to add custom menus ,
dialogs, and sidebars to Slides.
You can also integrate Slides with other
Google services like Google Calendar,
Google Drive, and Gmail.
The Slides service
is the recommended way of working with Slides in
Apps Script. Also enable the Slides advanced
service if you need to invoke the
Google Slides API directly.
Get started
Apps Script includes a
built-in service
that lets you programmatically create, read, and edit Slides.
Apps Script can interact with Slides in two ways:
Any script can create a new presentation or access an existing presentation
if the user has the appropriate access permissions for that presentation.
A script can be bound to a presentation, which
provides the script more direct access to the Slides user
interface for that script. To create a bound script, select Extensions
> Apps Script
from within Slides.
Custom menus and user interfaces
Customize Slides by adding custom menus, dialog boxes, and
sidebars. To learn the basics of creating menus, see the
guide to menus . To learn about customizing the
content of a dialog, see the
guide to HTML service .
If you're planning to publish your custom interface as part of an
Google Workspace add-on , follow the
style guide for
consistency with the style and layout of the Slides editor.
Google Workspace add-ons for Slides
Google Workspace add-ons are
specially packaged Apps Script
projects that run inside Slides and can be installed
from the Google Slides add-ons store. If you've
developed a script for Slides and want to share it with the
world, Apps Script lets you
publish
your script as an
add-on so other users can install it from the
add-on store.
See the
sample translate add-on
or
sample progress bar add-on
for examples of Slides add-ons.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
