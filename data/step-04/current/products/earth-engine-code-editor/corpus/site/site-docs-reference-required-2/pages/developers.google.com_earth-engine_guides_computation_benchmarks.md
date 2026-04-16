---
title: "Computation Benchmarks \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/computation_benchmarks
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/client_server
source_metadata:
  url: https://developers.google.com/earth-engine/guides/computation_benchmarks
  title: "Computation Benchmarks \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Computation Benchmarks
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Benchmark data is provided to help model potential Earth Engine compute costs based on various operations and parameters.
Three common Earth Engine operations are benchmarked: Export image, Export to BigQuery, and High-volume extraction.
Benchmarks were conducted using a Sentinel-2 mosaic as the processing option across three distinct geographical regions: Bay Area, Nigeria, and Germany.
The compute cost in EECU-hours is influenced by factors including the type of operation, region, scale (resolution), timeframe, and the number of samples used.
The provided data are examples for illustration and not guarantees, as actual compute costs can vary due to factors like caching and system-wide activity.
To help model potential Earth Engine compute costs, we've run a number of
benchmark operations and logged their corresponding compute footprint. These
data may be useful for modeling compute costs for your own processing, based on
similar criteria (see "how to use these data" ).
Methodology
Notebooks
We use a Colab notebook to generate these measurements , and
another to parse the results from Cloud Monitoring .
Operation
Included here are a set of common Earth Engine operations.
Export image is a raster image export using the
Export.image.toCloudStorage() batch processing function. This is often
used to export large numbers of pixels to Cloud Storage.
Export to BigQuery samples points from a raster and writes it to Google
BigQuery using the Export.table.toBigQuery() batch processing function.
Writing to BigQuery enables both analysis in BigQuery as well as use in
other tools and services that integrate with BigQuery (like Looker
Studio ).
High-volume extraction downloads 256x256 patches of imagery around a
number of points. This is common for machine learning workflows that use
training and inference on small patches of pixels.
Processing
This field shows which pixel-processing pipeline was used to generate a given
result. All of these operations fundamentally involve a raster image (either
exporting it directly, sampling it with geometries, or extracting patches), and
the 'processing' option describes the mechanism for generating the pixels in
that raster.
The only option is "Sentinel-2 mosaic", though this page may be updated to show
benchmarks involving different processing options in the future. The Sentinel-2
mosaic is constructed using a filtering and compositing algorithm on top of
Sentinel-2 data for the relevant timeframe, resolution, etc. - the specific
parameters and operations are described in
the measurement notebook . Sentinel-2 compositing is a very
common first step or intermediate data product, though the specific parameters
(like cloud cover percentage) vary.
Region
The regions used here are:
Bay Area : a simple ee.Geometry.Rectangle around the San Francisco Bay
area. This is interesting because it contains both land and ocean pixels, so
not all areas are covered by Sentinel-2 imagery.
Area (approx)
Dimensions at 10 m/pixel
Dimensions at 30 m/pixel
Dimensions at 120 m/pixel
22779 km²
[21342,13554] 2.9E8 pixels
[7114x4518] 3.2E7 pixels
[1779x1130] 2010270 pixels
Nigeria : The bounds of Nigeria from the simplified LSIB dataset .
This is the largest region, and is interesting because it's both a cloudy
region (meaning that there are fewer cloud-free pixels) and it's close to
the equator (meaning that it gets relatively fewer visits from polar-orbit
satellites like Sentinel-2).
Area (approx)
Dimensions at 10 m/pixel
Dimensions at 30 m/pixel
Dimensions at 120 m/pixel
912554 km²
[133595x107035] 1.4E10 pixels
[44532x35679] 1.6E9 pixels
[11133x8920] 9.9E7 pixels
Germany : The bounds of Germany from the simplified LISB dataset .
It's more affected by seasonality than the other regions.
Area (approx)
Dimensions at 10 m/pixel
Dimensions at 30 m/pixel
Dimensions at 120 m/pixel
356077 km²
[102130x86666] 8.9E9 pixels
[34044x28889] 9.8E8 pixels
[8511x7223] 6.1E7 pixels
For more info about the regions, see a view of the regions in the Code
Editor .
Scale
All pixel computation happens within a grid (for example, when creating a mosaic
to sample). The scale set here controls the size of the pixels in meters at the
projection's point of true scale.
Using larger values of 'scale' corresponds to lower resolution, so, for example,
increasing 'scale' reduces the number of pixels in an image export for a region.
Timeframe
Each of the operations performs a compositing step on the underlying dataset.
The timeframe listed here is the total calendar time that's considered when
filtering the dataset (more time typically means more data).
The specific times here are the three-month, six-month and one-year periods
before 2024-01-01.
Samples
The number of samples has different interpretations based on the operation.
When exporting tabular data to BigQuery, it's the number of random points
that are sampled from the dataset and exported. Framed another way, this is
the number of rows in the final BigQuery dataset.
When exporting TFRecord patches using the high-volume API endpoint, it's the
total number of 256x256 pixel regions that are sampled from random points
within the region of interest. Note that patches can overlap with this
methodology.
For image exports, the sample count is listed as "N/A" here, since they
don't really "sample" in the typical sense (every pixel value is computed).
One can think of image exports as a grid of samples, where the sample count
is the number of pixels in the result.
How to use these data
These example measurements are provided for illustration only. They're intended
to provide real-world examples of Earth Engine performance and EECU-time costs,
but they're not guarantees - see the "Caveats" section for more
details.
To generate samples using your own processing workflows, use the two notebooks
in the "Notebooks" section . With those, it's possible to generate
a number of measurements for any custom code and read and aggregate the results
from Cloud Monitoring.
Caution: Depending on the operation, it may be expensive to run. Always try with
small regions and trimmed-down examples first!
Caveats
Caching affects these results, but using a random seed (the RANDOM_SEED in the
Measurement notebook ) helps to skip cached results as much as
possible, making the values more consistent between runs. This technique isn't
perfect, however, since there are some caches that are outside of direct user
control (e.g., caches for image tiles).
The state of the data catalog also affects these results, since the underlying
collections can change, get reprocessed, or have new data backfilled, among
other changes.
Additionally, the level of activity from all users of the Earth Engine serving
infrastructure can also play a part. More system-wide usage of the cache or
other users running similar computations may affect the EECU-time for your
results.
Benchmark data
These are real benchmarks (the actual cost to run as of 2024-03-08), but they
provide no guarantee - actual compute costs can vary
significantly .
The cost of an EECU-hour of processing can have different costs (in USD or EUR,
for example) depending on the specific pricing
plan and currency conversion in
Google Cloud Billing.
Export image
Export to BigQuery
High-volume extraction
Sentinel-2 composite
Bay Area
Germany
Nigeria
10 meter
30 meter
120 meter
3 months
6 months
12 months
N/A
100 samples
500 samples
1000 samples
A note about Earth Engine benchmarks.
Operation
Processing
Region
Scale
Timeframe
Samples
Compute benchmark
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
12 months
1000 samples
1.37 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
12 months
500 samples
1.09 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
12 months
100 samples
0.36 EECU-hours
Export image
Sentinel-2 composite
Bay Area
120 meters
12 months
N/A
1.15 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
30 meters
12 months
1000 samples
3.11 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
30 meters
12 months
500 samples
1.32 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
30 meters
12 months
100 samples
0.19 EECU-hours
Export image
Sentinel-2 composite
Bay Area
30 meters
12 months
N/A
14.44 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
10 meters
12 months
1000 samples
1.88 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
10 meters
12 months
500 samples
0.87 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
10 meters
12 months
100 samples
0.15 EECU-hours
Export image
Sentinel-2 composite
Bay Area
10 meters
12 months
N/A
105.09 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
6 months
1000 samples
0.71 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
6 months
500 samples
0.58 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
6 months
100 samples
0.16 EECU-hours
Export image
Sentinel-2 composite
Bay Area
120 meters
6 months
N/A
0.80 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
30 meters
6 months
1000 samples
1.79 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
30 meters
6 months
500 samples
0.73 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
30 meters
6 months
100 samples
0.09 EECU-hours
Export image
Sentinel-2 composite
Bay Area
30 meters
6 months
N/A
10.97 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
10 meters
6 months
1000 samples
0.91 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
10 meters
6 months
500 samples
0.43 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
10 meters
6 months
100 samples
0.08 EECU-hours
Export image
Sentinel-2 composite
Bay Area
10 meters
6 months
N/A
41.53 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
3 months
1000 samples
0.39 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
3 months
500 samples
0.32 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
3 months
100 samples
0.09 EECU-hours
Export image
Sentinel-2 composite
Bay Area
120 meters
3 months
N/A
0.43 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
3 months
1000 samples
0.32 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
3 months
500 samples
0.28 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
120 meters
3 months
100 samples
0.10 EECU-hours
Export image
Sentinel-2 composite
Bay Area
120 meters
3 months
N/A
0.26 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
30 meters
3 months
1000 samples
0.87 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
30 meters
3 months
500 samples
0.38 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
30 meters
3 months
100 samples
0.05 EECU-hours
Export image
Sentinel-2 composite
Bay Area
30 meters
3 months
N/A
3.21 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
10 meters
3 months
1000 samples
0.55 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
10 meters
3 months
500 samples
0.27 EECU-hours
Export to BigQuery
Sentinel-2 composite
Bay Area
10 meters
3 months
100 samples
0.06 EECU-hours
Export image
Sentinel-2 composite
Bay Area
10 meters
3 months
N/A
29.95 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
120 meters
12 months
1000 samples
6.65 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
120 meters
12 months
500 samples
2.61 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
120 meters
12 months
100 samples
0.44 EECU-hours
Export image
Sentinel-2 composite
Germany
120 meters
12 months
N/A
45.87 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
30 meters
12 months
1000 samples
3.50 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
30 meters
12 months
500 samples
1.72 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
30 meters
12 months
100 samples
0.32 EECU-hours
Export image
Sentinel-2 composite
Germany
30 meters
12 months
N/A
622.11 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
10 meters
12 months
1000 samples
3.45 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
10 meters
12 months
500 samples
1.70 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
10 meters
12 months
100 samples
0.31 EECU-hours
Export image
Sentinel-2 composite
Germany
10 meters
12 months
N/A
3349.54 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
120 meters
6 months
1000 samples
3.18 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
120 meters
6 months
500 samples
1.42 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
120 meters
6 months
100 samples
0.26 EECU-hours
Export image
Sentinel-2 composite
Germany
120 meters
6 months
N/A
28.77 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
30 meters
6 months
1000 samples
2.04 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
30 meters
6 months
500 samples
1.06 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
30 meters
6 months
100 samples
0.19 EECU-hours
Export image
Sentinel-2 composite
Germany
30 meters
6 months
N/A
329.75 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
10 meters
6 months
1000 samples
1.91 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
10 meters
6 months
500 samples
0.97 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
10 meters
6 months
100 samples
0.19 EECU-hours
Export image
Sentinel-2 composite
Germany
10 meters
6 months
N/A
2616.90 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
120 meters
3 months
1000 samples
1.56 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
120 meters
3 months
500 samples
0.81 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
120 meters
3 months
100 samples
0.14 EECU-hours
Export image
Sentinel-2 composite
Germany
120 meters
3 months
N/A
10.33 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
30 meters
3 months
1000 samples
1.32 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
30 meters
3 months
500 samples
0.65 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
30 meters
3 months
100 samples
0.12 EECU-hours
Export image
Sentinel-2 composite
Germany
30 meters
3 months
N/A
129.37 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
10 meters
3 months
1000 samples
1.30 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
10 meters
3 months
500 samples
0.62 EECU-hours
Export to BigQuery
Sentinel-2 composite
Germany
10 meters
3 months
100 samples
0.13 EECU-hours
Export image
Sentinel-2 composite
Germany
10 meters
3 months
N/A
791.22 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
120 meters
12 months
1000 samples
3.44 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
120 meters
12 months
500 samples
1.56 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
120 meters
12 months
100 samples
0.26 EECU-hours
Export image
Sentinel-2 composite
Nigeria
120 meters
12 months
N/A
44.22 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
30 meters
12 months
1000 samples
2.51 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
30 meters
12 months
500 samples
1.30 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
30 meters
12 months
100 samples
0.25 EECU-hours
Export image
Sentinel-2 composite
Nigeria
30 meters
12 months
N/A
662.56 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
10 meters
12 months
1000 samples
2.60 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
10 meters
12 months
500 samples
1.27 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
10 meters
12 months
100 samples
0.25 EECU-hours
Export image
Sentinel-2 composite
Nigeria
10 meters
12 months
N/A
3539.28 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
120 meters
6 months
1000 samples
1.84 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
120 meters
6 months
500 samples
0.97 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
120 meters
6 months
100 samples
0.18 EECU-hours
Export image
Sentinel-2 composite
Nigeria
120 meters
6 months
N/A
26.35 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
30 meters
6 months
1000 samples
1.78 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
30 meters
6 months
500 samples
0.86 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
30 meters
6 months
100 samples
0.18 EECU-hours
Export image
Sentinel-2 composite
Nigeria
30 meters
6 months
N/A
374.71 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
10 meters
6 months
1000 samples
1.73 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
10 meters
6 months
500 samples
0.86 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
10 meters
6 months
100 samples
0.18 EECU-hours
Export image
Sentinel-2 composite
Nigeria
10 meters
6 months
N/A
1858.40 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
120 meters
3 months
1000 samples
1.40 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
120 meters
3 months
500 samples
0.67 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
120 meters
3 months
100 samples
0.14 EECU-hours
Export image
Sentinel-2 composite
Nigeria
120 meters
3 months
N/A
9.35 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
30 meters
3 months
1000 samples
1.31 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
30 meters
3 months
500 samples
0.66 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
30 meters
3 months
100 samples
0.14 EECU-hours
Export image
Sentinel-2 composite
Nigeria
30 meters
3 months
N/A
145.59 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
10 meters
3 months
1000 samples
1.33 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
10 meters
3 months
500 samples
0.68 EECU-hours
Export to BigQuery
Sentinel-2 composite
Nigeria
10 meters
3 months
100 samples
0.14 EECU-hours
Export image
Sentinel-2 composite
Nigeria
10 meters
3 months
N/A
1434.39 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
10 meters
3 months
1000 samples
4.54 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
10 meters
3 months
100 samples
0.45 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
10 meters
3 months
500 samples
1.44 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
120 meters
3 months
1000 samples
5.08 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
120 meters
3 months
100 samples
0.48 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
120 meters
3 months
500 samples
2.58 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
30 meters
3 months
1000 samples
4.80 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
30 meters
3 months
100 samples
0.46 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
30 meters
3 months
500 samples
1.89 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
10 meters
6 months
1000 samples
6.54 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
10 meters
6 months
100 samples
0.62 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
10 meters
6 months
500 samples
3.30 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
120 meters
6 months
1000 samples
7.23 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
120 meters
6 months
100 samples
0.79 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
120 meters
6 months
500 samples
3.99 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
30 meters
6 months
1000 samples
7.24 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
30 meters
6 months
100 samples
0.67 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
30 meters
6 months
500 samples
3.62 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
10 meters
12 months
1000 samples
10.67 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
10 meters
12 months
100 samples
1.03 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
10 meters
12 months
500 samples
5.33 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
120 meters
12 months
1000 samples
13.36 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
120 meters
12 months
100 samples
1.29 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
120 meters
12 months
500 samples
6.54 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
30 meters
12 months
1000 samples
11.78 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
30 meters
12 months
100 samples
1.11 EECU-hours
High-volume extraction
Sentinel-2 composite
Bay Area
30 meters
12 months
500 samples
5.91 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
10 meters
12 months
1000 samples
14.92 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
10 meters
12 months
100 samples
1.60 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
10 meters
12 months
500 samples
7.52 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
120 meters
12 months
1000 samples
19.08 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
120 meters
12 months
100 samples
1.94 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
120 meters
12 months
500 samples
9.65 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
30 meters
12 months
1000 samples
16.98 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
30 meters
12 months
100 samples
1.72 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
30 meters
12 months
500 samples
8.51 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
10 meters
3 months
1000 samples
4.91 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
10 meters
3 months
100 samples
0.51 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
10 meters
3 months
500 samples
2.45 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
120 meters
3 months
1000 samples
5.76 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
120 meters
3 months
100 samples
0.59 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
120 meters
3 months
500 samples
2.89 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
30 meters
3 months
1000 samples
5.32 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
30 meters
3 months
100 samples
0.54 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
30 meters
3 months
500 samples
2.71 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
10 meters
6 months
1000 samples
8.13 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
10 meters
6 months
100 samples
0.86 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
10 meters
6 months
500 samples
4.11 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
120 meters
6 months
1000 samples
10.01 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
120 meters
6 months
100 samples
1.05 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
120 meters
6 months
500 samples
5.02 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
30 meters
6 months
1000 samples
9.14 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
30 meters
6 months
100 samples
0.93 EECU-hours
High-volume extraction
Sentinel-2 composite
Germany
30 meters
6 months
500 samples
4.55 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
10 meters
12 months
1000 samples
9.87 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
10 meters
12 months
100 samples
0.93 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
10 meters
12 months
500 samples
4.82 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
120 meters
12 months
1000 samples
12.11 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
120 meters
12 months
100 samples
1.13 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
120 meters
12 months
500 samples
5.92 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
30 meters
12 months
1000 samples
11.26 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
30 meters
12 months
100 samples
1.06 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
30 meters
12 months
500 samples
5.47 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
10 meters
3 months
1000 samples
4.23 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
10 meters
3 months
100 samples
0.40 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
10 meters
3 months
500 samples
2.10 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
120 meters
3 months
1000 samples
4.78 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
120 meters
3 months
100 samples
0.47 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
120 meters
3 months
500 samples
2.38 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
30 meters
3 months
1000 samples
4.54 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
30 meters
3 months
100 samples
0.45 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
30 meters
3 months
500 samples
2.25 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
10 meters
6 months
1000 samples
5.98 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
10 meters
6 months
100 samples
0.58 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
10 meters
6 months
500 samples
2.88 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
120 meters
6 months
1000 samples
6.94 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
120 meters
6 months
100 samples
0.68 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
120 meters
6 months
500 samples
3.42 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
30 meters
6 months
1000 samples
6.54 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
30 meters
6 months
100 samples
0.63 EECU-hours
High-volume extraction
Sentinel-2 composite
Nigeria
30 meters
6 months
500 samples
3.21 EECU-hours
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-03-25 UTC."],[],["Earth Engine compute costs are benchmarked using Colab notebooks and Cloud Monitoring, analyzing operations like image exports, BigQuery writes, and high-volume extractions. These actions use Sentinel-2 mosaic data across the Bay Area, Germany, and Nigeria, varying by scale (10-120m), timeframe (3-12 months), and sample size. Benchmark data, presented for these operations, illustrate EECU-hour costs, and users can customize them. Factors like caching and system activity affect these costs, and benchmark data do not guarantee future costs.\n"]]
