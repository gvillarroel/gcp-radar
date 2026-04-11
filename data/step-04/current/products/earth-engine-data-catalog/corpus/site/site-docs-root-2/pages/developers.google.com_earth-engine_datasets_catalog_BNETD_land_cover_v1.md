---
title: "Cote d'Ivoire BNETD 2020 Land Cover Map \_|\_ Earth Engine Data Catalog \_\
  |\_ Google for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/BNETD_land_cover_v1
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/catalog
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/BNETD_land_cover_v1
  title: "Cote d'Ivoire BNETD 2020 Land Cover Map \_|\_ Earth Engine Data Catalog\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
All Datasets
Send feedback
Cote d'Ivoire BNETD 2020 Land Cover Map
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Cote d'Ivoire BNETD 2020 Land Cover Map was produced by the Ivorian Government with technical and financial support from the European Union.
This land cover map was developed using Sentinel 2 satellite images from 2020 processed via Google Earth Engine and supplemented with field data to train a Random Forest classification algorithm.
The map is relevant for the EUDR due diligence process to assess the risk of a plot being located in an area that was forested before the 2020 cut-off date.
A platform on Africa GeoPortal provides access to the 2020 land cover data, metadata, and methodology using ESRI solutions.
The dataset is available for the period of 2020-01-01 to 2021-01-01 and has a cadence of 1 year, with a pixel size of 10 meters.
Dataset Availability
2020-01-01T00:00:00Z–2021-01-01T00:00:00Z
Dataset Producer
BNETD-CIGN
Earth Engine Snippet
ee.ImageCollection("BNETD/land_cover/v1")
open_in_new
Cadence
1 Year
Tags
classification
deforestation
forest
landcover
landuse-landcover
Description
The Cote d'Ivoire BNETD 2020 Land Cover Map was produced by the Ivorian
Government through a national institution, the Center for Geographic
Information and Digital from the National Study Office Techniques and
Development (BNETD-CIGN), with technical and financial support from the
European Union. The methodology used to produce the map was transparent,
participatory and in line with international standards.
To develop this map, a mosaic of satellite images (Sentinel 2) from 2020 was
processed via Google Earth Engine and supplemented with data collected in the
field, to train a supervised classification algorithm (Random Forest).
Two field campaigns were conducted, from 10 November to 9 December 2022 and
from 26 January to 13 February 2023, throughout the country. These missions
involved 33 people from multiple partner organizations because the data
collection methods and definitions of certain land use classes
adopted by stakeholders may sometimes differ.
As part of the EUDR due diligence process, geolocation data for plots of
land producing EUDR-relevant products could be overlaid with 2020 forest
cover data in order to assess the risk that the plot is located in an area
that was forested before the 2020 cut-off date. To do this, forest cover
data aligned with the FAO definition of forests and the 2020 cut-off date
is required. The 2020 land cover map of Cote d'Ivoire meets these needs.
Indeed, the classes in the land cover map can be combined to create a
forest/non-forest map that is aligned with the FAO definition of forests.
A platform for accessing 2020 land cover data, metadata and the methodology
has been developed using ESRI solutions, from Africa GeoPortal, for data
analysis and visualization:
The address is: https://bit.ly/carte-ci-2020
Documentation:
Detailed documentation
Methodology in French
Bands
Bands
Pixel size: 10 meters (all bands)
Name
Min
Max
Pixel Size
Description
classification
1
23
10 meters
Land Cover class
classification Class Table
Value
Color
Description
1
#276300
Dense forest (Forêt dense)
2
#59D757
Light forest (Forêt claire)
3
#569D6E
Forest gallery (Forêt galerie)
4
#79CFAD
Secondary forest/degraded forest (Forêt secondaire/forêt dégradée)
5
#34734C
Mangrove
6
#B4FFAD
Forest plantation/Reforestation (Plantation forestière/Reboisement)
7
#6EFA9A
Swamp forest/Forest on hydromorphic soil (Forêt marécageuse/Forêt sur sol hydromorphe)
8
#D68589
Coffee Plantation (Plantation de Café)
9
#EBD37F
Cocoa Plantation (Plantation de Cacao)
10
#D0E09D
Rubber plantation (Plantation d'Hévéa)
11
#E8BEFF
Oil palm plantation (Plantation de Palmier à huile)
12
#E751FE
Coconut Plantation (Plantation de Coco)
13
#F3BFF2
Cashew plantation (Plantation d'Anacarde)
14
#9DFD00
Fruit plantation / Arboriculture (Plantation fruitière / Arboricultures)
15
#F2F38D
Agricultural development/Other crops/Orchards/Fallow land (Aménagement agricole/Autres cultures/Vergers/Jachères)
16
#B6D322
Tree savannah (Savane arborée)
17
#E2FE5F
Shrub formations/ Thickets (Formations arbustives/ Fourrés)
18
#F9FDCC
Herbaceous formations (Formations herbacées)
19
#4A70C0
Body of water, Courses and waterways (Plan d'eau, Cours et voies deau)
20
#BEFFE8
Swampy area (Zone marécageuse)
21
#D20A02
Human habitat, Infrastructure (Habitat humain, Infrastructures)
22
#DBECEF
Rocky outcrop (Affleurement rocheux)
23
#DCDCDC
Bare ground (Sol nu)
Terms of Use
Terms of Use
CC-BY-4.0
Citations
Citations:
BNETD Land Cover Map 2020.
Explore with Earth Engine
Important:
Earth Engine is a platform for petabyte-scale scientific analysis and visualization of
geospatial datasets, both for public benefit and for business and government users.
Earth Engine is free to use for research, education, and nonprofit use. To get started, please
register for Earth Engine access.
Code Editor (JavaScript)
var dataset = ee . Image ( 'BNETD/land_cover/v1/2020' ). select ( 'classification' );
Map . setCenter ( - 5.4400 , 7.5500 , 7 );
Map . addLayer ( dataset , {}, "Cote d'Ivoire Land Cover Map 2020" );
Open in Code Editor
Cote d'Ivoire BNETD 2020 Land Cover Map
The Cote d'Ivoire BNETD 2020 Land Cover Map was produced by the Ivorian Government through a national institution, the Center for Geographic Information and Digital from the National Study Office Techniques and Development (BNETD-CIGN), with technical and financial support from the European Union. The methodology used to produce the map …
BNETD/land_cover/v1,
classification,deforestation,forest,landcover,landuse-landcover
2020-01-01T00:00:00Z/2021-01-01T00:00:00Z
4.3603 -8.602 10.74 -2.493
Google Earth Engine
https://developers.google.com/earth-engine/datasets
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
