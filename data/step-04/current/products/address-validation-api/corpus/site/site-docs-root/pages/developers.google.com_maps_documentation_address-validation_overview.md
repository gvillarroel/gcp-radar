---
title: "Address Validation API overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/address-validation/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation
source_metadata:
  url: https://developers.google.com/maps/documentation/address-validation/overview
  title: "Address Validation API overview \_|\_ Google for Developers"
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
Address Validation API overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Address Validation API validates, standardizes, and geocodes addresses, improving delivery predictability and customer experience.
It identifies address components, validates them for correctness, and provides suggestions for corrections, unlike the Geocoding API, which only converts addresses to coordinates.
Addresses are processed by correcting, completing, and formatting components, with CASS™ support for US and Puerto Rico addresses for enhanced accuracy (requires enabling).
Developers can access resources like a demo, coverage details, setup instructions, validation requests, response understanding, and client libraries to utilize the API effectively.
USPS evaluates requests for artificially created addresses, and Google is obligated to stop validation and report relevant information to USPS in such cases.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
The Address Validation API is a service that accepts an address.
It identifies address components and validates them. It also standardizes the
address for mailing and finds the best known latitude/longitude coordinates for it.
Optionally, for addresses in the United States and Puerto Rico, you can enable
the Coding Accuracy Support System (CASS™) .
Why use the Address Validation API
With the Address Validation API, you can improve delivery predictability and reduce
delivery failures, thereby providing improved customer experience. You do this
by catching bad addresses and obtaining better awareness of address
characteristics.
The Geocoding API might be a better match for your needs if you
don't need to validate the individual address components. The Geocoding API
converts addresses into latitude and longitude coordinates. The
Address Validation API validates addresses for correctness . See
Building location validation capability using Google Maps Platform
in the Architecture Center for a detailed comparison.
What you can do with the Address Validation API
input Try the demo
With the Address Validation API, you can determine if an address
refers to a real place. If the address does not refer to a real
place, the API can identify possibly wrong components that you can present to
your customers to correct. Here is a sample workflow using the API:
Customer enters an address – The following image shows a basic form
that allows a customer to enter an address, possibly as part of a checkout
flow.
App sends the address to the API – The application passes this address
as the input to the Address Validation API.
API validates and standardizes the address – In its response, the
Address Validation API returns the complete address as determined by the API, or
indicates where information is missing.
Customer confirms or corrects the address – Depending on
what the API returns, you can provide the following prompts to the customer:
A. Confirm the recommended address. B. Provide missing information.
C. Fix the address.
How the Address Validation API works
The address validation accepts a POST request with the address in the form
of a JSON body. It separates the address into its individual components, and
then attempts the following:
Corrects —Provides component-level validation checks, including
sub-premises where available.
Completes —Attempts to infer missing or incorrect address components.
Formats —Cleans up and standardizes the format for address components.
Resources
The following table summarizes the resources available through the
Address Validation API along with the data it returns. For specific details, see the
Address Validation API reference .
Data resources
Data returned
Address components in JSON format.
See Validate an address .
Complete, validated address (if possible).
Validation status of each address component.
Where available for an address:
Geocode
Address precision
Postal services data, where available.
See Understand the validation response .
How to use the Address Validation API
1
Try the demo
Explore the demo
with a variety of address forms, both correct and incorrect.
The demo provides a useful way to explore both the return values from the
service, as well as the JSON formatted API response.
2
Check coverage
Review coverage details
to see which countries and regions the Address Validation API supports.
3
Get set up
Start with Set up your
Google Cloud project
and complete the
instructions that follow.
4
Request an address validation
Start with a basic address and then, for additional accuracy, you can
enable CASS (for US and PR addresses only). See Request an address validation.
5
Process a response
The Address Validation API response provides two properties, each of which
you use in different ways.
See Understand a basic response.
6
Improve validation accuracy
You can help improve address accuracy by providing feedback on
Address Validation API responses. See Handle updated addresses .
Available client libraries
For a list of the available client libraries for Address Validation API,
see
Client libraries .
About CASS™
The United States Postal Service® (USPS®) 1 maintains the
Coding Accuracy Support System (CASS™)
to support and certify address validation providers. A CASS Certified™ service,
such as the Address Validation API, has been confirmed for its
ability to fill in information missing from an address, standardize it, and
update it to give you the most current and most accurate address.
CASS is not enabled by default and is only supported for the "US" and "PR"
regions. To enable CASS, set enableUspsCass to true as part of a validation
request. For more information, see
Validate an address .
As part of our use of USPS services, USPS evaluates requests for artificially
created addresses. If USPS identifies an input address as being artificially
created, Google is required to stop validating addresses for the customer and
must report the customer's contact information (name and address), the relevant
input address, and aggregated usage data to USPS. By using the API you consent
to these
Service Specific Terms .
What's next
Try the demo : Go to Demo
Review coverage areas : Go to Country and region coverage details
Try your first validation request : Go to Send an address validation request
Process addresses at high volume : Go to Use Address Validation API to process addresses at high volume
Google Maps Platform is a non-exclusive Licensee of the United States
Postal Service®. The following trademark(s) are owned by the United States
Postal Service® and used with permission: United States Postal Service®,
CASS™, CASS Certified™. ↩
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["The Address Validation API validates and standardizes addresses, identifying components and correcting errors. It can infer missing information, and determine if an address is a real place. The API accepts an address, validates it, and returns a complete address or flags missing information. Users can confirm, correct, or provide missing details. For US and Puerto Rico addresses, CASS can be enabled for enhanced accuracy. The Geocoding API may be preferred if address component validation is not needed.\n"]]
