---
title: "Create and use map styles \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles
  title: "Create and use map styles \_|\_ Maps SDK for Android \_|\_ Google for Developers"
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
Create and use map styles
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Cloud-based map styling requires the latest Maps SDK for Android renderer for implementation.
Map styles are customizations applied via a map ID, requiring association for usage in applications.
Styles exist in published (live) and draft (work-in-progress) states, with new styles automatically published upon creation.
You can create new styles, duplicate existing ones or versions, or import JSON styling for customization.
Managing styles involves updating details, associating with map IDs for application use, and restoring previous versions if needed.
Select platform:
Android
iOS
JavaScript
Web Service
To use cloud-based maps styling on Android, you must use the
latest renderer for Maps SDK for Android.
Follow these instructions .
Features in this document marked with the science science icon are in Preview (Pre-GA) .
A map style is a set of visual customizations to map features
that you associate with a map ID. You then reference the
map ID in your application code to display the customized map.
You can create a map style before you have a map ID; however, to use
the style, you must associate the style with a map ID. To use a map style,
you must take all of these steps:
Create and publish a map Style . For details, see
Create a style and Publish a style .
Create a map ID . For details, see
Create a map ID .
Associate the map style with a map ID . For details, see
Associate a map ID to a map style .
Add the map ID to your app to display your style. For details, see
Add the map ID to your map .
Tip : Once the map ID is in your
application code, you can change the map style without any
changes in your application code, and your end users don't have to
upgrade to see updated map styles.
Instead, you edit the map style associated with the
map ID, and changes show up in your application maps.
This document describes how to create, edit, and publish map styles and how to
associate them to a map ID.
Create a map style
Create a map style using one of these methods:
Create a new style using the default Google map style.
Copy and modify an existing customized style.
Import a JSON map style to use as a customized style.
Create a new style
In the Google Cloud console,
go to
Map Styles , and select a project, if needed.
In Map styles , click Create style .
In the dialog, under the Google styles tab, select a mode.
Light creates a light themed style, ideal for bright or outdoor environments.
science Dark creates a dark themed style, ideal for low light environments.
For more information about light and dark mode styles, see Learn about modes and map types .
(Optional) To apply the monochrome variation to your map style, select Monochrome .
Alternatively, you can click the JSON tab to import a JSON map style .
Select Customize to create a new untitled style.
Select map features and change their style to create the map style you want.
Map features with custom styles have a solid blue dot next to them. If you
customize a child style, the parent style displays a blue circle. For more
information on map style hierarchy, see
Understand map style inheritance and hierarchy .
Note: Not all styles appear at all zoom levels. For more information, see Style zoom levels .
Click Save .
In the Save and publish map style box, enter a name for your style and
optionally a description, and click Save .
The style is automatically published, and you see the style details page for
your new style.
Caution: Making style changes but not explicitly saving them creates
Unsaved Changes in your map style's version history. These versions
are lost when you close the browser tab or when your
Cloud console session ends.
Copy a style
Go to
Map Styles , and select a project, if needed.
Select one of your existing styles.
On the style page, click Make a copy .
In the Make a copy dialog, enter a new map style name and optionally
a description.
science (Optional) To create the complementary light or dark mode
version of the copied style, select the checkbox in the Style mode
options section.
Click Save .
The style is automatically published, and you can see your new style's
main page. Associate it with a map ID to use it for your maps. For details,
see Associate a map ID to a map style .
If you want to modify the style, click Customize , make changes,
and click Save .
Publish a style
When you first create a new map style, that first instance of
the new map style is automatically published. After that, you save changes
as a draft and when you're happy with the changes, you must publish.
Make the changes to the map style or duplicated map style. For details, see
Change a style .
Click Save to save changes as a draft.
When you're ready to publish and have your changes go live for any map IDs
using that map style, click Publish .
Published versus Draft map styles
Published : A published map style is live. Any maps that use the map style
display the published version of it.
Note: Style changes can take a few hours to propagate to your apps
websites, and apps can take longer if the devices aren't connected to
the internet. If you're still not seeing your style changes after a
few hours, see My style changes aren't updating .
Draft : Draft versions of a map style are works in progress
and aren't displayed in maps until you publish them.
Change a style
If you want to make changes to your map style, you can make the changes right
in the style editor. You have a couple of choices when you update a style:
If you want changes to go live as soon as you're ready : Click
Customize and make your changes. Click Save to save your
changes as a draft, and then click Publish when you are ready.
If you want to test your changes in a test environment first : Instead of
making changes directly in the map style, duplicate the style first. For
details, see Copy a style and
Test map style updates .
Once you've created a map style, you can make changes to it on the style's
detail page in any of the following ways:
Edit : Click Customize .
Make a copy : For details, see Copy a style .
Rename : Rename the map style.
Delete : Delete the map style.
Use data-driven styling and datasets
In the style details page, you can enable and view layers for
data-driven styling for boundaries and
data-driven styling for datasets on light mode styles.
When you link a light mode style that has data-driven styling or datasets enabled
to a map ID , the enabled layers are also available for
the science dark mode style.
To use data-driven styling or datasets with a science dark mode style,
you must do the following in the Google Cloud console:
Go to Map Styles and either select a light mode style or
create one .
In the style details page, enable your choice of layers on the light mode
style.
Associate the light mode style to the same map
ID as the dark mode style.
Associate your style to a map ID
Associate your style to a map ID to display your custom style on your website
and in your app. A map ID can have only one light mode style and one
science dark mode style associated with it.
To change the associated styles for a map ID, do the following in the
Google Cloud console:
Go to Map Management and select a map ID.
In the Map styles section, click edit Edit for light or science
dark mode.
In the panel, select a style to associate to this map ID.
Note: The panel displays only styles with a light style type for light mode,
and only styles with a science dark style type for dark mode.
Click Done .
science (Optional) Apply your style to different map types.
By default, your style is applied to all the available map types ( roadmap ,
navigation , terrain , hybrid , 3D roadmap , 3D hybrid ). To apply
your style to specific map types, click
expand_more Show more and select the
checkbox for each map type listed for both light and dark modes. To apply the
default Google map style for that mode instead, clear the checkbox for a map
type.
For more information about map types, see
Learn about modes and map types .
Click Save to apply all changes.
To use your cloud-based map style,
add the map ID to your app .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
