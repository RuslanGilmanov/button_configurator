from flask import Flask, render_template, request, url_for
import csv

app = Flask(__name__)

# render home template
@app.route('/')
@app.route('/index')
def index():

   return render_template("index.html")

# render Standard button template
@app.route('/standardButton')
def standardButton():

   legend_codes = read_legends()

   return render_template("standardButton.html", legends=legend_codes)

# render M20 button template
@app.route('/M20Button')
def M20Button():

   legend_codes = read_legends()

   return render_template("M20Button.html", legends=legend_codes)

# render AB buttons template
@app.route('/hygienePlus')
def hygienePlus():

   legend_codes = read_legends()

   return render_template("hygienePlus.html", legends=legend_codes)

# render Jumbo buttons template
@app.route('/jumboButton')
def jumboButton():

   legend_codes = read_legends()

   return render_template("jumboButton.html", legends=legend_codes)

# render Gallery template
@app.route('/gallery')
def gallery():

   return render_template("gallery.html")

# render Standard Button Gallery template
@app.route('/gallery/standardButtonGallery')
def standardButtonGallery():

   return render_template("standardButtonGallery.html")

# render M20 Button Gallery template
@app.route('/gallery/M20ButtonGallery')
def M20ButtonGallery():
   return render_template("M20ButtonGallery.html")

# render AB Button Gallery template
@app.route('/gallery/hygienePlusGallery')
def hygienePlusGallery():
   return render_template("hygienePlusGallery.html")

# render Jumbo Button Gallery template
@app.route('/gallery/jumboGallery')
def jumboGallery():
   return render_template("jumboGallery.html")

# Read button legends from csv file
def read_legends():

   legend_codes = []

   with open('static/legends/Legend Codes_csv.csv', newline='') as csvfile:
      csv_reader = csv.DictReader(csvfile)
      for row in csv_reader:
         legend_codes.append(row)

   return legend_codes


if __name__ == "__main__":
  app.run(debug=True)