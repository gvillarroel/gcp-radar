---
title: "Apigee release process \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/release/apigee-release-process
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/release/apigee-release-process
  title: "Apigee release process \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Resources
Send feedback
Apigee release process
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
This topic describes the release process for Apigee and Apigee hybrid.
Getting release notifications
The best way to stay up to date on Apigee releases is to subscribe to the
release notes RSS feed. To subscribe:
Navigate to the Apigee release notes page.
Select All to view all Apigee release notes, or select the Apigee product you wish to view.
Add the URL of the page to your feed reader to subscribe to All release notes, or to a
specific release note category, such as
Apigee hybrid .
Apigee release process
Apigee follows a continuous release model to ensure our users can access the product innovation
and enhancements quickly and at the highest quality possible.
Release cadence
Apigee releases occur approximately once every two weeks, though this timeframe may vary. Rollouts of Apigee releases are announced on the Apigee release notes page
when started, but may take four or more business days to complete across all Google Cloud zones.
Individual instances may not have the features and fixes available until the rollout is complete.
Release versioning
Releases for Apigee use the following numbering scheme:
major_version . minor_version . patch_version
For example, 3.2.1, where the major number is 3, the minor number is 2, and the patch number is
1.
When viewing the instance version using the API or in the UI, you will see the version numbers converted to
a hyphenated string, such as 3-2-1-apigee-1 . The hyphenated version string is also used
to announce releases and payloads in the Apigee release notes .
Apigee hybrid release process
Release versioning and cadence
Releases for Apigee hybrid use the following numbering scheme:
major_version . minor_version . patch_version
For example, 3.2.1, where the major number is 3, the minor number is 2, and the patch number is
1.
Release degree
Support Level
Release cadence
Description
Major
Support is provided until 12 months after the next major release.
As needed
Major releases are not expected to be backward compatible with previous major releases. They
may contain new features and enhancements, cumulative bug fixes, security vulnerability
mitigation, configuration changes, and infrastructure/architecture changes.
Minor
fiber_new Support is provided for
12 months from the initial release date.
This is a change from the previous nine months of support.
fiber_new Three per year,
approximately every four months.
This is a change from the previous four per year.
Minor releases are expected to be backward compatible within the same major release. They
may contain existing feature enhancements, cumulative bug fixes, and security vulnerability
mitigation.
Apigee supports sequential upgrades only. To upgrade to
major_version.(minor_version+1).patch_version_any , a customer must
be on major_version.(minor_version).patch_version_any . For example,
to upgrade from version 1.2 to version 1.4, a customer must upgrade to version 1.3, and then
to version 1.4.
Patch
Same as corresponding Minor release.
As necessary, at most once per month
Patch releases may contain bug fixes and bug fixes and security
vulnerability patches.
Patches are numbered
major.minor.patch where patch is a number
1 through 12 .
Patch - Security Vulnerabilities
Same as Patch release, but will not contain additional code.
As needed
Patches to major security vulnerabilities will be issued as needed in response to security
circumstances.
Apigee hybrid container images
Major, Minor, Patch Releases: The container images used in these releases are integrated
with the Apigee hybrid Helm charts. Upgrading to any of these releases via the Helm chart
automatically updates the images. No manual image changes are typically needed.
Hotfix Releases: For critical security and other immediate fixes, Apigee provides specific
container image tags that you must manually update in your existing deployments. The Helm chart
binary usually remains unchanged for hotfixes. Hotfixes are temporary and their changes will be
included in the next major, minor, or patch release.
See List the images in your repository for information on determining the container image tags for your Apigee hybrid installation.
Supported versions and release history
For information about Apigee hybrid supported versions and
release history, see
Apigee hybrid supported platforms and versions .
Runtime plane version support policy
fiber_new
Apigee publishes a new minor (for example, y in version x.y) hybrid runtime
release three times per year, approximately every four months,
with a monthly patch release (for example, z in version x.y.z). Apigee
supports minor versions for at most 12 months from their original
release date. This is a recent update from the previous four times per
year and nine months of support.
The objective of the runtime plane version support policy is to allow customers the
flexibility to schedule upgrades when it meets their business needs, while balancing the rapid
evolution of Apigee (and its dependency on underlying components like Anthos and Anthos Service
Mesh).
Runtime plane and Anthos version compatibility
An Apigee hybrid runtime minor version will be supported on a minimum of two Anthos and Anthos
attached cluster versions.
Management plane compatibility and support timelines
The Apigee hybrid management plane will remain compatible with and be
supported to work with a new hybrid runtime major/minor release for
12 months after the runtime minor version is published (or
the greater of the last three runtime releases and 12 months).
A management plane upgrade may break a runtime minor version that was published 12 months or longer.
After the support window expires, Apigee requires customers to upgrade to a current release. No
support tickets will be accepted for any releases that are outside the support window.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
