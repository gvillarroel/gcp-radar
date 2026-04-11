---
title: "Share a Community Connector \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/share
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/looker-studio
source_metadata:
  url: https://developers.google.com/looker-studio/connector/share
  title: "Share a Community Connector \_|\_ Community Connectors \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Share a Community Connector
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
To enable users to use your connector, you must either publish it in the Connector Gallery or grant them read access to your Apps Script project.
Sharing the Apps Script project using link sharing allows users to utilize the connector without it appearing in their Google Drive.
For limited user access, share the script with specific individuals, granting them direct access within their Google Drive.
Connector source code should exclude sensitive information like secrets or API keys; utilize the Properties Service for secure storage and retrieval.
Widespread connector distribution can be achieved through publishing in the Connector Gallery and/or sharing direct links.
Now that you have built , used , and deployed your
connector, you may want to share it with other Looker Studio users.
If you do not publish your connector in the
Connector Gallery , then any user of the connector will
require read access to your Apps Script project. Without read access their
Looker Studio account will not be able to read and execute the script. You do
not need to share the script link with the users, only ensure they have read
access to the script.
The recommended way of providing access is to
enable link sharing for the project . When shared this
way, the script will not show up in your users' Google Drive.
If you only want to share your connector with a selected group of users, you can
share the script with specific people . When shared
this way, the script will show up in your users' Google Drive and they will be
able to access it directly. This approach is only recommended if you want to
share the script with a selected group of users.
Key Point: If you don't share your script with your users, they won't be able to
use your connector unless it is published in the
Connector Gallery . Caution: As a best practice you should not include any secrets or API keys in
connector source code. Instead, rely on the
Properties Service to store and retrieve secrets required
by the connector.
Distribute
To distribute your connector to all Looker Studio users, you can request to be
published in the
Looker Studio Connector Gallery and/or
share a direct link .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
