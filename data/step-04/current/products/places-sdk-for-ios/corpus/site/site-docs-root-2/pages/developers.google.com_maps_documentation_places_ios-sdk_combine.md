---
title: "Combine Library \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/combine
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/combine
  title: "Combine Library \_|\_ Places SDK for iOS \_|\_ Google for Developers"
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
Combine Library
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The GoogleMapsPlatformCombine library provides a way to use the Maps SDK for iOS and Places SDK for iOS with Apple's Combine framework for asynchronous event handling.
This library offers extensions, like fetchPlace , to classes such as GMSPlacesClient , returning Future publishers for streamlined Places API calls.
Using Combine's features with the Google Maps Platform can significantly enhance code readability and maintainability by centralizing event processing.
Installation instructions and the latest system requirements for the GoogleMapsPlatformCombine library are available on its GitHub page.
Combine is a
framework for handling asynchronous events by combining event-processing operators.
Combine makes your code easier to read and maintain by centralizing your event-processing code.
The GoogleMapsPlatformCombine library
is a Swift library that returns
Publishers
for the Maps SDK for iOS and Places SDK for iOS so that you can take advantage
of the rich set of Combine features.
Installation
See the GoogleMapsPlatformCombine library
documentation on GitHub for the latest system requirements and installation instructions.
Example Usage
The GoogleMapsPlatformCombine library provides extensions to the
GMSPlacesClient class which return
Future
publishers for Places API calls.
The following example uses the fetchPlace(id:, fields:, sessionToken:) -> Future<GMSPlace, Error>
extension to fetch place details:
GMSPlacesClient.shared()
.fetchPlace(
id : "placeId" ,
fields : [ .placeID , .name , .phoneNumber ]
)
.sink { completion in
print("Completion \(completion)")
} receiveValue : { place in
print("Got place \(place.name ?? "" )")
}
What's next
View the Combine library
GitHub project page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
