import json
rows = [
    {
        'row_id':'2436de66f69bc441c644b08c45dd2b8287b324f6a0c58fa7d4722200dddcd8b3',
        'published_at':'2014-02-04',
        'features':['MODIS/MOD08_M3_051'],
    },
    {
        'row_id':'c871b8244bf78f33d6d2667c4052d0800a9d536fbaf3345d5d1beaecdcfdf271',
        'published_at':'2014-01-21',
        'features':['MODIS/MOD11A1','MODIS/MYD11A1'],
    },
    {
        'row_id':'a309226520d847a00ea86da544bc7d2c68f9155922df1bd362d2937b75b43dc0',
        'published_at':'2013-08-13',
        'features':['MODIS/MCD43B3','MODIS/MOD09A1','MODIS/MOD13Q1','MODIS/MOD44W/MOD44W_005_2000_02_24','MODIS/MYD09GA','MODIS/MYD09GA_BAI','MODIS/MYD09GA_EVI','MODIS/MYD09GA_NDSI','MODIS/MYD09GA_NDVI','MODIS/MYD09GA_NDWI','MODIS/MYD09GQ','MODIS/MYD13Q1'],
    },
    {
        'row_id':'abd8444c5550953ea661e03a287bc6f887b7356e66fbbb65ffe047ef2fab6569',
        'published_at':'2013-07-23',
        'features':['LEDAPS/L5_L1T_SR','LEDAPS/L7_L1T_SR'],
    },
    {
        'row_id':'877a36571e60cc589b4ab2c7d17537abd34c8e1ff1543b49ca93e93c2670aaf4',
        'published_at':'2013-07-16',
        'features':['LANDSAT/LC8','LANDSAT/LC8_L1T','LANDSAT/LC8_L1T_32DAY_BAI','LANDSAT/LC8_L1T_32DAY_EVI','LANDSAT/LC8_L1T_32DAY_NBRT','LANDSAT/LC8_L1T_32DAY_NDSI','LANDSAT/LC8_L1T_32DAY_NDVI','LANDSAT/LC8_L1T_32DAY_NDWI','LANDSAT/LC8_L1T_32DAY_RAW','LANDSAT/LC8_L1T_32DAY_TOA','LANDSAT/LC8_L1T_8DAY_BAI','LANDSAT/LC8_L1T_8DAY_EVI','LANDSAT/LC8_L1T_8DAY_NBRT','LANDSAT/LC8_L1T_8DAY_NDSI','LANDSAT/LC8_L1T_8DAY_NDVI','LANDSAT/LC8_L1T_8DAY_NDWI','LANDSAT/LC8_L1T_8DAY_RAW','LANDSAT/LC8_L1T_8DAY_TOA','LANDSAT/LC8_L1T_ANNUAL_BAI','LANDSAT/LC8_L1T_ANNUAL_EVI','LANDSAT/LC8_L1T_ANNUAL_GREENEST_TOA','LANDSAT/LC8_L1T_ANNUAL_NBRT','LANDSAT/LC8_L1T_ANNUAL_NDSI','LANDSAT/LC8_L1T_ANNUAL_NDVI','LANDSAT/LC8_L1T_ANNUAL_NDWI','LANDSAT/LC8_L1T_ANNUAL_RAW','LANDSAT/LC8_L1T_ANNUAL_TOA','LANDSAT/LC8_L1T_TOA'],
    },
    {
        'row_id':'97d148d693c7f1e1844a363340a1118b1ed8b199369a02bb39f11e1941b08b6c',
        'published_at':'2013-07-02',
        'features':['USGS/GTOPO30'],
    },
    {
        'row_id':'4be9015fb21d6efbe439b76415f7bc4a0aa3099e8bdd661ac464e0e22722725d',
        'published_at':'2013-04-09',
        'features':['USGS/NLCD/NLCD2001','USGS/NLCD/NLCD2006','USGS/NLCD1992'],
    },
    {
        'row_id':'f93ff94428529ef0556a0baa9ee018c66d162a65e82b0417347122d75dbb7eb1',
        'published_at':'2013-02-26',
        'features':['LANDSAT/L4','LANDSAT/L4_L1T','LANDSAT/L4_L1T_32DAY_BAI','LANDSAT/L4_L1T_32DAY_EVI','LANDSAT/L4_L1T_32DAY_NBRT','LANDSAT/L4_L1T_32DAY_NDSI','LANDSAT/L4_L1T_32DAY_NDVI','LANDSAT/L4_L1T_32DAY_NDWI','LANDSAT/L4_L1T_32DAY_RAW','LANDSAT/L4_L1T_32DAY_TOA','LANDSAT/L4_L1T_8DAY_BAI','LANDSAT/L4_L1T_8DAY_EVI','LANDSAT/L4_L1T_8DAY_NBRT','LANDSAT/L4_L1T_8DAY_NDSI','LANDSAT/L4_L1T_8DAY_NDVI','LANDSAT/L4_L1T_8DAY_NDWI','LANDSAT/L4_L1T_8DAY_RAW','LANDSAT/L4_L1T_8DAY_TOA','LANDSAT/L4_L1T_ANNUAL_BAI','LANDSAT/L4_L1T_ANNUAL_EVI','LANDSAT/L4_L1T_ANNUAL_GREENEST_TOA','LANDSAT/L4_L1T_ANNUAL_NBRT','LANDSAT/L4_L1T_ANNUAL_NDSI','LANDSAT/L4_L1T_ANNUAL_NDVI','LANDSAT/L4_L1T_ANNUAL_NDWI','LANDSAT/L4_L1T_ANNUAL_RAW','LANDSAT/L4_L1T_ANNUAL_TOA','LANDSAT/L4_L1T_TOA'],
    },
    {
        'row_id':'db0342f36ac39fb4643dffebedb634e6d0ad93af939b9689685be3ff8fb725e0',
        'published_at':'2013-02-12',
        'features':['LANDSAT/LT4','LANDSAT/LT4_L1T','LANDSAT/LT4_L1T_32DAY_BAI','LANDSAT/LT4_L1T_32DAY_EVI','LANDSAT/LT4_L1T_32DAY_NBRT','LANDSAT/LT4_L1T_32DAY_NDSI','LANDSAT/LT4_L1T_32DAY_NDVI','LANDSAT/LT4_L1T_32DAY_NDWI','LANDSAT/LT4_L1T_32DAY_RAW','LANDSAT/LT4_L1T_32DAY_TOA','LANDSAT/LT4_L1T_8DAY_BAI','LANDSAT/LT4_L1T_8DAY_EVI','LANDSAT/LT4_L1T_8DAY_NBRT','LANDSAT/LT4_L1T_8DAY_NDSI','LANDSAT/LT4_L1T_8DAY_NDVI','LANDSAT/LT4_L1T_8DAY_NDWI','LANDSAT/LT4_L1T_8DAY_RAW','LANDSAT/LT4_L1T_8DAY_TOA','LANDSAT/LT4_L1T_ANNUAL_BAI','LANDSAT/LT4_L1T_ANNUAL_EVI','LANDSAT/LT4_L1T_ANNUAL_GREENEST_TOA','LANDSAT/LT4_L1T_ANNUAL_NBRT','LANDSAT/LT4_L1T_ANNUAL_NDSI','LANDSAT/LT4_L1T_ANNUAL_NDVI','LANDSAT/LT4_L1T_ANNUAL_NDWI','LANDSAT/LT4_L1T_ANNUAL_RAW','LANDSAT/LT4_L1T_ANNUAL_TOA','LANDSAT/LT4_L1T_TOA'],
    },
    {
        'row_id':'b5ee2dda052fcc646ee9768e0d696eea7411ac71b8926e2f3f2a565e9f11e765',
        'published_at':'2013-01-22',
        'features':['MODIS/MOD44B'],
    },
    {
        'row_id':'e5e97b98b5717e5b3a3ac632102ddd42f107475877f689ad45e30dbd122cadbe',
        'published_at':'2012-12-04',
        'features':['LANDSAT/L5_L1T_TOA','LANDSAT/L7_L1T_TOA'],
    },
    {
        'row_id':'143d0c9588c289b1ecefc74cc2926dea1c3efa8726db54bd33f325781ed25afb',
        'published_at':'2012-11-27',
        'features':['USGS/NED'],
    },
]

summary_map = {
    'MODIS/MOD08_M3_051':'A MODIS monthly atmospheric data product.',
    'MODIS/MOD11A1':'A MODIS daily land surface temperature and emissivity product.',
    'MODIS/MYD11A1':'A MODIS Aqua daily land surface temperature and emissivity product.',
    'MODIS/MCD43B3':'A MODIS albedo product derived from BRDF-adjusted reflectance.',
    'MODIS/MOD09A1':'A MODIS 8-day surface reflectance composite.',
    'MODIS/MOD13Q1':'A MODIS vegetation index product.',
    'MODIS/MOD44W/MOD44W_005_2000_02_24':'A MODIS land water mask derived from MODIS and SRTM.',
    'MODIS/MYD09GA':'A MODIS Aqua daily surface reflectance product.',
    'MODIS/MYD09GA_BAI':'A MODIS Aqua burn area index layer derived from daily surface reflectance.',
    'MODIS/MYD09GA_EVI':'A MODIS Aqua enhanced vegetation index layer derived from daily surface reflectance.',
    'MODIS/MYD09GA_NDSI':'A MODIS Aqua normalized difference snow index layer derived from daily surface reflectance.',
    'MODIS/MYD09GA_NDVI':'A MODIS Aqua normalized difference vegetation index layer derived from daily surface reflectance.',
    'MODIS/MYD09GA_NDWI':'A MODIS Aqua normalized difference water index layer derived from daily surface reflectance.',
    'MODIS/MYD09GQ':'A MODIS Aqua daily surface reflectance product for bands 1 and 2.',
    'MODIS/MYD13Q1':'A MODIS Aqua vegetation index product.',
    'LEDAPS/L5_L1T_SR':'A Landsat 5 LEDAPS surface reflectance product.',
    'LEDAPS/L7_L1T_SR':'A Landsat 7 LEDAPS surface reflectance product.',
    'LANDSAT/LC8':'A Landsat 8 image collection.',
    'LANDSAT/LC8_L1T':'A Landsat 8 Level-1 terrain-corrected image collection.',
    'USGS/GTOPO30':'A global 30 arc-second elevation dataset.',
    'USGS/NLCD/NLCD2001':'The 2001 National Land Cover Database land cover dataset.',
    'USGS/NLCD/NLCD2006':'The 2006 National Land Cover Database land cover dataset.',
    'USGS/NLCD1992':'The 1992 National Land Cover Database land cover dataset.',
    'LANDSAT/L4':'A Landsat 4 image collection.',
    'LANDSAT/L4_L1T':'A Landsat 4 Level-1 terrain-corrected image collection.',
    'LANDSAT/LT4':'A Landsat 4 image collection.',
    'LANDSAT/LT4_L1T':'A Landsat 4 Level-1 terrain-corrected image collection.',
    'MODIS/MOD44B':'A MODIS vegetation continuous fields product.',
    'LANDSAT/L5_L1T_TOA':'A Landsat 5 Level-1 terrain-corrected top-of-atmosphere reflectance collection.',
    'LANDSAT/L7_L1T_TOA':'A Landsat 7 Level-1 terrain-corrected top-of-atmosphere reflectance collection.',
    'USGS/NED':'A USGS national elevation dataset.',
}

suffix_map = {
    'BAI':'burn area index',
    'EVI':'enhanced vegetation index',
    'NBRT':'normalized burn ratio',
    'NDSI':'normalized difference snow index',
    'NDVI':'normalized difference vegetation index',
    'NDWI':'normalized difference water index',
    'RAW':'raw composite',
    'TOA':'top-of-atmosphere reflectance composite',
    'GREENEST_TOA':'greenest-pixel top-of-atmosphere composite',
}

def summary(feature):
    if feature in summary_map:
        return summary_map[feature]
    if '/LC8_L1T_' in feature or '/L4_L1T_' in feature or '/LT4_L1T_' in feature:
        fam = 'Landsat 8' if '/LC8' in feature else 'Landsat 4'
        period = 'Level-1 terrain-corrected'
        if '_32DAY_' in feature:
            period = '32-day'
        elif '_8DAY_' in feature:
            period = '8-day'
        elif '_ANNUAL_' in feature:
            period = 'annual'
        for key in ['GREENEST_TOA','BAI','EVI','NBRT','NDSI','NDVI','NDWI','RAW','TOA']:
            if feature.endswith('_' + key):
                return f'A {fam} {period} {suffix_map[key]}.'
        return f'A {fam} {period} collection.'
    return 'A Google Earth Engine data catalog feature.'

out = []
for row in rows:
    for feat in row['features']:
        out.append({
            'row_id': row['row_id'],
            'feature_name': feat,
            'feature_summary': summary(feat),
            'event_type': 'FEATURE',
            'deprecation_date': '',
        })

print(json.dumps(out, ensure_ascii=False))
