from flask import Flask
from flask import jsonify, request
from flask import redirect, url_for, render_template
import pandas as pd
import pickle
import pymongo

# # # load model
# # model = pickle.load(open('model.pkl','rb'))

# app
app = Flask(__name__)

@app.route('/')
def main():
    print("in welcome")
    return render_template('melonIndex.html')

# routes
@app.route('/predict', methods=['POST'])
def predict():
    # get data
    print('got prediction call')
    print(request)
    print(request.form['spots'])
    print(request.form['pitches'])
    # print(request.form['probabilities'])
    return "success"

    # # convert data into dataframe
    # data.update((x, [y]) for x, y in data.items())
    # data_df = pd.DataFrame.from_dict(data)

    # # predictions
    # result = model.predict(data_df)

    # # send back to browser
    # output = {'results': int(result[0])}

    # # return data
    # return jsonify(results=output)

@app.route('/submitting', methods=['POST'])
def submitResults():
    print('submitting presently')
    print(request, request.data, request.values, request.files)
    return "success"

if __name__ == '__main__':
    app = create_app()

    config = configparser.ConfigParser()
    config.read(os.path.abspath(os.path.join(".ini")))
    app.config['DEBUG'] = True
    app.config['MONGO_URI'] = config['PROD']['DB_URI']
    app.run(port = 5000)