---
title: "Interface ComputationTopologyOrBuilder (0.92.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.ComputationTopologyOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.ComputationTopologyOrBuilder
  title: "Interface ComputationTopologyOrBuilder (0.92.0) \_|\_ Java client libraries\
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
Interface ComputationTopologyOrBuilder (0.92.0)
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
public interface ComputationTopologyOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getComputationId()
public abstract String getComputationId ()
The ID of the computation.
string computation_id = 5;
Returns
Type
Description
String
The computationId.
getComputationIdBytes()
public abstract ByteString getComputationIdBytes ()
The ID of the computation.
string computation_id = 5;
Returns
Type
Description
ByteString
The bytes for computationId.
getInputs(int index)
public abstract StreamLocation getInputs ( int index )
The inputs to the computation.
repeated .google.dataflow.v1beta3.StreamLocation inputs = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
StreamLocation
getInputsCount()
public abstract int getInputsCount ()
The inputs to the computation.
repeated .google.dataflow.v1beta3.StreamLocation inputs = 3;
Returns
Type
Description
int
getInputsList()
public abstract List<StreamLocation> getInputsList ()
The inputs to the computation.
repeated .google.dataflow.v1beta3.StreamLocation inputs = 3;
Returns
Type
Description
List < StreamLocation >
getInputsOrBuilder(int index)
public abstract StreamLocationOrBuilder getInputsOrBuilder ( int index )
The inputs to the computation.
repeated .google.dataflow.v1beta3.StreamLocation inputs = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
StreamLocationOrBuilder
getInputsOrBuilderList()
public abstract List < ? extends StreamLocationOrBuilder > getInputsOrBuilderList ()
The inputs to the computation.
repeated .google.dataflow.v1beta3.StreamLocation inputs = 3;
Returns
Type
Description
List < ? extends com.google.dataflow.v1beta3.StreamLocationOrBuilder >
getKeyRanges(int index)
public abstract KeyRangeLocation getKeyRanges ( int index )
The key ranges processed by the computation.
repeated .google.dataflow.v1beta3.KeyRangeLocation key_ranges = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
KeyRangeLocation
getKeyRangesCount()
public abstract int getKeyRangesCount ()
The key ranges processed by the computation.
repeated .google.dataflow.v1beta3.KeyRangeLocation key_ranges = 2;
Returns
Type
Description
int
getKeyRangesList()
public abstract List<KeyRangeLocation> getKeyRangesList ()
The key ranges processed by the computation.
repeated .google.dataflow.v1beta3.KeyRangeLocation key_ranges = 2;
Returns
Type
Description
List < KeyRangeLocation >
getKeyRangesOrBuilder(int index)
public abstract KeyRangeLocationOrBuilder getKeyRangesOrBuilder ( int index )
The key ranges processed by the computation.
repeated .google.dataflow.v1beta3.KeyRangeLocation key_ranges = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
KeyRangeLocationOrBuilder
getKeyRangesOrBuilderList()
public abstract List < ? extends KeyRangeLocationOrBuilder > getKeyRangesOrBuilderList ()
The key ranges processed by the computation.
repeated .google.dataflow.v1beta3.KeyRangeLocation key_ranges = 2;
Returns
Type
Description
List < ? extends com.google.dataflow.v1beta3.KeyRangeLocationOrBuilder >
getOutputs(int index)
public abstract StreamLocation getOutputs ( int index )
The outputs from the computation.
repeated .google.dataflow.v1beta3.StreamLocation outputs = 4;
Parameter
Name
Description
index
int
Returns
Type
Description
StreamLocation
getOutputsCount()
public abstract int getOutputsCount ()
The outputs from the computation.
repeated .google.dataflow.v1beta3.StreamLocation outputs = 4;
Returns
Type
Description
int
getOutputsList()
public abstract List<StreamLocation> getOutputsList ()
The outputs from the computation.
repeated .google.dataflow.v1beta3.StreamLocation outputs = 4;
Returns
Type
Description
List < StreamLocation >
getOutputsOrBuilder(int index)
public abstract StreamLocationOrBuilder getOutputsOrBuilder ( int index )
The outputs from the computation.
repeated .google.dataflow.v1beta3.StreamLocation outputs = 4;
Parameter
Name
Description
index
int
Returns
Type
Description
StreamLocationOrBuilder
getOutputsOrBuilderList()
public abstract List < ? extends StreamLocationOrBuilder > getOutputsOrBuilderList ()
The outputs from the computation.
repeated .google.dataflow.v1beta3.StreamLocation outputs = 4;
Returns
Type
Description
List < ? extends com.google.dataflow.v1beta3.StreamLocationOrBuilder >
getStateFamilies(int index)
public abstract StateFamilyConfig getStateFamilies ( int index )
The state family values.
repeated .google.dataflow.v1beta3.StateFamilyConfig state_families = 7;
Parameter
Name
Description
index
int
Returns
Type
Description
StateFamilyConfig
getStateFamiliesCount()
public abstract int getStateFamiliesCount ()
The state family values.
repeated .google.dataflow.v1beta3.StateFamilyConfig state_families = 7;
Returns
Type
Description
int
getStateFamiliesList()
public abstract List<StateFamilyConfig> getStateFamiliesList ()
The state family values.
repeated .google.dataflow.v1beta3.StateFamilyConfig state_families = 7;
Returns
Type
Description
List < StateFamilyConfig >
getStateFamiliesOrBuilder(int index)
public abstract StateFamilyConfigOrBuilder getStateFamiliesOrBuilder ( int index )
The state family values.
repeated .google.dataflow.v1beta3.StateFamilyConfig state_families = 7;
Parameter
Name
Description
index
int
Returns
Type
Description
StateFamilyConfigOrBuilder
getStateFamiliesOrBuilderList()
public abstract List < ? extends StateFamilyConfigOrBuilder > getStateFamiliesOrBuilderList ()
The state family values.
repeated .google.dataflow.v1beta3.StateFamilyConfig state_families = 7;
Returns
Type
Description
List < ? extends com.google.dataflow.v1beta3.StateFamilyConfigOrBuilder >
getSystemStageName()
public abstract String getSystemStageName ()
The system stage name.
string system_stage_name = 1;
Returns
Type
Description
String
The systemStageName.
getSystemStageNameBytes()
public abstract ByteString getSystemStageNameBytes ()
The system stage name.
string system_stage_name = 1;
Returns
Type
Description
ByteString
The bytes for systemStageName.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
