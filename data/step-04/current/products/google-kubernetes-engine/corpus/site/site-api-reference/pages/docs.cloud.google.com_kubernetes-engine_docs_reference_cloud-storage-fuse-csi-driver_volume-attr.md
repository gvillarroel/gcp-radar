---
title: "Cloud Storage FUSE CSI driver volume attributes \_|\_ Google Kubernetes Engine\
  \ (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr
  title: "Cloud Storage FUSE CSI driver volume attributes \_|\_ Google Kubernetes\
    \ Engine (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
Cloud Storage FUSE CSI driver volume attributes
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Storage FUSE CSI driver
provides an abstraction layer for Cloud Storage FUSE
to ensure consistency, stability, and security for GKE users.
Note: We recommend that you use mount options if you want to configure how
Cloud Storage buckets are mounted on the local file system.
If you want to fine-tune specific behavior of the Cloud Storage FUSE CSI driver,
you can use volume attributes .
The following list describe the volume attributes that you can use.
disableMetrics
Description : Whether your workload should export metrics. This should be
set to "false" if you plan on using
Cloud Storage FUSE metrics .
Valid values :
Boolean values in string format: "true", "false".
Default value : "true" in GKE version 1.33.0-gke.2248000 or later; "false" in GKE version 1.33.0-gke.2248000 or earlier.
fileCacheCapacity
Description : The maximum size that the file cache can use. If a non-zero
value presents, this volume attribute enables file caching in Cloud Storage FUSE.
This volume attribute is translated to the configuration file field
file-cache:max-size-mb . We recommend that you use mount options to set this field.
Valid values :
Quantity values,
for example: 500Mi , 10Gi .
"-1": to use the cache volume's entire available capacity.
"0": the file cache is disabled.
Default value : "0".
fileCacheForRangeRead
Description : Whether the full object should be downloaded asynchronously
and stored in the Cloud Storage FUSE cache directory when the first read is done
from a non-zero offset. This should be set to "true" if you plan on performing
several random reads or partial reads.
This volume attribute is translated to the configuration file field
file-cache:cache-file-for-range-read . We recommend that you use mount options to set this field.
Valid values :
Boolean values in string format: "true", "false".
Default value : "false".
gcsfuseLoggingSeverity
Description : The severity of logs you want Cloud Storage FUSE to generate,
expressed as an enum.
This volume attribute is translated to the configuration file field
logging:severity . We recommend that you use mount options to set this field.
Valid values (ordered from lowest severity to highest severity):
trace
debug
info
warning
error
Default value : info .
gcsfuseMetadataPrefetchOnMount
Description : Enable the prefetch of the metadata caches for a
specified volume. To learn more, see
Use metadata prefetch to pre-populate the metadata cache .
Valid values :
Boolean values in string format: "true", "false".
Default value : "false".
metadataStatCacheCapacity
Description : The maximum size that the stat cache can use.
The stat cache is always entirely kept in memory.
If you are already using stat-cache-capacity mount option,
the value will still be honored and will be appropriately translated to this new configuration.
This volume attribute is translated to the configuration file field
metadata-cache:stat-cache-max-size-mb . We recommend that you use mount options to set this field.
Valid values :
Quantity values,
for example: 500Mi , 1Gi .
"-1": to let the stat cache use as much memory as needed.
"0": the stat cache is disabled.
Use the default value of 32Mi if your workload involves up to 20,000 files.
If your workload is larger than 20,000 files, increase the size by values
of 10 MiB for every additional 6,000 files, an average of ~1,500 bytes per file.
Default value : 32Mi .
metadataTypeCacheCapacity
Description : The maximum size per directory that the type cache can use.
The type cache is always entirely kept in memory.
This volume attribute is translated to the configuration file field
metadata-cache:type-cache-max-size-mb . We recommend that you use mount options to set this field.
Valid values :
Quantity values,
for example: 500Mi , 1Gi .
"-1": to let the type cache use as much memory as needed.
"0": the type cache is disabled.
Use the default value of 4Mi if the maximum number of files within a
single directory from the bucket you're mounting contains 20,000 files or less.
If the maximum number of files within a single directory that you're mounting
contains more than 20,000 files, increase the size by 1 MiB for every 5,000 files,
an average of ~200 bytes per file.
Default value : 4Mi .
metadataCacheTTLSeconds
Description : The time to live (TTL), in seconds, of cached metadata entries.
If you are already using the stat-cache-ttl or type-cache-ttl mount options,
the values will still be honored and will be appropriately translated to this new configuration.
This volume attribute is translated to the configuration file field
metadata-cache:ttl-secs . We recommend that you use mount options to set this field.
Valid values :
Integer values in string format, for example: "600".
"-1": bypass a TTL expiration and serve the file from the cache whenever it's available.
"0": ensure that the most up to date file is read. Using
a value of 0 issues a Get metadata call to make sure that the object
generation for the file in the cache matches what's stored in Cloud Storage.
Default value : "60".
skipCSIBucketAccessCheck
Description : Directs the CSI driver to skip redundant access control checks
for the Cloud Storage bucket, when set to "true". This reduces the
overhead of redundant Kubernetes Service API, Security Token Service, and IAM
calls. When the flag is set, the Cloud Storage FUSE process, running as part of
the sidecar container in the Pod, handles the bucket access control checks.
Valid values :
Boolean values in string format: "true", "false".
Default value : "false".
hostNetworkPodKSA
Description : Supported after Standard GKE cluster version
1.33.3-gke.1226000. Set this to "true" to configure your host network ( hostNetwork: true ) Pods to use their own Kubernetes Service Account (KSA) for authentication when accessing Cloud Storage using Cloud Storage FUSE. We recommend this security practice as it aligns with the principle of least privilege, providing granular access control.
If you omit this field or set it to "false" , hostNetwork Pods will default to routing requests from Pods running on the host network to the Compute Engine metadata server using the broader permissions of the node's default Service Account. In such a case, ensure that the node's default Service Account has sufficient permissions to access the bucket.
Valid values :
Boolean values in string format: "true", "false".
Default value : "false".
identityProvider
Description : Supported after Standard GKE cluster version
1.33.3-gke.1226000. Provide the full URL of your GKE cluster's Workload Identity issuer. This attribute is required if you manually manage the Cloud Storage FUSE sidecars for your hostNetwork: true Pods and want to enable those Pods to use their own Kubernetes Service Account (KSA) for authentication when accessing Cloud Storage.
Valid values :
URL in the format: https://container.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER_NAME .
Replace the following:
PROJECT_ID : your Google Cloud project ID.
LOCATION : the location of your cluster.
CLUSTER_NAME : the name of your Standard GKE cluster.
Default value : None. Explicitly provide a value when using private or custom sidecars to enable authentication for your hostNetwork: true Pods.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
