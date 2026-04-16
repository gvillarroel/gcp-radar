---
title: "Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles
  title: "Create and configure app profiles \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and configure app profiles
This page explains how to create and manage a Bigtable instance's
application profiles, or app profiles . It also shows how to use a custom app
profile to connect to Bigtable.
Before you read this page, you should understand what app profiles are and how
they work . In particular, make sure you understand the difference
between a standard app profile — an app profile configured to use
standard compute — and a Data Boost app profile — an app
profile that uses Data Boost serverless compute to run high-throughput read
jobs. For more information on Data Boost and how it differs from compute
using provisioned cluster nodes, see the Data Boost
overview .
If you're using standard app profiles to configure replication,
you should also be familiar with the overview of Bigtable
replication , and you should review the examples of
replication settings and decide what settings are best
for your use case.
Required roles
To get the permissions that
you need to create, configure, or delete an app profile,
ask your administrator to grant you the
Bigtable administrator ( roles/bigtable.admin )
IAM role on the instance.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create an app profile
You can create many different custom app profiles for each instance. Use custom app profiles to
control how each application, or each distinct function within an application, interacts with an
instance. For example, you might use one app profile for a batch application to isolate its traffic
to a single cluster, and you might use a different app profile to provide high availability for
another application.
Create a standard app profile
To create a standard app profile, follow these steps:
Console
Note: You can't configure the request priority for an app profile or enable
row-affinity routing in the Google Cloud console. Use the gcloud CLI
instead.
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance where you want to create the app profile.
In the left pane, click Application profiles .
Click Create application profile .
Select Standard .
Click Next .
Enter the application profile ID.
The application profile ID is a permanent identifier for the app
profile. Your application provides this ID when it connects to
Bigtable.
Enter a description of the app profile.
Under Cluster routing , select either single-cluster
routing or multi-cluster routing. Learn more .
If you choose Single-cluster :
Use the drop-down to select the cluster to route requests to.
If you need to enable single-row transactions ,
select the Allow single-row transactions checkbox.
If you choose Multi-cluster :
To route requests to any cluster in the instance,
select Any cluster in the Cluster group drop-down.
To limit request routing to only some clusters in the instance
(cluster group routing),
select the checkbox for each cluster that you want to include in
the routing group, then click OK .
Click Create to create the app profile.
Update your application's code for connecting to
Bigtable so that it uses the new app profile.
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
Use the bigtable app-profiles create
command to create an app profile:
gcloud bigtable app-profiles create APP_PROFILE_ID \
--instance= INSTANCE_ID \
[--description= DESCRIPTION ] \
[--force] \
[--route-any] \
[--restrict-to= CLUSTER_ID_1 , CLUSTER_ID_2 ...] \
[--route-to= CLUSTER_ID ] \
[--transactional-writes] \
[--priority=PRIORITY] \
[--row-affinity]
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
The command accepts the following optional flags:
--description= DESCRIPTION :
A detailed description of the app profile.
--force :
Ignore warnings about potential issues and conflicts with other app profiles.
--route-any :
Enable multi-cluster routing to route requests to
any available cluster.
You cannot combine this flag with the --route-to or --transactional-writes
flags.
--restrict-to= CLUSTER_ID_1 , CLUSTER_ID_2 ... : A list of clusters that
requests should be routed to. Use this option if you want to route
requests to only some of the clusters in the instance.
You cannot combine this flag with the --route-to or --transactional-writes
flags.
--route-to= CLUSTER_ID :
The cluster ID that all requests should be routed to. This flag enables
single-cluster routing .
You cannot combine this flag with the --route-any flag.
--transactional-writes :
Enable single-row transactions in
the app profile.
You cannot combine this flag with the --route-any or
--restrict-to flags.
--priority=PRIORITY : The priority level that the app profile
should use. Accepted values are PRIORITY_HIGH , PRIORITY_MEDIUM , or
PRIORITY_LOW .
--row-affinity :
Enable row-affinity routing in
the app profile.
You cannot combine this flag with the --route-to or --transactional-writes
flags.
Update your application's code for connecting to
Bigtable so that it uses the new app profile.
Create a Data Boost app profile
To create a Data Boost app profile — an app profile that uses
Data Boost serverless compute — follow these steps. To make sure your
workload is compatible with Data Boost, review the
limitations .
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance where you want to create the app profile.
In the left pane, click Application profiles .
Click Create application profile .
Select Data Boost .
Click Next .
Enter the application profile ID.
The application profile ID is a permanent identifier for the app
profile. Your application provides this ID when it connects to
Bigtable.
Enter a description of the app profile.
Under Cluster routing , select the cluster to route requests to.
Click Create app profile to create the app profile.
Update your application's code for connecting to
Bigtable so that it uses the new app profile.
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
Use the gcloud beta bigtable app-profiles create
command to create an app profile:
gcloud bigtable app-profiles create APP_PROFILE_ID \
--instance= INSTANCE_ID \
--data-boost \
--data-boost-compute-billing-owner=HOST_PAYS \
--route-to= CLUSTER_ID
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
CLUSTER_ID :
The cluster ID that all requests should be routed to. This flag enables
single-cluster routing .
Connect with a custom app profile
After you create a custom app profile, you can update your code so that your
application uses the app profile when it connects to Bigtable.
The following examples show how to specify an app profile when your app creates
a Bigtable client and connects to an instance. Replace
[APP_PROFILE_ID] with the appropriate value.
C#
var client = BigtableClient . Create ( appProfileId : "[APP_PROFILE_ID]" );
Go
clientConf := bigtable . ClientConfig { AppProfile : "[APP_PROFILE_ID]" }
client , err = bigtable . NewClientWithConfig ( ctx , project , instance , clientConf )
HBase Java
// If using BigtableOptions directly:
optionsBuilder . setAppProfileId ( "[APP_PROFILE_ID]" );
// If using BigtableOptionsFactory:
configuration . set ( BigtableOptionsFactory . APP_PROFILE_ID_KEY , "[APP_PROFILE_ID]" );
// If using system properties, set "google.bigtable.app_profile.id" to
// "[APP_PROFILE_ID]"
// If using CloudBigtableIO for Cloud Dataflow:
config . withConfiguration ( BigtableOptionsFactory . APP_PROFILE_ID_KEY ,
"[APP_PROFILE_ID]" );
Node.js
const bigtable = new Bigtable ({ appProfileId : '[APP_PROFILE_ID]' });
Python
from google.cloud import bigtable
client = bigtable . Client ( project = project_id )
instance = client . instance ( instance_id )
table = bigtable . table . Table ( table_id , instance , '[APP_PROFILE_ID]' )
Update an app profile
You can view an instance's app profiles and update their settings at any time.
Bigtable warns you about any updates that might cause unexpected
changes in behavior.
Important: Changes to an app profile take effect immediately, and they apply to
any application that uses the app profile. If you need to make changes that
shouldn't take effect immediately, create a new app
profile instead, and update your application to use the
new app profile to connect to Bigtable.
To see how to update an app profile from standard to Data Boost or
Data Boost to standard, see Convert an app profile .
Update a standard app profile
To update a standard app profile, follow these steps:
Console
Note: You can't configure the request priority for an app profile or enable
row-affinity routing in the Google Cloud console. Use the gcloud CLI
instead.
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
In the Application profiles column, click the app profile you want to
view or update.
If you don't see the app profile you want to edit, you can view a
complete list by clicking the name of the instance, then clicking
Application profiles in the left pane.
Update the settings as needed, then click Save , or click Cancel
to exit without saving.
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
If you don't know the app profile's ID, use the
bigtable app-profiles
list command to view a list of the instance's app profiles:
gcloud bigtable app-profiles list --instance= INSTANCE_ID
Replace INSTANCE_ID with the permanent identifier for the instance.
(Optional) Use the bigtable app-profiles describe
command to view the app profile's settings:
gcloud bigtable app-profiles describe APP_PROFILE_ID \
--instance= INSTANCE_ID
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
Use the bigtable app-profiles update
command to update the app profile's settings:
gcloud bigtable app-profiles update APP_PROFILE_ID \
--instance= INSTANCE_ID \
[--description= DESCRIPTION ] \
[--force] \
[--route-any] \
[--restrict-to= CLUSTER_ID_1 , CLUSTER_ID_2 ...]
[--route-to= CLUSTER_ID ] \
[--transactional-writes] \
[--row-affinity]
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
The command accepts the following optional flags:
--description= DESCRIPTION :
A detailed description of the app profile.
--force :
Ignore warnings about potential issues and conflicts with other app profiles.
--route-any :
Enable multi-cluster routing to route requests to
any available cluster.
You cannot combine this flag with the --route-to or --transactional-writes
flags.
--restrict-to= CLUSTER_ID_1 , CLUSTER_ID_2 ... : A list of clusters that
requests should be routed to. Use this option if you want to route
requests to only some of the clusters in the instance.
You cannot combine this flag with the --route-to or --transactional-writes
flags.
--route-to= CLUSTER_ID :
The cluster ID that all requests should be routed to. This flag enables
single-cluster routing .
You cannot combine this flag with the --route-any flag.
--transactional-writes :
Enable single-row transactions in
the app profile.
You cannot combine this flag with the --route-any flag.
--priority=PRIORITY : The priority level that the app profile
uses. Accepted values are PRIORITY_HIGH , PRIORITY_MEDIUM , or
PRIORITY_LOW .
Update a Data Boost app profile
To update the cluster that a Data Boost app profile reads from, follow
these steps:
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
In the Application profiles column, click the app profile you want to
view or update.
If you don't see the app profile you want to edit, you can view a
complete list by clicking the name of the instance and then clicking
Application profiles in the left pane.
Select the new cluster that traffic should be routed to, and then click
Save .
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
If you don't know the app profile's ID, use the
bigtable app-profiles
list command to view a list of the instance's app profiles:
gcloud bigtable app-profiles list --instance= INSTANCE_ID
Replace INSTANCE_ID with the permanent identifier for the instance.
(Optional) Use the bigtable app-profiles describe
command to view the app profile's settings:
gcloud bigtable app-profiles describe APP_PROFILE_ID \
--instance= INSTANCE_ID
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
Use the gcloud beta bigtable app-profiles update
command to update the app profile's settings:
gcloud beta bigtable app-profiles update APP_PROFILE_ID \
--instance= INSTANCE_ID \
--route-to= CLUSTER_ID
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
CLUSTER_ID : the ID of the new cluster to read from
Convert an app profile
You can convert a standard app profile to a Data Boost app profile, or
convert a Data Boost app profile to a standard app profile. Before you
convert an app profile, review the guidance at App profile
changes .
Convert from standard to Data Boost
Before you update an app profile from standard (provisioned nodes for compute)
to Data Boost serverless compute, check the Data Boost eligibility
metrics . You should also be aware of
Data Boost limitations .
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
In the Application profiles column, click the app profile you want to
update.
If you don't see the app profile you want to edit, you can view a
complete list by clicking the name of the instance, then clicking
Application profiles in the left pane.
Select Data Boost .
Select the cluster that requests should be routed to.
Click Save .
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
If you don't know the app profile's ID, use the
bigtable app-profiles
list command to view a list of the instance's app profiles:
gcloud bigtable app-profiles list --instance= INSTANCE_ID
Replace INSTANCE_ID with the permanent identifier for the instance.
(Optional) Use the bigtable app-profiles describe
command to view the app profile's settings:
gcloud bigtable app-profiles describe APP_PROFILE_ID \
--instance= INSTANCE_ID
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
Use the gcloud beta bigtable app-profiles update
command to convert an app profile from standard to
Data Boost:
gcloud bigtable app-profiles update APP_PROFILE_ID \
--instance= INSTANCE_ID \
--data-boost \
--data-boost-compute-billing-owner=HOST_PAYS \
--route-to= CLUSTER_ID
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
CLUSTER_ID :
The cluster ID that all requests should be routed to. This flag enables
single-cluster routing .
Convert from Data Boost to standard
To change an app profile from using Data Boost (serverless compute) to
standard (provisioned nodes for compute) follow these steps:
Console
Note: You can't configure the request priority for an app profile in the
Google Cloud console. Use the gcloud CLI instead.
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
In the Application profiles column, click the app profile you want to
update.
If you don't see the app profile you want to edit, you can view a
complete list by clicking the name of the instance, then clicking
Application profiles in the left pane.
Select Standard .
Click Next .
Optional: Edit the app profile description.
Under Cluster routing , select either single-cluster
routing or multi-cluster routing. Learn more .
If you choose Single-cluster :
Use the drop-down to select the cluster to route requests to.
If you need to enable single-row transactions ,
select the Allow single-row transactions checkbox.
If you choose Multi-cluster :
To route requests to any cluster in the instance,
select Any cluster in the Cluster group drop-down.
To limit request routing to only some clusters in the instance
(cluster group routing),
select the checkbox for each cluster that you want to include in
the routing group, then click OK .
Click Save .
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
If you don't know the app profile's ID, use the
bigtable app-profiles
list command to view a list of the instance's app profiles:
gcloud bigtable app-profiles list --instance= INSTANCE_ID
Replace INSTANCE_ID with the permanent identifier for the instance.
(Optional) Use the bigtable app-profiles describe
command to view the app profile's settings:
gcloud bigtable app-profiles describe APP_PROFILE_ID \
--instance= INSTANCE_ID
Use the gcloud beta bigtable app-profiles update
command to convert the app profile:
gcloud bigtable app-profiles update APP_PROFILE_ID \
--instance= INSTANCE_ID \
--standard \
[--route-any] \
[--restrict-to= CLUSTER_ID_1 , CLUSTER_ID_2 ...]
[--route-to= CLUSTER_ID ] \
[--transactional-writes]
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
The command accepts the following optional flags:
--route-any :
Enable multi-cluster routing to route requests to
any available cluster.
You cannot combine this flag with the --route-to or --transactional-writes
flags.
--restrict-to= CLUSTER_ID_1 ,
CLUSTER_ID_2 ... : A list of clusters that
requests should be routed to. Use this option if you want to route
requests to only some of the clusters in the instance.
You cannot combine this flag with the --route-to or --transactional-writes
flags.
--route-to= CLUSTER_ID :
The cluster ID that all requests should be routed to. This flag enables
single-cluster routing .
You cannot combine this flag with the --route-any flag.
--transactional-writes :
Enable single-row transactions in
the app profile.
You can't combine this flag with the --route-any or
--restrict-to flags.
Delete an app profile
You can delete an instance's custom app profiles, but not the default app
profile.
Warning: Don't delete a custom app profile that an application is still using.
After you delete a custom app profile, any requests that use that app profile
will fail.
To delete a custom app profile:
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance that contains the app profile you want to delete.
In the left pane, click Application profiles .
Open the more actions menu more_vert , then click
Delete application profile . A confirmation dialog appears.
Follow the instructions in the confirmation dialog, then click Delete .
gcloud
If you don't know the instance ID, use the
bigtable instances
list command to view a list of your project's instances:
gcloud bigtable instances list
If you don't know the app profile's ID, use the
bigtable app-profiles
list command to view a list of the instance's app profiles:
gcloud bigtable app-profiles list --instance= INSTANCE_ID
Replace INSTANCE_ID with the permanent identifier for the instance.
Use the bigtable app-profiles delete
command to delete the app profile:
gcloud bigtable app-profiles delete APP_PROFILE_ID \
--instance= INSTANCE_ID \
[--force]
Provide the following:
APP_PROFILE_ID :
The permanent identifier for the app profile.
INSTANCE_ID :
The permanent identifier for the instance.
The command accepts the following optional flag:
--force :
Ignore warnings about potential issues and conflicts with other app profiles.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
