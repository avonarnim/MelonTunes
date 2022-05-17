from flask import Blueprint, request, jsonify
from flask import redirect, url_for, render_template
import pymongo
import os
import configparser

api = Blueprint('api', 'api', url_prefix='/')

config = configparser.ConfigParser()
config.read(os.path.abspath(os.path.join(".ini")))

client = pymongo.MongoClient(config['PROD']['DB_URI'])
db = client['melon-tunes']
collection = db['user-data']


@api.route('/')
def main():
    print("in welcome")
    return render_template('melonIndex.html')

# routes
@api.route('/predict', methods=['POST'])
def predict():
    # get data
    print('got prediction call...')
    data = request.get_json()
    spots = data['spots']
    pitches = [data['pitches'][str(i)] for i in range(len(data['pitches']))]
    voicedProbabilities = [data['voicedProbabilities'][str(i)] for i in range(len(data['voicedProbabilities']))]


    result = collection.insert_one({
        'spots': spots,
        'pitches': pitches,
        'voicedProbabilities': voicedProbabilities
    })
    print(result.inserted_id)
    # spots = data.spots
    # pitches = data.pitches
    # voicedProbabilities = data.voicedProbabilities
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

@api.route('/submitting', methods=['POST'])
def submitResults():
    print('submitting presently')
    print(request, request.data, request.values, request.files)
    return "success"