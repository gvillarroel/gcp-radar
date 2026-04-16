---
title: "Customizing the Terms and Conditions Dialog Box \_|\_ Navigation SDK for iOS\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-terms-dialog
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/customize-terms-dialog
  title: "Customizing the Terms and Conditions Dialog Box \_|\_ Navigation SDK for\
    \ iOS \_|\_ Google for Developers"
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
Resources
Send feedback
Customizing the Terms and Conditions Dialog Box
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The GMSNavigationTermsDialogUIParams object allows customization of the Terms and Conditions dialog's appearance, including background color, fonts, and text colors.
Developers can modify elements like title font, main text font, button font, and respective colors using this object.
The provided code examples demonstrate how to implement these customizations in both Swift and Objective-C.
You can use the GMSNavigationTermsDialogUIParams object to customize the look
and feel of the Terms and Conditions dialog box by changing the background
color, the fonts, and the text colors.
Example
The following code example demonstrates how to customize the look and feel of
the Terms and Conditions dialog box.
Swift
let termsUIParams = GMSNavigationTermsDialogUIParams (
backgroundColor : . brown ,
titleFont : UIFont ( name : "ChalkboardSE-Bold" , size : 18 ),
titleColor : . orange ,
mainTextFont : UIFont ( name : "MarkerFelt-Wide" , size : 18 ),
mainTextColor : . yellow ,
buttonsFont : UIFont ( name : "Arial-BoldItalicMT" , size : 14 ),
cancelButtonTextColor : . green ,
acceptButtonTextColor : . blue )
let termsAndConditionsOptions = GMSNavigationTermsAndConditionsOptions ( companyName : "Ride Sharing Co." )
termsAndConditionsOptions . title = "Some Title"
termsAndConditionsOptions . uiParams = termsUIParams
GMSNavigationServices . showTermsAndConditionsDialogIfNeeded (
with : termsAndConditionsOptions ) { termsAccepted in
if termsAccepted {
// ...
} else {
// ...
}
}
Objective-C
GMSNavigationTermsDialogUIParams * termsUIParams =
[[ GMSNavigationTermsDialogUIParams alloc ] initWithBackgroundColor : [ UIColor brownColor ]
titleFont :[ UIFont fontWithName : @"ChalkboardSE-Bold" size : 18 ]
titleColor :[ UIColor orangeColor ]
mainTextFont :[ UIFont fontWithName : @"MarkerFelt-Wide" size : 18 ]
mainTextColor :[ UIColor yellowColor ]
buttonsFont :[ UIFont fontWithName : @"Arial-BoldItalicMT" size : 14 ]
cancelButtonTextColor :[ UIColor greenColor ]
acceptButtonTextColor :[ UIColor blueColor ]];
GMSNavigationTermsAndConditionsOptions * termsAndConditionsOptions = [[ GMSNavigationTermsAndConditionsOptions alloc ] initWithCompanyName : @"Ride Sharing Co." ];
termsAndConditionsOptions . title = @"Some Title" ;
termsAndConditionsOptions . uiParams = termsUIParams ;
[ GMSNavigationServices
showTermsAndConditionsDialogIfNeededWithOptions : termsAndConditionsOptions
callback : ^ ( BOOL termsAccepted ) {
if ( termsAccepted ) {
// …
} else {
// …
}
}];
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The `GMSNavigationTermsDialogUIParams` object customizes the Terms and Conditions dialog's appearance. You can modify the background color, fonts, and text colors. Create a `GMSNavigationTermsDialogUIParams` instance, setting desired properties like `backgroundColor`, `titleFont`, and button text colors. Then, create `GMSNavigationTermsAndConditionsOptions`, set `uiParams`, company name and the title. Finally, use `GMSNavigationServices.showTermsAndConditionsDialogIfNeeded` to display the dialog and handle user acceptance.\n"]]
