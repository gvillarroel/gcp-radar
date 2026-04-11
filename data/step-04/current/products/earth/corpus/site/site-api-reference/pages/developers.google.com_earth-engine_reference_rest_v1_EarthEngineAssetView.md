---
title: "EarthEngineAssetView \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/EarthEngineAssetView
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/EarthEngineAssetView
  title: "EarthEngineAssetView \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
EarthEngineAssetView
Stay organized with collections
Save and categorize content based on your preferences.
A resource view for EarthEngineAsset .
The view determines the maximum page size for API operations, with generally higher limits for more restrictive views: - 10000 for BASIC - 1000 otherwise
Enums
EARTH_ENGINE_ASSET_VIEW_UNSPECIFIED
Not specified, equivalent to FULL .
FULL
All fields are set in each EarthEngineAsset returned in the response. The default value.
BASIC
Only the fields type , name , and id are set in each EarthEngineAsset returned in the response.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-06-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-05 UTC."],[],["The `EarthEngineAsset` resource view has two main types: `FULL` and `BASIC`. `FULL` displays all fields, while `BASIC` shows only `type`, `name`, and `id`. The default view is `FULL`. The maximum page size for API operations varies by view, with `BASIC` allowing up to 10,000 items per page and other views limited to 1,000. An unspecified view defaults to `FULL`.\n"]]
