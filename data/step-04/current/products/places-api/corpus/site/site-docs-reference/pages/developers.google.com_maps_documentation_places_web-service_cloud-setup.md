---
title: "Set up the Places API (New) \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/cloud-setup
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/cloud-setup
  title: "Set up the Places API (New) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Guides
Send feedback
Set up the Places API (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Maps Platform products require API keys for authentication and billing purposes, linking your project and billing account to the API.
Before using the Places API, ensure you have a project with a billing account and the Places API enabled.
You can create and restrict API keys through the Google Cloud Console or the Cloud SDK.
Google strongly recommends restricting your API keys to enhance security by limiting usage to only necessary APIs for your application.
Include your API key with every Places API request, ensuring it is URL encoded and the request is made over HTTPS.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
This document describes the steps needed to start using the Places API (New).
checklist
1. Account and billing
Ensure that you meet the prerequisites.
settings
2. Enable the API
Enable the API in your Google Cloud project.
verified_user
3. Make your first request
Configure an API key or OAuth to make an authenticated API request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["API keys are required to authenticate Google Maps Platform requests. To create one, navigate to the Google Maps Platform Credentials page, click \"Create credentials,\" then \"API key,\" and close the dialog. To restrict an API key for security, go to the same Credentials page, select the key, set \"Application restrictions\" to IP addresses, specify allowed IP addresses, then set \"API restrictions,\" to the specific API, save your changes. Every Places API request needs the key in the request.\n"]]
