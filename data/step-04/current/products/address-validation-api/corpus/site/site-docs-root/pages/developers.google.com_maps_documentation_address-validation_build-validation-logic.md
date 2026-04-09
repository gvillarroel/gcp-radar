---
title: "Build your validation logic \_|\_ Address Validation API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/address-validation/build-validation-logic
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/build-validation-logic
  title: "Build your validation logic \_|\_ Address Validation API \_|\_ Google for\
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
Build your validation logic
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document outlines a process for integrating the Address Validation API into your system to handle various address quality levels.
The API response categorizes addresses into three actions: Fix (requiring user correction), Confirm (potentially needing verification), and Accept (ready for use).
System logic should analyze API signals like validationGranularity , addressComplete , and component modifications to determine the appropriate action for each address.
Detailed guidance and examples are provided for implementing each action (Fix, Confirm, Accept) based on specific API signals and risk tolerance.
The Address Validation API helps improve address quality and streamline workflows by guiding user interactions and providing deliverability confidence.
This document describes a process for building an address checking system to
handle a variety of responses from the Address Validation API. It covers how to
interpret the API response in order to determine when and how to prompt your
customers for more information.
In general the API response determines the following ways your system should
handle an address:
handyman
Fix —the address might contain significant issues.
Consider prompting your customer for more
information.
domain_add
Add subpremises —the address might be missing a
subpremises.
Consider prompting your customer to add
a unit number.
edit
Confirm —the address might contain minor issues.
Consider prompting your customer to
confirm the address is correct.
check
Accept —the address might not contain issues.
Consider using the address without
further prompting, at your own risk.
Key purpose
This document helps you modify your system to best analyze the API response and
determine the next actions to take with supplied addresses. The following
pseudocode illustrates a possible flow.
if (verdict.possibleNextAction == FIX)
Prompt the user to fix the address.
else if (verdict.possibleNextAction == CONFIRM_ADD_SUBPREMISES)
Prompt the user to add a unit number.
else if (verdict.possibleNextAction == CONFIRM)
Confirm with the user that the address is correct.
else
Continue with the address returned by the API.
The exact logic depends on your situation - see
Customize your validation logic for more details.
Example workflows
The table below summarizes example workflows you could implement to prompt your
customer based on the API response.
Your system behavior
handyman
Fix the address
The response from the verdict indicates there may be
significant issues with the address. For example,
verdict.possibleNextAction is FIX . Consider prompting your
customer for more information.
Workflow
Investigate address components if necessary.
Prompt customer to fix address issues.
Request validation for the updated address.
(Optional) Send a request to the feedback endpoint for the API.
See Handle updated addresses .
Proceed with address.
domain_add
Add subpremises
The response from the verdict indicates the address might
be missing a subpremises. For example, verdict.possibleNextAction
is CONFIRM_ADD_SUBPREMISES . Consider prompting your customer to
add a unit number.
Workflow
Prompt customer to add a unit number.
Request validation for the updated address.
(Optional) Send a request to the feedback endpoint for the API.
See Handle updated addresses .
Proceed with address.
edit
Confirm the address
The response from the verdict indicates there might be
minor issues with the address. For example, verdict.possibleNextAction
is CONFIRM . Consider prompting your customer to review the
address.
Workflow
Corrections needed:
Investigate address components if necessary.
Request validation for the updated address.
(Optional) Send a request to the feedback endpoint for the API.
See Handle updated addresses .
Proceed with address.
No corrections needed:
(Optional) Send a request to the feedback endpoint for the API.
See Handle updated addresses .
Proceed with address.
check
Accept the address
The response from the verdict indicates there might not be
issues with the address. For example, verdict.possibleNextAction
is ACCEPT . Consider proceeding with the address as you would
for your risk level.
Workflow
Proceed with returned address.
Note: When you repeat requests to the Address Validation API for the same address,
you can make a call to provideValidationFeedback to indicate your outcome. See
Handle updated addresses .
Try the demo. The rest of this document uses a variety of examples
to help you understand the fix, confirm, accept flow process described
above. You can explore results from these examples by entering them in the
Address Validation API demo .
Customize your validation logic
While you can use the results from the verdict.possibleNextAction field to
determine how your system proceeds with the API response, you might also
consider building custom logic, such as to handle business-specific needs.
The purpose of this section is to illustrate how you can develop your own custom
logic for interpreting the API response in order to determine if and how you
want to prompt your customer. This section covers risk levels and additional API
response signals to consider for your customization.
That said, even if you rely solely on the verdict.possibleNextAction to decide
on your next steps, the additional signals described below can still help you
understand details about potential issues with the address.
Risk tolerance
When designing how your system responds to signals from the Address Validation API,
the following recommendations can help you build a more effective response
model. However, these are only recommendations, so bear in mind that your
implementation should suit your business model.
Guidance
Details
Risk level
Take into account the level
of tolerance for your situation when balancing between prompting for
corrections and accepting the address as entered.
The Address Validation API returns a variety of signals
that you can incorporate with your risk level to optimize your validation
process.
For example, if an address has an unconfirmed street number, you can
still accept it. On the other hand, if your business operation requires
greater address precision, you might prompt your user. For an example that
could fall into either category, see Non-US unconfirmed street number
in Accept address - examples .
Accept addresses
It's a good practice to allow your system to accept the original entry
if the customer does not respond to prompts.
In these cases, the customer might have entered an address not in
the system, such as for new construction.
Risk-averse checkout flow example
If you want to reduce the risk of failed deliveries, you might customize your
logic to prompt your customers more often. For example, rather than use the
logic described in the
Key purpose
section, you could use the following logic.
if (verdict.possibleNextAction == FIX or verdict.validationGranularity
== OTHER or verdict.validationGranularity == ROUTE)
Prompt customer to fix their address.
else if (verdict.possibleNextAction == CONFIRM_ADD_SUBPREMISES)
Prompt customer to add a unit number.
else if (verdict.possibleNextAction == CONFIRM or verdict.validationGranularity
== PREMISE_PROXIMITY or verdict.hasSpellCorrectedComponents or
verdict.hasReplacedComponents or verdict.hasInferredComponents)
Prompt customer to confirm their address.
else
Proceed with the returned address.
Low-friction checkout flow example
If you want to reduce the friction in your checkout flow, you might customize
your logic to prompt your customers less often. For example, rather than use the
logic described in the
Key purpose
section, you could use the following logic.
if (verdict.possibleNextAction == FIX)
Prompt customer to fix their address.
else if (verdict.hasReplacedComponents)
Prompt customer to confirm their address.
else
Proceed with the returned address.
FIX signals
Fix an address when the results clearly indicate that the address may not be
deliverable. Your system can then prompt the customer to provide the necessary
information, after which you re-issue your workflow to get a deliverable
address.
The following fields of the Address Validation API response can be used in addition
to verdict.possibleNextAction to determine if an address has major issues,
and what those issues are.
Validation granularity
When the validation granularity enum for an address is
OTHER , it's likely that the address is incorrect.
Missing components
When the address.missingComponentTypes is not empty, it's
likely that the address is missing key information.
Suspicious components
When the confirmation level enum for a component is
UNCONFIRMED_AND_SUSPICIOUS , it's likely that the component is
incorrect.
Unresolved components
An unresolvedToken
is a part of the input not recognized as a valid part of an address.
USPS DPV Confirmation
When uspsData.dpvConfirmation is either N ,
or empty, there might be an issue with the address. This field is only
available for US addresses. For more details on uspsData.dpvConfirmation ,
see Handle United States addresses .
Fix address examples
CONFIRM_ADD_SUBPREMISES signals (US addresses only)
You prompt your customer to review the address and consider adding a unit
number when the Address Validation API response indicates the address might be
missing a subpremises. In these cases, the address of the building is likely
valid, but you want greater confidence that the resulting address is the one
intended by the customer.
The following fields of the Address Validation API response can be used in addition
to verdict.possibleNextAction to determine if an address is likely missing a
subpremises.
Missing subpremise component
When the address.missingComponentTypes field contains a
value of subpremise , that indicates a unit number is missing
from the address.
Note : if the field contains types
other than subpremise , the action would fall into the
FIX category. See the full list of component
types in the Geocoding documentation.
USPS DPV Confirmation
When uspsData.dpvConfirmation is S , that
means the primary number of the address has been matched to an address in the
USPS database. However, the address was expected to contain a secondary
number as well. This field is only available for US addresses. For more
details on uspsData.dpvConfirmation , see
Handle United States addresses .
Add subpremises address examples
CONFIRM signals
You confirm an address when the verdict indicates that the Address Validation API
either inferred or made changes to address components in order to produce a
validated address. In these cases, you have a deliverable address, but prefer
greater confidence that the resulting address is the one intended by the
customer.
The following fields of the Address Validation API response can be used in addition
to verdict.possibleNextAction to determine if an address has minor issues,
and what those issues are.
Validation granularity
When validationGranularity for an address is
ROUTE or PREMISE_PROXIMITY , the address might be
incorrect.
Inferred data
When the hasInferredComponents field is true ,
you know that the API filled in information it gleaned from other address
components.
Replaced data
When the hasReplacedComponents field is true , the
API replaced entered data with data it deemed to make the address valid.
Spell corrections
When the hasSpellCorrectedComponents field is true ,
the API corrected the spelling of some misspelled components.
Confirm address examples
ACCEPT signals
You might accept an address when the Address Validation API API response provides a
high degree of confidence that the address is deliverable and can be used
without further customer interaction in the downstream process.
Note: Consider your risk level when deciding whether
to accept an address or prompt your customer for more information.
The following fields of the Address Validation API response can be used in addition
to verdict.possibleNextAction to determine if an address is of acceptable
quality.
Validation granularity
A validationGranularity of PREMISE is often
acceptable, though a value of ROUTE may still indicate a
deliverable address.
No inferred data
When the hasInferredComponents field is false ,
you know that no components in the output were inferred.
No replaced data
When the hasReplacedComponents field is false ,
you know that no input data has been replaced.
No spell corrections
When the hasSpellCorrectedComponents field is false ,
you know that no spell corrections have been made.
USPS DPV Confirmation
When uspsData.dpvConfirmation is Y , that
means the address has been matched to an address in the USPS database. This
field is only available for US addresses. For more details on
uspsData.dpvConfirmation , see
Handle United States addresses .
Accept address examples
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
