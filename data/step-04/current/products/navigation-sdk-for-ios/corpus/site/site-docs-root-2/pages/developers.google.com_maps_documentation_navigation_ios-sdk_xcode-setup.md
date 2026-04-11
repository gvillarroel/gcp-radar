---
title: "Set up an Xcode project \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup
  title: "Set up an Xcode project \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
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
Navigation SDK for iOS
Send feedback
Set up an Xcode project
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Install Xcode version 15.0 or later and set up billing and an API key before starting development.
Install the Navigation SDK for iOS using Swift Package Manager, CocoaPods, or manual installation.
Add your API key to the project's AppDelegate using GMSServices.provideAPIKey() (Swift) or [GMSServices provideAPIKey:] (Objective-C).
(Optional) For App Store deployment, inspect the included Apple Privacy Manifest file and generate a privacy report.
Follow tutorials and code samples for navigating routes and handling navigation events after setup.
After you enable billing and create an API key, you're ready to set up the Xcode
project that you use to develop your app.
Release notes are
available for each release.
Step 1: Install the required software
To build a project using the Navigation SDK for iOS, you must download and install:
Xcode
version 26.0 or later
Step 2: Create the Xcode project and install the Navigation SDK
Warning: Apple introduced a new linker in Xcode 15 which is not compatible with
Navigation SDK when the app's deployment target is iOS 18.0 or later. We're
working on resolving this issue for future Navigation SDK versions. For the time
being, you must do one of the following when building against Navigation SDK:
(1) In the target's "General" tab, under the "Minimum Deployments" section, set
the iOS version to 17.7.2 or earlier, or (2) In the "Build Settings" tab of
either the project or the target, under the "Linking - General" section, add
-ld_classic to the "Other Linker Flags" setting. Without taking one of these
two steps, the app will crash due to incorrect linking.
Swift Package Manager
The Navigation SDK can be installed via
Swift Package Manager . To add the SDK, ensure you have
removed any existing Navigation SDK dependencies.
To add the SDK to a new or existing project, follow these steps:
Open your Xcode project or workspace , then go to File > Add Package Dependencies .
Enter https://github.com/googlemaps/ios-navigation-sdk as the URL, press Enter
to pull in the package, and click "Add Package".
To install a specific version , set the Dependency Rule field to one of
the version-based options. For new projects, we recommend specifying the latest version and
using the "Exact Version" option. Once complete, click "Add Package".
To update the package for an existing project, follow these steps:
To verify your installation, go to the Package Dependencies section of Project Navigator
to verify the package and its version.
Important: Sometimes, artifacts cannot be resolved or errors can occur,
in this case select "File > Packages > Reset Package Cache".
To remove existing Navigation SDK for iOS installed manually,
follow these steps:
From your Xcode project configuration settings, find Frameworks, Libraries,
and Embedded Content . Use the minus sign(-) to remove the following framework:
GoogleMaps.xcframework
GoogleNavigation.xcframework
From the top level directory of your Xcode project, remove the GoogleMaps
bundle.
Manual installation
This guide shows how to manually add the XCFrameworks containing the
Navigation SDK for iOS, and the Maps SDK for iOS to your project and configure your build settings in Xcode. An XCFramework is a binary package that you can use on multiple platforms, including machines using the M1 chipset
Follow these steps to install the XCFrameworks for the Navigation SDK for iOS,
and the Maps SDK for iOS:
Download the following SDK binaries and resource files:
GoogleMaps
GoogleMapsResources
GoogleNavigation
GoogleNavigationResources
Launch Xcode and either open an existing project, or create a new
project. If you're new to iOS, create a new project and select the
iOS App template .
Remove all existing Maps, Navigation, and Places references from the project.
Important: The
Places SDK for iOS is not included with the Navigation SDK for iOS,
and must be installed separately. This is true as of version 5.0 of the
Places SDK for iOS. Google recommends that you download and
install the same versions of the Places SDK for iOS and
the Navigation SDK for iOS. See
Install the Places SDK for iOS .
Drag the following XCFrameworks into your project under
Frameworks, Libraries, and Embedded Content to install both the Maps
and Navigation SDKs (when prompted, select Copy items if needed ):
GoogleMaps.xcframework
GoogleNavigation.xcframework
Drag GoogleMaps.bundle from GoogleMapsResources you downloaded
into the top level directory of your Xcode project. When prompted,
ensure Copy items if needed is selected.
Drag GoogleNavigation.bundle from GoogleNavigationResources you downloaded
into the top level directory of your Xcode project. When prompted, ensure
Copy items into destination group's folder is selected.
Select your project from the Project Navigator, and choose your
application's target.
Open the Build Phases tab, and within
Link Binary with Libraries , add the following frameworks and libraries:
Accelerate.framework
AudioToolbox.framework
AVFoundation.framework
CarPlay.framework
Contacts.framework
CoreData.framework
CoreGraphics.framework
CoreImage.framework
CoreLocation.framework
CoreTelephony.framework
CoreText.framework
GLKit.framework
ImageIO.framework
libc++.tbd
libxml2.tbd
libz.tbd
MapKit.framework
Metal.framework
OpenGLES.framework
QuartzCore.framework
Security.framework
SystemConfiguration.framework
UIKit.framework
UserNotifications.framework
WebKit.framework
In your application's target, select the Capabilities tab,
turn on Background Modes , and enable the following modes:
Audio, AirPlay, and Picture in Picture
Location updates
Choose your project, rather than a specific target, and open the Build
Settings tab. In the Other Linker Flags section,
add ‑ObjC for both debug and release .
If these settings are not visible, change the filter in the
Build Settings bar from Basic to All .
Important: The SDK contains Swift symbols. If you are creating a purely Objective-C project, you must also create an empty .swift file in your project, or add the following into the Other Linker Flags section of the Xcode project.
- L $ ( DEVELOPER_DIR ) / Toolchains / XcodeDefault . xctoolchain / usr / lib / swift /$ ( PLATFORM_NAME )
Open Info.plist and add the following key-value pairs:
Key: NSLocationWhenInUseUsageDescription ( Privacy - Location When In Use Usage Description )
Value: "This app needs permission to use your location for turn-by-turn navigation."
Key: NSLocationAlwaysAndWhenInUseUsageDescription ( Privacy - Location Always and When In Use Usage Description )
Value: "This app needs permission to use your location for turn-by-turn navigation."
CocoaPods
Deprecated: CocoaPods is in maintenance mode as of 8/18/2025 and we won't release more versions of CocoaPods after Q2 2026. Use Swift Package Manager instead.
The Navigation SDK for iOS is available as a
CocoaPods pod.
CocoaPods is an open source dependency manager for Swift and Objective-C
Cocoa projects.
If you don't already have the CocoaPods tool, install it on macOS by
running the following command from the terminal. For details, see the
CocoaPods
Getting Started guide .
sudo gem install cocoapods
Create a Podfile for the Navigation SDK for iOS and use
it to install the API and its dependencies:
If you don't have an Xcode project yet, create one now and save it to
your local machine. If you're new to iOS development:
Create a new project.
Select the iOS > App template.
On the project options screen:
Enter the Project Name .
Record the value of the Bundle identifier field.
You can use that value to restrict your API key below.
Set the project Interface to Storyboard .
Set the Language to Swift or Objective-C .
Create a file named Podfile in your project directory. This
file defines your project's dependencies.
Edit the Podfile and add your dependencies along with their
versions .
Here is an example which includes the dependency you need for the
Navigation SDK for iOS:
# Cocoapods install reference #
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '16.0'
target 'YOUR_APPLICATION_TARGET_NAME_HERE' do
pod 'GoogleNavigation', '10.12.0'
end
Make sure to regularly run pod outdated to detect newer
versions. If necessary, upgrade
to the latest version .
Save the Podfile .
Open a terminal and go to the directory containing the Podfile :
cd <path-to-project>
Run the pod install command. This installs the
APIs specified in the Podfile , along with any dependencies.
pod install
Close Xcode, and then open (double-click) your project's
.xcworkspace file to launch Xcode. From this time onwards,
you must use the .xcworkspace file to open the project.
Important: The SDK contains Swift symbols. If you are creating a purely Objective-C project, you must also create an empty .swift file in your project, or add the following into the Other Linker Flags section of the Xcode project.
- L $ ( DEVELOPER_DIR ) / Toolchains / XcodeDefault . xctoolchain / usr / lib / swift /$ ( PLATFORM_NAME )
To update the API for an existing project, follow these steps:
Open a terminal and go to the project directory containing the Podfile .
Run the pod update command. This updates all the APIs
specified in the Podfile to the latest version.
Step 3: Add your API key to the project
The following examples show how to add the API key to your project in Xcode:
Swift
Add your API key to your AppDelegate.swift as follows:
Add the following import statements:
import GoogleMaps
import GoogleNavigation
Add the following to your application(_:didFinishLaunchingWithOptions:)
method:
GMSServices . provideAPIKey ( " YOUR_API_KEY " )
Objective-C
Add your API key to your AppDelegate.m as follows:
Add the following import statements:
@import GoogleMaps ;
@import GoogleNavigation ;
Add the following to your application:didFinishLaunchingWithOptions:
method:
[ GMSServices provideAPIKey : @" YOUR_API_KEY " ];
Step 4 (optional): Inspect Apple Privacy Manifest file
Note: The following is relevant when you deploy your app to the web store.
Apple requires app privacy details for apps on the App Store. Visit the Apple App Store Privacy Details page for updates and more information.
The Apple Privacy Manifest file is included in the resources bundle for the SDK. To verify that the Privacy Manifest File has been included, and to inspect its contents, create an archive of your app and generate a privacy report from the archive.
If you are a Mobility Services customer
If you are a Mobility Services customer, learn about billing
in the Mobility documentation. For more information about recording
transactions, see
Set up billing .
To learn how to add transaction IDs to your Navigation SDK implementation, see
Associate your service usage to Mobility transactions .
What's next
Now that you have an API key and an Xcode project, you can create and run apps.
The Navigation SDK for iOS provides tutorials that can help you
get started. For more details, see:
Tutorials
Navigate a route
Listen for navigation evens
Code samples and Codelab
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
