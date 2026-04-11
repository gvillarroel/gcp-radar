---
title: "Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit
  title: "Places SDK for iOS \_|\_ Google for Developers"
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
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Basic Place Autocomplete component
The Basic Place Autocomplete component of the Places UI Kit lets you add an individual UI component that returns a place ID when a user selects a place. The component is a full screen cover that provides a search bar for users to enter a query. As the user types, a list of autocomplete results will be shown below the search bar. When the user taps on a place, a place object with only place ID is returned to the developer. This component is customizable.
The component takes geographic bounds and other search parameters through the AutocompleteFilter struct.
The response provides a Place struct with only the placeID field populated.
The Basic Place Autocomplete component has the following customization options: list density, and whether to include location icons. Use the AutocompleteUICustomization struct to customize the component.
You can use the Basic Place Autocomplete component independently or in conjunction with other Google Maps Platform APIs and services.
Billing
You are billed each time the component is opened and a query is made. You won't be billed again for that session unless the session expires or a place is selected from the list.
Add the Basic Autocomplete component to your app
Set the autocomplete filter parameters (for example, the types to return, the country to limit results to, the region coordinates for results, and distance information if the users origin is set) as you would to use Place Autocomplete (New) without the Places UI Kit. See the Place Autocomplete (New) documentation for full instructions and an example of the code to create an autocomplete filter .
Once you've created your autocomplete filter, you can create a struct with your UI customizations. See customization options and instructions .
Then, create a button that will launch your customized Basic Autocomplete component.
Swift
Button ( "Search for a place" ) {
showWidget . toggle ()
}
. basicPlaceAutocomplete (
show : $ showWidget
// ...
)
See the full example .
Customize the Basic Autocomplete component
Customize content
List density
You can choose to either display a two-line list or a multiline list. Use the options in AutocompleteListDensity ( .twoLine or .multiLine ) in the AutocompleteUICustomization class. If you don't specify the list density, the component will display a two-line list.
Location icon
You can choose whether to display a default place icon on the results list. Use the options in AutocompleteUIIcon ( .defaultIcon or .noIcon ) in the AutocompleteUICustomization class.
Customize the theme
You can specify a theme that overrides any of the default style attributes. You can customize the colors, typography, spacing, borders, and corners of your Place Details component. The default is PlacesMaterialTheme .
Any theme attributes that are not overridden use the default styles.
The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes. To customize the dark theme, add values for .dark and attribution.darkModeColor to your custom theme .
See the Custom styling section for more information on theming.
Add content and theme customizations to the Basic Autocomplete component
Use the AutocompleteUICustomization class to customize the Basic Autocomplete component.
Swift
let uiCustomization = AutocompleteUICustomization (
listDensity : . multiLine ,
listItemIcon : . noIcon ,
theme : PlacesMaterialTheme ()
)
Example
Add a Basic Autocomplete component
Important: Set the initial value of showWidget to false in order to have your customized component appear when the user clicks the button.
This example creates a custom Basic Autocomplete component with a button. The default icon, two-line list density, and custom theme have been set. The autocomplete filter is set to find accounting-related Places in and near Las Vegas.
Swift
// Note: You must provide an API key in your app entry point first.
// A demo view of the basic place autocomplete widget.
public struct BasicPlaceAutocompleteView : View {
@ State private var fetchedPlace : Place ?
@ State private var placesError : PlacesError ?
@ State private var showWidget = false
public var body : some View {
let types : Set<PlaceType> = [. accounting ]
let countries : Set<String> = [ "US" ]
let origin = CLLocation ( latitude : 36.19030535579595 , longitude : - 115.25397680618019 )
let coordinateRegion = RectangularCoordinateRegion (
northEast : CLLocationCoordinate2D (
latitude : 36.25290087640495 , longitude : - 115.08025549571225 ),
southWest : CLLocationCoordinate2D ( latitude : 36.06607422287787 , longitude : - 115.33431432920293 )
)
let regionCode = "US"
let inputOffset = 10
let filter = AutocompleteFilter (
types : types ,
countries : countries ,
origin : origin ,
coordinateRegionBias : coordinateRegion ,
regionCode : regionCode )
let uiCustomization = AutocompleteUICustomization (
listDensity : . multiLine ,
listItemIcon : . noIcon ,
theme : PlacesMaterialTheme ()
)
VStack {
Button ( "Search for a place" ) {
showWidget . toggle ()
}
. basicPlaceAutocomplete (
filter : filter ,
uiCustomization : uiCustomization ?? AutocompleteUICustomization (),
show : $ showWidget ,
onSelection : { place in
guard let placeID = place . placeID else {
self . placesError = . internal (
"Could not fetch place details because place ID from selected suggestion not found."
)
return
}
Task {
let placesClient = await PlacesClient . shared
let fetchPlaceRequest = FetchPlaceRequest (
placeID : placeID ,
placeProperties : [. displayName , . formattedAddress ]
)
switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) {
case . success ( let place ):
print ( "Fetched place: \( place ) " )
self . fetchedPlace = place
case . failure ( let placesError ):
print ( "Failed to fetch place: \( placesError ) " )
self . placesError = placesError
}
}
},
onError : { placesError in
self . placesError = placesError
}
)
if let placesError = $ placesError . wrappedValue {
Text ( placesError . localizedDescription )
. frame ( maxWidth : . infinity , alignment : . leading )
} else if let fetchedPlace = $ fetchedPlace . wrappedValue {
Text ( " \( fetchedPlace ) " )
. frame ( maxWidth : . infinity , alignment : . leading )
}
}
}
}
Customize the theme
Swift
@ Environment ( \ . colorScheme ) var colorScheme
var theme : PlacesMaterialTheme {
if customTheme {
var theme = PlacesMaterialTheme ()
var color = PlacesMaterialColor ()
color . surface = ( colorScheme == . dark ? . blue : . gray )
color . outlineDecorative = ( colorScheme == . dark ? . white : . black )
color . onSurface = ( colorScheme == . dark ? . yellow : . red )
color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue )
color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red )
color . secondaryContainer = ( colorScheme == . dark ? . green : . purple )
color . positive = ( colorScheme == . dark ? . yellow : . red )
color . primary = ( colorScheme == . dark ? . yellow : . purple )
color . info = ( colorScheme == . dark ? . yellow : . purple )
var shape = PlacesMaterialShape ()
shape . cornerRadius = 10
var font = PlacesMaterialFont ()
font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 ))
font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 ))
font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 ))
font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 ))
font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 ))
var attribution = PlacesMaterialAttribution ()
attribution . lightModeColor = . black
attribution . darkModeColor = . white
theme . color = color
theme . shape = shape
theme . font = font
theme . attribution = attribution
} else {
return PlacesMaterialTheme ()
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
