import pandas as pd
from django.core.management.base import BaseCommand
from movies.models import Movie

class Command(BaseCommand):
    help = 'Load movies data from Excel file'

    def handle(self, *args, **kwargs):
        file_path = 'movies.xlsx'
        data = pd.read_excel(file_path)
        for _, row in data.iterrows():
            Movie.objects.create(
                title=row['MOVIES'],
                year=row['YEAR'],
                genre=row['GENRE'],
                rating=row['RATING'],
                one_line=row['ONE-LINE'],
                stars=row['STARS'],
                votes=row['VOTES'],
                runtime=row['RunTime'],
                gross=row['Gross'],
            )
