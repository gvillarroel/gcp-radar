# Maps Service client ID authentication

Product: Apps Script
Feature slug: `maps-service-client-id-authentication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Maps Service client ID authentication uses setAuthentication(clientId, signingKey) to authenticate requests with a Maps Platform client ID; deprecated on June 2026.

## Lifecycle

- Latest feature date: 2026-03-05
- Deprecation date: June 2026
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification), [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python))
- auth (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification), [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python))
- authorization (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification), [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python))
- credential (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification), [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python))
- key (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification), [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python))
- logging (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification), [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python))
- policy (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification), [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python))
- secret (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification), [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python))
- token (evidence: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases), [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification), [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python))

## Official Evidence

- [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python)
- [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
