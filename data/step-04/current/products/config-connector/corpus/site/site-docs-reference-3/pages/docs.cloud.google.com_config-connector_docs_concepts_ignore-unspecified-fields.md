---
title: "Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields
  title: "Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Ignore unspecified fields
This page explains the default populating behavior of the spec fields and how
to change the default behavior from Merge to the recommended behavior
Absent . This page might not be applicable if you're using a CRD added in
version 1.114.0 and later because those CRDs use only the Absent behavior. For
a list of CRDs that support Merge , see the CRDs with Merge
support section of this page.
spec fields populating behaviors
When Config Connector creates a resource, fields left unspecified in the
Kubernetes resource spec may have two different default populating behaviors:
Absent and Merge .
Absent
Absent is the recommended behavior. Config Connector will not populate any
unspecified fields into the spec.
For CRDs added in version 1.114.0 and
later ,
the default populating behavior is Absent . This is also the only populating
behavior those CRDs support. The value of the
cnrm.cloud.google.com/state-into-spec annotation is absent in these resource
CRs.
Merge
Merge is an unsupported behavior in CRDs added in 1.114.0 and later. The
spec fields take on values from the API after a successful reconciliation
unless they are not readable. More details can be found in Manage fields
externally .
For CRDs supported in Config Connector version
1.113.0
and earlier, the default populating behavior is Merge . For a list of CRDs that
support Merge , see the CRDs with Merge support
section of this page. The default value of the
cnrm.cloud.google.com/state-into-spec annotation is merge in these resource
CRs. You can also configure the populating behavior to be Absent following the
instructions in Skip populating unspecified fields into
spec .
By default, in these resource CRs, fields which haven't been specified in your
original YAML always appear in the CR spec. This means when you run
kubectl get <resource kind> <resource name> -oyaml , many fields in the spec
are not in your applied YAML.
As an example, assume the CRD schema let you specify two fields named foo and
bar in spec, while your applied YAML file has only foo specified:
spec :
foo : "foo"
You'll notice another field named bar appears in the CR if the YAML is applied
successfully and the resource is
UpToDate :
spec :
foo : "foo"
bar : "bar"
Due to the complexity of interaction between Config Connector and
Google Cloud APIs, you might want to change this default behavior and skip
populating the Kubernetes resource spec with unspecified fields.
Skip populating unspecified fields into spec
You can skip populating unspecified fields into spec for CRDs supported in
Config Connector
version 1.113.0
and earlier in either of the following ways:
Configure the cluster-level or namespace-level stateIntoSpec override to be
Absent .
Specify the value of the cnrm.cloud.google.com/state-into-spec annotation as
absent for the resource.
Configure the cluster-level or namespace-level stateIntoSpec override
When installing Config Connector, or updating the Config Connector installation,
you can configure the cluster-level or namespace-level stateIntoSpec override
to be Absent in the ConfigConnector CR or ConfigConnectorContext CR.
spec :
stateIntoSpec : Absent
This makes Absent the default spec fields populating behavior for any new
resources created in the cluster or in the namespace when you don't specify
the cnrm.cloud.google.com/state-into-spec annotation in the new resource
YAMLs. It means Config Connector will skip populating unspecified fields into
the Kubernetes resource spec for these resources.
The stateIntoSpec field doesn't have a default value. Config Connector will
determine the spec fields populating behavior based on the value of the
cnrm.cloud.google.com/state-into-spec annotation, and it follows the logic
below to determine the value of the annotation:
Use the value of the cnrm.cloud.google.com/state-into-spec annotation
directly if it is specified and valid.
If the annotation is unspecified, use the corresponding value of the
stateIntoSpec field in the ConfigConnectorContext CR.
If the ConfigConnectorContext CR doesn't exist or the stateIntoSpec field
is unspecified, use the corresponding value of the stateIntoSpec field in
the ConfigConnector CR.
If the ConfigConnector CR doesn't exist or the stateIntoSpec field is
unspecified, use the default behavior based on the CRD described in spec
fields populating behaviors .
Note that the only populating behavior CRDs added in version 1.114.0 and
later
follow is Absent regardless of the cnrm.cloud.google.com/state-into-spec
annotation or the stateIntoSpec fields in the ConfigConnector CR or
ConfigConnectorContext CR.
If you have already created the resource, but want to change the spec fields
populating behavior to Absent , you should:
Ensure the cluster-level or namespace-level stateIntoSpec override to be
Absent in the ConfigConnector CR or ConfigConnectorContext CR.
Abandon and acquire the
resource.
Ensure the YAML configuration used for acquisition does not have the
cnrm.cloud.google.com/state-into-spec annotation.
Specify the resource-level cnrm.cloud.google.com/state-into-spec annotation
When creating your YAML file, you can specify the value of the
cnrm.cloud.google.com/state-into-spec annotation as absent . This skips
populating unspecified fields into the Kubernetes resource spec:
metadata :
annotations :
cnrm.cloud.google.com/state-into-spec : absent
This annotation has a default value of merge if not specified, which means
Config Connector populates all unspecified fields into spec. This annotation is
immutable, which means you can't update the annotation value of an existing
Config Connector resource.
If you have already created the resource, but want to change the value of this
annotation for a different populating behavior, you must follow these steps:
Edit and add annotation cnrm.cloud.google.com/deletion-policy: abandon
to the existing Kubernetes resource to make sure deletion in next step won't
delete the underlying Google Cloud resource.
Delete the resource from the Kubernetes cluster.
Add annotation cnrm.cloud.google.com/state-into-spec: absent into the YAML
of the resource.
(Optional) remove cnrm.cloud.google.com/deletion-policy: abandon from the
YAML.
Apply the updated YAML.
To further explain the difference introduced by this annotation, assume there is
a spec with the following schema:
foo1 : string
foo2 : string
bars :
- bar :
br1 : string
br2 : string
barz :
bz1 : string
bz2 : string
Also assume you have specified the spec in your YAML as:
spec :
foo1 : "foo1"
bars :
- br1 : "1_br1"
- br1 : "2_br1"
barz :
bz1 : "bz1"
Then by default, the populated spec in the created Kubernetes resource might be:
spec :
foo1 : "foo1"
foo2 : "foo2"
bars :
- br1 : "1_br1"
br2 : "1_br2"
- br1 : "2_br1"
br2 : "2_br2"
barz :
bz1 : "bz1"
bz2 : "bz2"
While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec
in the created Kubernetes resource will be:
spec :
foo1 : "foo1"
bars :
- br1 : "1_br1"
- br1 : "2_br1"
barz :
bz1 : "bz1"
When to use cnrm.cloud.google.com/state-into-spec: absent
In most cases, you'll want to set
cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating
behavior for spec fields. Here are the most common scenarios that will benefit
from the Absent populating behavior.
Manage unspecified fields in a list externally
Config Connector treats all list fields in Kubernetes resource spec as atomic
fields. As a result, by default, your change made to a subfield in the list from
outside of Config Connector will be reverted by Config Connector. However, you
can use this annotation to let Config Connector unmanage subfields in list. For
more information, see Behavior for list fields in resource
spec .
Resolve fighting between config management tools and Config Connector
If you are using config management tools like
Config Sync or Argo
CD , you may notice a fight between the config
management tool and Config Connector. An example is the KNV2005
error
explained in troubleshooting guide. The root cause of these types of issues are
because:
Config Connector will populate and default unspecified values in list in the
spec, the spec.bars[0].br2 is an example.
Both config management tools and Config Connector treat list fields as
atomic, thus the added spec.bars[0].br2 is treated as a drift by config
management tools and will be removed to correct the drift .
To resolve these issues, you can set cnrm.cloud.google.com/state-into-spec:
absent so that Config Connector doesn't add unspecified field
spec.bars[0].br2 into the spec.
Resolve GET/PUT symmetry issues
GET/PUT symmetry refers to a design principle in REST API. Specifically, it
means when a GET response is sent as a PUT request to the same URL, the expected
result is a HTTP 200 OK response with no change in the state of the underlying
REST resource.
The unspecified fields populated by Config Connector in the Kubernetes resource
spec are as a result of a GET request. This means in future
reconciliations ,
Config Connector may send a PUT/PATCH request to the underlying
Google Cloud API, with these unspecified field values learned from the GET
request. This is usually not a problem, but it is possible some
Google Cloud APIs will reject the PUT/PATCH request because of these
unspecified field values. In the same example, the populated spec.barz.bz2
with value "bz2" may result an HTTP 400 client error or other unexpected
responses if the API implementation violates the GET/PUT symmetry principle.
To avoid this category of issues, you can experiment setting
cnrm.cloud.google.com/state-into-spec: absent and check if the errors during
reconciliation will go away.
Observed State
If you need to set cnrm.cloud.google.com/state-into-spec: absent , but your
solution depends on the populated values from unspecified fields, check if these
fields exist under status.observedState in the CRD schema. If they're
represented under status.observedState , then you can set
cnrm.cloud.google.com/state-into-spec: absent and still access the values of
the unspecified fields after a successful reconciliation.
The status.observedState field contains the live state of the selected,
observed fields of the resource that Config Connector observed in the last
successful reconciliation. The observed fields are selected if they are
dependencies of common use cases, and are computed spec fields. You can find
the observed fields in the CRD schemas.
If you can't find the observed fields you want, check for an existing issue or
open a new issue in the public issue
trackers
.
Kinds with Merge support
The following are all the Config Connector kinds that support Merge populating
behavior:
AccessContextManagerAccessLevel
AccessContextManagerAccessPolicy
AccessContextManagerServicePerimeter
AlloyDBBackup
AlloyDBCluster
AlloyDBUser
ApigeeEnvironment
ApigeeOrganization
ArtifactRegistryRepository
BigQueryDataset
BigQueryJob
BigQueryTable
BigtableAppProfile
BigtableGCPolicy
BigtableInstance
BigtableTable
BillingBudgetsBudget
BinaryAuthorizationAttestor
BinaryAuthorizationPolicy
CertificateManagerCertificate
CertificateManagerCertificateMap
CertificateManagerCertificateMapEntry
CloudBuildTrigger
CloudFunctionsFunction
CloudIdentityGroup
CloudIdentityMembership
CloudSchedulerJob
ComputeAddress
ComputeBackendBucket
ComputeBackendService
ComputeDisk
ComputeExternalVPNGateway
ComputeFirewall
ComputeFirewallPolicy
ComputeFirewallPolicyAssociation
ComputeForwardingRule
ComputeHTTPHealthCheck
ComputeHTTPSHealthCheck
ComputeHealthCheck
ComputeImage
ComputeInstance
ComputeInstanceGroup
ComputeInstanceGroupManager
ComputeInstanceTemplate
ComputeInterconnectAttachment
ComputeNetwork
ComputeNetworkEndpointGroup
ComputeNetworkFirewallPolicy
ComputeNetworkPeering
ComputeNodeGroup
ComputeNodeTemplate
ComputePacketMirroring
ComputeProjectMetadata
ComputeRegionNetworkEndpointGroup
ComputeReservation
ComputeResourcePolicy
ComputeRoute
ComputeRouter
ComputeRouterInterface
ComputeRouterNAT
ComputeRouterPeer
ComputeSSLCertificate
ComputeSSLPolicy
ComputeSecurityPolicy
ComputeServiceAttachment
ComputeSharedVPCHostProject
ComputeSharedVPCServiceProject
ComputeSnapshot
ComputeSubnetwork
ComputeTargetGRPCProxy
ComputeTargetHTTPProxy
ComputeTargetHTTPSProxy
ComputeTargetInstance
ComputeTargetPool
ComputeTargetSSLProxy
ComputeTargetTCPProxy
ComputeTargetVPNGateway
ComputeURLMap
ComputeVPNGateway
ComputeVPNTunnel
ConfigControllerInstance
ContainerAnalysisNote
ContainerAttachedCluster
ContainerCluster
ContainerNodePool
DLPDeidentifyTemplate
DLPInspectTemplate
DLPJobTrigger
DLPStoredInfoType
DNSManagedZone
DNSPolicy
DNSRecordSet
DataFusionInstance
DataflowFlexTemplateJob
DataflowJob
DataprocAutoscalingPolicy
DataprocCluster
DataprocWorkflowTemplate
EdgeContainerCluster
EdgeContainerNodePool
EdgeContainerVpnConnection
EdgeNetworkNetwork
EdgeNetworkSubnet
EventarcTrigger
FilestoreBackup
FilestoreInstance
FirestoreIndex
Folder
GKEHubFeature
GKEHubMembership
IAMAccessBoundaryPolicy
IAMAuditConfig
IAMCustomRole
IAMPartialPolicy
IAMPolicy
IAMPolicyMember
IAMServiceAccount
IAMServiceAccountKey
IAMWorkforcePool
IAMWorkforcePoolProvider
IAMWorkloadIdentityPool
IAMWorkloadIdentityPoolProvider
IAPBrand
IAPIdentityAwareProxyClient
IdentityPlatformConfig
IdentityPlatformOAuthIDPConfig
IdentityPlatformTenant
IdentityPlatformTenantOAuthIDPConfig
KMSCryptoKey
KMSKeyRing
LoggingLogBucket
LoggingLogExclusion
LoggingLogSink
LoggingLogView
MemcacheInstance
MonitoringAlertPolicy
MonitoringGroup
MonitoringMetricDescriptor
MonitoringMonitoredProject
MonitoringNotificationChannel
MonitoringService
MonitoringServiceLevelObjective
MonitoringUptimeCheckConfig
NetworkConnectivityHub
NetworkConnectivitySpoke
NetworkSecurityAuthorizationPolicy
NetworkSecurityClientTLSPolicy
NetworkSecurityServerTLSPolicy
NetworkServicesEndpointPolicy
NetworkServicesGRPCRoute
NetworkServicesGateway
NetworkServicesHTTPRoute
NetworkServicesMesh
NetworkServicesTCPRoute
NetworkServicesTLSRoute
OSConfigGuestPolicy
OSConfigOSPolicyAssignment
PrivateCACAPool
PrivateCACertificate
PrivateCACertificateAuthority
PrivateCACertificateTemplate
Project
PubSubLiteReservation
PubSubSchema
PubSubSubscription
PubSubTopic
RecaptchaEnterpriseKey
RedisInstance
ResourceManagerLien
ResourceManagerPolicy
RunJob
RunService
SQLDatabase
SQLSSLCert
SQLUser
SecretManagerSecret
SecretManagerSecretVersion
Service
ServiceDirectoryEndpoint
ServiceDirectoryNamespace
ServiceDirectoryService
ServiceIdentity
ServiceNetworkingConnection
SourceRepoRepository
SpannerDatabase
SpannerInstance
StorageBucket
StorageBucketAccessControl
StorageDefaultObjectAccessControl
StorageNotification
StorageTransferJob
VPCAccessConnector
The following kinds don't support the Merge populating behavior starting from
the corresponding version:
Kind Name
Version
LoggingLogMetric
1.118.1
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
