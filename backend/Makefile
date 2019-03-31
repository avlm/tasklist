MANAGE_PY = python manage.py
PIPENV = pipenv
PIPENV_RUN = $(PIPENV) run

run:
	$(PIPENV_RUN) $(MANAGE_PY) runserver

makemig:
	$(PIPENV_RUN) $(MANAGE_PY) makemigrations

mig:
	$(PIPENV_RUN) $(MANAGE_PY) migrate

setup:
	$(PIPENV) install
	$(PIPENV_RUN) $(MANAGE_PY) migrate
	$(PIPENV_RUN) $(MANAGE_PY) createsuperuser

setup.dev:
	$(PIPENV) install --dev
	$(PIPENV_RUN) $(MANAGE_PY) migrate
	$(PIPENV_RUN) $(MANAGE_PY) createsuperuser
