---
title: "Understand mutual TLS at Google Cloud \_|\_ Access Context Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/understand-mtls
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/understand-mtls
  title: "Understand mutual TLS at Google Cloud \_|\_ Access Context Manager \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Understand mutual TLS at Google Cloud | Access Context Manager | Google Cloud Documentation
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
What is a client certificate?
How the Google APIs validate device identity
What's next
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Understand mutual TLS at Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What is a client certificate?
How the Google APIs validate device identity
What's next
Mutual TLS (mTLS) is an industry standard protocol for mutual authentication
between a client and a server. The mTLS protocol ensures that both the client
and server, at each end of a network connection, are who they claim they are by
verifying that both possess the private key associated with the client
certificate.
What is a client certificate?
A client certificate, also called a Transport Layer Security (TLS) certificate,
is a file that contains important information for verifying a device's identity.
The certificate information includes the public key, a statement of who issued
the certificate (certificates can be issued by certificate authorities or self-
signed), and the certificate's expiration date.
How the Google APIs validate device identity
The TLS protocol uses a technique called public key infrastructure (PKI), which
relies on a pair of asymmetric keys: a public key and a private key. Anything
encrypted with the private key can be decrypted only with the public key. The
Google Cloud APIs use the TLS protocol to verify the identity of a device by
decrypting the message encrypted by the private key using the public key of the
certificate during the mTLS handshake. The successful decryption proves the
possession of the private key which is only available from trusted devices.
To enable the mTLS handshake and validation process, a client must do the following:
Establish an mTLS connection with the Google APIs by using mTLS-specific API
endpoints. The mTLS-specific endpoints have the following format: [service].mtls.googleapis.com
Discover and use the device certificate during the mTLS handshake. If you are
using Endpoint Verification for certificate deployment, this type of certificate
is automatically discovered and used by the supported clients.
The following diagram illustrates the mTLS handshake between a client and a
Google API server:
What's next
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
