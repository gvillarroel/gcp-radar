---
title: "Create and manage deployments for your Google Chat app \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/create-manage-deployments
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/authenticate-authorize
source_metadata:
  url: https://developers.google.com/workspace/chat/create-manage-deployments
  title: "Create and manage deployments for your Google Chat app \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Create and manage deployments for your Google Chat app
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Manage your Google Chat app's lifecycle by creating separate deployments for development, staging, and production environments.
Create a distinct Google Cloud project for each deployment, using unique app names, avatar URLs, and descriptions for clarity.
Deploy changes progressively through each environment, starting with development and moving to staging before releasing to production.
For Apps Script projects, maintain separate projects for each environment due to their single-branch limitation.
Utilize different Pub/Sub topics for individual deployments to ensure environment isolation.
This page explains how to create and management deployments for your
Google Chat app. By maintaining different deployments, you can
better manage each phase of your Chat app's lifecycle
and safely release changes to production.
Create deployments for each phase of the app lifecycle
To manage your Chat app throughout its lifecycle, we
recommend that you create and deploy a Chat app for
each of the following environments:
Development: The environment that you use to work on changes. If
needed, you can use the head deployment or run this environment locally.
Staging: The environment that you deploy to trusted testers for
end-to-end testing. This environment should be as close to production as
possible.
Production: The environment that you deploy to end users by publishing
your Chat app to the
Google Workspace Marketplace .
For each Chat app that you deploy, you must create a
Google Cloud project. When you configure the Chat API in each
Cloud project, consider using a distinct app name, avatar URL, and
description so that you can better distinguish between the
Chat apps in Google Chat.
In the following example, the Chat app
called Task app is built on HTTP and uses different endpoints to deploy to
development, staging, and production:
Environment
Cloud project name
App name
HTTP endpoint URL
Development
task-chat-app-dev
Dev Task app
http://example.com/api/myapp/head
Staging
task-chat-app-staging
Staging Task app
http://example.com/api/myapp/staging
Production
task-chat-app
Task app
http://example.com/api/myapp/
Manage deployments based on your Chat app architecture
The following table includes additional considerations when managing deployments
for specific Chat app
architectures :
Architecture
Deployment format
Considerations
HTTP
HTTP endpoint URL
Deploy changes progressively to each endpoint in your
Chat app's lifecycle. For example, after
you've tested a new feature deployed in your staging endpoint
http://example.com/api/myapp/staging , release the feature to
production by deploying it to your production endpoint, such as
http://example.com/api/myapp .
To debug code before deploying, you can set an endpoint to your local
environment. To learn how to test changes locally, see
Debug Google Chat apps .
Google Apps Script
Deployment ID
Apps Script projects can only have a single branch and be
associated with one Cloud project. To test changes and maintain
multiple environments, you must create different Apps Script
projects for each environment.
You should only use the Apps Script project's head
deployment for the development environment. For staging and production
environments, use versioned deployments. For details, see
Create and manage deployments
in the Apps Script documentation.
Pub/Sub
Pub/Sub topic
You should use a different Pub/Sub topic for each deployment.
Related topics
Test interactive features for Google Chat apps
Create and manage Apps Script deployments
Choose a Chat app architecture
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["The document outlines creating and managing deployments for Google Chat apps across development, staging, and production environments. Each environment requires a separate Google Cloud project with a distinct app name and details. Deployment methods vary: HTTP uses endpoint URLs, Apps Script utilizes deployment IDs and separate projects, and Pub/Sub employs unique topics. Changes should be progressively deployed, starting from development, then staging, and finally production. Different app architectures require different consideration.\n"]]
