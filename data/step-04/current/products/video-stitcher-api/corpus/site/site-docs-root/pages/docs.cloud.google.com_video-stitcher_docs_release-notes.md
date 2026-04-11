---
title: "Video Stitcher API release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/release-notes
  title: "Video Stitcher API release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To enable the Video Stitcher API for your project, please reach out to your Account Representative or contact Sales to learn more.
Home
Documentation
AI and ML
Video Stitcher API
Resources
Send feedback
Video Stitcher API release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to the Video Stitcher API. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 22, 2024
Change
VOD configs are now used to create VOD sessions . When you create a VOD session, specify a VOD config in the vodConfig field to use the config's sourceUri and adTagUri fields.
March 28, 2024
Change
Added a new tokenConfig field to the Media CDN key. Set this field to sign the URL using the Media CDN token.
June 27, 2023
Change
The Video Stitcher API now requires that a live stream source manifest references at least one valid segment file. The manifest is specified in the live config's sourceUri field.
April 26, 2023
Announcement
Google Ad Manager integration for live and VOD workflows is now generally available (GA). To enable this integration in your project, please reach out to your Account Representative or contact Sales to learn more.
Breaking
Live configs are now used to create live sessions .
March 21, 2023
Breaking
Slates and CDN keys are now created using long-running operations .
February 14, 2023
Feature
Video Stitcher API can now insert ads served by Google Ad Manager (GAM) into live streams and VOD assets .
September 30, 2022
Feature
The Video Stitcher API now supports CDN keys created for Media CDN . See Create and manage CDN keys for more information.
June 15, 2022
Announcement
The Video Stitcher API is generally available (GA).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
