---
title: "Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/install-plugins
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/install-plugins
  title: "Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Install custom plugins
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to install custom plugins in your Cloud Composer
environment.
Apache Airflow's plugin manager allows you to write custom in-house
Apache Airflow operators, hooks, sensors, or interfaces.
For more information, see custom plugins
in the Airflow documentation.
About custom plugins
When you create an environment, Cloud Composer
creates a Cloud Storage bucket and associates this
bucket with your environment. You use the plugins folder in your
environment's bucket to install custom plugins.
Before you begin
Your account must have a role that allows viewing and
modifying your environment's bucket contents.
This installation method applies only to
Airflow plugins . For example, you
cannot use this method to install common Python modules or other libraries.
Plugins must conform to
the Airflow plugins template
guidelines.
In Cloud Composer 1, plugins are supported only in Airflow 1
environments with
disabled DAG serialization . Plugins are not
supported in Cloud Composer 1 environments with Airflow 2.
Install a plugin
To install a custom plugin into your Cloud Composer environment,
copy the plugin code to the plugins folder in your environment's bucket.
Note: After the plugins are loaded, they are never reloaded, except the UI
plugins in the web server. You might need to restart the web server or
the scheduler processes manually. Otherwise, a scheduler only restarts after
the [scheduler]num_runs ,
which is set to 5000 by default.
To install a plugin:
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
Find your environment and follow the DAGs link.
Go one folder level up, then navigate to the plugins/ folder.
Upload your plugin files. For more information about uploading objects,
see Uploading objects .
gcloud
Use the following gcloud command:
gcloud composer environments storage plugins import \
--environment ENVIRONMENT_NAME \
--location LOCATION \
--source PATH_TO_LOCAL_FILE \
--destination PATH_IN_SUBFOLDER
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
PATH_TO_LOCAL_FILE with the path of the file to upload.
(Optional) PATH_IN_SUBFOLDER with the subfolder path. Use
the --destination argument to upload a plugin to a subfolder in
the plugins folder. Otherwise, omit the --destination argument.
View the list of plugins
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
Find your environment and follow the DAGs link.
Go one folder level up, then navigate to the plugins/ folder.
View the plugin files.
gcloud
Use the following gcloud command:
gcloud composer environments storage plugins list \
--environment ENVIRONMENT_NAME \
--location LOCATION
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
Delete a plugin
To delete a plugin from your Cloud Composer environment,
delete the plugin code from the plugins folder in the environment's bucket.
To delete a plugin:
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
Find your environment and follow the DAGs link.
Go one folder level up, then navigate to the plugins/ folder.
Delete the plugin files. For more information about deleting objects,
see Deleting objects .
gcloud
Use the following gcloud command:
gcloud composer environments storage plugins delete \
--environment ENVIRONMENT_NAME \
--location LOCATION \
PLUGIN_TO_DELETE
Download plugins
To download plugins, choose an option:
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
Find your environment and follow the DAGs link.
Go one folder level up, then navigate to the plugins/ folder.
Download the plugin files. For more information about deleting objects,
see Downloading objects .
gcloud
Use the following gcloud command:
gcloud composer environments storage plugins export \
--environment ENVIRONMENT_NAME \
--location LOCATION \
--destination PATH_TO_LOCAL_DESTINATION \
--source PATH_IN_FOLDER
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
PATH_TO_LOCAL_DESTINATION with the destination for downloaded file.
(Optional) --source is an option to download only one plugin.
PATH_IN_FOLDER is the folder path.
Troubleshoot plugin issues
A newly-uploaded plugin is not visible in Airflow UI
If you use Airflow UI Access Control then the newly
uploaded plugin might not be visible in Airflow UI. To address this issue, ask
Airflow UI Administrator to configure access to the newly uploaded plugin or
assign yourself the Admin role in Airflow UI.
What's next
Data stored in Cloud Storage
Manage DAGs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
