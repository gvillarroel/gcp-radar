---
title: "Migration overview \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/migrate-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/migrate-overview
  title: "Migration overview \_|\_ Places API \_|\_ Google for Developers"
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
Introduction
Places API (New) provides improved performance and a new pricing model,
making it worthwhile to update apps that use the Places API (Legacy). For more
details on comparing features, see Choose your
API .
Use this guide to understand key differences between Places API (New)
compared to Places API (Legacy), along with how to handle necessary changes.
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
To use the features of Places API (New), you must first enable
Places API (New) in your Google Cloud project. For more
information, see Set up your Google Cloud
project .
You then must ensure that you have added Places API (New) to the API
key used by your app. For more information, see Use API
Keys .
Note: If you are using both Places API (Legacy) and Places API (New), we
recommend that you create a separate API key for each API version.
General changes
Some general changes that apply to multiple APIs include:
All new APIs support both
API keys
and OAuth
tokens as the authentication mechanism.
Only JSON is supported as a response format.
Field masking is required by Place Details (New),
Nearby Search (New), and Text Search (New)
to specify which fields you want returned in the response. For more
information, see
FieldMask .
The Nearby Search (New)
and Text Search (New)
APIs now return the full place details to match the place details returned
by Place Details (New) .
The JSON response format for the
Place Details (New) ,
Nearby Search (New) ,
and Text Search (New)
APIs has changed from the format of the existing APIs. For more details, see
Migrate the Places API response .
API-specific changes
This section includes the following migration guides for each API:
Migrate to Nearby Search (New)
Migrate to Text Search (New)
Migrate to Place Details (New)
Migrate to Place Photos (New)
Migrate to Autocomplete (New)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
