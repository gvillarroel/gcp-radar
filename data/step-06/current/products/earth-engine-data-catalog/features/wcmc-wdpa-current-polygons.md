---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.191Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "WCMC/WDPA/current/polygons"
feature_slug: "wcmc-wdpa-current-polygons"
latest_feature_date: "2017-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/WCMC_WDPA_current_polygons"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/ecosystems"
keywords:
  - "wcmc"
  - "wdpa"
  - "current"
  - "polygons"
  - "polygon"
  - "layer"
  - "version"
  - "world"
---

# WCMC/WDPA/current/polygons

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A polygon-layer version of the World Database on Protected Areas.

## Extended Definition

A polygon-layer version of the World Database on Protected Areas.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/WCMC_WDPA_current_polygons](https://developers.google.com/earth-engine/datasets/catalog/WCMC_WDPA_current_polygons)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/ecosystems](https://developers.google.com/earth-engine/datasets/tags/ecosystems)

## Supporting Pages

### WDPA: World Database on Protected Areas (polygons) | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/WCMC_WDPA_current_polygons](https://developers.google.com/earth-engine/datasets/catalog/WCMC_WDPA_current_polygons)
- Source ID: `feature-recovery-direct-http`
- Final score: 396
- Re-rank relevance: N/A

Evidence snippets:
- Ele é gerenciado pelo Centro Mundial de Monitoramento da Conservação (WCMC) do Programa das Nações Unidas para o Meio Ambiente (PNUMA) com o apoio da IUCN e de suas … WCMC/WDPA/current/polygons, boundaries,ecosystems,iucn,marine,mpa,protected,table,wcmc,wdpa 2017-07-01T00:00:00Z/2030-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Quer enviar seu feedback? [[["Fácil de entender","easyToUnderstand","thumb-up"],["Meu problema foi resolvido","solvedMyProblem","thumb-up"],["Outro","otherUp","thumb-up"]],[["Não contém as informações de que eu preciso","missingTheInformationINeed","thumb-down"],["Muito complicado / etapas demais","tooComplicatedTooManySteps","thumb-down"],["Desatualizado","outOfDate","thumb-down"],["Problema na tradução","translationIssue","thumb-down"],["Problema com as amostras / o código","samplesCodeIssue","thumb-down"],["Outro","otherDown","thumb-down"]],[],[],["The World Database on Protected Areas (WDPA), managed by UNEP-WCMC, provides current information on over 200,000 protected areas.
- Disponibilidade do conjunto de dados 2017-07-01T00:00:00Z–2030-01-01T00:00:00Z Produtor de conjunto de dados Centro Mundial de Monitoramento da Conservação do Programa das Nações Unidas para o Meio Ambiente (PNUMA-WCMC) / Protected Planet Snippet do Earth Engine FeatureCollection ee.FeatureCollection("WCMC/WDPA/current/polygons") open_in_new FeatureView ui.Map.FeatureViewLayer("WCMC/WDPA/current/polygons_FeatureView") open_in_new Tags boundaries ecosystems iucn marine mpa protected table wcmc wdpa Descrição O Banco de Dados Mundial sobre Áreas Protegidas (WDPA, na sigla em inglês) é a fonte de informações mais atualizada e completa sobre áreas protegidas.
- FeatureViewLayer ( 'WCMC/WDPA/current/polygons_FeatureView' ); var visParams = { color : { property : 'REP_AREA' , mode : 'linear' , palette : [ '2ed033' , '5aff05' , '67b9ff' , '5844ff' , '0a7618' , '2c05ff' ], min : 0.0 , max : 1550000.0 }, opacity : 0.8 }; fvLayer . setVisParams ( visParams ); fvLayer . setName ( 'WCMC/WDPA/current/polygons' ); Map . setCenter ( 41.104 , - 17.724 , 6 ); Map . add ( fvLayer ); Abrir no editor de código WDPA: Banco de dados mundial de áreas protegidas (polígonos) O Banco de Dados Mundial sobre Áreas Protegidas (WDPA, na sigla em inglês) é a fonte de informações mais atualizada e completa sobre áreas protegidas.
- Image (). float (). paint ( dataset , 'REP_AREA' ); Map . setCenter ( 41.104 , - 17.724 , 6 ); Map . addLayer ( image , visParams , 'WCMC/WDPA/current/polygons' ); Map . addLayer ( dataset , null , 'for Inspector' , false ); Abrir no editor de código Visualizar como uma FeatureView Um FeatureView é uma representação acelerada e somente leitura de um FeatureCollection .

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- It is managed by the United Nations Environment Programme's World Conservation Monitoring Centre (UNEP-WCMC) with … boundaries ecosystems iucn marine mpa protected WDPA: World Database on Protected Areas (polygons) The World Database on Protected Areas (WDPA) is the most up-to-date and complete source of information on protected areas, updated monthly with submissions from governments, non-governmental organizations, landowners, and communities.
- Key Biodiversity Areas (KBAs) are 'sites contributing significantly to the global persistence of biodiversity’, in terrestrial, freshwater and marine ecosystems. … biodiversity boundaries ecosystems global iucn management WDOECM: Other Effective Area-based Conservation Measures (points) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDOECM: Other Effective Area-based Conservation Measures (polygons) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDPA: World Database on Protected Areas (points) The World Database on Protected Areas (WDPA) is the most up-to-date and complete source of information on protected areas, updated monthly with submissions from governments, non-governmental organizations, landowners, and communities.
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders departments fao gaul infrastructure-boundaries provinces FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Second-Level Administrative Units This version of GAUL dataset is simplified at 500m.
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders countries fao gaul infrastructure-boundaries table FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, First-Level Administrative Units This version of GAUL dataset is simplified at 500m.

### "Datasets tagged ecosystems in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/ecosystems](https://developers.google.com/earth-engine/datasets/tags/ecosystems)
- Source ID: `site-docs-root-3`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- It is managed by the United Nations Environment Programme's World Conservation Monitoring Centre (UNEP-WCMC) with … boundaries ecosystems iucn marine mpa protected WDPA: World Database on Protected Areas (polygons) The World Database on Protected Areas (WDPA) is the most up-to-date and complete source of information on protected areas, updated monthly with submissions from governments, non-governmental organizations, landowners, and communities.
- Key Biodiversity Areas (KBAs) are 'sites contributing significantly to the global persistence of biodiversity’, in terrestrial, freshwater and marine ecosystems. … biodiversity boundaries ecosystems global iucn management WDOECM: Other Effective Area-based Conservation Measures (points) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDOECM: Other Effective Area-based Conservation Measures (polygons) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDPA: World Database on Protected Areas (points) The World Database on Protected Areas (WDPA) is the most up-to-date and complete source of information on protected areas, updated monthly with submissions from governments, non-governmental organizations, landowners, and communities.
- Dataset contains species polygons, with attributes such as taxon id, name, scientific name, and geomodel version.
- It is managed by the United Nations Environment Programme's World Conservation Monitoring Centre (UNEP-WCMC) with … boundaries ecosystems iucn marine mpa protected Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

