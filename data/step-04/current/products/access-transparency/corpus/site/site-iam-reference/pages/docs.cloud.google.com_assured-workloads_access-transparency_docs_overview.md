---
title: "Overview of Access Transparency \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-transparency/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview
  title: "Overview of Access Transparency \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Overview of Access Transparency | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud provider access management
Access Transparency
Start free
Overview
Guides
Resources
More
Technology areas
More
Overview
Guides
Resources
Cross-product tools
More
Console
Access Transparency
Product overview
Privileged access
Supported services
Access Transparency exclusions
Get started
Enable Access Transparency
Read and understand logs
Understand and use Access Transparency logs
View Access Transparency logs for Google Workspace
Enroll in other administrative access controls
Introduction to Access Approval
Introduction to Key Access Justifications
Simplify workload compliance
Introduction to Assured Workloads
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
Overview
When to use Access Transparency
Use Access Transparency logs to improve the overall security posture
Google Cloud services that produce Access Transparency logs
When can Google personnel access customer content?
How does Google train its employees on the confidentiality of customer content?
How does Google handle government requests for customer content?
What's next
Home
Documentation
Security
Cloud provider access management
Access Transparency
Guides
Was this helpful?
Send feedback
On this page
Overview
When to use Access Transparency
Use Access Transparency logs to improve the overall security posture
Google Cloud services that produce Access Transparency logs
When can Google personnel access customer content?
How does Google train its employees on the confidentiality of customer content?
How does Google handle government requests for customer content?
What's next
Overview of Access Transparency
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of Access Transparency, which is a part of
Google's long-term commitment to transparency, user trust, and customer
ownership of their data.
Access Approval
lets you authorize requests from Google personnel to access
Customer Data , and
Access Transparency helps you discover information about when Customer Data is
accessed. For customers who use
access approvals that are signed with a customer-managed encryption key (CMEK),
Google also provides users with visibility and control to key access requests
through
Key Access Justifications .
These products together provide access management capabilities that
give you control over and context for administrative requests to access Customer
Data.
Overview
Access Transparency logs record the actions that Google personnel take when
accessing Customer Data. Access Transparency log entries include details such as
the affected resource and action, the time of the action, the reason for the
action, and information about the accessor.
Access Transparency logs are designed to fulfill security and regulatory requirements to document, audit, and restrict Google personnel access to your workloads.
The information about the accessor
includes details about the physical location, employing entity, and job category
of the Google employee. For more information about the details
covered in Access Transparency logs, see
Log field descriptions .
Access Transparency logs are similar to Cloud Audit Logs ;
however, Cloud Audit Logs records the actions that members of your
Google Cloud organization have taken in your Google Cloud resources,
whereas Access Transparency logs record the actions taken by Google personnel.
When used together, Cloud Audit Logs and Access Transparency logs provide you audit
logging on both customer actions and Google administrative access to
Customer Data.
Note: If you need to approve access requests by Google personnel
before they can access your Google Cloud resources, see the
Access Approval documentation .
When to use Access Transparency
You might need Access Transparency logs for the following reasons:
Verifying that Google personnel are accessing your content only for
valid business reasons, such as fixing an outage or attending to your support
requests.
Verifying that Google personnel access aligns with the products and
data that you're seeking assistance with on a customer support case.
Verifying and tracking compliance with legal or regulatory obligations.
Collecting and analyzing tracked access events through an automated security
information and event management (SIEM) tool such as
Google Security Operations .
Use Access Transparency logs to improve the overall security posture
Access Transparency logs are a valuable additional source of information in your
security operations workstreams. By ingesting Access Transparency logs into your
security information and event management (SIEM) tools for compliance or
auditing purposes, you can augment any existing data, such as Security Command Center
security findings. For more information
about Access Transparency log ingestion, see
Ingest Google Cloud data to Google Security Operations .
Google Cloud services that produce Access Transparency logs
For the list of Google Cloud services that produce Access Transparency logs, see
Supported services .
When can Google personnel access customer content?
Google personnel are strictly restricted in what is visible to them.
All access to Customer Data requires a valid justification for
privileged access .
See Justification reason codes
for the list of valid business justifications.
How does Google train its employees on the confidentiality of customer content?
All Google employees are required to execute a confidentiality agreement and
comply with
Google's Code of Conduct .
For more information on employee onboarding and security and privacy training,
see the Google security whitepaper .
How does Google handle government requests for customer content?
If Google receives a government request for Customer Data, it is
Google's policy to direct the government to request such data directly
from the Google Cloud customer. For more
information, see Google Cloud Government Requests whitepaper .
What's next
To learn the core principles behind controls preventing unauthorized
administrative access, see
Overview of administrative access controls .
To understand the contents of Access Transparency log entries, see
Understanding and using Access Transparency logs .
For information on Google Cloud's privileged access principles, see
Privileged access .
For more information on the controls Google has put in place for protecting
customer content, see the
Google security whitepaper .
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
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
