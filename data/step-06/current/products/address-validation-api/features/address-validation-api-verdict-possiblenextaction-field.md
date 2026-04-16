---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:44:24.362Z"
product_name: "Address Validation API"
product_slug: "address-validation-api"
feature_name: "Address Validation API verdict possibleNextAction field"
feature_slug: "address-validation-api-verdict-possiblenextaction-field"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress"
  - "https://developers.google.com/maps/documentation/address-validation/build-validation-logic"
  - "https://developers.google.com/maps/documentation/address-validation/understand-response"
keywords:
  - "possiblenextaction"
  - "includes"
  - "indicate"
  - "verdict"
  - "field"
---

# Address Validation API verdict possibleNextAction field

Product: Address Validation API
Coverage: MEDIUM

## Step 02 Summary

The Address Validation API now includes a `possibleNextAction` field in the verdict to indicate recommended next steps after receiving a validation response.

## Extended Definition

The Address Validation API now includes a `possibleNextAction` field in the verdict to indicate recommended next steps after receiving a validation response.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress](https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress)
- [https://developers.google.com/maps/documentation/address-validation/build-validation-logic](https://developers.google.com/maps/documentation/address-validation/build-validation-logic)
- [https://developers.google.com/maps/documentation/address-validation/understand-response](https://developers.google.com/maps/documentation/address-validation/understand-response)

## Supporting Pages

### Method: validateAddress | Address Validation API | Google for Developers

- URL: [https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress](https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress)
- Source ID: `feature-recovery-direct-http`
- Final score: 249
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Method: validateAddress | Address Validation API | Google for Developers Skip to main content Maps Platform Overview Products Pricing Documentation Get Started Get Started with Google Maps Platform Capabilities Explorer Pricing & Billing Security & Compliance Reporting & Monitoring FAQ Support and Resources Customer Care Incident Management Maps Maps JavaScript API Maps SDK for Android Maps SDK for iOS Google Maps for Flutter Maps Embed API Maps Static API Street View Insights Street View Static API Maps URLs Aerial View API Elevation API Map Tiles API Maps Datasets API Web Components Routes Routes API Navigation SDK for Android Navigation SDK for iOS Navigation for Flutter Navigation for React Native Roads API Route Optimization API Analytics Google Earth Places Insights Imagery Insights Roads Management Insights Places Places API Places SDK for Android Places SDK for iOS Places Library, Maps JavaScript API Geocoding API Geolocation API Address Validation API Time Zone API Places Aggregate API Environment Air Quality API Pollen API Solar API Weather API Solutions Maps Builder agent Industry solutions Mobility services Additional Resources API Security Best Practices Digital Signature Guide Map Coverage Details Optimization Guide Mobile OS and software support Launch stages Legacy products Deprecations URL Encoding WordPress Users Blog Community GitHub YouTube LinkedIn Discord Innovators Issue Tracker / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Web Services Address Validation API Get Started Contact sales Guides Reference Resources Maps Platform Overview Products Pricing Documentation More Guides Reference Resources Blog Community More REST reference Overview v1 TopLevel provideValidationFeedback validateAddress RPC Reference Overview google.geo.type google.maps.addressvalidation.v1 google.type Get Started Get Started with Google Maps Platform Capabilities Explorer Pricing & Billing Security & Compliance Reporting & Monitoring FAQ Support and Resources Customer Care Incident Management Maps Maps JavaScript API Maps SDK for Android Maps SDK for iOS Google Maps for Flutter Maps Embed API Maps Static API Street View Insights Street View Static API Maps URLs Aerial View API Elevation API Map Tiles API Maps Datasets API Web Components Routes Routes API Navigation SDK for Android Navigation SDK for iOS Navigation for Flutter Navigation for React Native Roads API Route Optimization API Analytics Google Earth Places Insights Imagery Insights Roads Management Insights Places Places API Places SDK for Android Places SDK for iOS Places Library, Maps JavaScript API Geocoding API Geolocation API Address Validation API Time Zone API Places Aggregate API Environment Air Quality API Pollen API Solar API Weather API Solutions Maps Builder agent Industry solutions Mobility services Additional Resources API Security Best Practices Digital Signature Guide Map Coverage Details Optimization Guide Mobile OS and software support Launch stages Legacy products Deprecations URL Encoding WordPress Users GitHub YouTube LinkedIn Discord Innovators Issue Tracker Home Products Google Maps Platform Documentation Web Services Address Validation API Reference Send feedback Method: validateAddress Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "verdict" : { object ( Verdict ) } , "address" : { object ( Address ) } , "geocode" : { object ( Geocode ) } , "metadata" : { object ( AddressMetadata ) } , "uspsData" : { object ( UspsData ) } , "englishLatinAddress" : { object ( Address ) } } Fields verdict object ( Verdict ) Overall verdict flags address object ( Address ) Information about the address itself as opposed to the geocode. geocode object ( Geocode ) Information about the location and place that the address geocoded to. metadata object ( AddressMetadata ) Other information relevant to deliverability. metadata is not guaranteed to be fully populated for every address sent to the Address Validation API. uspsData object ( UspsData ) Extra deliverability flags provided by USPS.
- See missingComponentTypes , unresolvedTokens or unexpected fields for more details. hasUnconfirmedComponents boolean At least one address component cannot be categorized or validated, see google.maps.addressvalidation.v1.Address.address_components for details. hasInferredComponents boolean At least one address component was inferred (added) that wasn't in the input, see google.maps.addressvalidation.v1.Address.address_components for details. hasReplacedComponents boolean At least one address component was replaced, see google.maps.addressvalidation.v1.Address.address_components for details. possibleNextAction enum ( PossibleNextAction ) Preview: This feature is in Preview (pre-GA).
- HTTP request Request body JSON representation Response body JSON representation PostalAddress JSON representation LanguageOptions JSON representation ValidationResult JSON representation Verdict JSON representation Granularity PossibleNextAction Address JSON representation AddressComponent JSON representation ComponentName JSON representation ConfirmationLevel Geocode JSON representation LatLng JSON representation PlusCode JSON representation Viewport JSON representation AddressMetadata JSON representation UspsData JSON representation UspsAddress JSON representation Validates an address.

### "Build your validation logic \_|\_ Address Validation API \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/address-validation/build-validation-logic](https://developers.google.com/maps/documentation/address-validation/build-validation-logic)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following fields of the Address Validation API response can be used in addition to verdict.possibleNextAction to determine if an address has major issues, and what those issues are.
- The following fields of the Address Validation API response can be used in addition to verdict.possibleNextAction to determine if an address has minor issues, and what those issues are.
- The following fields of the Address Validation API response can be used in addition to verdict.possibleNextAction to determine if an address is likely missing a subpremises.
- The following fields of the Address Validation API response can be used in addition to verdict.possibleNextAction to determine if an address is of acceptable quality.

### "Understand a basic address validation response \_|\_ Address Validation\

- URL: [https://developers.google.com/maps/documentation/address-validation/understand-response](https://developers.google.com/maps/documentation/address-validation/understand-response)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Completeness of the address The verdict returns the addressComplete property as a signal for a high-quality address, which means specifically that it has no missing, unresolved, or unexpected components: "verdict" : { "inputGranularity" : "PREMISE" , "validationGranularity" : "PREMISE" , "geocodeGranularity" : "PREMISE" , "addressComplete" : true , "possibleNextAction" : "ACCEPT" } When the address has missing, unresolved, or unexpected components, the field is set to false .
- For example, the following shows the verdict property of an address of good quality, which returns 4 fields for this particular request: "verdict" : { "inputGranularity" : "PREMISE" , "validationGranularity" : "PREMISE" , "geocodeGranularity" : "PREMISE" , "addressComplete" : true , "possibleNextAction" : "ACCEPT" } The following sections summarize all fields in the verdict property.
- The Address Validation API provides a response body as a JSON object that contains two top-level properties: result , an object of type ValidationResult responseID { "result" : { // Validation verdict. "verdict" : {}, // Address details determined by the API. "address" : {}, // The geocode generated for the input address. "geocode" : {}, // Information indicating if the address is a business, residence, etc. "metadata" : {}, // Information about the address from the US Postal Service // ("US" and "PR" addresses only). "uspsData" : {}, }, // A unique identifier generated for every request to the API. "responseId" : "ID" } This document focuses on the result object.
- Possible next action The possibleNextAction property offers an interpretive summary of the rest of the API response, with the goal of helping you determine whether or not you should prompt your customer to review or make edits to their address.

