---
title: "Interface ContainerSpecOrBuilder (0.92.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.ContainerSpecOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.ContainerSpecOrBuilder
  title: "Interface ContainerSpecOrBuilder (0.92.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Interface ContainerSpecOrBuilder (0.92.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.92.0 (latest)
0.91.0
0.89.0
0.87.0
0.86.0
0.85.0
0.84.0
0.82.0
0.80.0
0.79.0
0.78.0
0.77.0
0.76.0
0.74.0
0.72.0
0.71.0
0.68.0
0.67.0
0.66.0
0.64.0
0.63.0
0.62.0
0.61.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.53.0
0.52.0
0.51.0
0.50.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.41.0
0.40.0
0.39.0
0.38.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.28.0
0.27.0
0.26.0
0.25.0
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
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.5.0
public interface ContainerSpecOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getDefaultEnvironment()
public abstract FlexTemplateRuntimeEnvironment getDefaultEnvironment ()
Default runtime environment for the job.
.google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment default_environment = 4;
Returns
Type
Description
FlexTemplateRuntimeEnvironment
The defaultEnvironment.
getDefaultEnvironmentOrBuilder()
public abstract FlexTemplateRuntimeEnvironmentOrBuilder getDefaultEnvironmentOrBuilder ()
Default runtime environment for the job.
.google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment default_environment = 4;
Returns
Type
Description
FlexTemplateRuntimeEnvironmentOrBuilder
getImage()
public abstract String getImage ()
Name of the docker container image. E.g., gcr.io/project/some-image
string image = 1;
Returns
Type
Description
String
The image.
getImageBytes()
public abstract ByteString getImageBytes ()
Name of the docker container image. E.g., gcr.io/project/some-image
string image = 1;
Returns
Type
Description
ByteString
The bytes for image.
getImageRepositoryCertPath()
public abstract String getImageRepositoryCertPath ()
Cloud Storage path to self-signed certificate of private registry.
string image_repository_cert_path = 7;
Returns
Type
Description
String
The imageRepositoryCertPath.
getImageRepositoryCertPathBytes()
public abstract ByteString getImageRepositoryCertPathBytes ()
Cloud Storage path to self-signed certificate of private registry.
string image_repository_cert_path = 7;
Returns
Type
Description
ByteString
The bytes for imageRepositoryCertPath.
getImageRepositoryPasswordSecretId()
public abstract String getImageRepositoryPasswordSecretId ()
Secret Manager secret id for password to authenticate to private registry.
string image_repository_password_secret_id = 6;
Returns
Type
Description
String
The imageRepositoryPasswordSecretId.
getImageRepositoryPasswordSecretIdBytes()
public abstract ByteString getImageRepositoryPasswordSecretIdBytes ()
Secret Manager secret id for password to authenticate to private registry.
string image_repository_password_secret_id = 6;
Returns
Type
Description
ByteString
The bytes for imageRepositoryPasswordSecretId.
getImageRepositoryUsernameSecretId()
public abstract String getImageRepositoryUsernameSecretId ()
Secret Manager secret id for username to authenticate to private registry.
string image_repository_username_secret_id = 5;
Returns
Type
Description
String
The imageRepositoryUsernameSecretId.
getImageRepositoryUsernameSecretIdBytes()
public abstract ByteString getImageRepositoryUsernameSecretIdBytes ()
Secret Manager secret id for username to authenticate to private registry.
string image_repository_username_secret_id = 5;
Returns
Type
Description
ByteString
The bytes for imageRepositoryUsernameSecretId.
getMetadata()
public abstract TemplateMetadata getMetadata ()
Metadata describing a template including description and validation rules.
.google.dataflow.v1beta3.TemplateMetadata metadata = 2;
Returns
Type
Description
TemplateMetadata
The metadata.
getMetadataOrBuilder()
public abstract TemplateMetadataOrBuilder getMetadataOrBuilder ()
Metadata describing a template including description and validation rules.
.google.dataflow.v1beta3.TemplateMetadata metadata = 2;
Returns
Type
Description
TemplateMetadataOrBuilder
getSdkInfo()
public abstract SDKInfo getSdkInfo ()
Required. SDK info of the Flex Template.
.google.dataflow.v1beta3.SDKInfo sdk_info = 3;
Returns
Type
Description
SDKInfo
The sdkInfo.
getSdkInfoOrBuilder()
public abstract SDKInfoOrBuilder getSdkInfoOrBuilder ()
Required. SDK info of the Flex Template.
.google.dataflow.v1beta3.SDKInfo sdk_info = 3;
Returns
Type
Description
SDKInfoOrBuilder
hasDefaultEnvironment()
public abstract boolean hasDefaultEnvironment ()
Default runtime environment for the job.
.google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment default_environment = 4;
Returns
Type
Description
boolean
Whether the defaultEnvironment field is set.
hasMetadata()
public abstract boolean hasMetadata ()
Metadata describing a template including description and validation rules.
.google.dataflow.v1beta3.TemplateMetadata metadata = 2;
Returns
Type
Description
boolean
Whether the metadata field is set.
hasSdkInfo()
public abstract boolean hasSdkInfo ()
Required. SDK info of the Flex Template.
.google.dataflow.v1beta3.SDKInfo sdk_info = 3;
Returns
Type
Description
boolean
Whether the sdkInfo field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
