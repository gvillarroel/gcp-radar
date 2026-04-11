---
title: "Update a Dataproc Metastore service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/manage-service
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/manage-service
  title: "Update a Dataproc Metastore service \_|\_ Google Cloud Documentation"
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
Update a Dataproc Metastore service
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to update a Dataproc Metastore service.
You can update your Dataproc Metastore service to change
configuration settings, or to enable or disable optional features.
Before you begin
Enable Dataproc Metastore in your project .
Create a Dataproc Metastore service .
Required roles
To get the permission that
you need to update a Dataproc Metastore service,
ask your administrator to grant you the
following IAM roles on your project, based on the principle of least privilege:
Grant full control of Dataproc Metastore resources ( roles/metastore.editor )
Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
metastore.services.update
permission,
which is required to
update a Dataproc Metastore service.
You might also be able to get
this permission
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and permissions, see Dataproc Metastore IAM overview .
About updating a service
You can update the following Dataproc Metastore parameters.
Port number . Update the TCP port number of the Apache Thrift interface.
Service tier . Switch between the Developer service tier or Enterprise service tier. These tiers influence the capacity of the service.
Data Catalog sync . Toggle the Data Catalog sync feature on or off.
Maintenance window . Change the frequency of your maintenance window, including Day of week and Hour of day .
Kerberos . Enable or disable Kerberos authentication. If previously enabled, you can update your Kerberos configuration files.
Hive metastore configurations . Update the location of your Hive warehouse directory.
Auxiliary version config ( Preview ). Enable, disable, or add additional auxiliary versions.
Labels . Add or remove optional labels that describe your metadata.
Scaling factor . Change the scaling factor. You can enable or disable autoscaling and update the minimum or maximum scaling factors.
Note: To update other
Dataproc Metastore parameters that aren't included in the previous list, you must
delete your service and create a new one.
Update a service
Before running an update, note the following considerations:
You can only run a single update job at a time (for each Dataproc Metastore service).
You can update multiple parameters in a single update job.
You can still use your Dataproc Metastore while it's being updated.
When the update succeeds, Dataproc Metastore automatically enters an active state. If the update fails,
then the Dataproc Metastore service rolls back to its previous healthy state.
The following instructions show you how to update a Dataproc Metastore
service.
Console
In the Google Cloud console, open the Dataproc Metastore page:
Open Dataproc Metastore
On the Dataproc Metastore page, click the service name of the
service that you want to update.
The Service detail page opens.
The Dataproc Metastore Service detail page
On the Configuration tab, click Edit .
The Edit service page opens.
Choose the values that you want to update for your service.
Click Submit .
Return to the Dataproc Metastore page, and
verify that your service was successfully updated.
gcloud CLI
To update a service, run the following gcloud metastore services update command:
gcloud metastore services update SERVICE \
--location= LOCATION \
--port= PORT \
--tier= TIER \
--kerberos_principal= KERBEROS_PRINCIPAL \
--keytab= KEYTAB \
--krb5-config= KRB5_CONFIG \
--update-hive-metastore-configs-from-file= [KEY=VALUE, ...] \
--clear-hive-metastore-configs \
--remove-hive-metastore-configs= [KEY, ...] \
--update-labels= [KEY=VALUE, ...] \
--clear-labels \
--remove-labels= [KEY, ...]
Replace the following:
SERVICE : The name of your Dataproc Metastore service.
LOCATION : The Google Cloud region that your Dataproc Metastore service resides in.
PORT : Optional: The TCP port of the Thrift interface you're using with your Dataproc Metastore service.
TIER : Optional: The tier capacity of your Dataproc Metastore service.
MAINTENANCE_WINDOW_DAY : Optional: The day of week when
the service window starts.
MAINTENANCE_WINDOW_HOUR : Optional: The hour of day when
the service window starts.
KERBEROS_PRINCIPAL : Optional: A Kerberos
principal that exists in both the keytab and the KDC. A typical
principal is of the form "primary/instance@REALM", but there's no
exact format.
KEYTAB : Optional: A Kerberos keytab file that
is used to authenticate a service principal with a Kerberos Key
Distribution Center.
KRB5_CONFIG : Optional: The krb5.config file
specifies the KDC and the Kerberos realm information, which includes
locations of KDCs and defaults for the realm and Kerberos
applications.
[KEY, ...] : Optional: The Hive metastore
configs you want to update.
If a variable exists in this field, its value is updated. Otherwise, a new variable is created.
If this flag is set, then -clear-hive-metastore-configs is
automatically set as well.
[KEY, ...] : Optional: The Hive metastore
configs you want to remove.
[KEY=VALUE, ...] : Optional: The labels or
Hive metastore key-value pair configs you
want to update.
[KEY, ...] : Optional: The labels or
Hive metastore key-value pair configs
you want to remove.
Verify that the update was successful.
REST
Follow the API instructions to update a service
by using the APIs Explorer.
Update the Hive Metastore warehouse config
If your Hive warehouse directory is on Cloud Storage, you should set a Metastore
config override. This override sets your specific data warehouse as the
default warehouse directory for Dataproc Metastore
Before you set this override, make sure that your Dataproc Metastore service
has object read and write permissions to access the warehouse directory.
For more information, see Hive warehouse directory .
The following instructions show you how to update a Hive Metastore config override.
Console
In the Google Cloud console, open the Dataproc Metastore page:
Open Dataproc Metastore
On the Dataproc Metastore page, click the service name of the
service want to update.
The Service detail page opens.
On the Configuration tab, click Edit .
The Edit service page opens.
In the Metastore config overrides , enter the following:
Key : Enter the following value: hive.metastore.warehouse.dir .
Value : The Cloud Storage location of your warehouse directory. For
example: gs://my-bucket/path/to/location .
Click Submit .
Return to the Dataproc Metastore page, and
verify that your service was successfully updated.
gcloud
To update a service, run the following gcloud metastore services update command:
gcloud metastore services update SERVICE \
--location= LOCATION \
--update-hive-metastore-configs="hive.metastore.warehouse.dir= CUSTOMER_DIR "
Replace the following:
SERVICE : The name of your Dataproc Metastore service.
LOCATION : The Google Cloud region that your Dataproc Metastore service resides in.
CUSTOMER_DIR : The Cloud Storage location of your warehouse directory.
For example: gs://my-bucket/path/to/location
Verify that the update was successful.
What's next
Cloud audit logging
Dataproc Metastore IAM and access control
Service access
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
