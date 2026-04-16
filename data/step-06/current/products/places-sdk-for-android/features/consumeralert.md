---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.779Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "ConsumerAlert"
feature_slug: "consumeralert"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AiSummary"
  - "https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/android-sdk/support"
keywords:
  - "consumeralert"
  - "the"
  - "class"
  - "is"
  - "now"
  - "available"
  - "for"
  - "working"
---

# ConsumerAlert

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The ConsumerAlert class is now available for working with consumer alerts.

## Extended Definition

The ConsumerAlert class is now available for working with consumer alerts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AiSummary](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AiSummary)
- [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- [https://developers.google.com/maps/documentation/places/android-sdk/support](https://developers.google.com/maps/documentation/places/android-sdk/support)

## Supporting Pages

### AiSummary \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AiSummary](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AiSummary)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AiSummary public abstract class AiSummary implements Parcelable Known direct subclasses EvChargeAmenitySummary , GenerativeSummary , NeighborhoodSummary , ReviewSummary EvChargeAmenitySummary The summary of amenities near the EV charging station.
- Inherited Constants From android.os.Parcelable static final int CONTENTS FILE DESCRIPTOR = 1 static final int PARCELABLE STABILITY LOCAL = 0 static final int PARCELABLE STABILITY VINTF = 1 static final int PARCELABLE WRITE RETURN VALUE = 1 Inherited methods From android.os.Parcelable abstract int describeContents () int getStability () abstract void writeToParcel ( Parcel p, int p1) Public constructors AiSummary public AiSummary () Public methods getDisclosureText public abstract @ Nullable String getDisclosureText () Returns the AI disclosure message "Summarized with Gemini". getDisclosureTextLanguageCode public abstract @ Nullable String getDisclosureTextLanguageCode () Returns the disclosure text's language code, if available. getFlagContentUri public abstract @ Nullable Uri getFlagContentUri () Returns the URI to flag a problem with the summary.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Summary Public constructors AiSummary () Public methods abstract @ Nullable String getDisclosureText () Returns the AI disclosure message "Summarized with Gemini". abstract @ Nullable String getDisclosureTextLanguageCode () Returns the disclosure text's language code, if available. abstract @ Nullable Uri getFlagContentUri () Returns the URI to flag a problem with the summary.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).
- New response data added to Placed Details (New) and Place Photos (New) Place Details (New) now includes the new Review class in the response Place object.

### "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Feature Places API enabled on API key Initialization method Minimum SDK version Autocomplete (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Details (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Nearby Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.5.0 Place Photos (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.4.0 Text Search (New) Places API (New) initializeWithNewPlacesApiEnabled() 3.3.0 Place Autocomplete Places API initialize() (Deprecated) Current Place Places API initialize() (Deprecated) Place Details Places API initialize() (Deprecated) Place Photos Places API initialize() (Deprecated) Deprecated: The Places.initialize method is deprecated.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for Android (New) This section covers key features added to Places SDK for Android (New).
- New response data added to Placed Details (New) and Place Photos (New) Place Details (New) now includes the new Review class in the response Place object.

### Support Options for Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/support](https://developers.google.com/maps/documentation/places/android-sdk/support)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support response times Support response times are indicated in the table below (resolution times may vary): Priority level Example situations Standard Support response time Enhanced Support response time Critical Impact - Service Unusable in Production Applies only to Google Maps Platform services marked as General Availability Your situation matches all the following criteria: Your product or service is unusable in production, or business impact is critical (for example, revenue loss).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- To manage cases in the Google Maps Platform console, you will need to have one of the following roles: Project Owner Project Editor Tech Support Editor Tech Support Viewer The Tech Support Viewer role is only able to view case information and cannot interact with or update the case in any way.
- Ask a new question Report an issue or feature request If you think you may have found a bug, or if you have a feature request that you would like to share with the Google Maps Platform APIs team, please file a bug or feature request in our issue tracker .

