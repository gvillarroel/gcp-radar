---
title: "Anatomy of an Access Approval request \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/approval-request-details
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/approval-request-details
  title: "Anatomy of an Access Approval request \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Anatomy of an Access Approval request | Google Cloud Documentation
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
Access Approval
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
Access Approval
Product overview
Supported services
Get started
Access control with IAM
Anatomy of an access request
Access Approval Configuration
Enable and configure Access Approval
Adding a custom signing key (Optional)
Use Terraform
Access insights
Manage
Approve access requests
Validate access request signature
View historical access requests
Generate or download an Access Transparency report
Monitor
Access Approval audit logging
Enroll in other administrative controls
Introduction to Access Transparency
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
Sample Access Approval request
Request fields
Historical Access Approval requests Status of an access request
Response time
What's next
Home
Documentation
Security
Cloud provider access management
Access Approval
Guides
Was this helpful?
Send feedback
On this page
Sample Access Approval request
Request fields
Historical Access Approval requests Status of an access request
Response time
What's next
Anatomy of an Access Approval request
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the information contained in Access Approval
requests.
Sample Access Approval request
The following code is a sample Access Approval request:
See more code actions.
Light code theme
Dark code theme
{
"name": "projects/123456/approvalRequests/xyzabc123",
"requestedResourceName": "projects/123456",
"requestedReason": {
"detail": "Case number: bar123"
"type": "CUSTOMER_INITIATED_SUPPORT"
},
"requestedLocations": {
"principalOfficeCountry": "US",
"principalPhysicalLocationCountry": "US"
},
"requestTime": "2018-08-28T19:07:12.286Z",
"requestedExpiration": "2018-09-02T19:07:11.877Z"
}
Request fields
An Access Approval request contains the following fields:
Field
Description
Resource
The location of the resource for which the Google
employee is requesting access. Google personnel can
request access at the level of a resource or at the
level of a specific project. Approving access for a
given resource also grants access to any child
resources underneath. For example, if you make an
approval for projects/ 123456/ buckets/ bucket-123
project, an access request for
projects/ 123456/ buckets/ bucket-123/ objects/ file-1
child resource is also allowed.
Request time
The time at which Access Approval sent the
access request to you.
Access expires
The time at which the requested access expires.
Office location
Access is only allowed if the accessor has a
permanent desk in this location. Location is one of
an ISO 3166-1 alpha-2 country code, a 3-character
continent identifier, or ANY to indicate that
any location is allowed.
Physical location
Access is only allowed if the accessor is
physically located in this location. Location is
one of an ISO 3166-1 alpha-2 country code, a
3-character continent identifier, or ANY to
indicate that any location is allowed.
Reason
The reason for the access. For more information,
see Justification codes in Access Transparency
logs .
For more information about the fields in an access request, see
Resource: ApprovalRequest .
Historical Access Approval requests
Access Approval lets you view all the historical approved,
auto-approved, dismissed, and expired access requests. You can use the
Google Cloud console or cURL to view historical access requests. For instructions,
see Viewing historical Access Approval requests .
A historical access request log contains all the access request
fields , and mentions the status and the response time of the
request.
The following sections describe the Approval status and Response time
fields.
Status of an access request
An Access Approval request has one of the following statuses:
Status
Description
pending
Indicates that the access request is awaiting your action.
approved
Indicates that you approved the access request.
dismissed
Indicates that you dismissed the access request.
expired
Indicates that the duration of access approved by you has
expired.
policy-approved
Indicates that the request was approved by the rules of a configured policy. For details, see more information about Access Approval policy settings .
auto-approved
Indicates that Google personnel made a time-sensitive
access to Customer Data. To make these accesses, Google
personnel had to curtail the usual flow of getting
Customer Data. Google personnel are required to make
these accesses for a production outage investigation or
legal request. Previously, these accesses didn't
trigger an Access Approval request. To ensure
transparency about these accesses,
Access Approval logs these accesses with the
auto-approved status. You can view the details about
these accesses in the History requests sections in the
Access Approval page on
Google Cloud console. The auto-approved accesses also
generate the usual set of Access Transparency logs. Access Transparency
logs provide information about the affected resources and
the time of the action. For more information about viewing
Access Transparency logs, see Understanding and using
Access Transparency logs . For the list of actions that
don't trigger an Access Approval request, see
Access Approval exclusions .
Response time
This field indicates the time at which you approved or dismissed the access
request. A response time isn't applicable for requests that got dismissed due to
inactivity.
What's next
Learn how to view historical Access Approval
requests .
Learn how to approve access requests .
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
