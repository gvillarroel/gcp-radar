---
title: "Binary Authorization release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/release-notes
  title: "Binary Authorization release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Resources
Send feedback
Binary Authorization release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Binary Authorization. You can
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
August 19, 2024
Feature
Setting specific rules in Binary Authorization policies is generally available (GA) as of September 28, 2023.
April 15, 2024
Deprecated
Binary Authorization legacy continuous validation (CV) is deprecated and will no longer be available on Google Cloud after May 1, 2025. You can instead use continuous validation with check-based platform policies . To learn how to migrate to check-based platform policies, see Legacy continuous validation deprecation and shutdown .
September 29, 2021
Change
Binary Authorization for Anthos clusters on VMware 0.2.2, which now supports Anthos clusters on VMware 0.1.9, is now available in Preview .
Set up Binary Authorization for Anthos clusters on VMware .
September 28, 2021
Change
Binary Authorization for Cloud Run is now generally available (GA) .
View the quickstart or set up Binary Authorization for Cloud Run on your service.
April 29, 2021
Change
Binary Authorization now supports Continuous Validation. See Continuous Validation documentation .
June 23, 2020
Change
Added support for securing Binary Authorization resources with VPC Service Controls.
March 04, 2020
Deprecated
Support for the
Binary Authorization Beta API was discontinued on September 16, 2019. As a result,
the Binary Authorization Beta API will stop
working after March 16, 2020. To prevent service interruption, you must take
actions outlined in the Binary Authorization GA Migration Guide prior to that date.
September 16, 2019
Feature
The General Availability (GA) version of Binary Authorization is a feature of the Anthos platform . Use of Binary Authorization is included in the Anthos subscription. Please contact your sales representative to enroll in Anthos.
April 03, 2019
Feature
Binary Authorization now supports asymmetric PKIX key pairs to verify the identity of attestors. The asymmetric key pairs generated and stored in Cloud Key Management Service are compliant with the PKIX format. You set up PKIX keys when you create an attestor using the Google Cloud Platform Console or the CLI .
Feature
Binary Authorization now supports global policy evaluation mode .
Feature
Binary Authorization now supports dryrun mode.
Dryrun mode is a policy setting that allows non-conformant images to be deployed, but writes details about the policy violation and deployment to the audit log. Dryrun mode allows you to test a policy in your production environment before it goes into effect.
You can enable dryrun mode when you configure your policy using the Google Cloud Platform Console or the CLI .
July 25, 2018
Issue
In the UI, detailed error messages are not shown for invalid whitelist patterns on a Policy or invalid PGP keys on an Attestor.
Issue
In the UI, you cannot manage the IAM Policy on an Attestor or Binary Authorization Policy. Project level IAM permissions work as expected.
Issue
Default whitelisting of exempt images may be incomplete, depending on the version of Kubernetes you are deploying to. You may need to add gcr.io/google-containers/ and k8s.io/ to the default whitelist.
Issue
Error messaging sometimes lacks detail when policies are updated. If you encounter an error when you update a policy, check the names of any attestor resources defined to make sure they are correct.
Issue
When editing a policy in the UI, you cannot remove/edit existing cluster specific deployment rules. This is possible using gcloud commands and the REST API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
