MANAGE_PY = python manage.py
PIPENV = pipenv

run:
	$(MANAGE_PY) runserver

makemig:
	$(MANAGE_PY) makemigrations

mig:
	$(MANAGE_PY) migrate

setup:
	$(PIPENV) install
	$(PIPENV) run $(MANAGE_PY) migrate
	$(PIPENV) run $(MANAGE_PY) createsuperuser

setup.dev:
	$(PIPENV) install --dev
	$(PIPENV) run $(MANAGE_PY) migrate
	$(PIPENV) run $(MANAGE_PY) createsuperuser
