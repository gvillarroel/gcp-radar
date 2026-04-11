---
title: "Changelog \_|\_ Integrate and share \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/integrate/api/changelog
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/integrate/api
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/api/changelog
  title: "Changelog \_|\_ Integrate and share \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Integrate
Reference
Changelog
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Looker Studio API was launched in developer preview on May 11, 2020, and became generally available on August 17, 2020.
Documentation updates address various issues like incorrect request methods, missing details for specific roles, and erroneous JSON keys for asset identification in permission endpoints.
The documentation now includes JSON examples for permission-related endpoints and clarifies the usage of assetId versus name for assets.
Redundant query parameters have been removed for improved API usability and accuracy.
2022-04-04
Documentation fixes and improvements:
permissions:addMembers requires a POST request, not PATCH .
Added details about the LINK_VIEWER and LINK_EDITOR Role .
Removed role query parameter from search since it does not affect
behavior.
Added JSON examples for permissions:addMembers , permissions:patch ,
permissions:revokeAllPermissions , and permissions type .
2020-10-29
Updated reference docs that erroneously used assetId instead of name as the
JSON key for assets for the permissions:addMembers , permissions:patch , and
permissions:revokeAllPermissions endpoints.
2020-08-17
General availability launch for the [Looker Studio API].
2020-05-11
Developer preview launch for the [Looker Studio API].
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
