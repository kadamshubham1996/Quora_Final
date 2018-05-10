from datetime import datetime

from django.db import models


# Create your models here.

class Question(models.Model):
    question_string = models.CharField(max_length=1024)
    user_id = models.CharField(max_length=256)
    created_date = models.DateTimeField(default=datetime.now())


class Answer(models.Model):
    question = models.ForeignKey(Question)
    user_id = models.CharField(max_length=256)
    answer_string = models.CharField(max_length=1024)
    created_date = models.DateTimeField(default=datetime.now())


class Upvote(models.Model):
    answer = models.ForeignKey(Answer)
    user_id = models.CharField(max_length=256)


class Downvote(models.Model):
    answer = models.ForeignKey(Answer)
    user_id = models.CharField(max_length=256)

class Notification(models.Model):
    entitytype=(("answer","answer"),
             ("question","question"),
             ("upvote","upvote"),
             ("downvote","downvote"))
    entitytype = models.CharField(max_length=124, choices=entitytype, default=None)
    byuser_id=models.CharField(max_length=20,default=None)
    entity_id=models.CharField(max_length=25,default=None)
    is_read=models.BooleanField(default=False)
    entity_owner=models.CharField(max_length=120)
