---
title: "Developer Connect overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/overview
  title: "Developer Connect overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Developer Connect
Guides
Send feedback
Developer Connect overview
Stay organized with collections
Save and categorize content based on your preferences.
Developer Connect lets you connect external products or non-Google
developer tools to Google Cloud using standardized steps and
apps. Developer Connect establishes the connectivity by walking you through
permissions, authorization, authentication, and networking configurations to
the non-Google developer tools.
Developer Connect is designed for application developers, platform
administrators, and security managers who are looking for a way to use
non-Google products with Google Cloud.
Introduction
Developer Connect offers two ways to connect your external or non-Google
developer tools to your Google Cloud products:
Git repositories connections
Account connectors ( Preview )
These are described in the following sections.
Git repositories
A Git repository connection is a Developer Connect feature that lets you
create and maintain narrowly scoped connections to Git-based repositories on
source code management systems outside of Google Cloud.
This type of connection is a system connection to a Git repository, which you
can grant a service account permissions to use. Git repository connections are
applicable in scenarios where a user who authorized the connection doesn't need
to be present when the connection is invoked. For example, when a Git repository
is connected to your Cloud Build configuration, triggering a build upon a
commit to the repository doesn't require you to do anything at build time. With
Git repository connections, you can configure bot services in accounts on those
SCMs to handle routine tasks like cloning and indexing repositories.
You can use Git repository connections for:
Vertex AI Agent Builder
Firebase App Hosting web apps
Cloud Build
Cloud Run
SaaS Runtime
Application Design Center
Gemini Code Assist code customization
Gemini code review agent
For more information, including use cases and supported product integrations,
see Git repository connections .
Account connectors
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
An account connector is a Developer Connect feature that helps you connect
your Google Cloud account with your individual account on an
non-Google Developer Tools provider. Users can specify the type of data to be
accessed by the account connector by selecting the appropriate scope for that
connector. Once an account connector connection is created for an organization,
users within that organization can use that connection to authorize their
individual accounts to be used with that connection.
For more information, including use cases and supported product integrations,
see Account connectors .
What's Next
Try creating a basic Git repository connection .
Learn about Gemini Code Assist code customization .
Build web apps in Firebase App Hosting using your GitHub repositories .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
