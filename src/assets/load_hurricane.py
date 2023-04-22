import re
import requests
from bs4 import BeautifulSoup
import os
import zipfile

# Set the URL of the webpage to scrape
url = "https://www.nhc.noaa.gov/gis/archive_forecast_results.php?id=al05&year=2019&name=Hurricane%20DORIAN"

# Send a GET request to the URL and save the response object
response = requests.get(url)

# Parse the HTML of the page using BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

pattern = re.compile(r'.zip')
links = soup.find_all('a', href=pattern)[:19]
print(links)
# Create a new directory to store the shapefiles
os.mkdir("shapefiles")

# Loop through the links and download any zip files
for link in links:
    print(link)
    href = link.get("href")
    if href.endswith(".zip"):
        # Send a GET request to the URL of the file and save the response object
        file_response = requests.get(href)

        # Check that the response status code is 200 (OK)
        if file_response.status_code == 200:
            # Get the filename from the URL and save the file to disk
            filename = os.path.basename(href)
            with open(filename, "wb") as f:
                print(filename)
                f.write(file_response.content)
                
            # Extract the shapefiles from the zip file
            with zipfile.ZipFile(filename, "r") as zip_ref:
                for member in zip_ref.namelist():
                    if member.endswith(".shp"):
                        # Extract the shapefile to the new directory
                        zip_ref.extract(member, "shapefiles")
