---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/app-check
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/app-check
  title: "Places SDK for Android \_|\_ Google for Developers"
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
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Use App Check to secure your API key
Firebase App Check provides protection for calls from your app to Google Maps Platform by blocking traffic that comes from sources other than legitimate apps. It does this by checking for a token from an attestation provider like Play Integrity . Integrating your apps with App Check helps to protect against malicious requests, so you're not charged for unauthorized API calls.
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
Add the token provider.
Enable debugging.
Monitor your app requests and decide on enforcement.
Once you've integrated with App Check, you'll be able to see backend traffic metrics on the Firebase console. These metrics provide breakdown of requests by whether they are accompanied by a valid App Check token. See the Firebase App Check documentation for more information.
When you're sure that most requests are from legitimate sources and that users have updated to the latest version of your app that includes your implementation of App Check, you can turn on enforcement. Once enforcement is on, App Check will reject all traffic without a valid App Check token.
Note: App check enforcement is not turned on by default.
Considerations when planning an App Check integration
Here are some things to consider as you plan your integration:
The attestation provider we recommend, Play Integrity , has a daily call limit for its Standard API usage tier.
For more information about call limits, see the Setup page in the Google Play Integrity developer documentation.
You can also choose to use a custom attestation provider, though this is an advanced use case. For more information, see Implement a custom App Check provider .
Users of your app will experience some latency on startup. However, afterwards, any periodic re-attestation will occur in the background and users should no longer experience any latency. The exact amount of latency at startup depends on the attestation provider you choose.
The amount of time that the App Check token is valid (the time to live , or TTL) determines the frequency of re-attestations. This duration can be configured in the Firebase console. Re-attestation occurs when approximately halkf of the TTL has elapsed. For more information, see the Firebase docs for your attestation provider.
Integrate your app with App Check
Note: Get help faster! For support regarding the Firebase-related portions of this process, see Firebase support . For support regarding the Google Places SDK for Android, see Google Maps Platform support .
Prerequisites and requirements
An app with the version 4.1 or later Places SDK integrated.
The SHA-256 fingerprint for your app.
Your app's package name.
You must be the owner of the app in Cloud Console.
You will need the app's project ID from the Cloud Console
Step 1: Add Firebase to your app
Follow the instructions in the Firebase developer documentation to add Firebase to your app.
Step 2: Add the App Check library and initialize App Check
For information on using Play Integrity, the default attestation provider, see Get started using App Check with Play Integrity on Android .
If you haven't already, integrate the Places SDK into your app .
Next, initialize App Check and the Places client .
// Initialize App Check
FirebaseApp . initializeApp ( /* context= */ this );
FirebaseAppCheck firebaseAppCheck = FirebaseAppCheck . getInstance ();
firebaseAppCheck . installAppCheckProviderFactory (
PlayIntegrityAppCheckProviderFactory . getInstance ());
// Initialize Places SDK
Places . initializeWithNewPlacesApiEnabled ( context , API_KEY );
PlacesClient client = Places . createClient ( context );.
Step 3: Add the token provider
After initializing the Places API, call setPlacesAppCheckTokenProvider() to set the PlacesAppCheckTokenProvider .
Places . initializeWithNewPlacesApiEnabled ( context , API_KEY );
Places . setPlacesAppCheckTokenProvider ( new TokenProvider ());
PlacesClient client = Places . createClient ( context );.
Here is a sample implementation of the token fetcher interface:
/** Sample client implementation of App Check token fetcher interface. */
static class TokenProvider implements PlacesAppCheckTokenProvider {
@Override
public ListenableFuture<String> fetchAppCheckToken () {
SettableFuture<String> future = SettableFuture . create ();
FirebaseAppCheck . getInstance ()
. getAppCheckToken ( false )
. addOnSuccessListener (
appCheckToken - > {
future . set ( appCheckToken . getToken ());
})
. addOnFailureListener (
ex - > {
future . setException ( ex );
});
return future ;
}
}
Step 4: Enable debugging (optional)
If you'd like to develop and test your app locally, or run it in a continuous integration (CI) environment, you can create a debug build of your app that uses a debug secret to obtain valid App Check tokens. This lets you avoid using real attestation providers in your debug build.
To run your app in an emulator or on a test device:
Add the App Check library to your build.gradle file.
Configure App Check to use the debug provider factory in your debug build.
Launch the app, which will create a local debug token. Add this token to the Firebase console.
For more information and instructions, see the App Check documentation .
To run your app in a CI environment:
Create a debug token in the Firebase console and add it to your CI system's secure key store.
Add the App Check library to your build.gradle file.
Configure your CI build variant to use the debug token.
Wrap code in your test classes that needs an App Check toke with DebugAppCheckTestHelper .
For more information and instructions, see the App Check documentation .
Step 5: Monitor your app requests and decide on enforcement
Before you begin enforcement, you'll want to make sure that you won't disrupt legitimate users of your app. To do this, visit the App Check metrics screen to see what percentage of your app's traffic is verified, outdated, or illegitimate. Once you see that the majority of your traffic is verified, you can enable enforcement.
See the Firebase App Check documentation for more information and instructions.
Before you enforce App Check, make sure any Web Service calls in your Cloud project use OAuth .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["App Check protects Google Maps Platform API keys by verifying requests originate from legitimate apps. Implementation involves: adding Firebase and the App Check library, initializing App Check, adding a token provider, optionally enabling debugging for testing, and monitoring app request metrics before enabling enforcement. App Check is not needed for the original Places SDK, private apps, or server-to-server communication. Play Integrity is the recommended attestation provider. Enforcement blocks requests without valid tokens.\n"]]
