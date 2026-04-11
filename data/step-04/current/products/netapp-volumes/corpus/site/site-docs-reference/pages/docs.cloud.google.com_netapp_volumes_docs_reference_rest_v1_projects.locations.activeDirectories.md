---
title: "REST Resource: projects.locations.activeDirectories \_|\_ NetApp Volumes \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.activeDirectories
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.activeDirectories
  title: "REST Resource: projects.locations.activeDirectories \_|\_ NetApp Volumes\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Reference
Send feedback
REST Resource: projects.locations.activeDirectories
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ActiveDirectory
JSON representation
State
Methods
Resource: ActiveDirectory
ActiveDirectory is the public representation of the active directory config.
JSON representation
{
"name" : string ,
"createTime" : string ,
"state" : enum ( State ) ,
"domain" : string ,
"site" : string ,
"dns" : string ,
"netBiosPrefix" : string ,
"organizationalUnit" : string ,
"aesEncryption" : boolean ,
"username" : string ,
"password" : string ,
"backupOperators" : [
string
] ,
"administrators" : [
string
] ,
"securityOperators" : [
string
] ,
"kdcHostname" : string ,
"kdcIp" : string ,
"nfsUsersWithLdap" : boolean ,
"description" : string ,
"ldapSigning" : boolean ,
"encryptDcConnections" : boolean ,
"labels" : {
string : string ,
...
} ,
"stateDetails" : string
}
Fields
name
string
Identifier. The resource name of the active directory. Format: projects/{projectNumber}/locations/{locationId}/activeDirectories/{activeDirectoryId} .
createTime
string ( Timestamp format)
Output only. Create time of the active directory.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
state
enum ( State )
Output only. The state of the AD.
domain
string
Required. Name of the Active Directory domain
site
string
The Active Directory site the service will limit Domain Controller discovery too.
dns
string
Required. Comma separated list of DNS server IP addresses for the Active Directory domain.
netBiosPrefix
string
Required. NetBIOSPrefix is used as a prefix for SMB server name.
organizationalUnit
string
The Organizational Unit (OU) within the Windows Active Directory the user belongs to.
aesEncryption
boolean
If enabled, AES encryption will be enabled for SMB communication.
username
string
Required. Username of the Active Directory domain administrator.
password
string
Required. Password of the Active Directory domain administrator.
backupOperators[]
string
Optional. Users to be added to the Built-in Backup Operator active directory group.
administrators[]
string
Optional. Users to be added to the Built-in Admininstrators group.
securityOperators[]
string
Optional. Domain users to be given the SeSecurityPrivilege.
kdcHostname
string
Name of the active directory machine. This optional parameter is used only while creating kerberos volume
kdcIp
string
KDC server IP address for the active directory machine.
nfsUsersWithLdap
boolean
If enabled, will allow access to local users and LDAP users. If access is needed for only LDAP users, it has to be disabled.
description
string
Description of the active directory.
ldapSigning
boolean
Specifies whether or not the LDAP traffic needs to be signed.
encryptDcConnections
boolean
If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
labels
map (key: string, value: string)
Labels for the active directory.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
stateDetails
string
Output only. The state details of the Active Directory.
State
The Active Directory States
Enums
STATE_UNSPECIFIED
Unspecified Active Directory State
CREATING
Active Directory State is Creating
READY
Active Directory State is Ready
UPDATING
Active Directory State is Updating
IN_USE
Active Directory State is In use
DELETING
Active Directory State is Deleting
ERROR
Active Directory State is Error
DIAGNOSING
Active Directory State is Diagnosing.
Methods
create
CreateActiveDirectory Creates the active directory specified in the request.
delete
Delete the active directory specified in the request.
get
Describes a specified active directory.
list
Lists active directories.
patch
Update the parameters of an active directories.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-04 UTC."],[],[]]
