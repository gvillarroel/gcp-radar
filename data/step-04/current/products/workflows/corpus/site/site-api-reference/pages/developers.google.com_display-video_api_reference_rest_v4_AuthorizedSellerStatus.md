---
title: "AuthorizedSellerStatus \_|\_ DV360 API \_|\_ Google for Developers"
url: https://developers.google.com/display-video/api/reference/rest/v4/AuthorizedSellerStatus
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/display-video/api/reference/rest
source_metadata:
  url: https://developers.google.com/display-video/api/reference/rest/v4/AuthorizedSellerStatus
  title: "AuthorizedSellerStatus \_|\_ DV360 API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Display & Video 360 API and Structured Data Files Discord channel in the Google Advertising and Measurement Community server.
Home
Products
DV360 API
Display & Video 360 API
Reference
Send feedback
AuthorizedSellerStatus
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
You can target authorized sellers based on their relationship with the inventory they monetize.
The default setting when authorized seller status isn't specified is "Authorized Direct Sellers".
Options include targeting only direct sellers, or a broader group including publishers without ads.txt files.
Possible authorized seller status targeting options.
If an enum value is not set, "Authorized Direct Sellers"
Enums
AUTHORIZED_SELLER_STATUS_UNSPECIFIED
Default value when authorized seller status is not specified in this version.
This enum is a placeholder for the default value, or "Authorized Direct Sellers and Resellers" in the UI.
AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY
Only authorized sellers that directly own the inventory being monetized, as indicated by a DIRECT declaration in the ads.txt file.
This value is equivalent to "Authorized Direct Sellers" in the UI.
AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS
All authorized sellers, including publishers that have not posted an ads.txt file. Display & Video 360 automatically disallows unauthorized sellers.
This value is equivalent to "Authorized and Non-Participating Publishers" in the UI.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-27 UTC."],[],[]]
