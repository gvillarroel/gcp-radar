---
title: "Copy images between repositories \_|\_ Artifact Registry \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/docker/copy-images
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/docker/copy-images
  title: "Copy images between repositories \_|\_ Artifact Registry \_|\_ Google Cloud\
    \ Documentation"
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
Copy images between repositories
Stay organized with collections
Save and categorize content based on your preferences.
You can use the gcrane tool to copy images between Docker repositories in
Artifact Registry.
You can also use the tool to copy images
from Container Registry to Artifact Registry .
Before you begin
Verify the following requirements:
You have created the target Docker repository in
Artifact Registry for the images you are copying.
You have the required permissions :
Artifact Registry Reader ( roles/storage.objectViewer ) or a role with
equivalent permissions for the repository you are copying from.
Artifact Registry Writer ( roles/artifactregistry.writer ) or a role
with equivalent permissions for the target repository.
Overview
The gcrane tool simplifies copying across
repositories with support for:
Copying sets of images with a single command, including all images under a
specified path or all images stored on multi-regional host in your project.
Skipping image layers that are already uploaded.
Removing unused images
Removing unused images before you performing a copy operation can help you to
reduce storage costs.
A number of tools are available to identify and automate removal of
images that you no longer need. For example, the
gcr-cleaner
tool helps you to find and remove old images based on different criteria.
The gcr-cleaner tool is not an official Google product.
For more information about setting up and using the tool, see the
gcr-cleaner
documentation.
Setting up gcrane
You can run gcrane from the following environments:
Compute Engine instance - Use this option if you have a larger number of
containers to copy.
Costs: Instance uptime for
the Compute Engine VM. If the VM instance is in a different location than
the source repository, network egress charges might apply for the
images you copy.
Cloud Shell - An option for copying small sets of about 40GB or less.
Since the gcrane tool skips uploading image layers that are already
uploaded, this limit is for new data that you are copying.
Copying larger repositories might cause Cloud Shell to disconnect
after the request timeout period of 10 minutes.
Costs: If the Cloud Shell instance is in a different location
than the source repository, network egress charges might apply for
the images you copy. You cannot chose the location of a Cloud Shell
session. To check the location of the current session, run the command:
curl metadata/computeMetadata/v1/instance/zone
We recommend using the latest version of the gcrane tool to take advantage
of all available features and enhancements. The setup instructions in the
following sections include steps to download the latest version.
To check the version of an existing gcrane installation, run the command:
gcrane version
Setting up Compute Engine
To copy images with gcrane from a Compute Engine VM instance:
Create a VM instance .
To minimize costs, create the instance in the same location as the
registry you are copying from.
By default, the VM instance is associated with the
default service account
and has permissions to pull images. You must change the access scope so that
the VM instance can push images.
Stop the VM instance. See
Stopping an instance .
Change the access scope with the command:
gcloud compute instances set-service-account INSTANCE --scopes = storage-rw
Replace INSTANCE with the name of the VM instance.
Restart the VM instance. See
Starting a stopped instance .
Connect to the VM
instance using SSH.
Run the following command to download gcrane .
curl -L \
https://github.com/google/go-containerregistry/releases/latest/download/go-containerregistry_Linux_x86_64.tar.gz \
-o go-containerregistry.tar.gz
Run the following commands to make the gcrane command executable.
tar -zxvf go-containerregistry.tar.gz
chmod +x gcrane
sudo mv gcrane /usr/local/bin/
Run the command gcrane --help to verify the installation.
You are now ready to copy images. To continue:
Identify images to copy
Copy the images
Setting up Cloud Shell
Open a Cloud Shell window.
Open Cloud Shell
Set the default project. Replace PROJECT with the ID of project
where Container Registry and Artifact Registry are installed
gcloud config set project PROJECT
Run the following command to download the gcrane tool.
curl -L \
https://github.com/google/go-containerregistry/releases/latest/download/go-containerregistry_Linux_x86_64.tar.gz \
-o go-containerregistry.tar.gz
Run the following commands to make the gcrane command executable.
tar -zxvf go-containerregistry.tar.gz
chmod +x gcrane
sudo mv gcrane /usr/local/bin/
Run the command gcrane --help to verify the installation.
You are now ready to copy images. To continue:
Identify images to copy
Copy the images
Setting up a local machine
Download gcrane from the GitHub repository .
For example, the following command downloads the Linux x86-64 distribution
from the command line.
curl -L \
https://github.com/google/go-containerregistry/releases/latest/download/go-containerregistry_Linux_x86_64.tar.gz \
-o go-containerregistry.tar.gz
Run the following commands to make the gcrane command executable. The
commands assume that the downloaded file is named
go-containerregistry.tar.gz .
tar -zxvf go-containerregistry.tar.gz
chmod +x gcrane
sudo mv gcrane /usr/local/bin/
Run the command gcrane --help to verify the installation.
You are now ready to copy images. To continue:
Identify images to copy
Copy the images
Identifying images to copy
After you have installed the gcrane tool, you can list the existing images in
the source repository to find the ones you want to copy.
To list existing images, run the command:
gcrane ls LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY
To list tags an image has, run the command:
gcrane ls LOCATION -docker.pkg.dev/ PROJECT / IMAGE
To list images recursively under a specific path, run the command:
gcrane ls -r LOCATION -docker.pkg.dev/ PROJECT / PATH
For each of the commands:
Replace LOCATION with the location of the repository.
Replace PROJECT with the project ID.
Replace PATH with the path to copy.
See Copying images for the commands to copy your images.
Copying images
You can copy individual images or sets of images with the gcrane cp command.
To copy a single image, run the command:
gcrane cp LOCATION1 -docker.pkg.dev/ PROJECT1 / REPOSITORY1 / IMAGE1 \
LOCATION2 -docker.pkg.dev/ PROJECT2 / REPOSITORY2 / IMAGE2
To copy images recursively under a specific path in a repository, run the command:
gcrane cp -r LOCATION1 -docker.pkg.dev/ PROJECT1 / REPOSITORY1 / IMAGE1 / PATH1 \
LOCATION2 -docker.pkg.dev/ PROJECT2 / REPOSITORY2 / IMAGE2 / PATH2
To copy all images in a repository, run the command:
gcrane cp -r LOCATION1 -docker.pkg.dev/ PROJECT1 / REPOSITORY1 \
LOCATION2 -docker.pkg.dev/ PROJECT2 / REPOSITORY2
Replace the following values:
LOCATION1 is the location of the source repository.
LOCATION2 is the location of the target repository.
PROJECT1 is the Google Cloud project ID associated with the
source repository.
PROJECT2 is the Google Cloud project ID associated with the
target repository.
REPOSITORY1 is the name of the source repository.
REPOSITORY2 is the name of the target repository.
IMAGE1 is the image that you want to copy.
IMAGE2 is the name for the image in the target repository.
Examples
The following command copies my-image:tag1 from the repository repo1
to the repository repo2 within the same project and region.
gcrane cp us-west1-docker.pkg.dev/my-project/repo1/my-image:tag1 \
us-west1-docker.pkg.dev/my-project/repo2/my-image:tag1
The following command recursively copies all images under test-images/testing
in the repository repo1 to the same path under the repository repo2 .
gcrane cp -r us-west1-docker.pkg.dev/my-project/repo1/test-images/testing \
us-west1-docker.pkg.dev/my-project/repo2/test-images/testing
The following command copies all images from the repository my-repo in the
project dev-project to the repository my-repo in another project
called prod-project .
gcrane cp -r us-west1-docker.pkg.dev/dev-project/my-repo \
us-west1-docker.pkg.dev/prod-project/my-repo
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
