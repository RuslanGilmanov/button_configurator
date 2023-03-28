Elevator Button Configurator Application

    Description: The elevator button configurator

The Elevator Button Configuration Application is a Flask-based web application that allows company empoyees and customers to configure elevator buttons from a vast variety of options and generate corresponding stock code.

Usage
The Elevator Button Configuration Application has the following routes:

/: Home page that displays the main menu and a choise button types.

/standardButton: Page that displays the configuration options for standard elevator buttons.

/M20Button: Page that displays the configuration options for M20 elevator buttons.

/hygienePlus: Page that displays the configuration options for Anti-bacterial and Ani-Microbial elevator buttons.

/jumboButton: Page that displays the configuration options for Jumbo elevator buttons.

/gallery: Page that displays a gallery of all the available elevator button options.

/gallery/standardButtonGallery: Page that displays a gallery of standard elevator button options.

/gallery/M20ButtonGallery: Page that displays a gallery of M20 elevator button options.

/gallery/hygienePlusGallery: Page that displays a gallery of Hygiene plus elevator button options.

/gallery/jumboGallery: Page that displays a gallery of jumbo elevator button options.

When a user selects the desired configuration options, the application generates a corresponding stock code that can be used to order the buttons.


File Structure of the application:

project

├── app.py

├── requirements.txt

├── static/

│   ├── css/

│   │   └── style.css

│   ├── js/

│   │   ├── hygienePlusButton.js

│   │   ├── jumboButton.js

│   │   ├── M20Button.js

│   │   └── standardButton.js

│   ├── images/

│   │   └── gallery/

│   └── legends/

│       └── Legend Codes_csv.csv

└── templates/

    ├── gallery.html
		
    ├── hygienePlus.html
		
    ├── hygienePlusGallery.html
		
    ├── index.html
		
    ├── jumboButton.html
		
    ├── jumboGallery.html
		
    ├── M20Button.html
		
    ├── M20ButtonGallery.html
		
    ├── standardButton.html
		
    └── standardButtonGallery.html
		

app.py: Python file that contains the Flask application.

requirements.txt: Text file that lists all the required Python packages that are necessary to run the application.

static/: Directory that contains all the static files (JavaScript, CSS, images, and button legends).

templates/: Directory that contains all the HTML templates.

Credits
The Elevator Button Configuration Application was created by Ruslan Gilmanov. The application uses the following third-party libraries:

Flask: A micro web framework.
Bootstrap: A free and open-source CSS framework for front-end web development.
