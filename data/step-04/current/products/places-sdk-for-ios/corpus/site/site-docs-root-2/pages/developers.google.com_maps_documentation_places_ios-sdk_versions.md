---
title: "Places SDK for iOS versions \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/versions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/versions
  title: "Places SDK for iOS versions \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Send feedback
Places SDK for iOS versions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Maps Places SDK for iOS is regularly updated with new features, bug fixes, and performance improvements, requiring developers to manage their dependencies effectively.
For critical apps, prioritize linking to the latest dot release within your major SDK version and upgrade yearly to minimize disruption from backward-incompatible changes while benefiting from continuous improvements.
Non-critical apps can link to a fixed SDK version, offering less frequent maintenance but requiring updates within 12 months of a deprecation notice.
Installation can be done via Swift Package Manager or CocoaPods, ensuring you specify version numbers to maintain build consistency and avoid unexpected issues.
Stay informed about updates, deprecations, and backward-incompatible changes through release notes and by assigning project owners with monitored email addresses to receive proactive notifications.
Select platform:
Android
iOS
JavaScript
Note: The Places SDK for iOS features that are available in your app are
determined by a combination of the SDK version number that you specify in your
app configuration and the APIs enabled on your API key. For more information,
see Choose your SDK version .
The Google Maps Platform team regularly updates SDKs with new features, bug fixes, and
performance improvements. This page provides guidance on how to manage your dependencies
on mobile SDKs.
Which version to link to?
For mission-critical apps , link to the latest dot release of the major
version that you are using (X.*), and upgrade yearly to the new major version.
As you release new versions of your application
throughout the year, you may start using newer dot versions of the Places SDK for iOS. This will
not require updates in your application as new dot versions are backward compatible.
Benefits:
If you discover issues in the Places SDK for iOS, fixes will be provided in a
backward-compatible way for 12 months after the initial release of the major version, per
the Mobile support
policy . You will not need to urgently upgrade to an incompatible SDK version
to benefit from fixes.
The latest improvements and features are easy to adopt when your app is already built on
the latest version.
Annual incremental updates to the newest major version of the SDK may require less work
to adapt, rewrite, and test your application, than having to handle backwards-incompatible
changes introduced across multiple major version releases.
For non-critical apps , link to any fixed version. When you receive a deprecation
notice for that fixed version, you will have 12 months to make your updated app code available to
your users.
Benefits:
Less frequent maintenance work.
New versions of your app keep supporting users' devices running older mobile operating
systems for longer (until you need to upgrade to a new SDK version).
Project Owners with monitored email addresses receive proactive notifications about changes that
impact each of their projects. Stay
informed about major updates, deprecations, and other changes.
Installation
Swift Package Manager
The Places SDK for iOS can be installed via
Swift Package Manager . To add the SDK, ensure you have
removed any existing Places SDK for iOS dependencies.
To add the SDK to a new or existing project, follow these steps:
Open your Xcode project or workspace , then go to File > Add Package Dependencies .
Enter https://github.com/googlemaps/ios-places-sdk as the URL, press Enter
to pull in the package, and click "Add Package".
To install a specific version , set the Dependency Rule field to one of
the version-based options. For new projects, we recommend specifying the latest version and
using the "Exact Version" option. Once complete, click "Add Package".
From the Choose Package Products window, verify that GooglePlaces , GooglePlacesSwift , or both, will be added to your designated main target. Once complete, click Add Package .
If you are updating Google Places Swift from the deprecated GitHub URL
Important: The GitHub URL to access Google Places Swift has changed starting with version 0.3.0. If you are updating a version of GooglePlacesSwift that was accessed through the old URL, https://github.com/googlemaps/ios-places-swift-sdk , remove it from your Xcode's package dependencies section.
To verify your installation, navigate to your target's General pane. In Frameworks, Libraries, and Embedded Content , you should see the installed packages. You can also view the Package Dependencies section of Project Navigator to verify the package and its version.
To update the package for an existing project, follow these steps:
From Xcode, go to "File > Packages > Update To Latest Package Versions".
If you are updating Google Places Swift from the deprecated GitHub URL
Important: The GitHub URL to access Google Places Swift has changed starting with version 0.3.0. If you are updating a version of GooglePlacesSwift that was accessed through the old URL, https://github.com/googlemaps/ios-places-swift-sdk , remove it from your Xcode's package dependencies section.
To verify your installation, go to the Package Dependencies section of Project Navigator
to verify the package and its version.
Important: Sometimes, artifacts cannot be resolved or errors can occur,
in this case select "File > Packages > Reset Package Cache".
CocoaPods
Always specify a version number in your dependencies instead of using an optimistic operator
( ~> ) since that can lead to unpredictable and unrepeatable builds. The
Places SDK for iOS adheres to semantic versioning ,
and new major version releases include breaking changes.
An example Podfile dependency using
Podfile syntax:
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '16.0'
target 'YOUR_APPLICATION_TARGET_NAME_HERE' do
pod 'GooglePlaces', '10.12.0'
pod 'GooglePlacesSwift', '10.12.0'
end
Maintenance and upgrade
To build with the latest improvements, regularly check for newer versions and update your version
specifications. If you are updating to a new major version, check the
release notes for backwards-incompatible changes and how to update your code.
Swift Package Manager
To update the package for an existing project, follow these steps:
To verify your installation, go to the Package Dependencies section of Project Navigator
to verify the package and its version.
Important: Sometimes, artifacts cannot be resolved or errors can occur,
in this case select "File > Packages > Reset Package Cache".
Cocoapods
Open a terminal and go to the directory containing the Podfile :
cd <path-to-project>
Run pod outdated to see if a newer version of the Places SDK for iOS
is available.
If a newer version of the SDK is found, update your Podfile with this new version.
See Specifying pod versions
to learn how to set a specific version in your Podfile .
Run pod update .
Make any necessary changes as a result of the upgrade. See the
Release Notes for a list of the changes in each release.
Clean and rebuild your project by selecting Product > Clean and then
Product > Build
Manual installation
Get the link to the latest source files
at Installing the SDK.
In addition to polling for newer versions, Google Cloud
project
owners receive emails about backwards incompatible changes that may affect their projects. To
get proactive notification about backwards incompatible changes,
assign
the owner role with a monitored email address for each of your projects.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The core content details managing dependencies for the Places SDK for iOS. For critical apps, it advises linking to the latest dot release and upgrading yearly. For non-critical apps, linking to any fixed version is acceptable, with a 12-month notice for deprecations. Installation involves using Swift Package Manager or CocoaPods, with detailed steps provided. Regular updates are encouraged, checking release notes for backward-incompatible changes. Project owners receive emails about such changes. Manual installation is also available via a provided link.\n"]]
