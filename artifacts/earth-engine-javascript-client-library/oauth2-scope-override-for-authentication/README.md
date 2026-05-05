# OAuth2 scope override for authentication

Product: Earth Engine JavaScript Client Library
Feature slug: `oauth2-scope-override-for-authentication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The default OAuth2 scopes used by ee.data.authenticateViaOauth() and ee.data.authenticateViaPrivateKey() can be overridden.

## Lifecycle

- Latest feature date: 2021-04-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))
- audit (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))
- auth (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))
- iam (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))
- identity (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))
- key (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))
- permission (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))
- policy (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))
- private (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))
- token (evidence: [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion), [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures), [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets))

## Official Evidence

- [https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures](https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures)
- [https://developers.google.com/earth-engine/apidocs/ee-data-listassets](https://developers.google.com/earth-engine/apidocs/ee-data-listassets)
- [https://developers.google.com/earth-engine/apidocs/ee-data-startingestion](https://developers.google.com/earth-engine/apidocs/ee-data-startingestion)
