---
title: "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos
  title: "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\
    \ Cloud Documentation"
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
Configure Kerberos for Dataproc Metastore Thrift endpoints
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to configure Kerberos for your
Dataproc Metastore service that uses the Thrift endpoint protocol.
If your Dataproc Metastore service uses the gRPC endpoint protocol, see
Configure Kerberos for gRPC endpoints .
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
Network considerations
Note: Kerberos is not supported on Dataproc Metastore services that use
Private Service Connect . You must
use VPC peering with your service.
Before configuring Kerberos, consider the following network
settings:
Set up an IP connection between your VPC network and KDC. You must do this to
authenticate your KDC file with Dataproc Metastore service.
Set up any necessary Firewall rules on your
KDC .
These rules are necessary to permit traffic from
Dataproc Metastore. For more information, see Firewall rules
for your
services .
If you're using VPC Service Controls , then
the Secret Manager secret and krb5.conf Cloud Storage object
must belong to a project that resides in the same service perimeter as the
Dataproc Metastore service.
Decide what VPC peering network that you want to use. You must configure your
Managed Service for Apache Spark cluster and Dataproc Metastore
service with the same VPC peering network.
Required Roles
To get the permission that
you need to create a Dataproc Metastore with Kerberos,
ask your administrator to grant you the
following IAM roles on your project, based on the principle of least privilege:
Grant full control of Dataproc Metastore resources ( roles/metastore.editor )
Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
metastore.services.create
permission,
which is required to
create a Dataproc Metastore with Kerberos.
You might also be able to get
this permission
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and permissions, see Manage access with IAM .
For more information, see Dataproc Metastore IAM and access control .
Enable Kerberos for Dataproc Metastore
The following instructions show you how to configure Kerberos for a Dataproc Metastore
service that is attached to a Managed Service for Apache Spark cluster.
Create a Managed Service for Apache Spark cluster and enable Kerberos
gcloud
To set up a Managed Service for Apache Spark cluster with Kerberos,
run the following gcloud dataproc clusters create
command:
gcloud dataproc clusters create CLUSTER_NAME \
--image-version=2.0 \
--enable-kerberos \
--scopes 'https://www.googleapis.com/auth/cloud-platform'
Replace the following:
CLUSTER_NAME : the name of your Managed Service for Apache Spark cluster.
Configure the Managed Service for Apache Spark cluster for Kerberos
The following instructions show you how to use SSH to connect to a primary Managed Service for Apache Spark
cluster that's associated with your Dataproc Metastore service.
After, you modify the hive-site.xml file and configure Kerberos for your service.
In the Google Cloud console go to the VM Instances page.
In the list of virtual machine instances, click SSH in the row of the
Managed Service for Apache Spark primary node ( your-cluster-name-m ).
A browser window opens in your home directory on the node.
Open the /etc/hive/conf/hive-site.xml file.
sudo vim /etc/hive/conf/hive-site.xml
You see an output similar to the following:
<property>
<name>hive.metastore.kerberos.principal</name>
<value> PRINCIPAL_NAME </value>
</property>
<property>
<name>hive.metastore.kerberos.keytab.file</name>
<value> METASTORE_PRINCPAL_KEYTAB </value>
</property>
Replace:
PRINCIPAL_NAME : A principal name, in the following
format primary/instance@REALM . For example,
hive/test@C.MY-PROJECT.INTERNAL .
METASTORE_PRINCIPAL_KEYTAB : the location of your
Hive Metastore keytab file. Use the following value /etc/security/keytab/metastore.service.keytab .
Create a keytab file
The following instructions show you how to create a keytab file.
A keytab file contains a pair of Kerberos principals and a pair of encrypted keys. This is
used to authenticate a service principal with a Kerberos KDC.
To create a keytab file
In the Managed Service for Apache Spark SSH session, create the keytab and principal.
sudo kadmin.local -q "addprinc -randkey PRINCIPAL_NAME "
sudo kadmin.local -q "ktadd -k /etc/security/keytab/metastore.service.keytab PRINCIPAL_NAME "
In the Managed Service for Apache Spark SSH session, create and upload the keytab file
to Secret Manager.
Note: To use this command, the identity running the Managed Service for Apache Spark VM must have the
Secret Manager Admin Role .
gcloud secrets create SECRET_NAME --replication-policy automatic
sudo gcloud secrets versions add SECRET_NAME --data-file /etc/security/keytab/metastore.service.keytab
Replace the following:
SECRET_NAME : the name of your secret.
Update the krb5.conf file
Next, you must update the krb5.conf file to associate it with your
Managed Service for Apache Spark cluster.
Determine the primary internal IP address of the Managed Service for Apache Spark
cluster's primary instance.
gcloud compute instances list
For example, running this command produces a similar output:
~$ gcloud compute instances list --project kerberos-project
NAME ZONE MACHINE_TYPE PREEMPTIBLE INTERNAL_IP EXTERNAL_IP STATUS
cluster-236-m us-central1-c n2-standard-4 192.0.2.2 *.* .*.* RUNNING
...
In this case, the internal IP address of the cluster is 192.0.2.2 .
Open the krb5.conf file.
sudo vim /etc/krb5.conf
In the file, replace the existing KDC parameter and admin_server parameter
with the internal IP address of your Managed Service for Apache Spark cluster.
For example, using the IP address value from the previous steps looks similar
to this output.
[ realms ]
US-CENTRAL1-A.C.MY-PROJECT.INTERNAL = {
kdc = 192 .0.2.2
admin_server = 192 .0.2.2
}
Upload the /etc/krb5.conf file from your Managed Service for Apache Spark primary
VM to your Cloud Storage bucket.
gcloud storage cp /etc/krb5.conf gs:// PATH_TO_KRB5
Replace:
PATH_TO_KRB5 : The Cloud Storage URI that contains
your krb5.conf file.
After the upload finishes, copy the path of the upload.
You need to use it when you create your Dataproc Metastore service.
Grant IAM roles and permissions
Provide the Dataproc Metastore service account with permission
to access the keytab file. This account is Google-managed and listed on the IAM permissions UI page by selecting Include Google-provided role grants .
gcloud projects add-iam-policy-binding PROJECT_ID \
--member serviceAccount:service- PROJECT_NUMBER @gcp-sa-metastore.iam.gserviceaccount.com \
--role roles/secretmanager.secretAccessor
Provide the Dataproc Metastore service account with
permission to access the krb5.conf file.
Note: The Cloud Storage bucket containing the krb5.conf file can
belong to a different project than the one the
Dataproc Metastore service belongs to. Use the project ID and
number of the project that contains the Cloud Storage bucket.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member serviceAccount:service- PROJECT_NUMBER @gcp-sa-metastore.iam.gserviceaccount.com \
--role roles/storage.objectViewer
Create a Dataproc Metastore service with Kerberos
Create a new Dataproc Metastore service that's configured with your
Kerberos files.
Make sure you create your service in the VPC network as your Managed Service for Apache Spark
cluster.
gcloud metastore services create SERVICE \
--location= LOCATION \
--instance-size=medium \
--network= VPC_NETWORK \
--kerberos-principal= KERBEROS_PRINCIPAL \
--krb5-config= KRB5_CONFIG \
--keytab= CLOUD_SECRET
Replace the following:
SERVICE : the name of your Dataproc Metastore service.
LOCATION : the location of your Dataproc Metastore service.
VPC_NETWORK : the name of your VPC network. Use the same
network that's configured in your Managed Service for Apache Spark cluster.
KERBEROS_PRINCIPAL : the name of the Kerberos principal
that you created earlier.
KRB5_CONFIG : the location of the krb5.conf file.
Use the Cloud Storage object URI that points to your file.
CLOUD_SECRET : the relative resource
name of a Secret Manager
secret version.
After you create your cluster, Dataproc Metastore attempts to connect
with your Kerberos credentials using the provided principal, keytab, and krb5.conf
file. If the connection fails, then the Dataproc Metastore creation also fails.
Link the Managed Service for Apache Spark cluster to Dataproc Metastore
After the Dataproc Metastore service has been created,
find your Thrift endpoint URI and warehouse directory .
SSH into the primary instance
of your Managed Service for Apache Spark cluster.
In the SSH session, open the /etc/hive/conf/hive-site.xml file.
sudo vim /etc/hive/conf/hive-site.xml
Modify /etc/hive/conf/hive-site.xml on the Managed Service for Apache Spark cluster.
< property >
< name>hive . metastore . uris < / name >
< ! -- Update this value . -- >
< value> ENDPOINT_URI < / value >
< / property >
< ! -- Add this property entry . -- >
< property >
< name>hive . metastore . warehouse . dir < / name >
< value> WAREHOUSE_DIR < / value >
< / property >
Restart HiveServer2:
sudo systemctl restart hive-server2.service
Configure Managed Service for Apache Spark before submitting jobs
To run your Managed Service for Apache Spark jobs ,
you must add the hive user to the allowed.system.users property in the
Hadoop container-executor.cfg file. This lets users run queries to access data,
such as select * from .
In the SSH session, open the Hadoop container-executor.cfg file.
sudo vim /etc/hadoop/conf/container-executor.cfg
Add the following line on every Managed Service for Apache Spark node.
allowed.system.users=hive
Get a Kerberos ticket
Get the Kerberos ticket, before connecting to the Dataproc Metastore
instance.
sudo klist -kte /etc/security/keytab/metastore.service.keytab
sudo kinit -kt /etc/security/keytab/metastore.service.keytab PRINCIPAL_NAME
sudo klist # gets the ticket information.
sudo hive
Replace the following:
PRINCIPAL_NAME : the name of your principal.
What's next
Access a service
Update and delete a service
Import metadata into a service
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
