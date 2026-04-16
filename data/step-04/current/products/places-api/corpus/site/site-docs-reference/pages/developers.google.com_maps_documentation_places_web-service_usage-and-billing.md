---
title: "Places API Usage and Billing \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/usage-and-billing
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/usage-and-billing
  title: "Places API Usage and Billing \_|\_ Google for Developers"
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
Places API
Resources
Send feedback
Places API Usage and Billing
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Places API uses a pay-as-you-go model with charges based on specific features (SKUs) used in requests.
You receive a $200 monthly credit that automatically applies to eligible SKUs until February 28, 2025.
Using field masks to specify only the data needed in your requests can help control costs.
Autocomplete sessions, linking Autocomplete requests with Place Details or Address Validation requests, are currently free.
Pricing varies by SKU and usage volume, with tiers adjusting based on the number of requests made per month.
Reminder: To use the Places API, you must enable billing on each of your
projects and include an API key or OAuth token with all API or
SDK requests.
About field masks
For Place Details (New), Nearby Search (New), and
Text Search (New), use the FieldMask header in API requests to specify
the list of fields to return in the response. You are then billed at the highest
SKU applicable to your request. That means if you select fields in both the
Essentials and the Pro SKUs, you are billed based on the Pro SKU.
Using field masking is a good design practice to ensure that you don't request
unnecessary data, which helps to avoid unnecessary processing time and billing
charges.
About Autocomplete (New) sessions
An Autocomplete (New) session includes one or more Autocomplete (New) requests, and a
Place Details (New) request or Address Validation request. The same session token is passed to the
Autocomplete (New) request and to the subsequent Place Details (New) request or Address Validation
request.
A session starts with the first Autocomplete (New) request. A Place Details (New) request or
Address Validation request is then made when the user has selected one of the Autocomplete (New)
suggestions. If a session is abandoned, meaning no Place Details (New) request or
Address Validation request is made, Autocomplete (New) requests are charged as if no session token
was provided.
After a user has selected a place (meaning a Place Details (New) request or Address Validation
request is made), you must start a new session using a new session token.
Note: Session tokens can overlap across projects, but they must
be unique per project. For example, an app using Project A and an app using Project B can use the
same session token, while multiple apps using Project A cannot use the same session token.
A session token is good for one session and cannot be used for more than one
session. If you reuse a session token, the session is considered invalid and the requests are charged as if no session token were provided.
SKU details and pricing for the Places API
The following table shows the SKU details and pricing for the Places API.
Category Places API (New) SKU details SKU Pricing
Essentials
SKU: Autocomplete Requests
Main pricing list
India pricing list
Essentials
SKU: Autocomplete Session Usage
Main pricing list
India pricing list
Essentials
SKU: Place Details Essentials (IDs Only)
Main pricing list
India pricing list
Essentials
SKU: Place Details Essentials
Main pricing list
India pricing list
Essentials
SKU: Text Search Essentials (IDs Only)
Main pricing list
India pricing list
Pro
SKU: Nearby Search Pro
Main pricing list
India pricing list
Pro
SKU: Place Details Pro
Main pricing list
India pricing list
Pro
SKU: Text Search Pro
Main pricing list
India pricing list
Enterprise
SKU: Nearby Search Enterprise
Main pricing list
India pricing list
Enterprise
SKU: Nearby Search Enterprise Plus
Main pricing list
India pricing list
Enterprise
SKU: Place Details Enterprise
Main pricing list
India pricing list
Enterprise
SKU: Place Details Enterprise + Atmosphere
Main pricing list
India pricing list
Enterprise
SKU: Text Search Enterprise
Main pricing list
India pricing list
Enterprise
SKU: Text Search Enterprise + Atmosphere
Main pricing list
India pricing list
Enterprise
SKU: Place Details Photos
Main pricing list
India pricing list
Category Places API (Legacy) SKU details SKU Pricing
Essentials
SKU: Autocomplete - Per Request
Main pricing list
India pricing list
Essentials
SKU: Autocomplete (included with Place Details) - Per Session
Main pricing list
India pricing list
Essentials
SKU: Basic Data
Additional charges:
SKU: Places Details
SKU: Find Place
SKU: Places - Nearby Search
SKU: Places - Text Search
Main pricing list
India pricing list
Essentials
SKU: Find Place - ID only
Main pricing list
India pricing list
Essentials
SKU: Place Details Essentials - ID Refresh
Main pricing list
India pricing list
Essentials
SKU: Query Autocomplete - Per Request
Main pricing list
India pricing list
Pro
SKU: Autocomplete without Place Details - Per Session
Main pricing list
India pricing list
Pro
SKU: Find Place
Additional charges:
SKU: Basic Data
SKU: Contact Data
SKU: Atmosphere Data
Main pricing list
India pricing list
Pro
SKU: Places - Nearby Search
Additional charges:
SKU: Basic Data
SKU: Contact Data
SKU: Atmosphere Data
Main pricing list
India pricing list
Pro
SKU: Places - Text Search
Additional charges:
SKU: Basic Data
SKU: Contact Data
SKU: Atmosphere Data
Main pricing list
India pricing list
Pro
SKU: Places Details
Additional charges:
SKU: Basic Data
SKU: Contact Data
SKU: Atmosphere Data
Main pricing list
India pricing list
Enterprise
SKU: Atmosphere Data
Additional charges:
SKU: Places Details
SKU: Find Place
SKU: Places - Nearby Search
SKU: Places - Text Search
Main pricing list
India pricing list
Enterprise
SKU: Contact Data
Additional charges:
SKU: Places Details
SKU: Find Place
SKU: Places - Nearby Search
SKU: Places - Text Search
Main pricing list
India pricing list
Enterprise
SKU: Place Photos
Main pricing list
India pricing list
Usage limits
To review and manage your quotas and usage limits, see Quotas and quota
alerts .
Places API (New) : The rate limit per minute is per API method per
project. Meaning each API method has a separate quota.
Places API (Legacy) : The rate limit per minute is calculated as the sum
of client-side and server-side requests for all applications using the
credentials of the same project.
Adjust quota
Quota limits define the maximum number of requests allowed for a specific API or service within a
given timeframe. When the number of requests in your project reaches the quota limit, your service
stops responding to requests.
Important: To understand how an increase in quota could affect your bill, check out the
pricing calculator .
To modify a quota value for your API, follow these steps:
In the Cloud console, navigate to Google Maps Platform > Quotas .
Select the API for which you want to modify the quota.
Identify the quota value that you want to change, and select it using the checkbox.
Click Edit , enter a new quota value, and click Submit request .
View quota increase requests
Important: You must have the appropriate IAM permissions to view quota increase requests .
To view all quota increase requests, including past and pending requests:
In the Cloud console, navigate to Google Maps Platform > Quotas .
Select the API for which you want to view the quota increase request.
Click Increase Requests .
Tip: Make sure to monitor your quota usage regularly to avoid service
interruptions. Learn more about quotas and
quota alerts .
Terms of Use restrictions
For information on terms of use, see
policies for the Places API , and the
License Restrictions section
of the Google Maps Platform Terms of Service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The Places API uses a pay-as-you-go model with SKUs for billing, including a $200 monthly credit until February 2025. Autocomplete sessions, using unique tokens, bundle requests and are cheaper than individual ones. `FieldMask` is used to limit charges and data retrieval. Place Details, Nearby, and Text Search SKUs are tiered (IDs Only, Location, Basic, Advanced, Preferred) based on the fields requested. Data SKUs are charged additionally. Photo requests have a different SKU and pricing. Billing is influenced by API requests and data fields requested.\n"]]
