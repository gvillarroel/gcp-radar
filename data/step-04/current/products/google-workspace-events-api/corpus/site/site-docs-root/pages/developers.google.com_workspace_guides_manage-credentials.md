---
title: "Manage credentials for Google Workspace APIs \_|\_ Google for Developers"
url: https://developers.google.com/workspace/guides/manage-credentials
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/guides/manage-credentials
  title: "Manage credentials for Google Workspace APIs \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Manage credentials for Google Workspace APIs
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace credentials, including OAuth 2.0 and service accounts, are used to obtain access tokens for your app to interact with Google Workspace APIs.
You can manage your Google Workspace credentials—view, edit, reset client secrets, turn off service accounts, and delete credentials—in the Google Cloud console.
Deleting credentials permanently removes application access to Google Cloud resources through that credential and cannot be undone.
For security, the client secret of an OAuth 2.0 Client ID should only be known by the application and the authorization server.
Credentials are used to obtain an access token from Google's authorization
servers so your app can call Google Workspace APIs. For
Google Workspace APIs, you can manage OAuth 2.0 and service account
credentials.
View credentials
To see a list of credentials enabled for all Google Workspace APIs or an
individual Google Workspace API, do the following:
In the Google Cloud console, click Menu menu
> the View all products tile
> Google Workspace
> Credentials .
Go to Credentials
To select an individual Google Workspace API, click All Google
Workspace APIs , then select an API.
Edit credentials
After you create credentials, you can edit some aspects of a credential. For
example, for OAuth 2.0 client IDs, you can edit the name that is shown in
the Google Cloud console or reset the client secret. For service accounts, you
can edit the name and description.
In the Google Cloud console, click Menu menu
> the View all products tile
> Google Workspace
> Credentials .
Go to Credentials
To edit a credential, click Edit edit .
Make your changes and then click Save .
Reset client secret
The client secret should only be known to the application and the authorization
server.
In the Google Cloud console, click Menu menu
> the View all products tile
> Google Workspace
> Credentials .
Go to Credentials
Next to an OAuth 2.0 Client ID, click Edit edit .
Click Reset Secret .
Copy the secret and update the application with this value.
Turn off a service account
When you turn off a service account, applications no longer have access to the
Google Cloud resources through that service account. If you turn off a
service account, you can turn it back on later.
In the Google Cloud console, click Menu menu
> the View all products tile
> Google Workspace
> Credentials .
Go to Credentials
Next to a service account, click Edit edit .
Click Disable service account and then click Disable.
Delete a client ID or service account
When you delete a client ID or a service account, applications no longer have
access to the Google Cloud resources through that client ID or service
account. If you delete a client ID or service account, this deletion is
permanent and the credentials can't be restored.
In the Google Cloud console, click Menu menu
> the View all products tile
> Google Workspace
> Credentials .
Go to Credentials
Next to a credential, click Delete
delete and then click Delete .
Next steps
Learn about authentication & authorization .
Create access credentials .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Credentials, like OAuth 2.0 and service accounts, enable apps to access Google Workspace APIs. To manage them, navigate to **Google Workspace** \u003e **Credentials** in the Google Cloud console. Here, you can view credentials for all or individual APIs. Editing allows changes to names and descriptions or resetting client secrets. Service accounts can be disabled or deleted, permanently revoking app access. Similarly, deleting client IDs is permanent. Finally, credentials can be reset to get new access tokes.\n"]]
