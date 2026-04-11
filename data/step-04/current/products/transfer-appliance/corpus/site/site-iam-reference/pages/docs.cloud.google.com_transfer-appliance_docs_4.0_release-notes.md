---
title: "Transfer Appliance release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/release-notes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control
source_metadata:
  url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/release-notes
  title: "Transfer Appliance release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Transfer Appliance
Resources
Send feedback
Transfer Appliance release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Transfer Appliance. You can
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
December 18, 2023
Feature
Transfer Appliance has introduced GA support for the data export appliance in the US. This enables you to place orders for exporting data from your Cloud Storage bucket to the appliance, which will then be shipped to you. See the documentation for full details.
October 31, 2023
Feature
Transfer Appliance now has alpha-level support in the gcloud CLI (gcloud alpha transfer appliances) allowing you to view in-progress transfer results, work with draft orders, clone existing orders, and more. See the reference documentation for full details.
October 09, 2023
Feature
'ta mount' and 'ta unmount' are command line tools offering the user the ability to mount their own NFS or CIFS shares onto the appliance.
Learn more about how to mount to an appliance .
September 27, 2023
Feature
New Appliance setup experience is released. Users can use the Google Cloud console to fully set up permissions for the appliance and receive the credentials .
March 08, 2023
Feature
ta check is a command line tool to detect and help fix configuration issues with Transfer Appliance and Edge Appliance .
November 10, 2022
Feature
Users can now use SMB to transfer data by enabling SMB file share .
September 14, 2022
Feature
Users can now review data that successfully transferred and failed to transfer in log files that auto-generate after a transfer is completed. Learn more about data verification log files here .
September 09, 2022
Feature
Remote Wipe is an optional step in the appliance return process that allows customers to erase data on their appliance before returning it to Google.
Learn more about how to wipe an appliance .
September 02, 2022
Feature
The lock/unlock feature allows you to securely move an appliance between data centers while ensuring that the data is encrypted and not accessible when the appliance comes in contact with third-party shipping services or people outside of your organization.
Learn more about the guide here .
August 17, 2022
Announcement
Edge Appliance is now generally available ( GA ).
Edge Appliance is a Google Cloud-managed, secure, high-performance appliance for edge locations. It provides local storage, ML inference, data transformation, and export.
Learn more or request Edge Appliance now .
August 12, 2022
Feature
You can now place your Transfer Appliance into suspend mode before moving it to a new location. Suspend mode removes access to data on the device and suspends any transfers.
Learn more from the Suspend section of the documentation.
July 12, 2022
Feature
Transfer Appliance is now available in an additional size. The TA7 appliance offers up to 7TB of storage in a smaller form factor than our other appliances. It offers both online and offline transfer modes.
Learn more about the TA7 on the Specifications page, or order an appliance from the Cloud console.
June 29, 2022
Feature
Transfer Appliance now supports monitoring of the amount of data stored on your appliance, and whether online transfer is enabled, through Cloud Monitoring. See Monitor Transfer Appliance for details.
June 16, 2022
Feature
You can now order Transfer Appliance from the Cloud console, as well as view, track, and manage your orders and appliances. For more info, see the Order Transfer Appliance page.
June 02, 2021
Feature
Transfer Appliance offers the Transfer Appliance Cloud Setup Application . The application prompts for several settings, and uses the information you provide to configure your Google Cloud permissions, preferred Cloud Storage bucket, and Cloud KMS key for your transfer.
March 30, 2021
Change
Transfer Appliance version 4.0 is now available to order in Singapore.
Change
Transfer Appliance version 2.2 is deprecated and replaced by Transfer Appliance version 4.0 .
November 04, 2020
Change
Transfer Appliance version 4.0 is released.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
