# Generated by Django 3.2.4 on 2021-10-17 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tweets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(blank=True, max_length=1000, null=True)),
                ('image', models.FileField(blank=True, null=True, upload_to='images/')),
                ('video', models.FileField(blank=True, null=True, upload_to='videos/')),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'ツイート',
                'verbose_name_plural': 'ツイート',
                'ordering': ['-create_at'],
            },
        ),
    ]
