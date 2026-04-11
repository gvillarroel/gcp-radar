---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.063Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Balanced persistent disk support"
feature_slug: "balanced-persistent-disk-support"
latest_feature_date: "2021-01-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
keywords:
  - "balanced"
  - "persistent"
  - "disk"
  - "dataproc"
  - "supports"
  - "the"
  - "pd"
  - "type"
---

# Balanced persistent disk support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports the pd-balanced persistent disk type for cluster storage.

## Extended Definition

Dataproc supports the pd-balanced persistent disk type for cluster storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- March 28, 2023 Announcement New sub-minor versions of Dataproc images: 1.5.87-debian10, 1.5.87-rocky8, 1.5.87-ubuntu18 2.0.61-debian10, 2.0.61-rocky8, 2.0.61-ubuntu18 2.1.9-debian11, 2.1.9-rocky8, 2.1.9-ubuntu20 Feature Dataproc cluster creation now supports the pd-extreme disk type.
- June 06, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.105-debian10, 2.0.105-rocky8, 2.0.105-ubuntu18 2.1.53-debian11, 2.1.53-rocky8, 2.1.53-ubuntu20, 2.1.53-ubuntu20-arm 2.2.19-debian12, 2.2.19-rocky9, 2.2.19-ubuntu22 Change Dataproc on Compute Engine: When creating a cluster with the latest Dataproc on Compute Engine image versions, the secondary worker boot disk type now defaults to the primary worker boot disk type, which is pd-standard if the primary worker boot disk type is not specified.
- Announcement New Dataproc Serverless for Spark runtime versions : 1.1.98 1.2.42 2.2.42 April 01, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.2.51-debian12, 2.2.51-rocky9, 2.2.51-ubuntu22 Change Dataproc on Compute Engine: Hyperdisk-Balanced is now the default primary disk type when creating a cluster from the console.
- The following default configurations are now applied to clusters created with N4 or C4 machine types: bootdisktype = "hyperdisk-balanced" nictype = "gvnic" Change Hyperdisks for Dataproc clusters are now created with default throughput and IOPS.

### "Enum AuthenticationConfig.AuthenticationType (4.85.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType)
- Source ID: `site-java-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Protobuf enum google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description AUTHENTICATION TYPE UNSPECIFIED If AuthenticationType is unspecified then END USER CREDENTIALS is used for 3.0 and newer runtimes, and SERVICE ACCOUNT is used for older runtimes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- Use #forNumber(int) instead. valueOf(String name) values() Methods Name Description getDescriptorForType() getNumber() getValueDescriptor() Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- AUTHENTICATION TYPE UNSPECIFIED = 0; AUTHENTICATION TYPE UNSPECIFIED VALUE If AuthenticationType is unspecified then END USER CREDENTIALS is used for 3.0 and newer runtimes, and SERVICE ACCOUNT is used for older runtimes.

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the machine type resource, for example, n1-standard-2 . diskConfig object ( DiskConfig ) Optional.
- Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive).
- Type of the boot disk (default is "pd-standard").
- JSON representation DiskConfig JSON representation AttachedDiskConfig JSON representation DiskType Preemptibility ManagedGroupConfig JSON representation AcceleratorConfig JSON representation InstanceFlexibilityPolicy JSON representation ProvisioningModelMix JSON representation InstanceSelection JSON representation InstanceSelectionResult JSON representation StartupConfig JSON representation The config settings for Compute Engine resources in an instance group, such as a master or worker group.

