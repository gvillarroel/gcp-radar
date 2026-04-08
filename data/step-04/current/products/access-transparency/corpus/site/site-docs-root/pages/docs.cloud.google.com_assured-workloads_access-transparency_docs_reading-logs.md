---
title: "Understanding and using Access Transparency logs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs
  title: "Understanding and using Access Transparency logs \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Understanding and using Access Transparency logs | Google Cloud Documentation
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
Access Transparency logs in detail
Enabling Access Transparency
Viewing Access Transparency logs
Sample Access Transparency log entry
Log field descriptions Values for permissionDetails fields
Values for accesses:methodNames field
Justification reason codes
Monitoring Access Transparency logs
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
Access Transparency logs in detail
Enabling Access Transparency
Viewing Access Transparency logs
Sample Access Transparency log entry
Log field descriptions Values for permissionDetails fields
Values for accesses:methodNames field
Justification reason codes
Monitoring Access Transparency logs
What's next
Understanding and using Access Transparency logs
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the contents of Access Transparency log entries and how
to view and use them.
Access Transparency logs in detail
Access Transparency logs can be integrated with your existing
security information and event management (SIEM) tools to automate your audits
of Google personnel when they access your content. Access Transparency
logs are available in the Google Cloud console alongside your Cloud Audit Logs.
Access Transparency log entries include the following types of details:
The affected resource and action.
The time of the action.
The reasons for the action (for example, the
case number associated with a customer support request).
Data about who is acting on the content (for example, the Google
personnel's location).
Enabling Access Transparency
For information about enabling Access Transparency for your Google Cloud organization,
see Enabling Access Transparency .
Viewing Access Transparency logs
After you've configured Access Transparency for your Google Cloud
organization, you can set controls for who can access the Access Transparency logs by
assigning a user or group the Private Logs Viewer role.
See the
Cloud Logging access control guide for
details.
To view Access Transparency logs, use the following Google Cloud Observability logging filter.
See more code actions.
Light code theme
Dark code theme
logName="projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Faccess_transparency"
To learn how to see your Access Transparency logs in the Logs Explorer, see
Using the Logs Explorer .
You can also monitor the logs by using the Cloud Monitoring API or using
Cloud Run functions. To get started, see the
Cloud Monitoring documentation .
Optional: Create a
logs-based metric and then
set up an
alerting policy
to give you timely awareness of issues surfaced by these logs.
Sample Access Transparency log entry
The following is an example of an Access Transparency log entry:
{
insertId : "abcdefg12345"
jsonPayload : {
@ type : "type.googleapis.com/google.cloud.audit.TransparencyLog"
location : {
principalOfficeCountry : "US"
principalEmployingEntity : "Google LLC"
principalPhysicalLocationCountry : "CA"
}
principalJobTitle : "Engineering"
product : [
0 : "Cloud Storage"
]
reason : [
detail : "Case number: bar123"
type : "CUSTOMER_INITIATED_SUPPORT"
]
permissionDetails :[
0 : {
permissionType : "DATA_READ"
logAccessed : true
}
1 : {
permissionType : "ADMIN_READ"
}
]
eventId : "asdfg12345asdfg12345asdfg12345"
accesses : [
0 : {
methodName : "GoogleInternal.Read"
resourceName : "//googleapis.com/storage/buckets/ BUCKET_NAME /objects/foo123"
}
]
accessApprovals : [
0 : "projects/123/approvalRequests/abcdef12345"
]
}
logName : "projects/ PROJECT_ID /logs/cloudaudit.googleapis.com %2F access_transparency"
operation : {
id : "12345xyz"
}
receiveTimestamp : "2017-12-18T16:06:37.400577736Z"
resource : {
labels : {
project_id : "1234567890"
}
type : "project"
}
severity : "NOTICE"
timestamp : "2017-12-18T16:06:24.660001Z"
}
Log field descriptions
Field
Description
insertId
Unique identifier for the log.
@type
Access Transparency log identifier.
principalOfficeCountry
ISO 3166-1 alpha-2 country code of country in which the accessor has
a permanent desk, ?? if location not available, or
3-character continent identifier where Google personnel are in a
low-population country.
principalEmployingEntity
The entity that employs the Google personnel making the access
(for example, Google LLC ).
principalPhysicalLocationCountry
ISO 3166-1 alpha-2 country code of country from which access was made,
?? if location not available, or 3-character continent
identifier where Google personnel are in a low-population country.
principalJobTitle
The job family of the Google personnel making the access.
product
Customer's Google Cloud product that was accessed.
reason:detail
Details of the reason, for example, a support ticket ID.
reason:type
Access
reason type
(for example, CUSTOMER_INITIATED_SUPPORT) .
permissionDetails
Details about permissions linked to an access. Up to two permissionType
details may be present. For more information, see
Values for permission details.
accesses:methodName
What type of access was made. For example, GoogleInternal.Read .
For more information about the methods that can appear in the
methodName field, see
Values for accesses: methodName field .
accesses:resourceName
Name
of resource that was accessed.
accessApprovals
Includes the resource names of Access Approval
requests that approved the access. These requests are subject to
exclusions and
supported services .
This field is populated only if Access Approval is enabled for the
accessed resources. Access Transparency logs published before the date
March 24, 2021 won't have this field populated.
logName
Name of the log location.
operation:id
Log cluster ID.
receiveTimestamp
Time the access was received by the logging pipeline.
project_id
Project associated with the resource that was accessed.
type
Type of resource that was accessed (for example, project ).
eventId
Unique event ID associated with a single access event justification
(for example, a single support case). All accesses logged to the same
justification have the same event_id value.
severity
Log severity.
timestamp
Time the log was written.
Values for permissionDetails fields
The following permission details are available in Access Transparency logs:
permissionType : Indicates the
Identity and Access Management (IAM) Permission type
associated with the data access by the Google administrator.
For example, permission types for each public API method for Cloud SQL can be
found in the SQL documentation . Permission
types indicate the maximum permission present, even if an access would have been
possible with a lesser permission type.
logAccessed : This field indicates if an administrator or data read access
permission is limited to log accesses. For example a data_read access to
Observability Analytics logs is accompanied by "logAccessed = true", indicating
that the data_read permission is limited to log data. This field is omitted if
the access is not a log.
IAM Permission Type
Description
Examples
ADMIN_READ
Signifies a read access limited to a configuration, log, or similar data.
See IAM Permission type for more details.
ADMIN_WRITE
Signifies a read or write access limited to a configuration, log, or similar data.
See IAM Permission type for more details.
DATA_READ
Signifies a read access that may contain Customer Data . An access with data_read permission type indicates the administrator had the permission to access Customer Data; however, it is not confirmation that Customer Data was accessed.
See IAM Permission type for more details.
DATA_WRITE
Signifies a read or write access that may contain Customer Data . An access with data_write permission type indicates the administrator may have included a permission to access at least resource of Customer Data. See IAM Permission type for more details.
logAccessed
Description
true
Signifies an access limited to read access of logging data. This property extends the permissionType field. Accesses labeled true indicate the access is to logging data only, without access to the data directly.
Values for accesses:methodNames field
The following methods can appear in the accesses:methodNames field in Access Transparency logs:
Standard methods : These methods are List , Get , Create , Update , and Delete . For more information, see Standard methods .
Custom methods : Custom methods refer to API methods besides the 5 standard methods. Common custom methods include Cancel , BatchGet , Move , Search , and Undelete . For more information, see Custom methods .
GoogleInternal methods : The following are examples of GoogleInternal methods that appear in the accesses:methodNames field:
Method name
Description
Examples
GoogleInternal.Read
Signifies a read action performed on customer content with a valid business justification. The read action occurs using an internal API that is specifically designed for administering Google Cloud services. This method doesn't mutate customer content.
Reading IAM permissions.
GoogleInternal.Write
Signifies a write action performed on customer content with a valid business justification. The write action occurs using an internal API that is specifically designed for administering Google Cloud services. This method can update customer content and/or configurations.
Setting IAM permissions for a resource.
Suspending a Compute Engine instance.
GoogleInternal.Create
Signifies a create action performed on customer content with a valid business justification. The create action occurs using an internal API that is specifically designed for administering Google Cloud services. This method creates new customer content.
Creating a Cloud Storage bucket.
Creating a Pub/Sub topic.
GoogleInternal.Delete
Signifies a delete action performed on customer content using an internal API specifically designed for administering Google Cloud services. This method mutates customer content and/or configurations.
Deleting a Cloud Storage object.
Deleting a BigQuery table.
GoogleInternal.List
Signifies a list action performed on customer content with a valid business justification. The list action occurs using an internal API that is specifically designed for administering Google Cloud services. This method doesn't mutate customer content or configurations.
Listing a customer's Compute Engine instances.
Listing a customer's Dataflow jobs.
GoogleInternal.Update
Signifies a modification performed on customer content with a valid business justification. The update action occurs using an internal API that is specifically designed for administering Google Cloud services. This method mutates customer content and/or configurations.
Updating HMAC keys in Cloud Storage.
GoogleInternal.Get
Signifies a get action performed on customer content with a valid business justification. The get action occurs using an internal API that is specifically designed for administering Google Cloud services. This method doesn't mutate customer content or configurations.
Retrieving IAM policy for a resource.
Retrieving a customer's Dataflow job.
GoogleInternal.Query
Signifies a query action performed on customer content with a valid business justification. The query action occurs using an internal API that is specifically designed for administering Google Cloud services. This method doesn't mutate customer content or configurations.
Running a BigQuery query.
AI Platform debugging console lookup on customer content.
The GoogleInternal accesses are strictly restricted to authorized personnel
for justified and auditable access. The presence of a method doesn't indicate
availability to all roles. Organizations seeking enhanced controls over
administrative access on a project or organization can activate
Access Approval to enable approval or denial of accesses
based on access details. For example, Access Approval users can
choose to permit only requests with the CUSTOMER_INITIATED_SUPPORT
justification for requests made by a Google employee. For more
information,
see Overview of Access Approval .
If an event meets strict emergency access criteria,
Access Approval can log that emergency access with the
auto approved status. Access Transparency and Access Approval
are specifically designed to include uninterrupted logging for emergency access
scenarios.
If you are looking for more data security control over your workloads, we
recommend using Assured Workloads .
Assured Workloads projects offer enhanced capabilities
such as data residency, sovereign controls, and access to features such as
confidential computing in Compute Engine. Assured Workloads
uses Key Access Justifications for externally-managed encryption keys.
Justification reason codes
Reason
Description
CUSTOMER_INITIATED_SUPPORT
Customer-initiated support, for example, "Case Number: ####".
GOOGLE_INITIATED_SERVICE
Refers to Google-initiated access for system management and
troubleshooting. Google personnel can make this type of access for the
following reasons:
To perform technical debugging needed for a complex support request
or investigation.
To remediate technical issues, such as storage failure or data
corruption.
Proactive support by Technical Account Management teams.
**Tagged with a reason detail of "TAM Support"**
THIRD_PARTY_DATA_REQUEST
Google-initiated access in response to a legal request or legal process,
including when responding to legal process from the customer that requires
Google to access the customer's own data.
GOOGLE_INITIATED_REVIEW
Google-initiated access for security, fraud, abuse, or compliance
purposes, including:
Ensuring the safety and security of customer accounts and data.
Confirming whether data is affected by an event that might impact
account security (for example, malware infections).
Confirming whether customer is using Google services in compliance
with Google Terms of Service.
Investigating complaints by other users and customers, or other
signals of abusive activity.
Checking that Google services are being used consistently with
relevant compliance regimes (for example, anti-money laundering
regulations).
GOOGLE_RESPONSE_TO_PRODUCTION_ALERT
Refers to Google-initiated access to maintain system reliability.
Google personnel can make this type of access for the
following reasons:
To investigate and confirm that a suspected service outage doesn't
affect the customer.
To ensure backup and recovery from outages and system failures.
Monitoring Access Transparency logs
You can monitor Access Transparency logs by using the Cloud Monitoring API.
To get started, see the Monitoring documentation .
You can set up a
logs-based metric and then
set up an
alerting policy
to give you timely awareness of issues surfaced by these logs.
For example, you can create a logs-based metric that captures
Google personnel accesses of your content and then create an alerting
policy in Monitoring that lets you know if the number of
accesses in a
given period exceeds a specified threshold.
What's next
Learn how to view and understand Access Transparency logs for
Google Workspace services .
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
