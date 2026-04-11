---
title: "Centrally manage saved translations \_|\_ Translation Hub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/admin-translation-memory-manage
  title: "Centrally manage saved translations \_|\_ Translation Hub \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Translation Hub
Guides
Send feedback
Centrally manage saved translations
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
By default, when you assign a translation memory to a portal, the translation
memory is set as read-write. Changes during a post edit can overwrite saved
translations. However, in cases where you want to ensure that only vetted
changes are made to the translation memory, you can set it to read only.
That way, Translation Hub doesn't captured any changes during
post-editing.
You might, for example, set a translation memory to read only for most portals
so that users can apply the translation memory and freely make post edits
without modifying the translation memory.
Set translation memory to read only
The read-write configuration for translation memories is set per portal.
In the Translation Hub section of the Google Cloud console, go to the
Portals page.
Go to the Portals page
Select the portal that contains the translation memory that you want to set
as read only.
In the Translation memories section, find the translation memory to set
as read only and then select more_vert
More > Set as read-only .
In the Translation memories table, the Access type for the
translation memory changes to Read-only .
Maintenance of read-only translation memories
As your content evolves, you might want to regularly update your read-only
translation memories. To do that, you can create a dedicated portal for vetted
post editors. For that portal, set the translation memories as read-write and
let the post editors request translations that use those translation memories.
When the post editors self-edit the results, Translation Hub captures new
or modified translations.
Additional resources
For more information about adding a translation memory to a portal, see Add
translation memory to portal .
To automatically set a translation memory for machine translations, see Set a
default translation memory .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
