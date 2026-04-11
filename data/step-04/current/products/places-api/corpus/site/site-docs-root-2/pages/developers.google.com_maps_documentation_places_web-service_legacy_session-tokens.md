---
title: "Session Tokens \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/session-tokens
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/session-tokens
  title: "Session Tokens \_|\_ Places API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

This product or feature is in Legacy status. For more information about the Legacy status see Legacy products and features . To migrate to the Places API (New), see the Migration guide .
Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Legacy
Send feedback
Session Tokens
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Web Service
Place Autocomplete (Legacy) uses session tokens to group the query and selection
phases of a user autocomplete search into a discrete session for billing
purposes. The session begins when the user starts typing a query, and concludes
when they select a place and a call to Place Details (Legacy) is made. Each session can
have multiple autocomplete queries, followed by one place selection. The API
key(s) used for each request within a session must belong to the same
Google Cloud console project. Once a session has concluded, the token is no longer
valid; your app must generate a fresh token for each session. If the
sessiontoken parameter is omitted, or if you reuse a session
token, the session is charged as if no session token was provided (each request
is billed separately).
We recommend the following guidelines:
Use session tokens for all autocomplete sessions.
Generate a fresh token for each session.
Ensure that the API key(s) used for all Place Autocomplete (Legacy) and Place Details (Legacy)
requests within a session belong to the same Google Cloud console project.
Be sure to pass a unique session token for each new session. Using the
same token for more than one session will result in each request being billed
individually.
You can optionally omit the autocomplete session token from a request. If
the session token is omitted, each request is billed separately, triggering the
Autocomplete - Per Request
SKU. If you reuse a session token, the session is considered invalid and the
requests are charged as if no session token was provided.
Example
As the user types a query, an autocomplete request is called every few
keystrokes (not per-character), and a list of possible results is returned.
When the user makes a selection from the result list, the selection counts as
a request, and all of the requests made during the search are bundled and
counted as a single request. If the user selects a place, the search query is
available at no charge, and only the Place data request is charged. If the user does not make a
selection within a few minutes of the beginning of the session, only the
search query is charged.
Let's examine this flow of events from the perspective of an app.
A user begins typing a query to search for "Paris, France".
Upon detecting user input, the app creates a new session
token, "Token A".
As the user types, the API makes an autocomplete request every few
characters, displaying a new list of potential results for each:
"P"
"Par"
"Paris,"
"Paris, Fr"
When the user makes a selection:
All requests resulting from the query are grouped and added to the
session represented by "Token A", as a single request.
The user's selection is counted as a Place Detail request, and added
to the session represented by "Token A".
The session is concluded, and the app discards "Token A".
For more information about how Place Autocomplete (Legacy) requests are billed, see
Usage and Billing .
Create session tokens
You can create session tokens using whichever programmatic mechanism you
prefer. We recommend using a version 4 UUID
for session tokens.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
