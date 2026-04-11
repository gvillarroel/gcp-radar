---
title: "REST Resource: projects.locations.global.domains \_|\_ Managed Microsoft AD\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains
  title: "REST Resource: projects.locations.global.domains \_|\_ Managed Microsoft\
    \ AD \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Managed Microsoft AD
Reference
Send feedback
REST Resource: projects.locations.global.domains
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Domain
JSON representation
State
Trust
JSON representation
TrustType
TrustDirection
State
Methods
Resource: Domain
Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
JSON representation
{
"name" : string ,
"labels" : {
string : string ,
...
} ,
"authorizedNetworks" : [
string
] ,
"reservedIpRange" : string ,
"locations" : [
string
] ,
"admin" : string ,
"fqdn" : string ,
"createTime" : string ,
"updateTime" : string ,
"state" : enum ( State ) ,
"statusMessage" : string ,
"trusts" : [
{
object ( Trust )
}
] ,
"auditLogsEnabled" : boolean
}
Fields
name
string
Required. The unique name of the domain using the form: projects/{projectId}/locations/global/domains/{domainName} .
labels
map (key: string, value: string)
Optional. Resource labels that can contain user-provided metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
authorizedNetworks[]
string
Optional. The full names of the Google Compute Engine networks the domain instance is connected to. Networks can be added using domains.patch. The domain is only available on networks listed in authorizedNetworks . If CIDR subnets overlap between networks, domain creation will fail.
reservedIpRange
string
Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorizedNetworks].
locations[]
string
Required. Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/] e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
admin
string
Optional. The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used.
fqdn
string
Output only. The fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory set up on an internal network.
createTime
string ( Timestamp format)
Output only. The time the instance was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. The last update time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
state
enum ( State )
Output only. The current state of this domain.
statusMessage
string
Output only. Additional information about the current status of this domain, if available.
trusts[]
object ( Trust )
Output only. The current trusts associated with the domain.
auditLogsEnabled
boolean
Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled.
State
Represents the different states of a managed domain.
Enums
STATE_UNSPECIFIED
Not set.
CREATING
The domain is being created.
READY
The domain has been created and is fully usable.
UPDATING
The domain's configuration is being updated.
DELETING
The domain is being deleted.
REPAIRING
The domain is being repaired and may be unusable. Details can be found in the statusMessage field.
PERFORMING_MAINTENANCE
The domain is undergoing maintenance.
UNAVAILABLE
The domain is not serving requests.
Trust
Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain. If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
JSON representation
{
"targetDomainName" : string ,
"trustType" : enum ( TrustType ) ,
"trustDirection" : enum ( TrustDirection ) ,
"selectiveAuthentication" : boolean ,
"targetDnsIpAddresses" : [
string
] ,
"trustHandshakeSecret" : string ,
"createTime" : string ,
"updateTime" : string ,
"state" : enum ( State ) ,
"stateDescription" : string ,
"lastTrustHeartbeatTime" : string
}
Fields
targetDomainName
string
Required. The fully qualified target domain name which will be in trust with the current domain.
trustType
enum ( TrustType )
Required. The type of trust represented by the trust resource.
trustDirection
enum ( TrustDirection )
Required. The trust direction, which decides if the current domain is trusted, trusting, or both.
selectiveAuthentication
boolean
Optional. The trust authentication type, which decides whether the trusted side has forest/domain wide access or selective access to an approved set of resources.
targetDnsIpAddresses[]
string
Required. The target DNS server IP addresses which can resolve the remote domain involved in the trust.
trustHandshakeSecret
string
Required. The trust secret used for the handshake with the target domain. This will not be stored.
createTime
string ( Timestamp format)
Output only. The time the instance was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. The last update time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
state
enum ( State )
Output only. The current state of the trust.
stateDescription
string
Output only. Additional information about the current state of the trust, if available.
lastTrustHeartbeatTime
string ( Timestamp format)
Output only. The last heartbeat time when the trust was known to be connected.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
TrustType
Represents the different inter-forest trust types.
Enums
TRUST_TYPE_UNSPECIFIED
Not set.
FOREST
The forest trust.
EXTERNAL
The external domain trust.
TrustDirection
Represents the direction of trust. See System.DirectoryServices.ActiveDirectory.TrustDirection for more information.
Enums
TRUST_DIRECTION_UNSPECIFIED
Not set.
INBOUND
The inbound direction represents the trusting side.
OUTBOUND
The outboud direction represents the trusted side.
BIDIRECTIONAL
The bidirectional direction represents the trusted / trusting side.
State
Represents the different states of a domain trust.
Enums
STATE_UNSPECIFIED
Not set.
CREATING
The domain trust is being created.
UPDATING
The domain trust is being updated.
DELETING
The domain trust is being deleted.
CONNECTED
The domain trust is connected.
DISCONNECTED
The domain trust is disconnected.
Methods
attachTrust
Adds an AD trust to a domain.
create
Creates a Microsoft AD domain.
delete
Deletes a domain.
detachTrust
Removes an AD trust.
extendSchema
Extend Schema for Domain
get
Gets information about a domain.
getIamPolicy
Gets the access control policy for a resource.
getLdapssettings
Gets the domain ldaps settings.
list
Lists domains in a project.
patch
Updates the metadata and configuration of a domain.
reconfigureTrust
Updates the DNS conditional forwarder.
resetAdminPassword
Resets a domain's administrator password.
restore
RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
Returns permissions that a caller has on the specified resource.
updateLdapssettings
Patches a single ldaps settings.
validateTrust
Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
