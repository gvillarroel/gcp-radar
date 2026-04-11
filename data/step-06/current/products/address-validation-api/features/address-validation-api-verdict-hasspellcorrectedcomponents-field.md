---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:33.670Z"
product_name: "Address Validation API"
product_slug: "address-validation-api"
feature_name: "Address Validation API verdict hasSpellCorrectedComponents field"
feature_slug: "address-validation-api-verdict-hasspellcorrectedcomponents-field"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://developers.google.com/maps/documentation/address-validation/build-validation-logic"
  - "https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress"
keywords:
  - "component spell correction indicator"
  - "spell-corrected components flag"
  - "address component correction flag"
  - "spell corrected components"
  - "verdict.hasSpellCorrectedComponents"
  - "hasSpellCorrectedComponents field"
  - "hasSpellCorrectedComponents"
  - "spellCorrectedComponents"
---

# Address Validation API verdict hasSpellCorrectedComponents field

Product: Address Validation API
Coverage: HIGH

## Step 02 Summary

The Address Validation API now includes a `hasSpellCorrectedComponents` field in the verdict to indicate whether address components were spell-corrected.

## Extended Definition

`hasSpellCorrectedComponents` is a boolean field in Address Validation API verdict data for the `validateAddress` response that indicates whether any address components were spell-corrected. When the field is `true`, at least one component had spelling correction; when `false`, no spell corrections were made. The field is used in validation-flow logic to decide when to ask users to confirm corrected addresses.

## Evidence Summary

These pages define the field as a response boolean in validation results and explicitly state its truth meaning (`true` = spell corrections made, `false` = none), plus show how it is used in client-side validation branching.

## Source Links

- [https://developers.google.com/maps/documentation/address-validation/build-validation-logic](https://developers.google.com/maps/documentation/address-validation/build-validation-logic)
- [https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress](https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress)

## Supporting Pages

### "Build your validation logic \_|\_ Address Validation API \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/address-validation/build-validation-logic](https://developers.google.com/maps/documentation/address-validation/build-validation-logic)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions using address component changes as a signal but does not explicitly document a `hasSpellCorrectedComponents` verdict field.

Evidence snippets:
- For example, rather than use the logic described in the Key purpose section, you could use the following logic. if (verdict.possibleNextAction == FIX or verdict.validationGranularity == OTHER or verdict.validationGranularity == ROUTE) Prompt customer to fix their address. else if (verdict.possibleNextAction == CONFIRM ADD SUBPREMISES) Prompt customer to add a unit number. else if (verdict.possibleNextAction == CONFIRM or verdict.validationGranularity == PREMISE PROXIMITY or verdict.hasSpellCorrectedComponents or verdict.hasReplacedComponents or verdict.hasInferredComponents) Prompt customer to confirm their address. else Proceed with the returned address.
- Spell corrections When the hasSpellCorrectedComponents field is true , the API corrected the spelling of some misspelled components.
- No spell corrections When the hasSpellCorrectedComponents field is false , you know that no spell corrections have been made.

### Method: validateAddress \_|\_ Address Validation API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress](https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress)
- Source ID: `site-api-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: The page is the validateAddress API reference and mentions validation flags, but this excerpt does not explicitly name or describe `hasSpellCorrectedComponents`.

Evidence snippets:
- JSON representation { "inputGranularity" : enum ( Granularity ) , "validationGranularity" : enum ( Granularity ) , "geocodeGranularity" : enum ( Granularity ) , "addressComplete" : boolean , "hasUnconfirmedComponents" : boolean , "hasInferredComponents" : boolean , "hasReplacedComponents" : boolean , "possibleNextAction" : enum ( PossibleNextAction ) , "hasSpellCorrectedComponents" : boolean } Fields inputGranularity enum ( Granularity ) The granularity of the input address.
- See Build your validation logic for more details. hasSpellCorrectedComponents boolean At least one address component was spell-corrected, see google.maps.addressvalidation.v1.Address.address components for details.

