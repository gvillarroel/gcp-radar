---
title: "Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs/intro-to-v3
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade
  title: "Upgrade AutoML resources \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Translation
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Upgrade AutoML resources
If you have existing resources that were created by using the deprecated AutoML API,
you can upgrade those resources to manage them through the
Cloud Translation - Advanced API without any service interruptions or additional
costs. During the upgrade, Cloud Translation copies your AutoML
(legacy) resources, such as datasets and models, and creates new
Cloud Translation (native) resources through the Cloud Translation API.
We recommend that you use Cloud Translation because future enhancements to
datasets and customs models will apply only to Cloud Translation. Upgraded
resources can take advantage of those future enhancements such as additional
language pair support.
Upgrade considerations
After upgrading, your native and legacy resources exist together but are managed
by different APIs. To access and manage the upgraded resources, you must use the
Cloud Translation API, not the deprecated AutoML API.
The native resources are identical to legacy resources except for their resource
IDs. Cloud Translation doesn't make any changes to legacy resources. You can
continue to work with your legacy resources as before.
You can choose to upgrade some or all of your resources. When you upgrade a
dataset, any models that are associated with that dataset are also automatically
upgraded. Only models without an underlying dataset (like in cases where the
associated dataset was deleted) can be manually upgraded on their own.
Differences between legacy and native resources
The following table outlines the differences between legacy and native
resources.
Feature
Legacy
Native
Import data into datasets when using the API
Use CSV file to specify source file locations in
Cloud Storage
Specify TMX and TSV files locations in Cloud Storage
Export data
Supports exporting segment pairs from a dataset or data from the model
evaluation, which includes the test set along with model predictions
Supports exporting segment pairs from a dataset only
View data splits by source file
The Google Cloud console shows a list of source files that were
used to populate a dataset and how the data was split for each file.
You can also delete imported data by source file.
Not applicable, native datasets don't track source file
information.
Model evaluation
Supports running evaluations against a new test set or from an
existing dataset
Supports running evaluations against a new test set only
Cancel operations
Supports canceling dataset import and model creation operations
You cannot cancel long-running operations
Google Cloud console behavior post upgrade
If you upgrade at least one resource, the Google Cloud console switches to
using the Cloud Translation API instead of the deprecated AutoML API. So, when you create
new datasets in the Google Cloud console, you create native datasets by
default. This change happens at the project level, so other users of your
project also see this change.
When training new custom models, the Google Cloud console uses the Cloud Translation API.
Cloud Translation API
To manage native resources through the Cloud Translation API, you need to update
your code to call the correct APIs with the correct resource IDs. For example,
if you have commands that call the deprecated AutoML API and reference legacy resource
IDs, you need to update those commands to call the Cloud Translation API and
reference the native resource IDs.
For more information about the Cloud Translation API, see the
projects.locations.datasets and
projects.locations.models resources.
Upgrade resources
Use the Google Cloud console to upgrade existing AutoML resources to
Cloud Translation resources.
Go to the Cloud Translation console.
Go to the
Translation page
Click Datasets to view your existing datasets.
Click Upgrade to open the Upgrade dataset pane, which lists the
datasets that you can upgrade.
When you upgrade a dataset, any model that's associated with that dataset
is also automatically upgraded.
Select the datasets to upgrade, and then click Start upgrading .
On the Datasets page, the Google Cloud console lists your upgraded and
legacy datasets in separate tables.
To manually upgrade models, in the navigation pane, click Models to view
your existing models.
You can manually upgrade only models without an underlying dataset (like if
the model's associated dataset was deleted).
Click Upgrade to open the Upgrade model pane.
Select the models to upgrade, and the click Start upgrading .
On the Models page, the Google Cloud console lists your upgraded and
legacy models in separate tables.
After you upgrade your resources, consider making the following changes:
Update existing code to use the Cloud Translation API and newly created resources.
For more information, see Create and manage datasets and
Create and manage models .
For translation predictions, use the Cloud Translation API instead of the deprecated AutoML API.
For more information, see translating text with a custom
model .
Delete legacy resources
After you have fully migrated to using the new resources and the
Cloud Translation API, you can remove your legacy resources so that you only have a
single set of resources to work with.
Go to the Cloud Translation console.
Go to the
Translation page
In the navigation pane, click Datasets to view legacy datasets.
For each dataset in the Legacy datasets table, select more_vert More > Delete and then click
Confirm .
In the navigation pane, click Models to view legacy models.
For each model in the Legacy models table, select more_vert More > Delete and then click
Confirm .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
