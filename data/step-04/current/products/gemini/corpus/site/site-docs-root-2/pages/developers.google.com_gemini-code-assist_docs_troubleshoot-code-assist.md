---
title: "Troubleshoot access to Gemini Code Assist Standard and Enterprise features\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/gemini-code-assist/docs/troubleshoot-code-assist
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/troubleshoot-code-assist
  title: "Troubleshoot access to Gemini Code Assist Standard and Enterprise features\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
Troubleshoot access to Gemini Code Assist Standard and Enterprise features
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document provides steps to resolve issues with accessing Gemini Code Assist Standard and Enterprise features.
Access issues can arise from disabled Gemini for Google Cloud API, missing user permissions, or the lack of a Gemini Code Assist Standard or Enterprise license.
If the Gemini for Google Cloud API is not enabled, the error message may provide a link to enable it if you have the necessary permissions.
If you have missing permissions, you need to contact your Google Cloud administrator to request the required permission.
To use Gemini Code Assist Standard or Enterprise features, you must have a license assigned to you, which may require contacting your administrator if you lack the ability to self-assign.
This document shows you how to resolve issues with accessing
Gemini Code Assist Standard and Enterprise features.
Depending on the Google Cloud project and organization settings that your
administrator configured, you might need to take additional steps to access
Gemini Code Assist Standard and Enterprise features
in the Google Cloud console and
supported IDEs , such as
enabling required APIs and assigning yourself a
Gemini Code Assist Standard or Enterprise license.
Disabled Gemini for Google Cloud
The following error occurs when you are attempting to use a
Gemini Code Assist Standard or Enterprise feature, such as a
quick prompt in the Google Cloud console or code completion in a supported
IDE:
This error occurs if the
Gemini for Google Cloud API isn't enabled .
If you have permissions to enable the Gemini for Google Cloud on a
Cloud project, then the message provides a link to enable it. If you
don't have permissions to enable it, then the message lists the permission you
need to enable the API.
Missing permissions
The following error occurs when you are attempting to use a
Gemini Code Assist Standard or Enterprise feature, such as a
quick prompt in the Google Cloud console or code completion in a supported
IDE:
This error occurs if you don't have the
required user permission to use a feature .
To resolve this issue, contact your Google Cloud administrator and request them
to grant you the missing permission.
Missing Gemini Code Assist Standard or Enterprise license
To use Gemini Code Assist Standard or Enterprise, you need to
have a license assigned to you. If the required APIs are enabled on your
Cloud project and you have the required permissions to use
Gemini Code Assist Standard or Enterprise features, but you
attempt to use a Gemini Code Assist Standard or Enterprise
feature (such as quick prompt in the Google Cloud console or code completion
in a supported IDE), the Google Cloud console displays a message explaining
that you need to get a Gemini Code Assist Standard or Enterprise
license.
If you don't have permissions to self-assign a license or manage licenses, then
you are provided a link to learn more about Gemini Code Assist
Standard and Enterprise licensing. You will need to request a license from your
Cloud project administrator.
License self-assignment for Google Cloud console-based Gemini Code Assist Standard and Enterprise features
If you have permissions to self-assign licenses and a license is available in
your organization, then you'll see a dialog in the Google Cloud console where
you click Get a license to have one assigned to you. Clicking that button
assigns a license to you, and it remains assigned until a period of inactivity
elapses. After that period of inactivity, your license is unassigned and
returned to the pool of available licenses.
If you have permissions to manage licenses ,
then you'll see a dialog where you click Manage subscription manually or
automatically assign a license.
IDE errors due to project license issues
You might see errors using Gemini Code Assist features in your
IDE if you are signed in with a Google Account associated with a Google Cloud
project, but that account lacks a Gemini Code Assist Standard
or Enterprise license.
To resolve this and use the no-cost Gemini Code Assist for
individuals, which includes core features like code completion and AI-powered
chat, ask your administrator to
enable access to Gemini Code Assist for individuals
for your organization.
Alternatively, from your IDE, sign out of Google Cloud and sign in to use
Gemini Code Assist with a different Google Account. This
account must not be associated with an organization for which access to
Gemini Code Assist for individuals is disabled.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-12 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-12 UTC."],[],[]]
