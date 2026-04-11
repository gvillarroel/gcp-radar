---
title: "Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/app-check
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/app-check
  title: "Places SDK for iOS \_|\_ Google for Developers"
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
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Use App Check to secure your API key
Firebase App Check provides protection for calls from your app to Google Maps Platform by blocking traffic that comes from sources other than legitimate apps. It does this by checking for a token from an attestation provider like App Attest . Integrating your apps with App Check helps to protect against malicious requests, so you're not charged for unauthorized API calls.
Is App Check right for me?
App Check is recommended in most cases, however App Check is not needed or is not supported in the following cases:
You are using the original Places SDK. App Check is only supported for Places SDK (New) .
Private or experimental apps. If your app is not publicly accessible, App Check is not needed.
If your app is only used server-to-server, App Check is not needed. However, if the server that communicates with GMP is used by public clients (such as mobile apps), consider using App Check to protect that server instead of GMP.
App Check's recommended attestation providers won't work on devices deemed compromised or untrustworthy by your attestation provider. If you need to support such devices, you can deploy a custom attestation service. For more information, see the instructions .
Overview of implementation steps
At a high level, these are the steps you'll follow to integrate your app with App Check:
Add Firebase to your app.
Add and initialize the App Check library.
Add the token provider to your app.
Initialize the Places and App Check APIs.
Enable debugging.
Monitor your app requests and decide on enforcement.
Once you've integrated with App Check, you'll be able to see backend traffic metrics on the Firebase console. These metrics provide breakdown of requests by whether they are accompanied by a valid App Check token. See the Firebase App Check documentation for more information.
When you're sure that most requests are from legitimate sources and that users have updated to the latest version of your app that includes your implementation of App Check, you can turn on enforcement. Once enforcement is on, App Check will reject all traffic without a valid App Check token.
Note: App check enforcement is not turned on by default.
Considerations when planning an App Check integration
Here are some things to consider as you plan your integration:
The attestation providers we recommend, Device Check or App Attest , are subject to quotas and limitations set by Apple.
You can choose to use a custom attestation provider, though this is an advanced use case. See the Firebase App Check documentation for more information.
Users of your app will experience some latency on startup. However, afterwards, any periodic re-attestation will occur in the background and users should no longer experience any latency. The exact amount of latency at startup depends on the attestation provider you choose.
The amount of time that the App Check token is valid (the time to live , or TTL) determines the frequency of re-attestations. This duration can be configured in the Firebase console. Re-attestation occurs when approximately halkf of the TTL has elapsed. For more information, see the Firebase docs for your attestation provider.
Integrate your app with App Check
Note: Get help faster! For support regarding the Firebase-related portions of this process, see Firebase support . For support regarding the Google Places SDK for iOS, see Google Maps Platform support .
Prerequisites and requirements
An app with the Places SDK version 9.2 or later installed.
The app's bundle ID .
Your Team ID from the Apple Member Center, under Membership.
If you plan to use Device Check, your private key file and key ID .
You must be the owner of the app in Cloud Console.
You will need the app's project ID from the Cloud Console
Step 1: Add Firebase to your app
Follow the instructions in the Firebase developer documentation to add Firebase to your app.
When you register your app, you'll get a configuration file, GoogleService-Info.plist . Add this file, unmodified, to the root level of your app.
Note: In step 5 of the Firebase developer documentation , where you add Firebase modules to your AppDelegate file, add the following modules:
Places Swift SDK for iOS
import FirebaseCore
import FirebaseAppCheck
import GooglePlacesSwift
Swift
import FirebaseCore
import FirebaseAppCheck
import GooglePlaces
Objective-C
@import FirebaseCore ;
@import FirebaseAppCheck ;
@import GooglePlaces ;
Step 2: Add the App Check library and initialize App Check
Firebase provides instructions for each default attestation provider. These instructions show you how to set up a Firebase project and add the App Check library to your app. Follow the code samples provided to initialize App Check.
Follow the Firebase instructions to add the App Check library:
App Attest instructions .
Device Check instructions.
Initialize App Check.
If you are using App Attest, follow the Firebase developer documentation for App Attest. .
Follow the Firebase App Check instructions to create an implementation of AppCheckProviderFactory and add it to your AppDelegate file.
Places Swift SDK for iOS
let providerFactory = YourAppCheckProviderFactory ()
AppCheck . setAppCheckProviderFactory ( providerFactory )
Swift
let providerFactory = YourAppCheckProviderFactory ()
AppCheck . setAppCheckProviderFactory ( providerFactory )
Objective-C
YourAppCheckProviderFactory * providerFactory =
[[ YourAppCheckProviderFactory alloc ] init ];
[ FIRAppCheck setAppCheckProviderFactory : providerFactory ];
If you are using Device Check, add the following to your AppDelegate :
Places Swift SDK for iOS
AppCheck . setAppCheckProviderFactory ( DeviceCheckProviderFactory ())
Swift
AppCheck . setAppCheckProviderFactory ( DeviceCheckProviderFactory ())
Objective-C
[ FIRAppCheck setAppCheckProviderFactory : providerFactory ];
Step 3: Add the token provider
Create a file called AppCheckTokenProvider (or, if you are using Objective-C, two files called AppCheckTokenProvider.h and AppCheckTokenProvider.m ) at the root level of your app.
Add the following import statements and class definition:
Places Swift SDK for iOS
// AppCheckTokenProvider.swift
import FirebaseAppCheck
import Foundation
import GooglePlacesSwift
struct TokenProvider : AppCheckTokenProvider {
func fetchAppCheckToken () async throws - > String {
return try await AppCheck . appCheck (). token ( forcingRefresh : false ). token
}
}
Swift
// AppCheckTokenProvider.swift
import FirebaseAppCheck
import Foundation
import GooglePlaces
class AppCheckTokenProvider : NSObject , GMSPlacesAppCheckTokenProvider {
func fetchAppCheckToken () async throws - > String {
return try await AppCheck . appCheck (). token ( forcingRefresh : false ). token
}
}
Objective-C
// AppCheckTokenProvider.h
@import Foundation ;
@import GooglePlaces ;
@interface AppCheckTokenProvider : NSObject < GMSPlacesAppCheckTokenProvider >
@end
// AppCheckTokenProvider.m
#import "AppCheckTokenProvider.h"
@import FirebaseAppCheck ;
@implementation AppCheckTokenProvider
- ( void ) fetchAppCheckTokenWithCompletion: ( nonnull GMSAppCheckTokenCompletion ) completion {
[[ FIRAppCheck appCheck ]
tokenForcingRefresh : NO
completion : ^ ( FIRAppCheckToken * _Nullable token , NSError * _Nullable error ) {
if ( token ) {
completion ( token . token , nil );
} else {
completion ( nil , error );
}
}];
}
@end
Step 4: Initialize the Places and App Check APIs
In your AppDelegate file, initialize the Places API:
Places Swift SDK for iOS
PlacesClient . provideAPIKey ( "YOUR_API_KEY" )
Swift
GMSPlacesClient . provideAPIKey ( "YOUR_API_KEY" )
Objective-C
[ GMSPlacesClient provideAPIKey : @"YOUR_API_KEY" ];
Then, initialize the App Check API:
Places Swift SDK for iOS
PlacesClient . setAppCheckTokenProvider ( AppCheckTokenProvider ())
Swift
GMSPlacesClient . setAppCheckTokenProvider ( AppCheckTokenProvider ())
Objective-C
[ GMSPlacesClient setAppCheckTokenProvider : [[ AppCheckTokenProvider alloc ] init ]];
Step 5: Enable debugging (optional)
If you'd like to develop and test your app locally, or run it in a continuous integration (CI) environment, you can create a debug build of your app that uses a debug secret to obtain valid App Check tokens. This lets you avoid using real attestation providers in your debug build.
To test your app in Simulator or on a test device:
Create and set the App Check debug provider factory.
This code sample handles both the debugging and production scenarios:
Places Swift SDK for iOS
#if targetEnvironment ( simulator )
let providerFactory = AppCheckDebugProviderFactory ()
#else
let providerFactory = YourAppCheckProviderFactory ()
#endif
Swift
#if targetEnvironment ( simulator )
let providerFactory = AppCheckDebugProviderFactory ()
#else
let providerFactory = YourAppCheckProviderFactory ()
#endif
Objective-C
if ( targetEnvironment == simulator ){
FIRAppCheckDebugProviderFactory * providerFactory =
[[ FIRAppCheckDebugProviderFactory alloc ] init ];
[ FIRAppCheck setAppCheckProviderFactory : providerFactory ];
}
else {
YourAppCheckProviderFactory * providerFactory =
[[ YourAppCheckProviderFactory alloc ] init ];
[ FIRAppCheck setAppCheckProviderFactory : providerFactory ];
}
Enable logging on your Xcode project, launch the app, and find the local debug token in the log.
Add this token to the Firebase console.
For more information and instructions, see the App Check documentation .
To run your app in a CI environment:
Create a debug token in the Firebase console and add it to your CI system's secure key store.
In Xcode, add an environment variable to your testing scheme with the name FIRAAppCheckDebugToken and $(APP_CHECK_DEBUG_TOKEN) (or something similar) as the value.
In your CI test script, pass the debug token as an environment
Create and set the App Check debug provider factory.
This code sample handles both the debugging and production scenarios:
Places Swift SDK for iOS
#if DEBUG
let providerFactory = AppCheckDebugProviderFactory ()
#else
let providerFactory = YourAppCheckProviderFactory ()
#endif
AppCheck . setAppCheckProviderFactory ( providerFactory )
Swift
#if DEBUG
let providerFactory = AppCheckDebugProviderFactory ()
#else
let providerFactory = YourAppCheckProviderFactory ()
#endif
AppCheck . setAppCheckProviderFactory ( providerFactory )
Objective-C
#if DEBUG
id<FIRAppCheckProviderFactory> providerFactory =
[[ FIRAppCheckDebugProviderFactory alloc ] init ];
#else // DEBUG
id<FIRAppCheckProviderFactory> providerFactory =
[[ YourAppCheckProviderFactory alloc ] init ];
#endif // DEBUG
AppCheck . setAppCheckProviderFactory ( providerFactory )
For more information and instructions, see the App Check documentation .
Step 6: Monitor your app requests and decide on enforcement
Before you begin enforcement, you'll want to make sure that you won't disrupt legitimate users of your app. To do this, visit the App Check metrics screen to see what percentage of your app's traffic is verified, outdated, or illegitimate. Once you see that the majority of your traffic is verified, you can enable enforcement.
See the Firebase App Check documentation for more information and instructions.
Before you enforce App Check, make sure any Web Service calls in your Cloud project use OAuth .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["App Check secures Google Maps Platform API keys by verifying traffic origins, blocking unauthorized requests. Implementation steps include: adding Firebase and the App Check library, setting up a token provider, initializing APIs, and enabling debugging. Monitor app request metrics via the Firebase console to assess traffic legitimacy before enabling enforcement. App Check is unnecessary for private, experimental, or server-to-server apps, and is only compatible with the Places SDK (New). Ensure any web service calls in the Cloud project use OAuth.\n"]]
