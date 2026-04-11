---
title: "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\
  \ Google for Developers"
url: https://developers.google.com/workspace/meet/api/guides/authenticate-authorize
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/guides/overview
source_metadata:
  url: https://developers.google.com/workspace/meet/api/guides/authenticate-authorize
  title: "Authenticate and authorize Meet REST API requests \_|\_ Google Meet \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Meet
Guides
Send feedback
Authenticate and authorize Meet REST API requests
Stay organized with collections
Save and categorize content based on your preferences.
Authentication and authorization are mechanisms used to verify identity and
access to resources, respectively. This document outlines how authentication and
authorization work for Google Meet REST API requests.
This guide explains how to use OAuth 2.0 with a user's Google credentials to
access the Meet REST API . Authenticating and
authorizing with user credentials lets Meet apps access user data
and perform operations on the authenticated user's behalf. By authenticating on
a user's behalf, the app has the same permissions as that user and can perform
actions as if they were performed by that user.
Important terminology
The following is a list of terms related to authentication and authorization:
Authentication
The act of ensuring that a principal , which can be a user
or an app acting on behalf of a user, is who they say they are. When writing
Google Workspace apps, you should be aware of these types of
authentication: user authentication and app authentication. For
Meet REST API, you can only authenticate using user authentication.
Authorization
The permissions or "authority" the principal has to access
data or perform operations. The authorization is done through code you write
in your app. This code informs the user that the app wishes to act on their
behalf and, if allowed, uses your app's unique credentials to obtain an
access token from Google to access data or perform operations.
Meet REST API scopes
Authorization scopes are the permissions that you request users to authorize for
your app to access the meeting content. When someone installs your app, the user
is asked to validate these scopes. Generally, you should choose the most
narrowly focused scope possible and avoid requesting scopes that your app
doesn't require. Users more readily grant access to limited, clearly described
scopes.
The Meet REST API supports the following OAuth 2.0 scopes:
Scope code
Description
Usage
https://www.googleapis.com/auth/meetings.space.settings
Edit and see the settings for all of your Google Meet calls.
Non-sensitive
https://www.googleapis.com/auth/meetings.space.created
Allow apps to create, modify, and read metadata about meeting spaces created by your app.
Sensitive
https://www.googleapis.com/auth/meetings.space.readonly
Allow apps to read metadata about any meeting space the user has access to.
Sensitive
https://www.googleapis.com/auth/drive.readonly
Allow apps to download recording and transcript files from Google Drive API.
Restricted
The following Meet-adjacent OAuth 2.0 scope resides in the
Google Drive API scopes list :
Scope code
Description
Usage
https://www.googleapis.com/auth/drive.meet.readonly
View Drive files created or edited by Google Meet.
Restricted
The Usage column in the table indicates the sensitivity of each scope, according
to the following definitions:
Non-sensitive : These scopes provide the smallest scope of authorization
access and only require basic app verification. To learn more, see
Verification
requirements .
Sensitive : These scopes provide access to specific Google user data
that's authorized by the user for your app. It requires you to go through
additional app verification. To learn more, see Sensitive and Restricted
Scope
Requirements .
Restricted : These scopes provide wide access to Google user data and
require you to go through a restricted scope verification process. To learn
more, see Google API Services User Data
Policy and Additional Requirements
for Specific API
Scopes .
If you store restricted scope data on servers (or transmit), then you must
go through a security assessment.
If your app requires access to any other Google APIs, you can add those scopes
as well. For more information about Google API scopes, see Using OAuth 2.0 to
Access Google APIs .
To define what information is displayed to users and app reviewers, see
Configure the OAuth consent screen and choose
scopes .
For more information about specific OAuth 2.0 scopes, see OAuth 2.0 Scopes for
Google APIs .
Authenticate and authorize using domain-wide delegation
If you're a domain administrator, you can grant domain-wide delegation of
authority to authorize an
application's service account to access your users' data without requiring each
user to give consent. After you configure domain-wide delegation, the service
account can impersonate a user
account .
Although a service account is used for authentication, domain-wide delegation
impersonates a user and is therefore considered user authentication . Any
capability that requires user authentication can use domain-wide delegation.
Related topics
For an overview of authentication and authorization in Google Workspace,
see Learn about authentication and
authorization .
For an overview of authentication and authorization in Google Cloud, see
Authentication methods at
Google .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
