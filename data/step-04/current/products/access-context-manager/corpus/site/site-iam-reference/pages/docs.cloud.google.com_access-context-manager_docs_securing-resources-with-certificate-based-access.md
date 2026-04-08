---
title: "Context-Aware Access with mTLS overview \_|\_ Access Context Manager \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/securing-resources-with-certificate-based-access
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/securing-resources-with-certificate-based-access
  title: "Context-Aware Access with mTLS overview \_|\_ Access Context Manager \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Context-Aware Access with mTLS overview | Access Context Manager | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Access Context Manager
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
How-to guides
All how-to guides
Access control with IAM
Create an access policy
Create a basic access level
Create a custom access level
Use mobile devices with access levels
Manage an access policy
Create custom constraints
Manage access levels
Make bulk changes to access levels
Audit logging
Use Context-Aware Access
Set up context-aware access
Define access policies using access levels
Apply policies to user groups with access bindings
Configure session controls for re-authentication
Configure a credential strength policy
Configure Chrome browser attributes
Configure enterprise certificate conditions
Configure time and date conditions
Manage access bindings
Context-aware access enforcement points
Use certificate-based access
Certificate-based access overview
Understand mutual TLS at Google Cloud
Set up certificate-based access
Create access levels for certificate-based access
Enforce certificate-based access for a user group
Enforce certificate-based access with VPC Service Controls
Enable certificate-based access in client applications
Enable certificate-based access for web applications
Enable certificate-based access for VMs
Setting up Endpoint Verification
Enable certificate-based access with your enterprise certificates
Enable certificate-based access with Endpoint Verification certificates
Configure certificate-based access for Workload Identity Federation
Concepts
All concepts
Overview
Scoped policies
Custom access levels
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
The benefits of using Google CBA
What's next
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Context-Aware Access with m TLS overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
The benefits of using Google CBA
What's next
You can use Context-Aware Access with mTLS, which is also known as
certificate-based access (CBA) to require verified X.509 certificates for
access to Google Cloud resources. The additional credential provides a stronger
signal of device identity and helps protect your organization from credential
theft or accidental loss by requiring that both the user credentials and the
original device certificate are present before granting access.
Relying only on credentials, like bearer tokens, to grant access to the Google Cloud
APIs and resources can put you at risk. Those credentials can be exposed by user
error or become prime targets for attackers. If attackers obtain the
credentials, they can replay the credentials to access resources.
By using CBA, you enhance the security of your resources by requiring an
additional authorization factor, a device certificate. Device certificates are
validated and verified using a mutual TLS handshake. This requires users to
prove possession of the private key associated with the certificate, thereby
providing a strong signal of device identity.
Following is a high-level illustration of the CBA access flow:
The benefits of using Google CBA
Following are some of the benefits of using CBA.
Comprehensive Security
Protects your important resources by preventing access using stolen
credentials from untrusted devices, such as cookie theft.
Protects all Google Cloud API requests regardless of access points,
including on-premises or Google networks, and web browsers or desktops applications.
Fine-grained Policy Control
Works seamlessly with VPC Service Controls service perimeters and lets you to specify
fine-grained access control over your resources.
Works seamlessly with user groups and lets you apply CBA to a group of users.
Good Developer Experience
Automated CBA support in common libraries and tools, such as the
gcloud CLI, which reduces the programming cost of using CBA.
What's next
Understand mutual TLS at Google Cloud
Set up certificate-based access
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
