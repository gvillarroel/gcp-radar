---
title: "Migration overview \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/client-migration
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/client-migration
  title: "Migration overview \_|\_ Places SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Places SDK for Android
Legacy
Send feedback
Migration overview
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
The Places SDK for Android (New) provides improved performance and a new
pricing model, making it worthwhile to update apps that use the
Places SDK for Android (Legacy). For more details on comparing features,
see Choose your SDK .
Use this guide to understand key differences in the
Places SDK for Android (New) compared to the
Places SDK for Android (Legacy), along with how to handle necessary
changes.
Billing best practices for migration
warning_amber
This guidance applies if your API usage is high enough to
move into second-tier pricing. When migrating to a newer version of an API,
you're also being billed for a different SKU. To avoid increased costs during the month of
your transition, we recommend switching to the new APIs in production as close to the
beginning of the month as possible. This will ensure that you reach the most cost-effective
monthly pricing tiers during the migration month. For information about pricing tiers,
see the pricing page
and the pricing FAQ .
Enable Places API (New)
Places SDK for Android (Legacy) relies on the
Places API service. To use the features of
Places SDK for Android (New), you must first enable
Places API (New) in your Google Cloud project. For more
information, see Set up your Google Cloud
project .
You then must ensure that you have added Places API
(New) to the list of authorized APIs on the key used by your app. For more
information, see Use API Keys .
Ensure that you have enough quota in Places API (New)
Make sure that there is enough quota in the Places API (New) to
cover your current traffic. To review and manage your
quotas and usage limits, see Quotas and quota
alerts .
Note the difference:
The quota for Places SDK for Android (Legacy) relies on the quota of
the Places API service. It is the sum of all Places API methods.
The quota for Places SDK for Android (New) relies on the quota of
the Places API (New) service. There is a separate quota for each
API method.
Check if your negotiated agreement includes Places API (New)
If you have a negotiated agreement, check that it covers the
Places API (New), with the expected pricing. If not, contact your
Sales contact person at Google or your partner to discuss how you can include
this API.
General changes
Some general changes that apply to multiple APIs include:
Uses a new pricing model. For pricing information for all APIs, see
Places SDK for Android
(New) .
You must initialize your app by calling the
Places.initializeWithNewPlacesApiEnabled()
method. For more information on selecting the Places API service, see Set
up your Google Cloud
project .
Place Details
(New) ,
Nearby Search
(New) , and
Text Search
(New) require field
masks to specify which fields you want returned in the response.
New classes have been added to define the requests or to add new fields to
the response.
The response Place
object contains the new
getReviews()
method that returns a List of
Review
objects. When your app displays information obtained from the Place
object, such as photos and reviews, the app must also display the required
attributions.
For more information, see the documentation on
attributions .
Note: Because Text Search (New) and
Nearby Search (New) were added to
Places SDK for Android and did not replace any existing APIs,
there is no migration required to use them.
API-specific changes
This section includes the following migration guides for each API:
Migrate from Place Details (Legacy) to Place Details (New)
Migrate from Place Photo (Legacy) to Place Photo (New)
Migrate from Autocomplete (Legacy) to Autocomplete (New)
Migrate from Current Place (Legacy) to Nearby Search (New)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
