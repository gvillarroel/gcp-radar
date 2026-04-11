---
title: "Interface DeploymentOrBuilder (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.DeploymentOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.DeploymentOrBuilder
  title: "Interface DeploymentOrBuilder (2.88.0) \_|\_ Java client libraries \_|\_\
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
Interface DeploymentOrBuilder (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.5
2.2.0
2.1.10
public interface DeploymentOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsLabels(String key)
public abstract boolean containsLabels ( String key )
Labels identify the deployment within the user universe and same target.
Validation regex for label names: ^ a-z0-9 ?$ .
Value for an individual label must be <= 512 bytes, the total
size of all label names and values must be <= 1024 bytes.
Label named "language" can be used to record the programming language of
the profiled deployment. The standard choices for the value include "java",
"go", "python", "ruby", "nodejs", "php", "dotnet".
For deployments running on Google Cloud Platform, "zone" or "region" label
should be present describing the deployment location. An example of a zone
is "us-central1-a", an example of a region is "us-central1" or
"us-central".
map<string, string> labels = 3;
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getLabels() (deprecated)
public abstract Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public abstract int getLabelsCount ()
Labels identify the deployment within the user universe and same target.
Validation regex for label names: ^ a-z0-9 ?$ .
Value for an individual label must be <= 512 bytes, the total
size of all label names and values must be <= 1024 bytes.
Label named "language" can be used to record the programming language of
the profiled deployment. The standard choices for the value include "java",
"go", "python", "ruby", "nodejs", "php", "dotnet".
For deployments running on Google Cloud Platform, "zone" or "region" label
should be present describing the deployment location. An example of a zone
is "us-central1-a", an example of a region is "us-central1" or
"us-central".
map<string, string> labels = 3;
Returns
Type
Description
int
getLabelsMap()
public abstract Map<String , String > getLabelsMap ()
Labels identify the deployment within the user universe and same target.
Validation regex for label names: ^ a-z0-9 ?$ .
Value for an individual label must be <= 512 bytes, the total
size of all label names and values must be <= 1024 bytes.
Label named "language" can be used to record the programming language of
the profiled deployment. The standard choices for the value include "java",
"go", "python", "ruby", "nodejs", "php", "dotnet".
For deployments running on Google Cloud Platform, "zone" or "region" label
should be present describing the deployment location. An example of a zone
is "us-central1-a", an example of a region is "us-central1" or
"us-central".
map<string, string> labels = 3;
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public abstract String getLabelsOrDefault ( String key , String defaultValue )
Labels identify the deployment within the user universe and same target.
Validation regex for label names: ^ a-z0-9 ?$ .
Value for an individual label must be <= 512 bytes, the total
size of all label names and values must be <= 1024 bytes.
Label named "language" can be used to record the programming language of
the profiled deployment. The standard choices for the value include "java",
"go", "python", "ruby", "nodejs", "php", "dotnet".
For deployments running on Google Cloud Platform, "zone" or "region" label
should be present describing the deployment location. An example of a zone
is "us-central1-a", an example of a region is "us-central1" or
"us-central".
map<string, string> labels = 3;
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
getLabelsOrThrow(String key)
public abstract String getLabelsOrThrow ( String key )
Labels identify the deployment within the user universe and same target.
Validation regex for label names: ^ a-z0-9 ?$ .
Value for an individual label must be <= 512 bytes, the total
size of all label names and values must be <= 1024 bytes.
Label named "language" can be used to record the programming language of
the profiled deployment. The standard choices for the value include "java",
"go", "python", "ruby", "nodejs", "php", "dotnet".
For deployments running on Google Cloud Platform, "zone" or "region" label
should be present describing the deployment location. An example of a zone
is "us-central1-a", an example of a region is "us-central1" or
"us-central".
map<string, string> labels = 3;
Parameter
Name
Description
key
String
Returns
Type
Description
String
getProjectId()
public abstract String getProjectId ()
Project ID is the ID of a cloud project.
Validation regex: ^ a-z {4,61}[a-z0-9]$ .
string project_id = 1;
Returns
Type
Description
String
The projectId.
getProjectIdBytes()
public abstract ByteString getProjectIdBytes ()
Project ID is the ID of a cloud project.
Validation regex: ^ a-z {4,61}[a-z0-9]$ .
string project_id = 1;
Returns
Type
Description
ByteString
The bytes for projectId.
getTarget()
public abstract String getTarget ()
Target is the service name used to group related deployments:
Service name for App Engine Flex / Standard.
Cluster and container name for GKE.
User-specified string for direct Compute Engine profiling (e.g. Java).
Job name for Dataflow.
Validation regex: ^ a-z0-9 ?$ .
string target = 2;
Returns
Type
Description
String
The target.
getTargetBytes()
public abstract ByteString getTargetBytes ()
Target is the service name used to group related deployments:
Service name for App Engine Flex / Standard.
Cluster and container name for GKE.
User-specified string for direct Compute Engine profiling (e.g. Java).
Job name for Dataflow.
Validation regex: ^ a-z0-9 ?$ .
string target = 2;
Returns
Type
Description
ByteString
The bytes for target.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
