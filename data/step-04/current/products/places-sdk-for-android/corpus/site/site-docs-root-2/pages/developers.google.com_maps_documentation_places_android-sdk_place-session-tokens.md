---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/place-session-tokens
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/place-session-tokens
  title: "Places SDK for Android \_|\_ Google for Developers"
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
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Web Service
Session tokens
Session tokens are user-generated strings (or objects) that track Autocomplete (New)
calls as sessions . Autocomplete (New) uses session tokens to group the query
and selection phases of a user autocomplete search into a discrete session for
billing purposes.
Users are responsible for creating session tokens for each session. Session
tokens must be URL- and filename-safe base64 strings. Users can generate session
tokens in any manner, although Google recommends using version 4 universally
unique identifiers (UUIDs) for session tokens.
The session begins with a call to Autocomplete (New), and concludes with a call
to Place Details (New) or Address Validation . Each session can have
multiple Autocomplete (New) queries, followed by one request to Place Details
(New) or Address Validation. The API key(s) used for each request within a
session must belong to the same Google Cloud Console project.
Note: Session tokens cannot be exchanged between Places API (Legacy) endpoints and
Places API (New) or Address Validation endpoints. For example, a Place Autocomplete (Legacy) request can be followed by a Place Details (Legacy) request in the same
session, but it cannot be followed by a Place Details (New) request or an
Address Validation request in the same session.
Session tokens terminate in the following ways:
Place Details (New) is called.
Address Validation is called.
The session is abandoned.
Note: You can optionally omit the Autocomplete (New) session token from a
request. If the session token is omitted, each request is billed separately and
charges the SKU: Autocomplete Requests .
Once a session has concluded, the token is no longer valid; your app must
generate a fresh token for each new session. If the sessionToken parameter is
omitted, or if you reuse a session token, the new session is charged as if no
session token was provided (each request is billed separately).
For more information about how Autocomplete (New) requests are billed, see
Autocomplete (New) and session pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Session tokens, unique identifiers, group user autocomplete searches into sessions for billing. These tokens, which must be URL- and filename-safe base64 strings, are created by the user, with UUIDs recommended. A session begins with an Autocomplete (New) call and ends with Place Details (New) or Address Validation. Each session may include several Autocomplete (New) queries. Once terminated, a new token is required. Omitting or reusing a token results in individual billing for each request.\n"]]
