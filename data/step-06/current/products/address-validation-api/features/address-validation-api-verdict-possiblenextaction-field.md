---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:33.671Z"
product_name: "Address Validation API"
product_slug: "address-validation-api"
feature_name: "Address Validation API verdict possibleNextAction field"
feature_slug: "address-validation-api-verdict-possiblenextaction-field"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://developers.google.com/maps/documentation/address-validation/build-validation-logic"
  - "https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.maps.addressvalidation.v1"
  - "https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress"
keywords:
  - "next action recommendation"
  - "recommended next action"
  - "next action suggestion"
  - "possible_next_action"
  - "possible next action"
  - "post-validation action"
  - "verdict.possibleNextAction"
  - "possibleNextAction field"
---

# Address Validation API verdict possibleNextAction field

Product: Address Validation API
Coverage: HIGH

## Step 02 Summary

The Address Validation API now includes a `possibleNextAction` field in the verdict to indicate recommended next steps after receiving a validation response.

## Extended Definition

The `verdict.possibleNextAction` feature in Address Validation API exposes an enum (`PossibleNextAction`) in the validation verdict that indicates the recommended next step after a validation attempt, such as prompting to fix an address, add sub-premises, confirm it, or continue with the returned address. It is intended to be used by client-side validation logic to determine post-validation flow for end users. The API reference also labels this field as a Preview (pre-GA) feature.

## Evidence Summary

The cited Pages define `verdict.possibleNextAction` as an enum-based action recommendation in the verdict, show sample decision logic that consumes it, and explicitly mark the feature as Preview in the API reference.

## Source Links

- [https://developers.google.com/maps/documentation/address-validation/build-validation-logic](https://developers.google.com/maps/documentation/address-validation/build-validation-logic)
- [https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.maps.addressvalidation.v1](https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.maps.addressvalidation.v1)
- [https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress](https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress)

## Supporting Pages

### "Build your validation logic \_|\_ Address Validation API \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/address-validation/build-validation-logic](https://developers.google.com/maps/documentation/address-validation/build-validation-logic)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly centers on using `verdict.possibleNextAction` to decide Fix, Confirm, or Accept handling logic in address validation workflows.

Evidence snippets:
- Customize your validation logic While you can use the results from the verdict.possibleNextAction field to determine how your system proceeds with the API response, you might also consider building custom logic, such as to handle business-specific needs.
- For example, rather than use the logic described in the Key purpose section, you could use the following logic. if (verdict.possibleNextAction == FIX or verdict.validationGranularity == OTHER or verdict.validationGranularity == ROUTE) Prompt customer to fix their address. else if (verdict.possibleNextAction == CONFIRM ADD SUBPREMISES) Prompt customer to add a unit number. else if (verdict.possibleNextAction == CONFIRM or verdict.validationGranularity == PREMISE PROXIMITY or verdict.hasSpellCorrectedComponents or verdict.hasReplacedComponents or verdict.hasInferredComponents) Prompt customer to confirm their address. else Proceed with the returned address.
- The following pseudocode illustrates a possible flow. if (verdict.possibleNextAction == FIX) Prompt the user to fix the address. else if (verdict.possibleNextAction == CONFIRM ADD SUBPREMISES) Prompt the user to add a unit number. else if (verdict.possibleNextAction == CONFIRM) Confirm with the user that the address is correct. else Continue with the address returned by the API.
- For example, rather than use the logic described in the Key purpose section, you could use the following logic. if (verdict.possibleNextAction == FIX) Prompt customer to fix their address. else if (verdict.hasReplacedComponents) Prompt customer to confirm their address. else Proceed with the returned address.

### "Package google.maps.addressvalidation.v1 \_|\_ Address Validation API \_\

- URL: [https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.maps.addressvalidation.v1](https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.maps.addressvalidation.v1)
- Source ID: `site-api-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- See missing component types , unresolved tokens or unexpected fields for more details. has unconfirmed components bool At least one address component cannot be categorized or validated, see google.maps.addressvalidation.v1.Address.address components for details. has inferred components bool At least one address component was inferred (added) that wasn't in the input, see google.maps.addressvalidation.v1.Address.address components for details. has replaced components bool At least one address component was replaced, see google.maps.addressvalidation.v1.Address.address components for details. possible next action PossibleNextAction Preview: This feature is in Preview (pre-GA).
- Possible next actions that could be taken, based on the API response.
- Enums POSSIBLE NEXT ACTION UNSPECIFIED Default value.
- Index AddressValidation (interface) Address (message) AddressComponent (message) AddressComponent.ConfirmationLevel (enum) AddressMetadata (message) ComponentName (message) Geocode (message) LanguageOptions (message) PlusCode (message) ProvideValidationFeedbackRequest (message) ProvideValidationFeedbackRequest.ValidationConclusion (enum) ProvideValidationFeedbackResponse (message) UspsAddress (message) UspsData (message) ValidateAddressRequest (message) ValidateAddressResponse (message) ValidationResult (message) Verdict (message) Verdict.Granularity (enum) Verdict.PossibleNextAction (enum) AddressValidation The service for validating addresses.

### Method: validateAddress \_|\_ Address Validation API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress](https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/validateAddress)
- Source ID: `site-api-reference`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is the authoritative response schema reference and explicitly references `PossibleNextAction` as part of the validation result structures, supporting documentation for this feature.

Evidence snippets:
- Possible next actions that could be taken, based on the API response.
- Enums POSSIBLE NEXT ACTION UNSPECIFIED Default value.

