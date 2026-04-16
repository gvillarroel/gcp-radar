---
title: "Confirm address - examples \_|\_ Address Validation API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/confirm-address-example
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/confirm-address-example
  title: "Confirm address - examples \_|\_ Address Validation API \_|\_ Google for\
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
Confirm address - examples
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Address Validation API provides signals to determine if an address needs further confirmation from the user due to potential inaccuracies or unexpected components.
Addresses with replaced or unconfirmed components, especially in cases of similar street names across nearby cities, require confirmation.
Addresses with minor inferred components like city, state, or postal code, but otherwise confirmed details, can generally be accepted without further confirmation.
Unexpected but confirmed address components, such as a UK county, can often be ignored and the address accepted as valid.
Unconfirmed, unexpected address components might require confirmation with the customer to ensure accuracy.
This document describes a number of real-world scenarios where the
Address Validation API provides response signals for addresses that might warrant a
confirm behavior from your system. See
Example workflows in
Build your validation logic for context.
Note: The examples here are illustrative, but don't cover all scenarios.
Common examples: confirm
The following example illustrates the case of metropolitan areas with similar
street names. Suppose a user intends to enter the address for Google Building
D in Kirkland, WA, United States . However, instead of Kirkland as the
city, they inadvertently enter Seattle .
Address entered
Region
Building D, 451 7th Avenue South, Seattle, WA 98033
US
Verdict for replaced data
The example below emphasizes the important signals from the response.
{
"inputGranularity": "SUB_PREMISE",
"validationGranularity": "PREMISE_PROXIMITY",
"geocodeGranularity": "PREMISE_PROXIMITY",
"addressComplete": true,
"hasUnconfirmedComponents": true
"hasReplacedComponents": true ,
"possibleNextAction": "CONFIRM"
}
The possibleNextAction provides an initial indication that it might be worth
confirming the address with your customer. The other signals in the verdict
provide more details of what might be wrong with the address. The
PREMISE_PROXIMITY indicates proximation of a building-level address, but is
not as detailed as SUB_PREMISE , which is the granularity provided on input.
The response also contains both unconfirmed and replaced components.
A query of the address components reveals the following areas of concern:
{
"componentName": {
"text": "451",
},
"componentType": "street_number",
"confirmationLevel": "UNCONFIRMED_BUT_PLAUSIBLE",
}
...
{
"componentName": {
"text": "98104",
},
"componentType": "postal_code",
"confirmationLevel": "CONFIRMED",
"replaced": true
}
...
{
"componentName": {
"text": "Building D",
"language_code": "en"
},
"componentType": "subpremise",
"confirmationLevel": "UNCONFIRMED_BUT_PLAUSIBLE",
}
.......
"unconfirmedComponentTypes": [
"street_number",
"subpremise"
]
In this case, the Address Validation API found a close approximation to the provided
address in Seattle , and it replaced the zip code, a higher-level component,
to resolve to a Seattle address. This could be a valid replacement, but
along with the fact that components were unconfirmed, it makes sense to
ensure that the user intends to enter a Seattle address and not something else,
like Kirkland.
Tip: Check the correct address in the demo , using 451 7th Avenue
South, Kirkland, WA 98033 to see the response for the originally intended
address.
Action: For this address, you might prompt your user to confirm if the
returned address is correct.
Edge-case examples: confirm
The following examples illustrate the following edge case types:
Minor inferences that ARE confirmed .
The Address Validation API infers either the country, postal code, or state, but
everything else is both provided and confirmed. The combination of both the
granularity and confirmation level makes for a minor inference not
necessarily needing a confirm action.
Unexpected address component NOT confirmed .
Unconfirmed address components add to the risk level of the address. This
might warrant a confirm.
Unexpected address component that IS confirmed .
The component is not strictly required for a proper address, and the
Address Validation API removes it from the output. Formatting issues don't
generally warrant a confirm.
Minor inferences that ARE confirmed
When combined with confirmed data of a more granular level, the API can still
make a correct inference if the input is missing only one component of
the following types:
City
State
Postal code
Country
For example, a customer provides a valid street address for a McDonald's
restaurant in Springfield, Massachusetts, but forgets to enter the city
and provides a zip code without the 4-digit extension.
Address entered
Region
1402 Allen St, MA 01118
US
Verdict for missing city
{
"inputGranularity": "PREMISE",
"validationGranularity": "PREMISE",
"geocodeGranularity": "PREMISE",
"addressComplete": true ,
"hasInferredComponents": true ,
"possibleNextAction": "CONFIRM"
}
In situations where the Address Validation API infers higher-level components in
order to produce a deliverable address, you can have a higher level of
confidence that the data from the system is correct. This is because inferred
components that represent a wide geographic region are more readily matched to
confirmed address components that are more granular. Even in countries where
city names are repeated, such as Springfield in the United States, the other
components combined with it can provide a unique address.
Using our example above, a scan across all address components shows that every
component is confirmed, which means it matches the data stored by the
Address Validation API, and that the service also infers two higher-level
components.
{
"componentName": {
"text": "Springfield" ,
"languageCode": "en"
},
"componentType": "locality",
"confirmationLevel": "CONFIRMED",
"inferred": true
},
{
"componentName": {
"text": "1806"
},
"componentType": "postal_code_suffix" ,
"confirmationLevel": "CONFIRMED",
"inferred": true
}
Action: Addresses such as these provide enough confirmed granularity,
along with confirmation of inferred components, that your logic could accept
these as valid without the need to prompt the customer. As always, consider
your risk level
when deciding whether or not to prompt your customer before accepting an
address.
Unexpected address component NOT confirmed
This scenario illustrates the importance of checking when components are not
confirmed. If an address component is unexpected, the Address Validation API removes
it from the output. In these cases, you can either accept the address or
reconfirm it with the customer, depending on your risk level and confidence
level.
For example, an address might be from a region where customers often enter
harmless information ignored by the postal authority, in which case you'd accept
the address. However, in some cases an unconfirmed component might not be what
the customer wants.
Address entered
Region
59 Cherrydown Avenue, Chingford, London E4 8DT
United Kingdom
Verdict for unexpected address component not confirmed
{
"inputGranularity": "PREMISE",
"validationGranularity": "PREMISE",
"geocodeGranularity": "PREMISE",
"unconfirmedComponents": true ,
"possibleNextAction": "ACCEPT"
}
In addition to a verdict with unconfirmed components, the Address Validation API
returns the following formatted address:
"formattedAddress": "59 Cherrydown Avenue, London E4 8DT, UK",
A scan for unconfirmed components shows that the API removed Chingford
from the returned address:
{
"componentName": {
"text": "Chingford",
"languageCode": "en"
},
"componentType": "sublocality_level_1",
"confirmationLevel": "UNCONFIRMED_BUT_PLAUSIBLE",
"unexpected": true
}
Action: In this case, the sublocality, which can indicate a
housing district or a neighborhood, might be correct but still ignored by the
postal authority. However, given that this information is **not** confirmed by
the Address Validation API, you might want to confirm this with the customer. At
this point, you can either ignore the removal or confirm it.
Unexpected address component that IS confirmed
This example illustrates inclusion of a UK county in the supplied address, which
is a common practice. However, this is not a requirement by the UK postal
authority and is essentially ignored. See
postoffice.co.uk and
How to address UK and international mail .
As a result, when a customer provides a county in a UK address, the service
evaluates this as unexpected input.
Address entered
Region
33 Dunalley St, Cheltenham, Gloucestershire, GL50 4AP
UK
Verdict for unexpected address component that IS confirmed
{
"inputGranularity": "PREMISE",
"validationGranularity": "PREMISE",
"geocodeGranularity": "PREMISE",
"possibleNextAction": "ACCEPT"
}
Here, address_complete evaluates to false and an analysis of the address
component reveals an unexpected flag.
{
"componentName": {
"text": "Gloucestershire",
"languageCode": "en"
},
"componentType": "administrative_area_level_2",
"confirmationLevel": "CONFIRMED",
"unexpected": true
}
This component is both unexpected and confirmed, which means the following:
Confirmed as correct data . This indicates the
component is the correct county that contains the address.
Unexpected as input . Indicates a component not
required for proper formatting of the address.
While Gloucestershire is the correct county for the entered address, the
address itself is improperly formatted. Recall that the Address Validation API also
evaluates information for proper formatting.
Action: For this scenario, you might accept the address without further
prompting, depending on your risk level.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
