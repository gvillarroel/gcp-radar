---
title: "Example YAML for an access level \_|\_ Access Context Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file
  title: "Example YAML for an access level \_|\_ Access Context Manager \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Example YAML for an access level | Access Context Manager | Google Cloud Documentation
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
Home
Documentation
Security
Access Context Manager
Reference
Was this helpful?
Send feedback
Example YAML for an access level
Stay organized with collections
Save and categorize content based on your preferences.
The following example includes all attributes that can be specified when
you create a .yaml file for an access level. A .yaml file is only necessary
if you are creating or modifying an access level using the gcloud command-line tool.
Note: Conditions must include at least one attribute. If they contain more than
one attribute, the attributes can be combined as an AND operation (all
must be true) or as a NAND operation (none can be true) to determine
whether the condition is met. You can use any combination of attributes
required for your use case. The comments provided for these attributes apply
only if you include the attribute in your .yaml file.
Although you can include identities in the members attribute, Google
recommends against doing so. See identities in Ingress and egress
rules for how to allow
perimeters to communicate with each other.
See more code actions.
Light code theme
Dark code theme
# Attributes can be included in any order in the condition
- devicePolicy :
# Must include at least one of the following:
allowedEncryptionStatuses :
# Must include at least one of the following:
- ENCRYPTION_UNSUPPORTED
- ENCRYPTED
- UNENCRYPTED
osConstraints :
# Must include at least one of the following:
- osType : DESKTOP_CHROME_OS
minimumVersion : 11316.165.0
# minimumVersion must be formatted as x.x.x
requireVerifiedChromeOs : true
- osType : DESKTOP_MAC
- osType : DESKTOP_WINDOWS
# minimumVersion is not required
requireScreenlock : true
# requireScreenlock defaults to false if not included
requireAdminApproval : true
# requireAdminApproval defaults to false if not included
requireCorpOwned : true
# requireCorpOwned defaults to false if not included
ipSubnetworks :
# Must include one or more IPv4 and IPv6 CIDRs
- 252.0.2.0/24
- 2001:db8::/32
regions :
# Must include one or more regions as ISO 3166-1 alpha-2 codes
- US
- CH
- SG
requiredAccessLevels :
# Must include one or more existing access levels
# Must be formatted as accessPolicies/policy-name/accessLevels/level-name
- accessPolicies/247332951433/accessLevels/Device_Trust
members :
# Must include one or more valid IAM users or service accounts
- user:exampleuser@example.com
- serviceAccount:exampleaccount@example. iam.gserviceaccount.com
negate : true
# negate is not required and can only be included with other attributes
# If negate is included, none of the attributes included in the condition
# can be true for the condition to be met.
# You can include more than one condition in the .yaml file
- ipSubnetworks :
- 176.0.2.0/24
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
