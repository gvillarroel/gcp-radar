---
title: "Class CreateAppProfileRequest (2.74.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CreateAppProfileRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CreateAppProfileRequest
  title: "Class CreateAppProfileRequest (2.74.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class CreateAppProfileRequest (2.74.0)
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
public final class CreateAppProfileRequest
Parameters for creating a new Cloud Bigtable app profile.
An application profile, or app profile, stores settings that tell your Cloud Bigtable instance
how to handle incoming requests from an application. When one of your applications connects to a
Cloud Bigtable instance, it can specify an app profile, and Cloud Bigtable uses that app profile
for any requests that the application sends over that connection.
Sample code:
AppProfile existingAppProfile = ...;
CreateAppProfileRequest appProfileRequest = CreateAppProfileRequest . of ( "my-instance" , "my-new-app-profile" )
. setRoutingPolicy ( SingleClusterRoutingPolicy . of ( "my-cluster" ));
See Also: AppProfilefor more details
Inheritance
java.lang.Object >
CreateAppProfileRequest
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
of(String instanceId, String appProfileId)
public static CreateAppProfileRequest of ( String instanceId , String appProfileId )
Builds a new request to create a new app profile in the specified instance.
Parameters
Name
Description
instanceId
String
appProfileId
String
Returns
Type
Description
CreateAppProfileRequest
Methods
setDescription(String description)
public CreateAppProfileRequest setDescription ( String description )
Sets the optional long form description of the use case for the AppProfile.
Parameter
Name
Description
description
String
Returns
Type
Description
CreateAppProfileRequest
setIgnoreWarnings(boolean value)
public CreateAppProfileRequest setIgnoreWarnings ( boolean value )
Configures if safety warnings should be disabled.
Parameter
Name
Description
value
boolean
Returns
Type
Description
CreateAppProfileRequest
setIsolationPolicy(AppProfile.IsolationPolicy isolationPolicy)
public CreateAppProfileRequest setIsolationPolicy ( AppProfile . IsolationPolicy isolationPolicy )
Sets the isolation policy for all read/write requests that use this app profile.
Parameter
Name
Description
isolationPolicy
AppProfile.IsolationPolicy
Returns
Type
Description
CreateAppProfileRequest
setRoutingPolicy(AppProfile.RoutingPolicy routingPolicy)
public CreateAppProfileRequest setRoutingPolicy ( AppProfile . RoutingPolicy routingPolicy )
Sets the routing policy for all read/write requests that use this app profile.
Parameter
Name
Description
routingPolicy
AppProfile.RoutingPolicy
Returns
Type
Description
CreateAppProfileRequest
toProto(String projectId)
public CreateAppProfileRequest toProto ( String projectId )
Internal Only : This feature is not stable for application use.
Creates the request protobuf. This method is considered an internal implementation detail and
not meant to be used by applications.
Parameter
Name
Description
projectId
String
Returns
Type
Description
com.google.bigtable.admin.v2.CreateAppProfileRequest
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
