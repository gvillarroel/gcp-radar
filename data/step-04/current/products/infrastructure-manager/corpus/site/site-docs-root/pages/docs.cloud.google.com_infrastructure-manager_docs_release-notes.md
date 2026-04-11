---
title: "Infrastructure Manager release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/release-notes
  title: "Infrastructure Manager release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Infrastructure as code
Infrastructure Manager
Resources
Send feedback
Infrastructure Manager release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Infrastructure Manager.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
January 12, 2026
Change
Infrastructure Manager is available in the following regions:
me-central2
For more information about regions, see Infrastructure Manager locations .
January 05, 2026
Announcement
Infrastructure Manager will deprecate support for Terraform version 1.2.3 on
January 8, 2026 .
If you have enabled auto-migration ,
your deployments using Terraform version 1.2.3 will be migrated automatically to
Terraform version 1.5.7 .
We recommend that you upgrade your deployment Terraform version from 1.2.3
to version 1.5.7 before the version 1.2.3. end of support date on
February 8, 2026 .
For more information, see Terraform version management policy
documentation.
August 29, 2025
Feature
You can use Infrastructure Manager maintained Terraform providers when you create or update a deployment or preview deployment. For more information about using Infra Manager maintained Terraform providers, see Use the Terraform provider for Google Cloud .
Feature
You can connect your repositories to Infrastructure Manager using Developer Connect proxies. For more information, see Deploy infrastructure using Infra Manager , or Update a deployment .
July 07, 2025
Feature
You can use preview deployments to view resource drift using Infrastructure Manager. For more information about viewing resource drift, see View resource change and drift details .
Change
Infrastructure Manager is available in the following regions:
africa-south1
europe-north2
europe-southwest1
europe-west8
europe-west9
europe-west10
europe-west12
me-central1
me-west1
northamerica-south1
us-east5
us-south1
For more information about regions, see Infrastructure Manager locations .
December 12, 2024
Feature
You can use Infrastructure Manager (Infra Manager) to preview, create, manage, and delete deployments in Google Cloud Console. Use the Terraform blueprint catalog to find sample blueprints you can deploy with Infra Manager.
For more information about creating a deployment using Infra Manager via Google Cloud Console, see Deploy infrastructure using Infrastructure Manager .
Feature
Infra Manager is available in the following regions:
Asia Pacific
asia-northeast1
asia-northeast2
asia-east2
asia-south1
asia-south2
asia-southeast1
asia-southeast2
australia-southeast1
australia-southeast2
Europe
europe-north1
europe-central2
europe-west3
europe-west4
europe-west6
Americas
us-east1
us-east4
us-west1
us-west2
us-west3
us-west4
northamerica-northeast2
southamerica-west1
For more information, see Locations .
Note: Due to dependencies on Cloud Build, certain regions may not be available for Infra Manager.
April 19, 2024
Change
Infrastructure manager supports the following versions of Terraform when creating a preview of a deployment . For more details, see Supported Terraform Versions .
Terraform version 1.2.3
Terraform version 1.3.10
Terraform version 1.4.7
Terraform version 1.5.7
March 14, 2024
Feature
Infrastructure Manager supports the deployment of infrastructure from Terraform configurations in a private Git repository.
Feature
Infrastructure Manager supports an automated workflow with Git repositories using Cloud Build. For more information, see Automate the deployment of Google Cloud resources .
Feature
Infrastructure Manager can validate and enforce quota limits , preventing infrastructure that exceeds quota limits from being deployed.
Change
Information about the runtime environment of Infrastructure Manager is published as part of the overview of Infrastructure Manager. For details, see runtime environment .
Change
Infrastructure manager supports the following versions of Terraform when creating a deployment. For more details, see Supported Terraform Versions .
Terraform version 1.2.3
Terraform version 1.3.10
Terraform version 1.4.7
Terraform version 1.5.7
Change
Infrastructure Manager is available in the following regions:
asia-northeast3 (Seoul)
europe-west2 (London)
northamerica-northeast1 (Montréal)
southamerica-east1 (São Paulo)
For more information, see Locations .
January 11, 2024
Feature
Preview of deployments are available. For more information, see Preview a deployment .
Change
For some deployments that initially fail, Infrastructure Manager retries the deployment a limited number of times.
October 26, 2023
Change
Infrastructure Manager has client libraries for the following languages:
C++ ( GA )
C# ( Beta )
Go ( Beta )
Java ( Beta )
Node.js ( Beta )
PHP ( Beta )
Python ( Beta )
Ruby ( GA )
October 13, 2023
Feature
The gcloud CLI commands for Infrastructure Manager are generally available ( GA ).
September 28, 2023
Feature
The integration of Infrastructure Manager with VPC Service Controls is in Preview and is ready for broader testing and use, but is not fully supported for production environments. Refer to VPC-SC supported products page for more info.
August 21, 2023
Announcement
Infrastructure Manager is generally available ( GA ).
Feature
This release includes gcloud CLI support in alpha .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
