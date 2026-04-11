---
title: "Provide AI-powered summaries \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/ai-powered-summaries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/ai-powered-summaries
  title: "Provide AI-powered summaries \_|\_ Geocoding API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Geocoding API v4 methods have a default quota of 25 queries per second (QPS). For information on requesting a higher quota, see View and manage quotas and select Geocoding API as the service.
Home
Products
Google Maps Platform
Documentation
Web Services
Geocoding API
Send feedback
Provide AI-powered summaries
Stay organized with collections
Save and categorize content based on your preferences.
This product or feature is Experimental (pre-GA).
Pre-GA products and features might have limited support, and changes to pre-GA products and
features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by
the Google
Maps Platform Service Specific Terms . For more information, see the
launch stage descriptions .
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Caution: AI summaries are only available for residential destinations in certain
metropolitan areas in the United States and India. Coverage is limited to these
areas and may be low, especially outside of city centers. For a list of
supported metropolitan areas, see Destination coverage .
The Geocoding API offers AI-generated summaries to help users understand a
destination. These summaries are provided in the
Destination
object in the arrival_summary field.
These summaries are short, scannable text snippets of about 120 characters or 24
words or less, that encapsulate distinctive attributes about the destination to
help users during trip planning and arrival.
For example:
"Behind Domino's Pizza ⋅ Mid-rise apartment building with white and
brick-red stripes ⋅ Entrance is behind a black metal gate"
"Tall cream apartment building with balconies ⋅ Entrance is under a large
arched bridge over the driveway and has a security booth"
Arrival summaries are AI-generated. However, these summaries are
experimental and may occasionally contain inaccurate information. Your users
shouldn't rely on AI-powered summaries as their source of information.
Request an arrival summary
To return an arrival summary in the response, include
destinations.arrival_summary in the X-Goog-FieldMask header of your Search
for destinations
request.
The arrival_summary field contains an ArrivalSummary object with the
following fields: text , flag_content_url , and disclosure_text .
The response is in the form:
{
"destinations" : [
{
"arrival_summary" : {
"text" : {
"text" : "Behind Domino's Pizza ⋅ Mid-rise apartment building with white and brick-red stripes ⋅ Entrance is behind a black metal gate" ,
"languageCode" : "en-US"
},
"flag_content_url" : "https://www.google.com/local/review/rap/report?postId=..." ,
"disclosure_text" : {
"text" : "Summarized with Gemini" ,
"languageCode" : "en-US"
}
}
}
]
}
Display AI-powered summaries
When you display AI-powered summaries in your app, you must include the required
disclosure text and a link to report issues with the summary.
Disclosure text
When displaying an AI-powered summary from the text field, you must include
the localized disclosure text provided in the disclosure_text field of the
ArrivalSummary object in the response immediately below the summary. Never
modify or augment the disclosure text provided by the API.
Report issues
Each summary contains a flag_content_url which provides a link for users to
report issues with the summary content. When displaying an AI-powered summary,
you must make this link available to users to report issues with the summary.
For more information, see Policies for Geocoding
API .
Destination coverage
AI-powered summaries are only available for residential destinations, in the
following metropolitan areas:
United States
Atlanta
Boston
Chicago
Dallas-Fort Worth
Houston
Las Vegas
Los Angeles
Miami
New York
Philadelphia
San Diego
San Francisco
Seattle
Washington, D.C.
India
Bangalore (Bengaluru)
Chennai
Delhi (New Delhi)
Hyderabad
Kolkata
Mumbai
Feedback
This is an experimental feature of the Geocoding API. We would appreciate
feedback at
geocoding-feedback-channel@google.com .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
