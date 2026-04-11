---
title: "Archive rules \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule
  title: "Archive rules \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
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
Archive rules
Supported in:
Google secops
SIEM
Archiving a rule enables you to hide the security data related to that rule (and all of its versions) without actually deleting the rule. Much of the functionality available for active rules (for example, enabling a rule) is not available for archived rules.
Note the following:
Rules Dashboard does not display archived rules.
Test Rule can be used on archived rules.
Viewing rules
Complete the following steps to navigate to the View Rules page:
In the navigation bar, click Detection > Rules & Detections .
Select the Rules Editor tab to view the rules page.
Click the filter icon at the top-right corner of the left navigation
tab. The menu provides the following options: Show All ,
Active Rules , and Archived Rules .
Viewing rule detections
On the Rules Editor tab, select View Rule Detections from the drop-down
list available on the top-right corner. The Rule Detections page appears.
Archiving a rule
To archive a rule, complete the following steps:
Select a rule in the left navigation and click the option icon in the top-
right corner of the Google Security Operations user interface. Select Archive Rule from the
menu.
Note the following:
Archiving is allowed even if the Alerting toggle is ON, it is automatically disabled.
Archiving is NOT allowed unless the Live toggle is disabled.
Archiving is NOT allowed unless there are NO Retrohunts in progress.
The following window is displayed with a message confirmation.
Confirm Archive message
Confirm Archive message continued
Unarchiving a rule
To unarchive a rule, complete the following steps:
Click the option icon for a specific rule in the left navigation pane. A menu
appears with the following options: View Detections , Duplicate , and Unarchive .
Select Unarchive .
Select a rule in the left navigation pane and click the option icon in the
top right corner of the Google SecOps user interface. A menu appears with
the following options: View Detections , Duplicate , and Unarchive .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
