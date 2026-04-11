---
title: "VirtualMachinePreferences \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/VirtualMachinePreferences
  title: "VirtualMachinePreferences \_|\_ Migration Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Reference
Send feedback
VirtualMachinePreferences
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ComputeMigrationTargetProduct
RegionPreferences
JSON representation
CommitmentPlan
SizingOptimizationStrategy
ComputeEnginePreferences
JSON representation
MachinePreferences
JSON representation
LicenseType
VmwareEnginePreferences
JSON representation
CommitmentPlan
SoleTenancyPreferences
JSON representation
HostMaintenancePolicy
CommitmentPlan
VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
JSON representation
{
"targetProduct" : enum ( ComputeMigrationTargetProduct ) ,
"regionPreferences" : {
object ( RegionPreferences )
} ,
"commitmentPlan" : enum ( CommitmentPlan ) ,
"sizingOptimizationStrategy" : enum ( SizingOptimizationStrategy ) ,
"computeEnginePreferences" : {
object ( ComputeEnginePreferences )
} ,
"vmwareEnginePreferences" : {
object ( VmwareEnginePreferences )
} ,
"soleTenancyPreferences" : {
object ( SoleTenancyPreferences )
}
}
Fields
target Product
enum ( ComputeMigrationTargetProduct )
Target product for assets using this preference set. Specify either target product or business goal, but not both.
region Preferences
object ( RegionPreferences )
Region preferences for assets using this preference set. If you are unsure which value to set, the migration service API region is often a good value to start with.
commitment Plan
enum ( CommitmentPlan )
Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
sizing Optimization Strategy
enum ( SizingOptimizationStrategy )
Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.
compute Engine Preferences
object ( ComputeEnginePreferences )
Compute Engine preferences concern insights and recommendations for Compute Engine target.
vmware Engine Preferences
object ( VmwareEnginePreferences )
Preferences concerning insights and recommendations for Google Cloud VMware Engine.
sole Tenancy Preferences
object ( SoleTenancyPreferences )
Preferences concerning Sole Tenant nodes and virtual machines.
ComputeMigrationTargetProduct
The preference for a specific Google Cloud product platform.
Enums
COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED
Unspecified (default value).
COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE
Prefer to migrate to Google Cloud Compute Engine.
COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE
Prefer to migrate to Google Cloud VMware Engine.6278
COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY
Prefer to migrate to Google Cloud Sole Tenant Nodes.
RegionPreferences
The user preferences relating to target regions.
JSON representation
{
"preferredRegions" : [
string
]
}
Fields
preferred Regions[]
string
A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.
CommitmentPlan
The plan of commitments for VM resource-based committed use discount (CUD).
Enums
COMMITMENT_PLAN_UNSPECIFIED
Unspecified commitment plan.
COMMITMENT_PLAN_NONE
No commitment plan.
COMMITMENT_PLAN_ONE_YEAR
1 year commitment.
COMMITMENT_PLAN_THREE_YEARS
3 years commitment.
SizingOptimizationStrategy
The sizing optimization strategy preferences of a virtual machine. This strategy, in addition to actual usage data of the virtual machine, can help determine the recommended shape on the target platform.
Enums
SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED
Unspecified (default value).
SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE
No optimization applied. Virtual machine sizing matches as closely as possible the machine shape on the source site, not considering any actual performance data.
SIZING_OPTIMIZATION_STRATEGY_MODERATE
Virtual machine sizing will match the reported usage and shape, with some slack. This a good value to start with.
SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE
Virtual machine sizing will match the reported usage, with little slack. Using this option can help reduce costs.
ComputeEnginePreferences
The user preferences relating to Compute Engine target platform.
JSON representation
{
"persistentDiskType" : enum ( PersistentDiskType ) ,
"machinePreferences" : {
object ( MachinePreferences )
} ,
"licenseType" : enum ( LicenseType )
}
Fields
persistent Disk Type
enum ( PersistentDiskType )
Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data.
machine Preferences
object ( MachinePreferences )
Preferences concerning the machine types to consider on Compute Engine.
license Type
enum ( LicenseType )
License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.
MachinePreferences
The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.
JSON representation
{
"allowedMachineSeries" : [
{
object ( MachineSeries )
}
]
}
Fields
allowed Machine Series[]
object ( MachineSeries )
Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.
LicenseType
The License type for premium images (RHEL, RHEL for SAP, SLES, SLES for SAP, Windows Server).
Enums
LICENSE_TYPE_UNSPECIFIED
Unspecified (default value).
LICENSE_TYPE_DEFAULT
Default Google Cloud licensing plan. Licensing is charged per usage. This a good value to start with.
LICENSE_TYPE_BRING_YOUR_OWN_LICENSE
Bring-your-own-license (BYOL) plan. User provides the OS license.
VmwareEnginePreferences
The user preferences relating to Google Cloud VMware Engine target platform.
JSON representation
{
"cpuOvercommitRatio" : number ,
"memoryOvercommitRatio" : number ,
"storageDeduplicationCompressionRatio" : number ,
"commitmentPlan" : enum ( CommitmentPlan )
}
Fields
cpu Overcommit Ratio
number
CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.
memory Overcommit Ratio
number
Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.
storage Deduplication Compression Ratio
number
The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.
commitment Plan
enum ( CommitmentPlan )
Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
CommitmentPlan
Type of committed use discount.
Enums
COMMITMENT_PLAN_UNSPECIFIED
Unspecified commitment plan.
ON_DEMAND
No commitment plan (on-demand usage).
COMMITMENT_1_YEAR_MONTHLY_PAYMENTS
1 year commitment (monthly payments).
COMMITMENT_3_YEAR_MONTHLY_PAYMENTS
3 year commitment (monthly payments).
COMMITMENT_1_YEAR_UPFRONT_PAYMENT
1 year commitment (upfront payment).
COMMITMENT_3_YEAR_UPFRONT_PAYMENT
3 years commitment (upfront payment).
SoleTenancyPreferences
Preferences concerning Sole Tenancy nodes and VMs.
JSON representation
{
"cpuOvercommitRatio" : number ,
"hostMaintenancePolicy" : enum ( HostMaintenancePolicy ) ,
"commitmentPlan" : enum ( CommitmentPlan ) ,
"nodeTypes" : [
{
object ( SoleTenantNodeType )
}
]
}
Fields
cpu Overcommit Ratio
number
CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.
host Maintenance Policy
enum ( HostMaintenancePolicy )
Sole Tenancy nodes maintenance policy.
commitment Plan
enum ( CommitmentPlan )
Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
node Types[]
object ( SoleTenantNodeType )
A list of sole tenant node types. An empty list means that all possible node types will be considered.
HostMaintenancePolicy
Sole Tenancy nodes maintenance policy.
Enums
HOST_MAINTENANCE_POLICY_UNSPECIFIED
Unspecified host maintenance policy.
HOST_MAINTENANCE_POLICY_DEFAULT
Default host maintenance policy.
HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE
Restart in place host maintenance policy.
HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP
Migrate within node group host maintenance policy.
CommitmentPlan
Type of committed use discount.
Enums
COMMITMENT_PLAN_UNSPECIFIED
Unspecified commitment plan.
ON_DEMAND
No commitment plan (on-demand usage).
COMMITMENT_1_YEAR
1 year commitment.
COMMITMENT_3_YEAR
3 years commitment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
