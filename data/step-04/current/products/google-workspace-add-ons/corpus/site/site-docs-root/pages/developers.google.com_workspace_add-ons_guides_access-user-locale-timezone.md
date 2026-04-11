---
title: "Get user locale and timezone \_|\_ Google Workspace add-ons \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/add-ons/guides/access-user-locale-timezone
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/overview
source_metadata:
  url: https://developers.google.com/workspace/add-ons/guides/access-user-locale-timezone
  title: "Get user locale and timezone \_|\_ Google Workspace add-ons \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Send feedback
Get user locale and timezone
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace add-ons can be configured to access and utilize a user's locale and timezone for customization.
Add-on developers must set addOns.common.useLocaleFromApp to true and include the https://www.googleapis.com/auth/script.locale scope in the manifest file for locale and timezone access.
Event objects provide the user's locale and timezone information through fields like userLocale , timeZone.offset , and timeZone.id , which add-ons can utilize in their functions.
After adding the necessary scope, users need to re-authorize the add-on for the changes to take effect.
Add-ons should only request necessary scopes and consider removing unused ones, especially those previously used for locale and timezone access through other APIs or services.
Google Workspace add-ons can access the locale and timezone of its user and use
that information to customize its interface and behavior. Configure
your add-on's
manifest
to permit your add-on to access this information.
Configure the add-on manifest
Configure your add-on to access user locale and
timezone information with the following steps:
In your add-on's manifest
file, set the
addOns.common.useLocaleFromApp
field to true .
If it isn't present already, add the following explicit scope in the
manifest's oauthScopes
list:
https://www.googleapis.com/auth/script.locale
If you added a scope to the add-on's oauthScope list,
users must re-authorize the
add-on
the next time it is opened.
Note: If your add-on previously used the
Calendar API , the
Apps Script Calendar service ,
or another service to access the user's locale and timezone, consider whether
that service is still needed by your add-on. If not,
remove any scopes that service requires from your manifest. Always limit your
scope list to only those services that your add-on
needs.
Get locale and timezone information
Event objects
carry user locale information when properly configured. The following fields
appear in the commonEventObject
substructure of the event object:
commonEventObject.userLocale —The user's language and country/region
identifier. For example, en-US .
commonEventObject.timeZone.offset —The user's timezone offset, in
milliseconds, from Coordinated Universal Time (UTC).
commonEventObject.timeZone.id —The user's timezone identifier.
For example, America/New_York .
commonEventObject.timeZone —The user's timezone ID and offset.
See Event objects
for more details.
Event objects are passed to
action callback functions
as the user interacts with your add-on, and to homepage
and contextual trigger functions. Each callback or trigger function can read the
locale and timezone information from the event object and use it as necessary.
For example, a callback function that is
navigating to a new card
could refer to the locale string when deciding what text to add to the card.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Google Workspace add-ons can access user locale and timezone by configuring the add-on manifest. Set `addOns.common.useLocaleFromApp` to `true` and add `https://www.googleapis.com/auth/script.locale` to `oauthScopes`. This requires users to re-authorize the add-on. Event objects contain `userLocale`, `timeZone.offset`, and `timeZone.id`. Callback functions and trigger functions read this information from the event object to customize the add-on's interface and behavior, such as text on cards.\n"]]
