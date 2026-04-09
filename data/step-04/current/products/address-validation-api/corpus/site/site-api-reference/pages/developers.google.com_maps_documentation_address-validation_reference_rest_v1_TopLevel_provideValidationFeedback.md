---
title: "Method: provideValidationFeedback \_|\_ Address Validation API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/provideValidationFeedback
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/reference/rest/v1/TopLevel/provideValidationFeedback
  title: "Method: provideValidationFeedback \_|\_ Address Validation API \_|\_ Google\
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
Reference
Send feedback
Method: provideValidationFeedback
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Provide feedback on the outcome of address validation attempts using the ProvideValidationFeedback method.
The feedback request body includes the validation conclusion and the initial response ID.
Possible validation conclusions include using the validated, user-provided, or an unvalidated address version, or abandoning the transaction.
The ProvideValidationFeedback request should be sent only once after the transaction is concluded.
A successful feedback submission results in an empty response body.
HTTP request
Request body
JSON representation
Response body
ValidationConclusion
Feedback about the outcome of the sequence of validation attempts. This should be the last call made after a sequence of validation calls for the same address, and should be called once the transaction is concluded. This should only be sent once for the sequence of v1.validateAddress requests needed to validate an address fully.
HTTP request
POST https://addressvalidation.googleapis.com/v1:provideValidationFeedback
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"conclusion" : enum ( ValidationConclusion ) ,
"responseId" : string
}
Fields
conclusion
enum ( ValidationConclusion )
Required. The outcome of the sequence of validation attempts.
If this field is set to VALIDATION_CONCLUSION_UNSPECIFIED , an INVALID_ARGUMENT error will be returned.
responseId
string
Required. The ID of the response that this feedback is for. This should be the [responseId][google.maps.addressvalidation.v1.ValidateAddressRequest.response_id] from the first response in a series of address validation attempts.
Response body
If successful, the response body is empty.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
