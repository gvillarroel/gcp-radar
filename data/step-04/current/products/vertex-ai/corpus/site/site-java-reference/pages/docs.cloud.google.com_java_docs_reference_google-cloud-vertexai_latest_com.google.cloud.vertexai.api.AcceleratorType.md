---
title: "Enum AcceleratorType (1.48.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.AcceleratorType
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.AcceleratorType
  title: "Enum AcceleratorType (1.48.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Enum AcceleratorType (1.48.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.48.0 (latest)
1.47.0
1.45.0
1.43.0
1.42.0
1.40.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.30.0
1.28.0
1.27.0
1.24.0
1.23.0
1.22.0
1.20.1
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
public enum AcceleratorType extends Enum<AcceleratorType> implements ProtocolMessageEnum
Represents a hardware accelerator type.
Protobuf enum google.cloud.vertexai.v1.AcceleratorType
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
ACCELERATOR_TYPE_UNSPECIFIED
Unspecified accelerator type, which means no accelerator.
ACCELERATOR_TYPE_UNSPECIFIED = 0;
ACCELERATOR_TYPE_UNSPECIFIED_VALUE
Unspecified accelerator type, which means no accelerator.
ACCELERATOR_TYPE_UNSPECIFIED = 0;
NVIDIA_A100_80GB
Nvidia A100 80GB GPU.
NVIDIA_A100_80GB = 9;
NVIDIA_A100_80GB_VALUE
Nvidia A100 80GB GPU.
NVIDIA_A100_80GB = 9;
NVIDIA_B200
Nvidia B200 GPU.
NVIDIA_B200 = 16;
NVIDIA_B200_VALUE
Nvidia B200 GPU.
NVIDIA_B200 = 16;
NVIDIA_GB200
Nvidia GB200 GPU.
NVIDIA_GB200 = 17;
NVIDIA_GB200_VALUE
Nvidia GB200 GPU.
NVIDIA_GB200 = 17;
NVIDIA_H100_80GB
Nvidia H100 80Gb GPU.
NVIDIA_H100_80GB = 13;
NVIDIA_H100_80GB_VALUE
Nvidia H100 80Gb GPU.
NVIDIA_H100_80GB = 13;
NVIDIA_H100_MEGA_80GB
Nvidia H100 Mega 80Gb GPU.
NVIDIA_H100_MEGA_80GB = 14;
NVIDIA_H100_MEGA_80GB_VALUE
Nvidia H100 Mega 80Gb GPU.
NVIDIA_H100_MEGA_80GB = 14;
NVIDIA_H200_141GB
Nvidia H200 141Gb GPU.
NVIDIA_H200_141GB = 15;
NVIDIA_H200_141GB_VALUE
Nvidia H200 141Gb GPU.
NVIDIA_H200_141GB = 15;
NVIDIA_L4
Nvidia L4 GPU.
NVIDIA_L4 = 11;
NVIDIA_L4_VALUE
Nvidia L4 GPU.
NVIDIA_L4 = 11;
NVIDIA_RTX_PRO_6000
Nvidia RTX Pro 6000 GPU.
NVIDIA_RTX_PRO_6000 = 18;
NVIDIA_RTX_PRO_6000_VALUE
Nvidia RTX Pro 6000 GPU.
NVIDIA_RTX_PRO_6000 = 18;
NVIDIA_TESLA_A100
Nvidia Tesla A100 GPU.
NVIDIA_TESLA_A100 = 8;
NVIDIA_TESLA_A100_VALUE
Nvidia Tesla A100 GPU.
NVIDIA_TESLA_A100 = 8;
NVIDIA_TESLA_K80
Deprecated: Nvidia Tesla K80 GPU has reached end of support,
see https://cloud.google.com/compute/docs/eol/k80-eol .
NVIDIA_TESLA_K80 = 1 [deprecated = true];
NVIDIA_TESLA_K80_VALUE
Deprecated: Nvidia Tesla K80 GPU has reached end of support,
see https://cloud.google.com/compute/docs/eol/k80-eol .
NVIDIA_TESLA_K80 = 1 [deprecated = true];
NVIDIA_TESLA_P100
Nvidia Tesla P100 GPU.
NVIDIA_TESLA_P100 = 2;
NVIDIA_TESLA_P100_VALUE
Nvidia Tesla P100 GPU.
NVIDIA_TESLA_P100 = 2;
NVIDIA_TESLA_P4
Nvidia Tesla P4 GPU.
NVIDIA_TESLA_P4 = 4;
NVIDIA_TESLA_P4_VALUE
Nvidia Tesla P4 GPU.
NVIDIA_TESLA_P4 = 4;
NVIDIA_TESLA_T4
Nvidia Tesla T4 GPU.
NVIDIA_TESLA_T4 = 5;
NVIDIA_TESLA_T4_VALUE
Nvidia Tesla T4 GPU.
NVIDIA_TESLA_T4 = 5;
NVIDIA_TESLA_V100
Nvidia Tesla V100 GPU.
NVIDIA_TESLA_V100 = 3;
NVIDIA_TESLA_V100_VALUE
Nvidia Tesla V100 GPU.
NVIDIA_TESLA_V100 = 3;
TPU_V2
TPU v2.
TPU_V2 = 6;
TPU_V2_VALUE
TPU v2.
TPU_V2 = 6;
TPU_V3
TPU v3.
TPU_V3 = 7;
TPU_V3_VALUE
TPU v3.
TPU_V3 = 7;
TPU_V4_POD
TPU v4.
TPU_V4_POD = 10;
TPU_V4_POD_VALUE
TPU v4.
TPU_V4_POD = 10;
TPU_V5_LITEPOD
TPU v5.
TPU_V5_LITEPOD = 12;
TPU_V5_LITEPOD_VALUE
TPU v5.
TPU_V5_LITEPOD = 12;
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
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
