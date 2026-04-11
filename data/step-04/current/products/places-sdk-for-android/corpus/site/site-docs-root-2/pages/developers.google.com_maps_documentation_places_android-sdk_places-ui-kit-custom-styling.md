---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling
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
Customizeable style properties
Visual customization examples
You can customize the colors, typography, spacing, borders, and corners of these Places UI kit components and non-UI kit features:
Place Details component
Place Search component
Basic Place Autocomplete component
Non-UI Kit Place Autocomplete widget
Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications). See Material Design's reference for Color and Typography . By default, the style adheres to the Google Maps visual design language.
Use the Customization tool to visualize custom configurations in a Places UI Kit element. The Code tab provides configurations in HTML/CSS, Kotlin/XML, and Swift.
Important: When making visual modifications, you must adhere to the Google Maps attribution requirements .
When instantiating a fragment, you can specify a theme that overrides any of the default style attributes. Any theme attributes that are not overridden use the default styles.
< style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" >
< item name = "placesColorPrimary" > @color / app_primary_color < / item >
< item name = "placesColorOnSurface" > @color / app_color_on_surface < / item >
< item name = "placesColorOnSurfaceVariant" > @color / app_color_on_surface < / item >
< item name = "placesTextAppearanceBodySmall" > @style / app_text_appearence_small < / item >
< item name = "placesCornerRadius" > 20 dp < / item >
< / style >
Important: The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes. To create a dark theme, add an entry for the colors in values-night/colors.xml
Customization tool
Use this tool to visualize custom configurations in a Places UI Kit element. The Code tab provides configurations in HTML/CSS, Kotlin/XML, and Swift.
Style properties
You can customize the following styles:
Theme attribute
Usage
Color
placesColorSurface
Container and dialog background
placesColorOutlineDecorative
Container border
placesColorPrimary
Links, loading indicator, overview icons
placesColorOnSurface
Headings, dialog content
placesColorOnSurfaceVariant
Place information
placesColorSecondaryContainer
Button background
placesColorOnSecondaryContainer
Button text and icon
placesColorNeutralContainer
Review date badge, loading placeholder shapes
placesColorOnNeutralContainer
Review date, loading error
placesColorPositiveContainer
Available EV charger badge
placesColorOnPositiveContainer
Available EV charger badge content
placesColorPositive
Place "Open" now label
placesColorNegative
Place "Closed" now label
placesColorInfo
Accessible entrance icon
placesColorButtonBorder
Open in maps and OK buttons
Typography
placesTextAppearanceBodySmall
Place information
placesTextAppearanceBodyMedium
Place information, dialog content
placesTextAppearanceLabelMedium
Badge content
placesTextAppearanceLabelLarge
Button content
placesTextAppearanceHeadlineMedium
Dialog headings
placesTextAppearanceDisplaySmall
Place name
placesTextAppearanceTitleSmall
Place name
Spacing
placesSpacingExtraSmall
placesSpacingSmall
placesSpacingMedium
placesSpacingLarge
placesSpacingExtraLarge
placesSpacingTwoExtraLarge
Measurement
placesBorderWidth
Container
placesBorderWidthButton
Shape
placesCornerRadius
Container
placesCornerRadiusButton
Open in Maps and OK buttons (excludes round icon button)
placesCornerRadiusThumbnail
Place thumbnail image
placesCornerRadiusCollageOuter
Media collage
placesCornerRadiusCard
Place card, User review card
placesCornerRadiusDialog
Google Maps disclosure dialog
Google Maps Brand Attribution
placesColorAttributionLightTheme
Light theme Google Maps attribution and disclosure button (enums for white, gray, and black)
placesColorAttributionDarkTheme
Dark theme Google Maps attribution and disclosure button (enums for white, gray, and black)
Attribution colors
Attribution
Google Maps' terms of service require you to use one of three brand colors for the Google Maps attribution. This attribution must be visible and accessible when customization changes have been made.
We offer 3 brand colors to choose from that can be independently set for light and dark themes:
Light theme: placesColorAttributionLight with enum values for white, gray, and black.
Dark theme: placesColorAttributionDark with enum valuesfor white, gray, and black.
Examples
This code sample shows how to create a theme that overrides the default style attributes. Any theme attributes that are not overridden use the default styles.
< style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" >
< item name = "placesColorPrimary" > @color / app_primary_color < / item >
< item name = "placesColorOnSurface" > @color / app_color_on_surface < / item >
< item name = "placesColorOnSurfaceVariant" > @color / app_color_on_surface < / item >
< item name = "placesTextAppearanceBodySmall" > @style / app_text_appearence_small < / item >
< item name = "placesCornerRadius" > 20 dp < / item >
< / style >
Full examples for each component
Place Details component styling example .
Place Search component styling example .
Basic Place Autocomplete component styling example .
Place Autocomplete widget styling example .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
