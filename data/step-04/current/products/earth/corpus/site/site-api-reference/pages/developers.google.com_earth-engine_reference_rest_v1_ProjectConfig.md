---
title: "ProjectConfig \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/ProjectConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/ProjectConfig
  title: "ProjectConfig \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
ProjectConfig
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Cloud-based Earth Engine projects are described by a JSON representation with name and registrationState fields.
The name field is a required string representing the project config name.
The registrationState field is an output-only enum indicating the project's registration status, such as not registered, registered commercially, or registered non-commercially.
Information about a Cloud-based Earth Engine project. https://developers.google.com/earth-engine/cloud/projects .
JSON representation
{
"name" : string ,
"registrationState" : enum ( RegistrationState )
}
Fields
name
string
Required. The project config name, of the format "projects/*/config".
registrationState
enum ( RegistrationState )
Output only. The project registration state.
RegistrationState
Registration state.
Enums
REGISTRATION_STATE_UNSPECIFIED
Unspecified.
NOT_REGISTERED
Project is not registered.
REGISTERED_COMMERCIALLY
Project is registered for commercial use.
REGISTERED_NOT_COMMERCIALLY
Project is registered for non-commercial use.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-06 UTC."],[],["The core content details a Google Earth Engine project's configuration, specifically its registration status. Key information includes the project's `name` (a required string) and its `registrationState`, an output-only enum. This state can be `NOT_REGISTERED`, `REGISTERED_COMMERCIALLY`, or `REGISTERED_NOT_COMMERCIALLY`, indicating the project's use type. The JSON representation includes these two fields, providing a structured way to access the project's name and status.\n"]]
