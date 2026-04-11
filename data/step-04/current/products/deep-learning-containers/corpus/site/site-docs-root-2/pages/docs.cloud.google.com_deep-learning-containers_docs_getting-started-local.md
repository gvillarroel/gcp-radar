---
title: "Get started with a local deep learning container \_|\_ Deep Learning Containers\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deep-learning-containers/docs/getting-started-local
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-containers/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-containers/docs/getting-started-local
  title: "Get started with a local deep learning container \_|\_ Deep Learning Containers\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Deep Learning Containers
Guides
Send feedback
Get started with a local deep learning container
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create and set up a local deep learning container.
This guide expects you to have basic familiarity
with Docker .
Before you begin
Complete the following steps to set up a Google Cloud account, enable
the required APIs, and install and activate the required software.
In the Google Cloud Console, go to the Manage resources page
and select or create a project.
Note: If you don't plan to keep the resources you create in this tutorial,
create a new project instead of selecting an existing project.
After you finish, you can delete the project, removing all resources
associated with the project and tutorial.
Go to Manage
resources
Install and initialize the
gcloud CLI .
Install Docker .
If you're using a Linux-based operating system, such as Ubuntu or Debian,
add your username to the docker group so that you can run Docker
without using sudo :
sudo usermod -a -G docker ${ USER }
Caution: The docker group is equivalent to the root user.
See
Docker's documentation
for details on how this affects the security of your system.
You may need to restart your system after adding yourself to
the docker group.
Open Docker. To ensure that Docker is running, run the following
Docker command, which returns the current time and date:
docker run busybox date
Use gcloud as the credential helper for Docker:
gcloud auth configure-docker
Optional : If you want to run the container using GPU locally,
install
nvidia-docker .
Create your container
Follow these steps to create your container.
To view a list of containers available:
gcloud container images list \
--repository="gcr.io/deeplearning-platform-release"
You may want to go to Choosing a container
to help you select the container that you want.
If you don't need to use a GPU-enabled container, enter the following code
example. Replace tf-cpu.1-13 with the name of the container
that you want to use.
docker run -d -p 8080:8080 -v /path/to/local/dir:/home/jupyter \
gcr.io/deeplearning-platform-release/ tf-cpu.1-13
If you want to use a GPU-enabled container, enter the following code
example. Replace tf-gpu.1-13 with the name of the container
that you want to use.
docker run --runtime=nvidia -d -p 8080:8080 -v /path/to/local/dir:/home/jupyter \
gcr.io/deeplearning-platform-release/ tf-gpu.1-13
This command starts up the container in detached mode, mounts the local
directory /path/to/local/dir to /home/jupyter in the container, and maps
port 8080 on the container to port 8080 on your local machine. The
container is preconfigured to start a JupyterLab server, which you can
visit at http://localhost:8080 .
What's next
Learn more about how to work with containers in the Docker
documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
