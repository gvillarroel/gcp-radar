---
title: "Known issues and limitations \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/troubleshoot/known-limitations
  title: "Known issues and limitations \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Guides
Send feedback
Known issues and limitations
Stay organized with collections
Save and categorize content based on your preferences.
This page describes known limitations of Google Cloud NetApp Volumes.
General issues
This section describes common known issues of NetApp Volumes.
Flex File volumes don't respond to ping
For more information about this issue, see Test connectivity to NetApp Volumes .
Intermittent connectivity loss when using overlapping Private Services Access connections
When configuring the
netapp.servicenetworking.goog connection, if the CIDR range overlaps with the
CIDR range used by another private services access connection on the same
VPC, it can result in intermittent connectivity loss of the
volume mount connection. Use non-overlapping ranges to avoid this problem.
Possible disruption of client access to volumes transitioned from Cloud Volumes Service to NetApp Volumes when updating settings of an NFS volume
Issue : There is a disruption of client access to volumes when you update any
settings on either the source or destination volume of an active volume
replication with a mirrored transfer status.
Reason : Updating a volume can lead to synchronization of its export policy
with the replication partner volume. If the updated volume has an incorrect or
missing export policy, the clients mounted to the production source volume might
lose access, potentially causing an outage.
Background : When a replication is in a mirrored state,
NetApp Volumes automatically synchronizes the export policies of
the source and destination volumes. This ensures consistent client access
without manual intervention of the administrator, as any policy change on one
volume is automatically applied on the other volume.
In CVS, the administrator needs to manually synchronize the source and
destination volume settings. During the volume transition from CVS to
NetApp Volumes, the existing export policies were transferred
without modifications, which can lead to inconsistent export policies in
replicated volumes. When you update the export policy of either the source or
destination volume in a volume replication relationship automatically
synchronizes the policies on both volumes.
Affected volumes
This issue applies to volumes that meet all of the following criteria:
Volumes that are in an active, mirrored volume replication. Resuming the
replication after it's stopped can cause the issue.
All NFS-enabled volumes that have an export policy.
Volumes where the export policy differs between the source and destination.
Solution : To resolve this issue, the export policy of source and destination
volumes must be synchronized once. Complete the following steps:
Examine and compare the export policies of both the source and destination
volumes.
If the export policies are identical, no action is required.
If the export policies are different, merge the export rules to create an
export policy that allows all hosts specified in both policies.
Apply the merged export policy to the source volume. This policy is also
automatically applied to the destination volume.
By synchronizing the export policies, you can ensure consistent access and
prevent potential disruptions to clients.
Error message when using Cloud Volumes Service (CVS) and NetApp Volumes resources together
You might get an error message about using CVS and NetApp Volumes
resources together within a VPC, project, or region. This issue can occur when
you try to create resources such as pools and policies if either of the
following is true for the project:
The project was previously used for CVS.
A CVS resource list operation was performed in a project that has no
NetApp Volumes resources.
The following are the common error messages:
Host project and service project must be using the same service .
Resources from CVS and NetApp Volumes may not be used together
in a single region .
Cannot share VPC between 3P and 1P networks .
To resolve this issue, contact
Google Cloud Customer Care and request a
reset of your specific projects or regions to exclusively use
NetApp Volumes resources.
Active Directory integration issues
The following sections contains known issues of Active Directory integration.
Connectivity issues
Connections to on-premise domain controllers fail due to the following
limitations:
VPC peering :
NetApp Volumes can only reach domain controllers that are on
the storage pool's Virtual Private Cloud (VPC) or are connected to it by
VPN. NetApp Volumes can't reach domain controllers in any
other VPC, including those that are peered to the storage
pool's VPC and that connect to the storage pool.
Firewalls : The on-premise connection fails if you don't allow
NetApp Volumes to contact your domain controllers. For more
information,
Firewall rules for Active Directory access .
Modifying the Active Directory site setting of an Active Directory policy
doesn't affect Flex service level storage pools.
NetApp Volumes can't join Windows 2025 based domain controllers
Due to a regression in Windows 2025, NetApp Volumes can't join a
domain using a Windows 2025 domain controller. To join the domain, make sure to
use a domain controller from Windows version prior to 2025, such as Windows 2022.
You can't specify a working domain controller directly, as the service uses
DNS-based discovery
to find domain controllers. We recommend you add usable, pre-Windows 2025 domain
controllers in a dedicated Active Directory site and specify that site in the
Active Directory policy for NetApp Volumes.
As of September 9, 2025, Microsoft has released KB5065431
and KB5065426
to address this issue. Windows 2025 doesn't support RC4 encryption, so you
must Enable AES Encryption for Active Directory authentication .
CMEK issues
The following sections contains known issues of customer-managed encryption
key (CMEK) operations.
ListKmsConfigs returns Invalid value for enum type error
While a volume migrates from system-managed to customer-managed encryption, the
ListKmsConfigs command occasionally returns an
Invalid value for enum type error during migration. After the migration
finishes, the ListKmsConfigs command returns to working normally.
KmsConfig policy creation fails
Occasionally, KmsConfig policy creation fails and blocks you from creating
another policy. If this occurs, contact Google Cloud Customer Care .
Volume replication issues and limitations
The following sections provide details about known issues and limitations of the
volume replication feature.
Destination volume quota settings might fail in an active replication
When modifying settings on a volume in an active replication, the settings are
applied to both the source and destination volumes .
However, quota changes specifically for destination volumes are staged and get
applied to the destination volume once the replication is stopped. Occasionally,
this quota setting might fail, and you will receive an error message at the end
of the operation. While the Stop operation succeeds, all of the quotas might
not have been applied to the destination volume. If you receive a quota error
during a Stop operation, compare the quota rules on both the source and
destination volumes and then update any missing quota rules on the destination
to match the source volume settings.
Google Cloud console displays storage pools without associated Active Directory policies
In the Google Cloud console, when you create a volume replication for a source
volume, the list of storage pools to choose from to create the destination
volume contains storage pools that don't have an Active Directory policy.
Selecting a storage pool without an Active Directory policy leads to
replication failure.
Large capacity volumes known issues
The following section describes known issues of the large capacity volumes
feature.
Incompatible pools displayed
When changing the storage pool (service level), the Google Cloud console might show
incompatible pools. If you try to change to an incompatible storage pool, the
attempt fails and you receive an error message.
CMEK migration not blocked
CMEK migration isn't blocked by the Google Cloud console and is allowed even when
large capacity volumes are present. If you try CMEK migration when large
capacity volumes are configured, the attempt will fail.
FlexCache issues
This section describes known issues of the FlexCache feature.
FlexCache volume modifications in Google Cloud console might fail
FlexCache volumes can only be modified using the API or the Google Cloud CLI.
While FlexCache volumes are displayed in the Google Cloud console after creation,
they can be viewed or deleted, and attempts to update them using the
Google Cloud console might fail. In such cases, use the Google Cloud CLI for
modifications.
FlexCache volume creation fails with snapshot-directory set to true
FlexCache volumes don't support the snapshot-directory option. While the API
defaults this parameter to false , the Google Cloud CLI defaults it to true .
Therefore, when creating a FlexCache volume using Google Cloud CLI, you must
explicitly include --snapshot-directory false to prevent creation failure.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
