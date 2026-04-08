---
title: "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes
  title: "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Access level attributes | Access Context Manager | Google Cloud Documentation
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
Access Context Manager
All APIs & references
Context-Aware Access audit logging
gcloud reference
REST reference
Overview
v1
Overview
REST Resources
accessPolicies
Overview
create
delete
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
accessPolicies.accessLevels
Overview
create
delete
get
list
patch
replaceAll
testIamPermissions
accessPolicies.authorizedOrgsDescs
Overview
create
delete
get
list
patch
accessPolicies.servicePerimeters
Overview
commit
create
delete
get
list
patch
replaceAll
testIamPermissions
operations
Overview
cancel
delete
get
list
organizations.gcpUserAccessBindings
Overview
create
delete
get
list
patch
services
Overview
get
list
Types
LevelFormat
MethodSelector
v1alpha
Overview
REST Resources
accessPolicies
Overview
create
delete
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
accessPolicies.accessLevels
Overview
create
delete
get
list
patch
replaceAll
testIamPermissions
accessPolicies.authorizedOrgsDescs
Overview
create
delete
get
list
patch
accessPolicies.servicePerimeters
Overview
commit
create
delete
get
list
patch
replaceAll
testIamPermissions
operations
Overview
get
organizations.gcpUserAccessBindings
Overview
create
delete
get
list
patch
services
Overview
get
list
Types
LevelFormat
MethodSelector
Shared types
Overview
Types
AuditConfig
Binding
DeviceEncryptionStatus
DeviceManagementLevel
GetIamPolicyRequest
GetOperationRequest
LaunchStage
LogType
Operation
OsType
Policy
SetIamPolicyRequest
TestIamPermissionsRequest
TestIamPermissionsResponse
RPC reference
Overview
google.api
google.iam.v1
google.identity.accesscontextmanager.type
google.identity.accesscontextmanager.v1
google.identity.accesscontextmanager.v1alpha
google.longrunning
google.rpc
google.type
Access level attributes
Example access level YAML
Custom access level specification
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
Attributes IP subnetworks
Geographic locations
Access level dependencies
Principals
Device policy
Home
Documentation
Security
Access Context Manager
Reference
Was this helpful?
Send feedback
Access level attributes
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Attributes IP subnetworks
Geographic locations
Access level dependencies
Principals
Device policy
Access levels define various attributes that are used to filter
requests made to certain resources. The following table lists the
attributes supported by access levels and provides additional details
about each attribute.
When you create or modify an access level using the gcloud command-line tool, you must format
the attributes in YAML. This table includes the YAML syntax for each attribute,
and the valid values. Links to the REST and RPC reference information for each
attribute are also included.
For more information about access levels and YAML,
refer to the example YAML for an access level .
You can include the following attributes in your access level:
IP subnetworks
Geographic locations
Access level dependencies
Principals
Device policy
Attributes
IP subnetworks
Description
Checks whether a request is coming from one or more IPv4 and/or
IPv6 CIDR blocks that you specify.
When you specify more than one IP subnetwork, the values you enter are combined using an OR operator when the condition is evaluated. The request has to match any one of the values that you specify in order for the condition to evaluate to true.
YAML
ip Subnetworks
Valid values
A list of one or more IPv4 and/or IPv6 CIDR blocks.
API reference
REST
RPC
Geographic locations
Description
Checks whether a request originated from a specific geographic
location. Geographic locations are identified by the corresponding
ISO
3166-1 alpha-2 codes .
Caution: The origin of a request is determined by
the geolocation of the IP address that the request
originated from. Because of this, the geographic location attribute only
works for requests that originate from a public IP address.
Because private IP addresses cannot be geolocated, access
levels that require a geographic location will always deny requests from
private IP addresses and don't support requests made
using Private Google Access.
When you specify more than one geographic location, the
values you enter are ORd when the condition is evaluated.
Users are granted access if they are in one of the
geographic locations that you specify.
YAML
regions
Valid values
A list of one or more
ISO 3166-1 alpha-2 codes .
API reference
None
Access level dependencies
Description
Checks whether a request meets the criteria of one or more
access levels.
YAML
required Access Levels
Valid values
A list of one or more existing access levels formatted as:
accessPolicies/ POLICY-NAME /accessLevels/ LEVEL-NAME
Where:
POLICY-NAME is the numeric name of your
Organization's access policy.
LEVEL-NAME is the name of the access level
that you want to add as a dependency.
API reference
REST
RPC
Principals
Description
Checks whether a request is coming from a specific user or
service account.
This attribute can only be included in conditions when
creating or modifying an access level using the gcloud command-line tool or the
Access Context Manager API. If you created an access level using
Google Cloud console, either of the methods previously mentioned
can be used to add principals to that access level.
YAML
members
Valid values
A list of one or more user or service accounts, formatted as:
user: EMAIL
serviceAccount: EMAIL
Where:
EMAIL is the email that corresponds to the user
or service account that you want to include in the access
level.
Groups are not supported.
API reference
REST
RPC
Device policy
Requirements
To use the device policy attributes with mobile devices,
you
must configure MDM for your organization .
To use the device policy attributes with other devices,
Endpoint Verification must be enabled.
Description
A device policy is a
collection of attributes that are used to filter requests
based on information about the device where the request
originated.
For example, device policy attributes are used in conjunction
with
Identity-Aware Proxy to support Context-Aware Access.
YAML
devicePolicy
Valid values
devicePolicy is a list of one or more device
policy attributes. The following attributes are supported:
Require screen lock
Storage encryption
Require administrator approval
Require corp owned device
OS policy
Only certain device policy attributes can be used with mobile
devices. The Supports mobile devices row identifies
whether an attribute can be used with mobile devices.
API reference
REST
RPC
Device policy attributes
Require screen lock
Description
Checks if a device has screen lock enabled.
Supports mobile devices
Yes
YAML
requireScreenlock
Valid values
true
false
If omitted, defaults to false .
API reference
REST
RPC
Storage encryption
Description
Checks whether the device is encrypted, not encrypted,
or does not support storage encryption.
Supports mobile devices
Yes
Important: For an iOS device to satisfy the
the storage encryption attribute, screen lock must
be enabled on the device.
YAML
allowedEncryptionStatuses
Valid values
One or more of the following values:
ENCRYPTION_UNSUPPORTED
ENCRYPTED
UNENCRYPTED
API reference
REST
RPC
Require admin approval
Description
Checks whether the device has been approved by a
an administrator.
Supports mobile devices
Yes
YAML
requireAdminApproval
Valid values
true
false
If omitted, defaults to false .
API reference
None
Require corp owned device
Description
Checks whether the device is owned by your
enterprise.
Supports mobile devices
Yes
YAML
requireCorpOwned
Valid values
true
false
If omitted, defaults to false .
API reference
None
OS policy
Description
Checks whether a device is using a specified operating
system. Additionally, you can specify a minimum
version of an OS that a device must be using.
If you create a ChromeOS policy, you can also specify
that it must be a
verified ChromeOS
.
When you select more than one operating system, the values you select are ORd when the condition is evaluated. Users are granted access if they have one of the operating systems that you specify.
Supports mobile devices
Yes
YAML
osConstraints
Valid values
osConstraints is a list that must include
one or more instances of osType .
osType can be paired with an instance of
minimumVersion , but
minimumVersion is not required.
osType must include a list of one or
more of the following values:
DESKTOP_MAC
DESKTOP_WINDOWS
DESKTOP_CHROME_OS
DESKTOP_LINUX
IOS
ANDROID
minimumVersion is optional. If used,
it must be included with osType .
minimumVersion must include a minimum
version formatted as MAJOR.MINOR.PATCH .
For example: 10.5.301.
If you specify DESKTOP_CHROME_OS for
osType , you can optionally include
requireVerifiedChromeOs .
Valid values for
requireVerifiedChromeOs are:
true
false
If you specify IOS or
ANDROID for
osType , you can optionally include
any device policy attribute that supports mobile
devices.
API reference
REST
RPC
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
