from django.urls import path
from .views import TopGrossMoviesView, TopVotedMoviesView, TopRatedMoviesView

urlpatterns = [
    path('top-gross/', TopGrossMoviesView.as_view(), name='top-gross'),
    path('top-voted/', TopVotedMoviesView.as_view(), name='top-voted'),
    path('top-rated/', TopRatedMoviesView.as_view(), name='top-rated'),
]
