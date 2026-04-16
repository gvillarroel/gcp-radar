---
title: "Set up your Android Studio project \_|\_ Navigation SDK for Android \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup
  title: "Set up your Android Studio project \_|\_ Navigation SDK for Android \_|\_\
    \ Google for Developers"
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
Send feedback
Set up your Android Studio project
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide provides instructions on integrating the Navigation SDK into your Android project using Gradle or Maven for dependency management.
You'll need to configure your build settings, including minSdkVersion , targetSdkVersion , and dex options, for compatibility with the Navigation SDK.
Securely store your API key using the Secrets Gradle Plugin and add it to your AndroidManifest.xml for authentication.
Remember to include the required attributions ( NOTICE.txt , LICENSES.txt ) in your app's legal notices section, accessible through a menu item.
If you are a Mobility or Fleet Engine Deliveries customer, consult the Mobility documentation for billing details and transaction recording.
This page explains how to integrate the Navigation SDK
into your development project.
Add the Navigation SDK to your project
The Navigation SDK is available through the Google
Maven
Repository .
You can add the SDK to your project using either your Gradle build.gradle or
Maven pom.xml configuration.
Note: This method is incompatible with some libraries that depend on
Navigation SDK through the prior artifact ID. This
includes releases of the Driver SDK v4.4 or earlier.
Add the following dependency to your Gradle or Maven configuration,
substituting the VERSION_NUMBER placeholder for the
desired version of Navigation SDK for Android.
Gradle
Add the following to your module-level build.gradle :
dependencies {
...
implementation ' com . google . android . libraries . navigation : navigation : VERSION_NUMBER '
}
Maven
Add the following to your pom.xml :
<dependencies>
...
<dependency>
<groupId>com.google.android.libraries.navigation</groupId>
<artifactId>navigation</artifactId>
<version> VERSION_NUMBER </version>
</dependency>
</dependencies>
Note: If you are a Mobility Services customer upgrading from the original
private Maven repository, note that the group and artifact names have
changed, and the com.google.cloud.artifactregistry.gradle-plugin plugin is
no longer necessary.
If you have any dependencies that use the Maps SDK, you have to exclude the
dependency in each declared dependency that relies on the Maps SDK.
Gradle
Add the following to your top-level build.gradle :
allprojects {
...
// Required: you must exclude the Google Play service Maps SDK from
// your transitive dependencies to make sure there won't be
// multiple copies of Google Maps SDK in your binary, as the Navigation
// SDK already bundles the Google Maps SDK.
configurations {
implementation {
exclude group : ' com . google . android . gms ' , module : ' play - services - maps '
}
}
}
Maven
Add the following to your pom.xml :
<dependencies>
<dependency>
<groupId>project.that.brings.in.maps</groupId>
<artifactId>MapsConsumer</artifactId>
<version>1.0</version>
<exclusions>
<!-- Navigation SDK already bundles Maps SDK. You must exclude it to prevent duplication-->
<exclusion> <!-- declare the exclusion here -->
<groupId>com.google.android.gms</groupId>
<artifactId>play-services-maps</artifactId>
</exclusion>
</exclusions>
</dependency>
</dependencies>
Configure the build
After you have created the project, you can configure the settings for a
successful build and use of the Navigation SDK.
Update local properties
In the Gradle Scripts folder , open the local.properties file and add
android.useDeprecatedNdk=true .
Update the Gradle build script
Open the build.gradle (Module:app) file and use the following guidelines
to update the settings to meet the requirements for
Navigation SDK and consider setting the
optimization options as well.
Required settings for Navigation SDK
Set minSdkVersion to 24 or higher.
Set targetSdkVersion to 36 or higher.
Add a dexOptions setting that increases the javaMaxHeapSize .
Set the location for additional libraries.
Add the repositories and dependencies for the
Navigation SDK.
Replace the version numbers in the dependencies with the latest
available versions.
Optional settings to decrease build time
Enable code shrinking and resource shrinking
using R8/ProGuard to remove unused code and resources from dependencies. If
the R8/ProGuard step takes too much time to run, consider enabling
multidex for
development work.
Reduce the number of language translations included in the build: Set
resConfigs for one language during development. For the final build,
set resConfigs for languages you actually use. By default, Gradle
includes resource strings for all languages supported by the
Navigation SDK.
Add desugaring for Java8 support
If you're building your app using the Android Gradle plugin 4.0.0 or
higher, the plugin extends support for using a number of Java 8 language
APIs. See Java 8 desugaring
support
for more information. See the example build script snippet below for how
compile and dependency options.
For Android version 7.3.0 and higher, you must use Gradle 8.11.1, the
Android Gradle plugin version 8.10.0, and the Desugar library
com.android.tools:desugar_jdk_libs_nio:2.0.3 .
The Desugar library needs to be enabled for the app module and any
module that directly depends on the Navigation SDK.
Below is an example of the Gradle build script for the application. Check the
sample apps for updated sets of dependencies, as the version of
Navigation SDK you are using may be slightly ahead or
behind this documentation.
apply plugin : 'com.android.application'
ext {
navSdk = "__NAVSDK_VERSION__"
}
android {
compileSdk 33
buildToolsVersion = '28.0.3'
defaultConfig {
applicationId "<your id>"
// Navigation SDK supports SDK 23 and later .
minSdkVersion 23
targetSdkVersion 34
versionCode 1
versionName "1.0"
// Set this to the languages you actually use , otherwise you 'll include resource strings
// for all languages supported by the Navigation SDK .
resConfigs "en"
multiDexEnabled true
}
dexOptions {
// This increases the amount of memory available to the dexer . This is required to build
// apps using the Navigation SDK .
javaMaxHeapSize "4g"
}
buildTypes {
// Run ProGuard . Note that the Navigation SDK includes its own ProGuard configuration .
// The configuration is included transitively by depending on the Navigation SDK .
// If the ProGuard step takes too long , consider enabling multidex for development work
// instead .
all {
minifyEnabled true
proguardFiles getDefaultProguardFile ( 'proguard-android.txt' ), 'proguard-rules.pro'
}
}
compileOptions {
// Flag to enable support for the new language APIs
coreLibraryDesugaringEnabled true
// Sets Java compatibility to Java 8
sourceCompatibility JavaVersion . VERSION_1_8
targetCompatibility JavaVersion . VERSION_1_8
}
}
repositories {
// Navigation SDK for Android and other libraries are hosted on Google 's Maven repository.
google ()
}
dependencies {
// Include the Google Navigation SDK .
// Note : remember to exclude Google Play service Maps SDK from your transitive
// dependencies to avoid duplicate copies of the Google Maps SDK .
api "com.google.android.libraries.navigation:navigation:${navSdk}"
// Declare other dependencies for your app here .
annotationProcessor "androidx.annotation:annotation:1.7.0"
coreLibraryDesugaring 'com.android.tools:desugar_jdk_libs_nio:2.0.3'
}
Add the API key to your app
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
You can either add the API key to your AndroidManifest.xml file or provide the API key programmatically.
Add your API key to AndroidManifest.xml :
<meta-data
android:name="com.google.android.geo.API_KEY"
android:value="${MAPS_API_KEY}" />
Note:
com.google.android.geo.API_KEY is the recommended metadata name
for the API key. A key with this name can be used to authenticate to multiple
Google Maps-based APIs on the Android platform, including the
Navigation SDK for Android. For backwards compatibility, the API also
supports the name com.google.android.maps.v2.API_KEY . This legacy
name allows authentication to the Android Maps API v2 only. An application can
specify only one of the API key metadata names. If both are specified, the API
throws an exception.
Provide the API key programmatically:
The Secrets Gradle Plugin makes the key available in the BuildConfig class.
In your app's initialization (for example, in your Application.onCreate() method),
call the method as follows:
Kotlin
Add the following import statements:
import com.google.android.libraries.navigation.NavigationApi
Add the following to your Application.onCreate() method:
NavigationApi . setApiKey ( BuildConfig . MAPS_API_KEY )
Java
Add the following import statements:
import com.google.android.libraries.navigation.NavigationApi ;
Add the following to your Application.onCreate() method:
NavigationApi . setApiKey ( BuildConfig . MAPS_API_KEY );
Note: When using setApiKey() , keep the following in mind:
Provide a non-null, non-empty API key.
Call setApiKey() only once during your application's lifetime. The method throws an IllegalStateException if called more than once.
Call setApiKey() before initializing any other Navigation SDK components, such as Navigator .
The key you provide with this method overrides any API key in your AndroidManifest.xml .
Use Navigation SDK version 7.6 or higher.
Include the required attributions in your app
If you use the Navigation SDK for Android in your app, you must include
attribution text and open source licenses as part of your app's legal notices
section.
Key point: To include the attributions, add them as an independent menu item
or an item on an About menu.
You can find the required attribution text and open source licenses in the
Navigation SDK for Android zip file:
NOTICE.txt
LICENSES.txt
If you are a Mobility or Fleet Engine Deliveries customer
If you are a Mobility or Fleet Engine Deliveries customer, learn about
billing in the Mobility documentation. For more information about
recording transactions, see
Set up billing ,
Record billable transactions ,
Reporting , and
Record billable transactions (Android) .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
