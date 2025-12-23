import geopandas as gpd
import folium

# Carga tu shapefile
gdf = gpd.read_file('ZONAS_VALIDAS.shp')  

# Crea el mapa centrado en el centro del shapefile
centro_lat = gdf.centroid.y.mean()
centro_lon = gdf.centroid.x.mean()
m = folium.Map(location=[centro_lat, centro_lon], zoom_start=7) 

# Agrega el shapefile al mapa
folium.GeoJson(gdf, name="Zonas Válidas", style_function=lambda feature: {'fillColor': 'green', 'color': 'black', 'weight': 1, 'fillOpacity': 0.5}).add_to(m)

# Agrega controles
folium.LayerControl().add_to(m)

# Guarda el mapa como HTML en la carpeta correcta
m.save('zonas_validas.html')
print("Mapa generado en res/pract4/zonas_validas.html")
