---
title: "Enum Accelerator.AcceleratorType (1.88.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.Accelerator.AcceleratorType
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.Accelerator.AcceleratorType
  title: "Enum Accelerator.AcceleratorType (1.88.0) \_|\_ Java client libraries \_\
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
Enum Accelerator.AcceleratorType (1.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.88.0 (latest)
1.87.0
1.85.0
1.83.0
1.82.0
1.81.0
1.80.0
1.78.0
1.76.0
1.75.0
1.74.0
1.73.0
1.72.0
1.70.0
1.68.0
1.67.0
1.64.0
1.63.0
1.62.0
1.60.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.49.0
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
1.37.0
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
1.24.0
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
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.1.1
public enum Accelerator . AcceleratorType extends Enum<Accelerator . AcceleratorType > implements ProtocolMessageEnum
Each type represents an Accelerator (Add-On) supported by Cloud Data Fusion
service.
Protobuf enum google.cloud.datafusion.v1.Accelerator.AcceleratorType
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
Default value, if unspecified.
ACCELERATOR_TYPE_UNSPECIFIED = 0;
ACCELERATOR_TYPE_UNSPECIFIED_VALUE
Default value, if unspecified.
ACCELERATOR_TYPE_UNSPECIFIED = 0;
CCAI_INSIGHTS
Contact Center AI Insights
This accelerator is used to enable import and export pipelines
custom built to streamline CCAI Insights processing.
CCAI_INSIGHTS = 3;
CCAI_INSIGHTS_VALUE
Contact Center AI Insights
This accelerator is used to enable import and export pipelines
custom built to streamline CCAI Insights processing.
CCAI_INSIGHTS = 3;
CDC
Change Data Capture accelerator for CDF.
CDC = 1;
CDC_VALUE
Change Data Capture accelerator for CDF.
CDC = 1;
HEALTHCARE
Cloud Healthcare accelerator for CDF. This accelerator is to enable Cloud
Healthcare specific CDF plugins developed by Healthcare team.
HEALTHCARE = 2;
HEALTHCARE_VALUE
Cloud Healthcare accelerator for CDF. This accelerator is to enable Cloud
Healthcare specific CDF plugins developed by Healthcare team.
HEALTHCARE = 2;
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
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
