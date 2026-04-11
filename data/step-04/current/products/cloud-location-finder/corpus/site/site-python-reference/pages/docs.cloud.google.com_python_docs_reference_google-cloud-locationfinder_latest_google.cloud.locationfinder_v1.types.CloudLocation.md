---
title: "Class CloudLocation (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.types.CloudLocation
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.types.CloudLocation
  title: "Class CloudLocation (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class CloudLocation (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.0
CloudLocation ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represents resource cloud locations.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
name
str
Identifier. Name of the cloud location. Unique name of the
cloud location including project and location using the
form:
projects/{project_id}/locations/{location}/cloudLocations/{cloud_location}
containing_cloud_location
str
Output only. The containing cloud location in
the strict nesting hierarchy. For example, the
containing cloud location of a zone is a region.
display_name
str
Optional. The human-readable name of the
cloud location. Example: us-east-2, us-east1.
cloud_provider
google.cloud.locationfinder_v1.types.CloudLocation.CloudProvider
Optional. The provider of the cloud location.
Values can be Google Cloud or third-party
providers, including AWS, Azure, or Oracle Cloud
Infrastructure.
territory_code
str
Optional. The two-letter ISO 3166-1 alpha-2
code of the cloud location. Examples: US, JP,
KR.
cloud_location_type
google.cloud.locationfinder_v1.types.CloudLocation.CloudLocationType
Optional. The type of the cloud location.
carbon_free_energy_percentage
float
Optional. The carbon free energy percentage
of the cloud location. This represents the
average percentage of time customers'
application will be running on carbon-free
energy. See
https://cloud.google.com/sustainability/region-carbon
for more details. There is a difference between
default value 0 and unset value. 0 means the
carbon free energy percentage is 0%, while unset
value means the carbon footprint data is not
available.
This field is a member of oneof _ _carbon_free_energy_percentage .
Classes
CloudLocationType
CloudLocationType ( value )
The type of the cloud location. This enum lists all possible
categories of cloud locations.
CloudProvider
CloudProvider ( value )
The type of the cloud provider. This enum lists all possible
providers of cloud locations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
