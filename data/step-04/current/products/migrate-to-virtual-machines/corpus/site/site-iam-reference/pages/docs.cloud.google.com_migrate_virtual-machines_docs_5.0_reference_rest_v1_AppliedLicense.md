---
title: "AppliedLicense \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest/v1/AppliedLicense
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest/v1/AppliedLicense
  title: "AppliedLicense \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Reference
Send feedback
AppliedLicense
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Type
AppliedLicense holds the license data returned by adaptation module report.
JSON representation
{
"type" : enum ( Type ) ,
"osLicense" : string
}
Fields
type
enum ( Type )
The license type that was used in OS adaptation.
osLicense
string
The OS license returned from the adaptation module's report.
Type
License types used in OS adaptation.
Enums
TYPE_UNSPECIFIED
Unspecified license for the OS.
NONE
No license available for the OS.
PAYG
The license type is Pay As You Go license type.
BYOL
The license type is Bring Your Own License type.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
