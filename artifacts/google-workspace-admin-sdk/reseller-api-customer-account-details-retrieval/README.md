# Reseller API customer account details retrieval

Product: Google Workspace Admin SDK
Feature slug: `reseller-api-customer-account-details-retrieval`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The API can return full account settings for resold customers and basic identifiers for standalone or other-reseller-managed customers.

## Lifecycle

- Latest feature date: 2013-09-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push), [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers), [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list))
- auth (evidence: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push), [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers), [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list))
- authorization (evidence: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push), [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers), [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list))
- key (evidence: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push), [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers), [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list))
- token (evidence: [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push), [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers), [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list))

## Official Evidence

- [https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list)
- [https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers)
- [https://developers.google.com/workspace/admin/reports/v1/guides/push](https://developers.google.com/workspace/admin/reports/v1/guides/push)
