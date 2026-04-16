---
title: "Customize the Terms and Conditions dialog box \_|\_ Navigation SDK for Android\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/customize-terms
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/customize-terms
  title: "Customize the Terms and Conditions dialog box \_|\_ Navigation SDK for Android\
    \ \_|\_ Google for Developers"
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
Resources
Send feedback
Customize the Terms and Conditions dialog box
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The TermsAndConditionsUIParams object allows customization of the Terms and Conditions dialog's appearance, including background color, fonts, and text colors.
Developers can modify elements like title, main text, and button styles using the provided builder methods and parameters within the TermsAndConditionsUIParams object.
The example code showcases how to create and apply a customized TermsAndConditionsUIParams object to the Terms and Conditions dialog using the NavigationApi.showTermsAndConditionsDialog method.
You can use the TermsAndConditionsUIParams object to customize the look and
feel of the Terms and Conditions dialog box by changing the background color,
the fonts, and the text colors.
Example
The following code example demonstrates how to customize the look and feel of
the Terms and Conditions dialog box.
TermsAndConditionsUIParams uiParams = TermsAndConditionsUIParams.builder()
.setBackgroundColor(Color.WHITE)
.setTitleColor(Color.BLACK)
.setTitleTypeface(Typeface.DEFAULT)
.setTitleTextSize(20)
.setMainTextColor(Color.BLACK)
.setMainTextTypeface(Typeface.DEFAULT)
.setMainTextTextSize(20)
.setButtonsTypeface(Typeface.DEFAULT)
.setButtonsTextSize(20)
.setAcceptButtonTextColor(Color.BLACK)
.setCancelButtonTextColor(Color.BLACK)
.build();
NavigationApi.showTermsAndConditionsDialog(
getActivity(),
"Your Company Name",
"Your title",
uiParams,
null,
TermsAndConditionsCheckOption.ENABLED);
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
