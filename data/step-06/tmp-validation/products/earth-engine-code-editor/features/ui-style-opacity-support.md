---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.596Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "ui.Style opacity support"
feature_slug: "ui-style-opacity-support"
latest_feature_date: "2018-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_style"
  - "https://developers.google.com/earth-engine/guides/charts_array"
  - "https://developers.google.com/earth-engine/guides/charts_image"
keywords:
  - "background"
  - "opacity"
  - "values"
  - "color"
  - "style"
  - "supports"
---

# ui.Style opacity support

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Ui.Style supports opacity for color and background color values.

## Extended Definition

Ui.Style supports opacity for color and background color values.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)
- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- [https://developers.google.com/earth-engine/guides/charts_image](https://developers.google.com/earth-engine/guides/charts_image)

## Supporting Pages

### Chart Styling \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additional features include applying log scales, smoothing functions, enabling chart zooming/panning, altering opacity, rotating axes, setting text styles, changing background/grid line colors, formatting axis labels, interpolating null values, and adding trend lines.\n"]]
- Text styling options are specified according to the following JavaScript object: var textStyle = { color : 'grey' , fontName : 'arial' , fontSize : 14 , bold : true , italic : false } Set x-axis text style: { hAxis : { textStyle : textStyle , // tick label text style titleTextStyle : textStyle // axis title text style } } Set y-axis text style: { vAxis : { textStyle : textStyle , // tick label text style titleTextStyle : textStyle // axis title text style } } Set legend text style: { legend : { textStyle : textStyle } } You can also set font name and size for all text elements: { fontName : 'arial' , fontSize : 14 } set chart background color? { chartArea : { backgroundColor : 'EBEBEB' } } set chart grid line color? { hAxis : { // x-axis gridlines : { color : 'FFFFFF' } }, vAxis : { // y-axis gridlines : { color : 'FFFFFF' } } } remove grid lines? { hAxis : { // x-axis gridlines : { count : 0 } }, vAxis : { // y-axis gridlines : { count : 0 } } } format axis value labels?
- Filter . date ( '2010-01-01' , '2020-01-01' )) . select ([ 'NDVI' , 'EVI' ]); // Set chart style properties. var chartStyle = { title : 'Average Vegetation Index Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true }, gridlines : { color : 'FFFFFF' } }, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true }, gridlines : { color : 'FFFFFF' }, format : 'short' , baselineColor : 'FFFFFF' }, series : { 0 : { lineWidth : 3 , color : 'E37D05' , pointSize : 7 }, 1 : { lineWidth : 7 , color : '1D6B99' , lineDashStyle : [ 4 , 4 ]} }, chartArea : { backgroundColor : 'EBEBEB' } }; // Define the chart. var chart = ui .
- Various styling options are available, including setting chart titles, hiding legends, defining axis limits, setting symbol and line properties, adjusting text styles, and modifying background and grid line colors.

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Landsat 8 Image Collection Metadata (045030)' , colors : [ '96356f' ], hAxis : { title : 'Cloud cover (%)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Geometric RMSE (m)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 5 , dataOpacity : 0.6 , legend : { position : 'none' }, }); print ( chart ); ee.List mapped function scatter & line plot Map a function over a list of x values to calculate a corresponding list of y values.
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }). setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ 'cf513e' ], hAxis : { title : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'SWIR reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 4 , dataOpacity : 0.4 , legend : { position : 'none' }, }); print ( chart ); ee.List transect line plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each image band.
- Chart . array . values ({ array : yValues , axis : 1 , xLabels : xValues }) . setSeriesNames ([ 'NIR' , 'SWIR' ]) . setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ '1d6b99' , 'cf513e' ], pointSize : 4 , dataOpacity : 0.4 , hAxis : { 'title' : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { 'title' : 'Reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } } }); print ( chart ); ee.List region scatter plot Two list objects can be plotted using the ui.Chart.array.values function.
- Chart . array . values ({ array : elevSort , axis : 0 , xLabels : lonSort }) . setOptions ({ title : 'Elevation Profile Across Longitude' , hAxis : { title : 'Longitude' , viewWindow : { min : - 124.50 , max : - 122.8 }, titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Elevation (m)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '1d6b99' ], lineSize : 5 , pointSize : 0 , legend : { position : 'none' } }); print ( chart ); Apply .setChartType('AreaChart') to add shading under the line: print ( chart . setChartType ( 'AreaChart' )); ee.List metadata scatter plot Collection property reduction by ee.Reducer.toList() produces a dictionary of property value lists, one for each selected property.

### Image Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image](https://developers.google.com/earth-engine/guides/charts_image)
- Source ID: `site-docs-root-2`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Reducer . mean (), scale : 500 , xProperty : 'label' }) . setSeriesNames ([ 'Precipitation' , 'Temperature' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average June Temperature and Precipitation by Ecoregion' , series : { 0 : { targetAxisIndex : 1 , type : 'bar' , color : '1d6b99' }, 1 : { targetAxisIndex : 0 , type : 'line' , lineWidth : 0 , pointSize : 10 , color : 'e37d05' } }, hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxes : { 0 : { title : 'Temperature (°C)' , baseline : 0 , titleTextStyle : { italic : false , bold : true , color : 'e37d05' } }, 1 : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true , color : '1d6b99' } }, }, bar : { groupWidth : '40%' }, }); print ( chart ); ui.Chart.image.regions Example setup The ui.Chart.image.regions function accepts a list that allows you to control the label and order of band names along the x-axis by assigning numerical values to them.
- Reducer . mean (), scale : 500 , classLabels : [ 'Desert' , 'Forest' , 'Grassland' ], xLabels : wavelengths }) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Ecoregion Spectral Signatures' , hAxis : { title : 'Wavelength (nm)' , titleTextStyle : { italic : false , bold : true }, viewWindow : { min : wavelengths [ 0 ], max : wavelengths [ 6 ]} }, vAxis : { title : 'Reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, colors : [ 'f0af07' , '0f8755' , '76b349' ], pointSize : 0 , lineSize : 5 , curveType : 'function' }); print ( chart ); ui.Chart.image.histogram A histogram of pixel values within a region surrounding Salt Lake City, Utah, USA are displayed for three MODIS surface reflectance bands.
- Reducer . mean (), scale : 500 , xProperty : 'elevation' }) . setSeriesNames ([ 'Jan' , 'Jul' ]) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Average Monthly Colorado Temperature by Elevation' , hAxis : { title : 'Elevation (m)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Temperature (°C)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 4 , dataOpacity : 0.6 , colors : [ '1d6b99' , 'cf513e' ], }); print ( chart ); Combo chart For three ecoregions in a ee.FeatureCollection , the respective mean temperature and precipitation for June are plotted.
- Reducer . mean (), scale : 500 , xProperty : 'label' }) . setSeriesNames ([ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average Monthly Precipitation by Ecoregion' , hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ], isStacked : 'absolute' }); print ( chart ); Relative Convert the previous absolute stacked bar chart to a relative stacked bar chart by changing the isStacked chart option from 'absolute' to 'relative' .

