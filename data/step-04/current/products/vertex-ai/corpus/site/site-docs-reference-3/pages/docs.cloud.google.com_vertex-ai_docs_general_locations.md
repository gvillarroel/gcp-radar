---
title: "Vertex AI locations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/general/locations
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/general/locations
  title: "Vertex AI locations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Resources
Send feedback
Vertex AI locations
Stay organized with collections
Save and categorize content based on your preferences.
For Generative AI locations, including global endpoints, see
Generative AI on Vertex AI locations .
Google Cloud uses regions , subdivided into zones, to define
the geographic location of physical computing resources. Google stores and
processes your data only in the region you specify for all features of
Vertex AI except for data labeling tasks and any feature in experimental
or preview launch status .
Choosing your location
You can choose any supported location when you create a dataset ,
train a custom-trained model that doesn't use a managed
dataset, or when you import an existing model . You should
typically use the region closest to your physical location or the physical
location of your intended users, but check that the Vertex AI
feature you want to use is supported in your region .
Vertex AI doesn't support a global location.
For operations other than creating a dataset or importing a model, you must use
the location of the resources you are operating on. For example, when you create
a training pipeline that uses a managed dataset, you must use the region
where the dataset is located.
Specifying the location using Google Cloud console
When you use Google Cloud console, you specify the location by using the
location drop-down menu:
Specifying the location using the Vertex AI API
You specify the location for a Vertex AI API request by using the
appropriate locational endpoint.
For example, to make a request in the europe-west4 region, use
the following endpoint:
https://europe-west4-aiplatform.googleapis.com
To make a request in the us-central1 region, use the following
endpoint:
https://us-central1-aiplatform.googleapis.com
When you specify a resource, you use the name of the resource's region as the
location. For example, a dataset in the us-central1 region would be specified
using the following path:
projects/ PROJECT /locations/ us-central1 /datasets/ DATASET_ID
See the list of supported service endpoints .
Available locations
Vertex AI is available in the following regions:
United States
Columbus, Ohio ( us-east5 )
Dallas, Texas ( us-south1 )
Iowa ( us-central1 )
Las Vegas, Nevada ( us-west4 )
Los Angeles, California ( us-west2 )
Moncks Corner, South Carolina ( us-east1 )
Northern Virginia ( us-east4 )
Oregon ( us-west1 )
Salt Lake City, Utah ( us-west3 )
Canada
Montréal ( northamerica-northeast1 )
Toronto ( northamerica-northeast2 )
South America
Santiago, Chile ( southamerica-west1 )
São Paulo, Brazil ( southamerica-east1 )
Africa
Johannesburg, South Africa ( africa-south1 )
Europe
Belgium ( europe-west1 )
Finland ( europe-north1 )
Frankfurt, Germany ( europe-west3 )
London, United Kingdom ( europe-west2 )
Madrid, Spain ( europe-southwest1 )
Milan, Italy ( europe-west8 )
Netherlands ( europe-west4 )
Paris, France ( europe-west9 )
Turin, Italy ( europe-west12 )
Warsaw, Poland ( europe-central2 )
Zürich, Switzerland ( europe-west6 )
Asia Pacific
Hong Kong, China ( asia-east2 )
Jakarta, Indonesia ( asia-southeast2 )
Melbourne, Australia ( australia-southeast2 )
Mumbai, India ( asia-south1 )
Delhi, India ( asia-south2 )
Osaka, Japan ( asia-northeast2 )
Seoul, Korea ( asia-northeast3 )
Singapore ( asia-southeast1 )
Sydney, Australia ( australia-southeast1 )
Taiwan ( asia-east1 )
Tokyo, Japan ( asia-northeast1 )
Middle East
Dammam, Saudi Arabia ( me-central2 )
Doha, Qatar ( me-central1 )
Tel Aviv ( me-west1 )
For Generative AI locations, see
Generative AI on Vertex AI locations .
Google Cloud also provides additional regions for
products other than Vertex AI.
Feature availability
Some Vertex AI features are not available in all regions.
The following table lists the features that are available in each region.
Locations for some Vertex AI components are listed
separately. See the following:
Colab Enterprise
locations
Vertex AI Workbench
locations
The following sortable table lets you select different options to see where
Vertex AI features are available.
For example, to see a list of regions
where Vertex AI Feature Store is available in Europe,
you can select Europe from the Select a location
drop-down menu, and Vertex AI Feature Store
from the Select a feature drop-down menu.
Africa
Asia Pacific
Europe
Middle East
North America
South America
AutoML for image data
AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Data labeling
Model Monitoring
Model Registry
Neural Architecture Search
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
Clear all
Region
Location
Features
asia-east1 Changhua County, Taiwan, Asia Pacific AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Data labeling
Model Monitoring
Model Registry
Neural Architecture Search
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
africa-south1 Johannesburg, South Africa, Africa Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Ray on Vertex AI
Vertex AI Feature Store
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
asia-east2 Hong Kong, Asia Pacific AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
asia-northeast1 Tokyo, Japan, Asia Pacific AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
asia-northeast2 Osaka, Japan, Asia Pacific AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Vector Search
Vertex AI Feature Store *
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex ML Metadata
asia-northeast3 Seoul, South Korea, Asia Pacific AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
asia-south1 Mumbai, India, Asia Pacific AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
asia-southeast1 Jurong West, Singapore, Asia Pacific AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Neural Architecture Search
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
asia-southeast2 Jakarta, Indonesia, Asia Pacific AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
australia-southeast1 Sydney, Australia, Asia Pacific AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
australia-southeast2 Melbourne, Australia, Asia Pacific AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Vector Search
Vertex AI Agent Engine
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex ML Metadata
europe-central2 Warsaw, Poland, Europe AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
europe-north1 Low CO 2 Hamina, Finland, Europe AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Vector Search
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex ML Metadata
europe-southwest1 Low CO 2 Madrid, Spain, Europe AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Vector Search
Vertex AI Agent Engine
Vertex AI Feature Store
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
europe-west1 Low CO 2 St. Ghislain, Belgium, Europe AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Neural Architecture Search
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
europe-west2 Low CO 2 London, England, Europe AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Data labeling
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
europe-west3 Frankfurt, Germany, Europe AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Data labeling
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
europe-west4 Low CO 2 Eemshaven, Netherlands, Europe AutoML for image data
AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Data labeling
Model Monitoring
Model Registry
Neural Architecture Search
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
europe-west6 Low CO 2 Zürich, Switzerland, Europe AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
europe-west8 Milan, Italy, Europe AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Vector Search
Vertex AI Feature Store *
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex ML Metadata
europe-west9 Low CO 2 Paris, France, Europe AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
europe-west12 Turin, Italy, Europe AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Ray on Vertex AI
Vertex AI Feature Store
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
me-central1 Doha, Qatar, Middle East Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Ray on Vertex AI
Vertex AI Feature Store
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
me-central2 Damman, Saudi Arabia, Middle East Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Ray on Vertex AI
Vertex AI Feature Store
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
me-west1 Tel Aviv, Israel, Middle East AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
northamerica-northeast1 Low CO 2 Montréal, Québec, North America AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
northamerica-northeast2 Low CO 2 Toronto, Ontario, North America AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
southamerica-east1 Low CO 2 Osasco, São Paulo, Brazil, South America AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
southamerica-west1 Low CO 2 Santiago, Chile, South America AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Vector Search
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex ML Metadata
us-central1 Low CO 2 Council Bluffs, Iowa, North America AutoML for image data
AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Data labeling
Model Monitoring
Model Registry
Neural Architecture Search
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
us-east1 Moncks Corner, South Carolina, North America AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Neural Architecture Search
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
us-east4 Ashburn, Virginia, North America AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Neural Architecture Search
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
us-east5 Columbus, Ohio, North America Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Ray on Vertex AI
Vertex AI Feature Store
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
us-south1 Low CO 2 Dallas, Texas, North America AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
us-west1 Low CO 2 The Dalles, Oregon, North America AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Neural Architecture Search
Ray on Vertex AI
Vector Search
Vertex AI Agent Engine
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
us-west2 Los Angeles, California, North America AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
us-west3 Salt Lake City, Utah, North America AutoML for tabular data
AutoML Forecasting
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
us-west4 Las Vegas, Nevada, North America AutoML for tabular data
Custom model batch inference
Custom model online inference
Custom model training
Model Monitoring
Model Registry
Ray on Vertex AI
Vector Search
Vertex AI Experiments
Vertex AI Feature Store (Legacy)
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex Explainable AI
Vertex ML Metadata
* Cells marked with asterisks represent
regions where the service is available through the Vertex AI API but not
in the Google Cloud console.
Vertex AI Workbench locations
See the following locations tables for Vertex AI Workbench:
Vertex AI Workbench instances
Managed notebooks
User-managed notebooks
Vertex AI Workbench instances locations
Vertex AI Workbench instances are available in the following zones.
Asia Pacific
Europe
Middle East
North America
South America
Clear all
Region
Location
Zones
asia-east1 *
Changhua County, Taiwan, Asia Pacific
asia-east1-a
asia-east1-b
asia-east1-c
asia-east2
Hong Kong, Asia Pacific
asia-east2-a
asia-east2-b
asia-east2-c
asia-northeast1
Tokyo, Japan, Asia Pacific
asia-northeast1-a
asia-northeast1-b
asia-northeast1-c
asia-northeast3
Seoul, South Korea, Asia Pacific
asia-northeast3-a
asia-northeast3-b
asia-northeast3-c
asia-south1
Mumbai, India, Asia Pacific
asia-south1-a
asia-south1-b
asia-south1-c
asia-south2
Delhi, India, Asia Pacific
asia-south2-a
asia-south2-b
asia-south2-c
asia-southeast1
Jurong West, Singapore, Asia Pacific
asia-southeast1-a
asia-southeast1-b
asia-southeast1-c
asia-southeast2 *
Jakarta, Indonesia, Asia Pacific
asia-southeast2-a
asia-southeast2-b
asia-southeast2-c
australia-southeast1
Sydney, Australia, Asia Pacific
australia-southeast1-a
australia-southeast1-b
australia-southeast1-c
europe-central2 *
Warsaw, Poland, Europe
europe-central2-a
europe-central2-b
europe-central2-c
europe-west1
Low CO 2
St. Ghislain, Belgium, Europe
europe-west1-b
europe-west1-c
europe-west1-d
europe-west2 *
Low CO 2
London, England, Europe
europe-west2-a
europe-west2-b
europe-west2-c
europe-west3 *
Frankfurt, Germany, Europe
europe-west3-a
europe-west3-b
europe-west3-c
europe-west4 †
Low CO 2
Eemshaven, Netherlands, Europe
europe-west4-a
europe-west4-b
europe-west4-c
europe-west6 *
Low CO 2
Zürich, Switzerland, Europe
europe-west6-a
europe-west6-b
europe-west6-c
europe-west12 *
Turin, Italy, Europe
europe-west12-a
europe-west12-b
europe-west12-c
me-central1 *
Doha, Qatar, Middle East
me-central1-a
me-central1-b
me-central1-c
me-central2 *
Dammam, Saudi Arabia, Middle East
me-central2-a
me-central2-b
me-central2-c
me-west1 *
Tel Aviv, Israel, Middle East
me-west1-a
me-west1-b
me-west1-c
northamerica-northeast1
Low CO 2
Montréal, Québec, North America
northamerica-northeast1-a
northamerica-northeast1-b
northamerica-northeast1-c
northamerica-northeast2 *
Low CO 2
Toronto, Ontario, North America
northamerica-northeast2-a
northamerica-northeast2-b
northamerica-northeast2-c
southamerica-east1
Low CO 2
Osasco, São Paulo, Brazil, South America
southamerica-east1-a
southamerica-east1-b
southamerica-east1-c
us-central1
Low CO 2
Council Bluffs, Iowa, North America
us-central1-a
us-central1-b
us-central1-c
us-east1 *
Moncks Corner, South Carolina, North America
us-east1-b
us-east1-c
us-east1-d
us-east4 *
Ashburn, Virginia, North America
us-east4-a
us-east4-b
us-east4-c
us-east5 *
Columbus, Ohio, North America
us-east5-a
us-east5-b
us-east5-c
us-south1 *
Low CO 2
Dallas, Texas, North America
us-south1-a
us-south1-b
us-south1-c
us-west1
Low CO 2
The Dalles, Oregon, North America
us-west1-a
us-west1-b
us-west1-c
us-west2 *
Los Angeles, California, North America
us-west2-a
us-west2-b
us-west2-c
us-west3 *
Salt Lake City, Utah, North America
us-west3-a
us-west3-b
us-west3-c
us-west4
Las Vegas, Nevada, North America
us-west4-a
us-west4-b
us-west4-c
* Regions marked with asterisks don't support
running or
scheduling notebooks by using the Vertex AI Workbench executor .
† Regions marked with daggers don't support
the ability to schedule a notebook run, but all other abilities of the
Vertex AI Workbench executor are supported.
Managed notebooks regions
Vertex AI Workbench managed notebooks is
deprecated . On
April 14, 2025, support for
managed notebooks ended and the ability to create managed notebooks instances
was removed. Existing instances will continue to function until
March 30, 2026, but patches, updates, and upgrades
won't be available. To continue using Vertex AI Workbench, we recommend that you
migrate
your managed notebooks instances to Vertex AI Workbench instances .
Managed notebooks are available in the following regions.
Asia Pacific
Europe
North America
South America
Clear all
Region
Location
asia-east2
Hong Kong, Asia Pacific
asia-northeast1
Tokyo, Japan, Asia Pacific
asia-northeast3
Seoul, South Korea, Asia Pacific
asia-south1
Mumbai, India, Asia Pacific
asia-south2
Delhi, India, Asia Pacific
asia-southeast1
Jurong West, Singapore, Asia Pacific
australia-southeast1
Sydney, Australia, Asia Pacific
europe-west1
Low CO 2
St. Ghislain, Belgium, Europe
europe-west4 †
Low CO 2
Eemshaven, Netherlands, Europe
northamerica-northeast1
Low CO 2
Montréal, Québec, North America
southamerica-east1
Low CO 2
Osasco, São Paulo, Brazil, South America
us-central1
Low CO 2
Council Bluffs, Iowa, North America
us-east4
Ashburn, Virginia, North America
us-west1
Low CO 2
The Dalles, Oregon, North America
us-west4
Las Vegas, Nevada, North America
† Regions marked with daggers don't support
the ability to
schedule
a notebook run , but all other abilities of
the Vertex AI Workbench executor are supported.
User-managed notebooks locations
Vertex AI Workbench user-managed notebooks is
deprecated . On
April 14, 2025, support for
user-managed notebooks ended and the ability to create user-managed notebooks instances
was removed. Existing instances will continue to function until
March 30, 2026, but patches, updates, and upgrades
won't be available. To continue using Vertex AI Workbench, we recommend that you
migrate
your user-managed notebooks instances to Vertex AI Workbench instances .
User-managed notebooks are available in the following zones.
Asia Pacific
Europe
Middle East
North America
South America
Clear all
Region
Location
Zones
asia-east1
Changhua County, Taiwan, Asia Pacific
asia-east1-a
asia-east1-b
asia-east1-c
asia-east2
Hong Kong, Asia Pacific
asia-east2-a
asia-east2-b
asia-east2-c
asia-northeast1
Tokyo, Japan, Asia Pacific
asia-northeast1-a
asia-northeast1-b
asia-northeast1-c
asia-northeast3
Seoul, South Korea, Asia Pacific
asia-northeast3-a
asia-northeast3-b
asia-northeast3-c
asia-south1
Mumbai, India, Asia Pacific
asia-south1-a
asia-south1-b
asia-south1-c
asia-south2
Delhi, India, Asia Pacific
asia-south2-a
asia-south2-b
asia-south2-c
asia-southeast1
Jurong West, Singapore, Asia Pacific
asia-southeast1-a
asia-southeast1-b
asia-southeast1-c
asia-southeast2
Jakarta, Indonesia, Asia Pacific
asia-southeast2-a
asia-southeast2-b
asia-southeast2-c
australia-southeast1
Sydney, Australia, Asia Pacific
australia-southeast1-a
australia-southeast1-b
australia-southeast1-c
europe-central2
Warsaw, Poland, Europe
europe-central2-a
europe-central2-b
europe-central2-c
europe-west1
Low CO 2
St. Ghislain, Belgium, Europe
europe-west1-b
europe-west1-c
europe-west1-d
europe-west2
Low CO 2
London, England, Europe
europe-west2-a
europe-west2-b
europe-west2-c
europe-west3
Frankfurt, Germany, Europe
europe-west3-a
europe-west3-b
europe-west3-c
europe-west4
Low CO 2
Eemshaven, Netherlands, Europe
europe-west4-a
europe-west4-b
europe-west4-c
europe-west6
Low CO 2
Zürich, Switzerland, Europe
europe-west6-a
europe-west6-b
europe-west6-c
me-west1
Tel Aviv, Israel, Middle East
me-west1-a
me-west1-b
me-west1-c
northamerica-northeast1
Low CO 2
Montréal, Québec, North America
northamerica-northeast1-a
northamerica-northeast1-b
northamerica-northeast1-c
northamerica-northeast2
Low CO 2
Toronto, Ontario, North America
northamerica-northeast2-a
northamerica-northeast2-b
northamerica-northeast2-c
southamerica-east1
Low CO 2
Osasco, São Paulo, Brazil, South America
southamerica-east1-a
southamerica-east1-b
southamerica-east1-c
us-central1
Low CO 2
Council Bluffs, Iowa, North America
us-central1-a
us-central1-b
us-central1-c
us-east1
Moncks Corner, South Carolina, North America
us-east1-b
us-east1-c
us-east1-d
us-east4
Ashburn, Virginia, North America
us-east4-a
us-east4-b
us-east4-c
us-south1
Low CO 2
Dallas, Texas, North America
us-south1-a
us-south1-b
us-south1-c
us-west1
Low CO 2
The Dalles, Oregon, North America
us-west1-a
us-west1-b
us-west1-c
us-west2
Los Angeles, California, North America
us-west2-a
us-west2-b
us-west2-c
us-west3
Salt Lake City, Utah, North America
us-west3-a
us-west3-b
us-west3-c
us-west4
Las Vegas, Nevada, North America
us-west4-a
us-west4-b
us-west4-c
Region considerations
Using accelerators
Accelerators are available on a region basis. The following table lists all
the available accelerators for each region.
You can search either by location or GPU model, or a combination of
both.
As a best practice, consider using only GPU accelerator types that are available
in multiple zones. That way, if a zonal outage occurs, the accelerator's
workload will try to fail over, capacity permitting.
Asia Pacific
Europe
North America
South America
A100 40GB
A100 80GB
B200
GB200
RTX PRO 6000
H100
H100 Mega
H200
L4
P4
P100
T4
TPU v2
TPU v2 Pod
TPU v3
TPU v3 Pod
TPU v5e
TPU v6e
TPU7x
V100
Clear all
Region
Location
Accelerators
asia-east1
Changhua County, Taiwan, Asia Pacific
L4 † , P100, T4, TPU v2 * , V100, H100 Mega *‡
asia-east2
Hong Kong, Asia Pacific
T4
asia-northeast1
Tokyo, Japan, Asia Pacific
A100 40GB † , H100 ‡ ,
H100 Mega ‡ , B200 *‡ , L4 † , T4,
TPU v6e
asia-northeast3
Seoul, South Korea, Asia Pacific
A100 40GB, H100, L4, T4
asia-south1
Mumbai, India, Asia Pacific
H100, L4, T4, H200 ‡
asia-south2
Delhi, India, APAC
H200, RTX PRO 6000 ‡
asia-southeast1
Jurong West, Singapore, Asia Pacific
A100 40GB, A100 80GB ‡ , B200, H100, H100 Mega ‡ , L4, P4, T4, RTX PRO 6000 ‡
asia-southeast2
Jakarta, Indonesia, Asia Pacific
T4
australia-southeast1
Sydney, Australia, Asia Pacific
H100 Mega ‡ , P4, T4
europe-central2
Warsaw, Poland, Europe
T4
europe-north1
Hamina, Finland, Europe
H100 Mega *‡
europe-west1
St. Ghislain, Belgium, Europe
H100, H100 Mega ‡ , H200 ‡ , L4 † , P100, T4
europe-west2
London, England, Europe
H100, L4, T4
europe-west3
Frankfurt, Germany, Europe
H100, H100 Mega *‡ , L4 †‡ , T4
europe-west4
Eemshaven, Netherlands, Europe
A100 40GB, A100 80GB ‡ , H100,
H100 Mega ‡ , H200, B200 *‡ , L4, P4, T4, V100, P100 *‡ ,
RTX PRO 6000 ‡ ,
TPU v2 * , TPU v2 Pod * ,
TPU v3 * , TPU v3 Pod * ,
TPU v5e † , TPU v6e
europe-west6
Zurich, Switzerland, Europe
L4 †
me-central2
Dammam, Saudi Arabia, Middle East
L4 ‡
me-west1
Tel Aviv, Israel, Middle East
A100 40GB, A100 80GB †‡ , T4 †
northamerica-northeast1
Montréal, Québec, North America
P4, T4
northamerica-northeast2
Toronto, Ontario, North America
H100, L4 ‡
southamerica-east1
Osasco, São Paulo, Brazil, South America
T4
southamerica-west1
Osasco, São Paulo, Brazil, South America
T4 † ,TPU v6e *‡
us-central1
Council Bluffs, Iowa, North America
A100 40GB, A100 80GB ‡ , B200 ‡ , H100,
H100 Mega ‡ , GB200 ‡ , H200 ‡ , L4, P4, P100, T4, RTX PRO 6000 ‡ ,
TPU v2 * , TPU v2 Pod * , TPU v3 * , TPU v5e * ,
TPU v6e ‡ , TPU7x ‡ , V100
us-east1
Moncks Corner, South Carolina, North America
A100 40GB * , B200 *‡ , L4, P100, T4, RTX PRO 6000 ‡ , TPU v5e * ,
TPU v6e + , V100
us-east4
Ashburn, Virginia, North America
A100 80GB ‡ , H100, H100 Mega ‡ , H200 ‡ , B200 *‡ , GB200 *‡ , L4, P4, T4, RTX PRO 6000 ‡
us-east5
Columbus, Ohio, North America
A100 80GB ‡ , H100, H100 Mega ‡ , H200 *‡ , TPU v6e
us-south1
Dallas, Texas, North America
TPU v5e † , TPU v6e * , B200 *‡ , H200 ‡
us-west1
The Dalles, Oregon, North America
H100 Mega ‡ , H200 ‡ , L4, P100, T4, H100, TPU v5e, V100
us-west2
Los Angeles, California, North America
P4, T4, B200 ‡
us-west3
Salt Lake City, Utah, North America
A100 40GB ‡ , B200 *‡
us-west4
Las Vegas, Nevada, North America
A100 40GB *‡ , H100, H100 Mega ‡ , L4 † , T4, TPU v5e
* The specified accelerator isn't available for
serving batch or online inferences .
+ The specified accelerator is available on an allowlist-only basis for
serving batch or online inferences .
† The specified accelerator isn't available for
training .
‡ The specified accelerator isn't available for
Vertex AI Workbench managed notebooks or
user-managed notebooks.
If your job uses multiple types of GPUs, they must all be available in a single
zone in your region. For example, you can't run a job in
australia-southeast1 using NVIDIA Tesla P4 GPUs, NVIDIA Tesla T4 GPUs,
and NVIDIA Tesla P100 GPUs. While all of these GPUs are available for
jobs in australia-southeast1 , no single zone in that region provides all
three types of GPU. To learn more about the zone
availability of GPUs, see
GPU locations .
BigQuery location requirements
When you use a BigQuery table as a source for a managed tabular
dataset or tabular inference data, it must conform to the following location
requirements:
Americas
BigQuery tables can be either multi-regional ( US ) or
regional ( us-central1 ).
BigQuery views must be regional ( us-central1 ).
If the table or view is not in the same project that the
Vertex AI job is running in, make sure that
Vertex AI has the correct roles .
Europe
BigQuery tables and views must be regional ( europe-west4 ).
Location: The region that your Vertex AI job runs in, such as
us-central1 , europe-west4 , or asia-east1 .
If the table or view is not in the same project that the
Vertex AI job is running in, make sure that
Vertex AI has the correct roles .
Cloud Storage bucket requirements
Some Vertex AI tasks, such as importing data, use a
Cloud Storage bucket .
For best performance, we recommend that you use the following settings when
creating a Cloud Storage bucket to use with Vertex AI:
Location type: Region .
Location: The region where you are using Vertex AI; for
example, us-central1 , europe-west4 , or asia-east1 .
Storage class: Standard .
For Vertex AI training jobs, buckets must be regional.
If the bucket is not in the same project that the Vertex AI job
is running in, make sure Vertex AI has
the correct roles .
Restricting resource locations
Organization policy administrators can restrict the regions available where you
can use Vertex AI by creating a resource locations
constraint . Read
about how a resource locations constraint applies to
Vertex AI
What's next
Learn about Google Cloud regions .
Learn about Generative AI on Vertex AI locations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
