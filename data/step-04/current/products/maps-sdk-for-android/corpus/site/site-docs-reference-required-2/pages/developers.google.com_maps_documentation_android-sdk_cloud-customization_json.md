---
title: "Use JSON with cloud-based maps styling \_|\_ Maps SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/json
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/config
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/json
  title: "Use JSON with cloud-based maps styling \_|\_ Maps SDK for Android \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Maps SDK for Android
Guides
Send feedback
Use JSON with cloud-based maps styling
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Web Service
Experimental: Features marked with the science science icon are experimental .
This document explains how to use JSON to create, edit, and export map styles.
For information on what you can style using JSON, see the
JSON reference for cloud-based maps styling .
Import a JSON map style
To create a map style using JSON, perform the following steps:
In the Google Cloud console,
go to
Map styles , and select a project, if needed.
In Map styles , click Create style .
In the dialog, select the JSON tab.
There are two ways to import your JSON style:
Paste your valid JSON styling code into the field, or
science Click Upload JSON File and choose a local JSON file to use. The JSON styling code appears in the field.
Note: When importing legacy JSON, a warning appears and the style is converted
to the latest JSON format. The conversion is approximate but sets you up for a
richer and more customizable experience. To only use legacy JSON, see
Use embedded JSON style declarations .
Check whether your JSON has errors.
If your JSON has errors, the warning "Your JSON contains N errors" appears and you can expand the warning to learn more.
If your JSON is valid, the map preview shows your custom style and the blue Customize button is available.
Click Customize to create a new map style.
In your new map style, select map features and review or change their style
as needed. Map features with custom styles have a solid blue dot next to
them.
Note: Not all styles appear at all zoom levels.
Click Save .
In the Save and publish map style box, enter a name for your style and
optionally a description, and click Save .
The style is automatically published, and you see your new style's
main page.
To add your map style to a map ID, see
Associate your style to a map ID .
Edit a map style with JSON
Experimental: This feature is experimental.
You can edit map styles using the JSON tab in the style editor.
To edit a map style using JSON, see the following steps:
In the Google Cloud console,
go to
Map styles , and select a project, if needed.
In Map styles , select an existing style from the style list.
In the style's main page, select Customize .
Select the JSON tab to open the JSON style editor.
Make your changes in the editor. You can also upload a JSON file.
Click Commit to update the style panel and preview map.
Note: When you change a map feature in the style panel, it updates the JSON code automatically.
Once you're done with all of your changes, click Save . If you're
creating a new style, the changes go live automatically. If you're making
changes to an existing style, the changes save as a draft and you must click
Publish to have your changes go live for any map IDs using that map
style.
Export a map style as JSON
Experimental: This feature is experimental.
To export a map style as a JSON file, see the following steps:
In the Google Cloud console,
go to
Map styles , and select a project, if needed.
In Map styles , select an existing style from the style list.
In the style's main page, select Customize .
Select the JSON tab to open the JSON style editor.
Select Export .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
