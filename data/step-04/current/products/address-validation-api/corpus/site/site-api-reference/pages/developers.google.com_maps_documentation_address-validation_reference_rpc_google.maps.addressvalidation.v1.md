---
title: "Package google.maps.addressvalidation.v1 \_|\_ Address Validation API \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.maps.addressvalidation.v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.maps.addressvalidation.v1
  title: "Package google.maps.addressvalidation.v1 \_|\_ Address Validation API \_\
    |\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Address Validation API
Reference
Send feedback
Package google.maps.addressvalidation.v1
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Maps Address Validation API validates and standardizes addresses, improving accuracy for address-related tasks.
The API provides detailed validation results, including a structured, validated address, geocoding details, and metadata about deliverability.
USPS-specific data is included for US and Puerto Rico addresses, offering insights into delivery points and carrier routes.
You can provide feedback on validation results using the ProvideValidationFeedback method to improve the API's accuracy.
Address granularity levels indicate the level of detail in the address, ranging from sub-premise to route level.
Index
AddressValidation (interface)
Address (message)
AddressComponent (message)
AddressComponent.ConfirmationLevel (enum)
AddressMetadata (message)
ComponentName (message)
Geocode (message)
LanguageOptions (message)
PlusCode (message)
ProvideValidationFeedbackRequest (message)
ProvideValidationFeedbackRequest.ValidationConclusion (enum)
ProvideValidationFeedbackResponse (message)
UspsAddress (message)
UspsData (message)
ValidateAddressRequest (message)
ValidateAddressResponse (message)
ValidationResult (message)
Verdict (message)
Verdict.Granularity (enum)
Verdict.PossibleNextAction (enum)
AddressValidation
The service for validating addresses.
ProvideValidationFeedback
rpc ProvideValidationFeedback( ProvideValidationFeedbackRequest ) returns ( ProvideValidationFeedbackResponse )
Feedback about the outcome of the sequence of validation attempts. This should be the last call made after a sequence of validation calls for the same address, and should be called once the transaction is concluded. This should only be sent once for the sequence of ValidateAddress requests needed to validate an address fully.
ValidateAddress
rpc ValidateAddress( ValidateAddressRequest ) returns ( ValidateAddressResponse )
Validates an address.
Address
Details of the post-processed address. Post-processing includes correcting misspelled parts of the address, replacing incorrect parts, and inferring missing parts.
Fields
formatted_address
string
The post-processed address, formatted as a single-line address following the address formatting rules of the region where the address is located.
Note: the format of this address may not match the format of the address in the postal_address field. For example, the postal_address always represents the country as a 2 letter region_code , such as "US" or "NZ". By contrast, this field uses a longer form of the country name, such as "USA" or "New Zealand".
postal_address
PostalAddress
The post-processed address represented as a postal address.
address_components[]
AddressComponent
Unordered list. The individual address components of the formatted and corrected address, along with validation information. This provides information on the validation status of the individual components.
Address components are not ordered in a particular way. Do not make any assumptions on the ordering of the address components in the list.
missing_component_types[]
string
The types of components that were expected to be present in a correctly formatted mailing address but were not found in the input AND could not be inferred. An example might be ['street_number', 'route'] for an input like "Boulder, Colorado, 80301, USA". The list of possible types can be found here .
Note: you might see a missing component type when you think you've already supplied the missing component. For example, this can happen when the input address contains the building name, but not the premise number. In the address "渋谷区渋谷３丁目 Shibuya Stream", the building name "Shibuya Stream" has the component type premise , but the premise number is missing, so missing_component_types will contain premise .
unconfirmed_component_types[]
string
The types of the components that are present in the address_components but could not be confirmed to be correct. This field is provided for the sake of convenience: its contents are equivalent to iterating through the address_components to find the types of all the components where the confirmation_level is not CONFIRMED or the inferred flag is not set to true . The list of possible types can be found here .
unresolved_tokens[]
string
Any tokens in the input that could not be resolved. This might be an input that was not recognized as a valid part of an address. For example, for an input such as "Parcel 0000123123 & 0000456456 Str # Guthrie Center IA 50115 US", the unresolved tokens might look like ["Parcel",
"0000123123", "&", "0000456456"] .
AddressComponent
Represents an address component, such as a street, city, or state.
Fields
component_name
ComponentName
The name for this component.
component_type
string
The type of the address component. See Table 2: Additional types returned by the Places service for a list of possible types.
confirmation_level
ConfirmationLevel
Indicates the level of certainty that we have that the component is correct.
inferred
bool
Indicates that the component was not part of the input, but we inferred it for the address location and believe it should be provided for a complete address.
spell_corrected
bool
Indicates a correction to a misspelling in the component name. The API does not always flag changes from one spelling variant to another, such as when changing "centre" to "center". It also does not always flag common misspellings, such as when changing "Amphitheater Pkwy" to "Amphitheatre Pkwy".
replaced
bool
Indicates the name of the component was replaced with a completely different one, for example a wrong postal code being replaced with one that is correct for the address. This is not a cosmetic change, the input component has been changed to a different one.
unexpected
bool
Indicates an address component that is not expected to be present in a postal address for the given region. We have retained it only because it was part of the input.
ConfirmationLevel
The different possible values for confirmation levels.
Enums
CONFIRMATION_LEVEL_UNSPECIFIED
Default value. This value is unused.
CONFIRMED
We were able to verify that this component exists and makes sense in the context of the rest of the address.
UNCONFIRMED_BUT_PLAUSIBLE
This component could not be confirmed, but it is plausible that it exists. For example, a street number within a known valid range of numbers on a street where specific house numbers are not known.
UNCONFIRMED_AND_SUSPICIOUS
This component was not confirmed and is likely to be wrong. For example, a neighborhood that does not fit the rest of the address.
AddressMetadata
The metadata for the post-processed address. metadata is not guaranteed to be fully populated for every address sent to the Address Validation API.
Fields
business
bool
Indicates that this is the address of a business. If unset, indicates that the value is unknown.
po_box
bool
Indicates that the address of a PO box. If unset, indicates that the value is unknown.
residential
bool
Indicates that this is the address of a residence. If unset, indicates that the value is unknown.
ComponentName
A wrapper for the name of the component.
Fields
text
string
The name text. For example, "5th Avenue" for a street name or "1253" for a street number.
language_code
string
The BCP-47 language code. This will not be present if the component name is not associated with a language, such as a street number.
Geocode
Contains information about the place the input was geocoded to.
Fields
location
LatLng
The geocoded location of the input.
Using place IDs is preferred over using addresses, latitude/longitude coordinates, or plus codes. Using coordinates when routing or calculating driving directions will always result in the point being snapped to the road nearest to those coordinates. This may not be a road that will quickly or safely lead to the destination and may not be near an access point to the property. Additionally, when a location is reverse geocoded, there is no guarantee that the returned address will match the original.
plus_code
PlusCode
The plus code corresponding to the location .
bounds
Viewport
The bounds of the geocoded place.
feature_size_meters
float
The size of the geocoded place, in meters. This is another measure of the coarseness of the geocoded location, but in physical size rather than in semantic meaning.
place_id
string
The PlaceID of the place this input geocodes to.
For more information about Place IDs see here .
place_types[]
string
The type(s) of place that the input geocoded to. For example, ['locality', 'political'] . The full list of types can be found here .
LanguageOptions
Preview: This feature is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the Google Maps Platform Service Specific Terms . For more information, see the launch stage descriptions .
Enables the Address Validation API to include additional information in the response.
Fields
return_english_latin_address
bool
Preview: Return a google.maps.addressvalidation.v1.Address in English. See google.maps.addressvalidation.v1.ValidationResult.english_latin_address for details.
PlusCode
Plus code ( http://plus.codes ) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location.
Fields
global_code
string
Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (~14 by 14 meters).
compound_code
string
Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity.
ProvideValidationFeedbackRequest
The request for sending validation feedback.
Fields
conclusion
ValidationConclusion
Required. The outcome of the sequence of validation attempts.
If this field is set to VALIDATION_CONCLUSION_UNSPECIFIED , an INVALID_ARGUMENT error will be returned.
response_id
string
Required. The ID of the response that this feedback is for. This should be the [response_id][google.maps.addressvalidation.v1.ValidateAddressRequest.response_id] from the first response in a series of address validation attempts.
ValidationConclusion
The possible final outcomes of the sequence of address validation requests needed to validate an address.
Enums
VALIDATION_CONCLUSION_UNSPECIFIED
This value is unused. If the ProvideValidationFeedbackRequest.conclusion field is set to VALIDATION_CONCLUSION_UNSPECIFIED , an INVALID_ARGUMENT error will be returned.
VALIDATED_VERSION_USED
The version of the address returned by the Address Validation API was used for the transaction.
USER_VERSION_USED
The version of the address provided by the user was used for the transaction
UNVALIDATED_VERSION_USED
A version of the address that was entered after the last validation attempt but that was not re-validated was used for the transaction.
UNUSED
The transaction was abandoned and the address was not used.
ProvideValidationFeedbackResponse
This type has no fields.
The response for validation feedback.
The response is empty if the feedback is sent successfully.
UspsAddress
USPS representation of a US address.
Fields
first_address_line
string
First address line.
firm
string
Firm name.
second_address_line
string
Second address line.
urbanization
string
Puerto Rican urbanization name.
city_state_zip_address_line
string
City + state + postal code.
city
string
City name.
state
string
2 letter state code.
zip_code
string
Postal code e.g. 10009.
zip_code_extension
string
4-digit postal code extension e.g. 5023.
UspsData
The USPS data for the address. uspsData is not guaranteed to be fully populated for every US or PR address sent to the Address Validation API. It's recommended to integrate the backup address fields in the response if you utilize uspsData as the primary part of the response.
Fields
standardized_address
UspsAddress
USPS standardized address.
delivery_point_code
string
2 digit delivery point code
delivery_point_check_digit
string
The delivery point check digit. This number is added to the end of the delivery_point_barcode for mechanically scanned mail. Adding all the digits of the delivery_point_barcode, delivery_point_check_digit, postal code, and ZIP+4 together should yield a number divisible by 10.
dpv_confirmation
string
The possible values for DPV confirmation. Returns a single character or returns no value.
N : Primary and any secondary number information failed to DPV confirm.
D : Address was DPV confirmed for the primary number only, and the secondary number information was missing.
S : Address was DPV confirmed for the primary number only, and the secondary number information was present but not confirmed.
Y : Address was DPV confirmed for primary and any secondary numbers.
Empty: If the response does not contain a dpv_confirmation value, the address was not submitted for DPV confirmation.
dpv_footnote
string
The footnotes from delivery point validation. Multiple footnotes may be strung together in the same string.
AA : Input address matched to the ZIP+4 file
A1 : Input address was not matched to the ZIP+4 file
BB : Matched to DPV (all components)
CC : Secondary number not matched and not required
C1 : Secondary number not matched but required
N1 : High-rise address missing secondary number
M1 : Primary number missing
M3 : Primary number invalid
P1 : Input address PO, RR or HC box number missing
P3 : Input address PO, RR, or HC Box number invalid
F1 : Input address matched to a military address
G1 : Input address matched to a general delivery address
U1 : Input address matched to a unique ZIP code
PB : Input address matched to PBSA record
RR : DPV confirmed address with PMB information
R1 : DPV confirmed address without PMB information
R7 : Carrier Route R777 or R779 record
IA : Informed Address identified
TA : Primary number matched by dropping a trailing alpha
dpv_cmra
string
Indicates if the address is a CMRA (Commercial Mail Receiving Agency)--a private business receiving mail for clients. Returns a single character.
Y : The address is a CMRA
N : The address is not a CMRA
dpv_vacant
string
Is this place vacant? Returns a single character.
Y : The address is vacant
N : The address is not vacant
dpv_no_stat
string
Is this a no stat address or an active address? No stat addresses are ones which are not continuously occupied or addresses that the USPS does not service. Returns a single character.
Y : The address is not active
N : The address is active
dpv_no_stat_reason_code
int32
Indicates the NoStat type. Returns a reason code as int.
1 : IDA (Internal Drop Address) – Addresses that do not receive mail directly from the USPS but are delivered to a drop address that services them.
2 : CDS - Addresses that have not yet become deliverable. For example, a new subdivision where lots and primary numbers have been determined, but no structure exists yet for occupancy.
3 : Collision - Addresses that do not actually DPV confirm.
4 : CMZ (College, Military and Other Types) - ZIP + 4 records USPS has incorporated into the data.
5 : Regular - Indicates addresses not receiving delivery and the addresses are not counted as possible deliveries.
6 : Secondary Required - The address requires secondary information.
dpv_drop
string
Flag indicates mail is delivered to a single receptable at a site. Returns a single character.
Y : The mail is delivered to a single receptable at a site.
N : The mail is not delivered to a single receptable at a site.
dpv_throwback
string
Indicates that mail is not delivered to the street address. Returns a single character.
Y : The mail is not delivered to the street address.
N : The mail is delivered to the street address.
dpv_non_delivery_days
string
Flag indicates mail delivery is not performed every day of the week. Returns a single character.
Y : The mail delivery is not performed every day of the week.
N : No indication the mail delivery is not performed every day of the week.
dpv_non_delivery_days_values
int32
Integer identifying non-delivery days. It can be interrogated using bit flags: 0x40 – Sunday is a non-delivery day 0x20 – Monday is a non-delivery day 0x10 – Tuesday is a non-delivery day 0x08 – Wednesday is a non-delivery day 0x04 – Thursday is a non-delivery day 0x02 – Friday is a non-delivery day 0x01 – Saturday is a non-delivery day
dpv_no_secure_location
string
Flag indicates door is accessible, but package will not be left due to security concerns. Returns a single character.
Y : The package will not be left due to security concerns.
N : No indication the package will not be left due to security concerns.
dpv_pbsa
string
Indicates the address was matched to PBSA record. Returns a single character.
Y : The address was matched to PBSA record.
N : The address was not matched to PBSA record.
dpv_door_not_accessible
string
Flag indicates addresses where USPS cannot knock on a door to deliver mail. Returns a single character.
Y : The door is not accessible.
N : No indication the door is not accessible.
dpv_enhanced_delivery_code
string
Indicates that more than one DPV return code is valid for the address. Returns a single character.
Y : Address was DPV confirmed for primary and any secondary numbers.
N : Primary and any secondary number information failed to DPV confirm.
S : Address was DPV confirmed for the primary number only, and the secondary number information was present but not confirmed, or a single trailing alpha on a primary number was dropped to make a DPV match and secondary information required.
D : Address was DPV confirmed for the primary number only, and the secondary number information was missing.
R : Address confirmed but assigned to phantom route R777 and R779 and USPS delivery is not provided.
carrier_route
string
The carrier route code. A four character code consisting of a one letter prefix and a three digit route designator.
Prefixes:
C : Carrier route (or city route)
R : Rural route
H : Highway Contract Route
B : Post Office Box Section
G : General delivery unit
carrier_route_indicator
string
Carrier route rate sort indicator.
ews_no_match
bool
The delivery address is matchable, but the EWS file indicates that an exact match will be available soon.
post_office_city
string
Main post office city.
post_office_state
string
Main post office state.
abbreviated_city
string
Abbreviated city.
fips_county_code
string
FIPS county code.
county
string
County name.
elot_number
string
Enhanced Line of Travel (eLOT) number.
elot_flag
string
eLOT Ascending/Descending Flag (A/D).
lacs_link_return_code
string
LACSLink return code.
lacs_link_indicator
string
LACSLink indicator.
po_box_only_postal_code
bool
PO Box only postal code.
suitelink_footnote
string
Footnotes from matching a street or highrise record to suite information. If business name match is found, the secondary number is returned.
A : SuiteLink record match, business address improved.
00 : No match, business address is not improved.
pmb_designator
string
PMB (Private Mail Box) unit designator.
pmb_number
string
PMB (Private Mail Box) number;
address_record_type
string
Type of the address record that matches the input address.
F : FIRM. This is a match to a Firm Record, which is the finest level of match available for an address.
G : GENERAL DELIVERY. This is a match to a General Delivery record.
H : BUILDING / APARTMENT. This is a match to a Building or Apartment record.
P : POST OFFICE BOX. This is a match to a Post Office Box.
R : RURAL ROUTE or HIGHWAY CONTRACT: This is a match to either a Rural Route or a Highway Contract record, both of which may have associated Box Number ranges.
S : STREET RECORD: This is a match to a Street record containing a valid primary number range.
default_address
bool
Indicator that a default address was found, but more specific addresses exists.
error_message
string
Error message for USPS data retrieval. This is populated when USPS processing is suspended because of the detection of artificially created addresses.
The USPS data fields might not be populated when this error is present.
cass_processed
bool
Indicator that the request has been CASS processed.
ValidateAddressRequest
The request for validating an address.
Fields
address
PostalAddress
Required. The address being validated. Unformatted addresses should be submitted via address_lines .
The total length of the fields in this input must not exceed 280 characters.
Supported regions can be found here .
The language_code value in the input address is reserved for future uses and is ignored today. The validated address result will be populated based on the preferred language for the given address, as identified by the system.
The Address Validation API ignores the values in recipients and organization . Any values in those fields will be discarded and not returned. Please do not set them.
previous_response_id
string
This field must be empty for the first address validation request. If more requests are necessary to fully validate a single address (for example if the changes the user makes after the initial validation need to be re-validated), then each followup request must populate this field with the response_id from the very first response in the validation sequence.
enable_usps_cass
bool
Enables USPS CASS compatible mode. This affects only the google.maps.addressvalidation.v1.ValidationResult.usps_data field of google.maps.addressvalidation.v1.ValidationResult . Note: for USPS CASS enabled requests for addresses in Puerto Rico, a google.type.PostalAddress.region_code of the address must be provided as "PR", or an google.type.PostalAddress.administrative_area of the address must be provided as "Puerto Rico" (case-insensitive) or "PR".
It's recommended to use a componentized address , or alternatively specify at least two google.type.PostalAddress.address_lines where the first line contains the street number and name and the second line contains the city, state, and zip code.
language_options
LanguageOptions
Optional. Preview: This feature is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the Google Maps Platform Service Specific Terms . For more information, see the launch stage descriptions .
Enables the Address Validation API to include additional information in the response.
session_token
string
Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned.
The session begins when the user makes an Autocomplete query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple Autocomplete queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the sessionToken parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).
Note: Address Validation can only be used in sessions with the Autocomplete (New) API, not the Autocomplete API. See https://developers.google.com/maps/documentation/places/web-service/session-pricing for more details.
ValidateAddressResponse
The response to an address validation request.
Fields
result
ValidationResult
The result of the address validation.
response_id
string
The UUID that identifies this response. If the address needs to be re-validated, this UUID must accompany the new request.
ValidationResult
The result of validating an address.
Fields
verdict
Verdict
Overall verdict flags
address
Address
Information about the address itself as opposed to the geocode.
geocode
Geocode
Information about the location and place that the address geocoded to.
metadata
AddressMetadata
Other information relevant to deliverability. metadata is not guaranteed to be fully populated for every address sent to the Address Validation API.
usps_data
UspsData
Extra deliverability flags provided by USPS. Only provided in region US and PR .
english_latin_address
Address
Preview: This feature is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the Google Maps Platform Service Specific Terms . For more information, see the launch stage descriptions .
The address translated to English.
Translated addresses are not reusable as API input. The service provides them so that the user can use their native language to confirm or deny the validation of the originally-provided address.
If part of the address doesn't have an English translation, the service returns that part in an alternate language that uses a Latin script. See here for an explanation of how the alternate language is selected. If part of the address doesn't have any translations or transliterations in a language that uses a Latin script, the service returns that part in the local language associated with the address.
Enable this output by using the google.maps.addressvalidation.v1.LanguageOptions.return_english_latin_address flag.
Note: the google.maps.addressvalidation.v1.Address.unconfirmed_component_types field in the english_latin_address and the google.maps.addressvalidation.v1.AddressComponent.confirmation_level fields in english_latin_address.address_components are not populated.
Verdict
High level overview of the address validation result and geocode.
Fields
input_granularity
Granularity
The granularity of the input address. This is the result of parsing the input address and does not give any validation signals. For validation signals, refer to validation_granularity below.
For example, if the input address includes a specific apartment number, then the input_granularity here will be SUB_PREMISE . If the address validation service cannot match the apartment number in the databases or the apartment number is invalid, the validation_granularity will likely be PREMISE or more coarse.
validation_granularity
Granularity
The level of granularity for the post-processed address that the API can fully validate. For example, a validation_granularity of PREMISE indicates all address components at the level of PREMISE or more coarse can be validated.
Per address component validation result can be found in google.maps.addressvalidation.v1.Address.address_components .
geocode_granularity
Granularity
Information about the granularity of the geocode . This can be understood as the semantic meaning of how coarse or fine the geocoded location is.
This can differ from the validation_granularity above occasionally. For example, our database might record the existence of an apartment number but do not have a precise location for the apartment within a big apartment complex. In that case, the validation_granularity will be SUB_PREMISE but the geocode_granularity will be PREMISE .
address_complete
bool
The post-processed address is considered complete if there are no unresolved tokens, no unexpected or missing address components. If unset, indicates that the value is false . See missing_component_types , unresolved_tokens or unexpected fields for more details.
has_unconfirmed_components
bool
At least one address component cannot be categorized or validated, see google.maps.addressvalidation.v1.Address.address_components for details.
has_inferred_components
bool
At least one address component was inferred (added) that wasn't in the input, see google.maps.addressvalidation.v1.Address.address_components for details.
has_replaced_components
bool
At least one address component was replaced, see google.maps.addressvalidation.v1.Address.address_components for details.
possible_next_action
PossibleNextAction
Preview: This feature is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the Google Maps Platform Service Specific Terms . For more information, see the launch stage descriptions .
Offers an interpretive summary of the API response, intended to assist in determining a potential subsequent action to take. This field is derived from other fields in the API response and should not be considered as a guarantee of address accuracy or deliverability. See Build your validation logic for more details.
has_spell_corrected_components
bool
At least one address component was spell-corrected, see google.maps.addressvalidation.v1.Address.address_components for details.
Granularity
The various granularities that an address or a geocode can have. When used to indicate granularity for an address , these values indicate with how fine a granularity the address identifies a mailing destination. For example, an address such as "123 Main Street, Redwood City, CA, 94061" identifies a PREMISE while something like "Redwood City, CA, 94061" identifies a LOCALITY . However, if we are unable to find a geocode for "123 Main Street" in Redwood City, the geocode returned might be of LOCALITY granularity even though the address is more granular.
Enums
GRANULARITY_UNSPECIFIED
Default value. This value is unused.
SUB_PREMISE
Below-building level result, such as an apartment.
PREMISE
Building-level result.
PREMISE_PROXIMITY
A geocode that approximates the building-level location of the address.
BLOCK
The address or geocode indicates a block. Only used in regions which have block-level addressing, such as Japan.
ROUTE
The geocode or address is granular to route, such as a street, road, or highway.
OTHER
All other granularities, which are bucketed together since they are not deliverable.
PossibleNextAction
Preview: This feature is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the Google Maps Platform Service Specific Terms . For more information, see the launch stage descriptions .
Possible next actions that could be taken, based on the API response.
Enums
POSSIBLE_NEXT_ACTION_UNSPECIFIED
Default value. This value is unused.
FIX
One or more fields of the API response indicate a potential issue with the post-processed address, for example the verdict.validation_granularity is OTHER . Prompting your customer to edit the address could help improve the quality of the address.
CONFIRM_ADD_SUBPREMISES
The API response indicates the post-processed address might be missing a subpremises. Prompting your customer to review the address and consider adding a unit number could help improve the quality of the address. The post-processed address might also have other minor issues. Note: this enum value can only be returned for US addresses.
CONFIRM
One or more fields of the API response indicate potential minor issues with the post-processed address, for example the postal_code address component was replaced . Prompting your customer to review the address could help improve the quality of the address.
ACCEPT
The API response does not contain signals that warrant one of the other PossibleNextAction values. You might consider using the post-processed address without further prompting your customer, though this does not guarantee the address is valid, and the address might still contain corrections. It is your responsibility to determine if and how to prompt your customer, depending on your own risk assessment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The core functionality revolves around the `AddressValidation` interface, which validates addresses via `ValidateAddress` and gathers feedback with `ProvideValidationFeedback`. Address details are structured in the `Address` message, containing components, formatting, and metadata. `ValidationResult` and `Verdict` report the outcome, indicating completeness and component status. `ValidateAddressRequest` is used to validate an address. `ValidateAddressResponse` return the response of the validation. `UspsData` contains specific US Postal Service data. `Geocode` provides location data.\n"]]
