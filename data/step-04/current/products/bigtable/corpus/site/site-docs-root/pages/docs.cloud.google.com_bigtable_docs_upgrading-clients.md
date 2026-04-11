---
title: "Upgrading client libraries \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/upgrading-clients
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/upgrading-clients
  title: "Upgrading client libraries \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Upgrading client libraries
This page explains how to upgrade a previously installed Cloud Bigtable
client library. If you need to install a client library for the first time,
follow the instructions for your preferred programming language at
Cloud Bigtable Client Libraries .
Bigtable client for Java
The convenience methods in BigtableTableAdminClient and
BigtableInstanceAdminClient are obsolete.
To upgrade your code, call the standard protocol buffer methods using
getBaseClient() . This requires replacing custom wrapper objects, such as
com.google.cloud.bigtable.admin.v2.models.CreateTableRequest , with standard
protocol buffer request objects, such as
com.google.bigtable.admin.v2.CreateTableRequest . These objects expect fully
qualified resource names.
Update your code as shown in the following example:
// Existing code
BigtableTableAdminClient adminClient = BigtableTableAdminClient . create ( PROJECT_ID , INSTANCE_ID );
adminClient . createTable (
CreateTableRequest . of ( TABLE_ID )
. addFamily ( "cf1" ));
// New code
BigtableTableAdminClient adminClient = BigtableTableAdminClient . create ( PROJECT_ID , INSTANCE_ID );
String parent = "projects/" + PROJECT_ID + "/instances/" + INSTANCE_ID ;
com . google . bigtable . admin . v2 . CreateTableRequest request =
com . google . bigtable . admin . v2 . CreateTableRequest . newBuilder ()
. setParent ( parent )
. setTableId ( TABLE_ID )
. setTable ( com . google . bigtable . admin . v2 . Table . newBuilder ()
. putColumnFamilies ( "cf1" , com . google . bigtable . admin . v2 . ColumnFamily . getDefaultInstance ())
. build ())
. build ();
adminClient . getBaseClient (). createTable ( request );
Replace the following:
PROJECT_ID : the identifier of your Bigtable project
INSTANCE_ID : the identifier of your Bigtable instance
TABLE_ID : the identifier for your new table
HBase client for Java
If you're upgrading from version 1.0 or later of the HBase client for Java , the only change you need to make is to update the version number
in the configuration. You don't need to update your code.
If you're upgrading from pre-1.0 HBase clients, complete the following
steps:
Update your dependencies to use the newest client library and remove
artifacts that you no longer need:
Remove the bigtable-hbase-1.0 , bigtable-hbase-1.1 , and
bigtable-hbase-1.2 artifacts from your dependencies if they are present.
Remove netty-tcnative-boringssl-static from your dependencies
unless another part of your application requires it.
Add one of the following artifacts to your dependencies, depending on
your use case. The 2.x versions include an HBase async client that the
1.x versions don't have.
bigtable-hbase-1.x or bigtable-hbase-2.x : Use for standalone
applications where you are in control of your dependencies.
bigtable-hbase-1.x-hadoop or bigtable-hbase-2.x-hadoop : Use in
Hadoop environments.
bigtable-hbase-1.x-shaded or bigtable-hbase-2.x-shaded : Use in
environments other than Hadoop that require earlier versions of
components such as protobuf or Guava .
Update your configuration settings for connecting to
Bigtable.
If the configuration settings in your code or in an hbase-site.xml
file include a value for hbase.client.connection.impl , change
the value to com.google.cloud.bigtable.hbase1_x.BigtableConnection .
If you use the BigtableConnection class directly, update your code to
use com.google.cloud.bigtable.hbase1_x.BigtableConnection instead.
If you use an hbase-site.xml file to connect to Bigtable:
Add the property google.bigtable.instance.id if it is not
present. Set the property value to your instance ID.
Remove the property google.bigtable.cluster.name if it is
present.
Remove the property google.bigtable.zone.name if it is present.
If you connect to Bigtable by calling
BigtableConfiguration.connect() , update your code as shown in the
following example:
// Existing code
BigtableConfiguration . connect ( PROJECT_ID , ZONE_ID , CLUSTER_ID );
// New code
BigtableConfiguration . connect ( PROJECT_ID , INSTANCE_ID );
Replace the following:
PROJECT_ID : the identifier of your project.
ZONE_ID : the zone where your cluster resides.
CLUSTER_ID : the identifier of your cluster.
INSTANCE_ID : the identifier of your instance.
Redeploy your application in all of your environments, including local
development, testing, staging, and production.
For a list of releases for the HBase client for Java, see the
release history on GitHub .
Go
In June 2016, the Go client changed the way to connect to
Bigtable. Instead of specifying a cluster ID and zone, specify
an instance ID. You can find the instance ID by visiting the
Google Cloud console .
To download the client library, visit the code repository on GitHub .
Update your code as shown in the following example:
// Existing code
adminClient , err := bigtable . NewAdminClient ( ctx , PROJECT_ID , ZONE , CLUSTER_ID )
client , err := bigtable . NewClient ( ctx , PROJECT_ID , ZONE , CLUSTER_ID )
// New code
adminClient , err := bigtable . NewAdminClient ( ctx , PROJECT_ID , INSTANCE_ID )
client , err := bigtable . NewClient ( ctx , PROJECT_ID , INSTANCE_ID )
Replace the following:
PROJECT_ID : the identifier of your project.
ZONE : the zone where your cluster resides.
CLUSTER_ID : the identifier of the cluster to which you
want to connect.
INSTANCE_ID : the identifier of the instance to which
you want to connect.
For a list of releases for the Go client library, see the
release history on GitHub .
What's next
Read more about client libraries .
Learn more about how Bigtable
integrates with other tools and Google Cloud services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
