---
title: "Configure Google Workspace \_|\_ Network Intelligence Center - Cloud Network\
  \ Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/configure-workspace
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/configure-workspace
  title: "Configure Google Workspace \_|\_ Network Intelligence Center - Cloud Network\
    \ Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Cloud Network Insights
Guides
Configure Google Workspace
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
If your organization uses Google Workspace and restricts what apps you can
install, a Google Workspace administrator might need to adjust API access
control settings. This prevents users from encountering an
Access Blocked: admin_policy_enforced error
when accessing AppNeta in the embedded AppNeta UI using Google Single
Sign-On.
For more information, see Control which apps access Google Workspace data
Enable access
To allow the identity and permission verification flow, enable AppNeta access:
Copy the AppNeta OAuth Client ID :
499105906135 - qg4b9i5v59rv2qgde5dp3qn3hhd6k4uv . apps . go ogleusercontent . com
Open
the Google Admin Console
and navigate to Security > Access and data control > API controls .
Click Manage Third-Party App Access .
Add the appneta.com app.
Click Configure new app .
Paste the OAuth Client ID into the search bar.
Select the appneta.com application from the results.
Check the box for the specific client ID and click Select .
Define access scope.
Select the organization scope you want to configure access for
and click Continue .
Under Access to Google Data , select Specific Google data .
Verify that Google Cloud and Google Sign-in are included in
the permitted services list. This lets you explicitly choose which
Google data the app can request.
Verify that the requested scopes match the following:
https://www.googleapis.com/auth/userinfo.email
https://www.googleapis.com/auth/cloud-network-insights
https://www.googleapis.com/auth/userinfo.profile
openid
Click Finish .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
