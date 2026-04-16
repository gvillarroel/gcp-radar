---
title: "Manage instance locations \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/locations
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/locations
  title: "Manage instance locations \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Manage instance locations
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page discusses the options for placing your instances in Google Cloud
locations.
When you create a Cloud SQL instance, you choose a
region where the instance
and its data are stored. To reduce latency and
increase availability, choose the same region for your data and your
Compute Engine instances, standard environment applications, and other services.
There are different location types:
A regional location is a specific geographic place, such as
London.
A multi-regional location is a large geographic area,
such as the United States, that contains at least two geographic places.
Multi-regional locations are only used for backups.
Note: Some organizations use an organization
policy to restrict resource locations. If this type of policy affects your
project, you can only select regions the organization policy allows. In
the Location drop-down menu in the Console, the locations that are not
allowed are unavailable.
Learn more .
You choose a location when you first create the instance. The location can't be
changed after the instance is created.
Regional Locations
Regional locations are specific geographic locations within a multi-region
location. Cloud SQL is available in all Google Cloud regions
and is offered in upcoming regional launches at the time of launch. You can
create a Cloud SQL instance in the following regions:
Region Name
Region Description
Africa
africa-south1
Johannesburg
Asia
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
asia-south2
Delhi
asia-southeast1
Singapore
asia-southeast2
Jakarta
Australia
australia-southeast1
Sydney
australia-southeast2
Melbourne
Europe
europe-central2
Warsaw
europe-north1
Finland
Low CO 2
europe-southwest1
Madrid
Low CO 2
europe-west1
Belgium
Low CO 2
europe-west2
London
Low CO 2
europe-west3
Frankfurt
europe-west4
Netherlands
Low CO 2
europe-west6
Zürich
Low CO 2
europe-west8
Milan
europe-west9
Paris
Low CO 2
europe-west10
Berlin
europe-west12
Turin
Middle East
me-central1
Doha
me-central2
Dammam
me-west1
Tel Aviv
North America
northamerica-northeast1
Montréal
Low CO 2
northamerica-northeast2
Toronto
Low CO 2
northamerica-south1
Mexico
us-central1
Iowa
Low CO 2
us-south1
Dallas
Low CO 2
us-east1
South Carolina
us-east4
Northern Virginia
us-east5
Columbus
us-west1
Oregon
Low CO 2
us-west2
Los Angeles
us-west3
Salt Lake City
us-west4
Las Vegas
South America
southamerica-east1
São Paulo
Low CO 2
southamerica-west1
Santiago
Low CO 2
Multi-regional backup locations
Multi-Region Name
Multi-Region Description
asia
Data centers in Asia
eu
Data centers in the European Union
us
Data centers in the United States
Zones
Zones are sub-locations in a region where you can create zonal
resources such as Cloud SQL instances. For example, a zone named
us-central1-a indicates a zone within the us-central1 region. A zone is
independent of other zones in the same region.
You can choose your zone to keep your Cloud SQL instance close to your other
Google Cloud services. If you want your instance to be replicated between
zones synchronously, then configure it for high availability .
You can add a zone when you first create the instance. You can edit the instance
at a later time to modify the zone.
Preferred Location
You can select your zone . Choose
Any if you want the system to select and assign a zone for you during
instance creation.
For more information about zones, see Geography and regions .
What's next
Get more information about
building applications to meet your latency, availability, and durability requirements .
View all the Google Cloud services available in locations worldwide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
