---
title: "Restrictions \_|\_ Google Workspace add-ons \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/guides/editor-restrictions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/overview
source_metadata:
  url: https://developers.google.com/workspace/add-ons/guides/editor-restrictions
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
Google Workspace add-ons enhance existing features but cannot modify or restrict core functionalities or the sharing model.
Add-ons cannot directly charge users for installation or contain ads, though external payment integrations are permitted.
While add-ons can respond to specific triggers, they generally cannot detect user actions outside the add-on's scope.
Editor add-ons are limited to desktop environments and utilize HTML/CSS for UI design instead of the Card service.
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
Editor add-ons
The following restrictions only apply to Editor add-ons. Don't do the following:
Define UIs with the Card service
Editor add-ons can currently only define a UI using HTML and CSS, not the
Card service .
Use Editor add-ons on mobile
Editor add-ons are only available on desktop clients, not the mobile apps
for the editors.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Add-ons must not alter existing Google Workspace features or sharing models. They cannot charge users for installation or display ads. Add-ons have limited ability to detect user actions outside of the add-on, except for specific triggers, although content changes can be polled with a delay. Editor add-ons are restricted to HTML/CSS UIs (no Card service) and are only available on desktop, not mobile apps.\n"]]
