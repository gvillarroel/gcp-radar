---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.069Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch HPC CentOS image support"
feature_slug: "batch-hpc-centos-image-support"
latest_feature_date: "2024-08-13"
deprecation_date: "2024-06-30"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk"
keywords:
  - "hpc"
  - "reached"
  - "centos"
  - "family"
  - "end"
  - "image"
  - "the"
  - "batch"
---

# Batch HPC CentOS image support

Product: Batch
Coverage: LOW

## Step 02 Summary

The Batch HPC CentOS (batch-hpc-centos) image family reached end of development and is deprecated; deprecated on 2024-06-30.

## Extended Definition

The Batch HPC CentOS (batch-hpc-centos) image family reached end of development and is deprecated; deprecated on 2024-06-30.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk)

## Supporting Pages

### Batch release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated Batch CentOS ( batch-centos ) and Batch HPC CentOS ( batch-hpc-centos ) have reached end of development due to the end of support (EOS) of Compute Engine CentOS 7 images on June 30, 2024 .
- The final image versions of these Batch OSes— batch-centos-7-official-20240628-00-p00 and batch-hpc-centos-7-official-20240628-00-p00 from June 28, 2024—are only supported until August 27, 2024.
- This restriction only applies to Batch OSes that have not already reached the end of development as of the date of this notice.
- By then, migrate any job that uses Batch CentOS or Batch HPC CentOS to a different OS.

### "Class AllocationPolicy.Disk.Builder (0.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder)
- Source ID: `site-java-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The following image values are supported for a boot disk: batch-debian : use Batch Debian images. batch-cos : use Batch Container-Optimized images. batch-hpc-rocky : use Batch HPC Rocky Linux images. string image = 4; Returns Type Description String The image. getImageBytes() public ByteString getImageBytes () URL for a VM image to use as the data source for this disk.
- The following image values are supported for a boot disk: batch-debian : use Batch Debian images. batch-cos : use Batch Container-Optimized images. batch-hpc-rocky : use Batch HPC Rocky Linux images. string image = 4; Returns Type Description boolean Whether the image field is set. hasSnapshot() public boolean hasSnapshot () Name of a snapshot used as the data source.
- The following image values are supported for a boot disk: batch-debian : use Batch Debian images. batch-cos : use Batch Container-Optimized images. batch-hpc-rocky : use Batch HPC Rocky Linux images. string image = 4; Returns Type Description AllocationPolicy.Disk.Builder This builder for chaining. clearSizeGb() public AllocationPolicy .
- The following image values are supported for a boot disk: batch-debian : use Batch Debian images. batch-cos : use Batch Container-Optimized images. batch-hpc-rocky : use Batch HPC Rocky Linux images. string image = 4; Returns Type Description ByteString The bytes for image. getSizeGb() public long getSizeGb () Disk size in GB.

### "Class AllocationPolicy.Disk (0.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk)
- Source ID: `site-java-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following image values are supported for a boot disk: batch-debian : use Batch Debian images. batch-cos : use Batch Container-Optimized images. batch-hpc-rocky : use Batch HPC Rocky Linux images. string image = 4; Returns Type Description String The image. getImageBytes() public ByteString getImageBytes () URL for a VM image to use as the data source for this disk.
- The following image values are supported for a boot disk: batch-debian : use Batch Debian images. batch-cos : use Batch Container-Optimized images. batch-hpc-rocky : use Batch HPC Rocky Linux images. string image = 4; Returns Type Description boolean Whether the image field is set. hasSnapshot() public boolean hasSnapshot () Name of a snapshot used as the data source.
- The following image values are supported for a boot disk: batch-debian : use Batch Debian images. batch-cos : use Batch Container-Optimized images. batch-hpc-rocky : use Batch HPC Rocky Linux images. string image = 4; Returns Type Description ByteString The bytes for image. getParserForType() public Parser<AllocationPolicy .
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{image version} You can also use Batch customized image in short names.

