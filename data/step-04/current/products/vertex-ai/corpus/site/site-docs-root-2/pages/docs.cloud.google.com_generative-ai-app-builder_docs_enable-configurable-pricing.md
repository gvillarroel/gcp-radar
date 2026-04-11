---
title: "Set up configurable pricing for custom search \_|\_ Vertex AI Search \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/enable-configurable-pricing
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/enable-configurable-pricing
  title: "Set up configurable pricing for custom search \_|\_ Vertex AI Search \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Set up configurable pricing for custom search
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI Search offers two pricing models for custom search: a general
consumption-based model and a configurable pricing model.
This page describes the pricing models and how to enable a configurable pricing
model.
Note: If you are creating a data store for use with a Gemini Enterprise app,
make sure to select the General pricing model. See
Enable configurable pricing for a data store .
Pricing models
Vertex AI Search for custom search supports two pricing models:
General : A pay-as-you-go, consumption-based model.
Configurable : A mixed-pricing model that lets you to unbundle capabilities
and create a subscription package that is more closely aligned with your
specific use cases. This pricing model lets you to pay only for the features
that you need and benefit from their powerful capabilities. It offers two
subscriptions and optional add-ons. After you enable this pricing model at
project level, you can select configurable pricing for your apps and data
stores.
Note: Configurable pricing is only applicable to Vertex AI Search
apps and data stores. For any Gemini Enterprise data store that you
create through the AI Applications console, you must select general pricing
under the standard consumption model to expect correct billing.
Before you enable configurable pricing, be aware of the following:
Billing for your subscription package begins immediately upon
enablement.
You must individually enroll each app and data store that you want
covered by the subscription. Any unenrolled resources are charged at
the standard pay-as-you-go rate.
If you choose to create a Gemini Enterprise data store
through the AI Applications console, you must select general pricing under
the standard consumption model to expect correct billing.
Configurable pricing components
The configurable pricing model offers two subscriptions and different feature
add-ons.
Subscription package
The subscription package has two subscriptions:
Storage for your index, measured in GiB, for structured, unstructured, and
website data.
Search query for standard keyword search and filtering capabilities,
measured in QPM (queries per minute).
Usage calculation
The storage size of the data stores for which configurable pricing applies is
added up and compared against the storage subscription threshold. If the usage
per hour is higher than the set threshold, the overage part is charged according
to the general pricing model.
Similarly, the search query units (QPM) of the apps for which configurable
pricing applies are added up and compared against the QPM subscription
threshold. If the usage per minute is higher than the set threshold, the overage
part is charged according to the general pricing model.
When the threshold is modified, the usage is compared to the new threshold for
overage.
Increase subscription threshold
Within a month of enabling the configurable pricing, you can increase both
storage size and QPM threshold after tracking the usage from the Project Billing
Consumption tab.
Note: You can't decrease the storage size or the QPM threshold. After you
increase a subscription threshold, you must wait up to two hours for the
next increase.
Feature add-ons
You can enable powerful features by using add-ons.
Storage add-on
For the semantic embedding add-on, billing occurs when
documents are imported to the data store.
Add-on
Description
Semantic embedding
Enables the creation and maintenance of the
vector embeddings for your documents, which is
required before you can use the semantic query add-on
in your search queries.
Search request add-ons
Billing for these add-ons occurs when users invoke these features in a
search
API call.
Add-on
Description
Semantic query
Enables semantic search capabilities for handling
longer, more complex queries using embeddings.
The semantic embedding add-on at the data store level
is a prerequisite.
KPI & personalization
Enables user-event-based re-ranking and
personalization to optimize for your business-specific
KPIs. You are charged if the data quality has met the
personalization tier and the training pipeline is
ready.
AI overview
Enables generative features, such as generative
summaries and follow-up questions. The semantic query
add-on is a prerequisite.
Pricing details
For more information about pricing, including an example, see
Vertex AI Search Configurable
Pricing .
Enable configurable pricing for project
This section describes how to configure the pricing model at the project level.
To use configurable pricing for an individual app or a data store, you must
first enable it for the project.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
You need this role:
Or, all of these permissions:
Discovery Engine Admin ( roles/discoveryengine.admin )
discoveryengine.projects.update
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Vertex AI Search resources .
You can also get the required permissions through
custom roles or other
predefined roles .
Console
To enable configurable pricing using the Google Cloud console, follow these steps:
In the Google Cloud console, go to the Billing page.
AI Applications
On the Billing page, select Configurable Pricing .
Under Project-wide Configurable Pricing , input the QPM Subscription
Threshold , the minimum is 1000 QPM/month.
Under Project-wide Configurable Pricing , input the Storage Subscription
Threshold , the minimum is 50 GiB/month.
Click Save project settings .
To increase the thresholds, you can modify in the same page and click
Save project settings .
Enable configurable pricing for an app
This section describes how to configure the pricing model at an app level.
To use configurable pricing for an individual app, you must
first enable it for the project . If you don't set up
configurable pricing for the app, it uses the general pricing model
instead of being covered by the subscription cost.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
You need at least one of these roles:
Or, all of these permissions:
Discovery Engine Admin ( roles/discoveryengine.admin )
Discovery Engine Editor ( roles/discoveryengine.editor )
discoveryengine.engines.create
discoveryengine.engines.update
discoveryengine.engines.delete
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Vertex AI Search resources .
You can also get the required permissions through
custom roles or other
predefined roles .
Console
To enable configurable pricing for an app using the Google Cloud console, follow these
steps:
In the Google Cloud console, go to the Apps page.
AI Applications
On the Apps page, click the app you want to modify.
In the main menu, click Billing , and then select Configurable Pricing .
Click Save .
Enable configurable pricing for a data store
This section describes how to configure the pricing model at a data store level.
To use configurable pricing for an individual data store, you must first
enable it for the project . If you don't set up the
configurable pricing for the data store, it uses the general pricing model
instead of being covered by the subscription cost.
Important: If the selected data store is to be used with a
Gemini Enterprise app, don't enable configurable pricing for it.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
You need at least one of these roles:
Or, all of these permissions:
Discovery Engine Admin ( roles/discoveryengine.admin )
Discovery Engine Editor ( roles/discoveryengine.editor )
discoveryengine.dataStores.create
discoveryengine.dataStores.update
discoveryengine.dataStores.delete
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Vertex AI Search resources .
You can also get the required permissions through
custom roles or other
predefined roles .
Console
To enable configurable pricing for a data store using the Google Cloud console,
follow these steps:
In the Google Cloud console, go to the Data stores page.
AI Applications
On the Data Stores page, click the data store you want to modify.
If the data store is connected to any apps, make sure that those apps have
configurable pricing enabled.
An app with general pricing can't connect to a data store with
configurable pricing.
Click Billing , and then select Configurable Pricing .
Optional: Select Semantic (embedding) Add-on . This is a prerequisite for
search serving for semantic query and AI Mode.
Click Save .
Manage configurable pricing for search query add-ons
No special roles or permissions are needed for this task.
Console
To select add-ons for an app using the Google Cloud console, follow these steps:
In the Google Cloud console, go to the AI Applications page.
AI Applications
On the Apps page, click the app that you want to modify.
Click Configurations .
On the UI tab, select the add-ons that you want. For apps of search type
Search , the semantic query add-on can be disabled. The semantic query
add-on is always on for Search with an answer and
Search with follow-ups search types.
Click Save and publish .
Change pricing model to general pricing
You can change individual apps and data stores to use general pricing instead
of configurable pricing. Alternatively, you can turn off configurable pricing
for an entire project.
Before you can change the pricing model for an app, you must make sure that the
data stores connected to it use general pricing. This is because an app using
general pricing can't connect to a data store using configurable pricing.
Before you can reset a project to the general pricing model, you need to make
sure that all apps and data stores in the project are using the general pricing
model.
Enable general pricing for a data store
This section describes how to set the pricing model for a data store to general,
which is the default model.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
You need at least one of these roles:
Or, all of these permissions:
Discovery Engine Admin ( roles/discoveryengine.admin )
Discovery Engine Editor ( roles/discoveryengine.editor )
discoveryengine.dataStores.create
discoveryengine.dataStores.update
discoveryengine.dataStores.delete
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Vertex AI Search resources .
You can also get the required permissions through
custom roles or other
predefined roles .
Console
To enable general pricing for a data store using the Google Cloud console,
follow these steps:
In the Google Cloud console, go to the Data stores page.
AI Applications
On the Data Stores page, click the data store you want to modify.
Click Billing , and then select General Pricing .
Click Save .
Enable general pricing for an app
This section describes how to set the pricing model for an app to general, which
is the default model.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
You need at least one of these roles:
Or, all of these permissions:
Discovery Engine Admin ( roles/discoveryengine.admin )
Discovery Engine Editor ( roles/discoveryengine.editor )
discoveryengine.engines.create
discoveryengine.engines.update
discoveryengine.engines.delete
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Vertex AI Search resources .
You can also get the required permissions through
custom roles or other
predefined roles .
Console
To enable general pricing for an app using the Google Cloud console, follow these
steps:
In the Google Cloud console, go to the Apps page.
AI Applications
If any of the data stores connected to the app use configurable pricing,
enable general pricing for those data stores .
An app with general pricing can't connect to a data store with
configurable pricing.
On the Apps page, click the app you want to modify.
In the main menu, click Billing , and then select General Pricing .
Click Save .
Disable configurable pricing for project
Before you can disable the configurable pricing for your project, you need to
make sure that all apps and data stores in the project use general pricing.
See Enable general pricing for a data store and Enable general
pricing for an app .
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
You need at least one of these roles:
Or, all of these permissions:
Discovery Engine Admin ( roles/discoveryengine.admin )
discoveryengine.projects.update
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Vertex AI Search resources .
You can also get the required permissions through
custom roles or other
predefined roles .
Console
To disable configurable pricing for a project, follow these steps:
In the Google Cloud console, go to the Billing page.
AI Applications
On the Billing page, select General Pricing .
Click Save project settings .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
