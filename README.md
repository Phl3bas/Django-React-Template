# Django/React Monorepo template

1. git clone https://github.com/Phl3bas/Django-React-Template.git
1. create virtual environment
   ```
    $ python3 -m venv venv
    $ source venv/bin/activate
   ```
1. install dependancies and migrate db
   ```
    $ pip install -r requirements.txt
    $  manage.py migrate
   ```
1. install javascript dependancies
   ```
   $ cd client && npm install
   ```
1. run django server
   ```
   $  manage.py runserver
   ```
1. to make front end changes you will need to run npm run dev client folder in a separate tab, this will compile changes to the static folder on the fly which the django server will serve.
   ```
    $ cd client && npm run dev
   ```
