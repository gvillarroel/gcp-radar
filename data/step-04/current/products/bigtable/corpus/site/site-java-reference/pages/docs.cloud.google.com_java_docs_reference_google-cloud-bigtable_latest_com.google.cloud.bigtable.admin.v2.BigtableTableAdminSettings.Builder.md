---
title: "Class BigtableTableAdminSettings.Builder (2.74.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminSettings.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminSettings.Builder
  title: "Class BigtableTableAdminSettings.Builder (2.74.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class BigtableTableAdminSettings.Builder (2.74.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.74.0 (latest)
2.73.0
2.72.0
2.71.0
2.70.0
2.68.0
2.67.1
2.66.0
2.65.1
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.2
2.56.0
2.54.0
2.52.0
2.51.2
2.49.0
2.46.0
2.45.1
2.44.1
2.43.0
2.42.0
2.40.0
2.39.5
2.37.0
2.35.1
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
public static final class BigtableTableAdminSettings . Builder
Builder for BigtableTableAdminSettings.
Inheritance
java.lang.Object >
BigtableTableAdminSettings.Builder
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
build()
public BigtableTableAdminSettings build ()
Builds an instance of the settings.
Returns
Type
Description
BigtableTableAdminSettings
Exceptions
Type
Description
IOException
getCredentialsProvider()
public CredentialsProvider getCredentialsProvider ()
Gets the credentials provider to use for getting the credentials to make calls with.
Returns
Type
Description
CredentialsProvider
getInstanceId()
public String getInstanceId ()
Gets the instance ID of the instance whose tables the client will manage.
Returns
Type
Description
String
getProjectId()
public String getProjectId ()
Gets the project ID of the instance whose tables the client will manage.
Returns
Type
Description
String
setCredentialsProvider(CredentialsProvider credentialsProvider)
public BigtableTableAdminSettings . Builder setCredentialsProvider ( CredentialsProvider credentialsProvider )
Sets the credentials provider to use for getting the credentials to make calls with.
Parameter
Name
Description
credentialsProvider
CredentialsProvider
Returns
Type
Description
BigtableTableAdminSettings.Builder
setInstanceId(String instanceId)
public BigtableTableAdminSettings . Builder setInstanceId ( String instanceId )
Sets the instance ID of the instance whose tables the client will manage.
Parameter
Name
Description
instanceId
String
Returns
Type
Description
BigtableTableAdminSettings.Builder
setProjectId(String projectId)
public BigtableTableAdminSettings . Builder setProjectId ( String projectId )
Sets the project ID of the instance whose tables the client will manage.
Parameter
Name
Description
projectId
String
Returns
Type
Description
BigtableTableAdminSettings.Builder
stubSettings()
public BigtableTableAdminStubSettings . Builder stubSettings ()
Returns the builder for the settings used for all RPCs.
This is meant for advanced usage. The default RPC settings are set to their recommended
values.
Returns
Type
Description
BigtableTableAdminStubSettings.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
