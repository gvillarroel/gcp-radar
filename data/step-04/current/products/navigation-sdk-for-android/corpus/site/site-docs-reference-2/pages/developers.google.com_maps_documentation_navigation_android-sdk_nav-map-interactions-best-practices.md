---
title: "Navigation map interaction best practices \_|\_ Navigation SDK for Android\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/nav-map-interactions-best-practices
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/nav-map-interactions-best-practices
  title: "Navigation map interaction best practices \_|\_ Navigation SDK for Android\
    \ \_|\_ Google for Developers"
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
Navigation map interaction best practices
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Prioritize using SupportNavigationFragment over NavigationView for simplified lifecycle management and error reduction.
When using NavigationView directly, ensure strict adherence to the Android lifecycle order when invoking its lifecycle methods to prevent issues like memory leaks and UI errors.
Invoke NavigationView lifecycle events exclusively from either the activity or the fragment to maintain order and avoid duplicate calls.
This page explains best practices for interacting with the Navigation map in
your app.
Use SupportNavigationFragment instead of NavigationView , whenever possible
SupportNavigationFragment is a wrapper for the convenience of handling the
NavigationView lifecycle callbacks, so you don't need to manage these
callbacks themselves. This method is less error-prone and the preferred way to
use Navigation in your app. When using SupportNavigationFragment , be sure not
to invoke NavigationView lifecycle events.
If using NavigationView , use strict ordering when invoking lifecycle methods
NavigationView hosts the Navigation map and closely follows the lifecycle
events as Android activities and fragments, taking specific actions when these
lifecycle events are invoked. NavigationView executes multiple initializations
on NavigationView#onCreate and NavigationView#onStart , and cleanups on
NavigationView#onStop and NavigationView#onDestroy , as well as when other
lifecycle events are processed.
NavigationView lifecycle methods have the same meaning as they do for Android
activities or fragments. For example, onCreate() of NavigationView roughly
translates to and should be invoked by lifecycle callbacks from the Android
activity or fragment. Since the NavigationView lifecycle callbacks are based
on and invoked in the same order as the Android lifecycle callbacks, strong
ordering of these NavigationView methods is required. Otherwise, you may
experience memory
leaks , UI
errors, location not being updated, and other issues.
For more information about the Android activity lifecycle, see the
Activity-lifecycle concepts
section in the Android developer documentation.
The following table shows when other lifecycle methods should be invoked, after
specified lifecycle methods:
Lifecycle method
Invoked where in the activity lifecycle
Invoked after which lifecycle method
onConfigurationChanged()
Invoked when the UI is in the foreground and the configuration changes.
Always after onStart()
onTrimMemory()
Invoked when an activity is in the background.
Always after onPause()
onSaveInstance()
Invoked before an activity is destroyed.
Always after onStop()
Don't call these lifecycle methods multiple times without calling the
corresponding closing method first. In addition, keep in mind that if some of
these Android lifecycle callbacks are managed by the app itself, and the
NavigationView is added to the fragment after creation or start, the app
should call the specific methods themselves in proper order in order to
correctly initialize the Navigation SDK.
For additional guidance on using these methods, see the Navigation SDK demo
app .
If using NavigationView , invoke lifecycle events from the activity or fragment, not both
To keep the strict ordering of the lifecycle methods, invoke these events from
either the activity or fragment lifecycle callbacks, which receive these events
in order. This approach ensures that apps don't need to coordinate between
fragments and activities and cause duplicate calls.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
