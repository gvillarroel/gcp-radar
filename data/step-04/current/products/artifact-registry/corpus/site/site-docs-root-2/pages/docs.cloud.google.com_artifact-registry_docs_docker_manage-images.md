---
title: "Manage images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/docker/manage-images
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/docker/manage-images
  title: "Manage images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
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
Manage images
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to manage container images in a Docker repository.
Managing images includes listing images in a repository, adding tags, deleting
tags, copying images to a new repository, and deleting images.
For information about pushing and pulling images, see
Pushing and pulling images .
Note: To manage images in Container Registry, use the Container Registry
image list in Google Cloud console or the
gcloud container images commands.
Before you begin
If the target repository does not exist,
create a new repository .
Verify that you have the required permissions for the repository.
(Optional) Configure defaults for gcloud commands .
Required roles
To get the permissions that
you need to manage images,
ask your administrator to grant you the
following IAM roles on the repository:
View images, files in images, and tags:
Artifact Registry Reader ( roles/artifactregistry.reader )
Tag images or edit tags using Artifact Registry:
Artifact Registry Writer ( roles/artifactregistry.writer )
Delete images or remove tags:
Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Listing images
Repository modes : standard, remote
You can list the images using the Google Cloud console or gcloud CLI.
The repository list includes both Artifact Registry
and Container Registry repositories. To work with images in a Container Registry
repository, see the Container Registry documentation for managing images .
Console
To view images in a repository:
Open the Repositories page in the Google Cloud console.
Open the Repositories page
Click the repository with the container image.
Click an image to see its versions.
gcloud
To list all images in the default project, repository, and
location when the default values are configured :
gcloud artifacts docker images list
To list images in a repository in a specific location, run the
command:
gcloud artifacts docker images list LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY
To list all digests and tags for a specific image, run the command:
gcloud artifacts docker images list LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE \
--include-tags
Replace the following values:
LOCATION is the regional or multi-regional location of the repository.
PROJECT is your Google Cloud project ID . If your project ID contains a colon ( : ), see Domain-scoped projects .
REPOSITORY is the name of the repository where the image is stored.
IMAGE is the name of the image in the repository.
--include-tags shows all versions of images, including digests and tags. If this flag is omitted, the returned list only includes top level container images.
For example, consider an image with the following characteristics:
Repository location: us-west1
Repository name: my-repo
Project ID: my-project
Image name: my-image
The full repository name is:
us-west1-docker.pkg.dev/my-project/my-repo
The full image name is:
us-west1-docker.pkg.dev/my-project/my-repo/my-image
For details about the image name format, see Repository and image names .
Listing files
Repository modes : standard, remote
You can list files in a repository, files in all versions of a specified
container image, or files in a specific version of an image.
For all the following commands, you can set a maximum number of files to return
by adding the --limit flag to the command.
To list all files in the default project, repository, and
location when the default values are configured :
gcloud artifacts files list
To list files in a specified project, repository, and location, run the command:
gcloud artifacts files list \
--project = PROJECT \
--repository = REPOSITORY \
--location = LOCATION
To list files for all versions of a specific container image:
gcloud artifacts files list \
--project = PROJECT \
--repository = REPOSITORY \
--location = LOCATION \
--package = PACKAGE
To list files for a specific container image version:
gcloud artifacts files list \
--project = PROJECT \
--repository = REPOSITORY \
--location = LOCATION \
--package = PACKAGE \
--version = VERSION
To list files for a specific tag:
gcloud artifacts files list \
--project = PROJECT \
--repository = REPOSITORY \
--location = LOCATION \
--package = PACKAGE \
--tag = TAG
Replace the following values:
LOCATION : the regional or multi-regional location of the repository.
PROJECT : your Google Cloud project ID .
If your project ID contains a colon ( : ), see Domain-scoped projects .
REPOSITORY : the name of the repository where the image
is stored.
PACKAGE : the name of the image.
VERSION : the image digest, a string starting with sha256: .
TAG : the tag associated with the container image.
Examples
Consider the following image information:
Project: my-project
Repository: my-repo
Repository location: us-west1
Image: my-app
The following command lists all files in the repository my-repo in the
location us-west1 within the default project :
gcloud artifacts files list \
--location = us-west1 \
--repository = my-repo
The following command lists files in the version of the image with the
digest sha256:88b205d7995332e10e836514fbfd59ecaf8976fc15060cd66e85cdcebe7fb356
gcloud artifacts files list \
--project = my-project \
--location = us-west1 \
--repository = my-repo \
--package = my-app \
--version = sha256:88b205d7995332e10e836514fbfd59ecaf8976fc15060cd66e85cdcebe7fb356
The following command lists files in the version of the image with the
tag 1.0-dev
gcloud artifacts files list \
--project = my-project \
--location = us-west1 \
--repository = my-repo \
--package = my-app \
--tag = 1 .0-dev
Tagging images
You can tag existing images in an Artifact Registry repository or you can
tag them before you push them to a repository.
Tagging images in a repository
Repository modes : standard
You can add a tag to an image in an Artifact Registry repository using the
Google Cloud console or the command line. In a repository, tags are unique to a
version of an image. So if you have multiple versions of an image, each tag only
applies to one of the versions. If you tag an image with a tag that's already in
use, you will move the tag from the original version to the newly tagged version.
Console
To tag an image in a repository:
Open the Repositories page in the Google Cloud console.
Open the Repositories page
Click the image to view versions of the image.
Select the image version to tag.
In the row of the selected version, click More actions ( ),
and then click Edit tags .
Type new tags into the field and then click SAVE .
gcloud
To tag images in a repository, specify the image version using
the image digest or tag, and then specify the tag to add. Run one of the
following commands:
gcloud artifacts docker tags add IMAGE-VERSION TAG
Where
IMAGE-VERSION is the full name of the
image version to tag, using either the image digest or an existing tag
on the image version.
TAG is the full name of the tag that
you want to add.
For example, consider an image with the following characteristics:
Repository location: us-west1
Repository name: my-repo
Project ID: my-project
Image name: my-image
Existing tag: iteration6-final
Tag to add: release-candidate
To add the tag release-candidate to the version of the image with the tag
iteration6-final , run the following command:
gcloud artifacts docker tags add \
us-west1-docker.pkg.dev/my-project/my-repo/my-image:iteration6-final \
us-west1-docker.pkg.dev/my-project/my-repo/my-image:release-candidate
For details about the image name format, including domain-scoped projects,
see
Repository and image names .
Tagging local images
To push any local image to Artifact Registry, you need to first tag it
with the repository name and then push the image. For instructions, see
Pushing and pulling .
Untagging images
Repository modes : standard
You can remove a tag from an image in Artifact Registry using the
Google Cloud console or the command line.
Console
Open the Repositories page in the Google Cloud console.
Open the Repositories page
Click the image to view versions of the image.
Select the image version to untag.
In the row of the selected version, click More actions ( ),
and then click Edit tags .
Delete the tag and then click SAVE .
gcloud
To delete a tag and remove it from the image, run the following command:
gcloud artifacts docker tags delete LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE : TAG
Replace the following:
LOCATION is the regional or multi-regional
location of the repository.
PROJECT is your Google Cloud project ID .
If your project ID contains a colon (`:`), see Domain-scoped projects .
REPOSITORY is the name of the repository where the image is stored.
IMAGE is the name of the image in the repository.
TAG is the tag for the version you want to delete.
Deleting images
Repository modes : standard, remote
You can delete an entire container image or delete a specific image version
associated with a tag or digest.
Once you delete an image, you cannot undo the action.
Deleting images doesn't immediately delete the referenced layers. Unreferenced
layers are deleted daily.
For remote repositories, the cached copy of the image is removed.
The image remains available from the upstream source. If the remote
repository receives a new request for the same image, the repository will
download and cache it again.
You can use cleanup policies to control when and how your
artifacts are saved or deleted.
Other tools are available to help you manage unused images. For example,
the gcr-cleaner
tool finds and deletes old images based on different criteria. Removing unused
images can help you to reduce storage costs. The gcr-cleaner tool is not an
official Google product.
To delete an images from Google Cloud console or the gcloud CLI:
Console
Open the Repositories page in the Google Cloud console.
Open the Repositories page
Click the image name to see versions of that image.
Select versions that you want to delete.
Click DELETE .
In the confirmation dialog, click DELETE .
gcloud
To delete an image and all its tags, run the command:
gcloud artifacts docker images delete LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE --delete-tags
To delete a specific image version, use one of the following commands.
gcloud artifacts docker images delete LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE : TAG [ --delete-tags ]
or
gcloud artifacts docker images delete LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE @ IMAGE-DIGEST [ --delete-tags ]
Where
LOCATION is the regional or multi-regional location of the repository.
PROJECT is your Google Cloud project ID .
If your project ID contains a colon ( : ), see Domain-scoped projects .
REPOSITORY is the name of the repository where the image is stored.
IMAGE is the name of the image in the repository.
TAG is the tag for the version you want to delete. If multiple tags are associated with the same image version, you must include --delete-tags to delete the image version without removing the tags first.
IMAGE-DIGEST is the sha256 hash value for the version you want to delete. If a tag is associated with the image digest, you must include --delete-tags to delete the image version without removing the tag first.
--delete-tags removes all tags applied to the image version. This flag lets you force deletion of an image version when:
You specified a tag, but there are other tags associated with the image version.
You specified an image digest that has at least one tag.
What's next
Download individual files
stored within an image without using Docker commands. This can be useful for
quickly inspecting manifest files.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
