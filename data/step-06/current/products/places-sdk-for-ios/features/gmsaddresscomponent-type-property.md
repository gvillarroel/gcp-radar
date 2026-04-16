---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.472Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "GMSAddressComponent.type property"
feature_slug: "gmsaddresscomponent-type-property"
latest_feature_date: "2023-05-17"
deprecation_date: "2023-05-17"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/attributions"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-types"
keywords:
  - "gmsaddresscomponent"
  - "type"
  - "property"
  - "the"
  - "on"
  - "is"
  - "deprecated"
  - "and"
---

# GMSAddressComponent.type property

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The type property on GMSAddressComponent is deprecated and replaced by the types property; deprecated on 2023-05-17.

## Extended Definition

The type property on GMSAddressComponent is deprecated and replaced by the types property; deprecated on 2023-05-17.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent)
- [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-types](https://developers.google.com/maps/documentation/places/ios-sdk/place-types)

## Supporting Pages

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAddressComponent)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GMSAddressComponent @interface GMSAddressComponent : NSObject Represents a component of an address, e.g., street number, postcode, city, etc. type Deprecated type property is deprecated in favor of types Type of the address component.
- Declaration Swift var types : [ String ] { get } Objective-C @property ( nonatomic , strong , readonly ) NSArray < NSString > Nonnull types ; name Name of the address component, e.g. “Sydney” Declaration Swift var name : String { get } Objective-C @property ( nonatomic , copy , readonly ) NSString Nonnull name ; shortName Short name of the address component, e.g. “AU” Declaration Swift var shortName : String ? { get } Objective-C @property ( nonatomic , copy , readonly ) NSString Nullable shortName ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The type property is deprecated; use types instead for an array of type constants from GMSPlaceTypes.h .
- Declaration Swift var type : String { get } Objective-C @property ( nonatomic , copy , readonly ) GMS AVAILABLE BUT DEPRECATED MSG NSString type ; types Types associated with the address component.

### Policies and attributions for Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To access the reviews: Swift // Define a Place ID. let placeID = "ChIJV4k8 9UodTERU5KXbkYpSYs" // Specify the place data types to return. let myProperties : [ GMSPlaceProperty ] = [. name , . website , . reviews ] // Create the GMSFetchPlaceRequest object. let fetchPlaceRequest = GMSFetchPlaceRequest ( placeID : placeID , placeProperties : myProperties ) client . fetchPlaceWithRequest ( fetchPlaceRequest : fetchPlaceRequest , callback : { ( place : GMSPlace ?, error : Error ?) in if let error = error { print ( "An error occurred: \( error . localizedDescription ) " ) return } if let place = place { let firstReview : GMSPlaceReview = place . reviews ![ 0 ] // Use firstReview to access review text, authorAttribution, and other fields. } }) Objective-C // Define a Place ID.
- Autocomplete for end user addresses When an end user uses Autocomplete functionality within your Customer Application to type ahead a street address and that street address would have been completely and accurately provided by that end user without Autocomplete, the end user's selected address is then not subject to the Google Maps Content restrictions in your Google Maps Platform Agreement.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Applications using the Places SDK for iOS must include a Terms of Use and Privacy Policy, referencing Google's policies.
- Before building with Google Maps Platform, review the following EEA-specific terms and information: Google Maps Platform EEA Terms of Service Google Maps Platform EEA Service Specific Terms EEA frequently asked questions (FAQ) Google Maps Platform Road Safety Requirements If your billing address is not in the EEA, the following terms of service apply to you: Google Maps Platform Terms of Service Google Maps Platform Service Specific Terms Google Maps attribution requirements This section provides attribution requirements and guidelines for displaying Google Maps and Content through your applications.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompletePrediction)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Objective-C - ( nonnull instancetype ) init ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Declaration Swift var types : [ String ] { get } Objective-C @property ( nonatomic , copy , readonly ) GMS AVAILABLE BUT DEPRECATED MSG NSArray < NSString > types ; distanceMeters Deprecated Use GMSAutocompleteSuggestion instead.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-02 UTC."],[],["GMSAutocompletePrediction offers details about a predicted query based on partial input.
- GMSAutocompletePrediction Deprecated Use GMSAutocompleteSuggestion instead. @interface GMSAutocompletePrediction : NSObject This class represents a prediction of a full query based on a partially typed string. attributedFullText Deprecated Use GMSAutocompleteSuggestion instead.

### Places Types (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-types](https://developers.google.com/maps/documentation/places/ios-sdk/place-types)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- About the type tables Table A lists the types that are used in the following ways: As part of a response from Place Details (New), Nearby Search (New), and Text Search (New), the values in Table A are used to populate the types property of the GMSPlace instance.
- Automotive Business Culture Education Entertainment and Recreation Facilities Finance Food and Drink Geographical Areas Government Health and Wellness Housing Lodging Natural Features Places of Worship Services Shopping Sports Transportation Automotive car dealer car rental car repair car wash ebike charging station electric vehicle charging station gas station parking parking garage parking lot rest stop tire shop truck dealer Business business center corporate office coworking space farm manufacturer ranch supplier television studio Culture art gallery art museum art studio auditorium castle cultural landmark fountain historical place history museum monument museum performing arts theater sculpture Education academic department educational institution library preschool primary school research institute school secondary school university Entertainment and Recreation adventure sports center amphitheatre amusement center amusement park aquarium banquet hall barbecue area botanical garden bowling alley casino childrens camp city park comedy club community center concert hall convention center cultural center cycling park dance hall dog park event venue ferris wheel garden go karting venue hiking area historical landmark indoor playground internet cafe karaoke live music venue marina miniature golf course movie rental movie theater national park night club observation deck off roading area opera house paintball center park philharmonic hall picnic ground planetarium plaza roller coaster skateboard park state park tourist attraction video arcade vineyard visitor center water park wedding venue wildlife park wildlife refuge zoo Facilities public bath public bathroom stable Finance accounting atm bank Food and Drink acai shop afghani restaurant african restaurant american restaurant argentinian restaurant asian fusion restaurant asian restaurant australian restaurant austrian restaurant bagel shop bakery bangladeshi restaurant bar bar and grill barbecue restaurant basque restaurant bavarian restaurant beer garden belgian restaurant bistro brazilian restaurant breakfast restaurant brewery brewpub british restaurant brunch restaurant buffet restaurant burmese restaurant burrito restaurant cafe cafeteria cajun restaurant cake shop californian restaurant cambodian restaurant candy store cantonese restaurant caribbean restaurant cat cafe chicken restaurant chicken wings restaurant chilean restaurant chinese noodle restaurant chinese restaurant chocolate factory chocolate shop cocktail bar coffee roastery coffee shop coffee stand colombian restaurant confectionery croatian restaurant cuban restaurant czech restaurant danish restaurant deli dessert restaurant dessert shop dim sum restaurant diner dog cafe donut shop dumpling restaurant dutch restaurant eastern european restaurant ethiopian restaurant european restaurant falafel restaurant family restaurant fast food restaurant filipino restaurant fine dining restaurant fish and chips restaurant fondue restaurant food court french restaurant fusion restaurant gastropub german restaurant greek restaurant gyro restaurant halal restaurant hamburger restaurant hawaiian restaurant hookah bar hot dog restaurant hot dog stand hot pot restaurant hungarian restaurant ice cream shop indian restaurant indonesian restaurant irish pub irish restaurant israeli restaurant italian restaurant japanese curry restaurant japanese izakaya restaurant japanese restaurant juice shop kebab shop korean barbecue restaurant korean restaurant latin american restaurant lebanese restaurant lounge bar malaysian restaurant meal delivery meal takeaway mediterranean restaurant mexican restaurant middle eastern restaurant mongolian barbecue restaurant moroccan restaurant noodle shop north indian restaurant oyster bar restaurant pakistani restaurant pastry shop persian restaurant peruvian restaurant pizza delivery pizza restaurant polish restaurant portuguese restaurant pub ramen restaurant restaurant romanian restaurant russian restaurant salad shop sandwich shop scandinavian restaurant seafood restaurant shawarma restaurant snack bar soul food restaurant soup restaurant south american restaurant south indian restaurant southwestern us restaurant spanish restaurant sports bar sri lankan restaurant steak house sushi restaurant swiss restaurant taco restaurant taiwanese restaurant tapas restaurant tea house tex mex restaurant thai restaurant tibetan restaurant tonkatsu restaurant turkish restaurant ukrainian restaurant vegan restaurant vegetarian restaurant vietnamese restaurant western restaurant wine bar winery yakiniku restaurant yakitori restaurant Geographical Areas administrative area level 1 administrative area level 2 country locality postal code school district Government city hall courthouse embassy fire station government office local government office neighborhood police station (Japan only) police post office Health and Wellness chiropractor dental clinic dentist doctor drugstore general hospital hospital massage massage spa medical center medical clinic medical lab pharmacy physiotherapist sauna skin care clinic spa tanning studio wellness center yoga studio Housing apartment building apartment complex condominium complex housing complex Lodging bed and breakfast budget japanese inn campground camping cabin cottage extended stay hotel farmstay guest house hostel hotel inn japanese inn lodging mobile home park motel private guest room resort hotel rv park Natural Features beach island lake mountain peak nature preserve river scenic spot woods Places of Worship buddhist temple church hindu temple mosque shinto shrine synagogue Services aircraft rental service association or organization astrologer barber shop beautician beauty salon body art service catering service cemetery chauffeur service child care agency consultant courier service electrician employment agency florist food delivery foot care funeral home hair care hair salon insurance agency laundry lawyer locksmith makeup artist marketing consultant moving company nail salon non profit organization painter pet boarding service pet care plumber psychic real estate agency roofing contractor service shipping service storage summer camp organizer tailor telecommunications service provider tour agency tourist information center travel agency veterinary care Shopping asian grocery store auto parts store bicycle store book store building materials store butcher shop cell phone store clothing store convenience store cosmetics store department store discount store discount supermarket electronics store farmers market flea market food store furniture store garden center general store gift shop grocery store hardware store health food store home goods store home improvement store hypermarket jewelry store liquor store market pet store shoe store shopping mall sporting goods store sportswear store store supermarket tea store thrift store toy store warehouse store wholesaler womens clothing store Sports arena athletic field fishing charter fishing pier fishing pond fitness center golf course gym ice skating rink indoor golf course playground race course ski resort sports activity location sports club sports coaching sports complex sports school stadium swimming pool tennis court Transportation airport airstrip bike sharing station bridge bus station bus stop ferry service ferry terminal heliport international airport light rail station park and ride subway station taxi service taxi stand toll station train station train ticket office tram stop transit depot transit station transit stop transportation service truck stop Table B The Place type values in Table B may be returned as part of a Place Details (New), Nearby Search (New), Text Search (New), or Autocomplete (New) response.
- Additional Place type values administrative area level 3 administrative area level 4 administrative area level 5 administrative area level 6 administrative area level 7 archipelago colloquial area continent establishment finance food general contractor geocode health intersection landmark natural feature neighborhood place of worship plus code point of interest political postal code prefix postal code suffix postal town premise route street address sublocality sublocality level 1 sublocality level 2 sublocality level 3 sublocality level 4 sublocality level 5 subpremise town square Address types and address component types The types enum in the GMSPlace class in the response indicates the address type .
- Address Component Type Description floor The floor of a building address. establishment Typically a place that has not yet been categorized. landmark A nearby place that is used as a reference, to aid navigation. point of interest A named point of interest. parking A parking lot or parking structure. post box A specific postal box. postal town A grouping of geographic areas, such as locality and sublocality , used for mailing addresses in some countries. room The room of a building address. street number The precise street number. bus station , train station and transit station The location of a bus, train or public transit stop.

