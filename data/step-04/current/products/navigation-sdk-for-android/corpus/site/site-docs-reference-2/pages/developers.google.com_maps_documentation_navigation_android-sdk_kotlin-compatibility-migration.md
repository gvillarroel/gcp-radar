---
title: "Kotlin version compatibility and migration \_|\_ Navigation SDK for Android\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/kotlin-compatibility-migration
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/kotlin-compatibility-migration
  title: "Kotlin version compatibility and migration \_|\_ Navigation SDK for Android\
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
Kotlin version compatibility and migration
Stay organized with collections
Save and categorize content based on your preferences.
This page provides information about Kotlin version compatibility for the
Navigation SDK, as well as guidance for migrating to a newer version.
Navigation SDK Kotlin version requirements
The following table outlines the Kotlin version requirements and the recommended
AGP and Gradle versions for recent versions of the Navigation SDK.
Navigation SDK version
Kotlin version (required)
Android Gradle Plugin (AGP) and Gradle versions (recommended)
7.3+
2.2.10
AGP 8.10.0
Gradle 8.11.1
6.3 - 7.2
2.1
AGP 8.7.3
Gradle 8.10.2
6.0 - 6.2
2.0
AGP 8.3.0
Gradle 8.4
5.1 - 5.99.1
1.9
We recommend using AGP 7.3+, which has a workaround for JDK-8272564 .
Note: The recommended AGP versions listed above account for the use of R8/D8,
which is included with AGP. If you are not using R8/D8, see the Kotlin
requirements for the minimum and maximum versions
for Gradle and AGP.
Kotlin version compatibility
Kotlin 2.2 supports backwards compatibility with Kotlin 2.1. This means that if
you are already using Kotlin 2.1 with the Navigation SDK, you should be able to
upgrade to Kotlin 2.2 without having to resolve all of the breaking changes.
However, this only applies to stable language
features .
If you are using alpha, beta or experimental features in the Kotlin language,
then you may have to make additional changes when upgrading.
Easing the transition: Kotlin compatibility flags
Kotlin supplies two flags to help with limiting breaking changes:
https://kotlinlang.org/docs/compatibility-modes.html
language-version X.Y
This flag reverts breaking changes to the behavior of a previous Kotlin version.
For example, if you are using Kotlin 2.1, you could specify [ -
language-version 2.1] and the new breaking changes would no longer take effect:
android {
kotlinOptions {
languageVersion = ' 2.1 '
}
}
api-version X.Y
This flag throws a Gradle build error when an API from a Kotlin version newer
than the apiVersion is used.
android {
kotlinOptions {
apiVersion = ' 2.1 '
}
}
A more targeted approach
In addition to using Kotlin compatibility flags, we recommend reviewing the
Kotlin release notes and choosing the behaviors that you would like to retain
from the version that you are upgrading from. Kotlin provides a list of breaking
changes and the flags that can be set to retain the original behavior in its
compatibility guides for each version:
2.0 compatibility guide
2.1 compatibility guide
2.2 compatibility guide
Future Kotlin upgrades
Kotlin releases a new version (i.e. language release) every 6
months
and Google typically incorporates the latest version as the default in our
products 1-2 months after that. Previous Kotlin versions have included breaking
changes that have required Navigation SDK customers to upgrade to a newer
version. Because of this, we recommend that you plan for a Kotlin upgrade every
6 months when adopting the latest Navigation SDK version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
