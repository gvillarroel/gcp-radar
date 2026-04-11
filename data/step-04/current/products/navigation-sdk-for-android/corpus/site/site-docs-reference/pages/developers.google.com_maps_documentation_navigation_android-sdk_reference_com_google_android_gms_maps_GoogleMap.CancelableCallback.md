---
title: "GoogleMap.CancelableCallback \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.CancelableCallback
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.CancelableCallback
  title: "GoogleMap.CancelableCallback \_|\_ Navigation SDK for Android \_|\_ Google\
    \ for Developers"
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
Reference
Send feedback
GoogleMap.CancelableCallback
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
GoogleMap.CancelableCallback is an interface used for receiving updates on the status of a task.
It provides two methods: onCancel() called when a task is canceled and onFinish() called when a task is successfully completed.
public static interface
GoogleMap.CancelableCallback
A callback interface for reporting when a task is complete or canceled.
Public Method Summary
abstract
void
onCancel ()
Invoked when a task is canceled.
abstract
void
onFinish ()
Invoked when a task is complete.
Public Methods
public
abstract
void
onCancel
()
Invoked when a task is canceled.
public
abstract
void
onFinish
()
Invoked when a task is complete.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
