---
title: "Work with map style versions \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/versions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/versions
  title: "Work with map style versions \_|\_ Maps SDK for Android \_|\_ Google for\
    \ Developers"
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
Work with map style versions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Cloud-based map styles have version history, allowing you to view, restore, or duplicate previous versions of your custom styles.
Map style versions are categorized as drafts (saved or unsaved) and published versions, impacting their availability in your applications.
You can duplicate a map style version to create a new, independent style based on a previous iteration.
Restoring a map style version reverts the current style to a selected previous version, requiring publishing to make the changes live in your applications.
Style changes, including publishing and restoring versions, may take some time to reflect in your apps and websites.
Select platform:
Android
iOS
JavaScript
Web Service
Note: Version history is only available for map styles created
on August 2, 2022 or later.
When you make and save changes to a map style, those changes become saved
versions that you can view, restore, or duplicate.
To view all versions of a map style, do the following:
Go to
Map Styles , and select a project, if needed.
Select an existing map style.
Select Customize .
Select Version history .
Version history is divided into different types:
As Drafts
Selecting Save creates new dated versions. Saved drafts are not usable
in your apps until they are explicitly published.
Changes you make without saving create an Unsaved changes draft that
are lost if you close your browser window or end your session.
As Published Versions
When you create a new map style, duplicate an existing style, or
import a JSON style, it is published automatically.
Selecting Publish creates new dated versions that are available for
use in your apps. The most recent published version is applied to any apps
with the associated map IDs.
You can view any previous version in Version history .
To reuse a version and make changes to it, you must
either Restore the version, which sets that version to be the current,
active version of the map style, or Duplicate it, which creates a new,
separate map style based on that version.
If you have unsaved changes when you restore any version, those unsaved changes
automatically become a new dated draft version.
Important: When you Publish any map style
associated with one or more map IDs, that style's latest
published changes are visible in all apps using map IDs
associated with that map style. Until your
style changes are complete, Save rather than
Publish your style changes.
Duplicate a map style version
Go to
Map Styles , and select a project, if needed.
Select one of your existing styles, and click Customize .
Select Version history .
Select a style version, and then at the bottom of the Version history
panel, select Duplicate .
The style is duplicated with "Copy of" added to the style name.
The duplicated style is automatically published and you get a link to open
the new style in a new tab.
Note: A duplicated style does not retain the versions of the style it
duplicated.
Restore a map style version
If you want to use a previous version of a map style, you can restore it.
For example, if you created a branded map style to support a special event,
when the event is finished you can restore the standard version of the
map style.
Go to
Map Styles , and select a project, if needed.
Select the style you want, and select Customize .
Select Version history .
Select the version you want to restore, and at the
bottom of the Version history panel, select Restore . The restored
style becomes the most recent draft of the style.
Close the Version history panel, and select Publish .
Note: Style changes can take a few hours to propagate to your apps
websites, and apps can take longer if the devices aren't connected to
the internet. If you're still not seeing your style changes after a
few hours, see My style changes aren't updating .
Note: If the restored version is exactly the same as the published version,
you can't publish the restored version. If you still want to
publish the draft of the restored version, even if it's identical to the
published version, you must modify the style in some way, then select Save
and then Publish .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Map styles have saved versions viewable in **Version history**, accessible via **Map Styles** in the console. Saving creates dated **Drafts**, not usable in apps until published. Publishing creates dated **Published Versions**, immediately available to apps with associated map IDs. You can **Restore** a previous version to make it the current draft or **Duplicate** a version to create a new style. Unsaved changes are saved as a draft when restoring. Duplicated styles don't retain original version history.\n"]]
