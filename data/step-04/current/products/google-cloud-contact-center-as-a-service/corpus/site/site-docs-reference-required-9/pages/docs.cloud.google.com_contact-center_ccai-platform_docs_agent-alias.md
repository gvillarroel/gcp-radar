---
title: "Agent aliases \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-alias
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-sms
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-alias
  title: "Agent aliases \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
Agent aliases
Stay organized with collections
Save and categorize content based on your preferences.
CCAI Platform lets an agent substitute an alias for their real name
when communicating with end-users. Administrators can configure agent aliases
manually or with a bulk upload. An agent can configure their own alias if they
have permissions. Administrators can also add an agent alias attribute to a chat
shortcut.
Agent aliases are displayed to end-users only with the mobile and web SDKs.
Agent aliases are not used in reporting.
Add an agent alias to a user
To add an agent alias to a user, follow these steps:
Click menu Menu , and then click
Settings > Users and teams .
In the All users pane, in the row for the user that you want to add an
agent alias to, click more_horiz
More , and then click Edit user . The Edit a user dialog
appears.
In the Alias (Optional) field, enter the agent alias, and then click
Update .
Note: You can also create an agent alias when creating a user. For more
information, see Add users .
Do a bulk import of agent aliases
To do a bulk import of agent aliases, follow these steps:
Click menu Menu , and then click
Settings > Users and teams .
Click Bulk user management , and then click Upload users . The
Import users pane appears.
Click Template . The bulk_user_manage_template.csv template downloads
to your computer.
Open bulk_user_manage_template.csv .
In the Alias column of the template, enter an agent alias for each user
that requires one.
Save and close bulk_user_manage_template.csv .
In the Import users pane, browse for bulk_user_manage_template.csv
on your computer or drag the file into the pane.
Click Process .
For more information, see Bulk user management templates
Let agents create their own aliases
You can grant agents permissions to create their own aliases.
To grant an agent permissions to create their own alias, follow these steps:
In the CCAI Platform portal, go to Settings > Users and teams .
Click the roles and permissions tab.
In the agent row, click Visibility . The edit role display
appears.
In the user profile row, click expand .
Select the agent alias checkbox, and then click Update .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
