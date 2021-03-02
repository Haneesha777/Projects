import requests
from bs4 import BeautifulSoup
url='http://www.imdb.com/search/title?release_date=2017&sort=num_votes,desc&page=1'
response=requests.get(url)
print(response.text)

html_soup=BeautifulSoup(response.text,'html.parser')
movie_containers = html_soup.find_all('div', class_ = 'lister-item mode-advanced')
print(type(movie_containers))
print(len(movie_containers))


names = []
years = []
imdb_ratings = []
metascores = []
votes = []

for container in movie_containers:
# If the movie has Metascore, then extract:
    if container.find('div', class_ = 'ratings-metascore') is not None:
# The name
        name = container.h3.a.text
        names.append(name)
# The year
        year = container.h3.find('span', class_ = 'lister-item-year').text
        year=year.replace("(I)","")
        year=year.strip(" ")
        year=year.strip("(")
        year=year.strip(")")
        years.append(year)
# The IMDB rating
        imdb = float(container.strong.text)
        imdb_ratings.append(imdb)
# The Metascore
        m_score = container.find('span', class_ = 'metascore').text
        metascores.append(int(m_score))
# The number of votes
        vote = container.find('span', attrs = {'name':'nv'})['data-value']
        votes.append(int(vote))
    
for i in range(0,len(names)):
    data="{:<50} |{:^4}| {:<4} |{:<3} |{:<10}".format(names[i],years[i],imdb_ratings[i],metascores[i],votes[i])
    print(data)