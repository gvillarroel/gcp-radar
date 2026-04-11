---
title: "Set up an Android Studio project \_|\_ Places SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/config
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/config
  title: "Set up an Android Studio project \_|\_ Places SDK for Android \_|\_ Google\
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
Places SDK for Android
Guides
Send feedback
Set up an Android Studio project
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places SDK for Android now requires AndroidX and uses the Android Gradle plugin version 8.2, with compatibility information available for other versions.
You need to configure your project with the Places SDK dependency, an API key stored securely via the Secrets Gradle Plugin, and initialize the Places API client.
Ensure your development environment is set up with Android Studio Hedgehog and deploy your application to a compatible Android device or emulator running Android 5.0 or higher with Google APIs.
Securely manage API keys in production using recommended mechanisms, and refer to provided sample apps for practical implementation guidance.
NOTICE:
Version 2.0.0 and later of the Places SDK for Android is dependent on
AndroidX .
Beginning with this version, the old support library will no longer be
supported. In order to retain compatibility, you must migrate your projects to
use AndroidX.
To configure your app to use the Places SDK for Android, follow these
steps. They are required for all apps using the Places SDK for Android.
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
The Places SDK for Android library is available through
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
In the dependencies
section of your module -level build.gradle.kts file, add a dependency
to the Places SDK for Android:
Note: Places SDK for Android version
3.5.0 requires kotlin-bom 1.8.0 or later. For
more information on the kotlin-bom dependency, see
Usage of the latest kotlin-stdlib version in transitive dependencies .
Groovy
dependencies {
implementation ( platform ( "org.jetbrains.kotlin:kotlin-bom:$kotlin_version" ))
implementation ( "com.google.android.libraries.places:places:3.5.0" )
}
Kotlin
dependencies {
// Places and Maps SDKs
implementation ( "com.google.android.libraries.places:places:5.1.1" )
}
In your module-level build.gradle.kts file, set compileSdk
and minSdk to the following values:
Note: Ensure that compileSdk is
set to 34 or higher and minSdk
is set to 23 or higher.
Groovy
android {
compileSdk 34
defaultConfig {
minSdk 23
// ...
}
}
Kotlin
android {
compileSdk = 34
defaultConfig {
minSdk = 23
// ...
}
}
In the buildFeatures section of your module-level build.gradle file,
add the BuildConfig class, which you use to access metadata values defined later
in this procedure:
Groovy
android {
// ...
buildFeatures {
buildConfig true
// ...
}
}
Kotlin
android {
// ...
buildFeatures {
buildConfig = true
// ...
}
}
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
PLACES_API_KEY= YOUR_API_KEY
Step 4. Initialize the Places API client
To initialize the Places SDK for Android within an activity or fragment, pass the API key when calling
Places.initializeWithNewPlacesApiEnabled() :
Kotlin
// Define a variable to hold the Places API key.
val apiKey = BuildConfig . PLACES_API_KEY
// Log an error if apiKey is not set.
if ( apiKey . isEmpty () || apiKey == "DEFAULT_API_KEY" ) {
Log . e ( "Places test" , "No api key" )
finish ()
return
}
// Initialize the SDK
Places . initializeWithNewPlacesApiEnabled ( applicationContext , apiKey )
// Create a new PlacesClient instance
val placesClient = Places . createClient ( this )
Java
// Define a variable to hold the Places API key.
String apiKey = BuildConfig . PLACES_API_KEY ;
// Log an error if apiKey is not set.
if ( TextUtils . isEmpty ( apiKey ) || apiKey . equals ( "DEFAULT_API_KEY" )) {
Log . e ( "Places test" , "No api key" );
finish ();
return ;
}
// Initialize the SDK
Places . initializeWithNewPlacesApiEnabled ( getApplicationContext (), apiKey );
// Create a new PlacesClient instance
PlacesClient placesClient = Places . createClient ( this );
IMPORTANT: Never add API keys directly to
application code. In production environments, we recommend using a
secure mechanism
to manage API keys.
You are now ready to begin using the Places SDK for Android!
Step 5: Set up an Android device
To run an app that uses the Places SDK for Android, you must deploy it to an Android device or Android
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
Next steps
After your project is configured, you can explore the
sample apps .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
