---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.778Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "AutocompleteActivityMode"
feature_slug: "autocompleteactivitymode"
latest_feature_date: "2025-09-25"
deprecation_date: "2025-09-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-types"
keywords:
  - "autocompleteactivitymode"
  - "the"
  - "type"
  - "associated"
  - "with"
  - "legacy"
  - "autocomplete"
  - "flow"
---

# AutocompleteActivityMode

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The AutocompleteActivityMode type associated with the legacy autocomplete flow is deprecated; deprecated on 2025-09-25.

## Extended Definition

The AutocompleteActivityMode type associated with the legacy autocomplete flow is deprecated; deprecated on 2025-09-25.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-types](https://developers.google.com/maps/documentation/places/android-sdk/place-types)

## Supporting Pages

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- You can also use these new types, and the existing types, in a search with Text Search.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).

### "Add Place Autocomplete to an address form \_|\_ Places SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Error: " , e ); } map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( coordinates , 15 f )); marker = map . addMarker ( new MarkerOptions () . position ( coordinates )); } private void fillInAddress ( Place place ) { AddressComponents components = place . getAddressComponents (); StringBuilder address1 = new StringBuilder (); StringBuilder postcode = new StringBuilder (); // Get each component of the address from the place details , // and then fill - in the corresponding field on the form . // Possible AddressComponent types are documented at https : // goo . gle / 32 SJPM1 if ( components != null ) { for ( AddressComponent component : components . asList ()) { String type = component . getTypes () . get ( 0 ); switch ( type ) { case "street number" : { address1 . insert ( 0 , component . getName ()); break ; } case "route" : { address1 . append ( " " ); address1 . append ( component . getShortName ()); break ; } case "postal code" : { postcode . insert ( 0 , component . getName ()); break ; } case "postal code suffix" : { postcode . append ( "-" ) . append ( component . getName ()); break ; } case "locality" : binding . autocompleteCity . setText ( component . getName ()); break ; case "administrative area level 1" : { binding . autocompleteState . setText ( component . getShortName ()); break ; } case "country" : binding . autocompleteCountry . setText ( component . getName ()); break ; } } } binding . autocompleteAddress1 . setText ( address1 . toString ()); binding . autocompletePostal . setText ( postcode . toString ()); // After filling the form with address components from the Autocomplete // prediction , set cursor focus on the second address line to encourage // entry of sub - premise information such as apartment , unit , or floor number . binding . autocompleteAddress2 . requestFocus (); // Add a map for visual confirmation of the address showMap ( place ); } private void showMap ( Place place ) { coordinates = place . getLocation (); // It isn 't possible to set a fragment' s id programmatically so we set a tag instead and // search for it using that . mapFragment = ( SupportMapFragment ) getSupportFragmentManager () . findFragmentByTag ( MAP FRAGMENT TAG ); // We only create a fragment if it doesn 't already exist. if ( mapFragment == null ) { mapPanel = (( ViewStub ) findViewById ( R . id . stub map )) . inflate (); GoogleMapOptions mapOptions = new GoogleMapOptions (); mapOptions . mapToolbarEnabled ( false ); // To programmatically add the map , we first create a SupportMapFragment . mapFragment = SupportMapFragment . newInstance ( mapOptions ); // Then we add it using a FragmentTransaction . getSupportFragmentManager () . beginTransaction () . add ( R . id . confirmation map , mapFragment , MAP FRAGMENT TAG ) . commit (); mapFragment . getMapAsync ( this ); } else { updateMap ( coordinates ); } } private void updateMap ( LatLng latLng ) { marker . setPosition ( latLng ); map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( latLng , 15 f )); if ( mapPanel . getVisibility () == View .
- See the License for the specific language governing permissions and limitations under the License . / package com . example . placesdemo ; import android.annotation.SuppressLint ; import android.app.Activity ; import android.content.Intent ; import android.content.pm.PackageManager ; import android.content.res.Resources ; import android.os.Bundle ; import android.util.Log ; import android.view.View ; import android.view.ViewStub ; import android.widget.Button ; import android.widget.CheckBox ; import android.widget.Toast ; import androidx.activity.result.ActivityResultLauncher ; import androidx.activity.result.contract.ActivityResultContracts ; import androidx.annotation.NonNull ; import androidx.annotation.Nullable ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.content.ContextCompat ; import com.example.placesdemo.databinding.AutocompleteAddressActivityBinding ; import com.google.android.gms.location.FusedLocationProviderClient ; import com.google.android.gms.location.LocationServices ; import com.google.android.gms.maps.CameraUpdateFactory ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMapOptions ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.SupportMapFragment ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.MapStyleOptions ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.places.api.Places ; import com.google.android.libraries.places.api.model.AddressComponent ; import com.google.android.libraries.places.api.model.AddressComponents ; import com.google.android.libraries.places.api.model.Place ; import com.google.android.libraries.places.api.model.PlaceTypes ; import com.google.android.libraries.places.api.net.PlacesClient ; import com.google.android.libraries.places.widget.Autocomplete ; import com.google.android.libraries.places.widget.model.AutocompleteActivityMode ; import java.util.Arrays ; import java.util.List ; import static android .
- Log . i ( TAG , "User canceled autocomplete" ); } }); Next, define the fields, location, and type properties of the Place Autocomplete intent and build it with Autocomplete.IntentBuilder .
- The workflow involves launching an autocomplete intent, retrieving a Place object, extracting components, populating forms, and updating the map with a marker.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- You can also use these new types, and the existing types, in a search with Text Search.
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).

### Place Types (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-types](https://developers.google.com/maps/documentation/places/android-sdk/place-types)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- A place's types are included in the response from a Place Details (New), Nearby Search (New), Text Search (New), and Autocomplete (New) request: A place can have a single primary type from type Table A or type Table B associated with it.
- Automotive Business Culture Education Entertainment and Recreation Facilities Finance Food and Drink Geographical Areas Government Health and Wellness Housing Lodging Natural Features Places of Worship Services Shopping Sports Transportation Automotive car dealer car rental car repair car wash ebike charging station electric vehicle charging station gas station parking parking garage parking lot rest stop tire shop truck dealer Business business center corporate office coworking space farm manufacturer ranch supplier television studio Culture art gallery art museum art studio auditorium castle cultural landmark fountain historical place history museum monument museum performing arts theater sculpture Education academic department educational institution library preschool primary school research institute school secondary school university Entertainment and Recreation adventure sports center amphitheatre amusement center amusement park aquarium banquet hall barbecue area botanical garden bowling alley casino childrens camp city park comedy club community center concert hall convention center cultural center cycling park dance hall dog park event venue ferris wheel garden go karting venue hiking area historical landmark indoor playground internet cafe karaoke live music venue marina miniature golf course movie rental movie theater national park night club observation deck off roading area opera house paintball center park philharmonic hall picnic ground planetarium plaza roller coaster skateboard park state park tourist attraction video arcade vineyard visitor center water park wedding venue wildlife park wildlife refuge zoo Facilities public bath public bathroom stable Finance accounting atm bank Food and Drink acai shop afghani restaurant african restaurant american restaurant argentinian restaurant asian fusion restaurant asian restaurant australian restaurant austrian restaurant bagel shop bakery bangladeshi restaurant bar bar and grill barbecue restaurant basque restaurant bavarian restaurant beer garden belgian restaurant bistro brazilian restaurant breakfast restaurant brewery brewpub british restaurant brunch restaurant buffet restaurant burmese restaurant burrito restaurant cafe cafeteria cajun restaurant cake shop californian restaurant cambodian restaurant candy store cantonese restaurant caribbean restaurant cat cafe chicken restaurant chicken wings restaurant chilean restaurant chinese noodle restaurant chinese restaurant chocolate factory chocolate shop cocktail bar coffee roastery coffee shop coffee stand colombian restaurant confectionery croatian restaurant cuban restaurant czech restaurant danish restaurant deli dessert restaurant dessert shop dim sum restaurant diner dog cafe donut shop dumpling restaurant dutch restaurant eastern european restaurant ethiopian restaurant european restaurant falafel restaurant family restaurant fast food restaurant filipino restaurant fine dining restaurant fish and chips restaurant fondue restaurant food court french restaurant fusion restaurant gastropub german restaurant greek restaurant gyro restaurant halal restaurant hamburger restaurant hawaiian restaurant hookah bar hot dog restaurant hot dog stand hot pot restaurant hungarian restaurant ice cream shop indian restaurant indonesian restaurant irish pub irish restaurant israeli restaurant italian restaurant japanese curry restaurant japanese izakaya restaurant japanese restaurant juice shop kebab shop korean barbecue restaurant korean restaurant latin american restaurant lebanese restaurant lounge bar malaysian restaurant meal delivery meal takeaway mediterranean restaurant mexican restaurant middle eastern restaurant mongolian barbecue restaurant moroccan restaurant noodle shop north indian restaurant oyster bar restaurant pakistani restaurant pastry shop persian restaurant peruvian restaurant pizza delivery pizza restaurant polish restaurant portuguese restaurant pub ramen restaurant restaurant romanian restaurant russian restaurant salad shop sandwich shop scandinavian restaurant seafood restaurant shawarma restaurant snack bar soul food restaurant soup restaurant south american restaurant south indian restaurant southwestern us restaurant spanish restaurant sports bar sri lankan restaurant steak house sushi restaurant swiss restaurant taco restaurant taiwanese restaurant tapas restaurant tea house tex mex restaurant thai restaurant tibetan restaurant tonkatsu restaurant turkish restaurant ukrainian restaurant vegan restaurant vegetarian restaurant vietnamese restaurant western restaurant wine bar winery yakiniku restaurant yakitori restaurant Geographical Areas administrative area level 1 administrative area level 2 country locality postal code school district Government city hall courthouse embassy fire station government office local government office neighborhood police station (Japan only) police post office Health and Wellness chiropractor dental clinic dentist doctor drugstore general hospital hospital massage massage spa medical center medical clinic medical lab pharmacy physiotherapist sauna skin care clinic spa tanning studio wellness center yoga studio Housing apartment building apartment complex condominium complex housing complex Lodging bed and breakfast budget japanese inn campground camping cabin cottage extended stay hotel farmstay guest house hostel hotel inn japanese inn lodging mobile home park motel private guest room resort hotel rv park Natural Features beach island lake mountain peak nature preserve river scenic spot woods Places of Worship buddhist temple church hindu temple mosque shinto shrine synagogue Services aircraft rental service association or organization astrologer barber shop beautician beauty salon body art service catering service cemetery chauffeur service child care agency consultant courier service electrician employment agency florist food delivery foot care funeral home hair care hair salon insurance agency laundry lawyer locksmith makeup artist marketing consultant moving company nail salon non profit organization painter pet boarding service pet care plumber psychic real estate agency roofing contractor service shipping service storage summer camp organizer tailor telecommunications service provider tour agency tourist information center travel agency veterinary care Shopping asian grocery store auto parts store bicycle store book store building materials store butcher shop cell phone store clothing store convenience store cosmetics store department store discount store discount supermarket electronics store farmers market flea market food store furniture store garden center general store gift shop grocery store hardware store health food store home goods store home improvement store hypermarket jewelry store liquor store market pet store shoe store shopping mall sporting goods store sportswear store store supermarket tea store thrift store toy store warehouse store wholesaler womens clothing store Sports arena athletic field fishing charter fishing pier fishing pond fitness center golf course gym ice skating rink indoor golf course playground race course ski resort sports activity location sports club sports coaching sports complex sports school stadium swimming pool tennis court Transportation airport airstrip bike sharing station bridge bus station bus stop ferry service ferry terminal heliport international airport light rail station park and ride subway station taxi service taxi stand toll station train station train ticket office tram stop transit depot transit station transit stop transportation service truck stop Table B The Place type values in Table B may be returned as part of a Place Details (New), Nearby Search (New), Text Search (New), or Autocomplete (New) response.
- Values from Table B NOT be used as part of a request, except as the values to the primary types parameter for a Place Autocomplete (New) request.
- The address and address components of a place can be tagged with certain types from the Address types and address component types table.

