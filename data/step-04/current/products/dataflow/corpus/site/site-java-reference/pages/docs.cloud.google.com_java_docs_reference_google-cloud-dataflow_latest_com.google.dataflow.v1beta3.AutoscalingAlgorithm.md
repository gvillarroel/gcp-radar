---
title: "Enum AutoscalingAlgorithm (0.92.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingAlgorithm
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingAlgorithm
  title: "Enum AutoscalingAlgorithm (0.92.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Enum AutoscalingAlgorithm (0.92.0)
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
public enum AutoscalingAlgorithm extends Enum<AutoscalingAlgorithm> implements ProtocolMessageEnum
Specifies the algorithm used to determine the number of worker
processes to run at any given point in time, based on the amount of
data left to process, the number of workers, and how quickly
existing workers are processing data.
Protobuf enum google.dataflow.v1beta3.AutoscalingAlgorithm
Implements
ProtocolMessageEnum
Inherited Members
Enum.<T>valueOf(Class<T>,String)
Enum.clone()
Enum.compareTo(E)
Enum.equals(Object)
Enum.finalize()
Enum.getDeclaringClass()
Enum.hashCode()
Enum.name()
Enum.ordinal()
Enum.toString()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
Name
Description
AUTOSCALING_ALGORITHM_BASIC
Increase worker count over time to reduce job execution time.
AUTOSCALING_ALGORITHM_BASIC = 2;
AUTOSCALING_ALGORITHM_BASIC_VALUE
Increase worker count over time to reduce job execution time.
AUTOSCALING_ALGORITHM_BASIC = 2;
AUTOSCALING_ALGORITHM_NONE
Disable autoscaling.
AUTOSCALING_ALGORITHM_NONE = 1;
AUTOSCALING_ALGORITHM_NONE_VALUE
Disable autoscaling.
AUTOSCALING_ALGORITHM_NONE = 1;
AUTOSCALING_ALGORITHM_UNKNOWN
The algorithm is unknown, or unspecified.
AUTOSCALING_ALGORITHM_UNKNOWN = 0;
AUTOSCALING_ALGORITHM_UNKNOWN_VALUE
The algorithm is unknown, or unspecified.
AUTOSCALING_ALGORITHM_UNKNOWN = 0;
UNRECOGNIZED
Static Methods
Name
Description
forNumber(int value)
getDescriptor()
internalGetValueMap()
valueOf(Descriptors.EnumValueDescriptor desc)
valueOf(int value)
Deprecated. Use #forNumber(int) instead.
valueOf(String name)
values()
Methods
Name
Description
getDescriptorForType()
getNumber()
getValueDescriptor()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
