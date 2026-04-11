---
title: "Class DetailedState (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.types.Event.DetailedState
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.types.Event.DetailedState
  title: "Class DetailedState (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class DetailedState (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.11
DetailedState ( value )
The detailed state of the incident. This enum lists all
possible detailed states of an incident.
- The impact of the incident could not be confirmed.
- The incident was intermittent or resolved itself.
The incident does not have a resolution because no action or
investigation happened. If it is intermittent, the incident
may reopen.
FALSE_POSITIVE (10):
Upon investigation, Google engineers
concluded that the incident is not affecting a
Google Cloud product. This state can change if
the incident is reviewed again.
Enums
Name
Description
DETAILED_STATE_UNSPECIFIED
Unspecified detail state.
EMERGING
Google engineers are actively investigating the event to determine the impact.
CONFIRMED
The incident is confirmed and impacting at least one Google Cloud product. Ongoing status updates will be provided until it is resolved.
RESOLVED
The incident is no longer affecting any Google Cloud product, and there will be no further updates.
MERGED
The incident was merged into a parent incident. All further updates will be published to the parent only. The `parent_event` field contains the name of the parent.
AUTO_CLOSED
The incident was automatically closed because of the following reasons:
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
