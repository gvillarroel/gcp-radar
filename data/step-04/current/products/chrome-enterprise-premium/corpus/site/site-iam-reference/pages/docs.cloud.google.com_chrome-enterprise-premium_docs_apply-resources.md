---
title: "Quickstart: Apply Chrome Enterprise Premium to cloud resources \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/apply-resources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection
source_metadata:
  url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/apply-resources
  title: "Quickstart: Apply Chrome Enterprise Premium to cloud resources \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Chrome Enterprise Premium
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Apply Chrome Enterprise Premium to cloud resources
This page walks through the high level steps of applying Chrome Enterprise Premium to
your Google Cloud and on-premises resources.
For information about how Chrome Enterprise Premium leverages other
Google Cloud offerings, see the
Chrome Enterprise Premium access protection overview .
Before you begin
Before you make your apps and resources context-aware, you'll need to:
If you don't already have Cloud Identity user accounts in
your organization,
create a few Cloud Identity accounts .
Determine a resource you want to protect. Configure one of the following if
you don't have a resource.
A web app running behind an
HTTPS load balancer
on Google Cloud. This includes web apps like App Engine apps,
apps running on-premises, and apps running in another cloud.
A virtual machine on Google Cloud.
Determine principals that you want to grant and limit access to.
If you're interested in securing Google Workspace apps, see the
Google Workspace Chrome Enterprise Premium overview .
Securing your apps and resources with IAP
Identity-Aware Proxy (IAP) establishes a central identity awareness layer for apps and
resources accessed by HTTPS and TCP. This means you can control access on
each individual app and resource instead of using network-level firewalls.
Secure your Google Cloud app and all its resources by selecting one of the
following guides:
App Engine standard and flexible environment
Compute Engine
Google Kubernetes Engine
You can also extend IAP to non-Google Cloud
environments like on-premises as well as other clouds.
To learn more, see the
Securing on-premises apps
guide.
For more information, see the IAP documentation .
Virtual machine resources
You can control access to administrative services like SSH and RDP on your
backends by setting tunnel resource permissions and creating tunnels that route
TCP traffic through IAP to virtual machine instances.
To secure a virtual machine, see the
Securing virtual machines
guide.
Creating an access level with Access Context Manager
Once you've secured your apps and resources with IAP, it's time
to set richer access policies with
access levels .
Access Context Manager creates
access levels. Access levels can limit access based on the
following attributes:
IP subnetworks
Regions
Access level dependency
Principals
Device policy
(Note that
Endpoint Verification
must be set up.)
Create an access level by following the
Creating an access levels
guide.
Applying access levels
An access level doesn't take effect until you apply it on a
IAP-secured resources' Identity and Access Management (IAM) policy.
This step is done by adding an
IAM Condition
on the IAP role used to grant access to your resource.
To apply your access level, see
applying access levels .
Once you've applied your access level, your resources are now secured with
Chrome Enterprise Premium.
Enabling device trust and security with Endpoint Verification
To further strengthen the security of your Chrome Enterprise Premium secured resources,
you can apply device-based trust and security access control attributes with
access levels.
Endpoint Verification
enables this control.
Endpoint Verification is a Chrome extension for Windows, Mac, and Chrome OS devices.
Access Context Manager references the device
attributes gathered by Endpoint Verification to enforce fine grained access control with
access levels .
Follow the Endpoint Verification quickstart
to set up Endpoint Verification for your organization.
What's next
Learn how to view Context-Aware Access logs in Cloud Audit Logs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
