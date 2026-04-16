---
title: "ContainerdConfig \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-organization
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig
  title: "ContainerdConfig \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
ContainerdConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
PrivateRegistryAccessConfig
JSON representation
CertificateAuthorityDomainConfig
JSON representation
GCPSecretManagerCertificateConfig
JSON representation
WritableCgroups
JSON representation
RegistryHostConfig
JSON representation
HostConfig
JSON representation
HostCapability
RegistryHeader
JSON representation
CertificateConfig
JSON representation
CertificateConfigPair
JSON representation
ContainerdConfig contains configuration to customize containerd.
JSON representation
{
"privateRegistryAccessConfig" : {
object ( PrivateRegistryAccessConfig )
} ,
"writableCgroups" : {
object ( WritableCgroups )
} ,
"registryHosts" : [
{
object ( RegistryHostConfig )
}
]
}
Fields
privateRegistryAccessConfig
object ( PrivateRegistryAccessConfig )
PrivateRegistryAccessConfig is used to configure access configuration for private container registries.
writableCgroups
object ( WritableCgroups )
Optional. WritableCgroups defines writable cgroups configuration for the node pool.
registryHosts[]
object ( RegistryHostConfig )
RegistryHostConfig configures containerd registry host configuration. Each registryHosts represents a hosts.toml file. At most 25 registryHosts are allowed.
PrivateRegistryAccessConfig
PrivateRegistryAccessConfig contains access configuration for private container registries.
JSON representation
{
"enabled" : boolean ,
"certificateAuthorityDomainConfig" : [
{
object ( CertificateAuthorityDomainConfig )
}
]
}
Fields
enabled
boolean
Private registry access is enabled.
certificateAuthorityDomainConfig[]
object ( CertificateAuthorityDomainConfig )
Private registry access configuration.
CertificateAuthorityDomainConfig
CertificateAuthorityDomainConfig configures one or more fully qualified domain names (FQDN) to a specific certificate.
JSON representation
{
"fqdns" : [
string
] ,
// Union field certificate_config can be only one of the following:
"gcpSecretManagerCertificateConfig" : {
object ( GCPSecretManagerCertificateConfig )
}
// End of list of possible types for union field certificate_config .
}
Fields
fqdns[]
string
List of fully qualified domain names (FQDN). Specifying port is supported. Wildcards are NOT supported. Examples: - my.customdomain.com - 10.0.1.2:5000
Union field certificate_config . Certificate access config. The following are supported: - GCPSecretManagerCertificateConfig certificate_config can be only one of the following:
gcpSecretManagerCertificateConfig
object ( GCPSecretManagerCertificateConfig )
Secret Manager certificate configuration.
GCPSecretManagerCertificateConfig
GCPSecretManagerCertificateConfig configures a secret from Secret Manager .
JSON representation
{
"secretUri" : string
}
Fields
secretUri
string
Secret URI, in the form "projects/$PROJECT_ID/secrets/$SECRET_NAME/versions/$VERSION". Version can be fixed (e.g. "2") or "latest"
WritableCgroups
Defines writable cgroups configuration.
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Optional. Whether writable cgroups is enabled.
RegistryHostConfig
RegistryHostConfig configures the top-level structure for a single containerd registry server's configuration, which represents one hosts.toml file on the node. It will override the same fqdns in PrivateRegistryAccessConfig.
JSON representation
{
"server" : string ,
"hosts" : [
{
object ( HostConfig )
}
]
}
Fields
server
string
Defines the host name of the registry server, which will be used to create configuration file as /etc/containerd/hosts.d/ /hosts.toml. It supports fully qualified domain names (FQDN) and IP addresses: Specifying port is supported. Wildcards are NOT supported. Examples: - my.customdomain.com - 10.0.1.2:5000
hosts[]
object ( HostConfig )
HostConfig configures a list of host-specific configurations for the server. Each server can have at most 10 host configurations.
HostConfig
HostConfig configures the registry host under a given Server.
JSON representation
{
"host" : string ,
"capabilities" : [
enum ( HostCapability )
] ,
"overridePath" : boolean ,
"header" : [
{
object ( RegistryHeader )
}
] ,
"ca" : [
{
object ( CertificateConfig )
}
] ,
"client" : [
{
object ( CertificateConfigPair )
}
] ,
"dialTimeout" : string
}
Fields
host
string
Host configures the registry host/mirror. It supports fully qualified domain names (FQDN) and IP addresses: Specifying port is supported. Wildcards are NOT supported. Examples: - my.customdomain.com - 10.0.1.2:5000
capabilities[]
enum ( HostCapability )
Capabilities represent the capabilities of the registry host, specifying what operations a host is capable of performing. If not set, containerd enables all capabilities by default.
overridePath
boolean
OverridePath is used to indicate the host's API root endpoint is defined in the URL path rather than by the API specification. This may be used with non-compliant OCI registries which are missing the /v2 prefix. If not set, containerd sets default false.
header[]
object ( RegistryHeader )
Header configures the registry host headers.
ca[]
object ( CertificateConfig )
CA configures the registry host certificate.
client[]
object ( CertificateConfigPair )
Client configures the registry host client certificate and key.
dialTimeout
string ( Duration format)
Specifies the maximum duration allowed for a connection attempt to complete. A shorter timeout helps reduce delays when falling back to the original registry if the mirror is unreachable. Maximum allowed value is 180s. If not set, containerd sets default 30s. The value should be a decimal number of seconds with an s suffix.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
HostCapability
HostCapability configures capabilities for the registry host.
Enums
HOST_CAPABILITY_UNSPECIFIED
UNKNOWN should never be set.
HOST_CAPABILITY_PULL
Pull represents the capability to fetch manifests and blobs by digest.
HOST_CAPABILITY_RESOLVE
Resolve represents the capability to fetch manifests by name.
HOST_CAPABILITY_PUSH
Push represents the capability to push blobs and manifests.
RegistryHeader
RegistryHeader configures headers for the registry.
JSON representation
{
"key" : string ,
"value" : [
string
]
}
Fields
key
string
Key configures the header key.
value[]
string
Value configures the header value.
CertificateConfig
CertificateConfig configures certificate for the registry.
JSON representation
{
// Union field certificate can be only one of the following:
"gcpSecretManagerSecretUri" : string
// End of list of possible types for union field certificate .
}
Fields
Union field certificate . One of the methods to configure the certificate. certificate can be only one of the following:
gcpSecretManagerSecretUri
string
The URI configures a secret from Secret Manager in the format "projects/$PROJECT_ID/secrets/$SECRET_NAME/versions/$VERSION" for global secret or "projects/$PROJECT_ID/locations/$REGION/secrets/$SECRET_NAME/versions/$VERSION" for regional secret. Version can be fixed (e.g. "2") or "latest"
CertificateConfigPair
CertificateConfigPair configures pairs of certificates, which is used for client certificate and key pairs under a registry.
JSON representation
{
"cert" : {
object ( CertificateConfig )
} ,
"key" : {
object ( CertificateConfig )
}
}
Fields
cert
object ( CertificateConfig )
Cert configures the client certificate.
key
object ( CertificateConfig )
Key configures the client private key. Optional.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],[]]
