---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.812Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "localhost authentication mode"
feature_slug: "localhost-authentication-mode"
latest_feature_date: "2023-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/auth"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "localhost"
  - "authentication"
  - "mode"
  - "introduces"
  - "for"
  - "ee"
  - "authenticate"
  - "and"
---

# localhost authentication mode

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Introduces localhost mode for ee.Authenticate() and ee.Initialize(); Adds a localhost authentication mode for client library integration.

## Extended Definition

Introduces localhost mode for ee.Authenticate() and ee.Initialize(); Adds a localhost authentication mode for client library integration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you or other users have set up an OAuth client on the project for other reasons, it cannot be removed and you will see an error saying "incompatible OAuth2 client configuration." You will need to use a different project for authentication, or use the colab, localhost or gcloud modes above.
- Project Needed Scopes Settable Local CLI Needed Project Owner localhost local Y Y N N colab remote Y N N N gcloud both Y Y N N notebook both Y Y N Y Credentials for Service Accounts and Compute Engine ee.Initialize() will use Earth Engine credentials (which ee.Authenticate() stores in /.config/earthengine/credentials ) or retrieve credentials from google.auth.default() , but if necessary you can pass a credentials= argument to use credentials from elsewhere, bypassing these defaults.
- The authentication flows use Cloud Projects to authenticate, and they're used for unpaid (free, noncommercial) use as well as paid use.
- This delegates authentication to the gcloud tool and is the same as running gcloud auth application-default login with the default Earth Engine scopes (earthengine, cloud-platform, and drive) or the scopes in the scopes argument. gcloud mode works in both local and remote cases.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- For safety when deleting multiple assets, you can use the --dry run flag to verify exactly what will be deleted without actually deleting anything. set project Sets the Google Cloud project through which computation requests are routed. earthengine set project foo-project This command is needed prior to running commands that require Cloud functionality, for example model . task Prints information about or manages long-running tasks.
- Authenticate () Command execution To run command line utilities, like the Earth Engine CLI, you need to prepend command calls with an exclamation point. !earthengine -h Set a Cloud project Use the --project option to set a Cloud project for each individual earthengine command. !earthengine --project my-project <command> Alternatively, set a default project to be used by all earthengine calls using the set project command.
- The default auth mode in Colab is colab , see the Authentication guide for other options. import ee ee .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine Python Client Library 0.1.383 Feature Updated ee.Authenticate() and ee.Initialize() to support colab mode, added new gcloud mode for remote machines (which makes the --quiet flag no longer necessary), and introduced localhost mode. ee.Initialize() now uses ambient google.auth.default() credentials if present. ee.Authenticate(force=True) forces a refresh, but by default will now reuse existing credentials.
- November 25, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/INSITU MULTI 4KM/DRIFTER : Copernicus Global In-situ Observations of Ocean Currents - Drifter November 18, 2025 Earth Engine Data Catalog Feature Added UCSB-CHC/CHIRPS/V3/PENTAD : CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0) Added projects/gcp-public-data-weathernext/assets/weathernext 2 0 0 : WeatherNext 2 Added projects/global-precipitation-nowcast/assets/global estimation : Oya: 5km Quasi-Global Precipitation Estimates November 11, 2025 Earth Engine Data Catalog Feature Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY : Landsat Collection 2 Tier 1 Level 2 32-Day Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY : Landsat Collection 2 Tier 1 Level 2 8-Day Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL : Landsat Collection 2 Tier 1 Level 2 Annual Composite Added OREGONSTATE/PRISM/ANd : PRISM Daily Spatial Climate Dataset ANd Added OREGONSTATE/PRISM/ANm : PRISM Monthly Spatial Climate Dataset ANm Added projects/nature-trace/assets/species distribution models/australia mammals/v0 : Species Distribution, Australia Mammals October 21, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/OPTICS : Copernicus Global Ocean Bio-Geo-Chemical Forecast - OPTICS Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/PFT : Copernicus Global Ocean Bio-Geo-Chemical Forecast - PFT Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/PLANKTON : Copernicus Global Ocean Bio-Geo-Chemical Forecast - PLANKTON October 14, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/CAR : Copernicus Global Ocean Bio-Geo-Chemical Forecast - CAR Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/CO2 : Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2 Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/NUT : Copernicus Global Ocean Bio-Geo-Chemical Forecast - NUT Added COPERNICUS/MARINE/WAV/ANFC 0 083DEG PT3H : Global Ocean Waves Analysis and Forecast Added COPERNICUS/MARINE/WAV/ANFC 0 083DEG STATIC : Global Ocean Waves Static Bathymetry October 13, 2025 Earth Engine Python Client Library 1.6.12 Fixed ee.Authenticate() will now raise an error when called with auth mode=colab and unsupported scopes .
- Feature Added a localhost auth mode and introduced a ee.oauth.Flow class for smoother integration with other client libraries.
- February 07, 2023 Earth Engine Data Catalog Feature Added ACA/reef habitat/v2 0 : Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 Added COPERNICUS/DEM/GLO30 : Copernicus DEM GLO-30: Global 30m Digital Elevation Model Added ECMWF/ERA5 LAND/DAILY RAW (no longer available) Added Germany/Brandenburg/orthos/20cm : Brandenburg (Germany) RGBN orthophotos 20 cm Added NASA/GEOS-CF/v1/fcst/htf : GEOS-CF fcst htf v1: Goddard Earth Observing System Composition Forecast Added USGS/NLCD RELEASES/2019 REL/RCMAP/V5/COVER (no longer available) January 31, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP64A1 : VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid January 24, 2023 Earth Engine Data Catalog Feature Added ECMWF/ERA5 LAND/MONTHLY AGGR : ERA5-Land Monthly Aggregated - ECMWF Climate Reanalysis Added Germany/Brandenburg/20cm (no longer available) Added NOAA/VIIRS/001/VNP21A1D (no longer available) Added NOAA/VIIRS/001/VNP21A1N (no longer available) January 17, 2023 Earth Engine Data Catalog Feature Added NASA/SMAP/SPL3SMP E/005 : SPL3SMP E.005 SMAP L3 Radiometer Global Daily 9 km Soil Moisture Added NASA/SMAP/SPL4SMGP/007 (no longer available) January 10, 2023 Earth Engine Data Catalog Feature Added Finland/MAVI/VV/50cm : Finland NRG NLS orthophotos 50 cm by Mavi Added Finland/SMK/V/50cm : Finland RGB NLS orthophotos 50 cm by SMK Added Finland/SMK/VV/50cm : Finland NRG NLS orthophotos 50 cm by SMK Added MODIS/061/MOD21C1 : MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C2 : MOD21C2.061 Terra Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MOD21C3 : MOD21C3.061 Terra Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added MODIS/061/MYD17A3HGF : MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MYD21C1 : MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C2 : MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG Added MODIS/061/MYD21C3 : MYD21C3.061 Aqua Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG Added OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 January 03, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD09CMG : MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG Added MODIS/061/MOD17A3HGF : MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m Added MODIS/061/MOD21A1D : MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MOD21A1N : MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1D : MYD21A1D.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km Added MODIS/061/MYD21A1N : MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km December 27, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD18C2 (no longer available) Added MODIS/061/MCD43C3 : MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG December 20, 2022 Earth Engine Data Catalog Feature Added MODIS/061/MCD12Q1 : MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m Added MODIS/061/MCD12Q2 : MCD12Q2.006 Land Cover Dynamics Yearly Global 500m Added MODIS/061/MCD43A2 : MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m Added MODIS/061/MCD43A3 : MCD43A3.061 MODIS Albedo Daily 500m Added MODIS/061/MCD43A4 : MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m Added NOAA/VIIRS/001/VNP14A1 (no longer available) December 13, 2022 Earth Engine Data Catalog Feature Added LARSE/GEDI/GEDI04 A 002 : GEDI L4A Aboveground Biomass Density, Version 2.1 Added LARSE/GEDI/GEDI04 A 002 INDEX : GEDI L4A table index Added LARSE/GEDI/GEDI04 A 002 MONTHLY : GEDI L4A Raster Aboveground Biomass Density, Version 2.1 November 17, 2022 Earth Engine Server Change Updated ee.Image.cumulativeCost to be able to handle multi-band cost images.

