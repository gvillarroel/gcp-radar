---
title: "Managed Service for Apache Spark Identity and Access Management roles and\
  \ permissions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/concepts/iam/iam
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/concepts/iam/iam
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/concepts/iam/iam
  title: "Managed Service for Apache Spark Identity and Access Management roles and\
    \ permissions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Managed Service for Apache Spark Identity and Access Management roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
Identity and Access Management (IAM) lets you control
user and group access to project resources. This document focuses on
the IAM permissions relevant to Managed Service for Apache Spark and the
IAM roles that grant those permissions.
Managed Service for Apache Spark permissions
Security requirement beginning August 3, 2020: Managed Service for Apache Spark users are required to have service account ActAs permission to deploy Managed Service for Apache Spark resources, for example, to create clusters and instantiate workflows. See Roles for service account authentication
for detailed information about service account permissions.
Opt-in for existing Managed Service for Apache Spark users: Existing Managed Service for Apache Spark users as of August 3, 2020 can opt in to this security requirement (see
Securing Managed Service for Apache Spark,
Dataflow, and Cloud Data Fusion ).
Managed Service for Apache Spark permissions allow users, including
service accounts ,
to perform actions on Managed Service for Apache Spark
clusters, jobs, operations, and workflow templates. For example, the dataproc.clusters.create
permission allows a user to create Managed Service for Apache Spark clusters in a project.
Typically, you don't grant permissions; instead, you grant
roles , which include one or more permissions.
The following tables list the permissions necessary to call Managed Service for Apache Spark
APIs (methods). The tables are organized according to the APIs associated with
each Managed Service for Apache Spark resource (clusters, jobs, operations, and workflow templates).
Permission Scope: The scope of Managed Service for Apache Spark
permissions listed in the following tables is the containing Google Cloud
project ( cloud-platform scope). See
Service account permissions .
Examples:
dataproc.clusters.create permits the creation of
Managed Service for Apache Spark clusters in the containing project
dataproc.jobs.create permits the submission of Managed Service for Apache Spark
jobs to Managed Service for Apache Spark clusters in the containing project
dataproc.clusters.list permits the listing of details
of Managed Service for Apache Spark clusters in the containing project
Clusters methods required permissions
Method
Required permissions
projects.regions.clusters.create 1, 2
dataproc.clusters.create
projects.regions.clusters.get
dataproc.clusters.get
projects.regions.clusters.list
dataproc.clusters.list
projects.regions.clusters.patch 1, 2, 3
dataproc.clusters.update
projects.regions.clusters.delete 1
dataproc.clusters.delete
projects.regions.clusters.start
dataproc.clusters.start
projects.regions.clusters.stop
dataproc.clusters.stop
projects.regions.clusters.getIamPolicy
dataproc.clusters.getIamPolicy
projects.regions.clusters.setIamPolicy
dataproc.clusters.setIamPolicy
Notes:
The dataproc.operations.get permission is also required to get status
updates from Google Cloud CLI.
The dataproc.clusters.get permission is also required to get the result
of the operation from Google Cloud CLI.
dataproc.autoscalingPolicies.use permission is also required to
enable an autoscaling policy on a cluster.
Jobs methods required permissions
Method
Required permissions
projects.regions.jobs.submit 1, 2
dataproc.jobs.create dataproc.clusters.use
projects.regions.jobs.get
dataproc.jobs.get
projects.regions.jobs.list
dataproc.jobs.list
projects.regions.jobs.cancel 1
dataproc.jobs.cancel
projects.regions.jobs.patch 1
dataproc.jobs.update
projects.regions.jobs.delete 1
dataproc.jobs.delete
projects.regions.jobs.getIamPolicy
dataproc.jobs.getIamPolicy
projects.regions.jobs.setIamPolicy
dataproc.jobs.setIamPolicy
Notes:
The Google Cloud CLI also requires dataproc.jobs.get
permission for the jobs submit , jobs wait , jobs update , jobs delete ,
and jobs kill commands.
The gcloud CLI also requires dataproc.clusters.get
permission to submit jobs. For an example of setting
the permissions necessary for a user to run gcloud dataproc jobs submit on a
cluster using Managed Service for Apache Spark Granular IAM (see
Submitting Jobs with Granular IAM ).
Operations methods required permissions
Method
Required permissions
projects.regions.operations.get
dataproc.operations.get
projects.regions.operations.list
dataproc.operations.list
projects.regions.operations.cancel
dataproc.operations.cancel
projects.regions.operations.delete
dataproc.operations.delete
projects.regions.operations.getIamPolicy
dataproc.operations.getIamPolicy
projects.regions.operations.setIamPolicy
dataproc.operations.setIamPolicy
Workflow templates methods required permissions
Method
Required permissions
projects.regions.workflowTemplates.instantiate
dataproc.workflowTemplates.instantiate
projects.regions.workflowTemplates.instantiateInline
dataproc.workflowTemplates.instantiateInline
projects.regions.workflowTemplates.create
dataproc.workflowTemplates.create
projects.regions.workflowTemplates.get
dataproc.workflowTemplates.get
projects.regions.workflowTemplates.list
dataproc.workflowTemplates.list
projects.regions.workflowTemplates.update
dataproc.workflowTemplates.update
projects.regions.workflowTemplates.delete
dataproc.workflowTemplates.delete
projects.regions.workflowTemplates.getIamPolicy
dataproc.workflowTemplates.getIamPolicy
projects.regions.workflowTemplates.setIamPolicy
dataproc.workflowTemplates.setIamPolicy
Notes:
Workflow Template permissions are independent of Cluster and Job permissions.
A user without create cluster or submit job permissions may create and
instantiate a Workflow Template.
The Google Cloud CLI additionally requires
dataproc.operations.get permission to poll for workflow completion.
The dataproc.operations.cancel permission is required to cancel a running
workflow.
Autoscaling policies methods required permissions
Method
Required permissions
projects.regions.autoscalingPolicies.create
dataproc.autoscalingPolicies.create
projects.regions.autoscalingPolicies.get
dataproc.autoscalingPolicies.get
projects.regions.autoscalingPolicies.list
dataproc.autoscalingPolicies.list
projects.regions.autoscalingPolicies.update
dataproc.autoscalingPolicies.update
projects.regions.autoscalingPolicies.delete
dataproc.autoscalingPolicies.delete
projects.regions.autoscalingPolicies.getIamPolicy
dataproc.autoscalingPolicies.getIamPolicy
projects.regions.autoscalingPolicies.setIamPolicy
dataproc.autoscalingPolicies.setIamPolicy
Notes:
dataproc.autoscalingPolicies.use permission is required to
enable an autoscaling policy on a cluster with a clusters.patch method
request.
Node groups methods required permissions
Method
Required permissions
projects.regions.nodeGroups.create
dataproc.nodeGroups.create
projects.regions.nodeGroups.get
dataproc.nodeGroups.get
projects.regions.nodeGroups.resize
dataproc.nodeGroups.update
Managed Service for Apache Spark roles
Managed Service for Apache Spark IAM roles
are a bundle of one or more permissions .
You grant roles to users or groups to allow them to perform actions on the
Managed Service for Apache Spark resources in a project. For example,
the Managed Service for Apache Spark Viewer role contain
get and list permissions, which allow a user to get and list
Managed Service for Apache Spark clusters, jobs, and operations in a project.
The following table lists roles that contain the permissions required to
create and manage Managed Service for Apache Spark clusters.
Grant role to
Roles
User
Grant users the following roles: Dataproc Editor role to create and manage Managed Service for Apache Spark clusters.
Service Account User role on the Managed Service for Apache Spark VM service account .
Service account
Grant the Managed Service for Apache Spark VM service account the Dataproc Worker role.
Note the following:
You might need to grant the
Managed Service for Apache Spark VM service account additional predefined or
custom roles that contain the permissions necessary for other operations,
such as reading and writing data from and to Cloud Storage, BigQuery,
Cloud Logging, and other Google Cloud resources.
In some projects, the
Managed Service for Apache Spark VM service account
may have been automatically granted the project
Editor role, which includes the Managed Service for Apache Spark
Worker role permissions plus additional permissions not needed for
Managed Service for Apache Spark data plane operations. To follow the security best
practice principle of least privilege ,
replace the Editor role with the Managed Service for Apache Spark Worker role (see
View VM service account roles ).
Do you need to grant roles?
Depending on your organization policy, a required role may already have been
granted.
Check roles granted to users
To see if a user has been granted a role, follow the instructions in
Manage access to projects, folders, and organizations > View current access .
Check roles granted to service accounts
To see if the a service account has been granted a role, see
View and manage IAM service account roles .
Check roles granted on a service account
To see if a user has been granted a role on a service account,
follow the instructions in
Manage access to service accounts > View current access .
Look up Managed Service for Apache Spark roles and permissions
You can use the following section to look up Managed Service for Apache Spark roles and
permissions.
Role
Permissions
Dataproc Administrator
( roles/ dataproc.admin )
Full control of Dataproc resources.
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
compute.machineTypes.*
compute.machineTypes.get
compute.machineTypes.list
compute.networks.get
compute.networks.list
compute.projects.get
compute.regions.*
compute.regions.get
compute.regions.list
compute.zones.*
compute.zones.get
compute.zones.list
dataproc.autoscalingPolicies.*
dataproc. autoscalingPolicies. create
dataproc. autoscalingPolicies. delete
dataproc. autoscalingPolicies. get
dataproc. autoscalingPolicies. getIamPolicy
dataproc. autoscalingPolicies. list
dataproc. autoscalingPolicies. setIamPolicy
dataproc. autoscalingPolicies. update
dataproc. autoscalingPolicies. use
dataproc.batches.*
dataproc.batches.analyze
dataproc.batches.cancel
dataproc.batches.create
dataproc.batches.delete
dataproc.batches.get
dataproc.batches.list
dataproc. batches. sparkApplicationRead
dataproc. batches. sparkApplicationWrite
dataproc.clusters.*
dataproc.clusters.create
dataproc.clusters.delete
dataproc.clusters.get
dataproc.clusters.getIamPolicy
dataproc.clusters.list
dataproc.clusters.repair
dataproc.clusters.setIamPolicy
dataproc.clusters.start
dataproc.clusters.stop
dataproc.clusters.update
dataproc.clusters.use
dataproc.jobs.*
dataproc.jobs.cancel
dataproc.jobs.create
dataproc.jobs.delete
dataproc.jobs.get
dataproc.jobs.getIamPolicy
dataproc.jobs.list
dataproc.jobs.setIamPolicy
dataproc.jobs.update
dataproc.nodeGroups.*
dataproc.nodeGroups.create
dataproc.nodeGroups.get
dataproc.nodeGroups.update
dataproc.operations.*
dataproc.operations.cancel
dataproc.operations.delete
dataproc.operations.get
dataproc. operations. getIamPolicy
dataproc.operations.list
dataproc. operations. setIamPolicy
dataproc.sessionTemplates.*
dataproc. sessionTemplates. create
dataproc. sessionTemplates. delete
dataproc.sessionTemplates.get
dataproc.sessionTemplates.list
dataproc. sessionTemplates. update
dataproc.sessions.*
dataproc.sessions.create
dataproc.sessions.delete
dataproc.sessions.get
dataproc.sessions.list
dataproc. sessions. sparkApplicationRead
dataproc. sessions. sparkApplicationWrite
dataproc.sessions.terminate
dataproc.workflowTemplates.*
dataproc. workflowTemplates. create
dataproc. workflowTemplates. delete
dataproc.workflowTemplates.get
dataproc. workflowTemplates. getIamPolicy
dataproc. workflowTemplates. instantiate
dataproc. workflowTemplates. instantiateInline
dataproc. workflowTemplates. list
dataproc. workflowTemplates. setIamPolicy
dataproc. workflowTemplates. update
dataprocrm.nodePools.*
dataprocrm.nodePools.create
dataprocrm.nodePools.delete
dataprocrm. nodePools. deleteNodes
dataprocrm.nodePools.get
dataprocrm.nodePools.list
dataprocrm.nodePools.resize
dataprocrm.nodes.get
dataprocrm.nodes.heartbeat
dataprocrm.nodes.list
dataprocrm.nodes.update
dataprocrm.operations.get
dataprocrm.operations.list
dataprocrm.workloads.*
dataprocrm.workloads.cancel
dataprocrm.workloads.create
dataprocrm.workloads.delete
dataprocrm.workloads.get
dataprocrm.workloads.list
resourcemanager.projects.get
resourcemanager.projects.list
Dataproc Editor
( roles/ dataproc.editor )
Provides the permissions necessary for viewing the resources required to
manage Managed Service for Apache Spark, including machine types, networks, projects,
and zones.
Lowest-level resources where you can grant this role:
Cluster
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
compute.machineTypes.*
compute.machineTypes.get
compute.machineTypes.list
compute.networks.get
compute.networks.list
compute.projects.get
compute.regions.*
compute.regions.get
compute.regions.list
compute.zones.*
compute.zones.get
compute.zones.list
dataproc. autoscalingPolicies. create
dataproc. autoscalingPolicies. delete
dataproc. autoscalingPolicies. get
dataproc. autoscalingPolicies. list
dataproc. autoscalingPolicies. update
dataproc. autoscalingPolicies. use
dataproc.batches.*
dataproc.batches.analyze
dataproc.batches.cancel
dataproc.batches.create
dataproc.batches.delete
dataproc.batches.get
dataproc.batches.list
dataproc. batches. sparkApplicationRead
dataproc. batches. sparkApplicationWrite
dataproc.clusters.create
dataproc.clusters.delete
dataproc.clusters.get
dataproc.clusters.list
dataproc.clusters.repair
dataproc.clusters.start
dataproc.clusters.stop
dataproc.clusters.update
dataproc.clusters.use
dataproc.jobs.cancel
dataproc.jobs.create
dataproc.jobs.delete
dataproc.jobs.get
dataproc.jobs.list
dataproc.jobs.update
dataproc.nodeGroups.*
dataproc.nodeGroups.create
dataproc.nodeGroups.get
dataproc.nodeGroups.update
dataproc.operations.cancel
dataproc.operations.delete
dataproc.operations.get
dataproc.operations.list
dataproc.sessionTemplates.*
dataproc. sessionTemplates. create
dataproc. sessionTemplates. delete
dataproc.sessionTemplates.get
dataproc.sessionTemplates.list
dataproc. sessionTemplates. update
dataproc.sessions.*
dataproc.sessions.create
dataproc.sessions.delete
dataproc.sessions.get
dataproc.sessions.list
dataproc. sessions. sparkApplicationRead
dataproc. sessions. sparkApplicationWrite
dataproc.sessions.terminate
dataproc. workflowTemplates. create
dataproc. workflowTemplates. delete
dataproc.workflowTemplates.get
dataproc. workflowTemplates. instantiate
dataproc. workflowTemplates. instantiateInline
dataproc. workflowTemplates. list
dataproc. workflowTemplates. update
dataprocrm.nodePools.*
dataprocrm.nodePools.create
dataprocrm.nodePools.delete
dataprocrm. nodePools. deleteNodes
dataprocrm.nodePools.get
dataprocrm.nodePools.list
dataprocrm.nodePools.resize
dataprocrm.nodes.get
dataprocrm.nodes.heartbeat
dataprocrm.nodes.list
dataprocrm.nodes.update
dataprocrm.operations.get
dataprocrm.operations.list
dataprocrm.workloads.*
dataprocrm.workloads.cancel
dataprocrm.workloads.create
dataprocrm.workloads.delete
dataprocrm.workloads.get
dataprocrm.workloads.list
resourcemanager.projects.get
resourcemanager.projects.list
Dataproc Viewer
( roles/ dataproc.viewer )
Provides read-only access to Managed Service for Apache Spark resources.
Lowest-level resources where you can grant this role:
Cluster
compute.machineTypes.get
compute.regions.*
compute.regions.get
compute.regions.list
compute.zones.*
compute.zones.get
compute.zones.list
dataproc. autoscalingPolicies. get
dataproc. autoscalingPolicies. list
dataproc.batches.analyze
dataproc.batches.get
dataproc.batches.list
dataproc. batches. sparkApplicationRead
dataproc.clusters.get
dataproc.clusters.list
dataproc.jobs.get
dataproc.jobs.list
dataproc.nodeGroups.get
dataproc.operations.get
dataproc.operations.list
dataproc.sessionTemplates.get
dataproc.sessionTemplates.list
dataproc.sessions.get
dataproc.sessions.list
dataproc. sessions. sparkApplicationRead
dataproc.workflowTemplates.get
dataproc. workflowTemplates. list
resourcemanager.projects.get
resourcemanager.projects.list
Dataproc Hub Agent
( roles/ dataproc.hubAgent )
Allows management of Dataproc resources. Intended for service accounts running Dataproc Hub instances.
compute.instances.get
compute.instances.setMetadata
compute.instances.setTags
compute.zoneOperations.get
compute.zones.list
dataproc. autoscalingPolicies. get
dataproc. autoscalingPolicies. list
dataproc. autoscalingPolicies. use
dataproc.clusters.create
dataproc.clusters.delete
dataproc.clusters.get
dataproc.clusters.list
dataproc.clusters.repair
dataproc.clusters.update
dataproc.operations.cancel
dataproc.operations.delete
dataproc.operations.get
dataproc.operations.list
iam.serviceAccounts.actAs
iam.serviceAccounts.get
iam.serviceAccounts.list
logging.buckets.get
logging.buckets.list
logging.exclusions.get
logging.exclusions.list
logging.links.get
logging.links.list
logging.locations.*
logging.locations.get
logging.locations.list
logging.logEntries.create
logging.logEntries.list
logging.logEntries.route
logging.logMetrics.get
logging.logMetrics.list
logging.logScopes.get
logging.logScopes.list
logging.logServiceIndexes.list
logging.logServices.list
logging.logs.list
logging.operations.get
logging.operations.list
logging.queries.getShared
logging.queries.listShared
logging.queries.usePrivate
logging.sinks.get
logging.sinks.list
logging.usage.get
logging.views.get
logging.views.list
observability.scopes.get
resourcemanager.projects.get
resourcemanager.projects.list
storage.buckets.get
storage.objects.get
storage.objects.list
Dataproc Serverless Editor
( roles/ dataproc.serverlessEditor )
Permissions needed to run serverless sessions and batches as a user
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
compute.projects.get
compute.regions.*
compute.regions.get
compute.regions.list
compute.zones.*
compute.zones.get
compute.zones.list
dataproc.batches.*
dataproc.batches.analyze
dataproc.batches.cancel
dataproc.batches.create
dataproc.batches.delete
dataproc.batches.get
dataproc.batches.list
dataproc. batches. sparkApplicationRead
dataproc. batches. sparkApplicationWrite
dataproc.operations.cancel
dataproc.operations.delete
dataproc.operations.get
dataproc.operations.list
dataproc.sessionTemplates.*
dataproc. sessionTemplates. create
dataproc. sessionTemplates. delete
dataproc.sessionTemplates.get
dataproc.sessionTemplates.list
dataproc. sessionTemplates. update
dataproc.sessions.*
dataproc.sessions.create
dataproc.sessions.delete
dataproc.sessions.get
dataproc.sessions.list
dataproc. sessions. sparkApplicationRead
dataproc. sessions. sparkApplicationWrite
dataproc.sessions.terminate
dataprocrm.nodePools.*
dataprocrm.nodePools.create
dataprocrm.nodePools.delete
dataprocrm. nodePools. deleteNodes
dataprocrm.nodePools.get
dataprocrm.nodePools.list
dataprocrm.nodePools.resize
dataprocrm.nodes.get
dataprocrm.nodes.heartbeat
dataprocrm.nodes.list
dataprocrm.nodes.update
dataprocrm.operations.get
dataprocrm.operations.list
dataprocrm.workloads.*
dataprocrm.workloads.cancel
dataprocrm.workloads.create
dataprocrm.workloads.delete
dataprocrm.workloads.get
dataprocrm.workloads.list
resourcemanager.projects.get
resourcemanager.projects.list
Dataproc Serverless Node.
( roles/ dataproc.serverlessNode )
Node access to Dataproc Serverless sessions and batches. Intended for service accounts.
dataproc. batches. sparkApplicationWrite
dataproc. sessions. sparkApplicationRead
dataproc. sessions. sparkApplicationWrite
dataprocrm.nodePools.*
dataprocrm.nodePools.create
dataprocrm.nodePools.delete
dataprocrm. nodePools. deleteNodes
dataprocrm.nodePools.get
dataprocrm.nodePools.list
dataprocrm.nodePools.resize
dataprocrm.nodes.list
dataprocrm.operations.get
Dataproc Serverless Viewer
( roles/ dataproc.serverlessViewer )
Permissions needed to view serverless sessions and batches
compute.projects.get
compute.regions.*
compute.regions.get
compute.regions.list
compute.zones.*
compute.zones.get
compute.zones.list
dataproc.batches.get
dataproc.batches.list
dataproc.sessionTemplates.get
dataproc.sessionTemplates.list
dataproc.sessions.get
dataproc.sessions.list
resourcemanager.projects.get
resourcemanager.projects.list
Dataproc Worker
( roles/ dataproc.worker )
Provides worker access to Managed Service for Apache Spark resources. Intended for service accounts.
cloudprofiler.profiles.create
cloudprofiler.profiles.update
datalineage. locations. processOpenLineageMessage
dataproc.agents.*
dataproc.agents.create
dataproc.agents.delete
dataproc.agents.get
dataproc.agents.list
dataproc.agents.update
dataproc. batches. sparkApplicationWrite
dataproc. sessions. sparkApplicationWrite
dataproc.tasks.*
dataproc.tasks.lease
dataproc. tasks. listInvalidatedLeases
dataproc.tasks.reportStatus
dataprocrm.nodePools.*
dataprocrm.nodePools.create
dataprocrm.nodePools.delete
dataprocrm. nodePools. deleteNodes
dataprocrm.nodePools.get
dataprocrm.nodePools.list
dataprocrm.nodePools.resize
dataprocrm.nodes.get
dataprocrm.nodes.heartbeat
dataprocrm.nodes.list
dataprocrm. nodes. mintOAuthToken
dataprocrm.operations.get
logging.logEntries.create
logging.logEntries.route
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring.timeSeries.create
storage.buckets.get
storage.folders.*
storage.folders.create
storage.folders.delete
storage.folders.get
storage.folders.list
storage.folders.rename
storage.managedFolders.create
storage.managedFolders.delete
storage.managedFolders.get
storage.managedFolders.list
storage.multipartUploads.*
storage.multipartUploads.abort
storage. multipartUploads. create
storage.multipartUploads.list
storage. multipartUploads. listParts
storage.objects.create
storage.objects.createContext
storage.objects.delete
storage.objects.deleteContext
storage.objects.get
storage.objects.getIamPolicy
storage.objects.list
storage. objects. overrideUnlockedRetention
storage.objects.restore
storage.objects.setIamPolicy
storage.objects.setRetention
storage.objects.update
storage.objects.updateContext
telemetry.metrics.write
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Dataproc Service Agent
( roles/ dataproc.serviceAgent )
Gives Dataproc Service Account access to service accounts, compute resources, storage resources, and kubernetes resources. Includes access to service accounts.
Warning: Do not grant service agent roles to any principals except
service agents .
backupdr. backupPlanAssociations. createForComputeDisk
backupdr. backupPlanAssociations. createForComputeInstance
backupdr. backupPlanAssociations. deleteForComputeDisk
backupdr. backupPlanAssociations. deleteForComputeInstance
backupdr. backupPlanAssociations. fetchForComputeDisk
backupdr. backupPlanAssociations. getForComputeDisk
backupdr. backupPlanAssociations. list
backupdr. backupPlanAssociations. triggerBackupForComputeDisk
backupdr. backupPlanAssociations. triggerBackupForComputeInstance
backupdr. backupPlanAssociations. updateForComputeDisk
backupdr. backupPlanAssociations. updateForComputeInstance
backupdr.backupPlans.get
backupdr.backupPlans.list
backupdr. backupPlans. useForComputeDisk
backupdr. backupPlans. useForComputeInstance
backupdr.backupVaults.get
backupdr.backupVaults.list
backupdr.locations.list
backupdr.operations.get
backupdr.operations.list
backupdr. serviceConfig. initialize
compute.acceleratorTypes.*
compute.acceleratorTypes.get
compute.acceleratorTypes.list
compute. addresses. createInternal
compute. addresses. deleteInternal
compute.addresses.get
compute.addresses.list
compute. addresses. listEffectiveTags
compute. addresses. listTagBindings
compute.addresses.use
compute.addresses.useInternal
compute.autoscalers.*
compute.autoscalers.create
compute.autoscalers.delete
compute.autoscalers.get
compute.autoscalers.list
compute.autoscalers.update
compute.diskSettings.get
compute.diskTypes.*
compute.diskTypes.get
compute.diskTypes.list
compute.disks.create
compute.disks.createSnapshot
compute.disks.createTagBinding
compute.disks.delete
compute.disks.get
compute.disks.list
compute.disks.resize
compute.disks.setLabels
compute. disks. startAsyncReplication
compute. disks. stopAsyncReplication
compute. disks. stopGroupAsyncReplication
compute.disks.update
compute.disks.updateKmsKey
compute.disks.use
compute.disks.useReadOnly
compute.firewalls.get
compute.firewalls.list
compute.globalAddresses.get
compute.globalAddresses.list
compute. globalAddresses. listEffectiveTags
compute. globalAddresses. listTagBindings
compute.globalAddresses.use
compute. globalNetworkEndpointGroups.*
compute. globalNetworkEndpointGroups. attachNetworkEndpoints
compute. globalNetworkEndpointGroups. create
compute. globalNetworkEndpointGroups. createTagBinding
compute. globalNetworkEndpointGroups. delete
compute. globalNetworkEndpointGroups. deleteTagBinding
compute. globalNetworkEndpointGroups. detachNetworkEndpoints
compute. globalNetworkEndpointGroups. get
compute. globalNetworkEndpointGroups. list
compute. globalNetworkEndpointGroups. listEffectiveTags
compute. globalNetworkEndpointGroups. listTagBindings
compute. globalNetworkEndpointGroups. use
compute.globalOperations.get
compute.globalOperations.list
compute.images.get
compute.images.getFromFamily
compute.images.list
compute.images.useReadOnly
compute. instanceGroupManagers.*
compute. instanceGroupManagers. create
compute. instanceGroupManagers. createTagBinding
compute. instanceGroupManagers. delete
compute. instanceGroupManagers. deleteTagBinding
compute. instanceGroupManagers. get
compute. instanceGroupManagers. list
compute. instanceGroupManagers. listEffectiveTags
compute. instanceGroupManagers. listTagBindings
compute. instanceGroupManagers. update
compute. instanceGroupManagers. use
compute.instanceGroups.*
compute.instanceGroups.create
compute. instanceGroups. createTagBinding
compute.instanceGroups.delete
compute. instanceGroups. deleteTagBinding
compute.instanceGroups.get
compute.instanceGroups.list
compute. instanceGroups. listEffectiveTags
compute. instanceGroups. listTagBindings
compute.instanceGroups.update
compute.instanceGroups.use
compute.instanceSettings.get
compute.instanceTemplates.*
compute. instanceTemplates. create
compute. instanceTemplates. delete
compute.instanceTemplates.get
compute. instanceTemplates. getIamPolicy
compute.instanceTemplates.list
compute. instanceTemplates. setIamPolicy
compute. instanceTemplates. useReadOnly
compute.instances.*
compute. instances. addAccessConfig
compute. instances. addNetworkInterface
compute. instances. addResourcePolicies
compute.instances.attachDisk
compute.instances.create
compute. instances. createTagBinding
compute.instances.delete
compute. instances. deleteAccessConfig
compute. instances. deleteNetworkInterface
compute. instances. deleteTagBinding
compute.instances.detachDisk
compute.instances.get
compute. instances. getEffectiveFirewalls
compute. instances. getGuestAttributes
compute.instances.getIamPolicy
compute. instances. getScreenshot
compute. instances. getSerialPortOutput
compute. instances. getShieldedInstanceIdentity
compute. instances. getShieldedVmIdentity
compute.instances.list
compute. instances. listEffectiveTags
compute. instances. listReferrers
compute. instances. listTagBindings
compute.instances.osAdminLogin
compute.instances.osLogin
compute. instances. pscInterfaceCreate
compute. instances. removeResourcePolicies
compute.instances.reset
compute.instances.resume
compute. instances. sendDiagnosticInterrupt
compute. instances. setDeletionProtection
compute. instances. setDiskAutoDelete
compute.instances.setIamPolicy
compute.instances.setLabels
compute. instances. setMachineResources
compute. instances. setMachineType
compute.instances.setMetadata
compute. instances. setMinCpuPlatform
compute.instances.setName
compute. instances. setScheduling
compute. instances. setSecurityPolicy
compute. instances. setServiceAccount
compute. instances. setShieldedInstanceIntegrityPolicy
compute. instances. setShieldedVmIntegrityPolicy
compute.instances.setTags
compute. instances. simulateMaintenanceEvent
compute.instances.start
compute. instances. startWithEncryptionKey
compute.instances.stop
compute.instances.suspend
compute.instances.update
compute. instances. updateAccessConfig
compute. instances. updateDisplayDevice
compute. instances. updateNetworkInterface
compute. instances. updateSecurity
compute. instances. updateShieldedInstanceConfig
compute. instances. updateShieldedVmConfig
compute.instances.use
compute.instances.useReadOnly
compute.licenses.get
compute.licenses.list
compute. licenses. listEffectiveTags
compute. licenses. listTagBindings
compute.machineImages.*
compute.machineImages.create
compute. machineImages. createTagBinding
compute.machineImages.delete
compute. machineImages. deleteTagBinding
compute.machineImages.get
compute. machineImages. getIamPolicy
compute.machineImages.list
compute. machineImages. listEffectiveTags
compute. machineImages. listTagBindings
compute. machineImages. setIamPolicy
compute. machineImages. setLabels
compute. machineImages. useReadOnly
compute.machineTypes.*
compute.machineTypes.get
compute.machineTypes.list
compute.multiMig.*
compute.multiMig.create
compute.multiMig.delete
compute.multiMig.get
compute.multiMig.list
compute.multiMigMembers.*
compute.multiMigMembers.get
compute.multiMigMembers.list
compute. networkEndpointGroups.*
compute. networkEndpointGroups. attachNetworkEndpoints
compute. networkEndpointGroups. create
compute. networkEndpointGroups. createTagBinding
compute. networkEndpointGroups. delete
compute. networkEndpointGroups. deleteTagBinding
compute. networkEndpointGroups. detachNetworkEndpoints
compute. networkEndpointGroups. get
compute. networkEndpointGroups. list
compute. networkEndpointGroups. listEffectiveTags
compute. networkEndpointGroups. listTagBindings
compute. networkEndpointGroups. use
compute.networks.get
compute. networks. getEffectiveFirewalls
compute.networks.list
compute. networks. listEffectiveTags
compute. networks. listTagBindings
compute. networks. setFirewallPolicy
compute.networks.use
compute.networks.useExternalIp
compute.nodeGroups.get
compute.nodeTypes.get
compute.projects.get
compute. regionFirewallPolicies. create
compute. regionFirewallPolicies. createTagBinding
compute. regionFirewallPolicies. delete
compute. regionFirewallPolicies. deleteTagBinding
compute. regionFirewallPolicies. get
compute. regionFirewallPolicies. update
compute. regionFirewallPolicies. use
compute. regionNetworkEndpointGroups.*
compute. regionNetworkEndpointGroups. attachNetworkEndpoints
compute. regionNetworkEndpointGroups. create
compute. regionNetworkEndpointGroups. createTagBinding
compute. regionNetworkEndpointGroups. delete
compute. regionNetworkEndpointGroups. deleteTagBinding
compute. regionNetworkEndpointGroups. detachNetworkEndpoints
compute. regionNetworkEndpointGroups. get
compute. regionNetworkEndpointGroups. list
compute. regionNetworkEndpointGroups. listEffectiveTags
compute. regionNetworkEndpointGroups. listTagBindings
compute. regionNetworkEndpointGroups. use
compute.regionOperations.get
compute.regionOperations.list
compute.regions.*
compute.regions.get
compute.regions.list
compute.reservationBlocks.get
compute.reservationBlocks.list
compute.reservationSubBlocks.*
compute. reservationSubBlocks. get
compute. reservationSubBlocks. list
compute. reservationSubBlocks. performMaintenance
compute. reservationSubBlocks. reportFaulty
compute.reservations.get
compute.reservations.list
compute. reservations. listEffectiveTags
compute. reservations. listTagBindings
compute.resourcePolicies.list
compute. resourcePolicies. useReadOnly
compute.storagePools.get
compute.storagePools.list
compute. storagePools. listEffectiveTags
compute. storagePools. listTagBindings
compute.storagePools.use
compute.subnetworks.get
compute.subnetworks.list
compute. subnetworks. listEffectiveTags
compute. subnetworks. listTagBindings
compute. subnetworks. setPrivateIpGoogleAccess
compute.subnetworks.use
compute. subnetworks. useExternalIp
compute.targetPools.get
compute.targetPools.list
compute. targetPools. listEffectiveTags
compute. targetPools. listTagBindings
compute.zoneOperations.get
compute.zoneOperations.list
compute.zones.*
compute.zones.get
compute.zones.list
container. clusterRoleBindings.*
container. clusterRoleBindings. create
container. clusterRoleBindings. delete
container. clusterRoleBindings. get
container. clusterRoleBindings. list
container. clusterRoleBindings. update
container.clusterRoles.*
container.clusterRoles.bind
container.clusterRoles.create
container.clusterRoles.delete
container. clusterRoles. escalate
container.clusterRoles.get
container.clusterRoles.list
container.clusterRoles.update
container.clusters.connect
container.clusters.get
container.clusters.update
container. customResourceDefinitions. create
container. customResourceDefinitions. delete
container. customResourceDefinitions. get
container. customResourceDefinitions. list
container. customResourceDefinitions. update
container.namespaces.create
container.namespaces.delete
container.namespaces.get
container.namespaces.list
container.namespaces.update
container.operations.get
container.roleBindings.*
container.roleBindings.create
container.roleBindings.delete
container.roleBindings.get
container.roleBindings.list
container.roleBindings.update
container.roles.bind
container.roles.escalate
dataproc. autoscalingPolicies. create
dataproc. autoscalingPolicies. delete
dataproc. autoscalingPolicies. get
dataproc. autoscalingPolicies. getIamPolicy
dataproc. autoscalingPolicies. list
dataproc. autoscalingPolicies. update
dataproc. autoscalingPolicies. use
dataproc.clusters.*
dataproc.clusters.create
dataproc.clusters.delete
dataproc.clusters.get
dataproc.clusters.getIamPolicy
dataproc.clusters.list
dataproc.clusters.repair
dataproc.clusters.setIamPolicy
dataproc.clusters.start
dataproc.clusters.stop
dataproc.clusters.update
dataproc.clusters.use
dataproc.jobs.*
dataproc.jobs.cancel
dataproc.jobs.create
dataproc.jobs.delete
dataproc.jobs.get
dataproc.jobs.getIamPolicy
dataproc.jobs.list
dataproc.jobs.setIamPolicy
dataproc.jobs.update
dataproc.nodeGroups.*
dataproc.nodeGroups.create
dataproc.nodeGroups.get
dataproc.nodeGroups.update
dataproc.operations.cancel
dataproc.sessionTemplates.get
dataproc.sessions.*
dataproc.sessions.create
dataproc.sessions.delete
dataproc.sessions.get
dataproc.sessions.list
dataproc. sessions. sparkApplicationRead
dataproc. sessions. sparkApplicationWrite
dataproc.sessions.terminate
dataprocrm.nodePools.*
dataprocrm.nodePools.create
dataprocrm.nodePools.delete
dataprocrm. nodePools. deleteNodes
dataprocrm.nodePools.get
dataprocrm.nodePools.list
dataprocrm.nodePools.resize
dataprocrm.nodes.*
dataprocrm.nodes.get
dataprocrm.nodes.heartbeat
dataprocrm.nodes.list
dataprocrm. nodes. mintOAuthToken
dataprocrm.nodes.update
dataprocrm.operations.cancel
dataprocrm.operations.get
dataprocrm.operations.list
dataprocrm.workloads.*
dataprocrm.workloads.cancel
dataprocrm.workloads.create
dataprocrm.workloads.delete
dataprocrm.workloads.get
dataprocrm.workloads.list
firebase.projects.get
iam.serviceAccounts.actAs
iam. serviceAccounts. getAccessToken
metastore.services.get
monitoring.timeSeries.create
orgpolicy.policy.get
recommender. iamPolicyInsights.*
recommender. iamPolicyInsights. get
recommender. iamPolicyInsights. list
recommender. iamPolicyInsights. update
recommender. iamPolicyRecommendations.*
recommender. iamPolicyRecommendations. get
recommender. iamPolicyRecommendations. list
recommender. iamPolicyRecommendations. update
recommender. storageBucketSoftDeleteInsights.*
recommender. storageBucketSoftDeleteInsights. get
recommender. storageBucketSoftDeleteInsights. list
recommender. storageBucketSoftDeleteInsights. update
recommender. storageBucketSoftDeleteRecommendations.*
recommender. storageBucketSoftDeleteRecommendations. get
recommender. storageBucketSoftDeleteRecommendations. list
recommender. storageBucketSoftDeleteRecommendations. update
resourcemanager. hierarchyNodes. listEffectiveTags
resourcemanager.projects.get
resourcemanager.projects.list
resourcemanager.tagKeys.create
resourcemanager.tagKeys.get
resourcemanager. tagKeys. getIamPolicy
resourcemanager. tagKeys. setIamPolicy
resourcemanager. tagValueBindings.*
resourcemanager. tagValueBindings. create
resourcemanager. tagValueBindings. delete
resourcemanager. tagValues. create
resourcemanager.tagValues.get
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.quotas.get
serviceusage.services.get
serviceusage.services.list
serviceusage.services.use
serviceusage.values.test
storage.anywhereCaches.*
storage.anywhereCaches.create
storage.anywhereCaches.disable
storage.anywhereCaches.get
storage.anywhereCaches.list
storage.anywhereCaches.pause
storage.anywhereCaches.resume
storage.anywhereCaches.update
storage.bucketOperations.*
storage. bucketOperations. cancel
storage.bucketOperations.get
storage.bucketOperations.list
storage.buckets.*
storage.buckets.create
storage. buckets. createTagBinding
storage.buckets.delete
storage. buckets. deleteTagBinding
storage. buckets. enableObjectRetention
storage.buckets.get
storage.buckets.getIamPolicy
storage.buckets.getIpFilter
storage. buckets. getObjectInsights
storage.buckets.list
storage. buckets. listEffectiveTags
storage. buckets. listTagBindings
storage.buckets.relocate
storage.buckets.restore
storage.buckets.setIamPolicy
storage.buckets.setIpFilter
storage.buckets.update
storage. buckets. viewIntelligenceDetails
storage.folders.*
storage.folders.create
storage.folders.delete
storage.folders.get
storage.folders.list
storage.folders.rename
storage.intelligenceConfigs.*
storage. intelligenceConfigs. get
storage. intelligenceConfigs. update
storage.managedFolders.*
storage.managedFolders.create
storage.managedFolders.delete
storage.managedFolders.get
storage. managedFolders. getIamPolicy
storage.managedFolders.list
storage. managedFolders. setIamPolicy
storage.multipartUploads.*
storage.multipartUploads.abort
storage. multipartUploads. create
storage.multipartUploads.list
storage. multipartUploads. listParts
storage.objects.*
storage.objects.create
storage.objects.createContext
storage.objects.delete
storage.objects.deleteContext
storage.objects.get
storage.objects.getIamPolicy
storage.objects.list
storage.objects.move
storage. objects. overrideUnlockedRetention
storage.objects.restore
storage.objects.setIamPolicy
storage.objects.setRetention
storage.objects.update
storage.objects.updateContext
storagebatchoperations.*
storagebatchoperations. bucketOperations. get
storagebatchoperations. bucketOperations. list
storagebatchoperations. jobs. cancel
storagebatchoperations. jobs. create
storagebatchoperations. jobs. delete
storagebatchoperations. jobs. get
storagebatchoperations. jobs. list
storagebatchoperations. locations. get
storagebatchoperations. locations. list
storagebatchoperations. operations. cancel
storagebatchoperations. operations. delete
storagebatchoperations. operations. get
storagebatchoperations. operations. list
Notes:
compute permissions are needed or recommended to
create and view Managed Service for Apache Spark clusters when using the Google Cloud console
or the gcloud CLI Google Cloud CLI.
To allow a user to upload files, grant the Storage Object Creator role.
To allow a user to view job output, grant the Storage Object Viewer role.
A user must have monitoring.timeSeries.list permission in order to
view graphs on the Google Cloud console→Managed Service for Apache Spark→ Cluster details
Overview tab.
A user must have compute.instances.list permission
in order to view instance status and the master instance SSH menu on the
Google Cloud console→Managed Service for Apache Spark→ Cluster details
VM Instances tab. For information on Compute Engine roles, see
Compute Engine→Available IAM roles ).
To create a cluster with a user-specified service account, the specified
service account must have all permissions granted by the
Managed Service for Apache Spark Worker
role, which include access to the Managed Service for Apache Spark
staging and temp buckets .
Additional roles may be required depending on configured features.
See Create a cluster with a custom VM service account for
more information.
Project roles
You can also set permissions at the project level by using the IAM
Project roles. The following table lists permissions associated with
IAM Project roles:
Project Role
Permissions
Project Viewer
All project permissions for read-only actions that preserve state (get, list)
Project Editor
All Project Viewer permissions plus all project permissions for actions that modify state (create, delete, update, use, cancel, stop, start)
Project Owner
All Project Editor permissions plus permissions to manage access control for the project (get/set IamPolicy) and to set up project billing
IAM roles and Managed Service for Apache Spark operations summary
The following table lists Managed Service for Apache Spark operations associated with
project and Managed Service for Apache Spark roles.
Operation
Project Editor
Project Viewer
Managed Service for Apache Spark Admin
Managed Service for Apache Spark Editor
Managed Service for Apache Spark Viewer
Get/Set Managed Service for Apache Spark IAM permissions
No
No
Yes
No
No
Create cluster
Yes
No
Yes
Yes
No
List clusters
Yes
Yes
Yes
Yes
Yes
Get cluster details
Yes
Yes
Yes 1, 2
Yes 1, 2
Yes 1, 2
Update cluster
Yes
No
Yes
Yes
No
Delete cluster
Yes
No
Yes
Yes
No
Start/Stop cluster
Yes
No
Yes
Yes
No
Submit job
Yes
No
Yes 3
Yes 3
No
List jobs
Yes
Yes
Yes
Yes
Yes
Get job details
Yes
Yes
Yes 4
Yes 4
Yes 4
Cancel job
Yes
No
Yes
Yes
No
Delete job
Yes
No
Yes
Yes
No
List operations
Yes
Yes
Yes
Yes
Yes
Get operation details
Yes
Yes
Yes
Yes
Yes
Delete operation
Yes
No
Yes
Yes
No
Notes:
The performance graph is not available unless the user also has a
role with the monitoring.timeSeries.list permission.
The list of VMs in the cluster will not include status information
or an SSH link for the master instance unless the user also has a role with
the compute.instances.list permission.
Jobs that upload files require the user to have the Storage Object Creator
role or write access to the Managed Service for Apache Spark
staging bucket .
Job output is not available unless the user also has the Storage Object
Viewer role or has been granted read access to the staging bucket for
the project.
Managed Service for Apache Spark VM access scopes
VM Access scopes and IAM roles work together to limit VM access to Google Cloud
APIs. For example, if cluster VMs are granted only the
https://www.googleapis.com/auth/storage-full scope, applications running
on cluster VMs can call Cloud Storage APIs, but they are not able to
make requests to BigQuery, even if they are running as a VM service account
that had been granted a BigQuery role with broad permissions.
A best practice is to grant the broad cloud-platform scope
( https://www.googleapis.com/auth/cloud-platform )
to VMs, and then limit VM access by granting specific
IAM roles to the VM service account (see Scopes best practice ).
Note: cloud-platform scope is applied by default to
Managed Service for Apache Spark cluster VMs created with Managed Service for Apache Spark
image version 2.1 and higher.
Default Managed Service for Apache Spark VM scopes. If scopes are not
specified when a cluster is created (see
gcloud dataproc cluster create --scopes ),
Managed Service for Apache Spark VMs have the following default set of scopes:
https://www.googleapis.com/auth/cloud-platform (clusters created with image version 2.1+ ).
https://www.googleapis.com/auth/bigquery
https://www.googleapis.com/auth/bigtable.admin.table
https://www.googleapis.com/auth/bigtable.data
https://www.googleapis.com/auth/cloud.useraccounts.readonly
https://www.googleapis.com/auth/devstorage.full_control
https://www.googleapis.com/auth/devstorage.read_write
https://www.googleapis.com/auth/logging.write
If you specify scopes when creating a cluster,
cluster VMs will have the
scopes you specify and the following minimum set of
required scopes (even if you don't specify
them):
https://www.googleapis.com/auth/cloud-platform (clusters created with image version 2.1+ ).
https://www.googleapis.com/auth/cloud.useraccounts.readonly
https://www.googleapis.com/auth/devstorage.read_write
https://www.googleapis.com/auth/logging.write
IAM allow policy management
You grant IAM roles to principals using allow policies.
You can get and set allow policies using the Google Cloud console,
the IAM API, or the Google Cloud CLI.
For the Google Cloud console, see
Access control using the Google Cloud console .
For the API, see Access control using the API .
For the Google Cloud CLI, see Access control using the
Google Cloud CLI .
What's next
Learn about Managed Service for Apache Spark principals and roles
Learn about Managed Service for Apache Spark Granular IAM
Learn more about IAM .
Learn about Service accounts in Managed Service for Apache Spark
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
