---
title: "Lifecycle of a presentation update \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/slides/lifecycle
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/apps-script/guides/libraries
source_metadata:
  url: https://developers.google.com/apps-script/guides/slides/lifecycle
  title: "Lifecycle of a presentation update \_|\_ Apps Script \_|\_ Google for Developers"
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
Lifecycle of a presentation update
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Presentation object in Slides Service has three main phases: opening, editing, and saving.
Presentations can be opened using methods like openById() , getActivePresentation() , or created using create() .
Changes made to an open presentation are reflected during script execution but not to collaborators until saved.
Changes to a presentation are saved automatically when the script finishes or manually by calling saveAndClose() .
There are three main phases in the lifecycle of a
Presentation object: open,
edit, and save.
Open a presentation
When using the Slides Service, the first step is to load a
presentation. Methods
like SlidesApp.openById()
and
SlidesApp.getActivePresentation()
load an existing Slides presentation, while
SlidesApp.create()
creates a new presentation. These methods return a
Presentation object that
represents the loaded presentation.
Once a presentation is open, it does not receive any further updates from
collaborators. Presentations are usually opened at their latest saved version
in Google Drive. However, if a script is container-bound to a
presentation,
that presentation is loaded at the same version as the accompanying
Slides editor.
Modify a presentation
After a presentation is open, a script can read and modify it. Any changes that
the script makes to the presentation are reflected in subsequent reads and
modifications for the duration of the script execution.
Save changes
After making changes to a presentation, the changes are saved all at once
when the script execution completes, or when
Presentation.saveAndClose()
is called. After changes are saved, they propagate asynchronously to the
user's editor, as if the changes were made by a collaborator.
After a presentation is closed using Presentation.saveAndClose() , it can be
reopened for editing using one of the presentation loading methods.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
