---
title: "Using session tokens \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/using-session-tokens
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/using-session-tokens
  title: "Using session tokens \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
Using session tokens
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Session tokens associate autocomplete search queries and selections for billing, ensuring accurate charges based on user interactions.
Each new search session requires a unique, user-generated token, ideally a version 4 UUID, to track related requests.
Autocomplete requests during a search are grouped and billed as a single request when the user makes a selection, charging only for Place data if a place is chosen.
If no selection is made within a few minutes, only the search query is billed, attributing costs to the initial search activity.
Session tokens are project-specific, allowing reuse across different Google Cloud projects but requiring uniqueness within the same project for proper billing.
Select platform:
Android
iOS
Web Service
Session tokens group the query and selection phases of a user autocomplete
search into a discrete session for billing purposes.
Create a session token
Users are responsible for generating unique session tokens for each session.
Google recommends using version 4 UUIDs .
Note: Session tokens can overlap across Google Cloud Console projects, but they
must be unique per project. For example, an app using Project A and an app using
Project B can use the same session token, but multiple apps using Project A
cannot use the same session token.
Example
As the user types a query, an autocomplete request is called every few
keystrokes (not per-character), and a list of possible results is returned. When
the user makes a selection from the result list, the selection counts as a
request, and all of the requests made during the search are bundled and counted
as a single request. If the user selects a place, the search query is available
at no charge, and only the Place data request is charged. If the user does not
make a selection within a few minutes of the beginning of the session, only the
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
For more information about how Autocomplete requests are billed, see Usage and
Billing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Session tokens group user autocomplete searches for billing. Generate unique session tokens (e.g., version 4 UUIDs) per project. As users type, autocomplete requests are made. Upon selection, all requests are bundled into a single, session-token-linked request. If a place is selected, only the Place data request is charged. Otherwise, only the search query is charged. If no selection is made, the session times out, and only the search query is billed. Discard the token after the session.\n"]]
