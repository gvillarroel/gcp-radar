---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:44:24.362Z"
product_name: "Address Validation API"
product_slug: "address-validation-api"
feature_name: "Address Validation API session pricing with Autocomplete (New)"
feature_slug: "address-validation-api-session-pricing-with-autocomplete-new"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress"
  - "https://developers.google.com/maps/documentation/address-validation/build-validation-logic"
  - "https://developers.google.com/maps/documentation/address-validation/understand-response"
keywords:
  - "autocomplete"
  - "session"
  - "pricing"
  - "based"
  - "supports"
---

# Address Validation API session pricing with Autocomplete (New)

Product: Address Validation API
Coverage: MEDIUM

## Step 02 Summary

The Address Validation API now supports session-based pricing when used with the Autocomplete (New) API.

## Extended Definition

The Address Validation API now supports session-based pricing when used with the Autocomplete (New) API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress](https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress)
- [https://developers.google.com/maps/documentation/address-validation/build-validation-logic](https://developers.google.com/maps/documentation/address-validation/build-validation-logic)
- [https://developers.google.com/maps/documentation/address-validation/understand-response](https://developers.google.com/maps/documentation/address-validation/understand-response)

## Supporting Pages

### Method: validateAddress \_|\_ Address Validation API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress](https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress)
- Source ID: `site-api-reference`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Google Maps Platform Documentation Web Services Address Validation API Reference Send feedback Method: validateAddress Stay organized with collections Save and categorize content based on your preferences.
- The session begins when the user makes an Autocomplete query, and concludes when they select a place and a call to Place Details or Address Validation is made.
- Each session can have multiple Autocomplete queries, followed by one Place Details or Address Validation request.
- Note: Address Validation can only be used in sessions with the Autocomplete (New) API, not the Autocomplete API.

### Build your validation logic | Address Validation API | Google for Developers

- URL: [https://developers.google.com/maps/documentation/address-validation/build-validation-logic](https://developers.google.com/maps/documentation/address-validation/build-validation-logic)
- Source ID: `feature-recovery-direct-http`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Build your validation logic | Address Validation API | Google for Developers Skip to main content Maps Platform Overview Products Pricing Documentation Get Started Get Started with Google Maps Platform Capabilities Explorer Pricing & Billing Security & Compliance Reporting & Monitoring FAQ Support and Resources Customer Care Incident Management Maps Maps JavaScript API Maps SDK for Android Maps SDK for iOS Google Maps for Flutter Maps Embed API Maps Static API Street View Insights Street View Static API Maps URLs Aerial View API Elevation API Map Tiles API Maps Datasets API Web Components Routes Routes API Navigation SDK for Android Navigation SDK for iOS Navigation for Flutter Navigation for React Native Roads API Route Optimization API Analytics Google Earth Places Insights Imagery Insights Roads Management Insights Places Places API Places SDK for Android Places SDK for iOS Places Library, Maps JavaScript API Geocoding API Geolocation API Address Validation API Time Zone API Places Aggregate API Environment Air Quality API Pollen API Solar API Weather API Solutions Maps Builder agent Industry solutions Mobility services Additional Resources API Security Best Practices Digital Signature Guide Map Coverage Details Optimization Guide Mobile OS and software support Launch stages Legacy products Deprecations URL Encoding WordPress Users Blog Community GitHub YouTube LinkedIn Discord Innovators Issue Tracker / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Web Services Address Validation API Get Started Contact sales Guides Reference Resources Maps Platform Overview Products Pricing Documentation More Guides Reference Resources Blog Community More Address Validation API Overview Try the demo Address Validation API essentials Set up the Address Validation API Send an address validation request Understand a basic response Use address validation in your workflow Handle the validation response Build your validation logic Fix address - examples Add subpremises - examples (US only) Confirm address - examples Accept address - examples Handle US addresses Handle updated addresses Convert addresses into English Get Started Get Started with Google Maps Platform Capabilities Explorer Pricing & Billing Security & Compliance Reporting & Monitoring FAQ Support and Resources Customer Care Incident Management Maps Maps JavaScript API Maps SDK for Android Maps SDK for iOS Google Maps for Flutter Maps Embed API Maps Static API Street View Insights Street View Static API Maps URLs Aerial View API Elevation API Map Tiles API Maps Datasets API Web Components Routes Routes API Navigation SDK for Android Navigation SDK for iOS Navigation for Flutter Navigation for React Native Roads API Route Optimization API Analytics Google Earth Places Insights Imagery Insights Roads Management Insights Places Places API Places SDK for Android Places SDK for iOS Places Library, Maps JavaScript API Geocoding API Geolocation API Address Validation API Time Zone API Places Aggregate API Environment Air Quality API Pollen API Solar API Weather API Solutions Maps Builder agent Industry solutions Mobility services Additional Resources API Security Best Practices Digital Signature Guide Map Coverage Details Optimization Guide Mobile OS and software support Launch stages Legacy products Deprecations URL Encoding WordPress Users GitHub YouTube LinkedIn Discord Innovators Issue Tracker Home Products Google Maps Platform Documentation Web Services Address Validation API Send feedback Build your validation logic Stay organized with collections Save and categorize content based on your preferences.
- Confirm address examples ACCEPT signals You might accept an address when the Address Validation API API response provides a high degree of confidence that the address is deliverable and can be used without further customer interaction in the downstream process.
- Fix address examples CONFIRM_ADD_SUBPREMISES signals (US addresses only) You prompt your customer to review the address and consider adding a unit number when the Address Validation API response indicates the address might be missing a subpremises.
- Add subpremises address examples CONFIRM signals You confirm an address when the verdict indicates that the Address Validation API either inferred or made changes to address components in order to produce a validated address.

### Understand a basic address validation response | Address Validation API | Google for Developers

- URL: [https://developers.google.com/maps/documentation/address-validation/understand-response](https://developers.google.com/maps/documentation/address-validation/understand-response)
- Source ID: `feature-recovery-direct-http`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Understand a basic address validation response | Address Validation API | Google for Developers Skip to main content Maps Platform Overview Products Pricing Documentation Get Started Get Started with Google Maps Platform Capabilities Explorer Pricing & Billing Security & Compliance Reporting & Monitoring FAQ Support and Resources Customer Care Incident Management Maps Maps JavaScript API Maps SDK for Android Maps SDK for iOS Google Maps for Flutter Maps Embed API Maps Static API Street View Insights Street View Static API Maps URLs Aerial View API Elevation API Map Tiles API Maps Datasets API Web Components Routes Routes API Navigation SDK for Android Navigation SDK for iOS Navigation for Flutter Navigation for React Native Roads API Route Optimization API Analytics Google Earth Places Insights Imagery Insights Roads Management Insights Places Places API Places SDK for Android Places SDK for iOS Places Library, Maps JavaScript API Geocoding API Geolocation API Address Validation API Time Zone API Places Aggregate API Environment Air Quality API Pollen API Solar API Weather API Solutions Maps Builder agent Industry solutions Mobility services Additional Resources API Security Best Practices Digital Signature Guide Map Coverage Details Optimization Guide Mobile OS and software support Launch stages Legacy products Deprecations URL Encoding WordPress Users Blog Community GitHub YouTube LinkedIn Discord Innovators Issue Tracker / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Web Services Address Validation API Get Started Contact sales Guides Reference Resources Maps Platform Overview Products Pricing Documentation More Guides Reference Resources Blog Community More Address Validation API Overview Try the demo Address Validation API essentials Set up the Address Validation API Send an address validation request Understand a basic response Use address validation in your workflow Handle the validation response Build your validation logic Fix address - examples Add subpremises - examples (US only) Confirm address - examples Accept address - examples Handle US addresses Handle updated addresses Convert addresses into English Get Started Get Started with Google Maps Platform Capabilities Explorer Pricing & Billing Security & Compliance Reporting & Monitoring FAQ Support and Resources Customer Care Incident Management Maps Maps JavaScript API Maps SDK for Android Maps SDK for iOS Google Maps for Flutter Maps Embed API Maps Static API Street View Insights Street View Static API Maps URLs Aerial View API Elevation API Map Tiles API Maps Datasets API Web Components Routes Routes API Navigation SDK for Android Navigation SDK for iOS Navigation for Flutter Navigation for React Native Roads API Route Optimization API Analytics Google Earth Places Insights Imagery Insights Roads Management Insights Places Places API Places SDK for Android Places SDK for iOS Places Library, Maps JavaScript API Geocoding API Geolocation API Address Validation API Time Zone API Places Aggregate API Environment Air Quality API Pollen API Solar API Weather API Solutions Maps Builder agent Industry solutions Mobility services Additional Resources API Security Best Practices Digital Signature Guide Map Coverage Details Optimization Guide Mobile OS and software support Launch stages Legacy products Deprecations URL Encoding WordPress Users GitHub YouTube LinkedIn Discord Innovators Issue Tracker Home Products Google Maps Platform Documentation Web Services Address Validation API Send feedback Understand a basic address validation response Stay organized with collections Save and categorize content based on your preferences.
- The Address Validation API provides a response body as a JSON object that contains two top-level properties: result , an object of type ValidationResult responseID { "result" : { // Validation verdict. "verdict" : {}, // Address details determined by the API. "address" : {}, // The geocode generated for the input address. "geocode" : {}, // Information indicating if the address is a business, residence, etc. "metadata" : {}, // Information about the address from the US Postal Service // ("US" and "PR" addresses only). "uspsData" : {}, }, // A unique identifier generated for every request to the API. "responseId" : "ID" } This document focuses on the result object.
- For example, an address with an inputGranularity below PREMISE below level does not typically result in a validationGranularity to a PREMISE level. validationGranularity — The granularity level that the Address Validation API can fully validate the address to.
- Page Summary outlined_flag The Address Validation API response contains a result object with properties like verdict , address , geocode , metadata , and uspsData to provide detailed information about the validated address.

