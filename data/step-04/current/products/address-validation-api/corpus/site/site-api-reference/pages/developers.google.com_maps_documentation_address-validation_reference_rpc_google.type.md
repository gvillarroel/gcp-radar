---
title: "Package google.type \_|\_ Address Validation API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.type
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/reference/rpc/google.type
  title: "Package google.type \_|\_ Address Validation API \_|\_ Google for Developers"
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
Package google.type
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Address Validation API uses LatLng and PostalAddress message types for location and address data.
LatLng represents latitude and longitude coordinates conforming to the WGS84 standard.
PostalAddress stores structured address information, including region code, postal code, and address lines.
Address lines in PostalAddress should follow the "envelope order" for the specific region and can contain multiple values in a single field.
While recipients and organization fields exist, they are currently unused by the API and should be avoided.
Index
LatLng (message)
PostalAddress (message)
LatLng
An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard . Values must be within normalized ranges.
Fields
latitude
double
The latitude in degrees. It must be in the range [-90.0, +90.0].
longitude
double
The longitude in degrees. It must be in the range [-180.0, +180.0].
PostalAddress
Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains.
In typical usage, an address would be created by user input or from importing existing data, depending on the type of process.
Advice on address input or editing:
Use an internationalization-ready address widget such as https://github.com/google/libaddressinput .
Users should not be presented with UI elements for input or editing of fields outside countries where that field is used.
For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478 .
Fields
revision
int32
The schema revision of the PostalAddress . Any value other than 0 will cause the API to return an INVALID_ARGUMENT error.
region_code
string
Optional. CLDR region code of the country/region of the address. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. If the region code is not provided, it will be inferred from the address. For best performance, it is recommended to include the region code if you know it. Having inconsistent or repeated regions can lead to poor performance, for example, if the address_lines already includes the region, do not provide the region code again in this field. Supported regions can be found in the FAQ .
language_code
string
The language code in the input address is reserved for future uses and is ignored today. The API returns the address in the appropriate language for where the address is located.
postal_code
string
Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States).
sorting_code
string
Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire).
administrative_area
string
Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated.
locality
string
Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines .
sublocality
string
Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district.
address_lines[]
string
Required. Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. The minimum permitted structural representation of an address consists of all information placed in the address_lines . If a region_code is not provided, the region is inferred from the address lines. Creating an address only containing address_lines , and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
recipients[]
string
Please avoid setting this field. The Address Validation API does not currently use it. Although at this time the API will not reject requests with this field set, the information will be discarded and will not be returned in the response.
organization
string
Please avoid setting this field. The Address Validation API does not currently use it. Although at this time the API will not reject requests with this field set, the information will be discarded and will not be returned in the response.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The content defines two data structures: `LatLng` and `PostalAddress`. `LatLng` represents a latitude/longitude pair, with `latitude` in the range \\[-90.0, +90.0] and `longitude` in \\[-180.0, +180.0]. `PostalAddress` models postal addresses, containing fields like `region_code`, `postal_code`, `administrative_area`, `locality`, and `address_lines`. The `address_lines` field is essential, and if the `region_code` is missing it will be inferred from them. Some fields are reserved for the future.\n"]]
