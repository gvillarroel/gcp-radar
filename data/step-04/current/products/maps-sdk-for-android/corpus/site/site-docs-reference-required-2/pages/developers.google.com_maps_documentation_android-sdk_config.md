---
title: "Set up an Android Studio project \_|\_ Maps SDK for Android \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/android-sdk/config
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/config
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/config
  title: "Set up an Android Studio project \_|\_ Maps SDK for Android \_|\_ Google\
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
Maps SDK for Android
Guides
Send feedback
Set up an Android Studio project
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to manually configure an Android Studio project to use the Maps SDK for Android without the default Google Maps template.
You will need to set up the Android SDK, add your API key securely, and update the app manifest with necessary permissions and settings.
Ensure your Android device or emulator has Google Play services installed and is based on Android 5.0 or higher with the Google APIs.
Optionally, you can implement a check within your app to ensure Google Play services are available on the user's device.
This page describes how to configure an Android Studio project to use the
Maps SDK for Android without using the Google Maps template
that is detailed in the Quickstart .
The Google Maps template automatically configures and adds a basic map to a new
Android Studio project. However, you can also add a map to an Android project
that uses a different Android Studio template. To do so, you need to manually
configure your project and then add the map .
Step 1: Set up Android Studio
This document describes a development environment using
Android Studio Hedgehog and the
Android Gradle plugin
version 8.2.
Note: If your development environment uses a different version
of Android Studio or Gradle you might have to modify the steps based on those versions. For more
information about Android Studio and Gradle versions, see
Android Gradle plugin and Android Studio compatibility .
Step 2. Set up the SDK
The Maps SDK for Android library is available through
Google's Maven repository . To
add the SDK to your app, do the following:
In your top-level settings.gradle.kts file, include the
Gradle plugin portal ,
Google Maven repository ,
and Maven central repository
under the pluginManagement block. The pluginManagement block
must appear before any other statements in the script.
pluginManagement {
repositories {
google()
mavenCentral()
gradlePluginPortal()
}
}
In your top-level settings.gradle.kts file, include the
Google's Maven repository
and Maven central repository
under the dependencyResolutionManagement block:
dependencyResolutionManagement {
repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
repositories {
google()
mavenCentral()
}
}
In your module-level build.gradle.kts or build.gradle file, add the
Google Play services dependency for
the Maps SDK for Android.
Kotlin
dependencies {
// Maps SDK for Android
implementation ( libs . play . services . maps )
}
Groovy
dependencies {
// Maps SDK for Android
implementation "com.google.android.gms:play-services-maps:20.0.0"
}
In your module-level build.gradle.kts or build.gradle file,
set compileSdk and minSdk to the following values:
Note: Ensure that compileSdk is
set to 34 or higher and minSdk
is set to 21 or higher.
Kotlin
android {
compileSdk = 34
defaultConfig {
minSdk = 21
// ...
}
}
Groovy
android {
compileSdk 34
defaultConfig {
minSdk 21
// ...
}
}
In the buildFeatures section of your module-level build.gradle.kts
or build.gradle file, add the BuildConfig class, which you can use to
access metadata values defined later in this procedure:
Kotlin
android {
// ...
buildFeatures {
buildConfig = true
// ...
}
}
Groovy
android {
// ...
buildFeatures {
buildConfig true
// ...
}
}
In your libs.versions.toml file, add the following:
[versions]
play-services-maps = "20.0.0"
[libraries]
play-services-maps = { module = "com.google.android.gms:play-services-maps" , version . ref = "play-services-maps" }
Step 3: Add your API key to the project
This section describes how to store your API key so that it can be securely referenced by
your app. You should not check your API key into your version control system, so we recommend
storing it in the secrets.properties file, which is located in the root directory of your
project. For more information about the secrets.properties file, see
Gradle properties files .
To streamline this task, we recommend that you use the
Secrets Gradle Plugin for Android .
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
MAPS_API_KEY= YOUR_API_KEY
In your AndroidManifest.xml file, go to
com.google.android.geo.API_KEY and update the android:value attribute as follows:
<meta-data
android:name="com.google.android.geo.API_KEY"
android:value="${MAPS_API_KEY}" />
Note:
com.google.android.geo.API_KEY is the recommended metadata name
for the API key. A key with this name can be used to authenticate to multiple
Google Maps-based APIs on the Android platform, including the
Maps SDK for Android. For backwards compatibility, the API also
supports the name com.google.android.maps.v2.API_KEY . This legacy
name allows authentication to the Android Maps API v2 only. An application can
specify only one of the API key metadata names. If both are specified, the API
throws an exception.
Step 4: Update the app manifest
This section describes the settings to add to your
AndroidManifest.xml file.
Google Play services version number
Add the following declaration within the application element. This embeds
the version of Google Play services that the app was compiled with.
< meta - data
android : name = "com.google.android.gms.version"
android : value = "@integer/google_play_services_version" / >
Location permission
If your app needs to access the user's location, you need to request the
location permission in your AndroidManifest.xml file. The options are
ACCESS_FINE_LOCATION , which provides the precise device location, and
ACCESS_COARSE_LOCATION , which is less precise. For details, see the
location data guide.
Note: The quickstart has ACCESS_FINE_LOCATION enabled.
To request the ACCESS_FINE_LOCATION permission, add this code to the
manifest element:
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
External storage permission
If you're targeting version 8.3 or later of the Google Play services SDK,
you don't need the WRITE_EXTERNAL_STORAGE permission. If you're targeting
earlier versions of the Google Play services SDK, you must request the
WRITE_EXTERNAL_STORAGE
permission, in the manifest element.
<uses-permission
android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
Apache HTTP Legacy library
If you are using com.google.android.gms:play-services-maps:16.0.0 or below and
your app is targeting API level 28 (Android 9.0) or above, you must include
the following declaration within the <application> element of
AndroidManifest.xml . Otherwise, skip this declaration.
< uses - library
android : name = "org.apache.http.legacy"
android : required = "false" / >
Step 5: Set up an Android device
To run an app that uses the Maps SDK for Android, you must deploy it to an Android device or Android
emulator that is based on Android 5.0 or higher and includes
the Google APIs.
To use an Android device, follow the instructions at
Run apps on a hardware device .
To use an Android emulator, you can create a virtual device and install the emulator by using
the Android Virtual Device (AVD) Manager
that comes with Android Studio.
Note: If you choose to use an Android emulator, ensure that
you choose a device with the Play icon , , displayed under the Play Store column.
This icon indicates that these profiles are fully CTS
compliant and may use system images that include the Play Store app:
Step 6: Optionally check for Play Service support
Maps SDK for Android requires that the device on which you deploy your
app has the Google Play services installed. Google provides a method that you
can call from your app to check. For more information, see Check whether Google
Play services is installed .
Next steps
Once your project is configured, you can add a map .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
