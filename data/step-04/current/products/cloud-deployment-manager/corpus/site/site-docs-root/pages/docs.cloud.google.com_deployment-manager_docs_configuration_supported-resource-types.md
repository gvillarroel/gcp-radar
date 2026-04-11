---
title: "Supported resource types \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types
  title: "Supported resource types \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Reference
Send feedback
Supported resource types
Stay organized with collections
Save and categorize content based on your preferences.
Deployment Manager uses the underlying APIs of each Google Cloud service
to deploy your resources. For example, to create Compute Engine virtual machine
instances, Deployment Manager makes a call to the Compute Engine
API to create the instance, and then adds it to your deployment.
Note: If you want to create more types of resources in your deployments,
consider using Google Cloud type providers (beta) ,
which adds support for more Google Cloud resources. For a list of
supported type providers, see
Supported Google Cloud type providers .
Resources for project creation
If you are creating projects using Deployment Manager, you can use the
following virtual resource types to enable APIs in your project, or change the
billing information for your project.
Resource Type Description Example Reference
deploymentmanager.v2.virtual.enableService
Enable a service API. You must create a virtual resource for every API that you want to enable.
Example in GitHub
Documentation
deploymentmanager.v2.virtual.projectBillingInfo
Modify the billing information for the project.
Documentation
APIs for supported resources
The table below is a list of resource types that you can create in your
deployments. To determine the properties you can set in Deployment Manager
for a particular API, you must use the respective API's documentation as a guide.
For steps to use an API's resource representation to create your configuration,
see Declaring resource properties .
For examples of deployments that use these resources, see the
Deployment Manager GitHub Repository .
Note: Some of the following types have names which are similar to, but different
from, the names of their associated API collections. If you use the API
collection name instead of the type name provided by Deployment Manager (for
example, compute.v1.addresses instead of compute.v1.address ), you might
encounter unexpected behavior from your deployments, so be careful to ensure
that you use type names as defined by Deployment Manager.
For a full list of supported resource types, including resources that are
in alpha, run the types list
command in gcloud :
gcloud deployment - manager types list
Resource Type Reference
appengine.v1.version
Documentation
bigquery.v2.dataset
Documentation
bigquery.v2.table
Documentation
bigtableadmin.v2.instance
Documentation
bigtableadmin.v2.instance.table
Documentation
cloudresourcemanager.v1.project
Documentation
compute.beta.address
Documentation
compute.beta.autoscaler
Documentation
compute.beta.backendBucket
Documentation
compute.beta.backendService
Documentation
compute.beta.disk
Documentation
compute.beta.firewall
Documentation
compute.beta.forwardingRule
Documentation
compute.beta.globalAddress
Documentation
compute.beta.globalForwardingRule
Documentation
compute.beta.healthCheck
Documentation
compute.beta.httpHealthCheck
Documentation
compute.beta.httpsHealthCheck
Documentation
compute.beta.image
Documentation
compute.beta.instance
Documentation
compute.beta.instanceGroup
Documentation
compute.beta.instanceGroupManager
Documentation
compute.beta.instanceTemplate
Documentation
compute.beta.network
Documentation
compute.beta.regionAutoscaler
Documentation
compute.beta.regionBackendService
Documentation
compute.beta.regionInstanceGroup
Documentation
compute.beta.regionInstanceGroupManager
Documentation
compute.beta.route
Documentation
compute.beta.router
Documentation
compute.beta.sslCertificate
Documentation
compute.beta.subnetwork
Documentation
compute.beta.targetHttpProxy
Documentation
compute.beta.targetHttpsProxy
Documentation
compute.beta.targetInstance
Documentation
compute.beta.targetPool
Documentation
compute.beta.targetSslProxy
Documentation
compute.beta.targetVpnGateway
Documentation
compute.beta.urlMap
Documentation
compute.beta.vpnTunnel
Documentation
compute.beta.xpnHost
Documentation
compute.beta.xpnResource
Documentation
compute.v1.address
Documentation
compute.v1.autoscaler
Documentation
compute.v1.backendService
Documentation
compute.v1.disk
Documentation
compute.v1.firewall
Documentation
compute.v1.forwardingRule
Documentation
compute.v1.globalAddress
Documentation
compute.v1.globalForwardingRule
Documentation
compute.v1.healthCheck
Documentation
compute.v1.httpHealthCheck
Documentation
compute.v1.httpsHealthCheck
Documentation
compute.v1.image
Documentation
compute.v1.instance
Documentation
compute.v1.instanceGroup
Documentation
compute.v1.instanceGroupManager
Documentation
compute.v1.instanceTemplate
Documentation
compute.v1.network
Documentation
compute.v1.regionAutoscaler
Documentation
compute.v1.regionBackendService
Documentation
compute.v1.regionInstanceGroup
Documentation
compute.v1.regionInstanceGroupManager
Documentation
compute.v1.route
Documentation
compute.v1.router
Documentation
compute.v1.sslCertificate
Documentation
compute.v1.subnetwork
Documentation
compute.v1.targetHttpProxy
Documentation
compute.v1.targetHttpsProxy
Documentation
compute.v1.targetInstance
Documentation
compute.v1.targetPool
Documentation
compute.v1.targetSslProxy
Documentation
compute.v1.targetVpnGateway
Documentation
compute.v1.urlMap
Documentation
compute.v1.vpnTunnel
Documentation
container.v1.cluster
Documentation
container.v1.nodePool
Documentation
dataproc.v1.cluster
Documentation
dns.v1.managedZone
Documentation
iam.v1.serviceAccount
Documentation
iam.v1.serviceAccounts.key
Documentation
logging.v2.metric
Documentation
logging.v2.sink
Documentation
pubsub.v1.subscription
Documentation
pubsub.v1.topic
Documentation
runtimeconfig.v1beta1.config
Documentation
runtimeconfig.v1beta1.variable
Documentation
runtimeconfig.v1beta1.waiter
Documentation
spanner.v1.instance
Documentation
sqladmin.v1beta4.database
Documentation
sqladmin.v1beta4.instance
Documentation
sqladmin.v1beta4.user
Documentation
storage.v1.bucket
Documentation
storage.v1.bucketAccessControl
Documentation
storage.v1.defaultObjectAccessControl
Documentation
storage.v1.object
Documentation
storage.v1.objectAccessControl
Documentation
What's next
Create a configuration .
Try the Deployment Manager quickstart .
Go through the Step-by-step guide .
For sample deployments that you can adapt to your requirements, see the Deployment
Manager GitHub Repository .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
