import os
from django.core.wsgi import get_wsgi_application
# if "ON_HEROKU" in os.environ:
from whitenoise.django import DjangoWhiteNoise

os.environ['DJANGO_SETTINGS_MODULE'] = 'onlinepaint.settings'
application = get_wsgi_application()

# if "ON_HEROKU" in os.environ:
application = DjangoWhiteNoise(application)
