---
title: "Create and assign custom access levels using Falcon ZTA data \_|\_ Chrome\
  \ Enterprise Premium \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection
source_metadata:
  url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs
  title: "Create and assign custom access levels using Falcon ZTA data \_|\_ Chrome\
    \ Enterprise Premium \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Chrome Enterprise Premium
Guides
Send feedback
Create and assign custom access levels using Falcon ZTA data
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to create device-based custom access levels using Falcon ZTA
data and assign those access levels to your organizational resources.
Before you begin
Set up Chrome Enterprise Premium and Falcon ZTA integration .
Upgrade to Chrome Enterprise Premium, which is the paid subscription of Chrome Enterprise Premium.
To upgrade, contact our sales team .
Ensure that you have one of the following Identity and Access Management roles:
Access Context Manager Admin ( roles/accesscontextmanager.policyAdmin )
Access Context Manager Editor ( roles/accesscontextmanager.policyEditor )
Understand the objects and attributes that are used to build the
Common Expression Language (CEL)
expressions for custom access levels. For details, see
Custom access level specification .
Create custom access levels
You can create access levels with one or more conditions. If you want the users'
devices to satisfy multiple conditions (a logical AND of conditions), create
an access level that contains all the required conditions.
To create a new custom access level using the data provided by Falcon ZTA, do the
following:
Go to the Access Context Manager page in the Google Cloud console.
Go to Access Context Manager
If you are prompted, select your organization.
On the Access Context Manager page, click New .
In the New Access Level pane, enter the following:
In the Access level title field, enter a title for the access level.
The title must be at most 50 characters, start with a letter, and can
contain only numbers, letters, underscores, and spaces.
In the Create Conditions in section, select Advanced Mode .
In the Conditions section, enter the expressions for your custom
access level. The condition must resolve to a single boolean value.
To find the available CrowdStrike fields for your CEL expression, you can review the
Falcon ZTA data
collected for your devices.
Examples
The following CEL expression creates a rule that allows access only from
Falcon ZTA-managed devices with an OS assessment score higher than 50:
device.vendors["CrowdStrike"].is_managed_device == true && device.vendors["CrowdStrike"].data["assessment.os"] > 50.0
The following CEL expression creates a rule that allows access only from devices that
Falcon ZTA assessed in the last two days. The iat (issued at) field is provided
as part of the Falcon ZTA's zero trust assessment.
request.time - timestamp(device.vendors["CrowdStrike"].data["iat"]) < duration("48h")
Note: We recommend setting a value more than 90 minutes for duration
because Chrome Enterprise Premium has an innate delay of 90 minutes for getting any new assessment by Falcon ZTA.
The following CEL expression creates a rule that allows access only from devices whose
Falcon ZTA's assessment is not expired. The exp field (expiry) field is
provided as part of the Falcon ZTA's zero trust assessment.
timestamp(device.vendors["CrowdStrike"].data["exp"]) - request.time > duration("0m")
For examples and more information about Common Expression Language
(CEL) support and custom access levels, see the Custom access level specification .
Click Save .
Assign custom access levels
You can assign custom access levels to control access to
applications. These applications include Google Workspace apps
and the applications that are protected by Identity-Aware Proxy
on Google Cloud (also known as IAP-secured resource).
You can assign one or more access levels for the apps. If you
select multiple access levels, users' devices only need to satisfy the conditions in one
of the access levels to be granted access to the app.
Note: If you want user devices to satisfy conditions in more than one
access level (a logical AND of access levels), create an access level with all
the required conditions.
Assign custom access levels for Google Workspace applications
Assign access levels for Google Workspace applications
from the Google Workspace Admin console:
From the Admin console Home page, go to Security > Context-Aware Access .
Go to Context-Aware Access
Click Assign access levels .
You see a list of apps.
In the Organizational units section, select your organizational unit
or group.
Select the app for which you want to assign an access level, and click Assign .
You see a list of all access levels. Access levels are a shared resource
between Google Workspace, Cloud Identity, and Google Cloud so you
might see access levels that you didn't create in the list.
Select one or more access levels for the app.
To apply the access levels to users on desktop and mobile apps (and
on the browser), select Apply to Google desktop and mobile apps .
This checkbox applies to built-in apps only.
Click Save .
The access level name displays in the assigned access levels list next to
the app.
Assign custom access levels for IAP-secured resources
To assign access levels for IAP-secured
resources from the Google Cloud console, follow the instructions in
Apply an access level for IAP-secured resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
