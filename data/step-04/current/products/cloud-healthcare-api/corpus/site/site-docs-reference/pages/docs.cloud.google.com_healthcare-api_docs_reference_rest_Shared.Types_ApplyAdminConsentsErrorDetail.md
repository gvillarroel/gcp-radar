---
title: "ApplyAdminConsentsErrorDetail \_|\_ Cloud Healthcare API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/reference/rest/Shared.Types/ApplyAdminConsentsErrorDetail
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/reference/rest/Shared.Types/ApplyAdminConsentsErrorDetail
  title: "ApplyAdminConsentsErrorDetail \_|\_ Cloud Healthcare API \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Reference
Send feedback
ApplyAdminConsentsErrorDetail
Stay organized with collections
Save and categorize content based on your preferences.
Contains the error details of the unsupported admin Consent resources for when the [ApplyAdminConsents][] method fails to apply one or more Consent resources.
JSON representation
{
"consentErrors" : [
{
object( ConsentErrors )
}
] ,
"existingOperationId" : string
}
Fields
consentErrors[]
object( ConsentErrors )
The list of Consent resources that are unsupported or cannot be applied and the error associated with each of them.
existingOperationId
string
The currently in progress non-validate-only ApplyAdminConsents operation ID if exist.
ConsentErrors
The Consent resource name and error.
JSON representation
{
"name" : string ,
"error" : {
object( Status )
}
}
Fields
name
string
The versioned name of the admin Consent resource, in the format projects/{projectId}/locations/{location}/datasets/{datasetId}/fhirStores/{fhirStoreId}/fhir/Consent/{resourceId}/_history/{version_id} . For FHIR stores with disableResourceVersioning=true , the format is projects/{projectId}/locations/{location}/datasets/{datasetId}/fhirStores/{fhirStoreId}/fhir/Consent/{resourceId} .
error
object( Status )
The error code and message.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
