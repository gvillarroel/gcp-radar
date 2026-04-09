---
title: "Accept address - examples \_|\_ Address Validation API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/accept-address-example
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/accept-address-example
  title: "Accept address - examples \_|\_ Address Validation API \_|\_ Google for\
    \ Developers"
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
Accept address - examples
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Address Validation API provides signals to determine if an address should be accepted by your system, even with minor uncertainties.
Addresses with validationGranularity of PREMISE and no unconfirmed/inferred/replaced components are generally safe to accept.
Addresses with UNCONFIRMED_BUT_PLAUSIBLE street numbers can be accepted, but consider prompting the customer for confirmation for higher confidence.
US addresses with dpvConfirmation of 'N' might require customer confirmation or correction, depending on your system's confidence requirements.
Even with incomplete USPS data, addresses with validationGranularity of PREMISE can often be accepted, but consider prompting the customer for confirmation.
This document describes a number of real-world scenarios where the
Address Validation API provides response signals that warrant an accept behavior
from your system. See
Example workflows in
Build your validation logic for context.
Note: The examples here are illustrative, but don't cover all scenarios.
Common example: accept
This scenario illustrates an address in which your system would accept an
address entered by a customer.
Address entered
Region
76 Buckingham Palace Road, London SW1W 9TQ
UK
Verdict for an acceptable address
The example below highlights the important signals.
{
"inputGranularity": "PREMISE",
"validationGranularity": "PREMISE" ,
"geocodeGranularity": "PREMISE",
"addressComplete": true
}
In addition to this, the response indicates the following:
hasUnconfirmedComponents remains false
hasInferredComponents remains false
hasReplacedComponents remains false
hasSpellCorrectedComponents remains false
When combined together, these signals indicate a high-quality address.
Action: Accept.
Edge case examples: accept
The following examples cover situations in which the verdict indicates address
quality issues that warrant further investigation. These examples also
illustrate how your logic can travel from the verdict to the address components
to obtain a more complete picture in order to enhance your system logic.
Non-US unconfirmed street number
This example illustrates entry of an Italian address with all address components
present, along with no inferred or replaced components. However, the
validationGranularity is ROUTE .
Address entered
Region
Via Fonte Grugnale, 14 unit 2, 66054 Vasto CH, Italia
IT
Verdict for an unconfirmed street number
{
"inputGranularity": "SUB_PREMISE",
"validationGranularity": "ROUTE" ,
"geocodeGranularity": "ROUTE",
"addressComplete": true ,
"hasUnconfirmedComponents": true
}
Further investigation of the address components reveals that the street
number is UNCONFIRMED_BUT_PLAUSIBLE .
{
"text": "14",
"componentType": "street_number",
"confirmationLevel": "UNCONFIRMED_BUT_PLAUSIBLE"
}
Action: This address can be accepted without further prompting.
However, for a higher confidence level, you can prompt the customer to
confirm the address. See
Implementation guidance
in Build your validation logic for more details.
US unconfirmed street number
This example illustrates entry of a US address with all address components
present, with no inferred or replaced components. However, the
validationGranularity is PREMISE_PROXIMITY .
Address entered
Region
975 Carson Dr, Sunnyvale, CA 94086
US
USPS data for an unconfirmed street number
{
"firstAddressLine": "975 CARSON DR",
"cityStateZipAddressLine": "SUNNYVALE CA 94086",
"city": "SUNNYVALE",
"state": "CA",
"zipCode": "94086"
"dpvConfirmation": "N" ,
"dpvFootnote": "AAM3",
"carrierRoute": "C031",
"carrierRouteIndicator": "D",
"postOfficeCity": "SUNNYVALE",
"postOfficeState": "CA",
"fipsCountyCode": "085",
"county": "SANTA CLARA",
}
Action: Fix. This example is similar to the previous one, and the
address can be accepted as entered. However, the additional
dpvConfirmation code of N provides
a strong signal to confirm the address with the customer or prompt them to
fix it. The behavior you choose for this case ultimately depends on your
required confidence level. See
Implementation guidance
in Build your validation logic for more details.
Incomplete USPS data for a confirmed address
This example illustrates entry of a US address with all address components
confirmed, with no inferred or replaced components, and a
validationGranularity of PREMISE . However, the uspsData is not fully
populated, and does not contain a dpvConfirmation value.
Address entered
Region
155 Via Condado Way, Palm Beach Gardens, FL 33418-1703
US
Verdict for a confirmed address with incomplete USPS data
{
"inputGranularity": "PREMISE",
"validationGranularity": "PREMISE" ,
"geocodeGranularity": "PREMISE",
"addressComplete": true ,
}
USPS data for a confirmed address with incomplete USPS data
{
"standardizedAddress": {
"firstAddressLine": "155 VIA CONDADO WAY",
"cityStateZipAddressLine": "PALM BEACH GARDENS",
"city": "PALM BEACH GARDENS",
"state": "FL",
"zipCode": "33418"
},
"carrierRoute": "H018",
"postOfficeCity": "PALM BEACH GARDENS",
"postOfficeState": "FL"
}
Action: Accept. Even though the address is not DPV confirmed by the
USPS, the validationGranularity of PREMISE gives a
strong signal that this is a valid address. However, for a higher confidence
level, you can prompt the customer to confirm the address. See
Implementation guidance
in Build your validation logic for more details.
Note: The service receives updated USPS data periodically, so this example may
no longer return incomplete USPS data. This example is meant to be illustrative
rather than an accurate portrayal of the API response for this address.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
