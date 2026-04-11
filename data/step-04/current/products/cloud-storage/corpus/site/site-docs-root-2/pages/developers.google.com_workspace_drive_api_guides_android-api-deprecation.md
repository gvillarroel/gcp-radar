---
title: "Migrate from the Google Drive Android API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/android-api-deprecation
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/android-api-deprecation
  title: "Migrate from the Google Drive Android API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Guides
Send feedback
Migrate from the Google Drive Android API
Stay organized with collections
Save and categorize content based on your preferences.
The Drive Android API is deprecated as of December 6, 2018 and will be fully
turned down on February 1, 2023 .
Timeline
Date
Drive Android API status
December 6, 2018
Deprecation is publicly announced . Existing clients will be able to
access the API normally, but should immediately commence with migration
efforts. New clients must not use the API.
October 21, 2019
The Drive Android API is removed from the Google Play Services SDK
distribution. Apps will be unable to build until removing the Drive Android
API dependency, but existing builds will be unaffected. The Drive Android
API public documentation will no longer be available.
March 3, 2022
The Drive Android API is deprecated and all API calls are non-operational. Clients must migrate by this date.
February 1, 2023
The Drive Android API will be fully turned down and all connection attempts will be unsuccessful.
Use the Drive REST API
The Drive REST API offers the same functionality as the Drive Android API,
including ways to:
Share and collaborate as you expect from Drive. You can
manage permissions or prompt the Share dialog
to users as needed. The REST API also allows for commenting on files,
allowing your app to interact with the conversation around a file.
Search for files using files.list ,
based on traditional indexing or
your own customized, indexable text .
Detect changes to files through the
Changes collection and to any shared with
the user through shared drives .
Export and convert Google Docs so that your app can easily
open a user’s document .
To ease client migration efforts, a
sample app is provided which
demonstrates each of the proposed replacements above. It also shows how to
create, modify, and query for a user's Drive files using the REST API. If you
have any issues, check out the
google-drive-api
tag on StackOverflow.
Migration
Since the Drive Android API is deprecated, and all API calls are
non-operational, make sure your app is no longer calling the API. To do this,
remove the code that initializes the API: addApi(Drive.API) .
If you don't migrate from the Drive Android API, and your app attempts to call
the API, the following error message is returned:
com.google.android.gms.common.api.ApiException: 17: API: Drive.API is not
available on this device. Connection failed with:
ConnectionResult{statusCode=API_UNAVAILABLE, resolution=null, message=null}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
