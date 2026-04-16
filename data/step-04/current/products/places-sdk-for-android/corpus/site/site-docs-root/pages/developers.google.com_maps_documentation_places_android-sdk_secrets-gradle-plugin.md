---
title: "Secrets Gradle plugin \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/secrets-gradle-plugin
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/secrets-gradle-plugin
  title: "Secrets Gradle plugin \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
Guides
Send feedback
Secrets Gradle plugin
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Securely store your API keys outside of version control using the Secrets Gradle Plugin for Android.
The plugin reads API keys from a local secrets.properties file and makes them accessible within your Android project.
You need to install the plugin, configure it in your Gradle files, and create the necessary properties files ( secrets.properties and local.defaults.properties ).
This approach ensures your sensitive API keys are not exposed in your code repository, enhancing security.
Google strongly recommends that you not check an API key into your
version control system. Instead, you should store it in a local secrets.properties file,
which is located in the root directory of your project but excluded from version control, and then
use the Secrets Gradle Plugin for Android
to read the API key.
The Secrets Gradle Plugin for Android reads secrets, including the API key, from
a properties file not checked into a version control system. The plugin then exposes those properties
as variables in the Gradle-generated BuildConfig class and in the Android manifest file.
For a complete example of using the Secrets Gradle Plugin for Android to access an API key,
see Set up an Android Studio project .
Installation and usage
To install the Secrets Gradle Plugin for Android and store your API key:
In Android Studio, open your root-level build.gradle file and add the following code to the
dependencies element under buildscript .
Groovy
buildscript {
dependencies {
// ...
classpath "com.google.android.libraries.mapsplatform.secrets-gradle-plugin:secrets-gradle-plugin:2.0.1"
}
}
Kotlin
buildscript {
dependencies {
// ...
classpath ( "com.google.android.libraries.mapsplatform.secrets-gradle-plugin:secrets-gradle-plugin:2.0.1" )
}
}
Open your app-level build.gradle file and add the following code to the
plugins element.
Groovy
plugins {
id 'com.android.application'
// ...
id 'com.google.android.libraries.mapsplatform.secrets-gradle-plugin'
}
Kotlin
plugins {
id ( "com.android.application" )
// ...
id ( "com.google.android.libraries.mapsplatform.secrets-gradle-plugin" )
}
If you use Android Studio, sync your project with Gradle .
Open the local.properties in your project level directory, and then add
the following code. Replace YOUR_API_KEY with your API key.
PLACES_API_KEY= YOUR_API_KEY
What's next
View the Secrets Gradle Plugin for Android
GitHub project page.
View Set up an Android Studio project for a complete example of using the
plugin.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["To protect API keys, store them in a `secrets.properties` file, excluded from version control. Install the Secrets Gradle Plugin by adding it to the `build.gradle` files. In module-level `build.gradle`, configure the plugin to read from `secrets.properties` and set `local.defaults.properties` as backup. Add your API key to `secrets.properties` and use the `DEFAULT_API_KEY` in the backup file. Sync the project to apply changes. This plugin exposes keys as variables.\n"]]
