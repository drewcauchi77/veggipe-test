# To install something do py -m pip install lxml
# To watch files download nodemon and run the following command: nodemon --exec py sites.py
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen

sitemaps = [
    'https://rainbowplantlife.com/post-sitemap.xml', 
    'https://frommybowl.com/post-sitemap.xml',
    'https://sarahsvegankitchen.com/post-sitemap.xml',
    'https://www.veganricha.com/post-sitemap.xml',
    'https://www.veganricha.com/post-sitemap2.xml',
    'https://thecheaplazyvegan.com/post-sitemap.xml',
    'https://www.noracooks.com/post-sitemap.xml',
    'https://www.connoisseurusveg.com/post-sitemap.xml',
    'https://www.connoisseurusveg.com/post-sitemap2.xml',
    'https://cadryskitchen.com/post-sitemap.xml'
]

sitemap_req = Request('https://rainbowplantlife.com/post-sitemap.xml', headers={'User-Agent': 'Mozilla/5.0'})
sitemap_res = urlopen(sitemap_req).read()
sitemap_soup = BeautifulSoup(sitemap_res, 'xml')
recipe_urls = sitemap_soup.select('url > loc')

recipes = [recipe.text for recipe in recipe_urls]

for recipe in recipes:
    print('Scraping link: ' + recipe)
    recipe_req = Request(recipe, headers={'User-Agent': 'Mozilla/5.0'})
    recipe_res = urlopen(recipe_req).read()
    recipe_soup = BeautifulSoup(recipe_res, 'html.parser')
    print('Link title: ' + recipe_soup.title.string)

    recipe_ingredients = recipe_soup.find_all(class_='wprm-recipe-ingredient-name')
    print('Ingredients')
    for ingredient in recipe_ingredients:
        if ingredient.find('a'):
            print(ingredient.find('a').text)
        else:
            print(ingredient.text)