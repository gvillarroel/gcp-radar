---
title: "Places SDK for iOS code samples \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/examples
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/examples
  title: "Places SDK for iOS code samples \_|\_ Google for Developers"
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
Samples
Send feedback
Places SDK for iOS code samples
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places SDK for iOS provides a demo app showcasing features like place autocomplete and place photos, with code snippets and a full sample app for exploration.
To run the sample app, download the archive, navigate to the GooglePlaces directory, install dependencies using CocoaPods, and open the Xcode workspace.
Before building, enable the Places SDK for iOS in your Google Cloud project, obtain an API key (restricting it to the app's bundle identifier for security), and add your API key to the SDKDemoAPIKey file.
Build and run the app, granting location access if prompted, to explore the available Places Demos and utilize the provided sample code as a starting point for your own applications.
Select platform:
Android
iOS
JavaScript
The Places SDK for iOS demo app on
GitHub
supplied with the Places SDK for iOS
demonstrate a number of features including Place Autocomplete and Place Photos. In
addition, you can find code snippets on each page of this developer's guide.
Import and build the
app, add your API key, view the demo, and use the sample code supplied as a
starting point for your app.
When you run the sample app, it displays a list of available samples that you can
run on your own device. Select one of the options.
Troubleshooting: If the sample app runs successfully but you
don't see a map, check that you've added your API key to the app's manifest file, as described in
Using API Keys .
Run the full sample app locally
The Places SDK for iOS sample app is available as a
download archive
from GitHub
Follow these steps to install and try the Places SDK for iOS sample app.
Important: Before you add the SDK, ensure you have removed any existing Places SDK for iOS dependencies.
Download
the code sample archive from
GitHub
and unpack the archive. Alternatively, clone the repository into a local directory:
git clone https://github.com/googlemaps-samples/maps-sdk-for-ios-samples.git
Open a terminal window, navigate to the directory where you expanded the sample files, and
drill down into the GooglePlaces directory:
Swift
cd maps-sdk-for-ios-samples/GooglePlaces-Swift/
open GooglePlacesSwiftXCFrameworkDemos.xcodeproj
Objective-C
cd maps-sdk-for-ios-samples/GooglePlaces
open GooglePlacesXCFrameworkDemos.xcodeproj
In the Xcode project, go to File > Add Package Dependencies . Enter https://github.com/googlemaps/ios-places-sdk as the URL, press Enter to pull in the package, and click Add Package .
Enable the
Places SDK for iOS for your Google Cloud console project.
Get an API key from your project with the Places API and/or Places API (New) enabled .
Edit the SDKDemoAPIKey file and paste your API key
into the appropriate constant. For example:
Swift
let placesAPIKey = " YOUR_API_KEY "
Objective-C
static NSString * const kAPIKey = @" YOUR_API_KEY " ;
If Xcode prompts you to unlock the SDKDemoAPIKey file for
editing, choose Unlock .
If present, remove the following line, because it's used to register the
issue:
Swift
# error ( Register for API Key and insert here . Then delete this line .)
Objective-C
#error Register your API key and insert here, then delete this line.
Build the app .
If the build fails or the app crashes with an error about your API key
when you first run it, make sure that you have provided the
keys required in the SDKDemoAPIKey file.
If you are running the GooglePlaces samples, the iOS simulator
window will show a list of Places Demos .
If prompted to allow GooglePlacesDemos to access your location, choose
Allow .
The sample you chose is now ready to run.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
