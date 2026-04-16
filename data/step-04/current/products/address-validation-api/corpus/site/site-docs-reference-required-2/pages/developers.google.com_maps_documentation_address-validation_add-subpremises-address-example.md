---
title: "Add subpremises to address - examples (US only) \_|\_ Address Validation API\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/add-subpremises-address-example
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/understand-response
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/add-subpremises-address-example
  title: "Add subpremises to address - examples (US only) \_|\_ Address Validation\
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
Add subpremises to address - examples (US only)
Stay organized with collections
Save and categorize content based on your preferences.
This document describes a number of real-world scenarios where the
Address Validation API provides response signals that warrant an add subpremises
behavior from your system. These signals are only available for US addresses.
See Example workflows in
Build your validation logic for context.
Note: The examples here are illustrative, but don't cover all scenarios.
Common example: add subpremises
This scenario illustrates an address in which your system might prompt a
customer to add a unit number to the address.
Address entered
Region
1450 Brickell Avenue, Miami, FL 33131-4065
US
Verdict for an address missing a subpremises
The example below highlights the important signal.
{
"inputGranularity": "PREMISE",
"validationGranularity": "PREMISE",
"geocodeGranularity": "PREMISE",
"possibleNextAction": "CONFIRM_ADD_SUBPREMISES"
}
Action: For this address, you might prompt your user to add a unit
number.
Edge case example: add subpremises
The following example covers a situation in which the verdict indicates
address quality issues that warrant further investigation. This examples also
illustrates how your logic can travel from the verdict to the address components
to obtain a more complete picture in order to enhance your system logic.
Missing subpremises and inferred and replaced components
This example illustrates entry of a US address with a missing locality and an
incorrect postal code.
Address entered
Region
1450 Brickell Avenue, FL 33132-4065
US
Verdict for a missing subpremises and inferred and replaced components
{
"inputGranularity": "PREMISE",
"validationGranularity": "PREMISE",
"geocodeGranularity": "PREMISE",
"hasInferredComponents": true ,
"hasReplacedComponents": true ,
"possibleNextAction": "CONFIRM_ADD_SUBPREMISES"
}
Further investigation of the address components reveals that the locality has
been inferred, and the postal code has been replaced.
{
"componentName": {
"text": "33131",
}
"componentType": "postal_code",
"confirmationLevel": "CONFIRMED",
"replaced": true
},
{
"componentName": {
"text": "Miami",
"languageCode": "en"
}
"componentType": "locality",
"confirmationLevel": "CONFIRMED",
"inferred": true
}
Action: For this address, you might prompt your user to add a unit
number, or prompt them to review the entire address.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
