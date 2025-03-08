from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load your pre-trained machine learning model
model = joblib.load('solar_irradiance_model.pkl')
scaler = joblib.load('scaler.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    # Assuming the input parameters are in the JSON body
    parameters = data['parameters']
    
    # Print parameters to the console
    print("Received parameters:", parameters)
    
    # Convert parameters to numpy array and reshape for the model
    input_data = np.array(parameters, dtype=float).reshape(1, -1)
    new_data_scaled = scaler.transform(input_data)
    # Make prediction using the model
    prediction = model.predict(new_data_scaled)
    
    # Return the prediction as a JSON response
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(host='localhost', port=3000)