---
title: "Prepare for Google Play's data disclosure requirements \_|\_ Navigation SDK\
  \ for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/play-data-disclosure
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/play-data-disclosure
  title: "Prepare for Google Play's data disclosure requirements \_|\_ Navigation\
    \ SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Navigation SDK for Android
Resources
Send feedback
Prepare for Google Play's data disclosure requirements
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK for Android automatically collects data like device metadata, crash metrics, IP address, location, and navigation interactions to improve Google services and features.
As the app developer, you are responsible for disclosing this data collection in your app's Data safety section on Google Play.
This page details the data collected by the latest Navigation SDK version; you should review it with each SDK update to ensure accurate disclosures.
The collected data helps improve features like turn-by-turn navigation, live traffic, and overall SDK stability.
You can use Android's data type guide to categorize the collected data for your disclosure and consider how your app uses and shares it.
In May 2021, Google Play
announced the new Data safety section ,
which is a developer-provided disclosure for an app's data collection, sharing,
and security practices.
This page can help you complete the requirements for this data disclosure in
regards to your usage of the Navigation SDK for Android. On this page, you can find
information on how the Navigation SDK for Android handles end-user data, including any
applicable configurations or invocations you can control as the app
developer.
We aim to be as transparent as possible in supporting you; however, as the
app developer, you are solely responsible for deciding how to respond to Google
Play's Data safety section form regarding your app's end-user data collection,
sharing, and security practices.
How to use the information on this page
This page lists the end-user data collected by only the latest version of
the Navigation SDK for Android.
To complete your data disclosure, you can use Android's
guide about data types
to help you determine which data type best describes the collected data. In
your data disclosure, make sure to also account for how your specific app
shares and uses the collected data.
Important: To help you ensure that your app's disclosures are
accurate, we recommend the following:
Always use the latest SDK version in your app. This page lists the
data collected by only the latest version of the Navigation SDK for Android.
Review this page whenever you update your app's SDK versions. Check
that your data disclosures are accurate and up-to-date.
Data collected automatically
Data
By default, the Navigation SDK for Android...
Request metadata
For example:
Device metadata: OS version, name, model, brand, form factor.
Navigation SDK for Android build and version information.
Internal Usage Attribution Identifier
Collects request metadata to maintain and improve Google services.
The Internal Usage Attribution identifier helps Google understand which libraries and samples
are helpful to developers, such as usage of a UI framework support library. This is not used
to identify the user or for advertising attribution.
Stack traces
Crash metrics
Collects stack traces during crashes within the SDK code and crash
metrics such as abnormal terminations to improve the stability of our SDKs
and improve Google services.
IP address
Collects IP addresses to understand SDK usage and improve Google
services.
lat/lng coordinates
Collects lat/lng coordinates to provide features like turn-by-turn
navigation and live traffic conditions and to improve Google services.
Navigation interaction events
Collects interaction data such as the following, to improve Google
services:
Panning and zooming the map when the Map Camera APIs
are used.
Previewing navigation turns.
Views on certain navigation UI elements.
Navigation SDK identifier
Collects a securely generated identifier that resets on a regular basis
in order to understand Navigation SDK usage and improve Google services.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
