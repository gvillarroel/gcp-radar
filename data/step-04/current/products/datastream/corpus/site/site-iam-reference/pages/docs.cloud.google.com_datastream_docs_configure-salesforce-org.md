---
title: "Configure a Salesforce organization for CDC \_|\_ Datastream \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-salesforce-org
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/configure-spanner
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-salesforce-org
  title: "Configure a Salesforce organization for CDC \_|\_ Datastream \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Configure a Salesforce organization for CDC
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to configure change data capture (CDC) to
stream data from a Salesforce organization to a supported destination ,
such as BigQuery or Cloud Storage.
Before you begin
Before you start configuring Salesforce for use with Datastream,
you need to:
Have access to an active Salesforce organization
Have knowledge of how to navigate and change settings in Salesforce
Have knowledge of how to create users and profiles in Salesforce
Configure a Salesforce organization for use with Datastream
To establish a connection between your Salesforce org and Datastream,
you need to authenticate either by using a username and a password, or by using
the OAuth 2.0 client credentials flow. To use the latter, you can create a
Salesforce connected app
or an external client app .
If your Salesforce org is configured to allow access from specific IP addresses,
make sure that Salesforce accepts
Datastream IP addresses .
For information about how to manage your network access restrictions, see Network access and profile-based IP restrictions
and Set trusted IP ranges for your organization
in the Salesforce documentation.
Configure a user
In Salesforce, either create a user, or adjust the settings for an existing
user as per the instructions that follow.
Create a dedicated profile and assign it to the user.
If your organization has IP address restrictions configured, make sure that
you add the Datastream IP addresses to the list of allowed IP
addresses. For more information, see
Restrict login IP addresses in profiles .
Make sure that the user profile has the API Enabled
permission so that the user can use both the Salesforce REST API and Bulk API 2.0 .
Make sure that the user profile has the permissions to read all
objects
and fields
that you want to include in your stream. For security reasons, consider granting
the user read-only permissions. For more information, see
Control who sees what
in the Salesforce documentation.
Optional: By default, Salesforce returns encrypted fields as masked fields.
If you need your user to view the actual values of encrypted fields, grant them
the View Encrypted Data permission. You can grant the permission by editing
the user's permission set.
Optional: Create and set up a connected app
Salesforce uses connected apps to integrate external applications with the
Salesforce API, integrate service providers with your Salesforce org,
or to control what data a third-party application can access from your Salesforce
organization. If you prefer to use a connected app to authenticate your Salesforce
instance in Datastream, perform the following steps:
Create a connected app. For more information, see the
Salesforce documentation .
Configure your connected app for the OAuth 2.0 client credentials flow .
Note: Make sure that the user to whom you want to assign the client
credentials flow has the appropriate API permissions and access to all objects
and fields that you want to include in your stream.
In Salesforce, go to Setup > Connected apps > Manage connected apps .
Click the connected app for which you want to edit permissions. Under
Client credentials flow , click the user for whom you want to edit
credentials flow settings.
Make sure that your connected app has the Manage user data via APIs (api)
scope enabled. For more information about scopes, see
OAuth tokens and scopes .
Make sure that your connected app can access the Salesforce APIs with the
Datastream IP addresses. For more information, see
Restrict access to APIs with connected apps and Configure trusted IP ranges for a connected app .
Get the consumer key and consumer secret:
In Salesforce, enter App in the quick find box, and then select
App Manager .
Find your connected app in the list and expand the drop-down to the right
of the row.
Select View .
In the Manage connected apps details page, click
Manage consumer details .
A screen opens asking you for a verification code. An email with the verification
code is sent to the user to whom you assign the client credentials flow.
Enter the verification code. You are then redirected to the consumer
details page where you can find your key and secret. You need to provide the
consumer key and secret when you create your connection profile.
What's next
Learn more about the Salesforce source .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
