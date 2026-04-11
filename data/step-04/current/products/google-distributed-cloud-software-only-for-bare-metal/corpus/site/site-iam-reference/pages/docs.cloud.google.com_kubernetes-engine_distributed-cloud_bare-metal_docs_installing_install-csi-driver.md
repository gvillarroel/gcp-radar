---
title: "Install a Container Storage Interface driver \_|\_ Google Distributed Cloud\
  \ (software only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-csi-driver
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-csi-driver
  title: "Install a Container Storage Interface driver \_|\_ Google Distributed Cloud\
    \ (software only) for bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Install a Container Storage Interface driver
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to install a Container Storage Interface (CSI) storage
driver to Google Distributed Cloud clusters.
Overview
Container Storage Interface
(CSI) is an open standard API supported by many major storage
vendors that enables Kubernetes to expose arbitrary storage systems to
containerized workloads.
Kubernetes volumes are managed by vendor-specific storage drivers, which have
historically been
compiled into Kubernetes binaries .
Previously, you couldn't use a storage driver that was not included with
Kubernetes. Installing a CSI driver adds support for a storage system that is
not natively supported by Kubernetes. Also, CSI enables the use of modern
storage features, such as snapshots and resizing.
To use a CSI driver, you need to create a Kubernetes
StorageClass .
You set the CSI driver as the provisioner for the StorageClass. Then, you can
set the StorageClass as the cluster's default ,
or configure your workloads to use the StorageClass ( StatefulSet example ).
Install a vendor's CSI driver
Storage vendors develop their own CSI drivers, and they are responsible for
providing installation instructions. In simple cases, installation might only
involve deploying manifests to your clusters. See the list of CSI
drivers in the
CSI documentation.
For production storage, we recommend installing a CSI driver from an
GDC Ready storage partner .
Note: Google does not provide support for, nor instructions for installing,
vendors' drivers.
Verify a driver installation
After you install a CSI driver, you can verify the installation by running:
kubectl get csinodes -o jsonpath = '{range .items[*]} \
{.metadata.name}{": "} {range .spec.drivers[*]} {.name}{"\n"} {end}{end}'
Use a CSI driver
To use a CSI driver:
Create a Kubernetes StorageClass
that references the driver in its provisioner field.
To provision storage, you can either:
Reference the StorageClass in the volumeClaimTemplates specification for
a StatefulSet object.
Set it as the cluster's default StorageClass .
Considerations for StorageClasses backed by a CSI driver
When you create a StorageClass, consider the following:
CSI driver documentation should include the
driver-specific parameters
that you provide to your StorageClass, including the provisioner name.
You should name the StorageClass after its properties, rather than after the
name of the specific driver or appliance behind it. Naming the StorageClass
after its properties lets you create StorageClasses with the same name
across multiple clusters and environments, and allows your applications to get
storage with the same properties across clusters.
Example: Reference StorageClass in a StatefulSet
The following example models how to define a CSI driver in a StorageClass, and
then reference the StorageClass in a StatefulSet
workload. The example assumes the driver has already been installed to the
cluster.
The following simple StorageClass, premium-rwo , uses a fictional CSI driver,
csi.example.com , as its provisioner:
fast-sc.yaml
apiVersion : storage.k8s.io/v1
kind : StorageClass
metadata :
name : premium-rwo
provisioner : csi.example.com # CSI driver
parameters : # You provide vendor-specific parameters to this specification
type : example-parameter # Be sure to follow the vendor's instructions
datastore : my-datastore
reclaimPolicy : Retain
allowVolumeExpansion : true
You reference the StorageClass in a StatefulSet's volumeClaimTemplates
specification.
When you reference a StorageClass in a StatefulSet's volumeClaimTemplates
specification, Kubernetes provides stable storage using PersistentVolumes (PVs).
Kubernetes calls the provisioner defined in the StorageClass to create a new
storage volume. In this case, Kubernetes calls the fictional csi.example.com
provider, which calls out to the provider's API, to create a volume. After the
volume is provisioned, Kubernetes automatically creates a PV to represent the
storage.
Here is a simple StatefulSet that references the StorageClass:
statefulset.yaml
apiVersion : apps/v1
kind : StatefulSet
metadata :
name : web
spec :
replicas : 2
selector :
matchLabels :
app : nginx
template :
metadata :
labels :
app : nginx
spec :
containers :
- name : nginx
image : registry.k8s.io/nginx-slim:0.8
volumeMounts :
- name : www
mountPath : /usr/share/nginx/html
volumeClaimTemplates : # This is the specification in which you reference the StorageClass
- metadata :
name : www
spec :
accessModes : [ "ReadWriteOnce" ]
resources :
requests :
storage : 1Gi
storageClassName : premium-rwo # This field references the existing StorageClass
What's next
Read more about Google Distributed Cloud storage concepts
Set a default StorageClass for your cluster
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
