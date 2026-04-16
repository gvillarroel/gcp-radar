---
title: "Handle United States addresses \_|\_ Address Validation API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/address-validation/handle-us-address
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation/build-validation-logic
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/handle-us-address
  title: "Handle United States addresses \_|\_ Address Validation API \_|\_ Google\
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
Handle United States addresses
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document outlines address validation techniques specific to the United States, focusing on leveraging USPS data for enhanced accuracy.
The USPS Delivery Point Verification (DPV) codes (N, D, S, Y) provide insights into address deliverability, allowing systems to identify potential issues and prompt users for corrections.
While the uspsData object offers valuable information for US addresses, it's crucial to incorporate other validation response elements for comprehensive verification due to its potential for incomplete population.
Security measures are in place to detect artificially created addresses, triggering an error message within the uspsData if such an address is identified, while other response properties remain unaffected.
This document covers address validation specific to the United States:
Using USPS data in your workflow
USPS Delivery Point Verification fields (dpv)
Security messages
USPS data in your workflow
When validating addresses in the United States, the Address Validation API service
can also populate the uspsData portion of the return.
Key Point: If your system primarily or exclusively handles US addresses, you may
elect to use this response object as a first point of reference in your checking
logic. However, it's important to know that the uspsData object is not
guaranteed to be fully populated for every address validated by the service.
Because this object is not always populated, you shouldn't rely on this
property as the sole means to validate addresses, but instead incorporate the
verdict and address components into your system as well.
USPS Delivery Point Verification (DPV)
As part of the uspsData response, the dpvConfirmation field returns a single
character to let you know if the USPS can deliver to the provided address.
You can use this field to determine the following:
address validity.
if a sub-premise number is missing from the address.
if the sub-premise number does not exist in the USPS data system.
The service either returns one of four dpvConfirmation values or it does not
return a dpvConfirmation value at all. The table below shows the possible
behavior your logic could use for each of the 5 possible outcomes. For more
details on this logic, see
Example workflows in
Build your validation logic.
Value
Behavior
Description
N or empty
Fix the address
The address was not DPV confirmed.
This means the USPS does not recognize the entered premise number
existing on the entered street (route), and likely cannot deliver there.
D
Add a subpremises
The address was DPV confirmed for the primary number only, and the
secondary number information was missing.
This means that the premise
number entered exists on the entered street, but to reach a fully
verified/deliverable address, a valid sub-premise number also needs to be
provided. In other words, the sub-premise was missing from the input.
S
Confirm the address
The address was DPV confirmed for the primary number only, and the
secondary number information was present but not confirmed.
This means that the premise number entered exists on the entered route,
but the sub-premise provided does not exist within that building, according
to USPS.
Y
Accept the address
The address was DPV confirmed for primary and any secondary numbers.
This means the address is fully deliverable by USPS, including the
sub-premise number, if applicable.
The rest of this section discusses real world scenarios that use the DPV codes.
DPV N example - fix the address
This example uses a non-existent street number on an otherwise valid address.
Address entered : 12 Amphitheatre Parkway, Mountain View, CA, 94043
Region : USA
The dpvConfirmation field returns: N
This is an extremely strong signal that this premise number does not exist
on this route. As with other problematic addresses, your system should prompt
the user for corrections.
DPV D example - add a subpremises
This example uses the Google office in New York, but does not contain a
sub-premise which is a required part of the address. You can see this by using
the address in the demo without sub-premise information.
Address entered : 111 8th Avenue, New York, NY, 10011
Region : USA
The dpvConfirmation field returns: D
This confirms that the sub-premise was missing from the input. To get to a DPV
of Y, a valid sub-premise must be included as part of the input. For example,
you could include a valid sub-premise of FL 4 (4th Floor) to obtain a
dpvConfirmation value of Y.
DPV S example - confirm the address
This example uses a sub-premise number that does not exist within the building:
Address entered : 1600 Amphitheatre Parkway, Suite 101, Mountain View, CA,
94043
Region : USA
The dpvConfirmation field returns: S
This indicates that, while 1600 Amphitheatre Parkway is a valid address, the
sub-premise Suite 101 is not a valid part of the address. You might consider
confirming this information with the user and provide an opportunity for a
correction.
DPV Y example - accept the address
This example uses the Googleplex address in Mountain View, CA as a
known valid address.
Address entered : 1600 Amphitheatre Parkway, Mountain View, CA, 94043
Region : USA
The dpvConfirmation field returns: Y
The address is fully deliverable by USPS. This gives you a very high degree of
confidence that the API returned an address of good quality, and you can likely
use it as provided. As always, consider your
risk level when deciding whether or not to prompt
your customer for confirmation.
Note : The DPV does not indicate if the Address Validation API has made any
changes to the input, such as a spell correction.
Security messages for US addresses
This section covers the security flags provided in the USPS data for
artificially created addresses. This security measure is designed to prevent the
artificial creation of an address list by detecting when a submitted address
appears to have been constructed artificially and not obtained legitimately.
This should be a very rare occurrence.
When the USPS identifies an artificially created address, the errorMessage
field of the uspsData property of the response contains an
error message describing the issue. For example:
AMS API processing was terminated due to the detection of what is determined to
be an artificially created address. No address beyond this point has been
validated and/or processed. If you believe this address was identified in error,
please contact your Vendor.
Note: When the uspsData indicates an artificial address, the response
for other properties in the Address Validation API response remain unaffected.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The document details how to use USPS data for US address validation via an API. The `uspsData` object, specifically the `dpvConfirmation` field, indicates address deliverability. `Y` means the address is fully deliverable; `S` means the sub-premise is unconfirmed; `D` indicates a missing sub-premise; `N` or empty implies the primary address is invalid. Artificially created addresses trigger an error message in `uspsData`, and their detection does not affect other response properties. The provided examples can be used as a reference for what kind of values and scenarios could be encountered when using this API.\n"]]
