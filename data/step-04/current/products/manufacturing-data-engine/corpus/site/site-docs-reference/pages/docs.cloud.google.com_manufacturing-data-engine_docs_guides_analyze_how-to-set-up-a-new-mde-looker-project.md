---
title: "Set up a Looker project \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-set-up-a-new-mde-looker-project
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-set-up-a-new-mde-looker-project
  title: "Set up a Looker project \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Manufacturing Data Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up a Looker project
MDE provides a Looker Project Template git
repository
to help you bootstrap a new MDE Looker project.
We also provide a library that includes MDE-specific LookML
base components and starter configuration packages
to reduce the time it takes to model your MDE data in LookML.
Before you begin
To complete this guide, you need the following prerequisites:
An active Looker instance.
A Looker user account with the Admin role.
An active MDE deployment in a Google Cloud project with
the default MDE configuration package applied.
A user account with at least the following Identity and Access Management (IAM) roles
for the Google Cloud project referenced:
roles/iam.serviceAccountCreator
roles/iam.serviceAccountKeyAdmin
roles/resourcemanager.projectIamAdmin
roles/source.admin
Workstation with a local installation of:
git
Google Cloud CLI
How to bootstrap a new LookML project
Set the default gcloud project to your MDE deployment
project.
All gcloud commands in this guide assume that the default project is set
to the MDE deployment project. You can set the default
project using the following command:
gcloud config set project PROJECT_ID
Replace the following:
PROJECT_ID with the MDE deployment project ID.
Create a service account that Looker uses to read data from
BigQuery, and generate a JSON key for the created service
account using the following commands:
export SA_LOOKER = "mde-looker"
export PROJECT_ID = $( gcloud config get-value project )
gcloud iam service-accounts create $SA_LOOKER --display-name "MDE Looker account"
gcloud projects add-iam-policy-binding ${ PROJECT_ID } --member serviceAccount: ${ SA_LOOKER } @ ${ PROJECT_ID } .iam.gserviceaccount.com --role "roles/bigquery.dataEditor"
gcloud projects add-iam-policy-binding ${ PROJECT_ID } --member serviceAccount: ${ SA_LOOKER } @ ${ PROJECT_ID } .iam.gserviceaccount.com --role "roles/bigquery.jobUser"
export SA_LOOKER_KEY = ~//mde-projects/ $PROJECT_ID / ${ SA_LOOKER } _key.json
gcloud iam service-accounts keys create $SA_LOOKER_KEY --iam-account ${ SA_LOOKER } @ ${ PROJECT_ID } .iam.gserviceaccount.com
cat << EOF
===========================================
Connection credentials to be used in Looker
===========================================
ConnectionName: mde-bigquery-connection
ProjectName: ${ PROJECT_ID }
Dataset: mde_data
ServiceAccount Email: ${ SA_LOOKER } @ ${ PROJECT_ID } .iam.gserviceaccount.com
ServiceAccount JSON key location: ${ SA_LOOKER_KEY }
EOF
Create
a new BigQuery connection in Looker with the
following specifications:
Name the connection as specified in the output of Step 2.
Set the dataset as specified in the output of Step 2.
Follow the service account
authentication path, and use the service account key available in the
location specified in the output of Step 2.
Configuring PDTs for the purposes of this guide is unnecessary. You can
always configure PDTs for this connection on a later stage.
Set the database timezone to UTC.
Create a new git repository. This repository will host the LookML code of
your Looker project.
The following command creates a GitHub repository using the GitHub CLI.
However, you can create a repository with any
supported
git service.
gh repo create mde-looker --private --clone
Navigate to the newly created repository it using the following command:
cd mde-looker
Pull the MDE Looker Project Template files,
and push them into your new Looker repository with the
following commands:
git checkout -b master
git remote add project https://github.com/GoogleCloudPlatform/mde-looker-project-template.git
git pull project master
git push -u origin master
Create a blank Looker project .
Connect
the project you created in Step 6 with the git repository you created in
Step 4, and
register
the SSH key that Looker generates with Cloud Source.
Configure access to the MDE LookML Library .
The MDE Project Template declares the
MDE LookML Library as a dependency. Since the
MDE LookML Library is hosted in a private
GitHub repository ,
the public SSH key of your Looker project must be allow
before you can access it:
Obtain the SSH key of your Looker project.
Configure
authentication for the MDE LookML Library
using the SSH method and obtain the public SSH key of your
Looker project.
Request access to the MDE LookML Library .
Once you have obtained an SSH
key, fill out the MDE LookML Library Access
Form
for allowlisting. Your Looker project will have access
to the library after the SSH key has been allow.
Test access.
After the SSH key of your Looker project has been allow,
you can test
that your Looker project can connect to the GitHub
repository where the MDE LookML Library is hosted.
Open the manifest.lkml file in Looker, and supply the
required values:
Replace <TAG_METADATA_BUCKET_NUMBER> with the tag metadata bucket
number.
Replace <SOURCE_METADATA_BUCKET_NUMBER> with the tag metadata bucket
number.
You can look up the bucket numbers in the MDE web interface or by
calling the GET/metadata/v1/buckets/tag and GET /metadata/v1/buckets/source
API endpoints. Alternatively, you can look up the bucket numbers in the
MDE UI or Manufacturing Connect.
Congratulations, you have set up Looker for MDE.
The LookML model in MDE Looker Project Template
imports the LookML explore file and dashboards from the default
configuration package in the MDE LookML Library . The
default explore file contains an explore per default MDE
type. If you are using the default configuration package in MDE, you can
start analyzing your data right away. See the guide on
how to use the MDE LookML Library
for more details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
