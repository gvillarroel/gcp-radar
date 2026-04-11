---
title: "Download events \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/detection/downloading-events
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/secops/secops-overview
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/detection/downloading-events
  title: "Download events \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Download events
Supported in:
Google secops
SIEM
You can display and download large numbers of the events associated with each threat detection. This lets you search across a broad set of the data stored in your Google Security Operations account to hunt for security issues.
Display and download events
Complete the following steps to display and download the events associated with a detection:
In the navigation bar, click Detection > Rules & Detections .
Click the Rules Dashboard tab.
Rules Dashboard
Click a rule to open the Rule Detections view.
Note: The Download as CSV option is only available for multi-event rules.
It is not supported for detections from Test Rules.
Select a Detection from the Detections list and expand the sample events
list by clicking the arrow next to the list.
Each event variable in a rule can display up to 10 sample events.
For example, a rule with two event variables ( $e1 , $e2 ) can show up to 20
samples in total. Any samples beyond this limit are hidden on the
Detections page., but they're included if you click Download All to view
Unified Data Model (UDM) events associated with your detection.
The Download as CSV option appears if event samples were omitted from your
detection. A maximum of 100,000 events can be downloaded.
The event samples are sorted by event timestamp in the UI. Google does not
guarantee any sorting of event samples when reading detections from
Chronicle APIs.
Optional: Click
view_column Columns to add more fields to the sample events list.
These fields are also included in the downloaded CSV.
Click the Download as CSV link. The event samples are downloaded as a CSV file which you can then open in most spreadsheet applications.
Note: Your security data is continuously ingested into your Google SecOps account. When you click Download all, the CSV file is dynamically generated and includes the latest event samples. It might differ from the data displayed in the user interface.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
