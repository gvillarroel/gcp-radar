---
title: "Test style updates \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/test-style-updates
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/test-style-updates
  title: "Test style updates \_|\_ Maps SDK for Android \_|\_ Google for Developers"
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
Maps SDK for Android
Guides
Send feedback
Test style updates
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Cloud-based map styling updates can be tested before applying them to production environments to ensure desired visual results.
The process involves duplicating the production style, making and publishing changes, associating it with a separate map ID for testing, and finally applying the tested style to the production map ID.
Style changes may take some time to propagate to all users due to caching and internet connectivity.
For Android, ensure you're using the latest Maps SDK renderer for compatibility.
Legacy style updates have a different checking process outlined in the documentation.
Select platform:
Android
iOS
JavaScript
Web Service
To use cloud-based maps styling on Android, you must use the
latest renderer for Maps SDK for Android.
Follow these instructions .
When you want to update a style that is being used in production, you
may want to test your style updates first.
Make a copy of the production map style.
In the copied map style, make your changes and publish.
If the copied style has just been updated, check the updated
styles to make sure they look as expected. Map features with custom styles
have a solid blue dot next to them. Expand all map features to find all
changes.
Associate the copied map style with a different map ID that you can use
to test the style in your staging environment.
Test your style changes in your staging environment.
When you are happy with the results, associate the copied map style
with your production map ID.
Note: A copied map style does not retain the versions of the style
it copied. If you want to maintain the style history, you can instead
take your tested changes from the copied map style and make them to the
original map style. Note: Style changes can take a few hours to propagate to your apps
websites, and apps can take longer if the devices aren't connected to
the internet. If you're still not seeing your style changes after a
few hours, see My style changes aren't updating .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To test map style updates, duplicate the production map style, make and publish changes within the copy. Associate this new style with a distinct map ID for staging environment testing. After validating changes, link the updated style to your production map ID. Note that duplicated styles don't retain version history. Style updates can take hours to appear, and device internet connection can affect propagation time. For legacy map styles, follow separate instructions.\n"]]
