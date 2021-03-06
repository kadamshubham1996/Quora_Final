# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-05-05 02:14
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed_models', '0009_auto_20180429_0015'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entitytype', models.CharField(choices=[(b'answer', b'answer'), (b'question', b'question'), (b'upvote', b'upvote'), (b'downvote', b'downvote')], default=None, max_length=124)),
                ('byuser_id', models.CharField(default=None, max_length=20)),
                ('entity_id', models.CharField(default=None, max_length=25)),
                ('is_read', models.BooleanField(default=False)),
                ('entity_owner', models.CharField(max_length=120)),
            ],
        ),
        migrations.AlterField(
            model_name='answer',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2018, 5, 5, 2, 14, 22, 674883)),
        ),
        migrations.AlterField(
            model_name='question',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2018, 5, 5, 2, 14, 22, 674066)),
        ),
    ]
