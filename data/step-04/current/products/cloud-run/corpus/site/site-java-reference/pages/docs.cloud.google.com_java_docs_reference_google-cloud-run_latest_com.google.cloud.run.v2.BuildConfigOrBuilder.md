---
title: "Interface BuildConfigOrBuilder (0.88.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfigOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfigOrBuilder
  title: "Interface BuildConfigOrBuilder (0.88.0) \_|\_ Java client libraries \_|\_\
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
Interface BuildConfigOrBuilder (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.5
0.2.1
0.1.2
public interface BuildConfigOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsEnvironmentVariables(String key)
public abstract boolean containsEnvironmentVariables ( String key )
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getBaseImage()
public abstract String getBaseImage ()
Optional. The base image used to build the function.
string base_image = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The baseImage.
getBaseImageBytes()
public abstract ByteString getBaseImageBytes ()
Optional. The base image used to build the function.
string base_image = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for baseImage.
getEnableAutomaticUpdates()
public abstract boolean getEnableAutomaticUpdates ()
Optional. Sets whether the function will receive automatic base image
updates.
bool enable_automatic_updates = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
The enableAutomaticUpdates.
getEnvironmentVariables() (deprecated)
public abstract Map<String , String > getEnvironmentVariables ()
Use #getEnvironmentVariablesMap() instead.
Returns
Type
Description
Map < String , String >
getEnvironmentVariablesCount()
public abstract int getEnvironmentVariablesCount ()
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getEnvironmentVariablesMap()
public abstract Map<String , String > getEnvironmentVariablesMap ()
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getEnvironmentVariablesOrDefault(String key, String defaultValue)
public abstract String getEnvironmentVariablesOrDefault ( String key , String defaultValue )
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getEnvironmentVariablesOrThrow(String key)
public abstract String getEnvironmentVariablesOrThrow ( String key )
Optional. User-provided build-time environment variables for the function
map<string, string> environment_variables = 8 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
getFunctionTarget()
public abstract String getFunctionTarget ()
Optional. The name of the function (as defined in source code) that will be
executed. Defaults to the resource name suffix, if not specified. For
backward compatibility, if function with given name is not found, then the
system will try to use function named "function".
string function_target = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The functionTarget.
getFunctionTargetBytes()
public abstract ByteString getFunctionTargetBytes ()
Optional. The name of the function (as defined in source code) that will be
executed. Defaults to the resource name suffix, if not specified. For
backward compatibility, if function with given name is not found, then the
system will try to use function named "function".
string function_target = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for functionTarget.
getImageUri()
public abstract String getImageUri ()
Optional. Artifact Registry URI to store the built image.
string image_uri = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The imageUri.
getImageUriBytes()
public abstract ByteString getImageUriBytes ()
Optional. Artifact Registry URI to store the built image.
string image_uri = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for imageUri.
getName()
public abstract String getName ()
Output only. The Cloud Build name of the latest successful deployment of
the function.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
Output only. The Cloud Build name of the latest successful deployment of
the function.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for name.
getServiceAccount()
public abstract String getServiceAccount ()
Optional. Service account to be used for building the container. The format
of this field is
projects/{projectId}/serviceAccounts/{serviceAccountEmail} .
string service_account = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The serviceAccount.
getServiceAccountBytes()
public abstract ByteString getServiceAccountBytes ()
Optional. Service account to be used for building the container. The format
of this field is
projects/{projectId}/serviceAccounts/{serviceAccountEmail} .
string service_account = 9 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for serviceAccount.
getSourceLocation()
public abstract String getSourceLocation ()
The Cloud Storage bucket URI where the function source code is located.
string source_location = 2;
Returns
Type
Description
String
The sourceLocation.
getSourceLocationBytes()
public abstract ByteString getSourceLocationBytes ()
The Cloud Storage bucket URI where the function source code is located.
string source_location = 2;
Returns
Type
Description
ByteString
The bytes for sourceLocation.
getWorkerPool()
public abstract String getWorkerPool ()
Optional. Name of the Cloud Build Custom Worker Pool that should be used to
build the Cloud Run function. The format of this field is
projects/{project}/locations/{region}/workerPools/{workerPool} where
{project} and {region} are the project id and region respectively where
the worker pool is defined and {workerPool} is the short name of the
worker pool.
string worker_pool = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The workerPool.
getWorkerPoolBytes()
public abstract ByteString getWorkerPoolBytes ()
Optional. Name of the Cloud Build Custom Worker Pool that should be used to
build the Cloud Run function. The format of this field is
projects/{project}/locations/{region}/workerPools/{workerPool} where
{project} and {region} are the project id and region respectively where
the worker pool is defined and {workerPool} is the short name of the
worker pool.
string worker_pool = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for workerPool.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
