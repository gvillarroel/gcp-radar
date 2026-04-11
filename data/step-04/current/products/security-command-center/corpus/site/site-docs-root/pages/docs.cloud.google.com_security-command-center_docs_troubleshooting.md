---
title: "Troubleshooting \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/troubleshooting
  title: "Troubleshooting \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Troubleshooting
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
Learn about troubleshooting steps that might be helpful if you experience the
following problems while using Security Command Center.
Note: For more troubleshooting information, see
Error messages . In addition,
Security Command Center provides error detectors, which report
configuration errors that prevent Security Command Center and its services from
working properly. Each error finding includes suggested remediation steps.
For more information, see
Security Command Center errors .
Enabling Security Command Center fails
Enabling Security Command Center most commonly fails if your organization policies
restrict identities by domain . You and your
service account must be part of an allowed domain:
Make sure you sign in to an account that's in an allowed domain before you
try to enable Security Command Center.
If you're using an @*.gserviceaccount.com service account, add the service
account as an identity in a group within an allowed domain.
Assets in Security Command Center aren't updating
If you're using VPC Service Controls, assets in Security Command Center can only be
discovered and updated when you grant access to the Security Command Center service
account.
To enable asset discovery, grant access to the Security Command Center service account. This allows the service account
to complete asset discovery and display assets in the Google Cloud console.
The service account name is in the form of
service-org- organization-id @security-center-api.iam.gserviceaccount.com .
Viewing, editing, creating, and updating findings and assets
The IAM roles for Security Command Center can be granted at the organization,
folder, or project level. Your ability to view, edit, create, or update findings, assets,
and security sources depends on the level for which you are granted access. To learn more about
Security Command Center roles, see Access control .
Missing or delayed notifications
In some situations, notifications might be missing, dropped, or delayed:
There might not be any findings that match the filters in your
NotificationConfig . To test notifications, use the Security Command Center API to
create a finding .
The Security Command Center service account must have the
securitycenter.notificationServiceAgent role on the Pub/Sub
topic. The service account name is in the form of
service- organization-id @gcp-sa-scc-notification.iam.gserviceaccount.com .
If you remove the role, notification publishing is disabled.
If you remove the role and then grant the role again, notifications are
delayed.
If you delete and recreate the Pub/Sub topic, notifications will
be dropped.
Web Security Scanner
This section contains troubleshooting steps that you might find helpful if you
have problems using Web Security Scanner
Scan errors for Compute Engine and GKE
If the URL for a scan is misconfigured, Web Security Scanner rejects it. Possible
reasons for rejection include:
URL has an IP address that is ephemeral
Mark this IP address as static:
For an application on a single VM, reserve the IP address on the VM
For an application behind a load balancer, reserve the IP address on the
load balancer.
URL is mapped to a wrong IP address
To fix this finding, refer to the instructions from your DNS registrar service.
URL is mapped to an ephemeral IP address of the same VM
Mark this IP address as static.
URL is mapped to a reserved IP address
This error happens when the URL is mapped to an IP address that's reserved in a
different project of the same organization. To resolve this, define security
scans for the VM or HTTP load balancer in the project for which it is defined.
URL is mapped to more than one IP address.
Make sure that all IP addresses that are mapped to this URL are reserved for the
same project. If there is at least one IP address that isn't reserved for the
same project, the Scan Create or Edit or Update operation fails.
What's next
Learn about Security Command Center errors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
