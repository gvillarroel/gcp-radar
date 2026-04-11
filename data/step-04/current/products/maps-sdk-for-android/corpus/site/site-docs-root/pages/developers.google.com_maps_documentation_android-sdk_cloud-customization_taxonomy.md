---
title: "What you can style on the map \_|\_ Maps SDK for Android \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/taxonomy
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/taxonomy
  title: "What you can style on the map \_|\_ Maps SDK for Android \_|\_ Google for\
    \ Developers"
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
What you can style on the map
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Map features are arranged hierarchically, allowing customization by inheriting styles from the base map, parent features, or overriding them for specific features or zoom levels.
You can customize the visibility, fill color, stroke color, stroke width, icon color, text fill color, and text stroke color of various map features.
Some features like political boundaries and 3D buildings have limited styling options to maintain their meaning or visual representation.
The platform provides styling options for various categories like points of interest, political boundaries, infrastructure, and natural elements.
Customization options are available for specific elements within each category, for example, under "Points of Interest," you can customize styles for "Emergency," "Entertainment," and other subcategories.
Select platform:
Android
iOS
JavaScript
Web Service
The map features you can customize are arranged in a hierarchy, and each map
feature has one or more style elements that you can customize. Most top-level
features have one or more child map features. You have several options when
customizing map styles:
Inherit from the base map style : If you don't customize a style element
for a map feature, it inherits the default style from the base map.
Inherit from parents : Customize a style element on a parent map feature,
to have all un-customized child map features below inherit the styles from
their parent.
Override the parent style : Customize a style element on a child map
feature to override the parent style for that element.
Customize zoom levels : For some map features, you can customize style
elements for different zoom levels. For details, see Style zoom
levels .
What you can style for each map feature
Map features can have one or more of the following style elements that you can
customize, depending on the type of map feature:
Visibility : Whether to show or hide this feature on the map.
Fill color : Fill color for polygons and polylines.
Stroke color : Outline color for polygons and polylines.
Stroke width : Thickness of the outline for polygons and polylines.
Results may vary depending on the zoom level. If you don't want an outline,
set the Stroke color to be the same as the Fill color, or set the Stroke
width to 0.
Icon color : Fill color for the icons.
Text fill color : Fill color for text labels.
Text stroke color : Outline color for text labels.
Note: Stroke color and Stroke width customizations are not available for all
map features. For details, see
Polygons and Polylines .
Map feature visibility
When you hide map features or make them transparent, you may expose boundary
inaccuracies. Map feature boundaries are not always precise, but are adjusted to
look correct when all layers are visible. To learn more about how map layers
affect each other, see Manage styles that overlap .
There are two ways to show or hide map features: visibility and opacity.
Visibility
To either display or hide a map feature on your map, use the Visibility
style element. For more details, see
Filter which map features to display .
Note: Not all map features are shown on the map at all zoom levels. To see the
map feature displayed or hidden, you may need to zoom in or out.
Opacity
You can also make a map feature transparent by adjusting the opacity of the
following style elements: Fill color, Stroke color, Text fill color, and Text
stroke color.
When you adjust the opacity of a map feature, its appearance depends on the map
features underneath. To avoid unexpected style changes, set a custom style for
all overlapping features.
Note: Opacity is not available for all map features.
Polygons and Polylines
For map feature types that are represented with a shape, such as Beach, Country,
and Town square, or a line, such as Railway track, Highway, and Trail, you can
typically style the following elements: Visibility, Fill color, Stroke color,
and Stroke width.
Polygon styling customization example - for Reservation feature type
Polyline styling customization example - for Highway feature type
Stroke color and Stroke width customizations are not available for the
following map features:
Political map features: Their style conveys meaning on the map, such
as indicating the type of territory. The political map features are
Country , Border , State or province , and Sublocality .
3D style buildings.
Icons and Text Labels
For map feature types that are fully or partially represented with a label, such
as Point of interest or Transportation, you can usually style the following
elements: Visibility, Icon color, Text fill color, and Text stroke color.
Label text and icon styling customizations example
Map feature hierarchy
These tables for the top level map features show what child map features are
available under each.
Point of interest
Emergency
Fire
Hospital
Pharmacy
Police
Entertainment
Arts
Casino
Cinema
Historic
Museum
Theme park
Tourist attraction
Food and drink
Bar
Cafe
Restaurant
Winery
Landmark
Lodging
Recreation
Beach
Boating
Fishing
Golf course
Hot spring
Nature reserve
Park
Peak
Sports complex
Sports field
Trailhead
Zoo
Retail
Grocery
Shopping
Service
ATM
Bank
Car rental
EV charging
Gas station
Parking lot
Post office
Rest stop
Restroom
Transit
Airport
Other
Bridge
Cemetery
Government
Library
Military
Place of worship
School
Town square
Political
Country
Border
Reservation
State or province
City
Sublocality
Neighborhood
Land parcel
Infrastructure
* Road detail map features are only available on Google Maps Platform products that have road level details enabled. For more information, see Road level details for Google Maps Platform .
Building
Commercial
Business corridor
Road network
No traffic
Pedestrian mall
Trail
Paved
Unpaved
Parking aisle
Ramp
Road shield
Road sign
Road
Arterial
Highway
Local
No outlet
Road detail *
Surface
Crosswalk
Sidewalk
Intersection
Direction arrow
Railway track
Commercial
Commuter
Transit station
Bicycle share
Bus station
Ferry terminal
Funicular station
Gondola station
Monorail
Rail station
Subway station
Tram station
Urban area
Natural
† Land cover map features are rough approximations based on satellite imagery colors and may not accurately reflect real-world conditions.
Continent
Archipelago
Island
Land
Land cover †
Crops
Dry crops
Forest
Ice
Sand
Shrub
Tundra
Water
Ocean
Lake
River
Other
Base
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
