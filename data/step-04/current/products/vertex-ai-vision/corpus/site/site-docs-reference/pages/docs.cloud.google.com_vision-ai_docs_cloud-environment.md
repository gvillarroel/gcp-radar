---
title: "Set up a project and a development environment \_|\_ Vertex AI Vision \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/cloud-environment
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/cloud-environment
  title: "Set up a project and a development environment \_|\_ Vertex AI Vision \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Guides
Send feedback
Set up a project and a development environment
Stay organized with collections
Save and categorize content based on your preferences.
This guide describes how to set up a Google Cloud project to start using
Vertex AI Vision.
Set up your project
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI Vision API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable visionai.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/visionai.editor IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/visionai.editor
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Generate the key file:
gcloud iam service-accounts keys create FILE_NAME .json --iam-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace the following:
FILE_NAME : a name for the key file
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS
to the path of the JSON file that contains your credentials.
This variable applies only to your current shell session, so if you open
a new session, set the variable again.
Example: Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
export GOOGLE_APPLICATION_CREDENTIALS = "/home/user/Downloads/service-account-file.json"
Example: Windows
For PowerShell:
$env :GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
$env :GOOGLE_APPLICATION_CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json"
For command prompt:
set GOOGLE_APPLICATION_CREDENTIALS = KEY_PATH
Replace KEY_PATH with the path of the JSON file that contains your credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI Vision API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable visionai.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/visionai.editor IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/visionai.editor
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Generate the key file:
gcloud iam service-accounts keys create FILE_NAME .json --iam-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace the following:
FILE_NAME : a name for the key file
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS
to the path of the JSON file that contains your credentials.
This variable applies only to your current shell session, so if you open
a new session, set the variable again.
Example: Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
export GOOGLE_APPLICATION_CREDENTIALS = "/home/user/Downloads/service-account-file.json"
Example: Windows
For PowerShell:
$env :GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
$env :GOOGLE_APPLICATION_CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json"
For command prompt:
set GOOGLE_APPLICATION_CREDENTIALS = KEY_PATH
Replace KEY_PATH with the path of the JSON file that contains your credentials.
Roles : Depending on your use case, the
project.editor role may be more
appropriate. If you grant the visionai.editor role alone to your
policy binding, you need to grant additional roles for certain operations. For
example, you need to add bigquery.dataEditor to use
a BigQuery connector, cloudfunctions.developer to use
Cloud Run functions, etc.
Certain tasks require you to use additional
Google Cloud products in addition to Vertex AI Vision. You might
need to perform additional setup tasks to use other Google Cloud products.
Vertex AI Vision SDK
The Vertex AI Vision Software Development Kit (SDK) contains tools and
libraries for you to develop programs and custom workflows with
Vertex AI Vision.
These tools refer to a set of binary source files that help your productivity
when you use or develop solutions using Vertex AI Vision. You can also add
these binary source files into your scripting to help manage larger scale
deployments. The command line interface (CLI) vaictl is an example in this
category.
Libraries refers to a set of programming APIs that you can use to
programmatically manage, control, and perform I/O of different forms with
Vertex AI Vision. The C++ programming API is an example in this category.
The code for both tools and libraries are open source and we welcome developers
to build them directly. For tools, we also offer pre-built binary files on
specific platforms that you can download for direct use. We also offer Docker
images for cases when your platform is not directly supported.
Prerequisites
Consider these prerequisites before you use the Vertex AI Vision SDK.
Supported platforms
We currently only directly support x86 machines running a Debian-based Linux
distribution. We also offer a Docker image with tools already built and
installed if you use a different platform.
Additional software requirements
Most of the third party software dependencies the Vertex AI Vision SDK requires are
automatically managed when you install the pre-built binaries. However, to use
certain aspects of the SDK features and workflows you must install additional
dependencies. This section lists these exceptions and how to download and
install them.
Python SDK
The Python pip package installs all of its dependencies automatically.
However, your basic underlying Python installation must meet
the following conditions:
Python >= 3.8.
Build from source dependencies
Most users can use the pre-built SDK binaries for their workflow.
If you want to develop and build the SDK from source, you must also make sure
your system meets the following requirements.
Install Bazel. For installation instructions, see the
Bazel documentation .
On Ubuntu 20.04, you also need several system dependencies. You can install
them with the following command:
apt-get install -y --no-install-recommends \
autoconf \
automake \
build-essential \
ca-certificates \
flex \
bison \
python3 \
nasm \
libjpeg-dev
Get pre-built binaries
The vaictl tool is the ready-made binary tool that can be used to
control Vertex AI Vision, as well as to send and receive data that it processes.
This section shows ways for you to download and install this tool.
Install the Debian package
You have two options for using the vaictl command-line tool, which you
need to work with I/O (stream data):
Install the command-line tool locally
(OS: Debian GNU/Linux, CPU architecture: x86_64) or
Run the commands in a Docker image that has all dependencies installed.
Use the following steps to get the vaictl command-line tool:
Download package
For direct installations, we currently only support Debian/Ubuntu
distributions.
You can also download this Debian package from the
Vertex AI Vision SDK GitHub releases page .
(Optional) Remove prior versions of vaictl .
Before you can install the vaictl command-line tool,
you must delete any prior versions of the tool on your machine:
sudo apt-get remove visionai
Download the required package. You can download the package from
the GitHub releases page ,
or use the following command:
wget https://github.com/google/visionai/releases/download/v0.0.5/visionai_0.0-5_amd64.deb
After downloading the package, run the following command in the directory
you downloaded the file:
sudo apt install ./visionai_0.0-5_amd64.deb
Verify installation:
vaictl --help
Get Docker
You can get a Docker image that has the Vertex AI Vision SDK and all its
dependencies already pre-installed. This Docker image is available at
gcr.io/visionai-public-images/vaictl .
Download the image from Container Registry:
docker pull gcr.io/visionai-public-images/vaictl
Run an interactive container terminal.
docker run -it --rm gcr.io/visionai-public-images/vaictl /bin/bash
Verify functionality:
vaictl --help
Get the source code
The Vertex AI Vision SDK is open-source and publicly available on
GitHub .
While the SDK depends on the service API definitions, this dependency is
already automatically managed by Bazel and you don't
need to explicitly acquire it. However, if you need direct access to the
service APIs, you can get them on the
googleapis GitHub repository .
The Python programming SDK
Vertex AI Vision also supports a Python SDK. To program with this SDK, just make
sure that you have met the basic Python SDK dependencies
before you install the Python SDK .
For SDK reference information, see the
Python SDK reference .
For example codes that use the Python SDK, see the
Face blur with the Python SDK tutorial ,
or see some examples in the source distribution in the
visionai/python/examples/ directory.
Get the Python SDK package
The Vertex AI Vision SDK also contains a Python library. Download and install the
pre-built version of the Python SDK with the following instructions.
Download the package.
You can download the Python SDK package from the
Vertex AI Vision SDK GitHub releases page ,
or you can run the command:
wget https://github.com/google/visionai/releases/download/v0.0.5/visionai-0.0.5-py3-none-any.whl
Optional. Create and activate a new virtual environment:
python3 -m venv vaivenv
source vaivenv/bin/activate
Install the package:
pip3 install visionai-0.0.5-py3-none-any.whl
Optional. Confirm that installation worked:
python3
import visionai
Optional. Deactivate your virtual environment:
deactivate
The C++ programming SDK
C++ is the first programming SDK we support. The C++ public SDK is located in
visionai/public/streams.h . For reference information, see the reference
documentation .
What's next
Optional: Learn how to build and test using the C++ SDK .
Learn how to ingest data into an app and read about processing
components you can add in Build an app .
Learn about output storage and processing options in
Connect app output to a data destination .
Read about how to
Search Warehouse data in the console .
Previous
arrow_back
Quickstart: Build an app in the console
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
