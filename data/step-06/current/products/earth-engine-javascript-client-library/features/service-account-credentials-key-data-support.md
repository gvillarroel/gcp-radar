---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.999Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Service account credentials key data support"
feature_slug: "service-account-credentials-key-data-support"
latest_feature_date: "2013-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table"
keywords:
  - "account"
  - "credentials"
  - "key"
  - "ee"
  - "serviceaccountcredentials"
  - "accepts"
  - "addition"
  - "filenames"
---

# Service account credentials key data support

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

Ee.ServiceAccountCredentials() accepts key data in addition to key filenames.

## Extended Definition

Ee.ServiceAccountCredentials() accepts key data in addition to key filenames.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)

## Supporting Pages

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service account credentials To use the CLI with a service account's credentials, use the service account file flag to point to a JSON file containing the service account's key. earthengine --service account file=service account creds.json Usage in Colab The Earth Engine Command Line Tool is preinstalled and ready for use in Google Colab .
- Additionally, if you have permission to view the plan configuration , the output contains: planMaxConcurrentExports , a number indicating the maximum number of batch tasks that can run in parallel across all users and projects that use the billing account. set To update the project's configuration, use the set sub-command.
- Authentication is required to use the tool and can be done using the authenticate command or service account credentials.
- The special user identifier AllUsers may be used to grant or revoke read permission to or from all users. (Note that revoking AllUsers permissions does not revoke any additional permissions you may have also granted to individual users.) asset Prints or updates metadata associated with the an Earth Engine asset.

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ServiceAccountCredentials ( SERVICE ACCOUNT , KEY ) ee .
- Credentials . from service account file ( KEY ) scoped credentials = credentials . with scopes ( [ 'https://www.googleapis.com/auth/cloud-platform' ]) session = AuthorizedSession ( scoped credentials ) url = 'https://earthengine.googleapis.com/v1beta/projects/earthengine-public/assets/LANDSAT' response = session . get ( url ) from pprint import pprint import json pprint ( json . loads ( response . content )) Serialize a computation Before you can send a request to compute something, the computation needs to be put into the Earth Engine expression graph format.
- INSERT YOUR SERVICE ACCOUNT HERE SERVICE ACCOUNT = 'your-service-account@your-project.iam.gserviceaccount.com' KEY = 'key.json' !gcloud iam service-accounts keys create {KEY} --iam-account {SERVICE ACCOUNT} Start an AuthorizedSession and test your credentials Test the private key by using it to get credentials.
- Make a GET request through the session to check that the credentials work. from google.auth.transport.requests import AuthorizedSession from google.oauth2 import service account credentials = service account .

### "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ServiceAccountCredentials ( SERVICE ACCOUNT , KEY ) ee .
- Credentials . from service account file ( KEY ) scoped credentials = credentials . with scopes ( [ 'https://www.googleapis.com/auth/cloud-platform' ]) session = AuthorizedSession ( scoped credentials ) url = 'https://earthengine.googleapis.com/v1beta/projects/earthengine-public/assets/LANDSAT' response = session . get ( url ) from pprint import pprint import json pprint ( json . loads ( response . content )) Serialize a computation Before you can send a request to compute something, the computation needs to be put into the Earth Engine expression graph format.
- INSERT YOUR SERVICE ACCOUNT HERE SERVICE ACCOUNT = 'your-service-account@your-project.iam.gserviceaccount.com' KEY = 'key.json' !gcloud iam service-accounts keys create {KEY} --iam-account {SERVICE ACCOUNT} Start an AuthorizedSession and test your credentials Test the private key by using it to get credentials.
- Authentication is required to make requests to Google Cloud and Earth Engine, which can be done by logging in with your Google Cloud project and using a service account key file to obtain credentials for an authorized session.

