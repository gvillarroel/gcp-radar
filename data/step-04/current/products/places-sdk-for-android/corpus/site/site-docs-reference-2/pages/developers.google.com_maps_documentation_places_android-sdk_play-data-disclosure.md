---
title: "Prepare for Google Play's data disclosure requirements \_|\_ Places SDK for\
  \ Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/play-data-disclosure
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/play-data-disclosure
  title: "Prepare for Google Play's data disclosure requirements \_|\_ Places SDK\
    \ for Android \_|\_ Google for Developers"
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
Places SDK for Android
Resources
Send feedback
Prepare for Google Play's data disclosure requirements
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places SDK for Android collects data like device metadata, IP address, and crash metrics to maintain and improve Google services.
Depending on app configuration and usage, the SDK may collect location information, WiFi access points, widget interactions, and request metadata.
The SDK encrypts data in transit using HTTPS and does not share data with third parties except to assist in providing Google services.
Data is not associated with Google Account information and is deleted or anonymized as described in Google's Privacy Policy.
App developers are responsible for disclosing data collection and usage practices in the Google Play Data safety section.
In May 2021, Google Play
announced the new Data safety section ,
which is a developer-provided disclosure for an app's data collection, sharing,
and security practices.
This page can help you complete the requirements for this data disclosure in
regards to your usage of the Places SDK for Android. On this page, you can find
information on how the Places SDK for Android handles end-user data, including any
applicable configurations or invocations you can control as the app
developer.
We aim to be as transparent as possible in supporting you; however, as the
app developer, you are solely responsible for deciding how to respond to Google
Play's Data safety section form regarding your app's end-user data collection,
sharing, and security practices.
How to use the information on this page
This page lists the end-user data collected by only the latest version of
the Places SDK for Android.
To complete your data disclosure, you can use Android's
guide about data types
to help you determine which data type best describes the collected data. In
your data disclosure, make sure to also account for how your specific app
shares and uses the collected data.
Important: To help you ensure that your app's disclosures are
accurate, we recommend the following:
Always use the latest SDK version in your app. This page lists the
data collected by only the latest version of the Places SDK for Android.
Review this page whenever you update your app's SDK versions. Check
that your data disclosures are accurate and up-to-date.
Overview of data encryption, data sharing for Places SDK for Android
Data encryption
For the collected end-user data listed on this page, the Places SDK for Android
encrypts the data in transit using HTTPS.
Data sharing
For the collected end-user data listed on this page, the Places SDK for Android
does not transfer this data to third-parties except to assist us in
providing Google services.
Data deletion
For the collected end-user data listed on this page, the Places SDK for Android
does not associate that data with Google Account information. Data is
deleted or anonymized automatically per our Privacy Policy .
Data collected automatically
Data
By default, the Places SDK for Android...
Request metadata
For example:
Device metadata: OS version, name, model, brand, form factor.
Places SDK for Android build and version information.
Number of results returned.
Collects request metadata to maintain and improve Google services.
Stack traces
Crash metrics
Collects stack traces during crashes within the SDK code and crash
metrics such as abnormal terminations to improve the stability of our SDKs
and improve Google services.
IP address
Collects the IP address to understand SDK usage and improve Google
services.
Google Maps Platform-specific identifier
Generates and collects a Google Maps Platform SDK identifier specific to the app to measure daily active SDK users and improve Google services.
Data collected depending on your usage
Data
Depending on your app's configuration and invocation, the Places SDK for Android...
Country code
lat/lng bounds
Collects country code and/or lat/lng bounds to help provide more
relevant results, if the app sets these options.
lat/lng coordinates
WiFi access points
Collects lat/lng coordinates and nearby WiFi access points to find
nearby places if the app uses features to discover the place at the
device's currently-reported location.
Widget interaction events
Collects interaction data to improve Google services if the app uses
components like the Places Autocomplete widgets.
Request metadata
For example:
Places SDK version and API usage
Input parameters for Places APIs
Number of results returned
Collects request metadata to maintain and improve Google services.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Google Play introduced a Data safety section requiring developers to disclose data practices. The Places SDK for Android encrypts data in transit via HTTPS and does not share it with third parties, except to assist in providing Google services. It automatically collects request metadata, stack traces, crash metrics, and IP addresses. Depending on app usage, it may also collect location, country codes, and widget interaction data. Data is deleted or anonymized following Google's Privacy Policy. Developers are responsible for accurate disclosure and using the latest SDK version.\n"]]
