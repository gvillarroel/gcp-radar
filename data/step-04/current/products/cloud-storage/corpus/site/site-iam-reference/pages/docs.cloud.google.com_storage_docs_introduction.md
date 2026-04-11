---
title: "Cloud Storage overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/introduction
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/introduction
  title: "Cloud Storage overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Guides
Send feedback
Cloud Storage overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Cloud Storage and how it works.
How Cloud Storage works
Cloud Storage is a scalable and managed storage service offered by
Google Cloud that lets you store data as objects in containers called
buckets .
All buckets are associated with a project , and you group your
projects under an organization . After you create a project, you can
create buckets , upload objects to your buckets, and
download objects from your buckets. You can also grant permissions to make
your data accessible to principals you specify or
accessible to everyone on the public internet . Directory capabilities
let you utilize Cloud Storage more similarly to a hard
drive or Network Attached Storage (NAS): folders let you organize objects
in a directory structure, and managed folders let you simplify
access control to your objects.
Each project, bucket, object, folder, and managed folder is a resource in
Google Cloud, as are things such as Compute Engine instances .
The Google Cloud hierarchy
Here's how the Cloud Storage structure can apply to a real-world case:
Organization : Your company, called Example Inc., creates a Google Cloud
organization called exampleinc.org .
Project : Example Inc. is building several applications, and each one is
associated with a project. Each project has its own set of
Cloud Storage APIs, as well as other resources.
Bucket : Each project can contain multiple buckets, which are
containers to store your objects. For example, you might create a photos
bucket for all the image files your app generates and a separate videos
bucket. Cloud Storage offers different storage classes
and locations for your buckets, letting you choose the durability and
availability of your data to suit the needs of your workloads.
Buckets serve as a primary data foundation in the broader Google Cloud
ecosystem. You can connect your buckets as storage backends for other
Google Cloud services, such as AI Hypercomputer, Vertex AI,
and Google Kubernetes Engine.
While buckets are suitable for most data storage use cases, you can set up
optional configurations and features on a bucket to make it more suitable for
high-performance workloads specifically:
Hierarchical namespace : Buckets can have
hierarchical namespace enabled, which lets you store your data in a
logical file system structure by using folders. Storing your data in
folders provides the ability to use directory semantics and atomic folder
operations, which are often required to accelerate data-intensive AI/ML
and analytics workloads. Buckets with hierarchical namespace enabled offer
up to 8 times higher initial queries per second (QPS) limits for reading and
writing objects compared to buckets without hierarchical namespace enabled.
Hierarchical namespace can only be
enabled at the time of bucket creation and can't be enabled on an
existing bucket.
Rapid Bucket : Rapid Bucket is a high performance capability
that lets you store objects in the Rapid storage class by using a zone as
a bucket's location. When you locate buckets in zones, you get the ability
to colocate your objects with your compute resources, automatic enablement
of hierarchical namespace, and new APIs for streaming reads and appendable
writes. Rapid Bucket provides substantially improved latency,
throughput, and I/Os compared to buckets in other storage classes, making
the capability ideal for data-intensive AI/ML and analytics workloads.
To use Rapid Bucket, you
create a bucket and define a zone as the bucket's location .
Rapid Bucket can't be used on existing buckets that aren't located in a
zone.
Object : Buckets contain objects, such as an image called puppy.png .
An object is an immutable piece of data consisting of a file of any format.
Each bucket can contain essentially unlimited individual objects.
Folder : Buckets with hierarchical namespace enabled can contain
folders. Folders enable a real file system for storing objects, as
opposed to a simulated file system. You can atomically rename a folder and all
the objects within it in one operation.
Managed folder : Each bucket can also contain managed folders,
which grant or revoke additional access beyond the IAM
permissions set on the bucket. Managed folders don't use a true directory tree
structure; rather, a managed folder is a resource overlay used only for
permission checking.
Tools for Cloud Storage
You can interact with Cloud Storage by using the following tools:
Google Cloud console : The Google Cloud console provides a visual interface
for you to manage your data in a browser.
Google Cloud CLI : The gcloud CLI lets you interact
with Cloud Storage through a terminal using
gcloud storage commands .
Client libraries : The Cloud Storage client libraries allow
you to manage your data using one of your preferred languages, including C++,
C#, Go, Java, Node.js, PHP, Python, and Ruby.
REST APIs: Manage your data using the JSON or XML API.
Terraform : Terraform is an infrastructure-as-code (IaC)
tool that you can use to provision the infrastructure for
Cloud Storage. For more information, see
Provision resources with Cloud Storage .
gRPC : gRPC lets you interact with Cloud Storage. gRPC
is a high performance, open source universal RPC framework developed by Google
that you can use to define your services using Protocol Buffers.
Cloud Storage FUSE : Cloud Storage FUSE lets you mount Cloud Storage
buckets to your local file system. This enables your applications to read from
a bucket or write to a bucket by using standard file system semantics.
Securing your data
Once you upload your objects to Cloud Storage, you have fine-grained
control over how you secure and share your data. Here are some ways to secure
the data you upload to Cloud Storage:
Identity and Access Management : Use IAM to control who has access to the
resources in your Google Cloud project. Resources include
Cloud Storage buckets and objects, as well as other
Google Cloud entities such as Compute Engine instances .
You can grant principals certain types of access to buckets and objects, such
as update , create , or delete .
Data encryption : Cloud Storage uses server-side encryption to
encrypt your data by default. You can also use supplemental data
encryption options such as customer-managed encryption keys and
customer-supplied encryption keys .
Authentication : Ensure that anyone who accesses your data has proper
credentials.
Soft delete : Prevent permanent loss of data against
accidental or malicious deletion by retaining recently deleted objects and
buckets. By default, Cloud Storage enables soft delete
for all buckets with a seven day retention period.
Object Versioning : When a live version of an object is replaced or
deleted, it can be retained as a noncurrent version if you enable Object
Versioning.
Bucket IP filtering : With bucket IP filtering, you
can restrict access to a bucket based on the source IP address of the request
and secure your data from unauthorized access from specific IP addresses or
Virtual Private Cloud (VPC).
Bucket Lock : Govern how long objects in buckets must be retained by
specifying a retention policy.
Resource names
Note: The use of resource names within Cloud Storage is limited to
Pub/Sub Notifications for Cloud Storage and
Identity and Access Management .
Each resource has a unique name that identifies it, much like a filename.
Buckets have a resource name in the form of
projects/_/buckets/ BUCKET_NAME , where
BUCKET_NAME is the ID of the bucket. Objects have a
resource name in the form of
projects/_/buckets/ BUCKET_NAME /objects/ OBJECT_NAME ,
where OBJECT_NAME is the ID of the object.
A # NUMBER appended to the end of the resource name
indicates a specific generation of the object. #0 is a special identifier for
the most recent version of an object. #0 is useful to add when the name of
the object ends in a string that would otherwise be interpreted as a generation
number.
Quickstart guides
To learn the fundamentals of using Cloud Storage, visit the following
guides:
Google Cloud console quickstart
gcloud quickstart
Terraform quickstart
Looking for other products?
If Cloud Storage is not the right storage solution for you, see more
information about the following storage services:
Google Cloud Managed Lustre : Store your data in a high-performance, fully
managed parallel file system that's optimized for AI and HPC workloads.
Google Drive : Store, manage, and share your personal files.
Cloud Storage for Firebase : Manage data for your
mobile applications.
Persistent Disk : Add block storage to your Compute Engine virtual
machine.
Filestore : Add file storage for multiwriter access to your
GKE clusters.
Explore more storage services offered by Google.
What's next
Learn the fundamentals of Cloud Storage through the
Google Cloud console or Google Cloud CLI .
Try Google Cloud jump start solutions that use Cloud Storage .
Get started with client libraries .
Quickly import online data into Cloud Storage or between
Cloud Storage buckets using Storage Transfer Service .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
