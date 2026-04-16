---
title: "Set up an Xcode project \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/start
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/start
  title: "Set up an Xcode project \_|\_ Places SDK for iOS \_|\_ Google for Developers"
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
Set up an Xcode project
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
After enabling billing and creating an API key, set up an Xcode project with Xcode version 15.0 or later to develop your app using the Places SDK for iOS.
Install the Places SDK for iOS using Swift Package Manager, CocoaPods, or manual installation, following the detailed steps provided for each method.
Add your API key to your app's AppDelegate file (Swift, Objective-C, or GooglePlacesSwift) using the provided code snippets and replacing "YOUR_API_KEY" with your actual key.
Optionally, for App Store deployment, inspect the Apple Privacy Manifest file included in the SDK's resources bundle to ensure compliance with Apple's privacy requirements.
After you enable billing and create an API key, you're ready to set up the
Xcode project that you use to develop your app.
Release notes are available for each
release.
Step 1: Install the required software
To build a project using the Places SDK for iOS, you need:
Xcode version 26.0 or later
Step 2: Create the Xcode project and install the Places SDK for iOS
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
To remove existing Places SDK for iOS installed manually,
follow these steps:
From your Xcode project configuration settings, find Frameworks, Libraries,
and Embedded Content . Use the minus sign(-) to remove the following frameworks:
GooglePlaces.xcframework
GooglePlacesSwift.xcframework
From the top level directory of your Xcode project, remove the GooglePlaces
bundle.
Manual installation
This guide shows how to manually add the XCFrameworks containing the Places SDK for iOS and Places Swift SDK for iOS to your
project and configure your build settings in Xcode. An XCFramework is a binary package that you can >use on multiple platforms, including machines
using Apple silicon . You can choose to add Places SDK for iOS, Places Swift SDK for iOS, or both.
Download the following SDK binary and resource files:
GooglePlaces
GooglePlacesResources
If you are installing Places Swift SDK for iOS, install the following files:
GooglePlacesSwift
GooglePlacesSwiftResources
Extract the files to access the XCFramework and resources.
Launch Xcode and either open an existing project, or create a new
project. If you're newer to iOS development, create a new project and
select the iOS App template .
Remove any Maps bundles from previous releases from your project.
Open the General tab. Drag the following XCFramework into your project
under Frameworks, Libraries, and Embedded Content . Make sure
to select Do Not Embed :
GooglePlaces.xcframework
If you are installing Places Swift SDK, drag the following XCFramework into your project
under Frameworks, Libraries, and Embedded Content . Make sure
to select Do Not Embed :
GooglePlacesSwift.xcframework
Copy the GooglePlaces.bundle from the GooglePlacesResources
you downloaded into your Xcode project's top level directory. Make sure to select
Copy items into destination group's folder when prompted.
If you are installing Places Swift SDK, copy the GooglePlacesSwift.bundle from the GooglePlacesSwiftResources you downloaded into your Xcode project's top level directory. Make sure to select Copy items into destination group's folder when prompted.
Select your project from the Project Navigator, and choose your
application's target.
Open the Build Phases tab. Within Link Binary with
Libraries , add the following frameworks and libraries:
CoreGraphics.framework
CoreLocation.framework
libc++.tbd
libz.tbd
QuartzCore.framework
UIKit.framework
Choose your project, rather than a specific target, and open the
Build Settings tab. In the Linking - General -> Other Linker
Flags section, add -ObjC to "Debug" and "Release". If these
settings aren't visible, change the filter in the Build Settings bar
from Basic to All .
CocoaPods
Deprecated: CocoaPods is in maintenance mode as of 8/18/2025 and we won't release more versions of CocoaPods after Q2 2026. Use Swift Package Manager instead.
The Places SDK for iOS and Places Swift SDK for iOS are available as CocoaPod
pods, GooglePlaces and GooglePlacesSwift .
CocoaPods is an open source dependency manager for Swift and Objective-C
Cocoa projects. If you don't already have the CocoaPods tool, install it on
macOS by running the following command from the terminal. For details, see
the CocoaPods Getting Started guide .
sudo gem install cocoapods
Create a Podfile to install the SDKs and their dependencies:
If you don't have an Xcode project yet, create one now and save it to
your local machine. If you're newer to iOS development, create a new project
and select the iOS App template .
Create a file named Podfile in your project directory. This
file defines your project's dependencies.
Edit the Podfile and add your dependencies along with their versions . Here is an
example that specifies your application target name, and the names of
the GooglePlaces and GooglePlacesSwift pods:
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '16.0'
target 'YOUR_APPLICATION_TARGET_NAME_HERE' do
pod 'GooglePlaces', '10.12.0'
pod 'GooglePlacesSwift', '10.12.0'
end
Make sure to regularly run pod outdated to detect when there is a newer
version to ensure you're always on the latest.
Save the Podfile .
Open a terminal and go to the directory containing the
Podfile :
cd <path-to-project>
Run the pod install command. This will install the
APIs specified in the Podfile , along with any dependencies
they may have.
pod install
Close Xcode, and then open (double-click) your project's
.xcworkspace file to launch Xcode. From this time onwards,
you must use the .xcworkspace file to open the project.
To update the API for an existing project, follow these steps:
Open a terminal and go to the project directory containing the Podfile .
Run the pod update command. This will update all of the APIs
specified in the Podfile to the latest version.
Step 3: Add the API key to your app
In the following examples, replace YOUR_API_KEY with your API key.
GooglePlacesSwift
Add your API key to your AppDelegate.swift as follows:
Add the following import statement:
import GooglePlacesSwift
Add the following to your application(_:didFinishLaunchingWithOptions:)
method, replacing YOUR_API_KEY with your API key:
PlacesClient . provideAPIKey ( " YOUR_API_KEY " )
Swift
Add your API key to your AppDelegate.swift as follows:
Add the following import statement:
import GooglePlaces
Add the following to your application(_:didFinishLaunchingWithOptions:)
method, replacing YOUR_API_KEY with your API key:
GMSPlacesClient . provideAPIKey ( " YOUR_API_KEY " )
Objective-C
Add your API key to your AppDelegate.m as follows:
Add the following import statement:
@import GooglePlaces ;
Add the following to your application:didFinishLaunchingWithOptions:
method, replacing YOUR_API_KEY with your API key:
[ GMSPlacesClient provideAPIKey : @" YOUR_API_KEY " ];
Step 4 (optional): Inspect Apple Privacy Manifest file
Note: The following is relevant when you deploy your app to the web store.
Apple requires app privacy details for apps on the App Store. Visit the Apple App Store Privacy Details page for updates and more information.
The Apple Privacy Manifest file is included in the resources bundle for the SDK. To verify that the Privacy Manifest File has been included, and to inspect its contents, create an archive of your app and generate a privacy report from the archive.
Next steps
Start writing code. A recommended starting point is implementing a starter app that get the user's current place .
After your project is configured, you can explore the
sample apps .
Use App Check to secure your API key .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["To set up the Places SDK for iOS, first ensure you have Xcode 15.0 or later. Then, install the SDK using Swift Package Manager, CocoaPods, or manual installation. For Swift Package Manager, add the SDK URL to your Xcode project and select the desired package. For manual installs, download and add the XCFramework files and resources, and link necessary frameworks and libraries in the project's build settings. For CocoaPods, create a `Podfile` specifying the `GooglePlaces` and `GooglePlacesSwift` pods and run `pod install`. Lastly, add your API key to your `AppDelegate` file.\n"]]
