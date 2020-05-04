# Django/React Monorepo template

1. git clone https://github.com/Phl3bas/Django-React-Template.git
1. create virtual environment
   ```python
    $ python3 -m venv venv
    $ source venv/bin/activate
   ```
1. install python dependancies and migrate db
   ```python
    $ pip install -r requirements.txt
    $ python manage.py migrate
   ```
1. install javascript dependancies
   ```python
   $ cd client && npm install
   ```
1. run django server
   ```python
   $ python manage.py runserver
   ```
1. to make front end changes you will need to run npm run dev client folder in a separate tab, this will compile changes to the static folder on the fly which the django server will serve.
   ```python
    $ cd client && npm run dev
   ```
