---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.792Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Place current opening hours"
feature_slug: "place-current-opening-hours"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/text-search"
  - "https://developers.google.com/maps/documentation/places/android-sdk/data-fields"
  - "https://developers.google.com/maps/documentation/places/android-sdk/support"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit"
keywords:
  - "place"
  - "current"
  - "opening"
  - "hours"
  - "now"
  - "provides"
  - "for"
  - "the"
---

# Place current opening hours

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Place now provides current opening hours for the next seven days.

## Extended Definition

Place now provides current opening hours for the next seven days.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- [https://developers.google.com/maps/documentation/places/android-sdk/data-fields](https://developers.google.com/maps/documentation/places/android-sdk/data-fields)
- [https://developers.google.com/maps/documentation/places/android-sdk/support](https://developers.google.com/maps/documentation/places/android-sdk/support)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)

## Supporting Pages

### Text Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/text-search](https://developers.google.com/maps/documentation/places/android-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Place.Field.PHOTO METADATAS Place.Field.PLUS CODE Place.Field.PRIMARY TYPE Place.Field.PRIMARY TYPE DISPLAY NAME Place.Field.SHORT FORMATTED ADDRESS Place.Field.SUB DESTINATIONS Place.Field.TYPES Place.Field.UTC OFFSET Place.Field.VIEWPORT The following fields trigger the Text Search Enterprise SKU : Place.Field.CURRENT OPENING HOURS Place.Field.CURRENT SECONDARY OPENING HOURS Place.Field.INTERNATIONAL PHONE NUMBER Use instead of Place.Field.PHONE NUMBER , which is deprecated.
- To restrict results to only include places at particular price levels, you can pass a list of integer values that correspond to the price levels for the places that you want to return: 1 - Place provides inexpensive services.
- Places that don't specify opening hours in the Google Places database are returned if you set this parameter to false .
- Open now If true , return only those places that are open for business at the time the query is sent.

### Place Data Fields (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/data-fields](https://developers.google.com/maps/documentation/places/android-sdk/data-fields)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Place data fields and SKUs Field description Property field Place Details SKU Text Search SKU Nearby Search SKU Accessibility options ACCESSIBILITY OPTIONS Place Details Pro Text Search Pro Nearby Search Pro Address ( ADR microformat ) ADR FORMAT ADDRESS Place Details Essentials Text Search Pro Nearby Search Pro Address components ADDRESS COMPONENTS Place Details Essentials Text Search Pro Nearby Search Pro Address descriptor ADDRESS DESCRIPTOR Place Details Essentials Text Search Pro Nearby Search Pro Allows dogs ALLOWS DOGS Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Business status BUSINESS STATUS Place Details Pro Text Search Pro Nearby Search Pro Containing places CONTAINING PLACES Place Details Pro Text Search Pro Nearby Search Pro Curbside pickup CURBSIDE PICKUP Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Current opening hours CURRENT OPENING HOURS Place Details Enterprise Text Search Pro Nearby Search Enterprise Current secondary opening hours CURRENT SECONDARY OPENING HOURS Place Details Enterprise Text Search Pro Nearby Search Enterprise Delivery DELIVERY Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Dine in DINE IN Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Display name DISPLAY NAME Place Details Pro Text Search Pro Nearby Search Pro Editorial summary EDITORIAL SUMMARY Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere EV charging options EV CHARGE OPTIONS Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere AI-powered EVCS amenity summary EV CHARGE AMENITY SUMMARY Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Formatted address FORMATTED ADDRESS Place Details Essentials Text Search Pro Nearby Search Pro Fuel options FUEL OPTIONS Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere AI-powered place summary GENERATIVE SUMMARY Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Good for children GOOD FOR CHILDREN Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Good for groups GOOD FOR GROUPS Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Good for watching sports GOOD FOR WATCHING SPORTS Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Google Maps URI GOOGLE MAPS URI Place Details Pro Text Search Pro Nearby Search Pro Icon background color ICON BACKGROUND COLOR Place Details Pro Text Search Pro Nearby Search Pro Icon mask base URI ICON MASK URL Place Details Pro Text Search Pro Nearby Search Pro International phone number INTERNATIONAL PHONE NUMBER Place Details Enterprise Text Search Enterprise Nearby Search Enterprise Live music LIVE MUSIC Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Location LOCATION Place Details Essentials Text Search Pro Nearby Search Pro Menu for children MENU FOR CHILDREN Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Name RESOURCE NAME Place Details Essentials (IDs Only) Text Search Essentials (IDs Only) Nearby Search Pro National phone number NATIONAL PHONE NUMBER Place Details Enterprise Text Search Pro Nearby Search Enterprise AI-powered neighborhood summary NEIGHBORHOOD SUMMARY Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Outdoor seating OUTDOOR SEATING Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Parking options PARKING OPTIONS Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Payment options PAYMENT OPTIONS Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Photos PHOTO METADATAS Place Details Essentials (IDs Only) Text Search Pro Nearby Search Pro Place ID ID Place Details Essentials (IDs Only) Text Search Essentials (IDs Only) Nearby Search Pro Plus code PLUS CODE Place Details Essentials Text Search Pro Nearby Search Pro Postal address POSTAL ADDRESS Place Details Essentials Text Search Pro Nearby Search Pro Price level PRICE LEVEL Place Details Enterprise Text Search Pro Nearby Search Enterprise Price range PRICE RANGE Place Details Enterprise Text Search Enterprise + Atmosphere Nearby Search Enterprise Primary type PRIMARY TYPE Place Details Pro Text Search Pro Nearby Search Pro Primary type display name PRIMARY TYPE DISPLAY NAME Place Details Pro Text Search Pro Nearby Search Pro Rating RATING Place Details Enterprise Text Search Pro Nearby Search Enterprise Regular opening hours OPENING HOURS Place Details Enterprise Text Search Pro Nearby Search Enterprise Regular secondary opening hours SECONDARY OPENING HOURS Place Details Enterprise Text Search Pro Nearby Search Enterprise Reservable RESERVABLE Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Restroom RESTROOM Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Reviews REVIEWS Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere AI-powered review summary REVIEW SUMMARY Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves beer SERVES BEER Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves breakfast SERVES BREAKFAST Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves brunch SERVES BRUNCH Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves cocktails SERVES COCKTAILS Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves coffee SERVES COFFEE Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves dessert SERVES DESSERT Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves dinner SERVES DINNER Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves lunch SERVES LUNCH Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves vegetarian food SERVES VEGETARIAN FOOD Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Serves wine SERVES WINE Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Short formatted address SHORT FORMATTED ADDRESS Place Details Essentials Text Search Pro Nearby Search Pro Sub-destinations SUB DESTINATIONS Place Details Pro Text Search Pro Nearby Search Pro Takeout TAKEOUT Place Details Enterprise + Atmosphere Text Search Enterprise + Atmosphere Nearby Search Enterprise + Atmosphere Time zone TIME ZONE Place Details Pro Text Search Pro Nearby Search Pro Types TYPES Place Details Essentials Text Search Pro Nearby Search Pro User rating count USER RATINGS COUNT Place Details Enterprise Text Search Pro Nearby Search Enterprise UTC offset (minutes) UTC OFFSET Place Details Pro Text Search Pro Nearby Search Pro Viewport VIEWPORT Place Details Essentials Text Search Pro Nearby Search Pro Website URI WEBSITE URI Place Details Enterprise Text Search Enterprise Nearby Search Enterprise Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Place data fields determine the data returned in responses for Place Details, Text Search, and Nearby Search.
- Select platform: Android iOS JavaScript Web Service Place data fields define the place data to return in the response Place object for Place Details (New) , Text Search (New) , and Nearby Search (New) .
- The document outlines each place data field, like ACCESSIBILITY OPTIONS, ADDRESS COMPONENTS or BUSINESS STATUS, and their respective pricing tier (SKU) for each search type.

### Support Options for Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/support](https://developers.google.com/maps/documentation/places/android-sdk/support)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sign up for, or cancel, a support service Only Billing Administrators can change the selected support service, since it will apply to all projects linked to your current Google Cloud Billing account.
- 24 hours on weekdays 24 hours on weekdays Privacy inquiries For questions related to data privacy and protection, you can contact us using the Data Privacy Inquiry Form .
- Community support on Stack Overflow We use the popular programming Q&A website Stack Overflow to field technical questions about the Places SDK for Android.
- If you had opened a support case during the incident, you can make a request for an incident report on that case, rather than opening a new case.

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compact view Full view Place photo Lightbox enabled for full-screen photo enlargement Place address Rating and rating count Place type Price Accessible entrance information Open now status Place photo collage Place address Rating and rating count Place type Price Accessibility info Open now status Open hours Editorial summary Website Phone number Reviews rendered in dedicated tab Plus code Feature list, rendered in a dedicated tab Type-specific highlights, such as gas prices for gas stations Billing When using the Place Details UI Kit, you are billed for each time the .loadWithPlaceId() , .loadWithResourceName() , or loadWithCoordinates() method is called.
- LENGTH SHORT ). show () } }) } // We add the fragment to our layout&#39;s container view. // commitNow() is used to ensure the fragment is immediately added and available, // which is important because we need to call a method on it right after. supportFragmentManager . beginTransaction () . replace ( binding . placeDetailsContainer . id , fragment ) . commitNow () // This is the key step : After adding the fragment, we call loadWithPlaceId // to trigger the data loading process for the selected place. // We use post to ensure this runs after the layout has been measured, // which can prevent potential timing issues. binding . root . post { fragment . loadWithPlaceId ( placeId ) } } / Hides the place details view and clears the selected place ID from the ViewModel. / private fun dismissPlaceDetails () { binding . placeDetailsWrapper . visibility = View .
- LENGTH SHORT ). show () } }) } // We add the fragment to our layout&#39;s container view. // commitNow() is used to ensure the fragment is immediately added and available, // which is important because we need to call a method on it right after. supportFragmentManager . beginTransaction () . replace ( binding . placeDetailsContainer . id , fragment ) . commitNow () // This is the key step : After adding the fragment, we call loadWithPlaceId // to trigger the data loading process for the selected place. // We use post to ensure this runs after the layout has been measured, // which can prevent potential timing issues. binding . root . post { fragment . loadWithPlaceId ( placeId ) } } Java PlaceDetailsCompactFragment fragment = PlaceDetailsCompactFragment . newInstance ( Orientation .
- This may be useful in an info window highlighting a place on a map, in a social media experience like sharing a location in a chat, as a suggestion for selecting your current location, or within a media article to reference the place on Google Maps.

