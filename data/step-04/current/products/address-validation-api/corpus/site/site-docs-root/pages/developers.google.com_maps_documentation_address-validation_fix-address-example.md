---
title: "Fix address - examples \_|\_ Address Validation API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/fix-address-example
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/fix-address-example
  title: "Fix address - examples \_|\_ Address Validation API \_|\_ Google for Developers"
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
Fix address - examples
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document provides real-world examples of when the Address Validation API signals that an address needs to be fixed.
The API provides signals such as validationGranularity , confirmationLevel , and missingComponentTypes to indicate potential issues with an address.
Common fix scenarios include missing city/postal code, missing street number, unconfirmed street number, and missing subpremise.
The recommended action for these scenarios is typically to prompt the user for the missing or unconfirmed information.
Whether to fix, confirm, or accept an address can depend on specific business needs and risk tolerance.
This document describes a number of real-world scenarios where the
Address Validation API provides response signals that might warrant a fix behavior
from your system. See
Example workflows in
Build your validation logic for context.
Note: The examples here are illustrative, but don't cover all scenarios.
Common examples: fix
This section describes common examples where the Address Validation API
provides response signals indicating lower quality address information.
Missing city and postal code
This example illustrates an entry having only the street address, with no city
or postal code.
Address entered
Region
21 45 40th street
USA
Verdict for missing city and postal code
The example below emphasizes the important signals from the response.
{
"inputGranularity": "PREMISE",
"validationGranularity": "OTHER" ,
"geocodeGranularity": "OTHER",
"hasUnconfirmedComponents": true ,
"possibleNextAction": "FIX"
}
The possibleNextAction provides an initial indication that the address might
not be deliverable. The other highlighted components also support this
possibility, so you can query the addressComponents to learn more:
{
"componentName": {
"text": "21",
"languageCode": "en"
},
"componentType": "street_number",
"confirmationLevel": "UNCONFIRMED_BUT_PLAUSIBLE"
},
{
"componentName": {
"text": "45 40th street",
"languageCode": "en"
},
"componentType": "route",
"confirmationLevel": "UNCONFIRMED_BUT_PLAUSIBLE"
},
{
"componentName": {
"text": "United States",
"languageCode": "en"
},
"componentType": "country",
"confirmationLevel": "CONFIRMED"
}
The Address Validation API returns only the country (United States) as CONFIRMED .
It returns all other address components as UNCONFIRMED_BUT_PLAUSIBLE , with
some important omissions to the data, such as locality and postal code.
Action: For this address, you might prompt your user for the missing
information.
Missing street number
This example shows a missing street number.
Address entered
Region
Buckingham Palace Road, SW1W 9TQ London
UK
Verdict for missing street number
{
"inputGranularity": "PREMISE_PROXIMITY",
"validationGranularity": "ROUTE",
"geocodeGranularity": "ROUTE",
"possibleNextAction": "FIX"
}
Once again, the possibleNextAction provides an initial indication that the
address might not be deliverable. Furthermore, the validationGranularity is
ROUTE , which indicates a match to the street, but not enough information to
get to the premise. Additionally, the addressComplete property is missing from
the verdict, and therefore it is false . A further query of the address
object reveals a missing component type:
"missingComponentTypes": [
"street_number"
]
Action: For this address, you might prompt your user for the missing
information.
Edge-case examples: fix
In some situations, whether you fix, confirm, or accept an address
depends on your particular business scenario. The examples below illustrate
scenarios that might not strictly fall into a fix category.
Unconfirmed street number
In this scenario, the Address Validation API cannot confirm the supplied street
number, yet it indicates that the address is complete.
Address entered
Region
84 Buckingham Palace Road, SW1W 9TQ, London
UK
Verdict for unconfirmed street number
The example below emphasizes the important signals.
{
"inputGranularity": "PREMISE",
"validationGranularity": "PREMISE_PROXIMITY",
"geocodeGranularity": "PREMISE_PROXIMITY",
"addressComplete" : true,
"hasUnconfirmedComponents": true ,
"possibleNextAction": "ACCEPT"
}
It's worth investigating the combination of a validation granularity only to
premise-level approximation along with unconfirmed components. A query of the
addressComponents property shows the following unconfirmed componentType :
{
"componentName": {
"text": "84",
"languageCode": "en"
},
"componentType": "street_number",
"confirmationLevel": "UNCONFIRMED_BUT_PLAUSIBLE"
}
Here, the confirmation_level of the street_number is set to
UNCONFIRMED_BUT_PLAUSIBLE . Unconfirmed means that the service cannot match
the street number of 84 in its dataset, and plausible means that the
component data could still be valid.
Action: You can either accept the input as entered, or confirm with the
customer to determine if the street number entered was intended or an error.
Your response depends on the level of risk associated with your delivery. See
Implementation guidance
in Build your validation logic .
Missing subpremise
This scenario describes an address that is only missing a subpremise, such as an
apartment or department number. Otherwise, the Address Validation API can fully
validate the address. As is the case when any address component is missing, the
the addressComplete is false and therefore not present on manual inspection
of the verdict.
Note: In some countries, the Address Validation API cannot detect a
missing subpremise; while in the US, a missing SUB_PREMISE indicates a
non-deliverable address.
To illustrate, suppose a customer enters a valid address for the San Francisco
city assessor's office, but misses the room number from the input.
Address entered
Region
1 Doctor Carlton B Goodlett Place, San Francisco, CA 94102
USA
Verdict for missing subpremise
In this example, the verdict does not display the addressComplete property, so
therefore it is false . Because of this, you know that at least one address
element is unexpected, unresolved, or missing.
{
"inputGranularity": "PREMISE",
"validationGranularity": "PREMISE",
"geocodeGranularity": "PREMISE",
"hasInferredComponents": true,
"possibleNextAction": "CONFIRM_ADD_SUBPREMISES"
}
An address query reveals the following:
"missingComponentTypes": [
"subpremise"
]
Upon further inquiry, the USPS data provides a dpvConfirmation code of
D , which also indicates a missing subpremise.
Action: For this address, you might prompt your user for the missing
information.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["The Address Validation API flags addresses needing correction through response signals. Common issues include missing city/postal codes or street numbers, where the API returns unconfirmed components and suggests user prompts for missing data. Edge cases, like unconfirmed street numbers or missing subpremises, trigger `UNCONFIRMED_BUT_PLAUSIBLE` or missing `addressComplete`, respectively. These scenarios might require user confirmation, depending on delivery risk. Missing subpremises are specifically flagged in the US and prompt a request to the user.\n"]]
