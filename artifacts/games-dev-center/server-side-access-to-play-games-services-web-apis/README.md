# Server-side access to Play Games Services web APIs

Product: Games Dev Center
Feature slug: `server-side-access-to-play-games-services-web-apis`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The plugin adds additional auth scopes through requestServerSideAccess for server-side access; Play Games Services v2 adds additional auth scopes through requestServerSideAccess for server-side access.

## Lifecycle

- Latest feature date: 2025-07-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken), [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken), [https://developers.google.com/games/services/cpp/api](https://developers.google.com/games/services/cpp/api), [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest))
- allow (evidence: [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken), [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken), [https://developers.google.com/games/services/cpp/api](https://developers.google.com/games/services/cpp/api), [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest))
- auth (evidence: [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken), [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken), [https://developers.google.com/games/services/cpp/api](https://developers.google.com/games/services/cpp/api), [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest))
- credential (evidence: [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken), [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken), [https://developers.google.com/games/services/cpp/api](https://developers.google.com/games/services/cpp/api), [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest))
- token (evidence: [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken), [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken), [https://developers.google.com/games/services/cpp/api](https://developers.google.com/games/services/cpp/api), [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest))

## Official Evidence

- [https://developers.google.com/games/services/cpp/api](https://developers.google.com/games/services/cpp/api)
- [https://developers.google.com/games/services/web/api/rest](https://developers.google.com/games/services/web/api/rest)
- [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generatePlayGroupingApiToken)
- [https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken](https://developers.google.com/games/services/web/api/rest/v1/accesstokens/generateRecallPlayGroupingApiToken)
