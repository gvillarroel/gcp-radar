---
title: "Apigee hybrid 1.16.0-hotfix.1 release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/hybrid/release-notes/hybrid-v1160-hotfix1
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/release-notes/hybrid-v1160-hotfix1
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/hybrid/release-notes/hybrid-v1160-hotfix1
  title: "Apigee hybrid 1.16.0-hotfix.1 release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Send feedback
Apigee hybrid 1.16.0-hotfix.1 release notes
Stay organized with collections
Save and categorize content based on your preferences.
Note: See Apigee hybrid release notes for hybrid v1.16.0 and prior release notes.
February 06, 2026
v1.16.0-hotfix.1
Announcement
hybrid 1.16.0-hotfix.1
On February 6, 2026 we released Apigee hybrid 1.16.0-hotfix.1.
Important: If your installation is already on Apigee hybrid v1.16.0, use the following procedure to apply this hotfix. For new installations, see The big picture and then apply the hotfix to the new installation with the following instructions.
Apply this hotfix with the following steps:
Note: This hotfix installs the apigee-mart-server container images. All other container images are unchanged from Hybrid v1.16.0.
In your overrides file, update the image.url and image.tag properties of ao and mart to version 1.16.0-hotfix.1 :
ao:
image:
url: "gcr.io/apigee-release/hybrid/apigee-operators"
tag: "1.16.0-hotfix.1"
mart:
image:
url: "gcr.io/apigee-release/hybrid/apigee-mart-server"
tag: "1.16.0-hotfix.1"
Install the hotfix release for Apigee operators, beginning with a dry run:
helm upgrade operator apigee-operator/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
-f overrides.yaml \
--dry-run=server
If the dry run is successful, install the hotfix release for Apigee operators:
helm upgrade operator apigee-operator/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
-f overrides.yaml
Install the hotfix release for your organization, beginning with a dry run:
helm upgrade $ORG_NAME apigee-org/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
-f overrides.yaml \
--dry-run=server
If the dry run is successful, install the hotfix release for your organization:
helm upgrade $ORG_NAME apigee-org/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
-f overrides.yaml
Verify the organization chart by checking the state:
kubectl -n APIGEE_NAMESPACE get apigeeorg
Install the hotfix release for your environment, beginning with a dry run:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
--set env=$ENV_NAME \
-f overrides.yaml \
--dry-run=server
If the dry run is successful, install the hotfix release for your environment:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
--set env=$ENV_NAME \
-f overrides.yaml
Verify the environment chart by checking the state:
kubectl -n APIGEE_NAMESPACE get apigeeenv
v1.16.0-hotfix.1
Fixed
Fixed in this release
Bug ID
Description
479872706
An issue that prevented loading API products, apps, and developers after migrating data to Apigee hybrid 1.16.0 in certain configurations has been resolved.
481793880
An issue that prevented upgrading an existing organization when monetization was enabled has been fixed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
