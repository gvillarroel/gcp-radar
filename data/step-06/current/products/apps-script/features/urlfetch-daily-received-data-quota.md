---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.559Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UrlFetch daily received-data quota"
feature_slug: "urlfetch-daily-received-data-quota"
latest_feature_date: "2018-06-19"
deprecation_date: "2018-06-19"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/quotas"
  - "https://developers.google.com/apps-script/advanced/analyticsdata"
keywords:
  - "urlfetch"
  - "daily"
  - "received"
  - "quota"
  - "apps"
  - "script"
  - "removes"
  - "per"
---

# UrlFetch daily received-data quota

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script removes the per-user daily quota on total data received by UrlFetch; deprecated on 2018-06-19.

## Extended Definition

Apps Script removes the per-user daily quota on total data received by UrlFetch; deprecated on 2018-06-19.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)

## Supporting Pages

### Quotas for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Apps Script services have daily quotas and limitations that can cause scripts to throw an exception and stop execution if exceeded.
- Google Apps Script services have daily quotas and limitations on some features.
- Monitor quota usage To monitor your script's quota consumption and execution health, use the following methods: Email quota : Use MailApp.getRemainingDailyQuota() to check the number of remaining email recipients you can send to for the rest of the day.
- Google Cloud console : If your Apps Script project uses a standard Google Cloud project , you can monitor service-specific quotas and API usage in the Google Cloud console .

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- August 20, 2018 Feature The Utilities service has been extended with the following methods and classes: Utilities.computeRsaSha1Signature(value, key) Utilities.computeRsaSha1Signature(value, key, charset) Utilities.computeRsaSignature(algorithm, value, key) Utilities.computeRsaSignature(algorithm, value, key, charset) RsaAlgorithm June 19, 2018 Deprecated The quota on total data received by UrlFetch per day per user has been removed.
- UrlFetch requests made by scripts that run on a time-based trigger now include an If-Modified-Since HTTP header so that Apps Script can use a cached copy of the page if one is available and the page has not changed.
- Change The quota for the number of email recipients for scripts running from consumer (gmail.com) or free Google Apps accounts has been reduced from 500 to 100 per day.
- The Apps Script IDE has received significant enhancements, such as improved version management, better debugging tools, and a redesigned interface.

### Analytics Data Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Analytics Data service allows Google Analytics users to programmatically access Google Analytics 4 (GA4) report data through the Google Analytics Data API v1 in Apps Script.
- Home Google Workspace Apps Script Reference Send feedback Analytics Data Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the AnalyticsData service uses the same objects, methods, and parameters as the public API.
- The Analytics Data service lets you use the Google Analytics Data API v1 in Google Apps Script.

