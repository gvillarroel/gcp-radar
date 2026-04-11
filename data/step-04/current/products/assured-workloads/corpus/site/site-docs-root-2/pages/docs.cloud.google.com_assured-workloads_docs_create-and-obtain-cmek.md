---
title: "Create and obtaining a CMEK key \_|\_ Assured Workloads \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/create-and-obtain-cmek
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/create-and-obtain-cmek
  title: "Create and obtaining a CMEK key \_|\_ Assured Workloads \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and obtaining a CMEK key
If you use customer-managed encryption keys (CMEK) to encrypt your
Assured Workloads resources, this page shows you how to create and
obtain those keys. Learn more about
Assured Workloads encryption options .
Before you begin
Choose an encryption strategy.
Note: Review Data encryption and encryption keys ,
to determine your encryption strategy.
Create an Assured Workloads folder
for a control package that supports your requirements.
Select the project ID for the project that contains your
Assured Workloads CMEK keys. If you chose IL4 or CJIS as a
control package, then, by default, this project is created for you.
Note: When accessing a project within an Assured Workloads folder, you
must acknowledge the Regulatory Intercept, which generates an audit log when
accessing a regulated resource.
Create the key
Note: If you have already created a CMEK, you can skip key creation and go
directly to Obtain your CMEK key resource ID .
To create the CMEK key, do the following:
In the Google Cloud console, go to the Key management page:
Go to Key management
Select the Assured Workloads CMEK project. By default, this project
ID starts with cmek- .
Click your key ring.
Click Create Key .
From the What type of key do you want to create? list, select
Generated key .
In Key name enter the key name.
From the Protection level list, select Software .
From the Purpose list, select Symmetric encryption/decryption .
From the Rotation period list, select 90 days .
Optional: To add a label, do the following:
Click Add a label.
Enter a key in the Key text field.
Enter a value in the Value text field.
Click Create.
Obtain your CMEK key resource ID
Note: You might need to contact your security administrator or
Assured Workloads administrator to obtain the key resource ID.
In Google Cloud console, in the Project Selector , select the project ID
for the project that contains your CMEK keys. By default, if
Assured Workloads creates this project, it prepends the project ID
cmek- .
In Security , go to the Key management page:
Go to Key management
Under Key rings , click the key ring name.
In Key ring details , in the Keys tab, click the name of the key.
Click the more_vert More
icon to the right of the key name.
Click Copy Resource Name .
The resource string is formatted as follows:
projects/ SECURITY_PROJECT_ID /locations/LOCATION/keyRings/ KEY_RING_NAME /cryptoKeys/ KEY_NAME
What's next
Learn about supporting compliance with key management .
Learn about data encryption and encryption keys .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
