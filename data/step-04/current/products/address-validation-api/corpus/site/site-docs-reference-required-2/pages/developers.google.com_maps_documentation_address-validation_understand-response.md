---
title: "Understand a basic address validation response \_|\_ Address Validation API\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/understand-response
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/understand-response
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/understand-response
  title: "Understand a basic address validation response \_|\_ Address Validation\
    \ API \_|\_ Google for Developers"
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
Send feedback
Understand a basic address validation response
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Address Validation API response contains a result object with properties like verdict , address , geocode , metadata , and uspsData to provide detailed information about the validated address.
The verdict property offers a summary of the address quality, including granularity and completeness indicators, which are crucial for determining deliverability.
The address and addressComponent properties provide formatted address details and insights into potential errors or adjustments made during validation.
The geocode property offers the geocoded location and place ID, while the metadata property might indicate if the address is residential, business, or a PO Box.
The uspsData property provides additional details for US addresses, such as delivery confidence levels, but should be used in conjunction with other properties for comprehensive validation.
Note: This document describes the basic elements of an address validation
response for an address of high quality. For guidance on working with
real-world address scenarios and building logic around more complex responses,
see See Build your validation logic .
The Address Validation API provides a response body as a JSON
object that contains two top-level properties:
result , an object of type ValidationResult
responseID
{
"result" : {
// Validation verdict.
"verdict" : {},
// Address details determined by the API.
"address" : {},
// The geocode generated for the input address.
"geocode" : {},
// Information indicating if the address is a business, residence, etc.
"metadata" : {},
// Information about the address from the US Postal Service
// ("US" and "PR" addresses only).
"uspsData" : {},
},
// A unique identifier generated for every request to the API.
"responseId" : "ID"
}
This document focuses on the result object. For information on the
responseID , see Handle updated addresses .
The verdict property
Key Point: Use the verdict property to get a baseline summary of the quality
of the address.
The verdict property summarizes the results of the address validation and
should be the first property to evaluate when building address checking logic.
The property can return a variety of fields, depending on the quality of the
output address. For example, the following shows the verdict property of an
address of good quality, which returns 4 fields for this particular request:
"verdict" : {
"inputGranularity" : "PREMISE" ,
"validationGranularity" : "PREMISE" ,
"geocodeGranularity" : "PREMISE" ,
"addressComplete" : true ,
"possibleNextAction" : "ACCEPT"
}
The following sections summarize all fields in the verdict property.
See
Verdict in the reference guide.
Possible next action
The possibleNextAction property offers an interpretive summary of the rest of
the API response, with the goal of helping you determine whether or not you
should prompt your customer to review or make edits to their address. See
Build your validation logic
for more details.
Granularity of the address
Address granularity refers to the level of detail used in determining the
specificity of an address or geocode. Address specificity in the
validationGranularity response is a key signal for whether or not an address
is deliverable.
The verdict property returns these granularity signals:
inputGranularity — Describes the level of detail captured from the
address sent to the Address Validation API. The level of address detail in the
request influences the level of address detail in the validation response.
For example, an address with an inputGranularity below PREMISE below
level does not typically result in a validationGranularity to a PREMISE
level.
validationGranularity — The granularity level that the
Address Validation API can fully validate the address to. In most cases, a
granularity level of PREMISE or SUB_PREMISE indicates a quality address
that is likely deliverable.
geocodeGranularity — Describes the level of detail of the geocode
associated with the address. For example, Google records might indicate the
existence of an apartment number, but not a precise location for that
particular apartment within a large apartment complex. In that case, the
validationGranularity is SUB_PREMISE but the geocodeGranularity is PREMISE`.
See
Granularity
in the reference guide.
Completeness of the address
The verdict returns the addressComplete property as a signal for a
high-quality address, which means specifically that it has no missing,
unresolved, or unexpected components:
"verdict" : {
"inputGranularity" : "PREMISE" ,
"validationGranularity" : "PREMISE" ,
"geocodeGranularity" : "PREMISE" ,
"addressComplete" : true ,
"possibleNextAction" : "ACCEPT"
}
When the address has missing, unresolved, or unexpected components, the field
is set to false .
Note: When the addressComplete property does not appear in the verdict
upon manual inspection, its value is false. Depending on your programming
language, you would either query the verdict for the presence of the
addressComplete property or query the property directly. See
Address quality below for an example.
See addressComplete under
Verdict and
Address in the reference guide.
Address quality
A number of possible fields indicate either problems with address components, or
adjustments to them, such as inferred or missing address components. For
example, the following verdict property indicates an address with unconfirmed
components and a missing addressComplete field:
"verdict": {
"inputGranularity": "PREMISE",
"validationGranularity": "OTHER" ,
"geocodeGranularity": "OTHER",
"hasUnconfirmedComponents": true ,
"hasInferredComponents": true
}
See Verdict in the reference guide.
The address and addressComponent properties
Key Point: Use the address property to obtain address formatting. Use its
subcomponent addressComponent for investigating errors and providing
information about those errors to your customers. However, don't build your
integration to rely on the specific confirmation level for address components.
See Build your validation logic for integration guidance.
The address property provides formatting for the processed address provided in
the request, along with component-level summaries of the address, including
misspelled parts of the address, replaced incorrect parts, and inferred missing
parts.
See Address in the reference guide.
The addressComponent property is a subcomponent of address which provides
a detailed listing of the elements—or components—of the address that the
Address Validation API has processed. The API identifies each component
field provides by its name, type, and confirmation level.
See addressComponent in the reference guide.
The geocode property
Key Point: Use the geocode property as a convenience to obtain the geocode or
place ID when your logic previously called the Geocoding API.
The geocode property indicates the geocoded location associated with the input
address. This property provides details about the location itself, such as
its place ID.
See Geocode in the reference guide.
The metadata property
Key Point: Use the metadata property to determine the type of property
associated with the address: residential, PO Box, or business.
This property might not be populated for every address processed by the
Address Validation API, but indicates if the address is of type residential,
business, or a PO Box.
See Address Validation API coverage and the reference for Address metadata .
The uspsData property
Key Point: Use the uspsData property to obtain delivery confidence levels and
other USPS details about US addresses.
This property provides useful information for United States postal addresses.
However, it's not guaranteed to be fully populated for every address validated
by the service. For that reason, you shouldn't rely on this property as the
sole means to validate addresses, but instead check the verdict and
address as well.
See Handle United States addresses and the reference for UspsData .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
