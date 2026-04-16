---
title: "Send an address validation request \_|\_ Address Validation API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/address-validation/requests-validate-address
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/build-validation-logic
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/requests-validate-address
  title: "Send an address validation request \_|\_ Address Validation API \_|\_ Google\
    \ for Developers"
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
Send an address validation request
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Address Validation API validates addresses using a POST request to a specified endpoint with a JSON request body containing the address details.
The request body minimally requires the addressLines field, while regionCode is recommended for improved accuracy.
For US and PR addresses, enabling the enableUspsCass option leverages the CASS™ system for enhanced validation and standardization.
Users can experiment with the API using the API Explorer, which allows for composing requests, customizing parameters, and executing them.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Send an address validation request by issuing a POST request to one of the
following endpoints:
validateAddress (REST)
ValidateAddress (gRPC)
Note: This documentation uses REST for its examples, but the approach is similar
with gRPC .
Your request should also pass a JSON request body to the request that
defines the address to validate. The following request body contains one field
and three subfields:
curl - X POST - d ' {
"address" : {
"regionCode" : "US" ,
"locality" : "Mountain View" ,
"addressLines" : [ "1600 Amphitheatre Pkwy" ]
}
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' \
"https://addressvalidation.googleapis.com/v1:validateAddress?key= API_KEY "
You can also omit locality and specify it as an element in
the addressLines array:
{
"address" : {
"regionCode" : "US" ,
"addressLines" : [ "1600 Amphitheatre Pkwy" , "Mountain View, CA, 94043" ]
},
}
The APIs Explorer lets you make live requests so that you can get familiar with
the API and the API options:
Try it!
Address request fields
The request body consists of a single field:
address — a field of type PostalAddress , which must contain at
least one entry in addressLines .
When sending the address field to the Address Validation API, you need only
supply one field: addressLines . However, the simplest address request
should contain the following subfields:
regionCode — Recommended. This is an optional field, but if omitted, the
Address Validation API infers the region from the address. However, for best
results, include the regionCode if you know it.
For the list of supported regions, see supported regions .
addressLines — Required. An array with addresses describing the lower
structure of the address.
See PostalAddress in the reference guide.
USPS CASS™ option
The United States Postal Service® (USPS®) 1 maintains the
Coding Accuracy Support System (CASS™) to support and certify
address validation providers.
Note: The Address Validation API is confirmed as a CASS-Certified™ service. This
means the service is confirmed for its ability to fill in missing address
information, standardize it, and update it to the most current and accurate
address.
For US and PR regions only, you can enable CASS processing by setting
enableUspsCass to true in the request body. For best results when using
CASS, provide an address that includes the street and street number along with
the city, state, and ZIP code:
{
"address" : {
"regionCode" : "US" ,
"locality" : "Mountain View" ,
"administrativeArea" : "CA" ,
"postalCode" : "94043" ,
"addressLines" : [ "1600 Amphitheatre Pkwy" ]
},
"enableUspsCass" : true
}
Note: If you don't require CASS processing, or if you are validating
addresses outside of the US and PR regions, Google does not recommend enabling
this feature.
Try it!
The APIs Explorer lets you make sample requests so
that you can get familiar with the API and the API options.
Select the API icon api
on the right side of the page.
Optionally edit the request parameters.
Select the Execute button. In the dialog, choose the account
that you want to use to make the request.
In the APIs Explorer panel, select the fullscreen icon
fullscreen to expand the APIs Explorer window.
Google Maps Platform is a non-exclusive Licensee of the United States
Postal Service®. The following trademark(s) are owned by the United States
Postal Service® and used with permission: United States Postal Service®,
CASS™, CASS Certified™. ↩
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To validate an address, send a POST request to the provided REST or gRPC endpoint, including a JSON request body that defines the address. The request body must contain the `address` field, a `PostalAddress` type with at least one entry in `addressLines`. Recommended subfields are `regionCode` and `addressLines`; the simplest request should have both. For US and PR regions, enabling `enableUspsCass` will use USPS CASS processing. Use the APIs Explorer to make sample requests.\n"]]
