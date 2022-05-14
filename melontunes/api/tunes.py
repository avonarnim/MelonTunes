from flask import Blueprint, request, jsonify
from melontunes.tb import add_entry, update_with_results
from flask_cors import CORS
from melontunes.api.utils import expect

melons_api_v1 = Blueprint('melons_api_v1', 'melons_api_v1', url_prefix='/api/v1/movies')
CORS(melons_api_v1)

@melons_api_v1.route('/predict', methods=['POST'])
def api_add_entry():
    post_data = request.get_json()
    try:
        spots = expect(post_data.get('spots'), bool, 'spots')
        pitches = expect(post_data.get('pitches'), list, 'pitches')
        id = add_entry(spots, pitches)
        return jsonify({
            "id": id
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@melons_api_v1.route('/submit', methods=['POST'])
def api_update_with_results():
    post_data = request.get_json()
    try:
        id = expect(post_data.get('id'))
        sweetness = expect(post_data.get('sweetness'), bool, 'spots')
        crispness = expect(post_data.get('crispness'), list, 'pitches')
        id = update_with_results(id, sweetness, crispness)
        return jsonify({
            "id": id
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400