---
title: "Interface AuxiliaryVersionConfigOrBuilder (2.89.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AuxiliaryVersionConfigOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc-metastore/latest/com.google.cloud.metastore.v1.AuxiliaryVersionConfigOrBuilder
  title: "Interface AuxiliaryVersionConfigOrBuilder (2.89.0) \_|\_ Java client libraries\
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
Interface AuxiliaryVersionConfigOrBuilder (2.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.89.0 (latest)
2.88.0
2.86.0
2.84.0
2.83.0
2.82.0
2.81.0
2.79.0
2.77.0
2.76.0
2.75.0
2.74.0
2.73.0
2.71.0
2.69.0
2.68.0
2.65.0
2.64.0
2.63.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.50.0
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
2.38.0
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
2.25.0
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
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.4
2.3.0
2.2.0
2.1.9
public interface AuxiliaryVersionConfigOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsConfigOverrides(String key)
public abstract boolean containsConfigOverrides ( String key )
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getConfigOverrides() (deprecated)
public abstract Map<String , String > getConfigOverrides ()
Use #getConfigOverridesMap() instead.
Returns
Type
Description
Map < String , String >
getConfigOverridesCount()
public abstract int getConfigOverridesCount ()
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
Returns
Type
Description
int
getConfigOverridesMap()
public abstract Map<String , String > getConfigOverridesMap ()
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
Returns
Type
Description
Map < String , String >
getConfigOverridesOrDefault(String key, String defaultValue)
public abstract String getConfigOverridesOrDefault ( String key , String defaultValue )
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
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
getConfigOverridesOrThrow(String key)
public abstract String getConfigOverridesOrThrow ( String key )
A mapping of Hive metastore configuration key-value pairs to apply to the
auxiliary Hive metastore (configured in hive-site.xml ) in addition to
the primary version's overrides. If keys are present in both the auxiliary
version's overrides and the primary version's overrides, the value from
the auxiliary version's overrides takes precedence.
map<string, string> config_overrides = 2;
Parameter
Name
Description
key
String
Returns
Type
Description
String
getNetworkConfig()
public abstract NetworkConfig getNetworkConfig ()
Output only. The network configuration contains the endpoint URI(s) of the
auxiliary Hive metastore service.
.google.cloud.metastore.v1.NetworkConfig network_config = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
NetworkConfig
The networkConfig.
getNetworkConfigOrBuilder()
public abstract NetworkConfigOrBuilder getNetworkConfigOrBuilder ()
Output only. The network configuration contains the endpoint URI(s) of the
auxiliary Hive metastore service.
.google.cloud.metastore.v1.NetworkConfig network_config = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
NetworkConfigOrBuilder
getVersion()
public abstract String getVersion ()
The Hive metastore version of the auxiliary service. It must be less
than the primary Hive metastore service's version.
string version = 1;
Returns
Type
Description
String
The version.
getVersionBytes()
public abstract ByteString getVersionBytes ()
The Hive metastore version of the auxiliary service. It must be less
than the primary Hive metastore service's version.
string version = 1;
Returns
Type
Description
ByteString
The bytes for version.
hasNetworkConfig()
public abstract boolean hasNetworkConfig ()
Output only. The network configuration contains the endpoint URI(s) of the
auxiliary Hive metastore service.
.google.cloud.metastore.v1.NetworkConfig network_config = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the networkConfig field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
