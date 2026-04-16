---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.586Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "delta-presence estimation"
feature_slug: "delta-presence-estimation"
latest_feature_date: "2018-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/compute-d-presence"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis"
keywords:
  - "presence"
  - "datasets"
  - "delta"
  - "metric"
  - "where"
  - "estimation"
  - "risk"
  - "adds"
---

# delta-presence estimation

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Adds delta-presence estimation as a risk metric for datasets where membership is sensitive.

## Extended Definition

Adds delta-presence estimation as a risk metric for datasets where membership is sensitive.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-d-presence](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-d-presence)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis)

## Supporting Pages

### "Computing \u03B4-presence for a dataset \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-d-presence](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-d-presence)
- Source ID: `site-api-reference-required-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compute δ -presence metrics To compute a δ -presence estimate using Sensitive Data Protection, send a request to the following URL, where PROJECT ID indicates your project identifier : https://dlp.googleapis.com/v2/projects/ PROJECT ID /dlpJobs The request contains a RiskAnalysisJobConfig object, which is composed of the following: A PrivacyMetric object.
- This is where you specify that you want to calculate δ -presence by specifying a DeltaPresenceEstimationConfig object containing the following: quasiIds[] : Required.
- For more information, see the reference page for the DeltaPresenceEstimationConfig object, as well as Risk analysis terms and techniques .
- Delta-presence ( δ -presence) is a metric that quantifies the probability that an individual belongs to an analyzed dataset.

### "REST Resource: projects.dlpJobs \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs)
- Source ID: `site-docs-root-3`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: DlpJob JSON representation DlpJobType JobState AnalyzeDataSourceRiskDetails JSON representation PrivacyMetric JSON representation NumericalStatsConfig JSON representation CategoricalStatsConfig JSON representation KAnonymityConfig JSON representation EntityId JSON representation LDiversityConfig JSON representation KMapEstimationConfig JSON representation TaggedField JSON representation AuxiliaryTable JSON representation QuasiIdField JSON representation DeltaPresenceEstimationConfig JSON representation QuasiId JSON representation StatisticalTable JSON representation QuasiIdentifierField JSON representation NumericalStatsResult JSON representation CategoricalStatsResult JSON representation CategoricalStatsHistogramBucket JSON representation ValueFrequency JSON representation KAnonymityResult JSON representation KAnonymityHistogramBucket JSON representation KAnonymityEquivalenceClass JSON representation LDiversityResult JSON representation LDiversityHistogramBucket JSON representation LDiversityEquivalenceClass JSON representation KMapEstimationResult JSON representation KMapEstimationHistogramBucket JSON representation KMapEstimationQuasiIdValues JSON representation DeltaPresenceEstimationResult JSON representation DeltaPresenceEstimationHistogramBucket JSON representation DeltaPresenceEstimationQuasiIdValues JSON representation RequestedRiskAnalysisOptions JSON representation RiskAnalysisJobConfig JSON representation InspectDataSourceDetails JSON representation RequestedOptions JSON representation Result JSON representation InfoTypeStats JSON representation HybridInspectStatistics JSON representation ActionDetails JSON representation DeidentifyDataSourceDetails JSON representation RequestedDeidentifyOptions JSON representation DeidentifyDataSourceStats JSON representation Methods Resource: DlpJob Combines all of the information about a DLP job.
- JSON representation { "requestedPrivacyMetric" : { object ( PrivacyMetric ) } , "requestedSourceTable" : { object ( BigQueryTable ) } , "requestedOptions" : { object ( RequestedRiskAnalysisOptions ) } , // Union field result can be only one of the following: "numericalStatsResult" : { object ( NumericalStatsResult ) } , "categoricalStatsResult" : { object ( CategoricalStatsResult ) } , "kAnonymityResult" : { object ( KAnonymityResult ) } , "lDiversityResult" : { object ( LDiversityResult ) } , "kMapEstimationResult" : { object ( KMapEstimationResult ) } , "deltaPresenceEstimationResult" : { object ( DeltaPresenceEstimationResult ) } // End of list of possible types for union field result . } Fields requestedPrivacyMetric object ( PrivacyMetric ) Privacy metric to compute. requestedSourceTable object ( BigQueryTable ) Input dataset to compute metrics over. requestedOptions object ( RequestedRiskAnalysisOptions ) The configuration used for this job.
- Values associated with this metric. result can be only one of the following: numericalStatsResult object ( NumericalStatsResult ) Numerical stats result categoricalStatsResult object ( CategoricalStatsResult ) Categorical stats result kAnonymityResult object ( KAnonymityResult ) K-anonymity result lDiversityResult object ( LDiversityResult ) L-divesity result kMapEstimationResult object ( KMapEstimationResult ) K-map result deltaPresenceEstimationResult object ( DeltaPresenceEstimationResult ) Delta-presence result PrivacyMetric Privacy metric to compute for reidentification risk analysis.
- DeltaPresenceEstimationConfig δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset.

### "Re-identification risk analysis \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis)
- Source ID: `site-api-reference-required-2`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- But since only two individuals share these quasi-identifiers in the larger population, an attacker can deduce that both of them suffer from the genetic disease. δ -presence quantifies this particular risk by computing the ratio of people with certain quasi-identifiers that are in the dataset. δ -presence, like the other risk metrics, requires you to determine which columns of your database are quasi-identifiers.
- About δ -presence Delta-presence ( δ -presence) estimates the risk associated with an attacker who wants to find out whether their target is in the dataset.
- Like the other risk metrics, δ -presence requires you to determine which columns of your database are quasi-identifiers.
- Therefore, we can estimate that this new, generalized dataset has a δ -presence value of around 20%. δ -presence resources For more information about δ -presence estimation based on statistical data, see δ-Presence Without Complete World Knowledge , by Mehmet Ercan Nergiz and Chris Clifton from the Purdue University Department of Computer Science Technical Reports .

