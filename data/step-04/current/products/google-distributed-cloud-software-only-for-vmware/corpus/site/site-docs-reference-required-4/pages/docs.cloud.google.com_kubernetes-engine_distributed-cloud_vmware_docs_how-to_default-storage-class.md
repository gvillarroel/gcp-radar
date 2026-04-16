---
title: "Setting the default StorageClass \_|\_ Google Distributed Cloud (software\
  \ only) for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-workstation-configuration-file
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/default-storage-class
  title: "Setting the default StorageClass \_|\_ Google Distributed Cloud (software\
    \ only) for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Setting the default StorageClass
Stay organized with collections
Save and categorize content based on your preferences.
A user cluster created with Google Distributed Cloud (software only) for VMware has one
or more
StorageClass
objects, and one of them is designated as the default StorageClass.
This page shows how to set the default StorageClass for a user cluster. For more
information, see Storage .
This page is for Storage specialists who configure and manage storage
performance, usage, and expense. To learn more about common roles and example
tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Find the default StorageClass
List all the StorageClasses:
kubectl --kubeconfig USER_CLUSTER_KUBECONFIG get storageclasses
In the output, you can see which StorageClass is the default. For example, in
the following output, you can see that a StorageClass named standard-rwo is
the default StorageClass:
standard kubernetes.io/vsphere-volume
standard-rwo (default) csi.vsphere.vmware.com
When you request storage, you can specify a StorageClass. If you do not specify
a StorageClass, the default StorageClass is used. For example, suppose you
create a
PersistentVolumeClaim
that does not specify a StorageClass. The volume controller will fulfill the
claim according to the default StorageClass.
Changing the default StorageClass
As a cluster administrator, you might want to change the default storage class.
Then all requests for storage that do not specify a StorageClass will be
fulfilled according to the StorageClass of your choice. This section gives the
steps for changing the default.
Deploy a new storage system
Deploy a new storage system and any software components for integrating the new
storage mechanism with a Kubernetes cluster. For example, you might need to
install a CSI driver in the
cluster.
This step depends on the storage vendor you're using. For CSI drivers, vendors
should provide instructions for deploying their CSI driver to a Kubernetes
cluster. A CSI driver's documentation should also include the
driver-specific parameters
that you provide in your StorageClass, including the provisioner name.
When you create a StorageClass for your new appliance, you should name the
StorageClass after its properties (such as "fast" or "highly-replicated"),
rather than after the name of the specific driver or appliance behind it.
This will make it easier to have consistent storage policies across clusters and
environments.
Remove the default annotation from the default StorageClass
Open the default StorageClass in a text editor:
kubectl --kubeconfig [USER_CLUSTER_KUBECONFIG] edit storageclass \
DEFAULT_STORAGE_CLASS
In the text editor, remove the
storageclass.kubernetes.io/is-default-class: "true" annotation. Close the
text editor.
To verify that the annotation was removed, enter this command:
kubectl --kubeconfig [USER_CLUSTER_KUBECONFIG] get storageclass \
DEFAULT_STORAGE_CLASS --output yaml
Create a new StorageClass
Create a manifest for a new StorageClass .
Include the storageclass.kubernetes.io/is-default-class: "true" annotation.
For example:
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
annotations:
storageclass.kubernetes.io/is-default-class: "true"
...
name: my-storage-class
...
parameters:
...
provisioner: [MY_PROVISIONER]
...
Save your manifest as a YAML file, and create the new StorageClass:
kubectl --kubeconfig [CLUSTER_KUBECONFIG] apply -f [MANIFEST_FILE]
where [MANIFEST_FILE] is the path to your new StorageClass manifest
file.
What's next
Read about Google Distributed Cloud's storage concepts
Install a CSI driver
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
