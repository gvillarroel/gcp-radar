---
title: "Configure Kerberos for Dataproc Metastore gRPC endpoints \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc
  title: "Configure Kerberos for Dataproc Metastore gRPC endpoints \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Configure Kerberos for Dataproc Metastore gRPC endpoints
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to configure Kerberos for your
Dataproc Metastore service that uses the gRPC endpoint protocol.
If your Dataproc Metastore service uses the Thrift endpoint protocol, see
Configure Kerberos for Thrift endpoints .
Before you begin
Understand the basics of
Kerberos .
In these instructions, you use a Managed Service for Apache Spark cluster to create
the following Kerberos assets:
A Keytab file.
A krb5.conf file.
A Kerberos principal.
For more information about how these Kerberos assets work with a
Dataproc Metastore service, see About Kerberos .
Create and host your own Kerberos KDC or learn how to use the local KDC of a
Managed Service for Apache Spark cluster .
Create a Cloud Storage bucket or get access to an existing one. You
must store your krb5.conf file in this bucket.
Required Roles
To get the permission that
you need to create a Dataproc Metastore configured with Kerberos ,
ask your administrator to grant you the
following IAM roles on your project, based on the principle of least privilege:
Grant full control of Dataproc Metastore resources ( roles/metastore.editor )
Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin )
Grant gRPC read-write access to Dataproc Metastore metadata ( roles/metastore.metadataEditor )
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
metastore.services.create
permission,
which is required to
create a Dataproc Metastore configured with Kerberos .
You might also be able to get
this permission
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and permissions, see Manage access with IAM .
For more information, see Dataproc Metastore IAM and access control .
Configure Kerberos for Dataproc Metastore
The following instructions show you how to configure Kerberos for a
Dataproc Metastore service that uses the gRPC endpoint.
First, you create a Dataproc Metastore that uses the gRPC
endpoint. After, you create a Managed Service for Apache Spark cluster configured with
Kerberos and connect to it.
Create a Dataproc Metastore service with the gRPC endpoint
To create a Dataproc Metastore that uses the gRPC endpoint, run
the following gcloud metastore services create command:
gcloud
gcloud metastore services create SERVICE \
--instance-size=medium \
--endpoint-protocol=grpc
Replace:
SERVICE : The name of your
Dataproc Metastore service
Create a Managed Service for Apache Spark cluster and connect to your service
To create a Managed Service for Apache Spark configured with Kerberos, run the following
gcloud dataproc clusters create command.
In this command, the --enable-kerberos option creates the Kerberos
Keytab file, krb5.conf file, and principal. These values are all created using
default names and settings set by the Managed Service for Apache Spark cluster.
gcloud
gcloud dataproc clusters create CLUSTER_NAME \
--project PROJECT_ID \
--region REGION \
--image-version 2.0-debian10 \
--dataproc-metastore DATAPROC_METASTORE_NAME \
--enable-kerberos \
--scopes 'https://www.googleapis.com/auth/cloud-platform'
Replace:
CLUSTER_NAME : the name of your Managed Service for Apache Spark cluster.
PROJECT_ID : Your Google Cloud project ID.
REGION : the Google Cloud region that you want to create your
Managed Service for Apache Spark cluster in.
DATAPROC_METASTORE_NAME : the name of the
Dataproc Metastore service that you're attaching to the cluster,
in the following format: projects/<my_project>/locations/<location>/services/<service_id> .
Configure Managed Service for Apache Spark before submitting jobs
To run your Managed Service for Apache Spark jobs ,
you must add the hive user to the allowed.system.users property in the
Hadoop container-executor.cfg file. This lets users run queries to access data,
such as select * from .
The following instructions show you how to SSH into your primary Managed Service for Apache Spark
cluster that's associated with your Dataproc Metastore service and
update the container-executor.cfg file.
In the Google Cloud console go to the VM
Instances page.
In the list of virtual machine instances, click SSH in the row of the
Managed Service for Apache Spark primary node ( your-cluster-name-m ).
A browser window opens in your home directory on the node.
In the SSH session, open the Hadoop container-executor.cfg file.
sudo vim /etc/hadoop/conf/container-executor.cfg
Add the following line on every Managed Service for Apache Spark node.
allowed.system.users=hive
Get a Kerberos ticket
The following instructions show you how to generate a Kerberos ticket.
In the Managed Service for Apache Spark cluster SSH session, generate a Kerberos
ticket and connect to your Dataproc Metastore service.
This command uses the default keytab name generated by your
Managed Service for Apache Spark cluster.
sudo klist -kte /etc/security/keytab/hive.service.keytab
sudo kinit -kt /etc/security/keytab/hive.service.keytab hive/_HOST@${realm}
sudo klist # gets the ticket information.
The _HOST value is retrieved when the
keytab file is listed using the klist -kte command. It contains the
primary node's hostname in it.
(Optional) Add a new principal
To add a new principal, run the following command.
sudo kadmin.local -q "addprinc -randkey PRINCIPAL"
sudo kadmin.local -q "ktadd -k /etc/security/keytab/hive.service.keytab PRINCIPAL"
Get the Kerberos ticket.
sudo klist -kte /etc/security/keytab/hive.service.keytab
sudo kinit -kt /etc/security/keytab/hive.service.keytab PRINCIPAL
sudo klist
sudo hive
What's next
Access a service
Update and delete a service
Import metadata into a service
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
