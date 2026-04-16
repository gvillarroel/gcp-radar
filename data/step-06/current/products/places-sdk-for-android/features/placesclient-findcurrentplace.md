---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.784Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "PlacesClient.findCurrentPlace()"
feature_slug: "placesclient-findcurrentplace"
latest_feature_date: "2025-09-25"
deprecation_date: "2025-09-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/ktx"
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/auth/package-summary"
keywords:
  - "placesclient"
  - "findcurrentplace"
  - "the"
  - "legacy"
  - "api"
  - "and"
  - "its"
  - "related"
---

# PlacesClient.findCurrentPlace()

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The legacy findCurrentPlace() API and its related request and response classes are deprecated in favor of PlacesClient.searchNearby(); deprecated on 2025-09-25.

## Extended Definition

The legacy findCurrentPlace() API and its related request and response classes are deprecated in favor of PlacesClient.searchNearby(); deprecated on 2025-09-25.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/ktx](https://developers.google.com/maps/documentation/places/android-sdk/ktx)
- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/auth/package-summary](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/auth/package-summary)

## Supporting Pages

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- New features The Places SDK for Android (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) New Text Search service Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".

### "Places Android KTX Overview and Setup \_|\_ Places SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/ktx](https://developers.google.com/maps/documentation/places/android-sdk/ktx)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A demo app is available on GitHub; to run it, clone the repository, obtain a Places API key, and store it in a secrets.properties file in the root directory.
- Note: As of version 4.0.0 , the Places SDK for Android includes native Kotlin APIs that can be used instead of the Places Android KTX extensions.
- Native Kotlin APIs within the Places SDK for Android (version 4.0.0 and later) can be used as an alternative to Places Android KTX extensions.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Places KTX provides Kotlin extensions for the Places SDK for Android, enabling concise Kotlin development.

### "com.google.android.libraries.places.api.auth \_|\_ Places SDK for Android\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/auth/package-summary](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/auth/package-summary)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["The core content defines PlacesAppCheckTokenProvider, an interface within the com.google.android.libraries.places.api.auth package.
- Home Products Google Maps Platform Documentation Android Places SDK for Android Reference Send feedback Stay organized with collections Save and categorize content based on your preferences. com.google.android.libraries.places.api.auth Interfaces PlacesAppCheckTokenProvider An interface for fetching the App Check token.
- This token is likely used for authentication or verification purposes within the Google Places API for Android.\n"]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

