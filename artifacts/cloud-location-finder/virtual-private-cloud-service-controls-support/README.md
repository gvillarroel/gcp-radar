# Virtual Private Cloud Service Controls support

Product: Cloud Location Finder
Feature slug: `virtual-private-cloud-service-controls-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Location Finder supports use with Virtual Private Cloud Service Controls in Preview.

## Lifecycle

- Latest feature date: 2026-01-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/search](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/search)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderClient)
