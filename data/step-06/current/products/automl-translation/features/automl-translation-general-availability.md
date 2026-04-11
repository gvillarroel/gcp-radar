---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:52:53.928Z"
product_name: "AutoML Translation"
product_slug: "automl-translation"
feature_name: "AutoML Translation general availability"
feature_slug: "automl-translation-general-availability"
latest_feature_date: "2019-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/automl-beginner"
  - "https://docs.cloud.google.com/translate/docs/advanced/nmt-customization"
  - "https://docs.cloud.google.com/translate/docs/access-control"
keywords:
  - "performance"
  - "general"
  - "reached"
  - "faster"
  - "availability"
  - "with"
  - "translation"
  - "automl"
---

# AutoML Translation general availability

Product: AutoML Translation
Coverage: LOW

## Step 02 Summary

AutoML Translation reached general availability with faster translation performance and generally improved model quality.

## Extended Definition

AutoML Translation reached general availability with faster translation performance and generally improved model quality.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- [https://docs.cloud.google.com/translate/docs/advanced/nmt-customization](https://docs.cloud.google.com/translate/docs/advanced/nmt-customization)
- [https://docs.cloud.google.com/translate/docs/access-control](https://docs.cloud.google.com/translate/docs/access-control)

## Supporting Pages

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/automl-beginner](https://docs.cloud.google.com/translate/docs/advanced/automl-beginner)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You're building on top of a model that already does a pretty good job with general-purpose translation - your examples are the special last step that makes custom models work for your use case in particular, so make sure they're relevant and representative of usage you expect to see.
- If you have existing AutoML resources, you can upgrade them to work with the Cloud Translation API.
- For automatic data splitting, Cloud Translation - Advanced API performs additional processing (see Dataset division ): After the dataset is uploaded, it removes segment pairs with identical source segments.
- The BLEU score of your custom model and of the standard Google NMT model are shown in the Train tab, along with the BLEU score performance gain from using the custom mode.

### Customizing the NMT model \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/nmt-customization](https://docs.cloud.google.com/translate/docs/advanced/nmt-customization)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You're building on top of a model that already does a pretty good job with general-purpose translation - your examples are the special last step that makes custom models work for your use case in particular, so make sure they're relevant and representative of usage you expect to see.
- If you have existing AutoML resources, you can upgrade them to work with the Cloud Translation API.
- For automatic data splitting, Cloud Translation - Advanced API performs additional processing (see Dataset division ): After the dataset is uploaded, it removes segment pairs with identical source segments.
- The BLEU score of your custom model and of the standard Google NMT model are shown in the Train tab, along with the BLEU score performance gain from using the custom mode.

### Control access with IAM \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/access-control](https://docs.cloud.google.com/translate/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Predefined Cloud Translation roles for v3 The following table lists the predefined roles that give you access to Cloud Translation resources: Role Permissions Cloud Translation API Admin ( roles/ cloudtranslate.admin ) Full access to all Cloud Translation resources automl.models.get automl.models.predict cloudtranslate. cloudtranslate. adaptiveMtDatasets. create cloudtranslate. adaptiveMtDatasets. delete cloudtranslate. adaptiveMtDatasets. get cloudtranslate. adaptiveMtDatasets. import cloudtranslate. adaptiveMtDatasets. list cloudtranslate. adaptiveMtDatasets. predict cloudtranslate. adaptiveMtFiles. delete cloudtranslate. adaptiveMtFiles. get cloudtranslate. adaptiveMtFiles. list cloudtranslate. adaptiveMtSentences. list cloudtranslate. customModels. create cloudtranslate. customModels. delete cloudtranslate. customModels. get cloudtranslate. customModels. list cloudtranslate. customModels. predict cloudtranslate.datasets.create cloudtranslate.datasets.delete cloudtranslate.datasets.export cloudtranslate.datasets.get cloudtranslate.datasets.import cloudtranslate.datasets.list cloudtranslate. generalModels. batchDocPredict cloudtranslate. generalModels. batchPredict cloudtranslate. generalModels. docPredict cloudtranslate. generalModels. get cloudtranslate. generalModels. predict cloudtranslate. glossaries. batchDocPredict cloudtranslate. glossaries. batchPredict cloudtranslate. glossaries. create cloudtranslate. glossaries. delete cloudtranslate. glossaries. docPredict cloudtranslate.glossaries.get cloudtranslate.glossaries.list cloudtranslate. glossaries. predict cloudtranslate. glossaries. update cloudtranslate. glossaryentries. create cloudtranslate. glossaryentries. delete cloudtranslate. glossaryentries. get cloudtranslate. glossaryentries. list cloudtranslate. glossaryentries. update cloudtranslate. languageDetectionModels. predict cloudtranslate.locations.get cloudtranslate.locations.list cloudtranslate. operations. cancel cloudtranslate. operations. delete cloudtranslate.operations.get cloudtranslate.operations.list cloudtranslate.operations.wait resourcemanager.projects.get resourcemanager.projects.list Cloud Translation API Editor ( roles/ cloudtranslate.editor ) Editor of all Cloud Translation resources automl.models.get automl.models.predict cloudtranslate. cloudtranslate. adaptiveMtDatasets. create cloudtranslate. adaptiveMtDatasets. delete cloudtranslate. adaptiveMtDatasets. get cloudtranslate. adaptiveMtDatasets. import cloudtranslate. adaptiveMtDatasets. list cloudtranslate. adaptiveMtDatasets. predict cloudtranslate. adaptiveMtFiles. delete cloudtranslate. adaptiveMtFiles. get cloudtranslate. adaptiveMtFiles. list cloudtranslate. adaptiveMtSentences. list cloudtranslate. customModels. create cloudtranslate. customModels. delete cloudtranslate. customModels. get cloudtranslate. customModels. list cloudtranslate. customModels. predict cloudtranslate.datasets.create cloudtranslate.datasets.delete cloudtranslate.datasets.export cloudtranslate.datasets.get cloudtranslate.datasets.import cloudtranslate.datasets.list cloudtranslate. generalModels. batchDocPredict cloudtranslate. generalModels. batchPredict cloudtranslate. generalModels. docPredict cloudtranslate. generalModels. get cloudtranslate. generalModels. predict cloudtranslate. glossaries. batchDocPredict cloudtranslate. glossaries. batchPredict cloudtranslate. glossaries. create cloudtranslate. glossaries. delete cloudtranslate. glossaries. docPredict cloudtranslate.glossaries.get cloudtranslate.glossaries.list cloudtranslate. glossaries. predict cloudtranslate. glossaries. update cloudtranslate. glossaryentries. create cloudtranslate. glossaryentries. delete cloudtranslate. glossaryentries. get cloudtranslate. glossaryentries. list cloudtranslate. glossaryentries. update cloudtranslate. languageDetectionModels. predict cloudtranslate.locations.get cloudtranslate.locations.list cloudtranslate. operations. cancel cloudtranslate. operations. delete cloudtranslate.operations.get cloudtranslate.operations.list cloudtranslate.operations.wait resourcemanager.projects.get resourcemanager.projects.list Cloud Translation API User ( roles/ cloudtranslate.user ) User of Cloud Translation and AutoML models automl.models.get automl.models.predict cloudtranslate. adaptiveMtDatasets. get cloudtranslate. adaptiveMtDatasets. list cloudtranslate. adaptiveMtDatasets. predict cloudtranslate. adaptiveMtFiles. get cloudtranslate. adaptiveMtFiles. list cloudtranslate. adaptiveMtSentences. list cloudtranslate. customModels. get cloudtranslate. customModels. list cloudtranslate. customModels. predict cloudtranslate.datasets.get cloudtranslate.datasets.list cloudtranslate.generalModels. cloudtranslate. generalModels. batchDocPredict cloudtranslate. generalModels. batchPredict cloudtranslate. generalModels. docPredict cloudtranslate. generalModels. get cloudtranslate. generalModels. predict cloudtranslate. glossaries. batchDocPredict cloudtranslate. glossaries. batchPredict cloudtranslate. glossaries. docPredict cloudtranslate.glossaries.get cloudtranslate.glossaries.list cloudtranslate. glossaries. predict cloudtranslate. glossaryentries. get cloudtranslate. glossaryentries. list cloudtranslate. languageDetectionModels. predict cloudtranslate.locations. cloudtranslate.locations.get cloudtranslate.locations.list cloudtranslate.operations.get cloudtranslate.operations.list cloudtranslate.operations.wait resourcemanager.projects.get resourcemanager.projects.list Cloud Translation API Viewer ( roles/ cloudtranslate.viewer ) Viewer of all Translation resources automl.models.get cloudtranslate. adaptiveMtDatasets. get cloudtranslate. adaptiveMtDatasets. list cloudtranslate. adaptiveMtFiles. get cloudtranslate. adaptiveMtFiles. list cloudtranslate. adaptiveMtSentences. list cloudtranslate. customModels. get cloudtranslate. customModels. list cloudtranslate.datasets.get cloudtranslate.datasets.list cloudtranslate. generalModels. get cloudtranslate.glossaries.get cloudtranslate.glossaries.list cloudtranslate. glossaryentries. get cloudtranslate. glossaryentries. list cloudtranslate.locations. cloudtranslate.locations.get cloudtranslate.locations.list cloudtranslate.operations.get cloudtranslate.operations.list cloudtranslate.operations.wait resourcemanager.projects.get resourcemanager.projects.list Service agent roles Service agent roles should only be granted to service agents .
- Home Documentation AI and ML Cloud Translation Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Control access with IAM The Cloud Translation - Advanced API (v3) uses Identity and Access Management (IAM) to control access.
- Warning: Do not grant service agent roles to any principals except service agents . automl.datasets.export automl.datasets.get automl.datasets.list automl.models.get automl.models.list automl.operations.get storage.buckets.get storage.objects.create storage.objects.get storage.objects.list Custom roles If a predefined role doesn't offer the right set of permissions for your use case, create a custom role.

