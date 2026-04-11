---
title: "Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/concepts/regions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/concepts/regions
  title: "Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Guides
Send feedback
Regions
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud uses regions, subdivided into zones ,
to define the geographic location of physical computing resources.
Key concepts
You specify a location for storing your Cloud Healthcare API data when
you create a dataset. After you create the dataset, the location cannot be
changed. Data within the dataset is stored at rest in the chosen location.
The location is tied to the dataset's identity and is a permanent part of the
dataset's resource name .
All data stores within the dataset are assigned to the same region as the
dataset.
There are two types of locations:
A regional location is a specific geographic place, such as Tokyo.
For more information, see Regional resources
on the Geography and Regions page.
A multi-regional location is a large geographic area, such as the United
States, that contains at least two regional locations. For more information,
see Multi-regional resources
on the Geography and Regions page.
Available regions
The Cloud Healthcare API supports a subset of the
full list of Google Cloud locations .
The Cloud Healthcare API is available in the following regions:
Regional locations
Region name
Region description
Americas
northamerica-northeast1
Montréal
northamerica-northeast2
Toronto
us-central1
Iowa
us-east1
South Carolina
us-east4
North Virginia
us-west1
Oregon
us-west2
Los Angeles
us-west3
Salt Lake City
southamerica-east1
São Paulo
Asia Pacific
asia-east1
Taiwan
asia-east2
Hong Kong
asia-northeast1
Tokyo
asia-northeast2
Osaka
asia-northeast3
Seoul
asia-south1
Mumbai
asia-southeast1
Singapore
asia-southeast2
Jakarta
australia-southeast1
Sydney
australia-southeast2
Melbourne
Europe
europe-north1
Finland
europe-west2
London
europe-west3
Frankfurt
europe-west4
Netherlands
europe-west6
Zurich
Middle East
me-west1
Tel Aviv
me-central1
Doha
me-central2
Dammam
Multi-regional locations
Multi-region name
Multi-region description
us
Data centers in the United States
eu
Data centers within member states of the European Union
Location quota requests
You can request a quota increase for the Cloud Healthcare API in a specific
region , or in a multi-region location .
To request a quota increase in a single region: In your quota increase request,
specify the region.
To request a quota increase in a multi-region location:
For a quota increase in the us multi-region, state in your request that the quota is for "US meta region."
For a quota increase in the eu multi-region, state in your request that the quota is for "EU meta region."
Location considerations
When you choose a location for your data, you might want to consider factors
such as:
Regulatory requirements about where to store your data
Latency
Resiliency
Cost
Colocation with other Google Cloud services
For example,
Google manages multi-regional locations
to be redundant and distributed within and
across regions. These services optimize availability, performance, and
resource efficiency. As a result, these services require a trade-off on either
latency or the consistency model.
Consider doing the following when choosing a location for your data:
Colocate your dataset and your external data source .
Colocate your dataset with your Cloud Storage buckets when importing data .
Colocate your dataset with your Cloud Storage buckets and BigQuery datasets when exporting data .
Moving Cloud Healthcare API data between locations
You cannot change the location of a dataset after it is created. Also, you
cannot move a dataset from one location to another. If you need to move data
from one location to another, complete one of the following processes:
FHIR data
Export
the data from your FHIR stores to a regional or multi-regional
Cloud Storage bucket. When you export the data, the operation only exports
the current version of each resource. The operation does not export version
history; there is no bulk export operation for version history.
There are charges for exporting
FHIR data to Cloud Storage. You also incur charges for
storing the exported data
in Cloud Storage.
After you transfer the data to a Cloud Storage bucket,
create a new dataset in the new location. Create any FHIR stores in the new
dataset that you require for storing your data. Then, import
your data from Cloud Storage into the new FHIR stores.
DICOM data
Export
the data from your DICOM stores to a regional or multi-regional
Cloud Storage bucket.
There are charges for exporting
DICOM data to Cloud Storage. You also incur charges for
storing the exported data
in Cloud Storage.
After you transfer the data to a Cloud Storage bucket,
create a new dataset in the new location. Create any DICOM stores in the new
dataset that you require for storing your data. Then, import
your data from Cloud Storage into the new DICOM stores.
HL7v2 data
Export the HL7v2 messages
from your HL7v2 store to a regional or multi-regional
Cloud Storage bucket.
There are charges for exporting
HL7v2 messages to Cloud Storage. You also incur charges for
storing the exported data
in Cloud Storage.
After you transfer the data to a Cloud Storage bucket,
create a new dataset in the new location. Create any HL7v2 stores in the new
dataset that you require for storing your data. Then, import
your messages from Cloud Storage into the new HL7v2 stores.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
