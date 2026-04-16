---
title: "Force viewer's credentials \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/force-viewers-credentials
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector
source_metadata:
  url: https://developers.google.com/looker-studio/connector/force-viewers-credentials
  title: "Force viewer's credentials \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Force viewer's credentials
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Community Connector can enforce viewer's credentials for all its data sources, ensuring only the report viewer's authorization is used to access data.
When viewer's credentials are enforced, data access is personalized to each viewer, enhancing data confidentiality and preventing unauthorized sharing.
To implement this, developers need to enable the forceViewersCredentials setting in the connector's manifest and adjust the access control logic to utilize the viewer's identity.
This approach simplifies creating scalable dashboards while ensuring users only see relevant data based on their individual access rights.
A Community Connector can enforce viewer's credentials for all data sources
created from the connector.
Required reading
Data source credentials
Access user identity properties
Data Studio reports can have one or more data sources attached to them. When a
user creates a new data source from a connector, they can select whether the
data source should use
Owner's credentials or Viewer's credentials .
When you Access user identity properties , the effective user is based on who
has authorized the connector.
For data sources with Owner's credentials , the data source owner is the
effective user . The data source owner authorizes the connector when they
create the data source.
For data sources with Viewer's credentials , the effective user is the
report viewer. The report viewer will authorize the connector when they view
a report.
Benefits
You can ensure data confidentiality.
Data access cannot be shared from one user to another.
You can ensure users will only be able to see data relevant to them.
It becomes easier for your users to create scalable dashboards.
Implementation steps
There are two steps to enforcing viewer's credentials for your connector:
In your connector's manifest, set dataStudio.forceViewersCredentials to
true . See Manifest reference for details.
Depending on your use case, you can implement your access control logic.
Ensure that only the relevant data for the report viewer is returned from
the connector. See Access user identity properties to understand how your
code can access the user identity/email address.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
