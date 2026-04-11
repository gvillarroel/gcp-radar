---
title: "Container concepts \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/container-concepts
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/container-concepts
  title: "Container concepts \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Container concepts
Stay organized with collections
Save and categorize content based on your preferences.
This document introduces key concepts related to container images including
registries, repositories, and artifacts. Some basic information on how these
concepts apply to Artifact Registry and Container Registry
is also included.
Artifact Registry examples in this page primarily refer to Docker-format
and gcr.io repositories. For more information, see
Supported formats and the
Repository overview .
Registries
A registry stores and distributes container images and artifacts organized by
name within repositories . A registry may contain either a single repository
or multiple repositories and can be public or private.
Registry services such as Docker Hub and Artifact Registry provide
options to create public or private repositories. When pulling public images it
is important to understand the possible security concerns. Read about
dependency management for more information on vulnerability
monitoring and reducing your dependency footprint.
Registries are organized into repositories which store individual container
images. Artifact Registry lets you to create multiple repositories in a single
project and associate a specific regional or multi-regional location
with each repository. Related repositories may be grouped by labels .
Artifact Registry repositories and image management
In Artifact Registry Docker-format repositories, you can store multiple
container images with different names in the same repository. Each version of an
image is identified by its image digest and can be associated with a tag .
Tags can be mutable or immutable. For more information about container image
versions and tags, see Container image versions .
Artifact Registry typically refers to parts of the path to an image to
identify the project, regional or multi-regional location ,
and name of the image along with the
tag or manifest digest
to identify the correct version.
For example:
docker push us-west1-docker.pkg.dev/ PROJECT /quickstart-docker-repo/quickstart-image:tag1
us-west1 is the location of the repository
docker.pkg.dev is the hostname for Docker-format repositories.
PROJECT is the namespace created by your
Google Cloud
project ID .
quickstart-docker-repo is the namespace under your project where you store
images. In Artifact Registry, this part of the path is called the
repository.
quickstart-image is the name for all versions of quickstart-image
and is often referred to as the image .
tag1 is the tag specifying the version of the image.
Images
Both artifacts and images can be stored within Artifact Registry. An
artifact can be anything: a text file, a docker image, or a Helm chart, while an
image typically refers to a container image. Container images are packages of
software that contain all the necessary elements to run in any environment. Read
What are containers for more information.
Images are pushed or uploaded to repositories and pulled or downloaded
from repositories. In order to specify the correct image and version the unique
registry and artifact must be specified.
For more information on repository and image names in Artifact Registry,
see Repository and image names .
Layers
Container images stored in repositories are constructed incrementally using
layers . Different images can use some of the same layers. Layers are defined
in different ways depending on the type of image. For example, each instruction
in a Dockerfile corresponds to a layer in the Docker image. Within a registry,
images with common layers share those layers, increasing storage efficiency.
For security, layers are not shared across different registries.
When you delete a container image, the layers aren't deleted immediately. Layers
that aren't referenced by any images in the registry are deleted daily.
Tags
Users add tags when pushing or pulling an image to a repository to specify the
version of an image. An image can have one or multiple tags, or no tags at all.
If you are using mutable tags, and you push an image twice with the same tag,
then the tag is removed from the first image and moved to the second, leaving
the first image without a tag. The un-tagged image is still accessible using its
manifest digests .
If you are using immutable tags, then the following actions aren't permitted:
Delete a tagged image. Deleting untagged images is still permitted.
Remove a tag from an image.
Push an image with a tag that is already used by another version of the image
in the repository.
The latest tag is a special tag appended when images are pushed without a tag.
For example:
docker push us-west1-docker.pkg.dev/my-project/my-repo/hello-app
pushes the image to hello-app:latest
docker pull us-west1-docker.pkg.dev/my-project/my-repo/hello-app
pulls the image hello-app:latest .
It is important to note that when an image is pushed to a repository with a tag
other than latest , the latest tag is not added, therefore it is possible for
the latest image to be behind the most up to date changes. We recommended
using tags other than latest for releases.
Manifests
Image Manifests uniquely identify and specify the layers within each image.
Manifests are identified by unique SHA-256 hashes called manifest digests.
Manifest digests are more reliable and secure than tags because in repositories
with mutable tags, multiple versions of the same image can be pushed to the same
tag, leaving some images without tags, while each image is uniquely specified by
its manifest digest.
If you use tools to scan or analyze images, results from these tools are only
valid for the image scanned. To ensure that you deploy the image that was
scanned, you cannot rely on the tag because the image referred by the tag may
change.
To learn more about Artifact Registry specific tagging and manifests,
read Managing Images and Using container Images .
Image prewarming
For latency-sensitive applications using image streaming , waiting for an image to pull for the first
time on a new node or instance, often called a "cold start," can introduce
unwanted delays. Prewarming lets you explicitly start the downloading of
images into the Image Streaming cache before they are requested. This process
helps ensure your image is available for fast delivery when your
GKE cluster requests it.
To prewarm images, use the Artifact Registry API. For instructions, see
Reduce latency with image prewarming .
What's next
Docker quickstart
Work with container images
Helm quickstart
Work with Helm charts
Read about DevOps and explore the DORA research program .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
