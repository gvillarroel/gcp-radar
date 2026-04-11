---
title: "Policy Intelligence release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/release-notes
  title: "Policy Intelligence release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Resources
Send feedback
Policy Intelligence release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Policy Intelligence.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
November 24, 2025
Feature
IAM administrators can review and manage identity risks
across their organization, folder, or project from the Google Cloud console
by using the Security Insights dashboard. For more information, see
Review and manage identity risks .
This feature is available in
Preview .
November 13, 2025
Change
Policy Simulator
deny policy simulations on organization and folder resources are not protected
by VPC Service Controls. For more information, see
Help secure Policy Intelligence APIs with VPC Service Controls .
November 04, 2025
Feature
You can use Policy Troubleshooter to troubleshoot policies that include bindings
for service account principal sets .
This feature is available in
GA .
October 22, 2025
Fixed
The issue that caused IAM recommender role recommendations to be
inaccurate and out of date is fixed.
October 16, 2025
Feature
You can use Policy Troubleshooter to
remediate access issues . This
feature is available in
Preview .
October 13, 2025
Issue
Due to an ongoing issue, IAM recommender role recommendations
might be out of date and inaccurate. Removing roles or permissions can break
existing processes. Therefore, please validate usage before applying any changes.
July 01, 2025
Feature
Policy Simulator for Organization Policy is now generally available (GA) .
December 19, 2024
Feature
The Organization Policy recommender generates insights and organization policy recommendations to restrict the creation and upload of service account keys. This feature is available in Preview .
December 16, 2024
Feature
You can use Policy Simulator for principal access boundary policies to simulate changes to principal access boundary policies before you apply them. This feature is available in Preview .
December 11, 2024
Feature
You can use Policy Simulator for deny policies to simulate changes to deny policies before you apply them. This feature is available in Preview .
August 15, 2024
Feature
The IAM recommender generates policy insights and role recommendations for the following identities:
All identities in a workload identity pool
Single identity in a workload identity pool
All identities in a workforce identity pool
Single identity in a workforce identity pool
All Google Kubernetes Engine Pods that use a specific Kubernetes service account
To learn more, see Availability . This feature is generally available.
July 03, 2024
Change
You can use Policy Troubleshooter to troubleshoot principal access boundary policies . This feature is available in Preview .
May 31, 2024
Change
Activity Analyzer checks service activation and quota for the project that you're using to analyze access (the client project) instead of the projects whose resources you're analyzing (the resource projects). As a result, you only need to enable the Policy Analyzer API in your client project, not in your resource projects.
May 17, 2024
Feature
The IAM recommender generates policy insights and role recommendations for identities in Workload Identity Federation pools. To learn more, see Availability . This feature is available in Preview.
During Preview, the actual observation period might be shorter than the observation period listed in recommendations for these principals.
May 03, 2024
Change
Some Policy Intelligence features are only available for customers with organization-level activations of Security Command Center . For more information, see Billing questions .
April 01, 2024
Issue
Policy Troubleshooter for IAM currently doesn't fetch tags for regional resources, such as Google Kubernetes Engine (GKE) clusters . As a result, if you have IAM policies with tag-based conditions and you try to use Policy Troubleshooter to troubleshoot access to regional resources, you might get inaccurate results. Our engineering team is working to resolve this issue.
February 26, 2024
Feature
The IAM recommender offers role recommendations for BigQuery datasets . Role recommendations help you reduce excess permissions by suggesting role changes based on actual permission usage. This feature is available in Preview.
January 12, 2024
Change
The requirement that customers have organization-level activations of Security Command Center to use certain Policy Intelligence features has been delayed until April 29, 2024. For more information about which features are affected by this change, see Billing questions .
November 07, 2023
Feature
You can use the Google Cloud console to analyze organization policies . This feature is available in Preview.
September 28, 2023
Announcement
After January 15, 2024, some Policy Intelligence features will only be available for customers with organization-level activations of Security Command Center . For more information, see Billing questions .
Change
Using Policy Troubleshooter to troubleshoot deny policies is generally available.
July 05, 2023
Feature
You can use Policy Troubleshooter to troubleshoot deny policies . This feature is in Preview .
January 24, 2023
Change
Configurable IAM recommendations are now generally available. With configurable IAM recommendations, you can set the minimum observation period for the IAM recommender to 30 or 60 days instead of the default period of 90 days.
December 12, 2022
Change
You can now use the Google Cloud console to write IAM policy analysis results to BigQuery . This feature is generally available.
December 05, 2022
Feature
You can now set the minimum observation period for the IAM recommender to 30 or 60 days instead of the default period of 90 days. For more information, see Configure role recommendation generation . This feature is available in Preview.
November 18, 2022
Feature
Policy Analyzer now offers organization policy analysis . Policy Analyzer helps you get more information about the resources affected by an organization policy constraint. This feature is available in Preview.
November 10, 2022
Change
Role recommendations and policy insights for Cloud Storage buckets are now generally available. Additionally, you can now use the Google Cloud console to review bucket-level role recommendations and policy insights.
August 30, 2022
Change
The user interface for Policy Troubleshooter in the Cloud console has been updated to improve usability. To view the new user interface, visit the Policy Troubleshooter page in the Cloud console .
July 08, 2022
Feature
Recommender now offers role recommendations for Cloud Storage buckets . Role recommendations help you reduce excess permissions by suggesting role changes based on actual permission usage. This feature is available in Preview.
July 01, 2022
Change
Lateral movement insights , which identify roles that allow a service account in one project to impersonate a service account in another project, are now generally available.
June 27, 2022
Change
In the Cloud console, Policy Troubleshooter for IAM allow policies now reports if there are deny policies that could affect a principal's access.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
