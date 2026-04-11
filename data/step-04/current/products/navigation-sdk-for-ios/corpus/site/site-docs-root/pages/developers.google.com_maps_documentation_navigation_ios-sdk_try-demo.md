---
title: "Try the demo \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo
  title: "Try the demo \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
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
Try the demo
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK provides turn-by-turn navigation functionality and requires a Google Cloud account with an API key enabled for the SDK.
You must have the Maps SDK for iOS installed in your app before integrating the Navigation SDK.
To try the demo app, download it as a Cocoapod, add your API key, and build the app in Xcode using a compatible iOS device or simulator.
Xcode 12 users might encounter compilation issues for the simulator which can be resolved using steps outlined in the Navigation SDK FAQ.
For troubleshooting, use an iOS device or simulator with iOS 15 or above, enable Rosetta destinations if necessary, and disable User Script Sandboxing if encountering build failures related to rsync.samba().
The Navigation SDK is available as a static library. For
more information, see the Navigation SDK reference
documentation .
Before you begin
To run the demo, you must have a Google Cloud account and an API key enabled for
the Navigation SDK by sales. Once you have a Google Cloud account, see Set up
your development project and API key .
Note: The Navigation SDK extends the Maps SDK .
If your app uses the Maps SDK for its map layer, you can add the Navigation SDK
to your app to enable the navigation experience. You cannot use the Navigation
SDK without also having the Maps SDK installed in your app.
Set up your development project and API key
Create or open a project in the Google Cloud console to use with the
Maps SDK for iOS. Wait for a few minutes until the
project is visible on the Cloud console.
Enable Maps SDK for iOS in the Google Cloud console.
In the project, open the APIs section and enable the
Maps SDK for iOS.
Create an API key for the project , by selecting APIs & Services >
Credentials > Create credentials > API key .
Add the Maps SDK for iOS to your API key. For more
information, see Using API
Keys .
Try the demo app
You can now download, build, and run the demo.
There is a known issue where apps don't compile properly
for the simulator under Xcode 12. If you experience this issue, see the
Navigation SDK FAQ
for steps to resolve the problem.
Download the demo
Clone the code samples repository:
git clone https://github.com/googlemaps-samples/ios-navigation-sdk-samples.git
You can also view the Swift navigation
demo
code on GitHub:
Configure the demo
Follow these steps to configure your demo app.
Install Xcode .
Navigate to the GoogleNavigation repository.
cd ios-navigation-sdk-samples/GoogleNavigation/
Open the Xcode project:
open GoogleNavSwiftXCFrameworkDemos.xcodeproj
Add your own API key to the SDKDemoAPIKey.swift file. You must use the
API key that you created in the steps in Set up your development project
and API key .
Use Xcode to build and run the app.
Troubleshooting
Show/Hide the troubleshooting information
Choose an iOS device or simulator running iOS 16 or above.
If you don't see a simulator available, add Rosetta destinations: in
Product > Destination > Destination Architectures , choose Show Rosetta
Destinations .
If your build fails with Sandbox: rsync.samba() deny , disable User
Script Sandboxing: in Build Settings > Build Options , set User
Script Sandboxing to No .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Navigation SDK requires a Google Cloud account and an API key enabled by sales. Setup involves creating a project in the Google Cloud console, enabling the Maps SDK for iOS, and generating an API key. The Maps SDK must be installed alongside the Navigation SDK. Demo code is available on GitHub in Swift and Objective-C. To run the demo, Xcode must be installed, and the API key added to the `SDKDemoAPIKey` file. Run the app using an iOS device or simulator, ensuring iOS 15 or above.\n"]]
