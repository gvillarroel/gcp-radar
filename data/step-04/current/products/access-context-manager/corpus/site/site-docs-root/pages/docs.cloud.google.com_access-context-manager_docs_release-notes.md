---
title: "Access Context Manager release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/release-notes
  title: "Access Context Manager release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Resources
Send feedback
Access Context Manager release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Access Context Manager. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 21, 2025
Feature
Access Context Manager now supports custom organization policies. This feature is generally available ( GA ). For more information, see Create custom constraints for Access Context Manager .
October 03, 2024
Feature
Generally available : App allowlist support for context-aware access
You can now create an access binding with a map of applications to access levels to apply
access levels to specific applications, avoiding unintended effects on other applications. For more information, see Create an access binding with a map of applications to access levels .
June 28, 2024
Feature
Generally available : You can now use an internal IP address when specifying an IP address range in basic access levels.
For more information, see Creating a basic access level .
February 17, 2023
Feature
The ability to add individual VPC networks to a perimeter is generally available ( GA ).
Previously, all VPC networks in a host project were added to a perimeter. You can now do the following:
Add individual VPC networks as members of a perimeter.
Create an ingress rule to authorize individual VPC networks to access a perimeter.
June 30, 2022
Feature
Support to add individual VPC networks to a perimeter is now available in Preview .
Previously, the entire VPC host project was added to a perimeter. VPC Service Controls now supports the following enhancements:
You can now add individual VPC networks as members of a perimeter.
You can create an ingress rule to authorize individual VPC networks to access a perimeter.
March 31, 2022
Feature
General availability of scoped policies for VPC Service Controls.
To delegate administration of VPC Service Controls perimeters and access levels to folder-level and project-level administrators, you can use scoped policies . You can create access policies that are scoped to specific folders or projects.
April 22, 2021
Feature
General Availability release of Ingress and egress rules for VPC Service Controls.
October 22, 2020
Feature
Access levels now support checking the Storage encryption ( allowedEncryptionStatuses ), Require admin approval ( requireAdminApproval ) and Require corp owned device ( requireCorpOwned ) attributes of requests originating from mobile devices .
June 30, 2020
Feature
General availability of dry run mode for service perimeters.
This release introduces dry run configurations for your service perimeters, allowing you to test changes to perimeters before enforcing the changes. For more information, read about dry run mode .
June 11, 2020
Feature
General availability of the Access Context Manager Bulk API.
Use the Access Context Manager Bulk API to replace all of your organization's access levels in one operation. For more information, see Making bulk changes to access levels .
June 01, 2020
Feature
General availability of custom access levels.
Custom access levels provide a way to use Common Expression Language to craft custom conditions. Create custom access levels using the gcloud command line tool, the Access Context Manager API, and in the Google Cloud Console using the Advanced Mode for configuring access levels.
April 03, 2020
Feature
Beta release of the Access Context Manager Bulk API.
The Access Context Manager Bulk API can be used for operations such as replacing all of your organization's access levels. For more information, see Making bulk changes to access levels .
February 25, 2020
Feature
Access Context Manager support for mobile devices has entered Beta. You can now create access levels that target iOS and Android devices .
Currently, the OS policy and Require screen lock device attributes are supported for use with iOS and Android devices.
To take advantage of the new feature, your organization must use Google Workspace basic mobile device management .
January 06, 2020
Deprecated
The Access Context Manager v1beta API is being deprecated in July 2020.
October 07, 2019
Change
Access Context Manager's v1alpha API is re-enabled.
The v1alpha API no longer uses AccessZone . AccessZone has been replaced with ServicePerimeter .
To use the v1alpha API, you must be whitelisted.
August 05, 2019
Change
Error handling in Access Context Manager API v1alpha:
Attempting to call any v1alpha API method will start returning errors as of 08/12/2019.
Deprecated
Access Context Manager API v1alpha is being deprecated in Q3 2019.
March 19, 2019
Feature
The following access level attributes are now available:
Regions
For Device policy:
Require admin approval
Require corp owned device
Require verified Chrome OS
March 08, 2019
Feature
General availability of Access Context Manager.
June 01, 2018
Feature
Access Context Manager Closed Beta launch.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
