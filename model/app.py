from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors module
import pandas as pd
import requests
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
nltk.download('stopwords')
nltk.download('punkt')

app = Flask(__name__)
CORS(app)

def temp(arr):
  str = ''
  for i in arr:
    str += i + ' '
  return str

def method(str, str1):
  return str + str1

def tokenizer(str):
  tokens = word_tokenize(str)
  tokens = [word.lower() for word in tokens if word.isalpha() and word.lower() not in stopwords.words('english')]
  preprocessed_text = ' '.join(tokens)
  return preprocessed_text

@app.route('/find_similarity', methods=['POST'])
def find_similarity():
    user_data = request.json['user_data']
    
    data = requests.get('https://mindmates.onrender.com/api/mindmate/get-all')
    data = json.loads(data.text)
    df = pd.DataFrame(data)
    df = df.drop(['password','__v','mates','meeting_url','profile','address','availability','name','anonymous','email'],axis=1)
    
    df['expertise'] = df['expertise'].apply(temp)
    
    df['desc'] = df[['bio','expertise']].apply(lambda df : method(df['bio'], df['expertise']), 1)
    df = df.drop(['bio','expertise'], axis = 1)
    
    df['tokens'] = df['desc'].apply(tokenizer)
    
    df = df.drop('desc', axis = 1)
    
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform(df['tokens'])
    
    user_str = ''
    for i in user_data:
        user_str += i['text']
    
    user_vector = tfidf_vectorizer.transform([user_str])
    similarities = cosine_similarity(user_vector, tfidf_matrix)
    most_similar_index = similarities.argmax()

    return jsonify({'id': df['_id'][most_similar_index]})

# if __name__ == '__main__':
#     app.run(debug=True, port=8888)
