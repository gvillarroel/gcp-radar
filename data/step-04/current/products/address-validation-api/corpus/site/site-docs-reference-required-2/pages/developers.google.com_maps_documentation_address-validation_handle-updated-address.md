---
title: "Handle updated addresses \_|\_ Address Validation API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/handle-updated-address
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/understand-response
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/handle-updated-address
  title: "Handle updated addresses \_|\_ Address Validation API \_|\_ Google for Developers"
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
Handle updated addresses
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
When validating an address multiple times, use the provideValidationFeedback endpoint to inform Google of the final address version used.
Include the original response ID in the provideValidationFeedback request and set the previousResponseId for subsequent validation calls to improve data quality and response time.
The conclusion field in the feedback request indicates whether the user's original, a validated, or another address version was ultimately used.
The previousResponseId helps the API understand the context of the address validation sequence and potentially optimize results.
In some cases, you might make multiple calls to the
Address Validation API for a single address. For example, the customer might make
changes to their address after seeing the results of the first
validation. You then perform a second validation on the updated address.
This document describes two key actions you can take when you issue a series of
requests for the same address to the Address Validation API. These actions are
not a strict usage requirement, but a helpful action on your part to improve
overall data quality and system response.
Send a request to the provideValidationFeedback endpoint
Set the previousResponseID field
Send a provideValidationFeedback request
At the end of a series of validations, Google recommends making a call to the
Provide Validation Feedback API to indicate the final outcome of
all the validations. The request sets two fields:
conclusion — Indicates the validation version you used in your service,
whether it was the one provided by the user, or the one returned from the
Address Validation API.
responseId — Indicates the response ID of the first response from the
Address Validation API. See Set the previousResponseId field
below.
Use either the
provideValidationFeedback
method (REST) or
ProvideValidationFeedback
method (gRPC).
The following example passes a JSON body to the request defining the
conclusion:
curl - X POST - d ' {
"conclusion" : "VALIDATED_VERSION_USED" ,
"responseId" : "de22bed8-7f52-44cb-8526-faceac57150a"
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' \
"https://addressvalidation.googleapis.com/v1:provideValidationFeedback?key= API_KEY "
The conclusion field identifies one of the following actions from your
side:
VALIDATED_VERSION_USED : the validated version of the address from
the Address Validation API.
USER_VERSION_USED : the original version provided by the user.
UNVALIDATED_VERSION_USED : a version that was a result of a prompt to
the user, but did not re-validate it with the Address Validation API.
UNUSED : abandoned the transaction.
See Validation Conclusion in the reference guide.
The responseId field specifies which address validation results you are
providing feedback for. This value must be the same as the responseId
value returned by the first call to the
validateAddress method.
See Request Body in the validation feedback reference guide.
Set the previousResponseID field
When issuing a follow-up request the Address Validation API for a given address, set
the previousResponseId field.
For the value of the previousResponseId , use the value from the responseId
returned by API after the first validation request.
Use this same value for any and all followup requests until the series
completes.
This sequence diagram shows the preferred flow:
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
