---
title: "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/datasets/catalog/modis
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets/categories
source_metadata:
  url: https://developers.google.com/earth-engine/datasets/catalog/modis
  title: "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Earth Engine Data Catalog
MODIS
Send feedback
MODIS Collections in Earth Engine
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Daily Products section offers various MODIS datasets covering land cover, vegetation properties, radiation, aerosols, and surface reflectance.
Datasets include global products at various resolutions (250m to 0.05 degree CMG) and temporal frequencies (daily, 8-day, 16-day, monthly, annual).
Both Terra and Aqua sensors contribute to the available MODIS datasets, with some products combining data from both.
Specialized indices such as NDVI, EVI, NDSI, NDWI, and BAI are derived from surface reflectance products for specific applications like vegetation health, snow detection, water content, and burned area mapping.
Several datasets focus on Land Surface Temperature and Emissivity, providing data at different resolutions and temporal composites for both daytime and nighttime observations.
Daily Products
MOD44B.006 Terra Vegetation Continuous Fields Yearly Global 250m
The Terra MODIS Vegetation Continuous Fields (VCF) product is a
sub-pixel-level representation of surface vegetation cover estimates
globally. Designed to continuously represent Earth's terrestrial surface
as a proportion of basic vegetation traits, it provides a gradation of
three surface cover components: percent tree cover, percent non-tree
cover, and percent bare. VCF products provide a continuous, quantitative
portrayal of land surface cover with improved spatial detail, and hence,
are widely used in environmental modeling and monitoring applications.
photo_library
MODIS/006/MOD44B
MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly
Global 250m
The MOD44W V6 land/water mask 250m product is derived using a decision
tree classifier trained with MODIS data and validated with the MOD44W V5
product. A series of masks are applied to address known issues caused by
terrain shadow, burn scars, cloudiness, or ice cover in oceans.
photo_library
MODIS/006/MOD44W
MODOCGA.006 Terra Ocean Reflectance Daily Global 1km
The MODOCGA V6 ocean reflectance product consists of 1 kilometer
reflectance data from Terra MODIS bands 8-16. The product is referred to
as ocean reflectance, because bands 8-16 are used primarily to produce
ocean products, but this is not an ocean product as the tiles produced
are land tiles.
photo_library
MODIS/006/MODOCGA
MYDOCGA.006 Aqua Ocean Reflectance Daily Global 1km
The MYDOCGA V6 ocean reflectance product consists of 1 kilometer
reflectance data from Aqua MODIS bands 8-16. The product is referred to
as ocean reflectance, because bands 8-16 are used primarily to produce
ocean products, but this is not an ocean product as the tiles produced
are land tiles.
photo_library
MODIS/006/MYDOCGA
MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG
The Terra and Aqua combined Moderate Resolution Imaging
Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG)
(MCD12C1) Version 6.1 data product provides a spatially aggregated and
reprojected version of the tiled MCD12Q1 Version 6.1 data product. Maps
of the International Geosphere-Biosphere Programme (IGBP), University of
Maryland (UMD), and Leaf Area Index (LAI) classification schemes are
provided at yearly intervals at 0.05 degree (5,600 meter) spatial
resolution for the entire globe from 2001 to 2022. Additionally,
sub-pixel proportions of each land cover class in each 0.05 degree pixel
is provided along with the aggregated quality assessment information for
each of the three land classification schemes.
photo_library
MODIS/061/MCD12C1
MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m
The Terra and Aqua combined Moderate Resolution Imaging
Spectroradiometer (MODIS) Land Cover Type (MCD12Q1) Version 6.1 data
product provides global land cover types at yearly intervals. The
MCD12Q1 Version 6.1 data product is derived using supervised
classifications of MODIS Terra and Aqua reflectance data. Land cover
types are derived from the International Geosphere-Biosphere Programme
(IGBP), University of Maryland (UMD), Leaf Area Index (LAI),
BIOME-Biogeochemical Cycles (BGC), and Plant Functional Types (PFT)
classification schemes. The supervised classifications then underwent
additional post-processing that incorporate prior knowledge and
ancillary information to further refine specific classes. Additional
land cover property assessment layers are provided by the Food and
Agriculture Organization (FAO) Land Cover Classification System (LCCS)
for land cover, land use, and surface hydrology.
photo_library
MODIS/061/MCD12Q1
MCD12Q2.006 Land Cover Dynamics Yearly Global 500m
The Terra and Aqua combined Moderate Resolution Imaging
Spectroradiometer (MODIS) Land Cover Dynamics (MCD12Q2) Version 6.1 data
product provides global land surface phenology metrics at yearly
intervals. The MCD12Q2 Version 6.1 data product is derived from time
series of the 2-band Enhanced Vegetation Index (EVI2) calculated from
MODIS Nadir Bidirectional Reflectance Distribution Function
(BRDF)-Adjusted Reflectance(NBAR). Vegetation phenology metrics at 500
meter spatial resolution are identified for up to two detected growing
cycles per year. For pixels with more than two valid vegetation cycles,
the data represent the two cycles with the largest NBAR-EVI2 amplitudes.
photo_library
MODIS/061/MCD12Q2
MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m
The MCD15A3H Version 6.1 Moderate Resolution Imaging Spectroradiometer
(MODIS) Level 4, Combined Fraction of Photosynthetically Active
Radiation (FPAR), and Leaf Area Index (LAI) product is a 4-day composite
data set with 500 meter pixel size. The algorithm chooses the best pixel
available from all the acquisitions of both MODIS sensors located on
NASA's Terra and Aqua satellites from within the 4-day period.
photo_library
MODIS/061/MCD15A3H
MCD18A1.061 Surface Radiation Daily/3-Hour
The MCD18A1 Version 6.1 is a Moderate Resolution Imaging
Spectroradiometer (MODIS) Terra and Aqua combined Downward Shortwave
Radiation (DSR) gridded Level 3 product produced daily at 1 kilometer
pixel resolution with estimates of DSR every 3 hours. DSR is incident
solar radiation over land surfaces in the shortwave spectrum (300-4,000
nanometers) and is an important variable in land-surface models that
address a variety of scientific and application issues. The MCD18
products are based on a prototyping algorithm that uses multi-temporal
signatures of MODIS data to derive surface reflectance and then
calculate incident DSR using the look-up table (LUT) approach. The LUTs
consider different types of loadings of aerosols and clouds at a variety
of illumination/viewing geometry. Global DSR products are generated from
MODIS and geostationary satellite data. Additional details regarding the
methodology used to create the data are available in the
Algorithm Theoretical Basis Document
photo_library
MODIS/061/MCD18A1
MCD18C2.061 Photosynthetically Active Radiation Daily 3-Hour
The MCD18C2 Version 6.1 is a Moderate Resolution Imaging
Spectroradiometer (MODIS) Terra and Aqua combined Photosynthetically
Active Radiation (PAR) gridded Level 3 product produced daily at 0.05
degree (5,600 meters at the equator) resolution with estimates of PAR
every 3 hours. PAR is incident solar radiation in the visible spectrum
(400-700 nanometers) and is an important variable in land-surface models
that address a variety of scientific and application issues. The MCD18
products are based on a prototyping algorithm that uses multi-temporal
signatures of MODIS data to derive surface reflectance and then
calculate incident PAR using the look-up table (LUT) approach. The LUTs
consider different types of loadings of aerosols and clouds at a variety
of illumination/viewing geometry. Global PAR products are generated from
MODIS and geostationary satellite data. Additional details regarding the
methodology used to create the data are available in the
Algorithm Theoretical Basis Document
photo_library
MODIS/061/MCD18C2
MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km
The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging
Spectroradiometer (MODIS) Terra and Aqua combined Land Surface
Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced
daily at 500 meter and 1 kilometer resolution. For more information see
the
MAIAC user guide .
photo_library
MODIS/061/MCD19A1_GRANULES
MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km
The MCD19A2 V6.1 data product is a MODIS Terra and Aqua combined
Multi-angle Implementation of Atmospheric Correction (MAIAC) Land
Aerosol Optical Depth (AOD) gridded Level 2 product produced daily at 1
km resolution. For more information see the
MAIAC user guide .
photo_library
MODIS/061/MCD19A2_GRANULES
MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m
The MCD43A1 V6.1 Bidirectional Reflectance Distribution Function and
Albedo (BRDF/Albedo) Model Parameters dataset is a 500 meter daily
16-day product. The Julian date represents the 9th day of the 16-day
retrieval period, and consequently the observations are weighted to
estimate the BRDF/Albedo for that day. The MCD43A1 algorithm, as is with
all combined products, chooses the best representative pixel from a pool
that includes all the acquisitions from both the Terra and Aqua sensors
from the retrieval period.
photo_library
MODIS/061/MCD43A1
MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m
The MCD43A2 V6.1 Bidirectional Reflectance Distribution Function and
Albedo (BRDF/Albedo) Quality dataset is a 500 meter daily 16-day
product. It contains all the quality information for the corresponding
16-day MCD43A3 Albedo and the MCD43A4 Nadir-BRDF (NBAR) products.
photo_library
MODIS/061/MCD43A2
MCD43A3.061 MODIS Albedo Daily 500m
The MCD43A3 V6.1 Albedo Model dataset is a daily 16-day product. It
provides both directional hemispherical reflectance (black sky albedo)
and bihemispherical reflectance (white sky albedo) for each of the MODIS
surface reflectance bands (band 1 through band 7) as well as 3 broad
spectrum bands (visible, near infrared, and shortwave). Each 500m/pixel
daily image is generated using 16 days of data, centered on the given
day. A quality band is also provided for each of the 10 albedo bands.
photo_library
MODIS/061/MCD43A3
MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m
The MCD43A4 V6.1 Nadir Bidirectional Reflectance Distribution Function
Adjusted Reflectance (NBAR) product provides 500 meter reflectance data
of the MODIS "land" bands 1-7. These are adjusted using a bidirectional
reflectance distribution function to model the values as if they were
collected from a nadir view. The data are produced daily based on a
16-day retrieval period, with the image's date occurring on the 9th day.
This product combines data from both the Terra and Aqua spacecrafts,
choosing the best representative pixel from the 16-day period.
photo_library
MODIS/061/MCD43A4
MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG
The MCD43C3 Version 6.1 Bidirectional Reflectance Distribution Function
and Albedo (BRDF/Albedo) Albedo dataset is produced daily using 16 days
of Terra and Aqua MODIS data in a 0.05 degree (5,600 meters at the
equator) Climate Modeling Grid (CMG). Data are temporally weighted to
the ninth day of the retrieval period which is reflected in the Julian
date in the file name. This CMG product covers the entire globe for use
in climate simulation models.
photo_library
MODIS/061/MCD43C3
MCD64A1.061 MODIS Burned Area Monthly Global 500m
The Terra and Aqua combined MCD64A1 Version 6.1 Burned Area data product
is a monthly, global gridded 500m product containing per-pixel
burned-area and quality information. The MCD64A1 burned-area mapping
approach employs 500m MODIS Surface Reflectance imagery coupled with 1km
MODIS active fire observations. The algorithm uses a burn sensitive
vegetation index (VI) to create dynamic thresholds that are applied to
the composite data. The VI is derived from MODIS shortwave infrared
atmospherically corrected surface reflectance bands 5 and 7 with a
measure of temporal texture. The algorithm identifies the date of burn
for the 500m grid cells within each individual MODIS tile. The date is
encoded in a single data layer as the ordinal day of the calendar year
on which the burn occurred, with values assigned to unburned land pixels
and additional special values reserved for missing data and water grid
cells.
photo_library
MODIS/061/MCD64A1
MOD08_M3.061 Terra Atmosphere Monthly Global Product
MOD08_M3 V6.1 is an atmosphere global product that contains monthly 1 x
1 degree grid average values of atmospheric parameters. These parameters
are related to atmospheric aerosol particle properties, total ozone
burden, atmospheric water vapor, cloud optical and physical properties,
and atmospheric stability indices. The product also provides means,
standard deviations, QA weighted statistics, log-normal distributions,
uncertainty estimates, and statistics for fractions of pixels that
satisfy some condition. Below is a subset of the bands, for a complete
list see the
MOD08 Band List .
photo_library
MODIS/061/MOD08_M3
MOD09A1.061 Terra Surface Reflectance 8-Day Global 500m
The MOD09A1 V6.1 product provides an estimate of the surface spectral
reflectance of Terra MODIS bands 1-7 at 500m resolution and corrected
for atmospheric conditions such as gasses, aerosols, and Rayleigh
scattering. Along with the seven reflectance bands is a quality layer
and four observation bands. For each pixel, a value is selected from all
the acquisitions within the 8-day composite on the basis of high
observation coverage, low view angle, the absence of clouds or cloud
shadow, and aerosol loading.
photo_library
MODIS/061/MOD09A1
MOD09CMG.061 Surface Reflectance Daily L3 Global 0.05 Deg CMG
The MOD09CMG Version 6.1 product provides an estimate of the surface
spectral reflectance of Terra Moderate Resolution Imaging
Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter
pixel resolution and corrected for atmospheric conditions such as
gasses, aerosols, and Rayleigh scattering. The MOD09CMG data product
provides 25 layers including MODIS bands 1 through 7; Brightness
Temperature data from thermal bands 20, 21, 31, and 32; along with
Quality Assurance (QA) and observation bands. This product is based on a
Climate Modeling Grid (CMG) for use in climate simulation models.
photo_library
MODIS/061/MOD09CMG
MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m
The MODIS Surface Reflectance products provide an estimate of the
surface spectral reflectance as it would be measured at ground level in
the absence of atmospheric scattering or absorption. Low-level data are
corrected for atmospheric gases and aerosols. MOD09GA version 6.1
provides bands 1-7 in a daily gridded L2G product in the sinusoidal
projection, including 500m reflectance values and 1km observation and
geolocation statistics.
photo_library
MODIS/061/MOD09GA
MOD09GQ.061 Terra Surface Reflectance Daily Global 250m
The MODIS Surface Reflectance products provide an estimate of the
surface spectral reflectance as it would be measured at ground level in
the absence of atmospheric scattering or absorption. Low-level data are
corrected for atmospheric gases and aerosols. MOD09GQ version 6.1
provides bands 1 and 2 at a 250m resolution in a daily gridded L2G
product in the Sinusoidal projection, including a QC and five
observation layers. This product is meant to be used in conjunction with
the MOD09GA where important quality and viewing geometry information is
stored.
photo_library
MODIS/061/MOD09GQ
MOD09Q1.061 Terra Surface Reflectance 8-Day Global 250m
The MOD09Q1 product provides an estimate of the surface spectral
reflectance of bands 1 and 2 at 250m resolution and corrected for
atmospheric conditions such as gasses, aerosols, and Rayleigh
scattering. Along with the two reflectance bands, a quality layer is
also included. For each pixel, a value is selected from all the
acquisitions within the 8-day composite on the basis of high observation
coverage, low view angle, the absence of clouds or cloud shadow, and
aerosol loading.
photo_library
MODIS/061/MOD09Q1
MOD10A1.061 Terra Snow Cover Daily Global 500m
The MOD10A1 V6 Snow Cover Daily Global 500m product contains snow cover,
snow albedo, fractional snow cover, and quality assessment (QA) data.
Snow cover data are based on a snow mapping algorithm that employs a
Normalized Difference Snow Index (NDSI) and other criteria tests.
photo_library
MODIS/061/MOD10A1
MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global
1km
The MOD11A1 V6.1 product provides daily land surface temperature (LST)
and emissivity values in a 1200 x 1200 kilometer grid. The temperature
value is derived from the MOD11_L2 swath product. Above 30 degrees
latitude, some pixels may have multiple observations where the criteria
for clear-sky are met. When this occurs, the pixel value is the average
of all qualifying observations. Provided along with both the day-time
and night-time surface temperature bands and their quality indicator
layers are MODIS bands 31 and 32 and six observation layers.
photo_library
MODIS/061/MOD11A1
MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global
1km
The MOD11A2 V6.1 product provides an average 8-day land surface
temperature (LST) in a 1200 x 1200 kilometer grid. Each pixel value in
MOD11A2 is a simple average of all the corresponding MOD11A1 LST pixels
collected within that 8 day period. The MOD11A2 does a simple averaging
of all daily LST values, without any filtering for specific QA bits.
Each of the MOD11A2 QA values are set based on what majority of input
daily QA values are for any given pixel.
photo_library
MODIS/061/MOD11A2
MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m
The MOD13A1 V6.1 product provides a Vegetation Index (VI) value at a per
pixel basis. There are two primary vegetation layers. The first is the
Normalized Difference Vegetation Index (NDVI) which is referred to as
the continuity index to the existing National Oceanic and Atmospheric
Administration-Advanced Very High Resolution Radiometer (NOAA-AVHRR)
derived NDVI. The second vegetation layer is the Enhanced Vegetation
Index (EVI) that minimizes canopy background variations and maintains
sensitivity over dense vegetation conditions. The EVI also uses the blue
band to remove residual atmosphere contamination caused by smoke and
sub-pixel thin cloud clouds. The MODIS NDVI and EVI products are
computed from atmospherically corrected bi-directional surface
reflectances that have been masked for water, clouds, heavy aerosols,
and cloud shadows.
photo_library
MODIS/061/MOD13A1
MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km
The MOD13A2 V6.1 product provides two Vegetation Indices (VI): the
Normalized Difference Vegetation Index (NDVI) and the Enhanced
Vegetation Index (EVI). The NDVI is referred to as the continuity index
to the existing National Oceanic and Atmospheric Administration-Advanced
Very High Resolution Radiometer (NOAA-AVHRR) derived NDVI. The EVI has
improved sensitivity over high biomass regions.
photo_library
MODIS/061/MOD13A2
MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid
The MOD13A3 V6.1 product data is provided monthly at 1 kilometer (km)
spatial resolution. In generating this monthly product, the algorithm
ingests all the MOD13A2 products that overlap the month and employs a
weighted temporal average.
photo_library
MODIS/061/MOD13A3
MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate
Modeling Grid
The Terra Moderate Resolution Imaging Spectroradiometer (MODIS)
Vegetation Indices 16-Day (MOD13C1) Version 6.1 product provides a
Vegetation Index (VI) value at a per pixel basis. There are two primary
vegetation layers. The first is the Normalized Difference Vegetation
Index (NDVI), which maintains continuity with the existing National
Oceanic and Atmospheric Administration-Advanced Very High Resolution
Radiometer (NOAA-AVHRR) derived NDVI. The second vegetation layer is the
Enhanced Vegetation Index (EVI), which has improved sensitivity over
high biomass regions. The Climate Modeling Grid (CMG) consists of 3,600
rows and 7,200 columns of 5,600 meter (m) pixels. Global MOD13C1 data
are cloud-free spatial composites of the gridded 16-day 1 kilometer
MOD13A2 data, and are provided as a Level 3 product projected on a 0.05
degree (5,600 m) geographic CMG. The MOD13C1 has data fields for NDVI,
EVI, VI QA, reflectance data, angular information, and spatial
statistics such as mean, standard deviation, and number of used input
pixels at the 0.05 degree CMG resolution.
photo_library
MODIS/061/MOD13C1
MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m
The MOD13Q1 V6.1 product provides a Vegetation Index (VI) value at a per
pixel basis. There are two primary vegetation layers. The first is the
Normalized Difference Vegetation Index (NDVI) which is referred to as
the continuity index to the existing National Oceanic and Atmospheric
Administration-Advanced Very High Resolution Radiometer (NOAA-AVHRR)
derived NDVI. The second vegetation layer is the Enhanced Vegetation
Index (EVI) that minimizes canopy background variations and maintains
sensitivity over dense vegetation conditions. The EVI also uses the blue
band to remove residual atmosphere contamination caused by smoke and
sub-pixel thin cloud clouds. The MODIS NDVI and EVI products are
computed from atmospherically corrected bi-directional surface
reflectances that have been masked for water, clouds, heavy aerosols,
and cloud shadows.
photo_library
MODIS/061/MOD13Q1
MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km
The MOD14A1 V6.1 dataset provides daily fire mask composites at 1km
resolution derived from the MODIS 4- and 11-micrometer radiances. The
fire detection strategy is based on absolute detection of a fire (when
the fire strength is sufficient to detect), and on detection relative to
its background (to account for variability of the surface temperature
and reflection by sunlight). The product distinguishes between fire, no
fire and no observation. This information is used for monitoring the
spatial and temporal distribution of fires in different ecosystems,
detecting changes in fire distribution and identifying new fire
frontiers, wild fires, and changes in the frequency of the fires or
their relative strength.
photo_library
MODIS/061/MOD14A1
MOD14A2.061: Terra Thermal Anomalies & Fire 8-Day Global 1km
The MOD14A2 V6.1 dataset provides 8-day fire mask composites at 1km
resolution. It contains the maximum value of the individual pixel
classes over the compositing period. Along with the fire mask, an
associated quality information layer is also provided.
photo_library
MODIS/061/MOD14A2
MOD15A2H.061: Terra Leaf Area Index/FPAR 8-Day Global 500m
The MOD15A2H V6.1 MODIS combined Leaf Area Index (LAI) and Fraction of
Photosynthetically Active Radiation (FPAR) product is an 8-day composite
dataset at 500m resolution. The algorithm chooses the "best" pixel
available from all the acquisitions of the Terra sensor from within the
8-day period.
photo_library
MODIS/061/MOD15A2H
MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m
The MOD16A2 Version 6.1 Evapotranspiration/Latent Heat Flux product is
an 8-day composite product produced at 500 meter pixel resolution. The
algorithm used for the MOD16 data product collection is based on the
logic of the Penman-Monteith equation, which includes inputs of daily
meteorological reanalysis data along with MODIS remotely sensed data
products such as vegetation property dynamics, albedo, and land cover.
photo_library
MODIS/061/MOD16A2
MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m
The Terra Moderate Resolution Imaging Spectroradiometer (MODIS)
MOD16A2GF Version 6.1 Evapotranspiration/Latent Heat Flux (ET/LE)
product is a year-end gap-filled 8-day composite dataset produced at 500
meter (m) pixel resolution. The algorithm used for the MOD16 data
product collection is based on the logic of the Penman-Monteith
equation, which includes inputs of daily meteorological reanalysis data
along with MODIS remotely sensed data products such as vegetation
property dynamics, albedo, and land cover.
photo_library
MODIS/061/MOD16A2GF
MOD17A2H.061: Terra Gross Primary Productivity 8-Day Global 500m
The MOD17A2H V6.1 Gross Primary Productivity (GPP) product is a
cumulative 8-day composite with a 500m pixel size. The product is based
on the radiation-use efficiency concept and can be potentially used as
inputs to data models to calculate terrestrial energy, carbon, water
cycle processes, and biogeochemistry of vegetation.
photo_library
MODIS/061/MOD17A2H
MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global
500m
The MOD17A3HGF V6.1 product provides information about annual Gross and
Net Primary Productivity (GPP and NPP) at 500m pixel resolution. Annual
NPP is derived from the sum of all 8-day Net Photosynthesis(PSN)
products (MOD17A2H) from the given year. The PSN value is the difference
of the Gross Primary Productivity (GPP) and the Maintenance Respiration
(MR) (GPP-MR).
photo_library
MODIS/061/MOD17A3HGF
MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily
Global 1km
The MOD21A1D dataset is produced daily from daytime Level 2 Gridded
(L2G) intermediate LST products at a spatial resolution of 1,000 meters.
The L2G process maps the daily MOD21 swath granules onto a sinusoidal
MODIS grid and stores all observations falling over a gridded cell for a
given day. The MOD21A1 algorithm sorts through these observations for
each cell and estimates the final LST value as an average from all
observations that are cloud free and have good LST&E accuracies. The
daytime average is weighted by the observation coverage for that cell.
Only observations having an observation coverage greater than a 15%
threshold are considered. The MOD21A1D product contains the calculated
LST as well as quality control, the three emissivity bands, view zenith
angle, and time of observation.
photo_library
MODIS/061/MOD21A1D
MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily
Global 1km
The MOD21A1N dataset is produced daily from nighttime Level 2 Gridded
(L2G) intermediate LST products at a spatial resolution of 1,000 meters.
The L2G process maps the daily MOD21 swath granules onto a sinusoidal
MODIS grid and stores all observations falling over a gridded cell for a
given day. The MOD21A1 algorithm sorts through these observations for
each cell and estimates the final LST value as an average from all
observations that are cloud free and have good LST&E accuracies. The
nighttime average is weighted by the observation coverage for that cell.
Only observations having an observation coverage greater than a 15%
threshold are considered. The MOD21A1N product contains the calculated
LST as well as quality control, the three emissivity bands, view zenith
angle, and time of observation.
photo_library
MODIS/061/MOD21A1N
MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily
L3 Global 0.05 Deg CMG
The MOD21C1 dataset is produced daily in a 0.05 degree (5,600 meters at
the equator) Climate Modeling Grid (CMG) from daytime Level 2 Gridded
(L2G) intermediate LST products. The L2G process maps the daily MOD21
swath granules onto a sinusoidal MODIS grid and stores all observations
falling over a gridded cell for a given day. The MOD21C1 algorithm sorts
through these observations for each cell and estimates the final LST
value as an average from all observations that are cloud free and have
good LST&E accuracies. The daytime average is weighted by the
observation coverage for that cell. Only observations having an
observation coverage greater than a 15% threshold are considered. The
MOD21C1 product contains the calculated LST as well as quality control,
the three emissivity bands, view zenith angle, and time of observation.
photo_library
MODIS/061/MOD21C1
MOD21C2.061 Terra Land Surface Temperature and 3-Band Emissivity 8-Day
L3 Global 0.05 Deg CMG
The MOD21C2 dataset is an 8-day composite LST product that uses an
algorithm based on a simple averaging method. The algorithm calculates
the average from all the cloud free MOD21A1D and MOD21A1N daily
acquisitions from the 8-day period. Unlike the MOD21A1 data sets where
the daytime and nighttime acquisitions are separate products, the
MOD21A2 contains both daytime and nighttime acquisitions. The LST,
Quality Control (QC), view zenith angle, and viewing time have separate
day and night bands, while the values for the MODIS emissivity bands 29,
31, and 32 are the average of both the nighttime and daytime
acquisitions.
photo_library
MODIS/061/MOD21C2
MOD21C3.061 Terra Land Surface Temperature and 3-Band Emissivity Monthly
L3 Global 0.05 Deg CMG
The MOD21C3 dataset is a monthly composite LST product that uses an
algorithm based on a simple averaging method. The algorithm calculates
the average from all the cloud free MOD21A1D and MOD21A1N daily
acquisitions from the 8-day period. Unlike the MOD21A1 data sets where
the daytime and nighttime acquisitions are separate products, the
MOD21A2 contains both daytime and nighttime acquisitions. The LST,
Quality Control (QC), view zenith angle, and viewing time have separate
day and night bands, while the values for the MODIS emissivity bands 29,
31, and 32 are the average of both the nighttime and daytime
acquisitions.
photo_library
MODIS/061/MOD21C3
MYD08_M3.061 Aqua Atmosphere Monthly Global Product
MYD08_M3 V6.1 is an atmosphere global product that contains monthly 1 x
1 degree grid average values of atmospheric parameters. These parameters
are related to atmospheric aerosol particle properties, total ozone
burden, atmospheric water vapor, cloud optical and physical properties,
and atmospheric stability indices. The product also provides means,
standard deviations, QA weighted statistics, log-normal distributions,
uncertainty estimates, and statistics for fractions of pixels that
satisfy some condition. Below is a subset of the bands, for a complete
list see the
MOD08 Band List .
photo_library
MODIS/061/MYD08_M3
MYD09A1.061 Aqua Surface Reflectance 8-Day Global 500m
The MYD09A1 V6.1 product provides an estimate of the surface spectral
reflectance of Aqua MODIS bands 1-7 at 500m resolution and corrected for
atmospheric conditions such as gasses, aerosols, and Rayleigh
scattering. Along with the seven reflectance bands is a quality layer
and four observation bands. For each pixel, a value is selected from all
the acquisitions within the 8-day composite on the basis of high
observation coverage, low view angle, the absence of clouds or cloud
shadow, and aerosol loading.
photo_library
MODIS/061/MYD09A1
MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m
The MODIS Surface Reflectance products provide an estimate of the
surface spectral reflectance as it would be measured at ground level in
the absence of atmospheric scattering or absorption. Low-level data are
corrected for atmospheric gases and aerosols. MYD09GA version 6.1
provides bands 1-7 in a daily gridded L2G product in the sinusoidal
projection, including 500m reflectance values and 1km observation and
geolocation statistics.
photo_library
MODIS/061/MYD09GA
MYD09GQ.061 Aqua Surface Reflectance Daily Global 250m
The MODIS Surface Reflectance products provide an estimate of the
surface spectral reflectance as it would be measured at ground level in
the absence of atmospheric scattering or absorption. Low-level data are
corrected for atmospheric gases and aerosols. MYD09GQ version 6.1
provides bands 1 and 2 at a 250m resolution in a daily gridded L2G
product in the Sinusoidal projection, including a QC and five
observation layers. This product is meant to be used in conjunction with
the MYD09GA where important quality and viewing geometry information is
stored.
photo_library
MODIS/061/MYD09GQ
MYD09Q1.061 Aqua Surface Reflectance 8-Day Global 250m
The MYD09Q1 product provides an estimate of the surface spectral
reflectance of bands 1 and 2 at 250m resolution and corrected for
atmospheric conditions such as gasses, aerosols, and Rayleigh
scattering. Along with the two reflectance bands, a quality layer is
also included. For each pixel, a value is selected from all the
acquisitions within the 8-day composite on the basis of high observation
coverage, low view angle, the absence of clouds or cloud shadow, and
aerosol loading.
photo_library
MODIS/061/MYD09Q1
MYD10A1.061 Aqua Snow Cover Daily Global 500m
The MYD10A1 V6 Snow Cover Daily Global 500m product contains snow cover,
snow albedo, fractional snow cover, and quality assessment (QA) data.
Snow cover data are based on a snow mapping algorithm that employs a
Normalized Difference Snow Index (NDSI) and other criteria tests.
photo_library
MODIS/061/MYD10A1
MYD11A1.061 Aqua Land Surface Temperature and Emissivity Daily Global
1km
The MYD11A1 V6.1 product provides daily land surface temperature (LST)
and emissivity values in a 1200 x 1200 kilometer grid. The temperature
value is derived from the MYD11_L2 swath product. Above 30 degrees
latitude, some pixels may have multiple observations where the criteria
for clear-sky are met. When this occurs, the pixel value is the average
of all qualifying observations. Provided along with both the day-time
and night-time surface temperature bands and their quality indicator
layers are MODIS bands 31 and 32 and six observation layers.
photo_library
MODIS/061/MYD11A1
MYD11A2.061 Aqua Land Surface Temperature and Emissivity 8-Day Global
1km
The MYD11A2 V6.1 product provides an average 8-day land surface
temperature (LST) in a 1200 x 1200 kilometer grid. Each pixel value in
MYD11A2 is a simple average of all the corresponding MYD11A1 LST pixels
collected within that 8 day period. The MYD11A2 does a simple averaging
of all daily LST values, without any filtering for specific QA bits.
Each of the MYD11A2 QA values are set based on what majority of input
daily QA values are for any given pixel.
photo_library
MODIS/061/MYD11A2
MYD13A1.061 Aqua Vegetation Indices 16-Day Global 500m
The MYD13A1 V6.1 product provides a Vegetation Index (VI) value at a per
pixel basis. There are two primary vegetation layers. The first is the
Normalized Difference Vegetation Index (NDVI) which is referred to as
the continuity index to the existing National Oceanic and Atmospheric
Administration-Advanced Very High Resolution Radiometer (NOAA-AVHRR)
derived NDVI. The second vegetation layer is the Enhanced Vegetation
Index (EVI) that minimizes canopy background variations and maintains
sensitivity over dense vegetation conditions. The EVI also uses the blue
band to remove residual atmosphere contamination caused by smoke and
sub-pixel thin cloud clouds. The MODIS NDVI and EVI products are
computed from atmospherically corrected bi-directional surface
reflectances that have been masked for water, clouds, heavy aerosols,
and cloud shadows.
photo_library
MODIS/061/MYD13A1
MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km
The MYD13A2 V6.1 product provides two Vegetation Indices (VI): the
Normalized Difference Vegetation Index (NDVI) and the Enhanced
Vegetation Index (EVI). The NDVI is referred to as the continuity index
to the existing National Oceanic and Atmospheric Administration-Advanced
Very High Resolution Radiometer (NOAA-AVHRR) derived NDVI. The EVI has
improved sensitivity over high biomass regions.
photo_library
MODIS/061/MYD13A2
MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid
The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS)
Vegetation Indices (MYD13A3) Version 6.1 data are provided monthly at 1
kilometer (km) spatial resolution as a gridded Level 3 product in the
sinusoidal projection. In generating this monthly product, the algorithm
ingests all the MYD13A2 products that overlap the month and employs a
weighted temporal average.
photo_library
MODIS/061/MYD13A3
MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG
The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS)
Vegetation Indices 16-Day (MYD13C1) Version 6.1 product provides a
Vegetation Index (VI) value at a per pixel basis. There are two primary
vegetation layers. The first is the Normalized Difference Vegetation
Index (NDVI), which maintains continuity with the existing National
Oceanic and Atmospheric Administration-Advanced Very High Resolution
Radiometer (NOAA-AVHRR) derived NDVI. The second vegetation layer is the
Enhanced Vegetation Index (EVI), which has improved sensitivity over
high biomass regions. The Climate Modeling Grid (CMG) consists of 3,600
rows and 7,200 columns of 5,600 meter (m) pixels. Global MYD13C1 data
are cloud-free spatial composites of the gridded 16-day 1 kilometer
MYD13A2 data, and are provided as a Level 3 product projected on a 0.05
degree (5,600 m) geographic CMG. The MYD13C1 has data fields for NDVI,
EVI, VI QA, reflectance data, angular information, and spatial
statistics such as mean, standard deviation, and number of used input
pixels at the 0.05 degree CMG resolution.
photo_library
MODIS/061/MYD13C1
MYD13Q1.061 Aqua Vegetation Indices 16-Day Global 250m
The MYD13Q1 V6.1 product provides a Vegetation Index (VI) value at a per
pixel basis. There are two primary vegetation layers. The first is the
Normalized Difference Vegetation Index (NDVI) which is referred to as
the continuity index to the existing National Oceanic and Atmospheric
Administration-Advanced Very High Resolution Radiometer (NOAA-AVHRR)
derived NDVI. The second vegetation layer is the Enhanced Vegetation
Index (EVI) that minimizes canopy background variations and maintains
sensitivity over dense vegetation conditions. The EVI also uses the blue
band to remove residual atmosphere contamination caused by smoke and
sub-pixel thin cloud clouds. The MODIS NDVI and EVI products are
computed from atmospherically corrected bi-directional surface
reflectances that have been masked for water, clouds, heavy aerosols,
and cloud shadows.
photo_library
MODIS/061/MYD13Q1
MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km
The MYD14A1 V6.1 dataset provides daily fire mask composites at 1km
resolution derived from the MODIS 4- and 11-micrometer radiances. The
fire detection strategy is based on absolute detection of a fire (when
the fire strength is sufficient to detect), and on detection relative to
its background (to account for variability of the surface temperature
and reflection by sunlight). The product distinguishes between fire, no
fire and no observation. This information is used for monitoring the
spatial and temporal distribution of fires in different ecosystems,
detecting changes in fire distribution and identifying new fire
frontiers, wild fires, and changes in the frequency of the fires or
their relative strength.
photo_library
MODIS/061/MYD14A1
MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km
The MYD14A2 V6.1 dataset provides 8-day fire mask composites at 1km
resolution. It contains the maximum value of the individual pixel
classes over the compositing period. Along with the fire mask, an
associated quality information layer is also provided.
photo_library
MODIS/061/MYD14A2
MYD15A2H.061: Aqua Leaf Area Index/FPAR 8-Day Global 500m
The MYD15A2H V6.1 MODIS combined Leaf Area Index (LAI) and Fraction of
Photosynthetically Active Radiation (FPAR) product is an 8-day composite
dataset at 500m resolution. The algorithm chooses the "best" pixel
available from all the acquisitions of the Aqua sensor from within the
8-day period.
photo_library
MODIS/061/MYD15A2H
MYD17A2H.061: Aqua Gross Primary Productivity 8-Day Global 500m
The MYD17A2H V6.1 Gross Primary Productivity (GPP) product is a
cumulative 8-day composite with a 500m resolution. The product is based
on the radiation-use efficiency concept and can be potentially used as
inputs to data models to calculate terrestrial energy, carbon, water
cycle processes, and biogeochemistry of vegetation.
photo_library
MODIS/061/MYD17A2H
MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global
500m
The MYD17A3HGF V6.1 product provides information about annual Gross and
Net Primary Productivity (GPP and NPP) at 500m pixel resolution. Annual
NPP is derived from the sum of all 8-day Net Photosynthesis(PSN)
products (MYD17A2H) from the given year. The PSN value is the difference
of the Gross Primary Productivity (GPP) and the Maintenance Respiration
(MR) (GPP-MR).
photo_library
MODIS/061/MYD17A3HGF
MYD21A1D.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily
Global 1km
The MYD21A1D dataset is produced daily from daytime Level 2 Gridded
(L2G) intermediate LST products at a spatial resolution of 1,000 meters.
The L2G process maps the daily MOD21 swath granules onto a sinusoidal
MODIS grid and stores all observations falling over a gridded cell for a
given day. The MOD21A1 algorithm sorts through these observations for
each cell and estimates the final LST value as an average from all
observations that are cloud free and have good LST&E accuracies. The
daytime average is weighted by the observation coverage for that cell.
Only observations having an observation coverage greater than a 15%
threshold are considered. The MYD21A1D product contains the calculated
LST as well as quality control, the three emissivity bands, view zenith
angle, and time of observation.
photo_library
MODIS/061/MYD21A1D
MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily
Global 1km
The MYD21A1N dataset is produced daily from nighttime Level 2 Gridded
(L2G) intermediate LST products at a spatial resolution of 1,000 meters.
The L2G process maps the daily MOD21 swath granules onto a sinusoidal
MODIS grid and stores all observations falling over a gridded cell for a
given day. The MOD21A1 algorithm sorts through these observations for
each cell and estimates the final LST value as an average from all
observations that are cloud free and have good LST&E accuracies. The
nighttime average is weighted by the observation coverage for that cell.
Only observations having an observation coverage greater than a 15%
threshold are considered. The MYD21A1N product contains the calculated
LST as well as quality control, the three emissivity bands, view zenith
angle, and time of observation.
photo_library
MODIS/061/MYD21A1N
MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3
Global 0.05 Deg CMG
The MYD21C1 dataset is produced daily in a 0.05 degree (5,600 meters at
the equator) Climate Modeling Grid (CMG) from daytime Level 2 Gridded
(L2G) intermediate LST products. The L2G process maps the daily MYD21
swath granules onto a sinusoidal MODIS grid and stores all observations
falling over a gridded cell for a given day. The MYD21C1 algorithm sorts
through these observations for each cell and estimates the final LST
value as an average from all observations that are cloud free and have
good LST&E accuracies. The daytime average is weighted by the
observation coverage for that cell. Only observations having an
observation coverage greater than a 15% threshold are considered. The
MYD21C1 product contains the calculated LST as well as quality control,
the three emissivity bands, view zenith angle, and time of observation.
photo_library
MODIS/061/MYD21C1
MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3
Global 0.05 Deg CMG
The MYD21C2 dataset is an 8-day composite LST product that uses an
algorithm based on a simple averaging method. The algorithm calculates
the average from all the cloud free MYD21A1D and MYD21A1N daily
acquisitions from the 8-day period. Unlike the MYD21A1 data sets where
the daytime and nighttime acquisitions are separate products, the
MYD21A2 contains both daytime and nighttime acquisitions. The LST,
Quality Control (QC), view zenith angle, and viewing time have separate
day and night bands, while the values for the MODIS emissivity bands 29,
31, and 32 are the average of both the nighttime and daytime
acquisitions.
photo_library
MODIS/061/MYD21C2
MYD21C3.061 Aqua Land Surface Temperature and 3-Band Emissivity Monthly
L3 Global 0.05 Deg CMG
The MYD21C3 dataset is a monthly composite LST product that uses an
algorithm based on a simple averaging method. The algorithm calculates
the average from all the cloud free MYD21A1D and MYD21A1N daily
acquisitions from the 8-day period. Unlike the MYD21A1 data sets where
the daytime and nighttime acquisitions are separate products, the
MYD21A2 contains both daytime and nighttime acquisitions. The LST,
Quality Control (QC), view zenith angle, and viewing time have separate
day and night bands, while the values for the MODIS emissivity bands 29,
31, and 32 are the average of both the nighttime and daytime
acquisitions.
photo_library
MODIS/061/MYD21C3
MODIS Combined 16-Day BAI
The Burn Area Index (BAI) is generated from the Red and Near-IR bands,
and measures the spectral distance of each pixel from a reference
spectral point (the measured reflectance of charcoal). This index is
intended to emphasize the charcoal signal in post-fire images. See
Chuvieco et al. (2002)
for details. This product is generated from the MODIS/006/MCD43A4
surface reflectance composites.
photo_library
MODIS/MCD43A4_006_BAI
MODIS Combined 16-Day EVI
The Enhanced Vegetation Index (EVI) is generated from the Near-IR, Red
and Blue bands of each scene, and ranges in value from -1.0 to 1.0. See
Huete et al. (2002)
for details. This product is generated from the MODIS/006/MCD43A4
surface reflectance composites.
photo_library
MODIS/MCD43A4_006_EVI
MODIS Combined 16-Day NDSI
The Normalized Difference Snow Index is used to identify snow, based on
its characteristically higher reflectance in the visible portion of the
spectrum compared to the mid-IR. NDSI is computed using the Green and
Mid-IR bands, and has a range of -1.0 to 1.0. See
Riggs et al. (1994)
for details. This product is generated from the MODIS/006/MCD43A4
surface reflectance composites.
photo_library
MODIS/MCD43A4_006_NDSI
MODIS Combined 16-Day NDVI
The Normalized Difference Vegetation Index is generated from the Near-IR
and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in
value from -1.0 to 1.0. This product is generated from the
MODIS/006/MCD43A4 surface reflectance composites.
photo_library
MODIS/MCD43A4_006_NDVI
MODIS Combined 16-Day NDWI
The Normalized Difference Water Index (NDWI) is sensitive to changes in
liquid water content of vegetation canopies. It is derived from the
Near-IR band and a second IR band, ≈1.24μm when available and
the nearest available IR band otherwise. It ranges in value from -1.0 to
1.0. See
Gao (1996)
for details. This product is generated from the MODIS/006/MCD43A4
surface reflectance composites.
photo_library
MODIS/MCD43A4_006_NDWI
MODIS Terra Daily BAI
The Burn Area Index (BAI) is generated from the Red and Near-IR bands,
and measures the spectral distance of each pixel from a reference
spectral point (the measured reflectance of charcoal). This index is
intended to emphasize the charcoal signal in post-fire images. See
Chuvieco et al. (2002)
for details. This product is generated from the MODIS/006/MOD09GA
surface reflectance composites.
photo_library
MODIS/MOD09GA_006_BAI
MODIS Terra Daily EVI
The Enhanced Vegetation Index (EVI) is generated from the Near-IR, Red
and Blue bands of each scene, and ranges in value from -1.0 to 1.0. See
Huete et al. (2002)
for details. This product is generated from the MODIS/006/MOD09GA
surface reflectance composites.
photo_library
MODIS/MOD09GA_006_EVI
MODIS Terra Daily NDSI
The Normalized Difference Snow Index is used to identify snow, based on
its characteristically higher reflectance in the visible portion of the
spectrum compared to the mid-IR. NDSI is computed using the Green and
Mid-IR bands, and has a range of -1.0 to 1.0. See
Riggs et al. (1994)
for details. This product is generated from the MODIS/006/MOD09GA
surface reflectance composites.
photo_library
MODIS/MOD09GA_006_NDSI
MODIS Terra Daily NDVI
The Normalized Difference Vegetation Index is generated from the Near-IR
and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in
value from -1.0 to 1.0. This product is generated from the
MODIS/006/MOD09GA surface reflectance composites.
photo_library
MODIS/MOD09GA_006_NDVI
MODIS Terra Daily NDWI
The Normalized Difference Water Index (NDWI) is sensitive to changes in
liquid water content of vegetation canopies. It is derived from the
Near-IR band and a second IR band, ≈1.24μm when available and
the nearest available IR band otherwise. It ranges in value from -1.0 to
1.0. See
Gao (1996)
for details. This product is generated from the MODIS/006/MOD09GA
surface reflectance composites.
photo_library
MODIS/MOD09GA_006_NDWI
MOD44W.005 Land Water Mask Derived From MODIS and SRTM
The Global Water Mask uses the SWBD (SRTM Water Body Data) in
combination with MODIS 250m data to create a complete global map of
surface water at 250m spatial resolution, circa 2000-2002. This dataset
is intended for use in processing of raster data and for masking out
water in final raster data products.
photo_library
MODIS/MOD44W/MOD44W_005_2000_02_24
MODIS Aqua Daily BAI
The Burn Area Index (BAI) is generated from the Red and Near-IR bands,
and measures the spectral distance of each pixel from a reference
spectral point (the measured reflectance of charcoal). This index is
intended to emphasize the charcoal signal in post-fire images. See
Chuvieco et al. (2002)
for details. This product is generated from the MODIS/006/MYD09GA
surface reflectance composites.
photo_library
MODIS/MYD09GA_006_BAI
MODIS Aqua Daily EVI
The Enhanced Vegetation Index (EVI) is generated from the Near-IR, Red
and Blue bands of each scene, and ranges in value from -1.0 to 1.0. See
Huete et al. (2002)
for details. This product is generated from the MODIS/006/MYD09GA
surface reflectance composites.
photo_library
MODIS/MYD09GA_006_EVI
MODIS Aqua Daily NDSI
The Normalized Difference Snow Index is used to identify snow, based on
its characteristically higher reflectance in the visible portion of the
spectrum compared to the mid-IR. NDSI is computed using the Green and
Mid-IR bands, and has a range of -1.0 to 1.0. See
Riggs et al. (1994)
for details. This product is generated from the MODIS/006/MYD09GA
surface reflectance composites.
photo_library
MODIS/MYD09GA_006_NDSI
MODIS Aqua Daily NDVI
The Normalized Difference Vegetation Index is generated from the Near-IR
and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in
value from -1.0 to 1.0. This product is generated from the
MODIS/006/MYD09GA surface reflectance composites.
photo_library
MODIS/MYD09GA_006_NDVI
MODIS Aqua Daily NDWI
The Normalized Difference Water Index (NDWI) is sensitive to changes in
liquid water content of vegetation canopies. It is derived from the
Near-IR band and a second IR band, ≈1.24μm when available and
the nearest available IR band otherwise. It ranges in value from -1.0 to
1.0. See
Gao (1996)
for details. This product is generated from the MODIS/006/MYD09GA
surface reflectance composites.
photo_library
MODIS/MYD09GA_006_NDWI
MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km
The MOD16A2 V105 product provides information about 8-day global
terrestrial evapotranspiration at 1km pixel resolution.
Evapotranspiration (ET) is the sum of evaporation and plant
transpiration from the Earth's surface to the atmosphere. With long-term
ET data, the effects of changes in climate, land use, and ecosystems
disturbances can be quantified.
photo_library
MODIS/NTSG/MOD16A2/105
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
