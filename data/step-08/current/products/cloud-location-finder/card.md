# Cloud Location Finder

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T20:04:56.557Z`
Product status: `PASS`

## Summary

- Feature cards: 5
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 3 explicit, 0 derived, 2 unknown

## Service Card

- Service card ID: `cloud-location-finder:service`
- Latest feature date: 2026-01-13
- Official source links: 12
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Virtual Private Cloud Service Controls support | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/search)<br>[source](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient) |
| Latency data between location types | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsAsyncPager) |
| Google Distributed Cloud connected locations support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations)<br>[source](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/list)<br>[source](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations) |
| Google Cloud CLI commands | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/location-finder/docs/quickstart)<br>[source](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient) |
| REST API | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/location-finder/docs/reference/rest)<br>[source](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient) |
