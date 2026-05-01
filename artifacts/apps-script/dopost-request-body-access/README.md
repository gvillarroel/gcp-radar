# doPost request body access

Product: Apps Script
Feature slug: `dopost-request-body-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The request object passed to doPost now includes the POST body through e.postData.getDataAsString().

## Lifecycle

- Latest feature date: 2013-05-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- key
- secret
- token

## Official Evidence

- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- [https://developers.google.com/apps-script/guides/html/communication](https://developers.google.com/apps-script/guides/html/communication)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
