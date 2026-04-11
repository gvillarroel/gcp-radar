---
title: "Configure the mobile app \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app
  title: "Configure the mobile app \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Configure the mobile app
Stay organized with collections
Save and categorize content based on your preferences.
Private Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page explains how to configure the Gemini Enterprise
mobile app on devices managed by a mobile device management (MDM) solution,
such as Google Endpoint Management (GEM) or Microsoft Intune.
Note: To access this feature, contact your Google account manager.
Overview
The Gemini Enterprise administrator panel provides a deeplink URL that
contains parameters required to configure the mobile app in your MDM solution.
These parameters map directly to AppConfig parameters.
Google Identity
If your Gemini Enterprise uses Google as an identity provider, the mobile
deeplink looks like this:
https://vertexaisearch.cloud.google.com/mobile?cid=123&cid_location=global
Extract the parameters from the deeplink URL, and use them to fill in the
app configuration in your MDM administrator console:
Deeplink parameter
MDM configuration key
MDM configuration name
Example value
cid
config_id
Configuration ID
123
cid_location
location
Location
global
Leave all other fields empty.
Note: When you configure the Android app in Google Endpoint Management
(GEM), use the MDM configuration name in the managed configuration form.
However, for iOS, manually enter the MDM configuration key with its
corresponding value. For example, the following XML is used to
configure an iOS application in GEM:
<dict>
<key>config_id</key>
<string>123</string>
<key>location</key>
<string>global</string>
</dict>
Microsoft Entra ID
If your Gemini Enterprise uses Microsoft Entra ID as an identity provider, the mobile
deeplink looks like this:
https://vertexaisearch.cloud.google.com/mobile?cid=123
&cid_location=global
&idp=locations/global/workforcePools/PROJECT/providers/entra
&tenant_id=111
&client_id=222
&project_id=ge-project
Extract the parameters from the deeplink URL, and use them to fill in the
app configuration in your MDM administrator console:
Deeplink parameter
MDM configuration key
MDM configuration name
Example value
cid
config_id
Configuration ID
123
cid_location
location
Location
global
idp
identity_provider
Identity Provider
locations/global/workforcePools/PROJECT/providers/entra
tenant_id
tenant_id
Entra tenant ID
111
client_id
client_id
Entra client ID
222
project_id
project_id
Project ID
ge-project
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
