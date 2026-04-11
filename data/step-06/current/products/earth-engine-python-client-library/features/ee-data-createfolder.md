---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.805Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "ee.data.createFolder"
feature_slug: "ee-data-createfolder"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/client_server"
  - "https://developers.google.com/earth-engine/guides/python_install"
keywords:
  - "ee"
  - "createfolder"
  - "adds"
  - "to"
  - "the"
  - "python"
  - "client"
  - "for"
---

# ee.data.createFolder

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Adds ee.data.createFolder to the Python client for creating folders.

## Extended Definition

Adds ee.data.createFolder to the Python client for creating folders.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)
- [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- November 25, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/INSITU MULTI 4KM/DRIFTER : Copernicus Global In-situ Observations of Ocean Currents - Drifter November 18, 2025 Earth Engine Data Catalog Feature Added UCSB-CHC/CHIRPS/V3/PENTAD : CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0) Added projects/gcp-public-data-weathernext/assets/weathernext 2 0 0 : WeatherNext 2 Added projects/global-precipitation-nowcast/assets/global estimation : Oya: 5km Quasi-Global Precipitation Estimates November 11, 2025 Earth Engine Data Catalog Feature Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY : Landsat Collection 2 Tier 1 Level 2 32-Day Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY : Landsat Collection 2 Tier 1 Level 2 8-Day Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL : Landsat Collection 2 Tier 1 Level 2 Annual Composite Added OREGONSTATE/PRISM/ANd : PRISM Daily Spatial Climate Dataset ANd Added OREGONSTATE/PRISM/ANm : PRISM Monthly Spatial Climate Dataset ANm Added projects/nature-trace/assets/species distribution models/australia mammals/v0 : Species Distribution, Australia Mammals October 21, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/OPTICS : Copernicus Global Ocean Bio-Geo-Chemical Forecast - OPTICS Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/PFT : Copernicus Global Ocean Bio-Geo-Chemical Forecast - PFT Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/PLANKTON : Copernicus Global Ocean Bio-Geo-Chemical Forecast - PLANKTON October 14, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/CAR : Copernicus Global Ocean Bio-Geo-Chemical Forecast - CAR Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/CO2 : Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2 Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/NUT : Copernicus Global Ocean Bio-Geo-Chemical Forecast - NUT Added COPERNICUS/MARINE/WAV/ANFC 0 083DEG PT3H : Global Ocean Waves Analysis and Forecast Added COPERNICUS/MARINE/WAV/ANFC 0 083DEG STATIC : Global Ocean Waves Static Bathymetry October 13, 2025 Earth Engine Python Client Library 1.6.12 Fixed ee.Authenticate() will now raise an error when called with auth mode=colab and unsupported scopes .
- November 08, 2022 Earth Engine Data Catalog Feature Added ESA/WorldCover/v200 : ESA WorldCover 10m v200 Added NASA/GSFC/MERRA/flx/2 : MERRA-2 M2T1NXFLX: Surface Flux Diagnostics V5.12.4 Added NASA/GSFC/MERRA/lnd/2 : MERRA-2 M2T1NXLND: Land Surface Diagnostics V5.12.4 Added NASA/GSFC/MERRA/rad/2 : MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4 Added OREGONSTATE/PRISM/Norm91m : PRISM Long-Term Average Climate Dataset Norm91m November 02, 2022 Earth Engine Python Client Library 0.1.330 Change Updated the HTTP client library in the Python client from httplib2 to requests , which re-adds support for multi-threading following the httplib2shim removal.
- Earth Engine Python Client Library 0.1.383 Feature Updated ee.Authenticate() and ee.Initialize() to support colab mode, added new gcloud mode for remote machines (which makes the --quiet flag no longer necessary), and introduced localhost mode. ee.Initialize() now uses ambient google.auth.default() credentials if present. ee.Authenticate(force=True) forces a refresh, but by default will now reuse existing credentials.
- Earth Engine Python Client Library 1.7.3 Feature Added support for the overwrite parameter in the Export.image.toAsset() and Export.table.toAsset() methods, which allows for control over overwriting data in preexisting destination images or tables.

### Client vs. Server \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your client doesn't know what's in the container, but you can find out what's in it by printing it: Code Editor (JavaScript) print ( serverString ); // I am not a String Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) print ( server string . getInfo ()) # I am not a String To see what the container itself looks like, print the string representation of the object: Code Editor (JavaScript) print ( serverString . toString ()); // ee.String("I am not a String!") Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) print ( server string ) # ee.String({"constantValue": "I am not a String!"}) If, for some reason, you need to use Python or JavaScript running in the client to manipulate whatever is in the container, then use getInfo() to get the contents of the container and assign it to a variable: Code Editor (JavaScript) var someString = serverString . getInfo (); var strings = someString + ' Am I?' ; print ( strings ); // I am not a String!
- For example, consider the following two ways of creating a list: Not recommended — client-side for-loop Code Editor (JavaScript) var clientList = []; for ( var i = 0 ; i < 8 ; i ++ ) { clientList . push ( i + 1 ); } print ( clientList ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) client list = [] for i in range ( 8 ): client list . append ( i + 1 ) print ( client list ) Recommended — server-side mapping Code Editor (JavaScript) var serverList = ee .
- To start, consider a client-side string object (which is NOT a proxy object): Code Editor (JavaScript) var clientString = 'I am a String' ; print ( typeof clientString ); // string Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) client string = 'I am a String' print ( type ( client string )) # str Observe from the output that the client (the web browser or notebook) has interpreted this code and run it, determining that the variable is type string .
- List ( clientList ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) to server list = ee .

### Python Installation \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Keep your client library up to date by running the command for the package manager you used to install earthengine-api : Conda Package Manager : conda update -c conda-forge earthengine-api Python Package Installer : pip install earthengine-api --upgrade Python support The Earth Engine Python client library is compatible with Python versions supported by Google Cloud .
- It must be imported and initialized for each new Python session and script: import ee Authentication and Initialization Prior to using the Earth Engine Python client library, you need to authenticate and use the resultant credentials to initialize the Python client.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-03-07 UTC."],[],["To work with the Earth Engine Python API, install it via pip install earthengine-api or conda update -c conda-forge earthengine-api.
- Prior to using the Earth Engine Python client library, you need to authenticate and initialize it with a project you own or have permissions to use.

