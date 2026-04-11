---
title: "Chrome Enterprise Premium access protection overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection
source_metadata:
  url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection
  title: "Chrome Enterprise Premium access protection overview \_|\_ Google Cloud\
    \ Documentation"
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
Chrome Enterprise Premium access protection overview
Stay organized with collections
Save and categorize content based on your preferences.
Based on the BeyondCorp security model, Chrome Enterprise Premium
is an approach that utilizes a variety of Google Cloud offerings to enforce
granular access control based on a user's identity and context of the request.
For example, depending on the policy configuration, your sensitive app or
resource can:
Grant access to all employees if they're using a trusted corporate device from
your corporate network.
Grant access to employees in the Remote Access group if they're using a
trusted corporate device with a secure password and up-to-date patch level,
from any network.
Grant administrators access to the Google Cloud console (via UI or API) only if
they are coming from a corporate network.
Grant developers SSH access to virtual machines.
When to use Chrome Enterprise Premium
Use Chrome Enterprise Premium when you want to establish fine-grained access
control based on a wide range of attributes and conditions including what
device is being used and from what IP address. Making your corporate resources
context-aware improves your security posture.
You can also apply Chrome Enterprise Premium to Google Workspace apps. For more
information about implementing Chrome Enterprise Premium with
Google Workspace, see the
Google Workspace overview .
How Chrome Enterprise Premium works
Implementing Chrome Enterprise Premium enacts a zero trust model. No one can access
your resources unless they meet all the rules and conditions. Instead of
securing your resources at the network-level, access controls are instead put on
individual devices and users.
IAP is the base of Chrome Enterprise Premium, letting you grant
access to your HTTPS apps and resources. Once you've secured your apps and
resources behind IAP, your organization can gradually extend
Chrome Enterprise Premium as richer rules are needed. Extended
Chrome Enterprise Premium resources can limit access based on properties like user
device attributes, time of day, and request path.
Chrome Enterprise Premium works by leveraging four Google Cloud offerings:
Identity-Aware Proxy (IAP) : A
service that enables employees to access corporate apps and resources from
untrusted networks without the use of a VPN.
Identity and Access Management (IAM) : The identity
management and authorization service for Google Cloud.
Access Context Manager : A rules
engine that enables fine-grained access control.
Endpoint Verification : A Google
Chrome extension that collects user device details.
Gathering device information
Endpoint Verification
gathers employee device information including encryption
status, OS, and user details. Once enabled through the Google Admin console,
you can deploy the Endpoint Verification Chrome extension to corporate
devices. Employees can also install it on their managed, personal devices.
This extension gathers and reports device information, constantly syncing with
Google Workspace. The end result is an inventory of all the corporate
and personal devices accessing your corporate resources.
Limiting access
Through Access Context Manager,
access levels
are created to define access rules. Access levels applied on your resources
with IAM Conditions
enforce fine-grained access control based on a variety of attributes.
Access levels restrict access based on the following attributes:
IP subnetworks
Regions
Principals
Device policy
When you create a device-based access level, Access Context Manager references
the inventory of devices created by Endpoint Verification. For example, an access
level can restrict access to only employees who are using encrypted devices.
Coupled with
IAM conditions ,
you could make this access level more granular by also restricting access to the
time between 9am and 5pm.
Securing resources with IAP
IAP ties
everything together by letting you apply IAM
conditions on Google Cloud resources.
IAP lets you establish a central authorization layer for your
Google Cloud resources accessed by HTTPS and SSH/TCP traffic. With
IAP, you can establish a resource-level access control model
instead of relying on network-level firewalls. Once secured, your resources are
accessible to any employee, from any device, on any network, that meets the
access rules and conditions.
Applying IAM conditions
IAM Conditions
allow you to define and enforce conditional,
attribute-based access control for Google Cloud resources.
With IAM Conditions, you can choose to grant permissions to
principals only if configured conditions are met. IAM Conditions
can limit access with a variety of attributes, including access levels.
Conditions are specified in the IAP role bindings of a resource's
IAM policy. When a condition exists, the role is only granted if
the condition expression evaluates to true. Each condition expression is defined
as a set of logic statements allowing you to specify one or many attributes to
check.
What's next
Get started with Chrome Enterprise Premium using the
quickstart .
Learn more about:
Endpoint Verification
Access Context Manager
IAM conditions
IAP
Secure your Google Workspace apps
with Chrome Enterprise Premium.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
