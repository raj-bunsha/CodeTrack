# Generated by Django 3.2.9 on 2021-11-13 03:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_authquery'),
    ]

    operations = [
        migrations.AddField(
            model_name='authquery',
            name='password',
            field=models.CharField(default='quyenha', max_length=128),
            preserve_default=False,
        ),
    ]