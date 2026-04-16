---
title: "Example YAML for an access level \_|\_ Access Context Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file
  title: "Example YAML for an access level \_|\_ Access Context Manager \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Reference
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
