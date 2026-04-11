---
title: "Case manipulation \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation
  title: "Case manipulation \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Case manipulation
This section focuses on SDK functions that help manipulate a
case's state and data.
Name
Siemplify
SiemplifyAction
Description
close_case
N/A
close_case
Closes the current case with the selected close reason and given comment
add_comment
add_comment
add_comment
Adds a comment to the current case's case wall
close_alert
N/A
close_alert
Closes the current alert with the selected close reason and given
comment
raise_incident
raise_incident
raise_incident
Changes the current case into an incident
assign_case
assign_case
assign_case
Assigns the current case to the selected analyst or group
add_entity_to_case
add_entity_to_case
add_entity_to_case
Creates a new entity in the case
add_attachment
add_attachment
add_attachment
Adds attachment to the case.
Case metadata
This section focuses on SDK functions that manipulate case index and
help maintain the system. Functions in this section are used to produce better
search mechanism, KPIs and filters.
Methods
Name
Siemplify
SiemplifyAction
Description
add_tag
N/A
add_tag
Adds a new tag to the current case
change_case_stage
N/A
change_case_stage
Sets the current case's stage to a specific stage
change_case_priority
change_case_priority
change_case_priority
Sets the current case's priority to a specific value
mark_case_as_important
mark_case_as_important
mark_case_as_important
Marks the current case with the 'importance triangle' sign
Data retrieval
Name
Siemplify
SiemplifyAction
Description
get_case_comments
get_case_comments
get_case_comments
Retrieve comments on the case
get_alerts_ticket_ids_from_cases_closed_since_timestamp
N/A
get_alerts_ticket_ids_from_cases_closed_since_timestamp
get_similar_cases
N/A
get_similar_cases
Retrieve similar cases in the system
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
