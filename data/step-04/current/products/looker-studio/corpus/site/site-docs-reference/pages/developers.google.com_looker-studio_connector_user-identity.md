---
title: "Access user identity properties \_|\_ Community Connectors \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/looker-studio/connector/user-identity
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector
source_metadata:
  url: https://developers.google.com/looker-studio/connector/user-identity
  title: "Access user identity properties \_|\_ Community Connectors \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Access user identity properties
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Community Connectors allow you to build data sources that can access the effective user's identity, enabling personalized data retrieval.
Depending on the data source credentials, the effective user can be either the data source creator or the report viewer.
Your connector can leverage the user's OAuth token to access Google services and APIs on their behalf for custom data integrations.
You can tailor the user experience by implementing custom access control and using the user's email address for identification.
Users will use your Community Connector to create their own data sources. For
these data sources, your connector can access the effective user's identity.
Depending on the Data source credentials , the effective user can be the data
source creator (Owner's credentials) or the report viewer (Viewer's
credentials).
Benefits
You can access Google services and APIs on behalf of the user.
You can implement custom access control to ensure only relevant data is
being displayed.
You can customize the user experience for the effective user.
Implementation steps
Accessing the user OAuth token
Your connector can access Google services and APIs on behalf of the user by
passing the user's OAuth token. To access the effective user's OAuth token in
your connector, use ScriptApp.getOAuthToken() . See getOAuthToken reference .
This token will include the Authorization scopes included during the connector
authorization.
For most connectors, Apps Script automatically detects what scopes are needed by
parsing and processing the script. You can view the scopes a connector uses at
any time. You can also set scopes explicitly in your manifest using URL
strings. If you want to access a Google service or API on behalf of the user,
include that relevant scope in the manifest.
Accessing the user email address
In your code, you can identify the current effective user with
Session.getEffectiveUser().getEmail() . See getEffectiveUser reference .
Adding this code will automatically add the
https://www.googleapis.com/auth/userinfo.email authorization scope to your
connector.
Example: Calling Google APIs with user OAuth token
The Google Fit connector fetches data from the Google Fit API for the
effective user. While calling the API, it passes the effective user's OAuth
token. See the source code for implementation
details.
The Firestore connector uses the Cloud Resource Manager to get a list of
projects for the effective user. This connector also passes the effective
user's OAuth token. See the source code for
implementation details.
Example: isAdminUser() based on email address
The Chrome UX Connector maintains a list of admin users. It uses
getEffectiveUser() and compares the effective user against the list to
determine whether the effective user is an admin or not. See
implementation of getEffectiveUser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
