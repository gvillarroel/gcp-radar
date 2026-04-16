---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.469Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Autocomplete API (New)"
feature_slug: "autocomplete-api-new"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/details-place"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-types"
keywords:
  - "autocomplete"
  - "api"
  - "new"
  - "returns"
  - "place"
  - "predictions"
  - "in"
  - "response"
---

# Autocomplete API (New)

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Returns place predictions in response to user search queries.

## Extended Definition

Returns place predictions in response to user search queries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- [https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing](https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-types](https://developers.google.com/maps/documentation/places/ios-sdk/place-types)

## Supporting Pages

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Autocomplete (New) service is an iOS API that returns place suggestions in response to a request.
- Places Swift SDK let center = ( 37.3913916 , - 122.0879074 ) let northEast = ( 37.388162 , - 122.088137 ) let southWest = ( 37.395804 , - 122.077023 ) let bias = RectangularCoordinateRegion ( northEast : northEast , southWest : southWest ) let filter = AutocompleteFilter ( types : [ . restaurant ], origin : center , coordinateRegionBias : bias ) let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): // Handle suggestions. case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let northWestBounds = CLLocationCoordinate2DMake ( 40.921628 , - 73.700051 ) let southEastBounds = CLLocationCoordinate2DMake ( 40.477398 , - 74.259087 ) let filter = GMSAutocompleteFilter () filter . types = [ kGMSPlaceTypeRestaurant ] filter . locationBias = GMSPlaceRectangularLocationOption ( northWestBounds , southEastBounds ) let request = GMSAutocompleteRequest ( query : "Spagh" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D northEast = CLLocationCoordinate2DMake ( 37.388162 , -122.088137 ); CLLocationCoordinate2D southWest = CLLocationCoordinate2DMake ( 37.395804 , -122.077023 ); GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . types = @[ kGMSPlaceTypeRestaurant ] ; filter . locationBias = GMSPlaceRectangularLocationOption ( northEast , southWest ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Autocomplete (New) responses Autocomplete returns an array of up to five GMSAutocompleteSuggestion instances.
- When requesting Place Details (New) about the selected prediction, include the following parameters: The place ID from the Autocomplete (New) response The session token used in the Autocomplete (New) request The fields parameter specifying the Autocomplete (New) data fields you need No, needs only address and location Geocoding API could be a more cost-effective option than Place Details (New) for your application, depending on the performance of your Autocomplete (New) usage.
- You can integrate Autocomplete (New) functionality into your app in two main ways: Get place predictions programmatically : Call the API directly to retrieve predictions and display them in a custom user interface.

### Place Details (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't specify at least one field in the field list, or if you omit the field list, then the call returns an error. (Optional) The region code used to format the response. (Optional) The session token used to end an Autocomplete (New) session.
- The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object: GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyBusinessStatus GMSPlacePropertyOpeningHours GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them. isOpenWithRequest response isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
- GMSFetchPlaceRequest fetchPlaceRequest = [[ GMSFetchPlaceRequest alloc ] initWithPlaceID : placeID placeProperties : myProperties sessionToken : nil ]; [ placesClient fetchPlaceWithRequest : fetchPlaceRequest callback : ^ ( GMSPlace Nullable place , NSError Nullable error ) { if ( error != nil ) { NSLog ( @"An error occurred %@" , [ error localizedDescription ]); return ; } else { NSLog ( @"Place Found: %@" , place . name ); NSLog ( @"The place URL: %@" , place . website ); } }]; Place Details response Place Details returns a GMSPlace object containing details about the place.
- The parameter can affect results based on applicable law. sessionToken Session tokens are user-generated strings that track Autocomplete (New) calls as "sessions." Autocomplete (New) uses session tokens to group the query and place selection phases of a user autocomplete search into a discrete session for billing purposes.

### "Autocomplete (New) and session pricing \_|\_ Places SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing](https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Session billing Sessions terminating in a Place Details (New) Essentials request For Autocomplete (New) sessions that terminate in a request using fields from SKU: Places API Place Details Essentials : First 12 Autocomplete (New) requests : You are billed for each Autocomplete (New) request, up to a maximum of 12 requests, using the SKU: Autocomplete Requests .
- Note: If you terminate the session by making a request to Place Details (New) using the SKU: Places API Place Details Essentials (IDs Only) , then all requests to Autocomplete (New) are billed using the SKU: Autocomplete Requests , as if you did not use sessions.
- This is because the request using the SKU: Places API Place Details Essentials (IDs Only) is not charged, so all Autocomplete (New) requests revert to per-request pricing.
- Sessions terminating in Address Validation or Place Details (New) (non-Essentials) requests For Autocomplete (New) sessions that terminate in an Address Validation request or a Place Details (New) request using fields from Place Details Pro , Enterprise , or Enterprise + Atmosphere : Autocomplete (New) requests: All Autocomplete (New) requests are billed at the SKU: Autocomplete Session Usage , meaning there is no charge for those requests.

### Places Types (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-types](https://developers.google.com/maps/documentation/places/ios-sdk/place-types)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Automotive Business Culture Education Entertainment and Recreation Facilities Finance Food and Drink Geographical Areas Government Health and Wellness Housing Lodging Natural Features Places of Worship Services Shopping Sports Transportation Automotive car dealer car rental car repair car wash ebike charging station electric vehicle charging station gas station parking parking garage parking lot rest stop tire shop truck dealer Business business center corporate office coworking space farm manufacturer ranch supplier television studio Culture art gallery art museum art studio auditorium castle cultural landmark fountain historical place history museum monument museum performing arts theater sculpture Education academic department educational institution library preschool primary school research institute school secondary school university Entertainment and Recreation adventure sports center amphitheatre amusement center amusement park aquarium banquet hall barbecue area botanical garden bowling alley casino childrens camp city park comedy club community center concert hall convention center cultural center cycling park dance hall dog park event venue ferris wheel garden go karting venue hiking area historical landmark indoor playground internet cafe karaoke live music venue marina miniature golf course movie rental movie theater national park night club observation deck off roading area opera house paintball center park philharmonic hall picnic ground planetarium plaza roller coaster skateboard park state park tourist attraction video arcade vineyard visitor center water park wedding venue wildlife park wildlife refuge zoo Facilities public bath public bathroom stable Finance accounting atm bank Food and Drink acai shop afghani restaurant african restaurant american restaurant argentinian restaurant asian fusion restaurant asian restaurant australian restaurant austrian restaurant bagel shop bakery bangladeshi restaurant bar bar and grill barbecue restaurant basque restaurant bavarian restaurant beer garden belgian restaurant bistro brazilian restaurant breakfast restaurant brewery brewpub british restaurant brunch restaurant buffet restaurant burmese restaurant burrito restaurant cafe cafeteria cajun restaurant cake shop californian restaurant cambodian restaurant candy store cantonese restaurant caribbean restaurant cat cafe chicken restaurant chicken wings restaurant chilean restaurant chinese noodle restaurant chinese restaurant chocolate factory chocolate shop cocktail bar coffee roastery coffee shop coffee stand colombian restaurant confectionery croatian restaurant cuban restaurant czech restaurant danish restaurant deli dessert restaurant dessert shop dim sum restaurant diner dog cafe donut shop dumpling restaurant dutch restaurant eastern european restaurant ethiopian restaurant european restaurant falafel restaurant family restaurant fast food restaurant filipino restaurant fine dining restaurant fish and chips restaurant fondue restaurant food court french restaurant fusion restaurant gastropub german restaurant greek restaurant gyro restaurant halal restaurant hamburger restaurant hawaiian restaurant hookah bar hot dog restaurant hot dog stand hot pot restaurant hungarian restaurant ice cream shop indian restaurant indonesian restaurant irish pub irish restaurant israeli restaurant italian restaurant japanese curry restaurant japanese izakaya restaurant japanese restaurant juice shop kebab shop korean barbecue restaurant korean restaurant latin american restaurant lebanese restaurant lounge bar malaysian restaurant meal delivery meal takeaway mediterranean restaurant mexican restaurant middle eastern restaurant mongolian barbecue restaurant moroccan restaurant noodle shop north indian restaurant oyster bar restaurant pakistani restaurant pastry shop persian restaurant peruvian restaurant pizza delivery pizza restaurant polish restaurant portuguese restaurant pub ramen restaurant restaurant romanian restaurant russian restaurant salad shop sandwich shop scandinavian restaurant seafood restaurant shawarma restaurant snack bar soul food restaurant soup restaurant south american restaurant south indian restaurant southwestern us restaurant spanish restaurant sports bar sri lankan restaurant steak house sushi restaurant swiss restaurant taco restaurant taiwanese restaurant tapas restaurant tea house tex mex restaurant thai restaurant tibetan restaurant tonkatsu restaurant turkish restaurant ukrainian restaurant vegan restaurant vegetarian restaurant vietnamese restaurant western restaurant wine bar winery yakiniku restaurant yakitori restaurant Geographical Areas administrative area level 1 administrative area level 2 country locality postal code school district Government city hall courthouse embassy fire station government office local government office neighborhood police station (Japan only) police post office Health and Wellness chiropractor dental clinic dentist doctor drugstore general hospital hospital massage massage spa medical center medical clinic medical lab pharmacy physiotherapist sauna skin care clinic spa tanning studio wellness center yoga studio Housing apartment building apartment complex condominium complex housing complex Lodging bed and breakfast budget japanese inn campground camping cabin cottage extended stay hotel farmstay guest house hostel hotel inn japanese inn lodging mobile home park motel private guest room resort hotel rv park Natural Features beach island lake mountain peak nature preserve river scenic spot woods Places of Worship buddhist temple church hindu temple mosque shinto shrine synagogue Services aircraft rental service association or organization astrologer barber shop beautician beauty salon body art service catering service cemetery chauffeur service child care agency consultant courier service electrician employment agency florist food delivery foot care funeral home hair care hair salon insurance agency laundry lawyer locksmith makeup artist marketing consultant moving company nail salon non profit organization painter pet boarding service pet care plumber psychic real estate agency roofing contractor service shipping service storage summer camp organizer tailor telecommunications service provider tour agency tourist information center travel agency veterinary care Shopping asian grocery store auto parts store bicycle store book store building materials store butcher shop cell phone store clothing store convenience store cosmetics store department store discount store discount supermarket electronics store farmers market flea market food store furniture store garden center general store gift shop grocery store hardware store health food store home goods store home improvement store hypermarket jewelry store liquor store market pet store shoe store shopping mall sporting goods store sportswear store store supermarket tea store thrift store toy store warehouse store wholesaler womens clothing store Sports arena athletic field fishing charter fishing pier fishing pond fitness center golf course gym ice skating rink indoor golf course playground race course ski resort sports activity location sports club sports coaching sports complex sports school stadium swimming pool tennis court Transportation airport airstrip bike sharing station bridge bus station bus stop ferry service ferry terminal heliport international airport light rail station park and ride subway station taxi service taxi stand toll station train station train ticket office tram stop transit depot transit station transit stop transportation service truck stop Table B The Place type values in Table B may be returned as part of a Place Details (New), Nearby Search (New), Text Search (New), or Autocomplete (New) response.
- A place's types are included in the response from a Place Details (New), Nearby Search (New), Text Search (New), and Autocomplete (New) request: A place can have a single primary type from type Table A or type Table B associated with it.
- As part of a Place Autocomplete (New) response used to populate the types property of the GMSAutocompletePlaceSuggestion instance.
- About the type tables Table A lists the types that are used in the following ways: As part of a response from Place Details (New), Nearby Search (New), and Text Search (New), the values in Table A are used to populate the types property of the GMSPlace instance.

