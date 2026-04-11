---
title: "Create an advanced marker \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/advanced-markers/add-marker
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/advanced-markers/add-marker
  title: "Create an advanced marker \_|\_ Maps SDK for Android \_|\_ Google for Developers"
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
Create an advanced marker
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Advanced markers can be added to a map by creating an AdvancedMarkerOptions instance and using GoogleMap.addMarker() .
Customize advanced marker properties, such as background color, border color, and glyph, by creating and configuring a PinConfig instance.
Use the AdvancedMarkerOptions.iconView() method to utilize any Android View as the marker, offering complete customization control but potentially impacting performance.
When using a View as a marker, manipulate the Marker itself for operations like rotation instead of directly modifying the View .
Further customization options include changing the background and border colors, setting the glyph, and hiding the glyph for a filled background.
Select platform:
Android
iOS
JavaScript
To add advanced markers to a map, create a new instance of
AdvancedMarkerOptions
and then use
GoogleMap.addMarker()
to add the marker:
Kotlin
private val SYDNEY = LatLng ( - 33.87365 , 151.20689 )
val marker : Marker? = map . addMarker (
AdvancedMarkerOptions ()
. position ( SYDNEY )
. iconView ( textView )
. zIndex ( zIndex )
)
Java
private final LatLng SYDNEY = new LatLng ( - 33.87365 , 151.20689 );
Marker marker = map . addMarker (
new AdvancedMarkerOptions ()
. position ( SYDNEY )
. iconView ( textView )
. zIndex ( zIndex ));
GoogleMap.addMarker() returns an instance of
Marker .
If necessary, you can cast the returned value to
AdvancedMarker .
Use AdvancedMarkerOptions to configure advanced markers.
AdvancedMarkerOptions is a subclass of
MarkerOptions
so it supports all the same settings as MarkerOptions .
AdvancedMarkerOptions also lets you:
Create an instance of the
PinConfig
class, and then use the PinConfig
instance to configure the AdvancedMarkerOptions instance.
Use PinConfig to customize advanced marker properties, such as the
background color, border color, and glyph.
Create an instance of the Android
View class
and use that instance to configure the AdvancedMarkerOptions instance.
The View instance lets you fully customize the marker.
Use PinConfig
The PinConfig class contains options to customize
advanced markers. Use PinConfig to:
Change the background color
Change the border color
Change the glyph color or add text
Hide the glyph
Figure 1 : The parts of an Advanced Marker.
Use PinConfig.Builder
to create an instance of PinConfig :
Kotlin
// Use PinConfig.Builder to create an instance of PinConfig.
val pinConfigBuilder : PinConfig . Builder = PinConfig . builder ()
pinConfigBuilder . setBackgroundColor ( Color . MAGENTA )
val pinConfig : PinConfig = pinConfigBuilder . build ()
// Use the PinConfig instance to set the icon for AdvancedMarkerOptions.
val advancedMarkerOptions : AdvancedMarkerOptions = AdvancedMarkerOptions ()
. icon ( BitmapDescriptorFactory . fromPinConfig ( pinConfig ))
. position ( MARKER_POSITION )
// Pass the AdvancedMarkerOptions instance to addMarker().
val marker : Marker? = map . addMarker ( advancedMarkerOptions )
Java
// Use PinConfig.Builder to create an instance of PinConfig.
PinConfig . Builder pinConfigBuilder = PinConfig . builder ();
pinConfigBuilder . setBackgroundColor ( Color . MAGENTA );
PinConfig pinConfig = pinConfigBuilder . build ();
// Use the PinConfig instance to set the icon for AdvancedMarkerOptions.
AdvancedMarkerOptions advancedMarkerOptions =
new AdvancedMarkerOptions ()
. icon ( BitmapDescriptorFactory . fromPinConfig ( pinConfig ))
. position ( MARKER_POSITION );
// Pass the AdvancedMarkerOptions instance to addMarker().
Marker marker = map . addMarker ( advancedMarkerOptions );
Change the background color
Use the PinConfig.background() method to change the background color of a
marker:
Kotlin
// Use PinConfig.Builder to create an instance of PinConfig.
val pinConfigBuilder : PinConfig . Builder = PinConfig . builder ()
pinConfigBuilder . setBackgroundColor ( Color . MAGENTA )
val pinConfig : PinConfig = pinConfigBuilder . build ()
Java
// Use PinConfig.Builder to create an instance of PinConfig.
PinConfig . Builder pinConfigBuilder = PinConfig . builder ();
pinConfigBuilder . setBackgroundColor ( Color . MAGENTA );
PinConfig pinConfig = pinConfigBuilder . build ();
Change the border color
Use the PinConfig.borderColor() method to change the border color of a
marker:
Kotlin
// Set the border color.
val pinConfigBuilder : PinConfig . Builder = PinConfig . builder ()
pinConfigBuilder . setBorderColor ( Color . BLUE )
val pinConfig : PinConfig = pinConfigBuilder . build ()
Java
// Set the border color.
PinConfig . Builder pinConfigBuilder = PinConfig . builder ();
pinConfigBuilder . setBorderColor ( Color . BLUE );
PinConfig pinConfig = pinConfigBuilder . build ();
Change the glyph
Create a Glyph
instance and then use that instance to configure PinConfig .
Use the glyph to set the glyph text and text color, the glyph color, or to
specify a custom image to use as the glyph.
The following example sets the glyph text:
Kotlin
// Set the glyph text.
val pinConfigBuilder : PinConfig . Builder = PinConfig . builder ()
val glyphText = Glyph ( "A" )
// Alteratively, you can set the text color:
// Glyph glyphText = new Glyph("A", Color.GREEN);
pinConfigBuilder . setGlyph ( glyphText )
val pinConfig : PinConfig = pinConfigBuilder . build ()
Java
// Set the glyph text.
PinConfig . Builder pinConfigBuilder = PinConfig . builder ();
PinConfig . Glyph glyphText = new PinConfig . Glyph ( "A" );
// Alternatively, you can set the text color:
// PinConfig.Glyph glyphText = new PinConfig.Glyph("A", Color.GREEN);
pinConfigBuilder . setGlyph ( glyphText );
PinConfig pinConfig = pinConfigBuilder . build ();
Set the glyph color:
Kotlin
val glyphColor = PinConfig . Glyph ( Color . BLUE )
pinConfigBuilder . setGlyph ( glyphColor )
val pinConfig : PinConfig = pinConfigBuilder . build ()
Java
PinConfig . Glyph glyphColor = new PinConfig . Glyph ( Color . BLUE );
pinConfigBuilder . setGlyph ( glyphColor );
PinConfig pinConfig = pinConfigBuilder . build ();
Set a custom image for the glyph. This technique is useful if you want to use a
custom logo or other visual indicator in the marker.
Kotlin
// Set the glyph image.
val glyphImage : Int = R . drawable . example_image
val descriptor = PinConfig . BitmapDescriptorFactory . fromResource ( glyphImage )
pinConfigBuilder . setGlyph ( Glyph ( descriptor ))
val pinConfig : PinConfig = pinConfigBuilder . build ()
Java
// Set the glyph image.
int glyphImage = R . drawable . example_image ;
BitmapDescriptor descriptor = BitmapDescriptorFactory . fromResource ( glyphImage );
pinConfigBuilder . setGlyph ( new PinConfig . Glyph ( descriptor ));
PinConfig pinConfig = pinConfigBuilder . build ();
Hide the glyph
You can hide the glyph so that the background color fills the entire marker:
Kotlin
// Create a transparent glyph.
val pinConfigBuilder : PinConfig . Builder = PinConfig . builder ()
pinConfigBuilder . setBackgroundColor ( Color . MAGENTA )
pinConfigBuilder . setGlyph ( PinConfig . Glyph ( Color . TRANSPARENT ))
val pinConfig : PinConfig = pinConfigBuilder . build ()
Java
// Create a transparent glyph.
PinConfig . Builder pinConfigBuilder = PinConfig . builder ();
pinConfigBuilder . setBackgroundColor ( Color . MAGENTA );
pinConfigBuilder . setGlyph ( new PinConfig . Glyph ( Color . TRANSPARENT ));
PinConfig pinConfig = pinConfigBuilder . build ();
Use iconView
The AdvancedMarkerOptions.iconView() method lets you use any Android
View
as the marker. By using a view as the marker, you have complete control over the
marker.
Note: When using a View as the marker, don't perform operation on the View
to move it. Instead, modify the Marker itself. For example, to rotate the
View , use the
Marker.setRotation()
method. Don't rotate View .
In your app, you first create the view, then use the
AdvancedMarkerOptions.iconView() method to add the view to the
advanced markers.
Kotlin
// Create a TextView to use as the marker.
val textView = TextView ( this )
textView . text = "Hello!!"
textView . setBackgroundColor ( Color . BLACK )
textView . setTextColor ( Color . YELLOW )
val marker : Marker? = map . addMarker (
AdvancedMarkerOptions ()
. position ( SYDNEY )
. iconView ( textView )
)
Java
// Create a TextView to use as the marker.
TextView textView = new TextView ( this );
textView . setText ( "Hello!!" );
textView . setBackgroundColor ( Color . BLACK );
textView . setTextColor ( Color . YELLOW );
Marker marker = map . addMarker (
new AdvancedMarkerOptions ()
. position ( SYDNEY )
. iconView ( textView ));
Caution: Performance of a map view with iconView markers might not match the
performance of bitmap or default markers.
Next steps:
Collision behavior
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
