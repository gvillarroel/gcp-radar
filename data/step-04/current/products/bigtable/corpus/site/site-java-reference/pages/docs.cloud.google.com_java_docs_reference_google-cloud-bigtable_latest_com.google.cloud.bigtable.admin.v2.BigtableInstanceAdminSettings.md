---
title: "Class BigtableInstanceAdminSettings (2.74.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings
  title: "Class BigtableInstanceAdminSettings (2.74.0) \_|\_ Java client libraries\
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
Class BigtableInstanceAdminSettings (2.74.0)
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
public final class BigtableInstanceAdminSettings
Settings class to configure an instance of BigtableInstanceAdminClient .
It must be configured with a project ID and can be used to change default RPC settings.
Example usage:
BigtableInstanceAdminSettings . Builder settingsBuilder = BigtableInstanceAdminSettings . newBuilder ()
. setProjectId ( "my-project" );
settingsBuilder . stubSettings (). createInstanceSettings ()
. setRetrySettings (
RetrySettings . newBuilder ()
. setTotalTimeout ( Duration . ofMinutes ( 15 ))
. build ());
BigtableInstanceAdminSettings settings = settingsBuilder . build ();
Inheritance
java.lang.Object >
BigtableInstanceAdminSettings
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
Static Methods
newBuilder()
public static BigtableInstanceAdminSettings . Builder newBuilder ()
Returns a new builder for this class.
Returns
Type
Description
BigtableInstanceAdminSettings.Builder
newBuilderForEmulator(int port)
public static BigtableInstanceAdminSettings . Builder newBuilderForEmulator ( int port )
Create a new builder preconfigured to connect to the Bigtable emulator with port number.
Parameter
Name
Description
port
int
Returns
Type
Description
BigtableInstanceAdminSettings.Builder
newBuilderForEmulator(String hostname, int port)
public static BigtableInstanceAdminSettings . Builder newBuilderForEmulator ( String hostname , int port )
Creates a new builder preconfigured to connect to the Bigtable emulator with host name and port
number.
Parameters
Name
Description
hostname
String
port
int
Returns
Type
Description
BigtableInstanceAdminSettings.Builder
Methods
getCredentialsProvider()
public CredentialsProvider getCredentialsProvider ()
Gets the credentials provider to use for getting the credentials to make calls with.
Returns
Type
Description
CredentialsProvider
getProjectId()
public String getProjectId ()
Gets the ID of the project whose instances the client will manage.
Returns
Type
Description
String
getStubSettings()
public BigtableInstanceAdminStubSettings getStubSettings ()
Gets the underlying RPC settings.
Returns
Type
Description
BigtableInstanceAdminStubSettings
toBuilder()
public BigtableInstanceAdminSettings . Builder toBuilder ()
Returns a builder containing all the values of this settings class.
Returns
Type
Description
BigtableInstanceAdminSettings.Builder
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
