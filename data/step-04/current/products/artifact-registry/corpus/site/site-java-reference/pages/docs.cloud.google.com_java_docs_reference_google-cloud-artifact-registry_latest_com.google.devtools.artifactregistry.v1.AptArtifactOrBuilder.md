---
title: "Interface AptArtifactOrBuilder (1.87.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.AptArtifactOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.AptArtifactOrBuilder
  title: "Interface AptArtifactOrBuilder (1.87.0) \_|\_ Java client libraries \_|\_\
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
Interface AptArtifactOrBuilder (1.87.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.87.0 (latest)
1.86.0
1.84.0
1.82.0
1.81.0
1.80.0
1.79.0
1.77.0
1.75.0
1.74.0
1.73.0
1.72.0
1.71.0
1.69.0
1.67.0
1.66.0
1.63.0
1.62.0
1.61.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.9
1.1.1
0.5.0
0.4.0
public interface AptArtifactOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getArchitecture()
public abstract String getArchitecture ()
Output only. Operating system architecture of the artifact.
string architecture = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The architecture.
getArchitectureBytes()
public abstract ByteString getArchitectureBytes ()
Output only. Operating system architecture of the artifact.
string architecture = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for architecture.
getComponent()
public abstract String getComponent ()
Output only. Repository component of the artifact.
string component = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The component.
getComponentBytes()
public abstract ByteString getComponentBytes ()
Output only. Repository component of the artifact.
string component = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for component.
getControlFile()
public abstract ByteString getControlFile ()
Output only. Contents of the artifact's control metadata file.
bytes control_file = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The controlFile.
getName()
public abstract String getName ()
Output only. The Artifact Registry resource name of the artifact.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
Output only. The Artifact Registry resource name of the artifact.
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for name.
getPackageName()
public abstract String getPackageName ()
Output only. The Apt package name of the artifact.
string package_name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The packageName.
getPackageNameBytes()
public abstract ByteString getPackageNameBytes ()
Output only. The Apt package name of the artifact.
string package_name = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for packageName.
getPackageType()
public abstract AptArtifact . PackageType getPackageType ()
Output only. An artifact is a binary or source package.
.google.devtools.artifactregistry.v1.AptArtifact.PackageType package_type = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AptArtifact.PackageType
The packageType.
getPackageTypeValue()
public abstract int getPackageTypeValue ()
Output only. An artifact is a binary or source package.
.google.devtools.artifactregistry.v1.AptArtifact.PackageType package_type = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for packageType.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
