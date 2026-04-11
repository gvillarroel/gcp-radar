---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.811Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "gcloud authentication mode"
feature_slug: "gcloud-authentication-mode"
latest_feature_date: "2023-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "gcloud"
  - "authentication"
  - "mode"
  - "adds"
  - "for"
  - "remote"
  - "machines"
  - "to"
---

# gcloud authentication mode

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Adds gcloud mode for remote machines to ee.Authenticate() and ee.Initialize().

## Extended Definition

Adds gcloud mode for remote machines to ee.Authenticate() and ee.Initialize().

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model](https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine Python Client Library 0.1.383 Feature Updated ee.Authenticate() and ee.Initialize() to support colab mode, added new gcloud mode for remote machines (which makes the --quiet flag no longer necessary), and introduced localhost mode. ee.Initialize() now uses ambient google.auth.default() credentials if present. ee.Authenticate(force=True) forces a refresh, but by default will now reuse existing credentials.
- February 25, 2025 Earth Engine Data Catalog Feature Added WRI/SBTN/naturalLands/v1 1/2020 : SBTN Natural Lands Map v1.1 February 18, 2025 Earth Engine Data Catalog Feature Added MODIS/061/MOD44B : MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m Added WRI/SBTN/naturalLands/v1/2020 : SBTN Natural Lands Map v1 February 11, 2025 Earth Engine Data Catalog Feature Added MODIS/062/MCD18A1 : MCD18A1.062 Surface Radiation Daily/3-Hour Added MODIS/062/MCD18C2 : MCD18C2.062 Photosynthetically Active Radiation Daily 3-Hour February 04, 2025 Earth Engine Data Catalog Feature Added NASA/GRACE/MASS GRIDS V04/MASCON : GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons Added NASA/GRACE/MASS GRIDS V04/MASCON CRI : GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered) January 28, 2025 Earth Engine Data Catalog Feature Added CSIC/SPEI/2 10 : SPEIbase: Standardised Precipitation-Evapotranspiration Index database, Version 2.10 Added MODIS/061/MOD10A2 : MOD10A2.061 Terra Snow Cover 8-Day L3 Global 500m Added NOAA/CDR/VIIRS/LAI FAPAR/V1 : NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1 Added NOAA/CDR/VIIRS/NDVI/V1 : NOAA CDR VIIRS NDVI: Normalized Difference Vegetation Index, Version 1 Added USDA/WRC/v0 : Wildfire Risk to Communities v0 Earth Engine Python Client Library 1.5.0 Change The Earth Engine Python client library now requires a Cloud project when initializing with localhost or gcloud-legacy authentication modes .
- January 16, 2024 Earth Engine Data Catalog Feature Added UMT/Climate/IrrMapper RF/v1 2 : IrrMapper Irrigated Lands, Version 1.2 January 10, 2024 Earth Engine Python Client Library 0.1.385 Fixed Fixed authentication issues for the gcloud auth application-default calls to login and set-quota-project .
- February 07, 2023 Earth Engine Data Catalog Feature Added ACA/reef habitat/v2 0 : Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 Added COPERNICUS/DEM/GLO30 : Copernicus DEM GLO-30: Global 30m Digital Elevation Model Added ECMWF/ERA5 LAND/DAILY RAW (no longer available) Added Germany/Brandenburg/orthos/20cm : Brandenburg (Germany) RGBN orthophotos 20 cm Added NASA/GEOS-CF/v1/fcst/htf : GEOS-CF fcst htf v1: Goddard Earth Observing System Composition Forecast Added USGS/NLCD RELEASES/2019 REL/RCMAP/V5/COVER (no longer available) January 31, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP64A1 : VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid January 24, 2023 Earth Engine Data Catalog Feature Added ECMWF/ERA5 LAND/MONTHLY AGGR : ERA5-Land Monthly Aggregated - ECMWF Climate Reanalysis Added Germany/Brandenburg/20cm (no longer available) Added NOAA/VIIRS/001/VNP21A1D (no longer available) Added NOAA/VIIRS/001/VNP21A1N (no longer available) January 17, 2023 Earth Engine Data Catalog Feature Added NASA/SMAP/SPL3SMP E/005 : SPL3SMP E.005 SMAP L3 Radiometer Global Daily 9 km Soil Moisture Added NASA/SMAP/SPL4SMGP/007 (no longer available) January 10, 2023 Earth Engine Data Catalog Feature Added Finland/MAVI/VV/50cm : Finland NRG NLS orthophotos 50 cm by Mavi Added Finland/SMK/V/50cm : Finland RGB NLS orthophotos 50 cm by SMK Added Finland/SMK/VV/50cm : Finland NRG NLS orthophotos 50 cm by SMK Added MODIS/061/MOD21C1 : MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C2 : MOD21C2.061 Terra Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C3 : MOD21C3.061 Terra Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added MODIS/061/MYD17A3HGF : MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MYD21C1 : MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C2 : MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C3 : MYD21C3.061 Aqua Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 January 03, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD09CMG : MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD17A3HGF : MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MOD21A1D : MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MOD21A1N : MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1D : MYD21A1D.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1N : MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km December 27, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD18C2 (no longer available) Added MODIS/061/MCD43C3 : MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG December 20, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD12Q1 : MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m Added MODIS/061/MCD12Q2 : MCD12Q2.006 Land Cover Dynamics Yearly Global 500m Added MODIS/061/MCD43A2 : MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m Added MODIS/061/MCD43A3 : MCD43A3.061 MODIS Albedo Daily 500m Added MODIS/061/MCD43A4 : MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m Added NOAA/VIIRS/001/VNP14A1 (no longer available) December 13, 2022 Earth Engine Data Catalog Feature Added LARSE/GEDI/GEDI04 A 002 : GEDI L4A Aboveground Biomass Density, Version 2.1 Added LARSE/GEDI/GEDI04 A 002 INDEX : GEDI L4A table index Added LARSE/GEDI/GEDI04 A 002 MONTHLY : GEDI L4A Raster Aboveground Biomass Density, Version 2.1 November 17, 2022 Earth Engine Server Change Updated ee.Image.cumulativeCost to be able to handle multi-band cost images.

### "Hosted Custom Model for Earth Engine \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model](https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: Creating an model: gcloud ai endpoints create \ --display-name = ${ endpoint -name } Deploying a model gcloud ai endpoints deploy-model { endpoint-id } \ --model = ${ model -id } \ --traffic-split = 0 = 100 \ --display-name = ${ model -display-name } \ --min-replica-count = ${ min -replica-count } \ --max-replica-count = ${ max -replica-count } Once your model is deployed you are ready to connect to your model in Earth Engine to perform inferences.
- Once copied you can either use the Vertex AI's Model Registry to upload your model or use gcloud command line and run something like: gcloud ai models upload \ --artifact-uri = gs:// { your-bucket } /models/model \ --display-name = ${ display -name } \ --container-image-uri = ${ model -container } \ --container-grpc-ports = 8500 TIP: For optimal performance enable gRPC predictions with the container-grpc-ports flag.
- For performance reasons it is recommended to convert your PyTorch model to TorchScript and saved the model file with: model scripted = torch . jit . script ( model ) # Export to TorchScript model scripted . save ( 'model.pt' ) # Save Once the model file is saved it needs to be archived so it can be deployed to Vertex AI.
- Model Endpoint Management Once a model is uploaded to Vertex AI, create an endpoint and deploy the model through the Online Prediction page by creating a new endpoint or by using the gcloud command line with the commands endpoints create and endpoints deploy-model .

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This delegates authentication to the gcloud tool and is the same as running gcloud auth application-default login with the default Earth Engine scopes (earthengine, cloud-platform, and drive) or the scopes in the scopes argument. gcloud mode works in both local and remote cases.
- If you or other users have set up an OAuth client on the project for other reasons, it cannot be removed and you will see an error saying "incompatible OAuth2 client configuration." You will need to use a different project for authentication, or use the colab, localhost or gcloud modes above.
- Step-by-step instructions for gcloud mode (local and remote cases) The following steps describe how to authenticate from a command line on a local machine.
- Project Needed Scopes Settable Local CLI Needed Project Owner localhost local Y Y N N colab remote Y N N N gcloud both Y Y N N notebook both Y Y N Y Credentials for Service Accounts and Compute Engine ee.Initialize() will use Earth Engine credentials (which ee.Authenticate() stores in /.config/earthengine/credentials ) or retrieve credentials from google.auth.default() , but if necessary you can pass a credentials= argument to use credentials from elsewhere, bypassing these defaults.

