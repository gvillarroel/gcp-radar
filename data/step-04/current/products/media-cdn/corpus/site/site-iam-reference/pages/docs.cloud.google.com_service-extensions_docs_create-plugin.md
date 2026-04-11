---
title: "Create a plugin \_|\_ Service Extensions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/create-plugin
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs/create-plugin
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/create-plugin
  title: "Create a plugin \_|\_ Service Extensions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Service Extensions
Guides
Send feedback
Create a plugin
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create Service Extensions plugins that you
can use to implement extensibility with Google Cloud services.
This feature is in Preview for Media CDN.
For a product overview, see
Service Extensions overview .
Before you begin
Prepare and upload the files required
to create a plugin.
Get the required Identity and Access Management (IAM) roles and permissions .
Enable the Network Services API, if it's not already enabled.
gcloud services enable networkservices.googleapis.com
For Media CDN plugins, if you intend to enable logging,
enable the Network Actions API.
gcloud services enable networkactions.googleapis.com
Create a plugin resource
Creating a plugin resource entails specifying an image that contains the plugin
code and specifying labels and logging options for the plugin.
Note: For Media CDN, the Google Cloud console isn't supported.
Console
To create a plugin, follow these steps:
In the Google Cloud console, go to the Service Extensions page.
Go to Service Extensions
Click the Plugins tab.
Click Create plugin .
In the Basics section, do the following:
For Scope , select either Global or Regional .
If you set the scope as Regional , select the region as well.
Enter a unique plugin name.
The name must start with a lowercase letter followed by up to 62
lowercase letters, numbers, or hyphens and must not end with a hyphen.
Optional: Enter a brief description about the plugin by using up to
1024 characters.
In the Wasm image section, do the following:
For Plugin version name , specify a name for the plugin version.
The name must start with a lowercase letter followed by up to 62
lowercase letters, numbers, or hyphens and must not end with a hyphen.
Optional: For Plugin version description , enter a brief
description about the plugin version by using up to 1024 characters.
For Image URL , enter the URL for the
generic artifact or container image that has the Wasm module
from the Artifact Registry pane. The option to use a generic repository is
in Preview .
If you want to specify a container image in a Docker repository, you
can, alternatively, click Select to browse and select it. The
Artifact Registry pane displays the folders in the repository that's
connected to the current project.
To select an image from another project,
ensure that Service Extensions has access to it ,
and then click Change , next to the project name.
Optional: In the Plugin configuration section, to associate the
configuration data
with the plugin, select the Add plugin configuration checkbox, and
then select either of the following options:
Upload plugin configuration file . If your file size is less than
900 KiB and in a local drive, click Browse to locate and
select it.
Select plugin configuration image or artifact from
Artifact Registry . Enter the URL for the
generic artifact or container image that has the Wasm module
from the Artifact Registry pane. The option to use a generic repository is
in Preview .
To specify a container image in a Docker repository, you
can, alternatively, click Select to browse and select it. The
Artifact Registry pane displays the folders in the repository that's
connected to the current project.
Optional: In the Labels section, click Add label . Then, in the
row that appears, do the following:
For Key , enter a key name.
For Value , enter a value for the key.
You can add a maximum of 64 key-value pairs. To add more key-value pairs,
click Add label .
For more information about labels, see
Create and update labels for projects .
In the Encryption section, choose the encryption mechanism
for the plugin. This option is available only for regional plugins.
Google-managed encryption key . Encrypt plugin content
with the Google default encryption mechanism .
Cloud KMS key . Encrypt plugin content with a
customer-managed encryption key
created by using Cloud Key Management Service. In this case, for
Key management type , select Cloud KMS . Then, select
a Cloud KMS key.
Optional: In the Logging section, select Enable logging and do
the following:
For Sample rate , specify a value between 0 and 1 . The value 0
indicates that log messages aren't stored. The default value 1
indicates that all log messages are stored. A floating point value
between 0.0 and 1.0 indicates that a percentage of log messages is
stored.
For Minimum log level , select the minimum
severity level
of plugin log messages to be exported to Cloud Logging. The default
value is Info and higher .
Click Create .
gcloud
Create a plugin by running the gcloud service-extensions wasm-plugins create command :
gcloud service-extensions wasm-plugins create WASM_PLUGIN \
--description= PLUGIN_DESCRIPTION \
--location= LOCATION \
--labels= [LABELS,...] \
--log-config= [LOG_CONFIG,...] \
--image= IMAGE \
--main-version= MAIN_VERSION \
--plugin-config= PLUGIN_CONFIG |
--plugin-config-file= PLUGIN_CONFIG_FILE |
--plugin-config-uri= PLUGIN_CONFIG_URI \
--kms-key-name= KEY_NAME
Replace the following:
WASM_PLUGIN : the ID or the fully qualified
name of the plugin
PLUGIN_DESCRIPTION : a description of the
plugin
LOCATION : the location of the plugin as
either global or a region
LABELS : labels in the form of key-value
pairs separated by commas
LOG_CONFIG : logging options for the plugin.
When the enable option is set to false , logs aren't captured
for the plugin. To enable logging, set the enable option to
true . Then, specify the following details:
sample-rate : the sampling rate of activity logs as a value
between 0 and 1 . The value 0 indicates that log messages
aren't stored. The default value 1 indicates that all log
messages are stored. A floating point value between 0.0 and
1.0 indicates that a percentage of log messages is stored.
min-log-level : the minimum severity level
of plugin log messages to be exported to Cloud Logging. The
default value is INFO .
IMAGE : the URI of the
artifact that contains the Wasm module
stored in the Artifact Registry repository. Before you specify a
container image from another project, ensure that Service Extensions has access to it .
MAIN_VERSION : the ID of the plugin version
to create and set as the main (active) version.
PLUGIN_CONFIG , PLUGIN_CONFIG_FILE ,
or PLUGIN_CONFIG_URI : the optional configuration data , which can be specified as text, a local file, or a container image
in Artifact Registry, respectively.
KEY_NAME : for regional plugins, the fully
qualified name of the
customer-managed encryption key
in the following format: projects/ PROJECT /locations/ LOCATION /keyRings/ KEYRING_NAME /cryptoKeys/ KEY_NAME .
Replace the following:
PROJECT : the ID of the project that
contains the key
LOCATION : the location of the key
KEYRING_NAME : the key ring name
KEY_NAME : the key name
If this option isn't specified, the Google default encryption mechanism
is used.
For example:
gcloud service-extensions wasm-plugins create my-plugin \
--description="This is my plugin." \
--log-config=enable=true,sample-rate=0.5,min-log-level=INFO \
--labels=key1=value1,key2=value2 \
--image=...-docker.pkg.dev/my-project/repository/container:tag \
--main-version=v1 \
--plugin-config-file=config.txt
To deploy a new version, use the
gcloud service-extensions wasm-plugins update command .
Specify a new image and version name:
gcloud service-extensions wasm-plugins update my-plugin \
--image=...-docker.pkg.dev/my-project/repository/container:tag \
--main-version=v2
To run these plugins, you can configure Cloud Load Balancing extensions
and Media CDN extensions .
Important: To request access to Media CDN, contact your
Google Cloud sales representative or your account team.
Access images in another project
Before you can select images from another project, the
Service Extensions service agent must have
access to the project repository
and, depending on how your Wasm module is packaged, one of the following
permissions on the project:
For generic artifacts: artifactregistry.files.download
For container images: artifactregistry.repositories.downloadArtifacts
The Service Extensions service agent is named as follows:
service- PROJECT_NUMBER @gcp-sa-networkactions.iam.gserviceaccount.com
Replace PROJECT_NUMBER with your project number .
What's next
See supported Application Load Balancers for Cloud Load Balancing plugins.
Learn how to configure Cloud Load Balancing edge extensions ,
route extensions ,
and traffic extensions by using plugins.
Learn how to attach Media CDN plugins to routes .
Learn how to manage plugins .
See the Service Extensions overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
