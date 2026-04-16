---
title: "Overview of Access Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview
  title: "Overview of Access Approval \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Approval
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Overview of Access Approval
This page provides an overview of Access Approval.
Access Approval is a part of Google's long-term commitment to
transparency, user trust, and customer ownership of their data.
Access Transparency helps you
to discover information about when Google personnel access
Customer Data , and Access Approval
lets you authorize such access requests. In addition, it provides enhanced
levels of granular control over when Google may access Customer Data. For
customers who use access approvals that are signed with a customer-managed
encryption key (CMEK), Google also provides users with visibility and control to
key access requests through
Key Access Justifications .
Together, each of these products provide access management capabilities that
give you control over and context for administrative requests to access Customer
Data.
Overview
Access Approval ensures that Cloud Customer Care and engineering teams
require your explicit approval whenever they need to access your Customer Data.
Each approval request is cryptographically signed and verified to ensure its
integrity. Active access approval requests may be revoked at any time.
Access Approval provides an additional layer of control on top of the
transparency that Access Transparency logs provide. Access Transparency provides logs that
capture the actions Google personnel take when accessing your Customer Data.
Access Approval also provides a historical view of all requests that
were approved, dismissed, revoked, or expired.
If you want the ability to directly manage Google personnel's access to your
Customer Data, we recommend using Access Approval. For more information
about why Google personnel might need to access Customer Data and about
Google Cloud's privileged access principles, see
Privileged access at Google Cloud .
How Access Approval works
Access Approval works by requiring Google Administrators to request and
receive an approval from an authorized customer administrator prior to accessing
Customer Data. Customers are notified of a pending approval request using a
preconfigured email or a Pub/Sub message.
Using the information in the message, the Access Approval request may
be approved or denied within the Google Cloud console or by using the
Access Approval API .
Access is granted only after the Access Approval request is approved.
Access Approval uses a cryptographic key to sign the access request,
and its signature is used to verify the integrity of the request. You can either
use a Google-managed signing key or bring your own signing key.
How Access Approval works with Assured Workloads
When using Access Approval with an Assured Workloads
compliance boundary, the Assured Workloads personnel access assurances
apply before Access Approval is evaluated. The Access Approval
access request may contain non-compliant parameters (such as the global
location); however, these conditions are secondary to the
Assured Workloads workload configuration.
For example, if a Canada Protected B folder owner is sent an
Access Approval request for the global location, this request is
first applied Canada Protected B restrictions-and those personnel are not
applied further Access Approval regional restrictions.
Using a Google-managed signing key
is the default option. If you want to use your own signing key, you can create
one using Cloud KMS, or bring an externally-managed key using
Cloud EKM. For more information about getting started with using a
custom signing key, see
Set up Access Approval using a custom signing key .
Note: The support response time increases by the duration that
Customer Care spends waiting for your approval. We recommend being
cautious when enabling Access Approval for projects and services where
you might require high service availability and rapid response by
Customer Care.
Google services that support Access Approval
Access Approval lets you select the Google Cloud services you want to
enroll in Access Approval. Access Approval requests your
consent only for access requests to Customer Data stored in the services you
select.
You have the following options for enrolling services in
Access Approval:
Automatically enable Access Approval for all supported services,
regardless of its product launch stage
(such as Preview or General Availability (GA)). Selecting this option also
automatically enrolls all the services that Access Approval supports
in the future. This is the default option.
Only enable Access Approval for services in the GA launch stage.
Selecting this option also automatically enrolls all the GA services that
Access Approval supports in the future.
Choose the specific services you want to enroll in Access Approval.
See
Supported services
for a complete list of services that Access Approval supports.
Access Approval exclusions
Access Transparency's exclusions
are also applicable to Access Approval.
In addition to these exclusions, the approval request may be automatically
approved without the customer's action to address time-sensitive outages. Such
auto-approved Access Approval requests are logged in an
auto approved state.
Auto-approval is automatically disabled for all workloads deployed with
Assured Workloads Sovereign Controls or
Sovereign Controls by Partners .
Customers seeking to ensure that administrative access requests can only be
processed when the approvals are signed with a customer-managed key may
configure Access Approval with a customer-managed key and use
Key Access Justifications.
Requirements for using Access Approval
You can enable Access Approval for a
Google Cloud project ,
folder , or
organization .
Before enabling Access Approval, you must
enable Access Transparency for
your organization.
After enabling Access Transparency, you can use the Google Cloud console to enable
Access Approval. To learn how to set up Access Approval, see
the quickstarts .
Requirements for a custom signing key
Using the default Google-managed signing key doesn't require any additional
configuration. To use your own signing key, you can either create an asymmetric
signing key using Cloud Key Management Service or use Cloud External Key Manager
to host an externally-managed signing key. For the limitations related to
asymmetric signing keys supported by Cloud EKM, see
Restrictions for asymmetric signing keys .
If you want to use an externally-managed signing key, we recommend that you
enable Cloud EKM. For more information about using Cloud EKM for
managing keys that aren't stored in Google Cloud, see
Cloud EKM overview .
Note: Access Approval aims to provide a justification for every request
to access your Customer Data stored on Google Cloud. Similarly, Key Access Justifications
aims to provide a justification for every request to access your
externally-managed keys. Cloud EKM brings your externally-managed keys
into Google Cloud for signing access requests. If you want to be notified about
the reason for every access to your externally-managed signing keys, you can use
Key Access Justifications. For more information about Key Access Justifications, see
Overview of Key Access Justifications .
What's next
See the quickstarts to
set up Access Approval.
Learn how to
use Terraform to set up Access Approval .
Learn how to approve access requests .
Learn about Access Approval pricing .
See the list of Google Cloud services that Access Approval supports .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
