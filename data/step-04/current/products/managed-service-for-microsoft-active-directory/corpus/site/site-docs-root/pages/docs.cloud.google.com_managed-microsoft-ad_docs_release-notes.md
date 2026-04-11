---
title: "Managed Microsoft AD release notes \_|\_ Managed Service for Microsoft Active\
  \ Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/release-notes
  title: "Managed Microsoft AD release notes \_|\_ Managed Service for Microsoft Active\
    \ Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Resources
Send feedback
Managed Microsoft AD release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Managed Service for Microsoft Active Directory. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
January 31, 2024
Feature
Managed Microsoft AD is available in the africa-south1 (Johannesburg) region. For more information, see Deploy domain controllers in additional regions .
November 03, 2023
Feature
Managed Microsoft AD is available in the europe-west10 (Berlin) region. For more information, see Deploy domain controllers in additional regions .
October 03, 2023
Feature
Managed Microsoft AD is available in the me-central2 (Dammam) region. For more information, see Deploy domain controllers in additional regions .
July 10, 2023
Feature
Support for workforce identity federation in Managed Microsoft AD is generally available . For more information, see Workforce identity federation: supported products and limitations .
June 02, 2023
Feature
Support for joining a Windows Compute Engine VM automatically to a Managed Microsoft AD domain is generally available with the following updates:
Added a new managed-ad-force flag to reuse an existing computer account.
Improved the existing managed-ad-ou-name flag to specify the path of the custom OU.
For more information, see Metadata .
Using the automated domain join feature, you can also join GKE Windows Server nodes automatically to a Managed Microsoft AD domain.
May 17, 2023
Feature
Managed Microsoft AD is available in the following regions:
europe-west12 (Turin)
me-central1 (Doha)
For more information, see Deploy domain controllers in additional regions .
December 19, 2022
Feature
Managed Microsoft AD supports applying Microsoft security baselines on your Managed Microsoft AD VMs. For more information, see Microsoft security baselines .
Feature
Managed Microsoft AD has added a set of new event IDs to audit logs that you can export for a domain. For the updated list of event IDs, see Exported event IDs .
December 15, 2022
Feature
The ability to join a Windows VM automatically to a Managed Microsoft AD domain is available in Preview .
November 07, 2022
Feature
Support for schema extensions in Managed Microsoft AD is generally available . Learn how to extend the schema .
Feature
Support for the migration of users from an existing domain to Managed Microsoft AD is available in Preview . Learn how to enable permissions for migrating an on-premises domain with SID History .
October 05, 2022
Feature
Managed Microsoft AD is available in the following regions:
europe-southwest1 (Madrid)
europe-west8 (Milan)
europe-west9 (Paris)
me-west1 (Tel Aviv)
us-east5 (Columbus)
us-south1 (Dallas)
For more information, see Adding and removing regions .
September 19, 2022
Feature
Managed Microsoft AD protects your Managed Microsoft AD instances against virus and malwares using the operating system's built-in antivirus. For more information, see Security monitoring and protection .
July 21, 2022
Feature
You can use the Google Cloud console to enable LDAPS and configure multi-project access (domain peering) in Managed Microsoft AD.
June 27, 2022
Feature
Support for schema extensions in Managed Microsoft AD is available for Preview . Learn how to extend the schema .
May 30, 2022
Feature
Support for backing up and restoring Managed Microsoft AD domains is generally available .
May 10, 2022
Feature
Managed Microsoft AD is available in the following regions:
australia-southeast2 (Melbourne)
europe-central2 (Warsaw)
northamerica-northeast2 (Toronto)
us-west3 (Salt Lake City)
us-west4 (Las Vegas)
For more information, see Adding and removing regions .
February 03, 2022
Feature
Generally available : Managed Microsoft AD now supports the use of tags on domains .
July 30, 2021
Feature
Support for audit logging is now generally available .
June 21, 2021
Feature
Support for integrating Managed Microsoft AD with Cloud SQL is now generally available .
June 16, 2021
Feature
Support for LDAPS is now generally available .
March 04, 2021
Feature
Support for Fine-Grained Password Policies (FGPP) is now generally available .
January 14, 2021
Feature
Managed Microsoft AD now supports audit logging . This feature is in the Preview stage .
August 24, 2020
Feature
You can now create Managed Microsoft Active Directory instances using Terraform .
July 09, 2020
Feature
The Managed Microsoft AD SLA has been published.
March 23, 2020
Change
GA pricing now in effect
New pricing for Managed Microsoft AD is now in effect. Learn more about standard Managed AD pricing and view pricing examples .
March 10, 2020
Feature
VPC Service Controls integration is now in beta .
Learn more about configuring VPC Service Controls for Managed Microsoft AD to provide additional security.
February 20, 2020
Feature
Managed Service for Microsoft AD General Availability
Added support for deploying domain controllers from the following regions:
asia-east2
asia-northeast1
asia-northeast2
asia-south1
australia-southeast1
europe-west2
europe-west3
europe-west6
northamerica-northeast1
southamerica-east1
Learn about the full list of supported regions .
AD-dependent VMs and apps can use multi-regional VPCs to reach domain controllers in any region, regardless of their relative locations.
Domain controllers from the same AD domain can be deployed in up to 4 regions, at domain creation or later.
The Domain Functional Level (DFL) of all new Managed AD domains is Windows Server 2012 R2. Domains created during the Managed AD Beta may have an earlier DFL. Learn how to check your DFL .
Issue
Trust status is stale
When the trust between a Managed Microsoft AD domain and an on-premises Active Directory domain is broken, the status in the Cloud Console may not be correctly updated.
To validate the status of a trust, go to the Managed Microsoft AD page in the Cloud Console and then select the domain. On the Domain page, in the Trust relationships table, select Validate Trust . Learn more about getting domain info .
August 21, 2019
Feature
Managed Microsoft AD is now in beta!
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
