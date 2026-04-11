---
title: "Troubleshoot \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/troubleshoot
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/troubleshoot
  title: "Troubleshoot \_|\_ Maps SDK for Android \_|\_ Google for Developers"
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
Troubleshoot
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This troubleshooting guide addresses common issues encountered when using cloud-based map styling in Google Maps Platform.
Solutions are provided for problems related to style updates, preview map display, text clarity, color accuracy, and unintended feature styling.
Legacy cloud styling access is limited to projects that previously opted out and still have legacy styles.
The latest known issues and release notes for cloud-based map styling are available in separate documentation.
Users can report bugs and feature requests through provided links to Google's issue tracker.
Select platform:
Android
iOS
JavaScript
Web Service
To use cloud-based maps styling on Android, you must use the
latest renderer for Maps SDK for Android.
Follow these instructions .
This document describes common issues that might occur when setting up your
map style, and how to resolve them.
Click to file a
Bug
or Feature Request .
Known issues
To see the latest known issues with cloud-based maps styling, see
the release notes .
Messages
Here are some messages you might see and their solutions:
A map styles property cannot be set when a mapId is present.
You cannot use map IDs and styles at the same time. Instead, edit the style
associated with the map ID using the Cloud console. See also
I get an error trying to load my map style .
The style editor can't be loaded right now
The preview map uses a vector map. In cases when vector maps cannot
be loaded on your web browser, it falls back to a "no map" experience:
If you run into this issue, try the following:
Check your browser settings to make sure hardware acceleration is enabled.
Check if your device is supported by visiting
get.webgl.org . If the demo does not
run, your browser or device may not be compatible with WebGL. Make sure your
device's drivers/browser combination is not subject to the denylist rules
defined in the Khronos WebGL wiki .
Update your graphics card and make sure that your device has a video
graphics card (GPU) that supports WebGL. See Application and website
requirements .
For additional support, see GMP WebGL support .
Style issues
You might see the following messages displayed after creating or updating
a style.
My style changes aren't updating in my apps or website
Style changes can take a few hours to propagate to your apps and websites, and
apps can take longer if the devices aren't connected to the internet. If you're
still not seeing your style changes after a few hours, check the following
things:
Make sure you've published your style update.
If you made your changes in a duplicated style, make sure you've associated
your map ID with the duplicated style. For details, see
Associate or remove map IDs on your style .
I can't see my style changes on the preview map
If you make a change, and can't see the change on the preview map, here
are some things to try.
Check for style overlaps : For details, see
Manage styles that overlap .
Check for style inheritance overrides : Check to see if there is a
custom child style underneath the style you're setting that is overriding
its parent style. For details on style inheritance, see
Understand map style inheritance and hierarchy .
Change the map zoom level : It's possible that the map features you are
styling are not visible in the map at the current zoom level.
Zoom in : If you are sure the feature is present on the map,
zoom in to a more detailed view and it may appear.
Zoom out : With some large map features, you may need to zoom out
until the detailed map features drop out before your styling shows up.
My text looks blurry or out of focus
If the colors you've chosen for your fill and stroke for text don't have
enough contrast, the font looks bold and fuzzy because the stroke (outline)
and fill merge together. Select colors that have enough contrast.
My style looks dull or the wrong color
The map feature you are styling may overlap with one or more other map
features. For assistance, see Manage styles that overlap .
The wrong map features are being styled
If you are seeing map features that match the style you've set, it may be that
the default map style for those map features are the same as the style you're
setting. Here are some things to try:
Turn off visibility for the map feature that matches . For example,
if you are trying to set Winery to a dark red, and notice that Emergency
POIs are red, which could be confusing for your users. You can choose to
turn off visibility for Emergency POIs to avoid this confusion.
Change the style of the map features that you don't want to match .
the example above, you could also choose to style Emergency POIs to orange
to avoid confusion.
I get an error trying to load my map style
You cannot use map IDs and styles at the same time. You can do one of the
following:
Recommended : Remove the map style, and edit the style associated with
the map ID using the Cloud console. With this method, you can create one
style that applies to all platforms. For details, see
Associate a style with a map ID .
Remove the map ID, and edit the style for each app platform using
Add a styled map .
Since JSON styling is platform-specific, you need to create the style for each
app platform on which you display the styled maps.
If you already have a JSON map style that you want to use for cloud-based
maps styling, you can import it. For details, see
Import a JSON map style .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
