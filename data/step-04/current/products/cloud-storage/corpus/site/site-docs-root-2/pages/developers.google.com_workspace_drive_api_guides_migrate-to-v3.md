---
title: "Migrate to Drive API v3 \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/migrate-to-v3
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/migrate-to-v3
  title: "Migrate to Drive API v3 \_|\_ Google Drive \_|\_ Google for Developers"
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
Migrate to Drive API v3
Stay organized with collections
Save and categorize content based on your preferences.
If you are currently using Drive API v2, you can migrate to v3.
You should review the V2 to v3 reference for a complete map of all resource differences between versions.
The {drive_api_short} version is set differently for each language:
For Java, you download the v3 library. See Drive API client library for Java .
For an example, see Java Quickstart .
For JavaScript, you define the version with the Discovery docs URL. For an example,
see Browser Quickstart .
var DISCOVERY_DOCS = [ "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest" ];
For Python, you specify the version when you build the service object. For an example,
see Python Quickstart .
service = build ( 'drive' , 'v3' , credentials = creds )
For Node.js, you define the version when you set the google.drive constructor. For an example,
see Node.js Quickstart .
const drive = google . drive ({ version : 'v3' , auth });
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
