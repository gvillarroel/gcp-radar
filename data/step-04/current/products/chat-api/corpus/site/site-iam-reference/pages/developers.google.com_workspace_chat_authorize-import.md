---
title: "Authorize Google Chat apps to import data \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/authorize-import
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/authenticate-authorize
source_metadata:
  url: https://developers.google.com/workspace/chat/authorize-import
  title: "Authorize Google Chat apps to import data \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Authorize Google Chat apps to import data
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Chat API allows importing data from other platforms into Google Chat using import mode spaces.
Chat apps require specific authentication and authorization to read and write resources in these spaces, needing domain administrator approval.
Apps can impersonate user accounts or utilize their service account credentials for specific actions within import mode spaces.
Import mode spaces support various resource methods with differing authentication requirements, as detailed in the provided table.
Chat apps can only import content into spaces they create and not into spaces created by other apps.
With the Google Chat API, apps can import data from other messaging platforms into
Google Chat by using import mode spaces. For more information, see
Import message data to Google Chat from another service .
To read and write resources in import mode spaces, you must
authenticate Chat apps with a service account .
Grant the service account the following Chat API authorization scope
by an administrator: https://www.googleapis.com/auth/chat.import .
Only Google Workspace domain administrators can grant this OAuth scope to
service accounts through
domain-wide delegation .
Every domain that a Chat app creates import mode spaces
in must have this OAuth scope. After the service account has been delegated
domain-wide authority for this scope, Chat apps can access import
mode spaces by
impersonating a user account .
In some scenarios, the user account for impersonation might no longer be
available. In these cases, the Chat app can use their
service account credentials as a fallback. For example, if you delete a user
account that was used during message creation, the
Chat app can use their own service account credentials
to create a message containing the same contents. Chat apps can
access import mode spaces as an app using service account credentials with the
following OAuth scope: https://www.googleapis.com/auth/chat.bot .
No other Google Chat API scopes
are required when importing resources into an import mode space.
Chat apps can only import content into the import mode spaces
that they create, and not into the import mode spaces created by other apps.
The following table lists the resource methods that Chat apps can
call in import mode spaces, and what kind of authentication they support:
Resource method
User impersonation supported
Service account credentials supported
spaces.create
Yes
No
spaces.get
No
Yes
spaces.update
Yes
No
spaces.delete
Yes
No
spaces.completeImport
Yes
No
spaces.messages.create
Yes
Yes
spaces.messages.delete
Yes
Yes
spaces.messages.get
No
Yes
spaces.messages.list
Yes
No
spaces.messages.update
Yes
Yes
spaces.messages.reactions.create
Yes
No
spaces.messages.reactions.delete
Yes
No
spaces.members.create
Yes
No
spaces.members.delete
Yes
No
spaces.members.list
Yes
No
media.upload
Yes
No
Related topics
To learn more about authentication and authorization, see
Authenticate and authorize Google Chat apps and API requests .
To learn how to set up a service account to access the Google Chat API,
see
Authenticate as a Google Chat app .
To learn how to start importing resources using import mode spaces, see
Import data to Google Chat .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Apps use the Google Chat API's import mode to bring data from other platforms into Google Chat. This requires authentication with a service account granted the `https://www.googleapis.com/auth/chat.import` scope via domain-wide delegation by a Google Workspace admin. Apps can impersonate user accounts or use service account credentials (`https://www.googleapis.com/auth/chat.bot`). Only specific resource methods are supported in import mode spaces. Import mode is exclusive, meaning apps can only modify spaces they create.\n"]]
